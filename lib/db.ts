import { supabase } from "./supabase";
import type { DepartmentData } from "@/lib/types";
import type { SemesterPapers } from "@/lib/types";
import type { Scholarship } from "@/lib/types";
import type { DeptKey } from "@/lib/types";

export async function getContacts() {
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
  return data;
}

export async function getNotes(department: string) {
  const { data, error } = await supabase
    .from("notes")
    .select("id, semester, subject_name")
    .eq("department", department)
    .order("semester", { ascending: true })
    .order("subject_name", { ascending: true });

  if (error) {
    console.error(`Error fetching notes for ${department}:`, error);
    return [];
  }

  // Format into { id: number, items: { label: string, href: string }[] }
  const semestersMap = new Map<number, { label: string; href: string }[]>();
  data.forEach((note) => {
    if (!semestersMap.has(note.semester)) {
      semestersMap.set(note.semester, []);
    }
    semestersMap.get(note.semester)!.push({
      label: note.subject_name,
      href: `/api/view?type=note&id=${note.id}`,
    });
  });

  const formattedNotes = Array.from(semestersMap.entries())
    .map(([id, items]) => ({ id, items }))
    .sort((a, b) => a.id - b.id);

  return formattedNotes;
}

export async function getQuestionPapers(department: string) {
  const { data, error } = await supabase
    .from("question_papers")
    .select("id, semester, subject_name, exam_type")
    .eq("department", department)
    .order("semester", { ascending: true })
    .order("subject_name", { ascending: true })
    .order("exam_type", { ascending: true });

  if (error) {
    console.error(`Error fetching question papers for ${department}:`, error);
    return {};
  }

  // Format into Record<string, SemesterPapers>
  const papersMap: Record<string, any> = {};
  data.forEach((paper) => {
    const key = `sem${paper.semester}`;
    if (!papersMap[key]) {
      papersMap[key] = { id: key, subjects: [] };
    }

    let subject = papersMap[key].subjects.find((s: any) => s.name === paper.subject_name);
    if (!subject) {
      subject = { name: paper.subject_name, papers: [] };
      papersMap[key].subjects.push(subject);
    }

    subject.papers.push({
      label: paper.exam_type,
      href: `/api/view?type=paper&id=${paper.id}`,
    });
  });

  return papersMap;
}

export async function getScholarships(): Promise<Scholarship[]> {
  const { data, error } = await supabase
    .from("scholarships")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching scholarships:", error);
    return [];
  }

  return data.map((item) => ({
    id: item.id.toString(),
    title: item.title,
    amount: item.amount,
    type: item.type,
    source: item.source,
    lastDate: item.deadline_date,
    description: item.description,
    requirements: item.requirements,
    applyLink: `/api/view?type=scholarship&id=${item.id}&field=apply`,
    infoLink: item.info_link ? `/api/view?type=scholarship&id=${item.id}&field=info` : undefined,
  }));
}

export async function getMinorCourses(): Promise<Record<string, DepartmentData>> {
  const { data, error } = await supabase
    .from("minor_courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching minor courses:", error);
    return {};
  }

  const minorCourses: Record<string, DepartmentData> = {};

  data.forEach((course) => {
    if (!minorCourses[course.department]) {
      minorCourses[course.department] = { minors: [] };
    }

    if (course.is_minor_list !== false && course.course_name) {
      if (!minorCourses[course.department].minors) {
        minorCourses[course.department].minors = [];
      }
      minorCourses[course.department].minors!.push({
        label: course.course_name,
        value: course.course_name.toLowerCase().replace(/ /g, "-"),
        driveLink: `/api/view?type=minor&id=${course.id}`,
        info: course.description || "",
      });
    } else {
      minorCourses[course.department].label = course.course_name;
      minorCourses[course.department].driveLink = `/api/view?type=minor&id=${course.id}`;
    }
  });

  return minorCourses;
}

export async function getSyllabusCurriculum() {
  const { data, error } = await supabase
    .from("syllabus_curriculum")
    .select("id, department, type, semester")
    .order("semester", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching syllabus:", error);
    return { curriculum: {}, syllabus: {} };
  }

  const driveLinks: { curriculum: Record<string, string>, syllabus: Record<string, Record<number, string>> } = {
    curriculum: {},
    syllabus: {}
  };

  data.forEach((item) => {
    const maskedUrl = `/api/view?type=syllabus&id=${item.id}`;
    if (item.type === "curriculum") {
      driveLinks.curriculum[item.department] = maskedUrl;
    } else if (item.type === "syllabus") {
      if (!driveLinks.syllabus[item.department]) {
        driveLinks.syllabus[item.department] = {};
      }
      driveLinks.syllabus[item.department][item.semester] = maskedUrl;
    }
  });

  return driveLinks;
}

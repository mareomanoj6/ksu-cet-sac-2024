import { supabase } from "./supabase";
import type { DepartmentData } from "@/lib/types";
import type { SemesterPapers } from "@/lib/types";
import type { Scholarship } from "@/lib/types";
import type { DeptKey } from "@/lib/types";

export async function getContacts() {
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
  return data;
}

export async function getNotes(department: string) {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("department", department)
    .order("semester", { ascending: true });

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
      href: note.link_url,
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
    .select("*")
    .eq("department", department);

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
      href: paper.link_url,
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
    applyLink: item.apply_link,
    infoLink: item.info_link,
  }));
}

export async function getMinorCourses(): Promise<Record<string, DepartmentData>> {
  const { data, error } = await supabase
    .from("minor_courses")
    .select("*");

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
        driveLink: course.syllabus_link,
        info: course.description || "",
      });
    } else {
      minorCourses[course.department].label = course.course_name;
      minorCourses[course.department].driveLink = course.syllabus_link;
    }
  });

  return minorCourses;
}

export async function getSyllabusCurriculum() {
  const { data, error } = await supabase
    .from("syllabus_curriculum")
    .select("*");

  if (error) {
    console.error("Error fetching syllabus:", error);
    return { curriculum: {}, syllabus: {} };
  }

  const driveLinks: { curriculum: Record<string, string>, syllabus: Record<string, Record<number, string>> } = {
    curriculum: {},
    syllabus: {}
  };

  data.forEach((item) => {
    if (item.type === "curriculum") {
      driveLinks.curriculum[item.department] = item.link_url;
    } else if (item.type === "syllabus") {
      if (!driveLinks.syllabus[item.department]) {
        driveLinks.syllabus[item.department] = {};
      }
      driveLinks.syllabus[item.department][item.semester] = item.link_url;
    }
  });

  return driveLinks;
}

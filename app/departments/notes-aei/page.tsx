import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { getNotes } from "@/lib/db";

export const metadata: Metadata = {
  title: "Applied Electronics and Instrumentation Notes - KSU Student Assist Cell",
  description:
    "Applied Electronics and Instrumentation Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default async function NotesAEIPage() {
  const notes = await getNotes("aei");

  return (
    <DepartmentNotesLayout
      title="Applied Electronics and Instrumentation Notes"
      description="Comprehensive study materials for AEI students, organized by semester."
      semesters={notes}
    />
  );
}

import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { getNotes } from "@/lib/db";

export const metadata: Metadata = {
  title: "Industrial Engineering Notes - KSU Student Assist Cell",
  description:
    "Industrial Engineering Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default async function NotesIEPage() {
  const notes = await getNotes("ie");

  return (
    <DepartmentNotesLayout
      title="Industrial Engineering Notes"
      description="Comprehensive study materials for IE students, organized by semester."
      semesters={notes}
    />
  );
}

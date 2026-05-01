import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { getNotes } from "@/lib/db";

export const metadata: Metadata = {
  title: "Civil Engineering Notes - KSU Student Assist Cell",
  description:
    "Civil Engineering Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default async function NotesCEPage() {
  const notes = await getNotes("ce");

  return (
    <DepartmentNotesLayout
      title="Civil Engineering Notes"
      description="Comprehensive study materials for Civil Engineering students, organized by semester."
      semesters={notes}
    />
  );
}

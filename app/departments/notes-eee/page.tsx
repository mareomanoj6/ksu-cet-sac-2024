import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { getNotes } from "@/lib/db";

export const metadata: Metadata = {
  title: "Electrical and Electronics Engineering Notes - KSU Student Assist Cell",
  description:
    "Electrical and Electronics Engineering Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default async function NotesEEEPage() {
  const notes = await getNotes("eee");

  return (
    <DepartmentNotesLayout
      title="Electrical and Electronics Engineering Notes"
      description="Comprehensive study materials for EEE students, organized by semester."
      semesters={notes}
    />
  );
}

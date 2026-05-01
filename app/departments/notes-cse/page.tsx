import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { getNotes } from "@/lib/db";

export const metadata: Metadata = {
  title: "Computer Science and Engineering Notes - KSU Student Assist Cell",
  description:
    "Computer Science and Engineering Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default async function NotesCSEPage() {
  const notes = await getNotes("cse");

  return (
    <DepartmentNotesLayout
      title="Computer Science and Engineering Notes"
      description="Comprehensive study materials for CSE students, organized by semester."
      semesters={notes}
    />
  );
}

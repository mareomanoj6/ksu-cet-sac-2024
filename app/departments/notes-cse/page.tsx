import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { NOTES_CSE } from "@/data/notes";

export const metadata: Metadata = {
  title: "Computer Science and Engineering Notes - KSU Student Assist Cell",
  description:
    "Computer Science and Engineering Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default function NotesCSEPage() {
  return (
    <DepartmentNotesLayout
      title="Computer Science and Engineering Notes"
      description="Comprehensive study materials for CSE students, organized by semester."
      semesters={NOTES_CSE}
    />
  );
}

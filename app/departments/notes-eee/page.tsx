import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { NOTES_EEE } from "@/data/notes";

export const metadata: Metadata = {
  title: "Electrical and Electronics Engineering Notes - KSU Student Assist Cell",
  description:
    "Electrical and Electronics Engineering Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default function NotesEEEPage() {
  return (
    <DepartmentNotesLayout
      title="Electrical and Electronics Engineering Notes"
      description="Comprehensive study materials for EEE students, organized by semester."
      semesters={NOTES_EEE}
    />
  );
}

import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { NOTES_CE } from "@/data/notes";

export const metadata: Metadata = {
  title: "Civil Engineering Notes - KSU Student Assist Cell",
  description:
    "Civil Engineering Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default function NotesCEPage() {
  return (
    <DepartmentNotesLayout
      title="Civil Engineering Notes"
      description="Comprehensive study materials for Civil Engineering students, organized by semester."
      semesters={NOTES_CE}
    />
  );
}

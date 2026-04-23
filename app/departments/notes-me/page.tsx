import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { NOTES_ME } from "@/data/notes";

export const metadata: Metadata = {
  title: "Mechanical Engineering Notes - KSU Student Assist Cell",
  description:
    "Mechanical Engineering Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default function NotesMEPage() {
  return (
    <DepartmentNotesLayout
      title="Mechanical Engineering Notes"
      description="Comprehensive study materials for ME students, organized by semester."
      semesters={NOTES_ME}
    />
  );
}

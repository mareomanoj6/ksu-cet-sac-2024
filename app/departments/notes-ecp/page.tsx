import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { NOTES_ECP } from "@/data/notes";

export const metadata: Metadata = {
  title: "Electrical and Computer Engineering Notes - KSU Student Assist Cell",
  description:
    "Electrical and Computer Engineering Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default function NotesECPPage() {
  return (
    <DepartmentNotesLayout
      title="Electrical and Computer Engineering Notes"
      description="Comprehensive study materials for ECP students, organized by semester."
      semesters={NOTES_ECP}
    />
  );
}

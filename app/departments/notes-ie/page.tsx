import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { NOTES_IE } from "@/data/notes";

export const metadata: Metadata = {
  title: "Industrial Engineering Notes - KSU Student Assist Cell",
  description:
    "Industrial Engineering Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default function NotesIEPage() {
  return (
    <DepartmentNotesLayout
      title="Industrial Engineering Notes"
      description="Comprehensive study materials for IE students, organized by semester."
      semesters={NOTES_IE}
    />
  );
}

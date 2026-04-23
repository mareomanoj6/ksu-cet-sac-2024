import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { NOTES_AEI } from "@/data/notes";

export const metadata: Metadata = {
  title: "Applied Electronics and Instrumentation Notes - KSU Student Assist Cell",
  description:
    "Applied Electronics and Instrumentation Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default function NotesAEIPage() {
  return (
    <DepartmentNotesLayout
      title="Applied Electronics and Instrumentation Notes"
      description="Comprehensive study materials for AEI students, organized by semester."
      semesters={NOTES_AEI}
    />
  );
}

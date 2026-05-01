import type { Metadata } from "next";
import { DepartmentNotesLayout } from "@/components/DepartmentNotesLayout";
import { getNotes } from "@/lib/db";

export const metadata: Metadata = {
  title: "Electronics and Communication Engineering Notes - KSU Student Assist Cell",
  description:
    "Electronics and Communication Engineering Notes for KSU CET students. Comprehensive study materials organized by semester.",
};

export default async function NotesECEPage() {
  const notes = await getNotes("ece");

  return (
    <DepartmentNotesLayout
      title="Electronics and Communication Engineering Notes"
      description="Comprehensive study materials for ECE students, organized by semester."
      semesters={notes}
    />
  );
}

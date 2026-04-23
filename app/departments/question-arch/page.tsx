import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { QUESTION_ARCH } from "@/data/papers-cse";

export const metadata: Metadata = {
  title: "B.Arch Question Papers - KSU Student Assist Cell",
  description:
    "B.Arch Question Papers for KSU CET students.",
};

export default function QuestionArchPage() {
  return (
    <QuestionDepartmentLayout
      title="Architecture Question Papers"
      description="Access previous year question papers. Note: These question papers are from the 2021 scheme. The 2024 scheme will be updated soon."
    >
      <QuestionDepartmentView data={QUESTION_ARCH} />
    </QuestionDepartmentLayout>
  );
}

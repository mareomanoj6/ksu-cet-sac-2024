import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { QUESTION_ECE } from "@/data/papers-cse";

export const metadata: Metadata = {
  title: "ECE Question Papers - KSU Student Assist Cell",
  description:
    "Electronics and Communication Engineering Question Papers for KSU CET students.",
};

export default function QuestionECEPage() {
  return (
    <QuestionDepartmentLayout
      title="Electronics and Communication Engineering Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={QUESTION_ECE} />
    </QuestionDepartmentLayout>
  );
}

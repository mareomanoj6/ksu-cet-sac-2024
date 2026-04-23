import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { QUESTION_CE } from "@/data/papers-cse";

export const metadata: Metadata = {
  title: "CE Question Papers - KSU Student Assist Cell",
  description:
    "Civil Engineering Question Papers for KSU CET students.",
};

export default function QuestionCEPage() {
  return (
    <QuestionDepartmentLayout
      title="Civil Engineering Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={QUESTION_CE} />
    </QuestionDepartmentLayout>
  );
}

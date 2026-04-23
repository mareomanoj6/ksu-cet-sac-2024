import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { QUESTION_IE } from "@/data/papers-cse";

export const metadata: Metadata = {
  title: "IE Question Papers - KSU Student Assist Cell",
  description:
    "Industrial Engineering Question Papers for KSU CET students.",
};

export default function QuestionIEPage() {
  return (
    <QuestionDepartmentLayout
      title="Industrial Engineering Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={QUESTION_IE} />
    </QuestionDepartmentLayout>
  );
}

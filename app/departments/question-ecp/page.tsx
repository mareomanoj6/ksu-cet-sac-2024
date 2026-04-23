import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { QUESTION_ECP } from "@/data/papers-cse";

export const metadata: Metadata = {
  title: "ECP Question Papers - KSU Student Assist Cell",
  description:
    "Electrical and Computer Engineering Question Papers for KSU CET students.",
};

export default function QuestionECPPage() {
  return (
    <QuestionDepartmentLayout
      title="Electrical and Computer Engineering Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={QUESTION_ECP} />
    </QuestionDepartmentLayout>
  );
}

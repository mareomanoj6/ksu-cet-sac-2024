import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { QUESTION_ME } from "@/data/papers-cse";

export const metadata: Metadata = {
  title: "ME Question Papers - KSU Student Assist Cell",
  description:
    "Mechanical Engineering Question Papers for KSU CET students.",
};

export default function QuestionMEPage() {
  return (
    <QuestionDepartmentLayout
      title="Mechanical Engineering Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={QUESTION_ME} />
    </QuestionDepartmentLayout>
  );
}

import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { QUESTION_AEI } from "@/data/papers-cse";

export const metadata: Metadata = {
  title: "AEI Question Papers - KSU Student Assist Cell",
  description:
    "Applied Electronics and Instrumentation Question Papers for KSU CET students.",
};

export default function QuestionAEIPage() {
  return (
    <QuestionDepartmentLayout
      title="Applied Electronics and Instrumentation Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={QUESTION_AEI} />
    </QuestionDepartmentLayout>
  );
}

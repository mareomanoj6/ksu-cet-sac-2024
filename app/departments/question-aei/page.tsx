import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { getQuestionPapers } from "@/lib/db";

export const metadata: Metadata = {
  title: "AEI Question Papers - KSU Student Assist Cell",
  description:
    "Applied Electronics and Instrumentation Question Papers for KSU CET students.",
};

export default async function QuestionAEIPage() {
  const papers = await getQuestionPapers("aei");

  return (
    <QuestionDepartmentLayout
      title="Applied Electronics and Instrumentation Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={papers} />
    </QuestionDepartmentLayout>
  );
}

import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { getQuestionPapers } from "@/lib/db";

export const metadata: Metadata = {
  title: "CE Question Papers - KSU Student Assist Cell",
  description:
    "Civil Engineering Question Papers for KSU CET students.",
};

export default async function QuestionCEPage() {
  const papers = await getQuestionPapers("ce");

  return (
    <QuestionDepartmentLayout
      title="Civil Engineering Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={papers} />
    </QuestionDepartmentLayout>
  );
}

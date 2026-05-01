import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { getQuestionPapers } from "@/lib/db";

export const metadata: Metadata = {
  title: "EEE Question Papers - KSU Student Assist Cell",
  description:
    "Electrical and Electronics Engineering Question Papers for KSU CET students.",
};

export default async function QuestionEEEPage() {
  const papers = await getQuestionPapers("eee");

  return (
    <QuestionDepartmentLayout
      title="Electrical and Electronics Engineering Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={papers} />
    </QuestionDepartmentLayout>
  );
}

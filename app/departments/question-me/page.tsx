import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { getQuestionPapers } from "@/lib/db";

export const metadata: Metadata = {
  title: "ME Question Papers - KSU Student Assist Cell",
  description:
    "Mechanical Engineering Question Papers for KSU CET students.",
};

export default async function QuestionMEPage() {
  const papers = await getQuestionPapers("me");

  return (
    <QuestionDepartmentLayout
      title="Mechanical Engineering Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={papers} />
    </QuestionDepartmentLayout>
  );
}

import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { getQuestionPapers } from "@/lib/db";

export const metadata: Metadata = {
  title: "CSE Question Papers - KSU 2024 Scheme",
  description:
    "Computer Science and Engineering Question Papers for KSU CET students. Access previous year question papers organized by semester.",
};

export default async function QuestionCSEPage() {
  const papers = await getQuestionPapers("cse");

  return (
    <QuestionDepartmentLayout
      title="Computer Science and Engineering Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={papers} />
    </QuestionDepartmentLayout>
  );
}

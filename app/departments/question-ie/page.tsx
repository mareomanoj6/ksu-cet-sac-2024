import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { getQuestionPapers } from "@/lib/db";

export const metadata: Metadata = {
  title: "IE Question Papers - KSU Student Assist Cell",
  description:
    "Industrial Engineering Question Papers for KSU CET students.",
};

export default async function QuestionIEPage() {
  const papers = await getQuestionPapers("ie");

  return (
    <QuestionDepartmentLayout
      title="Industrial Engineering Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={papers} />
    </QuestionDepartmentLayout>
  );
}

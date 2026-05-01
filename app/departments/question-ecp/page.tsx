import type { Metadata } from "next";
import { QuestionDepartmentLayout } from "@/components/QuestionDepartmentLayout";
import { QuestionDepartmentView } from "@/components/QuestionDepartmentView";
import { getQuestionPapers } from "@/lib/db";

export const metadata: Metadata = {
  title: "ECP Question Papers - KSU Student Assist Cell",
  description:
    "Electrical and Computer Engineering Question Papers for KSU CET students.",
};

export default async function QuestionECPPage() {
  const papers = await getQuestionPapers("ecp");

  return (
    <QuestionDepartmentLayout
      title="Electrical and Computer Engineering Question Papers"
      description="Access previous year question papers organized by semester and subject."
    >
      <QuestionDepartmentView data={papers} />
    </QuestionDepartmentLayout>
  );
}

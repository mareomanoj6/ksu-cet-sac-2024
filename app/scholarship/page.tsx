import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";
import { ScholarshipView } from "@/components/ScholarshipView";

import { getScholarships } from "@/lib/db";

export const metadata: Metadata = {
  title: "Scholarships - KSU Student Assist Cell",
  description:
    "Scholarship information for KSU CET students. Find available scholarships, eligibility criteria, and application procedures.",
};

export default async function ScholarshipPage() {
  const scholarships = await getScholarships();

  return (
    <>
      <Navbar variant="sub" />
      <main>
        <section className="page-header">
          <h1>Scholarships</h1>
          <p>Discover and apply for various scholarship opportunities available to students</p>
        </section>
        <ScholarshipView scholarships={scholarships} />
      </main>
      <SocialLinks />
      <Footer />
    </>
  );
}

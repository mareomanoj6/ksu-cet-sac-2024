import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";
import { SyllabusView } from "@/components/SyllabusView";

export const metadata: Metadata = {
  title: "Syllabus - KSU Student Assist Cell",
  description:
    "Syllabus for all departments at KSU CET. Access course syllabi organized by department, semester, and subject.",
};

export default function SyllabusPage() {
  return (
    <>
      <Navbar variant="sub" />
      <main>
        <section
          className="page-header"
          style={{ marginBottom: "-5%" }}
        >
          <h1>Syllabus &amp; Curriculum</h1>
          <p>Explore the detailed syllabus and curriculum for all departments at CET.</p>
        </section>
      </main>
      <SyllabusView />
      <SocialLinks />
      <Footer />
    </>
  );
}

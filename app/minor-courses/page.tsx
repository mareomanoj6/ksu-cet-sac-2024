import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";
import { MinorCoursesView } from "@/components/MinorCoursesView";

export const metadata: Metadata = {
  title: "Minor Courses - KSU Student Assist Cell",
  description:
    "Minor Courses information for KSU CET students. Explore available minor course options and requirements.",
};

export default function MinorCoursesPage() {
  return (
    <>
      <Navbar variant="sub" />
      <main>
        <section className="page-header">
          <h1>Minor Courses</h1>
          <p>Access information and resources for Minor Courses offered at CET.</p>
        </section>
        <MinorCoursesView />
      </main>
      <SocialLinks />
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us - KSU Student Assist Cell",
  description:
    "Learn about KSU Student Assist Cell - A comprehensive resource hub for CET students providing study materials, question papers, and more.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar variant="sub" />
      <main>
        <section className="page-header">
          <h1>About Us</h1>
          <p>Learn more about the KSU CET Student Assist Cell and our mission.</p>
        </section>
        <div className="about-container">
          <div className="about-card">
            <h2>Our Mission</h2>
            <p>
              KSU CET Student Assist Cell was created by students, for students.
              Our goal is simple: make it effortless to find resources for
              studies, help with question papers and more.
            </p>
            <h2>What We Do</h2>
            <ol>
              <li>Curate up-to-date notes and textbooks.</li>
              <li>Help with question papers and more.</li>
              <li>
                Provide a platform to access all the resources for studies.
              </li>
            </ol>
          </div>
        </div>
      </main>
      <SocialLinks />
      <Footer />
    </>
  );
}

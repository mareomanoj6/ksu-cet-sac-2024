import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";
import { DepartmentCardClick } from "@/components/DepartmentCardClick";

export const metadata: Metadata = {
  title: "Study Notes - KSU Student Assist Cell",
  description:
    "Study Notes for all departments at KSU CET. Access comprehensive study materials organized by department and semester.",
};

type Department = {
  slug: string;
  name: string;
  href: string;
  br?: boolean;
};

const DEPARTMENTS: Department[] = [
  { slug: "cse", name: "Computer Science and Engineering", href: "/departments/notes-cse" },
  { slug: "ece", name: "Electronics and Communication Engineering", href: "/departments/notes-ece" },
  { slug: "eee", name: "Electrical and Electronics Engineering", href: "/departments/notes-eee" },
  { slug: "ecp", name: "Electrical and Computer Engineering", href: "/departments/notes-ecp" },
  { slug: "aei", name: "Applied Electronics and Instrumentation", href: "/departments/notes-aei" },
  { slug: "me", name: "Mechanical Engineering", href: "/departments/notes-me", br: true },
  { slug: "ce", name: "Civil Engineering", href: "/departments/notes-ce" },
  { slug: "ie", name: "Industrial Engineering", href: "/departments/notes-ie" },
];

export default function NotesPage() {
  return (
    <>
      <Navbar variant="sub" />
      <main>
        <section className="page-header">
          <h1>Study Notes</h1>
          <p>Comprehensive study notes from the students of CET.</p>
          <p>Will be updated regularly, as each semester progresses.</p>
        </section>
        <div className="papers-container">
          <div className="departments-grid">
            {DEPARTMENTS.map((d) => (
              <div
                key={d.slug}
                className="department-card"
                data-department={d.slug}
              >
                <h2>
                  {d.br ? (
                    <>Mechanical <br /> Engineering</>
                  ) : (
                    <> {d.name} </>
                  )}
                </h2>
                <Link href={d.href} className="department-link" aria-label={`View ${d.name} notes`} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <SocialLinks />
      <Footer />
      <DepartmentCardClick />
    </>
  );
}

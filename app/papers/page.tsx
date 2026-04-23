import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";
import { DepartmentCardClick } from "@/components/DepartmentCardClick";

export const metadata: Metadata = {
  title: "Question Papers - KSU Student Assist Cell",
  description:
    "Question Papers for all departments at KSU CET. Access previous year question papers organized by department and semester.",
};

type Department = {
  slug: string;
  name: string;
  href: string;
  br?: boolean;
};

const DEPARTMENTS: Department[] = [
  { slug: "cse", name: "Computer Science and Engineering", href: "/departments/question-cse" },
  { slug: "ece", name: "Electronics and Communication Engineering", href: "/departments/question-ece" },
  { slug: "eee", name: "Electrical and Electronics Engineering", href: "/departments/question-eee", br: true },
  { slug: "ecp", name: "Electrical and Computer Engineering", href: "/departments/question-ecp" },
  { slug: "aei", name: "Applied Electronics and Instrumentation", href: "/departments/question-aei" },
  { slug: "me", name: "Mechanical Engineering", href: "/departments/question-me", br: true },
  { slug: "ce", name: "Civil Engineering", href: "/departments/question-ce" },
  { slug: "ie", name: "Industrial Engineering", href: "/departments/question-ie" },
  { slug: "arch", name: "B.Arch", href: "/departments/question-arch" },
];

export default function PapersPage() {
  return (
    <>
      <Navbar variant="sub" />
      <main>
        <section className="page-header">
          <h1>Question Papers</h1>
          <p>Previous year question papers from CET, series and semester papers.</p>
          <p>Select a department to access question papers by semester and subject.</p>
        </section>
        {/*
        <div className="coming-soon">
          <div className="icon">
            <i className="fas fa-book-reader" aria-hidden />
          </div>
          <h2>S3 Series Papers Available</h2>
        </div>
        */}
        <div className="papers-container">
          <div className="departments-grid">
            {DEPARTMENTS.map((d) => (
              <div
                key={d.slug}
                className="department-card"
                data-department={d.slug}
              >
                <h2>
                  {d.br && d.slug === "eee" ? (
                    <>Electrical and Electronics <br /> Engineering</>
                  ) : d.br && d.slug === "me" ? (
                    <>Mechanical <br /> Engineering</>
                  ) : (
                    <> {d.name} </>
                  )}
                </h2>
                <Link href={d.href} className="department-link" aria-label={`View ${d.name} question papers`} />
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

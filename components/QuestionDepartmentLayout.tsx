import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

export function QuestionDepartmentLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <Navbar variant="sub" />
      <main>
        <section className="page-header">
          <Link href="/papers" className="back-link">
            <i className="fas fa-arrow-left" aria-hidden /> Back to Departments
          </Link>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
        <div className="papers-container">
          {children ?? (
            <div
              className="department-card"
              style={{
                background: "var(--card-glass)",
                boxShadow: "var(--shadow-color)",
                padding: "2rem",
                borderRadius: "var(--border-radius)",
                maxWidth: 600,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: "var(--text-muted)", margin: 0 }}>
                Semester selector, subject grid, and paper links will be migrated
                here. The legacy question pages use client-side tab switching.
              </p>
            </div>
          )}
        </div>
      </main>
      <SocialLinks />
      <Footer />
    </>
  );
}

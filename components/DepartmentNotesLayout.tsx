import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

type SemesterItem = { label: string; href: string };
type SemesterData = { id: number; items: SemesterItem[] };

function SemesterComingSoon() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "1rem",
        color: "var(--text-muted)",
      }}
    >
      <i className="fas fa-info-circle" aria-hidden style={{ fontSize: "1.5rem" }} />
      <p style={{ margin: 0 }}>Coming soon</p>
    </div>
  );
}

function SemesterCard({
  semester,
  children,
}: {
  semester: number;
  children: React.ReactNode;
}) {
  return (
    <div className="semester-card">
      <h2>Semester {semester}</h2>
      <div className="scrollable-list">{children}</div>
    </div>
  );
}

export function DepartmentNotesLayout({
  title,
  description,
  semesters,
}: {
  title: string;
  description: string;
  semesters: SemesterData[];
}) {
  const allIds = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Navbar variant="sub" />
      <main>
        <section className="page-header">
          <Link href="/notes" className="back-link">
            <i className="fas fa-arrow-left" aria-hidden /> Back to Departments
          </Link>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>

        <div className="semester-grid">
          {allIds.map((id) => {
            const data = semesters.find((s) => s.id === id);
            if (data) {
              return (
                <SemesterCard key={id} semester={id}>
                  <ul className="textbook-list">
                    {data.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </SemesterCard>
              );
            }
            return (
              <SemesterCard key={id} semester={id}>
                <SemesterComingSoon />
              </SemesterCard>
            );
          })}
        </div>
      </main>
      <SocialLinks />
      <Footer />
    </>
  );
}

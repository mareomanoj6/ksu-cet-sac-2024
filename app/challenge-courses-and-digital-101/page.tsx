import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Challenge Courses and Digital 101 - KSU Student Assist Cell",
  description:
    "Information about Challenge Courses and Digital 101 for KSU CET students. Learn about special courses and digital literacy programs.",
};

export default function ChallengeCoursesPage() {
  return (
    <>
      <Navbar variant="sub" />
      <main>
        <section className="page-header">
          <h1>Challenge Courses and Digital 101</h1>
          <p>
            This page will provide information and resources regarding the
            challenge courses and Digital 101 offered by the college.
          </p>
        </section>
        <div className="challenge-grid">
          <div className="challenge-card">
            <h2>
              <span className="challenge-card-header">
                <Image
                  src="/images/digital-101.png"
                  alt="Digital 101 Logo"
                  width={40}
                  height={40}
                  className="challenge-icon"
                />
                Digital 101
              </span>
            </h2>
            <div className="challenge-card-content">
              <p>
                Digital 101 is a mandatory course for all students in the second
                semester of their undergraduate studies. It is a course that
                introduces students to the basics of digital technology and its
                applications.
              </p>
              <p>
                It is worth 1 credit, and has small video lectures and quizzes
                to evaluate your progress. To avoid issues, login with the Email
                you have provided to the college for registration.
              </p>
              <p>
                Registration for the exam is free and Registration codes will be
                provided to students by their HOD&apos;s or Staff Advisors.
              </p>
              <div className="challenge-button-container">
                <a
                  href="https://www.futureskillsprime.in/journey/digital-101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="challenge-button"
                >
                  Register for Digital 101
                </a>
              </div>
            </div>
          </div>

          <div className="challenge-card">
            <h2>
              <span className="challenge-card-header">
                <i className="fa-solid fa-users challenge-icon" aria-hidden />
                Challenge Courses
              </span>
            </h2>
            <div className="challenge-card-content">
              <p>
                A Challenge Course allows students to earn credits for certain
                courses without attending regular classes. Students take a
                Challenge Examination and are evaluated solely based on their
                performance in the End Semester Examination (ESE). No grade
                points are awarded for Challenge Courses, and they are not
                considered for SGPA/CGPA calculations.
              </p>
              <p>
                Challenge Courses are optional. Students can use them to earn
                additional credits or complete required credits earlier than
                scheduled in the curriculum.
              </p>
              <p>
                To pass a Challenge Course and earn the corresponding credits, a
                student must secure a minimum grade of &apos;C&apos;, which
                corresponds to at least 60% in the ESE.
              </p>

              <div className="challenge-table-container">
                <table className="challenge-table">
                  <caption className="challenge-table-caption">
                    Eligible Challenge Courses
                  </caption>
                  <thead>
                    <tr>
                      <th>Sem</th>
                      <th>Type</th>
                      <th>Course Title</th>
                      <th>Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>S2</td>
                      <td>BSC</td>
                      <td>Group Specific Mathematics-2</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>S2</td>
                      <td>BSC</td>
                      <td>Physics/Chemistry for Engineers</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>S2</td>
                      <td>ESC</td>
                      <td>Programming in C</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>S3/4</td>
                      <td>BSC</td>
                      <td>Group Specific Math-3/4</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>S7/8</td>
                      <td>OE/PE</td>
                      <td>OE / Level-3 PE Courses</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SocialLinks />
      <Footer />
    </>
  );
}

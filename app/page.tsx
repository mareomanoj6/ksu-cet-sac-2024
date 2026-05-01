import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";
import { HomePageInteractivity } from "./HomePageInteractivity";
import { getContacts } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const contacts = await getContacts();

  const topContacts = contacts.slice(0, 5);
  const bottomContacts = contacts.slice(5);

  return (
    <>
      <Navbar variant="home" />

      <header id="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1>
            <span className="accent">KSU Student Assist Cell 2026</span>
          </h1>
          <p className="subtitle">
            <span>Your all-in-one resource hub.</span>
          </p>
        </div>
      </header>

      <div className="main-image-section">
        <Image
          src="/images/CET.png"
          alt="CET Campus"
          width={795}
          height={569}
          priority
          sizes="(max-width: 900px) 100vw, 795px"
        />
      </div>

      <main>
        <section className="service-grid" id="serviceGrid">
          <div className="service-card" data-title="Notes">
            <div className="service-icon main-icon">
              <i className="fas fa-book" aria-hidden />
            </div>
            <h2>Notes</h2>
            <p>
              Comprehensive study notes for all subjects, organized by department
              and semester.
            </p>
            <Link href="/notes" className="section-link">
              View Notes <i className="fas fa-arrow-right" aria-hidden />
            </Link>
          </div>
          <div className="service-card" data-title="Papers">
            <div className="service-icon main-icon">
              <i className="fas fa-file-alt" aria-hidden />
            </div>
            <h2>Papers</h2>
            <p>
              Access KTU model papers, series papers, and semester papers.
            </p>
            <Link href="/papers" className="section-link">
              View Papers <i className="fas fa-arrow-right" aria-hidden />
            </Link>
          </div>
          <div className="service-card" data-title="Scholarships">
            <div className="service-icon main-icon">
              <i className="fas fa-graduation-cap" aria-hidden />
            </div>
            <h2>Scholarships</h2>
            <p>
              Find details on scholarships offered. Get deadlines, requirements,
              and direct application links.
            </p>
            <Link href="/scholarship" className="section-link">
              View Scholarships{" "}
              <i className="fas fa-arrow-right" aria-hidden />
            </Link>
          </div>
          <div className="service-card" data-title="Syllabus">
            <div className="service-icon main-icon">
              <i className="fas fa-list-alt" aria-hidden />
            </div>
            <h2>Syllabus & Curriculum</h2>
            <p>
              Department-wise syllabus and curriculum information for all
              semesters and courses.
            </p>
            <Link href="/syllabus" className="section-link">
              View Syllabus & Curriculum{" "}
              <i className="fas fa-arrow-right" aria-hidden />
            </Link>
          </div>
          <div className="service-card" data-title="Minor Courses">
            <div className="service-icon main-icon">
              <i className="fas fa-chalkboard-teacher" aria-hidden />
            </div>
            <h2>Minor Courses</h2>
            <p>
              Gain insight and information regarding the minor courses offered
              by the college.
            </p>
            <Link href="/minor-courses" className="section-link">
              View Minor Courses{" "}
              <i className="fas fa-arrow-right" aria-hidden />
            </Link>
          </div>
          <div className="service-card" data-title="About Us">
            <div className="service-icon main-icon">
              <i className="fas fa-info-circle" aria-hidden />
            </div>
            <h2>About Us</h2>
            <p>
              Learn more about the KSU CET Student Assist Cell and our mission.
            </p>
            <Link href="/about" className="section-link">
              View About Us <i className="fas fa-arrow-right" aria-hidden />
            </Link>
          </div>
          <div className="service-card" data-title="Challenge Courses & Digital 101">
            <div className="service-icon main-icon">
              <i className="fa-solid fa-calendar" aria-hidden />
            </div>
            <h2>Challenge Courses and Digital 101</h2>
            <p>
              Information regarding the challenge courses and digital 101
              offered by the college.
            </p>
            <Link
              href="/challenge-courses-and-digital-101"
              className="section-link"
            >
              View Challenge Courses and Digital 101{" "}
              <i className="fas fa-arrow-right" aria-hidden />
            </Link>
          </div>
        </section>

        <section className="contacts-section">
          <h2>Contact Us</h2>
          <div className="contacts-grid">
            <div className="contacts-row contacts-row-top">
              {topContacts.map((contact: any) => (
                <div key={contact.id} className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-user" aria-hidden />
                  </div>
                  {contact.developer_link && (
                    <div className="developer-icon">
                      <a
                        className="icon-dev-link"
                        href={contact.developer_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${contact.name} developer site`}
                      >
                        <i className="fas fa-code" aria-hidden />
                      </a>
                    </div>
                  )}
                  <h3>{contact.name}</h3>
                  <p>
                    <i className="fas fa-phone" aria-hidden /> {contact.phone_number}
                  </p>
                </div>
              ))}
            </div>
            <div className="contacts-row contacts-row-bottom">
              {bottomContacts.map((contact: any) => (
                <div key={contact.id} className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-user" aria-hidden />
                  </div>
                  {contact.developer_link && (
                    <div className="developer-icon">
                      <a
                        className="icon-dev-link"
                        href={contact.developer_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${contact.name} developer site`}
                      >
                        <i className="fas fa-code" aria-hidden />
                      </a>
                    </div>
                  )}
                  <h3>{contact.name}</h3>
                  <p>
                    <i className="fas fa-phone" aria-hidden /> {contact.phone_number}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SocialLinks />
      <Footer />
      <HomePageInteractivity />
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type NavbarVariant = "home" | "sub";

export function Navbar({ variant }: { variant: NavbarVariant }) {
  const pathname = usePathname();
  useEffect(() => {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.querySelector(".nav-links");

    if (!navToggle || !navLinks) return;

    // TypeScript now knows these are non-null after the check
    const navToggleElement = navToggle;
    const navLinksElement = navLinks as HTMLElement;

    function toggleNavigation() {
      navLinksElement.classList.toggle("active");
      const spans = navToggleElement.querySelectorAll("span");
      const closeIcon = navToggleElement.querySelector(".close-x") as HTMLElement | null;

      if (navLinksElement.classList.contains("active")) {
        spans.forEach((s) => ((s as HTMLElement).style.display = "none"));
        if (!closeIcon) {
          const icon = document.createElement("i");
          icon.className = "fas fa-times close-x";
          Object.assign(icon.style, {
            fontSize: "2rem",
            color: "var(--primary-color, #2463eb)",
            position: "absolute",
            top: "0.7rem",
            right: "0.7rem",
            transform: "none",
          });
          navToggleElement.appendChild(icon);
        } else {
          closeIcon.style.display = "block";
        }
        document.querySelectorAll(".nav-links .nav-label").forEach((label) => {
          const el = label as HTMLElement;
          el.style.display = "inline";
          el.style.opacity = "1";
          el.style.position = "static";
          el.style.pointerEvents = "auto";
          el.style.transform = "none";
        });
      } else {
        spans.forEach((s) => ((s as HTMLElement).style.display = "block"));
        if (closeIcon) closeIcon.style.display = "none";
        const labels = document.querySelectorAll(".nav-links .nav-label");
        if (typeof window !== "undefined" && window.innerWidth <= 1000) {
          labels.forEach((label) => {
            const el = label as HTMLElement;
            el.style.display = "inline";
            el.style.opacity = "1";
            el.style.position = "static";
            el.style.pointerEvents = "auto";
            el.style.transform = "none";
          });
        } else {
          labels.forEach((label) => {
            const el = label as HTMLElement;
            el.style.display = "";
            el.style.opacity = "";
            el.style.position = "";
            el.style.pointerEvents = "";
            el.style.transform = "";
          });
        }
      }
    }

    navToggleElement.addEventListener("click", toggleNavigation);
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !navLinksElement.contains(target) &&
        !navToggleElement.contains(target) &&
        navLinksElement.classList.contains("active")
      ) {
        toggleNavigation();
      }
    };
    document.addEventListener("click", onDocClick);

    return () => {
      navToggleElement.removeEventListener("click", toggleNavigation);
      document.removeEventListener("click", onDocClick);
    };
  }, []);

  // Helper function to check if a path matches the current page or its subpages
  const isCurrentPage = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/notes" && pathname?.startsWith("/departments/notes-")) {
      return true;
    }
    if (href === "/papers" && pathname?.startsWith("/departments/question-")) {
      return true;
    }
    // For subpages, check if pathname starts with the href
    return pathname?.startsWith(href);
  };

  const navLinksSub = (
    <>
      {!isCurrentPage("/") && (
        <li>
          <Link href="/">
            <i className="fas fa-home" aria-hidden />
            Home
          </Link>
        </li>
      )}
      {!isCurrentPage("/notes") && (
        <li>
          <Link href="/notes">
            <i className="fas fa-book" aria-hidden />
            Notes
          </Link>
        </li>
      )}
      {!isCurrentPage("/papers") && (
        <li>
          <Link href="/papers">
            <i className="fas fa-file-alt" aria-hidden />
            Papers
          </Link>
        </li>
      )}
      {!isCurrentPage("/scholarship") && (
        <li>
          <Link href="/scholarship">
            <i className="fas fa-graduation-cap" aria-hidden />
            Scholarships
          </Link>
        </li>
      )}
      {!isCurrentPage("/syllabus") && (
        <li>
          <Link href="/syllabus">
            <i className="fas fa-list-alt" aria-hidden />
            <span className="nav-label">Syllabus</span>
          </Link>
        </li>
      )}
      {!isCurrentPage("/minor-courses") && (
        <li>
          <Link href="/minor-courses">
            <i className="fas fa-chalkboard-teacher" aria-hidden />
            <span className="nav-label">Minor Courses</span>
          </Link>
        </li>
      )}
      {!isCurrentPage("/about") && (
        <li>
          <Link href="/about">
            <i className="fas fa-info-circle" aria-hidden />
            <span className="nav-label">About Us</span>
          </Link>
        </li>
      )}
      {!isCurrentPage("/challenge-courses-and-digital-101") && (
        <li>
          <Link href="/challenge-courses-and-digital-101">
            <i className="fa-solid fa-calendar" aria-hidden />
            <span className="nav-label">Challenge Courses & Digital 101</span>
          </Link>
        </li>
      )}
    </>
  );

  const navLinksHome = (
    <>
      {!isCurrentPage("/notes") && (
        <li>
          <Link href="/notes">
            <i className="fas fa-book" aria-hidden />
            Notes
          </Link>
        </li>
      )}
      {!isCurrentPage("/papers") && (
        <li>
          <Link href="/papers">
            <i className="fas fa-file-alt" aria-hidden />
            Papers
          </Link>
        </li>
      )}
      {!isCurrentPage("/scholarship") && (
        <li>
          <Link href="/scholarship">
            <i className="fas fa-graduation-cap" aria-hidden />
            Scholarships
          </Link>
        </li>
      )}
      {!isCurrentPage("/syllabus") && (
        <li>
          <Link href="/syllabus">
            <i className="fas fa-list-alt" aria-hidden />
            <span className="nav-label">Syllabus</span>
          </Link>
        </li>
      )}
      {!isCurrentPage("/minor-courses") && (
        <li>
          <Link href="/minor-courses">
            <i className="fas fa-chalkboard-teacher" aria-hidden />
            <span className="nav-label">Minor Courses</span>
          </Link>
        </li>
      )}
      {!isCurrentPage("/about") && (
        <li>
          <Link href="/about">
            <i className="fas fa-info-circle" aria-hidden />
            <span className="nav-label">About Us</span>
          </Link>
        </li>
      )}
      {!isCurrentPage("/challenge-courses-and-digital-101") && (
        <li>
          <Link href="/challenge-courses-and-digital-101">
            <i className="fa-solid fa-calendar" aria-hidden />
            <span className="nav-label">Challenge Courses & Digital 101</span>
          </Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <Image
            src="/images/ksu%20logo%20white.png"
            alt="KSU Logo"
            className="logo-image"
            width={40}
            height={40}
            priority={variant === "home"}
          />
          <Link href="/">KSU Student Assist Cell</Link>
        </div>

        <div className="nav-toggle" id="navToggle" aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </div>

        <ul className="nav-links">
          {variant === "home" ? navLinksHome : navLinksSub}
        </ul>
      </div>
    </nav>
  );
}

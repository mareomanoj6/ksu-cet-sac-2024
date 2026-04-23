import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <p>&copy; KSU CET 2026. All rights reserved.</p>
      <p>
        Developed by{" "}
        <a
          className="footer-dev-link"
          href="https://mareomanoj.is-a.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mareo Manoj
        </a>
      </p>
    </footer>
  );
}

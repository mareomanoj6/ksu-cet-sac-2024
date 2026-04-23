export function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social Media Links">
      <div className="social-popup">
        <a aria-label="Instagram">
          <i className="fa-brands fa-instagram" aria-hidden />
        </a>
        <div className="popup-content">
          <a
            href="https://www.instagram.com/studentassistcell_cet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram" aria-hidden />
            KSU Student Assist Cell
          </a>
          <a
            href="https://www.instagram.com/ksu.cet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram" aria-hidden />
            KSU CET
          </a>
        </div>
      </div>
      <a
        href="https://chat.whatsapp.com/JYDuhIWcdQLH2mud9LkkuU"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp" aria-hidden />
      </a>
      <a
        href="mailto:ksucetsac2024@gmail.com"
        aria-label="Email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-envelope" aria-hidden />
      </a>
    </div>
  );
}

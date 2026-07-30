import { FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <div className="footer-socials">
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/muhammad-abubakar-9699323b4?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>
        <a
          className="social-icon"
          href="mailto:muhammad.abubakar3520@gmail.com"
          aria-label="Email"
        >
          <FiMail />
        </a>
      </div>
      <p>© 2026 Muhammad Abubakar. Built with React &amp; Framer Motion.</p>
    </footer>
  );
}

export default Footer;

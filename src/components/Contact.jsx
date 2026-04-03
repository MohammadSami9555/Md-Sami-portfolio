import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h2>Contact Me</h2>

        <p className="contact-text">
          Have an idea, project, or opportunity? Let’s connect!
          Feel free to reach out through email or social links below.
        </p>

        <div className="contact-buttons">
          <a href="mailto:mohdsami7390@gmail.com">
            <FaEnvelope /> Send Email
          </a>

          <a
  href="/MohammadSamiResume.pdf"
  download="MohammadSamiResume.pdf"
>
  📄 Download Resume
</a>
        </div>

        <div className="footer-line"></div>

        <p className="made-with">
          Made with 💚 by <span>Mohammad Sami</span>
        </p>
      </section>

      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://github.com/MohammadSami9555"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammadsami96/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:mohdsami7390@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p>© 2026 Mohammad Sami — Built with React, CSS & modern UI.</p>
      </footer>
    </>
  );
}

export default Contact;
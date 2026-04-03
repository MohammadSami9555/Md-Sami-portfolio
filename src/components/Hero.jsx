import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Mohammad Sami</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p className="hero-desc">
          I’m Mohammad Sami, a passionate Frontend Developer focused on
          building modern, responsive, and visually engaging web applications.
          I enjoy transforming ideas into real products using React, Next.js,
          JavaScript, and modern UI technologies.
        </p>

        <div className="buttons">
          <a href="#contact" className="contact-btn">
            Contact Me
          </a>

          <a
            href="/MohammadSamiResume.pdf"
            download
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}

export default Hero;
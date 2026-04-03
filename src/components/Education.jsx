import nietLogo from "../assets/nietlogo.svg";
import rpicLogo from "../assets/rpiclogo.webp";
import courseraLogo from "../assets/coursera.png";

function Education() {
  const items = [
    {
      logo: nietLogo,
      title: "B.Tech in Computer Science (AI & ML)",
      school: "Noida Institute of Engineering and Technology (NIET)",
      year: "2023 - 2027",
      details:
        "Pursuing specialization in Artificial Intelligence, Machine Learning, and Full Stack Development. Building analytical, programming, and system design expertise through academic and personal projects.",
      side: "left",
    },
    {
      logo: rpicLogo,
      title: "12th Grade (Science Stream)",
      school: "RPIC School, Siswa Bazar, Maharajganj, U.P",
      year: "2020 - 2022",
      details:
        "Studied Physics, Chemistry, and Mathematics with focus on logical reasoning and problem solving.",
      side: "right",
    },
    {
      logo: courseraLogo,
      title: "Professional Certifications — Coursera",
      school: "IBM Skills Network (Coursera)",
      year: "2024 - 2025",
      details:
        "Completed Python Programming for Everybody, Deep Learning Fundamentals, ReactJS Frontend Development, and Data Science with Python.",
      side: "left",
    },
  ];

  return (
    <section id="education" className="education">
      <h2>Education & Certifications</h2>

      <div className="timeline">
        {items.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${item.side}`}
          >
            <div className="education-card">
              <div className="edu-header">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="edu-logo"
                />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.school}</p>
                </div>
              </div>

              <span>{item.year}</span>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
function Skills() {
  const categories = [
    {
      icon: "🌐",
      title: "Frontend",
      skills: [
        { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
        { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
        { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
        { name: "ReactJS", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
        { name: "GSAP", img: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
        { name: "Next.js", img: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
      ],
    },
    {
      icon: "⚙️",
      title: "Backend / APIs",
      skills: [
        { name: "NodeJS", img: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
        { name: "ExpressJS", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
        { name: "GraphQL", img: "https://cdn-icons-png.flaticon.com/512/919/919831.png" },
        { name: "JWT", img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
      ],
    },
    {
      icon: "🛠️",
      title: "Tools",
      skills: [
        { name: "GitHub", img: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
        { name: "Vercel", img: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
        { name: "Netlify", img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
        { name: "VS Code", img: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
      ],
    },
  ]

  return (
    <section className="skills" id="skills">
      <h2>Skills & Technologies</h2>

      {categories.map((category, i) => (
        <div key={i} className="skill-category">
          <h3>{category.icon} {category.title}</h3>

          <div className="skills-grid">
            {category.skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.img} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills
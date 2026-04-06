function Projects() {
  const projects = [
    {
      title: "GraphQL Blog Frontend",
      desc: "Built a modern blog UI using Apollo Client + GraphQL with dynamic rendering.",
    },
    {
      title: "Next.js SSR News Dashboard",
      desc: "SEO-friendly server-side rendered news dashboard using Next.js.",
    },
    {
      title: "GSAP Product Landing Page",
      desc: "Premium landing page with smooth GSAP animations and micro interactions.",
    },
    {
      title: "Optimized SSR + CDN Frontend",
      desc: "Production-grade SSR deployment with CDN optimization, caching, and ultra-fast performance delivery.",
    },
  ]

  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
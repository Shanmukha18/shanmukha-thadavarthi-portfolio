import '../styles/global.css'
import { motion } from 'framer-motion'

const projects = [
  {
    name: 'ViOLA',
    description: 'A cab ride sharing website for VIT Students built with React and Spring Boot.',
    github: 'https://github.com/Shanmukha18/ViOLA',
    demo: 'https://viola-frontend-plum.vercel.app/',
  },
  {
    name: 'UniBuy',
    description: 'An e-commerce website built with React and Spring Boot.',
    github: 'https://github.com/Shanmukha18/UniBuy',
    demo: 'https://unibuy-six.vercel.app',
  },
  {
    name: 'Grade Calculator',
    description: 'Grade Calculating website for students of VIT built with React.',
    github: 'https://github.com/Shanmukha18/VIT-GPA-Calculator',
    demo: 'https://vit-gpa-calculator-six.vercel.app/',
  },
  {
    name: 'Let\'s Chat',
    description: 'A chat application built using java multithreading concepts',
    github: 'https://github.com/Shanmukha18/LetsChat',
    demo: 'https://github.com/Shanmukha18/LetsChat',
  },
]


function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button"
                title="GitHub Repository"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button"
                title="Live Demo"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

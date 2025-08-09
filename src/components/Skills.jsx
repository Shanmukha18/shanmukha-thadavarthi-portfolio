import { motion } from 'framer-motion'

const skills = [
  { name: 'C++', icon: <i className='devicon-cplusplus-plain icon'/>},
  { name: 'Java', icon: <i className="fa-brands fa-java" />},
  { name: 'JavaScript', icon: <i className="fab fa-js" /> },
  { name: 'PostgreSQL', icon: <i className='devicon-postgresql-plain'/>},
  { name: 'Spring Boot', icon: <i className='devicon-spring-plain'/>},
  { name: 'React', icon: <i className="fab fa-react" /> },
  { name: 'Git', icon: <i className="devicon-git-plain" /> },
  { name: 'Docker', icon: <i className='devicon-docker-plain'/> },
  { name: 'HTML', icon: <i className="fab fa-html5" /> },
  { name: 'CSS', icon: <i className="fab fa-css3-alt" /> },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <motion.div
            className="skill-icon"
            key={idx}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="icon">{skill.icon}</div>
            <div className="label">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

import '../styles/global.css'
import { motion } from 'framer-motion'

const educationData = [
  {
    title: 'B.Tech in Computer Science and Engineering',
    institution: 'Vellore Institute of Technology, Vellore',
    period: '2022 - 2026',
    description: 'CGPA: 8.83',
  },
  {
    title: 'Class XII',
    institution: 'Sri Chaitanya Jr College, Andhra Pradesh',
    period: '2021 - 2022',
    description: 'Percentage: 94.1%',
  },
  {
    title: 'Class X',
    institution: 'Sri Chaitanya High School, Andhra Pradesh',
    period: '2019-2020',
    description: 'Percentage: 97.8%'
  }
]

function Education() {
  return (
    <section id="education" className="education-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="timeline">
        {educationData.map((item, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.institution}</h4>
              <span className="timeline-period">{item.period}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

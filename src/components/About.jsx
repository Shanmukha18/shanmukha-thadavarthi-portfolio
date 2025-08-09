import '../styles/global.css'
import { motion } from 'framer-motion'
import codeforces from '../assets/codeforces.svg'
import leetcode from '../assets/leetcode.svg'

function About() {
  return (
    <section id="about" className="about-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm a Computer Science student at VIT Vellore, actively seeking opportunities to apply and grow my skills. I have hands-on experience with Spring Boot, React, and PostgreSQL, and have built several projects that reflect my ability to design and implement scalable applications. I enjoy solving DSA problems and regularly practice to deepen my understanding of core programming concepts and improve problem solving efficiency.
      </motion.p>

      <motion.div
        className="about-links"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://leetcode.com/u/Shannu05_/"
          target="_blank"
          rel="noreferrer"
          className="about-link-item"
          aria-label="LeetCode"
        >
          <img src={leetcode} alt="LeetCode" className="leetcode-icon" />
          <span>LeetCode</span>
        </a>

        <a
          href="https://codeforces.com/profile/Shanmukh18"
          target="_blank"
          rel="noreferrer"
          className="about-link-item"
          aria-label="Codeforces"
        >
          <img src={codeforces} alt="Codeforces" className="codeforces-icon" />
          <span>Codeforces</span>
        </a>
      </motion.div>

    </section>
  )
}

export default About

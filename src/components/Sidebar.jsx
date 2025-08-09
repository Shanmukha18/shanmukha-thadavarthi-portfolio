import { useEffect, useState } from 'react'
import '../styles/global.css'

function Sidebar({ isMobileMenuOpen, closeMobileMenu }) {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sectionIds = ['about', 'education', 'projects', 'skills']
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.1
    }

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach(id => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    if (isMobileMenuOpen) {
      closeMobileMenu()
    }
  }

  return (
    <aside className={`sidebar ${isMobileMenuOpen ? 'active' : ''}`}>
      <div className="intro">
        <h1 className="name">Shanmukha Thadavarthi</h1>
        <h2 className="role">Web Developer</h2>
      </div>

      <nav className="nav-links">
        <a 
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => handleNavClick('about')}
        >
          About
        </a>
        <a 
          href="#education" 
          className={activeSection === 'education' ? 'active' : ''}
          onClick={() => handleNavClick('education')}
        >
          Education
        </a>
        <a 
          href="#projects" 
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => handleNavClick('projects')}
        >
          Projects
        </a>
        <a 
          href="#skills" 
          className={activeSection === 'skills' ? 'active' : ''}
          onClick={() => handleNavClick('skills')}
        >
          Skills
        </a>
      </nav>

      <div className="social-icons">
        <a href="https://github.com/Shanmukha18" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:shanmukha.thadavarthi@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/shanmukha-thadavarthi/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </aside>
  )
}

export default Sidebar

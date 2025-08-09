import './styles/global.css'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="app">
      <div className="gradient-bg-blur" />
      <Sidebar />      
      <main className="main-content">
        <About />
        <Education />
        <Projects />
        <Skills />
      </main>
      <a
        href="src\assets\resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        View Resume
      </a>
    </div>
  )
}

export default App

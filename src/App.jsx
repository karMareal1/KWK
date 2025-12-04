import { useState, useEffect } from 'react'
import './App.css'

const DualPortfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isToggleVisible, setIsToggleVisible] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsToggleVisible(scrollPosition < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const personA = {
    name: 'Person A',
    title: 'Creative Technologist',
    skills: ['UI/UX Design', 'Frontend Dev', 'Data Visualization', 'Product Strategy'],
    bio: 'Passionate about crafting delightful digital experiences that blend aesthetics with functionality. Specializes in building responsive interfaces and creating immersive user journeys that drive engagement and innovation.',
  }

  const personB = {
    name: 'Person B',
    title: 'Full Stack Engineer',
    skills: ['Backend Architecture', 'Cloud Infrastructure', 'DevOps', 'System Design'],
    bio: 'Driven by the challenge of building robust, scalable systems that power modern applications. Expert in designing distributed architectures and optimizing performance across complex technical landscapes.',
  }

  const projects = [
    {
      title: 'Digital Ecosystem Platform',
      description: 'A comprehensive platform for collaborative digital workspace management with real-time synchronization.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'Docker'],
      leadBy: 'both',
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Advanced data visualization suite leveraging machine learning for predictive insights and trend analysis.',
      tech: ['React', 'Python', 'TensorFlow', 'D3.js', 'AWS'],
      leadBy: 'A',
    },
    {
      title: 'Microservices Architecture Suite',
      description: 'Modular backend infrastructure enabling seamless scaling and independent service deployment.',
      tech: ['Kubernetes', 'Golang', 'gRPC', 'Redis', 'PostgreSQL'],
      leadBy: 'B',
    },
    {
      title: 'Interactive Motion Design Framework',
      description: 'Custom animation and interaction library enabling fluid, performance-optimized visual experiences.',
      tech: ['React', 'Framer Motion', 'WebGL', 'TypeScript', 'GSAP'],
      leadBy: 'A',
    },
    {
      title: 'Real-Time Collaboration Engine',
      description: 'Low-latency synchronization framework for seamless multi-user collaborative editing experiences.',
      tech: ['Socket.io', 'Node.js', 'Operational Transformation', 'Redis', 'RabbitMQ'],
      leadBy: 'B',
    },
    {
      title: 'Design System & Component Library',
      description: 'Comprehensive, fully-documented component library with accessibility-first approach and design tokens.',
      tech: ['React', 'Storybook', 'TypeScript', 'Figma API', 'CSS-in-JS'],
      leadBy: 'both',
    },
  ]

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* Theme Toggle Switch */}
      <div className={`theme-toggle-container ${!isToggleVisible ? 'hidden' : ''}`}>
        <input
          id="checkboxInput"
          type="checkbox"
          checked={!isDarkMode}
          onChange={(e) => setIsDarkMode(!e.target.checked)}
        />
        <label className="toggleSwitch" htmlFor="checkboxInput"></label>
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="sphere-container">
            <div className="loader">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((sphereIndex) => (
                <article key={sphereIndex} className={`sphere sphere${sphereIndex + 1}`}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((itemIndex) => (
                    <div
                      key={itemIndex}
                      className="item"
                      style={{ '--rot-y': itemIndex }}
                    ></div>
                  ))}
                </article>
              ))}
            </div>
          </div>

          <h1>THE PARTNERSHIP</h1>

          <p>
            Where creativity meets engineering. Two visionaries, one mission: building tomorrow's digital experiences.
          </p>

          <div className="button-group">
            <button
              onClick={() => scrollToSection('bios')}
              className="btn btn-primary"
            >
              Explore Person A
            </button>

            <button
              onClick={() => scrollToSection('bios')}
              className="btn btn-secondary"
            >
              Explore Person B
            </button>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bios" className="bios">
        <h2 className="section-title">Meet The Creators</h2>

        <div className="bios-container">
          <div className="divider-line"></div>

          {/* Person A */}
          <div className="bio-card">
            <div className="bio-header">
              <div className="bio-dot"></div>
              <h3>{personA.name}</h3>
            </div>

            <p className="title">{personA.title}</p>
            <p>{personA.bio}</p>

            <div>
              <p className="skills-label">Superpowers</p>
              <div className="skills-list">
                {personA.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Person B */}
          <div className="bio-card">
            <div className="bio-header">
              <div className="bio-dot"></div>
              <h3>{personB.name}</h3>
            </div>

            <p className="title">{personB.title}</p>
            <p>{personB.bio}</p>

            <div>
              <p className="skills-label">Superpowers</p>
              <div className="skills-list">
                {personB.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="projects-container">
          <h2 className="section-title">Collaborative Projects</h2>

          <div className="projects-grid">
            {projects.map((project, idx) => {
              const isPersonA = project.leadBy === 'A'
              const isPersonB = project.leadBy === 'B'
              const cardClass = isPersonA ? 'person-a' : isPersonB ? 'person-b' : ''

              return (
                <div key={idx} className={`project-card ${cardClass}`}>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    {project.leadBy !== 'both' && <div className="project-badge"></div>}
                  </div>

                  <p>{project.description}</p>

                  <div className="tech-tags">
                    {project.tech.map((tech, tidx) => (
                      <span key={tidx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <h4>About</h4>
            <p>
              A dynamic partnership dedicated to delivering cutting-edge digital solutions that blend creativity with technical excellence.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <button
                onClick={() => scrollToSection('hero')}
                className="footer-link"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('bios')}
                className="footer-link"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="footer-link"
              >
                Projects
              </button>
            </div>
          </div>

          <div>
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" className="social-icon">
                {/* LinkedIn SVG */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
                </svg>
              </a>

              <a href="#" className="social-icon">
                {/* GitHub SVG */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12..." />
                </svg>
              </a>

              <a href="mailto:hello@example.com" className="social-icon">
                {/* Email SVG */}
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8..." />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 The Partnership. Crafted with innovation and precision.</p>
        </div>
      </footer>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2 className="newsletter-title">Stay Connected</h2>
          <p className="newsletter-desc">
            Sign up for our email newsletter to get the latest updates, project launches,
            and exclusive insights from the partnership.
          </p>

          <form
            className="newsletter-form"
            onSubmit={async (e) => {
              e.preventDefault()
              const email = e.target.email.value

              try {
                const res = await fetch("http://localhost:5000/subscribe", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email }),
                })

                const msg = await res.text()
                alert(msg)
              } catch (err) {
                alert("Something went wrong. Try again later.")
              }
            }}
          >
            <input
              type="email"
              name="email"
              className="newsletter-input"
              placeholder="Enter your email address"
              required
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </section>

    </div>
  )  
}   

export default DualPortfolio

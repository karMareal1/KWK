import { useState, useEffect } from 'react'
import './App.css'
import { ScrollDownIndicator } from './ScrollDownIndicator'

const DualPortfolio = () => {

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
    <div style={{ width: '100%', minHeight: '100vh', background: '#0A0A0A', color: '#E8E8F0' }}>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          {/* 3D Rotating Sphere */}
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
              aria-label="Explore Person A's focus"
            >
              Explore Person A
            </button>

            <button
              onClick={() => scrollToSection('bios')}
              className="btn btn-secondary"
              aria-label="Explore Person B's focus"
            >
              Explore Person B
            </button>
          </div>
        </div>

        <ScrollDownIndicator targetElementId="hero" />
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
                aria-label="Scroll to hero section"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('bios')}
                className="footer-link"
                aria-label="Scroll to bios section"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="footer-link"
                aria-label="Scroll to projects section"
              >
                Projects
              </button>
            </div>
          </div>

          <div>
            <h4>Connect</h4>
            <div className="social-links">
              <a
                href="#"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>

              <a
                href="#"
                className="social-icon"
                aria-label="GitHub"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="mailto:hello@example.com"
                className="social-icon"
                aria-label="Email"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 The Partnership. Crafted with innovation and precision.</p>
        </div>
      </footer>
    </div>
  )
}

export default DualPortfolio

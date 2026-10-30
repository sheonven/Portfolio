'use client'

import { useEffect, useState } from 'react'

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Work', 'work'],
  ['Certifications', 'certifications'],
  ['Contact', 'contact'],
]

const projects = [
  {
    title: 'KCCTALK',
    type: 'Mobile learning · Web dashboard',
    role: 'Quality Assurance · Content Designer · Documentation',
    description: 'An innovative mobile learning application designed to support speech development among children with speech delays through structured Filipino Core Language activities. It also includes a web-based dashboard for teachers, facilitators, and administrators to monitor learner progress and activity records.',
    contributions: [
      'Manual testing of application functionality',
      'Conceptualized gameplay scenarios and layouts for Level 5',
      'Enhanced audio assets',
      'Assisted with technical documentation and the final paper',
    ],
    accent: 'lime',
  },
  {
    title: 'AIDHUB',
    type: 'Scholarship & Financial Aid Management',
    role: 'Full-Stack Developer',
    description: 'A web-based Scholarship and Financial Aid Management System developed for District III of Bulacan. It provides applicants with a platform to submit applications, upload required documents, track application statuses, and receive notifications. It also provides administrative tools for reviewing applications, verifying documents, managing accounts, and generating reports.',
    contributions: [],
    accent: 'mint',
  },
  {
    title: 'BASC Ball Sports Event Tracker',
    type: 'Sports event tracking',
    role: 'Front-End Developer',
    description: 'A web-based sports event tracking system developed for Bulacan Agricultural State College. It supports sports event tracking, score updates, and tryout management.',
    contributions: [
      'Designed and developed the front-end interface',
      'Developed the homepage, login and registration pages, dashboard, event management, and tryout registration interfaces',
      'Integrated the front-end with the existing back-end code developed by the groupmate',
    ],
    accent: 'forest',
  },
]

export default function Page() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(stored ? stored === 'dark' : prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.classList.toggle('light', !dark)
    window.localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  const jump = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <header className="site-header">
        <button className="wordmark" onClick={() => jump('top')} aria-label="Back to top">
          <span className="mark"></span> Sheon<span className="green"> Venrick</span></button>
        <nav id="mobile-nav" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, id]) => <button key={id} onClick={() => jump(id)}>{label}</button>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <span className={dark ? 'toggle-dot dark-dot' : 'toggle-dot'}>{dark ? '◐' : '☼'}</span><span>{dark ? 'Dark' : 'Light'}</span></button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="mobile-nav">{menuOpen ? '×' : '☰'}</button>
        </div>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> Information Technology Student</p>
          <h1>Making website and mobile application <em>feel</em> fresh.</h1>
          <p className="hero-intro">I&apos;m Sheon Venrick Samaniego, an Information Technology student at Bulacan State Agricultural University with an interest in software development and mobile application development. Through academic and capstone projects, I&apos;ve worked with different programming languages, developed web applications, designed user interfaces, and tested software functionality.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => jump('work')}>Explore my work</button><button className="text-button" onClick={() => jump('contact')}>Let&apos;s talk</button></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-label">Design<br /><span>with intent</span></div><div className="art-corner">01 / 06</div></div>
        <div className="scroll-cue"><span>Scroll to explore</span><i /></div>
      </section>

      <section id="about" className="section-shell section about-section">
        <div className="section-kicker"><span>01</span><span>About me</span></div>
        <div className="about-grid">
          <div className="profile-card">
            <div className="portrait">
              <div className="portrait-head" />
              <div className="portrait-body" />
              </div>
              <div className="profile-meta">
                <strong>Sheon Venrick Samaniego</strong><span>Web and <span className="green">Mobile</span> Developer</span>
                <span>Based in The Philippines</span></div></div>
          <div className="about-copy"><h2>Aspiring to learn <span>and grow.</span></h2><p className="info1">I am an Information Technology student at Bulacan Agricultural State College with an interest in software development and mobile application development. Through academic and capstone projects, I have experience working with different programming languages, developing web applications, designing user interfaces, and testing software functionality.</p><p>My process is collaborative and communicative. I like communicating with teams to get a project done as clean as possible.</p><div className="signature">Sheon Venrick Samaniego <span>✳</span></div></div>
        </div>
      </section>

      <section id="skills" className="section-shell section skills-section">
        <div className="section-kicker">
          <span>02</span><span>Skills</span>
          </div>
          <div className="skills-heading">
            <h2>My technical toolkit<br /><span>for better outcomes.</span>
            </h2><p>From idea building to developing, I bring the right mix of thinking and making to each project.</p></div>
            <div className="skill-list">
              <div><span>01</span><h3>Programming Languages</h3><p>Python · Java · JavaScript · Dart · PHP</p></div>
              <div><span>02</span><h3>Frameworks</h3><p>Laravel</p></div>
              <div><span>03</span><h3>Web Technologies</h3><p>HTML · CSS</p></div>
              <div><span>04</span><h3>Databases</h3><p>MySQL</p></div>
              <div><span>05</span><h3>Development Tools</h3><p>Git · GitHub · Visual Studio Code · XAMPP · Figma</p></div>
              <div><span>06</span><h3>AI-Assisted Development</h3><p>Claude Code · v0 by Vercel</p></div></div></section>

      <section id="work" className="section-shell section work-section"><div className="section-kicker"><span>03</span><span>Selected work</span></div><div className="work-heading"><h2>A few things I&apos;ve<br /><span>helped bring to life.</span></h2></div><div className="project-list">{projects.map((project, index) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-visual">{index === 0 && <img className="project-image project-image-portrait" src="/images/projects/kcctalk-mobile-screen.jpg" alt="KCCTALK mobile learning app screenshot" />}{index === 1 && <img className="project-image" src="/images/projects/aidhub-dashboard.png" alt="AIDHUB dashboard screenshot" />}{index === 2 && (<div className="project-images-row"><img className="project-image" src="/images/projects/basc-ball-homepage.png" alt="BASC Ball homepage screenshot" /><img className="project-image project-image-secondary" src="/images/projects/basc-ball-dashboard.png" alt="BASC Ball dashboard screenshot" /></div>)}</div><div className="project-info"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.role}</p><p>{project.description}</p>{project.contributions.length > 0 && (<ul className="project-contributions">{project.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul>)}</div></article>)}</div></section>

      <section id="certifications" className="section-shell section credentials-section"><div className="section-kicker"><span>04</span><span>Certifications and Seminars</span></div><div className="credentials-content"><div><h3>Certifications</h3><ul className="credentials-list"><li><strong>Networking Basics</strong> — DICT-ITU DCT Initiative</li><li><strong>IPv4, IPv6, VLAN and Subnetting Fundamentals</strong> — Tech Academy</li><li><strong>Python Essentials 1</strong> — Networking Academy</li></ul></div><div><h3>Seminars</h3><ul className="credentials-list"><li><strong>Guiding Intelligence: Understanding the Ethics of Using Artificial Intelligence</strong></li><li><strong>IT Career Paths: Identifying Your Place in the Digital Industry</strong></li></ul></div></div></section>

      <section id="contact" className="contact-section"><div className="section-shell contact-inner"><div><p className="eyebrow"><span className="pulse" /> Have a good one?</p><h2>Let&apos;s make<br /><em>something great.</em></h2></div><div className="contact-side"><p>Have a project in mind, or just want to say hello? My inbox is always open.</p><a className="email-link" href="mailto:Sheonvenricksamaniego@gmail.com">Sheonvenricksamaniego@gmail.com <span>↗</span></a><div className="social-links" aria-label="Social media profiles"><a href="https://www.linkedin.com/in/sheon-venrick-samaniego/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.14-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.63 0 0 .9 0 2.202v20.592C0 23.1.63 24 1.771 24h20.451C23.2 24 24 23.1 24 21.797V2.202C24 .9 23.2 0 22.222 0h.003z"/></svg></a><a href="https://github.com/sheonven" target="_blank" rel="noreferrer" aria-label="GitHub"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a><a href="https://www.facebook.com/sheon.venrick" target="_blank" rel="noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.39 10.95 10.13 11.85v-8.39H7.08v-3.47h3.04V9.41c0-3 1.78-4.63 4.53-4.63 1.31 0 2.68.24 2.68.24v2.86h-1.46c-1.44 0-1.88.87-1.88 1.75v2.06h3.32l-.53 3.47h-2.79v8.36C19.62 23.027 24 18.592 24 12.073z"/></svg></a></div></div></div></section>
      <footer className="site-footer section-shell"><span>© 2026 Sheon Venrick Samaniego</span></footer>
    </main>
  )
}

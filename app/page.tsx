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
          <p className="hero-intro">I&apos;m Sheon Venrick Samaniego, an Information Technology student at Bulacan Agricultural State College with an interest in software development and mobile application development. Through academic and capstone projects, I&apos;ve worked with different programming languages, developed web applications, designed user interfaces, and tested software functionality.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => jump('work')}>Explore my work 
            <span>↗</span></button><button className="text-button" onClick={() => jump('contact')}>Let&apos;s talk <span>↓</span></button></div>
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

      <section id="work" className="section-shell section work-section"><div className="section-kicker"><span>03</span><span>Selected work</span></div><div className="work-heading"><h2>A few things I&apos;ve<br /><span>helped bring to life.</span></h2></div><div className="project-list">{projects.map((project, index) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-visual"><span className="project-number">0{index + 1}</span><span className="project-symbol">{index === 0 ? '✦' : index === 1 ? '◒' : '∿'}</span></div><div className="project-info"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.role}</p><p>{project.description}</p>{project.contributions.length > 0 && (<ul className="project-contributions">{project.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul>)}</div></article>)}</div></section>

      <section id="certifications" className="section-shell section credentials-section"><div className="section-kicker"><span>04</span><span>Certifications and Seminars</span></div><div className="credentials-content"><div><h3>Certifications</h3><ul className="credentials-list"><li><strong>Networking Basics</strong> — DICT-ITU DCT Initiative</li><li><strong>IPv4, IPv6, VLAN and Subnetting Fundamentals</strong> — Tech Academy</li><li><strong>Python Essentials 1</strong> — Networking Academy</li></ul></div><div><h3>Seminars</h3><ul className="credentials-list"><li><strong>Guiding Intelligence: Understanding the Ethics of Using Artificial Intelligence</strong></li><li><strong>IT Career Paths: Identifying Your Place in the Digital Industry</strong></li></ul></div></div></section>

      <section id="contact" className="contact-section"><div className="section-shell contact-inner"><div><p className="eyebrow"><span className="pulse" /> Have a good one?</p><h2>Let&apos;s make<br /><em>something great.</em></h2></div><div className="contact-side"><p>Have a project in mind, or just want to say hello? My inbox is always open.</p><a className="email-link" href="mailto:Sheonvenricksamaniego@gmai.com">Sheonvenricksamaniego@gmai.com <span>↗</span></a><div className="social-links" aria-label="Social media profiles"><a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="social-glyph">in</span></a><a href="https://github.com/your-profile" target="_blank" rel="noreferrer" aria-label="GitHub"><span className="social-glyph">gh</span></a><a href="https://www.facebook.com/your-profile" target="_blank" rel="noreferrer" aria-label="Facebook"><span className="social-glyph">f</span></a></div><p className="social-note">These are placeholder links — swap <code>your-profile</code> for your username.</p></div></div></section>
      <footer className="site-footer section-shell"><span>© 2026 Sheon Venrick Samaniego</span><a href="#top" className="text-button">Back to top ↑</a></footer>
    </main>
  )
}

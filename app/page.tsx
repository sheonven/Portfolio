'use client'

import { useEffect, useState } from 'react'

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Work', 'work'],
  ['Tools', 'tools'],
  ['Contact', 'contact'],
]

const projects = [
  { title: 'Northstar', type: 'Product design · 2024', description: 'A calmer operating system for ambitious teams, bringing plans, progress, and people into one focused workspace.', tags: ['UX strategy', 'Interface design'], accent: 'lime' },
  { title: 'Moss & Matter', type: 'Brand identity · 2023', description: 'A warm, tactile identity for a studio making everyday objects with less waste and more intention.', tags: ['Art direction', 'Digital experience'], accent: 'mint' },
  { title: 'Signal FM', type: 'Web experience · 2023', description: 'An expressive radio platform that turns discovery into a ritual for independent music listeners.', tags: ['Creative development', 'Motion'], accent: 'forest' },
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
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, id]) => <button key={id} onClick={() => jump(id)}>{label}</button>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <span className={dark ? 'toggle-dot dark-dot' : 'toggle-dot'}>{dark ? '◐' : '☼'}</span><span>{dark ? 'Dark' : 'Light'}</span></button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? '×' : '☰'}</button>
        </div>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> Web and Mobile developer</p>
          <h1>Making website and mobile application <em>feel</em> fresh.</h1>
          <p className="hero-intro">I&apos;m Sheon Venrick Samaniego — an aspiring developer focusing on creating fun and fresh experiences for users while also innovating new tools and ideas.</p>
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
          <div className="about-copy"><h2>Aspiring to learn  <span>and grow.</span></h2><p className="info1">I am a hard worker and I am a team player. I aspire to finsih task on time and do projects as requested.</p><p>My process is collaborative and communicative. I like communicating with teams to get a project done as clean as possible.</p><div className="signature">Sheon Venrick Samaniego <span>✳</span></div></div>
        </div>
      </section>

      <section id="skills" className="section-shell section skills-section">
        <div className="section-kicker">
          <span>02</span><span>What I do</span>
          </div>
          <div className="skills-heading">
            <h2>A flexible toolkit<br /><span>for better outcomes.</span>
            </h2><p>From from idea building to developing, I bring the right mix of thinking and making to each project.</p></div>
            <div className="skill-list">
              <div><span>01</span><h3>Strategy & direction</h3><p>Positioning · Research · Creative direction · Content systems</p></div>
              <div><span>02</span><h3>Brand & identity</h3><p>Visual identities · Art direction · Campaigns · Brand systems</p></div>
              <div><span>03</span><h3>Development experiences</h3><p>Product outline · Web design · Prototyping · Development</p></div></div></section>

      <section id="work" className="section-shell section work-section"><div className="section-kicker"><span>03</span><span>Selected work</span></div><div className="work-heading"><h2>A few things I&apos;ve<br /><span>helped bring to life.</span></h2><button className="text-button">View all projects <span>↗</span></button></div><div className="project-list">{projects.map((project, index) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-visual"><span className="project-number">0{index + 1}</span><span className="project-symbol">{index === 0 ? '✦' : index === 1 ? '◒' : '∿'}</span></div><div className="project-info"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><span className="project-arrow">↗</span></article>)}</div></section>

      <section id="tools" className="section-shell section journey-section"><div className="section-kicker"><span>04</span><span>My creative toolkit</span></div><div className="journey-grid"><h2>The tools I use<br /><span>to bring ideas to life.</span></h2><div className="timeline"><div><span>Video editing</span><strong>Adobe Premiere Pro / DaVinci Resolve</strong><p>Cutting stories, shaping pacing, and polishing edits for social, web, and longer-form video.</p></div><div><span>Image editing</span><strong>Adobe Photoshop / Lightroom</strong><p>Retouching images, building compositions, and creating visual assets with a clean, consistent look.</p></div><div><span>Design & motion</span><strong>Figma / After Effects / Canva</strong><p>Designing layouts, adding motion, and turning rough ideas into clear visuals ready to share.</p></div><div><span>Coding languages</span><strong>C++ / Java / Python / Dart</strong><p>Building practical software with a growing foundation across desktop, web, and application development.</p></div><div><span>Web development</span><strong>HTML / JavaScript / PHP</strong><p>Creating structured, interactive, and dynamic websites from the front end through the back end.</p></div></div></div></section>

      <section id="contact" className="contact-section"><div className="section-shell contact-inner"><div><p className="eyebrow"><span className="pulse" /> Have a good one?</p><h2>Let&apos;s make<br /><em>something great.</em></h2></div><div className="contact-side"><p>Have a project in mind, or just want to say hello? My inbox is always open.</p><a className="email-link" href="mailto:Sheonvenricksamaniego@gmai.com">Sheonvenricksamaniego@gmai.com <span>↗</span></a><div className="social-links" aria-label="Social media profiles"><a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="social-glyph">in</span></a><a href="https://www.instagram.com/your-profile" target="_blank" rel="noreferrer" aria-label="Instagram"><span className="social-glyph">ig</span></a><a href="https://github.com/your-profile" target="_blank" rel="noreferrer" aria-label="GitHub"><span className="social-glyph">gh</span></a><a href="https://www.tiktok.com/@your-profile" target="_blank" rel="noreferrer" aria-label="TikTok"><span className="social-glyph">tt</span></a><a href="https://www.youtube.com/@your-profile" target="_blank" rel="noreferrer" aria-label="YouTube"><span className="social-glyph">yt</span></a><a href="https://x.com/your-profile" target="_blank" rel="noreferrer" aria-label="X"><span className="social-glyph">𝕏</span></a><a href="https://www.facebook.com/your-profile" target="_blank" rel="noreferrer" aria-label="Facebook"><span className="social-glyph">f</span></a></div><p className="social-note">These are placeholder links — swap <code>your-profile</code> for your username.</p></div></div></section>
      <footer className="site-footer section-shell"><span>© 2026 Sheon Venrick Samaniego</span><a href="#top" className="text-button">Back to top ↑</a></footer>
    </main>
  )
}

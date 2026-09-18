export default function Hero() {
  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      {/* Subtle background decorations */}
      <div className="hero-bg-glow" aria-hidden="true" />
      <div className="hero-bg-dots hero-bg-dots--tl" aria-hidden="true" />
      <div className="hero-bg-dots hero-bg-dots--br" aria-hidden="true" />

      <div className="container hero-grid">
        {/* ── LEFT COLUMN ── */}
        <div className="hero-copy">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="hero-eyebrow__text">HI, I'M</span>
            <span className="hero-eyebrow__line" aria-hidden="true" />
          </div>

          {/* Name */}
          <h1 id="hero-title" className="hero-name">Sushant Rawat</h1>

          {/* Role */}
          <p className="hero-role">Full Stack Web Developer</p>

          {/* Description */}
          <p className="hero-description">
            I build modern, responsive web applications using JavaScript,
            Node.js, Express.js, and SQL, with a focus on clean interfaces,
            scalable backend systems, and real-world problem solving.
          </p>

          {/* Tech Stack Badges */}
          <ul className="hero-stack" aria-label="Technology stack">
            <li>
              <span className="badge-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
                  <path d="M8 25.3l2.7-1.6c.5.9 1 1.6 2.1 1.6 1.1 0 1.7-.4 1.7-2.1V13.4h3.3v9.9c0 3.5-2 5-5 5-2.7 0-4.2-1.4-5-3z" fill="#000"/>
                  <path d="M19.7 25l2.7-1.6c.7 1.2 1.6 2 3.3 2 1.4 0 2.2-.7 2.2-1.6 0-1.1-.9-1.5-2.4-2.2l-.8-.4c-2.4-1-4-2.3-4-5 0-2.5 1.9-4.4 4.8-4.4 2.1 0 3.6.7 4.7 2.6l-2.6 1.7c-.6-1-1.2-1.4-2.1-1.4-.9 0-1.5.6-1.5 1.4 0 1 .6 1.4 2 2l.8.4c2.8 1.2 4.4 2.4 4.4 5.2 0 3-2.3 4.6-5.4 4.6-3 0-5-1.4-5.9-3.3z" fill="#000"/>
                </svg>
              </span>
              JavaScript
            </li>
            <li>
              <span className="badge-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#339933"/>
                  <path d="M10.9 19.8c.4.7 1 1.2 1.8 1.2.8 0 1.3-.4 1.3-1 0-.6-.5-.9-1.4-1.3l-.5-.2c-1.4-.6-2.4-1.4-2.4-3 0-1.5 1.1-2.6 2.9-2.6 1.3 0 2.2.5 2.8 1.6L14 15.7c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4.9 1.3 1.3l.5.2c1.7.7 2.6 1.5 2.6 3.1 0 1.8-1.4 2.8-3.3 2.8-1.8 0-3-.9-3.6-2.2l1.9-1.1zM17.5 19.9c.3.5.6.9 1.2.9.5 0 .9-.2.9-.9v-7.1h2v7.2c0 1.9-1.1 2.8-2.8 2.8-1.5 0-2.4-.8-2.8-1.8l1.5-.9z" fill="white"/>
                </svg>
              </span>
              Node.js
            </li>
            <li>
              <span className="badge-icon badge-icon--text" aria-hidden="true">ex</span>
              Express.js
            </li>
            <li>
              <span className="badge-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <ellipse cx="12" cy="6" rx="10" ry="3.5" stroke="#7eb8f7" strokeWidth="1.5"/>
                  <path d="M2 6v4c0 1.93 4.48 3.5 10 3.5S22 11.93 22 10V6" stroke="#7eb8f7" strokeWidth="1.5"/>
                  <path d="M2 10v4c0 1.93 4.48 3.5 10 3.5S22 15.93 22 14v-4" stroke="#7eb8f7" strokeWidth="1.5"/>
                  <path d="M2 14v4c0 1.93 4.48 3.5 10 3.5S22 19.93 22 18v-4" stroke="#7eb8f7" strokeWidth="1.5"/>
                </svg>
              </span>
              SQL
            </li>
            <li>
              <span className="badge-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#F05032"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#F05032" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Git
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <a className="btn btn-primary btn-hero-primary" href="#projects">
              <span className="btn-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </span>
              View Projects →
            </a>
            <a className="btn btn-outline btn-hero-outline" href="#contact">
              <span className="btn-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
              </span>
              Contact Me
            </a>
            <a
              className="btn btn-download btn-hero-download"
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Sushant_Rawat_Resume.pdf"
            >
              Download Resume
              <span className="btn-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials" aria-label="Social profiles">
            <a
              href="https://github.com/Sushantrawat12"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </span>
              GitHub
              <span className="social-arrow" aria-hidden="true">↗</span>
            </a>
            <span className="social-divider" aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/sushant-rawat-543504293"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              LinkedIn
              <span className="social-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Tagline */}
          <div className="hero-tagline">
            <span className="hero-tagline__bar" aria-hidden="true" />
            <p className="hero-tagline__text">
              Turning ideas into scalable web solutions<br />
              with clean code and great user experiences.
            </p>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Developer Panel ── */}
        <div className="hero-visual">
          <div className="hero-card-glow" aria-hidden="true" />
          <div
            className="developer-card"
            role="group"
            aria-label="Developer overview"
          >
            {/* Code Editor */}
            <div className="code-editor">
              {/* Editor Top Bar */}
              <div className="code-editor__bar">
                <div className="editor-dots" aria-hidden="true">
                  <span className="dot dot--red" />
                  <span className="dot dot--yellow" />
                  <span className="dot dot--green" />
                </div>
                <p className="editor-title" aria-label="Full Stack Developer">
                  <span className="code-bracket">&lt;</span>
                  {" Full Stack Developer "}
                  <span className="code-bracket">/&gt;</span>
                </p>
              </div>

              {/* Code Block */}
              <div className="code-body" aria-label="Developer profile code">
                <div className="code-line">
                  <span className="ln">1</span>
                  <span className="code-keyword">const</span>
                  {" developer = {"}
                </div>
                <div className="code-line">
                  <span className="ln">2</span>
                  {"  "}
                  <span className="code-prop">name</span>
                  {": "}
                  <span className="code-string">"Sushant Rawat"</span>
                  {","}
                </div>
                <div className="code-line">
                  <span className="ln">3</span>
                  {"  "}
                  <span className="code-prop">role</span>
                  {": "}
                  <span className="code-string">"Full Stack Web Developer"</span>
                  {","}
                </div>
                <div className="code-line">
                  <span className="ln">4</span>
                  {"  "}
                  <span className="code-prop">skills</span>
                  {": ["}
                  <span className="code-string">"JavaScript"</span>
                  {", "}
                  <span className="code-string">"Node.js"</span>
                  {", "}
                  <span className="code-string">"Express.js"</span>
                  {", "}
                  <span className="code-string">"SQL"</span>
                  {"],"}
                </div>
                <div className="code-line">
                  <span className="ln">5</span>
                  {"  "}
                  <span className="code-prop">mindset</span>
                  {": "}
                  <span className="code-string">"Build · Learn · Improve"</span>
                  {","}
                </div>
                <div className="code-line">
                  <span className="ln">6</span>
                  {"  "}
                  <span className="code-prop">currently</span>
                  {": "}
                  <span className="code-string">"Building impactful web applications"</span>
                  {","}
                </div>
                <div className="code-line">
                  <span className="ln">7</span>
                  {"  "}
                  <span className="code-prop">goal</span>
                  {": "}
                  <span className="code-string">"Create solutions that make a difference"</span>
                </div>
                <div className="code-line">
                  <span className="ln">8</span>
                  {"};"}
                </div>
                <div className="code-line code-line--empty">
                  <span className="ln">9</span>
                </div>
                <div className="code-line">
                  <span className="ln">10</span>
                  <span className="code-comment">{"// Always open to exciting opportunities!"}</span>
                </div>
                <div className="code-line">
                  <span className="ln">11</span>
                  <span className="code-cursor" aria-hidden="true">▋</span>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="feature-cards">
              <div className="feature-card">
                <span className="feature-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M16 18l2-2-6-6-6 6 2 2" stroke="#6c8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6l2-2 6 6-2 2" stroke="#6c8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p className="feature-title">Clean Code</p>
                <p className="feature-sub">Maintainable &amp; Scalable</p>
              </div>
              <div className="feature-card">
                <span className="feature-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#f5c542" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p className="feature-title">Real Projects</p>
                <p className="feature-sub">Ideas into Reality</p>
              </div>
              <div className="feature-card">
                <span className="feature-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#6c8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="#6c8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" stroke="#6c8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p className="feature-title">Open to Work</p>
                <p className="feature-sub">Let's Build Together</p>
              </div>
            </div>

            {/* Status Bar */}
            <div className="status-bar">
              <div className="status-left">
                <span className="status-dot" aria-hidden="true" />
                <div>
                  <p className="status-label">Currently Building</p>
                  <p className="status-desc">Modern web applications with better user experiences.</p>
                </div>
              </div>
              <div className="status-right">
                <span className="always-learning">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3 3v18h18" stroke="#6c8cff" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 16l4-6 4 4 4-8" stroke="#6c8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Always Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <svg className="scroll-mouse" width="20" height="28" viewBox="0 0 20 28" fill="none">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="9" y="6" width="2" height="5" rx="1" fill="currentColor"/>
        </svg>
        <span className="scroll-text">Scroll to explore</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}

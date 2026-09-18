/* ── Skills section — fully redesigned ── */
const SKILL_META = [
  {
    title: "Frontend",
    number: "01",
    desc: "Building responsive and interactive user interfaces.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#e8623a",
    accentBg: "rgba(232,98,58,0.13)",
  },
  {
    title: "Backend",
    number: "02",
    desc: "Developing scalable server-side applications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="5" rx="1.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="2" y="11" width="20" height="5" rx="1.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="6" cy="5.5" r="1" fill="currentColor"/>
        <circle cx="6" cy="13.5" r="1" fill="currentColor"/>
      </svg>
    ),
    accent: "#3db87a",
    accentBg: "rgba(61,184,122,0.13)",
  },
  {
    title: "Database",
    number: "03",
    desc: "Working with relational databases and writing efficient queries.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 5v5c0 1.657 4.03 3 9 3s9-1.343 9-3V5" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 10v5c0 1.657 4.03 3 9 3s9-1.343 9-3v-5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    accent: "#7c6fdf",
    accentBg: "rgba(124,111,223,0.13)",
  },
  {
    title: "Tools & Platforms",
    number: "04",
    desc: "Using modern tools for development and collaboration.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#4f9cf9",
    accentBg: "rgba(79,156,249,0.13)",
  },
  {
    title: "Core Concepts",
    number: "05",
    desc: "Understanding core concepts to build robust applications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2 2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#e84393",
    accentBg: "rgba(232,67,147,0.13)",
  },
  {
    title: "Additional Skills",
    number: "06",
    desc: "Other important skills for better problem solving.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#f5a623",
    accentBg: "rgba(245,166,35,0.13)",
  },
];

import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section className="section sk-section" id="skills" aria-labelledby="skills-title">
      {/* ── decorative background blobs ── */}
      <span className="sk-blob sk-blob--tl" aria-hidden="true" />
      <span className="sk-blob sk-blob--br" aria-hidden="true" />
      <span className="sk-dots sk-dots--tr" aria-hidden="true" />
      <span className="sk-dots sk-dots--bl" aria-hidden="true" />

      <div className="sk-inner container">
        {/* ── PAGE TITLE AREA ── */}
        <div className="sk-head reveal">
          <p className="sk-kicker">MY EXPERTISE</p>
          <h2 className="sk-title" id="skills-title">Skills</h2>
          <p className="sk-subtitle">
            A collection of technologies and tools I work with.
          </p>
          <span className="sk-divider" aria-hidden="true" />
        </div>

        {/* ── CARDS GRID ── */}
        <div className="sk-grid reveal">
          {skills.map((skill, index) => {
            const meta = SKILL_META[index];
            return (
              <article
                className="sk-card"
                key={skill.title}
                style={{ "--sk-accent": meta.accent, "--sk-accent-bg": meta.accentBg }}
              >
                {/* top row: number + icon */}
                <div className="sk-card-top">
                  <span className="sk-num">{meta.number}</span>
                  <span className="sk-icon" aria-hidden="true">
                    {meta.icon}
                  </span>
                </div>

                {/* title + description */}
                <h3 className="sk-card-title">{skill.title}</h3>
                <p className="sk-card-desc">{meta.desc}</p>

                {/* skill chips */}
                <ul className="sk-tags" aria-label={`${skill.title} skills`}>
                  {skill.items.map((item) => (
                    <li key={item} className="sk-tag">{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const toggleRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      sections.forEach((id) => {
        if (document.getElementById(id)?.offsetTop <= window.scrollY + 160)
          current = id;
      });
      setActive(current);
    };
    const resize = () => {
      if (window.innerWidth > 860) setOpen(false);
      update();
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const escape = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}`}
      id="siteHeader"
    >
      <div className="navbar-wrap">
        <nav className="navbar container" aria-label="Primary navigation">
          <a
            className="brand"
            href="#home"
            aria-label="Sushant Rawat, home"
            onClick={() => setOpen(false)}
          >
            <span className="brand-logo">SR</span>
            <span className="brand-name">Sushant Rawat</span>
          </a>
          <button
            ref={toggleRef}
            className={`menu-toggle${open ? " active" : ""}`}
            id="menuToggle"
            type="button"
            aria-expanded={open}
            aria-controls="navMenu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-panel${open ? " active" : ""}`} id="navMenu">
            <ul className="nav-links">
              {sections.map((id) => (
                <li key={id}>
                  <a
                    className={`nav-link${active === id ? " active" : ""}`}
                    href={`#${id}`}
                    aria-current={active === id ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {id[0].toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav-actions">
              <button
                className="theme-toggle"
                id="themeToggle"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  /* Sun icon for dark mode (click to go light) */
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  /* Moon icon for light mode (click to go dark) */
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            <a
              className="btn btn-small btn-resume"
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Sushant_Rawat_Resume.pdf"
              onClick={() => setOpen(false)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="resume-icon"
              >
                <path
                  d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="14 2 14 8 20 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="16"
                  y1="13"
                  x2="8"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="16"
                  y1="17"
                  x2="8"
                  y2="17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <polyline
                  points="10 9 9 9 8 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Resume
            </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

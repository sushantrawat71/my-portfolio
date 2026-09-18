export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container reveal">
        <p className="section-kicker">{"Selected work"}</p>
        <h2 className="section-title" id="projects-title">
          {"Projects"}
        </h2>
        <div className="projects-grid">
          <article className="project-card">
            <div
              className="project-image"
              role="img"
              aria-label="Screenshot placeholder for YouTube Clone"
            >
              <span>{"Project preview coming soon"}</span>
            </div>
            <div className="project-body">
              <p className="project-label">{"Featured Project"}</p>
              <h3>{"YouTube Clone"}</h3>
              <p>
                {
                  "A frontend project recreating the structure and visual experience of a video browsing interface."
                }
              </p>
              <ul className="tags" aria-label="Technologies used">
                <li>{"HTML"}</li>
                <li>{"CSS"}</li>
                <li>{"JavaScript"}</li>
              </ul>
              <div className="project-actions">
                {/*  TODO: Replace disabled controls with the project's real GitHub and live demo URLs.  */}
                <span
                  className="btn btn-small btn-disabled"
                  aria-disabled="true"
                >
                  {"GitHub unavailable"}
                </span>
                <span
                  className="btn btn-small btn-disabled"
                  aria-disabled="true"
                >
                  {"Demo unavailable"}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

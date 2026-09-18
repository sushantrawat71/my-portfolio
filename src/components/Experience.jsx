export default function Experience() {
  return (
    <section
      className="section section-alt"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container narrow reveal">
        <p className="section-kicker">{"Professional journey"}</p>
        <h2 className="section-title" id="experience-title">
          {"Experience"}
        </h2>
        {/*  TODO: Replace this empty state with verified role, company, dates, responsibilities, and technologies when available.  */}
        <div className="empty-state">
          <span aria-hidden="true">{"{ }"}</span>
          <h3>{"Building experience through projects"}</h3>
          <p>
            {
              "Verified professional experience details will be added here. In the meantime, explore my project work above."
            }
          </p>
          <a className="text-link" href="#projects">
            {"View projects "}
            <span aria-hidden="true">{"\u2192"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

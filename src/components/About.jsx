export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container narrow reveal">
        <p className="section-kicker">{"A little about me"}</p>
        <h2 className="section-title" id="about-title">
          {"About Me"}
        </h2>
        <div className="about-card">
          <p>
            {
              "I'm Sushant Rawat, a web developer focused on creating responsive, accessible, and easy-to-use websites with HTML, CSS, and JavaScript."
            }
          </p>
          <p>
            {
              "I enjoy translating ideas into clean interfaces and strengthening my development skills through hands-on projects. I am also developing my Python knowledge while working toward opportunities where I can contribute, learn, and grow as a developer."
            }
          </p>
        </div>
      </div>
    </section>
  );
}

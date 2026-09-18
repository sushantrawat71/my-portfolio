import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container reveal">
        <p className="section-kicker">{"Let's connect"}</p>
        <h2 className="section-title" id="contact-title">
          {"Contact Me"}
        </h2>
        <div className="contact-grid">
          <div className="contact-copy">
            <h3>{"Have a project or opportunity in mind?"}</h3>
            <p>
              {
                "Send me a message here, or reach me directly by email or through my social profiles."
              }
            </p>
            <ul className="contact-list">
              <li>
                <span>{"Email"}</span>
                <a href="mailto:sushantrawat71@gmail.com">
                  {"sushantrawat71@gmail.com"}
                </a>
              </li>
              <li>
                <span>{"GitHub"}</span>
                <a
                  href="https://github.com/Sushantrawat12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Sushantrawat12"}
                </a>
              </li>
              <li>
                <span>{"LinkedIn"}</span>
                <a
                  href="https://www.linkedin.com/in/sushant-rawat-543504293"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Sushant Rawat"}
                </a>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

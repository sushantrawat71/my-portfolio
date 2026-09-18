export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a className="brand" href="#home">
            <span>{"SR"}</span>
            {" Sushant Rawat"}
          </a>
          <p>{"Web Developer"}</p>
        </div>
        <div className="footer-links">
          <a href="mailto:sushantrawat71@gmail.com">{"Email"}</a>
          <a
            href="https://github.com/Sushantrawat12"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"GitHub"}
          </a>
          <a
            href="https://www.linkedin.com/in/sushant-rawat-543504293"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"LinkedIn"}
          </a>
        </div>
        <p>
          {"\u00a9 "}
          <span id="currentYear">{new Date().getFullYear()}</span>
          {" Sushant Rawat. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}

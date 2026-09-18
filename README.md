# Sushant Rawat Portfolio

React + Vite portfolio with the existing design and functionality.

## Run locally

Use Node.js 22.12+ (Node 24 recommended).

```sh
cd "portfolio website"
npm install
npm run dev
```

Open the localhost URL printed in the terminal. Use Vite instead of opening index.html directly or using Live Server.

## Folder structure

```text
public/resume.pdf
src/
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Contact.jsx
    ContactForm.jsx
    Footer.jsx
  data/skills.js
  hooks/useReveal.js
  styles/index.css
  App.jsx
  main.jsx
tests/portfolio.spec.js
.env.example
.gitignore
index.html
package.json
package-lock.json
playwright.config.js
vite.config.js
```

Edit section content in src/components, skills in src/data/skills.js, and styles in src/styles/index.css. Replace public/resume.pdf to update both downloads. Header and ContactForm use React state; effects clean up browser listeners and observers.

## Contact form

Copy .env.example to .env.local and set VITE_WEB3FORMS_ACCESS_KEY to your Web3Forms access key. Restart Vite after changing it and rebuild for deployment. VITE_ variables are public browser configuration: use only the client-facing form key, never private credentials. Without a key the form validates fields and explains that sending is not configured.

Existing content and placeholders are preserved, including the email address, project links, and experience placeholder.

## Build and test

```sh
npm run build
npm run preview
npm test
```

Deploy dist/ to a static host. Relative asset paths support subdirectory hosting. Tests use Microsoft Edge via Playwright and never send real contact messages. On other systems remove channel: 'msedge' from playwright.config.js and run npx playwright install chromium.

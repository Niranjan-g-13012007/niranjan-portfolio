# Niranjan G — Portfolio

Premium, modern, responsive portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build lands in `dist/`.

## Project structure

```
src/
  assets/        Profile image
  components/    Reusable UI: Navbar, SplashScreen, Reveal, AnimatedCounter, etc.
  sections/      Page sections: Hero, About, Skills, Projects, etc.
  data/          content.js — all site copy & data lives here, edit this to update content
  hooks/         useActiveSection (navbar highlight), useMouseParallax (hero parallax)
public/
  Niranjan_G_Resume.pdf   Downloadable resume (linked from Navbar + Hero)
  favicon.svg             NG monogram favicon
```

## Editing content

Almost everything — name, role, skills, projects, achievements, certifications, education,
contact links — lives in `src/data/content.js`. Edit values there rather than digging
through components.

## Resume preview

Clicking "Download Resume" (in the Hero, or "Preview Resume" in the mobile nav menu) opens
a modal showing the PDF inline, with Download and "Open in tab" buttons. There's no direct
download from the navbar by design.

## Swapping the resume

Replace `public/Niranjan_G_Resume.pdf` with your latest resume, keeping the same filename
(or update `resumeUrl` in `src/data/content.js` if you rename it).

## Certificate links

All certificate entries in `src/data/content.js` (`certifications` array) currently use
placeholder `url: "#"` — replace these with your real certificate URLs when ready.

## Adding real project images / live demo links

Each project in `src/data/content.js` has a `demo: null` field — set it to a URL to enable
the "Live Demo" button. Project cards currently use a generated gradient placeholder
(`ProjectVisual` in `src/sections/Projects.jsx`); swap in real screenshots there when ready.

## Notes

- This is a frontend-only project — no backend, no API routes. The contact form shows a
  success animation on submit but does not actually send email; wire it up to a service
  like Formspree, EmailJS, or your own backend when ready.
- Splash screen plays on every full page load/refresh (by design, per the brief).
- Color tokens, fonts, and animation keyframes are defined in `src/index.css` under `@theme`.

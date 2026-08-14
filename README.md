# Mogan Roopan Krishna — Data Analyst Portfolio

A premium, editorial portfolio built with React, TypeScript, Vite, and Tailwind CSS.
Dark grayscale aesthetic with Space Grotesk display typography, handcrafted monochrome
mockups, and subtle Apple-grade animations.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** — dev server and build
- **Tailwind CSS 3** — styling
- **Lucide React** — icons
- **Inter** + **Space Grotesk** — typography (via Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

## Build

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build
npm run typecheck  # TypeScript type checking
npm run lint       # ESLint
```

## Project Structure

```
├── index.html              # HTML entry with SEO meta tags
├── vite.config.ts          # Vite config with @/ path alias
├── tailwind.config.js      # Tailwind theme (grayscale palette, Space Grotesk)
├── postcss.config.js       # PostCSS (Tailwind + Autoprefixer)
├── tsconfig.json           # TypeScript root config
├── tsconfig.app.json       # App-specific TS config
├── tsconfig.node.json      # Node-specific TS config
├── eslint.config.js        # ESLint flat config
├── package.json
├── package-lock.json
└── src/
    ├── main.tsx            # React entry point
    ├── App.tsx             # Root component
    ├── index.css           # Global styles, fonts, Tailwind layers
    ├── vite-env.d.ts       # Vite type declarations
    ├── data/
    │   └── portfolio.ts    # All content: profile, projects, certifications
    ├── hooks/
    │   └── useReveal.ts    # Scroll reveal hook (IntersectionObserver)
    └── components/
        ├── Loader.tsx          # Initial loading screen
        ├── Navbar.tsx          # Sticky nav with underline animation
        ├── Hero.tsx            # Hero section with headline + CTAs
        ├── HeroMockup.tsx      # Handcrafted monochrome dashboard mockup
        ├── About.tsx           # About + integrated skills
        ├── Projects.tsx        # Project case studies (alternating layout)
        ├── ProjectMockup.tsx   # Per-project monochrome mockups (4 variants)
        ├── Certifications.tsx  # Minimal vertical timeline
        ├── Contact.tsx         # Contact section with glass buttons
        ├── Footer.tsx          # Minimal footer
        └── Reveal.tsx          # Scroll-reveal wrapper component
```

## Customization

All content lives in `src/data/portfolio.ts` — update your name, email, links,
projects, and certifications there. The rest of the site reads from that file.

## License

Personal portfolio. All rights reserved.

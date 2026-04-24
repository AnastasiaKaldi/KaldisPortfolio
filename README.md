# Kaldis Portfolio

A literary portfolio for Greek author Thanos Kaldis, built with React and Vite. The site presents his work through an interactive flipbook that readers open like a real book, with bilingual support in Greek and English.

---

## Overview

The portfolio is designed to feel like a publication rather than a webpage. At its center is a page-curl flipbook powered by react-pageflip, containing chapters on the author's biography, selected works, a curated quotation, and contact details. Outside the book, the site wraps the experience in a full-screen hero, an about section, a voice section, and a footer, all sharing the same bilingual context.

Greek is the default language. A toggle in the navigation bar switches the entire site to English without a page reload.

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | React 19 + Vite |
| Flipbook | react-pageflip (HTMLFlipBook) |
| Internationalisation | React Context API, no external library |
| Fonts | Marcellus, Cormorant Garamond, EB Garamond (Google Fonts) |
| Testing | Jest + @testing-library/react |
| Deployment | Netlify (continuous deployment from GitHub) |

---

## Features

**Interactive flipbook.** The book component renders realistic page-curl animations. Each chapter is a forwardRef page passed directly to HTMLFlipBook, which requires the ref forwarding pattern for child management.

**Bilingual content.** A LanguageContext wraps the entire application and exposes a lang value and setLang setter. All UI strings live in a single translations object keyed by language code. Chapter data in chapters.js stores every text field as an object with el and en keys.

**Bookmark navigation.** The site header uses a CSS clip-path polygon to cut a V-notch into the bottom of the bar, giving it the silhouette of a bookmark. The clip-path is removed when the mobile menu is open so the menu is not clipped.

**Smooth mobile menu.** Rather than conditionally rendering the mobile nav, it is always in the DOM and animated with max-height, opacity, and translateY transitions driven by a cubic-bezier curve. This enables both enter and exit animations.

**Real book covers.** The Selected Works section fetches cover images from the Fylatos publishing CDN and links each book directly to its purchase page.

---

## Local Development

```bash
git clone https://github.com/AnastasiaKaldi/KaldisPortfolio.git
cd KaldisPortfolio
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

---

## Running Tests

```bash
npm test
```

The test suite uses Jest with babel-jest to handle ESM source in a CommonJS test environment. Fifty-one tests across six suites cover translations, chapter data structure, language context behaviour, and all site components. A custom mock stands in for react-pageflip, which is incompatible with jsdom.

---

## Deployment

The site is deployed on Netlify via continuous deployment from the main branch of this repository. A `netlify.toml` at the project root configures the build command and the SPA redirect rule that sends all paths to `index.html`.

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Pushing to main triggers a new deploy automatically.

---

## Project Structure

```
src/
  components/
    flip/       # Flipbook pages (Cover, TitlePage, TocPage, ChapterOpener, etc.)
    site/       # Site sections (SiteNav, SiteHero, SiteAbout, SiteFooter, etc.)
  content/
    chapters.js # Bilingual chapter and book data
  i18n/
    LanguageContext.jsx
    translations.js
```

---

## Palette

| Name | Use |
|---|---|
| Sapphire | Secondary ink, links |
| Royal Blue | Body text, backdrop |
| Quicksand | Accents, flourishes |
| Swan Wing | Paper, on-cover type |
| Shellstone | Paper edge, muted text |
| Midnight | Deep backgrounds |

---

## Author

Thanos Kaldis is a Greek literary fiction author published by Fylatos. His work can be found at [fylatos.gr](https://www.fylatos.gr).

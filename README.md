# Athanasios Kaldis — Portfolio

A book-themed portfolio website for author Athanasios Kaldis. The site is presented as a literary book: a hard cover, a table of contents, chapter openers, and prose pages you turn with your mouse or finger.

## Stack

- **Vite** + **React 19**
- **react-pageflip** for the realistic page-turn animation
- **framer-motion** (installed, available for future animation polish)
- Google Fonts: Marcellus, Cormorant Garamond, EB Garamond

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Project structure

```
src/
  App.jsx                     # App shell
  App.css
  index.css                   # Theme: palette, fonts, globals
  main.jsx
  components/
    Book.jsx                  # Orchestrates the flipbook
    Book.css
    Cover.jsx                 # Hard front/back covers
    Page.jsx                  # Generic page wrapper (ref-forwarded)
    TableOfContents.jsx       # Clickable TOC
    ChapterOpener.jsx         # Right-hand chapter title page
    ChapterBody.jsx           # Left-hand chapter prose / works / contact
  content/
    chapters.js               # Placeholder content — replace with real copy
```

## Replacing placeholder content

All copy lives in `src/content/chapters.js`. Each chapter accepts one of three content shapes:

- `body: [paragraph, paragraph, ...]` — for prose chapters
- `works: [{ title, year, note }, ...]` — for the "Selected Works" chapter
- `contact: { email, location, social: [{ label, href }, ...] }` — for the correspondence chapter

## Palette

| Name       | RGB               | Use                        |
| ---------- | ----------------- | -------------------------- |
| Sapphire   | 48, 80, 112       | Secondary ink, links       |
| Royal Blue | 17, 34, 80        | Body text, backdrop        |
| Quicksand  | 224, 181, 143     | Accents, flourishes        |
| Swan Wing  | 245, 240, 233     | Paper, on-cover type       |
| Shellstone | 217, 203, 194     | Paper edge, muted text     |


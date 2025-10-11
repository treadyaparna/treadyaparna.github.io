# 🌐 Aparna Saha — Personal Website

This repository contains the source code for my personal website, built with [Docusaurus 3](https://docusaurus.io/).  
The site is deployed on **GitHub Pages**: 👉 [https://treadyaparna.github.io](https://treadyaparna.github.io)

## 🚀 Tech Stack

- [Docusaurus 3](https://docusaurus.io/) — static site generator
- [React](https://react.dev/) — UI framework
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [GitHub Actions](https://docs.github.com/en/actions) — CI/CD deployment
- [GitHub Pages](https://pages.github.com/) — hosting

## 📂 Folder Structure

```
├── blog/                   # Blog posts (MDX/Markdown)
├── docs/                   # Documentation pages (used as homepage too)
│   └── intro.md            # Landing page (slug "/")
├── src/
│   ├── css/                # Custom CSS overrides
│   └── components/         # React components (if any)
├── static/                 # Static assets (images, pdfs, etc.)
│   └── img/                # Images served at /img/*
├── docusaurus.config.ts    # Docusaurus site config
├── sidebars.ts             # Docs sidebar config
└── package.json
```

## 🛠️ Development

Clone the repo and start the dev server:

```bash
git clone https://github.com/treadyaparna/treadyaparna.github.io.git
cd treadyaparna.github.io

npm install
npm start
```

The site will be available at 👉 [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deployment

To build locally:

```bash
npm run build
npm run serve
```

Deployment is handled via **GitHub Actions**. On every push to `main`, the site is built and deployed to the `gh-pages` branch.

## ✨ Features

- 📖 Homepage served from `/docs/intro.md`
- 📝 Blog with reading time & tags
- 🎨 Syntax highlighting with [Prism themes](https://github.com/FormidableLabs/prism-react-renderer)
- 🔗 Mermaid diagrams support
- 📷 Custom images and assets from `/static/img`
- 🌍 Deployed automatically with GitHub Actions

## 👩‍💻 Author

**Aparna Saha**
🔗 [LinkedIn](https://www.linkedin.com/in/aparnasaha/) | [GitHub](https://github.com/treadyaparna)

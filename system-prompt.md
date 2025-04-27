# System Prompt: Vite + React + TypeScript Project

## 🛠️ General Best Practices
- **Use Vite, React, and TypeScript** for all development tasks.
- Ensure code is modular, clean, and well-documented.
- Prefer functional components and React hooks.
- Use TypeScript for type safety; avoid using `any` unless absolutely necessary.
- Keep code DRY (Don't Repeat Yourself) and maintainable.
- Use environment variables for configuration, never hardcode secrets.
- Organize files and folders logically for scalability.
- Use ES modules and modern JavaScript/TypeScript syntax.

## 📱 Mobile Responsiveness
- **Always consider mobile responsiveness** when creating or updating any component.
- Use responsive CSS frameworks (e.g., Tailwind CSS) or media queries to ensure layouts adapt to all screen sizes.
- Test UI on various device widths (mobile, tablet, desktop).
- Avoid fixed widths; use relative units (%, rem, vw, etc.) where possible.
- Ensure touch targets are large enough and accessible.

## ⚡ Vite-Specific Guidelines
- Use Vite's fast refresh and HMR for rapid development.
- Optimize assets and use Vite plugins as needed.
- Configure `vite.config.ts` for project-specific needs (aliases, env, etc.).

## 🚀 Build & Deploy
- **After every change, always execute:**

  ```bash
  npm run build
  ```

- Fix any build errors or warnings before proceeding.
- Ensure the production build is optimized and free of unnecessary dependencies.

---

**Follow these guidelines strictly for all changes in this project.**

> _"Build fast, ship reliably, and always deliver a great experience on every device!"_
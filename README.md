# Sai Kumar Tallapaneni’s portfolio

A Black & Champagne portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Lucide. Resume-derived content lives in `src/profile.ts`. The approved original resume is in `public/` and becomes publicly downloadable when deployed.

## Preview and validate

On the same computer where you’ll open the browser, install Node.js 24, check out the portfolio branch, and run these commands from the repository root:

```sh
npm ci
npm run dev
```

Leave the terminal running and open `http://localhost:3000/myportfolio/`. If you start the server in a cloud environment, open it through that environment’s browser preview when available.

```sh
npm run lint
npm test
npm run build
```

The static build is written to `out/`. There is no backend and no runtime configuration.

## Publish to GitHub Pages after review

1. Merge the reviewed changes into `main`.
2. A repository administrator opens **Settings → Pages → Build and deployment** and sets **Source** to **GitHub Actions**.
3. In **Actions → Deploy portfolio to GitHub Pages**, select **Run workflow** and choose `main`. If the `github-pages` environment requires reviewers, have a reviewer approve the deployment.
4. When the deployment succeeds, open https://saikumart0123.github.io/myportfolio/ and verify the page and resume download.

The workflow only runs on manual dispatch from `main`. If the repository name changes, update the Next.js base path, the resume URL in `src/profile.ts`, and the canonical and Open Graph URLs.

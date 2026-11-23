# Sai Kumar Tallapaneni’s portfolio

A static React portfolio built with Vite, Tailwind CSS, and Lucide. Resume-derived content lives in `src/profile.js`. The contact section uses email, LinkedIn, and the GitHub account associated with this repository. The site has no backend or credentials.

## Preview and validate

Use Node.js 24 with npm. From the repository root:

```sh
npm ci
npm run dev
```

Open `http://localhost:5173/myportfolio/`. To review the same build used in deployment:

```sh
npm run lint
npm test
npm run build
npm run preview
```

Open `http://localhost:4173/myportfolio/`.

## Publish to GitHub Pages after review

1. Merge the reviewed changes into `main`.
2. A repository administrator opens **Settings → Pages → Build and deployment** and sets **Source** to **GitHub Actions**. A private repository needs a GitHub plan that supports Pages for private repositories.
3. In **Actions → Deploy portfolio to GitHub Pages**, click **Run workflow**, select **main**, and start the run. If the `github-pages` environment has required reviewers, have a reviewer approve the deployment there.
4. Open https://saikumart0123.github.io/myportfolio/ when the deployment succeeds. Confirm that the site loads and that navigation, project details, and contact links work.

The workflow runs on manual dispatch from `main`. If the repository name changes, update the Vite base path, the canonical and Open Graph URLs, and the links in this README.

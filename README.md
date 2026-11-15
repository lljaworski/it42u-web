# IT42U landing page

Static Next.js landing page for IT42U, deployed to GitHub Pages.

## Development

```bash
pnpm install
pnpm dev
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which runs `pnpm build` (static export to `out/`) and publishes it to GitHub Pages.

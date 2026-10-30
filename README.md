# Olvarel Landing Pages

A simple, framework-free website for Olvarel digital products.

## Routes

- `/` — temporary Olvarel homepage (to be replaced with the full brand site).
- `/screen-time` — **“The Phone Is Not The Problem”** sales page.

## Project structure

```
index.html              # temporary Olvarel homepage
home.css                # homepage styles
screen-time/
  index.html            # eBook landing page
  styles.css            # landing page design
  script.js             # five-hour reminder and sticky purchase button
vercel.json             # maps /screen-time to the landing page
```

Each future offer can have its own folder and URL slug.

## Vercel

Deploy the repository root with **Framework Preset: Other**, no build command and the root (`.`) as the output directory. The `vercel.json` rewrite serves the eBook landing page at `/screen-time` without changing the browser URL.

After pushing to the connected `main` branch, Vercel should deploy the new version automatically.

## Launch checks

- Open `/` and confirm it shows the Olvarel placeholder, not the sales page.
- Open `/screen-time` and `/screen-time/` and confirm the full sales page appears with working styles and countdown.
- Check all seven externally hosted product images, particularly in a private browser window.
- Verify the Selar checkout buttons and the actual checkout price and delivery process.
- The five-hour timer is a personal reminder, not a Selar price-expiry mechanism.
- Add Meta conversion tracking before running sales campaigns.

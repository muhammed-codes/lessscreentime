# Olvarel Landing Pages

A simple, framework-free website for Olvarel digital products.

## Routes

- `/` — Olvarel digital-resource storefront (brand home, featured guide, and support).
- `/screen-time` — **“The Phone Is Not The Problem”** original sales page.
- `/screen-time-skills` — alternative landing page focused on helping children discover useful digital skills.

## Project structure

```
index.html              # Olvarel storefront and SEO/social metadata
home.css                # responsive storefront styles
assets/
  olvarel-mark.svg      # monogram and favicon
  olvarel-icon-32.png   # small raster favicon
  olvarel-icon-180.png  # mobile home-screen icon
  olvarel-social.png    # homepage sharing card
  olvarel-screen-time-social.png  # original product-angle sharing card
  olvarel-skills-social.png       # digital-skills-angle sharing card
screen-time/
  index.html            # eBook landing page
  styles.css            # landing page design
  script.js             # five-hour reminder and sticky purchase button
screen-time-skills/
  index.html            # alternative eBook sales page (creative-skills angle)
  styles.css            # matching visual design, independently maintainable
  script.js             # five-hour reminder and sticky purchase button
vercel.json             # maps both landing page routes
```

Each future offer can have its own folder and URL slug.

## Vercel

Deploy the repository root with **Framework Preset: Other**, no build command and the root (`.`) as the output directory. The `vercel.json` rewrites serve each eBook landing page at its own clean URL without changing the browser URL.

After pushing to the connected `main` branch, Vercel should deploy the new version automatically.

## Launch checks

- Open `/` and confirm the Olvarel storefront appears with brand colours, featured guide, real contact links, and a working product CTA.
- Open `/screen-time` and `/screen-time/` and confirm the original sales page appears with working styles and countdown.
- Open `/screen-time-skills` and `/screen-time-skills/` and confirm the alternative sales page appears with working styles and countdown.
- Check the storefront product image and all seven externally hosted product images on each sales page, particularly in a private browser window.
- Verify favicon, canonical URLs, JSON-LD, and Open Graph/Twitter sharing previews for all three pages.
- Verify the Selar checkout buttons and the actual checkout price and delivery process.
- The five-hour timer is a personal reminder, not a Selar price-expiry mechanism.
- Add Meta conversion tracking before running sales campaigns.

## Brand and page metadata

- Brand palette: warm ivory `#F7F2E9`, terracotta `#B77860`, soft sage `#9FAB9A`, deep charcoal `#242B29`.
- The landing pages keep their distinct parenting-product colour treatment; only their metadata and favicon references were updated.
- All pages define canonical URLs, descriptions, Open Graph/Twitter preview tags, and structured data. Three PNG sharing cards are hosted under `/assets`.
- The favicon is a simple Olvarel terracotta O monogram. If the final artwork differs from this code-drawn mark, replace `/assets/olvarel-mark.svg` and its generated PNG variants.
- **No Meta Pixel ID is configured.** Add the real Pixel/dataset ID and any required consent handling before running conversion-optimised ads.

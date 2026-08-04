
# ARINSA AI MINDS frontend

## Services architecture

The Services experience is data-driven from `src/data/services.js`.

- Landing page: `/services`
- Categories: `/services/artificial-intelligence`, `/services/data-automation`, `/services/software-product-engineering`, `/services/cloud-technology`, `/services/digital-experience`, `/services/advisory-transformation`, and `/services/managed-technology-services`
- Service pages: `/services/:categorySlug/:serviceSlug`

Each category contains its service definitions and each service carries its short description and detailed capability list. This keeps the site CMS-ready: a future CMS/API can produce the same category/service shape without changing the page components.

## Adding content

1. Add a category to `categories` in `src/data/services.js` with its name, slug, description, industries and services.
2. Add a service by using the `service(name, slug, capabilities)` helper inside its category.
3. Use stable slugs when connecting an industry, case study or insight in a future CMS. The service object already exposes `categorySlug` and `id` through `allServices`.
4. Update `public/sitemap.xml` for any publicly indexed route additions.
5. Set the title, description and canonical URL with the shared `SEO` component; service and category templates do this automatically.

## Service search

The Service Finder searches structured local service data across service names, category names and capability names. It also supports category filtering, reset and an accessible no-results state. No backend is required for the current catalogue.

## Service visuals

The shared service pages use CSS-based architecture diagrams and existing brand styling. Add approved, optimized images per service to `src/assets` only when imagery has been reviewed; do not add unlicensed partner or customer artwork.

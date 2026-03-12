# Developer Dashboard

A personal developer capability dashboard built with Angular 21 + Tailwind CSS.

## What this app shows
- Professional summary and links (GitHub / LinkedIn).
- Skills and proficiency indicators.
- Radar chart overview of technical strengths.
- Project portfolio with responsive slider + swipe support.
- Architecture and career timeline sections.
- Light/Dark theme toggle with persistence.

## Tech stack
- Angular 21 (standalone components + lazy routes)
- Tailwind CSS
- ng-apexcharts / ApexCharts
- Vitest via Angular test builder

## Development
```bash
npm install
npm start
```
Then open `http://localhost:4200`.

## Build
```bash
npm run build
```

## Testing
```bash
npm test
```

## Architecture notes
- Route-level lazy loading is configured in `src/app/app.routes.ts`.
- Dashboard data is centralized in `src/app/pages/dashboard/dashboard.data.ts`.
- Theme state is managed by `src/app/core/theme.service.ts`.
- Dashboard UI is split into focused components under `src/app/pages/dashboard/components`.

## Deployment
Deploy the built artifacts from `dist/developer-dashboard/browser` to any static hosting provider.

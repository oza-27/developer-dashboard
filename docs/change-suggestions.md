# Suggested Changes for `developer-dashboard`

This document captures practical improvements identified after reviewing the current Angular app.

## 1) Routing & bundle performance (High impact)
- Convert page routes to **lazy-loaded components** (`loadComponent`) so initial bundle size stays small as content grows.
- Add a wildcard fallback route (`**`) for unknown URLs.

Why:
- Current routing eagerly imports all pages from `app.routes.ts`.

## 2) Dashboard component refactor (High impact)
- Split `Dashboard` into smaller standalone components:
  - `metrics-cards`
  - `skills-overview`
  - `project-slider`
  - `timeline`
- Move static data arrays (`skills`, `projects`, `timeline`, `architecture`) into typed constants/services.
- Replace `any` chart options with a proper ApexCharts type.

Why:
- `dashboard.ts` currently mixes UI behavior, static content, and large data blocks in one file.

## 3) Accessibility improvements (High impact)
- Add `aria-label` attributes to icon-only buttons (sidebar collapse, slider nav, theme toggle).
- Add keyboard-focus styles for interactive controls.
- Ensure sufficient contrast for muted text in dark mode.

Why:
- Multiple controls rely on icon text and visual context only.

## 4) Mobile responsiveness fixes (Medium impact)
- Make project slider dynamic by viewport size (1 card mobile, 2 tablet, 3 desktop).
- Add a swipe-friendly interaction for touch devices.

Why:
- `visibleCount` is fixed at `3`, which can feel cramped on smaller screens.

## 5) Theme consistency (Medium impact)
- Centralize theme state in a dedicated service and sync globally.
- Persist theme changes (`localStorage.setItem`) when toggled.

Why:
- Theme is read on init but toggle logic is local to dashboard behavior.

## 6) Navigation maintainability (Medium impact)
- Replace duplicated sidebar links with a typed navigation array rendered via `*ngFor`.
- Use Angular `routerLinkActive` with exact matching rules consistently.

Why:
- Sidebar template repeats similar blocks for every menu item.

## 7) Testing coverage (Medium impact)
- Add component tests for:
  - project slider `prev/next` boundaries
  - route active indicator behavior
  - theme toggle persistence
- Add at least one integration test for route-to-page rendering.

Why:
- Current specs are mostly scaffold defaults and do not protect key UI logic.

## 8) Data quality & portfolio completeness (Low/Medium impact)
- Fill project `github`/`demo` URLs or hide empty links in UI.
- Normalize naming and architecture labels for consistent tone.

Why:
- Portfolio data is present but currently incomplete in places.

## 9) README quality (Low impact)
- Replace default Angular CLI boilerplate with project-specific documentation:
  - app purpose
  - architecture overview
  - feature list
  - screenshots
  - deployment steps

Why:
- Current README is mostly generated template text.

## 10) Cleanup (Low impact)
- Remove unused imports/fields and dead styles.
- Add stricter TypeScript settings incrementally (`noImplicitOverride`, `noUnusedLocals`).

Why:
- There are opportunities to tighten code quality as the app expands.

---

## Suggested implementation order
1. Routing lazy loading + wildcard route.
2. Dashboard split into smaller components + typing improvements.
3. Accessibility + responsive slider behavior.
4. Theme service + persistence.
5. Tests and README upgrade.

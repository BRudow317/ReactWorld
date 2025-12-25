# Project Improvement Plan (RAC5 Standards)

## Goals
- Stabilize layout and styling; eliminate cascade breakages.
- Establish clear app architecture: features, pages, components, shared UI.
- Standardize design tokens, theming, and spacing to stop ad-hoc overrides.
- Improve reliability via type-safety, linting, testing, and CI gates.

## Immediate Triage (0-3 days)
- Inventory components and pages; note duplicates and unused items.
- Identify global CSS and inline styles that leak across pages; flag for removal.
- Pin dependency versions; remove unused packages; add lockfile hygiene.
- Add Prettier + ESLint autofix-on-commit (pre-commit hook) to stop drift.
- Capture current spacing/layout issues with screenshots before refactors.

## Architecture Target (Layout 1: Typical React wiring)
- `/src/app`: app shell (providers, router, layout frames, error boundaries).
- `/src/pages`: route-level views that orchestrate features; thin wrappers only.
- `/src/features/<feature>`: self-contained domain slices with components, hooks, state, tests, styles.
	- e.g., `checkout`, `auth`, `profile`, each owning its UI and data hooks.
- `/src/shared/ui`: design-system atoms/molecules (buttons, inputs, grid, typography, layout primitives).
- `/src/shared/lib`: helpers (formatters, api clients, date utils, hooks without domain knowledge).
- `/src/shared/config`: env, constants, feature flags.
- `/src/shared/styles`: design tokens, theme, mixins, global reset only.
- `/src/shared/assets`: icons, images, fonts (if not component-scoped).

## Standard Structure for this repo (practical map)
- `/src/app`: move `App.jsx`, router setup, providers, layout frames from `src/layouts` that are global (header/footer/shell).
- `/src/pages`: keep route entry points; each page composes feature components only. No business logic here.
- `/src/features/<domain>`: create real domains (`address`, `customer`, `auth`, `content`, etc.). Move related components from `src/pages`, `src/layouts`, `src/hooks`, and `src/api` into the right feature folders. Co-locate tests and styles.
- `/src/shared/ui`: move reusable UI from `bin/library/BaseUiComponents`, `bin/library/Card`, `bin/library/Icons`, and similar atoms/molecules. Keep them presentational.
- `/src/shared/lib`: move generic helpers from `src/utils` and shared hooks from `src/hooks` that are not domain-specific.
- `/src/shared/styles`: move tokens/themes from `src/themes`; keep only reset + CSS variables here.
- `/src/shared/assets`: move any global icons/images from `bin/library/Icons` (SVGs) and `src/assets` that are not feature-owned.
- `/legacy` (or `/archive`): park old `bin/Legacy*`, `bin/examples`, and `LegacyBuild` content so it stops polluting imports; reintroduce only after review.

### Page/Feature wiring in practice
- Pages: import data via hooks/providers from features; assemble layout; handle page-level loading/error boundaries only.
- Features: own API hooks, validation, and state machines; expose presentational + container components to pages.
- Shared UI: no API calls or domain branching; props-only. If logic creeps in, push it into a feature container.
- Routing: central config in `/src/app/routes`; lazy-load page components; keep route guards here.

## Component Standards
- Prefer function components with hooks; no class components.
- Props typed (if TS) or validated (PropTypes) until TS migration.
- Composition over inheritance; no deep prop drilling—use context only for true app-wide concerns.
- Avoid default exports for shared UI; use named exports to prevent circular deps.
- Each component folder: `index`, `Component.jsx`, `Component.test`, `Component.styles` (or CSS module), `Component.stories` (optional).

### Wiring rules for components and pages
- Pages do: data fetching composition, layout frames, pass props to feature components; no business logic.
- Features own their logic: data hooks, mutations, local state machines, validation.
- Shared UI is dumb/presentational; no business logic or data fetching.
- Avoid cross-feature imports; communicate via shared/ui + shared/lib only.
- Keep routing config in `/src/app/routes` and lazy-load feature pages.

## Styling Strategy (adopt this)
- Primary: CSS Modules per component for scoping and performance; co-locate `.module.css` with components.
- Global: minimal reset + `:root` design tokens (colors, spacing, typography, radii, shadows) in `/src/shared/styles`.
- Layout primitives: build `Stack`, `Inline`, `Grid`, `Container` in `shared/ui` to enforce spacing instead of ad-hoc margins.
- Optional: styled-components only when you need prop-driven variants or advanced theming; avoid mixing styles for the same component between modules and styled-components.
- Page styles: keep minimal and focused on layout wrappers; page content should rely on feature/shared components for styling.
- Avoid inline style objects except for dynamic values; never use `!important` in shared code.

## Layout / Spacing Remediation
- Introduce spacing scale: `--space-1: 4px`, `--space-2: 8px`, `--space-3: 12px`, `--space-4: 16px`, `--space-5: 24px`, `--space-6: 32px`.
- Standard containers: `max-width` breakpoints (e.g., 540/720/960/1200) and consistent gutters.
- Create page templates: `Page`, `Section`, `Card` with default padding/margins.
- Replace magic numbers with tokens; audit `margin/padding` for non-token values.

## State & Data
- Keep server/cache state separate from UI state (React Query or SWR for server state).
- Avoid global stores for local UI concerns; prefer component state and lifting only when needed.
- Centralize API clients; handle errors/loading consistently; add request/response types.
- Add suspense-friendly data loaders where possible.

## Routing
- Central route config; lazy-load feature pages; code-split heavy routes.
- Guarded routes via higher-order wrappers; avoid auth logic inside page components.

## Testing & Quality
- Unit: React Testing Library for components; MSW for API mocks.
- Visual: add Chromatic/Storybook or Playwright smoke for layout regressions.
- Linting: ESLint with React/JSX a11y; Stylelint if using CSS modules; Prettier for formatting.
- CI: run lint + test + type-check on push/PR; block merges on red.

## Tooling
- Storybook for shared UI review and visual baselines.
- Bundle analysis (Vite plugin) to keep size in check.
- Husky + lint-staged for pre-commit enforcement.

## Migration Plan (Phased)
1) Freeze new pages/components except bugfixes; map current UI inventory.
2) Choose styling approach (CSS modules) and create token file + layout primitives.
3) Refactor shared UI (buttons, inputs, typography) to design-system standards.
4) Move features into `/src/features/*`; relocate hooks/utilities to `/src/shared`.
5) Replace global/inline styles with tokens + primitives; fix spacing issues per page.
6) Add routing config + lazy loading; centralize API clients; add React Query.
7) Add Storybook + smoke tests; enable CI gates (lint/test/type-check).
8) Remove legacy/unused components and pages; document patterns in `README`/`ComponentCatalog`.

## Open Questions
- Target theming approach (light/dark? brand tokens)?
- Must support legacy layouts during transition? If yes, need shims/adapters.
- Any accessibility level required (WCAG 2.1 AA?)
- Performance budgets (LCP/CLS) or bundle size targets?

## Next Actions
- Confirm styling choice (CSS modules vs styled-components) and token scale.
- Approve folder structure shift and freeze window.
- Schedule audit of current pages to prioritize layout fixes.

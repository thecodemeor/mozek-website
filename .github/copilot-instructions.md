Project: Mozek — Copilot Instructions

Quick orientation
- **Stack:** Angular 20 (standalone components), TypeScript, SCSS. Main entry: [src/app/app.ts](src/app/app.ts#L1-L60).
- **Run / build:** use `npm start` (runs `ng serve`), `npm run build`, `npm test` — see [package.json](package.json#L1-L40).

Architecture & patterns to know
- **Standalone components:** components are declared with `standalone: true` and use `templateUrl`/`styleUrl(s)` — e.g. [src/app/app.ts](src/app/app.ts#L1-L60) and pages in [src/app/pages](src/app/pages).
- **Router + lazy components:** routes use `loadComponent` to lazy-load page components — see [src/app/app.routes.ts](src/app/app.routes.ts#L1-L40).
- **Reactive primitives:** code uses Angular signals and `computed` from `@angular/core` for local reactive state (see `ResponsiveService` usage in [src/app/app.ts](src/app/app.ts#L1-L60) and [src/app/services/responsive.service.ts](src/app/services/responsive.service.ts#L1-L200)).
- **Utility services:** `ResponsiveService` centralizes breakpoint logic (mobile/tablet/desktop) and is provided in root; prefer calling `breakpoint()` or `when()` for consistent behavior.
- **Third-party local package:** `mozek-angular` is a dependency; components import `MozSwitch` from it and there is a local `MozekButton` component at [src/app/assets/components/button.ts](src/app/assets/components/button.ts#L1-L80).

Conventions for code edits
- Follow existing file layout: `*.ts` for logic, `*.html` for templates, `*.scss` for styles placed alongside components in `src/app/pages/*`.
- Keep `loadComponent` lazy imports when adding pages to preserve route-level code-splitting (see [src/app/app.routes.ts](src/app/app.routes.ts#L1-L40)).
- Prefer using `ResponsiveService.when(...)` or `computed(() => responsive.breakpoint())` for UI branching instead of window checks.

Testing & local development
- Use `ng serve` / `npm start` to run dev server at `http://localhost:4200/` (auto-reloads). For tests run `npm test`.
- Unit tests use Karma/Jasmine per `package.json`; tests live next to files with `.spec.ts` suffix (see [src/app/pages/home/home.spec.ts](src/app/pages/home/home.spec.ts#L1-L80)).

What to watch for (discoverable quirks)
- Some pages/components use `styleUrl` (singular) in their decorators; the app root uses `styleUrls` (plural). When editing templates or style metadata, mirror the existing file's key to minimize diffs.
- Imports use both relative paths (e.g., `./services/responsive.service`) and absolute `src/` imports in some files — follow the local pattern in the file you modify.

Examples for common tasks
- Add a new page route (lazy):
  - Update [src/app/app.routes.ts](src/app/app.routes.ts#L1-L40) with ` { path: 'new', loadComponent: () => import('./pages/new/new').then(m => m.NewPage) } `
  - Create `src/app/pages/new/new.ts`, `new.html`, `new.scss` matching other page patterns.
- Use responsive helpers in templates/components:
  - In TS: `screen = computed(() => this.responsive.breakpoint());`
  - In templates: conditionally render based on `screen()` or `responsive.when({...})`.

If you need more context
- Start by reading [README.md](README.md#L1-L40) and [src/app/app.ts](src/app/app.ts#L1-L60). If any runtime or CI scripts exist, they will be in `package.json`.

Feedback
- If any of these points are incomplete or you want examples expanded (tests, CI, or local packaging for `mozek-angular`), tell me which areas to expand.

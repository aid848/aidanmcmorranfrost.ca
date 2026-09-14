# Upgrade Plan: aidanmcmorranfrost.ca

Written 2026-09-13, decisions confirmed the same day. Goal: move this Create React App (CRA) site to a current, maintained React toolchain with all dependencies at their latest majors, without changing what the site looks like or does.

## Decisions (confirmed)

| Topic | Decision |
|---|---|
| Language | Adopt TypeScript. All component files become `.tsx`, data file becomes `.ts`. |
| Carousel | Replace react-bootstrap Carousel with Embla; remove `bootstrap` and `react-bootstrap`. |
| Package manager | Switch from Yarn 1 classic to npm. Delete `yarn.lock`, commit `package-lock.json`. |
| Git | The plan runs inside a proper git checkout. Work on a branch, one commit per phase. |
| Netlify publish dir | `build`. Keep Vite's `outDir` set to `build` so Netlify settings do not change. |
| Browser targets | Accept Vite 8 and MUI 9 defaults (roughly 2023+ browsers). Drop the `browserslist` block. |
| About Me page | Keep `AboutMe` and `bioTXT` as they are (still commented out of the routes). |
| Roboto | Import `@fontsource/roboto` in the entry file so MUI typography renders Roboto. |

## Current state (verified)

- `yarn build` compiles successfully today with react-scripts 5.0.1 (Node 24.14, Yarn 1.22 classic, yarn.lock v1).
- Site is a small SPA: `index.js`, `App.js`, `Home.js`, `MyProjects.js`, `AboutMe.js` (route commented out), `Content.js` (data plus 43 `require()` image imports). Deployed to Netlify (`public/_redirects`, README badge).
- The single test in `App.test.js` is already broken: it looks for "learn react" text that does not exist, and renders `App` without a router even though `App` calls `useNavigate`.
- Declared but unused: `@mui/styles` (never imported; deprecated on npm), `@fontsource/roboto` (never imported), `@testing-library/user-event` (never imported), `src/logo.svg`.
- `bootstrap` and `react-bootstrap` are used for exactly one thing: the `Carousel` in `MyProjects.js`. The global Bootstrap stylesheet is also imported in `App.js`.

### Version table

| Package | Installed | Target | Notes |
|---|---|---|---|
| react / react-dom | 19.2.3 | 19.3.0 | minor bump |
| react-scripts | 5.0.1 | removed | last published Apr 2022; replaced by Vite |
| @mui/material | 7.3.7 | 9.4.0 | **v8 was skipped by MUI**; one jump v7 to v9 |
| @mui/styles | 6.4.8 | removed | deprecated, unused |
| @emotion/react, @emotion/styled | 11.14.x | 11.14.x | already current |
| react-router-dom | 7.12.0 | removed | **package removed in v8**; use `react-router` 8.3.1 |
| react-bootstrap | 2.10.10 | removed | replaced by Embla |
| bootstrap | 5.3.8 | removed | only the Carousel needed it |
| @testing-library/react | 11.2.7 | 16.3.3 | needs `@testing-library/dom` 10 as a dev dep |
| @testing-library/user-event | 12.8.3 | removed | unused |
| @testing-library/jest-dom | 6.9.1 | 7.0.1 | Node 22+, `@testing-library/dom` peer required |
| @fontsource/roboto | 5.2.9 | 5.3.0 | will be imported in `main.tsx` |
| jest (via CRA) | 27.5.1 | removed | replaced by Vitest 5.0.0 |
| eslint (via CRA) | 8.57.1 | 10.10.0 | flat config |
| webpack (via CRA) | 5.104 | removed | replaced by Vite 8.3.0 (Rolldown + Oxc) |
| typescript | none | 6.0.3 | see note below |

**TypeScript version note.** The newest `typescript` on npm is 7.0.2, but `typescript-eslint` 8.70 declares support for TypeScript below 6.1 only. Pin `typescript` at `~6.0.3` (the newest stable 6.x) so linting is fully supported. Revisit 7.x once typescript-eslint publishes support. Vite compiles TS with Oxc and does not depend on this choice; only `tsc --noEmit` and ESLint do.

Toolchain minimums after upgrade: Node >= 22.22 (react-router 8), Node >= 22.12 (Vitest 5), Node ^20.19 or >= 22.12 (Vite 8). Node 24 satisfies all; CI already uses 24.x.

## Target stack

- **Build**: Vite 8 with `@vitejs/plugin-react` 6
- **Language**: TypeScript 6.0 (`strict`), `.tsx` components
- **UI**: React 19.3, MUI 9, Emotion 11 (unchanged), Roboto via `@fontsource/roboto`
- **Routing**: `react-router` 8 in declarative mode. Same `BrowserRouter`, `Routes`, `Route`, `useNavigate` API, just a different import path.
- **Carousel**: `embla-carousel-react` 8 with `embla-carousel-autoplay`
- **Tests**: Vitest 5, jsdom 30, `@testing-library/react` 16, `@testing-library/jest-dom` 7
- **Lint/format**: ESLint 10 flat config with `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks` 7, `eslint-plugin-react-refresh`; Prettier 3
- **Package manager**: npm with a committed `package-lock.json`

## Phases

Each phase ends with `npm run build`, `npm test` and `npm run typecheck` green plus a manual check of `/` and `/projects` in the browser. Do them in this order; each one is a separate commit so a bad step can be reverted.

### Phase 0: Safety net and npm switch

1. `git checkout -b upgrade/vite-ts-mui9` from the current default branch.
2. Save reference screenshots of `/` and `/projects` at desktop and mobile widths for comparison later.
3. Switch to npm while the dependency set is still the old one, so the switch is its own commit: delete `yarn.lock`, run `npm install`, commit `package-lock.json`. Confirm `npm run build` still passes on react-scripts.
4. Add `"engines": { "node": ">=22.22" }` to `package.json` and a `.nvmrc` containing `24`.
5. Run `npx update-browserslist-db@latest` (the build warns that caniuse data is 9 months old). This block is deleted in Phase 1 anyway, so this only silences the warning for the Phase 0 build.

### Phase 1: Replace Create React App with Vite 8 and convert to TypeScript

This is the largest change. React and MUI stay on their current versions during this phase so only the bundler and language change.

1. `npm uninstall react-scripts`. `npm install -D vite@8 @vitejs/plugin-react@6 typescript@~6.0.3 @types/react@19 @types/react-dom@19 @types/node`.
2. Move `public/index.html` to the project root as `index.html`:
   - delete the `%PUBLIC_URL%/` prefixes (use `/favicon.ico`, `/manifest.json`);
   - remove the `apple-touch-icon` link (there is no `logo192.png` in `public/`);
   - add `<script type="module" src="/src/main.tsx"></script>` before `</body>`.
3. Rename and convert: `src/index.js` to `src/main.tsx`; `App`, `Home`, `MyProjects`, `AboutMe` to `.tsx`; `Content.js` to `Content.ts`; `setupTests.js` to `setupTests.ts`.
4. Add `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "target": "ES2022",
       "lib": ["ES2022", "DOM", "DOM.Iterable"],
       "module": "ESNext",
       "moduleResolution": "bundler",
       "jsx": "react-jsx",
       "strict": true,
       "noEmit": true,
       "skipLibCheck": true,
       "isolatedModules": true,
       "types": ["vite/client"]
     },
     "include": ["src", "vite.config.ts"]
   }
   ```
   `"types": ["vite/client"]` gives typed `import x from "./img/foo.png"` declarations.
5. Add `vite.config.ts`:
   ```ts
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   export default defineConfig({
     plugins: [react()],
     build: { outDir: 'build' },   // Netlify publishes from "build"
   })
   ```
6. In `Content.ts`, replace all 43 `require("./img/...")` calls with static ES imports (`import DOG1 from "./img/scaled/dog-1.png"`). Vite does not support `require`. Rename `create acc.png` to `create-acc.png`. Turn the `ProjectEntry` class into an `interface ProjectEntry` and declare `MYPROJECTS: ProjectEntry[]` with object literals; nullable links become `string | null`.
7. Type the page props: `Home`, `Projects`, `About` receive `{ setTab: (path: string) => void }` (or drop the prop entirely in Phase 3 step 4). Type the `Tabs` `onChange` handler as `(_e: React.SyntheticEvent, value: string)`.
8. Replace the CRA scripts:
   ```json
   "dev": "vite",
   "build": "tsc --noEmit && vite build",
   "preview": "vite preview",
   "typecheck": "tsc --noEmit"
   ```
9. Delete the `eslintConfig` and `browserslist` blocks from `package.json`. Vite's defaults (Chrome 111 / Firefox 114 / Safari 16.4) apply.
10. `public/_redirects`, `robots.txt`, `manifest.json`, `favicon.ico` are copied verbatim by Vite; no change needed.
11. Verify: `npm run build`, `npm run preview`, check both routes and the background image (`index.css` uses a relative `url("img/home.jpg")`, which Vite resolves and hashes).

### Phase 2: Jest to Vitest 5

1. `npm install -D vitest@5 jsdom@30 @testing-library/react@16 @testing-library/dom@10 @testing-library/jest-dom@7`. `npm uninstall @testing-library/user-event`.
2. In `vite.config.ts` add:
   ```ts
   test: { environment: 'jsdom', globals: true, setupFiles: './src/setupTests.ts' }
   ```
   Import `defineConfig` from `vitest/config` instead of `vite` so the `test` key is typed. Change `setupTests.ts` to `import '@testing-library/jest-dom/vitest'` and add `"vitest/globals"` to `tsconfig.json` `types`.
3. Scripts: `"test": "vitest run"`, `"test:watch": "vitest"`.
4. Rewrite `App.test.js` as `App.test.tsx`. Wrap `App` in `MemoryRouter` (from `react-router`) and the MUI `ThemeProvider`, and assert on real content: "Aidan Frost" renders on `/`, and `/projects` renders every project name from `MYPROJECTS`. Note Vitest 5 defaults `clearMocks` to true and fails tests with un-awaited async assertions.
5. Verify: `npm test` passes.

### Phase 3: React Router 7 to 8

1. `npm uninstall react-router-dom && npm install react-router@8 react@19.3 react-dom@19.3`. v8 is ESM-only and requires React >= 19.2.7.
2. Change every `from "react-router-dom"` to `from "react-router"` (`main`, `App`, `Home`). `BrowserRouter`, `Routes`, `Route`, `useNavigate` are all still exported from `react-router` in v8 (verified against the 8.3.1 package). Only `RouterProvider` and `HydratedRouter` moved to `react-router/dom`, which this site does not use.
3. Bump `@types/react` and `@types/react-dom` to match 19.3.
4. Cleanup while here: derive the active tab from `useLocation().pathname` inside `App` instead of passing a `setTab` prop into each page and calling it from `useEffect`. That removes the `[props]` dependency arrays, which re-run on every render, and removes the prop type from step 7 of Phase 1. Map unknown paths to `"/"` so the `Tabs` value is always valid.
5. Verify: nav tabs switch routes, the "Check out my work" button navigates, browser back/forward works, unknown paths fall through to `Home`.

### Phase 4: MUI 7 to 9

MUI skipped v8, so the official guide is the single "Upgrade to v9" page. React 19 is already supported. Concrete impact on this codebase:

1. `npm install @mui/material@9` (Emotion peers are already satisfied). `@mui/material-pigment-css` is an optional peer; ignore it.
2. `npm uninstall @mui/styles` (deprecated JSS package, never imported here).
3. Run the codemods that apply, then diff: `npx @mui/codemod@latest v9.0.0/system-props src` and `npx @mui/codemod@latest v9.0.0/tabs-props src`. Expect few or no edits since the code does not use system props or deprecated `TabIndicatorProps`.
4. Fix `MyProjects.tsx`:
   - `<StyledCard size={6}>` passes a Grid prop to a `Card`, which does nothing (and is now a type error). Wrap each card in `<Grid size={{ xs: 12, md: 4 }}>` and drop the manual breakpoint widths from `StyledCard`. The visual result should match the current 30 % / 100 % widths.
   - Add `key={ele.name}` on the mapped element (currently missing; React warns).
   - `color="textSecondary"` on `Typography` is the legacy alias; use `color="text.secondary"`.
5. Check the v9 list against the rest: `AppBar`, `Tabs` and `Tab` (keyboard navigation changed, `aria-selected` used; behaviourally fine), `Card*`, `Button`, `ButtonGroup`, `Paper`, `Typography`, `styled`, `createTheme`, `ThemeProvider`. None are removed. `GridLegacy` is removed but was never imported.
6. Browser floor rises to Chrome 117 / Firefox 121 / Safari 17; note in README.
7. Verify: compare against Phase 0 screenshots, especially card widths on `/projects` and tab styling.

### Phase 5: Remove Bootstrap, add Embla, import Roboto

1. `npm install embla-carousel-react@8 embla-carousel-autoplay@8`.
2. Build a small `ProjectCarousel.tsx` taking `photos: string[]`: a viewport `div` with `overflow: hidden`, a flex track, one slide per image, prev/next `IconButton`s from MUI shown only when `photos.length > 1`, autoplay at 5 s to match the current `interval={5000}`. Keep the existing `.Project-Photo` class and `width: 100%` image rule so card media sizing is unchanged.
3. Remove `import 'bootstrap/dist/css/bootstrap.min.css'` from `App.tsx` and the `.carousel-item` rules from `App.css`. Add `<CssBaseline />` from MUI under the `ThemeProvider` in `main.tsx` to replace Bootstrap's reboot with a consistent reset. Re-check every page: the raw `<footer>` and `<img>` elements may shift slightly.
4. `npm uninstall bootstrap react-bootstrap`.
5. `npm install @fontsource/roboto@5.3` and add to `main.tsx`:
   ```ts
   import '@fontsource/roboto/300.css'
   import '@fontsource/roboto/400.css'
   import '@fontsource/roboto/500.css'
   import '@fontsource/roboto/700.css'
   ```
   MUI's default typography already names Roboto first, so no theme change is needed. The site will visibly switch from the system font to Roboto; that is intended.
6. Delete `src/logo.svg` and the unused `welcomeSubheaderTXT` and `languagesKnown` exports. Leave `AboutMe.tsx`, `bioTXT`, and the commented-out route and tab in place.

### Phase 6: Lint and format

1. `npm install -D eslint@10 @eslint/js globals typescript-eslint eslint-plugin-react-hooks@7 eslint-plugin-react-refresh prettier@3`.
2. Add `eslint.config.js` (flat config): `@eslint/js` recommended, `typescript-eslint` recommended, `react-hooks` recommended, the `react-refresh` vite preset, browser globals, `ecmaVersion: 'latest'`, `sourceType: 'module'`; ignore `build/`.
3. Scripts: `"lint": "eslint ."`, `"format": "prettier --write ."`. Run both and fix what they report.

### Phase 7: CI, deploy, docs

1. `.github/workflows/node.js.yml`: replace `yarn install` / `yarn run build` with `npm ci`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`; set `cache: npm` on `setup-node`.
2. `.github/workflows/codeql-analysis.yml`: `actions/checkout@v2` and `github/codeql-action/*@v1` are retired and will fail. Move to `actions/checkout@v6`, `github/codeql-action/init|autobuild|analyze@v4`, and language `javascript-typescript`.
3. Add `netlify.toml` so the build is declared in-repo and no longer depends on UI settings:
   ```toml
   [build]
     command = "npm run build"
     publish = "build"
   ```
   Netlify detects `package-lock.json` and uses npm automatically once `yarn.lock` is gone.
4. Update `.gitignore`: `/build` stays; add `.vitest/`.
5. README: replace the CRA mention with `npm install`, `npm run dev`, `npm test`, `npm run build`.
6. Bump `version` in `package.json` to `1.0.0`.

### Phase 8 (optional, not scheduled)

- **TypeScript 7**: move `typescript` to 7.x once `typescript-eslint` supports it.
- **React Compiler**: `react({ compiler: true })` in `vite.config.ts` with `oxc-transform-react` installed. Low value for a site with almost no state; skip unless curious.

## Target package.json

```json
"dependencies": {
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "@fontsource/roboto": "^5.3.0",
  "@mui/material": "^9.4.0",
  "embla-carousel-autoplay": "^8.6.0",
  "embla-carousel-react": "^8.6.0",
  "react": "^19.3.0",
  "react-dom": "^19.3.0",
  "react-router": "^8.3.1"
},
"devDependencies": {
  "@eslint/js": "^10.0.1",
  "@testing-library/dom": "^10.4.2",
  "@testing-library/jest-dom": "^7.0.1",
  "@testing-library/react": "^16.3.3",
  "@types/node": "^26.5.1",
  "@types/react": "^19.3.0",
  "@types/react-dom": "^19.3.0",
  "@vitejs/plugin-react": "^6.1.1",
  "eslint": "^10.10.0",
  "eslint-plugin-react-hooks": "^7.1.1",
  "eslint-plugin-react-refresh": "^0.5.6",
  "globals": "^17.12.0",
  "jsdom": "^30.0.1",
  "prettier": "^3.9.6",
  "typescript": "~6.0.3",
  "typescript-eslint": "^8.70.0",
  "vite": "^8.3.0",
  "vitest": "^5.0.0"
},
"scripts": {
  "dev": "vite",
  "build": "tsc --noEmit && vite build",
  "preview": "vite preview",
  "test": "vitest run",
  "test:watch": "vitest",
  "typecheck": "tsc --noEmit",
  "lint": "eslint .",
  "format": "prettier --write ."
},
"engines": { "node": ">=22.22" }
```

## Risks and how to catch them

- **Visual drift from removing Bootstrap's reset** (Phase 5). Mitigation: screenshots from Phase 0, `CssBaseline`.
- **Roboto changes the look** (Phase 5). Intended, but compare screenshots so nothing else moved.
- **Card layout on `/projects`** currently works by accident (`size` prop ignored, widths come from `StyledCard`). Fixing it properly in Phase 4 could change spacing. Compare screenshots.
- **Strict TypeScript on first conversion** (Phase 1) may surface a handful of `null` handling errors in `Content` link fields and the `window.open` result. Expected and small.
- **npm lockfile regeneration** (Phase 0) can resolve transitive deps to different patch versions than `yarn.lock` did. The Phase 0 build check catches any breakage before the real upgrade starts.
- **Browser support floor rises** (Vite 8 defaults plus MUI 9). Accepted.

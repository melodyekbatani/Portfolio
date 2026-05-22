# Design System — Melody Ekbatani Portfolio v2

This is the source of truth for tokens, typography, spacing, and components used across the site. Edit values here, then update the matching CSS variable in `style.css` (the variables live under `:root {}`). Every UI element should pull from one of these tokens rather than a hardcoded value.

> Convention: token names use `kebab-case` and are referenced as `var(--token-name)` in CSS.

---

## 1. Color

| Token | Value | Used for |
|---|---|---|
| `--bg` | `#ffffff` | Page background, nav background, panel background |
| `--bg-subtle` | `#f5f5f5` | Hover state on project cards |
| `--bg-thumb` | `#f0f0f0` | Placeholder backgrounds on thumbnails/media |
| `--ink` | `#111111` | Primary text, indicators, borders on dark accents |
| `--ink-soft` | `#46535f` | Secondary text in modals/captions |
| `--ink-faint` | `#5a6470` | Tertiary text, meta labels in modals |
| `--muted` | `#AAAAAA` | Labels, tag text, captions |
| `--rule` | `#DFDFDF` | Borders on tags, dividers |
| `--rule-soft` | `rgba(17,17,17,0.10)` | Faint horizontal rules (see-also lists) |
| `--rule-medium` | `rgba(17,17,17,0.15)` | Slightly stronger rules |
| `--dash` | `#CFCFCF` | Secondary/hover indicator color |
| `--accent` | `#E8001D` | Reserved accent (not currently used in flows) |

**Editing tip:** if you want a slightly warmer or cooler palette, only the four "ink/bg" tokens need to change to ripple through the whole site.

---

## 2. Typography

### Font stacks

| Token | Value |
|---|---|
| `--font-sans` | `'Helvetica Neue', Helvetica, Arial, sans-serif` |
| `--font-serif` | `'Times New Roman', Georgia, serif` |

Default body font is `--font-sans`. `--font-serif` is used for the floating italic keywords on the Explore page.

### Size scale

All sizes use `clamp()` for responsive scaling. Token shape: `--fs-<role>`.

| Token | Value | Where it's used |
|---|---|---|
| `--fs-display` | `clamp(56px, 9vw, 130px)` | Hero name (`.t-display`) |
| `--fs-title-xl` | `clamp(52px, 10vw, 120px)` | Footer "Let's Work" title |
| `--fs-title-lg` | `clamp(36px, 6vw, 64px)` | Work panel "Work" heading |
| `--fs-title-md` | `clamp(28px, 3.6vw, 40px)` | Project titles (featured + secondary) |
| `--fs-h1` | `clamp(32px, 4vw, 52px)` | `.t-h1` |
| `--fs-h2` | `clamp(18px, 2vw, 24px)` | `.t-h2` |
| `--fs-nav` | `30px` | Nav links |
| `--fs-body` | `18px` | Body copy (`.t-body`) |
| `--fs-small` | `14px` | Small labels (`.t-small`), nav metadata |
| `--fs-micro` | `12px` | Tag labels in featured/secondary projects |
| `--fs-nano` | `10px` | Smallest tag labels, hints |

### Weight, line-height, letter-spacing

| Token | Value | When |
|---|---|---|
| `--fw-regular` | `400` | Small labels, tags |
| `--fw-medium` | `500` | Most headings, nav, body |
| `--fw-bold` | `700` | `.t-h1`, `.t-h2` |
| `--lh-tight` | `0.96` | Display headings |
| `--lh-snug` | `1.05` | h2-level titles |
| `--lh-body` | `1.5` | Body |
| `--lh-loose` | `1.35` | Project copy |
| `--ls-display` | `-0.025em` | Display |
| `--ls-tight` | `-0.02em` | Section titles |
| `--ls-wide` | `0.04em` | Cursor labels |
| `--ls-wider` | `0.06em` | Small UPPERCASE labels |
| `--ls-widest` | `0.08em` | Tag labels |

### Utility classes (already in use)

| Class | Composition |
|---|---|
| `.t-display` | display size, medium weight, tight tracking |
| `.t-h1` | h1 size, bold, tighter tracking |
| `.t-h2` | h2 size, bold |
| `.t-body` | 18px regular (400), line-height 1.5 |
| `.t-small` | 14px regular, uppercase, wider tracking |

---

## 3. Spacing & layout

| Token | Value | Purpose |
|---|---|---|
| `--pad-page` | `40px` | Default left/right page padding (desktop) |
| `--pad-page-sm` | `20px` | Mobile left/right padding (≤768px) |
| `--nav-h` | `72px` | Fixed nav height (also drives scroll offsets) |
| `--sidebar-w` | `200px` | Reserved (sidebar not currently used) |
| `--section-pad` | `clamp(60px, 8vw, 120px)` | Vertical padding inside .cta / large sections |
| `--project-pad-b` | `10rem` | Bottom padding between project cards |

**Page width rhythm:** nothing is capped at a max-width — sections fill the viewport and use `padding: 0 var(--pad-page)`. To narrow the design, set `max-width` on `.rail` or specific panels.

**Vertical rhythm:** large gaps (e.g. between hero and work) come from `padding-bottom` on the upper section, not margin. This keeps each block self-contained.

---

## 4. Sizing primitives

| Token | Value | Purpose |
|---|---|---|
| `--dot-size` | `10px` | Indicator dots in nav + hero-links + cursor |
| `--radius` | `4px` | Inner corner radius — applied to all `<img>` and `<video>` elements globally |
| `--radius-lg` | `8px` | Outer corner radius — applied to containers wrapping media (e.g. the work-grid dark boxes). Follows the nested-radius rule: outer ≥ inner. |

---

## 5. Motion

Every transition should pick from this set so timing stays coherent.

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Default ease for indicators, panels |
| `--ease-emil` | `cubic-bezier(.2,.7,.2,1)` | Modal/element entrance (more pronounced finish) |
| `--t-fast` | `140ms` | Hover state changes (cursor opacity, etc.) |
| `--t-base` | `220ms` | Modal fade, link color shifts |
| `--t-slow` | `360ms` | Indicator slides (nav, hero-links) |
| `--t-panel` | `700ms` | Work panel slide-up |

**Rules of thumb:**
- Color/opacity changes: `--t-fast` or `--t-base`
- Positional movement: `--t-slow`
- Large composite transitions (panels): `--t-panel`

---

## 6. Components

These are the named patterns currently in use. When you tweak a class, the token references below tell you what to change.

### Nav (`<nav>`)
- Height: `--nav-h`
- Padding: `0 var(--pad-page)`
- Background: `--bg`
- Link size: `--fs-nav`, weight `--fw-medium`, color `--ink`
- Indicator: `--dot-size` dot, `--ink` color, slides on `--t-slow var(--ease-out)`

### Hero
- Padding-top: `--nav-h`
- Bottom grid gap: `56px` (could become `--gap-hero` if you want to tune)
- Bio max width: `38ch` (ch-based, intentional)
- Display heading: `.t-display`
- Body: `.t-body`
- Bio links: `--fs-small`, `--ls-wider`, uppercase

### Work panel
- Slides from below: `transform: translate3d(0, 100%, 0)` → `0`
- Transition: `--t-panel var(--ease-out)`
- Background: `--bg`
- Heading: `--fs-title-lg`, `--fw-medium`, `--lh-tight`

### Project cards (featured + secondary)
- Title: `--fs-title-md`
- Body copy max width: `38ch`
- Tags: `--fs-micro`, `--ls-widest`, color `--ink` (featured) or `--muted` (mini-grid)
- Tag border: `0.5px solid var(--rule)`
- Image hover scale: `1.03` over `0.6s ease`

### Cursor (`.project-cursor`)
- Background: `--bg`, text `--ink`
- Dot: `--dot-size`, `--ink`
- Label: `--fs-small`, `--ls-wide`, uppercase

### Tags
- Default tag: `--fs-nano`, color `--muted`, border `--rule`
- In project cards: `--fs-micro`, no border, `--ink` color

### Footer
- Title: `--fs-title-xl`, `--fw-medium`
- Heading labels: `--fs-small`, `--ls-wider`, uppercase
- Body links: `--fs-body`, `--fw-medium`
- Message: `clamp(22px, 2.8vw, 30px)`, medium weight

### Explore page (3D drift)
- Background: `--bg`
- Item media background: `--bg-thumb`
- Captions: `--fs-nano`, `--ls-wide`, uppercase, color `--ink-soft`
- Floating keywords: `--font-serif`, italic, color `--ink-faint`
- Modal background: `--bg`
- Modal arrows: `--ink`, 32px caret
- Modal caption: `--fs-small`, `--ink`
- Modal counter label: color `--ink-faint`

---

## 7. How to make a change

**To shift a color globally:** edit the variable in `style.css :root`. Every consumer updates automatically.

**To rename a token:** rename in `:root`, then run `Cmd+Shift+F` across the project for `var(--old-name)` and replace.

**To add a new token:** add it to `:root` AND document it in this file under the right section. If you forget the doc, the next time you want to tweak it you'll have to grep the codebase to find what's using it.

**To add a new component:** prefer composing existing tokens before introducing new values. If you find yourself needing a one-off value 2+ times, promote it to a token.

---

## 8. Known one-offs (not yet tokenized)

Honest list of values still hardcoded in `style.css`. These are candidates for tokenization if they ever need to change in more than one place:

- Hero `gap: 56px` and `padding: 40px 40px 64px`
- Project-secondary `gap: 48px`
- Page-footer `gap: 48px`, `margin-bottom: 4.5rem` on title
- Project bottom padding `10rem` (could be `--project-pad-b`)
- Cursor `border-radius: 0` (intentional square)
- Cs-see-also gap `40px`, thumb height `100px`

If you find yourself editing any of these in two places, that's the signal to lift them into `:root`.

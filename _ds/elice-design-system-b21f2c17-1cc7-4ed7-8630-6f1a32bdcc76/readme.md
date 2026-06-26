# Elice Design System

A design system for **Elice (엘리스)** — a Korean AI-powered coding-education platform. Elice runs an online course marketplace + LMS (Elice Academy), organization/enterprise training (Elice LXP / Works), cloud-based coding environments (Elice Cloud), and assessment tools (Elice Test). The product UI is Korean-first, Material-based, and built around a single vivid brand purple.

This project is the extracted, runnable design system: tokens, fonts, brand assets, ~40 reusable React components, foundation specimen cards, and a click-through UI kit.

## Sources
- **Figma:** "Elice Design System" (attached, mounted read-only). Key pages used: `/Color`, `/Typography`, `/Gnb` (global nav), `/Course-Card`, `/Tag`, `/Button`, `/Layout2`. The file is a large Material-UI–derived system (598 component sets + a ~1,091-glyph icon catalog + 601 Figma Variables across 8 collections).
- Token values, the logo, and component specs were read directly from that file — it is the source of truth over any public Elice branding.

---

## CONTENT FUNDAMENTALS — how Elice writes

- **Language:** Korean-first. UI labels, buttons, and headings are in Korean (코스, 내 학습, 수강 신청, 마이페이지). English appears only for tech terms (Python, React, AWS) and an optional language toggle (한국어 / English).
- **Voice:** warm, encouraging, second-person and polite. Uses the 해요/합니다 register — e.g. "엘리스에서 시작하세요", "오늘도 학습을 이어가 볼까요?", "서비스를 이용하기 위해 로그인이 필요합니다." Speaks *to* the learner, motivational but not hype-y.
- **Casing:** Korean has no case; Latin labels are Title Case for nav and Sentence case for body. ALL-CAPS is reserved for the `overline` type role and small category eyebrows.
- **Numbers & proof:** concrete, comma-grouped stats build trust — "1,280+ 코스", "320K+ 수강생", "98% 수료 만족도", ratings as `4.9 (1,280)`. Prices in won with the ₩ glyph and struck-through originals (₩149,000 → ₩99,000).
- **Emoji:** sparing and intentional — a single 👋 / 🎉 / 🔥 to add warmth on a greeting, success, or urgency moment. Never decorative rows of emoji, never as icons (Material Symbols do that job).
- **Tone of microcopy:** action-oriented buttons ("수강 신청하기", "이어보기", "전체 코스"), reassuring helper text, urgency framed positively ("조기 마감 임박").

## VISUAL FOUNDATIONS — the Elice look

- **Color:** one hero brand purple — `--elice-purple-700` `#7353EA` (= `--primary-main`). A full 50→900 purple ramp plus a cool **Blue Gray** neutral ramp (`#F8FAFB`→`#191F28`) that does almost all the structural work (text, borders, dark thumbnails). Material-standard semantic colors (error/warning/info/success) each carry a `-main`, `-dark`, muted `-muted-background`, and `-alert-background/-content` tint. Full **light + dark** themes ship (`:root[data-theme="dark"]`).
- **Typography:** **Pretendard** for all UI/body (the Korean-friendly workhorse) — headings at ExtraBold (800), subtitles SemiBold (600), body Medium (500). Brand display font **Elice DX Neolli** for marketing hero moments (⚠ proprietary — currently substituted by Pretendard). Material type scale (H1 96 → caption 12).
- **Backgrounds:** clean and flat. White/`--background-paper` surfaces on a faint gray (`--background-gray`) app canvas. The one expressive moment is a **purple gradient hero** (`elice-purple-900 → 700`). No textures, no noise, no busy patterns. Dark thumbnails use solid `--blue-gray-800`.
- **Corners:** soft but not pill-everything. Inputs/buttons `8px` (`--radius-md`); cards `16px` (`--radius-xl`); chips & avatars fully round. Course cards are 16px.
- **Borders & shadows:** cards rest on a **hairline inset border** `inset 0 0 0 1px rgba(0,0,0,0.06)` rather than a heavy shadow; elevation appears on **hover** (lift + `--elevation-6`). A full Material elevation ramp (1→24) plus a soft `--shadow-card`/`--shadow-popover` for product surfaces.
- **Motion:** restrained. Material standard easing `cubic-bezier(0.4,0,0.2,1)`, short 150ms / medium 250ms durations. Hover = subtle background tint or 2px lift; press = color shift (no bounces, no big scale). Indeterminate progress slides; accordions animate `grid-template-rows`.
- **States:** hover uses the `*-opac-01-hovered` / `--action-hover` 4% tints (or `-dark` on contained buttons); selected uses `*-action-selected` 12% tints; disabled drops to `--action-disabled` tokens. Focus = 2px primary outline.
- **Layout:** centered content column, `--viewport-max-width: 1100px`. Sticky 64px GNB header; sticky enroll/summary cards on detail pages; sidebar + content grid for app views.
- **Imagery vibe:** product-forward and cool-toned; course thumbnails are solid brand-tinted blocks when no art is present (never AI-slop gradients).

## ICONOGRAPHY

- **Primary icon system: Material Symbols Rounded** (Google, Apache-2.0), loaded from Google Fonts in `tokens/fonts.css`. This matches the bulk of the Figma file's icon usage (the `*_Rounded` glyph set — `Clear_Rounded`, `More_vert_Rounded`, `ArrowBack/Forward`, etc.). Use `<span class="ms">name</span>` for outlined and add `ms--filled` for solid; weight/fill are controlled via `font-variation-settings`. Component props that take an `icon`/`startIcon`/`endIcon` expect a Material Symbols **ligature string** (e.g. `icon="more_vert"`).
- **Secondary (docs only): Font Awesome 6 Pro** powers the Figma file's standalone "Icon" catalog (solid/regular/light/thin/sharp). It is a **paid** set and is **not** bundled — substitute Material Symbols. ⚠ flagged.
- **Logo / brand mark:** the Elice **sparkle mark** + "elice" wordmark are real vector paths, shipped as the `<EliceLogo>` component (service color variants: Academy purple, Works blue, mono). Not an icon-font glyph.
- **No emoji as icons; no Unicode-glyph icons.** Emoji are used only as occasional warmth accents in copy (see Content Fundamentals).

---

## INDEX — what's in this project

**Global CSS (entry point)**
- `styles.css` — the one file consumers link; `@import`s everything below.
- `tokens/fonts.css` — Pretendard + Material Symbols + Roboto Mono `@font-face`/imports.
- `tokens/fig-tokens.css` — colors & palette (light + dark), from Figma Variables.
- `tokens/typography.css` — type scale, families, weight ramp, `.t-*` helper classes.
- `tokens/spacing.css` — spacing, radius, elevation, motion tokens.
- `tokens/base.css` — reset + global defaults.

**Brand assets** (`assets/brand/`)
- `EliceLogo.jsx` — the wordmark + sparkle mark component (`logo.card.html` specimen).

**Components** (`components/<group>/`, consumed via `window.EliceDesignSystem_b21f2c`)
- `actions/` — Button, IconButton, Fab
- `forms/` — TextField, Select, Checkbox, Radio + RadioGroup, Switch, Slider
- `data-display/` — Avatar + AvatarGroup, Badge, Chip, Tag, Divider, Tooltip, List + ListItem
- `feedback/` — Alert, LinearProgress + CircularProgress, Skeleton, Dialog, Snackbar
- `navigation/` — Tabs, Breadcrumbs, Pagination, Accordion, Stepper, Menu
- `surfaces/` — Card (+ Media/Header/Content/Actions), Paper
- `products/` — CourseCard (Elice's signature course tile)

**Foundation specimen cards** (`guidelines/`) — populate the Design System tab under Colors / Type / Spacing / Brand.

**UI kit** (`ui_kits/academy/`) — interactive Elice Academy course platform (catalog → detail → dashboard, with login). See its `README.md`.

**`SKILL.md`** — makes this folder usable as a downloadable Claude Agent Skill.

## Usage
Consumers link `styles.css` and read components off the compiled bundle: `const { Button } = window.EliceDesignSystem_b21f2c`. Inside `@dsCard` HTML, load `_ds_bundle.js` (relative path to project root) then destructure from the namespace. Each component directory has a `.prompt.md` with a one-line "what & when" + usage example.

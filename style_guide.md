# KSU Student Assist Cell — Design System & Style Guide
**v2.0 · April 2026 · For sac.ksucet.in**

---

## 01 · Typefaces

> Both fonts are free Google Fonts. Import via `fonts.googleapis.com`

### Display / Page Titles — DM Serif Display
- `font-weight: 400`
- Source: Google Fonts
- Used only for the main page heading on each route. Gives the site warmth without being decorative.

### UI / Body / Labels — Inter
- `font-weight: 400 · 500 · 600`
- Source: Google Fonts
- All navigation, cards, labels, body copy, and UI elements use Inter. Clean, legible at small sizes.

### Type Scale

| Role | Font | Size / Weight | Usage |
|---|---|---|---|
| Page title | DM Serif Display | 30px / 400 | H1 on each page, one per route |
| Section heading | Inter | 16px / 600 | Card titles, department names |
| Body / card text | Inter | 13–14px / 400 | Descriptions, scholarship text |
| Label / nav | Inter | 12px / 500 | Nav items, badges, filter chips |
| Caption / meta | Inter | 11px / 400 | Deadlines, file types, breadcrumbs |

---

## 02 · Color Tokens

The site keeps a single blue-navy palette. All colors below are design tokens — map them to CSS custom properties.

| Token | Hex | Usage |
|---|---|---|
| Surface / Nav | `#0D1B36` | Navbar background, page surface |
| Card BG | `#1A2E50` | Card backgrounds |
| Primary action BG | `#1A3A6B` | Button backgrounds, active states |
| Accent / Link | `#4A90D9` | Interactive borders, links, active underlines |
| Primary text on blue | `#7AB3F0` | Text inside blue button/badge surfaces |
| Subtle / border | `#B8D4F5` | Subtle borders and dividers |
| Deadline / warning | `#F0A500` | Deadline badges only |
| Light text | `#FFFFFF` | Body text on dark backgrounds |

### Usage Rules

- **No glows, no cyan text on dark bg.** Replace the current cyan-heavy palette with the structured tokens above.
- Accent blue (`#4A90D9`) is used only for interactive borders and active states — body text stays white/grey.
- Amber (`#F0A500`) is reserved strictly for deadline badges.

---

## 03 · Navigation

> Replace icon-only top nav with a text nav. Icon-only navs require users to learn each icon's meaning — text labels remove that friction.

### Nav Structure
```
KSU SAC    Notes  Papers  Scholarships  Syllabus  Minors  About
```

### Rules
- Active page: white text + 2px bottom border in accent blue (`#4A90D9`)
- Inactive links: white at 55% opacity
- Logo links to home
- On mobile: collapse into a hamburger sheet — show department shortcuts in the sheet body

---

## 04 · Page Flows & Information Architecture

### Notes `/notes`
```
/notes → Select dept → Select sem (pill) → Subject list & files
```
- Department selection uses a compact 3-column button grid.
- Semester selection uses a horizontal pill row — avoids a full page reload.
- Files open inline or download directly.

---

### Question Papers `/papers`
```
/papers → Select dept → Select sem (pill) → Subjects + Series/Sem paper links
```
- Semester pill row is persistent on scroll (sticky below nav).
- Papers show as minimal rows inside each subject card — not full expanded cards.

---

### Scholarships `/scholarships`
```
/scholarships → Search + filter chips → Filtered card list
```
- No separate sub-pages — all on one route with live filtering.
- "Apply Now" is a primary button. "More Info" is a ghost button.
- Deadline badge in amber.
- Remove sort dropdown — sort by nearest deadline by default.

---

### Syllabus & Curriculum `/syllabus`
```
/syllabus → Select dept → Select sem → Download Syllabus / Curriculum (side by side)
```
- Remove the "Select Syllabus or Curriculum" step — show both download buttons side-by-side after semester is chosen. Saves one tap.

---

### Minors `/minors`
```
/minors → Dept grid → Minor detail + curriculum link (inline expand)
```
- Department grid directly on the page — no extra dropdown.
- Clicking a dept expands an inline panel — no full-page navigation needed.

---

### About & Info Pages
- Simple single-column layout with the mission card.
- No changes to content structure needed.

---

## 05 · Component Specimens

### Breadcrumb
Appears on all sub-pages. Shows the full path the user navigated.

```
Papers › Computer Science and Engineering › Semester 3
```

- Font: Inter 11px, color: text-tertiary
- Separator: `›` character
- Last item: text-primary (bold current location)

---

### Department Selection Grid
Used on: Notes, Papers, Syllabus, Minors pages.

- 3-column grid on desktop, 2-column on mobile
- Border: `0.5px solid rgba(74,144,217,.35)`
- Background: `rgba(74,144,217,.06)`
- Text: Inter 11px / 500, color `#7AB3F0`
- Active/selected state: darker border, lighter blue fill, white text + checkmark

```css
.dept-btn {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  padding: .6rem .75rem;
  border-radius: 8px;
  border: 0.5px solid rgba(74,144,217,.35);
  color: #7AB3F0;
  background: rgba(74,144,217,.06);
}

.dept-btn.active {
  background: rgba(74,144,217,.14);
  border-color: rgba(74,144,217,.7);
  color: #ffffff;
}
```

---

### Semester Selector (Pill Row)
Sticky below the nav after a department is selected. Horizontal scrollable on mobile.

```
[ S1 ]  S2   S3   S4   S5   S6   S7   S8
```

- Active pill: `background: #1A3A6B`, `color: #7AB3F0`, no border
- Inactive pill: transparent background, `border: 0.5px solid border-tertiary`
- Font: Inter 11px / 500

```css
.sem-pill {
  display: inline-flex;
  align-items: center;
  padding: 5px 14px;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 500;
  border: 0.5px solid var(--color-border-tertiary);
  color: var(--color-text-secondary);
  background: var(--color-background-primary);
}

.sem-pill.active {
  background: #1A3A6B;
  color: #7AB3F0;
  border-color: transparent;
}
```

---

### Subject Paper Card (Question Papers)
Compact card — one per subject, with download buttons in a row.

```
Introduction to Electrical & Electronics Engineering
[ ↓ Series 1 ]  [ ↓ Series 2 ]  [ ↓ Semester Paper ]
```

- Card: `border-radius: 10px`, `border: 0.5px solid border-tertiary`, `padding: .75rem 1rem`
- Title: Inter 13px / 500
- Download buttons: ghost style, 10px / 500, `border: 0.5px solid border-secondary`

---

### Scholarship Card
```
₹50,000 per year
AICTE SWANATH Scholarship
[ General ]  [ Government ]  [ Deadline: 15 Nov 2025 ]

For students who are orphans, wards of Armed Forces/Police...
Family income below ₹8 lakh per year.

[ Apply Now ]   [ More Info ]
```

- Amount: Inter 13px / 600, color `#4A90D9`
- Title: Inter 14px / 500, text-primary
- Category tags: muted badge style (light bg, subtle border)
- Deadline tag: amber (`rgba(240,165,0,.12)` bg, `#F0A500` text)
- Description: Inter 12px / 400, line-height 1.55, text-secondary
- "Apply Now": primary button (`background: #1A3A6B`, `color: #7AB3F0`)
- "More Info": ghost button (transparent bg, `border: 0.5px solid border-secondary`)

---

### Search + Filter (Scholarships)
```
[ Search scholarships…                              ]

[ General ✓ ]  [ Girl Scholarships ]  [ Government ]  [ Private ]
```

- Search input: Inter 13px, `border-radius: 8px`, `border: 0.5px solid border-secondary`
- Active filter chip: `border-color: rgba(74,144,217,.5)`, `background: rgba(74,144,217,.08)`, `color: #6AAADE`
- Inactive chip: transparent bg, text-secondary

---

### Buttons

**Primary**
```css
.btn-primary {
  background: #1A3A6B;
  color: #7AB3F0;
  border: 0.5px solid rgba(74,144,217,.4);
  border-radius: 7px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
}
```

**Ghost**
```css
.btn-ghost {
  background: transparent;
  border: 0.5px solid var(--color-border-secondary);
  border-radius: 7px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 400;
  color: var(--color-text-secondary);
}
```

---

## 06 · Spacing & Radius

### Spacing Scale (px)
`4` · `8` · `12` · `16` · `24` · `32` · `48`

Use in multiples of 4. Prefer 16px for internal card padding, 24px for section gaps, 48px for major section breaks.

### Border Radius Scale
| Value | Usage |
|---|---|
| `4px` | Inline tags, small badges |
| `8px` | Buttons, small cards, filter chips |
| `10px` | Subject cards, compact containers |
| `12px` | Main content cards |
| `99px` (pill) | Semester selectors, category tags |

### Border Width
- Default: `0.5px solid` — use everywhere. Thinner borders feel more refined.
- Active accent border: `2px solid #4A90D9` — used only on the active nav item underline.

---

## 07 · Key Changes from Current Design

| Current (remove) | Proposed (use instead) |
|---|---|
| Icon-only top navbar (requires memorization) | Text nav links with active underline indicator |
| Cyan/teal glowing text everywhere | Single accent blue (#4A90D9) used purposefully |
| Large gradient hero cards on home | Clean feature grid — no hero, no campus photo |
| Syllabus/Curriculum type selection as its own step | Both download buttons shown after dept + sem chosen |
| Scholarship sort dropdown ("None / Earliest / Latest") | Default sort by nearest deadline, filter chips only |
| Floating sidebar nav with repeated icons | Remove floating sidebar entirely |
| Minors: dropdown to select department | Same department grid used on all other pages |
| Full-page reload when switching semesters | Sticky pill row — switches in-place, no reload |
| Expanded full paper cards per subject | Compact subject card with inline download rows |

---

## 08 · CSS Import Reference

```html
<!-- Add to <head> of every page -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

```css
/* Root tokens */
:root {
  --color-surface:       #0D1B36;
  --color-card:          #1A2E50;
  --color-action-bg:     #1A3A6B;
  --color-accent:        #4A90D9;
  --color-accent-text:   #7AB3F0;
  --color-border-subtle: #B8D4F5;
  --color-deadline:      #F0A500;

  --font-display: 'DM Serif Display', serif;
  --font-ui:      'Inter', sans-serif;

  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-pill: 99px;
}
```

---

*KSU SAC Style Guide · sac.ksucet.in · 2026*

# Textile Engineer Portfolio Website
## MD. WASEUR RAHMAN — Textile Engineer | Apparel Manufacturing Engineering

A modern, responsive, high-performance static portfolio website engineered specifically for **Textile Engineers**, **Apparel Manufacturing Specialists**, and **Merchandising Professionals**.

Suitable for immediate deployment on **GitHub Pages**, **Vercel**, or **Netlify** with zero backend or database required.

---

## 🌟 Key Features

1. **Placeholder-First Image Architecture**:
   - Every image slot (Profile, About, Hero, Projects, and Gallery) renders a clean, styled CSS placeholder with textile-themed icons, slot labels, and recommended dimension badges if no photo is supplied.
   - You can add real photos **one at a time** as you collect them—the website layout never breaks or shifts.
2. **Central Image Configuration**:
   - Manage all image paths, focal points, and captions in one central `IMAGES` configuration object at the top of `script.js`.
3. **Focal Point Alignment System (`data-focus`)**:
   - Fine-tune subject positioning in any photo without editing or cropping the original image file using the `data-focus="X% Y%"` attribute.
4. **Auto-Scalable Club Photos System (`manifest.json`)**:
   - Dynamic photo gallery for university clubs (Debate Club, Photography Club) that automatically scales as photos are added to `/assets/images/clubs/` and listed in `manifest.json`. Zero HTML or JS edits required to add more photos!
5. **Interactive Lightbox for Gallery & Club Photos**:
   - Unified lightbox supporting full-screen inspection, keyboard controls (`Esc`, `ArrowLeft`, `ArrowRight`), next/previous navigation, and caption bar.
6. **Case Study In-Depth Modals**:
   - Interactive modal dialogs detailing industrial challenges, technical solutions, applied standards (AQL 1.5, T&A, Oracle ERP), and quantitative results.
7. **Dark / Light Theme Toggle**:
   - Smooth transition between high-contrast dark mode and clean linen light mode, with user preference saved in `localStorage`.
8. **Semantic, Accessible & Fully Responsive**:
   - WCAG AA compliant contrast, accessible touch targets (≥ 44×44px), mobile-optimized forms (font-size: 16px to prevent iOS auto-zoom), and fluid typography with `clamp()`.

---

## 📁 Project Structure

```
textile-engineer-portfolio/
│
├── index.html                     # Semantic HTML5 website structure
├── style.css                      # Modern CSS tokens, light/dark themes, responsive layout
├── script.js                      # Central IMAGES config, lightbox, club photos, theme manager
├── README.md                      # Deployment & customization guide (this file)
└── assets/
    └── images/
        ├── IMAGE_GUIDE.txt        # Detailed image dimensions & replacement manual
        ├── profile/               # Personal photos (profile.jpg, about.jpg)
        ├── projects/              # Project photos (project-1.jpg ... project-4.jpg)
        ├── hero/                  # Hero banners & awards (hero.jpg, hero-award.jpg, etc.)
        ├── clubs/                 # Auto-scalable club photo files & manifest
        │   └── manifest.json      # Dynamic array for club photo metadata
        └── texture/               # Textile SVG patterns (weave-pattern.svg, herringbone.svg)
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Python Local HTTP Server (Recommended)
If you have Python installed, open your terminal/PowerShell in this directory and run:

```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser. (Running a local server ensures `manifest.json` fetches smoothly via browser `fetch` API).

---

## 🖼️ How to Add Your Photos (Step-by-Step)

You do **not** need all photos ready at once. Follow this simple process whenever you have a new photo:

1. **Save your photo** in the recommended folder inside `assets/images/`:
   - Profile photo (1:1 ratio, 400×400px) &rarr; `assets/images/profile/profile.jpg`
   - About me photo (4:3 ratio, 500×375px) &rarr; `assets/images/profile/about.jpg`
   - Hero banner (Wide, 1920×600px) &rarr; `assets/images/hero/hero.jpg`
   - Project cards (16:9 ratio, 600×340px) &rarr; `assets/images/projects/project-1.jpg`
2. **Open `script.js`** in your code editor.
3. **Locate the `IMAGES` object** at the top of `script.js` and paste your file path into `src`:

```javascript
const IMAGES = {
  profile: {
    src: "assets/images/profile/profile.jpg", // Path to portrait
    alt: "Profile photo of MD. WASEUR RAHMAN",
    focus: "50% 30%"                         // Focal point centering
  },
  about: {
    src: "assets/images/profile/about.jpg",  // Photo at Ha-Meem Group
    focus: "50% 20%"
  },
  projects: [
    { src: "assets/images/projects/project-1.jpg", ... },
    ...
  ]
};
```
4. **Save and reload your browser!**
   - That slot will immediately display your photo with smooth fade-in and proper focal centering.
   - Any slots with empty strings (`""`) remain as clean placeholders until you provide their files.

---

## 🎯 How to Fix Off-Center Photos (`data-focus` Attribute)

When a portrait photo is displayed inside an aspect-ratio container with `object-fit: cover`, the subject's face may occasionally sit too high or too low. You can re-center any photo without editing or cropping the original file.

### How It Works:
Add or adjust the `data-focus` attribute on the `<img>` tag:

```html
<!-- Adjust data-focus to re-center the subject. Format: "X% Y%". X=horizontal (0% left, 100% right), Y=vertical (0% top, 100% bottom) -->
<img src="assets/images/profile/profile.jpg" alt="Profile photo" data-focus="50% 30%">
```

### Coordinate Guide:
- **X (Horizontal)**:
  - `0%`: Left aligned
  - `50%`: Horizontally centered (standard)
  - `100%`: Right aligned
- **Y (Vertical)**:
  - `0%`: Top aligned (great if head/hair is getting cropped)
  - `20%` – `30%`: Upper third (ideal for portraits/headshots to center the face)
  - `50%`: Vertically centered (default)
  - `100%`: Bottom aligned

The website includes built-in CSS and JavaScript that automatically converts `data-focus="X% Y%"` into dynamic CSS variables (`--focus-x` and `--focus-y`), instantly pulling the subject to center!

---

## 📸 How to Add Club Photos (`manifest.json` Approach)

The **Club Photos** section is fully dynamic and auto-scalable. You can add, edit, or remove photos over time without editing HTML or JavaScript code!

### Step 1: Drop photo file into `/assets/images/clubs/`
Place your photo file into `assets/images/clubs/` (e.g. `debate-trophy.jpg`, `photo-exhibit.jpg`).

### Step 2: Add an entry to `assets/images/clubs/manifest.json`
Open `assets/images/clubs/manifest.json` and add an object for your photo:

```json
[
  {
    "src": "debate-trophy.jpg",
    "alt": "Public Speaking Champion at South-East Lit Fest",
    "club": "Debate Club"
  },
  {
    "src": "photo-exhibit.jpg",
    "alt": "BUFT Photography Club Annual Exhibition",
    "club": "Photography Club"
  }
]
```

### Supported Fields in `manifest.json`:
- `src`: Filename inside `assets/images/clubs/` (e.g. `"debate-1.jpg"`)
- `alt`: Caption description shown on hover and in the lightbox
- `club`: Must match either `"Debate Club"` or `"Photography Club"` for filter tags

### Auto-Scaling Behavior:
- **0 photos**: Displays 2 styled placeholders explaining where to add photos.
- **1-3 photos**: Neatly arranged in a single row.
- **4+ photos**: Wraps automatically across responsive rows with auto-fill.
- **Lightbox Integration**: Clicking any card opens the photo in the full-screen lightbox with caption and arrow navigation.

---

## 📱 Responsive Testing Checklist

This portfolio has been rigorously tested across all standard viewport sizes:

| Breakpoint Range | Device Class | Expected Layout Behavior |
| :--- | :--- | :--- |
| **320px – 480px** | Mobile Devices (iPhone SE, Galaxy S, Pixel) | 1 column layout, hamburger navigation menu, full-width buttons, 100% width form inputs, touch targets &ge; 44×44px, zero horizontal scrolling. |
| **481px – 767px** | Large Phones & Phablets | Fluid typography with `clamp()`, comfortable padding, single-column timeline with compact markers. |
| **768px – 1023px** | Tablets & iPads (Portrait / Landscape) | 2 column grids for projects and gallery, 2 column skill bars, sticky glass header, responsive modal dialogs. |
| **1024px – 1439px** | Laptops & Standard Desktops | Full horizontal navigation bar, multi-column grids (3 column education, 2 column case studies, 3 column gallery), floating hero badges. |
| **1440px+** | Large Monitors & 4K Displays | Max-width container capped at 1320px, crisp high-DPI asset rendering, optimal readable text line-lengths. |

### Verification Checklist:
- [x] All headings use `clamp(1.75rem, 4vw, 2.75rem)` for fluid scaling.
- [x] All body copy uses `clamp(0.9rem, 2vw, 1.05rem)`.
- [x] Form input font size is set to `16px` to prevent unwanted iOS Safari zooming on focus.
- [x] All interactive buttons and links exceed the minimum 44×44px touch target guidelines.
- [x] `overflow-x: hidden` applied to prevent unwanted horizontal page jank.
- [x] Tested with 0 photos in `manifest.json` (graceful 2-placeholder fallback).
- [x] Lightbox handles touch taps, mouse clicks, and keyboard controls (`Escape`, `ArrowLeft`, `ArrowRight`).

---

## 🌐 Free Deployment Instructions

### 1. GitHub Pages (100% Free)
1. Initialize a git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Deploy MD. Waseur Rahman Textile Engineer Portfolio"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Link and push your local branch:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings** &rarr; **Pages**.
5. Under **Build and deployment** &rarr; **Branch**, select `main` and `/ (root)`. Click **Save**.
6. Your portfolio will be live at `https://<your-username>.github.io/<repo-name>/` in about 60 seconds!

---

### 2. Vercel (100% Free, Instant Global CDN)
1. Push your code to GitHub (as above).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** &rarr; **"Import"** your GitHub repository.
4. Leave all settings at default (**Framework Preset: Other**).
5. Click **"Deploy"**. Your site is live on a custom `.vercel.app` URL with free automated HTTPS!

---

### 3. Netlify (Drag & Drop, 100% Free)
1. Open [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `textile-engineer-portfolio` folder directly into the browser window.
3. Your portfolio goes live instantly!

---

## ✏️ How to Customize Personal Details

- **Contact Details**: In `index.html` under `<section id="contact">` and in the footer:
  - Email: `waseurrahman22@gmail.com`
  - Phone: `+8801919456468`
  - Location: `Dhanmondi, Dhaka, Bangladesh`
  - LinkedIn: `https://www.linkedin.com/in/waseur-rahman00`
- **Case Studies**: In `script.js`, edit the `CASE_STUDIES` array to detail your specific industrial trials, competition presentations, or thesis research.
- **Skills & Badges**: Add or modify skill items in the `<section id="skills">` grid.

---

## 📜 License
MIT License. Free to use, adapt, and customize for personal and professional portfolios.

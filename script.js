/**
 * TEXTILE ENGINEER PORTFOLIO - JAVASCRIPT SYSTEM
 * Professional Portfolio for MD. WASEUR RAHMAN (Textile Engineer)
 * 
 * Includes:
 * 1. Centralized Image Management System (Placeholder-First Architecture)
 * 2. Dynamic Focal Point Handler (img[data-focus])
 * 3. Auto-Scalable Club Photos System (manifest.json driven)
 * 4. Unified Lightbox for Gallery & Club Photos
 * 5. Case Study Details Modal
 * 6. Theme Manager (Dark/Light with LocalStorage persistence)
 * 7. Category Filters & Responsive Navigation
 * 8. Accessible Contact Form Validation & Feedback Toast
 */

/* ==========================================================================
   1. Central Image Management Configuration
   ========================================================================== */
const IMAGES = {
  profile: {
    src: "assets/images/profile/profile.jpg",
    alt: "Profile photo of MD. WASEUR RAHMAN",
    recommendedSize: "400 × 400px (1:1)",
    label: "MD. WASEUR RAHMAN",
    hint: "assets/images/profile/profile.jpg",
    focus: "50% 30%"
  },
  about: {
    src: "assets/images/profile/about.jpg",
    alt: "MD. WASEUR RAHMAN at Ha-Meem Group Industrial Complex",
    recommendedSize: "500 × 375px (4:3)",
    label: "Ha-Meem Group Industrial Fieldwork",
    hint: "assets/images/profile/about.jpg",
    focus: "50% 20%"
  },
  hero: {
    src: "assets/images/hero/hero.jpg",
    alt: "MD. WASEUR RAHMAN presenting BUFT Industrial Training Report",
    recommendedSize: "1920 × 600px (Wide)",
    label: "BUFT Textile Engineering Defense",
    hint: "assets/images/hero/hero.jpg",
    focus: "50% 18%"
  },
  projects: [
    {
      src: "assets/images/projects/project-1.jpg",
      alt: "$15M+ Apparel Order Execution — Levi's & JCPenney",
      recommendedSize: "600 × 340px (16:9)",
      label: "$15M+ Apparel Order Execution",
      hint: "assets/images/projects/project-1.jpg",
      focus: "50% 50%"
    },
    {
      src: "assets/images/projects/project-2.jpg",
      alt: "T&A & Risk Management System",
      recommendedSize: "600 × 340px (16:9)",
      label: "T&A & Risk Management",
      hint: "assets/images/projects/project-2.jpg",
      focus: "50% 50%"
    },
    {
      src: "assets/images/projects/project-3.jpg",
      alt: "Fabric Consumption & Trim Cost Analysis",
      recommendedSize: "600 × 340px (16:9)",
      label: "Fabric Consumption & Costing",
      hint: "assets/images/projects/project-3.jpg",
      focus: "50% 50%"
    },
    {
      src: "assets/images/projects/project-4.jpg",
      alt: "Oracle ERP Order Management",
      recommendedSize: "600 × 340px (16:9)",
      label: "Oracle ERP Order Management",
      hint: "assets/images/projects/project-4.jpg",
      focus: "50% 50%"
    }
  ],
  gallery: [
    {
      src: "assets/images/hero/hero.jpg",
      alt: "MD. WASEUR RAHMAN presenting BUFT Industrial Training Report",
      caption: "Industrial Training Report Presentation & Defense — BGMEA University of Fashion & Technology (BUFT)",
      recommendedSize: "800 × 600px",
      label: "BUFT Training Defense"
    },
    {
      src: "assets/images/profile/about.jpg",
      alt: "MD. WASEUR RAHMAN at Ha-Meem Group Industrial Complex",
      caption: "Industrial Operations & Plant Exposure at Ha-Meem Group, Bangladesh",
      recommendedSize: "800 × 600px",
      label: "Ha-Meem Group Complex"
    },
    {
      src: "assets/images/projects/project-1.jpg",
      alt: "Apparel Manufacturing & Sewing Production Line Inspection",
      caption: "Apparel Manufacturing & Sewing Floor Quality Inspection (Ha-Meem Group)",
      recommendedSize: "800 × 600px",
      label: "Sewing Floor Inspection"
    },
    {
      src: "assets/images/projects/project-2.jpg",
      alt: "Dhaka International Textile Machinery Exhibition (DTG)",
      caption: "DTG International Textile Machinery Expo — Ring frame and draw frame component review",
      recommendedSize: "800 × 600px",
      label: "DTG Machinery Expo"
    },
    {
      src: "assets/images/projects/project-3.jpg",
      alt: "BUFT Apparel Arena 2026 Champions Check & Crests",
      caption: "Champions of BUFT Apparel Arena 2026 — Organized by BUFT Merchandising Club & The Textile Institute",
      recommendedSize: "800 × 600px",
      label: "Apparel Arena 2026 Champions"
    },
    {
      src: "assets/images/projects/project-4.jpg",
      alt: "IGNITE Champions Team - BUFT Merchandising Club",
      caption: "Champions Team — IGNITE Public Speaking & Case Presentation Arena (BUFT)",
      recommendedSize: "800 × 600px",
      label: "IGNITE Champions"
    },
    {
      src: "assets/images/hero/hero-award.jpg",
      alt: "BUFT International Model United Nations Award",
      caption: "Award of Accomplishment — BUFT International Model United Nations",
      recommendedSize: "800 × 600px",
      label: "BUFT MUN Award"
    },
    {
      src: "assets/images/hero/rahmat-group-visit.jpg",
      alt: "Rahmat Group Industrial Field Visit",
      caption: "Industrial Field Visit & Manufacturing Mill Exposure at Rahmat Group of Industries",
      recommendedSize: "800 × 600px",
      label: "Rahmat Group Mill Visit"
    },
    {
      src: "assets/images/hero/speaking-award.jpg",
      alt: "Winner - Public Speaking (English) at Southeast University Lit Fest",
      caption: "Winner — Public Speaking (English), Southeast University Lit Fest 1.0",
      recommendedSize: "800 × 600px",
      label: "SEU Speaking Winner"
    }
  ]
};

/* ==========================================================================
   2. Comprehensive Case Studies Data (4 Real Projects)
   ========================================================================== */
const CASE_STUDIES = [
  {
    id: 0,
    title: "$15M+ Apparel Order Execution — Levi's & JCPenney",
    category: "Merchandising & Order Management",
    impact: "$15M+ Order Value Executed | On-Time Delivery Guaranteed",
    date: "October 2025 – January 2026",
    client: "Ha-Meem Group / Levi's & JCPenney",
    overview: "Coordinated development and execution of apparel orders valued at over $15M for global buyers Levi's and JCPenney, covering pants, overalls, shirts, and kidswear through buyer communication and cross-department coordination.",
    challenge: "Managing multifaceted apparel orders across diverse fabric weights and product categories while navigating stringent delivery windows, strict buyer technical compliance, and rapid sample turnaround times.",
    solution: "Established transparent buyer communication channels, rigorous sample flow tracking, and cross-functional coordination between washing, sewing, finishing, and commercial teams.",
    results: [
      "Supported successful execution of apparel orders exceeding $15M in cumulative value.",
      "Maintained zero air-freight penalties through vigilant critical path management.",
      "Ensured high buyer satisfaction across complex pants and overalls specifications.",
      "Built resilient relationships with international buyer representatives."
    ],
    standards: "Buyer Technical Packages, AQL 1.5, ISO 9001:2015, Levi's Quality Protocols"
  },
  {
    id: 1,
    title: "T&A & Risk Management System",
    category: "Operations & Critical Path",
    impact: "Proactive Risk Elimination | 100% Pre-Production Readiness",
    date: "October 2025 – January 2026",
    client: "Ha-Meem Group / Apparel Division",
    overview: "Contributed to proactive risk management through Time & Action (T&A) tracking, Risk Assessment (RA), and Pre-Production (PP) meetings, communicating material, timeline, and quality risks to relevant teams.",
    challenge: "Complex apparel supply chains are prone to lead-time bottlenecks such as delayed yarn arrival, lab-dip shade rejections, and trim customs clearances that threaten production readiness.",
    solution: "Implemented proactive daily T&A tracking matrices, tracked development samples and technical approvals ahead of bulk production, and led structured PP risk review meetings.",
    results: [
      "Identified and mitigated potential material and trim delays ahead of bulk sewing.",
      "Supported on-time delivery by tracking lab dips and technical approvals in advance.",
      "Communicated timeline and quality risks across merchandising and production units.",
      "Standardized PP meeting documentation for smooth factory floor handovers."
    ],
    standards: "Time & Action (T&A), Risk Assessment Protocol, Pre-Production (PP) Guidelines"
  },
  {
    id: 2,
    title: "Fabric Consumption & Trim Cost Analysis",
    category: "Costing & Financial Control",
    impact: "Optimized BOM Costing | Feasibility Accuracy in NPD",
    date: "October 2025 – January 2026",
    client: "Ha-Meem Group / New Product Development",
    overview: "Supported cost control by calculating fabric consumption and trim costs for feasibility analysis in new product development (NPD).",
    challenge: "Fabric typically represents 60-70% of total garment cost; minute variances in consumption markers or trim prices can erase profit margins on high-volume bulk orders.",
    solution: "Conducted precise marker consumption factoring across varied fabric widths and shrinkage rates, audited trim component pricing, and built comprehensive cost sheets for buyer price quotations.",
    results: [
      "Delivered accurate fabric consumption factoring for new development styles.",
      "Prevented fabric over-ordering and minimized dead-stock inventory costs.",
      "Provided competitive and commercially viable pricing models for buyer negotiations.",
      "Accelerated feasibility approval cycles for new season developments."
    ],
    standards: "Garment Costing Standards, Marker Efficiency Analysis, Bill of Materials (BOM)"
  },
  {
    id: 3,
    title: "Oracle ERP Order Management",
    category: "Enterprise Systems & Logistics",
    impact: "End-to-End Traceability | Flawless PO/SO Tracking",
    date: "October 2025 – January 2026",
    client: "Ha-Meem Group / Enterprise IT & Merchandising",
    overview: "Managed Sales Orders (SO) and Purchase Orders (PO) in Oracle ERP, maintaining accurate order documentation and end-to-end tracking.",
    challenge: "Coordinating multi-facility orders with thousands of SKUs requires real-time data integrity to prevent order mismatches, duplicate POs, or inventory misallocations.",
    solution: "Leveraged Oracle ERP modules to generate, audit, and update Sales Orders, Purchase Orders, and shipping schedules with real-time documentation control.",
    results: [
      "Ensured 100% data fidelity between buyer orders and ERP system entries.",
      "Facilitated transparent inventory allocation and supplier invoice verification.",
      "Streamlined reporting across procurement, merchandising, and warehouse units.",
      "Reduced manual clerical discrepancies in high-volume export documentation."
    ],
    standards: "Oracle ERP Cloud / E-Business Suite, Enterprise Order Documentation"
  }
];

/* ==========================================================================
   3. Image Focal Point System (data-focus support)
   ========================================================================== */
function applyImageFocalPoints() {
  document.querySelectorAll('img[data-focus]').forEach(img => {
    const focusVal = (img.dataset.focus || '50% 50%').trim();
    const parts = focusVal.split(/\s+/);
    const x = parts[0] || '50%';
    const y = parts[1] || '50%';
    img.style.setProperty('--focus-x', x);
    img.style.setProperty('--focus-y', y);
  });
}

/* ==========================================================================
   4. Image Loader & Placeholder Renderer Engine
   ========================================================================== */
class ImageSystem {
  static init() {
    this.renderSingleImage('profile-img-slot', IMAGES.profile, 'aspect-1-1 hero-avatar');
    this.renderSingleImage('about-img-slot', IMAGES.about, 'aspect-4-3');
    this.renderHeroMedia('hero-img-slot', IMAGES.hero);
    this.renderProjectImages();
    this.renderGallery();
    applyImageFocalPoints();
  }

  static getSvgIcon(type) {
    if (type === 'camera') {
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`;
    }
    if (type === 'fabric') {
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>`;
    }
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
  }

  static createPlaceholderMarkup(config, iconType = 'fabric') {
    const title = config.label || "Photo Coming Soon";
    const size = config.recommendedSize || "Standard Ratio";
    const hint = config.hint || "Add path in script.js";

    return `
      <div class="placeholder-box" aria-label="${config.alt}">
        <div class="placeholder-icon-wrap">
          ${this.getSvgIcon(iconType)}
        </div>
        <div class="placeholder-text">
          <span class="placeholder-title">${title}</span>
          <span class="placeholder-tag">${size}</span>
          <span class="placeholder-hint">${hint}</span>
        </div>
      </div>
    `;
  }

  static renderSingleImage(containerId, config, aspectClass) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Check if an img already exists in the container (e.g. from static HTML)
    let img = container.querySelector('img');

    if (config && config.src && config.src.trim() !== '') {
      if (!img) {
        img = document.createElement('img');
        container.appendChild(img);
      }
      img.src = config.src;
      img.alt = config.alt || "Textile Portfolio Image";
      if (config.focus) {
        img.setAttribute('data-focus', config.focus);
      }
      img.loading = "lazy";
      img.onload = () => {
        img.classList.add('loaded');
        applyImageFocalPoints();
      };
      img.onerror = () => {
        container.innerHTML = ImageSystem.createPlaceholderMarkup(config, 'camera');
      };
    } else if (!img) {
      container.innerHTML = this.createPlaceholderMarkup(config, 'camera');
    }
  }

  static renderHeroMedia(containerId, config) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let img = container.querySelector('img');

    if (config && config.src && config.src.trim() !== '') {
      if (!img) {
        img = document.createElement('img');
        container.appendChild(img);
      }
      img.src = config.src;
      img.alt = config.alt || "Textile Hero Banner";
      if (config.focus) {
        img.setAttribute('data-focus', config.focus);
      }
      img.loading = "eager";
      img.onload = () => {
        img.classList.add('loaded');
        applyImageFocalPoints();
      };
      img.onerror = () => {
        container.innerHTML = ImageSystem.createPlaceholderMarkup(config, 'fabric');
      };
    } else if (!img) {
      container.innerHTML = this.createPlaceholderMarkup(config, 'fabric');
    }
  }

  static renderProjectImages() {
    const projectSlots = document.querySelectorAll('.project-img-slot');
    projectSlots.forEach((slot, index) => {
      const config = IMAGES.projects[index];
      if (!config) return;

      let img = slot.querySelector('img');

      if (config.src && config.src.trim() !== '') {
        if (!img) {
          img = document.createElement('img');
          slot.appendChild(img);
        }
        img.src = config.src;
        img.alt = config.alt;
        if (config.focus) {
          img.setAttribute('data-focus', config.focus);
        }
        img.loading = "lazy";
        img.onload = () => {
          img.classList.add('loaded');
          applyImageFocalPoints();
        };
        img.onerror = () => {
          slot.innerHTML = ImageSystem.createPlaceholderMarkup(config, 'fabric');
        };
      } else if (!img) {
        slot.innerHTML = ImageSystem.createPlaceholderMarkup(config, 'fabric');
      }
    });
  }

  static renderGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    IMAGES.gallery.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-item';
      card.setAttribute('data-gallery-index', index);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View ${item.label || item.alt}`);

      const slot = document.createElement('div');
      slot.className = 'img-slot aspect-4-3';

      if (item.src && item.src.trim() !== '') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.loading = "lazy";
        img.onload = () => img.classList.add('loaded');
        img.onerror = () => {
          slot.innerHTML = ImageSystem.createPlaceholderMarkup(item, 'fabric');
        };
        slot.appendChild(img);
      } else {
        slot.innerHTML = ImageSystem.createPlaceholderMarkup(item, 'fabric');
      }

      const overlay = document.createElement('div');
      overlay.className = 'gallery-overlay';
      overlay.innerHTML = `
        <span class="gallery-caption-title">${item.label || "Textile Specimen"}</span>
        <span class="gallery-zoom-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          Click to inspect
        </span>
      `;

      card.appendChild(slot);
      card.appendChild(overlay);

      const openHandler = () => Lightbox.openWithItems(IMAGES.gallery, index);
      card.addEventListener('click', openHandler);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openHandler();
        }
      });

      galleryGrid.appendChild(card);
    });
  }
}

/* ==========================================================================
   5. Unified Vanilla JS Lightbox System (Gallery & Club Photos)
   ========================================================================== */
class Lightbox {
  static currentIndex = 0;
  static currentItems = [];
  static modal = null;
  static contentBox = null;
  static captionBar = null;

  static init() {
    this.modal = document.getElementById('lightbox-modal');
    this.contentBox = document.getElementById('lightbox-content-box');
    this.captionBar = document.getElementById('lightbox-caption-bar');

    if (!this.modal) return;

    const closeBtn = document.getElementById('lightbox-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    const prevBtn = document.getElementById('lightbox-prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());

    const nextBtn = document.getElementById('lightbox-next-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (!this.modal.classList.contains('active')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  static openWithItems(items, index) {
    if (!this.modal || !items || items.length === 0) return;
    this.currentItems = items;
    this.currentIndex = (index + items.length) % items.length;
    this.updateContent();
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  static close() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  static prev() {
    if (!this.currentItems || this.currentItems.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.currentItems.length) % this.currentItems.length;
    this.updateContent();
  }

  static next() {
    if (!this.currentItems || this.currentItems.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.currentItems.length;
    this.updateContent();
  }

  static updateContent() {
    const item = this.currentItems[this.currentIndex];
    if (!item) return;

    this.contentBox.innerHTML = '';

    // Handle both gallery format (src) and club photos format (src with or without folder prefix)
    let imageSrc = item.src || '';
    if (imageSrc && !imageSrc.startsWith('assets/')) {
      imageSrc = `assets/images/clubs/${imageSrc}`;
    }

    if (imageSrc && imageSrc.trim() !== '') {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = item.alt || 'Full View';
      img.className = 'lightbox-image';
      this.contentBox.appendChild(img);
    } else {
      const preview = document.createElement('div');
      preview.style.padding = '3.5rem 2rem';
      preview.style.width = '100%';
      preview.style.textAlign = 'center';
      preview.style.color = '#fff';
      preview.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-camera"></i></div>
        <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 0.5rem;">${item.label || item.club || "Photo Slot"}</h3>
        <p style="color: #94a3b8; font-size: 0.95rem; max-width: 500px; margin: 0 auto;">${item.caption || item.alt || "Image coming soon"}</p>
      `;
      this.contentBox.appendChild(preview);
    }

    if (this.captionBar) {
      const captionText = item.caption || item.alt || item.description || (item.club ? `${item.club} Photo` : '');
      this.captionBar.innerHTML = `<strong>${this.currentIndex + 1}/${this.currentItems.length}:</strong> ${captionText}`;
    }
  }
}

/**
 * Global helper function for opening the lightbox from any component
 */
function openLightbox(items, index) {
  Lightbox.openWithItems(items, index);
}

/* ==========================================================================
   6. Auto-Scalable Club Photos System (manifest.json driven)
   ========================================================================== */
const DEFAULT_CLUB_PHOTOS = [
  {
    name: "debate_photo_1",
    src: "debate_photo_1.jpg",
    club: "Debate Club",
    type: "image/jpeg",
    alt: "Grand Finale & Prize Giving Ceremony — Shahid Selim BUFT National Debate Competition 2024",
    description: "Grand Finale & Prize Giving Ceremony — Shahid Selim BUFT National Debate Competition 2024"
  },
  {
    name: "photography_photo_2",
    src: "photography_photo_2.jpg",
    club: "Photography Club",
    type: "image/jpeg",
    alt: "BUFT Photography Club — Iftar Mahfil 2025 at Virgo Lounge",
    description: "BUFT Photography Club — Iftar Mahfil 2025 at Virgo Lounge"
  }
];

let allClubPhotos = [];
let currentClubFilter = 'All';

async function loadClubPhotos() {
  try {
    const response = await fetch('assets/images/clubs/manifest.json');
    if (!response.ok) throw new Error('manifest not found');
    allClubPhotos = await response.json();
  } catch (err) {
    // Fallback to defaults when viewing via local file:// protocol or offline
    allClubPhotos = DEFAULT_CLUB_PHOTOS;
  }
  renderClubPhotos();
}

function renderClubPhotos() {
  const grid = document.getElementById('clubsGrid');
  if (!grid) return;

  const filtered = currentClubFilter === 'All'
    ? allClubPhotos
    : allClubPhotos.filter(p => p.club === currentClubFilter);

  // If no photos, show 2 placeholders
  if (filtered.length === 0) {
    grid.innerHTML = Array(2).fill().map(() => `
      <div class="club-photo-card club-photo-placeholder">
        <i class="fas fa-camera" style="font-size:2rem;margin-bottom:0.5rem;"></i>
        <span>Add photos to /assets/images/clubs/<br>and update manifest.json</span>
      </div>
    `).join('');
    return;
  }

  grid.innerHTML = filtered.map((photo, i) => {
    const photoSrc = (photo.src || '').startsWith('assets/') ? photo.src : `assets/images/clubs/${photo.src}`;
    const photoAlt = photo.alt || photo.description || (photo.club ? `${photo.club} Photo` : '');
    return `
      <div class="club-photo-card" data-index="${i}">
        <img src="${photoSrc}" alt="${photoAlt}" loading="lazy" data-focus="50% 50%">
        ${photo.club ? `<span class="club-badge">${photo.club}</span>` : ''}
        ${photoAlt ? `<div class="overlay">${photoAlt}</div>` : ''}
      </div>
    `;
  }).join('');

  // Attach lightbox click handlers
  grid.querySelectorAll('.club-photo-card').forEach(card => {
    card.addEventListener('click', () => openLightbox(filtered, parseInt(card.dataset.index, 10)));
  });

  applyImageFocalPoints();
}

// Club filter button handlers
function setupClubFilters() {
  document.querySelectorAll('.club-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.club-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentClubFilter = btn.dataset.filter;
      renderClubPhotos();
    });
  });
}

/* ==========================================================================
   7. Case Study Details Modal
   ========================================================================== */
class CaseStudyModal {
  static modal = null;
  static content = null;

  static init() {
    this.modal = document.getElementById('case-modal');
    this.content = document.getElementById('case-modal-body');

    if (!this.modal) return;

    const closeBtn = document.getElementById('case-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });

    document.querySelectorAll('.project-detail-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const projectId = parseInt(e.currentTarget.getAttribute('data-project-id'), 10);
        CaseStudyModal.open(projectId);
      });
    });
  }

  static open(projectId) {
    const study = CASE_STUDIES.find(s => s.id === projectId);
    if (!study || !this.modal || !this.content) return;

    const resultsList = study.results.map(r => `<li>${r}</li>`).join('');

    this.content.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span style="display: inline-block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-teal); letter-spacing: 0.05em; margin-bottom: 0.5rem;">
          ${study.category} • ${study.date}
        </span>
        <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); line-height: 1.25; margin-bottom: 0.5rem;">
          ${study.title}
        </h2>
        <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted);">
          Client / Partner: ${study.client} | Applied Standards: <span style="color: var(--primary); font-family: var(--font-mono);">${study.standards}</span>
        </div>
      </div>

      <div style="background: var(--bg-secondary); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-left: 4px solid var(--accent-teal);">
        <strong style="color: var(--text-primary); display: block; font-size: 0.85rem; text-transform: uppercase;">Key Impact:</strong>
        <span style="color: var(--accent-teal); font-weight: 700; font-size: 1.05rem;">${study.impact}</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7;">
        <div>
          <h4 style="color: var(--text-primary); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">Project Overview</h4>
          <p>${study.overview}</p>
        </div>

        <div>
          <h4 style="color: var(--text-primary); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">The Engineering Challenge</h4>
          <p>${study.challenge}</p>
        </div>

        <div>
          <h4 style="color: var(--text-primary); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">Technical Methodology & Solution</h4>
          <p>${study.solution}</p>
        </div>

        <div>
          <h4 style="color: var(--text-primary); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.5rem;">Quantitative Industrial Results</h4>
          <ul style="list-style: square; padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.4rem;">
            ${resultsList}
          </ul>
        </div>
      </div>
    `;

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  static close() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   8. Theme Manager (Dark / Light Theme Toggle)
   ========================================================================== */
class ThemeManager {
  static init() {
    const savedTheme = localStorage.getItem('textile_portfolio_theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    this.setTheme(savedTheme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
      });
    }
  }

  static setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('textile_portfolio_theme', theme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.innerHTML = theme === 'dark' 
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>` 
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
    }
  }
}

/* ==========================================================================
   9. Navigation, Mobile Menu & Scroll Observers
   ========================================================================== */
class NavigationSystem {
  static init() {
    const header = document.querySelector('.site-header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      NavigationSystem.highlightActiveSection();
    });

    if (mobileMenuBtn && navLinks) {
      const closeMenu = () => {
        navLinks.classList.remove('open', 'active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
      };

      mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle('open');
        navLinks.classList.toggle('active', isOpen);
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        mobileMenuBtn.innerHTML = isOpen
          ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
          : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
      });

      navItems.forEach(item => {
        item.addEventListener('click', () => closeMenu());
      });

      document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target) && navLinks.classList.contains('open')) {
          closeMenu();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('open')) {
          closeMenu();
        }
      });
    }

    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  static highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (navLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  }
}

/* ==========================================================================
   10. Contact Form & Feedback Toast
   ========================================================================== */
class ContactSystem {
  static init() {
    const form = document.getElementById('contact-form');
    const toast = document.getElementById('toast-notice');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        if (toast) {
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
          }, 4500);
        }
      }, 600);
    });
  }
}

/* ==========================================================================
   11. App Initialization on DOM Ready
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  ImageSystem.init();
  Lightbox.init();
  CaseStudyModal.init();
  NavigationSystem.init();
  ContactSystem.init();
  setupClubFilters();
  loadClubPhotos();
  applyImageFocalPoints();
});

/**
 * Dr. UMU SLAN — Multi-disciplinary Professional
 * Interactive behaviors + 2026 animations
 */

<<<<<<< HEAD
=======
// WhatsApp floating button — update with your number (country code, no + or 0)
const WHATSAPP_NUMBER = '966535835700';

>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
document.addEventListener('DOMContentLoaded', () => {
  initWorkSamples();
  initWorkSamplesMarquee();
  initMarquee();
  initCaseStudies();
  initMobileMenu();
  initScrollReveal();
  initHeaderScroll();
  initStickyCTA();
  initScreenshotLightbox();
<<<<<<< HEAD
});

/**
=======
  initExpertiseDropdown();
  initNavExpertiseDropdown();
  initFloatingWhatsApp();
});

/**
 * Floating WhatsApp button — appears on all pages, stays visible on scroll
 */
function initFloatingWhatsApp() {
  if (document.getElementById('wa-float')) return;
  const url = `https://wa.me/${WHATSAPP_NUMBER}`;
  const btn = document.createElement('a');
  btn.id = 'wa-float';
  btn.href = url;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.setAttribute('aria-label', 'Chat on WhatsApp');
  btn.className = 'whatsapp-float';
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  document.body.appendChild(btn);
}

/**
 * Expertise dropdown — toggle panel, close on outside click or link select
 */
function initExpertiseDropdown() {
  const trigger = document.getElementById('expertise-dropdown-trigger');
  const panel = document.getElementById('expertise-dropdown-panel');
  const label = document.querySelector('.expertise-dropdown-label');
  const items = document.querySelectorAll('.expertise-dropdown-item');

  if (!trigger || !panel) return;

  const open = () => {
    panel.setAttribute('data-open', 'true');
    trigger.setAttribute('aria-expanded', 'true');
  };

  const close = () => {
    panel.setAttribute('data-open', 'false');
    trigger.setAttribute('aria-expanded', 'false');
  };

  const toggle = () => {
    const isOpen = panel.getAttribute('data-open') === 'true';
    if (isOpen) close();
    else open();
  };

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggle();
  });

  items.forEach((item) => {
    item.addEventListener('click', () => {
      close();
      label.textContent = item.textContent.trim();
    });
  });

  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && e.target !== trigger) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/**
 * Nav header — Expertise dropdown (opens on hover, click for mobile fallback)
 */
function initNavExpertiseDropdown() {
  const trigger = document.getElementById('nav-expertise-trigger');
  const panel = document.getElementById('nav-expertise-panel');
  const dropdown = trigger?.closest('.nav-dropdown');

  if (!trigger || !panel || !dropdown) return;

  const open = () => {
    panel.setAttribute('data-open', 'true');
    trigger.setAttribute('aria-expanded', 'true');
  };

  const close = () => {
    panel.setAttribute('data-open', 'false');
    trigger.setAttribute('aria-expanded', 'false');
  };

  const toggle = () => {
    if (panel.getAttribute('data-open') === 'true') close();
    else open();
  };

  /* Hover: open on mouseenter, close on mouseleave */
  dropdown.addEventListener('mouseenter', open);
  dropdown.addEventListener('mouseleave', close);

  /* Mobile/touch fallback: click to toggle */
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle();
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/**
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
 * Results Gallery — نفس الترتيب على كل الصفحات
 * أولوية: الرسائل/اليد فورم أولاً (يهم العملاء)، ثم أقل تكلفة ← أعلى نتائج
 * زيارات بروفايل الانستا في الأخير
 * الهوم: أول 12 | صفحة Results Gallery: الكل
 */
function initWorkSamples() {
  const data = window.WORK_SAMPLES_DATA;
  const bento = document.querySelector('.screenshots-bento');
  if (!data || !bento) return;

<<<<<<< HEAD
  const isFullPage = location.pathname.includes('screenshots');
  const totalCount = data.length;
=======
  const getService = (item) => {
    if (item.service) return item.service;
    const ind = (item.industry || '').toLowerCase();
    if (ind.includes('meta ads') || ind.includes('reels')) return 'marketing';
    if (ind.includes('social media design')) return 'social-design';
    if (ind.includes('content') || ind.includes('copywriting')) return 'content';
    if (ind.includes('shopify')) return 'shopify';
    if (ind.includes('seo')) return 'seo';
    if (ind.includes('cro') || ind.includes('conversion')) return 'cro';
    if (ind.includes('automation') || ind.includes('workflow') || ind.includes('n8n') || ind.includes('ai agent')) return 'automation';
    if (ind.includes('personal brand') || ind.includes('branding')) return 'personal-branding';
    if (ind.includes('saas') || ind.includes('product')) return 'saas';
    return null;
  };

  const params = new URLSearchParams(location.search);
  const urlService = params.get('service')?.toLowerCase().trim();
  const validServices = ['marketing', 'social-design', 'content', 'shopify', 'seo', 'cro', 'automation', 'personal-branding', 'saas'];
  const filterByService = urlService && validServices.includes(urlService);

  let source = data;
  if (filterByService) {
    source = data.filter((item) => getService(item) === urlService);
  }

  const isFullPage = location.pathname.includes('screenshots');
  const totalCount = source.length;
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
  const limit = isFullPage ? totalCount : 12;

  // أولوية النوع: Messaging + Lead أولاً، Profile visits في الآخر
  const metricPriority = (item) => {
    const ind = (item.industry || '').toLowerCase();
<<<<<<< HEAD
=======
    if (ind.includes('reels') || ind.includes('social media design')) return 5; // عينات الريلتس والتصميم في الآخر
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
    if (ind.includes('messaging') || ind.includes('lead')) return 1; // الأهم للعملاء
    if (ind.includes('link')) return 2;
    if (ind.includes('profile')) return 4;  // زيارات انستا آخراً
    return 3; // post engagement وغيره
  };

<<<<<<< HEAD
  const sorted = [...data].sort((a, b) => {
=======
  const sorted = [...source].sort((a, b) => {
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
    const pA = metricPriority(a);
    const pB = metricPriority(b);
    if (pA !== pB) return pA - pB; // الرسائل والليد أولاً
    const costA = a.cost != null ? Number(a.cost) : 999;
    const costB = b.cost != null ? Number(b.cost) : 999;
    if (costA !== costB) return costA - costB;
    const resA = a.results != null ? Number(a.results) : 0;
    const resB = b.results != null ? Number(b.results) : 0;
    return resB - resA; // أعلى نتائج عند تساوي التكلفة
  }).slice(0, limit);

  const sizeClasses = { lg: 'screenshot-lg', wide: 'screenshot-wide', tall: 'screenshot-tall' };
  const revealDelays = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'];

  bento.innerHTML = sorted.map((item, i) => {
    const sizeClass = item.size ? sizeClasses[item.size] || '' : '';
    const revealClass = revealDelays[i % 5];
    const hasImage = !item.placeholder && item.src;

    if (hasImage) {
      return `<div class="screenshot-cell ${sizeClass} reveal ${revealClass} has-image" data-index="${i + 1}" data-src="${item.src}">
        <button type="button" class="screenshot-trigger" aria-label="View result">
          <div class="screenshot-placeholder">
            <img src="${item.src}" alt="${(item.alt || '').replace(/"/g, '&quot;')}" loading="lazy">
            <div class="screenshot-overlay">
              <span class="screenshot-overlay-industry">${item.industry}</span>
              <span class="screenshot-overlay-achievement">${item.achievement}</span>
            </div>
          </div>
        </button>
      </div>`;
    }
    return `<div class="screenshot-cell ${sizeClass} reveal ${revealClass}" data-index="${i + 1}">
      <button type="button" class="screenshot-trigger" aria-label="View result">
        <div class="screenshot-placeholder">
          <span class="screenshot-label">[Work Sample ${i + 1}]</span>
          <div class="screenshot-overlay">
            <span class="screenshot-overlay-industry">${item.industry}</span>
            <span class="screenshot-overlay-achievement">${item.achievement}</span>
          </div>
        </div>
      </button>
    </div>`;
  }).join('');
<<<<<<< HEAD
}

/**
 * Work Samples Marquee — homepage: marketing + Shopify mixed across 5 columns
 */
function initWorkSamplesMarquee() {
  const data = window.WORK_SAMPLES_DATA;
=======

  // تحديث hero عند الفلترة حسب الخدمة (صفحة screenshots فقط)
  if (isFullPage && filterByService) {
    const SERVICE_LABELS = { marketing: 'Digital Marketing', 'social-design': 'Social Media Design', content: 'Copywriting', shopify: 'Shopify', seo: 'SEO', cro: 'CRO', automation: 'Automation', 'personal-branding': 'Personal Branding', saas: 'SaaS' };
    const label = SERVICE_LABELS[urlService] || urlService;
    const titleEl = document.querySelector('.screenshots-title');
    const descEl = document.querySelector('.screenshots-desc');
    if (titleEl) titleEl.textContent = `${label} — Work in action.`;
    if (descEl) {
      descEl.innerHTML = `<span class="desc-lead">${label} samples only.</span> <a href="screenshots.html" class="screenshots-view-all">View all results</a>`;
    }
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = `${label} Results Gallery | Dr. UMU SLAN`;
  }
}

/**
 * Work Samples Marquee — 5 columns (index/screenshots: by service; service pages: 5 columns of same service)
 * Services: marketing | social-design | content | shopify | seo | cro | automation | personal-branding | saas
 */
function initWorkSamplesMarquee() {
  const data = window.WORK_SAMPLES_DATA;
  // على صفحات الخدمات: استخدم القسم الذي فيه data-page-service (مثلاً shopify)
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
  const serviceSection = document.querySelector('.work-in-action-marquee[data-page-service]');
  const section = serviceSection || document.querySelector('.work-in-action-marquee');
  const columns = section ? section.querySelectorAll('.ws-column') : [];
  if (!data || !columns.length) return;

  const pageService = section?.getAttribute('data-page-service') || null;
<<<<<<< HEAD
  const isServicePage = !!pageService;
  const NUM_COLUMNS = columns.length;
=======
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f

  const withSrc = (item) => item.src;
  const getService = (item) => {
    if (item.service) return item.service;
    const ind = (item.industry || '').toLowerCase();
    if (ind.includes('meta ads') || ind.includes('reels')) return 'marketing';
    if (ind.includes('social media design')) return 'social-design';
    if (ind.includes('content') || ind.includes('copywriting')) return 'content';
    if (ind.includes('shopify')) return 'shopify';
    if (ind.includes('seo')) return 'seo';
    if (ind.includes('cro') || ind.includes('conversion')) return 'cro';
    if (ind.includes('automation') || ind.includes('workflow') || ind.includes('n8n') || ind.includes('ai agent')) return 'automation';
    if (ind.includes('personal brand') || ind.includes('branding')) return 'personal-branding';
    if (ind.includes('saas') || ind.includes('product')) return 'saas';
    return null;
  };

  const serviceKeys = ['marketing', 'social-design', 'content', 'shopify', 'seo', 'cro', 'automation', 'personal-branding', 'saas'];
  const byService = Object.fromEntries(serviceKeys.map((k) => [k, []]));
  data.filter(withSrc).forEach((item) => {
    const svc = getService(item);
    if (svc && byService[svc]) byService[svc].push(item);
  });

<<<<<<< HEAD
=======
  /* Marketing (index): curated mix — round-robin by sub-type, max 20 */
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
  const metaMessaging = (byService.marketing || []).filter((i) => (i.industry || '').includes('Messaging'));
  const metaPost = (byService.marketing || []).filter((i) => (i.industry || '').includes('Post engagement'));
  const metaProfile = (byService.marketing || []).filter((i) => (i.industry || '').includes('Profile'));
  const metaLink = (byService.marketing || []).filter((i) => (i.industry || '').includes('Link'));
  const reels = (byService.marketing || []).filter((i) => (i.industry || '').includes('Reels'));
  const pools = [metaMessaging, metaPost, metaProfile, metaLink, reels].filter((p) => p.length > 0);
  const marketingCurated = [];
  let pi = 0;
  while (marketingCurated.length < 20 && pools.length > 0) {
    const pool = pools[pi % pools.length];
    const idx = Math.floor(marketingCurated.length / pools.length) % pool.length;
    marketingCurated.push(pool[idx]);
    pi++;
  }

<<<<<<< HEAD
  const renderCards = (items) =>
    items
=======
  const allData = data.filter(withSrc);
  const fallback = allData.slice(0, 12);

  const getItemsForService = (serviceKey, isServicePage) => {
    if (isServicePage) {
      if (serviceKey === 'marketing') return byService.marketing || [];
      return byService[serviceKey] || [];
    }
    if (serviceKey === 'marketing') return marketingCurated;
    let items = byService[serviceKey] || [];
    if (items.length < 4) items = [...items, ...fallback.filter((i) => !items.includes(i))];
    return items.slice(0, 20);
  };

  const SERVICE_ORDER = ['marketing', 'social-design', 'content', 'shopify', 'seo'];
  const SERVICE_LABELS = { marketing: 'Marketing', 'social-design': 'Social Media Design', content: 'Content', shopify: 'Shopify', seo: 'SEO', cro: 'CRO', automation: 'Automation', 'personal-branding': 'Personal Branding', saas: 'SaaS' };
  const isServicePage = !!pageService;
  const NUM_COLUMNS = 5;

  if (isServicePage) {
    section?.classList.add('ws-five-col-same-service');
  }

  if (isServicePage) {
    const allItems = getItemsForService(pageService, true);
    if (!allItems.length) {
      columns.forEach((col) => col.classList.remove('ws-column-visible'));
      return;
    }
    const distributeToColumns = (items) => {
      const cols = Array(NUM_COLUMNS).fill(null).map(() => []);
      items.forEach((item, idx) => cols[idx % NUM_COLUMNS].push(item));
      return cols;
    };
    const columnItems = distributeToColumns(allItems);
    const label = SERVICE_LABELS[pageService] || pageService;

    columns.forEach((col, i) => {
      const track = col.querySelector('.ws-track');
      if (!track) return;
      col.classList.add('ws-column-visible');
      const labelEl = col.querySelector('.ws-column-label');
      if (labelEl) labelEl.textContent = i === 0 ? label : '';
      const items = columnItems[i] || [];
      const html = items.length
        ? items
            .map((item) => {
              const alt = (item.alt || item.industry || '').replace(/"/g, '&quot;');
              const industry = (item.industry || '').replace(/"/g, '&quot;');
              const achievement = (item.achievement || '').replace(/"/g, '&quot;');
              return `<button type="button" class="ws-card" data-lightbox-src="${item.src}" data-lightbox-alt="${alt}" aria-label="View ${alt}">
                <img src="${item.src}" alt="${alt}" loading="lazy">
                <span class="ws-card-overlay">
                  <span class="ws-card-industry">${industry}</span>
                  <span class="ws-card-achievement">${achievement}</span>
                  <span class="ws-card-action">View full size</span>
                </span>
              </button>`;
            })
            .join('')
        : '';
      track.innerHTML = html ? html + html : '';
    });
    return;
  }

  columns.forEach((col, i) => {
    const serviceKey = SERVICE_ORDER[i];
    const track = col.querySelector('.ws-track');
    if (!track) return;

    const items = getItemsForService(serviceKey, false);
    if (!items.length) {
      col.classList.remove('ws-column-visible');
      return;
    }
    col.classList.add('ws-column-visible');
    const html = items
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
      .map((item) => {
        const alt = (item.alt || item.industry || '').replace(/"/g, '&quot;');
        const industry = (item.industry || '').replace(/"/g, '&quot;');
        const achievement = (item.achievement || '').replace(/"/g, '&quot;');
        return `<button type="button" class="ws-card" data-lightbox-src="${item.src}" data-lightbox-alt="${alt}" aria-label="View ${alt}">
          <img src="${item.src}" alt="${alt}" loading="lazy">
          <span class="ws-card-overlay">
            <span class="ws-card-industry">${industry}</span>
            <span class="ws-card-achievement">${achievement}</span>
            <span class="ws-card-action">View full size</span>
          </span>
        </button>`;
      })
      .join('');
<<<<<<< HEAD

  const distributeToColumns = (items) => {
    const cols = Array(NUM_COLUMNS).fill(null).map(() => []);
    items.forEach((item, idx) => cols[idx % NUM_COLUMNS].push(item));
    return cols;
  };

  const interleavePools = (a, b, limit = 50) => {
    const out = [];
    const max = Math.max(a.length, b.length);
    for (let i = 0; i < max && out.length < limit; i++) {
      if (i < a.length) out.push(a[i]);
      if (i < b.length) out.push(b[i]);
    }
    return out;
  };

  if (isServicePage) {
    section.classList.add('ws-five-col-same-service');
    const items = pageService === 'marketing'
      ? marketingCurated
      : (byService[pageService] || []).slice(0, 50);
    if (!items.length) return;

    const columnItems = distributeToColumns(items);
    const label = pageService.charAt(0).toUpperCase() + pageService.slice(1).replace('-', ' ');

    columns.forEach((col, i) => {
      const track = col.querySelector('.ws-track');
      if (!track) return;
      const labelEl = col.querySelector('.ws-column-label');
      if (labelEl) labelEl.textContent = i === 0 ? label : '';
      const html = renderCards(columnItems[i] || []);
      track.innerHTML = html ? html + html : '';
    });
    return;
  }

  // Homepage: marketing + Shopify interleaved, spread across all 5 columns
  const marketingItems = marketingCurated.length
    ? marketingCurated
    : (byService.marketing || []).slice(0, 20);
  const shopifyItems = (byService.shopify || []).slice(0, 20);
  const mixed = interleavePools(marketingItems, shopifyItems, 50);

  if (!mixed.length) return;

  const columnItems = distributeToColumns(mixed);
  const HOME_LABELS = ['Marketing', 'Shopify', 'Marketing', 'Shopify', 'Marketing'];

  columns.forEach((col, i) => {
    const track = col.querySelector('.ws-track');
    if (!track) return;
    const items = columnItems[i] || [];
    if (!items.length) return;

    const labelEl = col.querySelector('.ws-column-label');
    if (labelEl) labelEl.textContent = HOME_LABELS[i] || 'Work';

    const html = renderCards(items);
    track.innerHTML = html ? html + html : '';
=======
    track.innerHTML = html + html;
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
  });
}

/**
 * Marquee - Duplicate content for seamless loop
 */
function initMarquee() {
  document.querySelectorAll('.marquee-track').forEach((track) => {
    const content = track.innerHTML;
    track.innerHTML = content + content;
  });
}

/**
 * Case Studies - Expand/collapse detail view
 */
function initCaseStudies() {
  document.querySelectorAll('.case-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.case-study-card');
      const isExpanded = card.classList.contains('is-expanded');

      if (isExpanded) {
        card.classList.remove('is-expanded');
        btn.textContent = 'View full case study';
      } else {
        card.classList.add('is-expanded');
        btn.textContent = 'Collapse';
      }
    });
  });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const header = document.querySelector('.header');

  if (!btn || !header) return;

  btn.addEventListener('click', () => {
    header.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', header.classList.contains('nav-open'));
  });
}

/**
 * Scroll reveal - elements animate in when entering viewport
 */
function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const reveals = document.querySelectorAll('.reveal');
  const threshold = 0.12;
  const rootMargin = '0px 0px -60px 0px';

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold, rootMargin }
  );

  reveals.forEach((el) => observer.observe(el));
}

/**
 * Header - add shadow when scrolled
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // initial check
}

/**
 * Sticky CTA - show on service pages when user scrolls past hero
 */
function initStickyCTA() {
  const stickyCta = document.getElementById('sticky-cta');
  if (!stickyCta) return;

  const threshold = 400;

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      stickyCta.classList.add('is-visible');
      stickyCta.setAttribute('aria-hidden', 'false');
    } else {
      stickyCta.classList.remove('is-visible');
      stickyCta.setAttribute('aria-hidden', 'true');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // initial check
}

/**
 * Screenshot Lightbox - click results gallery items to view full size
<<<<<<< HEAD
=======
 * Supports prev/next navigation via keyboard (← →) and on-screen arrows
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
 */
function initScreenshotLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const img = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
<<<<<<< HEAD

  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt || '';
    caption.textContent = alt || '';
=======
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let items = [];
  let currentIndex = -1;

  function getLightboxItems() {
    const result = [];
    document.querySelectorAll('.screenshot-cell.has-image[data-src]').forEach((cell) => {
      const src = cell.getAttribute('data-src');
      if (src) result.push({ el: cell, src, alt: (cell.querySelector('img')?.getAttribute('alt')) || '' });
    });
    document.querySelectorAll('[data-lightbox-src]').forEach((el) => {
      if (el.closest('.screenshot-cell')) return;
      const src = el.getAttribute('data-lightbox-src');
      if (src) result.push({ el, src, alt: el.getAttribute('data-lightbox-alt') || '' });
    });
    result.sort((a, b) => {
      const pos = a.el.compareDocumentPosition(b.el);
      if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
      if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
      return 0;
    });
    return result.map(({ src, alt }) => ({ src, alt }));
  }

  function showItem(index) {
    if (index < 0 || index >= items.length) return;
    currentIndex = index;
    const { src, alt } = items[index];
    img.src = src;
    img.alt = alt || '';
    caption.textContent = alt || '';
    if (prevBtn) prevBtn.style.visibility = items.length > 1 ? 'visible' : 'hidden';
    if (nextBtn) nextBtn.style.visibility = items.length > 1 ? 'visible' : 'hidden';
  }

  function goPrev() {
    if (items.length <= 1) return;
    const next = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
    showItem(next);
  }

  function goNext() {
    if (items.length <= 1) return;
    const next = currentIndex >= items.length - 1 ? 0 : currentIndex + 1;
    showItem(next);
  }

  function openLightbox(src, alt) {
    items = getLightboxItems();
    if (items.length === 0) return;
    const idx = items.findIndex((i) => i.src === src);
    currentIndex = idx >= 0 ? idx : 0;
    showItem(currentIndex);
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.screenshot-cell.has-image[data-src]').forEach((cell) => {
    const trigger = cell.querySelector('.screenshot-trigger');
    const src = cell.getAttribute('data-src');
    const imgEl = cell.querySelector('img');
    const alt = imgEl ? imgEl.getAttribute('alt') : '';

    if (trigger && src) {
      trigger.addEventListener('click', () => openLightbox(src, alt));
    }
  });

<<<<<<< HEAD
=======
  document.querySelectorAll('.service-sample[data-lightbox-src], .gfx-item[data-lightbox-src]').forEach((btn) => {
    const src = btn.getAttribute('data-lightbox-src');
    const alt = btn.getAttribute('data-lightbox-alt') || '';
    if (src) btn.addEventListener('click', () => openLightbox(src, alt));
  });

  /* Event delegation for ws-cards (dynamically created by marquee) */
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.ws-card[data-lightbox-src]');
    if (card) {
      e.preventDefault();
<<<<<<< HEAD
=======
      e.stopPropagation();
>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f
      const src = card.getAttribute('data-lightbox-src');
      const alt = card.getAttribute('data-lightbox-alt') || '';
      if (src) openLightbox(src, alt);
    }
  }, true);

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
<<<<<<< HEAD
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
}
=======
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); goPrev(); });
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); goNext(); });
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') goPrev();
    else if (e.key === 'ArrowRight') goNext();
  });
}

>>>>>>> c0b4c9b73bbb91dce14995610feb999aab3cca4f

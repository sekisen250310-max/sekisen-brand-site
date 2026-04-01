(function () {
  var content = window.SEKISEN_CONTENT;
  var app = document.getElementById("app");

  if (!content || !app) {
    return;
  }

  var initialSlide = content.hero.slides[0];
  var totalSlides = content.hero.slides.length;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function renderNavigation(items) {
    return items
      .map(function (item) {
        return (
          '<a href="' +
          escapeHtml(item.href) +
          '">' +
          escapeHtml(item.label) +
          "</a>"
        );
      })
      .join("");
  }

  function renderHeroSlides(slides) {
    return slides
      .map(function (slide, index) {
        return (
          '<article class="hero-slide' +
          (index === 0 ? " is-active" : "") +
          '" aria-hidden="' +
          (index === 0 ? "false" : "true") +
          '">' +
          '<img src="' +
          escapeHtml(slide.image) +
          '" alt="' +
          escapeHtml(slide.alt) +
          '" ' +
          (index === 0 ? 'fetchpriority="high"' : 'loading="lazy"') +
          " />" +
          "</article>"
        );
      })
      .join("");
  }

  function renderHeroDots(slides) {
    return slides
      .map(function (_slide, index) {
        return (
          '<button class="hero-dot' +
          (index === 0 ? " is-active" : "") +
          '" type="button" data-slide="' +
          index +
          '" aria-label="Show slide ' +
          (index + 1) +
          '"></button>'
        );
      })
      .join("");
  }

  function renderManifestoStats(stats) {
    return stats
      .map(function (item) {
        return (
          '<article class="stat-card reveal-up">' +
          '<p class="stat-card__label">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="stat-card__value">' +
          escapeHtml(item.value) +
          "</h3>" +
          '<p class="stat-card__text">' +
          escapeHtml(item.text) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderFloatingMetrics(metrics) {
    return metrics
      .map(function (item) {
        return (
          '<div class="hero-metric">' +
          "<span>" +
          escapeHtml(item.label) +
          "</span>" +
          "<strong>" +
          escapeHtml(item.value) +
          "</strong>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderAppealPoints(points) {
    return points
      .map(function (item) {
        return (
          '<article class="appeal-point">' +
          '<h3 class="appeal-point__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="appeal-point__text">' +
          escapeHtml(item.text) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderCraftCards(cards) {
    return cards
      .map(function (card) {
        return (
          '<article class="highlight-card reveal-up">' +
          '<p class="highlight-card__number">' +
          escapeHtml(card.number) +
          "</p>" +
          '<h3 class="highlight-card__title">' +
          escapeHtml(card.title) +
          "</h3>" +
          '<p class="highlight-card__description">' +
          escapeHtml(card.description) +
          "</p>" +
          '<p class="highlight-card__detail">' +
          escapeHtml(card.detail) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderGalleryItems(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="gallery-card reveal-up' +
          (index === 0 ? " gallery-card--large" : "") +
          '">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          '<div class="gallery-card__overlay">' +
          '<p class="gallery-card__caption">' +
          escapeHtml(item.caption) +
          "</p>" +
          '<p class="gallery-card__detail">' +
          escapeHtml(item.detail) +
          "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderActions(actions) {
    return actions
      .map(function (action) {
        return (
          '<a class="button ' +
          escapeHtml(action.style) +
          '" href="' +
          escapeHtml(action.href) +
          '">' +
          escapeHtml(action.label) +
          "</a>"
        );
      })
      .join("");
  }

  app.innerHTML =
    '<div class="page-shell">' +
    '<header class="site-header" data-header>' +
    '<a class="brand-mark" href="#top" aria-label="SEKISEN top">' +
    '<span class="brand-mark__ja">' +
    escapeHtml(content.brand.nameJa) +
    "</span>" +
    '<span class="brand-mark__en">' +
    escapeHtml(content.brand.name) +
    "</span>" +
    "</a>" +
    '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation">' +
    "<span></span><span></span>" +
    "</button>" +
    '<nav class="site-nav" id="site-nav">' +
    renderNavigation(content.navigation) +
    "</nav>" +
    "</header>" +
    "<main>" +
    '<section class="hero" id="top">' +
    '<div class="hero__slides">' +
    renderHeroSlides(content.hero.slides) +
    "</div>" +
    '<div class="hero__veil"></div>' +
    '<div class="hero__grid"></div>' +
    '<div class="hero__orb hero__orb--one"></div>' +
    '<div class="hero__orb hero__orb--two"></div>' +
    '<div class="hero__frame"></div>' +
    '<div class="container hero__layout">' +
    '<div class="hero__content reveal-up" data-hero-copy>' +
    '<p class="eyebrow" data-hero-eyebrow>' +
    escapeHtml(initialSlide.eyebrow) +
    "</p>" +
    '<p class="hero__tagline">' +
    escapeHtml(content.brand.tagline) +
    "</p>" +
    '<h1 class="hero__title">' +
    '<span data-hero-title-top>' +
    escapeHtml(initialSlide.titleTop) +
    "</span>" +
    '<span data-hero-title-bottom>' +
    escapeHtml(initialSlide.titleBottom) +
    "</span>" +
    "</h1>" +
    '<p class="hero__description" data-hero-description>' +
    escapeHtml(initialSlide.description) +
    "</p>" +
    '<div class="hero__actions">' +
    '<a class="button button--primary" data-hero-primary href="' +
    escapeHtml(initialSlide.primaryHref) +
    '">' +
    escapeHtml(initialSlide.primaryLabel) +
    "</a>" +
    '<a class="button button--secondary" data-hero-secondary href="' +
    escapeHtml(initialSlide.secondaryHref) +
    '">' +
    escapeHtml(initialSlide.secondaryLabel) +
    "</a>" +
    "</div>" +
    "</div>" +
    '<aside class="hero__floating reveal-up reveal-up--delay">' +
    '<div class="hero__floating-head">' +
    '<p class="hero__floating-label">' +
    escapeHtml(content.hero.floatingCard.label) +
    "</p>" +
    '<span class="hero__floating-year">2026</span>' +
    "</div>" +
    '<h2 class="hero__floating-title">' +
    escapeHtml(content.hero.floatingCard.title) +
    "</h2>" +
    '<p class="hero__floating-description">' +
    escapeHtml(content.hero.floatingCard.description) +
    "</p>" +
    '<div class="hero__metrics">' +
    renderFloatingMetrics(content.hero.metrics) +
    "</div>" +
    "</aside>" +
    "</div>" +
    '<div class="hero__controls container">' +
    '<div class="hero__counter">' +
    '<span data-hero-current>' +
    pad(1) +
    "</span>" +
    '<span class="hero__counter-line"></span>' +
    "<span>" +
    pad(totalSlides) +
    "</span>" +
    "</div>" +
    '<div class="hero__dots">' +
    renderHeroDots(content.hero.slides) +
    "</div>" +
    "</div>" +
    '<a class="hero__scroll" href="#concept"><span>Scroll</span></a>' +
    "</section>" +
    '<section class="section manifesto" id="concept">' +
    '<div class="container manifesto__intro">' +
    '<div class="manifesto__heading reveal-up">' +
    '<p class="eyebrow">' +
    escapeHtml(content.manifesto.eyebrow) +
    "</p>" +
    '<h2 class="section-title">' +
    escapeHtml(content.manifesto.title) +
    "</h2>" +
    "</div>" +
    '<div class="manifesto__copy reveal-up reveal-up--delay">' +
    '<p class="section-text">' +
    escapeHtml(content.manifesto.description) +
    "</p>" +
    "</div>" +
    "</div>" +
    '<div class="container manifesto__stats">' +
    renderManifestoStats(content.manifesto.stats) +
    "</div>" +
    "</section>" +
    '<section class="section editorial" id="taste">' +
    '<div class="container editorial__grid">' +
    '<figure class="editorial__media reveal-up">' +
    '<img src="' +
    escapeHtml(content.appeal.image) +
    '" alt="' +
    escapeHtml(content.appeal.alt) +
    '" loading="lazy" />' +
    "</figure>" +
    '<div class="editorial__body reveal-up reveal-up--delay">' +
    '<p class="eyebrow">' +
    escapeHtml(content.appeal.eyebrow) +
    "</p>" +
    '<h2 class="section-title">' +
    escapeHtml(content.appeal.title) +
    "</h2>" +
    '<p class="editorial__lead">' +
    escapeHtml(content.appeal.lead) +
    "</p>" +
    '<p class="section-text">' +
    escapeHtml(content.appeal.description) +
    "</p>" +
    '<div class="appeal-points">' +
    renderAppealPoints(content.appeal.points) +
    "</div>" +
    "</div>" +
    "</div>" +
    "</section>" +
    '<section class="section highlights" id="craft">' +
    '<div class="container">' +
    '<div class="section-heading reveal-up">' +
    '<p class="eyebrow">' +
    escapeHtml(content.craft.eyebrow) +
    "</p>" +
    '<h2 class="section-title">' +
    escapeHtml(content.craft.title) +
    "</h2>" +
    "</div>" +
    '<div class="highlights__grid">' +
    renderCraftCards(content.craft.cards) +
    "</div>" +
    "</div>" +
    "</section>" +
    '<section class="section gallery" id="gallery">' +
    '<div class="container">' +
    '<div class="section-heading reveal-up">' +
    '<p class="eyebrow">' +
    escapeHtml(content.gallery.eyebrow) +
    "</p>" +
    '<h2 class="section-title">' +
    escapeHtml(content.gallery.title) +
    "</h2>" +
    '<p class="section-text">' +
    escapeHtml(content.gallery.description) +
    "</p>" +
    "</div>" +
    '<div class="gallery__grid">' +
    renderGalleryItems(content.gallery.items) +
    "</div>" +
    "</div>" +
    "</section>" +
    '<section class="section cta" id="contact">' +
    '<div class="container cta__inner reveal-up">' +
    '<p class="eyebrow">' +
    escapeHtml(content.contact.eyebrow) +
    "</p>" +
    '<h2 class="section-title">' +
    escapeHtml(content.contact.title) +
    "</h2>" +
    '<p class="section-text">' +
    escapeHtml(content.contact.description) +
    "</p>" +
    '<div class="hero__actions cta__actions">' +
    renderActions(content.contact.actions) +
    "</div>" +
    "</div>" +
    "</section>" +
    "</main>" +
    '<footer class="site-footer">' +
    '<div class="container site-footer__inner">' +
    '<div class="site-footer__brand">' +
    '<span class="brand-mark__ja">' +
    escapeHtml(content.brand.nameJa) +
    "</span>" +
    '<span class="brand-mark__en">' +
    escapeHtml(content.brand.name) +
    "</span>" +
    "</div>" +
    '<p class="site-footer__note">' +
    escapeHtml(content.footer.note) +
    "</p>" +
    '<p class="site-footer__copyright">' +
    escapeHtml(content.footer.copyright) +
    "</p>" +
    "</div>" +
    "</footer>" +
    "</div>";

  var header = app.querySelector("[data-header]");
  var navToggle = app.querySelector(".nav-toggle");
  var nav = app.querySelector(".site-nav");
  var revealItems = app.querySelectorAll(".reveal-up");
  var hero = app.querySelector(".hero");
  var heroCopy = app.querySelector("[data-hero-copy]");
  var heroEyebrow = app.querySelector("[data-hero-eyebrow]");
  var heroTitleTop = app.querySelector("[data-hero-title-top]");
  var heroTitleBottom = app.querySelector("[data-hero-title-bottom]");
  var heroDescription = app.querySelector("[data-hero-description]");
  var heroPrimary = app.querySelector("[data-hero-primary]");
  var heroSecondary = app.querySelector("[data-hero-secondary]");
  var currentCounter = app.querySelector("[data-hero-current]");
  var slideElements = Array.prototype.slice.call(
    app.querySelectorAll(".hero-slide")
  );
  var dotButtons = Array.prototype.slice.call(app.querySelectorAll(".hero-dot"));
  var currentIndex = 0;
  var autoplayId = null;
  var copyTimer = null;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function closeNav() {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  function handleHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  function revealHero() {
    Array.prototype.forEach.call(revealItems, function (item, index) {
      if (item.closest(".hero")) {
        window.setTimeout(function () {
          item.classList.add("is-visible");
        }, 140 + index * 140);
      }
    });
  }

  function observeSections() {
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(revealItems, function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18
      }
    );

    Array.prototype.forEach.call(revealItems, function (item) {
      if (!item.closest(".hero")) {
        observer.observe(item);
      }
    });
  }

  function updateHeroCopy(slide, immediate) {
    window.clearTimeout(copyTimer);

    function applyCopy() {
      heroEyebrow.textContent = slide.eyebrow;
      heroTitleTop.textContent = slide.titleTop;
      heroTitleBottom.textContent = slide.titleBottom;
      heroDescription.textContent = slide.description;
      heroPrimary.textContent = slide.primaryLabel;
      heroPrimary.href = slide.primaryHref;
      heroSecondary.textContent = slide.secondaryLabel;
      heroSecondary.href = slide.secondaryHref;
      heroCopy.classList.remove("is-changing");
    }

    if (immediate) {
      applyCopy();
      return;
    }

    heroCopy.classList.add("is-changing");
    copyTimer = window.setTimeout(applyCopy, 180);
  }

  function setSlide(nextIndex, immediate) {
    currentIndex = nextIndex;

    slideElements.forEach(function (slideElement, index) {
      var isActive = index === nextIndex;
      slideElement.classList.toggle("is-active", isActive);
      slideElement.setAttribute("aria-hidden", String(!isActive));
    });

    dotButtons.forEach(function (button, index) {
      button.classList.toggle("is-active", index === nextIndex);
    });

    currentCounter.textContent = pad(nextIndex + 1);
    updateHeroCopy(content.hero.slides[nextIndex], immediate);
  }

  function stopAutoplay() {
    window.clearTimeout(autoplayId);
  }

  function startAutoplay() {
    if (reducedMotion || totalSlides < 2) {
      return;
    }

    stopAutoplay();
    autoplayId = window.setTimeout(function () {
      setSlide((currentIndex + 1) % totalSlides, false);
      startAutoplay();
    }, content.hero.interval);
  }

  navToggle.addEventListener("click", function () {
    var willOpen = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", willOpen);
    navToggle.setAttribute("aria-expanded", String(willOpen));
    document.body.classList.toggle("nav-open", willOpen);
  });

  Array.prototype.forEach.call(nav.querySelectorAll("a"), function (link) {
    link.addEventListener("click", closeNav);
  });

  dotButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var nextIndex = Number(button.getAttribute("data-slide"));
      setSlide(nextIndex, false);
      startAutoplay();
    });
  });

  hero.addEventListener("mouseenter", stopAutoplay);
  hero.addEventListener("mouseleave", startAutoplay);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  window.addEventListener("scroll", handleHeader, { passive: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 960) {
      closeNav();
    }
  });

  handleHeader();
  revealHero();
  observeSections();
  setSlide(0, true);
  startAutoplay();
})();

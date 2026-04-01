(function () {
  var content = window.SEKISEN_CONTENT;
  var app = document.getElementById("app");

  if (!content || !app) {
    return;
  }

  var site = content.site;
  var pageKey = document.body.dataset.page || "home";
  var pageData = pageKey === "home" ? content.home : content.pages[pageKey];

  if (!pageData) {
    pageKey = "home";
    pageData = content.home;
  }

  document.title = site.titles[pageKey] || site.titles.home;
  document.body.classList.add("page-" + pageKey);

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function toMarkup(text) {
    return escapeHtml(text).replace(/\n/g, "<br />");
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function renderBrandMark() {
    return (
      '<a class="brand-mark" href="./index.html" aria-label="SEKISEN top">' +
      '<span class="brand-mark__symbol">' +
      '<img src="' +
      escapeHtml(site.brand.logo) +
      '" alt="SEKISEN logo mark" />' +
      "</span>" +
      '<span class="brand-mark__text">' +
      '<span class="brand-mark__ja">' +
      escapeHtml(site.brand.nameJa) +
      "</span>" +
      '<span class="brand-mark__en">' +
      escapeHtml(site.brand.name) +
      "</span>" +
      "</span>" +
      "</a>"
    );
  }

  function renderNavigation(items) {
    return items
      .map(function (item) {
        var classes = "site-nav__link";

        if (item.id === pageKey) {
          classes += " is-current";
        }

        return (
          '<a class="' +
          classes +
          '" href="' +
          escapeHtml(item.href) +
          '">' +
          escapeHtml(item.label) +
          "</a>"
        );
      })
      .join("");
  }

  function renderUtilities(items) {
    return items
      .map(function (item) {
        return (
          '<a class="' +
          escapeHtml(item.style) +
          '" href="' +
          escapeHtml(item.href) +
          '">' +
          escapeHtml(item.label) +
          "</a>"
        );
      })
      .join("");
  }

  function renderFooterLinks(items) {
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

  function renderPromiseItems(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="promise-item reveal-up' +
          (index > 0 ? " reveal-up--delay" : "") +
          '">' +
          '<p class="promise-item__label">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="promise-item__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="promise-item__text">' +
          escapeHtml(item.text) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderProcessSteps(items) {
    return items
      .map(function (item, index) {
        var reverseClass = index % 2 === 1 ? " story-row--reverse" : "";
        var imageReveal = index % 2 === 1 ? " reveal-side--right" : " reveal-side--left";
        var copyReveal = index % 2 === 1 ? " reveal-side--left" : " reveal-side--right";

        return (
          '<article class="story-row' +
          reverseClass +
          '">' +
          '<figure class="story-row__media reveal-side ' +
          imageReveal +
          '">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          "</figure>" +
          '<div class="story-row__copy reveal-side ' +
          copyReveal +
          '">' +
          '<p class="section-kicker">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="story-row__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="story-row__text">' +
          escapeHtml(item.text) +
          "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderValueItems(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="value-item reveal-up' +
          (index > 1 ? " reveal-up--delay" : "") +
          '">' +
          '<p class="value-item__label">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="value-item__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="value-item__text">' +
          escapeHtml(item.text) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderGalleryItems(items) {
    return items
      .map(function (item) {
        return (
          '<article class="gallery-item gallery-item--' +
          escapeHtml(item.size) +
          ' reveal-scale">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          '<div class="gallery-item__meta">' +
          '<p class="gallery-item__caption">' +
          escapeHtml(item.caption) +
          "</p>" +
          '<p class="gallery-item__detail">' +
          escapeHtml(item.detail) +
          "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderCtaLinks(items) {
    return items
      .map(function (item) {
        return (
          '<a class="cta-link reveal-up" href="' +
          escapeHtml(item.href) +
          '">' +
          '<strong class="cta-link__title">' +
          escapeHtml(item.label) +
          "</strong>" +
          '<span class="cta-link__arrow">Open</span>' +
          "</a>"
        );
      })
      .join("");
  }

  function renderNewsArticles(items) {
    return items
      .map(function (item) {
        return (
          '<article class="news-article reveal-up">' +
          '<div class="news-article__meta">' +
          "<time>" +
          escapeHtml(item.date) +
          "</time>" +
          "<span>" +
          escapeHtml(item.category) +
          "</span>" +
          "</div>" +
          '<h3 class="news-article__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="news-article__body">' +
          escapeHtml(item.body) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderDetailRows(items) {
    return items
      .map(function (item, index) {
        var reverseClass = index % 2 === 1 ? " detail-row--reverse" : "";
        var imageReveal = index % 2 === 1 ? " reveal-side--right" : " reveal-side--left";
        var copyReveal = index % 2 === 1 ? " reveal-side--left" : " reveal-side--right";

        return (
          '<article class="detail-row' +
          reverseClass +
          '">' +
          '<figure class="detail-row__media reveal-side ' +
          imageReveal +
          '">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          "</figure>" +
          '<div class="detail-row__copy reveal-side ' +
          copyReveal +
          '">' +
          '<p class="section-kicker">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="detail-row__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="detail-row__text">' +
          escapeHtml(item.text) +
          "</p>" +
          '<p class="story-meta">' +
          escapeHtml(item.action) +
          "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderContactPanels(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="contact-panel reveal-up' +
          (index > 0 ? " reveal-up--delay" : "") +
          '">' +
          '<p class="section-kicker">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="contact-panel__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="contact-panel__text">' +
          escapeHtml(item.text) +
          "</p>" +
          '<a class="text-link" href="' +
          escapeHtml(item.href) +
          '">' +
          escapeHtml(item.action) +
          "</a>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderHome() {
    var home = content.home;
    var initialSlide = home.hero.slides[0];

    return (
      '<main class="site-main">' +
      '<section class="hero">' +
      '<div class="hero__slides">' +
      renderHeroSlides(home.hero.slides) +
      "</div>" +
      '<div class="hero__veil"></div>' +
      '<div class="hero__grid"></div>' +
      '<div class="container hero__layout">' +
      '<div class="hero__content reveal-up" data-hero-copy>' +
      '<p class="hero__eyebrow" data-hero-eyebrow>' +
      escapeHtml(initialSlide.eyebrow) +
      "</p>" +
      '<h1 class="hero__title" data-hero-title>' +
      toMarkup(initialSlide.title) +
      "</h1>" +
      '<p class="hero__description" data-hero-description>' +
      escapeHtml(initialSlide.text) +
      "</p>" +
      '<div class="hero__actions">' +
      '<a class="button button--dark" data-hero-action href="' +
      escapeHtml(initialSlide.actionHref) +
      '">' +
      escapeHtml(initialSlide.actionLabel) +
      "</a>" +
      "</div>" +
      "</div>" +
      '<div class="hero__controls reveal-up reveal-up--delay">' +
      '<div class="hero__counter">' +
      '<span data-hero-current>' +
      pad(1) +
      "</span>" +
      '<span class="hero__counter-line"></span>' +
      "<span>" +
      pad(home.hero.slides.length) +
      "</span>" +
      "</div>" +
      '<div class="hero__dots">' +
      renderHeroDots(home.hero.slides) +
      "</div>" +
      '<a class="hero__scroll" href="#intro">Scroll</a>' +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section intro-section" id="intro">' +
      '<div class="container intro-section__panel">' +
      '<div class="intro-section__copy">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.intro.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.intro.title) +
      "</h2>" +
      '<p class="section-lead reveal-up reveal-up--delay-2">' +
      escapeHtml(home.intro.lead) +
      "</p>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.intro.text) +
      "</p>" +
      "</div>" +
      '<figure class="intro-section__media reveal-scale reveal-up--delay">' +
      '<img src="' +
      escapeHtml(home.intro.image) +
      '" alt="' +
      escapeHtml(home.intro.alt) +
      '" loading="lazy" />' +
      '<figcaption class="intro-section__note">' +
      '<p class="intro-section__note-label">' +
      escapeHtml(home.intro.noteLabel) +
      "</p>" +
      '<h3 class="intro-section__note-title">' +
      escapeHtml(home.intro.noteTitle) +
      "</h3>" +
      '<p class="intro-section__note-text">' +
      escapeHtml(home.intro.noteText) +
      "</p>" +
      "</figcaption>" +
      "</figure>" +
      "</div>" +
      "</section>" +
      '<section class="section promise-section" id="promise">' +
      '<div class="container">' +
      '<div class="section-head section-head--compact">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.promise.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.promise.title) +
      "</h2>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.promise.text) +
      "</p>" +
      "</div>" +
      '<div class="promise-section__grid">' +
      renderPromiseItems(home.promise.items) +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section process-section" id="process">' +
      '<div class="container">' +
      '<div class="section-head">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.process.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.process.title) +
      "</h2>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.process.text) +
      "</p>" +
      "</div>" +
      '<div class="process-section__stack">' +
      renderProcessSteps(home.process.steps) +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section value-section" id="value">' +
      '<div class="container value-section__layout">' +
      '<figure class="value-section__media reveal-scale">' +
      '<img src="' +
      escapeHtml(home.value.image) +
      '" alt="' +
      escapeHtml(home.value.alt) +
      '" loading="lazy" />' +
      "</figure>" +
      '<div class="value-section__copy">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.value.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.value.title) +
      "</h2>" +
      '<p class="section-lead reveal-up reveal-up--delay-2">' +
      escapeHtml(home.value.lead) +
      "</p>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.value.text) +
      "</p>" +
      '<div class="value-section__grid">' +
      renderValueItems(home.value.items) +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section gallery-section" id="gallery">' +
      '<div class="container">' +
      '<div class="section-head section-head--compact">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.gallery.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.gallery.title) +
      "</h2>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.gallery.text) +
      "</p>" +
      "</div>" +
      '<div class="gallery-section__grid">' +
      renderGalleryItems(home.gallery.items) +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section cta-section" id="cta">' +
      '<div class="container">' +
      '<div class="section-head section-head--compact">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.cta.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.cta.title) +
      "</h2>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.cta.text) +
      "</p>" +
      "</div>" +
      '<div class="cta-section__grid">' +
      renderCtaLinks(home.cta.items) +
      "</div>" +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  function renderSubhero(page) {
    return (
      '<section class="subhero">' +
      '<div class="container subhero__shell">' +
      '<div class="subhero__copy reveal-up">' +
      '<p class="section-kicker">' +
      escapeHtml(page.eyebrow) +
      "</p>" +
      '<h1 class="subhero__title">' +
      escapeHtml(page.title) +
      "</h1>" +
      '<p class="subhero__lead">' +
      escapeHtml(page.lead) +
      "</p>" +
      "</div>" +
      '<div class="subhero__side reveal-side reveal-side--right">' +
      '<p class="subhero__side-label">SEKISEN</p>' +
      '<p class="subhero__side-text">' +
      escapeHtml(site.brand.description) +
      "</p>" +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function renderDetailPage(page) {
    return (
      '<main class="site-main">' +
      renderSubhero(page) +
      '<section class="section detail-section">' +
      '<div class="container detail-section__stack">' +
      renderDetailRows(page.sections) +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  function renderNewsPage(page) {
    return (
      '<main class="site-main">' +
      renderSubhero(page) +
      '<section class="section news-page">' +
      '<div class="container news-page__stack">' +
      renderNewsArticles(page.items) +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  function renderContactPage(page) {
    return (
      '<main class="site-main">' +
      renderSubhero(page) +
      '<section class="section contact-page">' +
      '<div class="container contact-page__grid">' +
      renderContactPanels(page.panels) +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  function renderPage() {
    if (pageKey === "home") {
      return renderHome();
    }

    if (pageKey === "news") {
      return renderNewsPage(pageData);
    }

    if (pageKey === "contact") {
      return renderContactPage(pageData);
    }

    return renderDetailPage(pageData);
  }

  app.innerHTML =
    '<div class="page-shell">' +
    '<header class="site-header" data-header>' +
    '<div class="site-header__inner">' +
    renderBrandMark() +
    '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation">' +
    "<span></span><span></span>" +
    "</button>" +
    '<nav class="site-nav" id="site-nav">' +
    renderNavigation(site.navigation) +
    "</nav>" +
    '<div class="site-header__utilities">' +
    renderUtilities(site.utilities) +
    "</div>" +
    "</div>" +
    "</header>" +
    renderPage() +
    '<footer class="site-footer">' +
    '<div class="container site-footer__inner">' +
    '<div class="site-footer__brand">' +
    renderBrandMark() +
    '<p class="site-footer__note">' +
    escapeHtml(site.footerNote) +
    "</p>" +
    "</div>" +
    '<div class="site-footer__meta">' +
    '<nav class="site-footer__nav">' +
    renderFooterLinks(site.footerLinks) +
    "</nav>" +
    '<p class="site-footer__copyright">' +
    escapeHtml(site.copyright) +
    "</p>" +
    "</div>" +
    "</div>" +
    "</footer>" +
    "</div>";

  var header = app.querySelector("[data-header]");
  var nav = app.querySelector(".site-nav");
  var navToggle = app.querySelector(".nav-toggle");
  var revealItems = Array.prototype.slice.call(
    app.querySelectorAll(".reveal-up, .reveal-side, .reveal-scale")
  );
  var hero = app.querySelector(".hero");
  var autoplayId = null;
  var copyTimer = null;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function closeNav() {
    if (!nav || !navToggle) {
      return;
    }

    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  function handleHeader() {
    if (!header) {
      return;
    }

    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  function revealImmediate() {
    revealItems.forEach(function (item, index) {
      if (item.closest(".hero") || item.closest(".subhero") || item.closest(".intro-section")) {
        window.setTimeout(function () {
          item.classList.add("is-visible");
        }, 80 + index * 70);
      }
    });
  }

  function observeSections() {
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach(function (item) {
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
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealItems.forEach(function (item) {
      if (!item.closest(".hero") && !item.closest(".subhero") && !item.closest(".intro-section")) {
        observer.observe(item);
      }
    });
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var willOpen = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", willOpen);
      navToggle.setAttribute("aria-expanded", String(willOpen));
      document.body.classList.toggle("nav-open", willOpen);
    });
  }

  Array.prototype.forEach.call(app.querySelectorAll(".site-nav a"), function (link) {
    link.addEventListener("click", closeNav);
  });

  if (hero) {
    var heroCopy = app.querySelector("[data-hero-copy]");
    var heroEyebrow = app.querySelector("[data-hero-eyebrow]");
    var heroTitle = app.querySelector("[data-hero-title]");
    var heroDescription = app.querySelector("[data-hero-description]");
    var heroAction = app.querySelector("[data-hero-action]");
    var currentCounter = app.querySelector("[data-hero-current]");
    var slideElements = Array.prototype.slice.call(app.querySelectorAll(".hero-slide"));
    var dotButtons = Array.prototype.slice.call(app.querySelectorAll(".hero-dot"));
    var slides = content.home.hero.slides;
    var currentIndex = 0;

    function updateHeroCopy(slide, immediate) {
      window.clearTimeout(copyTimer);

      function applyCopy() {
        heroEyebrow.textContent = slide.eyebrow;
        heroTitle.innerHTML = toMarkup(slide.title);
        heroDescription.textContent = slide.text;
        heroAction.textContent = slide.actionLabel;
        heroAction.href = slide.actionHref;
        heroCopy.classList.remove("is-changing");
      }

      if (immediate) {
        applyCopy();
        return;
      }

      heroCopy.classList.add("is-changing");
      copyTimer = window.setTimeout(applyCopy, 300);
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
      updateHeroCopy(slides[nextIndex], immediate);
    }

    function stopAutoplay() {
      window.clearTimeout(autoplayId);
    }

    function startAutoplay() {
      if (reducedMotion || slides.length < 2) {
        return;
      }

      stopAutoplay();
      autoplayId = window.setTimeout(function () {
        setSlide((currentIndex + 1) % slides.length, false);
        startAutoplay();
      }, content.home.hero.interval);
    }

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

    setSlide(0, true);
    startAutoplay();
  }

  window.addEventListener("scroll", handleHeader, { passive: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      closeNav();
    }
  });

  handleHeader();
  revealImmediate();
  observeSections();
})();

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
      .replace(/\"/g, "&quot;")
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

  function renderIntroVisuals(items) {
    return items
      .map(function (item, index) {
        return (
          '<figure class="intro-visual intro-visual--' +
          (index + 1) +
          ' reveal-mask reveal-mask--sweep intro-visual--delay-' +
          (index + 1) +
          '">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          "</figure>"
        );
      })
      .join("");
  }

  function renderBrandRows(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="brand-row' +
          (index % 2 === 1 ? " brand-row--reverse" : "") +
          '">' +
          '<figure class="brand-row__media reveal-mask ' +
          (index % 2 === 1 ? "reveal-mask--left" : "reveal-mask--right") +
          '">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          "</figure>" +
          '<div class="brand-row__copy reveal-up reveal-up--delay">' +
          '<p class="section-kicker">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="brand-row__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="brand-row__text">' +
          escapeHtml(item.text) +
          "</p>" +
          '<a class="text-link" href="' +
          escapeHtml(item.href) +
          '">' +
          escapeHtml(item.action) +
          "</a>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderNewsItems(items) {
    return items
      .map(function (item) {
        return (
          '<li class="news-list__item reveal-up">' +
          '<a class="news-list__link" href="' +
          escapeHtml(item.href) +
          '">' +
          '<span class="news-list__meta">' +
          "<time>" +
          escapeHtml(item.date) +
          "</time>" +
          "<span>" +
          escapeHtml(item.category) +
          "</span>" +
          "</span>" +
          '<span class="news-list__title">' +
          escapeHtml(item.title) +
          "</span>" +
          "</a>" +
          "</li>"
        );
      })
      .join("");
  }

  function renderServiceItems(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="service-block' +
          (index % 2 === 1 ? " service-block--reverse" : "") +
          '">' +
          '<figure class="service-block__media reveal-mask ' +
          (index % 2 === 1 ? "reveal-mask--left" : "reveal-mask--right") +
          '">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          "</figure>" +
          '<div class="service-block__copy reveal-up reveal-up--delay">' +
          '<p class="section-kicker">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="service-block__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="service-block__text">' +
          escapeHtml(item.text) +
          "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderServicePoints(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="service-point reveal-up' +
          (index > 1 ? " reveal-up--delay" : "") +
          '">' +
          '<span class="service-point__number">' +
          escapeHtml(item.number) +
          "</span>" +
          '<h3 class="service-point__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderBottomLinks(items) {
    return items
      .map(function (item, index) {
        return (
          '<a class="bottom-link reveal-up' +
          (index > 1 ? " reveal-up--delay" : "") +
          '" href="' +
          escapeHtml(item.href) +
          '">' +
          '<span class="bottom-link__label">' +
          escapeHtml(item.label) +
          "</span>" +
          '<strong class="bottom-link__title">' +
          escapeHtml(item.title) +
          "</strong>" +
          '<p class="bottom-link__text">' +
          escapeHtml(item.text) +
          "</p>" +
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
        return (
          '<article class="detail-row' +
          (index % 2 === 1 ? " detail-row--reverse" : "") +
          '">' +
          '<figure class="detail-row__media reveal-side ' +
          (index % 2 === 1 ? "reveal-side--left" : "reveal-side--right") +
          '">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          "</figure>" +
          '<div class="detail-row__copy reveal-up">' +
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
      '<div class="hero__grain"></div>' +
      '<div class="container hero__layout">' +
      '<div class="hero__copy reveal-up" data-hero-copy>' +
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
      '<a class="hero__scroll" href="#about">Scroll</a>' +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section about-stage" id="about">' +
      '<div class="container">' +
      '<div class="about-stage__visuals reveal-track">' +
      '<p class="about-stage__lead">' +
      escapeHtml(home.about.visualLead) +
      "</p>" +
      '<div class="about-stage__gallery">' +
      renderIntroVisuals(home.about.visuals) +
      "</div>" +
      "</div>" +
      '<div class="about-stage__copy">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.about.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.about.title) +
      "</h2>" +
      '<p class="section-lead reveal-up reveal-up--delay-2">' +
      escapeHtml(home.about.lead) +
      "</p>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.about.text) +
      "</p>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section brand-section">' +
      '<div class="container">' +
      '<div class="section-head section-head--compact">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.brands.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.brands.title) +
      "</h2>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.brands.text) +
      "</p>" +
      "</div>" +
      '<div class="brand-section__stack">' +
      renderBrandRows(home.brands.items) +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section news-section">' +
      '<div class="container news-section__layout">' +
      '<div class="section-head section-head--compact">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.news.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.news.title) +
      "</h2>" +
      '<a class="text-link reveal-up reveal-up--delay-2" href="' +
      escapeHtml(home.news.moreHref) +
      '">' +
      escapeHtml(home.news.moreLabel) +
      "</a>" +
      "</div>" +
      '<ul class="news-list">' +
      renderNewsItems(home.news.items) +
      "</ul>" +
      "</div>" +
      "</section>" +
      '<section class="section service-section">' +
      '<div class="container">' +
      '<div class="section-head section-head--compact">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.service.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.service.title) +
      "</h2>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.service.text) +
      "</p>" +
      "</div>" +
      '<div class="service-section__stack">' +
      renderServiceItems(home.service.items) +
      "</div>" +
      '<div class="service-points">' +
      renderServicePoints(home.service.points) +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section links-section">' +
      '<div class="container">' +
      '<div class="section-head section-head--compact">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.links.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.links.title) +
      "</h2>" +
      "</div>" +
      '<div class="links-section__grid">' +
      renderBottomLinks(home.links.items) +
      "</div>" +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  function renderSubhero(page) {
    return (
      '<section class="subhero">' +
      '<div class="container subhero__layout">' +
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
      '<div class="subhero__aside reveal-side reveal-side--right">' +
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
    app.querySelectorAll(".reveal-up, .reveal-side, .reveal-scale, .reveal-track, .reveal-mask")
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

    header.classList.toggle("is-scrolled", window.scrollY > 28);
  }

  function revealImmediate() {
    revealItems.forEach(function (item, index) {
      if (item.closest(".hero") || item.closest(".subhero")) {
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
        threshold: 0.1,
        rootMargin: "0px 0px -6% 0px"
      }
    );

    revealItems.forEach(function (item) {
      if (!item.closest(".hero") && !item.closest(".subhero")) {
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
      copyTimer = window.setTimeout(applyCopy, 320);
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

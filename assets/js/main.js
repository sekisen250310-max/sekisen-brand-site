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

  function renderPromoCards(items) {
    return items
      .map(function (item, index) {
        return (
          '<a class="overview-link reveal-up' +
          (index > 0 ? " reveal-up--delay" : "") +
          '" href="' +
          escapeHtml(item.href) +
          '">' +
          '<span class="overview-link__label">' +
          escapeHtml(item.label) +
          "</span>" +
          '<strong class="overview-link__title">' +
          escapeHtml(item.title) +
          "</strong>" +
          '<span class="overview-link__text">' +
          escapeHtml(item.text) +
          "</span>" +
          '<span class="overview-link__action">Open</span>' +
          "</a>"
        );
      })
      .join("");
  }

  function renderStoryRows(items, baseClass) {
    return items
      .map(function (item, index) {
        var reverseClass = index % 2 === 1 ? " " + baseClass + "--reverse" : "";
        var mediaReveal = index % 2 === 1 ? " reveal-side--right" : " reveal-side--left";
        var copyReveal = index % 2 === 1 ? " reveal-side--left" : " reveal-side--right";
        var actionHtml = "";

        if (item.href) {
          actionHtml =
            '<a class="text-link" href="' +
            escapeHtml(item.href) +
            '">' +
            escapeHtml(item.action || "Discover") +
            "</a>";
        } else if (item.action) {
          actionHtml = '<p class="story-meta">' + escapeHtml(item.action) + "</p>";
        }

        return (
          '<article class="' +
          baseClass +
          reverseClass +
          '">' +
          '<figure class="' +
          baseClass +
          '__media reveal-side' +
          mediaReveal +
          '">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          "</figure>" +
          '<div class="' +
          baseClass +
          '__copy reveal-side' +
          copyReveal +
          '">' +
          '<p class="section-kicker">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="' +
          baseClass +
          '__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="' +
          baseClass +
          '__text">' +
          escapeHtml(item.text) +
          "</p>" +
          actionHtml +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderPreviewNews(items) {
    return items
      .map(function (item) {
        return (
          '<li class="news-preview__item reveal-up">' +
          '<a class="news-preview__link" href="' +
          escapeHtml(item.href) +
          '">' +
          '<span class="news-preview__meta">' +
          "<time>" +
          escapeHtml(item.date) +
          "</time>" +
          "<span>" +
          escapeHtml(item.category) +
          "</span>" +
          "</span>" +
          '<span class="news-preview__title">' +
          escapeHtml(item.title) +
          "</span>" +
          "</a>" +
          "</li>"
        );
      })
      .join("");
  }

  function renderLinkTiles(items) {
    return items
      .map(function (item) {
        return (
          '<a class="link-tile reveal-up" href="' +
          escapeHtml(item.href) +
          '">' +
          '<span class="link-tile__label">' +
          escapeHtml(item.label) +
          "</span>" +
          '<strong class="link-tile__title">' +
          escapeHtml(item.title) +
          "</strong>" +
          '<span class="link-tile__action">Open</span>' +
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
      '<div class="container hero__shell">' +
      '<div class="hero__copy reveal-up" data-hero-copy>' +
      '<p class="hero__kicker" data-hero-kicker>' +
      escapeHtml(initialSlide.kicker) +
      "</p>" +
      '<p class="hero__tagline">' +
      escapeHtml(site.brand.tagline) +
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
      '<aside class="hero__panel reveal-side reveal-side--right">' +
      '<div class="hero__panel-head">' +
      '<p class="hero__panel-label">' +
      escapeHtml(home.hero.panelLabel) +
      "</p>" +
      '<span class="hero__panel-mark">' +
      escapeHtml(site.brand.nameJa) +
      "</span>" +
      "</div>" +
      '<div class="hero__panel-logo">' +
      '<img src="' +
      escapeHtml(site.brand.logo) +
      '" alt="SEKISEN brand mark" />' +
      "</div>" +
      '<h2 class="hero__panel-title">' +
      escapeHtml(home.hero.panelTitle) +
      "</h2>" +
      '<p class="hero__panel-text">' +
      escapeHtml(home.hero.panelText) +
      "</p>" +
      '<div class="hero__panel-points">' +
      home.hero.panelPoints
        .map(function (point) {
          return '<span class="hero__panel-point">' + escapeHtml(point) + "</span>";
        })
        .join("") +
      "</div>" +
      "</aside>" +
      '<div class="hero__footer">' +
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
      '<section class="section page-intro" id="intro">' +
      '<div class="container intro-block">' +
      '<div class="intro-block__copy">' +
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
      '<figure class="intro-block__media reveal-scale reveal-up--delay">' +
      '<img src="' +
      escapeHtml(home.intro.image) +
      '" alt="' +
      escapeHtml(home.intro.alt) +
      '" loading="lazy" />' +
      '<figcaption class="intro-block__quote">' +
      '<p class="intro-block__quote-label">' +
      escapeHtml(home.intro.quoteLabel) +
      "</p>" +
      '<h3 class="intro-block__quote-title">' +
      escapeHtml(home.intro.quoteTitle) +
      "</h3>" +
      '<p class="intro-block__quote-text">' +
      escapeHtml(home.intro.quoteText) +
      "</p>" +
      '<a class="text-link" href="' +
      escapeHtml(home.intro.quoteHref) +
      '">' +
      escapeHtml(home.intro.quoteAction) +
      "</a>" +
      "</figcaption>" +
      "</figure>" +
      "</div>" +
      "</section>" +
      '<section class="section overview">' +
      '<div class="container">' +
      '<div class="section-head section-head--compact">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.promo.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.promo.title) +
      "</h2>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.promo.text) +
      "</p>" +
      "</div>" +
      '<div class="overview__grid">' +
      renderPromoCards(home.promo.cards) +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section feature-section">' +
      '<div class="container">' +
      '<div class="section-head">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.lineupPreview.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.lineupPreview.title) +
      "</h2>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.lineupPreview.text) +
      "</p>" +
      "</div>" +
      '<div class="feature-section__stack">' +
      renderStoryRows(home.lineupPreview.items, "feature-story") +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section news-preview">' +
      '<div class="container news-preview__shell">' +
      '<div class="section-head section-head--compact">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.newsPreview.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.newsPreview.title) +
      "</h2>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.newsPreview.text) +
      "</p>" +
      '<a class="text-link reveal-up reveal-up--delay-2" href="' +
      escapeHtml(home.newsPreview.moreHref) +
      '">' +
      escapeHtml(home.newsPreview.moreLabel) +
      "</a>" +
      "</div>" +
      '<ul class="news-preview__list">' +
      renderPreviewNews(home.newsPreview.items) +
      "</ul>" +
      "</div>" +
      "</section>" +
      '<section class="section feature-section feature-section--soft">' +
      '<div class="container">' +
      '<div class="section-head">' +
      '<p class="section-kicker reveal-up">' +
      escapeHtml(home.experiencePreview.eyebrow) +
      "</p>" +
      '<h2 class="section-title reveal-up reveal-up--delay">' +
      escapeHtml(home.experiencePreview.title) +
      "</h2>" +
      '<p class="section-text reveal-up reveal-up--delay-2">' +
      escapeHtml(home.experiencePreview.text) +
      "</p>" +
      "</div>" +
      '<div class="feature-section__stack">' +
      renderStoryRows(home.experiencePreview.items, "feature-story") +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section link-band">' +
      '<div class="container link-band__grid">' +
      renderLinkTiles(home.linkTiles) +
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
      escapeHtml(site.brand.description || site.brand.tagline) +
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
      renderStoryRows(page.sections, "detail-story") +
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
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var autoplayId = null;
  var copyTimer = null;

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

    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }

  function revealImmediate() {
    revealItems.forEach(function (item, index) {
      if (item.closest(".hero") || item.closest(".subhero") || item.closest(".page-intro")) {
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
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    revealItems.forEach(function (item) {
      if (!item.closest(".hero") && !item.closest(".subhero") && !item.closest(".page-intro")) {
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
    var heroKicker = app.querySelector("[data-hero-kicker]");
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
        heroKicker.textContent = slide.kicker;
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
      copyTimer = window.setTimeout(applyCopy, 260);
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
    if (window.innerWidth > 960) {
      closeNav();
    }
  });

  handleHeader();
  revealImmediate();
  observeSections();
})();

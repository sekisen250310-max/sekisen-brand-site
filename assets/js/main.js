(function () {
  var content = window.SEKISEN_CONTENT;
  var app = document.getElementById("app");

  if (!content || !app) {
    return;
  }

  var totalSlides = content.hero.slides.length;
  var initialSlide = content.hero.slides[0];

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

  function renderPromiseItems(items) {
    return items
      .map(function (item) {
        return (
          '<article class="promise-item reveal-up">' +
          '<p class="promise-item__number">' +
          escapeHtml(item.number) +
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

  function renderStoryChapters(chapters) {
    return chapters
      .map(function (chapter, index) {
        return (
          '<article class="story-chapter' +
          (index % 2 === 1 ? " story-chapter--reverse" : "") +
          '">' +
          '<div class="story-chapter__copy reveal-up">' +
          '<p class="section-label">' +
          escapeHtml(chapter.label) +
          "</p>" +
          '<h3 class="story-chapter__title">' +
          escapeHtml(chapter.title) +
          "</h3>" +
          '<p class="story-chapter__text">' +
          escapeHtml(chapter.text) +
          "</p>" +
          "</div>" +
          '<figure class="story-chapter__media reveal-up reveal-up--delay">' +
          '<img src="' +
          escapeHtml(chapter.image) +
          '" alt="' +
          escapeHtml(chapter.alt) +
          '" loading="lazy" />' +
          "</figure>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderValueItems(items) {
    return items
      .map(function (item) {
        return (
          '<article class="value-card reveal-up">' +
          '<h3 class="value-card__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="value-card__text">' +
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
          '<article class="gallery-card gallery-card--' +
          escapeHtml(item.size) +
          ' reveal-up">' +
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
    '<div class="hero__grain"></div>' +
    '<div class="hero__frame"></div>' +
    '<div class="hero__orb hero__orb--one"></div>' +
    '<div class="hero__orb hero__orb--two"></div>' +
    '<div class="container hero__layout">' +
    '<div class="hero__content reveal-up" data-hero-copy>' +
    '<p class="section-label hero__label" data-hero-eyebrow>' +
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
    '<a class="button button--primary-dark" data-hero-primary href="' +
    escapeHtml(initialSlide.primaryHref) +
    '">' +
    escapeHtml(initialSlide.primaryLabel) +
    "</a>" +
    '<a class="button button--text-link" data-hero-secondary href="' +
    escapeHtml(initialSlide.secondaryHref) +
    '">' +
    escapeHtml(initialSlide.secondaryLabel) +
    "</a>" +
    "</div>" +
    "</div>" +
    '<aside class="hero__note reveal-up reveal-up--delay">' +
    '<p class="hero__note-label">' +
    escapeHtml(content.hero.note.label) +
    "</p>" +
    '<h2 class="hero__note-title">' +
    escapeHtml(content.hero.note.title) +
    "</h2>" +
    '<p class="hero__note-text">' +
    escapeHtml(content.hero.note.text) +
    "</p>" +
    "</aside>" +
    "</div>" +
    '<div class="container hero__footer">' +
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
    '<a class="hero__scroll" href="#concept">Scroll</a>' +
    "</div>" +
    "</section>" +
    '<section class="intro" id="concept">' +
    '<div class="container">' +
    '<div class="intro__panel">' +
    '<div class="intro__grid">' +
    '<div class="intro__copy">' +
    '<p class="section-label reveal-up">' +
    escapeHtml(content.intro.eyebrow) +
    "</p>" +
    '<h2 class="section-title reveal-up reveal-up--delay">' +
    escapeHtml(content.intro.title) +
    "</h2>" +
    '<p class="intro__lead reveal-up reveal-up--delay-2">' +
    escapeHtml(content.intro.lead) +
    "</p>" +
    '<p class="section-text reveal-up reveal-up--delay-2">' +
    escapeHtml(content.intro.description) +
    "</p>" +
    "</div>" +
    '<figure class="intro__media reveal-up reveal-up--delay">' +
    '<img src="' +
    escapeHtml(content.intro.image) +
    '" alt="' +
    escapeHtml(content.intro.alt) +
    '" loading="lazy" />' +
    '<figcaption class="intro__aside">' +
    '<p class="intro__aside-label">' +
    escapeHtml(content.intro.asideLabel) +
    "</p>" +
    '<h3 class="intro__aside-title">' +
    escapeHtml(content.intro.asideTitle) +
    "</h3>" +
    '<p class="intro__aside-text">' +
    escapeHtml(content.intro.asideText) +
    "</p>" +
    "</figcaption>" +
    "</figure>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</section>" +
    '<section class="section promise" id="promise">' +
    '<div class="container">' +
    '<div class="section-head section-head--narrow">' +
    '<p class="section-label reveal-up">' +
    escapeHtml(content.promise.eyebrow) +
    "</p>" +
    '<h2 class="section-title reveal-up reveal-up--delay">' +
    escapeHtml(content.promise.title) +
    "</h2>" +
    '<p class="section-text reveal-up reveal-up--delay-2">' +
    escapeHtml(content.promise.description) +
    "</p>" +
    "</div>" +
    '<div class="promise__grid">' +
    renderPromiseItems(content.promise.items) +
    "</div>" +
    "</div>" +
    "</section>" +
    '<section class="section story" id="story">' +
    '<div class="container">' +
    '<div class="section-head">' +
    '<p class="section-label reveal-up">' +
    escapeHtml(content.story.eyebrow) +
    "</p>" +
    '<h2 class="section-title reveal-up reveal-up--delay">' +
    escapeHtml(content.story.title) +
    "</h2>" +
    '<p class="section-text reveal-up reveal-up--delay-2">' +
    escapeHtml(content.story.description) +
    "</p>" +
    "</div>" +
    '<div class="story__stack">' +
    renderStoryChapters(content.story.chapters) +
    "</div>" +
    "</div>" +
    "</section>" +
    '<section class="section value" id="value">' +
    '<div class="container">' +
    '<div class="value__intro">' +
    '<div class="value__copy">' +
    '<p class="section-label reveal-up">' +
    escapeHtml(content.value.eyebrow) +
    "</p>" +
    '<h2 class="section-title reveal-up reveal-up--delay">' +
    escapeHtml(content.value.title) +
    "</h2>" +
    '<p class="section-text reveal-up reveal-up--delay-2">' +
    escapeHtml(content.value.description) +
    "</p>" +
    "</div>" +
    '<aside class="value__spotlight reveal-up reveal-up--delay">' +
    '<span class="value__spotlight-label">' +
    escapeHtml(content.value.spotlight.label) +
    "</span>" +
    '<strong class="value__spotlight-value">' +
    escapeHtml(content.value.spotlight.value) +
    "</strong>" +
    '<p class="value__spotlight-text">' +
    escapeHtml(content.value.spotlight.text) +
    "</p>" +
    "</aside>" +
    "</div>" +
    '<div class="value__grid">' +
    renderValueItems(content.value.items) +
    "</div>" +
    "</div>" +
    "</section>" +
    '<section class="section gallery" id="gallery">' +
    '<div class="container">' +
    '<div class="section-head">' +
    '<p class="section-label reveal-up">' +
    escapeHtml(content.gallery.eyebrow) +
    "</p>" +
    '<h2 class="section-title reveal-up reveal-up--delay">' +
    escapeHtml(content.gallery.title) +
    "</h2>" +
    '<p class="section-text reveal-up reveal-up--delay-2">' +
    escapeHtml(content.gallery.description) +
    "</p>" +
    "</div>" +
    '<div class="gallery__grid">' +
    renderGalleryItems(content.gallery.items) +
    "</div>" +
    "</div>" +
    "</section>" +
    '<section class="section cta" id="contact">' +
    '<div class="container">' +
    '<div class="cta__panel reveal-up">' +
    '<p class="section-label">' +
    escapeHtml(content.cta.eyebrow) +
    "</p>" +
    '<h2 class="section-title">' +
    escapeHtml(content.cta.title) +
    "</h2>" +
    '<p class="section-text">' +
    escapeHtml(content.cta.description) +
    "</p>" +
    '<div class="cta__actions">' +
    renderActions(content.cta.actions) +
    "</div>" +
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
  var nav = app.querySelector(".site-nav");
  var navToggle = app.querySelector(".nav-toggle");
  var hero = app.querySelector(".hero");
  var heroCopy = app.querySelector("[data-hero-copy]");
  var heroEyebrow = app.querySelector("[data-hero-eyebrow]");
  var heroTitleTop = app.querySelector("[data-hero-title-top]");
  var heroTitleBottom = app.querySelector("[data-hero-title-bottom]");
  var heroDescription = app.querySelector("[data-hero-description]");
  var heroPrimary = app.querySelector("[data-hero-primary]");
  var heroSecondary = app.querySelector("[data-hero-secondary]");
  var currentCounter = app.querySelector("[data-hero-current]");
  var revealItems = Array.prototype.slice.call(
    app.querySelectorAll(".reveal-up")
  );
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
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }

  function revealHero() {
    revealItems.forEach(function (item, index) {
      if (item.closest(".hero") || item.closest(".intro")) {
        window.setTimeout(function () {
          item.classList.add("is-visible");
        }, 100 + index * 90);
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
        rootMargin: "0px 0px -6% 0px"
      }
    );

    revealItems.forEach(function (item) {
      if (!item.closest(".hero") && !item.closest(".intro")) {
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
    copyTimer = window.setTimeout(applyCopy, 220);
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

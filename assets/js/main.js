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

  function renderLineupItems(items) {
    return items
      .map(function (item, index) {
        var reverseClass = index % 2 === 1 ? " lineup-card--reverse" : "";
        var mediaReveal = index % 2 === 1 ? " reveal-side--right" : " reveal-side--left";
        var copyReveal = index % 2 === 1 ? " reveal-side--left" : " reveal-side--right";

        return (
          '<article class="lineup-card' +
          reverseClass +
          '">' +
          '<figure class="lineup-card__media reveal-side ' +
          mediaReveal +
          '">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          "</figure>" +
          '<div class="lineup-card__body reveal-side ' +
          copyReveal +
          '">' +
          '<p class="lineup-card__name">' +
          escapeHtml(item.name) +
          "</p>" +
          '<h3 class="lineup-card__lead">' +
          escapeHtml(item.lead) +
          "</h3>" +
          '<p class="lineup-card__text">' +
          escapeHtml(item.description) +
          "</p>" +
          '<a class="text-link" href="' +
          escapeHtml(item.href) +
          '">Discover</a>' +
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
          '<li class="news-item reveal-up">' +
          '<a class="news-item__link" href="' +
          escapeHtml(item.href) +
          '">' +
          '<span class="news-item__meta">' +
          '<time datetime="' +
          escapeHtml(item.date.replace(/\.\s*/g, "-")) +
          '">' +
          escapeHtml(item.date) +
          "</time>" +
          "<span>" +
          escapeHtml(item.category) +
          "</span>" +
          "</span>" +
          '<span class="news-item__title">' +
          escapeHtml(item.title) +
          "</span>" +
          '<span class="news-item__arrow">View</span>' +
          "</a>" +
          "</li>"
        );
      })
      .join("");
  }

  function renderExperienceItems(items) {
    return items
      .map(function (item, index) {
        var reverseClass = index % 2 === 1 ? " experience-story--reverse" : "";
        var mediaReveal = index % 2 === 1 ? " reveal-side--right" : " reveal-side--left";
        var copyReveal = index % 2 === 1 ? " reveal-side--left" : " reveal-side--right";

        return (
          '<article class="experience-story' +
          reverseClass +
          '">' +
          '<figure class="experience-story__media reveal-side ' +
          mediaReveal +
          '">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          "</figure>" +
          '<div class="experience-story__copy reveal-side ' +
          copyReveal +
          '">' +
          '<p class="section-label">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="experience-story__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="experience-story__text">' +
          escapeHtml(item.text) +
          "</p>" +
          '<a class="text-link" href="' +
          escapeHtml(item.href) +
          '">' +
          escapeHtml(item.linkLabel) +
          "</a>" +
          "</div>" +
          "</article>"
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
          '<span class="link-tile__arrow">Open</span>' +
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
    '<div class="container hero__inner">' +
    '<div class="hero__copy reveal-up" data-hero-copy>' +
    '<p class="hero__eyebrow" data-hero-eyebrow>' +
    escapeHtml(initialSlide.eyebrow) +
    "</p>" +
    '<p class="hero__tagline">' +
    escapeHtml(content.brand.tagline) +
    "</p>" +
    '<h1 class="hero__title" data-hero-title>' +
    escapeHtml(initialSlide.title).replace(/\n/g, "<br />") +
    "</h1>" +
    '<p class="hero__description" data-hero-description>' +
    escapeHtml(initialSlide.description) +
    "</p>" +
    '<div class="hero__actions">' +
    '<a class="button button--dark" data-hero-action href="' +
    escapeHtml(initialSlide.actionHref) +
    '">' +
    escapeHtml(initialSlide.actionLabel) +
    "</a>" +
    "</div>" +
    "</div>" +
    '<div class="hero__aside reveal-up reveal-up--delay">' +
    '<p class="hero__aside-label">Brand Note</p>' +
    '<p class="hero__aside-text">品質の説得力を、静かな導線と余白で伝える。</p>' +
    "</div>" +
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
    '<a class="hero__scroll" href="#about">Scroll</a>' +
    "</div>" +
    "</section>" +
    '<section class="section about" id="about">' +
    '<div class="container about__inner">' +
    '<p class="section-label reveal-up">' +
    escapeHtml(content.about.eyebrow) +
    "</p>" +
    '<h2 class="section-title reveal-up reveal-up--delay">' +
    escapeHtml(content.about.title) +
    "</h2>" +
    '<p class="section-text reveal-up reveal-up--delay-2">' +
    escapeHtml(content.about.description) +
    "</p>" +
    "</div>" +
    "</section>" +
    '<section class="section lineup" id="lineup">' +
    '<div class="container">' +
    '<div class="section-head">' +
    '<p class="section-label reveal-up">' +
    escapeHtml(content.lineup.eyebrow) +
    "</p>" +
    '<h2 class="section-title reveal-up reveal-up--delay">' +
    escapeHtml(content.lineup.title) +
    "</h2>" +
    "</div>" +
    '<div class="lineup__stack">' +
    renderLineupItems(content.lineup.items) +
    "</div>" +
    "</div>" +
    "</section>" +
    '<section class="section news" id="news">' +
    '<div class="container news__inner">' +
    '<div class="section-head section-head--compact">' +
    '<p class="section-label reveal-up">' +
    escapeHtml(content.news.eyebrow) +
    "</p>" +
    '<h2 class="section-title reveal-up reveal-up--delay">' +
    escapeHtml(content.news.title) +
    "</h2>" +
    "</div>" +
    '<ul class="news__list">' +
    renderNewsItems(content.news.items) +
    "</ul>" +
    '<a class="text-link news__more reveal-up" href="' +
    escapeHtml(content.news.moreHref) +
    '">' +
    escapeHtml(content.news.moreLabel) +
    "</a>" +
    "</div>" +
    "</section>" +
    '<section class="section experience" id="experience">' +
    '<div class="container">' +
    '<div class="section-head">' +
    '<p class="section-label reveal-up">' +
    escapeHtml(content.experience.eyebrow) +
    "</p>" +
    '<h2 class="section-title reveal-up reveal-up--delay">' +
    escapeHtml(content.experience.title) +
    "</h2>" +
    '<p class="section-text reveal-up reveal-up--delay-2">' +
    escapeHtml(content.experience.description) +
    "</p>" +
    "</div>" +
    '<div class="experience__stack">' +
    renderExperienceItems(content.experience.items) +
    "</div>" +
    "</div>" +
    "</section>" +
    '<section class="section link-band" id="contact">' +
    '<div class="container link-band__grid">' +
    renderLinkTiles(content.links.items) +
    "</div>" +
    "</section>" +
    "</main>" +
    '<footer class="site-footer">' +
    '<div class="container site-footer__top">' +
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
    "</div>" +
    '<div class="container site-footer__bottom">' +
    '<nav class="site-footer__nav">' +
    renderNavigation(content.footer.links) +
    "</nav>" +
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
  var heroTitle = app.querySelector("[data-hero-title]");
  var heroDescription = app.querySelector("[data-hero-description]");
  var heroAction = app.querySelector("[data-hero-action]");
  var currentCounter = app.querySelector("[data-hero-current]");
  var revealItems = Array.prototype.slice.call(
    app.querySelectorAll(".reveal-up, .reveal-side")
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
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  function revealImmediate() {
    revealItems.forEach(function (item, index) {
      if (item.closest(".hero") || item.closest(".about")) {
        window.setTimeout(function () {
          item.classList.add("is-visible");
        }, 90 + index * 80);
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
      if (!item.closest(".hero") && !item.closest(".about")) {
        observer.observe(item);
      }
    });
  }

  function updateHeroCopy(slide, immediate) {
    window.clearTimeout(copyTimer);

    function applyCopy() {
      heroEyebrow.textContent = slide.eyebrow;
      heroTitle.innerHTML = escapeHtml(slide.title).replace(/\n/g, "<br />");
      heroDescription.textContent = slide.description;
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
  revealImmediate();
  observeSections();
  setSlide(0, true);
  startAutoplay();
})();

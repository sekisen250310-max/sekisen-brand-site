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

  function renderIntroFacts(items) {
    return items
      .map(function (item) {
        return (
          '<div class="brand-intro__fact">' +
          '<p class="brand-intro__fact-label">' +
          escapeHtml(item.label) +
          "</p>" +
          '<p class="brand-intro__fact-value">' +
          escapeHtml(item.value) +
          "</p>" +
          "</div>"
        );
      })
      .join("");
  }

  function getRevealSlideDelayClass(index) {
    if (index === 1) {
      return " reveal-slide--delay";
    }

    if (index === 2) {
      return " reveal-slide--delay-2";
    }

    if (index >= 3) {
      return " reveal-slide--delay-3";
    }

    return "";
  }

  function renderStorySteps(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="story-step reveal-slide' +
          getRevealSlideDelayClass(index) +
          '">' +
          '<figure class="story-step__media">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          "</figure>" +
          '<div class="story-step__copy">' +
          '<p class="section-kicker">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="story-step__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="story-step__text">' +
          escapeHtml(item.text) +
          "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderActionButtons(items) {
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

  function renderProductVisuals(items) {
    return items
      .map(function (item, index) {
        return (
          '<figure class="product-visual product-visual--' +
          (index === 0 ? "main" : "secondary") +
          " reveal-slide reveal-slide--media" +
          getRevealSlideDelayClass(index) +
          '">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.alt) +
          '" loading="lazy" />' +
          '<figcaption class="product-visual__caption">' +
          escapeHtml(item.caption) +
          "</figcaption>" +
          "</figure>"
        );
      })
      .join("");
  }

  function renderProductHighlights(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="product-highlight reveal-slide' +
          getRevealSlideDelayClass(index) +
          '">' +
          '<p class="section-kicker">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="product-highlight__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="product-highlight__text">' +
          escapeHtml(item.text) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderProductComparisonRows(items) {
    return items
      .map(function (item, index) {
        return (
          '<div class="product-compare__row reveal-slide' +
          getRevealSlideDelayClass(index) +
          '">' +
          '<div class="product-compare__cell product-compare__cell--label">' +
          escapeHtml(item.label) +
          "</div>" +
          '<div class="product-compare__cell">' +
          '<span class="product-compare__caption">石戦</span>' +
          escapeHtml(item.sekisen) +
          "</div>" +
          '<div class="product-compare__cell">' +
          '<span class="product-compare__caption">一般的なトマト</span>' +
          escapeHtml(item.regular) +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderSceneItems(items) {
    return items
      .map(function (item) {
        return (
          '<li class="product-scene__item">' +
          escapeHtml(item) +
          "</li>"
        );
      })
      .join("");
  }

  function renderSpecItems(items) {
    return items
      .map(function (item) {
        return (
          '<div class="product-spec">' +
          '<span class="product-spec__label">' +
          escapeHtml(item.label) +
          "</span>" +
          '<span class="product-spec__value">' +
          escapeHtml(item.value) +
          "</span>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderReasonItems(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="reason-item reveal-slide' +
          getRevealSlideDelayClass(index) +
          '">' +
          '<p class="section-kicker">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="reason-item__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="reason-item__text">' +
          escapeHtml(item.text) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderTrustStats(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="trust-stat reveal-slide' +
          getRevealSlideDelayClass(index) +
          '">' +
          '<strong class="trust-stat__value">' +
          escapeHtml(item.value) +
          "</strong>" +
          '<span class="trust-stat__label">' +
          escapeHtml(item.label) +
          "</span>" +
          '<span class="trust-stat__note">' +
          escapeHtml(item.note) +
          "</span>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderTrustVoices(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="trust-voice reveal-slide' +
          getRevealSlideDelayClass(index) +
          '">' +
          '<h3 class="trust-voice__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="trust-voice__text">' +
          escapeHtml(item.text) +
          "</p>" +
          '<p class="trust-voice__meta">' +
          escapeHtml(item.meta) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderLimitedItems(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="limited-item reveal-slide' +
          getRevealSlideDelayClass(index) +
          '">' +
          '<p class="section-kicker">' +
          escapeHtml(item.label) +
          "</p>" +
          '<p class="limited-item__text">' +
          escapeHtml(item.text) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderNewsItems(items) {
    return items
      .map(function (item, index) {
        return (
          '<li class="news-list__item reveal-slide' +
          getRevealSlideDelayClass(index) +
          '">' +
          '<a class="news-list__link" href="' +
          escapeHtml(item.href) +
          '">' +
          '<span class="news-list__meta">' +
          "<time>" +
          escapeHtml(item.date) +
          "</time>" +
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

  function renderServicePoints(items) {
    return items
      .map(function (item, index) {
        return (
          '<article class="service-point reveal-slide' +
          getRevealSlideDelayClass(index) +
          '">' +
          '<p class="section-kicker">' +
          escapeHtml(item.label) +
          "</p>" +
          '<h3 class="service-point__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="service-point__text">' +
          escapeHtml(item.text) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderShopLinks(items) {
    return items
      .map(function (item, index) {
        var classes = "shop-link reveal-slide" + getRevealSlideDelayClass(index);

        return (
          '<a class="' +
          classes +
          '" href="' +
          escapeHtml(item.href) +
          '">' +
          '<span class="shop-link__label">' +
          escapeHtml(item.label) +
          "</span>" +
          '<strong class="shop-link__title">' +
          escapeHtml(item.title) +
          "</strong>" +
          '<p class="shop-link__text">' +
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
      '<main class="site-main site-main--home">' +
      '<section class="hero-stage">' +
      '<div class="hero">' +
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
      '<a class="hero__scroll" href="#brand-intro">Scroll</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<section class="section brand-intro" id="brand-intro">' +
      '<div class="container brand-intro__shell">' +
      '<div class="brand-intro__copy reveal-slide" data-intro-copy>' +
      '<p class="section-kicker">' +
      escapeHtml(home.intro.eyebrow) +
      "</p>" +
      '<h2 class="section-title">' +
      toMarkup(home.intro.title) +
      "</h2>" +
      '<p class="section-lead">' +
      escapeHtml(home.intro.lead) +
      "</p>" +
      '<p class="section-text">' +
      escapeHtml(home.intro.text) +
      "</p>" +
      "</div>" +
      '<aside class="brand-intro__aside reveal-slide reveal-slide--delay">' +
      '<p class="brand-intro__aside-label">' +
      escapeHtml(home.intro.note.label) +
      "</p>" +
      '<h3 class="brand-intro__aside-title">' +
      escapeHtml(home.intro.note.title) +
      "</h3>" +
      '<p class="brand-intro__aside-text">' +
      escapeHtml(home.intro.note.text) +
      "</p>" +
      '<div class="brand-intro__facts">' +
      renderIntroFacts(home.intro.facts) +
      "</div>" +
      "</aside>" +
      '<div class="brand-intro__visual-shell reveal-slide reveal-slide--delay-2">' +
      '<div class="brand-intro__visual-meta">' +
      '<p class="brand-intro__lead">' +
      escapeHtml(home.intro.visualLead) +
      "</p>" +
      '<p class="brand-intro__caption">' +
      escapeHtml(home.intro.caption) +
      "</p>" +
      "</div>" +
      '<figure class="brand-intro__visual">' +
      '<img src="' +
      escapeHtml(home.intro.image) +
      '" alt="' +
      escapeHtml(home.intro.alt) +
      '" loading="lazy" />' +
      "</figure>" +
      "</div>" +
      "</div>" +
      "</section>" +
      "</section>" +
      '<section class="section story-stage">' +
      '<div class="container">' +
      '<div class="section-head section-head--compact reveal-slide">' +
      '<p class="section-kicker">' +
      escapeHtml(home.story.eyebrow) +
      "</p>" +
      '<h2 class="section-title">' +
      escapeHtml(home.story.title) +
      "</h2>" +
      '<p class="section-text">' +
      escapeHtml(home.story.text) +
      "</p>" +
      "</div>" +
      '<div class="story-stage__stack">' +
      renderStorySteps(home.story.steps) +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section product-stage" id="product-stage">' +
      '<div class="container">' +
      '<div class="section-head section-head--compact reveal-slide">' +
      '<p class="section-kicker">' +
      escapeHtml(home.product.eyebrow) +
      "</p>" +
      '<h2 class="section-title">' +
      escapeHtml(home.product.title) +
      "</h2>" +
      '<p class="section-lead">' +
      escapeHtml(home.product.lead) +
      "</p>" +
      "</div>" +
      '<div class="product-stage__layout">' +
      '<div class="product-stage__visuals">' +
      renderProductVisuals(home.product.visuals) +
      "</div>" +
      '<div class="product-stage__details">' +
      '<div class="product-stage__highlights">' +
      renderProductHighlights(home.product.highlights) +
      "</div>" +
      '<div class="product-compare reveal-slide reveal-slide--delay-2">' +
      '<p class="section-kicker">' +
      escapeHtml(home.product.comparison.title) +
      "</p>" +
      '<div class="product-compare__head">' +
      '<span></span>' +
      "<span>石戦</span>" +
      "<span>一般的なトマト</span>" +
      "</div>" +
      '<div class="product-compare__table">' +
      renderProductComparisonRows(home.product.comparison.rows) +
      "</div>" +
      "</div>" +
      '<div class="product-stage__meta">' +
      '<div class="product-meta reveal-slide reveal-slide--delay-2">' +
      '<p class="section-kicker">' +
      escapeHtml(home.product.scenes.title) +
      "</p>" +
      '<ul class="product-scene">' +
      renderSceneItems(home.product.scenes.items) +
      "</ul>" +
      "</div>" +
      '<div class="product-meta reveal-slide reveal-slide--delay-3">' +
      '<p class="section-kicker">' +
      escapeHtml(home.product.specs.title) +
      "</p>" +
      '<div class="product-specs">' +
      renderSpecItems(home.product.specs.items) +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="cta-row reveal-slide reveal-slide--delay-3">' +
      renderActionButtons(home.product.ctas) +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section reason-stage" id="reason-stage">' +
      '<div class="container">' +
      '<div class="section-head section-head--compact reveal-slide">' +
      '<p class="section-kicker">' +
      escapeHtml(home.reason.eyebrow) +
      "</p>" +
      '<h2 class="section-title">' +
      escapeHtml(home.reason.title) +
      "</h2>" +
      '<p class="section-text">' +
      escapeHtml(home.reason.text) +
      "</p>" +
      "</div>" +
      '<div class="reason-stage__grid">' +
      renderReasonItems(home.reason.items) +
      "</div>" +
      '<div class="reason-stage__foot reveal-slide reveal-slide--delay-2">' +
      '<p class="reason-stage__summary">' +
      escapeHtml(home.reason.summary) +
      "</p>" +
      '<div class="cta-row">' +
      renderActionButtons(home.reason.ctas) +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section trust-stage" id="trust-stage">' +
      '<div class="container trust-stage__layout">' +
      '<div class="trust-stage__story reveal-slide">' +
      '<p class="section-kicker">' +
      escapeHtml(home.trust.eyebrow) +
      "</p>" +
      '<h2 class="section-title">' +
      escapeHtml(home.trust.title) +
      "</h2>" +
      '<p class="section-text">' +
      escapeHtml(home.trust.text) +
      "</p>" +
      '<div class="trust-producer">' +
      '<p class="section-kicker">' +
      escapeHtml(home.trust.producer.label) +
      "</p>" +
      '<h3 class="trust-producer__title">' +
      escapeHtml(home.trust.producer.title) +
      "</h3>" +
      '<p class="trust-producer__text">' +
      escapeHtml(home.trust.producer.text) +
      "</p>" +
      "</div>" +
      "</div>" +
      '<div class="trust-stage__proof reveal-slide reveal-slide--delay">' +
      '<div class="trust-stats">' +
      renderTrustStats(home.trust.stats) +
      "</div>" +
      '<div class="trust-voices">' +
      renderTrustVoices(home.trust.voices) +
      "</div>" +
      '<p class="section-note">' +
      escapeHtml(home.trust.note) +
      "</p>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section limited-stage" id="limited-stage">' +
      '<div class="container">' +
      '<div class="limited-stage__shell reveal-slide">' +
      '<p class="section-kicker">' +
      escapeHtml(home.limited.eyebrow) +
      "</p>" +
      '<h2 class="section-title">' +
      escapeHtml(home.limited.title) +
      "</h2>" +
      '<p class="section-text">' +
      escapeHtml(home.limited.text) +
      "</p>" +
      '<div class="limited-stage__items">' +
      renderLimitedItems(home.limited.items) +
      "</div>" +
      '<div class="cta-row reveal-slide reveal-slide--delay-2">' +
      renderActionButtons(home.limited.ctas) +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section news-section">' +
      '<div class="container news-section__layout">' +
      '<div class="section-head section-head--compact reveal-slide">' +
      '<p class="section-kicker">' +
      escapeHtml(home.news.eyebrow) +
      "</p>" +
      '<h2 class="section-title">' +
      escapeHtml(home.news.title) +
      "</h2>" +
      '<a class="text-link" href="' +
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
      '<div class="container service-section__layout">' +
      '<div class="section-head section-head--compact reveal-slide">' +
      '<p class="section-kicker">' +
      escapeHtml(home.service.eyebrow) +
      "</p>" +
      '<h2 class="section-title">' +
      escapeHtml(home.service.title) +
      "</h2>" +
      '<p class="section-text">' +
      escapeHtml(home.service.text) +
      "</p>" +
      "</div>" +
      '<div class="service-points">' +
      renderServicePoints(home.service.items) +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section shop-stage" id="shop-stage">' +
      '<div class="container">' +
      '<div class="section-head section-head--compact reveal-slide">' +
      '<p class="section-kicker">' +
      escapeHtml(home.shop.eyebrow) +
      "</p>" +
      '<h2 class="section-title">' +
      escapeHtml(home.shop.title) +
      "</h2>" +
      '<p class="section-text">' +
      escapeHtml(home.shop.text) +
      "</p>" +
      "</div>" +
      '<div class="shop-stage__grid">' +
      renderShopLinks(home.shop.items) +
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
    app.querySelectorAll(".reveal-up, .reveal-side, .reveal-scale, .reveal-track, .reveal-mask, .reveal-rise, .reveal-sheet, .reveal-slide")
  );
  var hero = app.querySelector(".hero");
  var introCopy = app.querySelector("[data-intro-copy]");
  var autoplayId = null;
  var copyTimer = null;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var headerTicking = false;
  var headerScrolled = false;

  function closeNav() {
    if (!nav || !navToggle) {
      return;
    }

    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  function handleHeader(force) {
    if (!header) {
      return;
    }

    if (pageKey !== "home") {
      header.classList.add("is-scrolled");
      header.classList.add("is-intro-visible");
      headerScrolled = true;
      return;
    }

    var shouldBeScrolled = false;

    if (introCopy) {
      var introRect = introCopy.getBoundingClientRect();
      var introThreshold = window.innerHeight - Math.min(window.innerHeight * 0.18, 160);
      var hysteresis = headerScrolled ? 18 : 0;

      shouldBeScrolled = introRect.top <= introThreshold - hysteresis;
    } else {
      var scrollY = window.scrollY || window.pageYOffset || 0;
      shouldBeScrolled = headerScrolled ? scrollY > 20 : scrollY > 68;
    }

    if (force || shouldBeScrolled !== headerScrolled) {
      headerScrolled = shouldBeScrolled;
      header.classList.toggle("is-scrolled", headerScrolled);
      header.classList.toggle("is-intro-visible", headerScrolled);
    }
  }

  function queueHeaderUpdate() {
    if (headerTicking) {
      return;
    }

    headerTicking = true;
    window.requestAnimationFrame(function () {
      headerTicking = false;
      handleHeader(false);
    });
  }

  function revealImmediate() {
    revealItems.forEach(function (item, index) {
      if (
        item.closest(".hero") ||
        item.closest(".subhero") ||
        item.classList.contains("reveal-rise--hero")
      ) {
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

  window.addEventListener("scroll", queueHeaderUpdate, { passive: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      closeNav();
    }
  });

  handleHeader(true);
  revealImmediate();
  observeSections();
})();

(function () {
  var content = window.SEKISEN_CONTENT;

  if (content && content.site && content.home && content.home.hero) {
    content.site.navigation = [
      { id: "about", label: "石戦とは", href: "./about.html" },
      { id: "lineup", label: "商品", href: "./lineup.html" },
      { id: "news", label: "お知らせ", href: "./news.html" },
      { id: "experience", label: "法人のお客様へ", href: "./experience.html" }
    ];

    content.home.hero.interval = 18000;
    content.home.hero.slides = [
      {
        image: "./assets/images/hero-01.svg",
        alt: "SEKISEN premium tomato hero visual",
        eyebrow: "SEKISEN",
        title: "甘さの先に、\n品位がある。",
        text: "食卓にも、贈る場にも、静かに残る。",
        actionLabel: "石戦とは",
        actionHref: "#brand-intro"
      },
      {
        image: "./assets/images/hero-02.svg",
        alt: "SEKISEN gift visual",
        eyebrow: "SEKISEN",
        title: "甘さの先に、\n品位がある。",
        text: "食卓にも、贈る場にも、静かに残る。",
        actionLabel: "石戦とは",
        actionHref: "#brand-intro"
      },
      {
        image: "./assets/images/hero-03.svg",
        alt: "SEKISEN experience visual",
        eyebrow: "SEKISEN",
        title: "甘さの先に、\n品位がある。",
        text: "食卓にも、贈る場にも、静かに残る。",
        actionLabel: "石戦とは",
        actionHref: "#brand-intro"
      }
    ];
    content.home.hero.actions = [
      {
        label: "石戦とは",
        href: "#brand-intro",
        style: "button button--dark"
      },
      {
        label: "商品を見る",
        href: "#product-stage",
        style: "button button--ghost-light"
      }
    ];
  }

  function mountHomeHeaderHero() {
    if (!document.body || document.body.dataset.page !== "home") {
      return;
    }

    var header = document.querySelector("[data-header]");
    var heroDescription = document.querySelector("[data-hero-description]");
    var navToggle = document.querySelector(".nav-toggle");

    if (!header) {
      return;
    }

    var ticking = false;
    var solid = false;

    function shouldSolidify() {
      var scrollY = window.scrollY || window.pageYOffset || 0;
      return scrollY > 28 || document.body.classList.contains("nav-open");
    }

    function applyHeaderState(force) {
      var nextSolid = shouldSolidify();

      if (force || nextSolid !== solid) {
        solid = nextSolid;
        header.classList.toggle("is-home-solid", solid);
      }

      header.classList.add("is-home-ready");
    }

    function queueHeaderState() {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        applyHeaderState(false);
      });
    }

    if (heroDescription && !heroDescription.textContent.trim()) {
      heroDescription.hidden = true;
    }

    applyHeaderState(true);

    window.addEventListener("scroll", queueHeaderState, { passive: true });
    window.addEventListener("resize", queueHeaderState);

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", queueHeaderState);
      window.visualViewport.addEventListener("scroll", queueHeaderState);
    }

    if (navToggle) {
      navToggle.addEventListener("click", function () {
        window.setTimeout(queueHeaderState, 20);
      });
    }
  }

  function resetRevealClasses(element) {
    if (!element) {
      return;
    }

    element.classList.remove(
      "reveal-up",
      "reveal-up--delay",
      "reveal-up--delay-2",
      "reveal-up--delay-3",
      "reveal-slide",
      "reveal-slide--delay",
      "reveal-slide--delay-2",
      "reveal-slide--delay-3"
    );
  }

  function setRevealMode(element, mode, delayClass) {
    if (!element) {
      return;
    }

    resetRevealClasses(element);
    element.classList.add(mode);

    if (delayClass) {
      element.classList.add(delayClass);
    }
  }

  function mountHomeIntroThreshold() {
    if (!document.body || document.body.dataset.page !== "home") {
      return;
    }

    var intro = document.querySelector(".brand-intro");
    var shell = intro ? intro.querySelector(".brand-intro__shell") : null;
    var visual = shell ? shell.querySelector(".brand-intro__visual-shell") : null;
    var copy = shell ? shell.querySelector("[data-intro-copy]") : null;
    var aside = shell ? shell.querySelector(".brand-intro__aside") : null;
    var threshold = shell ? shell.querySelector(".brand-intro__threshold") : null;
    var body = shell ? shell.querySelector(".brand-intro__body") : null;

    if (!intro || !shell || !visual || !copy) {
      return;
    }

    intro.classList.add("brand-intro--threshold");
    visual.classList.add("brand-intro__visual-shell--lead");

    setRevealMode(visual, "reveal-slide");
    setRevealMode(copy, "reveal-up", "reveal-up--delay");

    if (aside) {
      setRevealMode(aside, "reveal-up", "reveal-up--delay-2");
    }

    if (!threshold) {
      threshold = document.createElement("div");
      threshold.className = "brand-intro__threshold";
      threshold.setAttribute("aria-hidden", "true");
      threshold.innerHTML =
        '<span class="brand-intro__threshold-line"></span>' +
        '<span class="brand-intro__threshold-mark">石戦</span>' +
        '<span class="brand-intro__threshold-line"></span>';
    }

    if (!body) {
      body = document.createElement("div");
      body.className = "brand-intro__body";
      shell.appendChild(body);
    }

    if (shell.firstElementChild !== threshold) {
      shell.insertBefore(threshold, shell.firstChild);
    }

    if (visual.parentElement !== shell || visual.nextElementSibling !== body) {
      shell.insertBefore(visual, body);
    }

    if (copy.parentElement !== body) {
      body.appendChild(copy);
    }

    if (aside && aside.parentElement !== body) {
      body.appendChild(aside);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    window.requestAnimationFrame(function () {
      mountHomeHeaderHero();
      mountHomeIntroThreshold();
    });
  });
})();

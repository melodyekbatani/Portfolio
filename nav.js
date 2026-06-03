// Mobile hamburger menu — injects a button + slide-out overlay
// using the existing <nav> links. Loads on every page.
(function () {
  const nav = document.querySelector("nav");
  if (!nav) return;

  // Build hamburger button (three-line) — appended to body so it can sit
  // above the overlay via z-index without fighting the nav stacking context.
  const burger = document.createElement("button");
  burger.className = "nav-burger";
  burger.setAttribute("aria-label", "Open menu");
  burger.setAttribute("aria-expanded", "false");
  burger.innerHTML = '<span></span><span></span><span></span>';
  document.body.appendChild(burger);

  // Build overlay: brand block on top + horizontal rule + link list
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  overlay.setAttribute("aria-hidden", "true");

  overlay.innerHTML = `
    <div class="nav-overlay-header">
      <div class="nav-overlay-brand">
        <div class="nav-overlay-name">Melody Ekbatani</div>
        <div class="nav-overlay-role">Product Designer</div>
      </div>
    </div>
    <div class="nav-overlay-rule"></div>
    <div class="nav-overlay-list"></div>
  `;

  const list = overlay.querySelector(".nav-overlay-list");

  // Clone each <a> from nav into the overlay, stripping inline icons
  nav.querySelectorAll("a").forEach((a) => {
    const clone = a.cloneNode(true);
    clone.classList.remove("active");
    if (a.classList.contains("active")) clone.classList.add("active");
    // Remove phosphor icons so menu reads as plain text
    clone.querySelectorAll("i").forEach((i) => i.remove());
    clone.textContent = clone.textContent.trim();
    // Force the Work link to always go straight to the home page's Work
    // section via hash — the home script reads either #work or the
    // localStorage flag and opens the panel pre-positioned.
    if (clone.getAttribute("data-nav") === "work") {
      clone.setAttribute("href", "/#work");
    }
    list.appendChild(clone);
  });

  document.body.appendChild(overlay);

  function setOpen(open) {
    document.body.classList.toggle("nav-open", open);
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    overlay.setAttribute("aria-hidden", String(!open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  burger.addEventListener("click", () => {
    setOpen(!document.body.classList.contains("nav-open"));
  });

  // Close when a link is tapped. Also propagate the Work-panel intent so
  // the home page knows to open the Work panel pre-positioned (same
  // mechanism the desktop nav uses on about.html / explore.html).
  overlay.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      const navKey = a.getAttribute("data-nav");
      if (navKey === "work") {
        try { localStorage.setItem("portfolio-active-panel", "work"); } catch (e) {}
      } else if (navKey === "home") {
        try { localStorage.setItem("portfolio-active-panel", "home"); } catch (e) {}
      }
      setOpen(false);
    });
  });

  // Escape to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
      setOpen(false);
    }
  });
})();

// ─── Case-study "Next project" cards: pause the preview video at a chosen
//     still frame and play it on hover — same feel as the home Work grid.
//     Desktop only; on mobile the card video keeps its autoplay/loop.
(function () {
  const cards = document.querySelectorAll(".cs-next");
  if (!cards.length) return;

  const desktop = window.matchMedia("(min-width: 769px)");
  const stillTime = (v) => parseFloat(v.dataset.stillTime || "4");

  function seekToStill(v) {
    v.pause();
    const t = stillTime(v);
    const apply = () => { try { v.currentTime = Math.min(t, (v.duration || t) - 0.05); } catch (e) {} };
    if (v.readyState >= 1) apply();
    else v.addEventListener("loadedmetadata", apply, { once: true });
  }

  function applyPause() {
    if (!desktop.matches) return;
    cards.forEach((card) => {
      const v = card.querySelector(".cs-next-media video");
      if (!v) return;
      v.removeAttribute("autoplay");
      // Markup is preload="none" so iOS LPM keeps the poster — bump to
      // metadata on desktop so seekToStill has something to seek into.
      if (v.preload !== "auto") v.preload = "metadata";
      v.load();
      seekToStill(v);
    });
  }
  applyPause();
  desktop.addEventListener("change", applyPause);

  cards.forEach((card) => {
    const v = card.querySelector(".cs-next-media video");
    if (!v) return;
    card.addEventListener("mouseenter", () => {
      if (!desktop.matches) return;
      try { v.currentTime = v.hasAttribute("data-play-from-still") ? stillTime(v) : 0; } catch (e) {}
      v.play().catch(() => {});
    });
    card.addEventListener("mouseleave", () => {
      if (!desktop.matches) return;
      seekToStill(v);
    });
  });
})();

// ─── Viewport-gated playback for inline content videos.
//     Markup ships preload="none" + autoplay; autoplay overrides preload and
//     makes the browser fetch every clip up front. Strip autoplay and play a
//     clip only while it's near the viewport, so bytes load on demand and
//     offscreen videos don't burn CPU/data. The .cs-next preview cards keep
//     their own hover logic (above) and are excluded here.
(function () {
  if (!("IntersectionObserver" in window)) return; // graceful: keep poster

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const videos = Array.from(document.querySelectorAll("video[autoplay]"))
    .filter((v) => !v.closest(".cs-next"));
  if (!videos.length) return;

  videos.forEach((v) => v.removeAttribute("autoplay"));
  if (reduceMotion) return; // leave the poster frame in place, never auto-play

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const v = entry.target;
        if (entry.isIntersecting) {
          v.play().catch(() => {}); // preload="none" → load starts here
        } else {
          v.pause();
        }
      });
    },
    { rootMargin: "200px 0px", threshold: 0.1 } // start just before it scrolls in
  );

  videos.forEach((v) => io.observe(v));
})();

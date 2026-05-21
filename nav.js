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

  // Close when a link is tapped
  overlay.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  // Escape to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
      setOpen(false);
    }
  });
})();

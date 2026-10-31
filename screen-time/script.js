(() => {
  "use strict";

  const root = document.querySelector(".pnp");
  if (!root || root.getAttribute("data-pnp-ready") === "1") {
    return;
  }
  root.setAttribute("data-pnp-ready", "1");

  // This is a personal five-hour reminder, not a Selar price deadline.
  const STORAGE_KEY = "pnp_decision_reminder_5h_v1";
  const DURATION_MS = 5 * 60 * 60 * 1000;

  let deadline = 0;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    deadline = saved === null ? 0 : Number(saved);

    if (!Number.isFinite(deadline) || deadline <= 0) {
      deadline = Date.now() + DURATION_MS;
      window.localStorage.setItem(STORAGE_KEY, String(deadline));
    }
  } catch (error) {
    // A storage-disabled browser can still show a countdown for this visit.
    deadline = Date.now() + DURATION_MS;
  }

  function selectAll(selector) {
    return root.querySelectorAll(selector);
  }

  function updateText(selector, value) {
    const nodes = selectAll(selector);
    for (const node of nodes) {
      node.textContent = value;
    }
  }

  function twoDigits(number) {
    return String(number).padStart(2, "0");
  }

  let intervalId = null;

  function tick() {
    const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));

    updateText("[data-pnp-h]", twoDigits(Math.floor(seconds / 3600)));
    updateText("[data-pnp-m]", twoDigits(Math.floor((seconds % 3600) / 60)));
    updateText("[data-pnp-s]", twoDigits(seconds % 60));

    if (seconds > 0) {
      return;
    }

    if (intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }

    updateText("[data-pnp-lab]", "Your five-hour reminder has finished");
    updateText(
      "[data-pnp-msg]",
      "This reminder does not expire the offer or change the price. Selar checkout confirms the amount charged."
    );
  }

  tick();
  if (deadline > Date.now()) {
    intervalId = window.setInterval(tick, 1000);
  }
  document.addEventListener("visibilitychange", tick);

  const sticky = selectAll("[data-pnp-stick]")[0];

  function updateSticky() {
    if (sticky) {
      sticky.classList.toggle("on", window.pageYOffset > 700);
    }
  }

  window.addEventListener("scroll", updateSticky, { passive: true });
  updateSticky();
  // Track Selar-bound CTA clicks without recording an unverified payment.
  // Completed purchases must be tracked by Selar, not this landing page.
  root.addEventListener("click", (event) => {
    const target = event.target;
    const link = target && typeof target.closest === "function"
      ? target.closest('a[data-pnp-btn][href^="https://selar.com/"]')
      : null;
    if (!link || typeof window.fbq !== "function") {
      return;
    }

    window.fbq("trackCustom", "CheckoutClick", {
      content_name: "The Phone Is Not The Problem",
      page_variant: "screen-time"
    });
  });

})();

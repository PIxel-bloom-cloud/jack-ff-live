
// =====================================
// JACK FF LIVE - NAVIGATION SYSTEM
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// MOBILE MENU TOGGLE
menuToggle?.addEventListener("click", () => {

  const isOpen = navLinks?.classList.toggle("open") ?? false;

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.textContent = isOpen ? "✕" : "☰";

});

// CLOSE MENU WHEN NAVIGATION LINK IS CLICKED
navLinks?.querySelectorAll("a").forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

    menuToggle?.setAttribute("aria-expanded", "false");

    if (menuToggle) {
      menuToggle.textContent = "☰";
    }

  });

});

// ACTIVE NAVIGATION HIGHLIGHT
const sections = document.querySelectorAll("main section[id]");

const navigationLinks = navLinks?.querySelectorAll("a") ?? [];

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      navigationLinks.forEach((link) => {

        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );

      });

    }

  });

}, {
  threshold: 0.25
});

sections.forEach((section) => {
  observer.observe(section);
});

// CLOSE MENU WHEN CLICKING OUTSIDE
document.addEventListener("click", (event) => {

  if (
    navLinks &&
    menuToggle &&
    !navLinks.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {

    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";

  }

});

// CLOSE MENU WITH ESCAPE KEY
document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    navLinks?.classList.remove("open");

    menuToggle?.setAttribute("aria-expanded", "false");

    if (menuToggle) {
      menuToggle.textContent = "☰";
    }

  }

});

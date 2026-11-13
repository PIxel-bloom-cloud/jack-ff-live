// Highlight the navigation item for the visible section.
const sections = [...document.querySelectorAll("main section[id]")];
const navItems = [...document.querySelectorAll(".nav-links a")];

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((item) => {
          item.classList.toggle(
            "active",
            item.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  }, { threshold: 0.45 });

  sections.forEach((section) => observer.observe(section));
}

// =====================================
// ACHIEVEMENT IMAGE VIEWER
// =====================================

const achievementCards = document.querySelectorAll(".achievement-card");

const achievementLightbox = document.getElementById("achievementLightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxClose = document.getElementById("lightboxClose");


achievementCards.forEach((card) => {

  card.addEventListener("click", () => {

    const imagePath = card.dataset.image;

    lightboxImage.src = imagePath;

    achievementLightbox.classList.add("active");

    achievementLightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("lightbox-open");

  });

});


function closeAchievementLightbox() {

  achievementLightbox.classList.remove("active");

  achievementLightbox.setAttribute("aria-hidden", "true");

  document.body.classList.remove("lightbox-open");

  lightboxImage.src = "";

}


lightboxClose.addEventListener("click", closeAchievementLightbox);


achievementLightbox.addEventListener("click", (event) => {

  if (event.target === achievementLightbox) {

    closeAchievementLightbox();

  }

});


document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeAchievementLightbox();

  }

});

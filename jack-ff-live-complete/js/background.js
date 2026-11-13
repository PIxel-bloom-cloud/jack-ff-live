
/* JACK FF LIVE - BATTLE ARENA PARTICLES */

const emberContainer = document.getElementById("embers");

if (emberContainer) {
  const mobile = window.matchMedia("(max-width: 600px)").matches;
  const emberCount = mobile ? 22 : 55;

  for (let i = 0; i < emberCount; i++) {
    const ember = document.createElement("span");

    ember.className = "ember";

    const blueOrPurple =
      Math.random() > 0.5 ? "#35aaff" : "#b35aff";

    ember.style.setProperty("--x", `${Math.random() * 100}%`);
    ember.style.setProperty("--size", `${2 + Math.random() * 4}px`);
    ember.style.setProperty("--duration", `${7 + Math.random() * 12}s`);
    ember.style.setProperty("--delay", `${Math.random() * -18}s`);
    ember.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
    ember.style.setProperty("--ember-color", blueOrPurple);

    emberContainer.appendChild(ember);
  }
}

/* Subtle mouse-driven arena depth */
if (
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  let frame;

  window.addEventListener("pointermove", (event) => {
    if (frame) cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 8;

      document.querySelector(".arena-sky")
        ?.style.setProperty("--mouse-x", `${x}px`);

      document.querySelector(".arena-sky")
        ?.style.setProperty("--mouse-y", `${y}px`);
    });
  }, { passive: true });
}

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 45, 250)}ms`;
  observer.observe(item);
});

// Subtle mouse-follow effect for desktop.
const hero = document.querySelector(".hero");

if (hero && window.matchMedia("(pointer:fine)").matches) {
  hero.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    hero.style.setProperty("--mx", `${x * 7}px`);
    hero.style.setProperty("--my", `${y * 5}px`);
  });
}

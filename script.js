// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element, index) => {

  element.style.transitionDelay =
    `${Math.min(index * 35, 220)}ms`;

  revealObserver.observe(element);

});


// ===============================
// NAVBAR BACKGROUND ON SCROLL
// ===============================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.background =
      "rgba(14, 9, 21, 0.95)";

  } else {

    navbar.style.background =
      "rgba(14, 9, 21, 0.82)";

  }

});


// ===============================
// SMOOTH ANCHOR SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", function (event) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});
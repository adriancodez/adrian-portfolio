// ===============================
// CUSTOM CURSOR
// ===============================

const cursorDot = document.createElement("div");
const cursorCircle = document.createElement("div");

cursorDot.classList.add("cursor-dot");
cursorCircle.classList.add("cursor-circle");

document.body.appendChild(cursorDot);
document.body.appendChild(cursorCircle);


let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let circleX = mouseX;
let circleY = mouseY;


// ===============================
// MOUSE POSITION
// ===============================

document.addEventListener("mousemove", (event) => {

  mouseX = event.clientX;
  mouseY = event.clientY;

  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;

});


// ===============================
// SMOOTH CIRCLE FOLLOW
// ===============================

function animateCursor() {

  circleX += (mouseX - circleX) * 0.12;
  circleY += (mouseY - circleY) * 0.12;

  cursorCircle.style.left = `${circleX}px`;
  cursorCircle.style.top = `${circleY}px`;

  requestAnimationFrame(animateCursor);

}

animateCursor();


// ===============================
// HOVER EFFECT
// ===============================

const interactiveElements = document.querySelectorAll(
  "a, button, .service-card, .project, .technology-items span"
);


interactiveElements.forEach((element) => {

  element.addEventListener("mouseenter", () => {

    cursorCircle.classList.add("hovering");

    cursorDot.classList.add("hovering");

  });


  element.addEventListener("mouseleave", () => {

    cursorCircle.classList.remove("hovering");

    cursorDot.classList.remove("hovering");

  });

});


// ===============================
// HIDE CURSOR WHEN MOUSE LEAVES
// ===============================

document.addEventListener("mouseleave", () => {

  cursorDot.style.opacity = "0";

  cursorCircle.style.opacity = "0";

});


document.addEventListener("mouseenter", () => {

  cursorDot.style.opacity = "1";

  cursorCircle.style.opacity = "1";

});


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
// NAVBAR BACKGROUND
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
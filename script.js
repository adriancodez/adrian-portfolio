const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const links = document.querySelectorAll("nav a");
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.style.color = "");
    link.style.color = "#fff";
  });
});

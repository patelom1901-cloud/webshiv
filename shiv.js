// shiv.js
let slider = document.querySelector(".slider-container");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  slider.scrollLeft = scrollLeft - walk;
});

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav ul");
  const navToggle = document.createElement("div");

  navToggle.classList.add("mobile-menu-toggle");
  navToggle.innerHTML = "☰";
  document.querySelector("nav").prepend(navToggle);

  navToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Optional: Contact form alert (basic feedback)
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent real submission
      alert("Thank you for contacting Shiv Shakti Industries!");
      form.reset();
    });
  }
});
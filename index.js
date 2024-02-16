// =====================toggle icon navbar================
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};
// =====================Scroll sections avtive avtive link================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // ===============Sticky navbar===========
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.screenY > 100);
};
// =============================Sticky navbar==================================
menuIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");

// ============================ Scroll ==================================
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img ,.services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal( ".home-content h1 ,.about-img",{ origin: "left" });
ScrollReveal().reveal( ".home-content p ,.about-content",{ origin: "right" });
// ============================ Scroll ==================================

document.addEventListener('DOMContentLoaded', function(){
  const typed = new Typed('.multiple-text', {
    strings: [' Frontend Developer', 'YouTuber', 'UX/UI'], // Text to be typed
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 100, // Backspacing speed in milliseconds
    backDelay: 1000, // Delay before backspacing in milliseconds
    loop: true // Whether to loop the animation
  });
});
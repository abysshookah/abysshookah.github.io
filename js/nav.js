const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const scroll = document.querySelector(".scroll-indicator");

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") + scroll.classList.add("display-none") : navbar.classList.remove("sticky") + scroll.classList.remove("display-none");
}


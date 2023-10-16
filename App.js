// AOS
AOS.init({
  easing: "ease",
  duration: 1000,
  offset: 10,
  once: true,
  mirror: true,
});

//hamburger

const hamburger = document.querySelector(".responsive-menu-icon");
const mobileMenu = document.querySelector(".menu-overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// gallery.js
const images = document.querySelectorAll(".image-container img");
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");

images.forEach((image, index) => {
  console.log("it is working");
  image.addEventListener("click", () => {
    lightbox.innerHTML = `<img src="${image.src}" alt="Image ${index + 1}" />`;
    lightbox.style.display = "block";
    console.log("it is working");
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.style.display = "none";
});
document.querySelector(".service-content").appendChild(lightbox);

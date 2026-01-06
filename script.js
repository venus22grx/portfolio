const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.onclick = () => nav.classList.toggle("active");

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

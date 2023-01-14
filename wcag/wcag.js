// dynamic page navigation

document.querySelectorAll(".local-nav-link").forEach(anchor => {
    anchor.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior:"smooth"
      });
    });
  });

// Nav Scrolling Effect

const li=document.querySelectorAll(".local-nav-link");
const sec=document.querySelectorAll("section");

function activeMenu(){
  let len=sec.length;
  while(--len && window.scrollY +2 < sec[len].offsetTop){}
  li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu)
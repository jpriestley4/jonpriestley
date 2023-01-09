// dynamic page navigation

document.querySelectorAll(".local-nav-link").forEach(anchor => {
    anchor.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior:"smooth"
      });
    });
  });
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

// filter effect

// show/hide typography details on button click

// add a listener to buttons 
var topicButtonElements = document.querySelectorAll(".topic-button");
topicButtonElements.forEach(addTopicButtonListener);

function addTopicButtonListener(topicButtonElement){
  topicButtonElement.addEventListener("click",topicButtonClick);
}

function topicButtonClick(event){
var clickedButton = event.currentTarget;

// Capture first word of clicked button to remove spaces from css selector
let myStr = clickedButton.textContent
let firstWord = myStr.split(" ")[0].toLowerCase()
console.log(firstWord)

// generate the class of the selected topics's details element
var detailsElementCssSelector=".topic-details-" + firstWord
console.log(detailsElementCssSelector)

// find this element
var detailsElement = document.querySelector(detailsElementCssSelector);
console.log(detailsElement)

// remove selected state from all buttons
topicButtonElements.forEach(updateClickedButtonState);

// remove selected state from all details elements
var topicDetailsElements = document.querySelectorAll(".topic-details");
topicDetailsElements.forEach(updateTopicDetailState);

// add selected state just to the clicked button
detailsElement.classList.replace("hide","show");
clickedButton.classList.add("is-success");
}

function updateClickedButtonState(topicButtonElement){
  topicButtonElement.classList.replace("is-success","is-primary");
}

function updateTopicDetailState(topicDetailElement){
  topicDetailElement.classList.add("hide");
}

// slideshow 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}
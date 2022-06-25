// *** ------------SLIDE SHOW----------------- ***//
const showcaseSection = document.querySelector("#showcase-section");
let timeOut = 5000;
let slideIndex = 0;
let autoOn = true;

// ------ Auto Slides Show -------- //
autoSlides();
function autoSlides() {
  timeOut = timeOut - 20;

  if (autoOn == true && timeOut < 0) {
    showSlides();
  }
  setTimeout(autoSlides, 20);
}

// ------ Manual Slides Show ------- //
const slidesPrevBtn = showcaseSection.querySelector(".slideshow-prev-btn");
slidesPrevBtn.addEventListener("click", () => {
  prevSlide();
});

function prevSlide() {
  timeOut = 2000;

  let slides = document.getElementsByClassName("slides-img-container");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex--;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex == 0) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// ----- Next Slides ------- //
const slidesNextBtn = showcaseSection.querySelector(".slideshow-next-btn");
slidesNextBtn.addEventListener("click", () => {
  showSlides();
});

function showSlides() {
  timeOut = 2000;

  let slides = document.getElementsByClassName("slides-img-container");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// *** ------------- END OF SLIDE SHOW ---------------- *** //

// **** -----------BANNER NEWS CONTROL ----------- *** //
// Sub

const subNewsControl = document.querySelectorAll(".sub-news-control");

Array.from(subNewsControl).forEach((newsControl) => {
  newsControl.addEventListener("mouseover", () => {
    const newsImg = newsControl.firstElementChild;
    newsImg.classList.add("img-hover");
    const newsHeading = newsImg.nextElementSibling.firstElementChild;
    newsHeading.classList.add("heading-hover");
  });
  newsControl.addEventListener("mouseout", () => {
    const newsImg = newsControl.firstElementChild;
    newsImg.classList.remove("img-hover");
    const newsHeading = newsImg.nextElementSibling.firstElementChild;
    newsHeading.classList.remove("heading-hover");
  });
});

// HIDE ABOUT PAGE

// NAVBAR CATEGORY
const navCategory = document.querySelector("#nav-category");
navCategory.addEventListener("click", () => {
  const navCatContainer = document.querySelector(".nav-categories-container");
  navCatContainer.classList.toggle("nav-cat-show");
  const caretDown = document.querySelector(".fa-caret-down");
  caretDown.classList.toggle("fa-caret-up");
});

// *** ------- NAVBAR APPEAR ---------- ***//
const navbarMenu = document.querySelector("#navbar-menu");
const navbarMenuLine = document.querySelectorAll(".navbar-menu-line");
const navLinksContainer = document.querySelector(".navbar-links-container");

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
  navbarMenuLine.forEach((line) => {
    line.classList.toggle("show");
  });
  navLinksContainer.classList.toggle("nav-display");
});

// *** ------- END OF NAVBAR APPEAR ---------- ***//
// News Controls
const allNewsControl = document.querySelectorAll(".news-control");

Array.from(allNewsControl).forEach((newsControl) => {
  newsControl.addEventListener("mouseover", (e) => {
    const newsImg = newsControl.firstElementChild.firstElementChild;
    newsImg.firstElementChild.classList.add("news-img-hover");
    const newsHeading = newsImg.nextElementSibling;
    newsHeading.classList.add("news-heading-hover");
  });
  newsControl.addEventListener("mouseout", (e) => {
    const newsImg = newsControl.firstElementChild.firstElementChild;
    const newsHeading = newsImg.nextElementSibling;
    newsHeading.classList.remove("news-heading-hover");
    newsImg.firstElementChild.classList.remove("news-img-hover");
  });
});

// **** -----------NEWS CONTROL ----------- *** //

const allAsideArticleControl = document.querySelectorAll(
  ".aside-article-control"
);
Array.from(allAsideArticleControl).forEach((articleControl) => {
  articleControl.addEventListener("mouseover", (e) => {
    const articleImgContainer = articleControl.firstElementChild;
    articleImgContainer.firstElementChild.classList.add("article-img-hover");
    const articleHeading =
      articleImgContainer.nextElementSibling.firstElementChild;
    articleHeading.classList.add("article-heading-hover");
  });
  articleControl.addEventListener("mouseout", (e) => {
    const articleImgContainer = articleControl.firstElementChild;
    articleImgContainer.firstElementChild.classList.remove("article-img-hover");
    const articleHeading =
      articleImgContainer.nextElementSibling.firstElementChild;
    articleHeading.classList.remove("article-heading-hover");
  });
});

// JUMP TO TOP
const toTop = document.querySelector(".jump-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// END OF JUMP TO TOP

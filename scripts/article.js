// READ MORE
const articleTextHeader = document.querySelectorAll(".text-section-header");
articleTextHeader.forEach((header) => {
  header.addEventListener("click", (e) => {
    // If the button click is the read more text
    if (e.target.classList.contains("read-more-text")) {
      const readMoreHeader = e.target.parentElement;
      readMoreHeader.nextElementSibling.classList.toggle("show-text-content");
      readMoreHeader.firstElementChild.classList.toggle("fa-caret-up");
      e.target.classList.toggle("disappear");
    } else if (e.target.classList.contains("fa")) {
      const readMoreHeader = e.target.parentElement;
      readMoreHeader.nextElementSibling.classList.toggle("show-text-content");
      readMoreHeader.firstElementChild.classList.toggle("fa-caret-up");
      readMoreHeader.firstElementChild.nextElementSibling.classList.toggle(
        "disappear"
      );
    } else {
      const readMoreHeader = e.target;
      readMoreHeader.nextElementSibling.classList.toggle("show-text-content");
      readMoreHeader.firstElementChild.classList.toggle("fa-caret-up");
      readMoreHeader.firstElementChild.nextElementSibling.classList.toggle(
        "disappear"
      );
    }
  });
});

// Like Article
const likeBtnContainer = document.querySelector(".article-review-container");
const likesContainer = likeBtnContainer.querySelector(".number-of-likes");

// AT START IF CLICK COUNT IS 0 OR 1
if (localStorage.clickCount == "1") {
  // Change Color of Container
  likeBtnContainer.classList.add("change-color");

  // Change Thumb
  const likeThumb = likeBtnContainer.firstElementChild;
  likeThumb.classList.remove("fa-thumbs-up");
  likeThumb.classList.add("change-color");
  likeThumb.classList.add("fa-thumbs-down");

  // Change Text from like to liked
  const likeText = likeThumb.nextElementSibling;
  likeText.textContent = "Liked";
}
if (localStorage.clickCount == "0") {
  // Change Color of Container
  likeBtnContainer.classList.remove("change-color");

  // Change Thumb
  const likeThumb = likeBtnContainer.firstElementChild;
  likeThumb.classList.add("fa-thumbs-up");
  likeThumb.classList.remove("change-color");
  likeThumb.classList.remove("fa-thumbs-down");

  // Change Text from like to liked
  const likeText = likeThumb.nextElementSibling;
  likeText.textContent = "Like";
}

// When User Click The Btn
likeBtnContainer.addEventListener("click", () => {
  if (typeof Storage !== "undefined") {
    clickCounter();
    if (localStorage.clickCount == 2) {
      localStorage.clickCount = 0;
    }

    if (localStorage.clickCount == 1) {
      // Change Color of Container
      likeBtnContainer.classList.add("change-color");

      // Change Thumb
      const likeThumb = likeBtnContainer.firstElementChild;
      likeThumb.classList.remove("fa-thumbs-up");
      likeThumb.classList.add("change-color");
      likeThumb.classList.add("fa-thumbs-down");

      // Change Text from like to liked
      const likeText = likeThumb.nextElementSibling;
      likeText.textContent = "Liked";
    } else {
      // Change Color of Container
      likeBtnContainer.classList.remove("change-color");

      // Change Thumb
      const likeThumb = likeBtnContainer.firstElementChild;
      likeThumb.classList.add("fa-thumbs-up");
      likeThumb.classList.remove("change-color");
      likeThumb.classList.remove("fa-thumbs-down");

      // Change Text from like to liked
      const likeText = likeThumb.nextElementSibling;
      likeText.textContent = "Like";
    }
  } else {
    console.log("no");
  }
});

// Function to count clicks
function clickCounter() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickCount) {
      localStorage.clickCount = Number(localStorage.clickCount) + 1;
    } else {
      localStorage.clickCount = 1;
    }
  }
}

// End of Like Article

// TABBED RELATED CONTENT
document.getElementById("relatedArticlePage1").style.display = "grid";

function nextPreTabs(evt, pageNumber) {
  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName("related-article-tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Get all elements with class="tabLinks" and remove the class "active"
  tabLinks = document.getElementsByClassName("related-article-tab-links");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(pageNumber).style.display = "grid";
  evt.currentTarget.className += " active";
}

// END OF TABBED RELATED CONTENT

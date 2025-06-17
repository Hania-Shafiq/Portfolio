
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
  tabLinks.forEach(link => link.classList.remove("active-link"));
  tabContents.forEach(content => content.classList.remove("active-tab"));

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


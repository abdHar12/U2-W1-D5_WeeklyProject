const elementToAnimate = document.querySelector("nav");
const button = document.querySelector("#div-title span");
const buttonToAnimate = document.querySelector("nav li:nth-of-type(5) > span");
const elementToFix = document.querySelector("aside");
const content = document.querySelector("#div-trending-on-medium ");
// let h,
//   de = document.documentElement;

// if (self.innerHeight) {
//   h = window.innerHeight;
// } else if (de && de.clientHeight) {
//   h = de.clientHeight;
// } else if (document.body) {
//   h = document.body.clientHeight;
// }
// elementToFix.style.height =
//   toString(h - content.getBoundingClientRect().bottom) + "px";
// console.log(elementToFix.style.height);
window.addEventListener("scroll", () => {
  const elementBottom = elementToAnimate.getBoundingClientRect().bottom;
  const buttonBottom = button.getBoundingClientRect().bottom;
  const h = document.body.offsetHeight;
  //   const scrollPosition = window.scrollY;

  if (scrollPosition > content.getBoundingClientRect().bottom) {
    elementToFix.classList.add("fixed");
    elementToFix.style.bottom = toString(h - elementBottom) + "px";
  } else {
    elementToFix.classList.remove("fixed");
    elementToFix.style.top = "auto";
  }

  if (elementBottom > buttonBottom) {
    elementToAnimate.classList.add("nav-animated");
    buttonToAnimate.classList.add("button-animated");
  }
  if (elementBottom < buttonBottom) {
    elementToAnimate.classList.remove("nav-animated");
    buttonToAnimate.classList.remove("button-animated");
  }
});

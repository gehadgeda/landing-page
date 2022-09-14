/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

// Define Global Variables
const allSectionsUl = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 */
// build the nav
const createNav = function () {
  sections.forEach((s) => {
    const navIt = `<li><a href='#${s.id}' class='nav__item nav__${s.id}'>${s.id}</a> </li>`;
    allSectionsUl.insertAdjacentHTML("beforeend", navIt);
  });
};
createNav();
// Set sections as active
// Add class 'active' to section when near top of viewport
const observer = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      //console.log(entry.target);
      const activeCase = document.querySelector(`.nav__${entry.target.id}`);
      if (entry.isIntersecting) {
        entry.target.classList.add("your-active-class");

        activeCase.classList.add("active__case");
      } else {
        entry.target.classList.remove("your-active-class");
        activeCase.classList.remove("active__case");
      }
    });
  },
  { root: null, threshold: 0.3, rootMargin: "0px" }
);
sections.forEach((section) => {
  observer.observe(section);
});
// Scroll to section on link click
// Scroll to anchor ID using scrollTO event
//smooth scrolling
document.querySelector(".navbar__menu").addEventListener("click", function (e) {
  e.preventDefault();
  //determine what element originated the event
  if (e.target.classList.contains("nav__item")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

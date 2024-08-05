/* =====show menu===== */
const navbarMenu = document.getElementById("navbar-menu"),
  btnMenu = document.getElementById("btn-menu"),
  btnClose = document.getElementById("btn-close");

/* show menu */
btnMenu.addEventListener("click", () => {
  navbarMenu.classList.add("open-menu");
});
/* hide menu */
btnClose.addEventListener("click", () => {
  navbarMenu.classList.remove("open-menu");
});

/* ===== shadow header ===== */
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/* ===== swiper class ===== */
var bestSwiper = new Swiper(".best__seller-content", {
  spaceBetween: 10,
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: "auto",
  // loop: true,
});

/*=============== ACTIVE LINK ===============*/
// const sections = document.querySelectorAll("section[id]");

// const scrollActive = () => {
//   const scrollDown = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute("id"),
//       sectionsClass = document.querySelector(
//         ".navbar__menu a[href*=" + sectionId + "]"
//       );

//     if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
//       sectionsClass.classList.add("active-link");
//     } else {
//       sectionsClass.classList.remove("active-link");
//     }
//   });
// };
// window.addEventListener("scroll", scrollActive);

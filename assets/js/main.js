/* Menu Show */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    menu = document.getElementById(navId);

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/* Remove menu */
const navLink = document.querySelectorAll(".nav__link"),
  navMenu = document.getElementById("nav-menu");

function linkAction() {
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Scroll Section  Active Header */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active");
    }
  });
}

/* Change Color Header */
window.onscroll = () => {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
};

// Scroll to top
const goToTop = document.getElementById("goToTop");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTop.style.display = "flex";
  } else {
    goToTop.style.display = "none";
  }
}

function topFunction() {
  if ("scrollTo" in window) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

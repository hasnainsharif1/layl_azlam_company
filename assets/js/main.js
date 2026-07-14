/* =========================================================================
   LAYL AZLAM ESTABLISHMENT — MAIN SCRIPT
   Plain vanilla JS, no dependencies. Three jobs:
     1. Mobile navigation toggle (hamburger menu)
     2. Sticky header shadow/background change on scroll
     3. Contact form front-end "thank you" behavior
   ========================================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* -----------------------------------------------------------------
     1. Mobile nav toggle
     ----------------------------------------------------------------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the mobile menu after a nav link is chosen
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* -----------------------------------------------------------------
     2. Sticky header scroll effect
     ----------------------------------------------------------------- */
  var siteHeader = document.getElementById("siteHeader");

  if (siteHeader) {
    var updateHeaderState = function () {
      if (window.scrollY > 12) {
        siteHeader.classList.add("is-scrolled");
      } else {
        siteHeader.classList.remove("is-scrolled");
      }
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
  }

  /* -----------------------------------------------------------------
     3. Contact form — front-end only "thank you" confirmation.
     This is a static site with no backend yet, so the form does not
     actually send anywhere. Once hosting is set up, swap this for a
     real submission service (e.g. Formspree, Netlify Forms, or a
     small custom backend) by pointing the <form> at that service and
     removing (or adapting) the preventDefault() below.
     ----------------------------------------------------------------- */
  var contactForm = document.getElementById("contactForm");
  var formSuccess = document.getElementById("formSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (formSuccess) {
        formSuccess.classList.add("is-visible");
        formSuccess.setAttribute("tabindex", "-1");
        formSuccess.focus();
      }

      contactForm.reset();
    });
  }
});

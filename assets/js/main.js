/* =========================================================================
   LAYL AZLAM ESTABLISHMENT — MAIN SCRIPT
   Plain vanilla JS, no dependencies. Four jobs:
     1. Mobile navigation toggle (hamburger menu)
     2. Sticky header shadow/background change on scroll
     3. Contact form front-end "thank you" behavior
     4. Scroll reveal animations
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

  /* -----------------------------------------------------------------
     4. Scroll reveal animations
     Tags existing elements with .reveal + a direction class, then
     reveals each one (once) via IntersectionObserver as it enters the
     viewport. Skipped entirely under prefers-reduced-motion, and if
     IntersectionObserver isn't supported everything just stays visible.
     ----------------------------------------------------------------- */
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    var arm = function (el, animClass) {
      if (!el) return;
      el.classList.add("reveal", animClass);
      revealObserver.observe(el);
    };

    var armAll = function (selector, animClass) {
      document.querySelectorAll(selector).forEach(function (el) {
        arm(el, animClass);
      });
    };

    armAll(".hero-inner", "reveal-stagger");
    armAll(".page-banner .container", "reveal-up");
    armAll(".section-head", "reveal-down");
    armAll(".divisions-grid", "reveal-stagger");
    armAll(".checklist", "reveal-stagger-left");
    armAll(".cta-band .container", "reveal-scale");
    armAll(".vision-banner", "reveal-up");
    armAll(".vm-grid", "reveal-stagger");
    armAll(".values-grid", "reveal-stagger");
    armAll('img[src*="values-safety"]', "reveal-scale");
    armAll(".blog-grid", "reveal-stagger");
    armAll(".post-hero", "reveal-scale");
    armAll(".author-box", "reveal-up");
    armAll(".contact-info-list", "reveal-left");
    armAll(".form-grid", "reveal-right");
    armAll(".map-frame", "reveal-up");
    armAll(".error-page .container", "reveal-scale");

    // Division sections: media/copy slide in from whichever side they
    // visually sit on (the .reverse layout swaps their order on screen).
    document.querySelectorAll(".division-layout").forEach(function (layout) {
      var isReverse = layout.classList.contains("reverse");
      arm(
        layout.querySelector(".division-media"),
        isReverse ? "reveal-right" : "reveal-left"
      );
      arm(
        layout.querySelector(".division-copy"),
        isReverse ? "reveal-left" : "reveal-right"
      );
    });
  }
});

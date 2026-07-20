/* ================================================================
   KRITRAJ NEXERA — SCRIPT
   Dependency-free. Shared across all pages.
   01. Year stamp
   02. Sticky navbar shadow
   03. Active nav link (by current file)
   04. Mobile menu
   05. Scroll reveal
   06. Back to top
   07. FAQ single-open accordion
   08. Contact form validation
   ================================================================ */
(function () {
  "use strict";

  /* --------------------------------------------------------------
     01. YEAR STAMP
     -------------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --------------------------------------------------------------
     02. STICKY NAVBAR SHADOW
     -------------------------------------------------------------- */
  var header = document.getElementById("site-header");
  function updateHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* --------------------------------------------------------------
     03. ACTIVE NAV LINK — by current filename
     -------------------------------------------------------------- */
  (function setActiveNav() {
    var path = window.location.pathname.replace(/\/$/, "") || "/";
    var map = {
      "/": "home",
      "/services": "services",
      "/process": "process",
      "/faq": "faq",
      "/contact": "contact"
    };
    var key = map[path];
    if (!key) return;
    document.querySelectorAll('[data-nav="' + key + '"]').forEach(function (el) {
      el.classList.add("active");
    });
  })();

  /* --------------------------------------------------------------
     04. MOBILE MENU
     -------------------------------------------------------------- */
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("mobile-menu");

  function closeMenu() {
    if (!toggle || !menu) return;
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }
  function openMenu() {
    if (!toggle || !menu) return;
    menu.classList.add("open");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.contains("open") ? closeMenu() : openMenu();
    });
    menu.querySelectorAll("a").forEach(function (l) {
      l.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  /* --------------------------------------------------------------
     05. SCROLL REVEAL
     -------------------------------------------------------------- */
  var reveals = document.querySelectorAll("[data-reveal]");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    reveals.forEach(function (el) {
      var d = el.getAttribute("data-d");
      if (d) el.style.setProperty("--d", d);
    });
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* --------------------------------------------------------------
     05b. PROCESS TIMELINE LINE ANIMATION
     -------------------------------------------------------------- */
  var timeline = document.getElementById("process-timeline");
  if (timeline && !reduced && "IntersectionObserver" in window) {
    var tlIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("line-drawn");
          tlIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    tlIo.observe(timeline);
  }

  /* --------------------------------------------------------------
     06. BACK TO TOP
     -------------------------------------------------------------- */
  var toTop = document.getElementById("to-top");
  if (toTop) {
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("visible", window.scrollY > 600);
    }, { passive: true });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* --------------------------------------------------------------
     07. FAQ — single open at a time
     -------------------------------------------------------------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  /* --------------------------------------------------------------
     07b. NEWSLETTER FORM
     -------------------------------------------------------------- */
  var newsForms = document.querySelectorAll(".footer-news form");
  newsForms.forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = f.querySelector('input[type="email"]');
      var btn = f.querySelector("button");
      if (!input || !btn) return;
      var val = (input.value || "").trim();
      if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        input.focus();
        input.style.borderColor = "#EF4444";
        setTimeout(function () { input.style.borderColor = ""; }, 2000);
        return;
      }
      fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: val })
      }).catch(function () {});
      var orig = btn.textContent;
      btn.textContent = "Thanks!";
      btn.disabled = true;
      input.value = "";
      setTimeout(function () { btn.textContent = orig; btn.disabled = false; }, 3000);
    });
  });

  /* --------------------------------------------------------------
     08. CONTACT FORM VALIDATION
     -------------------------------------------------------------- */
  var form = document.getElementById("contact-form");
  if (form) {
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showError(field, show) {
      var wrap = field.closest(".form-field");
      if (!wrap) return;
      wrap.classList.toggle("has-error", show);
      field.classList.toggle("invalid", show);
      field.setAttribute("aria-invalid", show ? "true" : "false");
    }

    function validateField(field) {
      var val = (field.value || "").trim();
      var ok = true;
      if (field.required && !val) ok = false;
      if (ok && field.type === "email" && val && !emailRe.test(val)) ok = false;
      showError(field, !ok);
      return ok;
    }

    // Live validation after first blur
    form.querySelectorAll(".form-control").forEach(function (field) {
      field.addEventListener("blur", function () { validateField(field); });
      field.addEventListener("input", function () {
        if (field.closest(".form-field").classList.contains("has-error")) {
          validateField(field);
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = form.querySelectorAll(".form-control");
      var allValid = true;
      fields.forEach(function (field) {
        if (!validateField(field)) allValid = false;
      });

      if (!allValid) {
        var firstInvalid = form.querySelector(".form-control.invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Capture form data
      var data = {};
      fields.forEach(function (field) { data[field.name] = field.value; });

      var wrap = document.getElementById("contact-form-wrap");
      var success = document.getElementById("form-success");
      if (!wrap || !success) return;

      // Submit to backend (silently fail — user still sees success)
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).catch(function () {});

      wrap.style.display = "none";
      success.classList.add("shown");
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* --------------------------------------------------------------
     09. 3D Particle Field (Three.js)
     -------------------------------------------------------------- */
  (function () {
    var canvas = document.getElementById("bg-canvas");
    if (!canvas || typeof THREE === "undefined") return;

    var W = window.innerWidth;
    var H = window.innerHeight;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, W / H, 1, 2000);
    camera.position.z = 600;

    var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    var count = 600;
    var geometry = new THREE.BufferGeometry();
    var positions = new Float32Array(count * 3);
    var base = new Float32Array(count * 3);

    for (var i = 0; i < count * 3; i += 3) {
      var x = (Math.random() - 0.5) * 1800;
      var y = (Math.random() - 0.5) * 1800;
      var z = (Math.random() - 0.5) * 1200;
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;
      base[i] = x;
      base[i + 1] = y;
      base[i + 2] = z;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    var material = new THREE.PointsMaterial({
      color: 0x0051D5,
      size: 2.5,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false,
    });

    var particles = new THREE.Points(geometry, material);
    scene.add(particles);

    var mouseX = 0, mouseY = 0;

    window.addEventListener("resize", function () {
      W = window.innerWidth;
      H = window.innerHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    });

    document.addEventListener("mousemove", function (e) {
      mouseX = (e.clientX / W) * 2 - 1;
      mouseY = (e.clientY / H) * 2 - 1;
    });

    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var seed = Math.random() * 100;

    function animate() {
      requestAnimationFrame(animate);

      if (!prefersReduced) {
        var elapsed = performance.now() * 0.001;

        var rotY = Math.sin(elapsed * 0.05) * 0.1 + mouseX * 0.15;
        var rotX = Math.cos(elapsed * 0.04) * 0.1 - mouseY * 0.15;

        particles.rotation.x += (rotX - particles.rotation.x) * 0.02;
        particles.rotation.y += (rotY - particles.rotation.y) * 0.02;

        var pos = geometry.attributes.position.array;
        for (var i = 0; i < pos.length; i += 3) {
          pos[i] = base[i] + Math.sin(elapsed * 0.15 + base[i] * 0.002 + seed) * 20;
          pos[i + 1] = base[i + 1] + Math.cos(elapsed * 0.12 + base[i + 1] * 0.002 + seed) * 20;
          pos[i + 2] = base[i + 2] + Math.sin(elapsed * 0.1 + i * 0.01 + seed) * 15;
        }
        geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    }

    animate();
  })();
})();

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
     09. Particle connections
     -------------------------------------------------------------- */
  var bgCanvas = document.getElementById("bg-canvas");
  if (bgCanvas) {
    var ctx = bgCanvas.getContext("2d");
    var W, H;
    var nodes = [];
    var nodeCount = 120;
    var connectionDist = 200;
    var mouse = { x: -9999, y: -9999 };

    function resize() {
      W = bgCanvas.width = window.innerWidth;
      H = bgCanvas.height = window.innerHeight;
      initNodes();
    }

    function initNodes() {
      nodes = [];
      for (var i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 1,
        });
      }
    }

    window.addEventListener("resize", resize);
    resize();

    document.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    document.addEventListener("mouseleave", function () {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    var t = 0;
    function draw() {
      t += 0.005;
      ctx.clearRect(0, 0, W, H);

      for (var i = 0; i < nodeCount; i++) {
        var n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        var dx = mouse.x - n.x;
        var dy = mouse.y - n.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          var force = (200 - dist) / 200 * 0.5;
          n.x -= dx / dist * force;
          n.y -= dy / dist * force;
        }
      }

      var pulse = Math.sin(t) * 0.2 + 0.5;

      for (var i = 0; i < nodeCount; i++) {
        for (var j = i + 1; j < nodeCount; j++) {
          var a = nodes[i];
          var b = nodes[j];
          var dx = a.x - b.x;
          var dy = a.y - b.y;
          var dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            var alpha = (1 - dist / connectionDist) * pulse * 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = "rgba(0, 81, 213, " + alpha + ")";
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (var i = 0; i < nodeCount; i++) {
        var n = nodes[i];
        var glow = Math.sin(t * 2 + i) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 81, 213, " + glow * 0.2 + ")";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 81, 213, " + glow * 0.7 + ")";
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }
    draw();
  }
})();

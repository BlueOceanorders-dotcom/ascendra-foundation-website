// Ascendra Foundation — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Quick exit — leaves the site immediately and clears it from back history.
  document.querySelectorAll('.js-quick-exit').forEach(function (btn) {
    btn.addEventListener('click', function () {
      window.location.replace('https://www.weather.com');
    });
  });

  // Keyboard shortcut: pressing Escape three times quickly also triggers quick exit.
  var escCount = 0;
  var escTimer = null;
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    escCount += 1;
    clearTimeout(escTimer);
    escTimer = setTimeout(function () { escCount = 0; }, 800);
    if (escCount >= 3) {
      window.location.replace('https://www.weather.com');
    }
  });
});

(function () {
  var panel = document.getElementById('output-panel');
  var overlay = document.getElementById('output-panel-overlay');
  var title = document.getElementById('output-panel-title');
  var body = document.getElementById('output-panel-body');
  var closeBtn = panel.querySelector('.output-panel-close');
  var activeTrigger = null;

  function getFocusableElements() {
    return panel.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    var focusable = getFocusableElements();
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function open(skill, trigger) {
    // Safe: source content is static HTML generated at build time by Astro
    var source = document.getElementById('output-' + skill);
    if (!source) return;

    activeTrigger = trigger;
    title.textContent = '/' + skill;
    body.innerHTML = source.innerHTML;
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    panel.addEventListener('keydown', trapFocus);
    closeBtn.focus();
  }

  function close() {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    panel.removeEventListener('keydown', trapFocus);
    if (activeTrigger) {
      activeTrigger.focus();
      activeTrigger = null;
    }
  }

  // Trigger buttons
  document.querySelectorAll('.step-output-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      open(btn.dataset.skill, btn);
    });
  });

  // Close button
  closeBtn.addEventListener('click', close);

  // Overlay click closes
  overlay.addEventListener('click', close);

  // Escape key closes
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      close();
    }
  });
})();

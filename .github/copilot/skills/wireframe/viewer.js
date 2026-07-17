/* ═══════════════════════════════════════════════════════════════════
   Intent /wireframe — viewer behavior
   The script every HTML wireframe artifact embeds verbatim, after
   viewer.css. Powers the chrome (view toggle, slideshow, theme) and
   the kit's stateful controls (chips, switches, prototype triggers).

   View model: body[data-view] = grid | slides | proto. Slides pages
   frames in section order with prev/next + arrow keys. Proto makes
   the wireframes themselves the prototype — data-go on real trigger
   elements navigates the flow, and those triggers join the tab order
   (Enter/Space activate) while the mock's unwired controls leave it.
   Proto navigation is FLOW-shaped, not document-shaped: ←/prev steps
   back through visited screens, Restart returns to the flow's start —
   sequential paging belongs to slides, where linear order is real.
   Esc always returns to grid. Both stage views fit the active frame
   to the stage by setting --slide-scale (scale down only, never up);
   the frame page-centers when it can do so clear of the notes rail.

   The reviewer's place is never lost: grid scroll is restored on
   return, a plate click in grid opens THAT frame in slides, and the
   view + frame index mirror into location.hash (#slides-2, #proto-1)
   so any state is linkable. Slide bounds are real — no silent
   wrap-around; prev/next disable at the ends.

   Theme: body[data-theme] = light | dark. The reviewer's own last
   choice (localStorage) wins; then an authored data-theme on <body>
   (a presenter's choice survives the room's OS); then the OS.
   ═══════════════════════════════════════════════════════════════════ */

const frames = [...document.querySelectorAll('.frame')];
let cur = 0;
let gridScroll = 0;
let protoHist = [];   /* visited-screen stack — proto's Back is flow history */
let protoStart = 0;   /* the flow's entry frame, for Restart */

const prevBtn = document.querySelector('[data-prev]');
const nextBtn = document.querySelector('[data-next]');

function view() { return document.body.dataset.view || 'grid'; }

function setView(v) {
  const was = view();
  if (was === 'grid' && v !== 'grid') gridScroll = scrollY;
  if (v === 'proto') { protoHist = []; protoStart = cur; }
  document.body.dataset.view = v;
  document.querySelectorAll('[data-setview]').forEach(b =>
    b.setAttribute('aria-pressed', String(b.dataset.setview === v)));
  /* proto: wired triggers join the tab order; the mock's unwired
     controls leave it — a screen reader meets only what works */
  document.querySelectorAll('[data-go]').forEach(el => {
    if (v === 'proto') el.setAttribute('tabindex', '0');
    else el.removeAttribute('tabindex');
  });
  document.querySelectorAll('.wf :is(button, input, select, textarea, a)').forEach(el => {
    const wired = el.closest('[data-go]') || el.querySelector('[data-go]');
    if (v === 'proto' && !wired) el.setAttribute('tabindex', '-1');
    else if (el.getAttribute('tabindex') === '-1') el.removeAttribute('tabindex');
  });
  /* the plate is a handle only in grid — elsewhere it leaves the tab order */
  document.querySelectorAll('.plate-open').forEach(b =>
    v === 'grid' ? b.removeAttribute('tabindex') : b.setAttribute('tabindex', '-1'));
  if (v !== 'grid') show(cur);
  else requestAnimationFrame(() => scrollTo(0, gridScroll));
  syncHash();
}
function show(i) {
  /* clamp, never wrap — the ends of a flow are information */
  cur = Math.max(0, Math.min(frames.length - 1, i));
  frames.forEach((f, n) => f.classList.toggle('active', n === cur));
  const sec = frames[cur].closest('.board-section')?.dataset.section || '';
  const pos = document.querySelector('.slide-pos');
  if (pos) pos.textContent = `${cur + 1}/${frames.length}`;
  const secLabel = document.querySelector('.slide-section');
  if (secLabel) secLabel.textContent = sec;
  if (prevBtn) prevBtn.disabled = view() === 'proto' ? protoHist.length === 0 : cur === 0;
  if (nextBtn) nextBtn.disabled = cur === frames.length - 1;
  /* notes are per wireframe — surface the active frame's group */
  document.querySelectorAll('.note-group').forEach(g =>
    g.classList.toggle('active', g.dataset.for === frames[cur].id));
  syncHash();
  fit();
}
/* fit the active frame to the stage — scale down only, never up.
   The stage spans the full section; the frame page-centers when its
   scaled width stays clear of the notes rail, else centers in the
   space beside it. */
function fit() {
  const f = frames[cur];
  if (!f || view() === 'grid') return;
  const stage = f.closest('.frame-grid');
  if (!stage) return;
  const rail = view() === 'slides'
    ? f.closest('.board-section')?.querySelector('.note-rail') : null;
  const railW = rail ? rail.offsetWidth : 0;
  const avail = stage.clientWidth - railW;
  f.style.removeProperty('--slide-scale');
  const s = Math.min(1, avail / f.offsetWidth, stage.clientHeight / f.offsetHeight);
  f.style.setProperty('--slide-scale', s.toFixed(4));
  const pageCentered = stage.clientWidth / 2 + (f.offsetWidth * s) / 2
    <= stage.clientWidth - railW;
  f.style.left = pageCentered ? '50%' : `${avail / 2}px`;
}
/* the view + frame index live in the URL, so a review state is linkable */
function syncHash() {
  const v = view();
  const h = v === 'grid' ? '' : `#${v}-${cur + 1}`;
  if (h !== location.hash)
    history.replaceState(null, '', h || location.pathname + location.search);
}
addEventListener('resize', fit);
document.querySelectorAll('[data-setview]').forEach(b =>
  b.addEventListener('click', () => setView(b.dataset.setview)));
prevBtn?.addEventListener('click', () =>
  view() === 'proto' ? histBack() : show(cur - 1));
nextBtn?.addEventListener('click', () => show(cur + 1));
document.querySelector('[data-restart]')?.addEventListener('click', () => {
  protoHist = [];
  show(protoStart);
});
function histBack() {
  if (protoHist.length) show(protoHist.pop());
}
addEventListener('keydown', e => {
  const v = view();
  if (v === 'grid') return;
  if (e.key === 'ArrowLeft') v === 'proto' ? histBack() : show(cur - 1);
  if (e.key === 'ArrowRight' && v === 'slides') show(cur + 1);
  if (e.key === 'Escape') setView('grid');
});

/* a plate is its frame's handle — in grid, clicking it opens that
   frame in slides. The plate's content is wrapped in a real button
   at runtime (the behavior only exists when the viewer does). */
document.querySelectorAll('.frame-plate').forEach(p => {
  const f = p.closest('.frame');
  if (!f) return;
  const b = document.createElement('button');
  b.className = 'plate-open';
  b.setAttribute('title', 'Open in slides');
  while (p.firstChild) b.appendChild(p.firstChild);
  p.appendChild(b);
  b.addEventListener('click', () => {
    if (view() !== 'grid') return;
    cur = frames.indexOf(f);
    setView('slides');
  });
});

/* theme — a stage-mode switch. The reviewer's saved choice wins,
   then the authored data-theme pin, then the OS */
const th = document.querySelector('[data-toggle-theme]');
const thLabel = th?.querySelector('.theme-label');
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.body.dataset.theme = dark ? 'dark' : 'light';
  th?.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  th?.removeAttribute('aria-pressed');
  if (thLabel) thLabel.textContent = dark ? 'Light' : 'Dark';
}
let saved = null;
try { saved = localStorage.getItem('wf-theme'); } catch (e) {}
const authored = document.body.dataset.theme;
setTheme(saved ? saved === 'dark'
  : authored ? authored === 'dark'
  : matchMedia('(prefers-color-scheme: dark)').matches);
th?.addEventListener('click', () => {
  const dark = document.body.dataset.theme !== 'dark';
  setTheme(dark);
  try { localStorage.setItem('wf-theme', dark ? 'dark' : 'light'); } catch (e) {}
});

/* prototype — the real trigger elements navigate the flow;
   Enter/Space work wherever tap does; Back steps through history */
function go(el) {
  if (view() !== 'proto') return;
  const t = document.getElementById(el.dataset.go);
  if (t) {
    protoHist.push(cur);
    show(frames.indexOf(t));
  }
}
document.querySelectorAll('[data-go]').forEach(el => {
  el.addEventListener('click', e => { e.stopPropagation(); go(el); });
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(el); }
  });
});
/* a dead tap acknowledges itself — a brief hairline on the unwired
   control instead of silence */
addEventListener('click', e => {
  if (view() !== 'proto') return;
  const ctl = e.target.closest('.wf :is(button, input, select, textarea, a, .choice)');
  if (!ctl || ctl.closest('[data-go]') || ctl.querySelector('[data-go]')) return;
  ctl.classList.add('dead-tap');
  setTimeout(() => ctl.classList.remove('dead-tap'), 450);
});

/* the annotation layer announces itself */
document.querySelectorAll('.note-marker').forEach(m => {
  m.setAttribute('role', 'img');
  m.setAttribute('aria-label', 'Note ' + m.textContent.trim());
});
document.querySelector('.slide-pos')?.setAttribute('aria-live', 'polite');

/* section index (when present): scroll-spy answers "where am I" */
const indexLinks = [...document.querySelectorAll('.board-index a')];
if (indexLinks.length) {
  const bySection = new Map(indexLinks.map(a => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) {
      indexLinks.forEach(a => a.removeAttribute('aria-current'));
      bySection.get(en.target.id)?.setAttribute('aria-current', 'true');
    }});
  }, { rootMargin: '-10% 0px -70% 0px' });
  document.querySelectorAll('.board-section[id]').forEach(s => spy.observe(s));
}

/* restore a linked review state (#slides-2, #proto-1) */
const linked = location.hash.match(/^#(slides|proto)-(\d+)$/);
if (linked && frames.length) {
  cur = Math.max(0, Math.min(frames.length - 1, +linked[2] - 1));
  setView(linked[1]);
}

/* kit controls are real — chips and switches toggle */
document.querySelectorAll('.wf .chip').forEach(c =>
  c.addEventListener('click', () => c.classList.toggle('active')));
document.querySelectorAll('.wf .switch').forEach(s =>
  s.addEventListener('click', () =>
    s.setAttribute('aria-checked', String(s.getAttribute('aria-checked') !== 'true'))));

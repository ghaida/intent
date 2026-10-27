/* ═══════════════════════════════════════════════════════════════════
   Intent /wireframe — viewer behavior
   The script every HTML wireframe artifact embeds verbatim, after
   viewer.css. Powers the chrome (view toggle, slideshow, theme, notes)
   and the kit's stateful controls (chips, switches, prototype triggers).

   View model: body[data-view] = grid | slides | proto. Grid sets
   full-page screens 3-up, each scaled down to its column (--grid-scale,
   never up). Slides pages frames in section order with prev/next +
   arrow keys. Proto makes the wireframes themselves the prototype —
   data-go on real trigger elements navigates the flow, and those
   triggers join the tab order (Enter/Space activate) while the mock's
   unwired controls leave it. Proto navigation is FLOW-shaped, not
   document-shaped: ←/prev steps back through visited screens, Restart
   returns to the flow's start — sequential paging belongs to slides,
   where linear order is real. Esc always returns to grid. Both stage
   views fit the active frame to the stage by setting --slide-scale
   (scale down only, never up); the frame page-centers when it can do
   so clear of the notes rail.

   The reviewer's place is never lost: grid scroll is restored on
   return, a plate click in grid opens THAT frame in slides, and the
   view + frame index mirror into location.hash (#slides-2, #proto-1)
   so any state is linkable. Slide bounds are real — no silent
   wrap-around; prev/next disable at the ends.

   Notes: body[data-notes] = open | collapsed | hidden. The header's
   sidebar toggle collapses the rail (markers stay); the notes switch
   hides the rail and every marker. Both choices persist like the
   theme. A marker scrolls the open rail to its note; with the rail
   collapsed, or below 900px where there is no rail, it opens its note
   in place. viewer.js builds the rail's title and both header
   switches, so they exist only on a board that carries notes.

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
const rail = document.querySelector('.note-rail');
const markers = [...document.querySelectorAll('.note-marker')];
const motion = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
const sp = n => parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--sp-${n}`));

function view() { return document.body.dataset.view || 'grid'; }

function setView(v) {
  const was = view();
  if (was === 'grid' && v !== 'grid') gridScroll = scrollY;
  if (v === 'proto') { protoHist = []; protoStart = cur; }
  closeNote();
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
  else requestAnimationFrame(() => { scrollTo(0, gridScroll); inView = null; spy(); });
  syncHash();
}
function show(i) {
  /* clamp, never wrap — the ends of a flow are information */
  cur = Math.max(0, Math.min(frames.length - 1, i));
  closeNote();
  frames.forEach((f, n) => f.classList.toggle('active', n === cur));
  const sec = frames[cur].closest('.board-section')?.dataset.section || '';
  const pos = document.querySelector('.slide-pos');
  if (pos) pos.textContent = `${cur + 1}/${frames.length}`;
  const secLabel = document.querySelector('.slide-section');
  if (secLabel) secLabel.textContent = sec;
  if (prevBtn) prevBtn.disabled = view() === 'proto' ? protoHist.length === 0 : cur === 0;
  if (nextBtn) nextBtn.disabled = cur === frames.length - 1;
  /* notes are per wireframe — surface the active frame's section and group */
  document.querySelectorAll('.note-section').forEach(s =>
    s.classList.toggle('active', s.dataset.section === sec));
  document.querySelectorAll('.note-group').forEach(g =>
    g.classList.toggle('active', g.dataset.for === frames[cur].id));
  syncHash();
  fit();
}
/* fit the active frame to the stage — scale down only, never up.
   The stage spans the full main column; the frame page-centers when
   its scaled width stays clear of the notes rail, else centers in the
   space beside it. */
function fit() {
  const f = frames[cur];
  if (!f || view() === 'grid') return;
  const stage = f.closest('.frame-grid');
  if (!stage) return;
  /* the rail's width plus a gutter — a scaled frame never meets its rule */
  const railW = view() === 'slides' && rail?.offsetWidth ? rail.offsetWidth + sp(6) : 0;
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
addEventListener('resize', () => {
  fit();
  if (noteFor) placeNote(noteFor);
});
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
  /* Esc closes an open note before it leaves the view */
  if (e.key === 'Escape' && noteFor) { closeNote(); return; }
  const v = view();
  if (v === 'grid') return;
  if (e.key === 'ArrowLeft') v === 'proto' ? histBack() : show(cur - 1);
  if (e.key === 'ArrowRight' && v === 'slides') show(cur + 1);
  if (e.key === 'Escape') setView('grid');
});

/* grid — each full-page screen keeps its real width and scales down
   to its column. The authored width becomes --frame-w; a resize of
   the column (window, rail collapsed or hidden) rescales it */
const screens = frames.filter(f => !f.querySelector('.vignette'));
screens.forEach(f => {
  const w = parseFloat(f.style.width) || f.querySelector('.wf')?.offsetWidth;
  if (w) f.style.setProperty('--frame-w', `${w}px`);
});
function fitGrid(f) {
  const w = parseFloat(f.style.getPropertyValue('--frame-w'));
  if (view() !== 'grid' || !w || !f.clientWidth) return;
  f.style.setProperty('--grid-scale', Math.min(1, f.clientWidth / w).toFixed(4));
}
const gridFit = new ResizeObserver(entries => entries.forEach(en => fitGrid(en.target)));
screens.forEach(f => gridFit.observe(f));

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
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.body.dataset.theme = dark ? 'dark' : 'light';
  th?.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  th?.removeAttribute('aria-pressed');
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

/* notes — the sidebar toggle collapses the rail; the notes switch
   hides rail and markers together. Both are built here, so a board
   without notes (an idea board) never shows either */
let notesHidden = false;
let railCollapsed = false;
try {
  notesHidden = localStorage.getItem('wf-notes') === 'hidden';
  railCollapsed = localStorage.getItem('wf-notes-rail') === 'collapsed';
} catch (e) {}
let notesBtn = null;
let railTitle = null;
let collapseBtn = null;
if (rail || markers.length) {
  notesBtn = document.createElement('button');
  notesBtn.className = 'notes-toggle';
  const controls = document.querySelector('.board-controls');
  controls?.insertBefore(notesBtn, controls.querySelector('[data-toggle-theme]'));
  notesBtn.addEventListener('click', () => {
    notesHidden = !notesHidden;
    try { localStorage.setItem('wf-notes', notesHidden ? 'hidden' : 'shown'); } catch (e) {}
    setNotes();
  });
}
if (rail) {
  rail.setAttribute('aria-label', 'Notes');
  railTitle = document.createElement('h2');
  railTitle.className = 'note-rail-title';
  railTitle.textContent = 'Notes';
  rail.prepend(railTitle);
  /* the sidebar toggle joins the header's tools, last, above the rail */
  collapseBtn = document.createElement('button');
  collapseBtn.className = 'note-collapse';
  document.querySelector('.board-controls')?.append(collapseBtn);
  collapseBtn.addEventListener('click', () => {
    railCollapsed = !railCollapsed;
    try { localStorage.setItem('wf-notes-rail', railCollapsed ? 'collapsed' : 'open'); } catch (e) {}
    setNotes();
  });
}
function setNotes() {
  if (!notesBtn) return;
  document.body.dataset.notes = notesHidden ? 'hidden' : railCollapsed ? 'collapsed' : 'open';
  notesBtn.setAttribute('aria-label', notesHidden ? 'Show notes' : 'Hide notes');
  collapseBtn?.setAttribute('aria-expanded', String(!railCollapsed));
  collapseBtn?.setAttribute('aria-label', railCollapsed ? 'Expand notes panel' : 'Collapse notes panel');
  closeNote();
  fit();
  inView = null; /* a rail that opens again finds the section in view */
  spy();
}

/* a note opened in place: one popover, beside its marker. A click
   anywhere else closes it */
let noteFor = null;
const pop = document.createElement('div');
pop.className = 'note-pop';
pop.hidden = true;
pop.tabIndex = -1;
pop.setAttribute('role', 'dialog');
document.body.appendChild(pop);
addEventListener('click', e => {
  if (noteFor && !pop.contains(e.target)) closeNote();
});

/* a marker finds its note: same frame, same number */
function noteOf(m) {
  const id = m.closest('.frame')?.id;
  const group = [...document.querySelectorAll('.note-group')].find(g => g.dataset.for === id);
  const n = m.textContent.trim();
  const note = group && [...group.querySelectorAll('p')].find(p =>
    p.querySelector('.note-num')?.textContent.trim() === n);
  return { group, note };
}
/* with the rail open, a marker scrolls the rail to its note and tints
   it; with the rail collapsed or absent, it opens the note in place */
function openNote(m) {
  const { group, note } = noteOf(m);
  if (!note) return;
  if (rail?.offsetWidth && document.body.dataset.notes === 'open') {
    rail.scrollTo({ top: note.offsetTop - railTitle.offsetHeight - sp(3), behavior: motion });
    note.classList.add('note-target');
    setTimeout(() => note.classList.remove('note-target'), 1600);
    return;
  }
  if (noteFor === m) { closeNote(); return; }
  closeNote();
  pop.replaceChildren(
    ...[group.querySelector('.note-frame'), note].filter(Boolean).map(el => el.cloneNode(true)));
  pop.setAttribute('aria-label', m.getAttribute('aria-label'));
  pop.hidden = false;
  noteFor = m;
  placeNote(m);
  pop.focus({ preventScroll: true });
}
/* in place: below the marker, or above it when the viewport runs out;
   always inside the viewport's gutters */
function placeNote(m) {
  const r = m.getBoundingClientRect();
  const gap = sp(2), edge = sp(4);
  let left = Math.min(Math.max(edge, r.left), innerWidth - pop.offsetWidth - edge);
  let top = r.bottom + gap;
  if (top + pop.offsetHeight > innerHeight - edge && r.top - gap - pop.offsetHeight > edge)
    top = r.top - gap - pop.offsetHeight;
  pop.style.left = `${left + scrollX}px`;
  pop.style.top = `${top + scrollY}px`;
}
function closeNote() {
  if (!noteFor) return;
  const m = noteFor;
  const hadFocus = pop.contains(document.activeElement);
  noteFor = null;
  pop.hidden = true;
  if (hadFocus) m.focus({ preventScroll: true });
}

/* the annotation layer announces itself — markers are buttons */
markers.forEach(m => {
  m.setAttribute('role', 'button');
  m.setAttribute('tabindex', '0');
  m.setAttribute('aria-label', 'Note ' + m.textContent.trim());
  m.addEventListener('click', e => { e.stopPropagation(); openNote(m); });
  m.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openNote(m); }
  });
});
document.querySelector('.slide-pos')?.setAttribute('aria-live', 'polite');

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

/* where am I: the section in view is the last one whose top has
   passed the upper third of the viewport, or the last section once the
   page bottoms out, so a short final section still counts. The section
   index (when present) marks it; in grid the open rail follows it to
   that section's notes */
const sections = [...document.querySelectorAll('.board-section')];
const indexLinks = [...document.querySelectorAll('.board-index a')];
let inView = null;
function spy() {
  if (view() !== 'grid' || !sections.length) return;
  const bottomed = innerHeight + scrollY >= document.documentElement.scrollHeight - 1;
  const s = bottomed ? sections[sections.length - 1]
    : sections.filter(el => el.getBoundingClientRect().top <= innerHeight / 3).pop() || sections[0];
  if (s === inView) return;
  inView = s;
  indexLinks.forEach(a => a.getAttribute('href') === `#${s.id}`
    ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'));
  if (rail?.offsetWidth && document.body.dataset.notes === 'open') {
    const notes = [...rail.querySelectorAll('.note-section')]
      .find(n => n.dataset.section === s.dataset.section);
    if (notes) rail.scrollTo({ top: notes.offsetTop - railTitle.offsetHeight, behavior: motion });
  }
}
addEventListener('scroll', () => requestAnimationFrame(spy), { passive: true });
setNotes();
spy();

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

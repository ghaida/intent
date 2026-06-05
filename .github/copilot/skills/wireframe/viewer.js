/* ═══════════════════════════════════════════════════════════════════
   Intent /wireframe — viewer behavior
   The script every HTML wireframe artifact embeds verbatim, after
   viewer.css. Powers the chrome (view toggle, slideshow, theme) and
   the kit's stateful controls (chips, switches, prototype triggers).

   View model: body[data-view] = grid | slides | proto. Slides pages
   frames in section order; proto makes the wireframes themselves the
   prototype — data-go on real trigger elements navigates the flow.
   Esc always returns to grid.

   Theme: body[data-theme] = light | dark, initialized from the OS
   preference. Set on documentElement too so :root-scoped variables
   theme along with body-scoped ones.
   ═══════════════════════════════════════════════════════════════════ */

const frames = [...document.querySelectorAll('.frame')];
let cur = 0;

function setView(v) {
  document.body.dataset.view = v;
  document.querySelectorAll('[data-setview]').forEach(b =>
    b.setAttribute('aria-pressed', String(b.dataset.setview === v)));
  if (v !== 'grid') show(cur);
}
function show(i) {
  cur = (i + frames.length) % frames.length;
  frames.forEach((f, n) => f.classList.toggle('active', n === cur));
  const sec = frames[cur].closest('.board-section')?.dataset.section || '';
  const pos = document.querySelector('.slide-pos');
  if (pos) pos.textContent =
    `${cur + 1}/${frames.length}${sec ? ' · ' + sec : ''}`;
}
document.querySelectorAll('[data-setview]').forEach(b =>
  b.addEventListener('click', () => setView(b.dataset.setview)));
document.querySelector('[data-prev]')?.addEventListener('click', () => show(cur - 1));
document.querySelector('[data-next]')?.addEventListener('click', () => show(cur + 1));
addEventListener('keydown', e => {
  const v = document.body.dataset.view;
  if (v === 'grid') return;
  if (v === 'slides' && e.key === 'ArrowLeft') show(cur - 1);
  if (v === 'slides' && e.key === 'ArrowRight') show(cur + 1);
  if (e.key === 'Escape') setView('grid');
});

/* theme — a stage-mode switch, initialized from the OS */
const th = document.querySelector('[data-toggle-theme]');
const thLabel = th?.querySelector('.theme-label');
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.body.dataset.theme = dark ? 'dark' : 'light';
  th?.setAttribute('aria-pressed', String(dark));
  if (thLabel) thLabel.textContent = dark ? 'Light' : 'Dark';
}
setTheme(matchMedia('(prefers-color-scheme: dark)').matches);
th?.addEventListener('click', () =>
  setTheme(document.body.dataset.theme !== 'dark'));

/* prototype — the real trigger elements navigate the flow */
document.querySelectorAll('[data-go]').forEach(el =>
  el.addEventListener('click', () => {
    if (document.body.dataset.view !== 'proto') return;
    const t = document.getElementById(el.dataset.go);
    if (t) show(frames.indexOf(t));
  }));

/* kit controls are real — chips and switches toggle */
document.querySelectorAll('.wf .chip').forEach(c =>
  c.addEventListener('click', () => c.classList.toggle('active')));
document.querySelectorAll('.wf .switch').forEach(s =>
  s.addEventListener('click', () =>
    s.setAttribute('aria-checked', String(s.getAttribute('aria-checked') !== 'true'))));

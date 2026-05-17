/**
 * app.js
 * ------
 * Rendering, stats, countdown timer, and nav for the Karnataka Promise Tracker.
 * Depends on PROMISES_DATA defined in promises.js.
 */

// ── CONSTANTS ────────────────────────────────────────────────────────────────
const OATH_DATE = new Date('2023-05-20T12:30:00+05:30');
const TERM_END  = new Date('2028-05-20T12:30:00+05:30');

// ── UTILITIES ─────────────────────────────────────────────────────────────────
function pad(n) { return String(n).padStart(2, '0'); }

// ── TIMER ────────────────────────────────────────────────────────────────────
function updateTimer() {
  const now = new Date();

  document.getElementById('today-date').textContent =
    now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const daysIn = Math.max(1, Math.floor((now - OATH_DATE) / 86400000) + 1);
  document.getElementById('days-in-office').textContent = daysIn + (daysIn === 1 ? ' day' : ' days');

  const daysLeft = Math.max(0, Math.floor((TERM_END - now) / 86400000));
  document.getElementById('days-remaining').textContent = daysLeft + ' days';

  const diff = TERM_END - now;
  if (diff > 0) {
    const yrs  = Math.floor(diff / (365.25 * 24 * 3600 * 1000));
    const rem1 = diff % (365.25 * 24 * 3600 * 1000);
    const mths = Math.floor(rem1 / (30.44 * 24 * 3600 * 1000));
    const rem2 = rem1 % (30.44 * 24 * 3600 * 1000);
    const days = Math.floor(rem2 / (24 * 3600 * 1000));
    const rem3 = rem2 % (24 * 3600 * 1000);
    const hrs  = Math.floor(rem3 / (3600 * 1000));
    const mins = Math.floor((rem3 % (3600 * 1000)) / 60000);
    const secs = Math.floor((rem3 % 60000) / 1000);

    document.getElementById('t-years').textContent  = pad(yrs);
    document.getElementById('t-months').textContent = pad(mths);
    document.getElementById('t-days').textContent   = pad(days);
    document.getElementById('t-hours').textContent  = pad(hrs);
    document.getElementById('t-mins').textContent   = pad(mins);
    document.getElementById('t-secs').textContent   = pad(secs);
  } else {
    ['t-years','t-months','t-days','t-hours','t-mins','t-secs']
      .forEach(id => { document.getElementById(id).textContent = '00'; });
  }
}

// ── RENDER PROMISES ──────────────────────────────────────────────────────────
let globalCount = 0;

function renderPromises() {
  const container = document.getElementById('promises-container');

  PROMISES_DATA.forEach(cat => {
    const section = document.createElement('section');
    section.className = 'category';
    section.id = cat.id;

    // --- Category header ---
    const header = document.createElement('div');
    header.className = 'cat-header';
    header.onclick = function() { toggleCat(this); };

    const icon = document.createElement('span');
    icon.className = 'cat-icon';
    icon.textContent = cat.icon;

    const titleWrap = document.createElement('div');
    titleWrap.className = 'cat-title-wrap';
    const h2 = document.createElement('h2');
    h2.className = 'cat-title';
    h2.textContent = cat.title;
    const sub = document.createElement('p');
    sub.className = 'cat-subtitle';
    sub.textContent = cat.subtitle;
    titleWrap.appendChild(h2);
    titleWrap.appendChild(sub);

    const stats = document.createElement('div');
    stats.className = 'cat-stats';
    const badge = document.createElement('span');
    badge.className = 'badge badge-pending';
    badge.textContent = `${cat.items.length} Promises`;
    stats.appendChild(badge);

    const toggleBtn = document.createElement('span');
    toggleBtn.className = 'cat-toggle';
    toggleBtn.textContent = '▾';

    header.appendChild(icon);
    header.appendChild(titleWrap);
    header.appendChild(stats);
    header.appendChild(toggleBtn);
    section.appendChild(header);

    // --- Promise list ---
    const ul = document.createElement('ul');
    ul.className = 'promise-list';

    cat.items.forEach(promiseObj => {
      globalCount++;
      const li = document.createElement('li');

      let statusClass = 'pending';
      let statusText  = 'Pending';
      let noteClass   = 'note-pending';

      if (promiseObj.status.includes('Fulfilled')) {
        statusClass = 'done';
        statusText  = promiseObj.status;
        noteClass   = 'note-done';
      } else if (promiseObj.status.includes('In Progress')) {
        statusClass = 'inprogress';
        statusText  = 'In Progress';
        noteClass   = 'note-progress';
      } else if (promiseObj.status.includes('Evaded')) {
        statusClass = 'evaded';
        statusText  = 'Evaded';
        noteClass   = 'note-evaded';
      }

      li.className = `promise-item ${statusClass}`;

      const num = document.createElement('span');
      num.className = 'promise-num';
      num.textContent = globalCount;

      const textContainer = document.createElement('div');
      textContainer.className = 'promise-text-container';

      const textSpan = document.createElement('span');
      textSpan.className = 'promise-text';
      textSpan.innerHTML = promiseObj.text;
      textContainer.appendChild(textSpan);

      // Normalise updates array (support inline link fields OR updates array)
      const updatesList = promiseObj.updates ? [...promiseObj.updates] : [];
      if (promiseObj.link && promiseObj.link !== 'N/A' && updatesList.length === 0) {
        updatesList.push({
          link: promiseObj.link,
          sourceName: promiseObj.sourceName,
          sourceDate: promiseObj.sourceDate,
          sourceHeading: promiseObj.sourceHeading
        });
      }

      updatesList.forEach(update => {
        if (update.link && update.link !== 'N/A') {
          const updateBox = document.createElement('div');
          updateBox.className = 'update-box';

          if (update.sourceHeading) {
            const desc = document.createElement('div');
            desc.className = 'update-desc';
            desc.textContent = update.sourceHeading;
            updateBox.appendChild(desc);
          }

          const svgIcon = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7"/></svg>`;

          const linkNode = document.createElement('a');
          linkNode.href   = update.link;
          linkNode.target = '_blank';
          linkNode.rel    = 'noopener noreferrer';
          linkNode.className = 'promise-link';
          linkNode.innerHTML = `${svgIcon} ${update.sourceName || 'Source'}${update.sourceDate ? ' · ' + update.sourceDate : ''}`;

          updateBox.appendChild(linkNode);
          textContainer.appendChild(updateBox);
        }
      });

      const tag = document.createElement('span');
      tag.className = `note-tag ${noteClass}`;
      tag.textContent = statusText;

      li.appendChild(num);
      li.appendChild(textContainer);
      li.appendChild(tag);
      ul.appendChild(li);
    });

    section.appendChild(ul);
    container.appendChild(section);
  });
}

// ── STATS ────────────────────────────────────────────────────────────────────
function updateStats() {
  const listItems  = document.querySelectorAll('.promise-item');
  const doneList   = document.querySelectorAll('.promise-item.done');
  const inprogList = document.querySelectorAll('.promise-item.inprogress');
  const evadedList = document.querySelectorAll('.promise-item.evaded');

  const pendingCount = listItems.length - doneList.length - inprogList.length - evadedList.length;
  const totalCount   = listItems.length;
  const pct          = totalCount > 0 ? Math.round((doneList.length / totalCount) * 100) : 0;

  document.getElementById('stat-total').textContent    = totalCount;
  document.getElementById('stat-done').textContent     = doneList.length;
  document.getElementById('stat-progress').textContent = inprogList.length;
  document.getElementById('stat-evaded').textContent   = evadedList.length;
  document.getElementById('stat-pending').textContent  = pendingCount;
  document.getElementById('stat-pct').textContent      = pct + '%';

  document.getElementById('bar-done').style.width   = (doneList.length   / totalCount * 100) + '%';
  document.getElementById('bar-inprog').style.width = (inprogList.length / totalCount * 100) + '%';
  document.getElementById('bar-evaded').style.width = (evadedList.length / totalCount * 100) + '%';

  // Per-category badges
  document.querySelectorAll('.category').forEach(catEl => {
    const items   = catEl.querySelectorAll('.promise-item');
    const catDone = catEl.querySelectorAll('.promise-item.done');
    const catProg = catEl.querySelectorAll('.promise-item.inprogress');
    const catEvad = catEl.querySelectorAll('.promise-item.evaded');
    const badge   = catEl.querySelector('.cat-stats .badge');
    if (!badge) return;

    if (catDone.length === items.length) {
      badge.className   = 'badge badge-done';
      badge.textContent = '✓ All ' + items.length + ' done';
    } else if (catEvad.length > 0 && catDone.length + catEvad.length === items.length) {
      badge.className   = 'badge badge-evaded';
      badge.textContent = catEvad.length + ' evaded';
    } else if (catDone.length > 0 || catProg.length > 0 || catEvad.length > 0) {
      badge.className   = 'badge badge-progress';
      badge.textContent = catDone.length + '/' + items.length + ' done';
    } else {
      badge.className   = 'badge badge-pending';
      badge.textContent = items.length + ' Promises';
    }
  });
}

// ── MOBILE NAV ───────────────────────────────────────────────────────────────
function toggleMobileNav() {
  const trigger  = document.getElementById('nav-trigger');
  const dropdown = document.getElementById('nav-dropdown');
  const isOpen   = dropdown.classList.contains('open');
  if (isOpen) {
    dropdown.classList.remove('open');
    trigger.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  } else {
    dropdown.classList.add('open');
    trigger.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
  }
}

function closeMobileNav() {
  const trigger  = document.getElementById('nav-trigger');
  const dropdown = document.getElementById('nav-dropdown');
  dropdown.classList.remove('open');
  trigger.classList.remove('open');
  trigger.setAttribute('aria-expanded', 'false');
}

// Close mobile nav on outside click
document.addEventListener('click', function(e) {
  const nav = document.querySelector('.cat-nav-mobile');
  if (nav && !nav.contains(e.target)) closeMobileNav();
});

// ── ACCORDION ────────────────────────────────────────────────────────────────
function toggleCat(header) {
  header.classList.toggle('collapsed');
  const list = header.nextElementSibling;
  if (list && list.classList.contains('promise-list')) {
    list.classList.toggle('collapsed');
  }
}

// ── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderPromises();
  updateStats();
  updateTimer();
  setInterval(updateTimer, 1000);
});

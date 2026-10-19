/* Поведение страницы: язык, тема, навигация, форма, отчёт Allure, жуки. Тексты лежат в i18n.js. */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var darkQ = window.matchMedia('(prefers-color-scheme: dark)');
  var lang = 'ru';
  function t(k) { return (I18N[lang] && I18N[lang][k]) || I18N.ru[k] || ''; }
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  /* Язык */
  function applyLang(next) {
    lang = I18N[next] ? next : 'ru';
    root.lang = lang;
    document.title = t('doc_title');
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) { el.setAttribute('title', t(el.getAttribute('data-i18n-title'))); });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { el.setAttribute('alt', t(el.getAttribute('data-i18n-alt'))); });
    document.querySelectorAll('[data-i18n-href]').forEach(function (el) { el.setAttribute('href', t(el.getAttribute('data-i18n-href'))); });
    document.getElementById('lang-toggle').setAttribute('lang', lang === 'ru' ? 'en' : 'ru');
    resetReport();
  }
  document.getElementById('lang-toggle').addEventListener('click', function () {
    var next = lang === 'ru' ? 'en' : 'ru'; applyLang(next); store('lang', next);
  });

  /* Тема */
  var savedTheme = load('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') root.setAttribute('data-theme', savedTheme);
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var cur = root.getAttribute('data-theme') || (darkQ.matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next); store('theme', next);
  });

  /* Копирование адреса */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var key = btn.getAttribute('data-label');
      var done = function () { btn.textContent = t('copied'); setTimeout(function () { btn.textContent = t(key); }, 1800); };
      var fallback = function () { btn.textContent = t('copy_fail'); };
      try { navigator.clipboard.writeText(btn.getAttribute('data-copy')).then(done, fallback); } catch (e) { fallback(); }
    });
  });

  /* Форма */
  document.getElementById('lead-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('f-name'), contact = document.getElementById('f-contact');
    var status = document.getElementById('f-status');
    if (!name.value.trim()) { status.textContent = t('err_name'); name.focus(); return; }
    if (!contact.value.trim()) { status.textContent = t('err_contact'); contact.focus(); return; }
    var form = e.currentTarget, btn = form.querySelector('.send');
    var data = Object.fromEntries(new FormData(form).entries());
    btn.disabled = true; status.textContent = t('sending');
    fetch(form.action, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return r.ok && j.success !== false; }); })
      .then(function (ok) { status.textContent = t(ok ? 'sent' : 'send_error'); if (ok) form.reset(); })
      .catch(function () { status.textContent = t('send_offline'); })
      .then(function () { btn.disabled = false; });
  });

  /* Прогон теста в отчёте */
  var runBtn = document.getElementById('run-btn'), runStatus = document.getElementById('run-status');
  var stepEls = Array.prototype.slice.call(document.querySelectorAll('#steps li'));
  var runTimer = null;
  function resetReport() {
    clearTimeout(runTimer);
    stepEls.forEach(function (li) { li.className = ''; });
    runBtn.disabled = false; runBtn.textContent = t('run');
    runStatus.className = 'report-status'; runStatus.textContent = t('rep_idle');
  }
  runBtn.addEventListener('click', function () {
    resetReport();
    runBtn.disabled = true; runStatus.textContent = t('running');
    var i = 0, delay = reduce.matches ? 0 : 650;
    (function next() {
      if (i > 0) stepEls[i - 1].className = 'ok';
      if (i >= stepEls.length) {
        runBtn.disabled = false; runBtn.textContent = t('rerun');
        runStatus.className = 'report-status done'; runStatus.textContent = t('rep_done');
        return;
      }
      stepEls[i].className = 'run'; i++;
      runTimer = setTimeout(next, delay);
    })();
  });

  /* Наверх и прогресс прокрутки */
  var toTop = document.getElementById('to-top'), bar = document.getElementById('progress');
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var navLinks = {};
  document.querySelectorAll('.nav a').forEach(function (a) { navLinks[a.getAttribute('href').slice(1)] = a; });
  var navFor = { tools: 'experience' };
  var ticking = false;
  function onScroll() {
    ticking = false;
    var y = window.scrollY, vh = window.innerHeight, max = document.documentElement.scrollHeight - vh;
    toTop.hidden = y < vh * 0.9;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    /* Текущий раздел: последний, чей верх прошёл линию на трети экрана; у самого низа — последний */
    var current = null, line = vh * 0.33;
    sections.forEach(function (s) { if (s.getBoundingClientRect().top <= line) current = s.id; });
    if (y >= max - 4) current = sections[sections.length - 1].id;
    var id = current && (navFor[current] || current);
    Object.keys(navLinks).forEach(function (k) {
      if (k === id) navLinks[k].setAttribute('aria-current', 'true'); else navLinks[k].removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener('resize', onScroll);
  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduce.matches ? 'auto' : 'smooth' });
    document.querySelector('.brand').focus({ preventScroll: true });
  });

  /* Счётчик Bug Reports: cookie (Secure, SameSite=Strict, только число), запасной вариант localStorage */
  var COOKIE = 'bug_reports', MAXN = 999999;
  function readCount() {
    var n = null;
    try { var m = document.cookie.match(/(?:^|;\s*)bug_reports=(\d{1,6})(?:;|$)/); if (m) n = parseInt(m[1], 10); } catch (e) {}
    if (n === null) { var v = load(COOKIE); if (v && /^\d{1,6}$/.test(v)) n = parseInt(v, 10); }
    return n === null ? 0 : Math.min(n, MAXN);
  }
  function writeCount(n) {
    n = Math.max(0, Math.min(MAXN, n | 0));
    try { document.cookie = COOKIE + '=' + n + '; Max-Age=31536000; Path=/; SameSite=Strict' + (location.protocol === 'https:' ? '; Secure' : ''); } catch (e) {}
    store(COOKIE, String(n));
  }
  var count = readCount();
  var counterBtn = document.getElementById('bug-counter'), countEl = document.getElementById('bug-count');
  countEl.textContent = count;
  function bumpCount() {
    count = Math.min(MAXN, count + 1); writeCount(count); countEl.textContent = count;
    counterBtn.classList.remove('bump'); void counterBtn.offsetWidth; counterBtn.classList.add('bump');
  }
  var toastEl = null;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; toastEl.setAttribute('role', 'status'); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.hidden = false;
    clearTimeout(toastEl._t); toastEl._t = setTimeout(function () { toastEl.hidden = true; }, 2200);
  }

  /* Жуки: ползут по краям экрана, в том числе по диагонали. Не больше трёх одновременно. */
  var MAX_BUGS = 3, bugs = [], timer = null;
  var bugMarkup = '<svg viewBox="-20 -20 40 40" aria-hidden="true">' +
    '<g class="legs legs-a"><path d="M-6 -5 L-13 -10"/><path d="M6 2 L14 2"/><path d="M-6 8 L-12 15"/></g>' +
    '<g class="legs legs-b"><path d="M6 -5 L13 -10"/><path d="M-6 2 L-14 2"/><path d="M6 8 L12 15"/></g>' +
    '<path class="legs" d="M-2 -14 L-6 -19 M2 -14 L6 -19"/>' +
    '<circle class="body" cx="0" cy="-11" r="4.2"/><ellipse class="body" cx="0" cy="3" rx="7.8" ry="10.5"/>' +
    '<path class="seam" d="M0 -6.5 L0 13"/><circle class="spot" cx="-3.6" cy="0" r="1.5"/><circle class="spot" cx="3.6" cy="5" r="1.5"/></svg>';
  var splatMarkup = '<svg viewBox="-28 -28 56 56" aria-hidden="true">' +
    '<path d="M-3 -16 C4 -18 6 -10 12 -12 C18 -13 17 -4 14 0 C20 4 15 11 9 10 C7 17 -2 18 -5 12 C-11 16 -17 10 -13 4 C-19 0 -16 -8 -10 -7 C-11 -13 -7 -16 -3 -16 Z" opacity=".85"/>' +
    '<circle cx="-19" cy="-12" r="2"/><circle cx="20" cy="-9" r="1.6"/><circle cx="17" cy="17" r="2.2"/>' +
    '<circle class="drop" cx="-2" cy="-2" r="2.4"/><circle class="drop" cx="5" cy="4" r="1.6"/><circle class="drop" cx="-21" cy="14" r="1.6"/></svg>';

  function rand(a, b) { return a + Math.random() * (b - a); }
  function schedule(delay) { clearTimeout(timer); timer = setTimeout(autoSpawn, delay); }
  function autoSpawn() {
    if (!document.hidden && !reduce.matches && bugs.length < MAX_BUGS) spawn();
    schedule(rand(20000, 40000));
  }
  /* Точка у края: полоса шириной 18% экрана вдоль любой стороны, ниже шапки */
  function edgePoint(W, H, top) {
    var bx = Math.max(60, W * 0.18), by = Math.max(60, (H - top) * 0.2);
    switch (Math.floor(Math.random() * 4)) {
      case 0: return [rand(24, bx), rand(top + 24, H - 24)];
      case 1: return [rand(W - bx, W - 24), rand(top + 24, H - 24)];
      case 2: return [rand(24, W - 24), rand(top + 24, top + by)];
      default: return [rand(24, W - 24), rand(H - by, H - 24)];
    }
  }
  function offscreen(p, W, H, top) {
    var d = [p[0], W - p[0], p[1] - top, H - p[1]], k = d.indexOf(Math.min.apply(null, d)), o = 50;
    if (k === 0) return [-o, p[1] + rand(-60, 60)];
    if (k === 1) return [W + o, p[1] + rand(-60, 60)];
    if (k === 2) return [p[0] + rand(-60, 60), -o];
    return [p[0] + rand(-60, 60), H + o];
  }
  function route() {
    var W = window.innerWidth, H = window.innerHeight, top = 80, reach = Math.min(W, H) * 0.45 + 120;
    var first = edgePoint(W, H, top), pts = [offscreen(first, W, H, top), first], n = 2 + Math.floor(Math.random() * 3);
    for (var i = 0; i < n; i++) {
      var last = pts[pts.length - 1], cand = null;
      for (var tries = 0; tries < 12; tries++) {
        var c = edgePoint(W, H, top);
        if (Math.hypot(c[0] - last[0], c[1] - last[1]) < reach) { cand = c; break; }
      }
      pts.push(cand || edgePoint(W, H, top));
    }
    pts.push(offscreen(pts[pts.length - 1], W, H, top));
    return pts;
  }
  function spawn() {
    var el = document.createElement('div');
    el.className = 'bug walking'; el.innerHTML = bugMarkup;
    document.body.appendChild(el);
    var pts = route(), seg = 0, t0 = null, pauseUntil = 0, travelled = 0, speed = rand(60, 95);
    var bug = { el: el, x: pts[0][0], y: pts[0][1], ang: 0, raf: 0, dead: false };
    bugs.push(bug);
    function remove() { el.remove(); bugs = bugs.filter(function (b) { return b !== bug; }); }
    function frame(ts) {
      if (bug.dead) return;
      if (ts < pauseUntil) { el.classList.remove('walking'); bug.raf = requestAnimationFrame(frame); return; }
      el.classList.add('walking');
      if (t0 === null) t0 = ts;
      var a = pts[seg], b = pts[seg + 1], dx = b[0] - a[0], dy = b[1] - a[1], dist = Math.hypot(dx, dy) || 1;
      var tt = Math.min(1, (ts - t0) / (dist / speed * 1000));
      var wig = Math.sin((travelled + dist * tt) / 16) * 2.5;
      var x = a[0] + dx * tt - dy / dist * wig, y = a[1] + dy * tt + dx / dist * wig;
      var target = Math.atan2(dy, dx) * 180 / Math.PI + 90;
      bug.ang += (((target - bug.ang + 540) % 360) - 180) * 0.15;
      bug.x = x; bug.y = y;
      el.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + bug.ang + 'deg)';
      if (tt >= 1) {
        travelled += dist; seg++; t0 = null;
        if (seg < pts.length - 1 && Math.random() < 0.4) pauseUntil = ts + rand(400, 1200);
        if (seg >= pts.length - 1) { remove(); return; }
      }
      bug.raf = requestAnimationFrame(frame);
    }
    bug.raf = requestAnimationFrame(frame);
    el.addEventListener('pointerdown', function (ev) { ev.preventDefault(); squash(bug, remove); });
  }
  function squash(bug, remove) {
    if (bug.dead) return;
    bug.dead = true; cancelAnimationFrame(bug.raf);
    document.body.classList.add('smash');
    setTimeout(function () { document.body.classList.remove('smash'); }, 160);
    var at = 'translate(' + bug.x + 'px,' + bug.y + 'px) rotate(' + bug.ang + 'deg)';
    var s = document.createElement('div');
    s.className = 'splat'; s.innerHTML = splatMarkup; s.style.transform = at; s.style.setProperty('--at', at);
    document.body.appendChild(s);
    s.addEventListener('animationend', function () { s.remove(); });
    var pop = document.createElement('div');
    pop.className = 'pop'; pop.textContent = '+1 Bug Report';
    pop.style.left = bug.x + 'px'; pop.style.top = bug.y + 'px';
    document.body.appendChild(pop);
    pop.addEventListener('animationend', function () { pop.remove(); });
    remove(); bumpCount();
  }
  counterBtn.addEventListener('click', function () {
    if (bugs.length >= MAX_BUGS) {
      counterBtn.classList.remove('full'); void counterBtn.offsetWidth; counterBtn.classList.add('full');
      toast(t('bugs_full')); return;
    }
    spawn();
  });
  document.addEventListener('visibilitychange', function () { if (!document.hidden && !bugs.length) schedule(rand(4000, 9000)); });

  var savedLang = load('lang');
  applyLang(savedLang === 'en' || savedLang === 'ru' ? savedLang : ((navigator.language || 'ru').toLowerCase().indexOf('ru') === 0 ? 'ru' : 'en'));
  onScroll();
  schedule(6000);
  window.__spawnBug = spawn;
})();

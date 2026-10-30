/* Logika website belajar UTS Cloud Data Analytics. Tanpa dependensi eksternal. */
(function () {
  'use strict';

  var D = window.UTS;
  if (!D || !D.essays) { console.error('Data UTS tidak termuat.'); return; }

  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Urutan: ALSUT dulu (soal latihan UTS dosen), lalu KMG.
  D.essays.sort(function (a, b) {
    if (a.region !== b.region) return a.region === 'ALSUT' ? -1 : 1;
    return a.no - b.no;
  });
  var essayById = {};
  D.essays.forEach(function (e) { essayById[e.id] = e; });
  D.drill.forEach(function (q, i) { q.id = 'd' + i; });
  D.flash.forEach(function (c, i) { c.id = 'f' + i; });

  /* ================= State (localStorage) ================= */
  var KEY = 'utsCDA.v1';
  function defaults() { return { essays: {}, drill: { best: 0, runs: 0, correct: {} }, flash: {}, plan: {}, theme: null }; }
  var state = defaults();
  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (saved && typeof saved === 'object') {
      state = Object.assign(defaults(), saved);
      state.drill = Object.assign(defaults().drill, saved.drill || {});
    }
  } catch (err) { /* abaikan data rusak */ }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (err) { /* mode privat */ }
    renderProgress();
  }

  /* ================= Utilitas ================= */
  function fmt(s) {
    return String(s || '')
      .replace(/\[\[(.+?)\]\]/g, '<span class="cloze" tabindex="0" role="button">$1</span>')
      .replace(/==(.+?)==/g, '<mark>$1</mark>')
      .replace(/\{\{(.+?)\}\}/g, '<span class="svc">$1</span>')
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function norm(t) {
    return ' ' + String(t).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
  }
  function hasKw(text, kw) {
    var k = norm(kw).trim();
    if (!k) return false;
    return k.length <= 3 ? text.indexOf(' ' + k + ' ') !== -1 : text.indexOf(k) !== -1;
  }
  function wordCount(s) { var m = String(s).trim().match(/\S+/g); return m ? m.length : 0; }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function restartAnim(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
  function inView(el) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.3;
  }

  var toastTimer;
  function toast(title, msg, type) {
    var t = $('#toast');
    t.innerHTML = '<b>' + title + '</b>' + (msg ? '<span>' + msg + '</span>' : '');
    t.className = 'toast show ' + (type || '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.className = 'toast ' + (type || ''); }, 2800);
  }

  /* ================= Confetti (canvas sendiri) ================= */
  var cv = $('#confetti'), cx = cv.getContext('2d'), parts = [], running = false;
  var COLORS = ['#F7DC7C', '#E8BC48', '#D4955A', '#A0673D', '#7A4A2A'];
  function sizeCanvas() {
    var dpr = window.devicePixelRatio || 1;
    cv.width = window.innerWidth * dpr; cv.height = window.innerHeight * dpr;
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function confetti(n) {
    if (reduceMotion) return;
    sizeCanvas();
    n = n || 110;
    for (var i = 0; i < n; i++) {
      parts.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 260, y: window.innerHeight * 0.72,
        vx: (Math.random() - 0.5) * 13, vy: -Math.random() * 15 - 6, s: Math.random() * 6 + 5,
        c: COLORS[i % COLORS.length], r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.35, life: 0
      });
    }
    if (!running) { running = true; requestAnimationFrame(tickConfetti); }
  }
  function tickConfetti() {
    cx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    parts.forEach(function (p) {
      p.vy += 0.33; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life++;
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c;
      cx.globalAlpha = Math.max(0, 1 - p.life / 220);
      cx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); cx.restore();
    });
    parts = parts.filter(function (p) { return p.y < window.innerHeight + 30 && p.life < 220; });
    if (parts.length) requestAnimationFrame(tickConfetti);
    else { running = false; cx.clearRect(0, 0, window.innerWidth, window.innerHeight); }
  }

  /* ================= Efek klik: ripple ================= */
  document.addEventListener('pointerdown', function (e) {
    var b = e.target.closest('.btn, .chip, .opt');
    if (!b || reduceMotion || b.disabled) return;
    var r = b.getBoundingClientRect(), size = Math.max(r.width, r.height);
    var s = document.createElement('span');
    s.className = 'ripple';
    s.style.width = s.style.height = size + 'px';
    s.style.left = (e.clientX - r.left - size / 2) + 'px';
    s.style.top = (e.clientY - r.top - size / 2) + 'px';
    b.appendChild(s);
    setTimeout(function () { s.remove(); }, 650);
  });

  /* ================= Tema ================= */
  function applyTheme(t) {
    document.documentElement.classList.toggle('dark', t === 'dark');
    $('#themeBtn').textContent = t === 'dark' ? '☀️' : '🌙';
  }
  applyTheme(state.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  $('#themeBtn').addEventListener('click', function () {
    state.theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(state.theme); save();
  });

  /* ================= Hero: pipeline air ================= */
  var pipeIdx = 0, pipeAuto = true;
  function renderHero() {
    var counts = {
      essays: D.essays.length,
      rinci: D.essays.reduce(function (n, e) { return n + e.rinci.length; }, 0),
      drill: D.drill.length,
      flash: D.flash.length
    };
    Object.keys(counts).forEach(function (k) {
      var el = $('[data-stat="' + k + '"]');
      if (el) { el.dataset.count = counts[k]; el.classList.add('count'); }
    });
    var wrap = $('#pipeline');
    wrap.innerHTML = D.pipeline.map(function (p, i) {
      return (i ? '<div class="pipe"><span></span></div>' : '') +
        '<button class="pnode" type="button" data-i="' + i + '"><span class="pico">' + p.icon + '</span><b>' + p.name + '</b><small>' + p.air + '</small></button>';
    }).join('');
    wrap.addEventListener('click', function (e) {
      var n = e.target.closest('.pnode');
      if (!n) return;
      pipeAuto = false;
      setPipe(+n.dataset.i);
    });
    setPipe(0);
    setInterval(function () {
      if (pipeAuto && !document.hidden) setPipe((pipeIdx + 1) % D.pipeline.length);
    }, 3200);
  }
  function setPipe(i) {
    pipeIdx = i;
    $$('.pnode').forEach(function (n, j) { n.classList.toggle('active', j === i); });
    $$('.pipe').forEach(function (p, j) { p.classList.toggle('lit', j < i); });
    var p = D.pipeline[i], cap = $('#pipeCaption');
    cap.innerHTML = '<b>' + p.icon + ' ' + (i + 1) + '. ' + p.name + '</b> (' + p.air + ')<br>' + fmt(p.desc) +
      '<div class="svc-list">' + p.svc.map(function (s) { return '<span class="svc">' + s + '</span>'; }).join('') + '</div>';
    restartAnim(cap, 'pop-in');
  }
  function countUp(el) {
    var target = +el.dataset.count;
    if (reduceMotion) { el.textContent = target; return; }
    var t0 = performance.now(), dur = 1300;
    (function step(t) {
      var p = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* ================= Rencana belajar ================= */
  function renderPlan() {
    $('#planList').innerHTML = D.plan.map(function (p, i) {
      var done = !!state.plan[i];
      return '<li class="plan-item reveal' + (done ? ' done' : '') + '" style="--d:' + (i * 70) + 'ms">' +
        '<button class="plan-check" type="button" data-i="' + i + '" aria-pressed="' + done + '" aria-label="Tandai langkah ' + (i + 1) + '">' + (done ? '✓' : i + 1) + '</button>' +
        '<div><b>' + p.title + '</b><p>' + p.desc + '</p><a class="plan-link" href="' + p.href + '">' + p.cta + ' →</a></div></li>';
    }).join('');
    observeReveals($('#planList'));
  }
  $('#planList').addEventListener('click', function (e) {
    var b = e.target.closest('.plan-check');
    if (!b) return;
    var i = +b.dataset.i;
    state.plan[i] = !state.plan[i];
    var li = b.closest('.plan-item');
    li.classList.toggle('done', state.plan[i]);
    b.textContent = state.plan[i] ? '✓' : i + 1;
    b.setAttribute('aria-pressed', state.plan[i]);
    save();
    var all = D.plan.every(function (_, k) { return state.plan[k]; });
    if (all) { confetti(160); toast('Semua langkah selesai! 🎉', 'Kamu siap tempur buat UTS besok.'); }
    else if (state.plan[i]) toast('Langkah ' + (i + 1) + ' selesai ✓', 'Lanjut ke langkah berikutnya.');
  });

  /* ================= Kisi-kisi & daftar soal ================= */
  var filter = { region: 'all', kisi: null };
  function renderKisi() {
    $('#kisiGrid').innerHTML = D.kisi.map(function (k, i) {
      return '<button class="kisi-card reveal" type="button" data-k="' + k.id + '" style="--d:' + (i * 90) + 'ms">' +
        '<span class="kisi-no">Kisi-kisi ' + k.id + '</span><h3>' + k.title + '</h3>' +
        '<p class="kisi-mod">' + k.modul + '</p><p class="kisi-konsep">' + k.konsep + '</p>' +
        '<div class="kisi-soal">' + k.soal.map(function (id) {
          var e = essayById[id];
          return '<span class="mini ' + e.region.toLowerCase() + '">' + e.region + ' #' + e.no + '</span>';
        }).join('') + '</div><div class="bar"><i data-kisi-bar="' + k.id + '"></i></div></button>';
    }).join('');
    observeReveals($('#kisiGrid'));
  }
  $('#kisiGrid').addEventListener('click', function (e) {
    var c = e.target.closest('.kisi-card');
    if (!c) return;
    var k = +c.dataset.k;
    filter.kisi = filter.kisi === k ? null : k;
    $$('.kisi-card').forEach(function (x) { x.classList.toggle('active', +x.dataset.k === filter.kisi); });
    renderEssayList();
    toast(filter.kisi ? 'Filter: Kisi-kisi ' + k : 'Filter kisi-kisi dimatikan', filter.kisi ? D.kisi[k - 1].title : 'Menampilkan semua soal.');
    $('#regionChips').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  });
  $('#regionChips').addEventListener('click', function (e) {
    var c = e.target.closest('.chip');
    if (!c) return;
    filter.region = c.dataset.r;
    $$('#regionChips .chip').forEach(function (x) { x.classList.toggle('active', x === c); });
    renderEssayList();
  });

  function filteredEssays() {
    return D.essays.filter(function (e) {
      return (filter.region === 'all' || e.region === filter.region) && (!filter.kisi || e.kisi.indexOf(filter.kisi) !== -1);
    });
  }

  function essayHTML(e) {
    var st = state.essays[e.id] || {};
    var kis = e.kisi.map(function (k) { return '<span class="kchip">Kisi ' + k + '</span>'; }).join(' · ');
    var rinci = e.rinci.map(function (r, i) {
      return '<div class="rinci-item" tabindex="0" role="button" aria-expanded="false" data-i="' + i + '">' +
        '<div class="rq"><span class="qn">' + (i + 1) + '</span><span>' + fmt(r.q) + '</span></div>' +
        '<div class="ra"><div>' + fmt(r.a) + '</div></div></div>';
    }).join('');
    var kunci = e.a.map(function (s) {
      return '<div class="ans-sec locked" tabindex="0" role="button" aria-label="Buka bagian jawaban"><div class="ans-h">' + fmt(s.h) +
        (s.filled ? '<span class="filled-badge" title="Bagian ini terpotong di PDF pembahasan, jadi dilengkapi dari Rangkuman Modul 1-8">Dilengkapi dari rangkuman</span>' : '') +
        '</div><div class="ans-b"><div class="tbl-scroll">' + fmt(s.b) + '</div></div></div>';
    }).join('');
    return '<article class="essay glass reveal" id="essay-' + e.id + '" data-id="' + e.id + '">' +
      '<button class="essay-head" type="button" aria-expanded="false">' +
      '<span class="essay-no ' + e.region.toLowerCase() + '">' + e.region + ' #' + e.no + '</span>' +
      '<span class="essay-title">' + e.title + '<small>' + e.modul + ' · ' + kis + '</small></span>' +
      (e.region === 'ALSUT' ? '<span class="hot" title="Sama persis dengan Soal Latihan UTS dari dosen">🔥</span>' : '') +
      '<span class="status-dot s-' + (st.status || 'none') + '" title="Status kesiapan"></span>' +
      '<span class="chev" aria-hidden="true">▾</span></button>' +
      '<div class="essay-body" hidden>' +
      '<div class="question-box"><span class="label">Pertanyaan ' + e.region + ' #' + e.no + '</span><p>' + e.question + '</p></div>' +
      '<div class="tabs" role="tablist">' +
      '<button class="tab active" type="button" role="tab" data-tab="rinci">🧩 Pertanyaan Rinci <em>' + e.rinci.length + '</em></button>' +
      '<button class="tab" type="button" role="tab" data-tab="latihan">✍️ Latihan Jawab</button>' +
      '<button class="tab" type="button" role="tab" data-tab="kunci">🔑 Kunci Jawaban</button></div>' +
      '<div class="panel" data-panel="rinci">' +
      '<p class="hint">Soal besar ini dipecah jadi pertanyaan kecil. Jawab di kepala dulu, lalu klik untuk mengecek.</p>' +
      '<div class="rinci-progress"><span class="rc">0</span>/' + e.rinci.length + ' dibuka <div class="bar"><i></i></div></div>' + rinci + '</div>' +
      '<div class="panel" data-panel="latihan" hidden>' +
      '<div class="tip">🧭 <b>Kerangka jawaban:</b> ' + fmt(e.tip) + '</div>' +
      '<textarea class="answer" placeholder="Tulis jawabanmu di sini seperti saat ujian..."></textarea>' +
      '<div class="row"><span class="muted wc">0 kata</span><button class="btn primary small btn-check" type="button">🔍 Cek kata kunci</button></div>' +
      '<div class="kw-result" hidden></div></div>' +
      '<div class="panel" data-panel="kunci" hidden>' +
      '<div class="row"><p class="hint">Tiap bagian tertutup. Tebak isinya dulu, baru klik untuk membuka.</p><button class="btn ghost small btn-openall" type="button">Buka semua</button></div>' + kunci + '</div>' +
      '<div class="rate"><span>Seberapa siap kamu menjawab soal ini di ujian?</span><div class="rate-btns">' +
      ['lupa', 'ragu', 'siap'].map(function (s) {
        var label = { lupa: '😵 Belum bisa', ragu: '🤔 Ragu', siap: '💪 Siap' }[s];
        return '<button class="btn rate-btn r-' + s + (st.status === s ? ' on' : '') + '" type="button" data-s="' + s + '">' + label + '</button>';
      }).join('') + '</div></div></div></article>';
  }

  function renderEssayList() {
    var list = filteredEssays();
    var box = $('#essayList');
    box.innerHTML = list.map(essayHTML).join('');
    list.forEach(function (e) {
      var st = state.essays[e.id];
      var ta = $('#essay-' + e.id + ' textarea');
      if (st && st.draft) { ta.value = st.draft; $('#essay-' + e.id + ' .wc').textContent = wordCount(st.draft) + ' kata'; }
    });
    $('#essayCount').textContent = 'Menampilkan ' + list.length + ' soal';
    observeReveals(box);
  }

  function openEssay(card, open) {
    var body = $('.essay-body', card), head = $('.essay-head', card);
    var willOpen = open === undefined ? body.hidden : open;
    body.hidden = !willOpen;
    card.classList.toggle('open', willOpen);
    head.setAttribute('aria-expanded', willOpen);
  }
  function switchTab(card, name) {
    $$('.tab', card).forEach(function (t) { t.classList.toggle('active', t.dataset.tab === name); });
    $$('.panel', card).forEach(function (p) { p.hidden = p.dataset.panel !== name; });
    if (name === 'latihan') setTimeout(function () { $('textarea', card).focus({ preventScroll: true }); }, 50);
  }
  function toggleRinci(card, item) {
    var open = !item.classList.contains('open');
    item.classList.toggle('open', open);
    item.setAttribute('aria-expanded', open);
    var total = $$('.rinci-item', card).length, n = $$('.rinci-item.open', card).length;
    $('.rc', card).textContent = n;
    $('.rinci-progress .bar i', card).style.width = pct(n, total) + '%';
    if (open && n === total) {
      toast('Semua pertanyaan rinci sudah dibuka 🧩', 'Sekarang coba tab ✍️ Latihan Jawab.');
      confetti(50);
    }
  }
  function unlock(sec) {
    sec.classList.remove('locked');
    restartAnim(sec, 'unlocking');
  }
  function checkEssay(card, id) {
    var e = essayById[id], ta = $('textarea', card);
    if (wordCount(ta.value) < 15) {
      toast('Tulis dulu jawabanmu ✍️', 'Minimal sekitar 15 kata supaya bisa dicek.', 'warn');
      restartAnim(ta, 'shake');
      return;
    }
    var text = norm(ta.value);
    var res = e.keys.map(function (k) {
      return { label: k.label, ok: k.kw.some(function (w) { return hasKw(text, w); }) };
    });
    var okCount = res.filter(function (r) { return r.ok; }).length, p = pct(okCount, res.length);
    var color = p >= 80 ? 'var(--ok)' : p >= 50 ? 'var(--honey)' : 'var(--bad)';
    var msg = p >= 80 ? 'Mantap! Kata kunci pentingnya sudah masuk. Bandingkan dengan 🔑 Kunci Jawaban.'
      : p >= 50 ? 'Lumayan. Lengkapi kata kunci yang merah supaya jawabanmu utuh.'
      : 'Masih banyak yang terlewat. Buka 🧩 Pertanyaan Rinci dulu, lalu tulis ulang.';
    var box = $('.kw-result', card);
    box.hidden = false;
    box.innerHTML = '<div class="ring" style="--p:' + p + ';--c:' + color + '"><span>' + p + '%</span></div>' +
      '<div class="kw-list"><div class="kw-msg">' + msg + '</div><div class="kw-chips">' +
      res.map(function (r, i) {
        return '<span class="kw ' + (r.ok ? 'ok' : 'miss') + '" style="animation-delay:' + (i * 50) + 'ms">' + (r.ok ? '✓ ' : '✗ ') + r.label + '</span>';
      }).join('') + '</div><p class="muted" style="margin-top:8px">Cek ini hanya mencocokkan istilah. Tetap baca kunci jawaban untuk memastikan alasanmu benar.</p></div>';
    state.essays[id] = Object.assign({}, state.essays[id], { lastPct: p });
    save();
    if (p >= 80) confetti(90);
  }
  function rateEssay(card, id, s) {
    state.essays[id] = Object.assign({}, state.essays[id], { status: s });
    $$('.rate-btn', card).forEach(function (b) { b.classList.toggle('on', b.dataset.s === s); });
    var dot = $('.status-dot', card);
    dot.className = 'status-dot s-' + s;
    save();
    var e = essayById[id];
    if (s === 'siap') {
      confetti(70);
      var allAlsut = D.essays.filter(function (x) { return x.region === 'ALSUT'; })
        .every(function (x) { return (state.essays[x.id] || {}).status === 'siap'; });
      if (allAlsut && e.region === 'ALSUT') { confetti(200); toast('Semua 10 soal ALSUT siap! 🔥', 'Soal latihan UTS dosen sudah kamu kuasai.'); }
      else toast(e.region + ' #' + e.no + ' siap 💪', 'Lanjut ke soal berikutnya.');
    } else if (s === 'ragu') {
      toast(e.region + ' #' + e.no + ' ditandai ragu 🤔', 'Ulangi Pertanyaan Rinci, lalu coba tulis lagi.', 'warn');
    } else {
      toast(e.region + ' #' + e.no + ' belum bisa 😵', 'Tidak apa-apa. Buka kunci jawaban, lalu tulis ulang dengan kata sendiri.', 'warn');
    }
  }

  var essayList = $('#essayList');
  essayList.addEventListener('click', function (ev) {
    var card = ev.target.closest('.essay');
    if (!card) return;
    var id = card.dataset.id, t;
    if (ev.target.closest('.essay-head')) { openEssay(card); return; }
    if ((t = ev.target.closest('.tab'))) { switchTab(card, t.dataset.tab); return; }
    if ((t = ev.target.closest('.rinci-item'))) { toggleRinci(card, t); return; }
    if (ev.target.closest('.btn-openall')) { $$('.ans-sec.locked', card).forEach(unlock); return; }
    if ((t = ev.target.closest('.ans-sec.locked'))) { unlock(t); return; }
    if (ev.target.closest('.btn-check')) { checkEssay(card, id); return; }
    if ((t = ev.target.closest('.rate-btn'))) { rateEssay(card, id, t.dataset.s); }
  });
  essayList.addEventListener('keydown', function (ev) {
    if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.matches('.rinci-item, .ans-sec')) {
      ev.preventDefault(); ev.target.click();
    }
  });
  var draftTimer;
  essayList.addEventListener('input', function (ev) {
    if (!ev.target.matches('textarea')) return;
    var card = ev.target.closest('.essay'), id = card.dataset.id, val = ev.target.value;
    $('.wc', card).textContent = wordCount(val) + ' kata';
    clearTimeout(draftTimer);
    draftTimer = setTimeout(function () {
      state.essays[id] = Object.assign({}, state.essays[id], { draft: val });
      save();
    }, 400);
  });
  $('#randomEssay').addEventListener('click', function () {
    var list = filteredEssays();
    if (!list.length) return;
    var e = list[Math.floor(Math.random() * list.length)];
    var card = $('#essay-' + e.id);
    $$('.essay.open').forEach(function (c) { if (c !== card) openEssay(c, false); });
    openEssay(card, true);
    card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    restartAnim(card, 'flash-hl');
    toast('🎲 ' + e.region + ' #' + e.no, e.title);
  });

  /* ================= Drill ================= */
  var drillCfg = { mods: [], hot: false, count: '10' };
  var drill = null;
  function renderDrillSetup() {
    var mods = [];
    D.drill.forEach(function (q) { if (mods.indexOf(q.m) === -1) mods.push(q.m); });
    mods.sort(function (a, b) { return a - b; });
    $('#drillMods').innerHTML = '<button class="chip active" type="button" data-m="all">Semua</button>' +
      mods.map(function (m) { return '<button class="chip" type="button" data-m="' + m + '">Modul ' + m + '</button>'; }).join('');
    updatePoolInfo();
  }
  function drillPool() {
    return D.drill.filter(function (q) {
      return (!drillCfg.mods.length || drillCfg.mods.indexOf(q.m) !== -1) && (!drillCfg.hot || q.hot);
    });
  }
  function updatePoolInfo() {
    var n = drillPool().length;
    $('#drillPoolInfo').textContent = n + ' soal tersedia dengan filter ini';
    $('#drillStart').disabled = n === 0;
  }
  $('#drillMods').addEventListener('click', function (e) {
    var c = e.target.closest('.chip');
    if (!c) return;
    if (c.dataset.m === 'all') drillCfg.mods = [];
    else {
      var m = +c.dataset.m, i = drillCfg.mods.indexOf(m);
      if (i === -1) drillCfg.mods.push(m); else drillCfg.mods.splice(i, 1);
    }
    $$('#drillMods .chip').forEach(function (x) {
      x.classList.toggle('active', x.dataset.m === 'all' ? !drillCfg.mods.length : drillCfg.mods.indexOf(+x.dataset.m) !== -1);
    });
    updatePoolInfo();
  });
  $('#drillHot').addEventListener('click', function () {
    drillCfg.hot = !drillCfg.hot;
    this.classList.toggle('active', drillCfg.hot);
    this.setAttribute('aria-pressed', drillCfg.hot);
    updatePoolInfo();
  });
  $('#drillCount').addEventListener('click', function (e) {
    var c = e.target.closest('.chip');
    if (!c) return;
    drillCfg.count = c.dataset.c;
    $$('#drillCount .chip').forEach(function (x) { x.classList.toggle('active', x === c); });
  });
  $('#drillStart').addEventListener('click', function () { startDrill(); });

  function startDrill(customQs) {
    var pool = customQs || shuffle(drillPool());
    if (!customQs && drillCfg.count !== 'all') pool = pool.slice(0, +drillCfg.count);
    if (!pool.length) { toast('Tidak ada soal', 'Ubah filter modul.', 'warn'); return; }
    drill = { qs: pool, i: 0, count: 0, score: 0, streak: 0, best: 0, wrong: [], answered: false };
    $('#drillSetup').hidden = true; $('#drillResult').hidden = true; $('#drillPlay').hidden = false;
    renderDrillQ();
  }
  function renderDrillQ() {
    var q = drill.qs[drill.i];
    var opts = shuffle(q.o.map(function (t, idx) { return { t: t, ok: idx === 0 }; }));
    drill.opts = opts; drill.answered = false;
    $('#drillPlay').innerHTML =
      '<div class="drill-top"><span>Soal ' + (drill.i + 1) + '/' + drill.qs.length + '</span>' +
      '<div class="bar"><i style="width:' + pct(drill.i, drill.qs.length) + '%"></i></div>' +
      '<span class="streak" id="streak">🔥 ' + drill.streak + '</span><span>✓ ' + drill.score + '</span></div>' +
      '<div class="drill-q"><div class="tags"><span class="tag">Modul ' + q.m + '</span>' + (q.hot ? '<span class="tag hot">🔥 Pola soal ujian</span>' : '') + '</div>' +
      '<h3>' + q.q + '</h3></div><div class="opts">' +
      opts.map(function (o, i) { return '<button class="opt" type="button" data-i="' + i + '"><span class="k">' + (i + 1) + '</span><span>' + o.t + '</span></button>'; }).join('') +
      '</div><div class="feedback" hidden></div>' +
      '<div class="drill-actions"><button class="btn ghost small" type="button" id="drillStop">Selesai</button>' +
      '<button class="btn primary" type="button" id="drillNext" hidden>' + (drill.i + 1 < drill.qs.length ? 'Lanjut →' : 'Lihat hasil 🏁') + '</button></div>';
  }
  function answerDrill(i) {
    if (!drill || drill.answered) return;
    drill.answered = true;
    drill.count++;
    var q = drill.qs[drill.i], chosen = drill.opts[i];
    var btns = $$('#drillPlay .opt');
    btns.forEach(function (b, j) {
      b.disabled = true;
      if (drill.opts[j].ok) b.classList.add('correct');
      else if (j === i) b.classList.add('wrong');
      else b.classList.add('dim');
    });
    var fb = $('#drillPlay .feedback');
    fb.hidden = false;
    if (chosen.ok) {
      drill.score++; drill.streak++; drill.best = Math.max(drill.best, drill.streak);
      state.drill.correct[q.id] = true;
      fb.className = 'feedback good';
      fb.innerHTML = '<b>✅ Benar!</b> ' + q.why;
      var st = $('#streak'); st.textContent = '🔥 ' + drill.streak; restartAnim(st, 'bump');
      if (drill.streak > 0 && drill.streak % 5 === 0) { confetti(80); toast('Streak ' + drill.streak + ' 🔥', 'Lanjutkan!'); }
    } else {
      drill.streak = 0;
      drill.wrong.push(q);
      fb.className = 'feedback bad';
      fb.innerHTML = '<b>❌ Belum tepat.</b> Jawaban benar: <b>' + q.o[0] + '</b>. ' + q.why;
      restartAnim(btns[i], 'shake');
      $('#streak').textContent = '🔥 0';
    }
    save();
    var next = $('#drillNext'); next.hidden = false; next.focus({ preventScroll: true });
  }
  function nextDrill() {
    if (!drill || !drill.answered) return;
    drill.i++;
    if (drill.i >= drill.qs.length) finishDrill(); else renderDrillQ();
  }
  function finishDrill() {
    var total = drill.count;
    if (!total) {
      $('#drillPlay').hidden = true; $('#drillSetup').hidden = false; drill = null;
      return;
    }
    var p = pct(drill.score, total);
    state.drill.runs++;
    if (total >= 10) state.drill.best = Math.max(state.drill.best || 0, p);
    save();
    var msg = p >= 80 ? 'Keren! Kamu siap untuk soal tipe ini. 🎉' : p >= 60 ? 'Sudah lumayan. Ulangi soal yang salah sampai lancar.' : 'Baca lagi Materi Ringkas modul terkait, lalu ulangi.';
    $('#drillPlay').hidden = true;
    var r = $('#drillResult');
    r.hidden = false;
    r.innerHTML = '<div class="result-head"><div class="result-score">' + p + '%</div><b>' + drill.score + ' benar dari ' + total + ' soal</b> · streak terbaik 🔥 ' + drill.best + '<p class="muted">' + msg + '</p>' +
      (total < 10 ? '<p class="muted">Skor terbaik di Progres hanya dicatat untuk drill minimal 10 soal.</p>' : '') + '</div>' +
      (drill.wrong.length ? '<b>Yang perlu diulang:</b><div class="wrong-list">' + drill.wrong.map(function (q) {
        return '<div class="wrong-item"><b>' + q.q + '</b>✓ ' + q.o[0] + '<br><span class="muted">' + q.why + '</span></div>';
      }).join('') + '</div>' : '') +
      '<div class="result-actions">' + (drill.wrong.length ? '<button class="btn primary" type="button" id="drillRetry">🔁 Ulangi yang salah (' + drill.wrong.length + ')</button>' : '') +
      '<button class="btn ghost" type="button" id="drillNew">⚙️ Drill baru</button></div>';
    if (p >= 80) confetti(150);
  }
  $('#drillBox').addEventListener('click', function (e) {
    var o = e.target.closest('.opt');
    if (o) { answerDrill(+o.dataset.i); return; }
    if (e.target.closest('#drillNext')) { nextDrill(); return; }
    if (e.target.closest('#drillStop')) { finishDrill(); return; }
    if (e.target.closest('#drillRetry')) { startDrill(shuffle(drill.wrong)); return; }
    if (e.target.closest('#drillNew')) { $('#drillResult').hidden = true; $('#drillSetup').hidden = false; drill = null; }
  });

  /* ================= Flashcard ================= */
  var fq = [];
  var flip = $('#flipCard');
  function initFlash(reshuffle) {
    fq = D.flash.filter(function (c) { return state.flash[c.id] !== 'paham'; });
    if (reshuffle !== false) fq = shuffle(fq);
    showCard();
  }
  function showCard(animate) {
    var done = !fq.length;
    $('#flashDone').hidden = !done;
    flip.style.visibility = done ? 'hidden' : 'visible';
    var paham = D.flash.filter(function (c) { return state.flash[c.id] === 'paham'; }).length;
    $('#flashCounter').textContent = 'Sisa ' + fq.length + ' kartu · Paham ' + paham + '/' + D.flash.length;
    if (done) return;
    var c = fq[0];
    flip.classList.remove('flipped');
    var apply = function () {
      $('#flashFront').textContent = c.f;
      $('#flashBack').textContent = c.b;
      $('#flashTagFront').textContent = 'Modul ' + c.m;
    };
    if (animate && !reduceMotion) { restartAnim(flip, 'swap'); setTimeout(apply, 160); } else apply();
  }
  function flipCard() { if (fq.length) flip.classList.toggle('flipped'); }
  function rateFlash(r) {
    if (!fq.length) return;
    var c = fq.shift();
    state.flash[c.id] = r;
    if (r === 'lupa') fq.splice(Math.min(2, fq.length), 0, c);
    else if (r === 'ragu') fq.push(c);
    save();
    if (r === 'paham') {
      if (!fq.length) { confetti(180); toast('Semua flashcard dipahami! 🎉', 'Kamu hafal ' + D.flash.length + ' istilah.'); }
      else if (Math.random() < 0.35) confetti(35);
    }
    showCard(true);
  }
  flip.addEventListener('click', flipCard);
  flip.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); flipCard(); } });
  flip.addEventListener('pointermove', function (e) {
    if (reduceMotion || e.pointerType !== 'mouse') return;
    var r = flip.getBoundingClientRect();
    flip.style.setProperty('--ry', ((e.clientX - r.left) / r.width - 0.5) * 8 + 'deg');
    flip.style.setProperty('--rx', -((e.clientY - r.top) / r.height - 0.5) * 8 + 'deg');
  });
  flip.addEventListener('pointerleave', function () { flip.style.setProperty('--rx', '0deg'); flip.style.setProperty('--ry', '0deg'); });
  $$('.flash-nav .rate').forEach(function (b) { b.addEventListener('click', function () { rateFlash(b.dataset.r); }); });
  $('#flashNext').addEventListener('click', function () { if (fq.length > 1) { fq.push(fq.shift()); showCard(true); } });
  $('#flashPrev').addEventListener('click', function () { if (fq.length > 1) { fq.unshift(fq.pop()); showCard(true); } });
  $('#flashShuffle').addEventListener('click', function () { fq = shuffle(fq); showCard(true); toast('Dek diacak 🔀'); });
  function resetFlash() { state.flash = {}; save(); initFlash(); toast('Dek diulang ↺', 'Semua ' + D.flash.length + ' kartu kembali ke antrean.'); }
  $('#flashReset').addEventListener('click', resetFlash);
  $('#flashResetDone').addEventListener('click', resetFlash);

  /* ================= Contekan kilat ================= */
  var ctRows = D.contekan.slice();
  function renderContekan() {
    $('#ctBody').innerHTML = ctRows.map(function (r) {
      return '<tr><td>' + r.need + '</td><td><span class="cloze" tabindex="0" role="button">' + r.use + '</span></td></tr>';
    }).join('');
    updateCtCounter();
  }
  function updateCtCounter() {
    var test = $('#ctTable').classList.contains('cloze-test');
    var n = $$('#ctBody .cloze.revealed').length;
    $('#ctCounter').textContent = test ? n + '/' + ctRows.length + ' sudah dibuka' : 'Semua jawaban terlihat';
  }
  $('#ctBody').addEventListener('click', function (e) {
    var c = e.target.closest('.cloze');
    if (!c || !$('#ctTable').classList.contains('cloze-test') || c.classList.contains('revealed')) return;
    c.classList.add('revealed');
    updateCtCounter();
    if ($$('#ctBody .cloze.revealed').length === ctRows.length) { confetti(120); toast('Contekan tuntas 📋', 'Coba acak lalu ulangi tanpa melihat.'); }
  });
  $('#ctBody').addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.cloze')) { e.preventDefault(); e.target.click(); } });
  $('#ctTest').addEventListener('click', function () {
    var on = $('#ctTable').classList.toggle('cloze-test');
    this.classList.toggle('active', on);
    this.setAttribute('aria-pressed', on);
    updateCtCounter();
  });
  $('#ctShuffle').addEventListener('click', function () { ctRows = shuffle(ctRows); renderContekan(); toast('Urutan diacak 🔀'); });
  $('#ctReset').addEventListener('click', function () { $$('#ctBody .cloze').forEach(function (c) { c.classList.remove('revealed'); }); updateCtCounter(); });

  /* ================= Materi ================= */
  function renderMateri() {
    $('#materiList').innerHTML = D.materi.map(function (m) {
      return '<article class="mod glass reveal" id="modul-' + m.no + '" data-no="' + m.no + '">' +
        '<h3>Modul ' + m.no + ': ' + m.title + '</h3>' +
        '<div class="mod-intinya"><p><b>Intinya:</b> ' + fmt(m.intinya) + '</p>' + (m.analogi ? '<p><b>Perumpamaan:</b> ' + fmt(m.analogi) + '</p>' : '') + '</div>' +
        (m.table ? '<div class="tbl-scroll">' + fmt(m.table) + '</div>' : '') +
        '<ul>' + m.points.map(function (p) { return '<li>' + fmt(p) + '</li>'; }).join('') + '</ul>' +
        (m.ingat ? '<div class="mod-ingat">🎯 <b>Ingat buat ujian:</b> ' + fmt(m.ingat) + '</div>' : '') + '</article>';
    }).join('');
    $('#mtJump').innerHTML = D.materi.map(function (m) { return '<a class="chip" href="#modul-' + m.no + '">M' + m.no + '</a>'; }).join('');
    observeReveals($('#materiList'));
  }
  $('#mtTest').addEventListener('click', function () {
    var on = $('#materiList').classList.toggle('cloze-test');
    this.classList.toggle('active', on);
    this.setAttribute('aria-pressed', on);
    if (on) $$('#materiList .cloze').forEach(function (c) { c.classList.remove('revealed'); });
    toast(on ? 'Mode tebak aktif 🙈' : 'Mode tebak mati', on ? 'Klik kotak ungu untuk membuka istilahnya.' : 'Semua istilah terlihat lagi.');
  });
  $('#materiList').addEventListener('click', function (e) {
    var c = e.target.closest('.cloze');
    if (c && $('#materiList').classList.contains('cloze-test')) c.classList.add('revealed');
  });
  $('#materiList').addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.cloze')) { e.preventDefault(); e.target.click(); } });

  /* ================= Progres ================= */
  function essayScore(list) {
    return list.reduce(function (n, e) {
      var s = (state.essays[e.id] || {}).status;
      return n + (s === 'siap' ? 1 : s === 'ragu' ? 0.5 : 0);
    }, 0);
  }
  function renderProgress() {
    var siap = 0, ragu = 0, lupa = 0;
    D.essays.forEach(function (e) {
      var s = (state.essays[e.id] || {}).status;
      if (s === 'siap') siap++; else if (s === 'ragu') ragu++; else if (s === 'lupa') lupa++;
    });
    var eRatio = essayScore(D.essays) / D.essays.length;
    var dCorrect = Object.keys(state.drill.correct || {}).length, dRatio = dCorrect / D.drill.length;
    var fPaham = D.flash.filter(function (c) { return state.flash[c.id] === 'paham'; }).length, fRatio = fPaham / D.flash.length;
    var planDone = D.plan.filter(function (_, i) { return state.plan[i]; }).length;
    var overall = Math.round((eRatio * 0.4 + dRatio * 0.3 + fRatio * 0.3) * 100);
    $('#overallPct').textContent = overall + '%';

    var cards = [
      { l: '🔥 Soal dosen siap', v: siap + '/' + D.essays.length, p: pct(siap, D.essays.length), s: '🤔 ragu ' + ragu + ' · 😵 belum ' + lupa },
      { l: '⚡ Soal drill dikuasai', v: dCorrect + '/' + D.drill.length, p: pct(dCorrect, D.drill.length), s: 'Skor terbaik: ' + (state.drill.best || 0) + '% · ' + (state.drill.runs || 0) + 'x drill' },
      { l: '🃏 Flashcard paham', v: fPaham + '/' + D.flash.length, p: pct(fPaham, D.flash.length), s: 'Ulangi yang "Lupa" sebelum tidur' },
      { l: '🗺️ Rencana belajar', v: planDone + '/' + D.plan.length, p: pct(planDone, D.plan.length), s: 'Total kesiapan: ' + overall + '%' }
    ];
    var grid = $('#progressGrid');
    if (!grid.children.length) {
      grid.innerHTML = cards.map(function (c, i) {
        return '<div class="pcard glass reveal" style="--d:' + (i * 80) + 'ms"><div class="plabel"></div><div class="pval"></div><div class="bar"><i></i></div><div class="psub"></div></div>';
      }).join('');
      observeReveals(grid);
    }
    $$('.pcard', grid).forEach(function (el, i) {
      var c = cards[i];
      $('.plabel', el).textContent = c.l; $('.pval', el).textContent = c.v; $('.psub', el).textContent = c.s;
      $('.bar i', el).style.width = c.p + '%';
    });

    var kp = $('#kisiProgress');
    kp.innerHTML = '<b>Kesiapan per kisi-kisi UTS</b>' + D.kisi.map(function (k) {
      var list = k.soal.map(function (id) { return essayById[id]; });
      var p = pct(essayScore(list), list.length);
      return '<div class="kp-row"><span>Kisi ' + k.id + ': ' + k.title + '</span><div class="bar"><i style="width:' + p + '%"></i></div><span>' + p + '%</span></div>';
    }).join('');
    D.kisi.forEach(function (k) {
      var bar = $('[data-kisi-bar="' + k.id + '"]');
      if (bar) bar.style.width = pct(essayScore(k.soal.map(function (id) { return essayById[id]; })), k.soal.length) + '%';
    });
  }
  $('#resetAll').addEventListener('click', function () {
    if (!window.confirm('Hapus semua progres, draf jawaban, dan status flashcard di browser ini?')) return;
    var theme = state.theme;
    state = defaults(); state.theme = theme; save();
    renderPlan(); renderEssayList(); initFlash();
    toast('Progres dihapus', 'Mulai lagi dari awal.');
  });

  /* ================= Perilaku scroll ================= */
  var revealObs = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      $$('.count', en.target).forEach(function (c) { if (!c.dataset.done) { c.dataset.done = 1; countUp(c); } });
      revealObs.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;
  function observeReveals(root) {
    $$('.reveal:not(.in)', root || document).forEach(function (el) {
      if (revealObs) revealObs.observe(el); else el.classList.add('in');
    });
  }

  var navLinks = $$('#mainNav a');
  if ('IntersectionObserver' in window) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id); });
        var act = $('#mainNav a.active');
        if (act && act.scrollIntoView && window.innerWidth < 640) {
          var nav = $('#mainNav');
          nav.scrollTo({ left: act.offsetLeft - nav.clientWidth / 2 + act.clientWidth / 2, behavior: 'smooth' });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main > section[id]').forEach(function (s) { navObs.observe(s); });
  }

  var blobs = $$('.bg-blobs span'), ticking = false;
  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    $('#scrollProgress').style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    $('#topbar').classList.toggle('scrolled', y > 20);
    $('#toTop').classList.toggle('show', y > 700);
    if (!reduceMotion) {
      blobs.forEach(function (b, i) { b.style.transform = 'translate3d(0,' + (y * (0.06 + i * 0.04)) * (i % 2 ? -1 : 1) + 'px,0)'; });
    }
    var tl = $('#timeline'), fill = $('#timelineFill');
    if (tl) {
      var r = tl.getBoundingClientRect();
      var prog = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height));
      fill.style.height = (prog * 100) + '%';
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener('resize', function () { if (running) sizeCanvas(); });
  $('#toTop').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }); });

  /* ================= Keyboard ================= */
  document.addEventListener('keydown', function (e) {
    if (e.target.matches('textarea, input, select') || e.metaKey || e.ctrlKey || e.altKey) return;
    var flashSec = $('#flash'), drillSec = $('#drill');
    if (inView(flashSec) && fq.length) {
      if (e.key === ' ') { e.preventDefault(); flipCard(); return; }
      if (e.key === 'ArrowRight') { $('#flashNext').click(); return; }
      if (e.key === 'ArrowLeft') { $('#flashPrev').click(); return; }
      if (e.key === '1') { rateFlash('lupa'); return; }
      if (e.key === '2') { rateFlash('ragu'); return; }
      if (e.key === '3') { rateFlash('paham'); return; }
    }
    if (inView(drillSec) && drill && !$('#drillPlay').hidden) {
      var n = parseInt(e.key, 10);
      if (n >= 1 && n <= (drill.opts || []).length) { answerDrill(n - 1); return; }
      if (e.key === 'Enter' && drill.answered) { e.preventDefault(); nextDrill(); }
    }
  });

  /* ================= Mulai ================= */
  renderHero();
  renderPlan();
  renderKisi();
  renderEssayList();
  renderDrillSetup();
  initFlash();
  renderContekan();
  renderMateri();
  renderProgress();
  observeReveals(document);
  onScroll();
})();

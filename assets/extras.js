/* PEC · статистика посещений и кнопки «Ошибка?».
 * Файл НЕ генерируется gen.py — правится вручную. На страницах он подключается одной строкой:
 *   <script defer src="../assets/extras.js"></script>   (на главной — "assets/extras.js")
 * Настройки — в CONFIG ниже.
 */
(function () {
  "use strict";
  var CONFIG = {
    // Статистика GoatCounter (бесплатно, без cookies, баннер о cookies не нужен).
    // Зарегистрируйтесь на https://www.goatcounter.com/signup, впишите сюда свой код (например "pec-matematika").
    // Пока пусто — статистика выключена и ничего никуда не отправляется.
    goatcounter: "",
    // Куда ведёт кнопка «Ошибка?». {title} и {text} заменяются на описание места, где нажали кнопку.
    // GitHub Issues — работает сразу, но студенту нужен аккаунт GitHub.
    // Google Form:  "https://docs.google.com/forms/d/e/<ID>/viewform?usp=pp_url&entry.<N>={text}"
    // Telegram:     "https://t.me/share/url?url=&text={text}"
    feedback: "https://github.com/stepanbelotelov/pec-matematika/issues/new?title={title}&body={text}"
  };

  var LINE = /\/cvut\//.test(location.pathname) ? "ČVUT" : /\/vse\//.test(location.pathname) ? "VŠE" : "";
  var $ = function (id) { return document.getElementById(id); };
  var txt = function (n) { return n ? n.textContent.replace(/\s+/g, " ").trim() : ""; };

  /* ---------- статистика ---------- */
  // Каждая открытая тема (#lekce-3, #du-3, #banka, #zkouska…) считается отдельной страницей:
  // в отчёте видно, какие темы открывают и до какой темы доходят.
  function base() { return location.pathname.replace(/index\.html$/, ""); }
  function count(path, title, event) {
    var gc = window.goatcounter;
    if (!gc || !gc.count) return;
    try { gc.count({ path: path, title: title || document.title, event: !!event }); } catch (e) {}
  }
  function countHash() {
    var h = location.hash.replace(/^#/, "");
    if (!h || h.indexOf("pb-") === 0) return;
    var v = $("viewer"), name = v && !v.hidden ? txt($("vtitle-b")) : txt($("stitle"));
    count(base() + h, (LINE ? LINE + " · " : "") + (name || h));
  }
  if (CONFIG.goatcounter && navigator.onLine !== false) {
    // первый просмотр страницы (без хеша) — сам скрипт GoatCounter; хеши — вручную
    var s = document.createElement("script");
    s.async = true; s.src = "https://gc.zgo.at/count.v4.js";
    s.dataset.goatcounter = "https://" + CONFIG.goatcounter + ".goatcounter.com/count";
    s.onload = function () { setTimeout(countHash, 300); };
    document.head.appendChild(s);
    // заголовок окна заполняется после смены хеша — ждём кадр
    window.addEventListener("hashchange", function () { setTimeout(countHash, 300); });
  }

  /* ---------- кнопка «Ошибка?» ---------- */
  /* ---------- «Что нового» ---------- */
  // Новости — в assets/news.json (правится вручную, gen.py его не трогает):
  //   {"date": "2026-11-28", "line": "all" | "VŠE" | "ČVUT", "title": "…", "text": "…", "link": "#banka"}
  // На главной линии — карточка с тремя последними новостями, «Все новости» открывают окно #novinky.
  if (LINE && typeof openSheet === "function" && typeof go === "function") (function () {
    var SEEN = "pec-news-seen-" + LINE, NEW_DAYS = 7;
    var newsCss = document.createElement("style");
    newsCss.textContent =
      ".pec-news{grid-column:1/-1;display:grid;gap:12px}" +
      ".line-cvut .pec-news{margin-top:18px;padding:18px 24px}" +
      ".pec-news-h{display:flex;gap:10px;align-items:center;flex-wrap:wrap}" +
      ".pec-news-badge{font-size:12px;font-weight:600;padding:3px 9px;border-radius:999px;background:var(--accent-bg);color:var(--fg)}" +
      ".line-cvut .pec-news-badge{border-radius:0;font-family:var(--f-mono);border:1px solid var(--accent)}" +
      ".pec-news-list{list-style:none;margin:0;padding:0;display:grid;gap:2px}" +
      ".pec-news-it{display:flex;gap:12px;align-items:baseline;padding:8px 0;color:var(--fg);text-decoration:none;border-top:1px solid var(--line);min-height:40px;box-sizing:border-box}" +
      ".pec-news-list li:first-child .pec-news-it{border-top:0}" +
      "a.pec-news-it:hover .pec-news-t{text-decoration:underline;text-underline-offset:3px}" +
      "a.pec-news-it:focus-visible{outline:3px solid var(--gold,#E0C15A);outline-offset:2px}" +
      ".pec-news-it time{flex:none;min-width:84px;font-size:13px;color:var(--muted);font-variant-numeric:tabular-nums}" +
      ".line-cvut .pec-news-it time{font-family:var(--f-mono);font-size:12px}" +
      ".pec-news-t{font-weight:600;min-width:0}" +
      ".pec-news-dot{flex:none;margin-left:auto;font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--accent)}" +
      ".line-vse .pec-news-dot{color:color-mix(in srgb,var(--accent) 78%,var(--fg))}" +
      ".pec-news>.chip{justify-self:start}" +
      ".pec-news-full{display:grid;gap:12px}" +
      ".pec-news-item{display:grid;gap:6px;padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:var(--paper)}" +
      ".line-cvut .pec-news-item{border-radius:0}" +
      ".pec-news-item.is-new{border-color:var(--accent)}" +
      ".pec-news-item h4{margin:0;font-size:16px}" +
      ".pec-news-item p{margin:0;color:var(--muted);line-height:1.5;font-size:14px}" +
      ".pec-news-item .chip{justify-self:start}" +
      ".pec-news-meta{display:flex;gap:10px;align-items:center;font-size:13px;color:var(--muted)}" +
      "@media (max-width:560px){.pec-news-list li:nth-child(n+3){display:none}.pec-news-it{flex-wrap:wrap;gap:2px 10px}.pec-news-it time{min-width:0}.pec-news-t{flex-basis:100%}.pec-news-dot{margin-left:0;order:-1}}";
    document.head.appendChild(newsCss);
    var items = [], card = null;
    var seen = null; try { seen = localStorage.getItem(SEEN); } catch (e) {}
    if (!seen) seen = new Date(Date.now() - NEW_DAYS * 864e5).toISOString().slice(0, 10); // первый визит: новые — за последнюю неделю
    var isNew = function (n) { return n.date > seen; };
    var markSeen = function () { if (!items.length) return; seen = items[0].date; try { localStorage.setItem(SEEN, seen); } catch (e) {} draw(); };
    var fmt = function (d) { var p = d.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]).toLocaleDateString("ru-RU", { day: "numeric", month: "long" }); };
    var mk = function (tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
    var nNew = function () { return items.filter(isNew).length; };
    var badge = function (n) { return n + " " + (n % 10 === 1 && n % 100 !== 11 ? "новая" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? "новые" : "новых"); };
    var follow = function (link) { if (link && /^#[\w-]+$/.test(link)) go(link.slice(1)); };

    function draw() {
      if (!items.length) return;
      var host = $("bento"); if (!host) return;
      if (!card) {
        card = mk("section", "pec-news " + (typeof IS_CVUT !== "undefined" && IS_CVUT ? "hud" : "tile"));
        card.setAttribute("aria-labelledby", "pec-news-h");
      }
      // место: под карточкой следующей темы, иначе под темой недели
      var after = $("nextcard") || $("week");
      if (after && after.parentNode === host) { if (after.nextSibling !== card) after.after(card); } else if (card.parentNode !== host) host.prepend(card);
      card.replaceChildren();
      var h = mk("div", "pec-news-h"); var lb = mk("span", "lbl", "Что нового"); lb.id = "pec-news-h"; h.append(lb);
      var k = nNew(); if (k) h.append(mk("span", "pec-news-badge", badge(k)));
      var ul = mk("ul", "pec-news-list");
      items.slice(0, 3).forEach(function (n) {
        var li = mk("li", isNew(n) ? "is-new" : "");
        var a = mk(n.link ? "a" : "span", "pec-news-it");
        if (n.link) { a.href = n.link; a.dataset.go = n.link.slice(1); a.addEventListener("click", function (e) { e.preventDefault(); follow(n.link); }); }
        var t = mk("time", null, fmt(n.date)); t.dateTime = n.date;
        a.append(t, mk("span", "pec-news-t", n.title));
        if (isNew(n)) a.append(mk("span", "pec-news-dot", "новое"));
        li.append(a); ul.append(li);
      });
      // data-go: после закрытия окна страница возвращает фокус на кнопку с той же целью (карточка к этому времени перерисована)
      var all = mk("button", "chip", items.length > 3 ? "Все новости (" + items.length + ")" : "Все новости"); all.type = "button"; all.dataset.go = "novinky";
      all.addEventListener("click", function () { go("novinky"); });
      card.append(h, ul, all);
    }

    function showNews() {
      if (!items.length) return;
      openSheet("Новости курса · " + LINE, "Что нового");
      var body = $("sbody"), list = mk("div", "pec-news-full");
      items.forEach(function (n) {
        var it = mk("article", "pec-news-item" + (isNew(n) ? " is-new" : ""));
        var top = mk("div", "pec-news-meta"); var t = mk("time", null, fmt(n.date)); t.dateTime = n.date; top.append(t);
        if (isNew(n)) top.append(mk("span", "pec-news-dot", "новое"));
        it.append(top, mk("h4", null, n.title));
        if (n.text) it.append(mk("p", null, n.text));
        if (n.link) { var b = mk("button", "chip", "Открыть"); b.type = "button"; b.addEventListener("click", function () { follow(n.link); }); it.append(b); }
        list.append(it);
      });
      body.append(list);
      markSeen(); // всё в окне увидено: отметки «новое» в окне остаются до закрытия, на главной — пропадают
    }

    window.addEventListener("hashchange", function () { if (location.hash === "#novinky") showNews(); });
    fetch((LINE ? "../" : "") + "assets/news.json").then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (d) {
      items = (Array.isArray(d) ? d : []).filter(function (n) { return n && n.date && n.title && (!n.line || n.line === "all" || n.line === LINE); })
        .sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });
      draw();
      if (location.hash === "#novinky") showNews();
    }).catch(function () {});
    // главная перерисовывает плитку недели и отсчёт — держим карточку под ними
    if (window.MutationObserver && $("bento")) new MutationObserver(function () { if (card && items.length && ($("nextcard") || $("week")) && (($("nextcard") || $("week")).nextSibling !== card)) draw(); }).observe($("bento"), { childList: true });
  })();

  if (!LINE || !CONFIG.feedback) return;

  function feedbackUrl(where) {
    var title = "Ошибка: " + where.split("\n")[0];
    var text = where + "\n\nЧто не так:\n\n\n—\nСтраница: " + location.href + "\nБраузер: " + navigator.userAgent;
    return CONFIG.feedback.replace("{title}", encodeURIComponent(title)).replace("{text}", encodeURIComponent(text));
  }
  function link(cls, label, where) {
    var a = document.createElement("a");
    a.className = "pec-fb " + cls; a.target = "_blank"; a.rel = "noopener";
    a.textContent = label;
    // адрес и подпись для программ чтения с экрана собираются в момент фокуса или нажатия:
    // при загрузке страницы заголовок окна ещё пуст, а окно потом меняется
    var upd = function () { var w = where(); a.href = feedbackUrl(w); a.setAttribute("aria-label", "Сообщить об ошибке: " + w); };
    a.setAttribute("aria-label", "Сообщить об ошибке");
    a.addEventListener("pointerdown", upd); a.addEventListener("focus", upd); a.addEventListener("click", upd);
    a.href = "#"; return a;
  }

  var css = document.createElement("style");
  css.textContent =
    ".pec-fb{font-size:12px;font-weight:500;color:var(--muted,#5F6B7A);text-decoration:underline;text-underline-offset:2px;white-space:nowrap;display:inline-flex;align-items:center;min-height:32px;padding:0 4px}" +
    ".pec-fb:hover{color:var(--accent,#2A64A8)}" +
    ".pec-fb:focus-visible{outline:3px solid #E0C15A;outline-offset:2px;border-radius:4px}" +
    ".etask .eh .pec-fb{margin-left:auto;min-height:24px}" +
    ".shead .pec-fb{margin-left:auto;margin-right:8px;align-self:center}" +
    ".vbar .pec-fb{color:inherit;opacity:.75;font-size:13px;padding:0 8px}" +
    "@media (max-width:560px){.vbar .pec-fb{display:none}" +
    // на телефоне ссылка шапки окна — значок ⚑ в строке подписи над заголовком (см. ниже): в ряду с «×» она сжимала заголовок
    ".shead .k{display:inline}.shead .pec-fb.in-kind{display:inline-flex;vertical-align:middle;font-size:0;text-decoration:none;width:28px;min-height:24px;margin:-4px 0 -4px 4px;padding:0;justify-content:center}" +
    ".shead .pec-fb.in-kind::before{content:'\\2691';font-size:15px;line-height:1;color:var(--muted,#5F6B7A)}}";
  document.head.appendChild(css);

  // 1) в шапке окна (самопроверка, разминка, пробный экзамен, банк…)
  var shead = document.querySelector(".shead"), sclose = $("sclose"), skind = $("skind");
  if (shead && sclose) {
    var narrow = window.matchMedia && matchMedia("(max-width:560px)").matches;
    var fbSheet = link(narrow ? "in-sheet in-kind" : "in-sheet", "Ошибка?", function () {
      return LINE + " · " + [txt($("skind")), txt($("stitle"))].filter(Boolean).join(" · ");
    });
    // телефон: сразу после подписи окна (skind — отдельный элемент, его текст меняется, а ссылка остаётся рядом)
    if (narrow && skind) skind.parentNode.insertBefore(fbSheet, skind.nextSibling); else shead.insertBefore(fbSheet, sclose);
  }
  // 2) в панели просмотра PDF (лекции и ДЗ) — с номером страницы
  var vopen = $("vopen");
  if (vopen) {
    vopen.parentNode.insertBefore(link("in-viewer", "Ошибка?", function () {
      return LINE + " · " + txt($("vtitle-b")) + (txt($("vpage")) ? " · " + txt($("vpage")) : "");
    }), vopen);
  }
  // 3) в каждой задаче (банк, пробный экзамен, срезы) — задачи рисуются на лету, поэтому следим за DOM
  function tagTasks(root) {
    var list = root.querySelectorAll ? root.querySelectorAll(".etask .eh") : [];
    for (var i = 0; i < list.length; i++) {
      var eh = list[i];
      if (eh.querySelector(".pec-fb")) continue;
      (function (eh) {
        eh.appendChild(link("in-task", "Ошибка?", function () {
          var card = eh.closest(".etask");
          return LINE + " · " + txt($("stitle")) + " · " + [].map.call(eh.children, function (c) { return c.classList.contains("pec-fb") ? "" : txt(c); }).filter(Boolean).join(" · ") + (card && card.id ? " [" + card.id + "]" : "");
        }));
      })(eh);
    }
  }
  var sbody = $("sbody");
  if (sbody && window.MutationObserver) {
    new MutationObserver(function (ms) {
      for (var i = 0; i < ms.length; i++) for (var j = 0; j < ms[i].addedNodes.length; j++) {
        var n = ms[i].addedNodes[j]; if (n.nodeType === 1) tagTasks(n.parentNode || n);
      }
    }).observe(sbody, { childList: true, subtree: true });
  }
})();

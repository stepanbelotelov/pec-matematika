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

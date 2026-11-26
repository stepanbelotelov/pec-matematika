#!/usr/bin/env python3
"""Банк задач přijímaček: из tasks.json + sources.json собирает
- tasks.site.json — задачи в формате сайта (как DATA[].exam: q, src, body, opts, letters, key, sol), по темам;
- BANK.md — читаемый обзор по уровням сложности со ссылками на источники.

Правила банка: текст задачи — только оригинал вуза (без переформулировок); задачи, которые
пока переписаны из курса не дословно, помечены needs_original=true и ждут сверки с PDF.
Тема 0 = «Ostatní» — задачи вне 35 тем плана.

Запуск: python3 bank/build.py  (без зависимостей)
"""
import html
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

HERE = Path(__file__).resolve().parent
TASKS = json.loads((HERE / "tasks.json").read_text(encoding="utf-8"))
SOURCES = {s["id"]: s for s in json.loads((HERE / "sources.json").read_text(encoding="utf-8"))}

PLAN = {1: "Množina. Podmnožina", 2: "Mocnina. Odmocnina", 3: "Rovnice (lineární, kvadratické, soustava rovnic)", 4: "Rovnice s parametrem",
        5: "Rovnice s absolutní hodnotou", 6: "Nerovnice. Soustava nerovnic", 7: "Nerovnice s absolutní hodnotou", 8: "Iracionální rovnice. Iracionální nerovnice",
        9: "Funkce (lineární, kvadratická, lomená). Grafy", 10: "Exponenciální funkce", 11: "Exponenciální rovnice a nerovnice", 12: "Logaritmická funkce",
        13: "Logaritmické rovnice a nerovnice", 14: "Goniometrické funkce", 15: "Goniometrické rovnice a nerovnice", 16: "Komplexní čísla",
        17: "Goniometrický tvar komplexního čísla. Moivreova věta", 18: "Posloupnosti", 19: "Aritmetická posloupnost", 20: "Geometrická posloupnost",
        21: "Kombinatorika. Faktoriál", 22: "Variace. Permutace. Kombinace", 23: "Kombinační číslo. Binomická věta", 24: "Pravděpodobnost",
        25: "Analytická geometrie. Vektory", 26: "Parametrická rovnice přímky", 27: "Obecná rovnice přímky", 28: "Vzájemná poloha přímek",
        29: "Směrnicový a úsekový tvar rovnice přímky", 30: "Kuželosečky. Kružnice", 31: "Elipsa", 32: "Hyperbola", 33: "Parabola",
        34: "Planimetrie", 35: "Stereometrie", 0: "Ostatní"}
TOPIC_KEY = lambda n: "ostatni" if n == 0 else str(n)          # ключ в tasks.site.json
TOPIC_ORDER = lambda n: 99 if n == 0 else n                       # «Ostatní» — в конце
LEVEL = {1: "Уровень 1 — базовый", 2: "Уровень 2 — стандартный", 3: "Уровень 3 — сложный"}
FIDELITY = {"original": "", "reworded": "přeformulováno", "adapted": "upraveno"}
FIDELITY_RU = {"original": "текст оригинала (по курсу)", "reworded": "в курсе пересказано — заменить оригиналом",
               "adapted": "в курсе изменён вопрос — заменить оригиналом"}


def body_points(n):
    return "bod" if n == 1 else ("body" if 2 <= n <= 4 else "bodů")


def src_line(t):
    """Подпись источника в том же стиле, что уже используется на сайте."""
    fid = FIDELITY[t["fidelity"]]
    if t["faculty"] == "FIT":
        inner = f"příklad {t['num']}, {t['points']} {body_points(t['points'])}" + (f"; {fid}" if fid else "")
        return f"FIT ČVUT, vzorová přijímací zkouška {t['year']} ({inner})"
    if t["faculty"] == "FEL":
        parts = ([f"příklad {t['num']}"] if t["num"] else []) + ([fid] if fid else [])
        return "FEL ČVUT, vzorový přijímací test VZOR01" + (f" ({'; '.join(parts)})" if parts else "")
    if t["faculty"] == "FBMI":
        parts = ([f"úloha {t['num']}"] if t["num"] else []) + ([fid] if fid else [])
        return "FBMI ČVUT, přijímací zkouška Bc 2020/21" + (f" ({'; '.join(parts)})" if parts else "")
    num = f", úloha {t['num']}" if t.get("num") else ""
    return f"{t['faculty']} {t['uni']}, {t['exam']}{num}" + (f" ({fid})" if fid else "")


def src_url(t):
    """Ссылка на конкретный PDF: для FIT — по году (только для годов, подтверждённых поиском)."""
    src = SOURCES[t["source"]]
    if src.get("url_pattern") and t.get("year") in src.get("years_confirmed", []):
        return src["url_pattern"].replace("RRRR", str(t["year"]))
    return src.get("url") if t.get("year") in src.get("years_confirmed", [t.get("year")]) else src.get("index", src.get("url"))


def tex_to_spans(s):
    """$…$ → <span class="m" data-tex="…"></span> (как в DATA на сайте)."""
    return re.sub(r"\$([^$]+)\$", lambda m: f'<span class="m" data-tex="{html.escape(m.group(1), quote=True)}"></span>', s)


def site_item(t, q):
    out = {"q": q, "src": src_line(t), "body": tex_to_spans(t["body"])}
    if t["type"] == "mc":
        out.update(opts=[tex_to_spans(o) for o in t["opts"]], letters=t["letters"], key=t["key"])
    else:
        out["answer"] = tex_to_spans(t["answer"])
    if t.get("sol"):
        out["sol"] = tex_to_spans(t["sol"])
    out.update(id=t["id"], level=t["level"], topics=t["topics"], needs_original=t["needs_original"])
    return out


def check(tasks):
    ids = Counter(t["id"] for t in tasks)
    assert not [i for i, c in ids.items() if c > 1], "повторяющиеся id"
    for t in tasks:
        src = SOURCES.get(t["source"])
        assert src and src.get("include") is True, f"{t['id']}: источник не разрешён для банка"
        assert t["level"] in LEVEL and t["fidelity"] in FIDELITY, t["id"]
        assert t["needs_original"] == (t["fidelity"] != "original"), t["id"]
        assert t["topics"] and all(n in PLAN for n in t["topics"]), t["id"]
        if t["type"] == "mc":
            assert len(t["opts"]) == len(t["letters"]) and t["key"] in t["letters"], t["id"]
        else:
            assert "opts" not in t and t.get("answer"), t["id"]
        assert (t["body"] + "".join(t.get("opts", []))).count("$") % 2 == 0, t["id"]


def main():
    check(TASKS)
    order = sorted(TASKS, key=lambda t: (TOPIC_ORDER(t["topics"][0]), t["level"], t["faculty"], t["year"] or 0, t["num"] or 0))

    # tasks.site.json: {тема: [задачи]} — по первой (основной) теме; «ostatni» для задач вне плана
    by_topic = defaultdict(list)
    for t in order:
        n = t["topics"][0]
        by_topic[n].append(site_item(t, f"P{len(by_topic[n]) + 1}"))
    site = {TOPIC_KEY(k): v for k, v in sorted(by_topic.items(), key=lambda kv: TOPIC_ORDER(kv[0]))}
    (HERE / "tasks.site.json").write_text(json.dumps(site, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

    # BANK.md
    lv = Counter(t["level"] for t in TASKS)
    fac = Counter(f"{t['uni']} {t['faculty']}" for t in TASKS)
    todo = sum(t["needs_original"] for t in TASKS)
    lines = ["# Банк задач přijímaček — обзор", "",
             "Файл собирается скриптом `build.py` из `tasks.json` и `sources.json`; вручную не редактировать.", "",
             f"Всего задач: **{len(TASKS)}** · " + " · ".join(f"{LEVEL[k].split(' — ')[1]}: {lv[k]}" for k in sorted(lv)) +
             " · " + " · ".join(f"{k}: {v}" for k, v in fac.most_common()), "",
             f"⚠ **{todo}** задач пока записаны так, как они пересказаны в курсе, — их текст нужно заменить дословным оригиналом из PDF (пометка ⚠ в карточке). Ответы у всех задач проверены.", "",
             "## Покрытие тем курса", "", "| № | Тема | Ур. 1 | Ур. 2 | Ур. 3 | Всего |", "|---|---|---|---|---|---|"]
    for n, name in sorted(PLAN.items(), key=lambda kv: TOPIC_ORDER(kv[0])):
        c = Counter(t["level"] for t in TASKS if t["topics"][0] == n)
        lines.append(f"| {n if n else '—'} | {name} | {c[1] or ''} | {c[2] or ''} | {c[3] or ''} | {sum(c.values()) or '—'} |")
    lines += ["", "Задача считается по основной (первой) теме; дополнительные темы указаны в карточке. «Ostatní» — задачи вне 35 тем плана.", ""]
    for level in sorted(LEVEL):
        lines += [f"## {LEVEL[level]}", ""]
        for t in [x for x in order if x["level"] == level]:
            url = src_url(t)
            topics = ", ".join(f"{n}. {PLAN[n]}" if n else PLAN[n] for n in t["topics"])
            mark = "⚠ " if t["needs_original"] else ""
            lines += [f"### {mark}`{t['id']}` — [{src_line(t)}]({url})" if url else f"### {mark}`{t['id']}` — {src_line(t)}", "",
                      f"*Темы:* {topics} · *Текст:* {FIDELITY_RU[t['fidelity']]}" + (f" · *В курсе:* {t['in_course']}" if t.get("in_course") else ""), "",
                      t["body"], ""]
            if t["type"] == "mc":
                lines += [f"- **{L})** {o}" for L, o in zip(t["letters"], t["opts"])] + [""]
            ans = (f"**{t['key']}** — " if t["type"] == "mc" else "") + t["answer"]
            lines += ["<details><summary>Ответ и решение</summary>", "", ans + (f". {t['sol']}" if t.get("sol") else ""), ""]
            if t.get("note"):
                lines += [f"*Примечание:* {t['note']}", ""]
            lines += ["</details>", ""]
    (HERE / "BANK.md").write_text("\n".join(lines), encoding="utf-8")
    print(f"ok: {len(TASKS)} задач, темы {list(site)}; уровни {dict(sorted(lv.items()))}; ждут оригинала: {todo}")


if __name__ == "__main__":
    main()

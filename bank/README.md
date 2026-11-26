# Банк задач přijímaček технических вузов Чехии

Банк реальных задач вступительных экзаменов по математике для последующего добавления на сайт. Банк для линии VŠE — в [`vse/`](vse/README.md) (те же правила и формат, сборка `python3 bank/build.py bank/vse`). Папка не связана с генератором `_Web/gen.py` — страницы `cvut/` и `vse/` она не трогает.

## Правила банка

- **Вузы:** все технические вузы Чехии.
- **Авторские права:** в банк не попадают источники, где использование явно ограничено. Это CERMAT (Matematika+, Matematika rozšiřující), архив DML-CZ (только для личного использования) и платные книги. Такие источники остаются в каталоге с пометкой «не в банк».
- **Текст задач — только оригинал.** Формулировки не переписываются, и варианты ответа, которых нет в оригинале, не добавляются.
- **Уровни:** три (см. ниже).
- **Темы:** номер темы из плана курса 1–35; задачи вне плана — тема `0` «Ostatní».
- **Задачи, которые уже есть на сайте, остаются** в банке. Где именно они на сайте — в поле `in_course`.

## Что внутри сейчас

**63 задачи** из открыто опубликованных образцов ČVUT: FIT (43), FBMI (12), FEL (8). Обзор с ответами по уровням — в [BANK.md](BANK.md).

- Задачи взяты из материалов курса (лекции и ДЗ 1–12, пул пробного экзамена). **Все ответы пересчитаны заново** (вручную и в sympy), с ключами курса расхождений нет.
- **25 задач** записаны в курсе дословно.
- **38 задач** в курсе пересказаны («přeformulováno», «upraveno»). Они помечены `needs_original: true` (⚠ в `BANK.md`) и ждут замены текстом из оригинального PDF. Пока скачать оригиналы не получается: из рабочей среды сайты вузов недоступны.
- Варианты ответа, которые курс дописал сам (FEL VZOR01 и FIT 2018/8), из банка убраны. Эти задачи записаны как открытые.
- Темы 13–35 почти не покрыты. Следующий шаг — переписать оригиналы из каталога ниже: FIT 2015–2026 целиком, FJFI, FBMI, VUT FEKT/FSI/FAST, VŠB FBI, VŠCHT, TUL.

## Уровни сложности

| Уровень | Критерий | Типичный пример |
|---|---|---|
| **1 — базовый** | 1–2 шага, прямое применение определения или формулы | FBMI; задачи FIT за 3 балла; «obor hodnot paraboly» |
| **2 — стандартный** | стандартный многошаговый приём: система, метод интервалов, замена, нулевые точки | типичная задача FIT за 7 баллов; FEL |
| **3 — сложный** | параметр с особыми случаями, комбинация тем, нестандартная идея; часто правильный вариант — «Žádná z ostatních možností není správná» | FIT 2020/13, 2021/13, 2021/15, 2024/11, 2026/4 |

Уровень оценивает трудность для наших студентов, а не число баллов на экзамене: задача FIT за 7 баллов на проценты попала на уровень 1.

## Файлы

| Файл | Что это |
|---|---|
| `tasks.json` | **Источник правды.** Задачи с TeX в `$…$` |
| `sources.json` | Каталог найденных источников со ссылками; для каждого указано, можно ли брать в банк (`include`) и почему (`copyright`) |
| `build.py` | Проверяет данные и собирает `tasks.site.json` и `BANK.md`. Запуск: `python3 bank/build.py` |
| `tasks.site.json` | Задачи в формате сайта (как `DATA[].exam`: `q, src, body, opts, letters, key, sol` + `id, uni, fac, level, topics, needs_original`), по основной теме; задачи вне плана — под ключом `ostatni` |
| `BANK.md` | Читаемый обзор: покрытие тем и задачи по уровням, ответы спрятаны под спойлер |

Поля задачи в `tasks.json`:

- `id` — например, `fit-2022-06`;
- `uni`, `faculty`, `exam`, `year`, `num`, `points` — откуда задача;
- `source` — id записи в `sources.json`. `build.py` не пропустит источник с `include` ≠ `true`;
- `level` — 1–3;
- `topics` — номера тем плана 1–35, первая тема основная; `0` — Ostatní;
- `type` — `mc` (варианты как в оригинале) или `open`;
- `body`, `opts`, `letters`, `key` — условие, варианты, буквы вариантов и правильный ответ;
- `answer`, `sol` — ответ и краткое решение (решение наше, не из оригинала);
- `fidelity` — `original` (текст оригинала) / `reworded` (в курсе пересказано) / `adapted` (в курсе изменён вопрос);
- `needs_original` — `true`, пока текст не сверен с PDF и не заменён оригиналом;
- `in_course` — где задача уже есть на сайте;
- `note` — примечание.

## Каталог источников

Полные данные и все ссылки — в `sources.json`. Все документы найдены поиском; скачать их из рабочей среды пока нельзя.

### Идут в банк

| Вуз / факультет | Что опубликовано | Формат | Ответы |
|---|---|---|---|
| **ČVUT FIT** | [Vzorové přijímací zkoušky (Bc.)](https://fit.cvut.cz/cs/fakulta/informacni-deska), ежегодно 2015–2026; [2026 s řešením](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf) | A–E, 3 и 7 баллов (раньше 3/5) | есть |
| **ČVUT FEL** | [Řešení vzorového testu VZOR01](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-reseni-vzor01.pdf) | тест из 15 задач; варианты не опубликованы | решения |
| **ČVUT FJFI** | [Přijímací zkouška z matematiky (vzor)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf), [okruhy](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Okruhy_prijimaci_zkousky_Matematika.pdf) | 12 задач × 2 балла, 90 мин | ? |
| **ČVUT FBMI** | [Vzorové testové příklady Bc 2020/21](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf), [2021/22 IKZ](https://www.fbmi.cvut.cz/sites/default/files/2020-11/Bc_Matematika_22_21_IKZ.pdf) | a)–d) | ? |
| **ČVUT FSv** | [online-экзамен](https://mat.fsv.cvut.cz/eng/entrance/online), [PZ nanečisto](https://www.fsv.cvut.cz/prijimaci-zkouska-nanecisto/) | 15 задач, 5 вариантов | — |
| **ČVUT FD** | [Informace o písemných PZ 2021/22](https://www.fd.cvut.cz/storage/prijimaci-rizeni/pr2021-2022/priloha-3-2021-PL.pdf) | ? | ? |
| **VUT FEKT** | [MATEMATIKA 2024 – verze FEKT 01](https://vut.cz/pomocne2018/f151468/d267522/p273733), [2022](https://vut.cz/pomocne2018/f124247/d232373/p229505) | a)–e), в том числе комплексные числа | ? |
| **VUT FSI** | [zadání přijímacích zkoušek 2014](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179), [2017](https://vut.cz/pomocne2018/f69785/d158882/p149140) | выбор варианта | результаты |
| **VUT FAST** | [тест по математике и физике](https://www.fce.vutbr.cz/api/cs/dokument/9815) | 10 вопросов, смешанный | ? |
| **VŠB-TUO FBI** | реальные задачи 2013/14, 2015/16, [2017/18 с решениями](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf) | открытые задачи | 2017/18 |
| **VŠCHT** | [vzorový test (экономические программы)](https://studuj.vscht.cz/wp-content/uploads/2021/02/BC-ekonomove-matematika-prijimaci-zkouska-vzorovy-test.pdf) | выбор; последовательности, гониометрия, логарифмы, прямая | ? |
| **TUL** | [Přijímací test z matematiky 2021/22](https://www.fp.tul.cz/images/fakulta/ukazky_testu/2021/KAP_Ma_Bc_jednoobor_2021.pdf), [требования](https://new.fm.tul.cz/document/612) | ? | ? |

В найденных документах вузов явных ограничений на использование не обнаружено. Окончательно это видно только в самом PDF: при скачивании проверить титульную страницу и колонтитулы. На сайте источник всегда указывается в поле `src`.

### Не идут в банк

| Источник | Почему |
|---|---|
| CERMAT: Matematika+ 2014–2020, Matematika rozšiřující с 2021 | CERMAT прямо запрещает дальнейшее использование без письменного согласия |
| Архив DML-CZ: Bečvářová 2003 (в том числе экзамен FD ČVUT 2000), FS ČVUT 1993, FSv 1993 | [условия DML-CZ](https://www.dml.cz/use): только для личного использования |
| Petáková; Černý a kol., *Matematika – přijímací zkoušky na ČVUT* | платные книги |
| Lumos (lms.dreval.net) | курс третьей стороны — задачи берём из оригиналов FJFI |
| Подготовительные материалы FS ČVUT | упражнения, а не экзаменационные задачи (оставлены только в каталоге) |
| VŠST Liberec 1989 (копия на euroekonom.sk) | пока не берём: это копия на стороннем сайте, условия использования неизвестны |

Публичных образцов не нашлось у **ZČU** (FAV, FEL, FST), **Univerzita Pardubice** (FEI, DFJP), **UTB** (FAI), **ČZU TF** и **VŠB** FEI/FS/FAST. Многие из этих факультетов принимают без экзамена — по оценкам из школы.

## Как пополнять

1. Добавить задачу в `tasks.json` **дословно по PDF**, с `fidelity: "original"` и `needs_original: false`. Если источник новый — сначала добавить запись в `sources.json` с `include` и `copyright`.
2. Для задачи с ⚠ заменить `body` и `opts` текстом оригинала, затем поставить `fidelity: "original"` и `needs_original: false`.
3. Запустить `python3 bank/build.py`. Скрипт проверит id, варианты, темы и разрешённость источника и пересоберёт `tasks.site.json` и `BANK.md`.

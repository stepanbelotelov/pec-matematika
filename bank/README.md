# Банк задач přijímaček технических вузов Чехии

Банк реальных задач вступительных экзаменов по математике для последующего добавления на сайт. Банк для линии VŠE — в [`vse/`](vse/README.md) (те же правила и формат, сборка `python3 bank/build.py bank/vse`). Папка не связана с генератором `_Web/gen.py` — страницы `cvut/` и `vse/` она не трогает.

## Правила банка

- **Вузы:** все технические вузы Чехии.
- **Авторские права:** в банк не попадают источники, где использование явно ограничено. Это CERMAT (Matematika+, Matematika rozšiřující), архив DML-CZ (только для личного использования) и платные книги. Такие источники остаются в каталоге с пометкой «не в банк».
- **Текст задач — только оригинал.** Формулировки не переписываются, и варианты ответа, которых нет в оригинале, не добавляются. Исключение — **собственные задачи** (`vl-nsz-*`), которые заменяют задачи, защищённые авторским правом: это наши задачи того же типа, и на сайте они так и подписаны (см. ниже).
- **Уровни:** три (см. ниже).
- **Темы:** номер темы из плана курса 1–35; задачи вне плана — тема `0` «Ostatní».
- **Задачи, которые уже есть на сайте, остаются** в банке. Где именно они на сайте — в поле `in_course`.

## Что внутри сейчас

**1079 задач**: 863 — из открыто опубликованных образцов и реальных тестов технических вузов, **переписаны дословно из оригинальных PDF** с сайтов вузов; ещё 216 — **собственные задачи** в стиле NSZ Matematika (раздел ниже). Обзор с ответами по уровням — в [BANK.md](BANK.md).

| Источник | Задач в банке | Что взято | Ключ |
|---|---|---|---|
| ČVUT FIT, vzorové přijímací zkoušky (Bc.) | 195 | все 16 файлов с сайта FIT (подписи «pro rok 2015» … «pro rok 2027», у «pro rok 2015» — 4 verze) | «pro rok 2015» — крестики в PDF, 2025–2027 — из решений FIT, остальное посчитано нами |
| ČVUT FBMI, vzorové testové příklady Bc 2020/21 | 40 | все 40 úloh | отмечен в PDF |
| ČVUT FJFI, přijímací zkouška z matematiky (vzor) | 24 | обе варианты по 12 příkladů | в PDF |
| ČVUT FEL, vzorový přijímací test VZOR01 | 15 | все 15 příkladů | из řešení FEL |
| ČVUT FS, písemná přijímací zkouška z matematiky 2026 (verze CZ–1 … CZ–6) | 71 | все 72 příkladů (CZ–6 č. 10 = CZ–4 č. 10) | oficiální výsledky в PDF; в CZ–6 č. 6 ошибка знака — исправлено с примечанием |
| ČVUT MÚVS, vzorový test z matematiky AR 2025/26 (Ekonomika a management) | 10 | все 10 položek | klíč в PDF |
| VUT FEKT, MATEMATIKA 2022, 2023, 2024 (verze 01 и 02) | 86 | все úlohy, кроме úlohy 10 с графиком в 2023 и 2024 | 2022 — в PDF, 2023–2024 посчитано нами |
| VUT FSI, MATEMATIKA 2014 и 2017 (zadání č. 1–10) | 198 | 400 úloh, из них 198 разных: 2017 почти целиком повторяет 2014 | 2017 — зелёным в PDF (и сходится с нашими ответами 2014) |
| VUT FAST, kombinovaný test z matematiky a fyziky (otázky z matematiky 101–200) | 99 | всё, кроме 110 (в ключе ошибка) и физики | «+» в PDF |
| VŠB-TUO FBI, přijímací zkouška z matematiky AR 2013/14, 2015/16, 2017/18 | 78 | 13 вариантов (PZ) по 6 открытых задач | řešení в PDF |
| VŠB-TUO FAST, přijímací zkoušky – varianta 1 a 2 | 35 | 20 + 20 úloh, кроме тех, что без рисунка не решить (V1 č. 6, 19, 20; V2 č. 6, 20) | VÝSLEDKY в PDF |
| VŠCHT, ukázka vzorového testu (Bc., ekonomické programy) | 7 | все úlohy | посчитано нами |
| TUL FP, přijímací test z matematiky 2021/22 (Matematika, Bc.) | 5 | все úlohy (открытые, по 20 баллов) | řešení в PDF |

- **Повторы.** FIT из года в год повторяет задачи (иногда меняя только числа — такие считаются разными задачами). Одинаковые задачи хранятся один раз, остальные места указаны в поле `also_in` («Встречается также»). Всего в 232 задачах 288 повторов (больше всего у FSI: тест 2017 собран из задач 2014).
- **Ответы.** Где вуз опубликовал ключ или решение, ответ взят оттуда и пересчитан; у остальных посчитан нами. Все ответы проверены заново (вручную и в sympy).
- **Подписи FIT.** Имя файла на сайте FIT, подпись «pro rok X» и год, напечатанный в самом PDF, не совпадают: файл `…-2014-1.pdf` подписан «pro rok 2015», а в PDF стоит 2013. В банке `year` — это подпись «pro rok» на сайте FIT, номер файла и напечатанный год лежат в полях `file` и `printed`.
- **Уровни** (весь банк вместе с собственными задачами): 643 базовых, 393 стандартных, 43 сложных. Покрыты все 35 тем плана. Задач вне плана («Ostatní») — 156, из них у вузов 105: в основном lomené výrazy и rozklad na součin, číselné soustavy, slovní úlohy na směsi, poměry a procenta.
- **Пропущены задачи с рисунком** (выбор функции по графику, длина стороны на чертеже): сайт пока не показывает картинки. Если рисунок только иллюстрирует условие (VŠB FAST V1 č. 5, V2 č. 5 и 19), задача взята, в `note` сказано, что рисунок не нужен.
- **Задачи, которые есть в курсе**, — 62, место в курсе указано в поле `in_course`.

### Расхождения курса с оригиналами

При сверке с PDF нашлись места, где задачи в курсе переписаны неточно. В банке везде текст оригинала; в материалах курса (`_Web/gen.py`, PDF лекций и ДЗ) их стоит поправить:

| Задача в банке | Где в курсе | В курсе | В оригинале | Ответ |
|---|---|---|---|---|
| `fit-2019-02` (FIT, файл 2019, příklad 2) | ДЗ 3, D7 | $a\star b=\frac{a+b}{a\cdot b}$ | $a\star b=\frac{a+b}{a-b}$ | меняется: было $x=-8$ (A), верно C «Žádná…» ($x=\frac{10}{7}$) |
| `fit-2019-08` (то же — FIT 2026, příklad 8) | ДЗ 7, D2; лекция 1, úloha 17 | $x\in(1,4)$, у вариантов другие скобки | $x\in(1;4\rangle$ | «Žádná…» в обоих случаях, но буква другая (D) |
| `fit-2020-05` (FIT, файл 2020, příklad 5) | лекция 6, úloha 18 | $y\in\langle0;12)$, вариант $\langle2;3)$ | $y\in\langle0,12\rangle$, вариант $\langle2,3\rangle$ | «Žádná…» в обоих случаях |
| `fit-2015-10` (FIT, файл 2015, příklad 10) | лекция 12, úloha 18 | в c) и e) $-\frac{e^{-1}}{2}$ | в c) и e) $\frac{-e-1}{2}$ | не меняется (D) |
| `fel-vzor01-1` (FEL VZOR01, příklad 1) | ДЗ 7, D1 | $2\lvert x+3\rvert<2$ (потерян показатель) | $2^{\lvert x+3\rvert}<2$ | не меняется: $(-4,-2)$ |
| `fit-2026-04` (FIT 2026, příklad 4) | лекция 1, úloha 16 | условие пересказано | дословный текст — в банке | не меняется (B) |

Самое важное — `fit-2019-02`: в курсе у этой задачи неверный ответ относительно оригинала.

### Собственные задачи вместо задач Scio (`vl-nsz-*`)

**216 задач**, которые мы написали сами (одинаковые в обоих банках). Тесты Scio NSZ Matematika защищены авторским правом: на каждой странице «© Scio», а [условия Scio](https://www.scio.cz/obchodni-podminky) запрещают копировать и распространять их материалы. Поэтому вместо них в банке свои задачи того же типа:

- **На какие задачи заменены:** все типы задач из 6 опубликованных тестов NSZ Matematika (únor 2025, březen I и II 2025, leden 2 2026, březen 2026, duben 2026) и из короткого образца на 8 задач.
- **Что сохранено:** метод решения и суть задачи (что проверяется, какой приём нужен).
- **Что своё:** числа, сюжет текстовых задач и формулировка. Задача с изменёнными только числами осталась бы переделкой чужого текста, поэтому сюжеты придуманы заново (другие герои, предметы и ситуации).
- **Порядок перемешан.** Номера `vl-nsz-001…216` не совпадают с номерами задач Scio, связи с конкретной задачей Scio в банке нет.
- **Задачи, которые Scio вычеркнуло (NOK) или которые решаются только по рисунку,** заменены своей корректной версией или пропущены.
- **Ответы** проверены: вычислительные — в sympy, логические и комбинаторные — перебором в скрипте.
- **На сайте** такие задачи подписаны «Vlastní úloha ve stylu NSZ Matematika (č. N)», в фильтре вуза у них кнопка «Vlastní». В `tasks.json` — `fidelity: "own"`, источник `vlastni-nsz`.

Уровни собственных задач: 95 базовых, 107 стандартных, 14 сложных. Основная тема — одна из 26 тем плана или Ostatní (51 задача: проценты, логика, делимость, текстовые задачи).

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

Полные данные и все ссылки — в `sources.json`. Документы скачаны с сайтов вузов; ссылки в таблице ведут на оригинальные PDF.

### Идут в банк

| Вуз / факультет | Что опубликовано | Формат | Ответы |
|---|---|---|---|
| **ČVUT FIT** | [Vzorové přijímací zkoušky (Bc.)](https://fit.cvut.cz/cs/fakulta/informacni-deska), ежегодно 2015–2026; [2026 s řešením](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf) | A–E, 3 и 7 баллов (раньше 3/5) | есть |
| **ČVUT FEL** | [Vzorový test VZOR01](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf) и [řešení](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-reseni-vzor01.pdf) | 15 задач a)–e) | решения |
| **ČVUT FJFI** | [Přijímací zkouška z matematiky (vzor)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf), [okruhy](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Okruhy_prijimaci_zkousky_Matematika.pdf) | 2 варианты × 12 задач по 2 балла, a)–e) | в PDF |
| **ČVUT FS** | [Písemná přijímací zkouška z matematiky 2026](https://campuscvut.sharepoint.com/:b:/s/FS-12000-Public/IQA5OXjLExVeTqGeb9XrEY9_Ab4vPHs7n-KIV9pl31hfrdw?e=wdNCea), 6 verzí ([stránka vzorových testů](https://www.fs.cvut.cz/zajemci-o-studium/informace-o-prijimacim-rizeni/vzorove-testy/prijimacky-bc/)) | 12 открытых задач по 2 балла, 60 минут | výsledky в PDF |
| **ČVUT MÚVS** | [Vzorový test z matematiky AR 2025/26](https://www.muvs.cvut.cz/dokumenty/studium/vzorove-testy/b0413_ekonomika-a-management_2025.pdf) (B0413 Ekonomika a management) | 10 задач a)–e) по 1 баллу, 30 минут | klíč в PDF |
| **ČVUT FBMI** | [Vzorové testové příklady Bc 2020/21](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf), [2021/22 IKZ](https://www.fbmi.cvut.cz/sites/default/files/2020-11/Bc_Matematika_22_21_IKZ.pdf) (те же 40 задач) | a)–d) | отмечены в PDF |
| **VUT FEKT** | MATEMATIKA [2022](https://vut.cz/pomocne2018/f124247/d232373/p229505), [2023](https://vut.cz/pomocne2018/f137459/d248394/p249980), [2024](https://vut.cz/pomocne2018/f151468/d267522/p273733) — verze 01 и 02 | 15 задач a)–e) по 2/3/5 баллов | 2022 — в PDF |
| **VUT FSI** | [zadání přijímacích zkoušek 2014](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179), [2017](https://vut.cz/pomocne2018/f69785/d158882/p149140) | 10 вариантов по 20 задач a)–e) | 2017 — зелёным |
| **VUT FAST** | [тест по математике и физике](https://www.fce.vutbr.cz/api/cs/dokument/9815) | 100 вопросов по математике, 4 варианта | «+» в PDF |
| **VŠB-TUO FBI** | реальные задачи 2013/14, 2015/16, [2017/18 с решениями](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf) | 6 открытых задач в варианте, по 10 баллов | řešení во всех трёх |
| **VŠB-TUO FAST** | Přijímací zkoušky [varianta 1](https://www.fast.vsb.cz/export/sites/fast/230/.content/galerie-souboru/V01.pdf), [varianta 2](https://www.fast.vsb.cz/export/sites/fast/230/.content/galerie-souboru/V02.pdf) | 20 задач, 4 варианта | výsledky в PDF |
| **VŠCHT** | [vzorový test (экономические программы)](https://studuj.vscht.cz/wp-content/uploads/2021/02/BC-ekonomove-matematika-prijimaci-zkouska-vzorovy-test.pdf) | 7 задач a)–d) | нет |
| **TUL** | [Přijímací test z matematiky 2021/22](https://www.fp.tul.cz/images/fakulta/ukazky_testu/2021/KAP_Ma_Bc_jednoobor_2021.pdf) (FP, Matematika Bc.), [требования FM](https://new.fm.tul.cz/document/612) | 5 открытых задач | řešení в PDF |

В скачанных PDF ограничений на использование нет: в тексте и колонтитулах нет пометок об авторских правах или запрете распространения. На сайте источник всегда указан в поле `src`.

### Не идут в банк

| Источник | Почему |
|---|---|
| CERMAT: Matematika+ 2014–2020, Matematika rozšiřující с 2021 | CERMAT прямо запрещает дальнейшее использование без письменного согласия |
| Scio, NSZ Matematika: [6 опубликованных тестов 2025–2026](https://www.scio.cz/matematika) (210 задач, ключ выделен жирным) | © Scio; в [obchodní podmínky](https://www.scio.cz/obchodni-podminky) прямо запрещено копировать и «jiným způsobem šířit» материалы Scio. Нужно письменное согласие Scio, ссылки собраны в `sources.json` (`scio-mat`) |
| Архив DML-CZ: Bečvářová 2003 (в том числе экзамен FD ČVUT 2000), FS ČVUT 1993, FSv 1993 | [условия DML-CZ](https://www.dml.cz/use): только для личного использования |
| Petáková; Černý a kol., *Matematika – přijímací zkoušky na ČVUT* | платные книги |
| Lumos (lms.dreval.net) | курс третьей стороны — задачи берём из оригиналов FJFI |
| Подготовительные материалы FS ČVUT | упражнения, а не экзаменационные задачи (оставлены только в каталоге) |
| VŠST Liberec 1989 (копия на euroekonom.sk) | пока не берём: это копия на стороннем сайте, условия использования неизвестны |
| ČVUT FSv, [online-тесты](https://mat.fsv.cvut.cz/entrance/eng/online) | тренажёр: задачи генерируются из базы, которая, по словам кафедры, не совпадает с базой настоящих экзаменов; пример теста — только картинка на английском; на сайте © FSv |
| ČVUT FD, [Informace o písemných PZ 2021/22](https://www.fd.cvut.cz/storage/prijimaci-rizeni/pr2021-2022/priloha-3-2021-PL.pdf) | только магистратура (авиация и т. п.), математики для бакалавриата нет |

Публичных образцов не нашлось у **ZČU** (FAV, FEL, FST), **Univerzita Pardubice** (FEI, DFJP), **UTB** (FAI), **ČZU TF** и **VŠB** FEI/FS. Многие из этих факультетов принимают без экзамена — по оценкам из школы.

## Как пополнять

1. Добавить задачу в `tasks.json` **дословно по PDF**, с `fidelity: "original"` и `needs_original: false`. Если источник новый — сначала добавить запись в `sources.json` с `include` и `copyright`.
2. Для задачи с ⚠ заменить `body` и `opts` текстом оригинала, затем поставить `fidelity: "original"` и `needs_original: false`.
3. Запустить `python3 bank/build.py`. Скрипт проверит id, варианты, темы и разрешённость источника и пересоберёт `tasks.site.json` и `BANK.md`.

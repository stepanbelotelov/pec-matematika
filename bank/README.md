# Банк задач přijímaček технических вузов Чехии

Черновой банк реальных задач вступительных экзаменов по математике для последующего добавления на сайт. Папка не связана с генератором `_Web/gen.py` — страницы `cvut/` и `vse/` она не трогает.

## Что внутри сейчас (v0)

**63 задачи** из открыто опубликованных образцов ČVUT: FIT (43), FBMI (12), FEL (8). Обзор с ответами по уровням — в [BANK.md](BANK.md).

Это задачи, которые уже переписаны в материалах курса (лекции и ДЗ 1–12, пул пробного экзамена). Здесь они собраны в одном месте, к каждой добавлены точный источник, уровень сложности, темы плана и краткое решение. **Все ответы пересчитаны заново** (вручную и в sympy), с ключами курса расхождений нет.

Сверить формулировки с оригинальными PDF не удалось: из рабочей среды сайты вузов недоступны. Поле `fidelity` показывает, насколько формулировка близка к оригиналу, — так, как это записано в курсе.

Задач по темам 13–35 (гониометрия, комплексные числа, последовательности, комбинаторика, вероятность, аналитическая геометрия, планиметрия, стереометрия) почти нет: в курсе их ещё не переписывали. Основной следующий шаг — переписать оригиналы из каталога ниже.

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
| `sources.json` | Каталог найденных источников (24 записи) со ссылками и статусом |
| `build.py` | Собирает `tasks.site.json` и `BANK.md`, проверяет данные. Запуск: `python3 bank/build.py` |
| `tasks.site.json` | Задачи в формате сайта (как `DATA[].exam`: `q, src, body, opts, letters, key, sol` + `id, level, topics`), сгруппированы по основной теме |
| `BANK.md` | Читаемый обзор: покрытие тем и задачи по уровням, ответы спрятаны под спойлер |

Поля задачи в `tasks.json`:

- `id` — например, `fit-2022-06`;
- `uni`, `faculty`, `exam`, `year`, `num`, `points` — откуда задача;
- `source` — id записи в `sources.json`;
- `level` — 1–3;
- `topics` — номера тем плана 1–35, первая тема основная;
- `type` — `mc` или `open`;
- `body`, `opts`, `letters`, `key` — условие, варианты, буквы вариантов и правильный ответ;
- `answer`, `sol` — ответ и краткое решение;
- `fidelity` — насколько текст близок к оригиналу:
  - `original` — дословно;
  - `reworded` — пересказано, числа и варианты сохранены (на сайте «přeformulováno»);
  - `adapted` — изменён вопрос или формат;
  - `options_added` — условие оригинала, варианты дописаны курсом;
- `in_course` — где задача уже есть на сайте (чтобы не дублировать);
- `note` — примечание.

## Каталог источников

Полные данные и все ссылки — в `sources.json`. Статус «не скачано» означает, что из этой среды сайт недоступен. Сам документ существует: он найден поиском.

### ČVUT

| Факультет | Что опубликовано | Формат | Ответы |
|---|---|---|---|
| **FIT** | [Vzorové přijímací zkoušky (Bc.)](https://fit.cvut.cz/cs/fakulta/informacni-deska), ежегодно 2015–2026; [2026 s řešením](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf) | A–E, 3 и 7 баллов (раньше 3/5) | есть |
| **FEL** | [Řešení vzorového testu VZOR01](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-reseni-vzor01.pdf) | тест из 15 задач; варианты не опубликованы | решения |
| **FJFI** | [Přijímací zkouška z matematiky (vzor)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf), [okruhy](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Okruhy_prijimaci_zkousky_Matematika.pdf) | 12 задач × 2 балла, 90 мин | ? |
| **FBMI** | [Vzorové testové příklady Bc 2020/21](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf), [2021/22 IKZ](https://www.fbmi.cvut.cz/sites/default/files/2020-11/Bc_Matematika_22_21_IKZ.pdf) | a)–d) | ? |
| **FSv** | [online-экзамен](https://mat.fsv.cvut.cz/eng/entrance/online), [PZ nanečisto](https://www.fsv.cvut.cz/prijimaci-zkouska-nanecisto/) | 15 задач, 5 вариантов | — |
| **FS** | [подготовительный курс 2026](https://www.fs.cvut.cz/aktuality/3155-212/pripravny-kurz-z-matematiky-pro-prijimaci-zkousky-2026), [Repetitorium](https://users.fs.cvut.cz/nikola.pajerova/RepM_zadani.pdf), [Opakovací kurz 2011](https://marian.fsik.cvut.cz/~mraz/Mat1-Mater2011/OpakovKurs_2011proWEB.pdf) | упражнения, не тест | частично |
| **FD** | [Informace o písemných PZ 2021/22](https://www.fd.cvut.cz/storage/prijimaci-rizeni/pr2021-2022/priloha-3-2021-PL.pdf) | ? | ? |
| архив | Bečvářová, «Přijímací zkoušky na ČVUT včera a dnes», Učitel matematiky 2003: [часть 1](https://www.dml.cz/bitstream/handle/10338.dmlcz/150796/UcitelMat_011-2003-1_8.pdf), [часть 2](https://dml.cz/bitstream/handle/10338.dmlcz/150804/UcitelMat_011-2003-2_5.pdf) (в том числе экзамен FD 2000); [FS ČVUT 1993](https://www.dml.cz/bitstream/handle/10338.dmlcz/152235/UcitelMat_001-1993-4_15.pdf); [FSv 1993](https://www.dml.cz/bitstream/handle/10338.dmlcz/152206/UcitelMat_001-1993-3_8.pdf) | исторические задания | ? |

### Другие технические вузы

| Вуз | Что опубликовано | Формат |
|---|---|---|
| **VUT FEKT** | [MATEMATIKA 2024 – verze FEKT 01](https://vut.cz/pomocne2018/f151468/d267522/p273733), [2022](https://vut.cz/pomocne2018/f124247/d232373/p229505) | a)–e), в том числе комплексные числа |
| **VUT FSI** | [zadání přijímacích zkoušek 2014](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179), [2017](https://vut.cz/pomocne2018/f69785/d158882/p149140) | выбор варианта |
| **VUT FAST** | [тест по математике и физике](https://www.fce.vutbr.cz/api/cs/dokument/9815) | 10 вопросов, смешанный |
| **VŠB-TUO FBI** | реальные задачи 2013/14, 2015/16, [2017/18 с решениями](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf) | открытые задачи |
| **VŠCHT** | [vzorový test (экономические программы)](https://studuj.vscht.cz/wp-content/uploads/2021/02/BC-ekonomove-matematika-prijimaci-zkouska-vzorovy-test.pdf) | выбор; последовательности, гониометрия, логарифмы, прямая |
| **TUL** | [требования](https://new.fm.tul.cz/document/612); исторические тесты VŠST 1989 ([var. 4](https://www.euroekonom.sk/download2/testy-prijimacky-vs-matematika/Matematika-HFTU-Liberec-PrZk-FH89_var4.pdf), [var. 6](https://www.euroekonom.sk/download2/testy-prijimacky-vs-matematika/Matematika-HFTU-Liberec-PrZk-FH89_var6.pdf)) | ? |
| **CERMAT** | **Matematika+** 2014–2020 ([отчёт 2020 с тестом и ключом](https://data.cermat.cz/files/files/Matematika/MA-plus_2020_hodnotici_zprava.pdf)), с 2021 **Matematika rozšiřující** ([vzorové řešení 2024](https://maturita.cermat.cz/files/files/MXMAD24C1T0P_vzorove-reseni.pdf)). Результат засчитывается вместо přijímaček на ряде технических факультетов (FIT и FEKT VUT, FSv ČVUT и др.; списки вузов у CERMAT) | 50 баллов, 150 мин; открытые и закрытые задачи |

Не найдено публичных образцов: **ZČU** (FAV, FEL, FST), **Univerzita Pardubice** (FEI, DFJP), **UTB** (FAI), **ČZU TF**, **VŠB** FEI/FS/FAST. Многие из этих факультетов принимают без экзамена — по оценкам из школы.

### Книги

- J. Petáková, *Matematika – příprava k maturitě a k přijímacím zkouškám na VŠ* (Prometheus). Её рекомендуют FBMI, FS ČVUT и TUL. Платная.
- J. Černý a kol., *Matematika – přijímací zkoušky na ČVUT* (Nakladatelství ČVUT, 2001, 2007). Это база, из которой ČVUT брал задачи на экзамен. Платная.

Свободно доступны только статьи DML-CZ и подготовительные материалы FS ČVUT (выше).

## Авторские права

Образцы вузов опубликованы открыто, но тексты принадлежат вузам. На сайте указываем источник в поле `src` — так курс уже делает. **CERMAT прямо запрещает** дальнейшее использование своих тестов без письменного согласия. Задачи Matematika+ и Matematika rozšiřující переносить на сайт только после разрешения или в собственной переформулировке с другими числами.

## Как пополнять

1. Добавить задачу в `tasks.json`. Если источник новый — сначала добавить запись в `sources.json`.
2. Запустить `python3 bank/build.py`. Скрипт проверит id, буквы вариантов, темы и источники и пересоберёт `tasks.site.json` и `BANK.md`.
3. Для сайта брать элементы из `tasks.site.json`. Их формат совпадает с `DATA[].exam`; поля `id`, `level`, `topics` — дополнительные.

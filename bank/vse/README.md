# Банк задач přijímaček VŠE

Банк реальных задач вступительного теста по математике VŠE (Vysoká škola ekonomická v Praze) для линии VŠE. Устроен так же, как банк технических вузов в `bank/`: те же правила, поля, уровни и темы (см. [`../README.md`](../README.md)). Лежит в отдельной папке, чтобы задачи VŠE не попали в модуль банка на странице ČVUT. На сайте банк открывается на странице линии VŠE: модуль «Банк задач» и окно `#banka` загружают `bank/vse/tasks.site.json`.

Сборка: `python3 bank/build.py bank/vse`. Скрипт создаёт `tasks.site.json` (формат сайта) и `BANK.md` (обзор по уровням с ответами).

## Правила

- **Текст задачи — только оригинал VŠE**, дословно по PDF. Пересказов из курса в банке больше нет.
- **Не берём источники с ограничениями:** Scio (тесты «для индивидуальной подготовки»), платные книги, сайты третьих сторон с неизвестными условиями.
- **Уровни 1–3; темы плана 1–35; вне плана — 0 «Ostatní».** Для VŠE сюда попадают проценты, составление выражений и упрощение lomených výrazů.
- **Задачи, которые уже есть на сайте, остаются;** где они на сайте — в поле `in_course`.

## Что внутри сейчас

**36 задач**, все переписаны дословно из оригинальных PDF с vse.cz:

- **Vzorový test z matematiky – FMV** — 11 příkladů (1–7, 11–14), id `vse-vzor-NN`. Образец FFÚ/FPH содержит те же задачи под теми же номерами (только баллы 6/15/10 вместо 60/150/100), образец FIS — те же задачи под номерами 1–5 и 9–14. Это указано в поле `also_in`.
- **Vzorový test – FIS** — ещё 3 задачи, которых нет у FMV (příklady 6–8), id `vse-fis-NN`.
- **Vzor přijímacích zkoušek A и B** кафедры математики (KMAT) — по 11 задач (1, 3–12), id `vse-a-NN`, `vse-b-NN`.

Ответы:

- В образцах FMV, FFÚ/FPH и FIS правильный вариант выделен красным, ключ взят оттуда и пересчитан.
- В тестах A и B ключ на сайте не опубликован. Ответы мы посчитали сами и затем сверили с версией тестов с выделенными результатами (KMAT VŠE): все 22 совпали.

Уровни: 16 базовых, 15 стандартных, 5 сложных. Покрыты темы 1–4, 6–13, 15, 19, 28, 30 и Ostatní.

Особенности записи:

- В тестах A и B интервалы набраны знаками «<» и «>» (например «<0; 9>», «(−∞; −2 >∪< 2; ∞)»). В банке они записаны как ⟨ ⟩.
- **Задача 2 в A и B (свойства функции по графику) пропущена:** сайт пока не показывает картинки.

## Как поступают на VŠE (бакалавриат, приём 2027/28)

Сведения с сайтов VŠE и факультетов, проверены 27. 11. 2026. Приём заявок идёт с 1. 12. 2026 по 30. 4. 2027 через [prihlasky.vse.cz](https://prihlasky.vse.cz); сбор — 1 050 Kč.

| Факультет | Вступительный экзамен | Когда | Без экзамена (prominutí) |
|---|---|---|---|
| **FFÚ** ([условия](https://ffu.vse.cz/prijimackybs/)) | тест по математике (100 баллов, 60 мин, можно пользоваться таблицей формул кафедры) и по английскому (100 баллов, 45 мин); порядок по сумме | 8. 6. 2027 | по оценкам за чешский/словацкий, математику и английский — только с матурой по чешскому или словацкому; «nanečisto» FFÚ не учитывает |
| **FMV** ([условия](https://fmv.vse.cz/bakalarske-studium/prijimaci-rizeni/)) | математика, английский и второй язык: французский, немецкий, русский или испанский, но не официальный язык страны своего гражданства; нужны пороги и по сумме, и по каждому тесту | 9. 6. 2027 | по 21 оценке за математику и два языка; ≥ 60 % в каждом тесте «nanečisto» для FMV; 45 кредитов «nultého ročníku» VŠE; олимпиады |
| **FPH**, программа Podniková ekonomika a management ([условия](https://fph.vse.cz/uchazeci/bakalarske-studium/prijimaci-zkousky/podminky-prijeti-do-bc-podnikova-ekonomika-a-management/)) | математика и один иностранный язык, по 45 мин, на компьютерах VŠE | июнь 2027 | по оценкам (чешский/словацкий, математика, английский); ≥ 75 % в каждой части «nanečisto» для FPH; олимпиады |
| **FIS** ([условия](https://fis.vse.cz/bakalarske-studium/prijimaci-rizeni/)) | только Scio NSZ OSP/VŠP (вербальная часть 0,3 + аналитическая 0,7), своего теста по математике нет | Scio, 12/2026–05/2027 | средняя оценка по математике и отдельно по английскому за 7 свидетельств до 1,75; Matematika rozšiřující от 50 %; олимпиады |
| **NF** ([условия](https://nf.vse.cz/wp-content/uploads/Podminky-prijimaciho-rizeni-bakalari-2027-2028.pdf)) | только Scio NSZ OSP/VŠP, засчитываются тесты с 6/2024 по 5/2027 | Scio | по правилам факультета |
| **FM**, Jindřichův Hradec ([условия](https://fm.vse.cz/wp-content/uploads/page/11080/podminky_bc_27_28.pdf)) | только Scio NSZ OSP/VŠP | Scio, 5. 12. 2026–24. 4. 2027 | средняя оценка до 1,90 за 7 свидетельств по математике и двум другим предметам; олимпиады |

**Тест VŠE по математике** (общий для FFÚ, FMV, FPH; [описание кафедры](https://kmat.vse.cz/pripravne-kurzy/obsah-prijimaci-zkousky/)):

- Каждая задача — 5 вариантов ответа, верный ровно один.
- Никаких пособий, кроме выдаваемой таблицы формул: [vzorce (PDF, 2 стр.)](https://kmat.vse.cz/wp-content/uploads/page/44/vzorce_uprava2.pdf). Тренироваться стоит именно с ней.
- Две части:
  - **příklady z obecné matematiky:** úpravy výrazů, rovnice a nerovnice, soustavy, posloupnosti, funkce, exponenciální a logaritmická funkce, goniometrické funkce, komplexní čísla, kombinatorika, analytická geometrie;
  - **slovní úlohy:** rovnice a soustavy, přímá a nepřímá úměra, společná práce, výroky a množiny (Vennův diagram), procenta, průměr, kombinatorika, posloupnosti, geometrie.
- Литература, которую рекомендует кафедра: Klůfa, *Matematika k přijímacím zkouškám na VŠE a k úvodu do studia* (Ekopress, 2026); Otavová, Sýkorová, *Úvod do reálných funkcí pro studenty VŠE* (Ekopress, 2022).

**Важно для иностранцев.** На FFÚ, FMV и FPH иностранец без матуры по чешскому (кроме граждан Словакии) должен сначала сдать **вступительный тест по чешскому языку** ([kaj.vse.cz](https://kaj.vse.cz/prijimaci-zkouska-z-ceskeho-jazyka/)):

- когда: 7. 6. 2027, очно на VŠE (Žižkov); регистрация с 1. 3. по 28. 5. 2027;
- стоимость: 650 Kč;
- задания: чтение (понимание текста и лексико-грамматические упражнения) и аудирование короткого разговора на бытовые и слегка экономические темы;
- проходной балл: 36 из 60 (60 %);
- образцы: на странице KAJ (чтение, аудирование с записью, ключ) и [образец FPH](https://fph.vse.cz/wp-content/uploads/Vzorov%C3%A1-verze-vstupn%C3%ADho-testu-z-%C4%8CJ.pdf).

Prominutí по школьным оценкам у FFÚ, FPH и FM предусмотрено только для тех, кто сдаёт матуру по чешскому или словацкому, поэтому иностранцам там почти всегда нужен экзамен.

**Přijímačky nanečisto** ([nanecisto.vse.cz](https://nanecisto.vse.cz/informace/)) — пробный экзамен: тест по математике и по английскому (у FMV — по двум языкам), оценка как на настоящем, баллы за каждую задачу.

- Даты: 6. 3., 20. 3., 3. 4., 10. 4. и 24. 4. 2027 (субботы).
- Стоимость: 1 100 Kč за один день; регистрация откроется в декабре 2026, не позднее чем за 10 дней до даты.
- Prominutí по результату дают FMV (≥ 60 % в каждом тесте) и FPH (≥ 75 % в каждой части, только «nanečisto» для FPH); FFÚ результаты не учитывает.

## Каталог источников

### Идут в банк

| Источник | Что это | Формат |
|---|---|---|
| [Vzorový test – FMV](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fmv.pdf), [вариант FFÚ/FPH](https://fph.vse.cz/wp-content/uploads/MAT_vzor-ffu-a-fph.pdf) | официальный образец теста по математике; на странице [Zkušební testy z minulých let](https://www.vse.cz/zajemci-o-studium/bakalarske-obory/prijimaci-rizeni-a-prihlaska-ke-studiu/specifikace-obsahu-prijimacich-zkousek/zkusebni-testy-z-minulych-let/) — «zadání a řešení (2023)» | a)–e); в 1–7 последний вариант «jiná odpověď», в 11–14 — «Žádná z předchozích možností.»; ответ выделен красным |
| [Vzor přijímacích zkoušek A](https://www.vse.cz/wp-content/uploads/page/2128/test-A.pdf), [B](https://vse.cz/wp-content/uploads/page/2128/test-B.pdf); с результатами — [A](https://www.vse.cz/wp-content/uploads/page/153/test-A-s-vysledky.pdf), [B](https://www.vse.cz/wp-content/uploads/page/153/test-B-s-vysledky.pdf) | пробные тесты кафедры математики (KMAT) | a.–e., последний вариант «jiná odpověď»; ответы часто даны интервалом; ключ — в версии «s výsledky» |
| [Vzorový test – FIS](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fis.pdf) | образец FIS | a)–e); 1–8 по 5 баллов, 9–14 по 10 баллов; ответ выделен красным |

### Не идут в банк

| Источник | Почему |
|---|---|
| Scio: [OSP 2022](https://nf.vse.cz/wp-content/uploads/OSP_2022.pdf), [NSZ Matematika — 6 тестов 2025–2026](https://www.scio.cz/matematika) (210 задач, ссылки в `sources.json`, `scio-mat`) | © Scio, «для индивидуальной подготовки»; [obchodní podmínky](https://www.scio.cz/obchodni-podminky) запрещают копировать и распространять материалы Scio. Нужно письменное согласие Scio |
| Kaňka, Kaňková, *Přijímací zkoušky z matematiky na VŠE* (2007); Kaňka, *Přijímací zkoušky z matematiky na VŠ* (2010) | платные книги |
| Klůfa, *Matematika k přijímacím zkouškám na VŠE* (2011, полный набор вариантов 2011 года); *Sbírka příkladů z matematiky k přijímacím zkouškám na VŠE* | изданные книги, разрешения на перенос задач нет |
| [zkousky-nanecisto.cz](https://www.zkousky-nanecisto.cz/files/vse/vse-stare-vzor-reseni.pdf) | коммерческие курсы, условия неизвестны. Старый образец VŠE стоит искать в оригинале на vse.cz |
| [open-exam-prep.com](https://open-exam-prep.com/practice/cz-prijimacky-vse-matematika) | собственные тренировочные тесты третьей стороны |

## Чего пока нет

- **Задачи 2 из A и B** (по графику) — ждут поддержки картинок на сайте.
- **Других официальных задач VŠE в открытом доступе нет.** Проверены сайты:
  - www.vse.cz, kmat.vse.cz;
  - факультетов FFÚ, FMV, FPH, FIS, NF, FM;
  - nanecisto.vse.cz, kaj.vse.cz.

  Везде выложены только образцы, которые уже в банке, и их копии. Архив настоящих тестов прошлых лет VŠE не публикует. Пробный экзамен «nanečisto» проходит очно, его задания не выкладываются.
- **web.archive.org** из рабочей среды недоступен, поэтому прежние официальные образцы в архиве не проверены.

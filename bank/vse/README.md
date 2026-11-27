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

Собственный тест VŠE по математике пишут только **FFÚ, FMV и FPH** (на FPH — программа Podniková ekonomika a management). Остальные факультеты принимают по тестам Scio. Данные с [vse.cz](https://www.vse.cz/zajemci-o-studium/bakalarske-obory/prijimaci-rizeni-a-prihlaska-ke-studiu/specifikace-obsahu-prijimacich-zkousek/matematika/) и сайтов факультетов, проверено в ноябре 2026.

**Формат теста по математике** (общий для FFÚ, FMV, FPH):

- Каждая задача — 5 вариантов ответа, верный ровно один.
- Никаких пособий: калькулятор, телефон, таблицы запрещены. Таблица основных формул входит в задание (её публикует кафедра математики на kmat.vse.cz).
- Две части:
  - **příklady z obecné matematiky:** úpravy výrazů, rovnice a nerovnice, soustavy, posloupnosti, funkce, exponenciální a logaritmická funkce, goniometrické funkce, komplexní čísla, kombinatorika, analytická geometrie;
  - **slovní úlohy:** rovnice a soustavy, přímá a nepřímá úměra, společná práce, výroky a množiny (Vennův diagram), procenta, průměr, kombinatorika, posloupnosti, geometrie.
- Рекомендованная литература: Klůfa, *Úvod do matematiky pro studenty VŠE* (Ekopress, 2024); Otavová, Sýkorová, *Úvod do reálných funkcí pro studenty VŠE* (Ekopress, 2022).

**По факультетам:**

- **FPH** ([условия](https://fph.vse.cz/uchazeci/bakalarske-studium/prijimaci-zkousky/podminky-prijeti-do-bc-podnikova-ekonomika-a-management/)):
  - тест по математике и тест по одному иностранному языку, по 45 минут, на компьютерах VŠE, уровень — гимназическая матура;
  - prominutí: по оценкам чешской/словацкой школы (чешский/словацкий, математика, английский); за ≥ 75 % в каждой части экзамена «nanečisto» для FPH; за олимпиады;
  - заявки до 30. 4. 2027.
- **FFÚ:** тест по математике (до 100 баллов) и по английскому (до 100 баллов), порядок по сумме; prominutí по среднему баллу, порог объявляет декан. Это по тексту opatření děkana FFÚ 3/2023 в результатах поиска — сам сайт ffu.vse.cz отсюда недоступен.
- **FMV:** математика и два иностранных языка. По условиям 2026/27 математику можно не сдавать при матуре по математике; PDF с условиями на fmv.vse.cz отсюда недоступен.
- **FIS** ([условия 2027/28](https://fis.vse.cz/bakalarske-studium/prijimaci-rizeni/)):
  - **с 2027/28 только Scio NSZ OSP/VŠP** (вербальная часть — вес 0,3, аналитическая — 0,7), собственного теста по математике нет;
  - prominutí: средняя оценка по математике и отдельно по английскому за последние 7 свидетельств до 1,75; Matematika rozšiřující от 50 %; олимпиады;
  - образец FIS в банке поэтому — просто хорошая тренировка, а не формат нынешнего экзамена.
- **NF, FM** — тесты Scio. Условия всех факультетов — в `sources.json`, запись `vse-podminky`.

**Важно для иностранцев.** Кто сдавал матуру не по чешскому или словацкому, сдаёт ещё **вступительный тест по чешскому языку**. Его проводит кафедра английского языка VŠE: нужно не меньше 60 %, тест платный, регистрация отдельная. Пересдавать его нужно в каждом приёме, сертификатами не заменяется. [Образец теста](https://fph.vse.cz/wp-content/uploads/Vzorov%C3%A1-verze-vstupn%C3%ADho-testu-z-%C4%8CJ.pdf) — 9 страниц: аудирование, чтение, грамматика.

**Přijímací zkoušky nanečisto** (nanecisto.vse.cz) — пробный экзамен: математика и язык, оценка как на настоящем. На FMV, FPH, FIS и FM по его результатам в некоторых программах можно получить prominutí.

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
| Scio: [OSP 2022](https://nf.vse.cz/wp-content/uploads/OSP_2022.pdf), [Matematika](https://download.scio.cz/testy-pro-skoly-nove/test-MAT-pro-skoly.pdf), тесты NSZ | © Scio, тесты предназначены «для индивидуальной подготовки» |
| Kaňka, Kaňková, *Přijímací zkoušky z matematiky na VŠE* (2007); Kaňka, *Přijímací zkoušky z matematiky na VŠ* (2010) | платные книги |
| Klůfa, *Matematika k přijímacím zkouškám na VŠE* (2011, полный набор вариантов 2011 года); *Sbírka příkladů z matematiky k přijímacím zkouškám na VŠE* | изданные книги, разрешения на перенос задач нет |
| [zkousky-nanecisto.cz](https://www.zkousky-nanecisto.cz/files/vse/vse-stare-vzor-reseni.pdf) | коммерческие курсы, условия неизвестны. Старый образец VŠE стоит искать в оригинале на vse.cz |
| [open-exam-prep.com](https://open-exam-prep.com/practice/cz-prijimacky-vse-matematika) | собственные тренировочные тесты третьей стороны |

## Чего пока нет

- **Задачи 2 из A и B** (по графику) — ждут поддержки картинок на сайте.
- **Других официальных задач VŠE в открытом доступе нет.** На vse.cz опубликованы только пять документов, которые уже в банке. Архива настоящих прошлых тестов VŠE не публикует.
- **Не проверено: сеть этой рабочей среды не пускает на эти сайты.**
  - kmat.vse.cz — таблица формул; варианты A/B там, судя по поиску, те же;
  - fmv, ffu, nf, fm, nanecisto, kaj.vse.cz;
  - web.archive.org — там могли сохраниться прежние официальные образцы.

  Отдельная зацепка — FM (Jindřichův Hradec): раньше факультет писал, что на fm.vse.cz лежат «kompletní testy z přijímacího řízení z minulých let» собственного теста. Сейчас бакалавриат FM принимает по Scio.

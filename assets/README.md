# assets/ — файлы, которые правятся вручную

`gen.py` эту папку не трогает.

## extras.js — статистика и кнопки «Ошибка?»

Настройки — в `CONFIG` в начале файла:

- **`goatcounter`** — код сайта в [GoatCounter](https://www.goatcounter.com/signup) (бесплатно, без cookies). Пока поле пустое, статистика выключена. Каждая открытая тема считается отдельной страницей: `/cvut/lekce-3`, `/cvut/du-3`, `/vse/banka`, `/cvut/zkouska` и т. д.
- **`feedback`** — куда ведёт кнопка «Ошибка?». Сейчас это GitHub Issues. Для студентов удобнее Google Form или Telegram, примеры — в комментарии в файле.

Где появляются кнопки «Ошибка?»: в шапке любого окна (самопроверка, разминка, экзамен, банк), в панели просмотра PDF (кроме телефонов) и в каждой задаче банка, экзамена и срезов. В обращение автоматически попадают линия, окно, задача (id и источник), страница PDF и адрес.

## Что перенести в `_Web/gen.py`

Страницы `index.html`, `cvut/index.html` и `vse/index.html` пока поправлены вручную, и следующая сборка эти правки сотрёт. В шаблоны `gen.py` нужно добавить:

1. **Сразу после `<title>`** на страницах линий — мета-теги и подключение скрипта. Готовый текст можно скопировать из текущих `cvut/index.html` и `vse/index.html`: всё от `<meta name="description"` до `<script defer src="../assets/extras.js"></script>`.
2. **Заголовки**: `Matematika ČVUT · přijímačky · PEC` и `Matematika VŠE · přijímačky · PEC`.
3. **Главная** (`index.html`): новый `<title>`, `description`, блок `og:`/`canonical` и `<script defer src="assets/extras.js"></script>`.

Файлы `404.html`, `sitemap.xml`, `og.png`, `cvut/og.png` и `vse/og.png` gen.py не создаёт — они лежат в репозитории сами по себе. Если gen.py очищает папки `cvut/` и `vse/` перед сборкой, `og.png` нужно добавить в список сохраняемых файлов.

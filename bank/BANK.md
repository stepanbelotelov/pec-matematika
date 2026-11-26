# Банк задач přijímaček (технические вузы) — обзор

Файл собирается скриптом `bank/build.py` из `tasks.json` и `sources.json`; вручную не редактировать.

Всего задач: **648** · базовый: 397 · стандартный: 222 · сложный: 29 · VUT FSI: 198 · ČVUT FIT: 195 · VUT FEKT: 86 · VŠB FBI: 78 · ČVUT FBMI: 40 · ČVUT FJFI: 24 · ČVUT FEL: 15 · VŠCHT VŠCHT: 7 · TUL FP: 5

⚠ **0** задач пока записаны так, как они пересказаны в курсе, — их текст нужно заменить дословным оригиналом из PDF (пометка ⚠ в карточке). Ответы у всех задач проверены.

## Покрытие тем курса

| № | Тема | Ур. 1 | Ур. 2 | Ур. 3 | Всего |
|---|---|---|---|---|---|
| 1 | Množina. Podmnožina |  | 2 | 7 | 9 |
| 2 | Mocnina. Odmocnina | 34 | 4 |  | 38 |
| 3 | Rovnice (lineární, kvadratické, soustava rovnic) | 26 | 26 | 5 | 57 |
| 4 | Rovnice s parametrem | 4 | 7 | 2 | 13 |
| 5 | Rovnice s absolutní hodnotou | 2 | 8 |  | 10 |
| 6 | Nerovnice. Soustava nerovnic | 20 | 8 | 2 | 30 |
| 7 | Nerovnice s absolutní hodnotou | 9 | 6 |  | 15 |
| 8 | Iracionální rovnice. Iracionální nerovnice | 19 | 11 |  | 30 |
| 9 | Funkce (lineární, kvadratická, lomená). Grafy | 19 | 5 |  | 24 |
| 10 | Exponenciální funkce | 4 | 2 |  | 6 |
| 11 | Exponenciální rovnice a nerovnice | 21 | 17 |  | 38 |
| 12 | Logaritmická funkce | 16 | 10 |  | 26 |
| 13 | Logaritmické rovnice a nerovnice | 7 | 16 | 1 | 24 |
| 14 | Goniometrické funkce | 19 | 4 |  | 23 |
| 15 | Goniometrické rovnice a nerovnice | 11 | 19 | 1 | 31 |
| 16 | Komplexní čísla | 15 | 1 |  | 16 |
| 17 | Goniometrický tvar komplexního čísla. Moivreova věta | 1 |  |  | 1 |
| 18 | Posloupnosti |  | 1 |  | 1 |
| 19 | Aritmetická posloupnost | 12 | 2 | 2 | 16 |
| 20 | Geometrická posloupnost | 7 | 6 | 2 | 15 |
| 21 | Kombinatorika. Faktoriál | 2 | 2 | 1 | 5 |
| 22 | Variace. Permutace. Kombinace | 8 | 17 | 1 | 26 |
| 23 | Kombinační číslo. Binomická věta | 3 | 1 |  | 4 |
| 24 | Pravděpodobnost | 6 | 5 |  | 11 |
| 25 | Analytická geometrie. Vektory |  | 1 |  | 1 |
| 26 | Parametrická rovnice přímky | 2 |  |  | 2 |
| 27 | Obecná rovnice přímky | 15 | 1 |  | 16 |
| 28 | Vzájemná poloha přímek | 10 |  |  | 10 |
| 29 | Směrnicový a úsekový tvar rovnice přímky | 4 | 1 |  | 5 |
| 30 | Kuželosečky. Kružnice | 13 | 4 | 1 | 18 |
| 31 | Elipsa |  | 1 |  | 1 |
| 32 | Hyperbola | 2 | 1 |  | 3 |
| 33 | Parabola | 6 |  |  | 6 |
| 34 | Planimetrie | 16 | 1 |  | 17 |
| 35 | Stereometrie | 8 | 3 |  | 11 |
| — | Ostatní | 56 | 29 | 4 | 89 |

Задача считается по основной (первой) теме; дополнительные темы указаны в карточке. «Ostatní» — задачи вне 35 тем плана.

## Уровень 1 — базовый

### `fbmi-2021-01` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 1)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Úpravou výrazu $\sqrt[3]{a^2}\cdot\sqrt{a^3}$ získáme:

- **a)** $a$
- **b)** $a^{\frac{13}{6}}$
- **c)** $a^{\frac76}$
- **d)** $a^{\frac43}$

<details><summary>Ответ и решение</summary>

**b** — $a^{\frac{13}{6}}$. $a^{\frac23+\frac32}=a^{\frac{13}{6}}$.

</details>

### `fbmi-2021-02` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 2)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Úpravou výrazu $\sqrt{a^5}:\sqrt[3]{a}$ získáme:

- **a)** $a$
- **b)** $a^{\frac{13}{6}}$
- **c)** $a^{\frac76}$
- **d)** $a^{\frac43}$

<details><summary>Ответ и решение</summary>

**b** — $a^{\frac{13}{6}}$. $a^{\frac52-\frac13}=a^{\frac{13}{6}}$.

</details>

### `fbmi-2021-03` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 3)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Úpravou výrazu $a^{-2}\cdot\sqrt{a^3}$ získáme:

- **a)** $\frac{1}{\sqrt a}$
- **b)** $\sqrt{a^5}$
- **c)** $a^{-\frac32}$
- **d)** $\frac{1}{\sqrt[5]{a}}$

<details><summary>Ответ и решение</summary>

**a** — $\frac{1}{\sqrt a}$. $a^{-2+\frac32}=a^{-\frac12}$.

</details>

### `fbmi-2021-04` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 4)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Úpravou výrazu $\sqrt[3]{ab}\cdot\sqrt{ab^2}$ získáme:

- **a)** $ab^{\frac53}$
- **b)** $a^{\frac56}b^{\frac43}$
- **c)** $a^{\frac76}b$
- **d)** $a^{\frac43}b^{\frac23}$

<details><summary>Ответ и решение</summary>

**b** — $a^{\frac56}b^{\frac43}$. $a^{\frac13+\frac12}b^{\frac13+1}$.

</details>

### `fbmi-2021-05` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 5)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Úpravou výrazu $\frac{1}{\sqrt a}\cdot\sqrt{a^3}$ získáme:

- **a)** $a$
- **b)** $a^2$
- **c)** $a^{-\frac12}$
- **d)** $a^{\frac34}$

<details><summary>Ответ и решение</summary>

**a** — $a$. $a^{\frac32-\frac12}=a$.

</details>

### `fbmi-2021-06` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 6)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Úpravou výrazu $\frac{1}{\sqrt{ab}}\cdot\sqrt{a^3b}$ získáme:

- **a)** $a$
- **b)** $a^2b$
- **c)** $a^{\frac12}b$
- **d)** $a^{\frac34}$

<details><summary>Ответ и решение</summary>

**a** — $a$. $a^{\frac32-\frac12}b^{\frac12-\frac12}=a$.

</details>

### `fbmi-2021-07` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 7)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Úpravou výrazu $\left(\sqrt{a^3b^2}\right)^3$ získáme:

- **a)** $ab^{\frac13}$
- **b)** $a^6b^4$
- **c)** $a^{\frac12}b^{\frac32}$
- **d)** $a^{\frac92}b^3$

<details><summary>Ответ и решение</summary>

**d** — $a^{\frac92}b^3$. $\left(a^{\frac32}b\right)^3$.

</details>

### `fbmi-2021-08` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 8)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Úpravou výrazu $\frac{1}{\sqrt{ab}}:\sqrt{a^3b}$ získáme:

- **a)** $ab^{-2}$
- **b)** $a^{-2}$
- **c)** $a^{-\frac12}b^{-1}$
- **d)** $a^{-2}b^{-1}$

<details><summary>Ответ и решение</summary>

**d** — $a^{-2}b^{-1}$. $a^{-\frac12-\frac32}b^{-\frac12-\frac12}$.

</details>

### `vut-fekt-2022-v1-04` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 4, 2 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Jak lze přepsat výraz $a^{1/3}b^{-4}$?

- **a)** $\frac{\sqrt[4]b}{a^3}$
- **b)** $\frac{\sqrt[3]a}{\sqrt[4]b}$
- **c)** $-\frac{b^4}{a^3}$
- **d)** $-\sqrt[3]a\sqrt[4]b$
- **e)** $\frac{\sqrt[3]a}{b^4}$

<details><summary>Ответ и решение</summary>

**e** — $\frac{\sqrt[3]a}{b^4}$

</details>

### `vut-fekt-2022-v2-04` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 4, 2 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Jak lze přepsat výraz $a^{-2}(b^3+1)^{1/3}$?

- **a)** $\frac{\sqrt[3]{b^3+1}}{a^2}$
- **b)** $\frac{b+1}{a^2}$
- **c)** $-\frac{a^2}{\sqrt[3]{b^3+1}}$
- **d)** $(b+1)\sqrt a$
- **e)** $-\frac{a^2}{(b^3+1)^3}$

<details><summary>Ответ и решение</summary>

**a** — $\frac{\sqrt[3]{b^3+1}}{a^2}$

</details>

### `vut-fekt-2023-v1-01` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 1, 2 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Jak lze přepsat výraz $x^{\frac13}(x+1)^{-2}$?

- **a)** $-\sqrt[3]x\cdot(x+1)^2$
- **b)** $-\frac{(x+1)^2}{x^3}$
- **c)** $-\sqrt{x+1}\cdot\sqrt[3]x$
- **d)** $\frac{\sqrt[3]x}{(x+1)^2}$
- **e)** $\frac{\sqrt{x+1}}{x^3}$

<details><summary>Ответ и решение</summary>

**d** — $\frac{\sqrt[3]x}{(x+1)^2}$

</details>

### `vut-fekt-2023-v2-01` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 1, 2 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Jak lze přepsat výraz $x^{-2}(x-1)^{\frac13}$ ?

- **a)** $\frac{\sqrt[3]{x-1}}{x^2}$
- **b)** $\frac{\sqrt x}{(x-1)^3}$
- **c)** $-x^2\cdot\sqrt[3]{x-1}$
- **d)** $-\frac{\sqrt x}{(x-1)^3}$
- **e)** $-\sqrt x\cdot\sqrt[3]{x-1}$

<details><summary>Ответ и решение</summary>

**a** — $\frac{\sqrt[3]{x-1}}{x^2}$

</details>

### `vut-fekt-2024-v1-01` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 1, 2 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Zjednodušte výraz $\sqrt[7]{x^3\cdot\sqrt x}$, kde $x>0$.

- **a)** $x^{1/2}$
- **b)** $x^{-1/2}$
- **c)** $x^{4/7}$
- **d)** $x^{-4/7}$
- **e)** $x^{-7/4}$

<details><summary>Ответ и решение</summary>

**a** — $x^{1/2}$. $\left(x^{7/2}\right)^{1/7}=x^{1/2}$.

</details>

### `vut-fekt-2024-v2-01` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 1, 2 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Zjednodušte výraz $\sqrt[5]{x^2\cdot\sqrt x}$, kde $x>0$.

- **a)** $x^{1/2}$
- **b)** $x^{-1/2}$
- **c)** $x^{3/5}$
- **d)** $x^{-3/5}$
- **e)** $x^{-5/3}$

<details><summary>Ответ и решение</summary>

**a** — $x^{1/2}$. $\left(x^{5/2}\right)^{1/5}=x^{1/2}$.

</details>

### `fel-vzor01-mocniny` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 9, 1 bod)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 2, úloha 18

Výraz $\dfrac{6x^3b^3}{25y^4}\cdot\dfrac{15y}{b^2}$ je roven

- **a)** $\dfrac{2x^3b^5}{75y^5}$, pokud $y\ne0\wedge b\ne0\wedge x\ne0$
- **b)** $\dfrac{18bx^3}{5y^3}$, pokud $y\ne0\wedge b\ne0$
- **c)** $\dfrac{2x^3b^5}{75y^2}$, pokud $y\ne0\wedge b\ne0$
- **d)** $\dfrac{5bx^3}{18y^3}$, pokud $y\ne0$
- **e)** $\dfrac{18bx^3}{5y^3}$, pokud $y\ne0$

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{18bx^3}{5y^3}$, pokud $y\ne0\wedge b\ne0$. Krátíme; podmínky ze jmenovatelů $y\ne0$, $b\ne0$.

</details>

### `fit-2020-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2021 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2020.pdf)

*Темы:* 2. Mocnina. Odmocnina, 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Určete jakému výrazu se rovná druhá odmocnina podílu čísla $x$ a jeho převrácené hodnoty.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2019, příklad 4 (7 b)

- **a)** $1$
- **b)** $x$
- **c)** $|x|$
- **d)** Žádná z ostatních možností není správná.
- **e)** $\pm x$

<details><summary>Ответ и решение</summary>

**c** — $|x|$. $\sqrt{x:\frac1x}=\sqrt{x^2}=|x|$.

</details>

### `fit-2024-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2024 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2024.pdf)

*Темы:* 2. Mocnina. Odmocnina, 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 2, úloha 20; DÚ 8, D2

Určete jakému výrazu se rovná druhá odmocnina podílu nenulového čísla $x$ a jeho převrácené hodnoty.

- **a)** $|x|$
- **b)** $\pm x$
- **c)** $x$
- **d)** Žádná z ostatních možností není správná.
- **e)** $1$

<details><summary>Ответ и решение</summary>

**a** — $|x|$. $\sqrt{x:\frac1x}=\sqrt{x^2}=|x|$.

</details>

### `vut-fsi-2014-z2-01` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 1, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Je-li $a>0$, pak $\sqrt[6]{a^3}\cdot\sqrt[3]{a^{-2}}\cdot\sqrt a=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 2, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 2, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 1, 1 b)

- **a)** $a\sqrt a$
- **b)** $\sqrt[6]a$
- **c)** $\sqrt[3]a$
- **d)** $a^{\frac56}$
- **e)** $\sqrt a$

<details><summary>Ответ и решение</summary>

**c** — $\sqrt[3]a$. $a^{\frac12-\frac23+\frac12}=a^{\frac13}$.

</details>

### `vut-fsi-2014-z3-01` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 1, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Zjednodušte: $\dfrac{0{,}7t^{-n}}{2{,}1t^{-n-1}}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 1, 1 b)

- **a)** $\dfrac t3$
- **b)** $\dfrac3t$
- **c)** $\dfrac{10}3t$
- **d)** $\dfrac1{3t^n}$
- **e)** $3t$

<details><summary>Ответ и решение</summary>

**a** — $\dfrac t3$. $\frac{0{,}7}{2{,}1}t^{-n+n+1}=\frac t3$.

</details>

### `vut-fsi-2014-z4-01` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 1, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Je-li $a>0$, pak $\sqrt[5]{\left[\dfrac{a^{\frac12}\cdot a^{-1}}{\sqrt[3]a}\right]^{-3}}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 1, 1 b)

- **a)** $a$
- **b)** $\sqrt a$
- **c)** $\dfrac1{\sqrt a}$
- **d)** $\sqrt[3]a$
- **e)** $\sqrt[5]a$

<details><summary>Ответ и решение</summary>

**b** — $\sqrt a$. Závorka je $a^{\frac12-1-\frac13}=a^{-\frac56}$; $\left(a^{\frac52}\right)^{\frac15}=a^{\frac12}$.

</details>

### `vut-fsi-2014-z5-01` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 1, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Usměrněte zlomek $\dfrac{5\sqrt2+4\sqrt3}{5\sqrt2-4\sqrt3}$:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 1, 1 b)

- **a)** $98-40\sqrt6$
- **b)** $49-20\sqrt6$
- **c)** $49+20\sqrt6$
- **d)** $49\sqrt2-20\sqrt3$
- **e)** $49\sqrt2+20\sqrt6$

<details><summary>Ответ и решение</summary>

**c** — $49+20\sqrt6$. $\frac{(5\sqrt2+4\sqrt3)^2}{50-48}=\frac{98+40\sqrt6}2$.

</details>

### `vut-fsi-2014-z7-01` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 1, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Je-li $x>0;\ y>0;\ x\neq y$, pak $\dfrac{\sqrt x+\sqrt y}{x-y}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 1, 1 b)

- **a)** $\dfrac1{\sqrt{x-y}}$
- **b)** $\dfrac1{\sqrt x+\sqrt y}$
- **c)** $\dfrac1{\sqrt x-\sqrt y}$
- **d)** $\dfrac1{\sqrt{x+y}}$
- **e)** $\dfrac{x+y}{\sqrt{x-y}}$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac1{\sqrt x-\sqrt y}$. $x-y=(\sqrt x-\sqrt y)(\sqrt x+\sqrt y)$.

</details>

### `vut-fsi-2014-z8-01` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 1, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Je-li $x>0;\ y>0$, pak $\left(x^{\frac12}+y^{\frac12}\right)^{-1}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 1, 1 b)

- **a)** $\dfrac1{\sqrt x+\sqrt y}$
- **b)** $\dfrac1{\sqrt x}+\dfrac1{\sqrt y}$
- **c)** $\dfrac1{x^2}+\dfrac1{y^2}$
- **d)** $\sqrt{-x}+\sqrt{-y}$
- **e)** $x^{-\frac12}+y^{-\frac12}$

<details><summary>Ответ и решение</summary>

**a** — $\dfrac1{\sqrt x+\sqrt y}$

</details>

### `vut-fsi-2014-z9-01` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 1, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Pro $a\ge0$ platí $\left(a^{\frac12}+a^{\frac14}\right)\cdot\left(a^{\frac12}-a^{\frac14}\right)=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 1, 1 b)

- **a)** $a^{\frac12}$
- **b)** $a-a^{\frac12}$
- **c)** $a^{\frac34}$
- **d)** $1$
- **e)** $\left(a^{\frac12}-a^{\frac14}\right)^2$

<details><summary>Ответ и решение</summary>

**b** — $a-a^{\frac12}$. Rozdíl čtverců.

</details>

### `vut-fsi-2014-z10-01` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 1, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

$\dfrac{5^{-1}+3^{-1}}{15^{-1}+(-7)^{-1}}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 1, 1 b)

- **a)** $-7$
- **b)** $\dfrac7{15}$
- **c)** $-\dfrac7{15}$
- **d)** $-7{,}5$
- **e)** $-\dfrac73$

<details><summary>Ответ и решение</summary>

**a** — $-7$. $\frac{8/15}{-8/105}=-7$.

</details>

### `vut-fsi-2014-z1-02` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 2, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Výraz $\left(5\cdot25^x\right)^{-\frac1x}$ lze upravit na tvar

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 1, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 2, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 1, 1 b)

- **a)** $125^{-1}$
- **b)** $125^{x-\frac1x}$
- **c)** $\left(25\cdot5^{\frac1x}\right)^{-1}$
- **d)** $\left(5\cdot5^2\right)^{-1}$
- **e)** $25\cdot5^{-x}$

<details><summary>Ответ и решение</summary>

**c** — $\left(25\cdot5^{\frac1x}\right)^{-1}$. $5^{-\frac{1+2x}x}=5^{-2}\cdot5^{-\frac1x}$.

</details>

### `vut-fsi-2014-z2-02` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 2, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Je-li $a>0;\ b>0;\ a\neq b$, pak $\left(a^{\frac12}-b^{\frac12}\right)^{-1}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 2, 1 b)

- **a)** $\dfrac1{\sqrt a-\sqrt b}$
- **b)** $\dfrac1{\sqrt a}-\dfrac1{\sqrt b}$
- **c)** $\dfrac1a+\dfrac1b$
- **d)** $\sqrt{-a}+\sqrt{-b}$
- **e)** $a^{-\frac12}-b^{-\frac12}$

<details><summary>Ответ и решение</summary>

**a** — $\dfrac1{\sqrt a-\sqrt b}$

</details>

### `vut-fsi-2014-z3-02` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 2, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Je-li $a>0$, pak $\left(\dfrac{\sqrt[3]a}{\sqrt a\cdot a^{-1}}\right)^{\frac35}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 2, 1 b)

- **a)** $\dfrac1{\sqrt a}$
- **b)** $2\sqrt a$
- **c)** $\sqrt a$
- **d)** $a^{-1}$
- **e)** $a^{\frac{-3}2}$

<details><summary>Ответ и решение</summary>

**c** — $\sqrt a$. $\left(a^{\frac13-\frac12+1}\right)^{\frac35}=a^{\frac56\cdot\frac35}=a^{\frac12}$.

</details>

### `vut-fsi-2014-z4-02` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 2, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

$\dfrac1{\sqrt3+\sqrt2}+\dfrac1{\sqrt3-\sqrt2}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 2, 1 b)

- **a)** $3\sqrt2$
- **b)** $2\sqrt3$
- **c)** $\dfrac{2\sqrt3}5$
- **d)** $\dfrac2{2\sqrt3}$
- **e)** $\dfrac2{\sqrt3}$

<details><summary>Ответ и решение</summary>

**b** — $2\sqrt3$. Usměrněním $(\sqrt3-\sqrt2)+(\sqrt3+\sqrt2)$.

</details>

### `vut-fsi-2014-z6-02` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 2, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Je-li $x>0$, pak $\sqrt[3]{x\cdot\sqrt[3]x}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 2, 1 b)

- **a)** $\sqrt[6]{x^2}$
- **b)** $\sqrt[3]{x^2}$
- **c)** $\sqrt[6]x$
- **d)** $\sqrt[9]{x^4}$
- **e)** $\sqrt[9]{x^2}$

<details><summary>Ответ и решение</summary>

**d** — $\sqrt[9]{x^4}$. $\left(x^{\frac43}\right)^{\frac13}$.

</details>

### `vut-fsi-2014-z7-02` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 2, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Je-li $a>0$, pak $\sqrt{\left[\dfrac{\sqrt a}{\sqrt[3]{a^2}}\right]^{-1}}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 2, 1 b)

- **a)** $a$
- **b)** $\sqrt[12]a$
- **c)** $\dfrac1{\sqrt a}$
- **d)** $\sqrt[3]a$
- **e)** $\sqrt[4]a$

<details><summary>Ответ и решение</summary>

**b** — $\sqrt[12]a$. $\left(a^{\frac16}\right)^{\frac12}$.

</details>

### `vut-fsi-2014-z9-02` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 2, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Je-li $x>0$, pak $\sqrt{x\cdot\sqrt[3]x}:\sqrt[3]{x\sqrt x}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 2, 1 b)

- **a)** $x^6$
- **b)** $\sqrt[6]x$
- **c)** $x^{-6}$
- **d)** $\sqrt[3]x$
- **e)** $x^3$

<details><summary>Ответ и решение</summary>

**b** — $\sqrt[6]x$. $x^{\frac23}:x^{\frac12}=x^{\frac16}$.

</details>

### `vut-fsi-2014-z10-02` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 2, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

$\sqrt[5]{\dfrac4{\sqrt[3]2}}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 2, 1 b)

- **a)** $\sqrt[3]2$
- **b)** $\sqrt2$
- **c)** $\sqrt[5]2$
- **d)** $\sqrt[5]{2^3}$
- **e)** $\sqrt[15]2$

<details><summary>Ответ и решение</summary>

**a** — $\sqrt[3]2$. $\left(2^{2-\frac13}\right)^{\frac15}=2^{\frac13}$.

</details>

### `vut-fsi-2014-z6-16` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 16, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Výraz $\sqrt y\cdot\sqrt[3]{y^{-2}}\cdot\sqrt[6]{y^3}$ je pro $y>0$ roven

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 16, 2 b)

- **a)** $\sqrt[6]y$
- **b)** $\sqrt[3]y$
- **c)** $y\sqrt y$
- **d)** $\sqrt{y^{-1}}$
- **e)** $-\sqrt[6]y$

<details><summary>Ответ и решение</summary>

**b** — $\sqrt[3]y$. $y^{\frac12-\frac23+\frac12}$.

</details>

### `fbmi-2021-18` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 18)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

V oboru reálných čísel řešte rovnici: $(x+2)^2=2x^2-3x+6-x\cdot(x-3)$

- **a)** $x=0{,}5$
- **b)** $x=2$
- **c)** $x=0{,}2$
- **d)** $x=0{,}5$; $x=2$

<details><summary>Ответ и решение</summary>

**a** — $x=0{,}5$. $x^2+4x+4=x^2+6\Rightarrow x=\frac12$.

</details>

### `fbmi-2021-diskriminant` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 21)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D5

Diskriminant kvadratické rovnice $ax^2+bx+c=0$ je roven:

- **a)** $D=\sqrt{b^2+4ac}$
- **b)** $D=\sqrt{b+4ac}$
- **c)** $D=\sqrt{b^2-4ac}$
- **d)** Ani jedna z nabízených možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Ani jedna z nabízených možností není správná.. $D=b^2-4ac$ (bez odmocniny).

</details>

### `fbmi-2021-kvadr-koreny` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 22)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D1

Řešením kvadratické rovnice $2x^2+5x+2=0$ jsou čísla:

- **a)** $x_1=-0{,}5$; $x_2=-2$
- **b)** $x_1=-1$; $x_2=-4$
- **c)** $x_1=0{,}5$; $x_2=2$
- **d)** $x_1=1$; $x_2=4$

<details><summary>Ответ и решение</summary>

**a** — $x_1=-0{,}5$; $x_2=-2$. $x=\frac{-5\pm3}{4}$.

</details>

### `fbmi-2021-23` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 23)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Kvadratická rovnice $112x^2+224=0$

- **a)** má v oboru reálných čísel jeden dvojnásobný kořen.
- **b)** nemá v oboru reálných čísel žádné řešení.
- **c)** má v oboru reálných čísel dvě různá řešení.
- **d)** Žádná z předchozích odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — nemá v oboru reálných čísel žádné řešení.. $x^2=-2$.

</details>

### `fbmi-2021-dvojnasobny` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 24)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D6

Pokud má kvadratická rovnice $ax^2+bx+c=0$ v oboru reálných čísel jediné řešení, je rovno:

- **a)** $x_1=x_2=-\frac{b}{2a}$
- **b)** $x_1=x_2=\frac{b}{2a}$
- **c)** $x_1=x_2=-\frac b2$
- **d)** Ani jedna z nabízených možností není správná.

<details><summary>Ответ и решение</summary>

**a** — $x_1=x_2=-\frac{b}{2a}$. Pro $D=0$ je $x=\frac{-b}{2a}$.

</details>

### `vut-fekt-2023-v1-02` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 2, 2 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Množina všech reálných řešení rovnice $(x+4)(x-3)=-6$ je

- **a)** $\{-3,2\}$
- **b)** $\{-2,3\}$
- **c)** $\{-4,3\}$
- **d)** $\{-3,4\}$
- **e)** prázdná

<details><summary>Ответ и решение</summary>

**a** — $\{-3,2\}$. $x^2+x-6=0$, $(x+3)(x-2)=0$.

</details>

### `vut-fekt-2023-v2-02` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 2, 2 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Množina všech reálných řešení rovnice $(x+6)(x-4)=-9$ je

- **a)** prázdná
- **b)** $\{-6,4\}$
- **c)** $\{-5,3\}$
- **d)** $\{-4,6\}$
- **e)** $\{-3,5\}$

<details><summary>Ответ и решение</summary>

**c** — $\{-5,3\}$. $x^2+2x-15=0$, $(x+5)(x-3)=0$.

</details>

### `vut-fekt-2023-v1-04` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 4, 2 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Řešením soustavy rovnic $3x+y=-2,x-y=5$ je

- **a)** $\{[-3/4,11/4]\}$
- **b)** $\{[3/4,17/4]\}$
- **c)** $\{[3/4,-17/4]\}$
- **d)** $\{[4/3,-11/3]\}$
- **e)** $\{[4/3,11/3]\}$

<details><summary>Ответ и решение</summary>

**c** — $\{[3/4,-17/4]\}$. Sečtením $4x=3$; $y=x-5=-\frac{17}4$.

</details>

### `vut-fekt-2023-v2-04` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 4, 2 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Řešením soustavy rovnic $2x-y=3,x+y=4$ je

- **a)** $\{[7/3,-5/3]\}$
- **b)** $\{[7/3,5/3]\}$
- **c)** $\{[3/7,25/7]\}$
- **d)** $\{[3/7,-15/7]\}$
- **e)** $\{[17/5,3/5]\}$

<details><summary>Ответ и решение</summary>

**b** — $\{[7/3,5/3]\}$. Sečtením $3x=7$; $y=4-x=\frac53$.

</details>

### `vut-fekt-2024-v1-02` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 2, 2 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Je-li $x_1$ menší a $x_2$ větší kořen rovnice $x^2+x-11=0$, pak

- **a)** $x_1\in(-2,-1),x_2\in(3,4)$
- **b)** $x_1\in(-3,-2),x_2\in(3,4)$
- **c)** $x_1\in(-3,-2),x_2\in(2,3)$
- **d)** $x_1\in(-4,-3),x_2\in(3,4)$
- **e)** $x_1\in(-4,-3),x_2\in(2,3)$

<details><summary>Ответ и решение</summary>

**e** — $x_1\in(-4,-3),x_2\in(2,3)$. $x_{1,2}=\frac{-1\pm\sqrt{45}}2$, $\sqrt{45}\approx6{,}7$: $x_1\approx-3{,}85$, $x_2\approx2{,}85$.

</details>

### `vut-fekt-2024-v2-02` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 2, 2 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Je-li $x_1$ menší a $x_2$ větší kořen rovnice $x^2-2x-7=0$, pak

- **a)** $x_1\in(-2,-1),x_2\in(3,4)$
- **b)** $x_1\in(-2,-1),x_2\in(4,5)$
- **c)** $x_1\in(-3,-2),x_2\in(3,4)$
- **d)** $x_1\in(-3,-2),x_2\in(4,5)$
- **e)** $x_1\in(-4,-3),x_2\in(4,5)$

<details><summary>Ответ и решение</summary>

**a** — $x_1\in(-2,-1),x_2\in(3,4)$. $x_{1,2}=1\pm\sqrt8$, $\sqrt8\approx2{,}83$: $x_1\approx-1{,}83$, $x_2\approx3{,}83$.

</details>

### `vut-fekt-2024-v1-04` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 4, 2 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Řešením soustavy rovnic $-2x+y=3,x+3y=5$ je

- **a)** $\{[5/4,1/2]\}$
- **b)** $\{[4/5,7/5]\}$
- **c)** $\{[7/5,-13/5]\}$
- **d)** $\{[-4/7,13/7]\}$
- **e)** $\{[20/7,5/7]\}$

<details><summary>Ответ и решение</summary>

**d** — $\{[-4/7,13/7]\}$. $y=3+2x$: $7x+9=5$, $x=-\frac47$, $y=\frac{13}7$.

</details>

### `vut-fekt-2024-v2-04` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 4, 2 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Řešením soustavy rovnic $2x+y=3,x+3y=5$ je

- **a)** $\{[5/4,1/2]\}$
- **b)** $\{[4/5,7/5]\}$
- **c)** $\{[7/5,-13/5]\}$
- **d)** $\{[-4/7,13/7]\}$
- **e)** $\{[20/7,5/7]\}$

<details><summary>Ответ и решение</summary>

**b** — $\{[4/5,7/5]\}$. $y=3-2x$: $-5x+9=5$, $x=\frac45$, $y=\frac75$.

</details>

### `fit-2014-1-10` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 10, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Binární operace $\star$ je definovaná jako $a\star b=a-b+2a$. Určete neznámou $x$, platí-li $(3\star x)\star2=0\,.$

- **a)** Rovnice nemá řešení.
- **b)** Rovnice má více než dvě řešení.
- **c)** Rovnice má dvě řešení a jejich součet je 10.
- **d)** Rovnice má jedno záporné řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. $a\star b=3a-b$: $3(9-x)-2=0\Rightarrow x=\frac{25}{3}$ — jedno kladné řešení.

</details>

### `fit-2014-2-10` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 10, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Binární operace $\star$ je definovaná jako $a\star b=a-b+2a$. Určete neznámou $x$, platí-li $(2\star x)\star3=3\,.$

- **a)** Rovnice nemá řešení.
- **b)** Rovnice má jedno kladné řešení.
- **c)** Rovnice má dvě řešení a jejich součet je 10.
- **d)** Rovnice má více než dvě řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Rovnice má jedno kladné řešení.. $a\star b=3a-b$: $3(6-x)-3=3\Rightarrow x=4$.

</details>

### `fit-2014-3-10` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 10, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Binární operace $\star$ je definovaná jako $a\star b=a-b+2a$. Určete neznámou $x$, platí-li $(3\star x)\star2=6\,.$

- **a)** Rovnice nemá řešení.
- **b)** Rovnice má více než dvě řešení.
- **c)** Rovnice má jedno kladné řešení.
- **d)** Rovnice má dvě řešení a jejich součet je 10.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Rovnice má jedno kladné řešení.. $3(9-x)-2=6\Rightarrow x=\frac{19}3$.

</details>

### `fit-2014-4-10` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 10, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Binární operace $\star$ je definovaná jako $a\star b=a-b+2a$. Určete neznámou, $x$ platí-li $(2\star x)\star3=0\,.$

- **a)** Rovnice nemá řešení.
- **b)** Rovnice má více než dvě řešení.
- **c)** Rovnice má dvě řešení a jejich součet je 10.
- **d)** Rovnice má jedno kladné řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Rovnice má jedno kladné řešení.. $3(6-x)-3=0\Rightarrow x=5$.

</details>

### `fit-2015-05` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 5, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Nalezněte řešení soustavy rovnic $2x-y=7$ a $2(y+2x)=2-y$ a rozhodněte, které tvrzení je pravdivé.

- **a)** Soustava nemá reálná řešení.
- **b)** Žádná z ostatních možností není správná.
- **c)** Součet řešení x a y je $-\frac{1}{10}$.
- **d)** Soustava má nekonečně mnoho řešení.
- **e)** Součin řešení $x$ a $y$ je $-6$.

<details><summary>Ответ и решение</summary>

**c** — Součet řešení x a y je $-\frac{1}{10}$.. $4x+3y=2$ a $y=2x-7$: $x=\frac{23}{10}$, $y=-\frac{12}{5}$, součet $-\frac1{10}$.

</details>

### `fit-2015-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 13, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Kolik litrů vody o teplotě $60\ ^\circ$C je třeba přidat do 30 litrů vody o teplotě $30\ ^\circ$C, chceme-li, aby výsledná teplota vody byla $40\ ^\circ$C?

- **a)** Žádná z ostatních možností není správná.
- **b)** Musíme přidat více než 25 litrů teplejší vody.
- **c)** Stačí přidat méně než 10 litrů teplejší vody.
- **d)** Stačí přidat méně než sedm litrů teplejší vody.
- **e)** Musíme přidat více než 10 litrů teplejší vody.

<details><summary>Ответ и решение</summary>

**e** — Musíme přidat více než 10 litrů teplejší vody.. $30\cdot(40-30)=V\cdot(60-40)\Rightarrow V=15$ litrů.

</details>

### `fit-2025-16` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2025 (příklad 16, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2025-s-resenim.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Binární operace $\star$ je definovaná jako $a\star b=a-b-2b$. Určete hodnotu neznámé $x$ tak, aby $(3\star x)\star2=1\,.$

- **a)** Rovnice má jedno záporné řešení.
- **b)** Žádná z ostatních možností není správná.
- **c)** Rovnice má jedno kladné řešení.
- **d)** Rovnice má dvě řešení a jejich součet je 10.
- **e)** Rovnice nemá řešení.

<details><summary>Ответ и решение</summary>

**a** — Rovnice má jedno záporné řešení.. $a\star b=a-3b$: $(3-3x)-6=1\Rightarrow x=-\frac43$.

</details>

### `fit-2026-06` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2026 (příklad 6, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 3, úloha 17

Nalezněte řešení soustavy rovnic $3(x+2)-4(y+x)=7$ a $2x-(x-4y)=-1$ a rozhodněte, které tvrzení je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2020, příklad 11 (7 b)

- **a)** Soustava má jediné řešení.
- **b)** Soustava má nekonečně mnoho řešení.
- **c)** Žádná z ostatních možností není správná.
- **d)** Soustava nemá reálná řešení.
- **e)** Součin řešení $x$ a $y$ je 1.

<details><summary>Ответ и решение</summary>

**b** — Soustava má nekonečně mnoho řešení.. Obě rovnice jsou ekvivalentní s $x+4y=-1$.

</details>

### `fjfi-v1-10` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 1 (příklad 10, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Řešte pro $x,y\in\mathbb{R}$ soustavu rovnic $\begin{array}{c}2x-y=0\,,\\y-x^2=1\,.\end{array}$

- **a)** $\{[1;2]\}$
- **b)** $\{[-1;-2]\}$
- **c)** $\left\{\left[1+\sqrt2;2+2\sqrt2\right],\left[1-\sqrt2;2-2\sqrt2\right]\right\}$
- **d)** $\{[2;5],[1;2]\}$
- **e)** $\left\{\left[1-\sqrt2;2-2\sqrt2\right]\right\}$

<details><summary>Ответ и решение</summary>

**a** — $\{[1;2]\}$. $y=2x$: $x^2-2x+1=0$, tedy $x=1$, $y=2$.

</details>

### `fjfi-v2-10` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 2 (příklad 10, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic), 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Řešte pro $x,y\in\mathbb{R}$ soustavu rovnic $\begin{array}{c}x^2+y^2=4\,,\\x+2y=0\,.\end{array}$

- **a)** $\left\{\left[-\frac23\sqrt6;\frac13\sqrt6\right],\left[\frac23\sqrt6;-\frac13\sqrt6\right]\right\}$
- **b)** $\left\{\left[\frac13\sqrt6;\frac23\sqrt6\right],\left[-\frac13\sqrt6;\frac23\sqrt6\right]\right\}$
- **c)** $\left\{\left[-\frac45\sqrt5;\frac25\sqrt5\right],\left[\frac45\sqrt5;-\frac25\sqrt5\right]\right\}$
- **d)** $\left\{\left[\frac23\sqrt3;-\frac43\sqrt3\right],\left[-\frac23\sqrt3;\frac43\sqrt3\right]\right\}$
- **e)** $\left\{\left[\frac45\sqrt5;-\frac25\sqrt5\right],\left[\frac45\sqrt5;\frac25\sqrt5\right]\right\}$

<details><summary>Ответ и решение</summary>

**c** — $\left\{\left[-\frac45\sqrt5;\frac25\sqrt5\right],\left[\frac45\sqrt5;-\frac25\sqrt5\right]\right\}$. $x=-2y$: $5y^2=4$, $y=\pm\frac25\sqrt5$, $x=\mp\frac45\sqrt5$.

</details>

### `vut-fsi-2014-z6-03` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 3, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Soustava rovnic $2x-3y+2=0;x=\dfrac32y$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 3, 1 b)

- **a)** má jedno řešení
- **b)** nemá řešení
- **c)** má nekonečně mnoho řešení
- **d)** má dvě řešení
- **e)** má řešení $(0;0)$

<details><summary>Ответ и решение</summary>

**b** — nemá řešení. Dosazením $2=0$ — spor.

</details>

### `vut-fsi-2014-z10-04` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 4, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Rovnice $(2x-10)\left(x+\dfrac12\right)=0$ má kořeny:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 4, 1 b)

- **a)** $10;\ 1$
- **b)** $10;\ 12$
- **c)** $-10;\ \dfrac12$
- **d)** $-5;\ \dfrac12$
- **e)** $5;\ -\dfrac12$

<details><summary>Ответ и решение</summary>

**e** — $5;\ -\dfrac12$

</details>

### `vut-fsi-2014-z2-17` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 17, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Je-li $x^3-(2x)^2=0;x\neq0$, pak $8x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 17, 2 b)

- **a)** $0{,}5$
- **b)** $18$
- **c)** $12$
- **d)** $1$
- **e)** $32$

<details><summary>Ответ и решение</summary>

**e** — $32$. $x^2(x-4)=0$, $x=4$.

</details>

### `fel-vzor01-14` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 14, 2 body)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 4, úloha 20 (upravená verze v lekci 3, úloha 20)

Rovnice $x^2-(p+1)x+4=0$ (s neznámou $x$) nemá reálný kořen právě tehdy, když

- **a)** $p=-1$
- **b)** $p\in\mathbb{R}$
- **c)** $p\in(-5,3)$
- **d)** $p\in(-1,4)$
- **e)** $p\in(3,5)$

<details><summary>Ответ и решение</summary>

**c** — $p\in(-5,3)$. $D=(p+1)^2-16=(p+5)(p-3)<0$.

</details>

### `vut-fsi-2014-z1-04` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 4, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу)

Rovnice $x^2+ax+4=0$ má právě jedno řešení pro

- **a)** $a=0$
- **b)** $a=2$
- **c)** $a=-2$
- **d)** $a=4$
- **e)** $a=\pm4$

<details><summary>Ответ и решение</summary>

**e** — $a=\pm4$. $D=a^2-16=0$.

</details>

### `vut-fsi-2014-z8-04` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 4, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу)

Rovnice $x^2-mx-4=0$ má dva různé reálné kořeny pro

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 4, 1 b)

- **a)** $m\ge0$
- **b)** $m>4$
- **c)** každé reálné $m$
- **d)** $m=0$
- **e)** $m<0$

<details><summary>Ответ и решение</summary>

**c** — každé reálné $m$. $D=m^2+16>0$.

</details>

### `vut-fsi-2017-z2-04` — [FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 4, 1 bod)](https://vut.cz/pomocne2018/f69785/d158882/p149140)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу)

Rovnice $x^2+ax+4=0$ má dvojnásobný kořen pro

- **a)** $a=0$
- **b)** $a=2$
- **c)** $a=-2$
- **d)** $a=4$
- **e)** $a=\pm4$

<details><summary>Ответ и решение</summary>

**e** — $a=\pm4$. $D=a^2-16=0$.

</details>

### `vut-fsi-2014-z1-01` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 1, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Je-li $x\neq0$, pak $\dfrac x{|x|}-\dfrac{|x|}x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 1, 1 b)

- **a)** $1$
- **b)** $0$
- **c)** $-1$
- **d)** $2x$
- **e)** $-2x$

<details><summary>Ответ и решение</summary>

**b** — $0$. Oba zlomky jsou rovny $\operatorname{sgn}x$.

</details>

### `vut-fsi-2014-z7-17` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 17, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Všechna reálná řešení rovnice $|x^2-2x+3|=3$ jsou:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 17, 2 b)

- **a)** $x=3$
- **b)** $x=2$
- **c)** $x\in\{0;2\}$
- **d)** $x\in\{-1;0;\}$
- **e)** rovnice nemá reálné řešení

<details><summary>Ответ и решение</summary>

**c** — $x\in\{0;2\}$. $x^2-2x+3>0$, tedy $x^2-2x=0$.

</details>

### `vsb-fbi-2013-pz3-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 3 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete všechna řešení nerovnice $\dfrac{5-2x}{x-7}\ge3.$

<details><summary>Ответ и решение</summary>

$x\in\left\langle\frac{26}5;7\right)$. $\frac{5-2x-3(x-7)}{x-7}=\frac{26-5x}{x-7}\ge0$.

</details>

### `vsb-fbi-2013-pz4-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 4 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Stanovte definiční obor funkce $y=\dfrac1{\sqrt x}+\sqrt{x-2}+\dfrac1{\log(x-3)}.$

<details><summary>Ответ и решение</summary>

$D=(3;4)\cup(4;\infty)$. $x>0$, $x\ge2$, $x>3$ a $\log(x-3)\ne0$, tj. $x\ne4$.

</details>

### `vsb-fbi-2013-pz11-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 11 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete všechna řešení nerovnice $x^2-4x-5<0.$

<details><summary>Ответ и решение</summary>

$x\in(-1;5)$. $(x-5)(x+1)<0$.

</details>

### `vsb-fbi-2015-pz25-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 25 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete všechna řešení nerovnice $x^2-2x-3\ge0.$

<details><summary>Ответ и решение</summary>

$x\in(-\infty;-1\rangle\cup\langle3;\infty)$. $(x-3)(x+1)\ge0$.

</details>

### `vsb-fbi-2015-pz31-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 31 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete všechna řešení nerovnice $\dfrac{4-2x}{x-7}\ge3.$

<details><summary>Ответ и решение</summary>

$x\in\langle5;7)$. $\frac{25-5x}{x-7}\ge0$.

</details>

### `vsb-fbi-2015-pz32-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 32 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete všechna řešení nerovnice $\dfrac{3x-1}{x+2}<2.$

<details><summary>Ответ и решение</summary>

$x\in(-2;5)$. $\frac{x-5}{x+2}<0$.

</details>

### `vsb-fbi-2017-pz1-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 1 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete všechna řešení nerovnice $\dfrac{1-3x}{x+3}\ge-1.$

<details><summary>Ответ и решение</summary>

$x\in(-3;2\rangle$. $\frac{4-2x}{x+3}\ge0$.

</details>

### `vsb-fbi-2017-pz14-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 14 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete všechna řešení nerovnice $\dfrac{3x-8}{6-x}\ge1.$

<details><summary>Ответ и решение</summary>

$x\in\left\langle\frac72;6\right)$. $\frac{4x-14}{6-x}\ge0$.

</details>

### `vsb-fbi-2017-pz15-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 15 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete všechna řešení nerovnice $\dfrac{x+2}{1-x}\le-2.$

<details><summary>Ответ и решение</summary>

$x\in(1;4\rangle$. $\frac{4-x}{1-x}\le0$.

</details>

### `vut-fekt-2022-v1-03` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 3, 2 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Množina všech řešení nerovnice $(x-3)^2\le4$ je

- **a)** $(-\infty,-5\rangle$
- **b)** $(-\infty,5\rangle$
- **c)** $(-\infty,7\rangle$
- **d)** $\langle1,5\rangle$
- **e)** $\langle-1,7\rangle$

<details><summary>Ответ и решение</summary>

**d** — $\langle1,5\rangle$. $|x-3|\le2$.

</details>

### `vut-fekt-2022-v2-03` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 3, 2 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Množina všech řešení nerovnice $(x+3)^2<4$ je

- **a)** $(-7,1)$
- **b)** $(-5,-1)$
- **c)** $(-1,5)$
- **d)** $(-1,7)$
- **e)** $(1,5)$

<details><summary>Ответ и решение</summary>

**b** — $(-5,-1)$. $|x+3|<2$.

</details>

### `fit-2014-1-06` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 6, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Mezi čísly $a$, $b$, $c$, $d$, $e$ platí následující vztahy: $a>d$, $b>d$, $a<c$, $e<a$. Který z následujících výroků nemůže být pravdivý?

- **a)** $e<b$.
- **b)** $b>c$.
- **c)** $e>c$.
- **d)** $a<b$.
- **e)** Platí právě jeden z předchozích vztahů.

<details><summary>Ответ и решение</summary>

**c** — $e>c$.. $e<a<c$, tedy vždy $e<c$.

</details>

### `fit-2014-2-06` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 6, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Mezi čísly $a$, $b$, $c$, $d$, $e$ platí následující vztahy: $b>e$, $c>e$, $b<d$, $a<b$. Který z následujících výroků nemůže být pravdivý?

- **a)** $a<c$.
- **b)** $a>d$.
- **c)** $c>d$.
- **d)** $b<c$.
- **e)** Platí právě jeden z předchozích vztahů.

<details><summary>Ответ и решение</summary>

**b** — $a>d$.. $a<b<d$, tedy $a>d$ nastat nemůže.

</details>

### `fit-2014-3-06` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 6, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Mezi čísly $a$, $b$, $c$, $d$, $e$ platí následující vztahy: $e>c$, $a>c$, $e<b$, $d<e$. Který z následujících výroků nemůže být pravdivý?

- **a)** $d<a$.
- **b)** $a>b$.
- **c)** $d>b$.
- **d)** $e<a$.
- **e)** Platí právě jeden z předchozích vztahů.

<details><summary>Ответ и решение</summary>

**c** — $d>b$.. $d<e<b$, tedy $d>b$ nastat nemůže.

</details>

### `fit-2014-4-06` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 6, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Mezi čísly $a$, $b$, $c$, $d$, $e$ platí následující vztahy: $c>a$, $d>a$, $c<e$, $b<c$. Který z následujících výroků nemůže být pravdivý?

- **a)** $b<d$.
- **b)** $d>e$.
- **c)** $c<d$.
- **d)** $b>e$.
- **e)** Platí právě jeden z předchozích vztahů.

<details><summary>Ответ и решение</summary>

**d** — $b>e$.. $b<c<e$, tedy $b>e$ nastat nemůže.

</details>

### `fit-2022-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 6, D2 (pool přijímaček)

Mezi čísly $a$, $b$, $c$, $d$, $e$ platí následující vztahy. Číslo $a$ je rovno $b$, $a$ je větší nebo rovno $c$, $d>b$ a $e<a$. Který z následujících výroků nemůže být pravdivý?

- **a)** $c<e$.
- **b)** Platí právě jeden z ostatních vztahů.
- **c)** $e=c$.
- **d)** $c>d$.
- **e)** $e\le d$.

<details><summary>Ответ и решение</summary>

**d** — $c>d$.. $c\le a=b<d$, tedy vždy $c<d$.

</details>

### `fit-2026-01` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2026 (příklad 1, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 6, úloha 17

Mezi čísly $a$, $b$, $c$, $d$, $e$ platí následující vztahy. Číslo $a$ není větší než $b$, $a<c$, $d$ není větší než $b$ a $e<a$. Který z následujících výroků nemůže být pravdivý?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2020, příklad 1 (3 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2022, příklad 2 (3 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2024, příklad 4 (7 b)

- **a)** $e>c$.
- **b)** $e<d$.
- **c)** $a<d$.
- **d)** Platí právě jeden z ostatních vztahů.
- **e)** $d>c$.

<details><summary>Ответ и решение</summary>

**a** — $e>c$.. $e<a<c$, tedy vždy $e<c$.

</details>

### `fjfi-v1-09` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 1 (příklad 9, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Určete definiční obor funkce zadané předpisem $f:y=\sqrt{\dfrac{x-5}{x-1}}\,.$

- **a)** $(1,+\infty)$
- **b)** $\langle1,+\infty)$
- **c)** $(-\infty,1)\cup\langle5,+\infty)$
- **d)** $(-\infty,1\rangle\cup\langle5,+\infty)$
- **e)** $\langle5,+\infty)$

<details><summary>Ответ и решение</summary>

**c** — $(-\infty,1)\cup\langle5,+\infty)$. $\frac{x-5}{x-1}\ge0$ a $x\ne1$: $x<1$ nebo $x\ge5$.

</details>

### `vut-fsi-2014-z4-04` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 4, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Řešením nerovnice $x^2-3x\le0$ je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 4, 1 b)

- **a)** $x\in\mathbf R$
- **b)** $x\le0$
- **c)** $|x|\le3$
- **d)** $x\in\langle0;3\rangle$
- **e)** nemá řešení

<details><summary>Ответ и решение</summary>

**d** — $x\in\langle0;3\rangle$. $x(x-3)\le0$.

</details>

### `vut-fsi-2014-z6-17` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 17, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Výraz $\dfrac{2x-4}{9-3x}$ je kladný pro

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 17, 2 b)

- **a)** všechna $x$
- **b)** $x\in(-\infty;2)$
- **c)** $x\in(2;3)$
- **d)** $x>0$
- **e)** není kladný pro žádné $x$

<details><summary>Ответ и решение</summary>

**c** — $x\in(2;3)$. $\frac{2(x-2)}{3(3-x)}>0$.

</details>

### `vut-fekt-2023-v1-05` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 5, 2 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Množina všech řešení nerovnice $|x-3|>2$ je

- **a)** $(-1,5)$
- **b)** $(1,5)$
- **c)** $(5,\infty)$
- **d)** $(-\infty,-1)\cup(5,\infty)$
- **e)** $(-\infty,1)\cup(5,\infty)$

<details><summary>Ответ и решение</summary>

**e** — $(-\infty,1)\cup(5,\infty)$. $x-3>2$ nebo $x-3<-2$.

</details>

### `vut-fekt-2023-v2-05` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 5, 2 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Množina všech řešení nerovnice $|x-2|\le3$ je

- **a)** $(-\infty,5\rangle$
- **b)** $\langle-1,5\rangle$
- **c)** $\langle1,5\rangle$
- **d)** $\langle-1,\infty)$
- **e)** $\langle1,\infty)$

<details><summary>Ответ и решение</summary>

**b** — $\langle-1,5\rangle$. $-3\le x-2\le3$.

</details>

### `vut-fsi-2014-z1-03` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 3, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Nerovnice $\sqrt{x^2}<1$ má řešení

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 3, 1 b)

- **a)** $|x|<1$
- **b)** $|x|>1$
- **c)** $x<1$
- **d)** $x>1$
- **e)** $x>-1$

<details><summary>Ответ и решение</summary>

**a** — $|x|<1$. $\sqrt{x^2}=|x|$.

</details>

### `vut-fsi-2014-z4-03` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 3, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Nerovnice $\sqrt{x^2}>1$ má řešení

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 3, 1 b)

- **a)** $|x|<1$
- **b)** $|x|>1$
- **c)** $x<1$
- **d)** $x>1$
- **e)** $x>-1$

<details><summary>Ответ и решение</summary>

**b** — $|x|>1$. $\sqrt{x^2}=|x|$.

</details>

### `vut-fsi-2014-z7-03` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 3, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Nerovnice $|2x-6|+|x-2|>0$ má řešení

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 3, 1 b)

- **a)** všechna $x\in\mathbf R$
- **b)** $x\neq2$
- **c)** $x\neq3$
- **d)** $x\in(2;3)$
- **e)** $x\in\langle2;3\rangle$

<details><summary>Ответ и решение</summary>

**a** — všechna $x\in\mathbf R$. Součet by byl nulový jen pro $x=3$ a zároveň $x=2$.

</details>

### `vut-fsi-2014-z8-03` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 3, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Řešením nerovnice $|x-3|\ge0$ jsou právě všechna $x$ taková, že

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 3, 1 b)

- **a)** $x>3$
- **b)** $x\in\mathbf R$
- **c)** $x<3$
- **d)** $x\ge0$
- **e)** $x\ge3$

<details><summary>Ответ и решение</summary>

**b** — $x\in\mathbf R$

</details>

### `vut-fsi-2014-z9-03` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 3, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Řešením nerovnice $|x-3|\le0$ jsou právě všechna $x$ taková, že

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 3, 1 b)

- **a)** $x>3$
- **b)** $x\in\mathbf R$
- **c)** $x<3$
- **d)** $x\le0$
- **e)** $x=3$

<details><summary>Ответ и решение</summary>

**e** — $x=3$

</details>

### `vut-fsi-2014-z10-03` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 3, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Nerovnice $\sqrt{x^2}-1<0$ má řešení

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 3, 1 b)

- **a)** $|x|<1$
- **b)** $|x|>1$
- **c)** $x<1$
- **d)** $x>1$
- **e)** $x>-1$

<details><summary>Ответ и решение</summary>

**a** — $|x|<1$

</details>

### `vut-fsi-2014-z10-17` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 17, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Řešeními nerovnice $|x^2-16|<0$ jsou právě všechna $x$, pro která je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 17, 2 b)

- **a)** $x>4$
- **b)** $x>0$
- **c)** $x<4$
- **d)** $x>-4$
- **e)** nerovnice nemá řešení

<details><summary>Ответ и решение</summary>

**e** — nerovnice nemá řešení

</details>

### `vsb-fbi-2013-pz3-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 3 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\sqrt{5x+6}=x+2$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=2$, $x=-1$. Umocněním $x^2-x-2=0$; zkouška vyhovuje u obou kořenů.

</details>

### `vsb-fbi-2013-pz4-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 4 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\sqrt{5-x}=x-3$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=4$. Umocněním $x^2-5x+4=0$, $x=1$ nebo $x=4$; zkoušce vyhoví jen $x=4$.

</details>

### `vsb-fbi-2013-pz11-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 11 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $x-5=\sqrt{13-x^2}$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

nemá řešení. Umocněním $x^2-5x+6=0$, $x=2$ nebo $x=3$; levá strana je pak záporná, zkoušce nevyhoví ani jeden.

</details>

### `vsb-fbi-2015-pz23-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 23 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $x-3=\sqrt{13-9x}$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

nemá řešení. Umocněním $x^2+3x-4=0$, $x=1$ nebo $x=-4$; levá strana je pak záporná.

</details>

### `vsb-fbi-2015-pz24-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 24 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\sqrt{23-7x}=x-5$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

nemá řešení. Umocněním $x^2-3x+2=0$, $x=1$ nebo $x=2$; pravá strana je pak záporná.

</details>

### `vsb-fbi-2015-pz25-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 25 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $x+2=\sqrt{x+8}$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=1$. Umocněním $x^2+3x-4=0$, $x=1$ nebo $x=-4$; zkoušce vyhoví $x=1$.

</details>

### `vsb-fbi-2015-pz31-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 31 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $x+1=\sqrt{3x+3}$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=-1$, $x=2$. Umocněním $x^2-x-2=0$; zkouška vyhovuje u obou kořenů.

</details>

### `vsb-fbi-2017-pz1-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 1 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $1-x=\sqrt{3-x}$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=-1$. Umocněním $x^2-x-2=0$, $x=2$ nebo $x=-1$; zkoušce vyhoví $x=-1$.

</details>

### `vsb-fbi-2017-pz2-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 2 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\sqrt{7x-5}=x+1$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=2$, $x=3$. Umocněním $x^2-5x+6=0$; zkouška vyhovuje u obou kořenů.

</details>

### `vsb-fbi-2017-pz6-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 6 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\sqrt{3-11x}=x-3$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

nemá řešení. Umocněním $x^2+5x+6=0$, $x=-2$ nebo $x=-3$; pravá strana je pak záporná.

</details>

### `vsb-fbi-2017-pz14-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 14 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $1-x=\sqrt{3x-3}$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=1$. Umocněním $x^2-5x+4=0$, $x=1$ nebo $x=4$; zkoušce vyhoví $x=1$.

</details>

### `vsb-fbi-2017-pz15-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 15 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $x+1=\sqrt{-1-x}$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=-1$. Umocněním $x^2+3x+2=0$, $x=-1$ nebo $x=-2$; zkoušce vyhoví $x=-1$.

</details>

### `vut-fekt-2022-v1-01` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 1, 2 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Kolik řešení má v reálném oboru rovnice $\sqrt{6-x}=x$?

- **a)** nemá žádné řešení
- **b)** jedno řešení, a to kladné
- **c)** jedno řešení, a to záporné
- **d)** dvě řešení, obě kladná
- **e)** dvě řešení, jedno kladné a jedno záporné

<details><summary>Ответ и решение</summary>

**b** — jedno řešení, a to kladné. $x\ge0$ a $6-x=x^2$: $x=2$ ($x=-3$ podmínku nesplní).

</details>

### `vut-fekt-2022-v2-01` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 1, 2 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Kolik řešení má v reálném oboru rovnice $\sqrt{x+6}=-x$?

- **a)** nemá žádné řešení
- **b)** jedno řešení, a to kladné
- **c)** jedno řešení, a to záporné
- **d)** dvě řešení, obě kladná
- **e)** dvě řešení, jedno kladné a jedno záporné

<details><summary>Ответ и решение</summary>

**c** — jedno řešení, a to záporné. $x\le0$ a $x+6=x^2$: $x=-2$ ($x=3$ podmínku nesplní).

</details>

### `fjfi-v1-07` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 1 (příklad 7, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Řešte v $\mathbb{R}$ rovnici $3\sqrt{x+5}=x+5\,.$

- **a)** $\{4\}$
- **b)** $\{-\sqrt5,\sqrt5\}$
- **c)** $\{\sqrt3+5\}$
- **d)** $\{-5,4\}$
- **e)** $\emptyset$

<details><summary>Ответ и решение</summary>

**d** — $\{-5,4\}$. $t=\sqrt{x+5}\ge0$: $3t=t^2$, tedy $t=0$ nebo $t=3$, $x=-5$ nebo $x=4$.

</details>

### `fjfi-v2-07` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 2 (příklad 7, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Řešte v $\mathbb{R}$ rovnici $\sqrt{10-5x}+2=x\,.$

- **a)** $\{2\}$
- **b)** $\{-3,2\}$
- **c)** $\{-2,2\}$
- **d)** $\{2,3\}$
- **e)** $\emptyset$

<details><summary>Ответ и решение</summary>

**a** — $\{2\}$. $10-5x=(x-2)^2\Rightarrow x^2+x-6=0$, $x=2$ nebo $x=-3$; podmínka $x\ge2$ ponechá $x=2$.

</details>

### `vut-fsi-2014-z3-03` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 3, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Rovnice $\sqrt{x-2}=\sqrt x$ má řešení v intervalu

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 3, 1 b)

- **a)** $\langle-2;\infty)$
- **b)** $\langle\sqrt2;\infty)$
- **c)** nemá řešení
- **d)** $(2;1)$
- **e)** $(-\infty;-2\rangle$

<details><summary>Ответ и решение</summary>

**c** — nemá řešení. Umocněním $x-2=x$ — spor.

</details>

### `vut-fsi-2014-z5-03` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 3, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Rovnice $\sqrt{x+2}=\sqrt x$ má řešení

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 3, 1 b)

- **a)** $x\in\langle-2;\infty)$
- **b)** $x\in\langle\sqrt2;\infty)$
- **c)** nemá řešení
- **d)** $x\in(2;1)$
- **e)** $x\in(-\infty;-2\rangle$

<details><summary>Ответ и решение</summary>

**c** — nemá řešení. Umocněním $x+2=x$ — spor.

</details>

### `vut-fsi-2014-z2-04` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 4, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Řešeními nerovnice $\sqrt{x-1}<-1$ jsou všechna $x\in\mathbf R$, pro která platí:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 4, 1 b)

- **a)** $x>1$
- **b)** $x>0$
- **c)** $x<-1$
- **d)** $x>-1$
- **e)** nerovnice nemá řešení

<details><summary>Ответ и решение</summary>

**e** — nerovnice nemá řešení. Odmocnina je nezáporná.

</details>

### `vsb-fbi-2017-pz6-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 6 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Stanovte definiční obor funkce $y=\sqrt{x^2+2x-3}$.

<details><summary>Ответ и решение</summary>

$D=(-\infty;-3\rangle\cup\langle1;\infty)$. $(x+3)(x-1)\ge0$.

</details>

### `fbmi-2021-28` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 28)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE DÚ 9, D1

Graf lineární funkce s předpisem $y=\frac23x+\frac16$ prochází body:

- **a)** $\left[-1;\frac16\right]$; $\left[0;\frac16\right]$
- **b)** $\left[0;\frac16\right]$; $\left[\frac12;\frac12\right]$
- **c)** $\left[-1;\frac23\right]$; $\left[0;\frac16\right]$
- **d)** $\left[0;\frac16\right]$; $\left[\frac12;\frac23\right]$

<details><summary>Ответ и решение</summary>

**b** — $\left[0;\frac16\right]$; $\left[\frac12;\frac12\right]$. $y(0)=\frac16$, $y\left(\frac12\right)=\frac12$.

</details>

### `fbmi-2021-29` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 29)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE DÚ 9, D2

Graf kvadratické funkce s předpisem $y=x^2+x+\frac12$ prochází body:

- **a)** $\left[-1;\frac12\right]$; $\left[0;\frac12\right]$
- **b)** $\left[0;\frac12\right]$; $\left[1;\frac32\right]$
- **c)** $\left[-1;\frac23\right]$; $\left[0;\frac12\right]$
- **d)** $\left[0;\frac12\right]$; $\left[\frac12;\frac23\right]$

<details><summary>Ответ и решение</summary>

**a** — $\left[-1;\frac12\right]$; $\left[0;\frac12\right]$. $y(-1)=y(0)=\frac12$, $y(1)=\frac52$.

</details>

### `fbmi-2021-30` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 30)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 9, D6

Kvadratická funkce s předpisem $y=x^2+2x+\frac12$ má extrém:

- **a)** Maximum v bodě $\left[-1;-\frac12\right]$
- **b)** Minimum v bodě $\left[-1;-\frac12\right]$
- **c)** Maximum v bodě $\left[1;\frac72\right]$
- **d)** Minimum v bodě $\left[1;\frac72\right]$

<details><summary>Ответ и решение</summary>

**b** — Minimum v bodě $\left[-1;-\frac12\right]$. $y=(x+1)^2-\frac12$.

</details>

### `fbmi-2021-31` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 31)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE DÚ 9, D3

Kvadratická funkce s předpisem $y=x^2+2x+3$ je klesající na intervalu:

- **a)** $(-\infty;+1\rangle$
- **b)** $\langle+1;+\infty)$
- **c)** $(-\infty;-1\rangle$
- **d)** $\langle-1;+\infty)$

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;-1\rangle$. Vrchol $x=-1$, parabola otevřená nahoru.

</details>

### `fbmi-2021-32` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 32)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 9, D5

Kvadratická funkce s předpisem $y=-2x^2+4x+7$ je klesající na intervalu:

- **a)** $(-\infty;+1\rangle$
- **b)** $\langle+1;+\infty)$
- **c)** $(-\infty;-1\rangle$
- **d)** $\langle-1;+\infty)$

<details><summary>Ответ и решение</summary>

**b** — $\langle+1;+\infty)$. Vrchol $x=1$, parabola otevřená dolů.

</details>

### `fbmi-2021-33` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 33)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE DÚ 9, D4

Jsou dány body $[2;3]$; $[4;-1]$. Předpis lineární funkce, jejíž graf těmito body prochází, je:

- **a)** $y=x+1$
- **b)** $y=-x+5$
- **c)** $y=2x-1$
- **d)** $y=-2x+7$

<details><summary>Ответ и решение</summary>

**d** — $y=-2x+7$. $k=\frac{-1-3}{4-2}=-2$, $q=7$.

</details>

### `vut-fekt-2022-v1-14` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 14, 5 bodů)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Je dána funkce $f(x)=x^3-6$. Rovnost $2f(t)=f(2t)$ platí právě pro

- **a)** $t=1$
- **b)** $t=0$
- **c)** $t=-1$
- **d)** každé reálné $t$
- **e)** neplatí pro žádné reálné $t$

<details><summary>Ответ и решение</summary>

**c** — $t=-1$. $2t^3-12=8t^3-6\Rightarrow t^3=-1$.

</details>

### `vut-fekt-2022-v2-14` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 14, 5 bodů)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Je dána funkce $f(x)=x^2-1$. Rovnost $2f(t)=f(2t)$ platí právě pro

- **a)** $t=-\sqrt6/2$
- **b)** $t=\sqrt6/2$
- **c)** $t=0$
- **d)** každé reálné $t$
- **e)** neplatí pro žádné reálné $t$

<details><summary>Ответ и решение</summary>

**e** — neplatí pro žádné reálné $t$. $2t^2-2=4t^2-1\Rightarrow t^2=-\frac12$.

</details>

### `vut-fekt-2023-v1-13` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 13, 5 bodů)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Je dána funkce $f(x)=3x-2$. Rovnost $f(2t+1)=0$ platí pro

- **a)** $t=2/3$
- **b)** $t=-2/3$
- **c)** $t=1/6$
- **d)** $t=-1/6$
- **e)** neplatí pro žádné $t$

<details><summary>Ответ и решение</summary>

**d** — $t=-1/6$. $3(2t+1)-2=6t+1=0$.

</details>

### `vut-fekt-2023-v2-13` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 13, 5 bodů)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Je dána funkce $f(x)=2x+1$. Rovnost $f(3t-2)=0$ platí pro

- **a)** $t=1/2$
- **b)** $t=-1/2$
- **c)** $t=1/6$
- **d)** $t=-1/6$
- **e)** neplatí pro žádné $t$

<details><summary>Ответ и решение</summary>

**a** — $t=1/2$. $2(3t-2)+1=6t-3=0$.

</details>

### `fit-2015-04` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 4, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Je dána funkce $f(x)=2x+1+x^2$. Spočtěte hodnotu rozdílu $2f(t+1)-f(t-1)$.

- **a)** $2t^2+2t+9$
- **b)** $3t^2+4t+12$
- **c)** Žádná z ostatních možností není správná.
- **d)** $t^2+8t+8$
- **e)** $t^2+2t+7$

<details><summary>Ответ и решение</summary>

**d** — $t^2+8t+8$. $f(x)=(x+1)^2$: $2(t+2)^2-t^2=t^2+8t+8$.

</details>

### `fit-2018-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2019 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2018.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 9, úloha 17

Je dána funkce $f(x)=2x^2-2$. Spočtěte hodnotu rozdílu $2f(t+1)-f(t-1)$.

- **a)** Žádná z ostatních možností není správná.
- **b)** $2t^2+4t$
- **c)** $2t^2+12t$
- **d)** $8t$
- **e)** $2t^2-4$

<details><summary>Ответ и решение</summary>

**c** — $2t^2+12t$. $2\left(2(t+1)^2-2\right)-\left(2(t-1)^2-2\right)=2t^2+12t$.

</details>

### `fit-2018-08` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2019 (příklad 8, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2018.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 9, D4 (pool přijímaček)

Nalezněte obor hodnot funkce $f(x)=\sqrt{2x+3}-1\,.$

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2027, příklad 6 (7 b)

- **a)** Obor hodnot je $\langle-\frac32;\infty)$.
- **b)** Obor hodnot jsou všechna reálná čísla.
- **c)** Obor hodnot je $\langle-1;\infty)$.
- **d)** Žádná z ostatních možností není správná.
- **e)** Obor hodnot je $\langle1;\infty)$.

<details><summary>Ответ и решение</summary>

**c** — Obor hodnot je $\langle-1;\infty)$.. $\sqrt{2x+3}$ nabývá všech hodnot $\langle0;\infty)$.

</details>

### `fit-2022-01` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 1, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 2, D10

Je dána funkce $f(x)=x^2-2x+1$. Spočtěte hodnotu rozdílu $f(t+1)-f(t-1)$.

- **a)** $2t^2-4t+4$
- **b)** $-4t+4$
- **c)** $4t-4$
- **d)** $2$
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**c** — $4t-4$. $f(x)=(x-1)^2$: $t^2-(t-2)^2=4t-4$.

</details>

### `fit-2022-11` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 11, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 9, úloha 18

Nalezněte obor hodnot funkce $f(x)=2x^2-5x+3\,.$

- **a)** Žádná z ostatních možností není správná.
- **b)** Obor hodnot je $\left(\frac54,\infty\right)$.
- **c)** Obor hodnot jsou všechna reálná čísla.
- **d)** Obor hodnot je $\left\langle-\frac{19}{2},\infty\right)$
- **e)** Obor hodnot je $\left\langle-\frac18,\infty\right)$.

<details><summary>Ответ и решение</summary>

**e** — Obor hodnot je $\left\langle-\frac18,\infty\right)$.. Vrchol $x=\frac54$, $f\left(\frac54\right)=-\frac18$.

</details>

### `fjfi-v2-09` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 2 (příklad 9, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Určete definiční obor funkce zadané předpisem $f:y=\dfrac{1}{\sqrt{2x+3}}\,.$

- **a)** $\left(-\frac32,+\infty\right)$
- **b)** $\left(-\frac23,+\infty\right)$
- **c)** $\left(-\frac12,3\right)$
- **d)** $\left(-\infty,-\frac32\right)\cup\left(-\frac23,+\infty\right)$
- **e)** $\left(-\infty,-\frac23\right)$

<details><summary>Ответ и решение</summary>

**a** — $\left(-\frac32,+\infty\right)$. $2x+3>0$.

</details>

### `vut-fsi-2014-z2-05` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 5, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Křivka o rovnici $y=(x-2)(x+3)$ protíná osu x v bodech

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 5, 1 b)

- **a)** $x_1=-2;x_2=3$
- **b)** $x_1=2;x_2=3$
- **c)** $x_1=-2;x_2=-3$
- **d)** $x_1=2;x_2=-3$
- **e)** osu x neprotíná

<details><summary>Ответ и решение</summary>

**d** — $x_1=2;x_2=-3$

</details>

### `vut-fsi-2014-z7-05` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 5, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 32. Hyperbola · *Текст:* текст оригинала (по курсу)

Rovnice $y=\dfrac1{x-1}$ je rovnicí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 6, 1 b)

- **a)** elipsy
- **b)** paraboly
- **c)** přímky
- **d)** kružnice
- **e)** hyperboly

<details><summary>Ответ и решение</summary>

**e** — hyperboly

</details>

### `vut-fekt-2022-v1-06` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 6, 3 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 10. Exponenciální funkce, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Graf funkce $f(x)=2^{x-3}+1$ je oproti grafu funkce $y=2^x$ posunutý

- **a)** o 3 nahoru a o 1 doleva
- **b)** o 3 dolů a o 1 doprava
- **c)** o 3 doleva a o 1 nahoru
- **d)** o 3 doleva a o 1 dolů
- **e)** o 3 doprava a o 1 nahoru

<details><summary>Ответ и решение</summary>

**e** — o 3 doprava a o 1 nahoru

</details>

### `vut-fekt-2022-v2-06` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 6, 3 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 10. Exponenciální funkce, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Graf funkce $f(x)=2^{x+1}+3$ je oproti grafu funkce $y=2^x$ posunutý

- **a)** o 1 nahoru a o 3 doleva
- **b)** o 1 dolů a o 3 doprava
- **c)** o 1 doleva a o 3 nahoru
- **d)** o 1 doprava a o 3 dolů
- **e)** o 1 doprava a o 3 nahoru

<details><summary>Ответ и решение</summary>

**c** — o 1 doleva a o 3 nahoru

</details>

### `vut-fekt-2023-v1-08` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 8, 3 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 10. Exponenciální funkce, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Ze zadaných funkcí vyberte tu, jejíž graf vznikne z grafu funkce $y=3^x$ posunutím o 1 nahoru a o 2 doleva.

- **a)** $y=3^{x-2}+1$
- **b)** $y=3^{x-1}+2$
- **c)** $y=3^{x+2}+1$
- **d)** $y=3^{x+2}-1$
- **e)** $y=3^{x-2}-1$

<details><summary>Ответ и решение</summary>

**c** — $y=3^{x+2}+1$

</details>

### `vut-fekt-2023-v2-08` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 8, 3 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 10. Exponenciální funkce, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Ze zadaných funkcí vyberte tu, jejíž graf vznikne z grafu funkce $y=2^x$ posunutím o 2 doprava a o 3 dolů.

- **a)** $y=2^{x-2}-3$
- **b)** $y=2^{x-3}-2$
- **c)** $y=2^{x+2}-3$
- **d)** $y=2^{x-3}+2$
- **e)** $y=2^{x+2}+3$

<details><summary>Ответ и решение</summary>

**a** — $y=2^{x-2}-3$

</details>

### `vsb-fbi-2013-pz3-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 3 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $2\cdot\ln(x)=\ln(12)-\ln(3)+\ln(1)$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=2$. $\ln x^2=\ln4$, $x>0$.

</details>

### `vsb-fbi-2013-pz4-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 4 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $2+3^{x-3}=3^{x-2}$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=3$. $3^{x-2}-3^{x-3}=2\cdot3^{x-3}=2$, tedy $3^{x-3}=1$.

</details>

### `vsb-fbi-2013-pz11-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 11 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\log(3-x)=2\cdot\log(x-1)$ a stanovte podmínky její řešitelnosti.

<details><summary>Ответ и решение</summary>

$x=2$ (podmínky $1<x<3$). $3-x=(x-1)^2\Rightarrow x^2-x-2=0$, $x=2$ nebo $x=-1$; podmínkám vyhoví $x=2$.

</details>

### `vsb-fbi-2015-pz23-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 23 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\left(\dfrac49\right)^x=\left(\dfrac32\right)^8$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=-4$. $\left(\frac23\right)^{2x}=\left(\frac23\right)^{-8}$.

</details>

### `vsb-fbi-2015-pz24-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 24 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $4^{x-7}=\dfrac1{64}$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=4$. $4^{x-7}=4^{-3}$.

</details>

### `vsb-fbi-2017-pz1-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 1 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $2^{x+2}-2^x=24$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=3$. $3\cdot2^x=24$.

</details>

### `vsb-fbi-2017-pz6-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 6 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\dfrac{5^{2-3x}}5=1$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=\frac13$. $5^{1-3x}=5^0$.

</details>

### `vut-fekt-2024-v1-08` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 8, 3 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Množina všech řešení rovnice $\left(3^x\right)^2\cdot3^{-2x}=27$ je

- **a)** $\{-1\}$
- **b)** $\{-1,3\}$
- **c)** $\{1\}$
- **d)** $\{-3,1\}$
- **e)** $\{\ \}$

<details><summary>Ответ и решение</summary>

**e** — $\{\ \}$. Levá strana je $3^{2x-2x}=1\ne27$.

</details>

### `vut-fekt-2024-v2-08` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 8, 3 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Množina všech řešení rovnice $\left(2^x\right)^2\cdot2^{-3x}=16$ je

- **a)** $\{-4\}$
- **b)** $\{-4,1\}$
- **c)** $\{4\}$
- **d)** $\{-1,4\}$
- **e)** $\{-1\}$

<details><summary>Ответ и решение</summary>

**a** — $\{-4\}$. $2^{-x}=2^4$, $x=-4$.

</details>

### `fjfi-v1-06` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 1 (příklad 6, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte v $\mathbb{R}$ $2^{2x-1}=8$

- **a)** $2$
- **b)** $4$
- **c)** $6$
- **d)** $0$
- **e)** $1$

<details><summary>Ответ и решение</summary>

**a** — $2$. $2x-1=3$, $x=2$.

</details>

### `fjfi-v2-06` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 2 (příklad 6, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte v $\mathbb{R}$ $\left(\dfrac49\right)^{x+2}=\left(\dfrac32\right)^{3-x}$

- **a)** $7$
- **b)** $0$
- **c)** $1$
- **d)** $-7$
- **e)** $9$

<details><summary>Ответ и решение</summary>

**d** — $-7$. $\left(\frac23\right)^{2x+4}=\left(\frac23\right)^{x-3}\Rightarrow2x+4=x-3$, $x=-7$.

</details>

### `vut-fsi-2014-z2-12` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 12, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\left(\dfrac32\right)^x=1$, pak $x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 12, 1 b)

- **a)** $1$
- **b)** $-1$
- **c)** $0$
- **d)** $x=\pi$
- **e)** neexistuje

<details><summary>Ответ и решение</summary>

**c** — $0$

</details>

### `vut-fsi-2014-z3-12` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 12, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\left(\dfrac23\right)^x=1$, pak $x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 12, 1 b)

- **a)** $1$
- **b)** $-1$
- **c)** $0$
- **d)** $x=\pi$
- **e)** neexistuje

<details><summary>Ответ и решение</summary>

**c** — $0$

</details>

### `vut-fsi-2014-z8-12` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 12, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\dfrac{5^x}{2^x}=\dfrac4{25}$, pak

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 12, 1 b)

- **a)** $x=\dfrac52$
- **b)** $x=-2$
- **c)** $x=1{,}5$
- **d)** $x=\dfrac25$
- **e)** $x=1$

<details><summary>Ответ и решение</summary>

**b** — $x=-2$. $\left(\frac52\right)^x=\left(\frac52\right)^{-2}$.

</details>

### `vut-fsi-2014-z9-12` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 12, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\dfrac{5^x}{2^x}=\dfrac8{125}$, pak

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 12, 1 b)

- **a)** $x=\dfrac52$
- **b)** $x=-3$
- **c)** $x=1{,}5$
- **d)** $x=\dfrac25$
- **e)** $x=3$

<details><summary>Ответ и решение</summary>

**b** — $x=-3$. $\left(\frac52\right)^x=\left(\frac25\right)^3$.

</details>

### `vut-fsi-2014-z1-13` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 13, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešením nerovnice $2^x>1$ jsou právě všechna $x\in\mathbf R$, pro která platí:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 13, 1 b)

- **a)** $x>2$
- **b)** $x>3$
- **c)** $x>\log_22$
- **d)** $x>0$
- **e)** $x<1$

<details><summary>Ответ и решение</summary>

**d** — $x>0$

</details>

### `vut-fsi-2014-z4-13` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 13, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešeními nerovnice $3^{x-2}\le1$ jsou právě všechna $x\in\mathbf R$, pro která platí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 13, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 13, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 13, 1 b)

- **a)** $x\ge0$
- **b)** $x\ge2$
- **c)** $x\le2$
- **d)** $x\le-2$
- **e)** $2\le x\le3$

<details><summary>Ответ и решение</summary>

**c** — $x\le2$

</details>

### `vut-fsi-2014-z6-13` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 13, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 11. Exponenciální rovnice a nerovnice, 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Je-li $16\sqrt2=2^{x+1}$, pak $x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 13, 1 b)

- **a)** $1$
- **b)** $3{,}5$
- **c)** $3/5$
- **d)** $0{,}5$
- **e)** žádná odpověď není správná

<details><summary>Ответ и решение</summary>

**b** — $3{,}5$. $2^{4{,}5}=2^{x+1}$.

</details>

### `vut-fsi-2014-z10-14` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 14, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 11. Exponenciální rovnice a nerovnice, Ostatní · *Текст:* текст оригинала (по курсу)

Při průchodu skleněnou deskou ztrácí světelný paprsek pětinu energie. Při průchodu pěti těmito deskami mu zůstane

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 14, 1 b)

- **a)** $\dfrac12$ energie
- **b)** $\left(\dfrac15\right)^5$ energie
- **c)** $\left(\dfrac54\right)^5$ energie
- **d)** $\left(\dfrac45\right)^5$ energie
- **e)** nezůstane žádná energie

<details><summary>Ответ и решение</summary>

**d** — $\left(\dfrac45\right)^5$ energie

</details>

### `vut-fsi-2014-z8-20` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 20, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\left(\dfrac34\right)^{x-1}=0$, pak $x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 20, 2 b)

- **a)** $0$
- **b)** $1$
- **c)** $-1$
- **d)** $\dfrac43$
- **e)** rovnice nemá řešení

<details><summary>Ответ и решение</summary>

**e** — rovnice nemá řešení. Exponenciála je kladná.

</details>

### `vscht-01` — [VŠCHT, ukázka vzorového testu z matematiky (bakalářské studium) (úloha 1, 1 bod)](https://studuj.vscht.cz/wp-content/uploads/2021/02/BC-ekonomove-matematika-prijimaci-zkouska-vzorovy-test.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Množina všech reálných čísel, pro která platí $\left(\frac45\right)^x>\frac{25}{16}$, je rovna množině

- **a)** $(-\infty,-2)$
- **b)** $(2,\infty)$
- **c)** $(-2,2)$
- **d)** $(-2,\infty)$

<details><summary>Ответ и решение</summary>

**a** — $(-\infty,-2)$. $\frac{25}{16}=\left(\frac45\right)^{-2}$ a základ je menší než $1$, proto $x<-2$.

</details>

### `fbmi-2021-25` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 25)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 12, úloha 20

Výraz $\log\frac{a}{(b+c)^2}$ je roven:

- **a)** $\log a:2\log(b+c)$
- **b)** $\log a-2\log(b+c)$
- **c)** $\log a-2\log b-2\log c$
- **d)** $\log a:(2\log b+2\log c)$

<details><summary>Ответ и решение</summary>

**b** — $\log a-2\log(b+c)$. Logaritmus podílu a mocniny.

</details>

### `fbmi-2021-26` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 26)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 12, D1

Výraz $\log\frac{a+b}{\sqrt c}$ je roven:

- **a)** $\log(a+b):\log\sqrt c$
- **b)** $\log a+\log b-\frac12\log c$
- **c)** $\log(a+b)-\frac12\log c$
- **d)** $(\log a+\log b):\frac12\log c$

<details><summary>Ответ и решение</summary>

**c** — $\log(a+b)-\frac12\log c$. $\log(a+b)$ se nerozkládá.

</details>

### `fbmi-2021-27` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 27)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 12, D2

Výraz $\log\frac{a+b}{c^2}$ je roven:

- **a)** $\log(a+b):2\log c$
- **b)** $\log a+\log b-2\log c$
- **c)** $\log(a+b)-2\log c$
- **d)** $(\log a+\log b):2\log c$

<details><summary>Ответ и решение</summary>

**c** — $\log(a+b)-2\log c$. $\log(a+b)$ se nerozkládá.

</details>

### `vut-fekt-2022-v1-07` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 7, 3 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Výraz $2\log_3x-1$ se dá přepsat jako

- **a)** $\log_3(2x-1)$
- **b)** $\log_3(x^2-1)$
- **c)** $\log_3(2x-3)$
- **d)** $\log_3\frac{x^2}3$
- **e)** $\log_3(3x^2)$

<details><summary>Ответ и решение</summary>

**d** — $\log_3\frac{x^2}3$. $2\log_3x-\log_33=\log_3\frac{x^2}3$.

</details>

### `vut-fekt-2022-v2-07` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 7, 3 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Výraz $4-\log_2x$ se dá přepsat jako

- **a)** $\log_2(4-x)$
- **b)** $\log_2(16-x)$
- **c)** $\log_2(16x)$
- **d)** $\log_2\frac2x$
- **e)** $\log_2\frac{16}x$

<details><summary>Ответ и решение</summary>

**e** — $\log_2\frac{16}x$. $\log_216-\log_2x=\log_2\frac{16}x$.

</details>

### `vut-fekt-2023-v1-09` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 9, 3 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Jestliže $5^x=3$, pak

- **a)** $x=\log_35$
- **b)** $x=\log_53$
- **c)** $x=3^{1/5}$
- **d)** $x=5^{1/3}$
- **e)** $x$ neexistuje

<details><summary>Ответ и решение</summary>

**b** — $x=\log_53$

</details>

### `vut-fekt-2023-v2-09` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 9, 3 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Jestliže $3^x=2$, pak

- **a)** $x=\log_23$
- **b)** $x=\log_32$
- **c)** $x=2^{1/3}$
- **d)** $x=3^{1/2}$
- **e)** $x$ neexistuje

<details><summary>Ответ и решение</summary>

**b** — $x=\log_32$

</details>

### `vut-fekt-2024-v1-09` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 9, 3 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 12. Logaritmická funkce, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Graf funkce $f(x)=\log(x+1)-2$ je oproti grafu funkce $y=\log x$ posunutý

- **a)** o 1 nahoru a o 2 doleva
- **b)** o 1 dolů a o 2 doprava
- **c)** o 1 doleva a o 2 nahoru
- **d)** o 1 doleva a o 2 dolů
- **e)** o 1 doprava a o 2 nahoru

<details><summary>Ответ и решение</summary>

**d** — o 1 doleva a o 2 dolů. $x+1$ — o 1 doleva, $-2$ — o 2 dolů.

</details>

### `vut-fekt-2024-v2-09` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 9, 3 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 12. Logaritmická funkce, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Graf funkce $f(x)=\log(x+1)+3$ je oproti grafu funkce $y=\log x$ posunutý

- **a)** o 1 nahoru a o 3 doleva
- **b)** o 1 dolů a o 3 doprava
- **c)** o 1 doleva a o 3 nahoru
- **d)** o 1 doprava a o 3 dolů
- **e)** o 1 doprava a o 3 nahoru

<details><summary>Ответ и решение</summary>

**c** — o 1 doleva a o 3 nahoru. $x+1$ — o 1 doleva, $+3$ — o 3 nahoru.

</details>

### `vut-fsi-2014-z1-12` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 12, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 12. Logaritmická funkce, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Je-li $f(x)=[\log(3x-1)]^2$, pak $f\left(\dfrac13\right)=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 12, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 12, 1 b)

- **a)** $0$
- **b)** $1$
- **c)** není definováno
- **d)** $10$
- **e)** $100$

<details><summary>Ответ и решение</summary>

**c** — není definováno. $3\cdot\frac13-1=0$, $\log0$ neexistuje.

</details>

### `vut-fsi-2014-z5-12` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 12, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

$\log_2\sqrt[5]{2^2}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 12, 1 b)

- **a)** $0{,}4$
- **b)** $0{,}2$
- **c)** $-0{,}1$
- **d)** $-0{,}4$
- **e)** $1$

<details><summary>Ответ и решение</summary>

**a** — $0{,}4$. $\log_22^{\frac25}$.

</details>

### `vut-fsi-2014-z6-12` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 12, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Definičním oborem funkce $y=\dfrac12\log(3-x)$ je množina všech $x\in\mathbf R$, pro které platí:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 12, 1 b)

- **a)** $x>0$
- **b)** $x>\dfrac32$
- **c)** $x<\dfrac32$
- **d)** $x\le3$
- **e)** $x<3$

<details><summary>Ответ и решение</summary>

**e** — $x<3$

</details>

### `vut-fsi-2014-z7-12` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 12, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

$\log\dfrac{\sqrt[3]5}{\sqrt[4]5}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 12, 1 b)

- **a)** $\dfrac1{12}(1+\log2)$
- **b)** $-\dfrac1{12}\log5$
- **c)** $\dfrac1{12}\log5$
- **d)** $\log\sqrt5$
- **e)** $-\log\sqrt5$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac1{12}\log5$. $5^{\frac13-\frac14}=5^{\frac1{12}}$.

</details>

### `vut-fsi-2014-z2-13` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 13, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

$\log_3(\log_33)=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 13, 1 b)

- **a)** $1$
- **b)** $3$
- **c)** $0$
- **d)** $3^{-1}$
- **e)** $-1$

<details><summary>Ответ и решение</summary>

**c** — $0$. $\log_31=0$.

</details>

### `vut-fsi-2014-z5-13` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 13, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Definičním oborem funkce $y=3\log(x+2)$ je množina všech $x\in\mathbf R$, pro která platí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 13, 1 b)

- **a)** $x>0$
- **b)** $x>\dfrac32$
- **c)** $x>-\dfrac32$
- **d)** $x>2$
- **e)** $x>-2$

<details><summary>Ответ и решение</summary>

**e** — $x>-2$

</details>

### `vut-fsi-2014-z4-20` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 20, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

$\ln\dfrac{\sqrt2}{\sqrt[3]4}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 20, 2 b)

- **a)** $\dfrac13\ln2$
- **b)** $-\dfrac16\ln2$
- **c)** $\sqrt2$
- **d)** $\dfrac16\ln2$
- **e)** $-\sqrt2$

<details><summary>Ответ и решение</summary>

**b** — $-\dfrac16\ln2$. $2^{\frac12-\frac23}=2^{-\frac16}$.

</details>

### `vsb-fbi-2015-pz25-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 25 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $2\ln x-\ln1=\ln18-\ln2$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=3$. $\ln x^2=\ln9$, $x>0$.

</details>

### `vsb-fbi-2015-pz31-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 31 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\dfrac23\log x=2\log2$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=8$. $\log x=3\log2=\log8$.

</details>

### `vsb-fbi-2015-pz32-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 32 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\dfrac13\log x=1-\log5$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=8$. $1-\log5=\log2$, tedy $\log x=3\log2$.

</details>

### `vsb-fbi-2017-pz15-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 15 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\log(4x-3)=2\log(2x-1)$ a stanovte podmínky její řešitelnosti.

<details><summary>Ответ и решение</summary>

$x=1$ (podmínka $x>\frac34$). $4x-3=(2x-1)^2\Rightarrow(x-1)^2=0$.

</details>

### `fjfi-v1-05` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 1 (příklad 5, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte v $\mathbb{R}$ $\log_2(4x-4)-\log_2(3-x)=2$

- **a)** $1$
- **b)** $4$
- **c)** $0$
- **d)** $2$
- **e)** $3$

<details><summary>Ответ и решение</summary>

**d** — $2$. Podmínky $1<x<3$; $\frac{4x-4}{3-x}=4\Rightarrow x=2$.

</details>

### `vut-fsi-2014-z7-13` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 13, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\log_3x<1$, pak

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 13, 1 b)

- **a)** $x<1$
- **b)** $x>1$
- **c)** $x<3$
- **d)** $x>0$
- **e)** $0<x<3$

<details><summary>Ответ и решение</summary>

**e** — $0<x<3$

</details>

### `vut-fsi-2014-z5-20` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 20, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Rovnice $\log x^3+1=\log x-1$ má řešení $x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 20, 2 b)

- **a)** $10$
- **b)** $10^{-1}$
- **c)** $10^0$
- **d)** $10^{-2}$
- **e)** $10^{-3}$

<details><summary>Ответ и решение</summary>

**b** — $10^{-1}$. $2\log x=-2$.

</details>

### `vut-fekt-2022-v1-09` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 9, 3 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Pro libovolná dvě čísla $x,y$ splňující podmínku $y=\pi-x$ platí

- **a)** $\sin x=\sin y$
- **b)** $\sin x=\cos y$
- **c)** $\cos x=\cos y$
- **d)** $\cos x=\sin y$
- **e)** $\sin x=-\cos y$

<details><summary>Ответ и решение</summary>

**a** — $\sin x=\sin y$. $\sin(\pi-x)=\sin x$.

</details>

### `vut-fekt-2022-v2-09` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 9, 3 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Pro libovolná dvě čísla $x,y$ splňující podmínku $y=\pi-x$ platí

- **a)** $\cos x=\cos y$
- **b)** $\cos x=-\cos y$
- **c)** $\sin x=-\sin y$
- **d)** $\sin x=\cos y$
- **e)** $\sin y=\cos x$

<details><summary>Ответ и решение</summary>

**b** — $\cos x=-\cos y$. $\cos(\pi-x)=-\cos x$.

</details>

### `fel-vzor01-2` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 2, 1 bod)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Maximální definiční obor funkce $f(x)=\dfrac{x}{\sin x}$ je

- **a)** $(-\infty,\infty)$
- **b)** stejný jako pro funkci $g(x)=\operatorname{tg}x$
- **c)** $\bigcup_{k\in\mathbb{Z}}\langle k\pi,(k+1)\pi)$
- **d)** $\bigcup_{k\in\mathbb{Z}}\langle2k\pi,(2k+1)\pi)$
- **e)** stejný jako pro funkci $g(x)=\operatorname{cotg}x$

<details><summary>Ответ и решение</summary>

**e** — stejný jako pro funkci $g(x)=\operatorname{cotg}x$. $\sin x\ne0\iff x\ne k\pi$ — stejně jako u $\operatorname{cotg}x$.

</details>

### `fit-2025-05` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2025 (příklad 5, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2025-s-resenim.pdf)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Nalezněte obor hodnot funkce $f(x)=2-3\operatorname{cotg}(x-1)\,.$

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2024, příklad 9 (7 b)

- **a)** Obor hodnot je $\left(1-\frac{\pi}{2},1+\frac{\pi}{2}\right)$.
- **b)** Obor hodnot je $\mathbb{R}\setminus\{1\}$.
- **c)** Obor hodnot je $\langle-1,5\rangle$.
- **d)** Obor hodnot jsou všechna reálná čísla.
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Obor hodnot jsou všechna reálná čísla.. $\operatorname{cotg}$ nabývá všech reálných hodnot.

</details>

### `fit-2026-10` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2026 (příklad 10, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Nalezněte obor hodnot funkce $f(x)=2\sin\left(3x-\dfrac{\pi}{2}\right)-4\,.$

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2017, příklad 9 (5 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2018, příklad 12 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2021, příklad 9 (7 b)

- **a)** Obor hodnot je $\langle-7,-1\rangle$.
- **b)** Obor hodnot je $\langle-6,-2\rangle$.
- **c)** Obor hodnot je $\langle1,7\rangle$.
- **d)** Žádná z ostatních možností není správná.
- **e)** Obor hodnot je $\langle2,6\rangle$.

<details><summary>Ответ и решение</summary>

**b** — Obor hodnot je $\langle-6,-2\rangle$.. $2\sin(\dots)\in\langle-2,2\rangle$, posun o $-4$.

</details>

### `vut-fsi-2014-z3-08` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 8, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Je-li $\sin x=\dfrac35;x\in\left\langle0;\dfrac\pi2\right\rangle$, pak $\cos x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 8, 1 b)

- **a)** $\dfrac25$
- **b)** $\dfrac45$
- **c)** $\dfrac7{12}$
- **d)** $\dfrac{16}{25}$
- **e)** $-\dfrac45$

<details><summary>Ответ и решение</summary>

**b** — $\dfrac45$. $\cos x=\sqrt{1-\frac9{25}}$, v prvním kvadrantu kladný.

</details>

### `vut-fsi-2014-z4-08` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 8, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

$(\cos x-\sin x)^2=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 8, 1 b)

- **a)** $1-\sin2x$
- **b)** $1$
- **c)** $\cos^2x-\sin^2x$
- **d)** $1-\cos2x$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**a** — $1-\sin2x$

</details>

### `vut-fsi-2014-z5-08` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 8, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Je-li $\sin\alpha=0{,}5$, pak $\cos2\alpha=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 8, 1 b)

- **a)** $1$
- **b)** $2$
- **c)** $0{,}5$
- **d)** $-0{,}5$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**c** — $0{,}5$. $1-2\sin^2\alpha$.

</details>

### `vut-fsi-2014-z9-08` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 8, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Je-li $\operatorname{tg}\alpha=1$, pak $\operatorname{cotg}2\alpha=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 8, 1 b)

- **a)** $1$
- **b)** $2$
- **c)** $0$
- **d)** $-1$
- **e)** neexistuje

<details><summary>Ответ и решение</summary>

**c** — $0$. $2\alpha=\frac\pi2+2k\pi$.

</details>

### `vut-fsi-2014-z1-09` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 9, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

$(\sin x-\cos x)^2=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 9, 1 b)

- **a)** $1-\sin2x$
- **b)** $1$
- **c)** $\cos^2x-\sin^2x$
- **d)** $1-\cos2x$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**a** — $1-\sin2x$. $\sin^2x+\cos^2x-2\sin x\cos x$.

</details>

### `vut-fsi-2014-z3-09` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 9, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Je-li $\sin x=1$, pak $\sin2x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 9, 1 b)

- **a)** $1$
- **b)** $0{,}5$
- **c)** $2$
- **d)** $-1$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**e** — $0$. $\cos x=0$, $\sin2x=2\sin x\cos x=0$.

</details>

### `vut-fsi-2014-z4-09` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 9, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

$\sin^2\alpha-\cos^2\alpha=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 9, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 9, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 9, 1 b)

- **a)** $1$
- **b)** $-1$
- **c)** $\sin2\alpha$
- **d)** $-\cos2\alpha$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**d** — $-\cos2\alpha$

</details>

### `vut-fsi-2014-z6-09` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 9, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Pro všechny přípustné hodnoty platí $1+\operatorname{cotg}^2\alpha=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 9, 1 b)

- **a)** $\dfrac1{\sin^2\alpha}$
- **b)** $\dfrac1{\cos^2\alpha}$
- **c)** $\dfrac1{\cos\alpha}$
- **d)** $\dfrac1{\sin\alpha}$
- **e)** $\operatorname{tg}\alpha$

<details><summary>Ответ и решение</summary>

**a** — $\dfrac1{\sin^2\alpha}$

</details>

### `vut-fsi-2014-z9-09` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 9, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Pro všechny přípustné hodnoty platí $1+\operatorname{tg}^2\alpha=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 9, 1 b)

- **a)** $\dfrac1{\sin^2\alpha}$
- **b)** $\dfrac1{\cos^2\alpha}$
- **c)** $\dfrac1{\cos\alpha}$
- **d)** $\dfrac1{\sin\alpha}$
- **e)** $\operatorname{cotg}\alpha$

<details><summary>Ответ и решение</summary>

**b** — $\dfrac1{\cos^2\alpha}$

</details>

### `vut-fsi-2014-z6-19` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 19, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Výraz $1-\cos2x$ lze upravit na tvar

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 19, 2 b)

- **a)** $0$
- **b)** $2\sin x$
- **c)** $2\sin2x$
- **d)** $\sin^2x$
- **e)** $2\sin^2x$

<details><summary>Ответ и решение</summary>

**e** — $2\sin^2x$

</details>

### `vut-fsi-2014-z7-19` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 19, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Výraz $1-\sin2x$ lze upravit na tvar

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 19, 2 b)

- **a)** $0$
- **b)** $2\cos x$
- **c)** $2\sin2x$
- **d)** $(\sin x+\cos x)^2$
- **e)** $(\sin x-\cos x)^2$

<details><summary>Ответ и решение</summary>

**e** — $(\sin x-\cos x)^2$

</details>

### `vut-fsi-2014-z8-19` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 19, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Nejmenší perioda funkce $y=\operatorname{cotg}2x$ je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 19, 2 b)

- **a)** $3\pi$
- **b)** $2\pi$
- **c)** $\pi$
- **d)** $\dfrac\pi2$
- **e)** $\dfrac\pi4$

<details><summary>Ответ и решение</summary>

**d** — $\dfrac\pi2$

</details>

### `vut-fsi-2014-z9-19` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 19, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Nejmenší perioda funkce $y=\operatorname{tg}2x$ je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 19, 2 b)

- **a)** $3\pi$
- **b)** $2\pi$
- **c)** $\pi$
- **d)** $\dfrac\pi2$
- **e)** $\dfrac\pi4$

<details><summary>Ответ и решение</summary>

**d** — $\dfrac\pi2$

</details>

### `vscht-04` — [VŠCHT, ukázka vzorového testu z matematiky (bakalářské studium) (úloha 4, 1 bod)](https://studuj.vscht.cz/wp-content/uploads/2021/02/BC-ekonomove-matematika-prijimaci-zkouska-vzorovy-test.pdf)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Je-li $\cos\alpha=1$, pak $\cos2\alpha$ se rovná

- **a)** $-1$
- **b)** $1/2$
- **c)** $1$
- **d)** $2$

<details><summary>Ответ и решение</summary>

**c** — $1$. $\cos2\alpha=2\cos^2\alpha-1=1$.

</details>

### `vut-fekt-2024-v1-11` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 11, 5 bodů)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Množina všech řešení rovnice $4\sin^2x=1$, která leží v intervalu $\langle0,2\pi\rangle$, je

- **a)** $\{\pi/6,5\pi/6\}$
- **b)** $\{\pi/6,5\pi/6,7\pi/6,11\pi/6\}$
- **c)** $\{\pi/3,2\pi/3\}$
- **d)** $\{\pi/3,2\pi/3,4\pi/3,5\pi/3\}$
- **e)** prázdná

<details><summary>Ответ и решение</summary>

**b** — $\{\pi/6,5\pi/6,7\pi/6,11\pi/6\}$. $\sin x=\pm\frac12$.

</details>

### `vut-fekt-2024-v2-11` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 11, 5 bodů)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Množina všech řešení rovnice $2\cos^2x=1$, která leží v intervalu $\langle0,2\pi\rangle$, je

- **a)** $\{\pi/4,3\pi/4\}$
- **b)** $\{\pi/4,3\pi/4,5\pi/4,7\pi/4\}$
- **c)** $\{\pi/3,2\pi/3\}$
- **d)** $\{\pi/3,2\pi/3,4\pi/3,5\pi/3\}$
- **e)** prázdná

<details><summary>Ответ и решение</summary>

**b** — $\{\pi/4,3\pi/4,5\pi/4,7\pi/4\}$. $\cos x=\pm\frac{\sqrt2}2$.

</details>

### `vut-fsi-2014-z1-08` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 8, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\sin2x=\dfrac{\sqrt3}2$, $x\in\left\langle0;\dfrac\pi4\right\rangle$, pak $\operatorname{tg}x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 8, 1 b)

- **a)** $-\sqrt3$
- **b)** $1$
- **c)** neexistuje
- **d)** $\dfrac{\sqrt3}3$
- **e)** $\sqrt3$

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{\sqrt3}3$. $2x=\frac\pi3$, $x=\frac\pi6$.

</details>

### `vut-fsi-2014-z2-08` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 8, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\sin2x=\dfrac\pi2$, pak

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 8, 1 b)

- **a)** $x=1$
- **b)** $x=\dfrac12$
- **c)** $x=\dfrac{\sqrt2}2$
- **d)** $x=45^\circ$
- **e)** $x$ neexistuje

<details><summary>Ответ и решение</summary>

**e** — $x$ neexistuje. $\frac\pi2>1$.

</details>

### `vut-fsi-2014-z6-08` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 8, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\cos2x=\dfrac\pi2$, pak

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 8, 1 b)

- **a)** $x=1$
- **b)** $x=\dfrac12$
- **c)** $x=\dfrac{\sqrt2}2$
- **d)** $x=45^\circ$
- **e)** $x$ neexistuje

<details><summary>Ответ и решение</summary>

**e** — $x$ neexistuje. $\frac\pi2>1$.

</details>

### `vut-fsi-2014-z7-08` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 8, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešením rovnice $\sin x+\sin(-x)=0$ jsou právě všechna $x\in\mathbf R$, pro která platí ($k$ je celé číslo)

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 8, 1 b)

- **a)** $x\neq\pi+2k\pi$
- **b)** $x\neq\dfrac\pi2+k\pi$
- **c)** $x\in\mathbf R$
- **d)** rovnice nemá řešení
- **e)** $x\neq360^\circ$

<details><summary>Ответ и решение</summary>

**c** — $x\in\mathbf R$. Sinus je lichý, rovnost platí vždy.

</details>

### `vut-fsi-2014-z8-08` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 8, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Rovnice $\cos^2x-\sin^2x=2$ má řešení

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 8, 1 b)

- **a)** $x=1$
- **b)** $x=\dfrac\pi2$
- **c)** $x=-1$
- **d)** nemá řešení
- **e)** $x=\pi$

<details><summary>Ответ и решение</summary>

**d** — nemá řešení. Levá strana je $\cos2x\le1$.

</details>

### `vut-fsi-2014-z7-09` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 9, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\sin x=\cos x$, $x\in\langle0;\pi\rangle$, potom

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 9, 1 b)

- **a)** $x=0$
- **b)** $x=\dfrac\pi4$
- **c)** $x=\dfrac\pi2$
- **d)** $x=\dfrac{3\pi}4$
- **e)** $x=\pi$

<details><summary>Ответ и решение</summary>

**b** — $x=\dfrac\pi4$. $\operatorname{tg}x=1$.

</details>

### `vut-fsi-2014-z10-09` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 9, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\sin3x=\dfrac\pi3$, pak

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 9, 1 b)

- **a)** $x=1$
- **b)** $x=\dfrac13$
- **c)** $x=\dfrac{\sqrt2}3$
- **d)** $x=45^\circ$
- **e)** $x$ neexistuje

<details><summary>Ответ и решение</summary>

**e** — $x$ neexistuje. $\frac\pi3>1$.

</details>

### `vut-fsi-2014-z1-19` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 19, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešením rovnice $\dfrac1{\cos x}=0$ jsou právě všechna $x$, pro která je ($k$ je celé číslo):

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 19, 2 b)

- **a)** $x=2k\pi$
- **b)** $x=k\pi$
- **c)** $x=\dfrac\pi2+k\pi$
- **d)** $x=\dfrac\pi2+2k\pi$
- **e)** rovnice nemá řešení

<details><summary>Ответ и решение</summary>

**e** — rovnice nemá řešení. Zlomek s čitatelem $1$ nulový být nemůže.

</details>

### `vut-fsi-2014-z3-19` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 19, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešením rovnice $\dfrac1{\sin x}=0$ jsou právě všechna $x$, pro která je ($k$ je celé číslo):

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 19, 2 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 19, 2 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 19, 2 b)

- **a)** $x=2k\pi$
- **b)** $x=k\pi$
- **c)** $x=\dfrac\pi2+k\pi$
- **d)** $x=\dfrac\pi2+2k\pi$
- **e)** rovnice nemá řešení

<details><summary>Ответ и решение</summary>

**e** — rovnice nemá řešení. Zlomek s čitatelem $1$ nulový být nemůže.

</details>

### `vut-fekt-2024-v1-15` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 15, 5 bodů)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

Součin komplexních čísel $(3+2i)(1-4i)$ je

- **a)** $2-4i$
- **b)** $4-2i$
- **c)** $3-10i$
- **d)** $-5-10i$
- **e)** $11-10i$

<details><summary>Ответ и решение</summary>

**e** — $11-10i$. $3-12i+2i-8i^2=11-10i$.

</details>

### `vut-fekt-2024-v2-15` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 15, 5 bodů)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

Součin komplexních čísel $(2+3i)(4-i)$ je

- **a)** $2+6i$
- **b)** $5+10i$
- **c)** $6+2i$
- **d)** $10+11i$
- **e)** $11+10i$

<details><summary>Ответ и решение</summary>

**e** — $11+10i$. $8-2i+12i-3i^2=11+10i$.

</details>

### `fel-vzor01-5` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 5, 1 bod)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

Algebraický tvar komplexního čísla $z=\dfrac{1+\mathrm i}{1+2\mathrm i}$ je

- **a)** $\frac25$
- **b)** $\frac35-\frac15\mathrm i$
- **c)** $1+\frac12\mathrm i$
- **d)** $\frac23\mathrm i$
- **e)** $1+\mathrm i$

<details><summary>Ответ и решение</summary>

**b** — $\frac35-\frac15\mathrm i$. Rozšíříme $1-2\mathrm i$: $\frac{3-\mathrm i}{5}$.

</details>

### `fjfi-v1-12` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 1 (příklad 12, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

Zapište v algebraickém tvaru číslo $z=(1-2i)^2-(1+2i)^2\,.$

- **a)** $z=0$
- **b)** $z=-8$
- **c)** $z=-8i$
- **d)** $z=-8-8i$
- **e)** $z=8i$

<details><summary>Ответ и решение</summary>

**c** — $z=-8i$. $(-3-4i)-(-3+4i)=-8i$.

</details>

### `fjfi-v2-12` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 2 (příklad 12, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

Zapište v algebraickém tvaru číslo $z=(3+2i)^2\,.$

- **a)** $z=5+12i$
- **b)** $z=5+6i$
- **c)** $z=5-6i$
- **d)** $z=13+12i$
- **e)** $z=13-12i$

<details><summary>Ответ и решение</summary>

**a** — $z=5+12i$. $9+12i+4i^2=5+12i$.

</details>

### `vut-fsi-2014-z3-04` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 4, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Rovnice $3x^2+5x+20=0$ má kořeny

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 4, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 4, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 4, 1 b)

- **a)** dva reálné různé
- **b)** jeden reálný
- **c)** jeden komplexní
- **d)** dva komplexně sdružené
- **e)** nemá kořeny

<details><summary>Ответ и решение</summary>

**d** — dva komplexně sdružené. $D=25-240<0$.

</details>

### `vut-fsi-2014-z6-04` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 4, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Rovnice $3x^2+5x+30=0$ má kořeny

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 4, 1 b)

- **a)** dva reálné různé
- **b)** jeden reálný
- **c)** jeden komplexní
- **d)** dva komplexně sdružené
- **e)** nemá kořeny

<details><summary>Ответ и решение</summary>

**d** — dva komplexně sdružené. $D=25-360<0$.

</details>

### `vut-fsi-2014-z1-11` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 11, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

Komplexní číslo $\dfrac{1-i}{1+i}$ je rovno

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 11, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 11, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 11, 1 b)

- **a)** $1$
- **b)** $i$
- **c)** $-i$
- **d)** $0$
- **e)** $-1$

<details><summary>Ответ и решение</summary>

**c** — $-i$. $\frac{(1-i)^2}{2}=\frac{-2i}2$.

</details>

### `vut-fsi-2014-z3-11` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 11, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

Dělením komplexních čísel $\dfrac{1+i}i$ obdržíme

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 11, 1 b)

- **a)** $1-i$
- **b)** $1+i$
- **c)** $-1+i$
- **d)** $-1-i$
- **e)** $1$

<details><summary>Ответ и решение</summary>

**a** — $1-i$. $\frac{(1+i)(-i)}{1}=1-i$.

</details>

### `vut-fsi-2014-z5-11` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 11, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

Je-li $z=3-4i$ komplexní číslo, pak jeho absolutní hodnota $|z|=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 11, 1 b)

- **a)** $4i$
- **b)** $-4i$
- **c)** $3$
- **d)** $4$
- **e)** $5$

<details><summary>Ответ и решение</summary>

**e** — $5$. $\sqrt{9+16}$.

</details>

### `vut-fsi-2014-z6-11` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 11, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

Komplexní číslo $\dfrac{1+i}{1-i}$ je rovno

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 11, 1 b)

- **a)** $1$
- **b)** $i$
- **c)** $-i$
- **d)** $0$
- **e)** $-1$

<details><summary>Ответ и решение</summary>

**b** — $i$. $\frac{(1+i)^2}2=i$.

</details>

### `vut-fsi-2014-z7-11` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 11, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

$i^{2014}=$

- **a)** $1$
- **b)** $i$
- **c)** $-1$
- **d)** $-i$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**c** — $-1$. $2014=4\cdot503+2$.

</details>

### `vut-fsi-2014-z8-11` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 11, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

Číslo komplexně sdružené k $z=3-4i$ je $\overline z=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 11, 1 b)

- **a)** $-3-4i$
- **b)** $-3+4i$
- **c)** $3+4i$
- **d)** $-4+3i$
- **e)** $4+3i$

<details><summary>Ответ и решение</summary>

**c** — $3+4i$

</details>

### `vut-fsi-2014-z9-11` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 11, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

$i+i^3+i^5+i^7+i^9=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 11, 1 b)

- **a)** $i$
- **b)** $-i$
- **c)** $1$
- **d)** $-1$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**a** — $i$. $i-i+i-i+i$.

</details>

### `vut-fsi-2017-z2-11` — [FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 11, 1 bod)](https://vut.cz/pomocne2018/f69785/d158882/p149140)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

$i^{2017}=$

- **a)** $1$
- **b)** $i$
- **c)** $-1$
- **d)** $-i$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**b** — $i$. $2017=4\cdot504+1$.

</details>

### `vut-fsi-2014-z2-11` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 11, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

Komplexní číslo $\cos\pi+i\cdot\sin\pi$ je rovno

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 11, 1 b)

- **a)** $1$
- **b)** $i$
- **c)** $-1$
- **d)** $-i$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**c** — $-1$

</details>

### `fbmi-2021-34` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 34)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

Druhý, třetí a čtvrtý člen aritmetické posloupnosti jsou rovny $a_2=2{,}5$; $a_3=3{,}6$ a $a_4=4{,}7$. Určete její první a šestý člen:

- **a)** $a_1=1{,}4$; $a_6=5{,}8$
- **b)** $a_1=1{,}4$; $a_6=6{,}9$
- **c)** $a_1=0{,}3$; $a_6=6{,}9$
- **d)** Posloupnost není aritmetická.

<details><summary>Ответ и решение</summary>

**b** — $a_1=1{,}4$; $a_6=6{,}9$. $d=1{,}1$.

</details>

### `fbmi-2021-35` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 35)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

První člen aritmetické posloupnosti je roven $a_1=0{,}5$ a její čtvrtý člen je roven $a_4=2$. Určete součet jejích prvních deseti členů:

- **a)** $s_{10}=27{,}5$
- **b)** $s_{10}=25$
- **c)** $s_{10}=18{,}5$
- **d)** Posloupnost není aritmetická.

<details><summary>Ответ и решение</summary>

**a** — $s_{10}=27{,}5$. $d=0{,}5$, $a_{10}=5$, $s_{10}=5\cdot5{,}5$.

</details>

### `vut-fekt-2022-v1-10` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 10, 3 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

Vypočtěte druhý člen aritmetické posloupnosti $\{a_n\}_{n=1}^\infty$, pro kterou platí $a_3+a_5=14,a_4+a_6=24$.

- **a)** $a_2=-3$
- **b)** $a_2=-4$
- **c)** $a_2=-5$
- **d)** $a_2=-7$
- **e)** $a_2=-8$

<details><summary>Ответ и решение</summary>

**a** — $a_2=-3$. $2a_4=14$, $2a_5=24$: $a_4=7$, $d=5$, $a_2=7-10=-3$.

</details>

### `vut-fekt-2022-v2-10` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 10, 3 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

Vypočtěte čtvrtý člen aritmetické posloupnosti $\{a_n\}_{n=1}^\infty$, pro kterou platí $a_2+a_6=22,a_3+a_7=30$.

- **a)** $a_4=7$
- **b)** $a_4=8$
- **c)** $a_4=9$
- **d)** $a_4=10$
- **e)** $a_4=11$

<details><summary>Ответ и решение</summary>

**e** — $a_4=11$. $a_2+a_6=2a_4=22$.

</details>

### `vut-fekt-2024-v1-12` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 12, 5 bodů)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

Vypočtěte pátý člen aritmetické posloupnosti $\{a_n\}_{n=1}^\infty$, pro kterou platí $a_4+a_6=20,a_1+a_3=2$.

- **a)** $a_5=8$
- **b)** $a_5=10$
- **c)** $a_5=12$
- **d)** $a_5=14$
- **e)** $a_5=16$

<details><summary>Ответ и решение</summary>

**b** — $a_5=10$. $a_4+a_6=2a_5=20$.

</details>

### `fel-vzor01-8` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 8, 1 bod)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

Mezi čísla 7 a 22 jsou vložena čtyři čísla tak, že spolu s danými čísly tvoří prvních šest po sobě jdoucích členů aritmetické posloupnosti. Součet prvních osmi členů této posloupnosti je

- **a)** $140$
- **b)** $56$
- **c)** $29$
- **d)** $116$
- **e)** $150$

<details><summary>Ответ и решение</summary>

**a** — $140$. $d=3$, $a_8=28$, $s_8=\frac{7+28}{2}\cdot8=140$.

</details>

### `fjfi-v1-11` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 1 (příklad 11, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

V aritmetické posloupnosti je dáno $a_1=0$, diference $d=3$ a $s_n=165$. Určete počet členů součtu $n$.

- **a)** $n=10$
- **b)** $n=11$
- **c)** $n=12$
- **d)** $n=13$
- **e)** $n=14$

<details><summary>Ответ и решение</summary>

**b** — $n=11$. $s_n=\frac n2\bigl(0+3(n-1)\bigr)=165\Rightarrow n(n-1)=110$, $n=11$.

</details>

### `vut-fsi-2014-z1-14` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 14, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

Součet všech lichých čísel od 1 do 99 je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 14, 1 b)

- **a)** $1250$
- **b)** $3200$
- **c)** $5050$
- **d)** $2500$
- **e)** $1800$

<details><summary>Ответ и решение</summary>

**d** — $2500$. $50$ členů, $\frac{50(1+99)}2=2500$.

</details>

### `vut-fsi-2014-z2-14` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 14, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

Aritmetická posloupnost, která má $a_1=3;d=\dfrac12$; má jedenáctý člen roven

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 14, 1 b)

- **a)** $a_{11}=\dfrac{17}2$
- **b)** $a_{11}=19$
- **c)** $a_{11}=17$
- **d)** $a_{11}=8$
- **e)** $a_{11}=9$

<details><summary>Ответ и решение</summary>

**d** — $a_{11}=8$. $3+10\cdot\frac12$.

</details>

### `vut-fsi-2014-z3-14` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 14, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

Mezi čísla 15 a 27 je vloženo pět čísel tak, že těchto sedm čísel tvoří aritmetickou posloupnost. Prvním vloženým číslem je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 14, 1 b)

- **a)** $16$
- **b)** $17$
- **c)** $18$
- **d)** $20$
- **e)** $22$

<details><summary>Ответ и решение</summary>

**b** — $17$. $6d=12$, $d=2$.

</details>

### `vut-fsi-2014-z9-14` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 14, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

Součet všech sudých čísel od 2 do 100 je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 14, 1 b)

- **a)** $1250$
- **b)** $2550$
- **c)** $5050$
- **d)** $2500$
- **e)** $1800$

<details><summary>Ответ и решение</summary>

**b** — $2550$. $\frac{50(2+100)}2$.

</details>

### `vscht-03` — [VŠCHT, ukázka vzorového testu z matematiky (bakalářské studium) (úloha 3, 1 bod)](https://studuj.vscht.cz/wp-content/uploads/2021/02/BC-ekonomove-matematika-prijimaci-zkouska-vzorovy-test.pdf)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

V aritmetické posloupnosti je součet třetího a čtvrtého členu roven 16 a součet pátého a šestého členu je roven 24. První člen je roven

- **a)** $2$
- **b)** $3$
- **c)** $4$
- **d)** $6$

<details><summary>Ответ и решение</summary>

**b** — $3$. $2a_1+5d=16$, $2a_1+9d=24$: $d=2$, $a_1=3$.

</details>

### `fbmi-2021-36` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 36)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 20. Geometrická posloupnost · *Текст:* текст оригинала (по курсу)

První člen geometrické posloupnosti je roven $a_1=1{,}5$ a její třetí člen je roven $a_3=6$. Určete její kvocient:

- **a)** $q=1{,}5$
- **b)** $q=\pm\sqrt[3]{4}$
- **c)** $q=\pm2$
- **d)** Posloupnost není geometrická.

<details><summary>Ответ и решение</summary>

**c** — $q=\pm2$. $q^2=4$.

</details>

### `fbmi-2021-37` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 37)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 20. Geometrická posloupnost · *Текст:* текст оригинала (по курсу)

První tři členy geometrické posloupnosti jsou rovny $a_1=a_2=5$ a $a_3=10$. Určete její kvocient:

- **a)** $q=1$
- **b)** $q=2$
- **c)** $q=5$
- **d)** Posloupnost není geometrická.

<details><summary>Ответ и решение</summary>

**d** — Posloupnost není geometrická.. $\frac{a_2}{a_1}=1\ne\frac{a_3}{a_2}=2$.

</details>

### `vut-fekt-2023-v1-11` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 11, 5 bodů)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 20. Geometrická posloupnost · *Текст:* текст оригинала (по курсу)

Geometrická posloupnost má první člen $a_1=3$, druhý člen je záporný a součet prvních tří členů je roven 21. Jaký je kvocient této posloupnosti?

- **a)** $3$
- **b)** $2$
- **c)** $0$
- **d)** $-2$
- **e)** $-3$

<details><summary>Ответ и решение</summary>

**e** — $-3$. $3(1+q+q^2)=21\Rightarrow q^2+q-6=0$, $q=2$ nebo $q=-3$; $a_2<0$ dává $q=-3$.

</details>

### `vut-fekt-2023-v2-11` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 11, 5 bodů)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 20. Geometrická posloupnost · *Текст:* текст оригинала (по курсу)

Geometrická posloupnost má první člen $a_1=2$, druhý člen je kladný a součet prvních tří členů je roven 26. Jaký je kvocient této posloupnosti?

- **a)** $-4$
- **b)** $-3$
- **c)** $0$
- **d)** $3$
- **e)** $4$

<details><summary>Ответ и решение</summary>

**d** — $3$. $2(1+q+q^2)=26\Rightarrow q^2+q-12=0$, $q=3$ nebo $q=-4$; $a_2>0$ dává $q=3$.

</details>

### `vut-fsi-2014-z4-14` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 14, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 20. Geometrická posloupnost · *Текст:* текст оригинала (по курсу)

$n$-tý člen geometrické posloupnosti $a_1=4;q=3$ je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 14, 1 b)

- **a)** $a_n=\left(\dfrac43\right)^n$
- **b)** $a_n=4\cdot3^{n-1}$
- **c)** $a_n=3\cdot4^{n-1}$
- **d)** $a_n=3\cdot4^{n+1}$
- **e)** $a_n=3\cdot4^n$

<details><summary>Ответ и решение</summary>

**b** — $a_n=4\cdot3^{n-1}$

</details>

### `vut-fsi-2014-z6-14` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 14, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 20. Geometrická posloupnost · *Текст:* текст оригинала (по курсу)

Geometrická posloupnost, která má $a_1=2$ a kvocient $q=-1$ má dvacátý člen

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 14, 1 b)

- **a)** $12$
- **b)** $-2$
- **c)** $-24$
- **d)** $24$
- **e)** $2$

<details><summary>Ответ и решение</summary>

**b** — $-2$. $2\cdot(-1)^{19}$.

</details>

### `vut-fsi-2014-z8-14` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 14, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 20. Geometrická posloupnost · *Текст:* текст оригинала (по курсу)

$n$-tý člen geometrické posloupnosti $a_1=3;q=4$ je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 14, 1 b)

- **a)** $a_n=\left(\dfrac43\right)^n$
- **b)** $a_n=4\cdot3^{n-1}$
- **c)** $a_n=3\cdot4^{n-1}$
- **d)** $a_n=3\cdot4^{n+1}$
- **e)** $a_n=3\cdot4^n$

<details><summary>Ответ и решение</summary>

**c** — $a_n=3\cdot4^{n-1}$

</details>

### `fit-2026-11` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2026 (příklad 11, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 21. Kombinatorika. Faktoriál · *Текст:* текст оригинала (по курсу)

Kolika způsoby je možné vybrat čtyřciferné číslo tak, aby bylo dělitelné pěti?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2025, příklad 15 (7 b)

- **a)** $1296$
- **b)** $240$
- **c)** $2000$
- **d)** Žádná z ostatních možností není správná.
- **e)** $1800$

<details><summary>Ответ и решение</summary>

**e** — $1800$. Každé páté z $9000$ čtyřciferných čísel.

</details>

### `vut-fsi-2014-z4-10` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 10, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 21. Kombinatorika. Faktoriál · *Текст:* текст оригинала (по курсу)

$\dfrac{2!+4!}{6!}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 10, 1 b)

- **a)** $1$
- **b)** $3$
- **c)** $\dfrac13$
- **d)** $\dfrac{13}{360}$
- **e)** $\dfrac{360}{13}$

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{13}{360}$. $\frac{26}{720}$.

</details>

### `vut-fekt-2023-v1-12` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 12, 5 bodů)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Ve třídě je 18 chlapců a 4 dívky. Kolika způsoby z nich můžeme vybrat trojici složenou z jednoho chlapce a dvou dívek? (Na pořadí výběru nezáleží.)

- **a)** $24$
- **b)** $108$
- **c)** $144$
- **d)** $216$
- **e)** $288$

<details><summary>Ответ и решение</summary>

**b** — $108$. $18\cdot\binom42=108$.

</details>

### `vut-fekt-2023-v2-12` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 12, 5 bodů)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 22. Variace. Permutace. Kombinace, 23. Kombinační číslo. Binomická věta · *Текст:* текст оригинала (по курсу)

Ve třídě je 16 chlapců a 8 dívek. Kolika způsoby z nich můžeme vybrat trojici složenou z jednoho chlapce a dvou dívek? (Na pořadí výběru nezáleží.)

- **a)** $16\cdot8^2$
- **b)** $16\cdot8\cdot7$
- **c)** $\binom{16}1+\binom82$
- **d)** $16\cdot\binom82$
- **e)** $\binom{24}3$

<details><summary>Ответ и решение</summary>

**d** — $16\cdot\binom82$. Chlapce $16$ způsoby, dvojici dívek $\binom82$ způsoby.

</details>

### `fel-vzor01-morse` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 15, 2 body)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 2, úloha 21

Kolik znaků Morseovy abecedy lze vytvořit, sestavují-li se tečky a čárky ve skupiny po jedné až pěti?

- **a)** $62$
- **b)** $64$
- **c)** $32$
- **d)** $66$
- **e)** $26$

<details><summary>Ответ и решение</summary>

**a** — $62$. $2+4+8+16+32=62$.

</details>

### `vut-fsi-2014-z2-10` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 10, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 22. Variace. Permutace. Kombinace, 21. Kombinatorika. Faktoriál · *Текст:* текст оригинала (по курсу)

Kolika způsoby lze rozmíchat balíček 32 karet?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 10, 1 b)

- **a)** $32^2$
- **b)** $2^{32}$
- **c)** $32!$
- **d)** $16!$
- **e)** nelze určit

<details><summary>Ответ и решение</summary>

**c** — $32!$. Permutace 32 prvků.

</details>

### `vut-fsi-2014-z3-10` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 10, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Kolik pěticiferných čísel sestavíme z cifer 1, 2, 3, 4, 5, nemá-li se žádná opakovat?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 10, 1 b)

- **a)** $50$
- **b)** $100$
- **c)** $120$
- **d)** $500$
- **e)** $1\,200$

<details><summary>Ответ и решение</summary>

**c** — $120$. $5!=120$.

</details>

### `vut-fsi-2014-z5-10` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 10, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Kolika způsoby lze rozesadit 22 studentů na 22 míst v učebně?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 10, 1 b)

- **a)** $2^{22}$
- **b)** $22^2$
- **c)** $21!$
- **d)** $22!$
- **e)** nelze určit

<details><summary>Ответ и решение</summary>

**d** — $22!$

</details>

### `vut-fsi-2014-z10-10` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 10, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Kolik různých trojúhelníků je možné sestrojit, vybíráme-li jejich vrcholy z pěti různých bodů, z nichž žádné tři neleží na jedné přímce?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 10, 1 b)

- **a)** $5$
- **b)** $6$
- **c)** $8$
- **d)** $10$
- **e)** $12$

<details><summary>Ответ и решение</summary>

**d** — $10$. $\binom53$.

</details>

### `vut-fsi-2014-z10-15` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 15, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Deset šachistů má hrát každý s každým jednu partii. Kolik partií bude na turnaji celkem sehráno?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 15, 1 b)

- **a)** $10$
- **b)** $45$
- **c)** $90$
- **d)** $99$
- **e)** $100$

<details><summary>Ответ и решение</summary>

**b** — $45$. $\binom{10}2$.

</details>

### `vut-fsi-2014-z1-10` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 10, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* текст оригинала (по курсу)

$\dbinom73-\dbinom63=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 10, 1 b)

- **a)** $\dbinom60$
- **b)** $\dbinom10$
- **c)** $\dbinom62$
- **d)** $1$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**c** — $\dbinom62$. $35-20=15=\binom62$.

</details>

### `vut-fsi-2014-z8-10` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 10, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* текст оригинала (по курсу)

$\dbinom{10}8+\dbinom{10}9=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 10, 1 b)

- **a)** $\dbinom{11}2$
- **b)** $\dbinom{11}8$
- **c)** $\dbinom{20}{17}$
- **d)** $\dbinom{10}{17}$
- **e)** $110$

<details><summary>Ответ и решение</summary>

**a** — $\dbinom{11}2$. $\binom{11}9=\binom{11}2$.

</details>

### `vut-fsi-2014-z9-10` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 10, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* текст оригинала (по курсу)

$\dbinom{15}{14}\cdot\dbinom{14}{14}\cdot\dbinom{14}{13}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 10, 1 b)

- **a)** $2730$
- **b)** $0$
- **c)** $200$
- **d)** $1650$
- **e)** $210$

<details><summary>Ответ и решение</summary>

**e** — $210$. $15\cdot1\cdot14$.

</details>

### `fit-2014-1-12` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 12, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 24. Pravděpodobnost · *Текст:* текст оригинала (по курсу)

Jaká je pravděpodobnost, že při třech hodech stejnou mincí padne alespoň dvakrát orel?

- **a)** $\frac12$
- **b)** $\frac14$
- **c)** $\frac18$
- **d)** $\frac38$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**a** — $\frac12$. $\frac{3+1}{8}=\frac12$.

</details>

### `fit-2014-2-12` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 12, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 24. Pravděpodobnost · *Текст:* текст оригинала (по курсу)

Jaká je pravděpodobnost, že při třech hodech stejnou mincí padne alespoň jednou orel?

- **a)** $\frac12$
- **b)** $\frac34$
- **c)** $\frac78$
- **d)** $\frac38$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — $\frac78$. $1-\frac18=\frac78$.

</details>

### `fit-2014-3-12` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 12, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 24. Pravděpodobnost · *Текст:* текст оригинала (по курсу)

Jaká je pravděpodobnost, že při třech hodech stejnou mincí padne nejvýše dvakrát orel?

- **a)** $\frac18$
- **b)** $\frac78$
- **c)** $\frac14$
- **d)** $\frac12$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — $\frac78$. $1-\frac18=\frac78$.

</details>

### `fit-2014-4-12` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 12, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 24. Pravděpodobnost · *Текст:* текст оригинала (по курсу)

Jaká je pravděpodobnost, že při třech hodech stejnou mincí padne nejvýše jednou orel?

- **a)** $\frac12$
- **b)** $\frac14$
- **c)** $\frac18$
- **d)** $\frac38$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**a** — $\frac12$. $\frac18+\frac38=\frac12$.

</details>

### `fit-2021-16` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2022 (příklad 16, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 24. Pravděpodobnost · *Текст:* текст оригинала (по курсу)

Jaká je pravděpodobnost, že při dvou hodech stejnou šestibokou kostkou bude součet obou hodů 9?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2018, příklad 16 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2021, příklad 14 (7 b)

- **a)** $\frac{5}{36}$
- **b)** $\frac19$
- **c)** $\frac{1}{18}$
- **d)** Žádná z ostatních možností není správná.
- **e)** $\frac{1}{12}$

<details><summary>Ответ и решение</summary>

**b** — $\frac19$. Příznivé $(3,6),(4,5),(5,4),(6,3)$: $\frac{4}{36}$.

</details>

### `fit-2022-14` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 14, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 24. Pravděpodobnost · *Текст:* текст оригинала (по курсу)

Jaká je pravděpodobnost, že při dvou hodech stejnou šestibokou kostkou bude součet obou hodů 10?

- **a)** Žádná z ostatních možností není správná.
- **b)** $\frac{1}{12}$
- **c)** $\frac{5}{36}$
- **d)** $\frac15$
- **e)** $\frac16$

<details><summary>Ответ и решение</summary>

**b** — $\frac{1}{12}$. Příznivé $(4,6),(5,5),(6,4)$: $\frac{3}{36}$.

</details>

### `vut-fekt-2022-v1-11` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 11, 5 bodů)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 26. Parametrická rovnice přímky, 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу)

Který bod leží na přímce dané body $A=[2,-1],B=[1,3]$?

- **a)** $[0,5]$
- **b)** $[0,7]$
- **c)** $[3,0]$
- **d)** $[9,0]$
- **e)** žádný z předcházejících bodů

<details><summary>Ответ и решение</summary>

**b** — $[0,7]$. $x=2-t$, $y=-1+4t$; pro $t=2$ je bod $[0,7]$.

</details>

### `vut-fekt-2022-v2-11` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 11, 5 bodů)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 26. Parametrická rovnice přímky, 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу)

Který bod leží na přímce dané body $A=[-1,2],B=[3,1]$?

- **a)** $[0,6]$
- **b)** $[0,2]$
- **c)** $[7,0]$
- **d)** $[5,0]$
- **e)** žádný z předcházejících bodů

<details><summary>Ответ и решение</summary>

**c** — $[7,0]$. $x=-1+4t$, $y=2-t$; pro $t=2$ je bod $[7,0]$.

</details>

### `vsb-fbi-2013-pz3-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 3 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Je dána přímka $p$ body $A=[1,-1],B=[3,2]$. Určete obecnou rovnici přímky $q$, která prochází bodem $C=[1,2]$ a je kolmá na přímku $p$.

<details><summary>Ответ и решение</summary>

$q\colon2x+3y-8=0$. Směr $p$ je $(2,3)$ — to je normála $q$; dosazením $C$.

</details>

### `vsb-fbi-2013-pz4-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 4 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Nalezněte obecnou rovnici přímky $r$ procházející středem úsečky $AB,\ A=[-1,-2],\ B=[2,1]$ rovnoběžně s přímkou $p\colon-x+4y-10=0.$

<details><summary>Ответ и решение</summary>

$r\colon2x-8y-5=0$. Střed $S=\left[\frac12,-\frac12\right]$; $-x+4y+c=0$, z bodu $S$: $c=\frac52$.

</details>

### `vsb-fbi-2013-pz11-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 11 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Zjistěte výpočtem, zda na přímce $p$ určené body $A=[-4,4]$ a $B=[2,1]$ leží bod $C=[1,2]$.

<details><summary>Ответ и решение</summary>

neleží ($p\colon x+2y-4=0$). Pro $C$: $1+4-4=1\ne0$.

</details>

### `vsb-fbi-2015-pz23-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 23 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Přímka $p$ je dána body $A=[1,1],B=[-4,-2]$. Určete obecnou rovnici přímky $q$, která je kolmá k přímce $p$ a prochází bodem $C=[1,-2]$.

<details><summary>Ответ и решение</summary>

$q\colon5x+3y+1=0$. Směr $p$ je $(5,3)$ — to je normála $q$.

</details>

### `vsb-fbi-2015-pz24-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 24 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Nalezněte obecnou rovnici přímky $r$, která prochází středem úsečky $AB,A=[3,0],B=[1,-4]$, a je rovnoběžná s přímkou $p\colon x-4y-1=0$.

<details><summary>Ответ и решение</summary>

$r\colon x-4y-10=0$. Střed $S=[2,-2]$; $x-4y+c=0$, z bodu $S$: $c=-10$.

</details>

### `vsb-fbi-2015-pz25-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 25 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Přímka $p$ je dána body $A=[-3,1],\ B=[2,2]$. Určete obecnou rovnici přímky $q$, která je kolmá k přímce $p$ a prochází bodem $C=[-1,-1]$.

<details><summary>Ответ и решение</summary>

$q\colon5x+y+6=0$. Směr $p$ je $(5,1)$ — to je normála $q$.

</details>

### `vsb-fbi-2015-pz32-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 32 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Určete obecnou rovnici osy úsečky $AB$, tj. přímky kolmé k přímce dané body $A,B$, procházející středem úsečky $AB$. $A=[1,-6],\ B=[3,-2]$.

<details><summary>Ответ и решение</summary>

$x+2y+6=0$. Střed $S=[2,-4]$, normála osy je $\overrightarrow{AB}=(2,4)$.

</details>

### `vsb-fbi-2017-pz1-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 1 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Určete obecnou rovnici osy úsečky $AB$, tj. přímky kolmé k přímce dané body $A,B$, procházející středem úsečky $AB$. $A=[-1,2],B=[2,1]$.

<details><summary>Ответ и решение</summary>

$3x-y=0$. Střed $S=\left[\frac12,\frac32\right]$, normála osy je $\overrightarrow{AB}=(3,-1)$.

</details>

### `vsb-fbi-2017-pz2-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 2 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Přímka $p$ je dána body $A=[-2,2],B=[2,1]$. Nalezněte obecnou rovnici přímky $q$ rovnoběžné s přímkou $p$, procházející bodem $C=[0,0]$.

<details><summary>Ответ и решение</summary>

$q\colon x+4y=0$. Směr $p$ je $(4,-1)$, normála $(1,4)$.

</details>

### `vsb-fbi-2017-pz6-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 6 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Zjistěte výpočtem, zda na přímce $p$ určené body $A=[3,-2]$ a $B=[-4,1]$ leží bod $C=[-2,0]$.

<details><summary>Ответ и решение</summary>

neleží ($p\colon3x+7y+5=0$). Pro $C$: $-6+0+5=-1\ne0$.

</details>

### `vsb-fbi-2017-pz15-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 15 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Zjistěte výpočtem, zda na přímce $p$ určené body $A=[1,-2]$ a $B=[-2,0]$ leží bod $C=\left[0,-\dfrac43\right]$.

<details><summary>Ответ и решение</summary>

leží ($p\colon2x+3y+4=0$). Pro $C$: $0-4+4=0$.

</details>

### `vut-fekt-2023-v1-07` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 7, 3 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу)

Rovnice přímky procházející body $A=[2,3]$ a $B=[-1,4]$ je

- **a)** $-x+3y-7=0$
- **b)** $x+3y-11=0$
- **c)** $x-3y+13=0$
- **d)** $3x-y-3=0$
- **e)** $3x+y-9=0$

<details><summary>Ответ и решение</summary>

**b** — $x+3y-11=0$. Dosazením obou bodů: $2+9-11=0$, $-1+12-11=0$.

</details>

### `vut-fekt-2023-v2-07` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 7, 3 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу)

Rovnice přímky procházející body $A=[1,3]$ a $B=[-1,4]$ je

- **a)** $x+2y-7=0$
- **b)** $x+2y+7=0$
- **c)** $-x+2y-5=0$
- **d)** $-2x+y-1=0$
- **e)** $2x-y+6=0$

<details><summary>Ответ и решение</summary>

**a** — $x+2y-7=0$. Dosazením obou bodů: $1+6-7=0$, $-1+8-7=0$.

</details>

### `vut-fsi-2014-z8-06` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 6, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу)

Rovnice přímky procházející bodem $A=[-2;3]$ a počátkem souřadné soustavy je

- **a)** $x+y-1=0$
- **b)** $3x+2y=0$
- **c)** $2x+3y=0$
- **d)** $3x-2y=0$
- **e)** $x+2y-3=0$

<details><summary>Ответ и решение</summary>

**b** — $3x+2y=0$. Směr $(-2,3)$, normála $(3,2)$.

</details>

### `vscht-07` — [VŠCHT, ukázka vzorového testu z matematiky (bakalářské studium) (úloha 7, 2 body)](https://studuj.vscht.cz/wp-content/uploads/2021/02/BC-ekonomove-matematika-prijimaci-zkouska-vzorovy-test.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Rovnici přímky v rovině, která prochází bodem $A=[0,2]$ a je kolmá na přímku $p\colon2x-y+1=0$ lze zapsat ve tvaru

- **a)** $x-2y-4=0$
- **b)** $2x+y-2=0$
- **c)** $2x-y+4=0$
- **d)** $x+2y-4=0$

<details><summary>Ответ и решение</summary>

**d** — $x+2y-4=0$. Normála $p$ $(2,-1)$ je směrem hledané přímky, její normála je $(1,2)$: $x+2y+c=0$, z bodu $A$: $c=-4$.

</details>

### `vsb-fbi-2017-pz14-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 14 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 28. Vzájemná poloha přímek, 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу)

Určete číslo $a$ tak, aby přímka $p\colon ax-y-8=0$ procházela průsečíkem přímek $r\colon-x+5y-2=0$ a $s\colon-2x-y+7=0$.

<details><summary>Ответ и решение</summary>

$a=3$. Průsečík $r$ a $s$ je $[3,1]$; $3a-1-8=0$.

</details>

### `vut-fekt-2024-v1-07` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 7, 3 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 28. Vzájemná poloha přímek, 26. Parametrická rovnice přímky, 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу)

Určete vzájemnou polohu přímek $p$ a $q$, kde $p\colon2x+3y-7=0$, $q\colon x=2+3t,y=4-2t,t\in\mathbf{R}$.

- **a)** kolmé
- **b)** různoběžné, ne kolmé
- **c)** mimoběžné
- **d)** rovnoběžné různé
- **e)** totožné

<details><summary>Ответ и решение</summary>

**d** — rovnoběžné různé. Směr $q$ je $(3,-2)$, normála $p$ je $(2,3)$, jejich součin je $0$ — přímky jsou rovnoběžné. Bod $[2,4]\in q$ na $p$ neleží ($4+12-7\ne0$).

</details>

### `vut-fekt-2024-v2-07` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 7, 3 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 28. Vzájemná poloha přímek, 26. Parametrická rovnice přímky, 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу)

Určete vzájemnou polohu přímek $p$ a $q$, kde $p\colon2x-3y+5=0$, $q\colon x=-1+3t,y=1+2t,t\in\mathbf{R}$.

- **a)** kolmé
- **b)** různoběžné, ne kolmé
- **c)** mimoběžné
- **d)** rovnoběžné různé
- **e)** totožné

<details><summary>Ответ и решение</summary>

**e** — totožné. Směr $q$ je $(3,2)$, normála $p$ je $(2,-3)$, součin $0$; bod $[-1,1]\in q$ leží i na $p$: $-2-3+5=0$.

</details>

### `fit-2015-19` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 19, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 28. Vzájemná poloha přímek, 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 9, D2 (pool přijímaček)

Určete hodnoty parametrů $a$, $b$ tak, aby přímky $p:ax+4y+1=0$ a $q:3x+2y-b=0$ byly totožné.

- **a)** $a=6$, $b=-1$
- **b)** Žádná z ostatních možností není správná.
- **c)** $a=6$, $b\in\mathbb{R}$
- **d)** $a=-\frac83$, $b=1$
- **e)** $a=6$, $b=-\frac12$

<details><summary>Ответ и решение</summary>

**e** — $a=6$, $b=-\frac12$. $\frac a3=\frac42=\frac{1}{-b}$.

</details>

### `fit-2016-19` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 19, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 9, D1 (pool přijímaček)

Určete hodnoty parametrů $a$, $b$ tak, aby přímky $p:ax+4y+1=0$ a $q:3x+2y-b=0$ byly navzájem kolmé.

- **a)** Žádná z ostatních možností není správná.
- **b)** $a=-\frac83$, $b\in\mathbb{R}$
- **c)** $a=6$, $b=-\frac12$
- **d)** $a=-\frac83$, $b=1$
- **e)** $a=6$, $b\in\mathbb{R}$

<details><summary>Ответ и решение</summary>

**b** — $a=-\frac83$, $b\in\mathbb{R}$. Normálové vektory kolmé: $3a+8=0$.

</details>

### `fit-2024-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2024 (příklad 13, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2024.pdf)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 9, úloha 19

Určete hodnoty parametrů $a$, $b$ tak, aby přímky $p:ax+4y+1=0$ a $q:3x+2y-b=0$ měly právě jeden společný bod.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2025, příklad 9 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2027, příklad 13 (7 b)

- **a)** $a=-\frac83$, $b\ne\frac12$
- **b)** $a\ne-\frac83$, $b\in\mathbb{R}$
- **c)** Žádná z ostatních možností není správná.
- **d)** $a\ne6$, $b\in\mathbb{R}$
- **e)** $a\ne6$, $b\ne-1$

<details><summary>Ответ и решение</summary>

**d** — $a\ne6$, $b\in\mathbb{R}$. Přímky nesmí být rovnoběžné: $\frac a3\ne\frac42$.

</details>

### `vut-fsi-2014-z6-05` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 5, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Přímky o rovnicích $2x-3y+13=0;\ 3x+2y-12=0$ jsou

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 5, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 5, 1 b)

- **a)** rovnoběžné různé
- **b)** rovnoběžné
- **c)** kolmé
- **d)** totožné
- **e)** mimoběžné

<details><summary>Ответ и решение</summary>

**c** — kolmé. Normály $(2,-3)\cdot(3,2)=0$.

</details>

### `vut-fsi-2014-z5-06` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 6, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 28. Vzájemná poloha přímek, 26. Parametrická rovnice přímky, 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу)

Přímky v rovině o rovnicích $p:2x-5y+13=0$ a $q:x=1+5t,y=3+2t,t\in\mathbf R$ jsou

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 5, 1 b)

- **a)** rovnoběžné různé
- **b)** splývající
- **c)** kolmé
- **d)** mimoběžné
- **e)** nelze určit

<details><summary>Ответ и решение</summary>

**b** — splývající. Směr $q$ $(5,2)$ je kolmý k normále $p$ a bod $[1,3]$ leží na $p$.

</details>

### `vut-fsi-2014-z7-06` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 6, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Přímky o rovnicích $p:2x-5y+13=0$; $q:2x+5y+13=0$ mají společné právě:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 5, 1 b)

- **a)** dva body
- **b)** jeden bod
- **c)** žádný bod
- **d)** všechny body
- **e)** nelze rozhodnout

<details><summary>Ответ и решение</summary>

**b** — jeden bod. Normály nejsou rovnoběžné.

</details>

### `vscht-02` — [VŠCHT, ukázka vzorového testu z matematiky (bakalářské studium) (úloha 2, 1 bod)](https://studuj.vscht.cz/wp-content/uploads/2021/02/BC-ekonomove-matematika-prijimaci-zkouska-vzorovy-test.pdf)

*Темы:* 28. Vzájemná poloha přímek, 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу)

Přímky $p\colon x-2=0$ a $q\colon y-2=0$ se protínají v bodě

- **a)** $[-2,-2]$
- **b)** $[0,0]$
- **c)** $[2,2]$
- **d)** $[2,-2]$

<details><summary>Ответ и решение</summary>

**c** — $[2,2]$

</details>

### `vut-fsi-2014-z4-05` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 5, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 29. Směrnicový a úsekový tvar rovnice přímky · *Текст:* текст оригинала (по курсу)

Přímka, která na ose $x$ vytíná úsek $p=2$ a na ose $y$ úsek $q=3$ má rovnici

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 5, 1 b)

- **a)** $x=2$
- **b)** $y=3$
- **c)** $y=2x+3$
- **d)** $3x+2y-6=0$
- **e)** $2x+3y=1$

<details><summary>Ответ и решение</summary>

**d** — $3x+2y-6=0$. $\frac x2+\frac y3=1$.

</details>

### `vut-fsi-2014-z1-06` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 6, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 29. Směrnicový a úsekový tvar rovnice přímky · *Текст:* текст оригинала (по курсу)

Rovnice přímky, která svírá s kladným směrem osy $x$ úhel $45^\circ$ a na ose $y$ vytíná úsek $-3$, je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 5, 1 b)

- **a)** $x-y-3=0$
- **b)** $x-y+3=0$
- **c)** $x+y+3=0$
- **d)** $y=-3x$
- **e)** $x-3y=0$

<details><summary>Ответ и решение</summary>

**a** — $x-y-3=0$. $y=x-3$.

</details>

### `vut-fsi-2014-z2-06` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 6, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 29. Směrnicový a úsekový tvar rovnice přímky · *Текст:* текст оригинала (по курсу)

Přímka o rovnici $bx+cy-m=0$ má směrnici

- **a)** $-\dfrac cb$
- **b)** $-\dfrac bc$
- **c)** $-\dfrac mc$
- **d)** $\dfrac mc$
- **e)** $\dfrac mb$

<details><summary>Ответ и решение</summary>

**b** — $-\dfrac bc$. $y=-\frac bcx+\frac mc$.

</details>

### `vut-fsi-2017-z4-05` — [FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 5, 1 bod)](https://vut.cz/pomocne2018/f69785/d158882/p149140)

*Темы:* 29. Směrnicový a úsekový tvar rovnice přímky · *Текст:* текст оригинала (по курсу)

Přímka o rovnici $bx+cy-m=0$; $b;c;m\neq0$; má směrnici

- **a)** $-\dfrac cb$
- **b)** $-\dfrac bc$
- **c)** $-\dfrac mc$
- **d)** $\dfrac mc$
- **e)** $\dfrac mb$

<details><summary>Ответ и решение</summary>

**b** — $-\dfrac bc$. $y=-\frac bcx+\frac mc$.

</details>

### `vut-fekt-2022-v1-02` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 2, 2 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Rovnice kružnice se středem v bodě $[2,-3]$ a poloměrem $r=3$ je

- **a)** $(x-2)^2+(y+3)^2=9$
- **b)** $(x-2)^2+(y+3)^2=3$
- **c)** $(x+2)^2+(y-3)^2=9$
- **d)** $(x+2)^2+(y-3)^2=3$
- **e)** žádná z předchozích možností není správná

<details><summary>Ответ и решение</summary>

**a** — $(x-2)^2+(y+3)^2=9$

</details>

### `vut-fekt-2022-v2-02` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 2, 2 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Rovnice kružnice se středem v bodě $[-1,2]$ a poloměrem $r=2$ je

- **a)** $(x-1)^2+(y+2)^2=2$
- **b)** $(x-1)^2+(y+2)^2=4$
- **c)** $(x+1)^2+(y-2)^2=2$
- **d)** $(x+1)^2+(y-2)^2=4$
- **e)** žádná z předchozích možností není správná

<details><summary>Ответ и решение</summary>

**d** — $(x+1)^2+(y-2)^2=4$

</details>

### `vut-fekt-2024-v1-03` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 3, 2 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Najděte všechny průsečíky kružnice se středem $S[3,0]$ a poloměrem $r=5$ s osou $x$.

- **a)** $[-4,0],[4,0]$
- **b)** $[0,-4],[0,4]$
- **c)** $[-2,0],[8,0]$
- **d)** $[0,-2],[0,8]$
- **e)** průsečíky neexistují

<details><summary>Ответ и решение</summary>

**c** — $[-2,0],[8,0]$. Na ose $x$ je $y=0$: $|x-3|=5$.

</details>

### `vut-fekt-2024-v2-03` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 3, 2 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Najděte všechny průsečíky kružnice se středem $S[3,0]$ a poloměrem $r=5$ s osou $y$.

- **a)** $[-4,0],[4,0]$
- **b)** $[0,-4],[0,4]$
- **c)** $[-2,0],[8,0]$
- **d)** $[0,-2],[0,8]$
- **e)** průsečíky neexistují

<details><summary>Ответ и решение</summary>

**b** — $[0,-4],[0,4]$. Na ose $y$ je $x=0$: $9+y^2=25$, $y=\pm4$.

</details>

### `fit-2014-1-02` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 2, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Poloměr kružnice zadané rovnicí $x^2+y^2-16x+12y+51=0$ je

- **a)** Roven $8$.
- **b)** Neexistuje, nejedná se o rovnici kružnice.
- **c)** Jeho druhá mocnina je $151$.
- **d)** Roven $7$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Roven $7$.. $(x-8)^2+(y+6)^2=49$.

</details>

### `fit-2014-2-02` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 2, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Poloměr kružnice zadané rovnicí $x^2+y^2+12x-16y+51=0$ je

- **a)** Roven $8$.
- **b)** Neexistuje, nejedná se o rovnici kružnice.
- **c)** Roven $7$.
- **d)** Jeho druhá mocnina je $151$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Roven $7$.. $(x+6)^2+(y-8)^2=49$.

</details>

### `fit-2014-3-02` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 2, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Poloměr kružnice zadané rovnicí $x^2+y^2-14x-16y+49=0$ je

- **a)** Roven $8$.
- **b)** Neexistuje, nejedná se o rovnici kružnice.
- **c)** Jeho druhá mocnina je $162$.
- **d)** Roven $7$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**a** — Roven $8$.. $(x-7)^2+(y-8)^2=64$.

</details>

### `fit-2014-4-02` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 2, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Poloměr kružnice zadané rovnicí $x^2+y^2+10x-24y+69=0$ je

- **a)** Roven $8$.
- **b)** Neexistuje, nejedná se o rovnici kružnice.
- **c)** Jeho druhá mocnina je $238$.
- **d)** Roven $7$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. $(x+5)^2+(y-12)^2=100$, poloměr $10$.

</details>

### `fit-2027-16` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2027 (příklad 16, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2027-s-resenim.pdf)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Poloměr kružnice zadané rovnicí $2x^2+2y^2+16x-12y+20=0$ splňuje:

- **a)** Neexistuje, nejedná se o rovnici kružnice.
- **b)** Jeho druhá mocnina je rovna $35$.
- **c)** Žádná z ostatních možností není správná.
- **d)** Jeho druhá mocnina je $15$.
- **e)** Roven $10$.

<details><summary>Ответ и решение</summary>

**d** — Jeho druhá mocnina je $15$.. $(x+4)^2+(y-3)^2=15$.

</details>

### `vut-fsi-2014-z1-05` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 5, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 30. Kuželosečky. Kružnice, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Přímka $p:2x-5y=0$ a křivka $y^2+x^2=1$ mají společné právě:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 5, 1 b)

- **a)** tři body
- **b)** dva body
- **c)** jeden bod
- **d)** žádný bod
- **e)** všechny body

<details><summary>Ответ и решение</summary>

**b** — dva body. Přímka prochází středem kružnice.

</details>

### `vut-fsi-2014-z3-05` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 5, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 30. Kuželosečky. Kružnice, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Přímka $p:5x-2y=0$ a křivka $y^2+x^2=1$ mají společné právě:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 5, 1 b)

- **a)** tři body
- **b)** dva body
- **c)** jeden bod
- **d)** žádný bod
- **e)** všechny body

<details><summary>Ответ и решение</summary>

**b** — dva body. Přímka prochází středem kružnice.

</details>

### `vut-fsi-2014-z3-06` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 6, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Rovnice $x^2+y^2+2x=3$ je rovnicí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 6, 1 b)

- **a)** přímky
- **b)** dvojice přímek
- **c)** paraboly
- **d)** kružnice
- **e)** hyperboly

<details><summary>Ответ и решение</summary>

**d** — kružnice. $(x+1)^2+y^2=4$.

</details>

### `vut-fsi-2014-z10-06` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 6, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Rovnice $x^2+y^2-2x=3$ je rovnicí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 6, 1 b)

- **a)** přímky
- **b)** dvojice přímek
- **c)** paraboly
- **d)** kružnice
- **e)** hyperboly

<details><summary>Ответ и решение</summary>

**d** — kružnice. $(x-1)^2+y^2=4$.

</details>

### `vut-fsi-2014-z10-05` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 5, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 32. Hyperbola · *Текст:* текст оригинала (по курсу)

Rovnice $y^2-x^2-1=0$ je rovnicí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 6, 1 b)

- **a)** hyperboly
- **b)** paraboly
- **c)** elipsy
- **d)** kružnice
- **e)** přímky

<details><summary>Ответ и решение</summary>

**a** — hyperboly

</details>

### `vut-fsi-2014-z4-06` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 6, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 32. Hyperbola · *Текст:* текст оригинала (по курсу)

Rovnice $x^2-y^2-2x=3$ je rovnicí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 6, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 6, 1 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 6, 1 b)

- **a)** přímky
- **b)** dvojice přímek
- **c)** paraboly
- **d)** kružnice
- **e)** hyperboly

<details><summary>Ответ и решение</summary>

**e** — hyperboly. $(x-1)^2-y^2=4$.

</details>

### `vut-fekt-2023-v1-03` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 3, 2 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 33. Parabola · *Текст:* текст оригинала (по курсу)

Z následujících rovnic vyberte tu, která popisuje parabolu s vrcholem v bodě $[-2,1]$.

- **a)** $y^2-(x+2)^2=1$
- **b)** $y^2-(x-2)^2=1$
- **c)** $y^2+(x-2)^2=1$
- **d)** $y-(x+2)^2=1$
- **e)** $y-(x-2)^2=1$

<details><summary>Ответ и решение</summary>

**d** — $y-(x+2)^2=1$. $y=(x+2)^2+1$ má vrchol $[-2,1]$.

</details>

### `vut-fekt-2023-v2-03` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 3, 2 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 33. Parabola · *Текст:* текст оригинала (по курсу)

Z následujících rovnic vyberte tu, která popisuje parabolu s vrcholem v bodě $[-1,2]$.

- **a)** $y-(x+1)^2=2$
- **b)** $y-(x-1)^2=2$
- **c)** $(x-1)^2+y^2=2$
- **d)** $(x+1)^2+y^2=2$
- **e)** $x^2-1+y=2$

<details><summary>Ответ и решение</summary>

**a** — $y-(x+1)^2=2$. $y=(x+1)^2+2$ má vrchol $[-1,2]$.

</details>

### `vut-fsi-2014-z5-05` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 5, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 33. Parabola · *Текст:* текст оригинала (по курсу)

Rovnice $x^2+2x+y+1=0$ je rovnicí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 6, 1 b)

- **a)** elipsy
- **b)** hyperboly
- **c)** kružnice
- **d)** úsečky
- **e)** paraboly

<details><summary>Ответ и решение</summary>

**e** — paraboly. $y=-(x+1)^2$.

</details>

### `vut-fsi-2014-z9-05` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 5, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 33. Parabola · *Текст:* текст оригинала (по курсу)

Rovnice $x^2-2x-y+1=0$

- **a)** elipsy
- **b)** hyperboly
- **c)** kružnice
- **d)** úsečky
- **e)** paraboly

<details><summary>Ответ и решение</summary>

**e** — paraboly. $y=(x-1)^2$.

</details>

### `vut-fsi-2014-z6-06` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 6, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 33. Parabola · *Текст:* текст оригинала (по курсу)

Rovnice $y^2-x-1=0$ je rovnicí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 5, 1 b); FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 6, 1 b)

- **a)** hyperboly
- **b)** paraboly
- **c)** elipsy
- **d)** kružnice
- **e)** přímky

<details><summary>Ответ и решение</summary>

**b** — paraboly. $x=y^2-1$.

</details>

### `vut-fsi-2017-z1-06` — [FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 6, 1 bod)](https://vut.cz/pomocne2018/f69785/d158882/p149140)

*Темы:* 33. Parabola · *Текст:* текст оригинала (по курсу)

Rovnice $x^2-2x-y+1=0$ je rovnicí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 6, 1 b)

- **a)** elipsy
- **b)** hyperboly
- **c)** kružnice
- **d)** úsečky
- **e)** paraboly

<details><summary>Ответ и решение</summary>

**e** — paraboly. $y=(x-1)^2$.

</details>

### `fbmi-2021-38` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 38)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Obsah rovnostranného trojúhelníka je roven $4\sqrt3\ \mathrm{mm}^2$. Délka každé jeho strany je:

- **a)** $a=\sqrt3$ mm
- **b)** $a=2$ mm
- **c)** $a=4$ mm
- **d)** $a=2\sqrt3$ mm

<details><summary>Ответ и решение</summary>

**c** — $a=4$ mm. $\frac{\sqrt3}{4}a^2=4\sqrt3\Rightarrow a=4$.

</details>

### `fbmi-2021-39` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 39)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Obsah rovnoramenného trojúhelníka se základnou $0{,}8$ cm a rameny $0{,}5$ cm je roven:

- **a)** $S=0{,}12\ \mathrm{cm}^2$
- **b)** $S=0{,}24\ \mathrm{cm}^2$
- **c)** $S=0{,}4\ \mathrm{cm}^2$
- **d)** $S=0{,}52\ \mathrm{cm}^2$

<details><summary>Ответ и решение</summary>

**a** — $S=0{,}12\ \mathrm{cm}^2$. Výška $\sqrt{0{,}25-0{,}16}=0{,}3$, $S=\frac12\cdot0{,}8\cdot0{,}3$.

</details>

### `fbmi-2021-40` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 40)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Obsah pravoúhlého trojúhelníka s přeponou 13 cm a kratší odvěsnou 5 cm je roven:

- **a)** $S=15\ \mathrm{cm}^2$
- **b)** $S=30\ \mathrm{cm}^2$
- **c)** $S=45\ \mathrm{cm}^2$
- **d)** $S=65\ \mathrm{cm}^2$

<details><summary>Ответ и решение</summary>

**b** — $S=30\ \mathrm{cm}^2$. Druhá odvěsna $12$, $S=\frac12\cdot5\cdot12$.

</details>

### `vut-fekt-2022-v1-08` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 8, 3 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 34. Planimetrie, 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

V pravoúhlém trojúhelníku je úhel $\beta=60^\circ$ a délka přepony je $c=8$. Jaký je obvod tohoto trojúhelníka?

- **a)** $8\sqrt3$
- **b)** $16\sqrt3$
- **c)** $16$
- **d)** $4(3+\sqrt3)$
- **e)** $8(1+\sqrt2)$

<details><summary>Ответ и решение</summary>

**d** — $4(3+\sqrt3)$. Odvěsny $8\cos60^\circ=4$ a $8\sin60^\circ=4\sqrt3$; obvod $12+4\sqrt3$.

</details>

### `vut-fekt-2022-v2-08` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 8, 3 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 34. Planimetrie, 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

V pravoúhlém trojúhelníku je úhel $\alpha=60^\circ$ a délka přepony je $c=8$. Jaký je obsah tohoto trojúhelníka?

- **a)** $8\sqrt3$
- **b)** $16\sqrt3$
- **c)** $16$
- **d)** $4(3+\sqrt3)$
- **e)** $8(1+\sqrt2)$

<details><summary>Ответ и решение</summary>

**a** — $8\sqrt3$. Odvěsny $4\sqrt3$ a $4$; obsah $\frac{4\sqrt3\cdot4}2=8\sqrt3$.

</details>

### `vut-fsi-2014-z1-07` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 7, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Střed kružnice trojúhelníku opsané leží v průsečíku

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 7, 1 b)

- **a)** os stran
- **b)** výšek
- **c)** os vnitřních úhlů
- **d)** os vnějších úhlů
- **e)** těžnic

<details><summary>Ответ и решение</summary>

**a** — os stran

</details>

### `vut-fsi-2014-z3-07` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 7, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Střed kružnice trojúhelníku vepsané leží v průsečíku

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 7, 1 b)

- **a)** os stran
- **b)** výšek
- **c)** os vnitřních úhlů
- **d)** os vnějších úhlů
- **e)** těžnic

<details><summary>Ответ и решение</summary>

**c** — os vnitřních úhlů

</details>

### `vut-fsi-2014-z4-07` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 7, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Čtyřúhelník, jehož úhlopříčky se půlí a jsou na sebe kolmé, je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 7, 1 b)

- **a)** obdélník
- **b)** kosočtverec
- **c)** deltoid
- **d)** lichoběžník
- **e)** neexistuje

<details><summary>Ответ и решение</summary>

**b** — kosočtverec

</details>

### `vut-fsi-2014-z5-07` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 7, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Je-li obsah trojúhelníka 20 cm$^2$, pak obsah trojúhelníka sestrojeného z jeho středních příček je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 7, 1 b)

- **a)** $15$ cm$^2$
- **b)** $10$ cm$^2$
- **c)** $5$ cm$^2$
- **d)** $4$ cm$^2$
- **e)** $20$ cm$^2$

<details><summary>Ответ и решение</summary>

**c** — $5$ cm$^2$. Podobnost s koeficientem $\frac12$, obsah čtvrtinový.

</details>

### `vut-fsi-2014-z6-07` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 7, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 34. Planimetrie, 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Trojúhelník o stranách $a=2;\ b=3$ a úhlu $\gamma=\dfrac\pi3$ má stranu $c=$

- **a)** $7$
- **b)** $\sqrt7$
- **c)** $1$
- **d)** $3$
- **e)** $\sqrt{13}$

<details><summary>Ответ и решение</summary>

**b** — $\sqrt7$. Kosinová věta: $c^2=4+9-12\cdot\frac12=7$.

</details>

### `vut-fsi-2014-z8-07` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 7, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Kruh, čtverec a rovnostranný trojúhelník mají stejný obsah. Nejmenší obvod má:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 7, 1 b)

- **a)** kruh
- **b)** čtverec
- **c)** trojúhelník
- **d)** čtverec a trojúhelník
- **e)** všechny stejný

<details><summary>Ответ и решение</summary>

**a** — kruh

</details>

### `vut-fsi-2014-z9-07` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 7, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 34. Planimetrie, 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Je-li $\omega$ úhel sevřený stranami $p;q$ trojúhelníka, pak pro zbývající stranu $r$ platí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 7, 1 b)

- **a)** $r=p+q-2pq\cos\omega$
- **b)** $r=p+q-2pq\sin\omega$
- **c)** $r^2=p^2+q^2-2pq\sin\omega$
- **d)** $r^2=p^2+q^2-2pq\cos\omega$
- **e)** $r^2=p^2-q^2$

<details><summary>Ответ и решение</summary>

**d** — $r^2=p^2+q^2-2pq\cos\omega$. Kosinová věta.

</details>

### `vut-fsi-2014-z5-18` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 18, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Čtverec má plošný obsah $2m^2$. Čtverec, jehož strana je úhlopříčka prvního čtverce, má obsah:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 18, 2 b)

- **a)** $2\sqrt2m^2$
- **b)** $4m^2$
- **c)** $2\sqrt3m^2$
- **d)** $4\sqrt3m^2$
- **e)** $\sqrt3m^2$

<details><summary>Ответ и решение</summary>

**b** — $4m^2$. Úhlopříčka $\sqrt2\cdot\sqrt2=2$.

</details>

### `vut-fsi-2014-z6-18` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 18, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Součet všech vnitřních úhlů pětiúhelníka je roven

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 18, 2 b)

- **a)** $180^\circ$
- **b)** $270^\circ$
- **c)** $360^\circ$
- **d)** $540^\circ$
- **e)** $720^\circ$

<details><summary>Ответ и решение</summary>

**d** — $540^\circ$. $3\cdot180^\circ$.

</details>

### `vut-fsi-2014-z7-18` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 18, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Poměr obsahu kruhu o poloměru $r$ k délce jeho hraniční kružnice je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 18, 2 b)

- **a)** $\pi:r$
- **b)** $r:\pi$
- **c)** $2:r$
- **d)** $r:2$
- **e)** $2\pi:r$

<details><summary>Ответ и решение</summary>

**d** — $r:2$. $\pi r^2:2\pi r$.

</details>

### `vut-fsi-2017-z10-07` — [FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 7, 1 bod)](https://vut.cz/pomocne2018/f69785/d158882/p149140)

*Темы:* 34. Planimetrie, 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Trojúhelník o stranách $a=2;\ b=3$, které svírají úhel $\gamma=\dfrac\pi3$, má stranu $c=$

- **a)** $7$
- **b)** $\sqrt7$
- **c)** $1$
- **d)** $3$
- **e)** $\sqrt{13}$

<details><summary>Ответ и решение</summary>

**b** — $\sqrt7$. Kosinová věta: $c^2=4+9-12\cdot\frac12=7$.

</details>

### `vut-fsi-2014-z2-07` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 7, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 35. Stereometrie · *Текст:* текст оригинала (по курсу)

Model konstrukce je v měřítku 1:10. Kolikrát těžší bude skutečná konstrukce z téhož materiálu?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 7, 1 b)

- **a)** $\sqrt2$
- **b)** $3$
- **c)** $10$
- **d)** $100$
- **e)** $1000$

<details><summary>Ответ и решение</summary>

**e** — $1000$. Objem roste s třetí mocninou měřítka.

</details>

### `vut-fsi-2014-z7-07` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 7, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 35. Stereometrie · *Текст:* текст оригинала (по курсу)

Množina všech bodů v prostoru stejně vzdálených od dvou různých pevných bodů je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 7, 1 b)

- **a)** osa souměrnosti
- **b)** rovina souměrnosti
- **c)** neexistuje
- **d)** koule
- **e)** kružnice

<details><summary>Ответ и решение</summary>

**b** — rovina souměrnosti

</details>

### `vut-fsi-2014-z10-07` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 7, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 35. Stereometrie · *Текст:* текст оригинала (по курсу)

Rovina je jednoznačně určena

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 7, 1 b)

- **a)** dvěma různými body
- **b)** dvěma mimoběžkami
- **c)** dvěma totožnými přímkami
- **d)** jedinou přímkou
- **e)** dvěma různoběžkami

<details><summary>Ответ и решение</summary>

**e** — dvěma různoběžkami

</details>

### `vut-fsi-2014-z1-18` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 18, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 35. Stereometrie · *Текст:* текст оригинала (по курсу)

Kvádr má hrany $a=3\ cm$, $b=4\ cm$, $c=12\ cm$. Jeho tělesová úhlopříčka má velikost:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 18, 2 b)

- **a)** $19\ cm$
- **b)** $5\ cm$
- **c)** $4\sqrt{10}\ cm$
- **d)** $13\ cm$
- **e)** $169\ cm$

<details><summary>Ответ и решение</summary>

**d** — $13\ cm$. $\sqrt{9+16+144}=13$.

</details>

### `vut-fsi-2014-z3-18` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 18, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 35. Stereometrie · *Текст:* текст оригинала (по курсу)

Objem poloviny koule o průměru $1m$ je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 18, 2 b)

- **a)** $\dfrac\pi{12}m^3$
- **b)** $\dfrac\pi8m^3$
- **c)** $\dfrac{2\pi}3m^3$
- **d)** $\dfrac{4\pi}3m^3$
- **e)** $\dfrac\pi6m^3$

<details><summary>Ответ и решение</summary>

**a** — $\dfrac\pi{12}m^3$. $\frac12\cdot\frac43\pi\left(\frac12\right)^3$.

</details>

### `vut-fsi-2014-z4-18` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 18, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 35. Stereometrie · *Текст:* текст оригинала (по курсу)

Krychlová nádoba o objemu 1 litr je vrchovatě zaplněna vodou. Kolik vody přeteče, jestliže do ní zcela ponoříme kouli o průměru $1dm$?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 18, 2 b)

- **a)** $\dfrac1\pi$ litrů
- **b)** $\dfrac\pi3$ litrů
- **c)** $\dfrac\pi4$ litrů
- **d)** $\dfrac\pi6$ litrů
- **e)** $\dfrac2\pi$ litrů

<details><summary>Ответ и решение</summary>

**d** — $\dfrac\pi6$ litrů. $\frac43\pi\left(\frac12\right)^3=\frac\pi6$ dm$^3$.

</details>

### `vut-fsi-2014-z8-18` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 18, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 35. Stereometrie · *Текст:* текст оригинала (по курсу)

Podstava čtyřbokého jehlanu má obsah $64\ cm^2$. Obsah řezu rovinou rovnoběžnou s podstavou v polovině výšky je roven

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 18, 2 b)

- **a)** nelze určit
- **b)** $64v/3\ cm^2$
- **c)** $32\ cm^2$
- **d)** $64/3\ cm^2$
- **e)** $16\ cm^2$

<details><summary>Ответ и решение</summary>

**e** — $16\ cm^2$. Podobnost s koeficientem $\frac12$.

</details>

### `vut-fsi-2014-z9-18` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 18, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 35. Stereometrie · *Текст:* текст оригинала (по курсу)

Povrch větší krychle je čtyřnásobkem povrchu krychle menší. Její objem je větší

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 18, 2 b)

- **a)** dvakrát
- **b)** čtyřikrát
- **c)** šestkrát
- **d)** osmkrát
- **e)** devětkrát

<details><summary>Ответ и решение</summary>

**d** — osmkrát. Hrana dvojnásobná.

</details>

### `fbmi-2021-09` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 9)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Rozložíme-li výraz $x^4-1$ na součin, získáme:

- **a)** $(x^2-1)^2$
- **b)** $(x^2+1)\cdot(x-1)^2$
- **c)** $(x^2+1)\cdot(x+1)\cdot(x-1)$
- **d)** $(x+1)^2\cdot(x-1)^2$

<details><summary>Ответ и решение</summary>

**c** — $(x^2+1)\cdot(x+1)\cdot(x-1)$. $(x^2+1)(x^2-1)$.

</details>

### `fbmi-2021-10` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 10)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Rozložíme-li výraz $-3x^2y+6xy-3y$ na součin, získáme:

- **a)** $-3y\cdot(x^2-1)^2$
- **b)** $(3y-1)\cdot(x-1)^2$
- **c)** $-(x+1)^2\cdot3y$
- **d)** $-3y\cdot(x-1)^2$

<details><summary>Ответ и решение</summary>

**d** — $-3y\cdot(x-1)^2$. $-3y(x^2-2x+1)$.

</details>

### `fbmi-2021-11` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 11)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Rozložíme-li výraz $2x^2y+2y-x^2-1$ na součin, získáme:

- **a)** $(2y-1)\cdot(x^2-1)$
- **b)** $(2y-1)\cdot(x^2+1)$
- **c)** $(2y+1)\cdot(x^2-1)$
- **d)** $(2y+1)\cdot(x^2+1)$

<details><summary>Ответ и решение</summary>

**b** — $(2y-1)\cdot(x^2+1)$. $2y(x^2+1)-(x^2+1)$.

</details>

### `fbmi-2021-12` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 12)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Rozložíme-li výraz $(x^2+2x)-(x+2)^2$ na součin, získáme:

- **a)** $2\cdot(x-2)$
- **b)** $(x^2+2)\cdot2$
- **c)** $-2\cdot(x+2)$
- **d)** $(x-2)^2$

<details><summary>Ответ и решение</summary>

**c** — $-2\cdot(x+2)$. $x^2+2x-x^2-4x-4=-2x-4$.

</details>

### `fbmi-2021-13` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 13)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Po úpravě lomeného výrazu $\dfrac{(x+2)^2}{x^3-4x}$ získáme za podmínek $x\ne0$; $x\ne\pm2$:

- **a)** $\frac{x+2}{x\cdot(x-2)}$
- **b)** $\frac{x+2}{x}$
- **c)** $\frac{x+2}{x-2}$
- **d)** $\frac1x$

<details><summary>Ответ и решение</summary>

**a** — $\frac{x+2}{x\cdot(x-2)}$. $x^3-4x=x(x-2)(x+2)$.

</details>

### `fbmi-2021-14` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 14)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Po úpravě rozdílu lomených výrazů $\dfrac{2+3x}{x-2}-\dfrac2x$ získáme za podmínek $x\ne0$; $x\ne2$:

- **a)** $\frac{3x^2+4x+4}{x\cdot(x-2)}$
- **b)** $\frac{3x^2-4x+4}{x\cdot(x-2)}$
- **c)** $\frac{3x^2+4}{x\cdot(x-2)}$
- **d)** $\frac{3x^2-4}{x\cdot(x-2)}$

<details><summary>Ответ и решение</summary>

**c** — $\frac{3x^2+4}{x\cdot(x-2)}$. $\frac{x(2+3x)-2(x-2)}{x(x-2)}$.

</details>

### `fbmi-2021-15` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 15)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Lomený výraz $\dfrac{(x+3)^2}{x^3-2x}$ má smysl za podmínek:

- **a)** $x\ne0$; $x\ne\pm2$
- **b)** $x\ne0$; $x\ne\pm\sqrt2$
- **c)** $x\ne0$; $x\ne\sqrt2$
- **d)** $x\ne0$; $x\ne\sqrt2$; $x\ne-3$

<details><summary>Ответ и решение</summary>

**b** — $x\ne0$; $x\ne\pm\sqrt2$. $x(x^2-2)\ne0$.

</details>

### `fbmi-2021-16` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 16)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Po úpravě součinu lomených výrazů $\dfrac{4-4x+x^2}{x-2}\cdot\dfrac{4-x^2}{x+2}$ získáme za podmínek $x\ne\pm2$:

- **a)** $(2-x)^2$
- **b)** $-(x+2)^2$
- **c)** $-(x-2)^2$
- **d)** $x^2-4$

<details><summary>Ответ и решение</summary>

**c** — $-(x-2)^2$. $\frac{(x-2)^2}{x-2}\cdot\frac{(2-x)(2+x)}{x+2}=(x-2)(2-x)$.

</details>

### `fbmi-2021-17` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 17)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Lomený výraz $\dfrac{x\cdot(x+5)^2}{x^2-2x-15}$ má smysl za podmínek:

- **a)** $x\ne3$; $x\ne-5$
- **b)** $x\ne-3$; $x\ne5$
- **c)** $x\ne0$; $x\ne3$; $x\ne-5$
- **d)** $x\ne0$; $x\ne-3$; $x\ne\pm5$

<details><summary>Ответ и решение</summary>

**b** — $x\ne-3$; $x\ne5$. $x^2-2x-15=(x-5)(x+3)$.

</details>

### `vut-fekt-2022-v1-13` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 13, 5 bodů)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Kolik litrů vody je třeba přidat do 5 litrů 20% roztoku kyseliny, abychom získali roztok desetiprocentní?

- **a)** $1$
- **b)** $2$
- **c)** $3$
- **d)** $4$
- **e)** $5$

<details><summary>Ответ и решение</summary>

**e** — $5$. Kyseliny je $1$ l, desetiprocentní roztok tedy musí mít $10$ l.

</details>

### `fit-2014-1-01` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 1, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

V lednu byla zaměstnancům zvýšena mzda o $10\ \%$ prosincové mzdy. Následně v červnu jim byla mzda snížena o $10\ \%$ březnové mzdy. Jaká je nyní jejich mzda?

- **a)** Stejná jako před lednovým zvyšováním.
- **b)** O dvě procenta nižší než před lednovým zvyšováním.
- **c)** O jedno procento vyšší než před lednovým zvyšováním.
- **d)** O jedno procento nižší než před lednovým zvyšováním.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — O jedno procento nižší než před lednovým zvyšováním.. $1{,}1\cdot0{,}9=0{,}99$.

</details>

### `fit-2014-2-01` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 1, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

V únoru byla zaměstnancům zvýšena mzda o $20\ \%$ lednové mzdy. Následně v červnu jim byla mzda snížena o $20\ \%$ dubnové mzdy. Jaká je nyní jejich mzda?

- **a)** O šest procent nižší než před únorovým zvyšováním.
- **b)** Stejná jako před únorovým zvyšováním.
- **c)** O čtyři procenta nižší než před únorovým zvyšováním.
- **d)** O čtyři procenta vyšší než před únorovým zvyšováním.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — O čtyři procenta nižší než před únorovým zvyšováním.. $1{,}2\cdot0{,}8=0{,}96$.

</details>

### `fit-2014-3-01` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 1, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

V lednu byla zaměstnancům zvýšena mzda o $16\ \%$ prosincové mzdy. Následně v červnu jim byla mzda snížena o $15\ \%$ březnové mzdy. Jaká je nyní jejich mzda?

- **a)** O $1{,}6$ procenta nižší než před lednovým zvyšováním.
- **b)** Stejná jako před lednovým zvyšováním.
- **c)** O $1{,}4$ procenta nižší než před lednovým zvyšováním.
- **d)** O $1{,}4$ procenta vyšší než před lednovým zvyšováním.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — O $1{,}4$ procenta nižší než před lednovým zvyšováním.. $1{,}16\cdot0{,}85=0{,}986$.

</details>

### `fit-2014-4-01` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 1, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

V únoru byla zaměstnancům zvýšena mzda o $15\ \%$ lednové mzdy. Následně v červnu jim byla mzda snížena o $16\ \%$ dubnové mzdy. Jaká je nyní jejich mzda?

- **a)** Stejná jako před lednovým zvyšováním.
- **b)** O $3{,}4$ procenta nižší než před lednovým zvyšováním.
- **c)** O $3{,}6$ procenta nižší než před lednovým zvyšováním.
- **d)** O $3{,}4$ procenta vyšší než před lednovým zvyšováním.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — O $3{,}4$ procenta nižší než před lednovým zvyšováním.. $1{,}15\cdot0{,}84=0{,}966$.

</details>

### `fit-2014-1-07` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 7, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Mějme dvě čísla zapsaná v pětkové soustavě: $3402_5$ a $2413_5$. Vyjádřete jejich rozdíl také v pětkové soustavě.

- **a)** $3402_5-2413_5=989_5$.
- **b)** $3402_5-2413_5=434_5$.
- **c)** $3402_5-2413_5=1034_5$.
- **d)** $3402_5-2413_5=435_5$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — $3402_5-2413_5=434_5$.. $477-358=119=434_5$.

</details>

### `fit-2014-2-07` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 7, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Mějme dvě čísla zapsaná v pětkové soustavě: $3412_5$ a $2424_5$. Vyjádřete jejich rozdíl také v pětkové soustavě.

- **a)** $3412_5-2424_5=988_5$.
- **b)** $3412_5-2424_5=434_5$.
- **c)** $3412_5-2424_5=1033_5$.
- **d)** $3412_5-2424_5=433_5$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — $3412_5-2424_5=433_5$.. $482-364=118=433_5$.

</details>

### `fit-2014-3-07` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 7, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Mějme dvě čísla zapsaná v pětkové soustavě: $4401_5$ a $2413_5$. Vyjádřete jejich rozdíl také v pětkové soustavě.

- **a)** $4401_5-2413_5=1989_5$.
- **b)** $4401_5-2413_5=2043_5$.
- **c)** $4401_5-2413_5=1433_5$.
- **d)** $4401_5-2413_5=433_5$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — $4401_5-2413_5=1433_5$.. $601-358=243=1433_5$.

</details>

### `fit-2014-4-07` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 7, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Mějme dvě čísla zapsaná v pětkové soustavě: $3312_5$ a $2443_5$. Vyjádřete jejich rozdíl také v pětkové soustavě.

- **a)** $3312_5-2443_5=869_5$.
- **b)** $3312_5-2443_5=314_5$.
- **c)** $3312_5-2443_5=1314_5$.
- **d)** $3312_5-2443_5=423_5$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — $3312_5-2443_5=314_5$.. $457-373=84=314_5$.

</details>

### `fit-2015-01` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 1, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Z původní ceny byl výrobek zlevněn o $10\ \%$ a potom ještě o $8\ \%$ nové ceny. O kolik procent původní ceny byl zlevněn celkem?

- **a)** $20{,}3\ \%$
- **b)** $15{,}2\ \%$
- **c)** $17{,}2\ \%$
- **d)** Žádná z ostatních možností není správná.
- **e)** $18{,}2\ \%$

<details><summary>Ответ и решение</summary>

**c** — $17{,}2\ \%$. $0{,}9\cdot0{,}92=0{,}828$, sleva $17{,}2\ \%$.

</details>

### `fit-2015-02` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 2, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Mějme tři čísla zapsaná v sedmičkové soustavě: $2456_7$, $1126_7$ a $3245_7$. Vyjádřete jejich součet také v sedmičkové soustavě.

- **a)** $2456_7+1126_7+3245_7=10153_7$.
- **b)** Žádná z ostatních možností není správná.
- **c)** $2456_7+1126_7+3245_7=6827_7$.
- **d)** $2456_7+1126_7+3245_7=10163_7$.
- **e)** $2456_7+1126_7+3245_7=6753_7$.

<details><summary>Ответ и решение</summary>

**d** — $2456_7+1126_7+3245_7=10163_7$.. $923+412+1160=2495=10163_7$.

</details>

### `fit-2015-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 3, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Pokud ráno zaspím, koupím si v pekárně koblihu. Pokud ráno nezaspím, nasnídám se doma. Rozhodněte, které tvrzení je pravdivé.

- **a)** Pokud jsem snídal doma, pak si nekoupím koblihu.
- **b)** Pokud jsem si nekoupil koblihu, pak jsem ráno snídal doma.
- **c)** Žádná z ostatních možností není správná.
- **d)** Pokud jsem si koupil koblihu, pak jsem nesnídal doma.
- **e)** Ráno se nasnídám doma a koupím si koblihu jedině v případě, že nezaspím.

<details><summary>Ответ и решение</summary>

**b** — Pokud jsem si nekoupil koblihu, pak jsem ráno snídal doma.. Z $Z\Rightarrow K$ plyne $\neg K\Rightarrow\neg Z$ a z $\neg Z\Rightarrow S$ pak $\neg K\Rightarrow S$.

</details>

### `fit-2016-01` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 1, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Původní cena knihy byla 350 Kč. Pak byla zdražena o $15\ \%$. Jelikož nešla na odbyt, byla později zlevněna o $14\ \%$ (z ceny po zdražení) a to je její současná cena. Rozhodněte, které tvrzení je pravdivé.

- **a)** Žádná z ostatních možností není správná.
- **b)** Současná cena knihy je o 1,1 procenta vyšší než původní cena.
- **c)** Současná cena knihy je nižší než původní cena.
- **d)** Současná cena knihy je stejná jako původní cena.
- **e)** Současná cena knihy je o 1 procento vyšší než původní cena.

<details><summary>Ответ и решение</summary>

**c** — Současná cena knihy je nižší než původní cena.. $1{,}15\cdot0{,}86=0{,}989<1$.

</details>

### `fit-2016-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 3, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Na setkání několika firem jsme si všimli následujících věcí. Každý, kdo má modrou košili, má i černé boty. Všichni zaměstnanci 1. firmy mají modrou košili. Rozhodněte, které z následujících tvrzení je pravdivé.

- **a)** Žádná z ostatních možností není správná.
- **b)** Nikdo ze zaměstnanců 1. firmy nemá černé boty.
- **c)** Nikdo s černými botami není zaměstnancem 1. firmy.
- **d)** Všichni zaměstnanci 1. firmy mají černé boty.
- **e)** Každý, kdo má černé boty, je zaměstnancem 1. firmy.

<details><summary>Ответ и решение</summary>

**d** — Všichni zaměstnanci 1. firmy mají černé boty.. Zaměstnanec 1. firmy $\Rightarrow$ modrá košile $\Rightarrow$ černé boty.

</details>

### `fit-2016-04` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 4, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Mějme dvě čísla zapsaná v pětkové soustavě: $4402_5$ a $2313_5$. Vyjádřete jejich rozdíl také v pětkové soustavě.

- **a)** $4402_5-2313_5=1034_5$.
- **b)** $4402_5-2313_5=2034_5$.
- **c)** $4402_5-2313_5=2144_5$.
- **d)** Žádná z ostatních možností není správná.
- **e)** $4402_5-2313_5=2199_5$.

<details><summary>Ответ и решение</summary>

**b** — $4402_5-2313_5=2034_5$.. $602-333=269=2034_5$.

</details>

### `fit-2017-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2018 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2017.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Pokud bude o víkendu hezky, budeme večer grilovat. Pokud o víkendu nebude hezky, půjdeme do muzea. Rozhodněte, které tvrzení je pravdivé.

- **a)** Pokud budeme večer grilovat, pak jsem nebyli v muzeu.
- **b)** Jedině za hezkého počasí půjdeme do muzea a zároveň budeme večer grilovat.
- **c)** Žádná z ostatních možností není správná.
- **d)** Pokud jsem večer negrilovali, tak jsem šli do muzea.
- **e)** Pokud jsem šli do muzea, tak večer nebudeme grilovat.

<details><summary>Ответ и решение</summary>

**d** — Pokud jsem večer negrilovali, tak jsem šli do muzea.. Z $H\Rightarrow G$ plyne $\neg G\Rightarrow\neg H$ a z $\neg H\Rightarrow M$ pak $\neg G\Rightarrow M$.

*Примечание:* Tvary „jsem“ místo „jsme“ jsou v originále.

</details>

### `fit-2019-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2020 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Mějme tři čísla zapsaná v sedmičkové soustavě: $4266_7$, $2526_7$ a $445_7$. Vyjádřete jejich součet také v sedmičkové soustavě.

- **a)** $4266_7+2526_7+445_7=8237_7$.
- **b)** Žádná z ostatních možností není správná.
- **c)** $4266_7+2526_7+445_7=6503_7$.
- **d)** $4266_7+2526_7+445_7=10463_7$.
- **e)** $4266_7+2526_7+445_7=10603_7$.

<details><summary>Ответ и решение</summary>

**e** — $4266_7+2526_7+445_7=10603_7$.. $1518+951+229=2698=10603_7$.

</details>

### `fit-2019-04` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2020 (příklad 4, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D9

Kladné číslo $x$ je o $25\ \%$ větší než kladné číslo $y$. O kolik procent je číslo $y$ menší než číslo $x$?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2027, příklad 2 (3 b)

- **a)** Číslo $y$ je o $15\ \%$ menší než číslo $x$.
- **b)** Číslo $y$ je o $33\ \%$ menší než číslo $x$.
- **c)** Žádná z ostatních možností není správná.
- **d)** Číslo $y$ je o $20\ \%$ menší než číslo $x$.
- **e)** Číslo $y$ je o $25\ \%$ menší než číslo $x$.

<details><summary>Ответ и решение</summary>

**d** — Číslo $y$ je o $20\ \%$ menší než číslo $x$.. $y=\frac{x}{1{,}25}=0{,}8x$.

</details>

### `fit-2020-02` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2021 (příklad 2, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2020.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Při koupi dvou párů bot dostaneme slevu $30\%$ na druhý pár. Chceme koupit boty za 1800 a 1500 korun. Jaká je nejmenší cena za kterou můžeme oba páry získat?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2018, příklad 2 (3 b)

- **a)** $2800$
- **b)** $2850$
- **c)** $2700$
- **d)** Žádná z ostatních možností není správná.
- **e)** $2760$

<details><summary>Ответ и решение</summary>

**e** — $2760$. Slevu uplatníme na dražší pár: $1500+0{,}7\cdot1800=2760$.

</details>

### `fit-2021-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2022 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Mějme dvě čísla zapsaná v pětkové soustavě: $4112_5$ a $2443_5$. Vyjádřete jejich rozdíl také v pětkové soustavě.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2019, příklad 1 (3 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2021, příklad 4 (7 b)

- **a)** $4112_5-2443_5=1114_5$.
- **b)** $4112_5-2443_5=2144_5$.
- **c)** $4112_5-2443_5=114_5$.
- **d)** Žádná z ostatních možností není správná.
- **e)** $4112_5-2443_5=1224_5$.

<details><summary>Ответ и решение</summary>

**a** — $4112_5-2443_5=1114_5$.. $532-373=159=1114_5$.

</details>

### `fit-2021-04` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2022 (příklad 4, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Původní cena knihy byla 350 Kč. Pak byla zdražena o $20\ \%$. Jelikož nešla na odbyt, byla zlevněna o $15\ \%$ (z ceny po zdražení) a to je její současná cena. Rozhodněte, které tvrzení je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2019, příklad 2 (3 b)

- **a)** Současná cena knihy je o pět procent vyšší než původní cena.
- **b)** Současná cena knihy je stejná jako původní cena.
- **c)** Současná cena knihy je nižší než původní cena.
- **d)** Žádná z ostatních možností není správná.
- **e)** Současná cena knihy je o dvě procenta vyšší než původní cena.

<details><summary>Ответ и решение</summary>

**e** — Současná cena knihy je o dvě procenta vyšší než původní cena.. $1{,}2\cdot0{,}85=1{,}02$.

</details>

### `fit-2022-02` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 2, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Mějme tři čísla zapsaná v pětkové soustavě: $3431_5$, $122_5$ a $2040_5$. Vyjádřete jejich součet také v pětkové soustavě.

- **a)** Žádná z ostatních možností není správná.
- **b)** $3431_5+122_5+2040_5=11143_5$.
- **c)** $3431_5+122_5+2040_5=11134_5$.
- **d)** $3431_5+122_5+2040_5=42_5$.
- **e)** $3431_5+122_5+2040_5=5593_5$.

<details><summary>Ответ и решение</summary>

**b** — $3431_5+122_5+2040_5=11143_5$.. V desítkové soustavě $491+37+270=798=11143_5$.

</details>

### `fit-2022-04` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 4, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D11

Petr a Pavel mají stejně vysoký plat. Pavel platí o čtvrtinu vyšší nájem než Petr. Nájem bytu stojí Pavla $25\%$ jeho platu. Kolik procent svého platu platí za nájem Petr?

- **a)** $22{,}5\%$
- **b)** $15\%$
- **c)** $18{,}75\%$
- **d)** Žádná z ostatních možností není správná.
- **e)** $20\%$

<details><summary>Ответ и решение</summary>

**e** — $20\%$. $1{,}25\cdot n=0{,}25\,S\Rightarrow n=0{,}2\,S$.

</details>

### `fit-2024-01` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2024 (příklad 1, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2024.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Z původní ceny byl výrobek zlevněn o $12\ \%$ a potom ještě o $15\ \%$ nové ceny. O kolik procent původní ceny byl zlevněn celkem?

- **a)** $15\ \%$
- **b)** $20{,}4\ \%$
- **c)** $25{,}2\ \%$
- **d)** $27\ \%$
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**c** — $25{,}2\ \%$. $0{,}88\cdot0{,}85=0{,}748$, sleva $25{,}2\ \%$.

</details>

### `fit-2025-14` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2025 (příklad 14, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2025-s-resenim.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Pokud bude v sobotu pršet, půjdeme hrát badminton. Pokud budeme hrát badminton, navštívíme saunu. Rozhodněte, které tvrzení je pravdivé.

- **a)** Žádná z ostatních možností není správná.
- **b)** Pokud bude hezky, nenavštívíme saunu.
- **c)** Pokud jsme navštívili saunu, tak jsme hráli badminton.
- **d)** V sobotu jsme hráli badminton a navštívili saunu.
- **e)** Pokud v sobotu pršelo, tak jsme navštívili saunu.

<details><summary>Ответ и решение</summary>

**e** — Pokud v sobotu pršelo, tak jsme navštívili saunu.. Z implikací $P\Rightarrow B$ a $B\Rightarrow S$ plyne $P\Rightarrow S$; obrácené implikace ani negace neplatí.

</details>

### `fit-2026-02` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2026 (příklad 2, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Kladné číslo $x$ je o $20\ \%$ menší než kladné číslo $y$. O kolik procent je číslo $y$ větší než číslo $x$?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2025, příklad 13 (3 b)

- **a)** Číslo $y$ je o $15\ \%$ větší než číslo $x$.
- **b)** Číslo $y$ je o $33\ \%$ větší než číslo $x$.
- **c)** Číslo $y$ je o $20\ \%$ větší než číslo $x$.
- **d)** Žádná z ostatních možností není správná.
- **e)** Číslo $y$ je o $25\ \%$ větší než číslo $x$.

<details><summary>Ответ и решение</summary>

**e** — Číslo $y$ je o $25\ \%$ větší než číslo $x$.. $x=0{,}8y\Rightarrow y=1{,}25x$.

</details>

### `fit-2027-01` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2027 (příklad 1, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2027-s-resenim.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Mějme tři čísla zapsaná v sedmičkové soustavě: $1456_7$, $1526_7$ a $4345_7$. Vyjádřete jejich součet také v sedmičkové soustavě.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2018, příklad 4 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2024, příklad 2 (3 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2025, příklad 1 (3 b)

- **a)** $1456_7+1526_7+4345_7=7327_7$.
- **b)** Žádná z ostatních možností není správná.
- **c)** $1456_7+1526_7+4345_7=10663_7$.
- **d)** $1456_7+1526_7+4345_7=10653_7$.
- **e)** $1456_7+1526_7+4345_7=11063_7$.

<details><summary>Ответ и решение</summary>

**c** — $1456_7+1526_7+4345_7=10663_7$.. V desítkové soustavě $580+608+1552=2740=1\cdot7^4+0\cdot7^3+6\cdot7^2+6\cdot7+3$.

</details>

### `fjfi-v1-01` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 1 (příklad 1, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Zjednodušte výraz $F(x)=(2x^2+x+5)^2-(4x^2-x+5)^2+4x(x-1)(3x^2+5)$ a ověřte dosazením $x=1$

- **a)** $-x^2$
- **b)** $2x$
- **c)** $0$
- **d)** $5$
- **e)** $x^2+1$

<details><summary>Ответ и решение</summary>

**c** — $0$. Rozdíl čtverců: $(-2x^2+2x)(6x^2+10)=-4x(x-1)(3x^2+5)$, s posledním členem se odečte na $0$; pro $x=1$: $64-64+0=0$.

</details>

### `fjfi-v2-01` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 2 (příklad 1, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Zjednodušte výraz $F(x)=(8x^2-1)^2+(6x^2-7)(6x^2+7)-3x^2(x+4)(3x-9)$ a ověřte dosazením $x=1$

- **a)** $91x^4-9x^3+92x^2-48$
- **b)** $-91x^4+9x^3-92x^2+48$
- **c)** $91x^4+9x^3+92x^2-48$
- **d)** $-91x^4-9x^3+92x^2-48$
- **e)** $-91x^4-9x^3-92x^2-48$

<details><summary>Ответ и решение</summary>

**a** — $91x^4-9x^3+92x^2-48$. $64x^4-16x^2+1+36x^4-49-(9x^4+9x^3-108x^2)=91x^4-9x^3+92x^2-48$; pro $x=1$: $49-13+90=126$.

</details>

### `fjfi-v1-02` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 1 (příklad 2, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Zjednodušte výraz a zapište podmínky pro jeho platnost $\dfrac{c+d}{c-d}:\dfrac{c^2+cd}{c^2-d^2}$

- **a)** $\frac{c}{c-d},\quad c,d\in\mathbb{R}\wedge c\neq-d\wedge c\neq0$
- **b)** $\frac{c-d}{c},\quad c,d\in\mathbb{R}\wedge c\neq d\wedge c\neq0$
- **c)** $\frac{c^2+d^2}{c},\quad c,d\in\mathbb{R}\wedge c\neq d\wedge c\neq-d$
- **d)** $\frac{c-d}{c+d},\quad c,d\in\mathbb{R}\wedge c\neq d\wedge c\neq-d\wedge c\neq0$
- **e)** $\frac{c+d}{c},\quad c,d\in\mathbb{R}\wedge c\neq d\wedge c\neq-d\wedge c\neq0$

<details><summary>Ответ и решение</summary>

**e** — $\frac{c+d}{c},\quad c,d\in\mathbb{R}\wedge c\neq d\wedge c\neq-d\wedge c\neq0$. $\frac{c+d}{c-d}\cdot\frac{(c-d)(c+d)}{c(c+d)}=\frac{c+d}{c}$; jmenovatele a dělitel nesmí být nulové: $c\ne\pm d$, $c\ne0$.

</details>

### `fjfi-v2-02` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 2 (příklad 2, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Zjednodušte výraz a zapište podmínky pro jeho platnost $\dfrac{a^2-25}{a^2-3a}:\dfrac{a^2+10a+25}{a-3}$

- **a)** $\frac{a+5}{a-5},\quad a\in\mathbb{R}\setminus\{-5,0,5\}$
- **b)** $\frac{a-5}{a(a+5)},\quad a\in\mathbb{R}\setminus\{-5,0,3\}$
- **c)** $\frac{a-3}{a-5},\quad a\in\mathbb{R}\setminus\{0,3,5\}$
- **d)** $\frac{a}{a-5},\quad a\in\mathbb{R}\setminus\{-5,0,1,5\}$
- **e)** $\frac{a(a+5)}{a-5},\quad a\in\mathbb{R}\setminus\{0,5\}$

<details><summary>Ответ и решение</summary>

**b** — $\frac{a-5}{a(a+5)},\quad a\in\mathbb{R}\setminus\{-5,0,3\}$. $\frac{(a-5)(a+5)}{a(a-3)}\cdot\frac{a-3}{(a+5)^2}=\frac{a-5}{a(a+5)}$; podmínky $a\ne0$, $a\ne3$, $a\ne-5$.

</details>

### `vut-fsi-2014-z2-03` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 3, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Je-li $\dfrac xy=\dfrac{z-1}t$, pak

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 3, 1 b)

- **a)** $t=\dfrac x{(z-1)y}$
- **b)** $t=\dfrac{(z-1)y}x$
- **c)** $t=\dfrac{(z-1)x}y$
- **d)** $t=\dfrac{x(z-1)}y$
- **e)** $t=\dfrac yx$

<details><summary>Ответ и решение</summary>

**b** — $t=\dfrac{(z-1)y}x$. $xt=y(z-1)$.

</details>

### `vut-fsi-2014-z7-04` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 4, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Pro celá kladná čísla $x;y$ platí $x-y=7$. Nejmenší možná hodnota jejich součtu je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 4, 1 b)

- **a)** $12$
- **b)** $15$
- **c)** $9$
- **d)** $8$
- **e)** $10$

<details><summary>Ответ и решение</summary>

**c** — $9$. $y=1$, $x=8$.

</details>

### `vut-fsi-2014-z5-14` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 14, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Na konci roku připisuje banka 10% z uložené částky jako úrok. Z tisícikoruny získáme po dvou letech na úrocích

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 14, 1 b)

- **a)** 100 Kč
- **b)** 200 Kč
- **c)** 121 Kč
- **d)** 210 Kč
- **e)** 400 Kč

<details><summary>Ответ и решение</summary>

**d** — 210 Kč. $1000\cdot1{,}1^2=1210$.

</details>

### `vut-fsi-2014-z1-15` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 15, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Autobus A jezdí po 24 minutách, B po 18 min, C po 10 min. Intervaly mezi společnými odjezdy všech tří linek jsou

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 15, 1 b)

- **a)** $180$ min
- **b)** $240$ min
- **c)** $360$ min
- **d)** $432$ min
- **e)** $510$ min

<details><summary>Ответ и решение</summary>

**c** — $360$ min. $\mathrm{NSN}(24,18,10)=360$.

</details>

### `vut-fsi-2014-z2-15` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 15, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Kolik vody je třeba přidat do 4 litrů 25% roztoku kyseliny, abychom získali roztok desetiprocentní?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 15, 1 b)

- **a)** $2$
- **b)** $3$
- **c)** $4$
- **d)** $5$
- **e)** $6$

<details><summary>Ответ и решение</summary>

**e** — $6$. Kyseliny je $1$ l, roztok musí mít $10$ l.

</details>

### `vut-fsi-2014-z3-15` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 15, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Vlak ujel 70 km za 2 hod. 15 min. Jak dlouho pojede 280 km, předpokládáme-li stejnou rychlost?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 15, 1 b)

- **a)** 540 min
- **b)** 4 hod. 5 min
- **c)** 4 hod. 20 min.
- **d)** 8 hod. 20 min.
- **e)** 5 hod. 10 min.

<details><summary>Ответ и решение</summary>

**a** — 540 min. Čtyřnásobek $135$ min.

</details>

### `vut-fsi-2014-z4-15` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 15, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

V desetilitrové nádobě je 8 litrů vody. Kolik procent objemu nádoby bude tvořit její prázdná část, jestliže z ní vylejeme 6 litrů?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 15, 1 b)

- **a)** $80$
- **b)** $25$
- **c)** $20$
- **d)** $75$
- **e)** $50$

<details><summary>Ответ и решение</summary>

**a** — $80$. Zůstanou $2$ l, prázdných je $8$ l z $10$.

</details>

### `vut-fsi-2014-z5-15` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 15, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Kniha má 126 stran po 40 řádcích. Kolik stran bude mít v novém vydání, bude-li na stránce 36 stejně dlouhých řádků?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 15, 1 b)

- **a)** $120$
- **b)** $136$
- **c)** $140$
- **d)** $160$
- **e)** $180$

<details><summary>Ответ и решение</summary>

**c** — $140$. $\frac{126\cdot40}{36}=140$.

</details>

### `vut-fsi-2014-z6-15` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 15, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Veslař jede po proudu rychlostí $12\ kmh^{-1}$, proti proudu rychlostí $6\ kmh^{-1}$. Jaká je rychlost proudu, předpokládáme-li konstantní výkon veslaře?

- **a)** $1\ kmh^{-1}$
- **b)** $2\ kmh^{-1}$
- **c)** $3\ kmh^{-1}$
- **d)** $6\ kmh^{-1}$
- **e)** $9\ kmh^{-1}$

<details><summary>Ответ и решение</summary>

**c** — $3\ kmh^{-1}$. $v+u=12$, $v-u=6$.

</details>

### `vut-fsi-2014-z2-16` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 16, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

$\dfrac{xy}{x^2-y^2}\cdot\left(\dfrac xy-\dfrac yx\right)=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 16, 2 b)

- **a)** $\dfrac{xy}{x-y}$
- **b)** $\dfrac{x-y}{xy}$
- **c)** $1$
- **d)** $\dfrac xy$
- **e)** $\dfrac yx$

<details><summary>Ответ и решение</summary>

**c** — $1$

</details>

### `vut-fsi-2014-z3-16` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 16, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Je-li $x\neq\pm1$, pak $\left(1+\dfrac1{x-1}\right):\left(1-\dfrac1{x+1}\right)=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 16, 2 b)

- **a)** $0$
- **b)** $1$
- **c)** $\dfrac{x+1}{x-1}$
- **d)** $\dfrac{x-1}{x+1}$
- **e)** $\dfrac{1-x}{x+1}$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{x+1}{x-1}$. $\frac x{x-1}\cdot\frac{x+1}x$.

</details>

### `vut-fsi-2014-z4-16` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 16, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

$\left(1-\dfrac x{x+1}\right):\dfrac{x+1}{x-1}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 16, 2 b)

- **a)** $\dfrac1{x+1}$
- **b)** $\dfrac1{1-x}$
- **c)** $\dfrac{x-1}{x+1}$
- **d)** $\dfrac{x-1}{(x+1)^2}$
- **e)** $-\dfrac1{x+1}$

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{x-1}{(x+1)^2}$. $\frac1{x+1}\cdot\frac{x-1}{x+1}$.

</details>

### `vut-fsi-2014-z5-16` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 16, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

$\dfrac{a^2-b^2}{(a+b)^2}\cdot\dfrac{3a+3b}{4a-4b}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 16, 2 b)

- **a)** $\dfrac{a+b}{a-b}$
- **b)** $\dfrac{a-b}{a+b}$
- **c)** $1$
- **d)** $0$
- **e)** $\dfrac34$

<details><summary>Ответ и решение</summary>

**e** — $\dfrac34$

</details>

### `vut-fsi-2014-z8-16` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 16, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Pro $x\neq\pm y$ je $\dfrac{(x-y)^2}{y^2-x^2}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 16, 2 b)

- **a)** $1$
- **b)** $0$
- **c)** $\dfrac{x-y}{x+y}$
- **d)** $\dfrac{y-x}{y+x}$
- **e)** $\dfrac{y+x}{y-x}$

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{y-x}{y+x}$. $\frac{(y-x)^2}{(y-x)(y+x)}$.

</details>

### `vut-fsi-2014-z9-16` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 16, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

$\dfrac{a^2-b^2}{a^3-b^3}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 16, 2 b)

- **a)** $\dfrac1{a-b}$
- **b)** $\dfrac{a+b}{a^2+b^2}$
- **c)** $\dfrac{a-b}{a^2-b^2}$
- **d)** $\dfrac{a+b}{a^2+ab+b^2}$
- **e)** $\dfrac{a-b}{a^2-ab+b^2}$

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{a+b}{a^2+ab+b^2}$

</details>

### `vut-fsi-2017-z5-15` — [FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 15, 1 bod)](https://vut.cz/pomocne2018/f69785/d158882/p149140)

*Темы:* Ostatní, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Veslař jede po proudu rychlostí $12\ kmh^{-1}$, proti proudu rychlostí $6\ kmh^{-1}$ (vzhledem k břehu). Jaká je rychlost proudu, předpokládáme-li konstantní výkon veslaře?

- **a)** $1\ kmh^{-1}$
- **b)** $2\ kmh^{-1}$
- **c)** $3\ kmh^{-1}$
- **d)** $6\ kmh^{-1}$
- **e)** $9\ kmh^{-1}$

<details><summary>Ответ и решение</summary>

**c** — $3\ kmh^{-1}$. $v+u=12$, $v-u=6$.

</details>

## Уровень 2 — стандартный

### `fel-vzor01-mnoziny` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 13, 2 body)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 1. Množina. Podmnožina · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 1, úloha 15

Jsou dány množiny $A$, $B$, $C$ a $D$ následovně: $A=\{1,2,\dots,1000\}$, $B=\{x\in A:\frac x6\in Z\}$, $C=\{x\in A:\frac x8\in Z\}$, $D=\{x\in A:237\leqq x\leqq356\}$. Kolik prvků obsahuje množina $(B\cap C)\cup D$? (Množina $Z$ je množina celých čísel)

- **a)** $160$
- **b)** $125$
- **c)** $159$
- **d)** $154$
- **e)** $156$

<details><summary>Ответ и решение</summary>

**e** — $156$. Násobků $24$ je $41$, $|D|=120$, společné $240,\dots,336$ — $5$; $41+120-5=156$.

</details>

### `fit-2019-08` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2020 (příklad 8, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* 1. Množina. Podmnožina, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 7, D2 (pool přijímaček); ČVUT lekce 1, úloha 17

Jsou dány dvě množiny $A=\{x^2-4x+5\mid x\in(1;4\rangle\}$ a $B=\{x\mid |x-4|\le\frac12\}$. Sjednocením množin $A$ a $B$ je

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2026, příklad 8 (7 b)

- **a)** $\left(\frac72;\frac92\right)$
- **b)** $\left(\frac92;5\right\rangle$
- **c)** $\left\langle1;\frac72\right)\cup\left(\frac92;5\right\rangle$
- **d)** Žádná z ostatních možností není správná.
- **e)** $\left(2;\frac72\right)\cup\left(\frac92;5\right\rangle$

<details><summary>Ответ и решение</summary>

**d** — Žádná z ostatních možností není správná.. $(x-2)^2+1$ nabývá na $(1;4\rangle$ hodnot $\langle1;5\rangle$; $B=\langle\frac72;\frac92\rangle\subset A$, sjednocení je $\langle1;5\rangle$.

</details>

### `tul-2021-05` — [FP TUL, přijímací test z matematiky 2021/22 (Matematika, Bc.) (úloha 5, 20 bodů)](https://www.fp.tul.cz/images/fakulta/ukazky_testu/2021/KAP_Ma_Bc_jednoobor_2021.pdf)

*Темы:* 2. Mocnina. Odmocnina, 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Uvažujte výraz $\left(\left(2^{4(\log_216)^2}\right)^{\left(2^{-2}-2^{-3}\right)^{-1}}\right)^{\frac1{2^5}}$, kde $\log_2x$ označuje logaritmus $x$ o základu 2. Zadaný výraz upravte do tvaru $2^a$, kde $a$ je konkrétní reálné číslo (neobsahuje funkci logaritmus, mocninu ani žádnou aritmetickou operaci).

<details><summary>Ответ и решение</summary>

$2^{16}$. $\log_216=4$, exponent $4\cdot16=64$; $\left(\frac14-\frac18\right)^{-1}=8$; $\frac{64\cdot8}{32}=16$.

</details>

### `vut-fsi-2014-z8-02` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 2, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

Usměrněte zlomek $\dfrac{4\sqrt5+5\sqrt4}{4\sqrt5-5\sqrt4}$:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 2, 1 b)

- **a)** $9-4\sqrt5$
- **b)** $-9+4\sqrt5$
- **c)** $-9-4\sqrt5$
- **d)** $-9-16\sqrt5$
- **e)** $18-4\sqrt5$

<details><summary>Ответ и решение</summary>

**c** — $-9-4\sqrt5$. $\frac{(4\sqrt5+10)^2}{80-100}=\frac{180+80\sqrt5}{-20}$.

</details>

### `vut-fsi-2014-z1-16` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 16, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina, Ostatní · *Текст:* текст оригинала (по курсу)

$\dfrac{\sqrt{\frac ab+\frac ba+2}}{\sqrt{\frac ab+\frac ba-2}}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 16, 2 b)

- **a)** $\dfrac{a+b}{a-b}$
- **b)** $\left|\dfrac{a+b}{a-b}\right|$
- **c)** $\dfrac{a-b}{a+b}$
- **d)** $\dfrac{ab}{a^2-b^2}$
- **e)** $\left|\dfrac{ab}{a^2-b^2}\right|$

<details><summary>Ответ и решение</summary>

**b** — $\left|\dfrac{a+b}{a-b}\right|$. $\frac ab+\frac ba\pm2=\frac{(a\pm b)^2}{ab}$.

</details>

### `vut-fsi-2014-z10-16` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 16, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу)

$\sqrt[3]{\dfrac a{\sqrt{b^3}}}\sqrt{\dfrac b{\sqrt[3]a}}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 16, 2 b)

- **a)** $a^6$
- **b)** $\sqrt[6]a$
- **c)** $a^{-6}$
- **d)** $\sqrt[6]b$
- **e)** $b^6$

<details><summary>Ответ и решение</summary>

**b** — $\sqrt[6]a$. $a^{\frac13}b^{-\frac12}\cdot b^{\frac12}a^{-\frac16}=a^{\frac16}$.

</details>

### `fbmi-2021-19` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 19)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

V oboru reálných čísel řešte rovnici: $\dfrac{x+2}{x+3}-\dfrac{2-x}{3-x}=\dfrac{6}{x^2-9}$

- **a)** $x=-3$
- **b)** $x=-7$
- **c)** $x=11$
- **d)** Rovnice nemá v oboru reálných čísel řešení

<details><summary>Ответ и решение</summary>

**d** — Rovnice nemá v oboru reálných čísel řešení. Po vynásobení $x^2-9$: $-2x=6$, $x=-3$ — nepatří do definičního oboru.

</details>

### `fbmi-2021-20` — [FBMI ČVUT, vzorové testové příklady Bc 2020/21 (úloha 20)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

V oboru reálných čísel řešte rovnici: $2+\dfrac{x+6}{x+3}=3+\dfrac{3}{x+3}$

- **a)** $x=3$
- **b)** Řešení je nekonečně mnoho a řešením jsou všechna reálná čísla.
- **c)** Řešení je nekonečně mnoho, $x\in R-\{-3\}$.
- **d)** Rovnice nemá v oboru reálných čísel řešení.

<details><summary>Ответ и решение</summary>

**c** — Řešení je nekonečně mnoho, $x\in R-\{-3\}$.. $\frac{x+6-3}{x+3}=1$ platí pro každé $x\ne-3$.

</details>

### `vut-fekt-2022-v1-05` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 5, 2 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic), Ostatní · *Текст:* текст оригинала (по курсу)

Rovnost $\frac{2}{1-x}=2-\frac2x$ platí právě pro

- **a)** každé $x\in\mathbb{R}$
- **b)** $x\in\mathbb{R},x\notin\{0,1\}$
- **c)** $x>0$
- **d)** $x\in\{0,1\}$
- **e)** neplatí pro žádné $x\in\mathbb{R}$

<details><summary>Ответ и решение</summary>

**e** — neplatí pro žádné $x\in\mathbb{R}$. Pravá strana je $\frac{2(x-1)}x$; $\frac2{1-x}=\frac{2(x-1)}x\Rightarrow x=-(x-1)^2\Rightarrow x^2-x+1=0$, $D<0$.

</details>

### `vut-fekt-2022-v2-05` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 5, 2 body)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic), Ostatní · *Текст:* текст оригинала (по курсу)

Rovnost $\frac{3}{x+1}=\frac3x+3$ platí právě pro

- **a)** každé $x\in\mathbb{R}$
- **b)** $x\in\mathbb{R},x\notin\{-1,0\}$
- **c)** $x>0$
- **d)** $x\in\{-1,0\}$
- **e)** neplatí pro žádné $x\in\mathbb{R}$

<details><summary>Ответ и решение</summary>

**e** — neplatí pro žádné $x\in\mathbb{R}$. $3x=3(x+1)+3x(x+1)\Rightarrow x^2+x+1=0$, $D<0$.

</details>

### `fit-2014-1-05` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 5, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Pro zlomek v základním tvaru platí následující. Jmenovatel zlomku je dvojnásobek čitatele zmenšený o jedna. Hodnota zlomku se nezmění, pokud k čitateli přičteme dvě a k jmenovateli přičteme tři. Rozhodněte, které tvrzení je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3, příklad 5, 3 b; FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4, příklad 5, 3 b

- **a)** Takový zlomek neexistuje.
- **b)** Součin čitatele a jmenovatele je 6.
- **c)** Existují dva různé zlomky vyhovující podmínkám.
- **d)** Součet čitatele a jmenovatele je 6.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Součin čitatele a jmenovatele je 6.. $b=2a-1$, $\frac{a+2}{b+3}=\frac ab\Rightarrow2b=3a$, tedy $a=2$, $b=3$.

</details>

### `fit-2014-2-05` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 5, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Pro zlomek v základním tvaru platí následující. Jmenovatel zlomku je dvojnásobek čitatele zmenšený o jedna. Hodnota zlomku se nezmění, pokud k čitateli přičteme dvě a k jmenovateli přičteme tři. Rozhodněte, které tvrzení je pravdivé.

- **a)** Takový zlomek neexistuje.
- **b)** Součin čitatele a jmenovatele je 24.
- **c)** Existují dva různé zlomky vyhovující podmínkám.
- **d)** Součet čitatele a jmenovatele je 6.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. $b=2a-1$, $2b=3a$: zlomek $\frac23$, součin $6$, součet $5$.

</details>

### `fit-2014-1-08` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 8, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Pro řešení rovnice $2x^8+6x^5-36x^2=0$ platí

- **a)** Rovnice má pouze nezáporná řešení.
- **b)** Součet všech řešení je $3$.
- **c)** Všechna reálná řešení rovnice leží v intervalu $\langle-4,2\rangle$.
- **d)** Rovnice nemá řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Všechna reálná řešení rovnice leží v intervalu $\langle-4,2\rangle$.. $2x^2(x^3+6)(x^3-3)=0$: $x\in\{0,-\sqrt[3]6,\sqrt[3]3\}$.

</details>

### `fit-2014-2-08` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 8, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Pro řešení rovnice $2x^8-10x^5+12x^2=0$ platí

- **a)** Rovnice má pouze záporná řešení.
- **b)** Součin všech řešení je $6$.
- **c)** Všechna reálná řešení rovnice leží v intervalu $\langle-2,2\rangle$.
- **d)** Rovnice nemá řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Všechna reálná řešení rovnice leží v intervalu $\langle-2,2\rangle$.. $2x^2(x^3-2)(x^3-3)=0$: $x\in\{0,\sqrt[3]2,\sqrt[3]3\}$.

</details>

### `fit-2014-3-08` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 8, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Pro řešení rovnice $3x^9+12x^6-63x^3=0$ platí

- **a)** Rovnice má pouze nezáporná řešení.
- **b)** Součin všech řešení je $-21$.
- **c)** Rovnice nemá řešení.
- **d)** Všechna reálná řešení rovnice leží v intervalu $\langle-3,4\rangle$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Všechna reálná řešení rovnice leží v intervalu $\langle-3,4\rangle$.. $3x^3(x^3+7)(x^3-3)=0$: $x\in\{0,-\sqrt[3]7,\sqrt[3]3\}$.

</details>

### `fit-2014-4-08` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 8, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Pro řešení rovnice $2x^7+4x^4-16x=0$ platí

- **a)** Rovnice má pouze nezáporná řešení.
- **b)** Součet všech řešení je $3$.
- **c)** Rovnice nemá řešení.
- **d)** Všechna reálná řešení rovnice leží v intervalu $\langle-2,3\rangle$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Všechna reálná řešení rovnice leží v intervalu $\langle-2,3\rangle$.. $2x(x^3+4)(x^3-2)=0$: $x\in\{0,-\sqrt[3]4,\sqrt[3]2\}$.

</details>

### `fit-2015-16` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 16, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Nalezněte řešení rovnice $8x^4+4x^3+2x^2+x=0$ a rozhodněte, které tvrzení je pravdivé.

- **a)** Rovnice má jediné reálné řešení.
- **b)** Rovnice nemá řešení.
- **c)** Reálná řešení rovnice jsou celočíselná.
- **d)** Rovnice má dvě různá reálná řešení.
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Rovnice má dvě různá reálná řešení.. $x(2x+1)(4x^2+1)=0$: $x=0$, $x=-\frac12$.

</details>

### `fit-2016-02` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 2, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Binární operace $\star$ je definovaná jako $a\star b=\frac{a+b}{b}$. Určete hodnotu neznámé $x$ tak, aby $(2\star x)\star3=-1\,.$

- **a)** Rovnice má záporné řešení menší než $-5$.
- **b)** Rovnice má jedno záporné řešení.
- **c)** Rovnice nemá řešení.
- **d)** Rovnice má dvě řešení a jejich součin je 4.
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Rovnice má jedno záporné řešení.. $u=2\star x$: $\frac{u+3}{3}=-1\Rightarrow u=-6$; $\frac{2+x}{x}=-6\Rightarrow x=-\frac27$.

</details>

### `fit-2016-12` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 12, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Pytle s bramborami byly do skladu přivezeny ve třech etapách. V první etapě bylo přivezeno $15\%$ celkového počtu pytlů. Průměrná hmotnost jednoho pytle v první etapě byla 51 kg. Průměrná hmotnost pytle v druhé etapě byla 55 kg a ve třetí etapě 48 kg. Celková průměrná hmotnost pytle brambor v tomto skladu je $50{,}55$ kg. Určete kolik procent z celkového počtu pytlů bylo přivezeno ve druhé etapě.

- **a)** Úloha má více než jedno řešení.
- **b)** $55\%$
- **c)** Úloha nemá řešení.
- **d)** $30\%$
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**d** — $30\%$. $0{,}15\cdot51+55p+48(0{,}85-p)=50{,}55\Rightarrow p=0{,}3$.

</details>

### `fit-2016-15` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 15, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Určete hodnotu parametrů $a$, $b$, $c$ tak, aby rovnost $(2a-3x)(bx+3)=9x^2+2cx+2$ platila pro každé reálné číslo $x$, a rozhodněte, které tvrzení je pravdivé.

- **a)** Existuje více trojic parametrů splňujících podmínky.
- **b)** Součin všech parametrů je $\frac{11}{2}$.
- **c)** $a=3$, $b=-3$, $c=\frac{11}{2}$.
- **d)** Takové parametry neexistují.
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Součin všech parametrů je $\frac{11}{2}$.. $-3b=9$, $6a=2$, $2ab-9=2c$: $a=\frac13$, $b=-3$, $c=-\frac{11}{2}$, součin $\frac{11}{2}$.

</details>

### `fit-2016-20` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 20, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Nalezněte řešení rovnice $2x^5-x^3+2x^2=1$ a rozhodněte, které tvrzení je pravdivé.

- **a)** Rovnice má právě dvě různá reálná řešení.
- **b)** Žádná z ostatních možností není správná.
- **c)** Rovnice má tři různá reálná řešení.
- **d)** Rovnice nemá řešení.
- **e)** Součin reálných řešení rovnice je $\frac14$.

<details><summary>Ответ и решение</summary>

**c** — Rovnice má tři různá reálná řešení.. $(2x^2-1)(x^3+1)=0$: $x=\pm\frac{1}{\sqrt2}$, $x=-1$.

</details>

### `fit-2018-05` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2019 (příklad 5, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2018.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Na dvoře jsou psi a slepice. Dohromady mají 50 hlav. Kdyby byla psů třetina a slepic bylo o 3 více, měli by dohromady 86 nohou. Rozhodněte, které tvrzení je pravdivé.

- **a)** Úloha má nekonečně mnoho řešení.
- **b)** Žádná z ostatních možností není správná.
- **c)** Slepic je třikrát větší počet než psů.
- **d)** Kdyby psů bylo stejně a slepic dvojnásobný počet, měli by 120 nohou.
- **e)** Úloha nemá řešení.

<details><summary>Ответ и решение</summary>

**b** — Žádná z ostatních možností není správná.. $p+s=50$, $4\cdot\frac p3+2(s+3)=86\Rightarrow p=30$, $s=20$; žádné z tvrzení (a), (c)–(e) neplatí.

</details>

### `fit-2019-02` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2020 (příklad 2, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D7

Binární operace $\star$ je definovaná jako $a\star b=\frac{a+b}{a-b}$. Určete hodnotu neznámé $x$ tak, aby $(2\star x)\star3=3\,.$

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2021, příklad 1 (3 b)

- **a)** Rovnice má jedno záporné řešení.
- **b)** Rovnice má kladné řešení větší než 2.
- **c)** Žádná z ostatních možností není správná.
- **d)** Rovnice nemá řešení.
- **e)** Rovnice má dvě řešení a jejich součin je 4.

<details><summary>Ответ и решение</summary>

**c** — Žádná z ostatních možností není správná.. $u=2\star x$: $\frac{u+3}{u-3}=3\Rightarrow u=6$; $\frac{2+x}{2-x}=6\Rightarrow x=\frac{10}{7}$ — kladné, ale menší než 2.

</details>

### `fit-2019-10` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2020 (příklad 10, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D10

Za nákup $1{,}5$ kg mandarinek a $3{,}5$ kg pomerančů jsme zaplatili celkem 185 korun. Kilo pomerančů stojí o třetinu více než kilo mandarinek. Rozhodněte, které tvrzení je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2021, příklad 8 (7 b)

- **a)** Za kilo pomerančů a půl kila mandarinek bychom zaplatili 50 korun.
- **b)** Za kilo mandarinek a půl kila pomerančů bychom zaplatili 50 korun.
- **c)** Pomeranče stojí o 15 korun na kilo více než mandarinky.
- **d)** Dvě kila mandarinek stojí stejně jako kilo a čtvrt pomerančů.
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Za kilo mandarinek a půl kila pomerančů bychom zaplatili 50 korun.. $1{,}5m+3{,}5\cdot\frac43m=185\Rightarrow m=30$, $p=40$; $30+20=50$.

</details>

### `fit-2021-01` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2022 (příklad 1, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D8

Binární operace $\star$ je definovaná jako $a\star b=\frac{a+b}{a-b}$. Určete hodnotu neznámé $x$ tak, aby $(2\star x)\star3=-2\,.$

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2018, příklad 1 (3 b)

- **a)** Rovnice má jedno záporné řešení.
- **b)** Žádná z ostatních možností není správná.
- **c)** Rovnice má kladné řešení větší než 2.
- **d)** Rovnice má dvě řešení a jejich součin je 4.
- **e)** Rovnice nemá řešení.

<details><summary>Ответ и решение</summary>

**b** — Žádná z ostatních možností není správná.. $u=2\star x$: $\frac{u+3}{u-3}=-2\Rightarrow u=1$; $\frac{2+x}{2-x}=1\Rightarrow x=0$.

</details>

### `fit-2021-14` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2022 (příklad 14, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Nalezněte řešení rovnice $2x^5-x^3+2x^2=1$ a rozhodněte, které tvrzení je pravdivé.

- **a)** Součin všech reálných řešení rovnice je $\frac14$.
- **b)** Rovnice nemá řešení.
- **c)** Rovnice má tři různá reálná řešení.
- **d)** Rovnice má právě dvě různá reálná řešení.
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Rovnice má tři různá reálná řešení.. $(2x^2-1)(x^3+1)=0$: $x=\pm\frac{1}{\sqrt2}$, $x=-1$.

</details>

### `fit-2022-07` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 7, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D12

Pytle s bramborami byly do skladu přivezeny ve třech etapách. V první etapě bylo přivezeno $15\%$ celkového počtu pytlů. Průměrná hmotnost jednoho pytle v první etapě byla 51 kg. Průměrná hmotnost pytle v druhé etapě byla 55 kg a ve třetí etapě 48 kg. Celková průměrná hmotnost pytle brambor v tomto skladu je $50{,}55$ kg. Určete, kolik procent z celkového počtu pytlů bylo přivezeno ve druhé etapě.

- **a)** Žádná z ostatních možností není správná.
- **b)** Úloha má více než jedno řešení.
- **c)** $55\%$
- **d)** $30\%$
- **e)** Úloha nemá řešení.

<details><summary>Ответ и решение</summary>

**d** — $30\%$. $0{,}15\cdot51+55p+48(0{,}85-p)=50{,}55\Rightarrow p=0{,}3$.

</details>

### `fit-2025-08` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2025 (příklad 8, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2025-s-resenim.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Student měl spočítat 70 úloh. Kdyby denně vyřešil o 2 úlohy více, skončil by o 4 dny dříve. Rozhodněte, které tvrzení je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2024, příklad 12 (7 b)

- **a)** Kdyby počítal denně o 3 úlohy více, skončil by o 6 dní dříve.
- **b)** Kdyby počítal denně o 3 úlohy méně, skončil by o 5 dní později.
- **c)** Kdyby počítal denně o 5 úloh více, skončil by o 7 dní dříve.
- **d)** Kdyby počítal denně o 2 úlohy méně, skončil by o 6 dní později.
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Kdyby počítal denně o 5 úloh více, skončil by o 7 dní dříve.. $\frac{70}{k}-\frac{70}{k+2}=4\Rightarrow k^2+2k-35=0$, $k=5$ úloh denně po $14$ dní; při $10$ úlohách denně $7$ dní.

</details>

### `fit-2026-16` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2026 (příklad 16, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 3, úloha 18; DÚ 2, D12

Rozhodněte, které tvrzení o řešeních rovnice $(x^2-x+3)^2-8(x^2-x)=9$ je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2024, příklad 15 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2025, příklad 11 (7 b)

- **a)** Rovnice nemá řešení.
- **b)** Součin všech reálných řešení je $-2$.
- **c)** Všechna reálná řešení rovnice leží v intervalu $\langle-1,3\rangle$.
- **d)** Žádná z ostatních možností není správná.
- **e)** Rovnice má pouze nezáporná řešení.

<details><summary>Ответ и решение</summary>

**c** — Všechna reálná řešení rovnice leží v intervalu $\langle-1,3\rangle$.. $t=x^2-x$: $t^2-2t=0$; řešení $x\in\{-1,0,1,2\}$.

</details>

### `fjfi-v1-03` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 1 (příklad 3, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Vyřešte v $\mathbb{R}$ rovnici $\dfrac{4x-1}{x-2}+2=1-\dfrac{5x-3}{2-x}$

- **a)** $x=0$
- **b)** $x=1$
- **c)** $x=2$
- **d)** $x\in\mathbb{R}\setminus\{2\}$
- **e)** Nemá řešení

<details><summary>Ответ и решение</summary>

**d** — $x\in\mathbb{R}\setminus\{2\}$. Levá strana je $\frac{6x-5}{x-2}$, pravá $1+\frac{5x-3}{x-2}=\frac{6x-5}{x-2}$ — rovnost platí pro každé $x\ne2$.

</details>

### `fjfi-v2-03` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 2 (příklad 3, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic), Ostatní · *Текст:* текст оригинала (по курсу)

Vyřešte v $\mathbb{R}$ rovnici $\dfrac{\frac x4-\frac1{2x}}{\frac{2x+1}2-\frac1x}=\dfrac14$

- **a)** $x=1$
- **b)** $x=-1$
- **c)** $x=2$
- **d)** $x=-2$
- **e)** Nemá řešení

<details><summary>Ответ и решение</summary>

**d** — $x=-2$. Zlomek je $\frac{x^2-2}{2(2x^2+x-2)}$; $4(x^2-2)=2(2x^2+x-2)\Rightarrow x=-2$ (jmenovatelé jsou nenulové).

</details>

### `vut-fsi-2014-z4-17` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 17, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic), Ostatní · *Текст:* текст оригинала (по курсу)

Všechna řešení rovnice $\dfrac{x+\sqrt3}x-\dfrac{2x}{x+\sqrt3}=2$ lze zapsat ve tvaru

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 17, 2 b)

- **a)** $x\in\{0;\sqrt3\}$
- **b)** $x\in(0;\sqrt3)$
- **c)** $x\in(-1;1)$
- **d)** $x\in\{-1;1\}$
- **e)** $x=1$

<details><summary>Ответ и решение</summary>

**d** — $x\in\{-1;1\}$. $(x+\sqrt3)^2-2x^2=2x(x+\sqrt3)\Rightarrow3x^2=3$.

</details>

### `fit-2014-1-19` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 19, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу)

Určete všechny hodnoty reálného parametru $p$, pro které má rovnice 2 různé reálné kořeny. $x(x+p)+p=-3(3+2x)$

- **a)** Takové $p$ neexistuje.
- **b)** $p<0$.
- **c)** $p>8$.
- **d)** Všechna reálná čísla.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. $x^2+(p+6)x+p+9=0$, $D=p^2+8p>0\iff p<-8\vee p>0$.

</details>

### `fit-2014-2-19` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 19, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу)

Určete všechny hodnoty reálného parametru $p$, pro které rovnice nemá reálné kořeny. $x(x+p)+p=-3(3+2x)$

- **a)** Takové $p$ neexistuje.
- **b)** $p\in(-8,0)$.
- **c)** $p>8$.
- **d)** $p<0$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — $p\in(-8,0)$.. $x^2+(p+6)x+p+9=0$, $D=p^2+8p<0$.

</details>

### `fit-2014-3-19` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 19, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу)

Určete všechny hodnoty reálného parametru $p$, pro které má rovnice 1 reálný kořen. $x(x+p)+p=-3(3+2x)$

- **a)** Existují dvě taková $p$ a jejich součet je $-8$.
- **b)** $p<0$.
- **c)** $p=8$.
- **d)** Všechna reálná čísla.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**a** — Existují dvě taková $p$ a jejich součet je $-8$.. $D=p^2+8p=0$ pro $p=0$ a $p=-8$.

</details>

### `fit-2014-4-19` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 19, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу)

Určete všechny hodnoty reálného parametru $p$, pro které má rovnice alespoň jeden reálný kořen. $x(x+p)+p=-3(3+2x)$

- **a)** Takové $p$ neexistuje.
- **b)** $p\le0$.
- **c)** $p>8$.
- **d)** $p\in\langle0,8\rangle$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. $D=p^2+8p\ge0\iff p\le-8\vee p\ge0$.

</details>

### `fit-2023-15` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 15, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 4. Rovnice s parametrem, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 3, úloha 19

Určete hodnoty reálného parametru $p$ tak, aby v rovnici $3x^2-24x+p=0$ byl jeden kořen trojnásobkem druhého kořene, a rozhodněte, které tvrzení je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2016, příklad 17 (3 b)

- **a)** Žádná z ostatních možností není správná.
- **b)** Takový parametr $p$ neexistuje.
- **c)** $p=12$.
- **d)** $p=108$.
- **e)** Takových $p$ je nekonečně mnoho.

<details><summary>Ответ и решение</summary>

**a** — Žádná z ostatních možností není správná.. $x_1=3x_2$, $x_1+x_2=8$: kořeny $6$ a $2$, $\frac p3=12$, $p=36$.

</details>

### `vut-fsi-2014-z1-17` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 17, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу)

Rovnice $x^2+3\sqrt n\,x+n+1=0$ má jeden dvojnásobný kořen pro

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 17, 2 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 17, 2 b); FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 17, 2 b)

- **a)** $n=1$
- **b)** $n=0$
- **c)** $n=0{,}8$
- **d)** $n=-1$
- **e)** $n\ge0$

<details><summary>Ответ и решение</summary>

**c** — $n=0{,}8$. $D=9n-4(n+1)=5n-4=0$.

</details>

### `vut-fsi-2014-z9-17` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 17, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу)

Rovnice $(m+1)x^2-2mx+(m-1)=0$ s neznámou $x$ má dvojnásobný kořen pro

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 17, 2 b)

- **a)** $m=0$
- **b)** $m=1$
- **c)** $m=-1$
- **d)** $m=\pm1$
- **e)** nemá dvojnásobný kořen

<details><summary>Ответ и решение</summary>

**e** — nemá dvojnásobný kořen. $D=4m^2-4(m^2-1)=4>0$; pro $m=-1$ je rovnice lineární.

</details>

### `vut-fekt-2024-v1-05` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 5, 2 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Pro která $x$ platí $|2-x|=2-|x|$?

- **a)** pro všechna $x\in\mathbf{R}$
- **b)** pro žádné $x\in\mathbf{R}$
- **c)** pro $x\in(-\infty,0\rangle$
- **d)** pro $x\in\langle0,2\rangle$
- **e)** pro $x\in\langle2,\infty)$

<details><summary>Ответ и решение</summary>

**d** — pro $x\in\langle0,2\rangle$. $|2-x|+|x|=2$ platí, právě když $x$ leží mezi $0$ a $2$.

</details>

### `vut-fekt-2024-v2-05` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 5, 2 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Pro která $x$ platí $|x-3|=|x|-3$?

- **a)** pro všechna $x\in\mathbf{R}$
- **b)** pro žádné $x\in\mathbf{R}$
- **c)** pro $x\in(-\infty,0\rangle$
- **d)** pro $x\in\langle0,3\rangle$
- **e)** pro $x\in\langle3,\infty)$

<details><summary>Ответ и решение</summary>

**e** — pro $x\in\langle3,\infty)$. $|x|=|x-3|+3$ platí, právě když $x\ge3$.

</details>

### `fit-2014-1-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Nalezněte řešení rovnice a rozhodněte, které tvrzení je pravdivé. $|2x+1|-|3-x|=x$

- **a)** Rovnice má 3 různá řešení.
- **b)** Rovnice má 2 různá řešení.
- **c)** Rovnice má jediné řešení.
- **d)** Rovnice nemá řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Rovnice má 2 různá řešení.. Pro $x<-\frac12$: $-x-4=x$, $x=-2$; na $\langle-\frac12,3)$: $3x-2=x$, $x=1$; pro $x\ge3$ řešení není.

</details>

### `fit-2014-2-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Nalezněte řešení rovnice a rozhodněte, které tvrzení je pravdivé. $|x-3|-|1-2x|=x$

- **a)** Rovnice má 3 různá řešení.
- **b)** Rovnice má 2 různá řešení.
- **c)** Rovnice má jediné řešení.
- **d)** Rovnice nemá řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Rovnice má jediné řešení.. Pro $x<\frac12$: $2+x=x$ — nic; na $\langle\frac12,3)$: $4-3x=x$, $x=1$; pro $x\ge3$: $-x-2=x$ — nic.

</details>

### `fit-2014-3-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Nalezněte řešení rovnice a rozhodněte, které tvrzení je pravdivé. $|2x+1|-|3-x|=2x$

- **a)** Rovnice má 3 různá řešení.
- **b)** Rovnice má 2 různá řešení.
- **c)** Rovnice má jediné řešení.
- **d)** Rovnice nemá řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**a** — Rovnice má 3 různá řešení.. Kořeny $-\frac43$, $2$ a $4$ — v každém intervalu jeden.

</details>

### `fit-2014-4-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Nalezněte řešení rovnice a rozhodněte, které tvrzení je pravdivé. $|2x+1|-|3-x|=3x$

- **a)** Rovnice má 3 různá řešení.
- **b)** Rovnice má 2 různá řešení.
- **c)** Rovnice nemá řešení.
- **d)** Rovnice má jediné řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Rovnice má jediné řešení.. Pro $x<-\frac12$: $-x-4=3x$, $x=-1$; jinde řešení není.

</details>

### `fit-2022-06` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 6, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 5, úloha 17

Nalezněte řešení rovnice a rozhodněte, které tvrzení je pravdivé. $|2x-1|-|2-3x|=-x$

- **a)** Žádná z ostatních možností není správná.
- **b)** Rovnice má právě 2 různá řešení.
- **c)** Rovnice má právě 3 různá řešení.
- **d)** Rovnice nemá řešení.
- **e)** Rovnice má právě 1 řešení.

<details><summary>Ответ и решение</summary>

**e** — Rovnice má právě 1 řešení.. Nulové body $\frac12,\frac23$; vyhovuje jen $x=\frac12$.

</details>

### `fit-2027-11` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2027 (příklad 11, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2027-s-resenim.pdf)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Nalezněte řešení rovnice a rozhodněte, které tvrzení je pravdivé. $|2x-1|-|2-3x|=5$

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2017, příklad 5 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2018, příklad 8 (7 b)

- **a)** Žádná z ostatních možností není správná.
- **b)** Rovnice nemá řešení.
- **c)** Rovnice má právě 1 řešení.
- **d)** Rovnice má právě 2 různá řešení.
- **e)** Rovnice má právě 3 různá řešení.

<details><summary>Ответ и решение</summary>

**b** — Rovnice nemá řešení.. Na intervalech $x<\frac12$, $\langle\frac12,\frac23)$, $x\ge\frac23$ vychází $x=6$, $x=\frac85$, $x=-4$ — žádné neleží ve svém intervalu.

</details>

### `fit-2014-1-04` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 4, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete počet všech lichých čísel, která vyhovují nerovnici $x^2-53x+150\ge0\,.$

- **a)** $47$
- **b)** $48$
- **c)** Žádné.
- **d)** Nekonečně mnoho.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Nekonečně mnoho.. Řešením je $(-\infty,3\rangle\cup\langle50,\infty)$ — lichých čísel nekonečně mnoho.

</details>

### `fit-2014-2-04` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 4, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete počet všech lichých čísel, která vyhovují nerovnici $x^2-87x+230\ge0\,.$

- **a)** $72$
- **b)** $73$
- **c)** Nekonečně mnoho.
- **d)** Žádné.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Nekonečně mnoho.. Řešením je $(-\infty,x_1\rangle\cup\langle x_2,\infty)$ — lichých čísel nekonečně mnoho.

</details>

### `fit-2014-3-04` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 4, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete počet všech lichých čísel, která vyhovují nerovnici $x^2-27x+320\ge0\,.$

- **a)** Nekonečně mnoho.
- **b)** Žádné.
- **c)** $48$
- **d)** $47$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**a** — Nekonečně mnoho.. $D<0$, nerovnost platí pro všechna $x$.

</details>

### `fit-2014-4-04` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 4, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete počet všech lichých čísel, která vyhovují nerovnici $x^2-35x+510\ge0\,.$

- **a)** $58$
- **b)** $59$
- **c)** Žádné.
- **d)** Nekonečně mnoho.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Nekonečně mnoho.. $D<0$, nerovnost platí pro všechna $x$.

</details>

### `fit-2018-11` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2019 (příklad 11, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2018.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 9, D3 (pool přijímaček)

Určete počet všech sudých čísel, která vyhovují nerovnici $x^2-53x+150\le0\,.$

- **a)** $24$
- **b)** Nekonečně mnoho.
- **c)** Žádná z ostatních možností není správná.
- **d)** $25$
- **e)** $48$

<details><summary>Ответ и решение</summary>

**a** — $24$. Kořeny $3$ a $50$; sudá čísla $4,6,\dots,50$.

</details>

### `fit-2027-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2027 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2027-s-resenim.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete počet všech sudých čísel, která vyhovují nerovnici $\dfrac12x^2-53x+150\le0\,.$

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2018, příklad 9 (7 b)

- **a)** $48$
- **b)** Nekonečně mnoho.
- **c)** Žádné.
- **d)** $47$
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních možností není správná.. $x^2-106x+300\le0$, kořeny $53\pm\sqrt{2509}\approx2{,}9$ a $103{,}1$; sudá čísla $4,6,\dots,102$ — celkem $50$.

</details>

### `vut-fsi-2014-z8-17` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 17, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Nerovnice $\dfrac1{2x}-\dfrac13>\dfrac16+\dfrac1x$ má řešení

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 17, 2 b)

- **a)** $x<1$
- **b)** $x<-1$
- **c)** $x>-1$
- **d)** $x\in(-1;0)$
- **e)** $x\in(0;1)$

<details><summary>Ответ и решение</summary>

**d** — $x\in(-1;0)$. $-\frac1{2x}>\frac12\iff\frac1x<-1$.

</details>

### `vscht-06` — [VŠCHT, ukázka vzorového testu z matematiky (bakalářské studium) (úloha 6, 2 body)](https://studuj.vscht.cz/wp-content/uploads/2021/02/BC-ekonomove-matematika-prijimaci-zkouska-vzorovy-test.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic, 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Množina všech reálných čísel, pro která platí $(x^2-3x)\cdot\log(x^2+9)<0$, je rovna množině

- **a)** $(-\infty,3)$
- **b)** $(-\infty,9)$
- **c)** $(0,3)$
- **d)** $(-3,9)$

<details><summary>Ответ и решение</summary>

**c** — $(0,3)$. $\log(x^2+9)\ge\log9>0$, stačí $x^2-3x<0$.

</details>

### `fel-vzor01-11` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 11, 2 body)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 7, úloha 18

Množinou všech řešení nerovnice $|x+5|\geqq4+|3-2x|$ s neznámou $x\in\mathbb{R}$ je

- **a)** $(-\infty,8)$
- **b)** $\langle-5,8\rangle$
- **c)** $(-\infty,\infty)$
- **d)** $\emptyset$
- **e)** $\langle\frac23,4\rangle$

<details><summary>Ответ и решение</summary>

**e** — $\langle\frac23,4\rangle$. Nulové body $-5$, $\frac32$: pro $x<-5$ nic, na $\langle-5,\frac32\rangle$ $x\ge\frac23$, pro $x>\frac32$ $x\le4$.

</details>

### `fit-2015-11` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 11, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 7. Nerovnice s absolutní hodnotou, 6. Nerovnice. Soustava nerovnic, 1. Množina. Podmnožina · *Текст:* текст оригинала (по курсу)

Jsou dány dvě množiny $A=\{x\mid x^2+4x-2>0\}$ a $B=\{x\mid |x+1|\le3\}$. Sjednocením množin $A$ a $B$ je

- **a)** $(-\infty,-2-\sqrt6)\cup\langle-4,\infty)$
- **b)** Všechna reálná čísla.
- **c)** Žádná z ostatních možností není správná.
- **d)** $(-2+\sqrt6,2\rangle$
- **e)** $(-2-\sqrt6,-4)$

<details><summary>Ответ и решение</summary>

**a** — $(-\infty,-2-\sqrt6)\cup\langle-4,\infty)$. $A=(-\infty,-2-\sqrt6)\cup(-2+\sqrt6,\infty)$, $B=\langle-4,2\rangle$; mezera $\langle-2-\sqrt6,-4)$ zůstane.

</details>

### `fit-2021-11` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2022 (příklad 11, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 7. Nerovnice s absolutní hodnotou, 6. Nerovnice. Soustava nerovnic, 1. Množina. Podmnožina · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 7, úloha 17

Jsou dány dvě množiny $A=\{x\mid x^2+4x-2>0\}$ a $B=\{x\mid |x+1|\le3\}$. Rozdílem množin $A$ mínus $B$ je

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2019, příklad 7 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2021, příklad 6 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2024, příklad 10 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2025, příklad 6 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2027, příklad 5 (7 b)

- **a)** $(-2+\sqrt6,2\rangle$
- **b)** $\langle-4,-2+\sqrt6)$
- **c)** Žádná z ostatních možností není správná.
- **d)** $(-\infty,-2-\sqrt6)\cup(2,\infty)$
- **e)** $(-2-\sqrt6,4\rangle$

<details><summary>Ответ и решение</summary>

**d** — $(-\infty,-2-\sqrt6)\cup(2,\infty)$. $A=(-\infty,-2-\sqrt6)\cup(-2+\sqrt6,\infty)$, $B=\langle-4,2\rangle$.

</details>

### `fjfi-v1-04` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 1 (příklad 4, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Řešte v $\mathbb{R}$ nerovnici: $|x|-|x-5|\ge4(x-3)$

- **a)** $x\in(-\infty,0)$
- **b)** $x\in(-\infty,\frac72\rangle$
- **c)** $x\in\langle0,\frac72\rangle$
- **d)** $x\in\langle\frac72,+\infty)$
- **e)** Nemá řešení

<details><summary>Ответ и решение</summary>

**b** — $x\in(-\infty,\frac72\rangle$. Pro $x<0$: $-5\ge4x-12$ platí. Na $\langle0,5)$: $2x-5\ge4x-12\iff x\le\frac72$. Pro $x\ge5$: $5\ge4x-12\iff x\le\frac{17}4$ — nic.

</details>

### `fjfi-v2-04` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 2 (příklad 4, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Řešte v $\mathbb{R}$ nerovnici: $|x|+|x-1|\ge2$

- **a)** $x\in(-\infty,0)$
- **b)** $x\in(-\infty,-\frac12)$
- **c)** $x\in\langle\frac32,+\infty)$
- **d)** $x\in(-\infty,-\frac12\rangle\cup\langle\frac32,+\infty)$
- **e)** Nemá řešení

<details><summary>Ответ и решение</summary>

**d** — $x\in(-\infty,-\frac12\rangle\cup\langle\frac32,+\infty)$. Pro $x<0$: $1-2x\ge2\iff x\le-\frac12$; na $\langle0,1)$: $1\ge2$ — nic; pro $x\ge1$: $2x-1\ge2\iff x\ge\frac32$.

</details>

### `tul-2021-02` — [FP TUL, přijímací test z matematiky 2021/22 (Matematika, Bc.) (úloha 2, 20 bodů)](https://www.fp.tul.cz/images/fakulta/ukazky_testu/2021/KAP_Ma_Bc_jednoobor_2021.pdf)

*Темы:* 7. Nerovnice s absolutní hodnotou, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу)

Uvažujte reálné funkce $f(x)=\bigl||3-2x|-2\bigr|$ a $g(x)=1{,}5$. a) Nakreslete (do jednoho obrázku) grafy obou funkcí pro $-1\le x\le4$. Obrázek musí být dostatečně velký (alespoň $10\times10$ cm), přehledný a popsaný (průsečíky s osami, resp. grafů apod.). b) Vyřešte nerovnici $1{,}5<\bigl||3-2x|-2\bigr|$. Řešení nerovnice zapište ve tvaru sjednocení disjunktních intervalů.

<details><summary>Ответ и решение</summary>

b) $x\in(-\infty;-0{,}25)\cup(1{,}25;1{,}75)\cup(3{,}25;+\infty)$. $|3-2x|-2>1{,}5$ nebo $|3-2x|-2<-1{,}5$, tj. $|3-2x|>3{,}5$ nebo $|3-2x|<0{,}5$. Graf v části a) je lomená čára s vrcholy v bodech $[0{,}5;0]$, $[1{,}5;2]$, $[2{,}5;0]$.

</details>

### `vsb-fbi-2015-pz32-03` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 32 (úloha 3, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\sqrt{3x^2-2}=2-x$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=-3$, $x=1$. Umocněním $x^2+2x-3=0$; zkouška vyhovuje u obou kořenů.

</details>

### `fel-vzor01-10` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 10, 1 bod)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 8, úloha 18

Graf funkce $y=\left(\dfrac{1-\sqrt x}{\sqrt x-x}\right)^2$ je částí

- **a)** přímky
- **b)** hyperboly
- **c)** paraboly
- **d)** dvou různoběžných přímek
- **e)** dvou rovnoběžných přímek

<details><summary>Ответ и решение</summary>

**b** — hyperboly. $\sqrt x-x=\sqrt x(1-\sqrt x)$, tedy $y=\frac1x$ pro $x>0$, $x\ne1$.

</details>

### `fit-2014-1-16` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 16, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Pro definiční obor funkce $f(x)=\sqrt{x+4}+\sqrt{\dfrac{1}{7-6x-x^2}}$ platí

- **a)** Definičním oborem jsou všechna kladná čísla větší než 1.
- **b)** Definiční obor je $(-\infty,-7\rangle\cup(-4,+\infty)$.
- **c)** Definiční obor je $\langle-4,1)$.
- **d)** Definiční obor je $(-\infty,-7\rangle\cup(-4,1)$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Definiční obor je $\langle-4,1)$.. $x\ge-4$ a $(x+7)(x-1)<0$.

</details>

### `fit-2014-2-16` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 16, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Pro definiční obor funkce $f(x)=\sqrt{\dfrac1{x+4}}+\sqrt{7-6x-x^2}$ platí

- **a)** Definičním oborem jsou všechna kladná čísla větší než 1.
- **b)** Definiční obor je $(-\infty,-7\rangle\cup(-4,+\infty)$.
- **c)** Definiční obor je $\langle-4,1\rangle$.
- **d)** Definiční obor je $(-\infty,-7\rangle\cup(-4,1\rangle$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. $x>-4$ a $x^2+6x-7\le0$: $(-4,1\rangle$.

</details>

### `fit-2014-3-16` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 16, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Pro definiční obor funkce $f(x)=\sqrt{\dfrac1{x+4}}+\sqrt{\dfrac1{7-6x-x^2}}$ platí

- **a)** Definičním oborem jsou všechna kladná čísla větší než 1.
- **b)** Definiční obor je $(-\infty,-7)\cup(-4,+\infty)$.
- **c)** Definiční obor je $(-\infty,-7\rangle\cup(-4,1)$.
- **d)** Definiční obor je $(-4,1)$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Definiční obor je $(-4,1)$.. $x>-4$ a $7-6x-x^2>0$: $(-4,1)$.

</details>

### `fit-2014-4-16` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 16, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Pro definiční obor funkce $f(x)=\sqrt{\dfrac{x+4}{7-6x-x^2}}$ platí

- **a)** Definičním oborem jsou všechna kladná čísla větší než 1.
- **b)** Definiční obor je $(-\infty,-7\rangle\cup\langle-4,+\infty)$.
- **c)** Definiční obor je $\langle-4,1)$.
- **d)** Definiční obor je $(-\infty,-7)\cup\langle-4,1)$.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Definiční obor je $(-\infty,-7)\cup\langle-4,1)$.. $\frac{x+4}{(1-x)(x+7)}\ge0$: $(-\infty,-7)\cup\langle-4,1)$.

</details>

### `fit-2020-10` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2021 (příklad 10, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2020.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 6, úloha 19

Které z následujících tvrzení o definičním oboru funkce $f(x)=\sqrt{x+2}+\sqrt{\dfrac{1}{x^2-x-\frac34}}$ je pravdivé?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2019, příklad 10 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2024, příklad 5 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2025, příklad 2 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2026, příklad 9 (7 b)

- **a)** Žádná z ostatních možností není správná.
- **b)** Definiční obor je $\left\langle-2,-\frac12\right)\cup\left(\frac32,+\infty\right)$.
- **c)** Definiční obor je $\left\langle-\frac12,\frac32\right\rangle$.
- **d)** Definiční obor je $\left(-\frac12,\frac32\right)\cup\langle2,+\infty)$.
- **e)** Definičním oborem jsou všechna kladná čísla.

<details><summary>Ответ и решение</summary>

**b** — Definiční obor je $\left\langle-2,-\frac12\right)\cup\left(\frac32,+\infty\right)$.. $x\ge-2$ a $\left(x-\frac32\right)\left(x+\frac12\right)>0$.

</details>

### `fit-2021-05` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2022 (příklad 5, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 8, D1

Které z následujících tvrzení o definičním oboru funkce $f(x)=\sqrt{\dfrac{1}{x+2}}+\sqrt{\dfrac{1}{x^2-x-\frac34}}$ je pravdivé?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2020, příklad 5 (7 b)

- **a)** Definičním oborem jsou všechna kladná čísla.
- **b)** Definiční obor je $\left(-\frac12,\frac32\right)\cup\langle2,+\infty)$.
- **c)** Definiční obor je $\left\langle-\frac12,\frac32\right\rangle$.
- **d)** Žádná z ostatních možností není správná.
- **e)** Definiční obor je $\left(-\infty,-\frac12\right)\cup\left(\frac32,2\right\rangle$.

<details><summary>Ответ и решение</summary>

**d** — Žádná z ostatních možností není správná.. $x+2>0$ a $\left(x-\frac32\right)\left(x+\frac12\right)>0$: $\left(-2,-\frac12\right)\cup\left(\frac32,\infty\right)$.

</details>

### `fit-2022-05` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 5, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 8, úloha 17

Které z následujících tvrzení o definičním oboru funkce $f(x)=\sqrt{\dfrac{x-2}{x^2-x-\frac34}}$ je pravdivé?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2017, příklad 10 (5 b)

- **a)** Definiční obor je $\left(-\infty,-\frac12\right)\cup\left(\frac32,2\right\rangle$.
- **b)** Žádná z ostatních možností není správná.
- **c)** Definiční obor je $\left(-\frac12,\frac32\right)\cup\langle2,+\infty)$.
- **d)** Definiční obor je $\left\langle-\frac12,\frac32\right\rangle$.
- **e)** Definičním oborem jsou všechna kladná čísla.

<details><summary>Ответ и решение</summary>

**c** — Definiční obor je $\left(-\frac12,\frac32\right)\cup\langle2,+\infty)$.. $\frac{x-2}{\left(x-\frac32\right)\left(x+\frac12\right)}\ge0$ — metoda intervalů s body $-\frac12,\frac32,2$.

</details>

### `vut-fsi-2014-z5-04` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 4, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Řešeními rovnice $-x+\sqrt{-x}=2$ jsou všechna $x\in\mathbf R$, pro která platí:

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 4, 1 b)

- **a)** $x=0$
- **b)** $x=1$
- **c)** $x=-1$
- **d)** $x>1$
- **e)** rovnice nemá řešení

<details><summary>Ответ и решение</summary>

**c** — $x=-1$. $t=\sqrt{-x}\ge0$: $t^2+t-2=0$, $t=1$.

</details>

### `vut-fsi-2014-z5-17` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 17, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Nerovnice $\sqrt{x^2+x-12}<x+4$ má řešení

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 17, 2 b)

- **a)** všechna $x$
- **b)** žádná $x$
- **c)** $x<3$
- **d)** $x\ge3$
- **e)** $x>-4$

<details><summary>Ответ и решение</summary>

**d** — $x\ge3$. Definiční obor $x\le-4\vee x\ge3$, pravá strana kladná pro $x>-4$; umocněním $x>-4$.

</details>

### `vsb-fbi-2015-pz23-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 23 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Stanovte definiční obor funkce $y=\sqrt{\dfrac{x-1}{x+2}}+\log(2x-3)$.

<details><summary>Ответ и решение</summary>

$D=\left(\frac32;\infty\right)$. $\frac{x-1}{x+2}\ge0$ dává $x<-2$ nebo $x\ge1$, spolu s $x>\frac32$.

</details>

### `vsb-fbi-2015-pz24-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 24 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Stanovte definiční obor funkce $y=\mathrm e^{5x}+\sqrt{\dfrac{x-2}{x+2}}$.

<details><summary>Ответ и решение</summary>

$D=(-\infty;-2)\cup\langle2;\infty)$. $\frac{x-2}{x+2}\ge0$, $x\ne-2$.

</details>

### `vsb-fbi-2017-pz2-02` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 2 (úloha 2, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Stanovte definiční obor funkce $y=\dfrac1{x^2-9}+2\sqrt{2x+6}+\log(2x-5)$.

<details><summary>Ответ и решение</summary>

$D=\left(\frac52;3\right)\cup(3;\infty)$. $x\ne\pm3$, $x\ge-3$, $x>\frac52$.

</details>

### `vut-fekt-2024-v1-14` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 14, 5 bodů)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Je dána funkce $f(x)=1-x$. Rovnice $\frac{1}{f(x)}=f\left(\frac1x\right)$ v reálném oboru

- **a)** má nekonečně mnoho řešení
- **b)** má právě 1 řešení
- **c)** má právě 2 řešení
- **d)** má právě 4 řešení
- **e)** nemá řešení

<details><summary>Ответ и решение</summary>

**e** — nemá řešení. $\frac1{1-x}=\frac{x-1}x\Rightarrow x=-(x-1)^2\Rightarrow x^2-x+1=0$, $D<0$.

</details>

### `vut-fekt-2024-v2-14` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 14, 5 bodů)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Je dána funkce $f(x)=x-1$. Rovnice $\frac{1}{f(x)}=f\left(\frac1x\right)$ v reálném oboru

- **a)** má právě 1 řešení
- **b)** má právě 2 řešení
- **c)** má právě 4 řešení
- **d)** nemá řešení
- **e)** má nekonečně mnoho řešení

<details><summary>Ответ и решение</summary>

**d** — nemá řešení. $\frac1{x-1}=\frac{1-x}x\Rightarrow x=-(x-1)^2\Rightarrow x^2-x+1=0$, $D<0$.

</details>

### `fit-2016-08` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 8, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 10. Exponenciální funkce · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 10, úloha 17

Jestliže $y=\left(\frac12\right)^{3x-1}$, pak $y\in\left\langle\frac12,2\right\rangle$ právě pro

- **a)** Žádná z ostatních možností není správná.
- **b)** $x\in\left\langle0,\frac23\right\rangle$
- **c)** $x\in(-\infty,0\rangle\cup\left\langle\frac23,\infty\right)$
- **d)** $x\in\left\langle\frac23,2\right\rangle$
- **e)** $x\in\left\langle\frac23,\frac{1+\ln2}{3}\right\rangle$

<details><summary>Ответ и решение</summary>

**b** — $x\in\left\langle0,\frac23\right\rangle$. $2^{-1}\le2^{1-3x}\le2^1\iff0\le x\le\frac23$.

</details>

### `fit-2022-12` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 12, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 10. Exponenciální funkce · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 10, úloha 18

Jestliže $y=2e^{3x-1}$, pak $y\in\left\langle\frac12,2\right\rangle$ právě pro

- **a)** $x\in\left\langle\frac{1-\ln4}{3},\frac13\right\rangle$
- **b)** Žádná z ostatních možností není správná.
- **c)** $x\in\langle-1,0\rangle$
- **d)** $x\in\left\langle-\frac{e+1}{3},\frac{e^2+1}{3}\right\rangle$
- **e)** $x\in\left\langle\frac13,\infty\right)$

<details><summary>Ответ и решение</summary>

**a** — $x\in\left\langle\frac{1-\ln4}{3},\frac13\right\rangle$. $e^{3x-1}\in\langle\frac14,1\rangle\iff-\ln4\le3x-1\le0$.

</details>

### `vsb-fbi-2017-pz14-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 14 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $2^x+2^{1-x}-3=0$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$x=0$, $x=1$. $t=2^x$: $t^2-3t+2=0$, $t=1$ nebo $t=2$.

</details>

### `fel-vzor01-1` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 1, 1 bod)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 7, D1

Množinou všech řešení nerovnice $2^{|x+3|}<2$ s neznámou $x\in\mathbb{R}$ je

- **a)** $(-\infty,-3)$
- **b)** $\emptyset$
- **c)** $(-4,-2)$
- **d)** $(-\infty,-4)\cup(2,8)$
- **e)** $\langle-4,-2\rangle$

<details><summary>Ответ и решение</summary>

**c** — $(-4,-2)$. $|x+3|<1\iff-4<x<-2$.

</details>

### `fit-2014-1-11` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 11, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Za jaký minimální počet let klesne hodnota předmětu na méně než desetinu původní ceny, pokud ročně odepisujeme $18\%$ ceny předmětu z předchozího roku?

- **a)** Za 5 let.
- **b)** Za 7 let.
- **c)** Za 11 let.
- **d)** Za 12 let.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Za 12 let.. $0{,}82^n<0{,}1\iff n>\frac{\ln0{,}1}{\ln0{,}82}\approx11{,}6$.

</details>

### `fit-2014-2-11` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 11, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Za jaký minimální počet let klesne hodnota předmětu na méně než pětinu původní ceny, pokud ročně odepisujeme $22\%$ ceny předmětu z předchozího roku?

- **a)** Za 5 let.
- **b)** Za 7 let.
- **c)** Za 11 let.
- **d)** Za 12 let.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Za 7 let.. $0{,}78^n<0{,}2\iff n>\frac{\ln0{,}2}{\ln0{,}78}\approx6{,}5$.

</details>

### `fit-2014-3-11` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 11, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Za jaký minimální počet let klesne hodnota předmětu na méně než desetinu původní ceny, pokud ročně odepisujeme $15\%$ ceny předmětu z předchozího roku?

- **a)** Za 11 let.
- **b)** Za 12 let.
- **c)** Za 15 let.
- **d)** Za 14 let.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Za 15 let.. $0{,}85^n<0{,}1\iff n>\frac{\ln0{,}1}{\ln0{,}85}\approx14{,}2$.

</details>

### `fit-2014-4-11` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 11, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Za jaký minimální počet let klesne hodnota předmětu na méně než dvacetinu původní ceny, pokud ročně odepisujeme $20\ \%$ ceny předmětu z předchozího roku?

- **a)** Za 13 let.
- **b)** Za 12 let.
- **c)** Za 8 let.
- **d)** Za 5 let.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. $0{,}8^n<0{,}05\iff n>\frac{\ln0{,}05}{\ln0{,}8}\approx13{,}4$ — za 14 let.

</details>

### `fit-2014-1-18` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 18, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Pro řešení rovnice $2^{x-2}+4^{x-\frac12}=9$ platí

- **a)** Rovnice má dvě řešení.
- **b)** Rovnice má nekonečně mnoho řešení.
- **c)** Součet všech řešení je $-\frac12$.
- **d)** Rovnice nemá řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. $t=2^x$: $\frac t4+\frac{t^2}{2}=9\Rightarrow2t^2+t-36=0$, $t=4$, jediné řešení $x=2$.

</details>

### `fit-2014-2-18` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 18, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Pro řešení rovnice $3^{2x+1}-2\cdot3^{x+2}=36+5\cdot3^x$ platí

- **a)** Rovnice má dvě řešení.
- **b)** Rovnice má nekonečně mnoho řešení.
- **c)** Rovnice má jedno kladné řešení.
- **d)** Rovnice nemá řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Rovnice má jedno kladné řešení.. $t=3^x$: $3t^2-23t-36=0$, $t=9$ ($t=-\frac43$ nevyhovuje), $x=2$.

</details>

### `fit-2014-3-18` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 18, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Pro řešení rovnice $2^{x-2}+4^{x-\frac12}=9$ platí

- **a)** Součet všech řešení je $-\frac12$.
- **b)** Rovnice má nekonečně mnoho řešení.
- **c)** Rovnice má dvě řešení.
- **d)** Rovnice má jedno kladné řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Rovnice má jedno kladné řešení.. $t=2^x$: $2t^2+t-36=0$, $t=4$, $x=2$.

</details>

### `fit-2014-4-18` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 18, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Pro řešení rovnice $3^{2x+1}-2\cdot3^{x+2}=36+5\cdot3^x$ platí

- **a)** Rovnice má dvě řešení.
- **b)** Rovnice má jedno kladné řešení řešení.
- **c)** Součin všech řešení je $-12$.
- **d)** Rovnice nemá řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Rovnice má jedno kladné řešení řešení.. $t=3^x$: $3t^2-23t-36=0$, $t=9$, jediné řešení $x=2$.

</details>

### `fit-2015-07` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 7, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 11, úloha 18

Rozhodněte, které tvrzení o řešeních rovnice $9^{x-\frac12}+9^{\frac12-x}=\dfrac{10}{3}$ je pravdivé.

- **a)** Součet všech řešení je $-1$.
- **b)** Rovnice nemá řešení.
- **c)** Žádná z ostatních možností není správná.
- **d)** Rovnice má dvě nezáporná řešení.
- **e)** Součin všech řešení je $9$.

<details><summary>Ответ и решение</summary>

**d** — Rovnice má dvě nezáporná řešení.. $t=9^{x-\frac12}>0$: $3t^2-10t+3=0$, $t\in\{3;\frac13\}$, tedy $x\in\{1;0\}$.

</details>

### `fit-2022-09` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 9, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 2, D11

Nalezněte řešení rovnice $3^x+5\cdot4^x=2\cdot4^{x+1}-3^{x+1}$ a rozhodněte, které tvrzení je pravdivé.

- **a)** Rovnice má jedno záporné řešení.
- **b)** Rovnice nemá řešení.
- **c)** Rovnice má jedno kladné řešení.
- **d)** Žádná z ostatních možností není správná.
- **e)** $x=0$

<details><summary>Ответ и решение</summary>

**c** — Rovnice má jedno kladné řešení.. $4\cdot3^x=3\cdot4^x\Rightarrow\left(\frac34\right)^x=\frac34$, $x=1$.

</details>

### `fit-2026-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2026 (příklad 3, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 11, úloha 17

Pro řešení nerovnice $\left(\dfrac13\right)^{x^2}\le3^{-x-6}$ platí

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2022, příklad 10 (7 b)

- **a)** Všechna řešení leží v intervalu $(-\infty,-2\rangle\cup\langle3,+\infty)$.
- **b)** Žádná z ostatních možností není správná.
- **c)** Všechna řešení leží v intervalu $\langle-2,+\infty)$.
- **d)** Neexistují záporná řešení.
- **e)** Řešení jsou všechna reálná čísla.

<details><summary>Ответ и решение</summary>

**a** — Všechna řešení leží v intervalu $(-\infty,-2\rangle\cup\langle3,+\infty)$.. $3^{-x^2}\le3^{-x-6}\iff x^2-x-6\ge0\iff(x-3)(x+2)\ge0$.

</details>

### `vut-fsi-2014-z7-14` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 14, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 11. Exponenciální rovnice a nerovnice, Ostatní · *Текст:* текст оригинала (по курсу)

Ve vzorku radioaktivní látky se každých dvacet minut rozpadne třetina jader radia. Z původního počtu jader radia zůstane za jednu hodinu

- **a)** $\dfrac13$ jader
- **b)** $\dfrac23$ jader
- **c)** $\dfrac1{18}$ jader
- **d)** $\dfrac8{27}$ jader
- **e)** nezůstanou žádná jádra

<details><summary>Ответ и решение</summary>

**d** — $\dfrac8{27}$ jader. Třikrát zůstanou $\frac23$: $\left(\frac23\right)^3$.

</details>

### `vut-fsi-2014-z3-20` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 20, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $3^3\cdot27^{2x-3}=81^{3x-3}$, pak $x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 20, 2 b)

- **a)** $\dfrac43$
- **b)** $1$
- **c)** $\pm1$
- **d)** $-1$
- **e)** $\dfrac34$

<details><summary>Ответ и решение</summary>

**b** — $1$. $3^{6x-6}=3^{12x-12}$.

</details>

### `vut-fsi-2014-z10-20` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 20, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 11. Exponenciální rovnice a nerovnice, 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $4^{\sqrt{x+1}}=64\cdot2^{\sqrt{x+1}}$, pak $x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 20, 2 b)

- **a)** $15$
- **b)** $-35$
- **c)** $35$
- **d)** $24$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**c** — $35$. $t=2^{\sqrt{x+1}}$: $t^2=64t$, $t=64$, $\sqrt{x+1}=6$.

</details>

### `vut-fsi-2017-z10-14` — [FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 14, 1 bod)](https://vut.cz/pomocne2018/f69785/d158882/p149140)

*Темы:* 11. Exponenciální rovnice a nerovnice, Ostatní · *Текст:* текст оригинала (по курсу)

Ve vzorku radioaktivní látky se každých dvacet minut rozpadne třetina jader radia. Z původního počtu jader radia zůstane za jednu hodinu

- **a)** $\dfrac13$ jader
- **b)** $\dfrac29$ jader
- **c)** $\dfrac{19}{27}$ jader
- **d)** $\dfrac8{27}$ jader
- **e)** nezůstanou žádná jádra

<details><summary>Ответ и решение</summary>

**d** — $\dfrac8{27}$ jader. Třikrát zůstanou $\frac23$: $\left(\frac23\right)^3$.

</details>

### `vsb-fbi-2017-pz2-05` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 2 (úloha 5, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 12. Logaritmická funkce, 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Vyřešte rovnici $\log_a\dfrac14=-\dfrac23$ a proveďte zkoušku.

<details><summary>Ответ и решение</summary>

$a=8$. $a^{-2/3}=\frac14$, tedy $a^{2/3}=4$, $a=4^{3/2}=8$.

</details>

### `fel-vzor01-6` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 6, 1 bod)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Jestliže $\log_2y=3\log_2\dfrac{x-2}{2}-2\log_2\dfrac{x^2-4}{2}$, pak číslo $y$ je rovno

- **a)** $\dfrac{x-2}{2(x+2)^2}$
- **b)** $3\dfrac{x-2}{2}-2\dfrac{x^2-4}{2}$
- **c)** $-x^2+3x+2$
- **d)** $x+2$
- **e)** $\dfrac{x-2}{6}+\dfrac{x^2-4}{4}$

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{x-2}{2(x+2)^2}$. $y=\frac{\left(\frac{x-2}{2}\right)^3}{\left(\frac{x^2-4}{2}\right)^2}=\frac{x-2}{2(x+2)^2}$.

</details>

### `fit-2014-1-15` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 15, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Jestliže $y=\log_{\frac12}x$, pak $y\in\langle-2,2\rangle$ právě pro

- **a)** $x\in\langle-\frac14,4\rangle$
- **b)** $x\in\langle-4,-\frac14\rangle$
- **c)** $x\in\langle\frac14,4\rangle$
- **d)** $x\in\langle-4,\frac14\rangle$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — $x\in\langle\frac14,4\rangle$. Funkce je klesající: $\left(\frac12\right)^2\le x\le\left(\frac12\right)^{-2}$.

</details>

### `fit-2014-2-15` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 15, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Jestliže $y=\log_{\frac13}x$, pak $y\in\langle-2,2\rangle$ právě pro

- **a)** $x\in\langle-\frac19,9\rangle$
- **b)** $x\in\langle-9,-\frac19\rangle$
- **c)** $x\in\langle\frac16,6\rangle$
- **d)** $x\in\langle-6,\frac16\rangle$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. Správně $x\in\langle\frac19,9\rangle$.

</details>

### `fit-2014-3-15` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 15, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Jestliže $y=\log_{\frac12}x$, pak $y\in\langle-3,0\rangle$ právě pro

- **a)** $x\in\langle-\frac18,0\rangle$
- **b)** $x\in\langle-8,0\rangle$
- **c)** $x\in\langle\frac18,1\rangle$
- **d)** $x\in\langle1,8\rangle$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — $x\in\langle1,8\rangle$. Funkce je klesající: $\left(\frac12\right)^0\le x\le\left(\frac12\right)^{-3}$.

</details>

### `fit-2014-4-15` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 15, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Jestliže $y=\log_{\frac12}x$, pak $y\in\langle-2,1\rangle$ právě pro

- **a)** $x\in\langle-\frac14,\frac12\rangle$
- **b)** $x\in\langle0,\frac14\rangle$
- **c)** $x\in\langle1,4\rangle$
- **d)** $x\in\langle-4,0\rangle$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. Správně $x\in\langle\frac12,4\rangle$.

</details>

### `fit-2015-09` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 9, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 12, úloha 17

Které z následujících tvrzení o definičním oboru funkce $f(x)=\sqrt{\log_5x+1}$ je pravdivé?

- **a)** Definiční obor je $\left(0,\frac15\right)\cup\left(\frac15,+\infty\right)$.
- **b)** Žádná z ostatních možností není správná.
- **c)** Definičním oborem jsou všechna kladná reálná čísla.
- **d)** Definiční obor je $\left\langle\frac15,+\infty\right)$.
- **e)** Definiční obor je $\langle-5,+\infty)$.

<details><summary>Ответ и решение</summary>

**d** — Definiční obor je $\left\langle\frac15,+\infty\right)$.. $x>0$ a $\log_5x\ge-1$, tj. $x\ge\frac15$.

</details>

### `fit-2015-10` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 10, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 12, úloha 18

Jestliže $y=\ln(2x+1)$, pak $y\in\langle-1,1\rangle$ právě pro

- **a)** Žádná z ostatních možností není správná.
- **b)** $x\in\left\langle-\frac12,\frac{e-1}{2}\right\rangle$
- **c)** $x\in\left(\frac{-e-1}{2},\frac12\right)$
- **d)** $x\in\left\langle\frac{e^{-1}-1}{2},\frac{e-1}{2}\right\rangle$
- **e)** $x\in\left\langle\frac{-e-1}{2},\frac{e-1}{2}\right\rangle$

<details><summary>Ответ и решение</summary>

**d** — $x\in\left\langle\frac{e^{-1}-1}{2},\frac{e-1}{2}\right\rangle$. $e^{-1}\le2x+1\le e$.

</details>

### `fit-2017-10` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2018 (příklad 10, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2017.pdf)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 12, úloha 19

Které z následujících tvrzení o definičním oboru funkce $f(x)=\dfrac{\ln(x^2+8x+15)}{\sqrt{2-x}}$ je pravdivé?

- **a)** Definiční obor je $\mathbb{R}\setminus\{2\}$.
- **b)** Definiční obor je $(-\infty,-5)\cup(-3,2)$.
- **c)** Definiční obor je $(2,+\infty)$.
- **d)** Definiční obor je $(-\infty,-5)$.
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Definiční obor je $(-\infty,-5)\cup(-3,2)$.. $(x+3)(x+5)>0\Rightarrow x<-5\vee x>-3$; $2-x>0$.

</details>

### `fit-2027-12` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2027 (příklad 12, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2027-s-resenim.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Které z následujících tvrzení o definičním oboru funkce $f(x)=\dfrac{\ln(x^2+8x+16)}{\sqrt{x+5}}$ je pravdivé?

- **a)** Žádná z ostatních možností není správná.
- **b)** Definiční obor je $\mathbb{R}\setminus\{-5,-4\}$.
- **c)** Definičním oborem jsou všechna reálná čísla s výjimkou $-5$.
- **d)** Definiční obor je $(-5,-4)\cup(-4,\infty)$.
- **e)** Definiční obor je $(5,+\infty)$.

<details><summary>Ответ и решение</summary>

**d** — Definiční obor je $(-5,-4)\cup(-4,\infty)$.. $(x+4)^2>0\iff x\ne-4$; $x+5>0$.

</details>

### `fit-2019-12` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2020 (příklad 12, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Rozhodněte, které tvrzení o řešeních rovnice $\dfrac{\log_3(5x+4)}{\log_3(x-4)}=2$ je pravdivé.

- **a)** Rovnice nemá řešení.
- **b)** Součet všech řešení je 13.
- **c)** Rovnice má jedno řešení.
- **d)** Žádná z ostatních možností není správná.
- **e)** Rovnice má dvě řešení a jejich součet je 11.

<details><summary>Ответ и решение</summary>

**c** — Rovnice má jedno řešení.. $x>4$, $x\ne5$: $5x+4=(x-4)^2\Rightarrow x\in\{1;12\}$, vyhovuje jen $x=12$.

</details>

### `fit-2021-07` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2022 (příklad 7, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Rozhodněte, které tvrzení o řešeních rovnice $\dfrac{\log_3(6x-2)}{\log_3(x-3)}=2$ je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2019, příklad 9 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2021, příklad 12 (7 b)

- **a)** Rovnice má jedno řešení.
- **b)** Rovnice nemá řešení.
- **c)** Žádná z ostatních možností není správná.
- **d)** Součet všech řešení je 12.
- **e)** Rovnice má dvě řešení a jejich součin je 10.

<details><summary>Ответ и решение</summary>

**a** — Rovnice má jedno řešení.. $x>3$, $x\ne4$: $6x-2=(x-3)^2\Rightarrow x\in\{1;11\}$, vyhovuje jen $x=11$.

</details>

### `fit-2022-08` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 8, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Najděte všechna reálná řešení nerovnice $\log_{\frac12}(x^2)-\log_{\frac12}(x-1)<0\,.$

- **a)** $x\in(0,1)$
- **b)** Žádná z ostatních možností není správná.
- **c)** Všechna reálná čísla.
- **d)** $x\in(-\infty,-1)$
- **e)** $x\in(1,\infty)$

<details><summary>Ответ и решение</summary>

**e** — $x\in(1,\infty)$. Podmínka $x>1$; základ $<1$ obrací nerovnost: $x^2>x-1$, což platí vždy.

</details>

### `fit-2027-07` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2027 (příklad 7, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2027-s-resenim.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Pro řešení rovnice $\dfrac{\log_3^2(9x)}{\log_3(81x^2)}=\dfrac32$ platí:

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2018, příklad 5 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2024, příklad 7 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2025, příklad 4 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2026, příklad 7 (7 b)

- **a)** Rovnice má řešení menší než $\frac19$.
- **b)** Řešení je nekonečně mnoho.
- **c)** Žádná z ostatních možností není správná.
- **d)** Rovnice nemá řešení.
- **e)** Součin všech různých řešení je $\frac13$.

<details><summary>Ответ и решение</summary>

**c** — Žádná z ostatních možností není správná.. $t=\log_3x$: $\frac{(2+t)^2}{2(2+t)}=\frac{2+t}{2}=\frac32$, $t=1$, jediné řešení $x=3$.

</details>

### `fjfi-v2-05` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 2 (příklad 5, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte v $\mathbb{R}$ $\log(2x+9)-2\log x+\log(x-4)=2-\log50$

- **a)** $36$
- **b)** $42$
- **c)** $18$
- **d)** $20$
- **e)** $10$

<details><summary>Ответ и решение</summary>

**a** — $36$. Podmínka $x>4$; $\frac{(2x+9)(x-4)}{x^2}=\frac{100}{50}=2\Rightarrow 2x^2+x-36=2x^2$, $x=36$.

</details>

### `vut-fsi-2014-z4-12` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 12, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 13. Logaritmické rovnice a nerovnice, 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Nerovnice $3^{\log_3y^3}<1$ má řešení

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 12, 1 b)

- **a)** $y>1$
- **b)** $0<y<1$
- **c)** $y<-1$
- **d)** $|y|>1$
- **e)** $|y|<1$

<details><summary>Ответ и решение</summary>

**b** — $0<y<1$. Pro $y>0$ je levá strana $y^3$.

</details>

### `vut-fsi-2014-z10-12` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 12, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Nerovnice $\log(x+3)>\log(2x-4)$ má řešení

- **a)** $x\in(2;7)$
- **b)** $x<7$
- **c)** $x\in(0;7)$
- **d)** $x\in(-7;7)$
- **e)** $x>7$

<details><summary>Ответ и решение</summary>

**a** — $x\in(2;7)$. Podmínka $x>2$; $x+3>2x-4$.

</details>

### `vut-fsi-2014-z3-13` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 3 (úloha 13, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešením nerovnice $\log(1-2x)\ge0$ jsou všechna $x\in\mathbf R$, pro která platí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 13, 1 b)

- **a)** $x\in(-\infty;\infty)$
- **b)** $x>0$
- **c)** $x\le0$
- **d)** $x\in(0;1\rangle$
- **e)** $x\ge1$

<details><summary>Ответ и решение</summary>

**c** — $x\le0$. $1-2x\ge1$.

</details>

### `vut-fsi-2014-z9-13` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 13, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešením nerovnice $\log(1-2x)<0$ jsou všechna $x\in\mathbf R$, pro která platí

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 13, 1 b)

- **a)** $x\in(-\infty;\infty)$
- **b)** $x>0$
- **c)** $x\in(0;0.5)$
- **d)** $x\in(0;1\rangle$
- **e)** $x\ge1$

<details><summary>Ответ и решение</summary>

**c** — $x\in(0;0.5)$. $0<1-2x<1$.

</details>

### `vut-fsi-2014-z10-13` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 13, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\log\left(x^{\log x}\right)=0$, pak

- **a)** $x=0$
- **b)** $x=1$
- **c)** $x\in\{-1;1\}$
- **d)** $x\in\{1;0.1\}$
- **e)** $x\in\{-1;0\}$

<details><summary>Ответ и решение</summary>

**b** — $x=1$. $(\log x)^2=0$.

</details>

### `vut-fsi-2014-z1-20` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 1 (úloha 20, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešením rovnice $\log(x-1)-1=\log x$ je $x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 20, 2 b)

- **a)** $\dfrac19$
- **b)** $-\dfrac19$
- **c)** $9$
- **d)** $-9$
- **e)** neexistuje

<details><summary>Ответ и решение</summary>

**e** — neexistuje. $\frac{x-1}x=10\Rightarrow x=-\frac19$, ale podmínka je $x>1$.

</details>

### `vut-fsi-2014-z2-20` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 20, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $2\log(x-2)=\log(14-x)$, pak $x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 20, 2 b)

- **a)** $0$
- **b)** $1$
- **c)** $\pm1$
- **d)** $5$
- **e)** $\pm5$

<details><summary>Ответ и решение</summary>

**d** — $5$. $(x-2)^2=14-x\Rightarrow x=5$ nebo $x=-2$; podmínka $x>2$.

</details>

### `vut-fsi-2014-z6-20` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 20, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\log x+\dfrac1{\log x}=2$, pak $x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 20, 2 b)

- **a)** $\pm0.1$
- **b)** $1$
- **c)** $10$
- **d)** $\pm10$
- **e)** $\dfrac1{10}$

<details><summary>Ответ и решение</summary>

**c** — $10$. $t+\frac1t=2\Rightarrow t=1$.

</details>

### `vut-fsi-2014-z7-20` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 20, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $x^{\log\sqrt x}=100$, pak $x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 20, 2 b)

- **a)** $x=-100$
- **b)** $x=-10$
- **c)** $x=10$
- **d)** $x=100$
- **e)** $x=\pm100$

<details><summary>Ответ и решение</summary>

**d** — $x=100$. Logaritmováním $\frac12\log^2x=2$, $\log x=\pm2$.

*Примечание:* Rovnici splňuje i $x=\frac1{100}$, mezi možnostmi ale není.

</details>

### `vut-fsi-2014-z9-20` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 20, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Rovnice $\dfrac{\log(x^2-9)}{\log(x+1)}=2$ má řešení

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 20, 2 b)

- **a)** $x=-5$
- **b)** $x=5$
- **c)** $x=\pm5$
- **d)** $x\in\mathbf R$
- **e)** nemá řešení

<details><summary>Ответ и решение</summary>

**e** — nemá řešení. $x^2-9=(x+1)^2\Rightarrow x=-5$, ale musí být $x+1>0$.

</details>

### `vut-fsi-2017-z4-13` — [FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 13, 1 bod)](https://vut.cz/pomocne2018/f69785/d158882/p149140)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Množina všech řešení rovnice $\log\left(x^{\log x}\right)=1$ je

- **a)** $\{10\}$
- **b)** $\{-1\}$
- **c)** $\{-1;1\}$
- **d)** $\{1;0.1\}$
- **e)** $\{10;0.1\}$

<details><summary>Ответ и решение</summary>

**e** — $\{10;0.1\}$. $(\log x)^2=1$, $\log x=\pm1$.

</details>

### `vut-fsi-2014-z2-09` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 9, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

$-1+\operatorname{tg}^2x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 9, 1 b)

- **a)** $\operatorname{cotg}^2x$
- **b)** $\sin^2x-\cos^2x$
- **c)** $-\dfrac{\cos2x}{\cos^2x}$
- **d)** $\dfrac{\sin2x}{\cos^2x}$
- **e)** $-\sin^2x-\cos^2x$

<details><summary>Ответ и решение</summary>

**c** — $-\dfrac{\cos2x}{\cos^2x}$. $\frac{\sin^2x-\cos^2x}{\cos^2x}$.

</details>

### `vut-fsi-2014-z8-09` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 9, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

$1-\operatorname{tg}^2x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 9, 1 b)

- **a)** $\operatorname{cotg}^2\alpha$
- **b)** $\sin^2x-\cos^2x$
- **c)** $\dfrac{\cos2x}{\cos^2x}$
- **d)** $\dfrac{\sin2x}{\cos^2x}$
- **e)** $-\sin^2x-\cos^2x$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{\cos2x}{\cos^2x}$. $\frac{\cos^2x-\sin^2x}{\cos^2x}$.

</details>

### `vut-fsi-2014-z2-19` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 19, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Je-li $\cos x=0{,}1$, potom $\sin x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 9 (úloha 19, 2 b)

- **a)** $0{,}9$
- **b)** $\pm0{,}9$
- **c)** $\pm0{,}3\sqrt{11}$
- **d)** $|0{,}9|$
- **e)** $0{,}3\sqrt{11}$

<details><summary>Ответ и решение</summary>

**c** — $\pm0{,}3\sqrt{11}$. $\sin^2x=0{,}99$, znaménko neurčeno.

</details>

### `vut-fsi-2014-z4-19` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 19, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Je-li $\sin x=0{,}1$, potom $\cos x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 19, 2 b)

- **a)** $0{,}9$
- **b)** $\pm0{,}9$
- **c)** $\pm0{,}3\sqrt{11}$
- **d)** $|0{,}9|$
- **e)** $0{,}3\sqrt{11}$

<details><summary>Ответ и решение</summary>

**c** — $\pm0{,}3\sqrt{11}$. $\cos^2x=0{,}99$.

</details>

### `vsb-fbi-2013-pz3-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 3 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $2\cdot\cos\left(\dfrac{3x-2\pi}3\right)-\sqrt3=0.$

<details><summary>Ответ и решение</summary>

$x=\frac\pi2+2k\pi$, $x=\frac{5\pi}6+2k\pi$, $k\in\mathbb{Z}$. $\cos\frac{3x-2\pi}3=\frac{\sqrt3}2$: $\frac{3x-2\pi}3=\pm\frac\pi6+2k\pi$.

</details>

### `vsb-fbi-2013-pz4-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 4 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $1-2\cos(2x-\frac\pi3)=0.$

<details><summary>Ответ и решение</summary>

$x=k\pi$, $x=\frac\pi3+k\pi$, $k\in\mathbb{Z}$. $\cos(2x-\frac\pi3)=\frac12$: $2x-\frac\pi3=\pm\frac\pi3+2k\pi$.

</details>

### `vsb-fbi-2013-pz11-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 11 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $\operatorname{tg}\left(\frac{2x-\pi}4\right)+\sqrt3=0.$

<details><summary>Ответ и решение</summary>

$x=-\frac\pi6+2k\pi$, $k\in\mathbb{Z}$. $\frac{2x-\pi}4=-\frac\pi3+k\pi$.

</details>

### `vsb-fbi-2015-pz23-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 23 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $\sin x\,(1-2\sin x)=0$ a zapište množinu všech řešení.

<details><summary>Ответ и решение</summary>

$\bigcup_{k\in\mathbb{Z}}\left\{k\pi,\frac\pi6+2k\pi,\frac{5\pi}6+2k\pi\right\}$. $\sin x=0$ nebo $\sin x=\frac12$.

</details>

### `vsb-fbi-2015-pz24-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 24 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $\cos x\,(1-2\sin x)=0$ a zapište množinu všech řešení.

<details><summary>Ответ и решение</summary>

$\bigcup_{k\in\mathbb{Z}}\left\{\frac\pi2+k\pi,\frac\pi6+2k\pi,\frac{5\pi}6+2k\pi\right\}$. $\cos x=0$ nebo $\sin x=\frac12$.

</details>

### `vsb-fbi-2015-pz25-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 25 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $\operatorname{tg}x\,(1+2\sin x)=0$ a zapište množinu všech řešení.

<details><summary>Ответ и решение</summary>

$\bigcup_{k\in\mathbb{Z}}\left\{k\pi,\frac{7\pi}6+2k\pi,\frac{11\pi}6+2k\pi\right\}$. $\operatorname{tg}x=0$ nebo $\sin x=-\frac12$.

</details>

### `vsb-fbi-2015-pz31-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 31 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $\cos x\,(1+2\sin x)=0$ a zapište množinu všech řešení.

<details><summary>Ответ и решение</summary>

$\bigcup_{k\in\mathbb{Z}}\left\{\frac\pi2+k\pi,\frac{7\pi}6+2k\pi,\frac{11\pi}6+2k\pi\right\}$. $\cos x=0$ nebo $\sin x=-\frac12$.

</details>

### `vsb-fbi-2015-pz32-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 32 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $\cos x\,(1+2\cos x)=0$ a zapište množinu všech řešení.

<details><summary>Ответ и решение</summary>

$\bigcup_{k\in\mathbb{Z}}\left\{\frac\pi2+k\pi,\frac{2\pi}3+2k\pi,\frac{4\pi}3+2k\pi\right\}$. $\cos x=0$ nebo $\cos x=-\frac12$.

</details>

### `vsb-fbi-2017-pz1-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 1 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $2-4\sin\left(x+\dfrac\pi3\right)=0$ a zapište množinu všech řešení.

<details><summary>Ответ и решение</summary>

$\bigcup_{k\in\mathbb{Z}}\left\{-\frac\pi6+2k\pi,\frac\pi2+2k\pi\right\}$. $\sin\left(x+\frac\pi3\right)=\frac12$: $x+\frac\pi3=\frac\pi6+2k\pi$ nebo $\frac{5\pi}6+2k\pi$.

</details>

### `vsb-fbi-2017-pz2-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 2 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $1+2\sin\left(x-\dfrac\pi6\right)=0$ a zapište množinu všech řešení.

<details><summary>Ответ и решение</summary>

$\bigcup_{k\in\mathbb{Z}}\left\{\frac{4\pi}3+2k\pi,2k\pi\right\}$. $\sin\left(x-\frac\pi6\right)=-\frac12$: $x-\frac\pi6=\frac{7\pi}6+2k\pi$ nebo $\frac{11\pi}6+2k\pi$.

</details>

### `vsb-fbi-2017-pz6-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 6 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $3\operatorname{tg}\left(\dfrac{2x-3\pi}6\right)+\sqrt3=0$ a zapište množinu všech řešení.

<details><summary>Ответ и решение</summary>

$\bigcup_{k\in\mathbb{Z}}\{\pi+3k\pi\}$. $\operatorname{tg}\frac{2x-3\pi}6=-\frac{\sqrt3}3$: $\frac{2x-3\pi}6=-\frac\pi6+k\pi$.

</details>

### `vsb-fbi-2017-pz14-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 14 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $3\operatorname{tg}\left(\dfrac{3x-\pi}6\right)-\sqrt3=0$ a zapište množinu všech řešení.

<details><summary>Ответ и решение</summary>

$\bigcup_{k\in\mathbb{Z}}\left\{\frac{2\pi}3+2k\pi\right\}$. $\operatorname{tg}\frac{3x-\pi}6=\frac{\sqrt3}3$: $\frac{3x-\pi}6=\frac\pi6+k\pi$.

</details>

### `vsb-fbi-2017-pz15-04` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 15 (úloha 4, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte goniometrickou rovnici $\operatorname{tg}\left(\dfrac{4x-2\pi}3\right)+\sqrt3=0$ a zapište množinu všech řešení.

<details><summary>Ответ и решение</summary>

$\bigcup_{k\in\mathbb{Z}}\left\{\frac\pi4+\frac{3k\pi}4\right\}$. $\frac{4x-2\pi}3=-\frac\pi3+k\pi$.

</details>

### `fel-vzor01-3` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 3, 1 bod)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Jestliže $\sin\alpha\cdot\cos\alpha=\frac12$ a $\alpha\in(\pi,2\pi)$, pak $\operatorname{tg}(\pi-\alpha)$

- **a)** není definován
- **b)** je kladný
- **c)** je $0$
- **d)** je $-1$
- **e)** je $\frac34\pi$

<details><summary>Ответ и решение</summary>

**d** — je $-1$. $\sin2\alpha=1$, v $(\pi,2\pi)$ je $\alpha=\frac54\pi$; $\operatorname{tg}\left(-\frac\pi4\right)=-1$.

</details>

### `fjfi-v1-08` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 1 (příklad 8, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte v $\mathbb{R}$ rovnici $\sin^2x+\sin^22x=1\,.$

- **a)** $\cup_{k\in\mathbb{Z}}\left\{\frac12\pi+k\pi,\frac16\pi+k\pi,\frac56\pi+k\pi\right\}$
- **b)** $\cup_{k\in\mathbb{Z}}\left\{\frac12\pi+2k\pi,\frac56\pi+2k\pi,\frac{11}6\pi+2k\pi\right\}$
- **c)** $\cup_{k\in\mathbb{Z}}\left\{\frac12\pi+k\pi\right\}$
- **d)** $\cup_{k\in\mathbb{Z}}\left\{\frac16\pi+2k\pi,\frac{11}6\pi+2k\pi\right\}$
- **e)** $\cup_{k\in\mathbb{Z}}\left\{\frac12\pi+k\pi,\frac76\pi+2k\pi,\frac{11}6\pi+2k\pi\right\}$

<details><summary>Ответ и решение</summary>

**a** — $\cup_{k\in\mathbb{Z}}\left\{\frac12\pi+k\pi,\frac16\pi+k\pi,\frac56\pi+k\pi\right\}$. $\sin^22x=1-\sin^2x=\cos^2x$, tj. $4\sin^2x\cos^2x=\cos^2x$: $\cos x=0$ nebo $\sin^2x=\frac14$.

</details>

### `fjfi-v2-08` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 2 (příklad 8, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešte v $\mathbb{R}$ rovnici $\sin x-\cos2x=0\,.$

- **a)** $\cup_{k\in\mathbb{Z}}\left\{\frac32\pi+2k\pi,\frac{11}6\pi+2k\pi,\frac16\pi+2k\pi\right\}$
- **b)** $\cup_{k\in\mathbb{Z}}\left\{\frac16\pi+2k\pi,\frac56\pi+2k\pi,\frac32\pi+2k\pi\right\}$
- **c)** $\cup_{k\in\mathbb{Z}}\left\{\frac16\pi+2k\pi,\frac{11}6\pi+2k\pi\right\}$
- **d)** $\cup_{k\in\mathbb{Z}}\left\{\frac56\pi+2k\pi,\frac32\pi+k\pi\right\}$
- **e)** $\cup_{k\in\mathbb{Z}}\left\{\frac16\pi+2k\pi,\frac56\pi+2k\pi,\frac{11}6\pi+2k\pi\right\}$

<details><summary>Ответ и решение</summary>

**b** — $\cup_{k\in\mathbb{Z}}\left\{\frac16\pi+2k\pi,\frac56\pi+2k\pi,\frac32\pi+2k\pi\right\}$. $\cos2x=1-2\sin^2x$: $2\sin^2x+\sin x-1=0$, $\sin x=\frac12$ nebo $\sin x=-1$.

</details>

### `vut-fsi-2014-z10-08` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 8, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Je-li $\cos2x=0{,}5;x\in\langle0;\pi\rangle$, pak $\operatorname{tg}x=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 8, 1 b)

- **a)** $-\sqrt3$
- **b)** $1$
- **c)** neexistuje
- **d)** $\pm\dfrac{\sqrt3}3$
- **e)** $\sqrt3$

<details><summary>Ответ и решение</summary>

**d** — $\pm\dfrac{\sqrt3}3$. $x=\frac\pi6$ nebo $x=\frac{5\pi}6$.

</details>

### `vut-fsi-2014-z5-19` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 5 (úloha 19, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Řešením rovnice $\sin2x=\sin x$ v intervalu $\left\langle0;\dfrac\pi2\right\rangle$ je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 19, 2 b)

- **a)** $x\in\left\{0;\dfrac\pi2\right\}$
- **b)** $x\in\left\{0;\dfrac\pi3\right\}$
- **c)** $x=\pm\dfrac\pi3$
- **d)** $x\in\left\{\dfrac\pi3;\dfrac\pi2\right\}$
- **e)** rovnice nemá řešení

<details><summary>Ответ и решение</summary>

**b** — $x\in\left\{0;\dfrac\pi3\right\}$. $\sin x(2\cos x-1)=0$.

</details>

### `vscht-05` — [VŠCHT, ukázka vzorového testu z matematiky (bakalářské studium) (úloha 5, 2 body)](https://studuj.vscht.cz/wp-content/uploads/2021/02/BC-ekonomove-matematika-prijimaci-zkouska-vzorovy-test.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Počet všech $x$ z intervalu $(\pi,2\pi)$, pro která platí $1-\cos^2x-\sin x=0$, je roven číslu

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $4$

<details><summary>Ответ и решение</summary>

**a** — $0$. $\sin^2x-\sin x=0$, tj. $\sin x=0$ nebo $\sin x=1$; na $(\pi,2\pi)$ je $\sin x<0$, řešení tam není.

</details>

### `vut-fsi-2014-z4-11` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 4 (úloha 11, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 16. Komplexní čísla · *Текст:* текст оригинала (по курсу)

Rovnice $x^4+1=0$ má v oboru komplexních čísel právě

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 4 (úloha 11, 1 b)

- **a)** čtyři kořeny
- **b)** tři kořeny
- **c)** dva kořeny
- **d)** jeden kořen
- **e)** žádný kořen

<details><summary>Ответ и решение</summary>

**a** — čtyři kořeny. Rovnice čtvrtého stupně má v $\mathbb C$ čtyři kořeny (zde různé).

</details>

### `fel-vzor01-7` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 7, 1 bod)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 18. Posloupnosti, 20. Geometrická posloupnost · *Текст:* текст оригинала (по курсу)

Jsou dány dvě rekurentní posloupnosti $(a_n)_{n=1}^{\infty}$ a $(b_n)_{n=1}^{\infty}$ následujícími vztahy: $a_1=3$, $b_1=0$ a pro $n\geqq2$ platí $a_n=2\cdot a_{n-1}$, $b_n=b_{n-1}+a_n$. Určete $b_{11}$.

- **a)** $2^{11}$
- **b)** $3\cdot2^{10}$
- **c)** $6138$
- **d)** $2048$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**c** — $6138$. $b_{11}=a_2+\dots+a_{11}=3(2+4+\dots+2^{10})=3(2^{11}-2)=6138$.

</details>

### `vut-fekt-2024-v2-12` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 12, 5 bodů)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

Jestliže pro aritmetickou posloupnost s prvním členem $a_1$ a diferencí $d$ platí $a_5/a_1=6$, čemu je rovno $d/a_1$?

- **a)** $1$
- **b)** $3/2$
- **c)** $5/4$
- **d)** $7/6$
- **e)** posloupnost neexistuje

<details><summary>Ответ и решение</summary>

**c** — $5/4$. $\frac{a_1+4d}{a_1}=1+4\frac d{a_1}=6$, tedy $\frac d{a_1}=\frac54$.

</details>

### `fit-2025-03` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2025 (příklad 3, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2025-s-resenim.pdf)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Mezi kořeny kvadratické rovnice $x^2-30x+81=0$ vložte čtyři čísla tak, aby spolu s vypočtenými kořeny tvořili šest po sobě jdoucích členů aritmetické posloupnosti. Rozhodněte, které tvrzení je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2024, příklad 6 (7 b)

- **a)** Žádná z ostatních možností není správná.
- **b)** Diference vzniklé posloupnosti je $d=4$.
- **c)** Součet prvního a posledního vloženého čísla je 27.
- **d)** Čtvrtý člen vzniklé posloupnosti je $\frac{87}{5}$.
- **e)** Třetí člen vzniklé posloupnosti je 15.

<details><summary>Ответ и решение</summary>

**d** — Čtvrtý člen vzniklé posloupnosti je $\frac{87}{5}$.. Kořeny $3$ a $27$: $d=\frac{24}{5}$, $a_4=3+3\cdot\frac{24}{5}=\frac{87}{5}$.

</details>

### `fit-2015-06` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 6, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 20. Geometrická posloupnost · *Текст:* текст оригинала (по курсу)

Nekonečná spirála se skládá z půlkružnic. Poloměr první půlkružnice je 6 cm a poloměr každé další je třikrát menší než poloměr předcházející polokružnice. Vypočtěte délku $l$ spirály.

- **a)** Žádná z ostatních možností není správná.
- **b)** $l=+\infty$ cm.
- **c)** $l=\frac32\pi$ cm.
- **d)** $l=6\pi$ cm.
- **e)** $l=9\pi$ cm.

<details><summary>Ответ и решение</summary>

**e** — $l=9\pi$ cm.. $l=6\pi+2\pi+\dots=\frac{6\pi}{1-\frac13}=9\pi$.

</details>

### `fit-2017-11` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2018 (příklad 11, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2017.pdf)

*Темы:* 20. Geometrická posloupnost · *Текст:* текст оригинала (по курсу)

Nekonečná spirála se skládá z půlkružnic. Poloměr první půlkružnice je 3 cm a poloměr každé další je třikrát menší než poloměr předcházející půlkružnice. Vypočtěte délku $l$ spirály.

- **a)** $l=\frac32\pi$ cm.
- **b)** $l=+\infty$ cm.
- **c)** $l=\frac92\pi$ cm.
- **d)** Žádná z ostatních možností není správná.
- **e)** $l=6\pi$ cm.

<details><summary>Ответ и решение</summary>

**c** — $l=\frac92\pi$ cm.. $l=3\pi+\pi+\frac\pi3+\dots=\frac{3\pi}{1-\frac13}=\frac92\pi$.

</details>

### `fit-2019-06` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2020 (příklad 6, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* 20. Geometrická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 2, D13

Mezi kořeny kvadratické rovnice $x^2-30x+81=0$ vložte čtyři čísla tak, aby spolu s vypočtenými kořeny tvořila šest po sobě jdoucích členů geometrické posloupnosti. Rozhodněte, které tvrzení je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2021, příklad 7 (7 b)

- **a)** Žádná z ostatních možností není správná.
- **b)** Součet prvního a posledního vloženého čísla je 30.
- **c)** Čtvrtý člen vzniklé posloupnosti je $9\sqrt[5]{3}$.
- **d)** Třetí člen vzniklé posloupnosti je 9.
- **e)** Kvocient vzniklé posloupnosti je $q=\sqrt[3]{3}$.

<details><summary>Ответ и решение</summary>

**c** — Čtvrtý člen vzniklé posloupnosti je $9\sqrt[5]{3}$.. Kořeny $3$ a $27$: $3q^5=27$, $q=\sqrt[5]9$; $a_4=3q^3=9\sqrt[5]3$.

</details>

### `fit-2021-08` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2022 (příklad 8, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 20. Geometrická posloupnost · *Текст:* текст оригинала (по курсу)

Nekonečná spirála se skládá z půlkružnic. Poloměr první půlkružnice je 6 cm a poloměr každé další půlkružnice je o $25\ \%$ menší než poloměr půlkružnice předcházející. Vypočítejte délku $l$ spirály.

- **a)** $l=8\pi$ cm.
- **b)** $l=24\pi$ cm.
- **c)** $l=+\infty$ cm.
- **d)** Žádná z ostatních možností není správná.
- **e)** $l=12\pi$ cm.

<details><summary>Ответ и решение</summary>

**b** — $l=24\pi$ cm.. $l=6\pi+4{,}5\pi+\dots=\frac{6\pi}{1-0{,}75}=24\pi$.

</details>

### `fit-2027-09` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2027 (příklad 9, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2027-s-resenim.pdf)

*Темы:* 20. Geometrická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Mezi kořeny kvadratické rovnice $x^2-30x+81=0$ vložte čtyři čísla tak, aby spolu s vypočtenými kořeny tvořila šest po sobě jdoucích členů rostoucí geometrické posloupnosti. Rozhodněte, které tvrzení je pravdivé.

- **a)** Čtvrtý člen vzniklé posloupnosti je $9\sqrt[5]{3}$.
- **b)** Třetí člen vzniklé posloupnosti je $9$.
- **c)** Kvocient vzniklé posloupnosti je $q=\sqrt[3]{3}$.
- **d)** Součet prvního a posledního vloženého čísla je $30$.
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**a** — Čtvrtý člen vzniklé posloupnosti je $9\sqrt[5]{3}$.. Kořeny $3$ a $27$: $3q^5=27$, $q=\sqrt[5]9$; $a_4=3q^3=9\sqrt[5]3$.

</details>

### `fjfi-v2-11` — [FJFI ČVUT, přijímací zkouška z matematiky (vzor), varianta 2 (příklad 11, 2 body)](https://edu.fjfi.cvut.cz/edu/Prijimaci_rizeni/Prijimaci_zkouska_BS.pdf)

*Темы:* 20. Geometrická posloupnost · *Текст:* текст оригинала (по курсу)

V geometrické posloupnosti je dáno $a_4=9a_2$ a $s_4=80$. Určete kvocient $q$ a člen $a_1$.

- **a)** $q=3\wedge a_1=2$
- **b)** $\{q=3\wedge a_1=2\}\vee\{q=3\wedge a_1=-2\}$
- **c)** $q=-3\wedge a_1=-4$
- **d)** $\{q=3\wedge a_1=2\}\vee\{q=-3\wedge a_1=-4\}$
- **e)** $q=3\wedge a_1=1$

<details><summary>Ответ и решение</summary>

**d** — $\{q=3\wedge a_1=2\}\vee\{q=-3\wedge a_1=-4\}$. $q^2=9$. Pro $q=3$: $s_4=40a_1=80$, $a_1=2$; pro $q=-3$: $s_4=-20a_1=80$, $a_1=-4$.

</details>

### `fit-2027-08` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2027 (příklad 8, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2027-s-resenim.pdf)

*Темы:* 21. Kombinatorika. Faktoriál · *Текст:* текст оригинала (по курсу)

Kolika způsoby je možné vybrat čtyřciferné číslo tak, aby bylo dělitelné čtyřmi?

- **a)** $1800$
- **b)** $2250$
- **c)** Žádná z ostatních možností není správná.
- **d)** $3600$
- **e)** $240$

<details><summary>Ответ и решение</summary>

**b** — $2250$. Čtyřciferných čísel je $9000$, každé čtvrté je dělitelné čtyřmi.

</details>

### `vut-fsi-2014-z6-10` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 6 (úloha 10, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 21. Kombinatorika. Faktoriál, 23. Kombinační číslo. Binomická věta · *Текст:* текст оригинала (по курсу)

Je-li $\dfrac{(n-1)!}{(n-3)!}=2\dbinom97$, pak $n=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 5 (úloha 10, 1 b)

- **a)** $7$
- **b)** $8$
- **c)** $9$
- **d)** $10$
- **e)** $11$

<details><summary>Ответ и решение</summary>

**d** — $10$. $(n-1)(n-2)=72$.

</details>

### `vut-fekt-2022-v1-12` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 12, 5 bodů)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Závodu se účastnilo 6 soutěžících z týmu A a 4 soutěžící z týmu B. Kolika způsoby mohla být obsazena první tři místa, jestliže víme, že závod vyhrál člen týmu A?

- **a)** $6\cdot\binom92$
- **b)** $6+\binom92$
- **c)** $288$
- **d)** $432$
- **e)** $486$

<details><summary>Ответ и решение</summary>

**d** — $432$. Vítěz $6$ způsoby, 2. a 3. místo $9\cdot8$: $432$.

</details>

### `vut-fekt-2022-v2-12` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 12, 5 bodů)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Závodu se účastnilo 6 soutěžících z týmu A a 4 soutěžící z týmu B. Kolika způsoby mohla být obsazena první tři místa, jestliže víme, že závod vyhrál člen týmu B?

- **a)** $4\cdot\binom92$
- **b)** $4+\binom92$
- **c)** $288$
- **d)** $324$
- **e)** $432$

<details><summary>Ответ и решение</summary>

**c** — $288$. Vítěz $4$ způsoby, 2. a 3. místo $9\cdot8$: $288$.

</details>

### `vut-fekt-2024-v1-13` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 13, 5 bodů)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 22. Variace. Permutace. Kombinace, 21. Kombinatorika. Faktoriál · *Текст:* текст оригинала (по курсу)

Kolika způsoby lze sestavit čtyřmístný kód, jestliže na první a druhé pozici mohou být písmena A, B, C, D, na třetí a na čtvrté pozici mohou být sudé číslice a písmena ani číslice se nesmí opakovat?

- **a)** $16$
- **b)** $60$
- **c)** $240$
- **d)** $400$
- **e)** $640$

<details><summary>Ответ и решение</summary>

**c** — $240$. Písmena $4\cdot3$, sudé číslice $0,2,4,6,8$: $5\cdot4$; celkem $12\cdot20=240$.

</details>

### `vut-fekt-2024-v2-13` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 13, 5 bodů)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* 22. Variace. Permutace. Kombinace, 21. Kombinatorika. Faktoriál · *Текст:* текст оригинала (по курсу)

Kolika způsoby lze sestavit třímístný kód, který se skládá z číslic 0, 1, 2, 3, 4, přičemž číslice se nesmí opakovat a kód nesmí začínat nulou?

- **a)** $24$
- **b)** $48$
- **c)** $60$
- **d)** $64$
- **e)** $125$

<details><summary>Ответ и решение</summary>

**b** — $48$. $4\cdot4\cdot3=48$.

</details>

### `fit-2014-1-09` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 9, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Kolika způsoby lze 10 dětí rozdělit na 3 skupiny, aby v první skupině bylo 5 dětí, ve druhé 3 děti a ve třetí 2 děti?

- **a)** $2520$
- **b)** $66$
- **c)** $1260$
- **d)** $166320$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**a** — $2520$. $\frac{10!}{5!\,3!\,2!}=2520$.

</details>

### `fit-2014-2-09` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 9, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Kolika způsoby lze 11 dětí rozdělit na 3 skupiny, aby v první skupině bylo 6 dětí, ve druhé 2 děti a ve třetí 3 děti?

- **a)** $942$
- **b)** $66$
- **c)** $143$
- **d)** $4620$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — $4620$. $\frac{11!}{6!\,2!\,3!}=4620$.

</details>

### `fit-2014-3-09` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 9, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Kolika způsoby lze 12 dětí rozdělit na 3 skupiny, aby v první skupině bylo 5 dětí, ve druhé 3 děti a ve třetí 4 děti?

- **a)** $2520$
- **b)** $27720$
- **c)** $4620$
- **d)** $166$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — $27720$. $\frac{12!}{5!\,3!\,4!}=27720$.

</details>

### `fit-2014-4-09` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 9, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Kolika způsoby lze 13 dětí rozdělit na 3 skupiny, aby v první skupině bylo 6 dětí, ve druhé 5 dětí a ve třetí 2 děti?

- **a)** $4520$
- **b)** $36036$
- **c)** $2160$
- **d)** $166320$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — $36036$. $\frac{13!}{6!\,5!\,2!}=36036$.

</details>

### `fit-2014-1-17` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 17, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Mezi 20 výrobky jsou právě 3 vadné výrobky. Kolika způsoby je možné vybrat 5 výrobků, aby mezi nimi byl maximálně jeden vadný výrobek?

- **a)** $13328$
- **b)** $7140$
- **c)** $6188$
- **d)** $13832$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**a** — $13328$. $\binom{17}{5}+3\binom{17}{4}=6188+7140=13328$.

</details>

### `fit-2014-2-17` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 17, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Mezi 20 výrobky jsou právě 3 vadné výrobky. Kolika způsoby je možné vybrat 5 výrobků, aby mezi nimi byli právě dva vadné výrobky?

- **a)** $13328$
- **b)** $9180$
- **c)** $6188$
- **d)** $2040$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — $2040$. $\binom32\binom{17}3=3\cdot680=2040$.

</details>

### `fit-2014-3-17` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 17, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Mezi 20 výrobky jsou právě 4 vadné výrobky. Kolika způsoby je možné vybrat 5 výrobků, aby mezi nimi byli alespoň tři vadné výrobky?

- **a)** $480$
- **b)** $570$
- **c)** $544$
- **d)** $496$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — $496$. $\binom43\binom{16}2+\binom44\binom{16}1=480+16=496$.

</details>

### `fit-2014-4-17` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 17, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Mezi 20 výrobky jsou právě 3 vadné výrobky. Kolika způsoby je možné vybrat 5 výrobků, aby mezi nimi byl nejvýše dva vadné výrobky?

- **a)** $13328$
- **b)** $7140$
- **c)** $6188$
- **d)** $2040$
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. $\binom{20}5-\binom{17}2=15504-136=15368$.

</details>

### `fit-2015-15` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 15, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Kolika různými způsoby můžeme vybrat 5 bonbónů z 20 čokoládových, 10 oříškových a 6 vanilkových?

- **a)** $33$
- **b)** $243$
- **c)** Žádná z ostatních možností není správná.
- **d)** $9$
- **e)** $21$

<details><summary>Ответ и решение</summary>

**e** — $21$. Kombinace s opakováním ze tří druhů: $\binom{5+2}{2}=21$.

</details>

### `fit-2016-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 13, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Kolika různými způsoby lze ze 7 mužů a 3 žen vybrat trojici tak, aby v ní byli alespoň jedna žena a alespoň jeden muž?

- **a)** $98$
- **b)** $63$
- **c)** $84$
- **d)** Žádná z ostatních možností není správná.
- **e)** $85$

<details><summary>Ответ и решение</summary>

**c** — $84$. $\binom{10}{3}-\binom73-\binom33=120-35-1=84$.

</details>

### `fit-2017-15` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2018 (příklad 15, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2017.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Ve skupině je 10 dětí z nich každé má jiné jméno než ostatní. Jsou mezi nimi i Hana a Jana. Kolika způsoby lze vybrat 5 dětí tak, aby mezi nimi byla alespoň jedna z dívek (Hana a Jana)?

- **a)** $240$
- **b)** $196$
- **c)** $126$
- **d)** $140$
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**b** — $196$. $\binom{10}{5}-\binom85=252-56=196$.

</details>

### `fit-2022-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 13, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Kolika způsoby lze 12 hráčů rozdělit na dvě šestičlenná družstva?

- **a)** $924$
- **b)** $1024$
- **c)** $462$
- **d)** Žádná z ostatních možností není správná.
- **e)** $66$

<details><summary>Ответ и решение</summary>

**c** — $462$. $\frac12\binom{12}{6}=462$ (družstva nejsou rozlišena).

</details>

### `fit-2024-08` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2024 (příklad 8, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2024.pdf)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* текст оригинала (по курсу)

Kolika různými způsoby lze ze 7 mužů a 3 žen vybrat trojici tak, aby v ní byla nejvýše jedna žena?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2019, příklad 12 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2021, příklad 11 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2022, příklad 12 (7 b)

- **a)** $63$
- **b)** Žádná z ostatních možností není správná.
- **c)** $98$
- **d)** $85$
- **e)** $35$

<details><summary>Ответ и решение</summary>

**c** — $98$. $\binom73+3\binom72=35+63=98$.

</details>

### `vut-fsi-2014-z7-10` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 10, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* текст оригинала (по курсу)

$\dbinom73-\dbinom37=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 7 (úloha 10, 1 b)

- **a)** $\dbinom70$
- **b)** $\dbinom10$
- **c)** $\dbinom74$
- **d)** $0$
- **e)** není definováno

<details><summary>Ответ и решение</summary>

**e** — není definováno. $\binom nk$ je na střední škole definováno jen pro $0\le k\le n$, $\binom37$ tedy neexistuje.

*Примечание:* Tatáž úloha je v testu FSI 2017 (zadání č. 7, úloha 10), kde je jako správná vyznačena možnost e). Při rozšířené definici $\binom37=0$ by vyšlo $35=\binom74$.

</details>

### `fit-2015-20` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 20, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 24. Pravděpodobnost, 21. Kombinatorika. Faktoriál · *Текст:* текст оригинала (по курсу)

Náhodně vybereme trojciferné číslo. Jaká je pravděpodobnost, že se v jeho zápisu vyskytuje cifra 8 alespoň dvakrát?

- **a)** $0{,}03$
- **b)** $0{,}97$
- **c)** $0{,}873$
- **d)** Žádná z ostatních možností není správná.
- **e)** $0{,}72$

<details><summary>Ответ и решение</summary>

**a** — $0{,}03$. $27$ z $900$ čísel.

</details>

### `fit-2016-17` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 17, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 24. Pravděpodobnost · *Текст:* текст оригинала (по курсу)

Jaká je pravděpodobnost, že při tažení 2 karet z balíčku o 52 kartách bude alespoň jedna z karet srdcová?

- **a)** Žádná z ostatních možností není správná.
- **b)** $\frac{15}{34}$
- **c)** $\frac{19}{34}$
- **d)** $\frac14$
- **e)** $\frac{45}{104}$

<details><summary>Ответ и решение</summary>

**b** — $\frac{15}{34}$. $1-\frac{\binom{39}{2}}{\binom{52}{2}}=1-\frac{741}{1326}=\frac{15}{34}$.

</details>

### `fit-2018-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2019 (příklad 13, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2018.pdf)

*Темы:* 24. Pravděpodobnost · *Текст:* текст оригинала (по курсу)

Jaká je pravděpodobnost, že při tažení 2 karet z balíčku o 52 kartách bude právě jedna jedna z karet srdcová?

- **a)** Žádná z ostatních možností není správná.
- **b)** $\frac{13}{34}$
- **c)** $\frac{15}{34}$
- **d)** $\frac14$
- **e)** $\frac{45}{104}$

<details><summary>Ответ и решение</summary>

**b** — $\frac{13}{34}$. $\frac{13\cdot39}{\binom{52}{2}}=\frac{13}{34}$.

*Примечание:* Zdvojené „jedna jedna“ je v originále.

</details>

### `fit-2026-15` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2026 (příklad 15, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 24. Pravděpodobnost · *Текст:* текст оригинала (по курсу)

Jaká je pravděpodobnost, že při tažení 2 karet z balíčku o 52 kartách bude právě jedna z karet srdcová?

- **a)** $\frac14$
- **b)** $\frac{15}{34}$
- **c)** $\frac{45}{104}$
- **d)** Žádná z ostatních možností není správná.
- **e)** $\frac{13}{34}$

<details><summary>Ответ и решение</summary>

**e** — $\frac{13}{34}$. $\frac{13\cdot39}{\binom{52}{2}}=\frac{507}{1326}=\frac{13}{34}$.

</details>

### `fit-2027-14` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2027 (příklad 14, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2027-s-resenim.pdf)

*Темы:* 24. Pravděpodobnost, 21. Kombinatorika. Faktoriál · *Текст:* текст оригинала (по курсу)

Náhodně vybereme trojciferné číslo. Jaká je pravděpodobnost, že se v jeho zápisu vyskytuje cifra 8 nejvýše jednou?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2020, příklad 16 (7 b)

- **a)** $0{,}25$
- **b)** Žádná z ostatních možností není správná.
- **c)** $0{,}873$
- **d)** $0{,}97$
- **e)** $0{,}72$

<details><summary>Ответ и решение</summary>

**d** — $0{,}97$. Osmička aspoň dvakrát: $888$ a $9+9+8=26$ čísel s právě dvěma osmičkami; $\frac{900-27}{900}=0{,}97$.

</details>

### `tul-2021-04` — [FP TUL, přijímací test z matematiky 2021/22 (Matematika, Bc.) (úloha 4, 20 bodů)](https://www.fp.tul.cz/images/fakulta/ukazky_testu/2021/KAP_Ma_Bc_jednoobor_2021.pdf)

*Темы:* 25. Analytická geometrie. Vektory, 34. Planimetrie · *Текст:* текст оригинала (по курсу)

V rovině jsou dány body $A[3;9],B[7;3],C[14;12]$. Spočtěte obvod a plochu trojúhelníka $\Delta ABC$.

<details><summary>Ответ и решение</summary>

$O=2\sqrt{13}+2\sqrt{130}\approx30{,}0146$, $S=39$. Řešení z PDF: $|AB|=2\sqrt{13}$, $|BC|=|CA|=\sqrt{130}$ — trojúhelník je rovnoramenný; výška na $AB$ je $3\sqrt{13}$, $S=\frac{2\sqrt{13}\cdot3\sqrt{13}}2=39$.

</details>

### `vsb-fbi-2015-pz31-06` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 31 (úloha 6, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* текст оригинала (по курсу)

Nalezněte obecnou rovnici přímky $r$ procházející středem úsečky $AB,A=[3,3],B=[7,-1]$ kolmo na přímku $p\colon5x+8y-19=0.$

<details><summary>Ответ и решение</summary>

$r\colon8x-5y-35=0$. Střed $S=[5,1]$; normála $p$ $(5,8)$ je směrem $r$, normála $r$ je $(8,-5)$.

</details>

### `fel-vzor01-12` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 12, 2 body)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 29. Směrnicový a úsekový tvar rovnice přímky · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 9, úloha 20

Směrnice přímek, které procházejí bodem $A=[0,-5]$ a mají od počátku souřadné soustavy vzdálenost $\sqrt5$, jsou

- **a)** $2$; $\frac12$
- **b)** $-3$; $2$
- **c)** $0$; $3$
- **d)** $-2$; $2$
- **e)** $-1$; $1$

<details><summary>Ответ и решение</summary>

**d** — $-2$; $2$. $y=kx-5$: $\frac{5}{\sqrt{k^2+1}}=\sqrt5\Rightarrow k=\pm2$.

</details>

### `vut-fekt-2023-v1-14` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 14, 5 bodů)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 30. Kuželosečky. Kružnice, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete obsah oblasti dané nerovnicemi $x^2+(y+1)^2\le2,\quad y\le x-1$.

- **a)** $\frac\pi2$
- **b)** $\pi$
- **c)** $2\pi$
- **d)** $4\pi$
- **e)** $8\pi$

<details><summary>Ответ и решение</summary>

**b** — $\pi$. Kruh se středem $[0,-1]$ a $r^2=2$; přímka $y=x-1$ prochází středem, oblast je polovina kruhu: $\frac{2\pi}2=\pi$.

</details>

### `vut-fekt-2023-v2-14` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 14, 5 bodů)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* 30. Kuželosečky. Kružnice, 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Určete obsah oblasti dané nerovnicemi $(x-1)^2+y^2\le4,\quad y\ge x-1$.

- **a)** $\frac\pi2$
- **b)** $\pi$
- **c)** $2\pi$
- **d)** $4\pi$
- **e)** $8\pi$

<details><summary>Ответ и решение</summary>

**c** — $2\pi$. Kruh se středem $[1,0]$ a $r=2$; přímka $y=x-1$ prochází středem, oblast je polovina kruhu: $\frac{4\pi}2=2\pi$.

</details>

### `fit-2016-18` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 18, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Poloměr kružnice zadané rovnicí $2x^2+2y^2-16x+12y+20=0$ je

- **a)** Neexistuje, nejedná se o rovnici kružnice.
- **b)** Roven 10.
- **c)** Jeho druhá mocnina je rovna 35.
- **d)** Jeho druhá mocnina je 60.
- **e)** Žádná z osatních možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z osatních možností není správná.. $(x-4)^2+(y+3)^2=15$, tedy $r^2=15$.

*Примечание:* Překlep „osatních“ je v originále.

</details>

### `fit-2025-12` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2025 (příklad 12, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2025-s-resenim.pdf)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* текст оригинала (по курсу)

Kuželosečku danou rovnicí $x^2-4x+y^2-6y+9=0$ posuňte rovnoběžně s osou $y$ tak, aby se dotýkala osy $x$. Bodem dotyku je bod

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2019, příklad 14 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2021, příklad 16 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2024, příklad 16 (7 b)

- **a)** Žádná z ostatních možností není správná.
- **b)** $[2,3]$
- **c)** $[3,0]$
- **d)** $[2,0]$
- **e)** $[0,2]$

<details><summary>Ответ и решение</summary>

**d** — $[2,0]$. $(x-2)^2+(y-3)^2=4$: kružnice se středem $[2,3]$ a poloměrem $2$; po posunutí se osy $x$ dotkne v bodě $[2,0]$.

</details>

### `fit-2026-14` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2026 (příklad 14, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 31. Elipsa · *Текст:* текст оригинала (по курсу)

Pro délky poloos elipsy zadané rovnicí $2x^2+9y^2+16x-36y+50=0$ platí

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2020, příklad 14 (7 b)

- **a)** Neexistují, nejedná se o rovnici elipsy.
- **b)** Delší poloosa je dvojnásobkem kratší.
- **c)** Součin jejich druhých mocnin je 18.
- **d)** Žádná z ostatních možností není správná.
- **e)** Jejich součet je 11.

<details><summary>Ответ и решение</summary>

**c** — Součin jejich druhých mocnin je 18.. $2(x+4)^2+9(y-2)^2=18$, tj. $\frac{(x+4)^2}{9}+\frac{(y-2)^2}{2}=1$: $a^2b^2=18$.

</details>

### `fit-2015-18` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 18, 3 body)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 32. Hyperbola · *Текст:* текст оригинала (по курсу)

Pro délky poloos hyperboly zadané rovnicí $4x^2-9y^2-24x-36y-36=0$ platí

- **a)** Žádná z ostatních možností není správná.
- **b)** Neexistují, nejedná se o rovnici hyperboly.
- **c)** Delší poloosa je dvojnásobkem kratší.
- **d)** Součin jejich druhých mocnin je 36.
- **e)** Jejich součet je 13.

<details><summary>Ответ и решение</summary>

**d** — Součin jejich druhých mocnin je 36.. $\frac{(x-3)^2}{9}-\frac{(y+2)^2}{4}=1$: $a^2b^2=36$.

</details>

### `vut-fsi-2014-z10-18` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 10 (úloha 18, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Je-li $n$ libovolné kladné celé číslo, pak trojúhelník o stranách $n;n+1;n+2$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 3 (úloha 18, 2 b)

- **a)** existuje vždy
- **b)** neexistuje nikdy
- **c)** existuje jen pro lichá $n$
- **d)** v jednom případě neexistuje
- **e)** žádná z uvedených odpovědí není správná

<details><summary>Ответ и решение</summary>

**d** — v jednom případě neexistuje. Trojúhelníková nerovnost $n+(n+1)>n+2$ platí pro $n>1$; pro $n=1$ trojúhelník neexistuje.

</details>

### `vut-fekt-2022-v1-15` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 01 (úloha 15, 5 bodů)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 35. Stereometrie · *Текст:* текст оригинала (по курсу)

Určete objem kvádru, jestliže obsahy jeho stěn jsou 15, 24 a 40 cm$^2$.

- **a)** $90$ cm$^3$
- **b)** $108$ cm$^3$
- **c)** $120$ cm$^3$
- **d)** $144$ cm$^3$
- **e)** $150$ cm$^3$

<details><summary>Ответ и решение</summary>

**c** — $120$ cm$^3$. $(abc)^2=ab\cdot bc\cdot ca=15\cdot24\cdot40=14400$.

</details>

### `vut-fekt-2022-v2-15` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 15, 5 bodů)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* 35. Stereometrie, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Určete objem kvádru, jestliže strana $a=1$ cm, strana $c$ je o 1 cm delší než strana $b$ a povrch kvádru je 38 cm$^2$.

- **a)** $6$ cm$^3$
- **b)** $12$ cm$^3$
- **c)** $20$ cm$^3$
- **d)** $30$ cm$^3$
- **e)** $42$ cm$^3$

<details><summary>Ответ и решение</summary>

**b** — $12$ cm$^3$. $2(b+b(b+1)+(b+1))=38\Rightarrow b^2+3b-18=0$, $b=3$, $c=4$, $V=12$.

</details>

### `vut-fsi-2014-z2-18` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 2 (úloha 18, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* 35. Stereometrie · *Текст:* текст оригинала (по курсу)

Objem krychle vepsané do koule o průměru $d$ je

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 6 (úloha 18, 2 b)

- **a)** $\dfrac43\pi d^3$
- **b)** $4\pi d^2$
- **c)** $d^3$
- **d)** $3^{\frac32}d^3$
- **e)** $3^{-\frac32}d^3$

<details><summary>Ответ и решение</summary>

**e** — $3^{-\frac32}d^3$. Tělesová úhlopříčka $a\sqrt3=d$.

</details>

### `vsb-fbi-2013-pz3-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 3 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=\dfrac{ax-x^2}{a^2+2ax+x^2}\cdot\dfrac{a^2+ax}{a^2-2ax+x^2}$ a stanovte podmínky, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=\dfrac{ax}{a^2-x^2}$, podmínka $a\ne\pm x$. $\frac{x(a-x)}{(a+x)^2}\cdot\frac{a(a+x)}{(a-x)^2}=\frac{ax}{(a+x)(a-x)}$.

</details>

### `vsb-fbi-2013-pz4-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 4 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=\left[\left(\dfrac xy\right)^2-\dfrac x{y^2}\right]:\left(\dfrac y{x-1}\right)^{-2}$ a stanovte podmínky, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=\dfrac x{x-1}$, podmínky $y\ne0$, $x\ne1$. $\frac{x(x-1)}{y^2}\cdot\frac{y^2}{(x-1)^2}=\frac x{x-1}$.

</details>

### `vsb-fbi-2013-pz11-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2013/14, PZ 11 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20132014/InformacePRAR20132014.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=\left[\left(\dfrac xy-\dfrac yx\right):\left(\dfrac xy-2+\dfrac yx\right)\right]:\left(1+\dfrac yx\right)$ a stanovte, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=\dfrac x{x-y}$, podmínky $x\ne0$, $y\ne0$, $x\ne\pm y$. $\frac{(x-y)(x+y)}{xy}\cdot\frac{xy}{(x-y)^2}\cdot\frac x{x+y}=\frac x{x-y}$.

</details>

### `vsb-fbi-2015-pz23-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 23 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=\left(\dfrac4{x-2}+1\right)\cdot\left(\dfrac4{x+2}-1\right)$ a určete, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=-1$, podmínka $x\ne\pm2$. $\frac{x+2}{x-2}\cdot\frac{2-x}{x+2}=-1$.

</details>

### `vsb-fbi-2015-pz24-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 24 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=\left(\dfrac1y+\dfrac15\right)^{-1}\cdot\left(\dfrac1y-\dfrac y{25}\right)$ a určete, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=\dfrac{5-y}5$, podmínky $y\ne0$, $y\ne-5$. $\frac{5y}{y+5}\cdot\frac{(5-y)(5+y)}{25y}=\frac{5-y}5$.

</details>

### `vsb-fbi-2015-pz25-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 25 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=\left(\dfrac{x-2}{x-3}\right)^{-1}+\dfrac{5x}{x^2-4}-\left(\dfrac{x+2}x\right)^{-1}$ a určete, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=\dfrac{6(x-1)}{x^2-4}$, podmínky $x\ne0$, $x\ne3$, $x\ne\pm2$. $\frac{x-3}{x-2}+\frac{5x}{x^2-4}-\frac x{x+2}=\frac{(x-3)(x+2)+5x-x(x-2)}{x^2-4}=\frac{6x-6}{x^2-4}$.

</details>

### `vsb-fbi-2015-pz31-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 31 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=\dfrac{x^2-y^2}{3x^2y^2}:\left(\dfrac{1+2x}x-\dfrac{2y-1}y\right)$ a určete, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=\dfrac{x-y}{3xy}$, podmínky $x\ne0$, $y\ne0$, $x\ne-y$. Závorka je $\frac{x+y}{xy}$; $\frac{(x-y)(x+y)}{3x^2y^2}\cdot\frac{xy}{x+y}=\frac{x-y}{3xy}$.

</details>

### `vsb-fbi-2015-pz32-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2015/16, PZ 32 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20152016/InformacePRAR20152016.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=\left(\dfrac1{1-a}-1\right):\left(\dfrac{2a^2}{1-a}-a\right)$ a určete, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=\dfrac1{3a-1}$, podmínky $a\ne0$, $a\ne1$, $a\ne\frac13$. $\frac a{1-a}:\frac{3a^2-a}{1-a}=\frac a{a(3a-1)}$.

</details>

### `vsb-fbi-2017-pz1-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 1 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=\left(\dfrac a{b^2+ab}-\dfrac2{a+b}+\dfrac b{a^2+ab}\right):\left(\dfrac ba-2+\dfrac ab\right)$ a určete, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=\dfrac1{a+b}$, podmínky $a\ne\pm b$, $a\ne0$, $b\ne0$. Řešení z PDF: první závorka je $\frac{a^2-2ab+b^2}{ab(a+b)}$, druhá $\frac{b^2-2ab+a^2}{ab}$.

</details>

### `vsb-fbi-2017-pz2-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 2 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=1-t+\dfrac t{1-\frac t{t+1}}$ a určete, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=t^2+1$, podmínka $t\ne-1$. Řešení z PDF: $1-\frac t{t+1}=\frac1{t+1}$, tedy $V=1-t+t(t+1)$.

</details>

### `vsb-fbi-2017-pz6-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 6 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=\left[\left(\dfrac xy-\dfrac yx\right):\left(\dfrac xy-2+\dfrac yx\right)\right]:\left(1+\dfrac yx\right)$ a určete, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=\dfrac x{x-y}$, podmínky $x\ne0$, $y\ne0$, $x\ne\pm y$. Řešení z PDF: $\frac{x^2-y^2}{xy}:\frac{x^2-2xy+y^2}{xy}:\frac{x+y}x=\frac x{x-y}$.

</details>

### `vsb-fbi-2017-pz14-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 14 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=\left(\dfrac u{u+v}+\dfrac v{u-v}\right):\left(1-\dfrac{2uv}{u^2+v^2}\right)^{-1}$ a určete, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=\dfrac{u-v}{u+v}$, podmínka $u\ne\pm v$. Řešení z PDF: $\frac{u^2+v^2}{(u+v)(u-v)}\cdot\frac{(u-v)^2}{u^2+v^2}=\frac{u-v}{u+v}$.

</details>

### `vsb-fbi-2017-pz15-01` — [FBI VŠB, přijímací zkouška z matematiky AR 2017/18, PZ 15 (úloha 1, 10 bodů)](https://www.fbi.vsb.cz/export/sites/fbi/cs/.content/galerie-souboru/Studium/20172018/Informace_vysledky_PR_20172018.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $V=\dfrac{\frac x4-1+\frac1x}{\frac{x+2}x\cdot\frac{x-2}4}$ a určete, kdy je reálný.

<details><summary>Ответ и решение</summary>

$V=\dfrac{x-2}{x+2}$, podmínky $x\ne0$, $x\ne\pm2$. Řešení z PDF: $\frac{x^2-4x+4}{4x}\cdot\frac{4x}{(x+2)(x-2)}=\frac{x-2}{x+2}$.

</details>

### `vut-fekt-2022-v2-13` — [FEKT VUT, přijímací test MATEMATIKA 2022, verze FEKT 02 (úloha 13, 5 bodů)](https://vut.cz/pomocne2018/f124247/d232373/p229505)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Kolik litrů kyseliny je třeba přidat do 5 litrů 20% roztoku kyseliny, abychom získali roztok padesátiprocentní?

- **a)** $1$
- **b)** $2$
- **c)** $3$
- **d)** $4$
- **e)** $5$

<details><summary>Ответ и решение</summary>

**c** — $3$. $\frac{1+x}{5+x}=\frac12\Rightarrow x=3$.

</details>

### `vut-fekt-2023-v1-06` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 6, 3 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $\dfrac{x-1}{x^2+2x}-\dfrac{x-4}{x^2-4}$.

- **a)** $\frac{2x-5}{2x^2+2x-4}$
- **b)** $\frac{3}{2x+4}$
- **c)** $\frac{-3}{x^2+2x}$
- **d)** $\frac{1}{x^2-2x}$
- **e)** $\frac{1}{x^2+2x}$

<details><summary>Ответ и решение</summary>

**d** — $\frac{1}{x^2-2x}$. $\frac{(x-1)(x-2)-x(x-4)}{x(x+2)(x-2)}=\frac{x+2}{x(x+2)(x-2)}=\frac1{x^2-2x}$.

</details>

### `vut-fekt-2023-v2-06` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 6, 3 body)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $\dfrac{x+5}{x^2-9}-\dfrac{x+1}{x^2-3x}$.

- **a)** $\frac{2x+6}{2x^2-3x-9}$
- **b)** $\frac{4}{3x-9}$
- **c)** $\frac{x}{x^2-9}$
- **d)** $\frac{1}{x^2-3x}$
- **e)** $\frac{1}{x^2+3x}$

<details><summary>Ответ и решение</summary>

**e** — $\frac{1}{x^2+3x}$. $\frac{x(x+5)-(x+1)(x+3)}{x(x-3)(x+3)}=\frac{x-3}{x(x-3)(x+3)}=\frac1{x^2+3x}$.

</details>

### `vut-fekt-2023-v1-15` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 01 (úloha 15, 5 bodů)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Počty chlapců ve třídách 1.A a 1.B jsou v poměru $4:3$, počty dívek jsou v poměru $1:2$. Z celkového počtu žáků v 1.A tvoří dívky $1/3$. Jakou část všech žáků 1.B tvoří dívky?

- **a)** $2/3$
- **b)** $3/5$
- **c)** $4/7$
- **d)** $5/9$
- **e)** Úlohu nelze jednoznačně vyřešit.

<details><summary>Ответ и решение</summary>

**c** — $4/7$. Chlapci $4k$ a $3k$, dívky $m$ a $2m$. V 1.A: $\frac m{4k+m}=\frac13\Rightarrow m=2k$. V 1.B: $\frac{4k}{3k+4k}=\frac47$.

</details>

### `vut-fekt-2023-v2-15` — [FEKT VUT, přijímací test MATEMATIKA 2023, verze FEKT 02 (úloha 15, 5 bodů)](https://vut.cz/pomocne2018/f137459/d248394/p249980)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Počty chlapců ve třídách 1.A a 1.B jsou v poměru $5:3$, počty dívek jsou v poměru $1:2$. Z celkového počtu žáků v 1.A tvoří dívky $2/5$. Jakou část všech žáků 1.B tvoří dívky?

- **a)** $4/5$
- **b)** $9/13$
- **c)** $16/21$
- **d)** $20/29$
- **e)** Úlohu nelze jednoznačně vyřešit.

<details><summary>Ответ и решение</summary>

**d** — $20/29$. Chlapci $5k$ a $3k$, dívky $m$ a $2m$. V 1.A: $\frac m{5k+m}=\frac25\Rightarrow m=\frac{10k}3$. V 1.B: $\frac{20k/3}{3k+20k/3}=\frac{20}{29}$.

</details>

### `vut-fekt-2024-v1-06` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 01 (úloha 6, 3 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $\dfrac{1-3x}{x^3-x}+\dfrac1{x-1}$.

- **a)** $\frac{x}{(x-1)(x+1)}$
- **b)** $\frac{x+1}{x(x-1)}$
- **c)** $\frac{x-1}{x(x+1)}$
- **d)** $\frac{x(x+1)}{x-1}$
- **e)** $\frac{x(x-1)}{x+1}$

<details><summary>Ответ и решение</summary>

**c** — $\frac{x-1}{x(x+1)}$. $\frac{1-3x+x(x+1)}{x(x-1)(x+1)}=\frac{(x-1)^2}{x(x-1)(x+1)}=\frac{x-1}{x(x+1)}$.

</details>

### `vut-fekt-2024-v2-06` — [FEKT VUT, přijímací test MATEMATIKA 2024, verze FEKT 02 (úloha 6, 3 body)](https://vut.cz/pomocne2018/f151468/d267522/p273733)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Upravte výraz $\dfrac{3x+1}{x^3-x}+\dfrac1{x+1}$.

- **a)** $\frac{x}{(x-1)(x+1)}$
- **b)** $\frac{x+1}{x(x-1)}$
- **c)** $\frac{x-1}{x(x+1)}$
- **d)** $\frac{x(x+1)}{x-1}$
- **e)** $\frac{x(x-1)}{x+1}$

<details><summary>Ответ и решение</summary>

**b** — $\frac{x+1}{x(x-1)}$. $\frac{3x+1+x(x-1)}{x(x-1)(x+1)}=\frac{(x+1)^2}{x(x-1)(x+1)}=\frac{x+1}{x(x-1)}$.

</details>

### `fit-2015-14` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2016 (příklad 14, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Z jakého nejmenšího počtu shodných krychlí, s velikostí hrany v centimetrech vyjádřenou přirozeným číslem, můžeme sestavit kvádr o rozměrech 9, 12 a 21 cm?

- **a)** $594$
- **b)** $84$
- **c)** Žádná z ostatních možností není správná.
- **d)** $252$
- **e)** $756$

<details><summary>Ответ и решение</summary>

**b** — $84$. Hrana $\mathrm{NSD}(9,12,21)=3$ cm: $3\cdot4\cdot7=84$ krychlí.

</details>

### `fit-2017-06` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2018 (příklad 6, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2017.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Plavecký bazén si vede měsíční statistiky. Jedna čtvrtina návštěvníků chodí do bazénu alespoň dvakrát týdně a jedna pětina z nich dokonce denně. Jedna pětina všech návštěvníků chodí jedenkrát týdně. Ostatní návštěvníci chodí několikrát do měsíce, ale nepravidelně. Každý desátý návštěvník se po první návštěvě víckrát nevrátí. Rozhodněte, které tvrzení je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2016, příklad 12 (5 b)

- **a)** Právě dvakrát týdně chodí do bazénu $5\%$ návštěvníků.
- **b)** Do bazénu chodí pravidelně $45\%$ návštěvníků.
- **c)** Žádná z ostatních možností není správná.
- **d)** Do bazénu chodí pravidelně $65\%$ návštěvníků.
- **e)** Nepravidelně chodí do bazénu $65\%$ návštěvníků.

<details><summary>Ответ и решение</summary>

**b** — Do bazénu chodí pravidelně $45\%$ návštěvníků.. Pravidelně: $25\ \%+20\ \%=45\ \%$; nepravidelně $100-45-10=45\ \%$.

</details>

### `fit-2020-15` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2021 (příklad 15, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2020.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Převodovka se skládá ze tří ozubených kol spojených řetězy. Nejmenší kolo je spojené s prostředním kolem a prostřední kolo je spojené s největším kolem. Kola mají postupně 27, 54 a 99 zubů. Po jakém minimálním počtu otoček největšího kola budou všechna tři kola ve stejné pozici jako na začátku pohybu?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2019, příklad 16 (7 b)

- **a)** $594$
- **b)** $9$
- **c)** $257$
- **d)** $11$
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních možností není správná.. $\mathrm{NSN}(27,54,99)=594$ zubů, tj. $594:99=6$ otoček největšího kola.

</details>

### `fit-2022-16` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 16, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Z jakého nejmenšího počtu shodných krychlí, s velikostí hrany v centimetrech vyjádřenou přirozeným číslem, můžeme sestavit kvádr o rozměrech 8, 12 a 28 cm?

- **a)** $672$
- **b)** $168$
- **c)** Žádná z ostatních možností není správná.
- **d)** $80$
- **e)** $21$

<details><summary>Ответ и решение</summary>

**c** — Žádná z ostatních možností není správná.. Největší hrana $\mathrm{NSD}(8,12,28)=4$ cm: $2\cdot3\cdot7=42$ krychlí.

</details>

### `fit-2026-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2026 (příklad 13, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Dětský tábor má kapacitu 80 dětí. Vytvoří-li děti trojice, nikdo nezbude; vytvoří-li dvojice, zbude jedno dítě. Vytvoří-li sedmice, nikdo nezbude; vytvoří-li čtveřice, zbudou tři děti. Kolik zbude dětí, vytvoří-li šestice?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2018, příklad 14 (7 b)

- **a)** $2$
- **b)** Žádná z ostatních možností není správná.
- **c)** $3$
- **d)** $1$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**c** — $3$. Liché násobky $21$ do $80$: $21$, $63$; zbytek $3$ po dělení čtyřmi má jen $63$, a $63=6\cdot10+3$.

</details>

### `vut-fsi-2014-z7-15` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 15, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Cyklista ujel 48 km. Polovinu trati jel průměrnou rychlostí 12 kmh$^{-1}$, druhou polovinu průměrnou rychlostí 24 kmh$^{-1}$. Průměrná rychlost na celé trati byla

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 1 (úloha 15, 1 b)

- **a)** 14 kmh$^{-1}$
- **b)** 16 kmh$^{-1}$
- **c)** 18 kmh$^{-1}$
- **d)** 20 kmh$^{-1}$
- **e)** žádná odpověď není správná

<details><summary>Ответ и решение</summary>

**b** — 16 kmh$^{-1}$. $2+1=3$ h na $48$ km.

</details>

### `vut-fsi-2014-z8-15` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 8 (úloha 15, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní, 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

36 rour stejného průměru bude uloženo na sebe. Kolik kusů nejméně musí mít zakládající řada?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 8 (úloha 15, 1 b)

- **a)** $10$
- **b)** $9$
- **c)** $8$
- **d)** $7$
- **e)** $6$

<details><summary>Ответ и решение</summary>

**c** — $8$. Řady po $n,n-1,\dots,1$: $\frac{n(n+1)}2=36$.

</details>

### `vut-fsi-2014-z9-15` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 9 (úloha 15, 1 bod)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Náměstí tvaru obdélníka o rozměrech $a=75m$, $b=60m$ má být po obvodu osazeno stejně vzdálenými pouličními lampami. Kolik lamp nejméně bude ještě potřeba, jestliže ve třech rozích již lampy jsou?

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 10 (úloha 15, 1 b)

- **a)** $10$
- **b)** $13$
- **c)** $14$
- **d)** $15$
- **e)** $18$

<details><summary>Ответ и решение</summary>

**d** — $15$. Lampy jsou v rozích, rozestup dělí $75$ i $60$: největší $15$ m, tedy $\frac{270}{15}=18$ lamp, chybí $15$.

</details>

### `vut-fsi-2014-z7-16` — [FSI VUT, přijímací test MATEMATIKA 2014, zadání č. 7 (úloha 16, 2 body)](https://www.vut.cz/pomocne/slozky/statistiky-prijimaciho-rizeni/statistiky-prijimaciho-rizeni-2014-2015-f36466/fsi-zadani-a-vysledky-prijimaci-zkousky-d95805/zadani-prijimacich-zkousek-z-matematiky-do-bakalarskeho-studia-p86179)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

$\dfrac{x^2-xy}{x^4-x^2y^2}:\dfrac{xy}{x^2y+xy^2}=$

*Встречается также:* FSI VUT, přijímací test MATEMATIKA 2017, zadání č. 2 (úloha 16, 2 b)

- **a)** $x-y$
- **b)** $y-x$
- **c)** $\dfrac1{x+1}$
- **d)** $\dfrac1{x+y}$
- **e)** $\dfrac1x$

<details><summary>Ответ и решение</summary>

**e** — $\dfrac1x$. $\frac1{x(x+y)}\cdot(x+y)$.

</details>

## Уровень 3 — сложный

### `fit-2014-1-14` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 14, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 1. Množina. Podmnožina · *Текст:* текст оригинала (по курсу)

V testu byly tři úlohy. Šest studentů vyřešilo všechny tři úlohy, dva studenti ani jednu. První úlohu vyřešilo celkem 22 studentů, druhou celkem 19 studentů a třetí rovněž 19 studentů. První a zároveň druhou úlohu vyřešilo 12 studentů, první a zároveň třetí úlohu vyřešilo 14 studentů a druhou a zároveň třetí úlohu 10 studentů. Rozhodněte, které tvrzení je pravdivé.

- **a)** Popsaná situace nemůže nastat.
- **b)** Neexistuje student, který by vyřešil pouze první úlohu.
- **c)** První nebo druhou úlohu vyřešilo méně studentů než druhou nebo třetí úlohu.
- **d)** Test psalo 32 studentů.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Test psalo 32 studentů.. $22+19+19-12-14-10+6+2=32$.

</details>

### `fit-2014-2-14` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 14, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 1. Množina. Podmnožina · *Текст:* текст оригинала (по курсу)

V testu byly tři příklady. Osm studentů vyřešilo všechny tři příklady, dva studenti ani jeden. První příklad vyřešilo celkem 25 studentů, druhý celkem 21 studentů a třetí 19 studentů. První a zároveň druhý příklad vyřešilo 15 studentů, první a zároveň třetí příklad vyřešilo také 15 studentů a druhý a zároveň třetí příklad 10 studentů. Rozhodněte, které tvrzení je pravdivé.

- **a)** Popsaná situace nemůže nastat.
- **b)** Neexistuje student, který by vyřešil pouze první příklad.
- **c)** První nebo druhý příklad vyřešilo více studentů než druhý nebo třetí příklad.
- **d)** Test psalo 32 studentů.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — První nebo druhý příklad vyřešilo více studentů než druhý nebo třetí příklad.. $|1\cup2|=25+21-15=31>|2\cup3|=21+19-10=30$; test psalo $35$ studentů.

</details>

### `fit-2014-3-14` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 14, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 1. Množina. Podmnožina · *Текст:* текст оригинала (по курсу)

V testu byly tři příklady. Devět studentů vyřešilo všechny tři příklady, dva studenti ani jeden. První příklad vyřešilo celkem 22 studentů, druhý celkem 20 studentů a třetí 24 studentů. První a zároveň druhý příklad vyřešilo 14 studentů, první a zároveň třetí příklad vyřešilo 17 studentů a druhý a zároveň třetí příklad 12 studentů. Rozhodněte, které tvrzení je pravdivé.

- **a)** Popsaná situace nemůže nastat.
- **b)** Neexistuje student, který by vyřešil pouze první příklad.
- **c)** První nebo druhý příklad vyřešilo více studentů než druhý nebo třetí příklad.
- **d)** Test psalo 32 studentů.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Neexistuje student, který by vyřešil pouze první příklad.. Pouze první: $22-14-17+9=0$.

</details>

### `fit-2014-4-14` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 14, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 1. Množina. Podmnožina · *Текст:* текст оригинала (по курсу)

V testu byly tři příklady. Pět studentů vyřešilo všechny tři příklady, dva studenti ani jeden. První příklad vyřešilo celkem 20 studentů, druhý celkem 19 studentů a třetí 17 studentů. První a zároveň druhý příklad vyřešilo 12 studentů, první a zároveň třetí příklad vyřešilo také 12 studentů a druhý a zároveň třetí příklad 7 studentů. Rozhodněte, které tvrzení je pravdivé.

- **a)** Popsaná situace nemůže nastat.
- **b)** Neexistuje student, který by vyřešil pouze první příklad.
- **c)** První nebo druhý příklad vyřešilo méně studentů než druhý nebo třetí příklad.
- **d)** Test psalo 30 studentů.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — První nebo druhý příklad vyřešilo méně studentů než druhý nebo třetí příklad.. $|1\cup2|=27<|2\cup3|=29$; test psalo $32$ studentů.

</details>

### `fit-2016-06` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 6, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 1. Množina. Podmnožina, 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Jsou dány dvě množiny $A=\{x^2-4x+5\mid x\in(1,4\rangle\}$ a $B=\{x\mid |x-4|>\frac12\}$. Průnikem množin $A$ a $B$ je

- **a)** $\left(\frac72,\frac92\right)$
- **b)** $\left(2,\frac72\right)\cup\left(\frac92,5\right\rangle$
- **c)** $\left\langle1,\frac72\right)\cup\left(\frac92,5\right\rangle$
- **d)** Žádná z ostatních možností není správná.
- **e)** Všechna reálná čísla.

<details><summary>Ответ и решение</summary>

**c** — $\left\langle1,\frac72\right)\cup\left(\frac92,5\right\rangle$. $A=\langle1,5\rangle$, $B=\left(-\infty,\frac72\right)\cup\left(\frac92,\infty\right)$.

</details>

### `fit-2017-07` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2018 (příklad 7, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2017.pdf)

*Темы:* 1. Množina. Podmnožina, 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу)

Jsou dány dvě množiny $A=\{2\sin(x-\pi)\mid x\in\langle0,\pi\rangle\}$ a $B=\{x\mid |x-1|\ge1\}$. Průnikem množin $A$ a $B$ je

- **a)** Prázdná množina
- **b)** Žádná z ostatních možností není správná.
- **c)** $\langle-2,0\rangle$
- **d)** $\{0,2\}$
- **e)** $\langle-2,0\rangle\cup\{2\}$

<details><summary>Ответ и решение</summary>

**c** — $\langle-2,0\rangle$. $\sin(x-\pi)=-\sin x\in\langle-1,0\rangle$, tedy $A=\langle-2,0\rangle$; $B=(-\infty,0\rangle\cup\langle2,\infty)$.

</details>

### `fit-2026-04` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2026 (příklad 4, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 1. Množina. Podmnožina · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 1, úloha 16

Ve třídě je 30 žáků. Jedna třetina z nich si k maturitě zvolila matematiku a fyziku zároveň. Alespoň jeden z těchto předmětů si zvolilo 24 žáků. Maturovat z angličtiny se rozhodlo 22 žáků. Všechny tři předměty si vybralo 8 žáků a jen matematiku 3 žáci. Matematiku a zároveň angličtinu si vybralo 15 žáků. Dva žáci si nevybrali ani jeden z těchto tří předmětů. Rozhodněte, které tvrzení je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2022, příklad 6 (7 b)

- **a)** Žádná z ostatních možností není správná.
- **b)** Angličtinu nebo fyziku si vybralo více žáků než matematiku nebo fyziku.
- **c)** Jen angličtinu si vybralo více žáků než matematiku a zároveň fyziku.
- **d)** Neexistuje žák, který si zvolil jen fyziku.
- **e)** Popsaná situace nemůže nastat.

<details><summary>Ответ и решение</summary>

**b** — Angličtinu nebo fyziku si vybralo více žáků než matematiku nebo fyziku.. Vennův diagram: jen M $3$, M+F bez A $2$, M+A bez F $7$, všechny tři $8$, F+A bez M $3$, jen F $1$, jen A $4$, nic $2$. Angličtinu nebo fyziku má $30-2-3=25>24$.

</details>

### `fit-2014-1-20` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 20, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Prvním přítokem se bazén naplní za 8 hodin, druhým přítokem za 12 hodin a výpustí vyteče za 16 hodin. Při napouštění jsme otevřeli oba přítoky, ale zapomněli jsme zavřít výpust. Naplní se bazén? A kolik vody jsme zbytečně vypustili?

- **a)** Bazén se nikdy nenaplní.
- **b)** Bazén se naplní za 16 hodin a zbytečně vyteče objem vody odpovídající $\frac12$ objemu bazénu.
- **c)** Bazén se naplní za 7 hodin a zbytečně vyteče objem vody odpovídající $\frac37$ objemu bazénu.
- **d)** Bazén se naplní za $\frac{48}{7}$ hodiny a zbytečně vyteče objem vody odpovídající $\frac37$ objemu bazénu.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**d** — Bazén se naplní za $\frac{48}{7}$ hodiny a zbytečně vyteče objem vody odpovídající $\frac37$ objemu bazénu.. $\frac18+\frac1{12}-\frac1{16}=\frac7{48}$; doba $\frac{48}{7}$ h, výpustí vyteče $\frac{48}{7}\cdot\frac1{16}=\frac37$.

</details>

### `fit-2014-2-20` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 20, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Prvním přítokem se bazén naplní za 8 hodin, druhým přítokem za 12 hodin a výpustí vyteče za 16 hodin. Při napouštění jsme otevřeli oba přítoky, ale zapomněli jsme zavřít výpust. Naplní se bazén? A kolik vody jsme zbytečně vypustili?

- **a)** Bazén se nikdy nenaplní.
- **b)** Bazén se naplní za 12 hodin a zbytečně vyteče objem vody odpovídající $\frac32$ objemu bazénu.
- **c)** Bazén se naplní za $\frac{48}{7}$ hodiny a zbytečně vyteče objem vody odpovídající $\frac37$ objemu bazénu.
- **d)** Bazén se naplní za 8 hodin a zbytečně vyteče objem vody odpovídající $\frac47$ objemu bazénu.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Bazén se naplní za $\frac{48}{7}$ hodiny a zbytečně vyteče objem vody odpovídající $\frac37$ objemu bazénu.. $\frac18+\frac1{12}-\frac1{16}=\frac7{48}$; doba $\frac{48}7$ h, výpustí vyteče $\frac37$.

</details>

### `fit-2014-3-20` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 20, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Prvním přítokem se bazén naplní za 8 hodin, druhým přítokem za 12 hodin a výpustí vyteče za 16 hodin. Při napouštění jsme otevřeli oba přítoky, ale zapomněli jsme zavřít výpust. Naplní se bazén? A kolik vody jsme zbytečně vypustili?

- **a)** Bazén se naplní za 10 hodin a zbytečně vyteče objem vody odpovídající $\frac43$ objemu bazénu.
- **b)** Bazén se naplní za $\frac{48}{7}$ hodiny a zbytečně vyteče objem vody odpovídající $\frac37$ objemu bazénu.
- **c)** Bazén se naplní za 8 hodin a zbytečně vyteče objem vody odpovídající $\frac37$ objemu bazénu.
- **d)** Bazén se nikdy nenaplní.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Bazén se naplní za $\frac{48}{7}$ hodiny a zbytečně vyteče objem vody odpovídající $\frac37$ objemu bazénu.. $\frac18+\frac1{12}-\frac1{16}=\frac7{48}$; doba $\frac{48}7$ h, výpustí vyteče $\frac37$.

</details>

### `fit-2014-4-20` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 20, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Prvním přítokem se bazén naplní za 8 hodin, druhým přítokem za 12 hodin a výpustí vyteče za 16 hodin. Při napouštění jsme otevřeli oba přítoky, ale zapomněli jsme zavřít výpust. Naplní se bazén? A kolik vody jsme zbytečně vypustili?

- **a)** Bazén se naplní za 6 hodin a zbytečně vyteče objem vody odpovídající $\frac37$ objemu bazénu.
- **b)** Bazén se naplní za 8 hodin a zbytečně vyteče objem vody odpovídající $\frac12$ objemu bazénu.
- **c)** Bazén se nikdy nenaplní.
- **d)** Bazén se naplní za $\frac{48}{7}$ hodiny a zbytečně vyteče objem vody odpovídající $\frac47$ objemu bazénu.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. Doba $\frac{48}7$ h, výpustí vyteče $\frac37$ objemu, ne $\frac47$.

</details>

### `fit-2027-04` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2027 (příklad 4, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2027-s-resenim.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу)

Tři kladná čísla splňují následující podmínky. Dělíme-li součet prvního a druhého čísla číslem třetím, vyjde jedna a zbytek dva. Dělíme-li součet prvního a třetího čísla číslem druhým, vyjde dva a zbytek nula. Při dělení součtu druhého a třetího čísla číslem prvním je podíl tři a zbytek dva. Rozhodněte, které tvrzení platí.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2017, příklad 7 (5 b)

- **a)** Součet všech tří čísel je 18.
- **b)** Součet druhého a třetího čísla vynásobený číslem prvním je 80.
- **c)** Žádná z ostatních možností není správná.
- **d)** Úloha nemá řešení.
- **e)** Součin prvního a druhého čísla sečtený s číslem třetím je 52.

<details><summary>Ответ и решение</summary>

**a** — Součet všech tří čísel je 18.. $a+b=c+2$, $a+c=2b$, $b+c=3a+2$ $\Rightarrow$ $a=4$, $b=6$, $c=8$.

</details>

### `fit-2020-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2021 (příklad 13, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2020.pdf)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 4, úloha 17

Určete hodnoty reálného parametru $p$ tak, aby rovnice $p^2(2x-8)+p(x^2-6x+8)+4x-x^2=0$ měla jediné řešení, a rozhodněte, které tvrzení je pravdivé.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2018, příklad 13 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2024, příklad 14 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2025, příklad 10 (7 b)

- **a)** Existuje jen jedno takové $p$.
- **b)** Žádná z ostatních možností není správná.
- **c)** Takových $p$ je nekonečně mnoho.
- **d)** Existují dvě taková $p$.
- **e)** Takový parametr $p$ neexistuje.

<details><summary>Ответ и решение</summary>

**a** — Existuje jen jedno takové $p$.. $(p-1)(x-4)(x+2p)=0$; jediné řešení právě pro $p=-2$.

</details>

### `fit-2021-15` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2022 (příklad 15, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 4, úloha 18

Určete všechny hodnoty reálného parametru $p$, pro které má následující rovnice právě 2 různé reálné kořeny. $px^2-p(p+3)x+2p(p+1)=0$

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2019, příklad 15 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2027, příklad 15 (7 b)

- **a)** $p\in\mathbb{R}\setminus\{1\}$.
- **b)** Žádná z ostatních možností není správná.
- **c)** $p\in\mathbb{R}$.
- **d)** $p\in(0,1)\cup(1,+\infty)$.
- **e)** Takové $p$ neexistuje.

<details><summary>Ответ и решение</summary>

**b** — Žádná z ostatních možností není správná.. Pro $p=0$ vyhovuje každé $x$; pro $p\ne0$ je $D=(p-1)^2>0\iff p\ne1$. Výsledek $\mathbb{R}\setminus\{0,1\}$.

</details>

### `fit-2020-05` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2021 (příklad 5, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2020.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 6, úloha 18

Jestliže $y=2x^2+2x-12$, pak $y\in\langle0,12\rangle$ právě pro

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2020, příklad 9 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2022, příklad 9 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2026, příklad 12 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2027, příklad 10 (7 b)

- **a)** Žádná z ostatních možností není správná.
- **b)** $x\in\langle2,3\rangle$
- **c)** $x\in(-\infty,-3\rangle\cup\langle2,+\infty)$
- **d)** $x\in\langle3,+\infty)$
- **e)** $x\in\langle-4,3\rangle$

<details><summary>Ответ и решение</summary>

**a** — Žádná z ostatních možností není správná.. Výsledek je $\langle-4,-3\rangle\cup\langle2,3\rangle$.

</details>

### `fit-2024-11` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2024 (příklad 11, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2024.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 6, D1 (pool přijímaček)

Najděte všechna reálná řešení nerovnice $(x+1)^3\le(x+1)^{-1}\,.$

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2016, příklad 8 (5 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2020, příklad 7 (7 b); FIT ČVUT, vzorová přijímací zkouška pro rok 2025, příklad 7 (7 b)

- **a)** $x\in(-\infty,-2\rangle\cup\langle0,\infty)$
- **b)** $x\in(-\infty,-1)\cup(-1,\infty)$
- **c)** $x\in(-\infty,-2\rangle\cup(-1,0\rangle$
- **d)** $x\in\langle-2,0\rangle$
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**c** — $x\in(-\infty,-2\rangle\cup(-1,0\rangle$. $t=x+1\ne0$: $\frac{(t-1)(t+1)(t^2+1)}{t}\le0\iff t\le-1\vee0<t\le1$.

</details>

### `fit-2016-14` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2017 (příklad 14, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Najděte všechna reálná řešení nerovnice $\log_{\frac13}(x+1)-\log_{\frac13}(x-1)\ge\log_{\frac13}x\,.$

- **a)** $x\in(1,1+\sqrt2\rangle$
- **b)** $x\in(-\infty,1-\sqrt2\rangle\cup\langle1,1+\sqrt2\rangle$
- **c)** $x\in\left\langle\frac{1-\sqrt5}{2},\frac{1+\sqrt5}{2}\right\rangle$
- **d)** $x\in\langle1+\sqrt2,+\infty)$
- **e)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**d** — $x\in\langle1+\sqrt2,+\infty)$. $x>1$; základ $<1$: $\frac{x+1}{x-1}\le x\iff x^2-2x-1\ge0\iff x\ge1+\sqrt2$.

</details>

### `fel-vzor01-4` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 4, 1 bod)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-vzor01.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

V intervalu $\langle0,2\pi\rangle$ má rovnice $\sin x=\cos x-1$

- **a)** právě dvě řešení
- **b)** právě jedno řešení
- **c)** nekonečně mnoho řešení
- **d)** právě tři řešení
- **e)** žádné řešení

<details><summary>Ответ и решение</summary>

**d** — právě tři řešení. Řešení $x\in\{0;\frac32\pi;2\pi\}$.

</details>

### `fit-2022-10` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2023 (příklad 10, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D13

Určete první člen $a_1$ a diferenci $d$ reálné aritmetické posloupnosti, pokud víte, že součet čtvrtého a pátého členu je 4 a součin čtvrtého a pátého členu je 5.

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2017, příklad 11 (5 b)

- **a)** Žádná z ostatních možností není správná.
- **b)** Úloha nemá řešení.
- **c)** Součin všech možných diferencí je 4.
- **d)** Součet všech možných prvních členů je 24.
- **e)** $d=2$, $a_1=-5$.

<details><summary>Ответ и решение</summary>

**b** — Úloha nemá řešení.. $a_4,a_5$ jsou kořeny $t^2-4t+5=0$, $D<0$.

</details>

### `tul-2021-03` — [FP TUL, přijímací test z matematiky 2021/22 (Matematika, Bc.) (úloha 3, 20 bodů)](https://www.fp.tul.cz/images/fakulta/ukazky_testu/2021/KAP_Ma_Bc_jednoobor_2021.pdf)

*Темы:* 19. Aritmetická posloupnost · *Текст:* текст оригинала (по курсу)

Určete, kolik existuje aritmetických posloupností, které vyhovují následujícím podmínkám – každý člen posloupnosti je nezáporný a součet prvních šesti členů je roven 135. Dále určete jejich parametry.

<details><summary>Ответ и решение</summary>

nekonečně mnoho: $\left\{\left(a;d=9-\frac25a\right)\,\middle|\,a\in\left\langle0;22\tfrac12\right\rangle\right\}$. Řešení z PDF: $6a+15d=135$, tj. $2a+5d=45$. Všechny členy jsou nezáporné, právě když $a\ge0$ a $d\ge0$, tedy $d\in\langle0;9\rangle$, $a=22\frac12-\frac52d$.

</details>

### `fit-2018-06` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2019 (příklad 6, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2018.pdf)

*Темы:* 20. Geometrická posloupnost, 35. Stereometrie · *Текст:* текст оригинала (по курсу)

Délky hran kvádru tvoří tři po sobě jdoucí členy geometrické posloupnosti. Povrch kvádru je $63\ \mathrm{cm}^2$, součet délek všech hran kvádru je 42. Rozhodněte, které tvrzení je pravdivé.

- **a)** Žádná z ostatních možností není správná.
- **b)** Takový kvádr neexistuje.
- **c)** Nejdelší hrana má délku 12 cm.
- **d)** Objem kvádru je $27\ \mathrm{cm}^3$.
- **e)** Nejkratší hrana má poloviční délku než nejdelší hrana.

<details><summary>Ответ и решение</summary>

**d** — Objem kvádru je $27\ \mathrm{cm}^3$.. Hrany $a,aq,aq^2$: z povrchu a součtu hran $aq=3$, objem $(aq)^3=27$.

</details>

### `fit-2026-05` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2026 (příklad 5, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 20. Geometrická posloupnost, 35. Stereometrie · *Текст:* текст оригинала (по курсу)

Délky hran kvádru tvoří tři po sobě jdoucí členy geometrické posloupnosti. Povrch kvádru je $63\ \mathrm{cm}^2$, součet délek všech hran kvádru je $42$ cm. Rozhodněte, které tvrzení je pravdivé.

- **a)** Objem kvádru je $27\ \mathrm{cm}^3$.
- **b)** Žádná z ostatních možností není správná.
- **c)** Nejdelší hrana má délku 12 cm.
- **d)** Nejkratší hrana má poloviční délku než nejdelší hrana.
- **e)** Takový kvádr neexistuje.

<details><summary>Ответ и решение</summary>

**a** — Objem kvádru je $27\ \mathrm{cm}^3$.. Hrany $a,aq,aq^2$: $2a^2q(1+q+q^2)=63$, $4a(1+q+q^2)=42$, odtud $aq=3$ a objem $(aq)^3=27$ (hrany $1{,}5$; $3$; $6$).

</details>

### `fit-2019-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2020 (příklad 13, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* 21. Kombinatorika. Faktoriál · *Текст:* текст оригинала (по курсу)

Kolik různých čísel větších než 10 a menších než 500 lze sestavit z cifer 0, 3, 5, 7 a 8 pokud se každá cifra může opakovat nejvýše dvakrát?

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2017, příklad 16 (3 b)

- **a)** Žádná z ostatních možností není správná.
- **b)** $50$
- **c)** $68$
- **d)** $46$
- **e)** $44$

<details><summary>Ответ и решение</summary>

**e** — $44$. Dvojciferná: $4\cdot5=20$; trojciferná menší než $500$ začínají trojkou: $5\cdot5-1=24$ (bez $333$). Celkem $44$.

</details>

### `tul-2021-01` — [FP TUL, přijímací test z matematiky 2021/22 (Matematika, Bc.) (úloha 1, 20 bodů)](https://www.fp.tul.cz/images/fakulta/ukazky_testu/2021/KAP_Ma_Bc_jednoobor_2021.pdf)

*Темы:* 22. Variace. Permutace. Kombinace, 34. Planimetrie · *Текст:* текст оригинала (по курсу)

Uvažujte pravidelný dvanáctiúhelník. Určete počet trojúhelníků tvořených vrcholy uvažovaného dvanáctiúhelníku, které mají vlastnost, že žádná jeho strana nesplývá se stranou uvažovaného dvanáctiúhelníku.

<details><summary>Ответ и решение</summary>

$112$. Řešení z PDF: $\binom{12}3-12(12-4)-12=220-96-12=112$ (všechny trojúhelníky, minus ty s právě jednou a s dvěma společnými stranami).

</details>

### `fit-2021-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2022 (příklad 13, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 30. Kuželosečky. Kružnice, 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 4, úloha 19

Určete hodnotu parametru $p$ tak, aby přímka $q$ neměla s kružnicí $k$ žádný společný bod. $q:px+y-1=0$ a $k:x^2-4x+y^2-6y-3=0$

*Встречается также:* FIT ČVUT, vzorová přijímací zkouška pro rok 2020, příklad 15 (7 b)

- **a)** Takových $p$ je nekonečně mnoho.
- **b)** $p\in(-\infty,3)\cup\langle7,\infty)$
- **c)** Žádná z ostatních možností není správná.
- **d)** $p=7$
- **e)** Takové $p$ neexistuje.

<details><summary>Ответ и решение</summary>

**e** — Takové $p$ neexistuje.. Přímka prochází bodem $[0,1]$ uvnitř kružnice $(x-2)^2+(y-3)^2=16$, takže ji vždy protne.

</details>

### `fit-2014-1-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 1 (příklad 13, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-1.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Z kolika obdélníkových dlaždic o rozměrech 15 cm a 20 cm se dá sestavit čtverec, máme-li k dispozici 120 dlaždic? Všechny dlaždice pokládáme se stejnou orientací.

- **a)** Součin všech řešení je $480$.
- **b)** Nelze sestavit ani jeden čtverec.
- **c)** Součet všech řešení je $168$.
- **d)** Úloha má víc než $5$ řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**c** — Součet všech řešení je $168$.. Strana čtverce je násobkem $\mathrm{NSN}(15,20)=60$: $12$, $48$ nebo $108$ dlaždic; součet $168$.

</details>

### `fit-2014-2-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 2 (příklad 13, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-2.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Z kolika obdélníkových dlaždic o rozměrech 16 cm a 20 cm se dá sestavit čtverec, máme-li k dispozici 200 dlaždic? Všechny dlaždice pokládáme se stejnou orientací.

- **a)** Součin všech řešení je $280$.
- **b)** Nelze sestavit ani jeden čtverec.
- **c)** Součet všech řešení je $168$.
- **d)** Úloha má víc než $5$ řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z předcházejících možností není správná.. Strana je násobkem $80$: $20$, $80$ nebo $180$ dlaždic; součet $280$, součin $288\,000$.

</details>

### `fit-2014-3-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 3 (příklad 13, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-3.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Z kolika obdélníkových dlaždic o rozměrech 12 cm a 16 cm se dá sestavit čtverec, máme-li k dispozici 120 dlaždic? Všechny dlaždice pokládáme se stejnou orientací.

- **a)** Součin všech řešení je $62208$.
- **b)** Nelze sestavit ani jeden čtverec.
- **c)** Součet všech řešení je $120$.
- **d)** Úloha má víc než $5$ řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**a** — Součin všech řešení je $62208$.. Strana je násobkem $48$: $12$, $48$ nebo $108$ dlaždic; součin $62208$.

</details>

### `fit-2014-4-13` — [FIT ČVUT, vzorová přijímací zkouška pro rok 2015, verze 4 (příklad 13, 5 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2014-4.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Z kolika obdélníkových dlaždic o rozměrech 12 cm a 20 cm se dá sestavit čtverec, máme-li k dispozici 120 dlaždic? Všechny dlaždice pokládáme se stejnou orientací.

- **a)** Nelze sestavit ani jeden čtverec.
- **b)** Součin všech řešení je $900$.
- **c)** Součet všech řešení je $145$.
- **d)** Úloha má víc než $3$ řešení.
- **e)** Žádná z předcházejících možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Součin všech řešení je $900$.. Strana je násobkem $60$: $15$ nebo $60$ dlaždic; součin $900$.

</details>

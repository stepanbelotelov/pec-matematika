# Банк задач přijímaček — обзор

Файл собирается скриптом `build.py` из `tasks.json` и `sources.json`; вручную не редактировать.

Всего задач: **63** · базовый: 29 · стандартный: 26 · сложный: 8 · ČVUT FIT: 43 · ČVUT FBMI: 12 · ČVUT FEL: 8

⚠ **38** задач пока записаны так, как они пересказаны в курсе, — их текст нужно заменить дословным оригиналом из PDF (пометка ⚠ в карточке). Ответы у всех задач проверены.

## Покрытие тем курса

| № | Тема | Ур. 1 | Ур. 2 | Ур. 3 | Всего |
|---|---|---|---|---|---|
| 1 | Množina. Podmnožina |  | 3 | 1 | 4 |
| 2 | Mocnina. Odmocnina | 2 |  |  | 2 |
| 3 | Rovnice (lineární, kvadratické, soustava rovnic) | 4 | 5 |  | 9 |
| 4 | Rovnice s parametrem | 1 | 1 | 2 | 4 |
| 5 | Rovnice s absolutní hodnotou |  | 1 |  | 1 |
| 6 | Nerovnice. Soustava nerovnic | 2 | 1 | 2 | 5 |
| 7 | Nerovnice s absolutní hodnotou | 1 | 2 |  | 3 |
| 8 | Iracionální rovnice. Iracionální nerovnice |  | 4 |  | 4 |
| 9 | Funkce (lineární, kvadratická, lomená). Grafy | 10 |  |  | 10 |
| 10 | Exponenciální funkce |  | 2 |  | 2 |
| 11 | Exponenciální rovnice a nerovnice |  | 3 |  | 3 |
| 12 | Logaritmická funkce | 3 | 3 |  | 6 |
| 13 | Logaritmické rovnice a nerovnice |  |  |  | — |
| 14 | Goniometrické funkce |  |  |  | — |
| 15 | Goniometrické rovnice a nerovnice |  |  |  | — |
| 16 | Komplexní čísla |  |  |  | — |
| 17 | Goniometrický tvar komplexního čísla. Moivreova věta |  |  |  | — |
| 18 | Posloupnosti |  |  |  | — |
| 19 | Aritmetická posloupnost |  |  | 1 | 1 |
| 20 | Geometrická posloupnost |  |  | 1 | 1 |
| 21 | Kombinatorika. Faktoriál |  |  |  | — |
| 22 | Variace. Permutace. Kombinace | 1 |  |  | 1 |
| 23 | Kombinační číslo. Binomická věta |  |  |  | — |
| 24 | Pravděpodobnost |  |  |  | — |
| 25 | Analytická geometrie. Vektory |  |  |  | — |
| 26 | Parametrická rovnice přímky |  |  |  | — |
| 27 | Obecná rovnice přímky |  |  |  | — |
| 28 | Vzájemná poloha přímek | 3 |  |  | 3 |
| 29 | Směrnicový a úsekový tvar rovnice přímky |  | 1 |  | 1 |
| 30 | Kuželosečky. Kružnice |  |  | 1 | 1 |
| 31 | Elipsa |  |  |  | — |
| 32 | Hyperbola |  |  |  | — |
| 33 | Parabola |  |  |  | — |
| 34 | Planimetrie |  |  |  | — |
| 35 | Stereometrie |  |  |  | — |
| — | Ostatní | 2 |  |  | 2 |

Задача считается по основной (первой) теме; дополнительные темы указаны в карточке. «Ostatní» — задачи вне 35 тем плана.

## Уровень 1 — базовый

### `fel-vzor01-mocniny` — [FEL ČVUT, vzorový přijímací test VZOR01](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-reseni-vzor01.pdf)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 2, úloha 18

Zjednodušte výraz $\dfrac{6x^3b^3}{25y^4}\cdot\dfrac{15y}{b^2}$ (pro $y\ne0$, $b\ne0$).

<details><summary>Ответ и решение</summary>

$\dfrac{18bx^3}{5y^3}$. $\frac{90}{25}=\frac{18}{5}$, $\frac{b^3}{b^2}=b$, $\frac{y}{y^4}=\frac1{y^3}$.

*Примечание:* Číslo úlohy ve vzoru neuvedeno. Varianty odpovědí, které doplnil kurz, z banky odstraněny (ve vzoru FEL nejsou).

</details>

### `fit-2024-03` — [FIT ČVUT, vzorová přijímací zkouška 2024 (příklad 3, 3 body)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2024.pdf)

*Темы:* 2. Mocnina. Odmocnina, 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 2, úloha 20; DÚ 8, D2

Určete, čemu se rovná druhá odmocnina podílu nenulového čísla $x$ a jeho převrácené hodnoty.

- **A)** $|x|$
- **B)** $\pm x$
- **C)** $x$
- **D)** Žádná z ostatních možností není správná.
- **E)** $1$

<details><summary>Ответ и решение</summary>

**A** — $|x|$. $\sqrt{x:\frac1x}=\sqrt{x^2}=|x|$.

*Примечание:* Podle kurzu podobně i ve vzoru 2020 (př. 3).

</details>

### `fbmi-2021-kvadr-koreny` — [FBMI ČVUT, přijímací zkouška Bc 2020/21](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D1

Řešením kvadratické rovnice $2x^2+5x+2=0$ jsou čísla:

- **a)** $x_1=-0{,}5$; $x_2=-2$
- **b)** $x_1=-1$; $x_2=-4$
- **c)** $x_1=0{,}5$; $x_2=2$
- **d)** $x_1=1$; $x_2=4$

<details><summary>Ответ и решение</summary>

**a** — $-\frac12$; $-2$. $x=\frac{-5\pm3}{4}$.

</details>

### `fbmi-2021-diskriminant` — [FBMI ČVUT, přijímací zkouška Bc 2020/21](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D5

Diskriminant kvadratické rovnice $ax^2+bx+c=0$ je roven:

- **a)** $D=\sqrt{b^2+4ac}$
- **b)** $D=\sqrt{b+4ac}$
- **c)** $D=\sqrt{b^2-4ac}$
- **d)** Ani jedna z nabízených možností není správná.

<details><summary>Ответ и решение</summary>

**d** — $D=b^2-4ac$. $D=b^2-4ac$ (bez odmocniny).

</details>

### `fbmi-2021-dvojnasobny` — [FBMI ČVUT, přijímací zkouška Bc 2020/21](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D6

Pokud má kvadratická rovnice $ax^2+bx+c=0$ v oboru reálných čísel jediné řešení, je rovno:

- **a)** $x_1=x_2=-\dfrac{b}{2a}$
- **b)** $x_1=x_2=\dfrac{b}{2a}$
- **c)** $x_1=x_2=-\dfrac{b}{2}$
- **d)** Ani jedna z nabízených možností není správná.

<details><summary>Ответ и решение</summary>

**a** — $-\frac{b}{2a}$. Pro $D=0$ je $x=\frac{-b}{2a}$.

</details>

### `fit-2026-06` — [FIT ČVUT, vzorová přijímací zkouška 2026 (příklad 6, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 3, úloha 17

Řešte soustavu rovnic $3(x+2)-4(y+x)=7$, $2x-(x-4y)=-1$.

- **A)** Soustava má jediné řešení.
- **B)** Soustava má nekonečně mnoho řešení.
- **C)** Žádná z ostatních možností není správná.
- **D)** Soustava nemá reálná řešení.
- **E)** Součin řešení $x$ a $y$ je $1$.

<details><summary>Ответ и решение</summary>

**B** — $x=-1-4y$, $y\in\mathbb{R}$. Obě rovnice jsou ekvivalentní s $x+4y=-1$.

</details>

### `fel-vzor01-14` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 14)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-reseni-vzor01.pdf)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 4, úloha 20 (upravená verze v lekci 3, úloha 20)

Pro která $p$ nemá rovnice $x^2-(p+1)x+4=0$ s neznámou $x$ žádný reálný kořen?

<details><summary>Ответ и решение</summary>

$p\in(-5;3)$. $D=(p+1)^2-16<0\iff|p+1|<4$.

</details>

### ⚠ `fit-2022-03` — [FIT ČVUT, vzorová přijímací zkouška 2022 (příklad 3, 3 body; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 6, D2 (pool přijímaček)

O číslech $a,b,c,d,e$ víme: $a=b$, $a\ge c$, $d>b$, $e<a$. Které tvrzení <i>nemůže</i> být pravdivé?

- **A)** $c<e$
- **B)** Platí právě jeden z ostatních vztahů.
- **C)** $e=c$
- **D)** $c>d$
- **E)** $e\le d$

<details><summary>Ответ и решение</summary>

**D** — $c>d$. $c\le a=b<d$, tedy vždy $c<d$.

</details>

### ⚠ `fit-2026-01` — [FIT ČVUT, vzorová přijímací zkouška 2026 (příklad 1, 3 body; přeformulováno)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 6, úloha 17

O reálných číslech $a,b,c,d,e$ víme: $a\le b$, $a<c$, $d\le b$, $e<a$. Které tvrzení <i>nemůže</i> platit?

- **A)** $e>c$
- **B)** $e<d$
- **C)** $a<d$
- **D)** Žádná z ostatních možností není správná.
- **E)** $d>c$

<details><summary>Ответ и решение</summary>

**A** — $e>c$. $e<a<c$, tedy vždy $e<c$.

</details>

### ⚠ `fel-vzor01-1` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 1; přeformulováno)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-reseni-vzor01.pdf)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 7, D1

Najděte všechna reálná řešení nerovnice $2|x+3|<2$.

<details><summary>Ответ и решение</summary>

$x\in(-4;-2)$. $|x+3|<1\iff-1<x+3<1$.

</details>

### ⚠ `fbmi-2021-28` — [FBMI ČVUT, přijímací zkouška Bc 2020/21 (úloha 28; přeformulováno)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* VŠE DÚ 9, D1

Graf funkce $y=\frac23x+\frac16$ prochází body

- **a)** $\left[-1;\frac16\right]$, $\left[0;\frac16\right]$
- **b)** $\left[0;\frac16\right]$, $\left[\frac12;\frac12\right]$
- **c)** $\left[-1;\frac23\right]$, $\left[0;\frac16\right]$
- **d)** $\left[0;\frac16\right]$, $\left[\frac12;\frac23\right]$

<details><summary>Ответ и решение</summary>

**b** — $\left[0;\frac16\right]$, $\left[\frac12;\frac12\right]$. $y(0)=\frac16$, $y\left(\frac12\right)=\frac13+\frac16=\frac12$.

</details>

### ⚠ `fbmi-2021-29` — [FBMI ČVUT, přijímací zkouška Bc 2020/21 (úloha 29; přeformulováno)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* VŠE DÚ 9, D2

Graf funkce $y=x^2+x+\frac12$ prochází body

- **a)** $\left[-1;\frac12\right]$, $\left[0;\frac12\right]$
- **b)** $\left[0;\frac12\right]$, $\left[1;\frac32\right]$
- **c)** $\left[-1;\frac23\right]$, $\left[0;\frac12\right]$
- **d)** $\left[0;\frac12\right]$, $\left[\frac12;\frac23\right]$

<details><summary>Ответ и решение</summary>

**a** — $\left[-1;\frac12\right]$, $\left[0;\frac12\right]$. $y(-1)=y(0)=\frac12$, $y(1)=\frac52$.

</details>

### ⚠ `fbmi-2021-30` — [FBMI ČVUT, přijímací zkouška Bc 2020/21 (úloha 30; přeformulováno)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 9, D6

Kvadratická funkce $y=x^2+2x+\frac12$ má extrém:

- **a)** max. v $\left[-1;-\frac12\right]$
- **b)** min. v $\left[-1;-\frac12\right]$
- **c)** max. v $\left[1;\frac72\right]$
- **d)** min. v $\left[1;\frac72\right]$

<details><summary>Ответ и решение</summary>

**b** — minimum v $\left[-1;-\frac12\right]$. $y=(x+1)^2-\frac12$.

</details>

### ⚠ `fbmi-2021-31` — [FBMI ČVUT, přijímací zkouška Bc 2020/21 (úloha 31; přeformulováno)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* VŠE DÚ 9, D3

Kvadratická funkce $y=x^2+2x+3$ je klesající na intervalu

- **a)** $(-\infty;1\rangle$
- **b)** $\langle1;\infty)$
- **c)** $(-\infty;-1\rangle$
- **d)** $\langle-1;\infty)$

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;-1\rangle$. Vrchol $x=-1$, parabola otevřená nahoru.

</details>

### ⚠ `fbmi-2021-32` — [FBMI ČVUT, přijímací zkouška Bc 2020/21 (úloha 32; přeformulováno)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 9, D5

Kvadratická funkce $y=-2x^2+4x+7$ je klesající na intervalu

- **a)** $(-\infty;1\rangle$
- **b)** $\langle1;\infty)$
- **c)** $(-\infty;-1\rangle$
- **d)** $\langle-1;\infty)$

<details><summary>Ответ и решение</summary>

**b** — $\langle1;\infty)$. Vrchol $x=1$, parabola otevřená dolů.

</details>

### ⚠ `fbmi-2021-33` — [FBMI ČVUT, přijímací zkouška Bc 2020/21 (úloha 33; přeformulováno)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 27. Obecná rovnice přímky · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* VŠE DÚ 9, D4

Lineární funkce, jejíž graf prochází body $[2;3]$ a $[4;-1]$, je

- **a)** $y=x+1$
- **b)** $y=-x+5$
- **c)** $y=2x-1$
- **d)** $y=-2x+7$

<details><summary>Ответ и решение</summary>

**d** — $y=-2x+7$. $k=\frac{-1-3}{4-2}=-2$, $q=3+4=7$.

</details>

### ⚠ `fit-2018-03` — [FIT ČVUT, vzorová přijímací zkouška 2018 (příklad 3, 3 body; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2018.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 9, úloha 17

Je dána funkce $f(x)=2x^2-2$. Výraz $2f(t+1)-f(t-1)$ je roven

- **A)** Žádná z ostatních možností není správná.
- **B)** $2t^2+4t$
- **C)** $2t^2+12t$
- **D)** $8t$
- **E)** $2t^2-4$

<details><summary>Ответ и решение</summary>

**C** — $2t^2+12t$. $2\left(2(t+1)^2-2\right)-\left(2(t-1)^2-2\right)=4t^2+8t-2t^2+4t=2t^2+12t$.

</details>

### ⚠ `fit-2018-08` — [FIT ČVUT, vzorová přijímací zkouška 2018 (příklad 8, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2018.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 9, D4 (pool přijímaček)

Obor hodnot funkce $f(x)=\sqrt{2x+3}-1$ je

<details><summary>Ответ и решение</summary>

$\langle-1;\infty)$. $\sqrt{2x+3}$ nabývá všech hodnot $\langle0;\infty)$, po odečtení $1$ dostaneme $\langle-1;\infty)$.

*Примечание:* Varianty z kurzu (vlastní) odstraněny; původních 5 možností doplnit z originálu.

</details>

### `fit-2022-01` — [FIT ČVUT, vzorová přijímací zkouška 2022 (příklad 1, 3 body)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 2, D10

Je dána funkce $f(x)=x^2-2x+1$. Spočtěte hodnotu rozdílu $f(t+1)-f(t-1)$.

- **A)** $2t^2-4t+4$
- **B)** $-4t+4$
- **C)** $4t-4$
- **D)** $2$
- **E)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**C** — $4t-4$. $f(x)=(x-1)^2$: $t^2-(t-2)^2=4t-4$.

</details>

### ⚠ `fit-2022-11` — [FIT ČVUT, vzorová přijímací zkouška 2022 (příklad 11, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 9, úloha 18

Obor hodnot funkce $f(x)=2x^2-5x+3$ je

- **A)** Žádná z ostatních možností není správná.
- **B)** $\left(\frac54;\infty\right)$
- **C)** $\mathbb{R}$
- **D)** $\left\langle-\frac{19}{2};\infty\right)$
- **E)** $\left\langle-\frac18;\infty\right)$

<details><summary>Ответ и решение</summary>

**E** — $\left\langle-\frac18;\infty\right)$. Vrchol $x=\frac54$, $f\left(\frac54\right)=-\frac18$.

</details>

### ⚠ `fbmi-2021-25` — [FBMI ČVUT, přijímací zkouška Bc 2020/21 (úloha 25; přeformulováno)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 12, úloha 20

Výraz $\log\dfrac{a}{(b+c)^2}$ ($a,b,c>0$) je roven

- **a)** $\log a:2\log(b+c)$
- **b)** $\log a-2\log(b+c)$
- **c)** $\log a-2\log b-2\log c$
- **d)** $\log a:(2\log b+2\log c)$

<details><summary>Ответ и решение</summary>

**b** — $\log a-2\log(b+c)$. Logaritmus podílu a mocniny.

</details>

### ⚠ `fbmi-2021-26` — [FBMI ČVUT, přijímací zkouška Bc 2020/21 (úloha 26; přeformulováno)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 12, D1

Výraz $\log\dfrac{a+b}{\sqrt c}$ ($a,b,c>0$) je roven

- **a)** $\log(a+b):\log\sqrt c$
- **b)** $\log a+\log b-\frac12\log c$
- **c)** $\log(a+b)-\frac12\log c$
- **d)** $(\log a+\log b):\frac12\log c$

<details><summary>Ответ и решение</summary>

**c** — $\log(a+b)-\frac12\log c$. $\log(a+b)$ se nerozkládá.

</details>

### ⚠ `fbmi-2021-27` — [FBMI ČVUT, přijímací zkouška Bc 2020/21 (úloha 27; přeformulováno)](https://www.fbmi.cvut.cz/sites/default/files/2019-11/Bc_Matematika_20_21.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 12, D2

Výraz $\log\dfrac{a+b}{c^2}$ ($a,b,c>0$) je roven

- **a)** $\log(a+b):2\log c$
- **b)** $\log a+\log b-2\log c$
- **c)** $\log(a+b)-2\log c$
- **d)** $(\log a+\log b):2\log c$

<details><summary>Ответ и решение</summary>

**c** — $\log(a+b)-2\log c$. $\log(a+b)$ se nerozkládá.

</details>

### `fel-vzor01-morse` — [FEL ČVUT, vzorový přijímací test VZOR01](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-reseni-vzor01.pdf)

*Темы:* 22. Variace. Permutace. Kombinace, 2. Mocnina. Odmocnina · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 2, úloha 21

Kolik různých znaků Morseovy abecedy lze vytvořit ze skupin teček a čárek o délce $1$ až $5$ (tj. skupin obsahujících $1$ až $5$ symbolů)?

<details><summary>Ответ и решение</summary>

$62$. $2+2^2+2^3+2^4+2^5=62$.

*Примечание:* Číslo úlohy ve vzoru neuvedeno. Varianty odpovědí, které doplnil kurz, z banky odstraněny (ve vzoru FEL nejsou).

</details>

### ⚠ `fit-2015-19` — [FIT ČVUT, vzorová přijímací zkouška 2015 (příklad 19, 3 body; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 28. Vzájemná poloha přímek, 27. Obecná rovnice přímky · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 9, D2 (pool přijímaček)

Určete parametry $a$, $b$ tak, aby rovnice $ax+4y+1=0$ a $3x+2y-b=0$ popisovaly tutéž přímku.

- **A)** $a=6$, $b=-1$
- **B)** Žádná z ostatních možností není správná.
- **C)** $a=6$, $b\in\mathbb{R}$
- **D)** $a=-\frac83$, $b=1$
- **E)** $a=6$, $b=-\frac12$

<details><summary>Ответ и решение</summary>

**E** — $a=6$, $b=-\frac12$. Koeficienty musí být úměrné: $\frac a3=\frac42=\frac{1}{-b}$, tedy $a=6$, $b=-\frac12$.

</details>

### ⚠ `fit-2016-19` — [FIT ČVUT, vzorová přijímací zkouška 2016 (příklad 19, 3 body; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 28. Vzájemná poloha přímek, 27. Obecná rovnice přímky · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 9, D1 (pool přijímaček)

Určete parametry $a$, $b$ tak, aby přímky $p:\ ax+4y+1=0$ a $q:\ 3x+2y-b=0$ byly navzájem kolmé.

- **A)** Žádná z ostatních možností není správná.
- **B)** $a=-\frac83$, $b\in\mathbb{R}$
- **C)** $a=6$, $b=-\frac12$
- **D)** $a=-\frac83$, $b=1$
- **E)** $a=6$, $b\in\mathbb{R}$

<details><summary>Ответ и решение</summary>

**B** — $a=-\frac83$, $b\in\mathbb{R}$. Normálové vektory $(a;4)$ a $(3;2)$ jsou kolmé: $3a+8=0$, $a=-\frac83$; $b$ libovolné.

</details>

### ⚠ `fit-2024-13` — [FIT ČVUT, vzorová přijímací zkouška 2024 (příklad 13, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2024.pdf)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 9, úloha 19

Určete reálné parametry $a$, $b$ tak, aby přímky $ax+4y+1=0$ a $3x+2y-b=0$ měly právě jeden společný bod.

- **A)** $a=-\frac83$, $b\ne\frac12$
- **B)** $a\ne-\frac83$, $b\in\mathbb{R}$
- **C)** Žádná z ostatních možností není správná.
- **D)** $a\ne6$, $b\in\mathbb{R}$
- **E)** $a\ne6$, $b\ne-1$

<details><summary>Ответ и решение</summary>

**D** — $a\ne6$, $b\in\mathbb{R}$. Přímky nesmí být rovnoběžné: $\frac a3\ne\frac42$, tj. $a\ne6$.

</details>

### `fit-2019-04` — [FIT ČVUT, vzorová přijímací zkouška 2019 (příklad 4, 7 bodů)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D9

Kladné číslo $x$ je o $25\,\%$ větší než kladné číslo $y$. O kolik procent je číslo $y$ menší než číslo $x$?

- **A)** Číslo $y$ je o $15\,\%$ menší než číslo $x$.
- **B)** Číslo $y$ je o $33\,\%$ menší než číslo $x$.
- **C)** Žádná z ostatních možností není správná.
- **D)** Číslo $y$ je o $20\,\%$ menší než číslo $x$.
- **E)** Číslo $y$ je o $25\,\%$ menší než číslo $x$.

<details><summary>Ответ и решение</summary>

**D** — o $20\,\%$. $y=\frac{x}{1{,}25}=0{,}8x$.

</details>

### `fit-2022-04` — [FIT ČVUT, vzorová přijímací zkouška 2022 (příklad 4, 7 bodů)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D11

Petr a Pavel mají stejně vysoký plat. Pavel platí o čtvrtinu vyšší nájem než Petr. Nájem bytu stojí Pavla $25\,\%$ jeho platu. Kolik procent svého platu platí za nájem Petr?

- **A)** $22{,}5\,\%$
- **B)** $15\,\%$
- **C)** $18{,}75\,\%$
- **D)** Žádná z ostatních možností není správná.
- **E)** $20\,\%$

<details><summary>Ответ и решение</summary>

**E** — $20\,\%$. $1{,}25\cdot n=0{,}25\,S\Rightarrow n=0{,}2\,S$.

</details>

## Уровень 2 — стандартный

### `fel-vzor01-mnoziny` — [FEL ČVUT, vzorový přijímací test VZOR01](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-reseni-vzor01.pdf)

*Темы:* 1. Množina. Podmnožina · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 1, úloha 15

Jsou dány množiny $A=\{1,2,3,\dots,1000\}$, $B=\{x\in A:\ \frac x6\in\mathbb{Z}\}$, $C=\{x\in A:\ \frac x8\in\mathbb{Z}\}$, $D=\{x\in A:\ 237\le x\le356\}$. Určete počet prvků množiny $(B\cap C)\cup D$.

<details><summary>Ответ и решение</summary>

$156$. $B\cap C$ = násobky $24$: $41$ prvků; $|D|=120$; v $D$ leží násobky $24$: $240,\dots,336$ — $5$. $41+120-5=156$.

*Примечание:* Číslo úlohy ve vzoru neuvedeno. Varianty odpovědí, které doplnil kurz, z banky odstraněny (ve vzoru FEL nejsou).

</details>

### ⚠ `fit-2019-08` — [FIT ČVUT, vzorová přijímací zkouška 2019 (příklad 8, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* 1. Množina. Podmnožina, 7. Nerovnice s absolutní hodnotou, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 7, D2 (pool přijímaček)

Jsou dány množiny $A=\{x^2-4x+5:\ x\in(1;4\rangle\}$ (množina všech hodnot výrazu pro $x\in(1;4\rangle$) a $B=\{x\in\mathbb{R}:\ |x-4|\le\frac12\}$. Sjednocení $A\cup B$ je

- **A)** $\left\langle\frac72;\frac92\right\rangle$
- **B)** $\left(\frac92;5\right\rangle$
- **C)** $\left\langle1;\frac72\right)\cup\left(\frac92;5\right\rangle$
- **D)** Žádná z ostatních možností není správná.
- **E)** $\left\langle2;\frac72\right)\cup\left(\frac92;5\right\rangle$

<details><summary>Ответ и решение</summary>

**D** — $A\cup B=\langle1;5\rangle$. $x^2-4x+5=(x-2)^2+1$ nabývá na $(1;4\rangle$ hodnot $\langle1;5\rangle$; $B=\left\langle\frac72;\frac92\right\rangle\subset A$.

</details>

### `fit-2026-08` — [FIT ČVUT, vzorová přijímací zkouška 2026 (příklad 8, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 1. Množina. Podmnožina, 7. Nerovnice s absolutní hodnotou, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 1, úloha 17

Jsou dány množiny $A=\{x^2-4x+5\mid x\in(1,4)\}$ a $B=\{x\mid |x-4|\le\frac12\}$. Množina $A\cup B$ je:

- **A)** $\left(\frac92,5\right)$
- **B)** $\left(\frac72,\frac92\right)$
- **C)** Žádná z ostatních možností není správná.
- **D)** $\left\langle1,\frac72\right\rangle\cup\left\langle\frac92,5\right)$
- **E)** $\left(2,\frac72\right\rangle\cup\left\langle\frac92,5\right)$

<details><summary>Ответ и решение</summary>

**C** — $A\cup B=\langle1;5)$. $(x-2)^2+1$ na $(1;4)$ nabývá hodnot $\langle1;5)$; $B=\left\langle\frac72;\frac92\right\rangle\subset A$.

*Примечание:* Varianta úlohy 2019/8 s otevřeným intervalem.

</details>

### `fit-2019-02` — [FIT ČVUT, vzorová přijímací zkouška 2019 (příklad 2, 3 body)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D7

Binární operace $\star$ je definována předpisem $a\star b=\dfrac{a+b}{a\cdot b}$. Určete hodnotu neznámé $x$ tak, aby $(2\star x)\star 3=3$.

- **A)** Rovnice má jedno záporné řešení.
- **B)** Rovnice má kladné řešení větší než $2$.
- **C)** Žádná z ostatních možností není správná.
- **D)** Rovnice nemá řešení.
- **E)** Rovnice má dvě řešení a jejich součin je $4$.

<details><summary>Ответ и решение</summary>

**A** — $x=-8$. $u=2\star x$: $\frac{u+3}{3u}=3\Rightarrow u=\frac38$; $\frac{2+x}{2x}=\frac38\Rightarrow x=-8$.

</details>

### `fit-2019-10` — [FIT ČVUT, vzorová přijímací zkouška 2019 (příklad 10, 7 bodů)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D10

Za nákup $1{,}5$ kg mandarinek a $3{,}5$ kg pomerančů jsme zaplatili celkem $185$ korun. Kilo pomerančů stojí o třetinu více než kilo mandarinek. Rozhodněte, které tvrzení je pravdivé.

- **A)** Za kilo pomerančů a půl kila mandarinek bychom zaplatili 50 korun.
- **B)** Za kilo mandarinek a půl kila pomerančů bychom zaplatili 50 korun.
- **C)** Pomeranče stojí o 15 korun na kilo více než mandarinky.
- **D)** Dvě kila mandarinek stojí stejně jako kilo a čtvrt pomerančů.
- **E)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**B** — mandarinky 30 Kč/kg, pomeranče 40 Kč/kg. $1{,}5m+3{,}5\cdot\frac43m=185\Rightarrow\frac{37}{6}m=185$, $m=30$, $p=40$; $30+\frac12\cdot40=50$.

</details>

### `fit-2021-01` — [FIT ČVUT, vzorová přijímací zkouška 2021 (příklad 1, 3 body)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D8

Binární operace $\star$ je definována předpisem $a\star b=\dfrac{a+b}{a-b}$. Řešte rovnici $(2\star x)\star 3=-2$.

- **A)** Rovnice má jedno záporné řešení.
- **B)** Žádná z ostatních možností není správná.
- **C)** Rovnice má kladné řešení větší než $2$.
- **D)** Rovnice má dvě řešení a jejich součin je $4$.
- **E)** Rovnice nemá řešení.

<details><summary>Ответ и решение</summary>

**B** — $x=0$. $u=2\star x$: $\frac{u+3}{u-3}=-2\Rightarrow u=1$; $\frac{2+x}{2-x}=1\Rightarrow x=0$ (a $2\star0=1$ je definováno).

</details>

### `fit-2022-07` — [FIT ČVUT, vzorová přijímací zkouška 2022 (příklad 7, 7 bodů)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D12

Pytle s bramborami byly do skladu přivezeny ve třech etapách. V první etapě bylo přivezeno $15\,\%$ celkového počtu pytlů. Průměrná hmotnost jednoho pytle v první etapě byla $51$ kg, v druhé etapě $55$ kg a ve třetí etapě $48$ kg. Celková průměrná hmotnost pytle brambor v tomto skladu je $50{,}55$ kg. Určete, kolik procent z celkového počtu pytlů bylo přivezeno ve druhé etapě.

- **A)** Žádná z ostatních možností není správná.
- **B)** Úloha má více než jedno řešení.
- **C)** $55\,\%$
- **D)** $30\,\%$
- **E)** Úloha nemá řešení.

<details><summary>Ответ и решение</summary>

**D** — $30\,\%$. $0{,}15\cdot51+55p+48(0{,}85-p)=50{,}55\Rightarrow7p=2{,}1$, $p=0{,}3$.

</details>

### `fit-2026-16` — [FIT ČVUT, vzorová přijímací zkouška 2026 (příklad 16, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 3, úloha 18; DÚ 2, D12

Řešte rovnici $(x^2-x+3)^2-8(x^2-x)=9$.

- **A)** Rovnice nemá řešení.
- **B)** Součin všech reálných řešení je $-2$.
- **C)** Všechna reálná řešení rovnice leží v intervalu $\langle-1,3\rangle$.
- **D)** Žádná z ostatních možností není správná.
- **E)** Rovnice má pouze nezáporná řešení.

<details><summary>Ответ и решение</summary>

**C** — $x\in\{-1;0;1;2\}$. $t=x^2-x$: $(t+3)^2-8t=9\iff t^2-2t=0$, $t\in\{0;2\}$; $x\in\{0;1\}\cup\{-1;2\}$.

</details>

### `fit-2023-15` — [FIT ČVUT, vzorová přijímací zkouška 2023 (příklad 15, 7 bodů)](https://fit.cvut.cz/cs/fakulta/informacni-deska)

*Темы:* 4. Rovnice s parametrem, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 3, úloha 19

Je dána rovnice $3x^2-24x+p=0$ s neznámou $x$ a parametrem $p$. Určete $p$ tak, aby jeden kořen rovnice byl trojnásobkem druhého.

- **A)** Žádná z ostatních možností není správná.
- **B)** Takový parametr $p$ neexistuje.
- **C)** $p=12$.
- **D)** $p=108$.
- **E)** Takových $p$ je nekonečně mnoho.

<details><summary>Ответ и решение</summary>

**A** — $p=36$. $x_1=3x_2$, $x_1+x_2=8\Rightarrow x_2=2$, $x_1=6$; $x_1x_2=\frac p3=12\Rightarrow p=36$ — mezi variantami není.

</details>

### `fit-2022-06` — [FIT ČVUT, vzorová přijímací zkouška 2022 (příklad 6, 7 bodů)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 5, úloha 17

Nalezněte řešení rovnice $|2x-1|-|2-3x|=-x$ a rozhodněte, které tvrzení je pravdivé.

- **A)** Žádná z ostatních možností není správná.
- **B)** Rovnice má právě $2$ různá řešení.
- **C)** Rovnice má právě $3$ různá řešení.
- **D)** Rovnice nemá řešení.
- **E)** Rovnice má právě $1$ řešení.

<details><summary>Ответ и решение</summary>

**E** — $x=\frac12$. Nulové body $\frac12,\frac23$. Na $x<\frac12$: $x-1=-x$, $x=\frac12$ nevyhovuje; na $\left\langle\frac12;\frac23\right)$: $5x-3=-x$, $x=\frac12$ ✓; na $x\ge\frac23$: $1=0$.

</details>

### ⚠ `fit-2018-11` — [FIT ČVUT, vzorová přijímací zkouška 2018 (příklad 11, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2018.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 9, D3 (pool přijímaček)

Kolik sudých celých čísel splňuje nerovnici $x^2-53x+150\le0$?

- **A)** $24$
- **B)** nekonečně mnoho
- **C)** Žádná z ostatních možností není správná.
- **D)** $25$
- **E)** $48$

<details><summary>Ответ и решение</summary>

**A** — $24$. Kořeny $3$ a $50$, řešení $\langle3;50\rangle$. Sudá čísla $4,6,\dots,50$: celkem $24$.

</details>

### ⚠ `fel-vzor01-11` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 11; přeformulováno)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-reseni-vzor01.pdf)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 7, úloha 18

Najděte množinu všech reálných řešení nerovnice $|x+5|\ge4+|3-2x|$.

<details><summary>Ответ и решение</summary>

$x\in\left\langle\frac23;4\right\rangle$. Nulové body $-5,\frac32$: pro $x<-5$ nic; na $\left\langle-5;\frac32\right\rangle$: $x\ge\frac23$; pro $x>\frac32$: $x\le4$.

</details>

### ⚠ `fit-2021-11` — [FIT ČVUT, vzorová přijímací zkouška 2021 (příklad 11, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 7. Nerovnice s absolutní hodnotou, 6. Nerovnice. Soustava nerovnic, 1. Množina. Podmnožina · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 7, úloha 17

Množina $A$ obsahuje všechna reálná $x$, pro která $x^2+4x-2>0$, množina $B$ všechna reálná $x$, pro která $|x+1|\le3$. Určete rozdíl $A-B$ (tj. $A\setminus B$).

- **A)** $\left(-2+\sqrt6;2\right\rangle$
- **B)** $\left\langle-4;-2+\sqrt6\right)$
- **C)** Žádná z ostatních možností není správná.
- **D)** $\left(-\infty;-2-\sqrt6\right)\cup(2;\infty)$
- **E)** $\left(-2-\sqrt6;4\right\rangle$

<details><summary>Ответ и решение</summary>

**D** — $\left(-\infty;-2-\sqrt6\right)\cup(2;\infty)$. $A=\left(-\infty;-2-\sqrt6\right)\cup\left(-2+\sqrt6;\infty\right)$, $B=\langle-4;2\rangle$; $-2-\sqrt6\approx-4{,}45<-4$.

</details>

### ⚠ `fel-vzor01-10` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 10; přeformulováno)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-reseni-vzor01.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice, 2. Mocnina. Odmocnina, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 8, úloha 18

Graf funkce $y=\left(\dfrac{1-\sqrt x}{\sqrt x-x}\right)^2$ je částí

<details><summary>Ответ и решение</summary>

$y=\frac1x$ pro $x>0$, $x\ne1$. $\sqrt x-x=\sqrt x(1-\sqrt x)$, takže $y=\frac1x$ pro $x>0$, $x\ne1$ — část hyperboly.

*Примечание:* Ve vzoru FEL nejsou nabídnuté odpovědi; varianty z kurzu odstraněny. Znění převzato z kurzu (přeformulováno) — nahradit originálem.

</details>

### ⚠ `fit-2020-10` — [FIT ČVUT, vzorová přijímací zkouška 2020 (příklad 10, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2020.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice, 6. Nerovnice. Soustava nerovnic · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 6, úloha 19

Určete maximální definiční obor funkce $f(x)=\sqrt{x+2}+\sqrt{\dfrac{1}{x^2-x-\frac34}}$.

- **A)** Žádná z ostatních možností není správná.
- **B)** $\left\langle-2;-\frac12\right)\cup\left(\frac32;\infty\right)$
- **C)** $\left\langle-\frac12;\frac32\right\rangle$
- **D)** $\left(-\frac12;\frac32\right)\cup\langle2;\infty)$
- **E)** všechna kladná čísla

<details><summary>Ответ и решение</summary>

**B** — $\left\langle-2;-\frac12\right)\cup\left(\frac32;\infty\right)$. $x\ge-2$ a $x^2-x-\frac34=\left(x-\frac32\right)\left(x+\frac12\right)>0$.

</details>

### ⚠ `fit-2021-05` — [FIT ČVUT, vzorová přijímací zkouška 2021 (příklad 5, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice, 6. Nerovnice. Soustava nerovnic · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 8, D1

Které z následujících tvrzení o definičním oboru funkce $f(x)=\sqrt{\dfrac{1}{x+2}}+\sqrt{\dfrac{1}{x^2-x-\frac34}}$ je pravdivé?

- **A)** Definičním oborem jsou všechna kladná čísla.
- **B)** Definiční obor je $\left(-\frac12;\frac32\right)\cup\langle2;\infty)$.
- **C)** Definiční obor je $\left\langle-\frac12;\frac32\right\rangle$.
- **D)** Žádná z ostatních možností není správná.
- **E)** Definiční obor je $\left(-\infty;-\frac12\right)\cup\left(\frac32;2\right\rangle$.

<details><summary>Ответ и решение</summary>

**D** — $\left(-2;-\frac12\right)\cup\left(\frac32;\infty\right)$. $x+2>0$ a $\left(x-\frac32\right)\left(x+\frac12\right)>0$; výsledek mezi variantami není.

*Примечание:* Podle kurzu se tatáž úloha objevuje i ve vzoru 2019 (př. 5).

</details>

### ⚠ `fit-2022-05` — [FIT ČVUT, vzorová přijímací zkouška 2022 (příklad 5, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice, 6. Nerovnice. Soustava nerovnic · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 8, úloha 17

Které z následujících tvrzení o definičním oboru funkce $f(x)=\sqrt{\dfrac{x-2}{x^2-x-\frac34}}$ je pravdivé?

- **A)** Definiční obor je $\left(-\infty;-\frac12\right)\cup\left(\frac32;2\right\rangle$.
- **B)** Žádná z ostatních možností není správná.
- **C)** Definiční obor je $\left(-\frac12;\frac32\right)\cup\langle2;\infty)$.
- **D)** Definiční obor je $\left\langle-\frac12;\frac32\right\rangle$.
- **E)** Definičním oborem jsou všechna kladná čísla.

<details><summary>Ответ и решение</summary>

**C** — $\left(-\frac12;\frac32\right)\cup\langle2;\infty)$. $\frac{x-2}{\left(x-\frac32\right)\left(x+\frac12\right)}\ge0$ — metoda intervalů s body $-\frac12,\frac32,2$.

</details>

### ⚠ `fit-2016-08` — [FIT ČVUT, vzorová přijímací zkouška 2016 (příklad 8, 5 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2016.pdf)

*Темы:* 10. Exponenciální funkce · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 10, úloha 17

Je dána funkce $y=\left(\frac12\right)^{3x-1}$. Pak $y\in\left\langle\frac12;2\right\rangle$ právě pro

- **A)** Žádná z ostatních možností není správná.
- **B)** $x\in\left\langle0;\frac23\right\rangle$
- **C)** $x\in(-\infty;0\rangle\cup\left\langle\frac23;\infty\right)$
- **D)** $x\in\left\langle\frac23;2\right\rangle$
- **E)** $x\in\left\langle\frac23;\frac{1+\ln2}{3}\right\rangle$

<details><summary>Ответ и решение</summary>

**B** — $x\in\left\langle0;\frac23\right\rangle$. $y=2^{1-3x}$, $2^{-1}\le2^{1-3x}\le2^1\iff-1\le1-3x\le1\iff0\le x\le\frac23$.

</details>

### ⚠ `fit-2022-12` — [FIT ČVUT, vzorová přijímací zkouška 2022 (příklad 12, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 10. Exponenciální funkce · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 10, úloha 18

Je dána funkce $y=2e^{3x-1}$. Pak $y\in\left\langle\frac12;2\right\rangle$ právě pro

- **A)** $x\in\left\langle\frac{1-\ln4}{3};\frac13\right\rangle$
- **B)** Žádná z ostatních možností není správná.
- **C)** $x\in\langle-1;0\rangle$
- **D)** $x\in\left\langle-\frac{e+1}{3};\frac{e^2+1}{3}\right\rangle$
- **E)** $x\in\left\langle\frac13;\infty\right)$

<details><summary>Ответ и решение</summary>

**A** — $x\in\left\langle\frac{1-\ln4}{3};\frac13\right\rangle$. $e^{3x-1}\in\left\langle\frac14;1\right\rangle\iff-\ln4\le3x-1\le0$.

</details>

### ⚠ `fit-2015-07` — [FIT ČVUT, vzorová přijímací zkouška 2015 (příklad 7, 5 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 11, úloha 18

Rozhodněte, které tvrzení o řešeních rovnice $9^{x-\frac12}+9^{\frac12-x}=\frac{10}{3}$ je pravdivé.

- **A)** Součet všech řešení je $-1$.
- **B)** Rovnice nemá řešení.
- **C)** Žádná z ostatních možností není správná.
- **D)** Rovnice má dvě nezáporná řešení.
- **E)** Součin všech řešení je $9$.

<details><summary>Ответ и решение</summary>

**D** — $x\in\{0;1\}$. $t=9^{x-\frac12}>0$: $t+\frac1t=\frac{10}{3}$, tj. $3t^2-10t+3=0$, $t\in\{3;\frac13\}$. Odtud $x=1$ nebo $x=0$.

</details>

### ⚠ `fit-2022-09` — [FIT ČVUT, vzorová přijímací zkouška 2022 (příklad 9, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 2, D11

Řešte rovnici $3^x+5\cdot4^x=2\cdot4^{x+1}-3^{x+1}$.

- **A)** jedno záporné řešení
- **B)** nemá řešení
- **C)** jedno kladné řešení
- **D)** jediné řešení $x=0$
- **E)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**C** — $x=1$. $3^x+3\cdot3^x=8\cdot4^x-5\cdot4^x\Rightarrow4\cdot3^x=3\cdot4^x\Rightarrow\left(\frac34\right)^x=\frac34$, $x=1$.

*Примечание:* Nabízené odpovědi v kurzu přeformulovány.

</details>

### ⚠ `fit-2026-03` — [FIT ČVUT, vzorová přijímací zkouška 2026 (příklad 3, 3 body; přeformulováno)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 11, úloha 17

Pro řešení nerovnice $\left(\frac13\right)^{x^2}\le3^{-x-6}$ platí:

- **A)** Všechna řešení leží v $(-\infty;-2\rangle\cup\langle3;\infty)$.
- **B)** Žádná z ostatních možností není správná.
- **C)** Všechna řešení leží v intervalu $\langle-2;\infty)$.
- **D)** Neexistují záporná řešení.
- **E)** Řešením jsou všechna reálná čísla.

<details><summary>Ответ и решение</summary>

**A** — $x\in(-\infty;-2\rangle\cup\langle3;\infty)$. $3^{-x^2}\le3^{-x-6}\iff-x^2\le-x-6\iff(x-3)(x+2)\ge0$.

*Примечание:* Tatáž úloha i ve vzoru 2021 (př. 10, 7 bodů).

</details>

### ⚠ `fit-2015-09` — [FIT ČVUT, vzorová přijímací zkouška 2015 (příklad 9, 5 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 12, úloha 17

Které tvrzení o definičním oboru funkce $f(x)=\sqrt{\log_5 x+1}$ je pravdivé?

- **A)** Definiční obor je $\left(0;\frac15\right)\cup\left(\frac15;\infty\right)$.
- **B)** Žádná z ostatních možností není správná.
- **C)** Definičním oborem jsou všechna kladná reálná čísla.
- **D)** Definiční obor je $\left\langle\frac15;\infty\right)$.
- **E)** Definiční obor je $\langle-5;\infty)$.

<details><summary>Ответ и решение</summary>

**D** — $D(f)=\left\langle\frac15;\infty\right)$. $x>0$ a $\log_5x\ge-1=\log_5\frac15$; logaritmus o základu $5$ je rostoucí, tedy $x\ge\frac15$.

</details>

### ⚠ `fit-2015-10` — [FIT ČVUT, vzorová přijímací zkouška 2015 (příklad 10, 5 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2015.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 12, úloha 18

Je dána funkce $y=\ln(2x+1)$. Pak $y\in\langle-1;1\rangle$ právě pro

- **A)** Žádná z ostatních možností není správná.
- **B)** $x\in\left\langle-\frac12;\frac{e-1}{2}\right\rangle$
- **C)** $x\in\left(-\frac{e^{-1}}{2};\frac12\right)$
- **D)** $x\in\left\langle\frac{e^{-1}-1}{2};\frac{e-1}{2}\right\rangle$
- **E)** $x\in\left\langle-\frac{e^{-1}}{2};\frac{e-1}{2}\right\rangle$

<details><summary>Ответ и решение</summary>

**D** — $x\in\left\langle\frac{e^{-1}-1}{2};\frac{e-1}{2}\right\rangle$. $e^{-1}\le2x+1\le e$, odtud $\frac{e^{-1}-1}{2}\le x\le\frac{e-1}{2}$.

</details>

### ⚠ `fit-2017-10` — [FIT ČVUT, vzorová přijímací zkouška 2017 (příklad 10, 7 bodů; přeformulováno)](https://fit.cvut.cz/cs/fakulta/informacni-deska)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 12, úloha 19

Které tvrzení o definičním oboru funkce $f(x)=\dfrac{\ln(x^2+8x+15)}{\sqrt{2-x}}$ je pravdivé?

- **A)** Definiční obor je $\mathbb{R}\setminus\{2\}$.
- **B)** Definiční obor je $(-\infty;-5)\cup(-3;2)$.
- **C)** Definiční obor je $(2;\infty)$.
- **D)** Definiční obor je $(-\infty;-5)$.
- **E)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**B** — $(-\infty;-5)\cup(-3;2)$. $(x+3)(x+5)>0\Rightarrow x<-5\ \vee\ x>-3$; $2-x>0\Rightarrow x<2$.

</details>

### ⚠ `fel-vzor01-12` — [FEL ČVUT, vzorový přijímací test VZOR01 (příklad 12; přeformulováno)](https://www.feld.cvut.cz/dokumenty/ke-stazeni/materialy-doplnujici-studium/prijimaci-test-reseni-vzor01.pdf)

*Темы:* 29. Směrnicový a úsekový tvar rovnice přímky, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 9, úloha 20

Přímky procházejí bodem $A[0;-5]$ a mají od počátku souřadnic vzdálenost $\sqrt5$. Jejich směrnice jsou

<details><summary>Ответ и решение</summary>

$k=\pm2$. $y=kx-5$: $\frac{5}{\sqrt{k^2+1}}=\sqrt5\Rightarrow k^2=4$.

*Примечание:* Ve vzoru FEL nejsou nabídnuté odpovědi; varianty z kurzu odstraněny. Znění převzato z kurzu (přeformulováno) — nahradit originálem.

</details>

## Уровень 3 — сложный

### `fit-2026-04` — [FIT ČVUT, vzorová přijímací zkouška 2026 (příklad 4, 7 bodů)](https://fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2026-s-resenim.pdf)

*Темы:* 1. Množina. Podmnožina · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 1, úloha 16

Ve třídě je $30$ žáků. Každý může maturovat z matematiky (M), fyziky (F) a/nebo angličtiny (A). Matematiku a zároveň fyziku si zvolila třetina žáků. Alespoň jeden z předmětů M, F si zvolilo $24$ žáků. Angličtinu si zvolilo $22$ žáků. Všechny tři předměty si vybralo $8$ žáků, jen matematiku $3$ žáci, matematiku a zároveň angličtinu $15$ žáků. $2$ žáci si nevybrali ani jeden z těchto předmětů. Které tvrzení platí?

- **A)** Žádná z ostatních možností není správná.
- **B)** Angličtinu nebo fyziku si vybralo více žáků než matematiku nebo fyziku.
- **C)** Jen angličtinu si vybralo více žáků než matematiku a zároveň fyziku.
- **D)** Neexistuje žák, který si zvolil jen fyziku.
- **E)** Popsaná situace nemůže nastat.

<details><summary>Ответ и решение</summary>

**B** — $|A\cup F|=25>|M\cup F|=24$. Vennův diagram: jen M $3$, MF bez A $2$, MA bez F $7$, MFA $8$, FA bez M $3$, jen F $1$, jen A $4$, nic $2$. $|A\cup F|=30-2-3=25$.

</details>

### `fit-2020-13` — [FIT ČVUT, vzorová přijímací zkouška 2020 (příklad 13, 7 bodů)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2020.pdf)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 4, úloha 17

Určete hodnoty reálného parametru $p$ tak, aby rovnice $p^2(2x-8)+p\,(x^2-6x+8)+4x-x^2=0$ měla právě jedno řešení, a rozhodněte, které tvrzení je pravdivé.

- **A)** Existuje jen jedno takové $p$.
- **B)** Žádná z ostatních možností není správná.
- **C)** Takových $p$ je nekonečně mnoho.
- **D)** Existují dvě taková $p$.
- **E)** Takový parametr $p$ neexistuje.

<details><summary>Ответ и решение</summary>

**A** — $p=-2$. Rovnice je $(p-1)(x-4)(x+2p)=0$. Pro $p=1$ je řešením každé $x$; jinak $x=4$ nebo $x=-2p$, jediné řešení právě pro $-2p=4$, tj. $p=-2$.

</details>

### `fit-2021-15` — [FIT ČVUT, vzorová přijímací zkouška 2021 (příklad 15, 7 bodů)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 4, úloha 18

Určete všechny hodnoty reálného parametru $p$, pro které má rovnice $px^2-p(p+3)x+2p(p+1)=0$ právě 2 různé reálné kořeny.

- **A)** $p\in\mathbb{R}\setminus\{1\}$.
- **B)** Žádná z ostatních možností není správná.
- **C)** $p\in\mathbb{R}$.
- **D)** $p\in(0;1)\cup(1;\infty)$.
- **E)** Takové $p$ neexistuje.

<details><summary>Ответ и решение</summary>

**B** — $p\in\mathbb{R}\setminus\{0;1\}$. Pro $p=0$ je řešením každé $x$. Pro $p\ne0$: $x^2-(p+3)x+2(p+1)=0$, $D=(p-1)^2>0\iff p\ne1$.

</details>

### ⚠ `fit-2020-05` — [FIT ČVUT, vzorová přijímací zkouška 2020 (příklad 5, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2020.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT lekce 6, úloha 18

Je dána funkce $y=2x^2+2x-12$. Určete všechna $x$, pro která leží $y$ v intervalu $\langle0;12)$.

- **A)** Žádná z ostatních možností není správná.
- **B)** $x\in\langle2;3)$
- **C)** $x\in(-\infty;-3\rangle\cup\langle2;\infty)$
- **D)** $x\in\langle3;\infty)$
- **E)** $x\in\langle-4;3\rangle$

<details><summary>Ответ и решение</summary>

**A** — $x\in(-4;-3\rangle\cup\langle2;3)$. $y\ge0\iff(x+3)(x-2)\ge0$; $y<12\iff(x+4)(x-3)<0$. Průnik: $(-4;-3\rangle\cup\langle2;3)$ — mezi variantami není.

</details>

### ⚠ `fit-2024-11` — [FIT ČVUT, vzorová přijímací zkouška 2024 (příklad 11, 7 bodů; přeformulováno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2024.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* в курсе пересказано — заменить оригиналом · *В курсе:* ČVUT DÚ 6, D1 (pool přijímaček)

Najděte všechna reálná řešení nerovnice $(x+1)^3\le(x+1)^{-1}$ a vyberte pravdivé tvrzení.

- **A)** $x\in(-\infty;-2\rangle\cup\langle0;\infty)$
- **B)** $x\in(-\infty;-1)\cup(-1;\infty)$
- **C)** $x\in(-\infty;-2\rangle\cup(-1;0\rangle$
- **D)** $x\in\langle-2;0\rangle$
- **E)** Žádná z ostatních možností není správná.

<details><summary>Ответ и решение</summary>

**C** — $(-\infty;-2\rangle\cup(-1;0\rangle$. $t=x+1\ne0$: $\frac{t^4-1}{t}\le0\iff\frac{(t-1)(t+1)}{t}\le0\iff t\le-1\ \vee\ 0<t\le1$.

</details>

### `fit-2022-10` — [FIT ČVUT, vzorová přijímací zkouška 2022 (příklad 10, 7 bodů)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2022.pdf)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT DÚ 3, D13

Určete první člen $a_1$ a diferenci $d$ reálné aritmetické posloupnosti, pokud víte, že součet čtvrtého a pátého členu je $4$ a součin čtvrtého a pátého členu je $5$.

- **A)** Žádná z ostatních možností není správná.
- **B)** Úloha nemá řešení.
- **C)** Součin všech možných diferencí je $4$.
- **D)** Součet všech možných prvních členů je $24$.
- **E)** $d=2$, $a_1=-5$.

<details><summary>Ответ и решение</summary>

**B** — úloha nemá řešení. $a_4,a_5$ jsou kořeny $t^2-4t+5=0$, $D=16-20<0$ — reálná řešení neexistují.

</details>

### ⚠ `fit-2019-06` — [FIT ČVUT, vzorová přijímací zkouška 2019 (příklad 6, 7 bodů; upraveno)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2019.pdf)

*Темы:* 20. Geometrická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* в курсе изменён вопрос — заменить оригиналом · *В курсе:* ČVUT DÚ 2, D13

Mezi kořeny rovnice $x^2-30x+81=0$ vložte čtyři čísla tak, aby spolu s oběma kořeny tvořila šest po sobě jdoucích členů geometrické posloupnosti s kvocientem $q>0$. Určete kvocient $q$ a čtvrtý člen posloupnosti.

<details><summary>Ответ и решение</summary>

$q=\sqrt[5]{9}$, $a_4=9\sqrt[5]{3}$. Kořeny $3$ a $27$: $a_1=3$, $a_6=3q^5=27$, $q^5=9$, $q=3^{2/5}$, $a_4=3q^3=3^{11/5}=9\sqrt[5]{3}$.

*Примечание:* V originále výběr pravdivého tvrzení z pěti možností; v kurzu upraveno na otevřenou úlohu.

</details>

### `fit-2021-13` — [FIT ČVUT, vzorová přijímací zkouška 2021 (příklad 13, 7 bodů)](https://old.fit.cvut.cz/fakulta/informacni-deska/vzorove-prijimaci-zkousky/bc/bc-vzorova-prijimaci-zkouska-2021.pdf)

*Темы:* 30. Kuželosečky. Kružnice, 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу) · *В курсе:* ČVUT lekce 4, úloha 19

Určete hodnotu parametru $p$ tak, aby přímka $q:\ px+y-1=0$ neměla s kružnicí $k:\ x^2-4x+y^2-6y-3=0$ žádný společný bod.

- **A)** Takových $p$ je nekonečně mnoho.
- **B)** $p\in(-\infty;3)\cup\langle7;\infty)$
- **C)** Žádná z ostatních možností není správná.
- **D)** $p=7$
- **E)** Takové $p$ neexistuje.

<details><summary>Ответ и решение</summary>

**E** — takové $p$ neexistuje. Přímka prochází bodem $[0;1]$, který leží uvnitř kružnice $(x-2)^2+(y-3)^2=16$ (vzdálenost od středu $\sqrt8<4$), proto ji vždy protne.

*Примечание:* Podle kurzu tatáž úloha i ve vzoru 2019.

</details>

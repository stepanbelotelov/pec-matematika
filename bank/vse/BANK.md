# Банк задач přijímaček (VŠE) — обзор

Файл собирается скриптом `bank/build.py` из `tasks.json` и `sources.json`; вручную не редактировать.

Всего задач: **1615** · базовый: 841 · стандартный: 635 · сложный: 139 · Vlastní Vlastní: 1579 · VŠE KMAT: 22 · VŠE FMV: 11 · VŠE FIS: 3

⚠ **0** задач пока записаны так, как они пересказаны в курсе, — их текст нужно заменить дословным оригиналом из PDF (пометка ⚠ в карточке). Ответы у всех задач проверены.

## Покрытие тем курса

| № | Тема | Ур. 1 | Ур. 2 | Ур. 3 | Всего |
|---|---|---|---|---|---|
| 1 | Množina. Podmnožina | 4 | 6 | 1 | 11 |
| 2 | Mocnina. Odmocnina | 86 | 7 | 1 | 94 |
| 3 | Rovnice (lineární, kvadratické, soustava rovnic) | 21 | 12 | 2 | 35 |
| 4 | Rovnice s parametrem |  | 3 | 8 | 11 |
| 5 | Rovnice s absolutní hodnotou | 4 | 4 |  | 8 |
| 6 | Nerovnice. Soustava nerovnic | 9 | 21 | 2 | 32 |
| 7 | Nerovnice s absolutní hodnotou | 22 | 3 | 1 | 26 |
| 8 | Iracionální rovnice. Iracionální nerovnice |  | 4 | 1 | 5 |
| 9 | Funkce (lineární, kvadratická, lomená). Grafy | 34 | 21 | 20 | 75 |
| 10 | Exponenciální funkce | 2 | 2 | 13 | 17 |
| 11 | Exponenciální rovnice a nerovnice | 100 | 10 | 25 | 135 |
| 12 | Logaritmická funkce | 142 | 49 |  | 191 |
| 13 | Logaritmické rovnice a nerovnice | 40 | 44 | 25 | 109 |
| 14 | Goniometrické funkce | 42 | 5 |  | 47 |
| 15 | Goniometrické rovnice a nerovnice | 76 | 91 | 5 | 172 |
| 16 | Komplexní čísla | 55 | 42 | 2 | 99 |
| 17 | Goniometrický tvar komplexního čísla. Moivreova věta |  | 57 | 1 | 58 |
| 18 | Posloupnosti | 2 | 1 | 1 | 4 |
| 19 | Aritmetická posloupnost | 27 | 44 |  | 71 |
| 20 | Geometrická posloupnost | 5 | 6 | 1 | 12 |
| 21 | Kombinatorika. Faktoriál | 1 |  | 2 | 3 |
| 22 | Variace. Permutace. Kombinace | 34 | 36 |  | 70 |
| 23 | Kombinační číslo. Binomická věta |  | 35 | 16 | 51 |
| 24 | Pravděpodobnost | 3 | 6 | 1 | 10 |
| 25 | Analytická geometrie. Vektory | 2 | 2 |  | 4 |
| 26 | Parametrická rovnice přímky | 20 |  |  | 20 |
| 27 | Obecná rovnice přímky | 33 | 22 | 1 | 56 |
| 28 | Vzájemná poloha přímek | 21 | 4 |  | 25 |
| 29 | Směrnicový a úsekový tvar rovnice přímky |  |  |  | — |
| 30 | Kuželosečky. Kružnice | 2 | 45 | 1 | 48 |
| 31 | Elipsa |  | 1 | 2 | 3 |
| 32 | Hyperbola |  |  |  | — |
| 33 | Parabola |  | 1 |  | 1 |
| 34 | Planimetrie | 7 | 11 | 3 | 21 |
| 35 | Stereometrie | 6 | 8 | 2 | 16 |
| — | Ostatní | 41 | 32 | 2 | 75 |

Задача считается по основной (первой) теме; дополнительные темы указаны в карточке. «Ostatní» — задачи вне 35 тем плана.

## Уровень 1 — базовый

### `vl-obec-020` — Vlastní úloha ve stylu přijímacích testů (č. 20)

*Темы:* 1. Množina. Podmnožina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro množiny $A$, $B$, $C$ platí $A\subset B$ a $C\subset B$. Který z uvedených vztahů nemusí platit?

- **a)** $A\cup B=B$
- **b)** $C\cap B=C$
- **c)** $A\cup C\subseteq B$
- **d)** $A\cap C=\emptyset$
- **e)** $(C\setminus A)\subseteq(B\setminus A)$

<details><summary>Ответ и решение</summary>

**d** — $A\cap C=\emptyset$. Množiny $A$ a $C$ mohou mít společné prvky (např. $A=C$).

</details>

### `vl-obec-052` — Vlastní úloha ve stylu přijímacích testů (č. 52)

*Темы:* 1. Množina. Podmnožina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jsou dány množiny $A=\{x\in\mathbb Z;\ -2<x\le2\}$ a $B=\langle-1;3)$. Určete $A\cap B$ a $A\setminus B$.

<details><summary>Ответ и решение</summary>

$A\cap B=\{-1;0;1;2\}$, $A\setminus B=\emptyset$. $A=\{-1;0;1;2\}$ a všechny prvky leží v $B$.

</details>

### `vl-nsz-074` — [Vlastní úloha ve stylu NSZ Matematika (č. 74)](https://www.scio.cz/matematika)

*Темы:* 1. Množina. Podmnožina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozdílem množiny všech celých čísel a množiny všech sudých celých čísel (v tomto pořadí) je:

- **a)** množina všech lichých celých čísel
- **b)** množina všech lichých přirozených čísel
- **c)** množina všech záporných celých čísel
- **d)** prázdná množina

<details><summary>Ответ и решение</summary>

**a** — množina všech lichých celých čísel. V $\mathbb Z$ zbudou po odebrání sudých právě lichá čísla, kladná i záporná.

</details>

### `vl-obec-088` — Vlastní úloha ve stylu přijímacích testů (č. 88)

*Темы:* 1. Množina. Podmnožina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik celých čísel obsahuje množina $\left(-\frac72;\sqrt{10}\right)\cap\langle-1;5\rangle$?

- **a)** $3$
- **b)** $4$
- **c)** $5$
- **d)** $6$
- **e)** $7$

<details><summary>Ответ и решение</summary>

**c** — $5$. Průnik je $\langle-1;\sqrt{10})$, celá čísla $-1,0,1,2,3$.

</details>

### `vl-vse-0005` — Vlastní úloha ve stylu přijímaček VŠE (č. 5)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{6}\cdot\sqrt{6}}{\sqrt{6}}$ je rovno číslu:

- **a)** $6^{\dfrac{5}{6}}$
- **b)** $\dfrac{6^{\dfrac{2}{3}}}{6}$
- **c)** $\sqrt[3]{6}$
- **d)** $6^{\dfrac{2}{3}}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt[3]{6}$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{2}-\dfrac{1}{2}=\dfrac{1}{3}$.

</details>

### `vl-obec-009` — Vlastní úloha ve stylu přijímacích testů (č. 9)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]9\cdot\sqrt[6]{3}}{\sqrt3\cdot\sqrt[3]3}$ je rovno číslu:

- **a)** $\sqrt3$
- **b)** $\sqrt[3]3$
- **c)** $1$
- **d)** $3$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**c** — $1$. V mocninách trojky: $\frac23+\frac16-\frac12-\frac13=0$, výsledek $3^0=1$.

</details>

### `vl-vse-0014` — Vlastní úloha ve stylu přijímaček VŠE (č. 14)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{11}\cdot\sqrt{11^{3}}}{\sqrt[6]{11^{5}}}$ je rovno číslu:

- **a)** $\dfrac{1}{11}$
- **b)** $11 \sqrt{11}$
- **c)** $11$
- **d)** $121$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $11$. Exponenty: $\dfrac{1}{3}+\dfrac{3}{2}-\dfrac{5}{6}=1$.

</details>

### `vl-obec-026` — Vlastní úloha ve stylu přijímacích testů (č. 26)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $2^5\cdot5^7\cdot3^2$ se rovná číslu:

- **a)** $2{,}25\cdot10^5$
- **b)** $2{,}25\cdot10^6$
- **c)** $2{,}25\cdot10^7$
- **d)** $2{,}25\cdot10^8$
- **e)** $22{,}5\cdot10^7$

<details><summary>Ответ и решение</summary>

**c** — $2{,}25\cdot10^7$. $2^5\cdot5^5=10^5$ a zbývá $5^2\cdot3^2=225$.

</details>

### `vl-obec-034` — Vlastní úloha ve stylu přijímacích testů (č. 34)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{11}\cdot\sqrt{11}}{\sqrt{11}}$ je rovno číslu:

- **a)** $11^{\dfrac{2}{3}}$
- **b)** $\dfrac{11^{\dfrac{2}{3}}}{11}$
- **c)** $\sqrt[3]{11}$
- **d)** $11^{\dfrac{5}{6}}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt[3]{11}$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{2}-\dfrac{1}{2}=\dfrac{1}{3}$.

</details>

### `vl-vse-0035` — Vlastní úloha ve stylu přijímaček VŠE (č. 35)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{3}\cdot\sqrt{3}}{\sqrt[6]{3^{5}}}$ je rovno číslu:

- **a)** $1$
- **b)** $3$
- **c)** $\sqrt[3]{3}$
- **d)** $\sqrt{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $1$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{2}-\dfrac{5}{6}=0$.

</details>

### `vl-vse-0040` — Vlastní úloha ve stylu přijímaček VŠE (č. 40)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{11}\cdot\sqrt{11}}{\sqrt{11}}$ je rovno číslu:

- **a)** $\sqrt[3]{11}$
- **b)** $\dfrac{11^{\dfrac{2}{3}}}{11}$
- **c)** $11^{\dfrac{5}{6}}$
- **d)** $11^{\dfrac{2}{3}}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\sqrt[3]{11}$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{2}-\dfrac{1}{2}=\dfrac{1}{3}$.

</details>

### `vl-obec-040` — Vlastní úloha ve stylu přijímacích testů (č. 40)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Hodnota výrazu $\left(\sqrt3\right)^2+\sqrt{3^4}+\left(\sqrt3\right)^4+\sqrt{3^6}$ je:

- **a)** $24$
- **b)** $36$
- **c)** $48$
- **d)** $54$
- **e)** $81$

<details><summary>Ответ и решение</summary>

**c** — $48$. $3+9+9+27$.

</details>

### `vl-vse-0046` — Vlastní úloha ve stylu přijímaček VŠE (č. 46)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{11^{2}}\cdot\sqrt[6]{11}}{\sqrt{11}}$ je rovno číslu:

- **a)** $\sqrt[3]{11}$
- **b)** $11^{\dfrac{5}{6}}$
- **c)** $11^{\dfrac{2}{3}}$
- **d)** $\dfrac{11^{\dfrac{2}{3}}}{11}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\sqrt[3]{11}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{6}-\dfrac{1}{2}=\dfrac{1}{3}$.

</details>

### `vl-vse-0051` — Vlastní úloha ve stylu přijímaček VŠE (č. 51)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2^{2}}\cdot\sqrt{2}}{\sqrt[6]{2^{5}}}$ je rovno číslu:

- **a)** $2^{\dfrac{2}{3}}$
- **b)** $\dfrac{2^{\dfrac{2}{3}}}{2}$
- **c)** $\sqrt[3]{2}$
- **d)** $2^{\dfrac{5}{6}}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt[3]{2}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{5}{6}=\dfrac{1}{3}$.

</details>

### `vl-vse-0055` — Vlastní úloha ve stylu přijímaček VŠE (č. 55)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{10^{4}}\cdot\sqrt[6]{10}}{\sqrt[6]{10^{5}}}$ je rovno číslu:

- **a)** $10^{\dfrac{2}{3}}$
- **b)** $10 \sqrt[3]{10}$
- **c)** $10 \sqrt[6]{10}$
- **d)** $\dfrac{\sqrt[3]{10}}{10}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $10^{\dfrac{2}{3}}$. Exponenty: $\dfrac{4}{3}+\dfrac{1}{6}-\dfrac{5}{6}=\dfrac{2}{3}$.

</details>

### `vl-nsz-067` — [Vlastní úloha ve stylu NSZ Matematika (č. 67)](https://www.scio.cz/matematika)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Upravte na součin mocnin prvočísel: $(12^3\cdot25^2\cdot18):(6^4\cdot10)$

- **a)** $2^2\cdot3\cdot5^3$
- **b)** $2^3\cdot3^2\cdot5^3$
- **c)** $2\cdot3\cdot5^4$
- **d)** $2^2\cdot3^2\cdot5^2$

<details><summary>Ответ и решение</summary>

**a** — $2^2\cdot3\cdot5^3$. Čitatel $2^6 3^3\cdot5^4\cdot2\cdot3^2=2^7 3^5 5^4$, jmenovatel $2^4 3^4\cdot2\cdot5=2^5 3^4 5$; podíl $2^2\cdot3\cdot5^3$.

</details>

### `vl-obec-071` — Vlastní úloha ve stylu přijímacích testů (č. 71)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zjednodušte výraz $\dfrac{\sqrt[4]x\cdot\sqrt x}{\sqrt[6]x\cdot\sqrt[3]x}$ pro $x>0$.

<details><summary>Ответ и решение</summary>

$\sqrt[4]x$. $\frac14+\frac12-\frac16-\frac13=\frac14$.

</details>

### `vl-obec-074` — Vlastní úloha ve stylu přijímacích testů (č. 74)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{8^{3}\cdot4^{-2}}{2^{5}}$ je rovno:

- **a)** $\dfrac12$
- **b)** $1$
- **c)** $2$
- **d)** $4$
- **e)** $8$

<details><summary>Ответ и решение</summary>

**b** — $1$. $2^{9-4-5}=2^0$.

</details>

### `vl-obec-086` — Vlastní úloha ve stylu přijímacích testů (č. 86)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kladné číslo $x$, jehož třetí mocnina je $5^{12}$, vydělíme druhou mocninou čísla $5^3$ a dostaneme číslo $y$. Hodnota $y$ je:

- **a)** $\dfrac1{25}$
- **b)** $\dfrac15$
- **c)** $1$
- **d)** $5$
- **e)** $25$

<details><summary>Ответ и решение</summary>

**a** — $\dfrac1{25}$. $x=5^4$, $y=\frac{5^4}{5^6}$.

</details>

### `vl-vse-0089` — Vlastní úloha ve stylu přijímaček VŠE (č. 89)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2}\cdot\sqrt{2^{3}}}{\sqrt[6]{2^{5}}}$ je rovno číslu:

- **a)** $4$
- **b)** $2 \sqrt{2}$
- **c)** $\dfrac{1}{2}$
- **d)** $2 \sqrt[3]{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Exponenty: $\dfrac{1}{3}+\dfrac{3}{2}-\dfrac{5}{6}=1$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-nsz-107` — [Vlastní úloha ve stylu NSZ Matematika (č. 107)](https://www.scio.cz/matematika)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Operace $*$ je definována vztahem $a*b=a^b+b^a$. Čemu se rovná $2*(-1)$?

- **a)** $-\dfrac12$
- **b)** $\dfrac12$
- **c)** $\dfrac32$
- **d)** $3$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac32$. $2^{-1}+(-1)^2=\frac12+1$.

</details>

### `vl-vse-0125` — Vlastní úloha ve stylu přijímaček VŠE (č. 125)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{3^{4}}\cdot\sqrt[6]{3}}{\sqrt[6]{3^{5}}}$ je rovno číslu:

- **a)** $\dfrac{\sqrt[3]{3}}{3}$
- **b)** $3 \sqrt[6]{3}$
- **c)** $3^{\dfrac{2}{3}}$
- **d)** $3 \sqrt[3]{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $3^{\dfrac{2}{3}}$. Exponenty: $\dfrac{4}{3}+\dfrac{1}{6}-\dfrac{5}{6}=\dfrac{2}{3}$.

</details>

### `vl-vse-0149` — Vlastní úloha ve stylu přijímaček VŠE (č. 149)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{11^{2}}\cdot\sqrt[6]{11}}{\sqrt[6]{11^{5}}}$ je rovno číslu:

- **a)** $11$
- **b)** $\sqrt[3]{11}$
- **c)** $\sqrt{11}$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{6}-\dfrac{5}{6}=0$.

</details>

### `vl-vse-0155` — Vlastní úloha ve stylu přijímaček VŠE (č. 155)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2^{2}}\cdot\sqrt{2}}{\sqrt[3]{2^{2}}}$ je rovno číslu:

- **a)** $\dfrac{\sqrt{2}}{2}$
- **b)** $2^{\dfrac{5}{6}}$
- **c)** $\sqrt{2}$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt{2}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{2}{3}=\dfrac{1}{2}$.

</details>

### `vl-vse-0157` — Vlastní úloha ve stylu přijímaček VŠE (č. 157)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2^{2}}\cdot\sqrt[6]{2}}{\sqrt[3]{2^{2}}}$ je rovno číslu:

- **a)** $\dfrac{2^{\dfrac{5}{6}}}{2}$
- **b)** $2^{\dfrac{2}{3}}$
- **c)** $\sqrt[3]{2}$
- **d)** $\sqrt[6]{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt[6]{2}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{6}-\dfrac{2}{3}=\dfrac{1}{6}$.

</details>

### `vl-nsz-190` — [Vlastní úloha ve stylu NSZ Matematika (č. 190)](https://www.scio.cz/matematika)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro operaci $\diamond$ platí $2\diamond(-3)=36$. Která definice tomu vyhovuje?

- **a)** $a\diamond b=-2ab^2$
- **b)** $a\diamond b=a^3b$
- **c)** $a\diamond b=a^2b^2$
- **d)** $a\diamond b=ab^3$

<details><summary>Ответ и решение</summary>

**c** — $a\diamond b=a^2b^2$. $4\cdot9=36$; ostatní dávají $-36$, $-24$, $-54$.

</details>

### `vl-vse-0192` — Vlastní úloha ve stylu přijímaček VŠE (č. 192)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[4]{10^{3}}\cdot\sqrt{10}}{\sqrt[4]{10}}$ je rovno číslu:

- **a)** $100$
- **b)** $10$
- **c)** $10 \sqrt{10}$
- **d)** $\dfrac{1}{10}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $10$. Exponenty: $\dfrac{3}{4}+\dfrac{1}{2}-\dfrac{1}{4}=1$.

</details>

### `vl-vse-0225` — Vlastní úloha ve stylu přijímaček VŠE (č. 225)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{10^{2}}\cdot\sqrt{10}}{\sqrt[3]{10^{2}}}$ je rovno číslu:

- **a)** $\sqrt{10}$
- **b)** $10$
- **c)** $10^{\dfrac{5}{6}}$
- **d)** $\dfrac{\sqrt{10}}{10}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\sqrt{10}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{2}{3}=\dfrac{1}{2}$.

</details>

### `vl-vse-0290` — Vlastní úloha ve stylu přijímaček VŠE (č. 290)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{6^{2}}\cdot\sqrt{6}}{\sqrt{6}}$ je rovno číslu:

- **a)** $6$
- **b)** $\dfrac{\sqrt[3]{6}}{6}$
- **c)** $6 \sqrt[3]{6}$
- **d)** $6 \sqrt[6]{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{1}{2}=\dfrac{2}{3}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0312` — Vlastní úloha ve stylu přijímaček VŠE (č. 312)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{10^{2}}\cdot\sqrt[6]{10}}{\sqrt[3]{10^{2}}}$ je rovno číslu:

- **a)** $\sqrt[3]{10}$
- **b)** $\dfrac{10^{\dfrac{5}{6}}}{10}$
- **c)** $10^{\dfrac{2}{3}}$
- **d)** $\sqrt{10}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Exponenty: $\dfrac{2}{3}+\dfrac{1}{6}-\dfrac{2}{3}=\dfrac{1}{6}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0331` — Vlastní úloha ve stylu přijímaček VŠE (č. 331)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zlomek $\dfrac{\sqrt[4]{\sqrt3}\cdot\sqrt[8]{3}}{\sqrt[4]{3}}$ je roven číslu:

- **a)** $\sqrt3$
- **b)** $\sqrt[4]3$
- **c)** $\sqrt[8]3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Exponenty trojky: $\frac18+\frac18-\frac14=0$.

</details>

### `vl-vse-0339` — Vlastní úloha ve stylu přijímaček VŠE (č. 339)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2^{4}}\cdot\sqrt[6]{2}}{\sqrt{2}}$ je rovno číslu:

- **a)** $\dfrac{1}{2}$
- **b)** $4$
- **c)** $2 \sqrt{2}$
- **d)** $2 \sqrt[3]{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Exponenty: $\dfrac{4}{3}+\dfrac{1}{6}-\dfrac{1}{2}=1$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0355` — Vlastní úloha ve stylu přijímaček VŠE (č. 355)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{10}\cdot\sqrt[6]{10}}{\sqrt{10}}$ je rovno číslu:

- **a)** $\sqrt{10}$
- **b)** $\sqrt[3]{10}$
- **c)** $10$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{6}-\dfrac{1}{2}=0$.

</details>

### `vl-vse-0360` — Vlastní úloha ve stylu přijímaček VŠE (č. 360)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{6^{4}}\cdot\sqrt[6]{6}}{\sqrt{6}}$ je rovno číslu:

- **a)** $\dfrac{1}{6}$
- **b)** $6$
- **c)** $36$
- **d)** $6 \sqrt{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $6$. Exponenty: $\dfrac{4}{3}+\dfrac{1}{6}-\dfrac{1}{2}=1$.

</details>

### `vl-vse-0362` — Vlastní úloha ve stylu přijímaček VŠE (č. 362)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{3^{4}}\cdot\sqrt{3}}{\sqrt[6]{3^{5}}}$ je rovno číslu:

- **a)** $3$
- **b)** $9$
- **c)** $3 \sqrt{3}$
- **d)** $\dfrac{1}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $3$. Exponenty: $\dfrac{4}{3}+\dfrac{1}{2}-\dfrac{5}{6}=1$.

</details>

### `vl-vse-0411` — Vlastní úloha ve stylu přijímaček VŠE (č. 411)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{5^{2}}\cdot\sqrt{5}}{\sqrt{5}}$ je rovno číslu:

- **a)** $5 \sqrt[6]{5}$
- **b)** $\dfrac{\sqrt[3]{5}}{5}$
- **c)** $5^{\dfrac{2}{3}}$
- **d)** $5 \sqrt[3]{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $5^{\dfrac{2}{3}}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{1}{2}=\dfrac{2}{3}$.

</details>

### `vl-vse-0418` — Vlastní úloha ve stylu přijímaček VŠE (č. 418)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[4]{7^{3}}\cdot\sqrt{7}}{\sqrt[4]{7}}$ je rovno číslu:

- **a)** $49$
- **b)** $\dfrac{1}{7}$
- **c)** $7$
- **d)** $7 \sqrt{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $7$. Exponenty: $\dfrac{3}{4}+\dfrac{1}{2}-\dfrac{1}{4}=1$.

</details>

### `vl-vse-0435` — Vlastní úloha ve stylu přijímaček VŠE (č. 435)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[4]{11^{3}}\cdot\sqrt[6]{11}}{\sqrt[4]{11}}$ je rovno číslu:

- **a)** $11$
- **b)** $11 \sqrt[6]{11}$
- **c)** $\dfrac{\sqrt[3]{11}}{11}$
- **d)** $11 \sqrt[3]{11}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Exponenty: $\dfrac{3}{4}+\dfrac{1}{6}-\dfrac{1}{4}=\dfrac{2}{3}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0436` — Vlastní úloha ve stylu přijímaček VŠE (č. 436)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{11^{2}}\cdot\sqrt{11}}{\sqrt{11}}$ je rovno číslu:

- **a)** $11 \sqrt[3]{11}$
- **b)** $\dfrac{\sqrt[3]{11}}{11}$
- **c)** $11^{\dfrac{2}{3}}$
- **d)** $11 \sqrt[6]{11}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $11^{\dfrac{2}{3}}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{1}{2}=\dfrac{2}{3}$.

</details>

### `vl-vse-0437` — Vlastní úloha ve stylu přijímaček VŠE (č. 437)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{6^{2}}\cdot\sqrt[6]{6}}{\sqrt[3]{6^{2}}}$ je rovno číslu:

- **a)** $\dfrac{6^{\dfrac{5}{6}}}{6}$
- **b)** $\sqrt[6]{6}$
- **c)** $6^{\dfrac{2}{3}}$
- **d)** $\sqrt[3]{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\sqrt[6]{6}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{6}-\dfrac{2}{3}=\dfrac{1}{6}$.

</details>

### `vl-vse-0482` — Vlastní úloha ve stylu přijímaček VŠE (č. 482)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{11}\cdot\sqrt{11}}{\sqrt[3]{11^{2}}}$ je rovno číslu:

- **a)** $\dfrac{11^{\dfrac{5}{6}}}{11}$
- **b)** $11^{\dfrac{2}{3}}$
- **c)** $\sqrt[6]{11}$
- **d)** $\sqrt[3]{11}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt[6]{11}$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{2}-\dfrac{2}{3}=\dfrac{1}{6}$.

</details>

### `vl-vse-0530` — Vlastní úloha ve stylu přijímaček VŠE (č. 530)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[4]{11^{3}}\cdot\sqrt{11}}{\sqrt[4]{11}}$ je rovno číslu:

- **a)** $11$
- **b)** $11 \sqrt{11}$
- **c)** $\dfrac{1}{11}$
- **d)** $121$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $11$. Exponenty: $\dfrac{3}{4}+\dfrac{1}{2}-\dfrac{1}{4}=1$.

</details>

### `vl-vse-0537` — Vlastní úloha ve stylu přijímaček VŠE (č. 537)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{7^{4}}\cdot\sqrt{7}}{\sqrt[6]{7^{5}}}$ je rovno číslu:

- **a)** $7$
- **b)** $\dfrac{1}{7}$
- **c)** $49$
- **d)** $7 \sqrt{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $7$. Exponenty: $\dfrac{4}{3}+\dfrac{1}{2}-\dfrac{5}{6}=1$.

</details>

### `vl-vse-0546` — Vlastní úloha ve stylu přijímaček VŠE (č. 546)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{7^{2}}\cdot\sqrt{7}}{\sqrt[6]{7^{5}}}$ je rovno číslu:

- **a)** $7^{\dfrac{2}{3}}$
- **b)** $7^{\dfrac{5}{6}}$
- **c)** $\dfrac{7^{\dfrac{2}{3}}}{7}$
- **d)** $\sqrt[3]{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt[3]{7}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{5}{6}=\dfrac{1}{3}$.

</details>

### `vl-vse-0572` — Vlastní úloha ve stylu přijímaček VŠE (č. 572)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{7^{2}}\cdot\sqrt[6]{7}}{\sqrt[6]{7^{5}}}$ je rovno číslu:

- **a)** $1$
- **b)** $7$
- **c)** $\sqrt{7}$
- **d)** $\sqrt[3]{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $1$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{6}-\dfrac{5}{6}=0$.

</details>

### `vl-vse-0582` — Vlastní úloha ve stylu přijímaček VŠE (č. 582)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[4]{2^{3}}\cdot\sqrt{2}}{\sqrt[4]{2}}$ je rovno číslu:

- **a)** $2$
- **b)** $\dfrac{1}{2}$
- **c)** $2 \sqrt{2}$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Exponenty: $\dfrac{3}{4}+\dfrac{1}{2}-\dfrac{1}{4}=1$.

</details>

### `vl-vse-0596` — Vlastní úloha ve stylu přijímaček VŠE (č. 596)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{11^{2}}\cdot\sqrt{11}}{\sqrt[3]{11^{2}}}$ je rovno číslu:

- **a)** $\sqrt[3]{11}$
- **b)** $\dfrac{\sqrt{11}}{11}$
- **c)** $11$
- **d)** $11^{\dfrac{5}{6}}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{2}{3}=\dfrac{1}{2}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0615` — Vlastní úloha ve stylu přijímaček VŠE (č. 615)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{10}\cdot\sqrt{10}}{\sqrt[6]{10^{5}}}$ je rovno číslu:

- **a)** $\sqrt{10}$
- **b)** $\dfrac{10^{\dfrac{5}{6}}}{10}$
- **c)** $10$
- **d)** $\sqrt[3]{10}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Exponenty: $\dfrac{1}{3}+\dfrac{1}{2}-\dfrac{5}{6}=0$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0619` — Vlastní úloha ve stylu přijímaček VŠE (č. 619)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2}\cdot\sqrt{2}}{\sqrt[6]{2^{5}}}$ je rovno číslu:

- **a)** $\sqrt{2}$
- **b)** $\sqrt[3]{2}$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{2}-\dfrac{5}{6}=0$.

</details>

### `vl-vse-0656` — Vlastní úloha ve stylu přijímaček VŠE (č. 656)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{7^{4}}\cdot\sqrt[6]{7}}{\sqrt{7}}$ je rovno číslu:

- **a)** $7$
- **b)** $49$
- **c)** $7 \sqrt{7}$
- **d)** $\dfrac{1}{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $7$. Exponenty: $\dfrac{4}{3}+\dfrac{1}{6}-\dfrac{1}{2}=1$.

</details>

### `vl-vse-0664` — Vlastní úloha ve stylu přijímaček VŠE (č. 664)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{5^{4}}\cdot\sqrt[6]{5}}{\sqrt{5}}$ je rovno číslu:

- **a)** $5 \sqrt{5}$
- **b)** $5$
- **c)** $25$
- **d)** $\dfrac{1}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $5$. Exponenty: $\dfrac{4}{3}+\dfrac{1}{6}-\dfrac{1}{2}=1$.

</details>

### `vl-vse-0723` — Vlastní úloha ve stylu přijímaček VŠE (č. 723)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[4]{3^{3}}\cdot\sqrt{3}}{\sqrt[4]{3}}$ je rovno číslu:

- **a)** $\dfrac{1}{3}$
- **b)** $9$
- **c)** $3 \sqrt{3}$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $3$. Exponenty: $\dfrac{3}{4}+\dfrac{1}{2}-\dfrac{1}{4}=1$.

</details>

### `vl-vse-0743` — Vlastní úloha ve stylu přijímaček VŠE (č. 743)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{6^{2}}\cdot\sqrt{6}}{\sqrt[6]{6^{5}}}$ je rovno číslu:

- **a)** $6^{\dfrac{5}{6}}$
- **b)** $\sqrt[3]{6}$
- **c)** $\dfrac{6^{\dfrac{2}{3}}}{6}$
- **d)** $6^{\dfrac{2}{3}}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\sqrt[3]{6}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{5}{6}=\dfrac{1}{3}$.

</details>

### `vl-vse-0760` — Vlastní úloha ve stylu přijímaček VŠE (č. 760)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{6^{2}}\cdot\sqrt[6]{6}}{\sqrt{6}}$ je rovno číslu:

- **a)** $\sqrt[3]{6}$
- **b)** $6^{\dfrac{2}{3}}$
- **c)** $\dfrac{6^{\dfrac{2}{3}}}{6}$
- **d)** $6^{\dfrac{5}{6}}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\sqrt[3]{6}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{6}-\dfrac{1}{2}=\dfrac{1}{3}$.

</details>

### `vl-vse-0769` — Vlastní úloha ve stylu přijímaček VŠE (č. 769)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2^{2}}\cdot\sqrt[6]{2}}{\sqrt[6]{2^{5}}}$ je rovno číslu:

- **a)** $\sqrt{2}$
- **b)** $1$
- **c)** $\sqrt[3]{2}$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{6}-\dfrac{5}{6}=0$.

</details>

### `vl-vse-0797` — Vlastní úloha ve stylu přijímaček VŠE (č. 797)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{7^{2}}\cdot\sqrt{7}}{\sqrt{7}}$ je rovno číslu:

- **a)** $7 \sqrt[6]{7}$
- **b)** $\dfrac{\sqrt[3]{7}}{7}$
- **c)** $7 \sqrt[3]{7}$
- **d)** $7^{\dfrac{2}{3}}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $7^{\dfrac{2}{3}}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{1}{2}=\dfrac{2}{3}$.

</details>

### `vl-vse-0805` — Vlastní úloha ve stylu přijímaček VŠE (č. 805)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{7}\cdot\sqrt{7^{3}}}{\sqrt[6]{7^{5}}}$ je rovno číslu:

- **a)** $49$
- **b)** $\dfrac{1}{7}$
- **c)** $7 \sqrt{7}$
- **d)** $7$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $7$. Exponenty: $\dfrac{1}{3}+\dfrac{3}{2}-\dfrac{5}{6}=1$.

</details>

### `vl-vse-0806` — Vlastní úloha ve stylu přijímaček VŠE (č. 806)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{5}\cdot\sqrt{5^{3}}}{\sqrt[6]{5^{5}}}$ je rovno číslu:

- **a)** $\dfrac{1}{5}$
- **b)** $5 \sqrt{5}$
- **c)** $5$
- **d)** $25$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $5$. Exponenty: $\dfrac{1}{3}+\dfrac{3}{2}-\dfrac{5}{6}=1$.

</details>

### `vl-vse-0828` — Vlastní úloha ve stylu přijímaček VŠE (č. 828)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{6^{4}}\cdot\sqrt{6}}{\sqrt[6]{6^{5}}}$ je rovno číslu:

- **a)** $36$
- **b)** $6$
- **c)** $6 \sqrt{6}$
- **d)** $\dfrac{1}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $6$. Exponenty: $\dfrac{4}{3}+\dfrac{1}{2}-\dfrac{5}{6}=1$.

</details>

### `vl-vse-0844` — Vlastní úloha ve stylu přijímaček VŠE (č. 844)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{5^{4}}\cdot\sqrt{5}}{\sqrt[6]{5^{5}}}$ je rovno číslu:

- **a)** $25$
- **b)** $5$
- **c)** $\dfrac{1}{5}$
- **d)** $5 \sqrt{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $5$. Exponenty: $\dfrac{4}{3}+\dfrac{1}{2}-\dfrac{5}{6}=1$.

</details>

### `vl-vse-0852` — Vlastní úloha ve stylu přijímaček VŠE (č. 852)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{11}\cdot\sqrt{11}}{\sqrt[6]{11^{5}}}$ je rovno číslu:

- **a)** $\sqrt[3]{11}$
- **b)** $\sqrt{11}$
- **c)** $1$
- **d)** $11$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{2}-\dfrac{5}{6}=0$.

</details>

### `vl-vse-0868` — Vlastní úloha ve stylu přijímaček VŠE (č. 868)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zjednodušte pro $a>0$: $\left(a^{\frac23}\right)^3\cdot a^{-\frac12}:\sqrt a$.

<details><summary>Ответ и решение</summary>

$a$. $2-\frac12-\frac12=1$.

</details>

### `vl-vse-0869` — Vlastní úloha ve stylu přijímaček VŠE (č. 869)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{6}\cdot\sqrt[6]{6}}{\sqrt{6}}$ je rovno číslu:

- **a)** $\sqrt[3]{6}$
- **b)** $\sqrt{6}$
- **c)** $6$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{6}-\dfrac{1}{2}=0$.

</details>

### `vl-vse-0888` — Vlastní úloha ve stylu přijímaček VŠE (č. 888)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{10}\cdot\sqrt[6]{10}}{\sqrt[6]{10^{5}}}$ je rovno číslu:

- **a)** $1$
- **b)** $\sqrt[3]{10}$
- **c)** $\sqrt[6]{10}$
- **d)** $\dfrac{\sqrt[3]{10}}{10}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Exponenty: $\dfrac{1}{3}+\dfrac{1}{6}-\dfrac{5}{6}=- \dfrac{1}{3}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0892` — Vlastní úloha ve stylu přijímaček VŠE (č. 892)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2}\cdot\sqrt{2}}{\sqrt{2}}$ je rovno číslu:

- **a)** $2^{\dfrac{2}{3}}$
- **b)** $2^{\dfrac{5}{6}}$
- **c)** $\dfrac{2^{\dfrac{2}{3}}}{2}$
- **d)** $\sqrt[3]{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt[3]{2}$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{2}-\dfrac{1}{2}=\dfrac{1}{3}$.

</details>

### `vl-vse-0894` — Vlastní úloha ve stylu přijímaček VŠE (č. 894)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2^{2}}\cdot\sqrt[6]{2}}{\sqrt{2}}$ je rovno číslu:

- **a)** $\sqrt[3]{2}$
- **b)** $\dfrac{2^{\dfrac{2}{3}}}{2}$
- **c)** $2^{\dfrac{5}{6}}$
- **d)** $2^{\dfrac{2}{3}}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\sqrt[3]{2}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{6}-\dfrac{1}{2}=\dfrac{1}{3}$.

</details>

### `vl-vse-0896` — Vlastní úloha ve stylu přijímaček VŠE (č. 896)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[4]{7^{3}}\cdot\sqrt[6]{7}}{\sqrt[4]{7}}$ je rovno číslu:

- **a)** $7 \sqrt[6]{7}$
- **b)** $7^{\dfrac{2}{3}}$
- **c)** $\dfrac{\sqrt[3]{7}}{7}$
- **d)** $7 \sqrt[3]{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $7^{\dfrac{2}{3}}$. Exponenty: $\dfrac{3}{4}+\dfrac{1}{6}-\dfrac{1}{4}=\dfrac{2}{3}$.

</details>

### `vl-vse-0930` — Vlastní úloha ve stylu přijímaček VŠE (č. 930)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{5}\cdot\sqrt{5}}{\sqrt{5}}$ je rovno číslu:

- **a)** $5^{\dfrac{2}{3}}$
- **b)** $\dfrac{5^{\dfrac{2}{3}}}{5}$
- **c)** $5^{\dfrac{5}{6}}$
- **d)** $\sqrt[3]{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt[3]{5}$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{2}-\dfrac{1}{2}=\dfrac{1}{3}$.

</details>

### `vl-vse-0942` — Vlastní úloha ve stylu přijímaček VŠE (č. 942)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[4]{6^{3}}\cdot\sqrt[6]{6}}{\sqrt[4]{6}}$ je rovno číslu:

- **a)** $\dfrac{\sqrt[3]{6}}{6}$
- **b)** $6^{\dfrac{2}{3}}$
- **c)** $6 \sqrt[6]{6}$
- **d)** $6 \sqrt[3]{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $6^{\dfrac{2}{3}}$. Exponenty: $\dfrac{3}{4}+\dfrac{1}{6}-\dfrac{1}{4}=\dfrac{2}{3}$.

</details>

### `vl-vse-0965` — Vlastní úloha ve stylu přijímaček VŠE (č. 965)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{6}\cdot\sqrt[6]{6}}{\sqrt[6]{6^{5}}}$ je rovno číslu:

- **a)** $\sqrt[6]{6}$
- **b)** $\sqrt[3]{6}$
- **c)** $\dfrac{6^{\dfrac{2}{3}}}{6}$
- **d)** $\dfrac{\sqrt[3]{6}}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{6^{\dfrac{2}{3}}}{6}$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{6}-\dfrac{5}{6}=- \dfrac{1}{3}$.

</details>

### `vl-vse-1002` — Vlastní úloha ve stylu přijímaček VŠE (č. 1002)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[4]{6^{3}}\cdot\sqrt{6}}{\sqrt[4]{6}}$ je rovno číslu:

- **a)** $6$
- **b)** $36$
- **c)** $6 \sqrt{6}$
- **d)** $\dfrac{1}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $6$. Exponenty: $\dfrac{3}{4}+\dfrac{1}{2}-\dfrac{1}{4}=1$.

</details>

### `vl-vse-1003` — Vlastní úloha ve stylu přijímaček VŠE (č. 1003)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{5^{2}}\cdot\sqrt[6]{5}}{\sqrt[6]{5^{5}}}$ je rovno číslu:

- **a)** $\sqrt[3]{5}$
- **b)** $\sqrt{5}$
- **c)** $5$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{6}-\dfrac{5}{6}=0$.

</details>

### `vl-vse-1015` — Vlastní úloha ve stylu přijímaček VŠE (č. 1015)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{11}\cdot\sqrt[6]{11}}{\sqrt[6]{11^{5}}}$ je rovno číslu:

- **a)** $\dfrac{\sqrt[3]{11}}{11}$
- **b)** $\sqrt[6]{11}$
- **c)** $\dfrac{11^{\dfrac{2}{3}}}{11}$
- **d)** $\sqrt[3]{11}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{11^{\dfrac{2}{3}}}{11}$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{6}-\dfrac{5}{6}=- \dfrac{1}{3}$.

</details>

### `vl-vse-1018` — Vlastní úloha ve stylu přijímaček VŠE (č. 1018)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{5}\cdot\sqrt{5}}{\sqrt[3]{5^{2}}}$ je rovno číslu:

- **a)** $\sqrt[3]{5}$
- **b)** $5^{\dfrac{2}{3}}$
- **c)** $\sqrt[6]{5}$
- **d)** $\dfrac{5^{\dfrac{5}{6}}}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt[6]{5}$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{2}-\dfrac{2}{3}=\dfrac{1}{6}$.

</details>

### `vl-vse-1044` — Vlastní úloha ve stylu přijímaček VŠE (č. 1044)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[4]{3^{3}}\cdot\sqrt[6]{3}}{\sqrt[4]{3}}$ je rovno číslu:

- **a)** $3 \sqrt[3]{3}$
- **b)** $\dfrac{\sqrt[3]{3}}{3}$
- **c)** $3 \sqrt[6]{3}$
- **d)** $3^{\dfrac{2}{3}}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $3^{\dfrac{2}{3}}$. Exponenty: $\dfrac{3}{4}+\dfrac{1}{6}-\dfrac{1}{4}=\dfrac{2}{3}$.

</details>

### `vl-vse-1045` — Vlastní úloha ve stylu přijímaček VŠE (č. 1045)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{3^{2}}\cdot\sqrt[6]{3}}{\sqrt{3}}$ je rovno číslu:

- **a)** $\sqrt[3]{3}$
- **b)** $3^{\dfrac{5}{6}}$
- **c)** $\dfrac{3^{\dfrac{2}{3}}}{3}$
- **d)** $3^{\dfrac{2}{3}}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\sqrt[3]{3}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{6}-\dfrac{1}{2}=\dfrac{1}{3}$.

</details>

### `vl-vse-1053` — Vlastní úloha ve stylu přijímaček VŠE (č. 1053)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2^{4}}\cdot\sqrt{2}}{\sqrt[6]{2^{5}}}$ je rovno číslu:

- **a)** $4$
- **b)** $2$
- **c)** $2 \sqrt{2}$
- **d)** $\dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2$. Exponenty: $\dfrac{4}{3}+\dfrac{1}{2}-\dfrac{5}{6}=1$.

</details>

### `vl-vse-1063` — Vlastní úloha ve stylu přijímaček VŠE (č. 1063)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2^{2}}\cdot\sqrt{2}}{\sqrt{2}}$ je rovno číslu:

- **a)** $2 \sqrt[3]{2}$
- **b)** $2^{\dfrac{2}{3}}$
- **c)** $\dfrac{\sqrt[3]{2}}{2}$
- **d)** $2 \sqrt[6]{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2^{\dfrac{2}{3}}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{1}{2}=\dfrac{2}{3}$.

</details>

### `vl-vse-1076` — Vlastní úloha ve stylu přijímaček VŠE (č. 1076)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{11^{2}}\cdot\sqrt{11}}{\sqrt[6]{11^{5}}}$ je rovno číslu:

- **a)** $\dfrac{11^{\dfrac{2}{3}}}{11}$
- **b)** $11^{\dfrac{5}{6}}$
- **c)** $11^{\dfrac{2}{3}}$
- **d)** $\sqrt[3]{11}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt[3]{11}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{5}{6}=\dfrac{1}{3}$.

</details>

### `vl-vse-1085` — Vlastní úloha ve stylu přijímaček VŠE (č. 1085)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{10^{2}}\cdot\sqrt[6]{10}}{\sqrt[6]{10^{5}}}$ je rovno číslu:

- **a)** $10$
- **b)** $\sqrt{10}$
- **c)** $1$
- **d)** $\sqrt[3]{10}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{6}-\dfrac{5}{6}=0$.

</details>

### `vl-vse-1089` — Vlastní úloha ve stylu přijímaček VŠE (č. 1089)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{3}\cdot\sqrt{3^{3}}}{\sqrt[6]{3^{5}}}$ je rovno číslu:

- **a)** $9$
- **b)** $\dfrac{1}{3}$
- **c)** $3$
- **d)** $3 \sqrt{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $3$. Exponenty: $\dfrac{1}{3}+\dfrac{3}{2}-\dfrac{5}{6}=1$.

</details>

### `vl-vse-1104` — Vlastní úloha ve stylu přijímaček VŠE (č. 1104)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2}\cdot\sqrt[6]{2}}{\sqrt{2}}$ je rovno číslu:

- **a)** $2$
- **b)** $\sqrt{2}$
- **c)** $\sqrt[3]{2}$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{6}-\dfrac{1}{2}=0$.

</details>

### `vl-vse-1109` — Vlastní úloha ve stylu přijímaček VŠE (č. 1109)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{3^{2}}\cdot\sqrt{3}}{\sqrt[3]{3^{2}}}$ je rovno číslu:

- **a)** $\sqrt{3}$
- **b)** $3^{\dfrac{5}{6}}$
- **c)** $3$
- **d)** $\dfrac{\sqrt{3}}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\sqrt{3}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{2}{3}=\dfrac{1}{2}$.

</details>

### `vl-vse-1113` — Vlastní úloha ve stylu přijímaček VŠE (č. 1113)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{5}\cdot\sqrt[6]{5}}{\sqrt[6]{5^{5}}}$ je rovno číslu:

- **a)** $\sqrt[6]{5}$
- **b)** $\dfrac{5^{\dfrac{2}{3}}}{5}$
- **c)** $\sqrt[3]{5}$
- **d)** $\dfrac{\sqrt[3]{5}}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{5^{\dfrac{2}{3}}}{5}$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{6}-\dfrac{5}{6}=- \dfrac{1}{3}$.

</details>

### `vl-vse-1116` — Vlastní úloha ve stylu přijímaček VŠE (č. 1116)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{2}\cdot\sqrt[6]{2}}{\sqrt[6]{2^{5}}}$ je rovno číslu:

- **a)** $\dfrac{2^{\dfrac{2}{3}}}{2}$
- **b)** $\sqrt[3]{2}$
- **c)** $\dfrac{\sqrt[3]{2}}{2}$
- **d)** $\sqrt[6]{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{2^{\dfrac{2}{3}}}{2}$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{6}-\dfrac{5}{6}=- \dfrac{1}{3}$.

</details>

### `vl-vse-1174` — Vlastní úloha ve stylu přijímaček VŠE (č. 1174)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{6^{2}}\cdot\sqrt{6}}{\sqrt[3]{6^{2}}}$ je rovno číslu:

- **a)** $\sqrt{6}$
- **b)** $6^{\dfrac{5}{6}}$
- **c)** $\dfrac{\sqrt{6}}{6}$
- **d)** $6$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\sqrt{6}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{2}{3}=\dfrac{1}{2}$.

</details>

### `vl-vse-1185` — Vlastní úloha ve stylu přijímaček VŠE (č. 1185)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{5^{2}}\cdot\sqrt{5}}{\sqrt[3]{5^{2}}}$ je rovno číslu:

- **a)** $5$
- **b)** $5^{\dfrac{5}{6}}$
- **c)** $\sqrt{5}$
- **d)** $\dfrac{\sqrt{5}}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt{5}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{2}{3}=\dfrac{1}{2}$.

</details>

### `vl-vse-1201` — Vlastní úloha ve stylu přijímaček VŠE (č. 1201)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[4]{5^{3}}\cdot\sqrt[6]{5}}{\sqrt[4]{5}}$ je rovno číslu:

- **a)** $5 \sqrt[6]{5}$
- **b)** $5$
- **c)** $5 \sqrt[3]{5}$
- **d)** $\dfrac{\sqrt[3]{5}}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Exponenty: $\dfrac{3}{4}+\dfrac{1}{6}-\dfrac{1}{4}=\dfrac{2}{3}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1204` — Vlastní úloha ve stylu přijímaček VŠE (č. 1204)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{7}\cdot\sqrt[6]{7}}{\sqrt[6]{7^{5}}}$ je rovno číslu:

- **a)** $\dfrac{7^{\dfrac{2}{3}}}{7}$
- **b)** $\dfrac{\sqrt[3]{7}}{7}$
- **c)** $\sqrt[3]{7}$
- **d)** $\sqrt[6]{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{7^{\dfrac{2}{3}}}{7}$. Exponenty: $\dfrac{1}{3}+\dfrac{1}{6}-\dfrac{5}{6}=- \dfrac{1}{3}$.

</details>

### `vl-vse-1221` — Vlastní úloha ve stylu přijímaček VŠE (č. 1221)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\dfrac{\sqrt[3]{3^{2}}\cdot\sqrt{3}}{\sqrt[6]{3^{5}}}$ je rovno číslu:

- **a)** $3^{\dfrac{5}{6}}$
- **b)** $3^{\dfrac{2}{3}}$
- **c)** $\sqrt[3]{3}$
- **d)** $\dfrac{3^{\dfrac{2}{3}}}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt[3]{3}$. Exponenty: $\dfrac{2}{3}+\dfrac{1}{2}-\dfrac{5}{6}=\dfrac{1}{3}$.

</details>

### `vse-a-10` — [VŠE, vzor přijímacích zkoušek A (úloha 10)](https://www.vse.cz/wp-content/uploads/page/2128/test-A.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 3, úloha 13

Petr se učil na přijímací zkoušky. Aby ho otec motivoval, domluvili si následující pravidla: V testu, který obsahuje 20 úloh, dostane Petr 50 Kč za každou správně vyřešenou úlohu a za každou špatně vyřešenou úlohu vrátí 150 Kč. Po kontrole řešení testu dostal Petr 200 Kč. Procento úloh, které Petr správně vyřešil, je v intervalu

- **a)** $(91;100)$
- **b)** $(70;81)$
- **c)** $(81;86)$
- **d)** $(86;91)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $80\,\%$. $50k-150(20-k)=200\Rightarrow k=16$, tj. $80\,\%$.

</details>

### `vse-b-11` — [VŠE, vzor přijímacích zkoušek B (úloha 11)](https://vse.cz/wp-content/uploads/page/2128/test-B.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE DÚ 3, D8 (pool přijímaček)

Průměrný věk všech dětí z turistického oddílu je 10 let. Vezmeme-li všechny členy oddílu včetně jejich čtyřiapadesátiletého vedoucího, průměrný věk se zvýší o dva roky. Počet dětí, které chodí do turistického oddílu patří do intervalu

- **a)** $(0;7)$
- **b)** $\langle7;14)$
- **c)** $\langle14;21)$
- **d)** $\langle21;28)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**d** — $21$. $\frac{10n+54}{n+1}=12\Rightarrow n=21$.

</details>

### `vl-nsz-008` — [Vlastní úloha ve stylu NSZ Matematika (č. 8)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na dvou policích jsou knihy, na větší 96. Petra přesunula čtvrtinu knih z větší police na menší a potom ještě šestinu knih, které na větší polici zůstaly. Pak bylo na obou policích stejně knih. Kolik knih bylo původně na menší polici?

- **a)** $18$
- **b)** $24$
- **c)** $30$
- **d)** $36$

<details><summary>Ответ и решение</summary>

**b** — $24$. Na větší zůstane $96-24-12=60$. Menší měla $60-24-12=24$.

</details>

### `vl-nsz-013` — [Vlastní úloha ve stylu NSZ Matematika (č. 13)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Krabička čaje obsahuje $C$ sáčků, krabička kávy $K$ kapslí. Platí $\dfrac{6C+K}{K}=3$. Které tvrzení z toho vyplývá?

- **a)** Krabička kávy obsahuje třikrát více kusů než krabička čaje.
- **b)** Šest krabiček čaje obsahuje stejně kusů jako jedna krabička kávy.
- **c)** Krabička čaje obsahuje třikrát více kusů než krabička kávy.
- **d)** Dvě krabičky kávy obsahují stejně kusů jako tři krabičky čaje.

<details><summary>Ответ и решение</summary>

**a** — Krabička kávy obsahuje třikrát více kusů než krabička čaje.. $6C+K=3K$, tedy $6C=2K$, $K=3C$.

</details>

### `vl-obec-013` — Vlastní úloha ve stylu přijímacích testů (č. 13)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ze vztahu $1-\dfrac3x=\dfrac b{cx}$ ($x\ne0$, $c\ne0$) vyjádřete $x$.

<details><summary>Ответ и решение</summary>

$x=3+\dfrac bc$. Vynásobíme $cx$: $cx-3c=b$.

</details>

### `vl-nsz-035` — [Vlastní úloha ve stylu NSZ Matematika (č. 35)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro řešení soustavy $3x+y=5$, $2y-x=17$ platí:

- **a)** $x<y$
- **b)** $x=y$
- **c)** $x>y$
- **d)** $y<0$

<details><summary>Ответ и решение</summary>

**a** — $x<y$. $y=5-3x$, $10-6x-x=17$, $x=-1$, $y=8$.

</details>

### `vl-nsz-058` — [Vlastní úloha ve stylu NSZ Matematika (č. 58)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Písmena označují ceny ovoce v korunách: $J$ — jablko, $H$ — hruška, $B$ — banán. Platí $J+B=3H$ a $2J=H$. Které tvrzení z toho vyplývá?

- **a)** Banán je pětkrát dražší než jablko.
- **b)** Banán stojí stejně jako dvě hrušky.
- **c)** Hruška je dražší než banán.
- **d)** Jablko a banán stojí stejně.

<details><summary>Ответ и решение</summary>

**a** — Banán je pětkrát dražší než jablko.. $H=2J$, tedy $B=3H-J=6J-J=5J$.

</details>

### `vl-obec-103` — Vlastní úloha ve stylu přijímacích testů (č. 103)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Z Plzně vyjel v 7:00 nákladní vůz rychlostí 50 km/h. V 7:45 za ním ze stejného místa vyjel osobní vůz rychlostí 80 km/h. V kolik hodin ho dohoní?

<details><summary>Ответ и решение</summary>

v 9:00. Náskok $37{,}5$ km, rozdíl rychlostí $30$ km/h: $1{,}25$ h po 7:45.

</details>

### `vl-obec-106` — Vlastní úloha ve stylu přijímacích testů (č. 106)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kořeny rovnice $x^2-x-12=0$ jsou $x_1$, $x_2$. Hodnota $x_1^2+x_2^2$ je:

- **a)** $1$
- **b)** $13$
- **c)** $24$
- **d)** $25$
- **e)** $145$

<details><summary>Ответ и решение</summary>

**d** — $25$. $(x_1+x_2)^2-2x_1x_2=1+24$.

</details>

### `vl-nsz-108` — [Vlastní úloha ve stylu NSZ Matematika (č. 108)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Cyklista ujel za tři dny 155 km. Druhý den ujel o 20 % více než první den a třetí den o 15 km méně než druhý den. Kolik kilometrů ujel postupně v jednotlivých dnech?

- **a)** 50, 55, 50
- **b)** 50, 60, 45
- **c)** 45, 60, 50
- **d)** 55, 66, 34

<details><summary>Ответ и решение</summary>

**b** — 50, 60, 45. $x+1{,}2x+(1{,}2x-15)=155$, $3{,}4x=170$, $x=50$.

</details>

### `vl-nsz-119` — [Vlastní úloha ve stylu NSZ Matematika (č. 119)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Taxi A účtuje 18 Kč za kilometr a k tomu nástupní poplatek 60 Kč. Taxi B účtuje 22 Kč za kilometr bez nástupního poplatku. Při jaké délce jízdy zaplatíme u obou stejně?

- **a)** $3$ km
- **b)** $12$ km
- **c)** $15$ km
- **d)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $15$ km. $18x+60=22x$, $x=15$.

</details>

### `vl-nsz-122` — [Vlastní úloha ve stylu NSZ Matematika (č. 122)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Malá tiskárna vytiskne za minutu $M$ stran, velká $V$ stran. Platí $6M+2V=64$ a $3M+5V=112$. Které tvrzení z toho vyplývá?

- **a)** Velká tiskárna tiskne pětkrát rychleji než malá.
- **b)** Velká tiskárna tiskne rychleji než šest malých dohromady.
- **c)** Velká tiskárna vytiskne za 10 minut více než 250 stran.
- **d)** Velká a tři malé tiskárny vytisknou za minutu 30 stran.

<details><summary>Ответ и решение</summary>

**a** — Velká tiskárna tiskne pětkrát rychleji než malá.. Odečtením dvojnásobku druhé rovnice od první: $-8V=-160$, $V=20$, $M=4$.

</details>

### `vl-nsz-131` — [Vlastní úloha ve stylu NSZ Matematika (č. 131)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením soustavy $y+2z=7$, $3y+5z=19$, $x-y+z=4$ je trojice $[x;y;z]$. Kolik je $x+y+z$?

- **a)** $8$
- **b)** $9$
- **c)** $10$
- **d)** $12$

<details><summary>Ответ и решение</summary>

**c** — $10$. Z prvních dvou rovnic $z=2$, $y=3$, ze třetí $x=5$.

</details>

### `vl-nsz-150` — [Vlastní úloha ve stylu NSZ Matematika (č. 150)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Proměnná $x$ může nabývat hodnot $-4,-3,-1,0,1,2,4$. Pro kolik z nich má výraz $x^3-2x^2-9x+18$ hodnotu 0?

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $3$

<details><summary>Ответ и решение</summary>

**c** — $2$. $x^2(x-2)-9(x-2)=(x-2)(x-3)(x+3)$; ze seznamu vyhovují $-3$ a $2$.

</details>

### `vl-nsz-163` — [Vlastní úloha ve stylu NSZ Matematika (č. 163)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ve středu prodala pekárna 1,6krát více rohlíků než v úterý. Za oba dny dohromady prodala 1 040 rohlíků. Kolik rohlíků prodala v úterý?

- **a)** $400$
- **b)** $416$
- **c)** $650$
- **d)** Nelze jednoznačně určit.

<details><summary>Ответ и решение</summary>

**a** — $400$. $x+1{,}6x=2{,}6x=1040$, $x=400$.

</details>

### `vl-nsz-167` — [Vlastní úloha ve stylu NSZ Matematika (č. 167)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Krabice váží $K$ kg, balík $B$ kg a paleta $P$ kg. Balík váží třetinu krabice. Dvě palety váží stejně jako pět krabic a tři balíky dohromady. Která rovnice vyjadřuje $K$?

- **a)** $K=\dfrac P3$
- **b)** $K=\dfrac{2P}5$
- **c)** $K=3P$
- **d)** $K=\dfrac P6$

<details><summary>Ответ и решение</summary>

**a** — $K=\dfrac P3$. $2P=5K+3\cdot\frac K3=6K$.

</details>

### `vl-nsz-175` — [Vlastní úloha ve stylu NSZ Matematika (č. 175)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetický průměr tří různých čísel $a$, $b$, $c$ je 30. Průměr $a$ a $b$ je 40, průměr $b$ a $c$ je 22. Čemu se rovná $a-2c$?

- **a)** $16$
- **b)** $26$
- **c)** $34$
- **d)** $36$

<details><summary>Ответ и решение</summary>

**b** — $26$. $a+b+c=90$, $a+b=80$, tedy $c=10$; $b=34$, $a=46$; $46-20=26$.

</details>

### `vl-nsz-186` — [Vlastní úloha ve stylu NSZ Matematika (č. 186)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Tomáš dostává měsíčně kapesné $K$ Kč a chce si koupit kolo za $C$ Kč. Platí $10\cdot\dfrac K4=C+2\,000$. Které tvrzení z toho vyplývá?

- **a)** Když si bude 10 měsíců odkládat čtvrtinu kapesného, našetří o 2 000 Kč víc, než stojí kolo.
- **b)** Když si bude 10 měsíců odkládat čtvrtinu kapesného, na kolo nenašetří.
- **c)** Kdyby bylo kapesné o 2 000 Kč nižší, našetřil by na kolo přesně za 10 měsíců.
- **d)** Kdyby si odkládal 2 000 Kč měsíčně, našetřil by na kolo za 4 měsíce.

<details><summary>Ответ и решение</summary>

**a** — Když si bude 10 měsíců odkládat čtvrtinu kapesného, našetří o 2 000 Kč víc, než stojí kolo.. Levá strana je částka uspořená za 10 měsíců po čtvrtině kapesného.

</details>

### `vl-nsz-187` — [Vlastní úloha ve stylu NSZ Matematika (č. 187)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Petr, Ondra a Radek sbírají poštovní známky. Ondra jich má 12krát více než Petr a Radek má o 140 známek méně než Ondra. Petr a Radek mají dohromady 1 030 známek. Kolik známek má Petr?

- **a)** $78$
- **b)** $90$
- **c)** $102$
- **d)** $1\,080$

<details><summary>Ответ и решение</summary>

**b** — $90$. Petr $p$, Ondra $12p$, Radek $12p-140$: $p+12p-140=1030$, $p=90$.

</details>

### `vl-nsz-207` — [Vlastní úloha ve stylu NSZ Matematika (č. 207)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V nádrži je 1 800 l vody a každý den z ní odteče 45 l. Za kolik dní v ní zbude 450 l?

- **a)** $10$
- **b)** $30$
- **c)** $40$
- **d)** $45$

<details><summary>Ответ и решение</summary>

**b** — $30$. $1350:45=30$.

</details>

### `vl-nsz-212` — [Vlastní úloha ve stylu NSZ Matematika (č. 212)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro nenulová čísla $x$, $y$ platí $9x^2+6xy+y^2=0$. Jaká je hodnota $\dfrac yx$?

- **a)** $-3$
- **b)** $3$
- **c)** $\dfrac13$
- **d)** $-\dfrac13$

<details><summary>Ответ и решение</summary>

**a** — $-3$. $(3x+y)^2=0$, tedy $y=-3x$.

</details>

### `vl-nsz-080` — [Vlastní úloha ve stylu NSZ Matematika (č. 80)](https://www.scio.cz/matematika)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik kořenů má rovnice $|x^2-4|=3$?

- **a)** $1$
- **b)** $2$
- **c)** $3$
- **d)** $4$

<details><summary>Ответ и решение</summary>

**d** — $4$. $x^2=7$ nebo $x^2=1$: $\pm\sqrt7$, $\pm1$.

</details>

### `vl-vse-0112` — Vlastní úloha ve stylu přijímaček VŠE (č. 112)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $|x-6|=4$ (využijte geometrický význam absolutní hodnoty).

<details><summary>Ответ и решение</summary>

$x\in\{2;10\}$. Body ve vzdálenosti 4 od čísla 6.

</details>

### `vl-nsz-121` — [Vlastní úloha ve stylu NSZ Matematika (č. 121)](https://www.scio.cz/matematika)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro reálné číslo $a$ platí $|a-3|=3-a$. Číslem $a$ může být:

- **a)** jakékoli reálné číslo
- **b)** jakékoli číslo $a\le3$
- **c)** jakékoli číslo $a\ge3$
- **d)** jen $a=3$

<details><summary>Ответ и решение</summary>

**b** — jakékoli číslo $a\le3$. $|u|=-u$ právě pro $u\le0$, tedy $a-3\le0$.

</details>

### `vl-nsz-124` — [Vlastní úloha ve stylu NSZ Matematika (č. 124)](https://www.scio.cz/matematika)

*Темы:* 5. Rovnice s absolutní hodnotou, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná čísla $a$, $b$, $c$ mají absolutní hodnotu menší než 5. Která z možností může platit?

- **a)** $a-b>10$
- **b)** $2c=11$
- **c)** $a+b+c=-14$
- **d)** $b^2>25$

<details><summary>Ответ и решение</summary>

**c** — $a+b+c=-14$. Např. $a=b=c=-4{,}9$ dává $-14{,}7$, proto $-14$ dosáhnout lze. $a-b<10$, $c=5{,}5$ ani $|b|>5$ nejdou.

</details>

### `vse-vzor-02` — [VŠE, vzorový test z matematiky – FMV (příklad 2, 60 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fmv.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу)

Množina všech reálných čísel, pro která platí $\dfrac{x-1}{x-3}<1$, je rovna množině

*Встречается также:* VŠE, vzorový test z matematiky – FFÚ a FPH (příklad 2, 6 bodů); VŠE, vzorový test z matematiky – FIS (příklad 2, 5 bodů)

- **a)** $(3,+\infty)$
- **b)** $(-\infty,3)$
- **c)** $(1,3)$
- **d)** $(-3,-1)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $(-\infty,3)$. $\dfrac{x-1}{x-3}-1=\dfrac{2}{x-3}<0\iff x<3$.

</details>

### `vse-b-05` — [VŠE, vzor přijímacích zkoušek B (úloha 5)](https://vse.cz/wp-content/uploads/page/2128/test-B.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE DÚ 7, D1 (pool přijímaček)

Množinou všech řešení nerovnice $(x+3)^2<9x+19$ s neznámou $x\in R$ je

- **a)** $(-2;5)$
- **b)** $(-1;10)$
- **c)** $(-\infty;-2)\cup(5;\infty)$
- **d)** $(-\infty;-1)\cup(10;\infty)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**a** — $(-2;5)$. $x^2-3x-10<0\iff(x-5)(x+2)<0$.

</details>

### `vl-obec-033` — Vlastní úloha ve stylu přijímacích testů (č. 33)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik řešení má nerovnice $(x+3)(3x-11)\le0$ v množině celých kladných čísel?

<details><summary>Ответ и решение</summary>

$3$ (čísla 1, 2, 3). $x\in\left\langle-3;\frac{11}3\right\rangle$.

</details>

### `vl-obec-080` — Vlastní úloha ve stylu přijímacích testů (č. 80)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením nerovnice $\dfrac{3x-2}{x+2}<2$ je:

- **a)** $x\in(-2;6)$
- **b)** $x\in(6;\infty)$
- **c)** $x\in(-\infty;-2)\cup(6;\infty)$
- **d)** $x\in\langle-2;6)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**a** — $x\in(-2;6)$. $\frac{3x-2-2x-4}{x+2}=\frac{x-6}{x+2}<0$.

</details>

### `vl-nsz-092` — [Vlastní úloha ve stylu NSZ Matematika (č. 92)](https://www.scio.cz/matematika)

*Темы:* 6. Nerovnice. Soustava nerovnic, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Interval $\langle-1;5\rangle$ je množinou všech řešení nerovnice $x^2-4x+c\le0$, jestliže $c$ je rovno:

- **a)** $-5$
- **b)** $-4$
- **c)** $4$
- **d)** $5$

<details><summary>Ответ и решение</summary>

**a** — $-5$. $(x+1)(x-5)=x^2-4x-5$.

</details>

### `vl-obec-105` — Vlastní úloha ve stylu přijímacích testů (č. 105)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množinou všech řešení nerovnice $x^2\le4x$ je:

- **a)** $\langle0;4\rangle$
- **b)** $(-\infty;4\rangle$
- **c)** $(0;4)$
- **d)** $\langle4;\infty)$
- **e)** $(-\infty;0\rangle\cup\langle4;\infty)$

<details><summary>Ответ и решение</summary>

**a** — $\langle0;4\rangle$. $x(x-4)\le0$.

</details>

### `vl-nsz-110` — [Vlastní úloha ve stylu NSZ Matematika (č. 110)](https://www.scio.cz/matematika)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množinou všech řešení nerovnice $\dfrac{3x-1}{x-3}<2$ je:

- **a)** $(-5,3)$
- **b)** $(-\infty,-5)\cup(3,\infty)$
- **c)** $(3,\infty)$
- **d)** $(-\infty,3)$

<details><summary>Ответ и решение</summary>

**a** — $(-5,3)$. $\frac{3x-1-2(x-3)}{x-3}=\frac{x+5}{x-3}<0$.

</details>

### `vl-nsz-134` — [Vlastní úloha ve stylu NSZ Matematika (č. 134)](https://www.scio.cz/matematika)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaké řešení má v $\mathbb R$ nerovnice $\dfrac{2x-1}{x-2}\le\dfrac{2x+3}{x-2}$?

- **a)** $x>2$
- **b)** $x<2$
- **c)** $x\ge2$
- **d)** Nerovnice nemá řešení.

<details><summary>Ответ и решение</summary>

**a** — $x>2$. Převedením na jednu stranu: $\frac{-4}{x-2}\le0$, tedy $x-2>0$.

</details>

### `vl-nsz-141` — [Vlastní úloha ve stylu NSZ Matematika (č. 141)](https://www.scio.cz/matematika)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množinou všech řešení nerovnice $\dfrac{x+4}{1-x}\ge0$ je:

- **a)** $\langle-4;1)$
- **b)** $(-4;1\rangle$
- **c)** $(-\infty;-4\rangle\cup(1;\infty)$
- **d)** $\langle-4;1\rangle$

<details><summary>Ответ и решение</summary>

**a** — $\langle-4;1)$. Nulové body $-4$ (patří) a $1$ (vyloučen); mezi nimi je podíl kladný.

</details>

### `vse-fis-06` — [VŠE, vzorový test z matematiky – FIS (příklad 6, 5 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fis.pdf)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* текст оригинала (по курсу)

Množina všech reálných čísel, pro která platí $|x+3|\le2$, je rovna množině

- **a)** $(-5,-1)$
- **b)** $(1,5)$
- **c)** $\langle-5,-1\rangle$
- **d)** $\langle1,5\rangle$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**c** — $\langle-5,-1\rangle$. $-2\le x+3\le2\iff-5\le x\le-1$.

</details>

### `vl-obec-021` — Vlastní úloha ve stylu přijímacích testů (č. 21)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x+2|>2$, je:

- **a)** $(-4;0)$
- **b)** $\langle -4;0\rangle$
- **c)** $(-\infty;-4\rangle\cup\langle 0;\infty)$
- **d)** $(0;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Vzdálenost čísla $x$ od $(-2)$ je větší než 2. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-obec-058` — Vlastní úloha ve stylu přijímacích testů (č. 58)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením nerovnice $|x+1|\ge4$ je:

- **a)** $x\in(-\infty;-5\rangle\cup\langle3;\infty)$
- **b)** $x\in\langle-5;3\rangle$
- **c)** $x\in(-\infty;3\rangle$
- **d)** $x\in\langle3;\infty)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**a** — $x\in(-\infty;-5\rangle\cup\langle3;\infty)$. $x+1\ge4$ nebo $x+1\le-4$.

</details>

### `vl-vse-0103` — Vlastní úloha ve stylu přijímaček VŠE (č. 103)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x-1|>3$, je:

- **a)** $(-\infty;-2\rangle\cup\langle 4;\infty)$
- **b)** $(-\infty;-2)\cup(4;\infty)$
- **c)** $\langle -2;4\rangle$
- **d)** $(-2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;-2)\cup(4;\infty)$. Vzdálenost čísla $x$ od $(1)$ je větší než 3.

</details>

### `vl-vse-0118` — Vlastní úloha ve stylu přijímaček VŠE (č. 118)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x-2|<3$, je:

- **a)** $(-\infty;-1)\cup(5;\infty)$
- **b)** $(-1;5)$
- **c)** $(-\infty;-1\rangle\cup\langle 5;\infty)$
- **d)** $\langle -1;5\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-1;5)$. Vzdálenost čísla $x$ od $(2)$ je menší než 3.

</details>

### `vl-vse-0123` — Vlastní úloha ve stylu přijímaček VŠE (č. 123)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x+4|\ge5$, je:

- **a)** $(-\infty;-9\rangle\cup\langle 1;\infty)$
- **b)** $(-\infty;-9)\cup(1;\infty)$
- **c)** $(-9;1)$
- **d)** $\langle -9;1\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;-9\rangle\cup\langle 1;\infty)$. Vzdálenost čísla $x$ od $(-4)$ je větší než 5.

</details>

### `vl-vse-0187` — Vlastní úloha ve stylu přijímaček VŠE (č. 187)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x|<3$, je:

- **a)** $(-\infty;-3)\cup(3;\infty)$
- **b)** $(-\infty;-3\rangle\cup\langle 3;\infty)$
- **c)** $(-3;3)$
- **d)** $\langle -3;3\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-3;3)$. Vzdálenost čísla $x$ od $(0)$ je menší než 3.

</details>

### `vl-vse-0205` — Vlastní úloha ve stylu přijímaček VŠE (č. 205)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x-1|\ge2$, je:

- **a)** $(-1;3)$
- **b)** $(-\infty;-1\rangle\cup\langle 3;\infty)$
- **c)** $(-\infty;-1)\cup(3;\infty)$
- **d)** $\langle -1;3\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;-1\rangle\cup\langle 3;\infty)$. Vzdálenost čísla $x$ od $(1)$ je větší než 2.

</details>

### `vl-vse-0233` — Vlastní úloha ve stylu přijímaček VŠE (č. 233)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x-4|>3$, je:

- **a)** $\langle 1;7\rangle$
- **b)** $(-\infty;1)\cup(7;\infty)$
- **c)** $(1;7)$
- **d)** $(-\infty;1\rangle\cup\langle 7;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;1)\cup(7;\infty)$. Vzdálenost čísla $x$ od $(4)$ je větší než 3.

</details>

### `vl-vse-0271` — Vlastní úloha ve stylu přijímaček VŠE (č. 271)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x+3|\le5$, je:

- **a)** $(-\infty;-8\rangle\cup\langle 2;\infty)$
- **b)** $(-\infty;-8)\cup(2;\infty)$
- **c)** $(-8;2)$
- **d)** $\langle -8;2\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle -8;2\rangle$. Vzdálenost čísla $x$ od $(-3)$ je menší než 5.

</details>

### `vl-vse-0346` — Vlastní úloha ve stylu přijímaček VŠE (č. 346)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x+2|\le2$, je:

- **a)** $(-4;0)$
- **b)** $\langle -4;0\rangle$
- **c)** $(-\infty;-4)\cup(0;\infty)$
- **d)** $(-\infty;-4\rangle\cup\langle 0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle -4;0\rangle$. Vzdálenost čísla $x$ od $(-2)$ je menší než 2.

</details>

### `vl-vse-0372` — Vlastní úloha ve stylu přijímaček VŠE (č. 372)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x+3|<3$, je:

- **a)** $(-\infty;-6)\cup(0;\infty)$
- **b)** $(-\infty;-6\rangle\cup\langle 0;\infty)$
- **c)** $(-6;0)$
- **d)** $\langle -6;0\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-6;0)$. Vzdálenost čísla $x$ od $(-3)$ je menší než 3.

</details>

### `vl-vse-0449` — Vlastní úloha ve stylu přijímaček VŠE (č. 449)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x-1|\le2$, je:

- **a)** $\langle -1;3\rangle$
- **b)** $(-1;3)$
- **c)** $(-\infty;-1\rangle\cup\langle 3;\infty)$
- **d)** $(-\infty;-1)\cup(3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle -1;3\rangle$. Vzdálenost čísla $x$ od $(1)$ je menší než 2.

</details>

### `vl-vse-0586` — Vlastní úloha ve stylu přijímaček VŠE (č. 586)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x+4|\le2$, je:

- **a)** $(-\infty;-6\rangle\cup\langle -2;\infty)$
- **b)** $(-\infty;-6)\cup(-2;\infty)$
- **c)** $\langle -6;-2\rangle$
- **d)** $(-6;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle -6;-2\rangle$. Vzdálenost čísla $x$ od $(-4)$ je menší než 2.

</details>

### `vl-vse-0597` — Vlastní úloha ve stylu přijímaček VŠE (č. 597)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x|\ge3$, je:

- **a)** $(-\infty;-3\rangle\cup\langle 3;\infty)$
- **b)** $(-3;3)$
- **c)** $\langle -3;3\rangle$
- **d)** $(-\infty;-3)\cup(3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;-3\rangle\cup\langle 3;\infty)$. Vzdálenost čísla $x$ od $(0)$ je větší než 3.

</details>

### `vl-vse-0785` — Vlastní úloha ve stylu přijímaček VŠE (č. 785)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x-3|<4$, je:

- **a)** $(-\infty;-1\rangle\cup\langle 7;\infty)$
- **b)** $(-1;7)$
- **c)** $\langle -1;7\rangle$
- **d)** $(-\infty;-1)\cup(7;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-1;7)$. Vzdálenost čísla $x$ od $(3)$ je menší než 4.

</details>

### `vl-vse-0873` — Vlastní úloha ve stylu přijímaček VŠE (č. 873)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x-4|\le3$, je:

- **a)** $(1;7)$
- **b)** $(-\infty;1)\cup(7;\infty)$
- **c)** $(-\infty;1\rangle\cup\langle 7;\infty)$
- **d)** $\langle 1;7\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 1;7\rangle$. Vzdálenost čísla $x$ od $(4)$ je menší než 3.

</details>

### `vl-vse-1050` — Vlastní úloha ve stylu přijímaček VŠE (č. 1050)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x-1|<4$, je:

- **a)** $\langle -3;5\rangle$
- **b)** $(-\infty;-3)\cup(5;\infty)$
- **c)** $(-\infty;-3\rangle\cup\langle 5;\infty)$
- **d)** $(-3;5)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-3;5)$. Vzdálenost čísla $x$ od $(1)$ je menší než 4.

</details>

### `vl-vse-1075` — Vlastní úloha ve stylu přijímaček VŠE (č. 1075)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x+3|>5$, je:

- **a)** $\langle -8;2\rangle$
- **b)** $(-\infty;-8\rangle\cup\langle 2;\infty)$
- **c)** $(-8;2)$
- **d)** $(-\infty;-8)\cup(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;-8)\cup(2;\infty)$. Vzdálenost čísla $x$ od $(-3)$ je větší než 5.

</details>

### `vl-vse-1077` — Vlastní úloha ve stylu přijímaček VŠE (č. 1077)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x|\le3$, je:

- **a)** $(-\infty;-3)\cup(3;\infty)$
- **b)** $(-3;3)$
- **c)** $\langle -3;3\rangle$
- **d)** $(-\infty;-3\rangle\cup\langle 3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle -3;3\rangle$. Vzdálenost čísla $x$ od $(0)$ je menší než 3.

</details>

### `vl-vse-1220` — Vlastní úloha ve stylu přijímaček VŠE (č. 1220)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x-2|<2$, je:

- **a)** $(-\infty;0)\cup(4;\infty)$
- **b)** $\langle 0;4\rangle$
- **c)** $(-4;0)$
- **d)** $(-\infty;0\rangle\cup\langle 4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Vzdálenost čísla $x$ od $(2)$ je menší než 2. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1227` — Vlastní úloha ve stylu přijímaček VŠE (č. 1227)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $|x+1|<2$, je:

- **a)** $\langle -3;1\rangle$
- **b)** $(-3;1)$
- **c)** $(-\infty;-3)\cup(1;\infty)$
- **d)** $(-\infty;-3\rangle\cup\langle 1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-3;1)$. Vzdálenost čísla $x$ od $(-1)$ je menší než 2.

</details>

### `vse-b-03` — [VŠE, vzor přijímacích zkoušek B (úloha 3)](https://vse.cz/wp-content/uploads/page/2128/test-B.pdf)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 14. Goniometrické funkce · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 9, úloha 9

Která z těchto funkcí je na svém definičním oboru lichá a omezená?

- **a)** $f(x)=x^3$
- **b)** $f(x)=\operatorname{tg}x$
- **c)** $f(x)=\sin x$
- **d)** $f(x)=\dfrac1x$
- **e)** žádná z uvedených

<details><summary>Ответ и решение</summary>

**c** — $f(x)=\sin x$. Všechny čtyři jsou liché, omezená je jen $\sin x\in\langle-1;1\rangle$.

</details>

### `vl-obec-008` — Vlastní úloha ve stylu přijímacích testů (č. 8)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obor hodnot funkce $y=-x^2+4x$ je:

- **a)** $(-\infty;4\rangle$
- **b)** $\langle4;\infty)$
- **c)** $\mathbb R$
- **d)** $(-\infty;2\rangle$
- **e)** $\langle0;4\rangle$

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;4\rangle$. $y=-(x-2)^2+4$.

</details>

### `vl-vse-0009` — Vlastní úloha ve stylu přijímaček VŠE (č. 9)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{x^2-5x}$ je:

- **a)** $(-\infty;0)\cup(5;\infty)$
- **b)** $(-\infty;0\rangle\cup\langle 5;\infty)$
- **c)** $\langle 0;5\rangle$
- **d)** $\langle 5;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;0\rangle\cup\langle 5;\infty)$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-nsz-016` — [Vlastní úloha ve stylu NSZ Matematika (č. 16)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kladná veličina $X$ závisí jen na kladné veličině $Y$ vztahem $X=\dfrac K{\sqrt Y}$, kde $K$ je kladná konstanta. Který výraz má pak konstantní hodnotu?

- **a)** $X\cdot Y$
- **b)** $X^2\cdot Y$
- **c)** $\dfrac X{Y^2}$
- **d)** $X\cdot Y^2$

<details><summary>Ответ и решение</summary>

**b** — $X^2\cdot Y$. $X^2=\frac{K^2}Y$, tedy $X^2Y=K^2$.

</details>

### `vl-nsz-040` — [Vlastní úloha ve stylu NSZ Matematika (č. 40)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je dána funkce $f(x)=-7x+12$. O kolik se (v absolutní hodnotě) liší $f(1\,000)$ a $f(1\,004)$?

- **a)** o $4$
- **b)** o $7$
- **c)** o $12$
- **d)** o $28$

<details><summary>Ответ и решение</summary>

**d** — o $28$. Změna argumentu o 4 mění hodnotu o $4\cdot7$.

</details>

### `vl-nsz-043` — [Vlastní úloha ve stylu NSZ Matematika (č. 43)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f:\ y=2x^2-8x+3$ má:

- **a)** minimum v bodě $[2;-5]$
- **b)** maximum v bodě $[2;-5]$
- **c)** minimum v bodě $[-2;27]$
- **d)** maximum v bodě $[2;3]$

<details><summary>Ответ и решение</summary>

**a** — minimum v bodě $[2;-5]$. $y=2(x-2)^2-5$, $a>0$.

</details>

### `vl-nsz-075` — [Vlastní úloha ve stylu NSZ Matematika (č. 75)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce jsou dány předpisy $f(x)=3x-4$ a $g(x)=x^2-1$. Jakou hodnotu má $g(y)$, jestliže $f(y)=11$?

- **a)** $11$
- **b)** $16$
- **c)** $24$
- **d)** $25$

<details><summary>Ответ и решение</summary>

**c** — $24$. $3y-4=11$, $y=5$, $g(5)=24$.

</details>

### `vl-nsz-077` — [Vlastní úloha ve stylu NSZ Matematika (č. 77)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jsou dány funkce $f(x)=\dfrac{x^2-1}{x-1}$ a $g(x)=x+1$. Které tvrzení je pravdivé?

- **a)** Grafy obou funkcí jsou totožné.
- **b)** V bodě $x=1$ je definována $f$, ale ne $g$.
- **c)** $D_f\subset D_g$ a $D_f\ne D_g$.
- **d)** $f$ je lineární funkce definovaná na celém $\mathbb R$.

<details><summary>Ответ и решение</summary>

**c** — $D_f\subset D_g$ a $D_f\ne D_g$.. Pro $x\ne1$ se $f(x)=x+1$, ale $f$ není v bodě 1 definována: $D_f=\mathbb R\setminus\{1\}$.

</details>

### `vl-obec-077` — Vlastní úloha ve stylu přijímacích testů (č. 77)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Graf funkce $y=\dfrac{2}{x-1}+3$ má střed souměrnosti v bodě:

- **a)** $[1;3]$
- **b)** $[-1;3]$
- **c)** $[3;1]$
- **d)** $[1;-3]$
- **e)** $[2;3]$

<details><summary>Ответ и решение</summary>

**a** — $[1;3]$. Průsečík asymptot $x=1$, $y=3$.

</details>

### `vl-obec-094` — Vlastní úloha ve stylu přijímacích testů (č. 94)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{16-x^2}$ je množina:

- **a)** $\langle-4;0)\cup(0;4\rangle$
- **b)** $(-\infty;4\rangle$
- **c)** $\langle-4;4\rangle$
- **d)** $(-4;4)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**c** — $\langle-4;4\rangle$. $16-x^2\ge0\iff|x|\le4$.

</details>

### `vl-nsz-102` — [Vlastní úloha ve stylu NSZ Matematika (č. 102)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Která z funkcí není definována alespoň pro jedno $x$ z intervalu $(0;1)$?

- **a)** $f(x)=\ln(3x-1)$
- **b)** $f(x)=\sqrt{x^2+1}$
- **c)** $f(x)=\dfrac1{x-2}$
- **d)** $f(x)=\sqrt{4-x^2}$

<details><summary>Ответ и решение</summary>

**a** — $f(x)=\ln(3x-1)$. Pro $x\le\frac13$ je $3x-1\le0$ a logaritmus není definován.

</details>

### `vl-nsz-125` — [Vlastní úloha ve stylu NSZ Matematika (č. 125)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolo s původní cenou $x$ Kč bylo zlevněno o 25 % a pak ještě o 500 Kč. Výsledná cena je $y$ Kč. Který vztah platí?

- **a)** $y=0{,}75x-500$
- **b)** $y=0{,}25x-500$
- **c)** $y=0{,}75(x-500)$
- **d)** $y=\dfrac{x-500}{0{,}75}$

<details><summary>Ответ и решение</summary>

**a** — $y=0{,}75x-500$. Po slevě 25 % zbývá $0{,}75x$, potom odečteme $500$.

</details>

### `vl-nsz-138` — [Vlastní úloha ve stylu NSZ Matematika (č. 138)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaké jsou rovnice asymptot grafu funkce $y=\dfrac{3x+2}{x-4}$?

- **a)** $x=4,\ y=3$
- **b)** $x=-4,\ y=3$
- **c)** $x=3,\ y=4$
- **d)** $x=4,\ y=-\frac12$

<details><summary>Ответ и решение</summary>

**a** — $x=4,\ y=3$. Svislá asymptota v nulovém bodě jmenovatele $x=4$, vodorovná $y=\frac31=3$.

</details>

### `vl-nsz-179` — [Vlastní úloha ve stylu NSZ Matematika (č. 179)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výrok: „Funkce $f:\ y=x^2+2x$ je prostá a lichá.“ Které tvrzení o tomto výroku platí?

- **a)** Výrok je pravdivý.
- **b)** Výrok není pravdivý: funkce je prostá, ale není lichá.
- **c)** Výrok není pravdivý: funkce je lichá, ale není prostá.
- **d)** Výrok není pravdivý: funkce není prostá ani lichá.

<details><summary>Ответ и решение</summary>

**d** — Výrok není pravdivý: funkce není prostá ani lichá.. $f(0)=f(-2)=0$, takže není prostá; $f(1)=3$, $f(-1)=-1\ne-3$, takže není lichá.

</details>

### `vl-nsz-193` — [Vlastní úloha ve stylu NSZ Matematika (č. 193)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f$ má právě dva nulové body a platí $f(0)=-3$ a $f(1)=0$. Jejím předpisem může být:

- **a)** $y=x^2+2x-3$
- **b)** $y=3x-3$
- **c)** $y=|2x+1|-3$
- **d)** $y=x^2-3$

<details><summary>Ответ и решение</summary>

**a** — $y=x^2+2x-3$. $x^2+2x-3=(x-1)(x+3)$. U b) je jen jeden nulový bod, u c) $f(0)=-2$, u d) $f(1)=-2$.

</details>

### `vl-nsz-199` — [Vlastní úloha ve stylu NSZ Matematika (č. 199)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f:\ y=\sqrt{x^2+2x-8}$ je:

- **a)** $(-\infty,-4\rangle\cup\langle2,\infty)$
- **b)** $\langle-4,2\rangle$
- **c)** $(-\infty,-2\rangle\cup\langle4,\infty)$
- **d)** $(-\infty,-4)\cup(2,\infty)$

<details><summary>Ответ и решение</summary>

**a** — $(-\infty,-4\rangle\cup\langle2,\infty)$. $(x+4)(x-2)\ge0$.

</details>

### `vl-vse-0223` — Vlastní úloha ve stylu přijímaček VŠE (č. 223)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{5x-x^2}$ je:

- **a)** $(-\infty;0\rangle\cup\langle 5;\infty)$
- **b)** $(0;5)$
- **c)** $\langle -5;0\rangle$
- **d)** $\langle 0;5\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 0;5\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0322` — Vlastní úloha ve stylu přijímaček VŠE (č. 322)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{9x-x^2}$ je:

- **a)** $(-\infty;0\rangle\cup\langle 9;\infty)$
- **b)** $(0;9)$
- **c)** $\mathbb R$
- **d)** $\langle -9;0\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Výraz pod odmocninou musí být nezáporný. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0358` — Vlastní úloha ve stylu přijímaček VŠE (č. 358)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{6x-x^2}$ je:

- **a)** $(0;6)$
- **b)** $(-\infty;0\rangle\cup\langle 6;\infty)$
- **c)** $\langle -6;0\rangle$
- **d)** $\langle 0;6\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 0;6\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0359` — Vlastní úloha ve stylu přijímaček VŠE (č. 359)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{49-x^2}$ je:

- **a)** $\langle -7;7\rangle$
- **b)** $(-\infty;-7\rangle\cup\langle 7;\infty)$
- **c)** $\langle 0;7\rangle$
- **d)** $(-7;7)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle -7;7\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0366` — Vlastní úloha ve stylu přijímaček VŠE (č. 366)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{x^2-8x}$ je:

- **a)** $\langle 8;\infty)$
- **b)** $(-\infty;0)\cup(8;\infty)$
- **c)** $\mathbb R$
- **d)** $\langle 0;8\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Výraz pod odmocninou musí být nezáporný. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0406` — Vlastní úloha ve stylu přijímaček VŠE (č. 406)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{x^2-3x}$ je:

- **a)** $\langle 0;3\rangle$
- **b)** $\langle 3;\infty)$
- **c)** $(-\infty;0)\cup(3;\infty)$
- **d)** $(-\infty;0\rangle\cup\langle 3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;0\rangle\cup\langle 3;\infty)$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0507` — Vlastní úloha ve stylu přijímaček VŠE (č. 507)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{x^2-2x}$ je:

- **a)** $\langle 0;2\rangle$
- **b)** $(-\infty;0)\cup(2;\infty)$
- **c)** $(-\infty;0\rangle\cup\langle 2;\infty)$
- **d)** $\langle 2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;0\rangle\cup\langle 2;\infty)$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0516` — Vlastní úloha ve stylu přijímaček VŠE (č. 516)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{2x-x^2}$ je:

- **a)** $\langle 0;2\rangle$
- **b)** $\langle -2;0\rangle$
- **c)** $(-\infty;0\rangle\cup\langle 2;\infty)$
- **d)** $(0;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 0;2\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0637` — Vlastní úloha ve stylu přijímaček VŠE (č. 637)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{9-x^2}$ je:

- **a)** $\langle 0;3\rangle$
- **b)** $(-\infty;-3\rangle\cup\langle 3;\infty)$
- **c)** $(-3;3)$
- **d)** $\langle -3;3\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle -3;3\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0711` — Vlastní úloha ve stylu přijímaček VŠE (č. 711)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{16-x^2}$ je:

- **a)** $\langle 0;4\rangle$
- **b)** $(-4;4)$
- **c)** $\langle -4;4\rangle$
- **d)** $(-\infty;-4\rangle\cup\langle 4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle -4;4\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0772` — Vlastní úloha ve stylu přijímaček VŠE (č. 772)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{36-x^2}$ je:

- **a)** $(-6;6)$
- **b)** $(-\infty;-6\rangle\cup\langle 6;\infty)$
- **c)** $\langle -6;6\rangle$
- **d)** $\langle 0;6\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle -6;6\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0814` — Vlastní úloha ve stylu přijímaček VŠE (č. 814)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{8x-x^2}$ je:

- **a)** $(0;8)$
- **b)** $\langle 0;8\rangle$
- **c)** $(-\infty;0\rangle\cup\langle 8;\infty)$
- **d)** $\langle -8;0\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 0;8\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0947` — Vlastní úloha ve stylu přijímaček VŠE (č. 947)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{x^2-9x}$ je:

- **a)** $(-\infty;0\rangle\cup\langle 9;\infty)$
- **b)** $(-\infty;0)\cup(9;\infty)$
- **c)** $\langle 0;9\rangle$
- **d)** $\langle 9;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;0\rangle\cup\langle 9;\infty)$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0984` — Vlastní úloha ve stylu přijímaček VŠE (č. 984)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{x^2-6x}$ je:

- **a)** $\langle 6;\infty)$
- **b)** $(-\infty;0\rangle\cup\langle 6;\infty)$
- **c)** $\langle 0;6\rangle$
- **d)** $(-\infty;0)\cup(6;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;0\rangle\cup\langle 6;\infty)$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-1005` — Vlastní úloha ve stylu přijímaček VŠE (č. 1005)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{25-x^2}$ je:

- **a)** $\langle 0;5\rangle$
- **b)** $\langle -5;5\rangle$
- **c)** $(-\infty;-5\rangle\cup\langle 5;\infty)$
- **d)** $(-5;5)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle -5;5\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-1031` — Vlastní úloha ve stylu přijímaček VŠE (č. 1031)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{81-x^2}$ je:

- **a)** $\langle 0;9\rangle$
- **b)** $(-\infty;-9\rangle\cup\langle 9;\infty)$
- **c)** $\langle -9;9\rangle$
- **d)** $(-9;9)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle -9;9\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-1056` — Vlastní úloha ve stylu přijímaček VŠE (č. 1056)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{4x-x^2}$ je:

- **a)** $(0;4)$
- **b)** $\langle 0;4\rangle$
- **c)** $\langle -4;0\rangle$
- **d)** $(-\infty;0\rangle\cup\langle 4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 0;4\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-1162` — Vlastní úloha ve stylu přijímaček VŠE (č. 1162)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{x^2-4x}$ je:

- **a)** $(-\infty;0)\cup(4;\infty)$
- **b)** $\langle 0;4\rangle$
- **c)** $(-\infty;0\rangle\cup\langle 4;\infty)$
- **d)** $\langle 4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;0\rangle\cup\langle 4;\infty)$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vse-a-03` — [VŠE, vzor přijímacích zkoušek A (úloha 3)](https://www.vse.cz/wp-content/uploads/page/2128/test-A.pdf)

*Темы:* 10. Exponenciální funkce, 12. Logaritmická funkce, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 10, úloha 9

Která z těchto funkcí je na celém definičním oboru rostoucí, prostá a má H(f) = R?

- **a)** $f(x)=3^x$
- **b)** $f(x)=\ln x$
- **c)** $f(x)=\sin x$
- **d)** $f(x)=\dfrac1x$
- **e)** žádná z uvedených

<details><summary>Ответ и решение</summary>

**b** — $f(x)=\ln x$. $3^x$ má $H=(0;\infty)$, $\sin x$ a $\frac1x$ nejsou rostoucí; $\ln x$ je rostoucí a $H=\mathbb{R}$.

</details>

### `vl-nsz-133` — [Vlastní úloha ve stylu NSZ Matematika (č. 133)](https://www.scio.cz/matematika)

*Темы:* 10. Exponenciální funkce, 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Inverzní funkce k funkci $y=2^x+1$ je:

- **a)** $y=\log_2(x-1)$
- **b)** $y=\log_2x-1$
- **c)** $y=\log_2(x+1)$
- **d)** $y=1-\log_2x$

<details><summary>Ответ и решение</summary>

**a** — $y=\log_2(x-1)$. $x=2^y+1$, tedy $2^y=x-1$.

</details>

### `vse-fis-08` — [VŠE, vzorový test z matematiky – FIS (příklad 8, 5 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fis.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Všechna řešení rovnice $3^{x+2}-4\cdot3^x=45$ jsou v intervalu

- **a)** $(0,1)$
- **b)** $(1,2\rangle$
- **c)** $(2,3\rangle$
- **d)** $(3,4)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $(1,2\rangle$. $9\cdot3^x-4\cdot3^x=5\cdot3^x=45$, tedy $3^x=9$ a $x=2$.

</details>

### `vse-vzor-05` — [VŠE, vzorový test z matematiky – FMV (příklad 5, 60 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fmv.pdf)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* текст оригинала (по курсу)

Množina všech reálných čísel, pro která platí $\left(\dfrac23\right)^x>-\dfrac32$, je rovna množině

*Встречается также:* VŠE, vzorový test z matematiky – FFÚ a FPH (příklad 5, 6 bodů); VŠE, vzorový test z matematiky – FIS (příklad 5, 5 bodů)

- **a)** $(-\infty,+\infty)$
- **b)** $(-\infty,-1)$
- **c)** $\emptyset$
- **d)** $(-1,+\infty)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**a** — $(-\infty,+\infty)$. Exponenciála je vždy kladná, tedy větší než $-\frac32$ pro každé $x$.

</details>

### `vl-vse-0001` — Vlastní úloha ve stylu přijímaček VŠE (č. 1)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{5}\right)^{x}>\left(\dfrac{5}{2}\right)^{-2}$, je:

- **a)** $(-2;\infty)$
- **b)** $(2;\infty)$
- **c)** $(-\infty;2)$
- **d)** $(-\infty;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;2)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0031` — Vlastní úloha ve stylu přijímaček VŠE (č. 31)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{4}{7}\right)^{x}<\left(\dfrac{7}{4}\right)^{-2}$, je:

- **a)** $(-\infty;2)$
- **b)** $(2;\infty)$
- **c)** $(-2;\infty)$
- **d)** $(-\infty;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(2;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0038` — Vlastní úloha ve stylu přijímaček VŠE (č. 38)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{5}\right)^{x}<-\dfrac{5}{2}$, je:

- **a)** $(-1;\infty)$
- **b)** $(1;\infty)$
- **c)** $(-\infty;-1)$
- **d)** $\mathbb R$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Exponenciální funkce nabývá jen kladných hodnot. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0039` — Vlastní úloha ve stylu přijímaček VŠE (č. 39)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{4}{7}\right)^{x}>-\dfrac{7}{4}$, je:

- **a)** $(-\infty;-1)$
- **b)** $\mathbb R$
- **c)** $\emptyset$
- **d)** $(-1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\mathbb R$. Exponenciální funkce nabývá jen kladných hodnot.

</details>

### `vl-vse-0058` — Vlastní úloha ve stylu přijímaček VŠE (č. 58)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{5}\right)^{x}>-\dfrac{5}{3}$, je:

- **a)** $(-\infty;-1)$
- **b)** $\emptyset$
- **c)** $\mathbb R$
- **d)** $(-1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\mathbb R$. Exponenciální funkce nabývá jen kladných hodnot.

</details>

### `vl-vse-0073` — Vlastní úloha ve stylu přijímaček VŠE (č. 73)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{3}\right)^{x}<-\dfrac{3}{2}$, je:

- **a)** $\mathbb R$
- **b)** $(-\infty;-1)$
- **c)** $\emptyset$
- **d)** $(-1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\emptyset$. Exponenciální funkce nabývá jen kladných hodnot.

</details>

### `vl-vse-0085` — Vlastní úloha ve stylu přijímaček VŠE (č. 85)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{5}\right)^{x+2}=5^{-2}$ leží v intervalu:

- **a)** $\langle 2;4)$
- **b)** $\langle -2;0)$
- **c)** $\langle 0;2)$
- **d)** $\langle -4;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 0;2)$. $\left(\frac1{5}\right)^{t}=5^{-t}$, tedy $-(x--2)=-2$, $x=0$.

</details>

### `vl-nsz-094` — [Vlastní úloha ve stylu NSZ Matematika (č. 94)](https://www.scio.cz/matematika)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\left(\frac13\right)^x$ má trojnásobnou hodnotu oproti výrazu $\left(\frac19\right)^x$. Které tvrzení o $x$ je pravdivé?

- **a)** $x$ je záporné
- **b)** $x$ je celé číslo
- **c)** $x>1$
- **d)** $x$ je iracionální

<details><summary>Ответ и решение</summary>

**b** — $x$ je celé číslo. $3^{-x}=3\cdot3^{-2x}$, tedy $-x=1-2x$, $x=1$.

</details>

### `vl-obec-107` — Vlastní úloha ve stylu přijímacích testů (č. 107)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{5}{9}\right)^{x}>\left(\dfrac{9}{5}\right)^{3}$, je:

- **a)** $(-\infty;-3)$
- **b)** $(-3;\infty)$
- **c)** $(-\infty;3)$
- **d)** $(3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;-3)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0119` — Vlastní úloha ve stylu přijímaček VŠE (č. 119)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{2}\right)^{x+3}=2^{-1}$ leží v intervalu:

- **a)** $\langle -3;-1)$
- **b)** $\langle -7;-5)$
- **c)** $\langle -1;1)$
- **d)** $\langle -5;-3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle -3;-1)$. $\left(\frac1{2}\right)^{t}=2^{-t}$, tedy $-(x--3)=-1$, $x=-2$.

</details>

### `vl-vse-0132` — Vlastní úloha ve stylu přijímaček VŠE (č. 132)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{3}\right)^{x-1}=3^{-2}$ leží v intervalu:

- **a)** $\langle 1;3)$
- **b)** $\langle 5;7)$
- **c)** $\langle 3;5)$
- **d)** $\langle -1;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 3;5)$. $\left(\frac1{3}\right)^{t}=3^{-t}$, tedy $-(x-1)=-2$, $x=3$.

</details>

### `vl-vse-0160` — Vlastní úloha ve stylu přijímaček VŠE (č. 160)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{5}\right)^{x}<\left(\dfrac{5}{3}\right)^{-2}$, je:

- **a)** $(-\infty;-2)$
- **b)** $(-2;\infty)$
- **c)** $(-\infty;2)$
- **d)** $(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(2;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0165` — Vlastní úloha ve stylu přijímaček VŠE (č. 165)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $3^{x+1}+3^x=\dfrac{4}{3}$ leží v intervalu:

- **a)** $\langle -2;0)$
- **b)** $\langle 0;2)$
- **c)** $\langle 2;4)$
- **d)** $\langle -4;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle -2;0)$. $3^x(3^1+1)=\dfrac{4}{3}$, tedy $3^x=\dfrac{1}{3}$ a $x=-1$.

</details>

### `vl-vse-0166` — Vlastní úloha ve stylu přijímaček VŠE (č. 166)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{3}\right)^{x}<\left(\dfrac{3}{2}\right)^{2}$, je:

- **a)** $(-2;\infty)$
- **b)** $(-\infty;-2)$
- **c)** $(-\infty;2)$
- **d)** $(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-2;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0189` — Vlastní úloha ve stylu přijímaček VŠE (č. 189)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{4}\right)^{x}<-\dfrac{4}{3}$, je:

- **a)** $(-1;\infty)$
- **b)** $\emptyset$
- **c)** $\mathbb R$
- **d)** $(-\infty;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\emptyset$. Exponenciální funkce nabývá jen kladných hodnot.

</details>

### `vl-vse-0199` — Vlastní úloha ve stylu přijímaček VŠE (č. 199)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{2}\right)^{x-1}=2^{2}$ leží v intervalu:

- **a)** $\langle 1;3)$
- **b)** $\langle -5;-3)$
- **c)** $\langle -3;-1)$
- **d)** $\langle -1;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle -1;1)$. $\left(\frac1{2}\right)^{t}=2^{-t}$, tedy $-(x-1)=2$, $x=-1$.

</details>

### `vl-vse-0224` — Vlastní úloha ve stylu přijímaček VŠE (č. 224)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{5}\right)^{x+2}=5^{3}$ leží v intervalu:

- **a)** $\langle -4;-2)$
- **b)** $\langle -6;-4)$
- **c)** $\langle -8;-6)$
- **d)** $\langle -10;-8)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle -6;-4)$. $\left(\frac1{5}\right)^{t}=5^{-t}$, tedy $-(x--2)=3$, $x=-5$.

</details>

### `vl-vse-0235` — Vlastní úloha ve stylu přijímaček VŠE (č. 235)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $5^{x+2}+5^x=26$ leží v intervalu:

- **a)** $\langle 4;6)$
- **b)** $\langle 2;4)$
- **c)** $\langle -4;-2)$
- **d)** $\langle -2;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $5^x(5^2+1)=26$, tedy $5^x=1$ a $x=0$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0238` — Vlastní úloha ve stylu přijímaček VŠE (č. 238)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{3}\right)^{x}<\left(\dfrac{3}{2}\right)^{3}$, je:

- **a)** $(-\infty;-3)$
- **b)** $(-3;\infty)$
- **c)** $(3;\infty)$
- **d)** $(-\infty;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-3;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0242` — Vlastní úloha ve stylu přijímaček VŠE (č. 242)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{4}\right)^{x}>\left(\dfrac{4}{3}\right)^{3}$, je:

- **a)** $(-\infty;-3)$
- **b)** $(3;\infty)$
- **c)** $(-3;\infty)$
- **d)** $(-\infty;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;-3)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0292` — Vlastní úloha ve stylu přijímaček VŠE (č. 292)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{4}\right)^{x}<\left(\dfrac{4}{3}\right)^{-2}$, je:

- **a)** $(-\infty;2)$
- **b)** $(-2;\infty)$
- **c)** $(2;\infty)$
- **d)** $(-\infty;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(2;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0294` — Vlastní úloha ve stylu přijímaček VŠE (č. 294)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{5}\right)^{x-3}=5^{2}$ leží v intervalu:

- **a)** $\langle 1;3)$
- **b)** $\langle 3;5)$
- **c)** $\langle -3;-1)$
- **d)** $\langle -1;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 1;3)$. $\left(\frac1{5}\right)^{t}=5^{-t}$, tedy $-(x-3)=2$, $x=1$.

</details>

### `vl-vse-0313` — Vlastní úloha ve stylu přijímaček VŠE (č. 313)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{5}\right)^{x}<\left(\dfrac{5}{2}\right)^{-2}$, je:

- **a)** $(-\infty;2)$
- **b)** $(2;\infty)$
- **c)** $(-2;\infty)$
- **d)** $(-\infty;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(2;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0315` — Vlastní úloha ve stylu přijímaček VŠE (č. 315)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{4}\right)^{x}>-\dfrac{4}{3}$, je:

- **a)** $(-\infty;-1)$
- **b)** $\mathbb R$
- **c)** $(-1;\infty)$
- **d)** $\emptyset$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\mathbb R$. Exponenciální funkce nabývá jen kladných hodnot.

</details>

### `vl-vse-0320` — Vlastní úloha ve stylu přijímaček VŠE (č. 320)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{4}\right)^{x}<\left(\dfrac{4}{3}\right)^{2}$, je:

- **a)** $(-\infty;2)$
- **b)** $(-\infty;-2)$
- **c)** $(2;\infty)$
- **d)** $(-2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-2;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0335` — Vlastní úloha ve stylu přijímaček VŠE (č. 335)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{4}\right)^{x}=4^{-2}$ leží v intervalu:

- **a)** $\langle 1;3)$
- **b)** $\langle -3;-1)$
- **c)** $\langle -1;1)$
- **d)** $\langle 3;5)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 1;3)$. $\left(\frac1{4}\right)^{t}=4^{-t}$, tedy $-(x-0)=-2$, $x=2$.

</details>

### `vl-vse-0345` — Vlastní úloha ve stylu přijímaček VŠE (č. 345)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{5}\right)^{x}<\left(\dfrac{5}{3}\right)^{3}$, je:

- **a)** $(3;\infty)$
- **b)** $(-\infty;3)$
- **c)** $(-\infty;-3)$
- **d)** $(-3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-3;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0382` — Vlastní úloha ve stylu přijímaček VŠE (č. 382)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{5}{9}\right)^{x}<-\dfrac{9}{5}$, je:

- **a)** $\mathbb R$
- **b)** $\emptyset$
- **c)** $(-1;\infty)$
- **d)** $(-\infty;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\emptyset$. Exponenciální funkce nabývá jen kladných hodnot.

</details>

### `vl-vse-0393` — Vlastní úloha ve stylu přijímaček VŠE (č. 393)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $2^{x+1}+2^x=6$ leží v intervalu:

- **a)** $\langle 2;4)$
- **b)** $\langle -2;0)$
- **c)** $\langle -4;-2)$
- **d)** $\langle 0;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 0;2)$. $2^x(2^1+1)=6$, tedy $2^x=2$ a $x=1$.

</details>

### `vl-vse-0401` — Vlastní úloha ve stylu přijímaček VŠE (č. 401)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{5}{9}\right)^{x}>\left(\dfrac{9}{5}\right)^{2}$, je:

- **a)** $(-\infty;2)$
- **b)** $(-2;\infty)$
- **c)** $(2;\infty)$
- **d)** $(-\infty;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;-2)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0412` — Vlastní úloha ve stylu přijímaček VŠE (č. 412)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{3}\right)^{x}>\left(\dfrac{3}{2}\right)^{2}$, je:

- **a)** $(-\infty;-2)$
- **b)** $(-\infty;2)$
- **c)** $(2;\infty)$
- **d)** $(-2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;-2)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0426` — Vlastní úloha ve stylu přijímaček VŠE (č. 426)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $2^{x+2}+2^x=\dfrac{5}{2}$ leží v intervalu:

- **a)** $\langle -4;-2)$
- **b)** $\langle 2;4)$
- **c)** $\langle -2;0)$
- **d)** $\langle 0;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle -2;0)$. $2^x(2^2+1)=\dfrac{5}{2}$, tedy $2^x=\dfrac{1}{2}$ a $x=-1$.

</details>

### `vl-vse-0453` — Vlastní úloha ve stylu přijímaček VŠE (č. 453)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{5}\right)^{x}<-\dfrac{5}{3}$, je:

- **a)** $\mathbb R$
- **b)** $\emptyset$
- **c)** $(-1;\infty)$
- **d)** $(-\infty;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\emptyset$. Exponenciální funkce nabývá jen kladných hodnot.

</details>

### `vl-vse-0467` — Vlastní úloha ve stylu přijímaček VŠE (č. 467)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{4}\right)^{x-3}=4^{3}$ leží v intervalu:

- **a)** $\langle 0;2)$
- **b)** $\langle -2;0)$
- **c)** $\langle -4;-2)$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 0;2)$. $\left(\frac1{4}\right)^{t}=4^{-t}$, tedy $-(x-3)=3$, $x=0$.

</details>

### `vl-vse-0475` — Vlastní úloha ve stylu přijímaček VŠE (č. 475)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{5}{9}\right)^{x}>\left(\dfrac{9}{5}\right)^{-2}$, je:

- **a)** $(-2;\infty)$
- **b)** $(-\infty;2)$
- **c)** $(-\infty;-2)$
- **d)** $(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;2)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0478` — Vlastní úloha ve stylu přijímaček VŠE (č. 478)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $2^{x+1}+2^x=3$ leží v intervalu:

- **a)** $\langle 2;4)$
- **b)** $\langle 0;2)$
- **c)** $\langle -2;0)$
- **d)** $\langle -4;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 0;2)$. $2^x(2^1+1)=3$, tedy $2^x=1$ a $x=0$.

</details>

### `vl-vse-0499` — Vlastní úloha ve stylu přijímaček VŠE (č. 499)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $5^{x+2}+5^x=650$ leží v intervalu:

- **a)** $\langle -2;0)$
- **b)** $\langle -4;-2)$
- **c)** $\langle 4;6)$
- **d)** $\langle 0;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $5^x(5^2+1)=650$, tedy $5^x=25$ a $x=2$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0505` — Vlastní úloha ve stylu přijímaček VŠE (č. 505)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{5}\right)^{x}>\left(\dfrac{5}{2}\right)^{-1}$, je:

- **a)** $(-1;\infty)$
- **b)** $(-\infty;-1)$
- **c)** $(1;\infty)$
- **d)** $(-\infty;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;1)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0519` — Vlastní úloha ve stylu přijímaček VŠE (č. 519)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{3}\right)^{x}<\left(\dfrac{3}{2}\right)^{-1}$, je:

- **a)** $(-\infty;1)$
- **b)** $(-1;\infty)$
- **c)** $(-\infty;-1)$
- **d)** $(1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(1;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0523` — Vlastní úloha ve stylu přijímaček VŠE (č. 523)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $5^{x+1}+5^x=750$ leží v intervalu:

- **a)** $\langle -4;-2)$
- **b)** $\langle -2;0)$
- **c)** $\langle 0;2)$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 2;4)$. $5^x(5^1+1)=750$, tedy $5^x=125$ a $x=3$.

</details>

### `vl-vse-0526` — Vlastní úloha ve stylu přijímaček VŠE (č. 526)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{4}{7}\right)^{x}>\left(\dfrac{7}{4}\right)^{2}$, je:

- **a)** $(-\infty;2)$
- **b)** $(2;\infty)$
- **c)** $(-\infty;-2)$
- **d)** $(-2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;-2)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0527` — Vlastní úloha ve stylu přijímaček VŠE (č. 527)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $3^{2x-1}=\dfrac1{27}$.

<details><summary>Ответ и решение</summary>

$x=-1$. $2x-1=-3$.

</details>

### `vl-vse-0540` — Vlastní úloha ve stylu přijímaček VŠE (č. 540)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{2}\right)^{x-3}=2^{1}$ leží v intervalu:

- **a)** $\langle -1;1)$
- **b)** $\langle 1;3)$
- **c)** $\langle 3;5)$
- **d)** $\langle -3;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 1;3)$. $\left(\frac1{2}\right)^{t}=2^{-t}$, tedy $-(x-3)=1$, $x=2$.

</details>

### `vl-vse-0576` — Vlastní úloha ve stylu přijímaček VŠE (č. 576)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{5}{9}\right)^{x}<\left(\dfrac{9}{5}\right)^{2}$, je:

- **a)** $(-2;\infty)$
- **b)** $(-\infty;-2)$
- **c)** $(2;\infty)$
- **d)** $(-\infty;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-2;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0580` — Vlastní úloha ve stylu přijímaček VŠE (č. 580)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{5}\right)^{x}>\left(\dfrac{5}{3}\right)^{-2}$, je:

- **a)** $(-2;\infty)$
- **b)** $(-\infty;-2)$
- **c)** $(-\infty;2)$
- **d)** $(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;2)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0587` — Vlastní úloha ve stylu přijímaček VŠE (č. 587)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{4}{7}\right)^{x}<-\dfrac{7}{4}$, je:

- **a)** $\mathbb R$
- **b)** $(-1;\infty)$
- **c)** $(-\infty;-1)$
- **d)** $\emptyset$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\emptyset$. Exponenciální funkce nabývá jen kladných hodnot.

</details>

### `vl-vse-0588` — Vlastní úloha ve stylu přijímaček VŠE (č. 588)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{4}{7}\right)^{x}>\left(\dfrac{7}{4}\right)^{-2}$, je:

- **a)** $(-\infty;2)$
- **b)** $(-2;\infty)$
- **c)** $(2;\infty)$
- **d)** $(-\infty;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;2)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0593` — Vlastní úloha ve stylu přijímaček VŠE (č. 593)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{5}\right)^{x}>\left(\dfrac{5}{3}\right)^{-1}$, je:

- **a)** $(1;\infty)$
- **b)** $(-1;\infty)$
- **c)** $(-\infty;-1)$
- **d)** $(-\infty;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;1)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0618` — Vlastní úloha ve stylu přijímaček VŠE (č. 618)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{5}\right)^{x}>\left(\dfrac{5}{3}\right)^{3}$, je:

- **a)** $(3;\infty)$
- **b)** $(-\infty;3)$
- **c)** $(-\infty;-3)$
- **d)** $(-3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;-3)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0638` — Vlastní úloha ve stylu přijímaček VŠE (č. 638)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{3}\right)^{x}>\left(\dfrac{3}{2}\right)^{-1}$, je:

- **a)** $(-1;\infty)$
- **b)** $(1;\infty)$
- **c)** $(-\infty;1)$
- **d)** $(-\infty;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;1)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0643` — Vlastní úloha ve stylu přijímaček VŠE (č. 643)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{3}\right)^{x+2}=3^{2}$ leží v intervalu:

- **a)** $\langle -7;-5)$
- **b)** $\langle -9;-7)$
- **c)** $\langle -3;-1)$
- **d)** $\langle -5;-3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle -5;-3)$. $\left(\frac1{3}\right)^{t}=3^{-t}$, tedy $-(x--2)=2$, $x=-4$.

</details>

### `vl-vse-0647` — Vlastní úloha ve stylu přijímaček VŠE (č. 647)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{3}\right)^{x}>\left(\dfrac{3}{2}\right)^{-2}$, je:

- **a)** $(-\infty;2)$
- **b)** $(-\infty;-2)$
- **c)** $(2;\infty)$
- **d)** $(-2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;2)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0649` — Vlastní úloha ve stylu přijímaček VŠE (č. 649)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $2^{x+2}+2^x=40$ leží v intervalu:

- **a)** $\langle -4;-2)$
- **b)** $\langle 4;6)$
- **c)** $\langle -2;0)$
- **d)** $\langle 0;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $2^x(2^2+1)=40$, tedy $2^x=8$ a $x=3$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0655` — Vlastní úloha ve stylu přijímaček VŠE (č. 655)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{4}\right)^{x}>\left(\dfrac{4}{3}\right)^{2}$, je:

- **a)** $\mathbb R$
- **b)** $(2;\infty)$
- **c)** $(-2;\infty)$
- **d)** $(-\infty;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0696` — Vlastní úloha ve stylu přijímaček VŠE (č. 696)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{4}{7}\right)^{x}<\left(\dfrac{7}{4}\right)^{2}$, je:

- **a)** $(-2;\infty)$
- **b)** $(2;\infty)$
- **c)** $(-\infty;-2)$
- **d)** $(-\infty;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-2;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0702` — Vlastní úloha ve stylu přijímaček VŠE (č. 702)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{5}{9}\right)^{x}<\left(\dfrac{9}{5}\right)^{-1}$, je:

- **a)** $(-1;\infty)$
- **b)** $(-\infty;1)$
- **c)** $(-\infty;-1)$
- **d)** $(1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(1;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0707` — Vlastní úloha ve stylu přijímaček VŠE (č. 707)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{5}\right)^{x+3}=5^{2}$ leží v intervalu:

- **a)** $\langle -6;-4)$
- **b)** $\langle -8;-6)$
- **c)** $\langle -10;-8)$
- **d)** $\langle -4;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle -6;-4)$. $\left(\frac1{5}\right)^{t}=5^{-t}$, tedy $-(x--3)=2$, $x=-5$.

</details>

### `vl-vse-0712` — Vlastní úloha ve stylu přijímaček VŠE (č. 712)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $5^{x+1}+5^x=30$ leží v intervalu:

- **a)** $\langle 2;4)$
- **b)** $\langle -4;-2)$
- **c)** $\langle 0;2)$
- **d)** $\langle -2;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 0;2)$. $5^x(5^1+1)=30$, tedy $5^x=5$ a $x=1$.

</details>

### `vl-vse-0729` — Vlastní úloha ve stylu přijímaček VŠE (č. 729)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{5}\right)^{x}>\left(\dfrac{5}{3}\right)^{2}$, je:

- **a)** $(-\infty;-2)$
- **b)** $(2;\infty)$
- **c)** $(-\infty;2)$
- **d)** $(-2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;-2)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0738` — Vlastní úloha ve stylu přijímaček VŠE (č. 738)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $3^{x+1}-2\cdot3^x-27=0$ náleží intervalu:

- **a)** $\langle-2;0)$
- **b)** $\langle0;2)$
- **c)** $\langle2;4)$
- **d)** $\langle4;6)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle2;4)$. $3^x(3-2)=27$, $x=3$.

</details>

### `vl-vse-0758` — Vlastní úloha ve stylu přijímaček VŠE (č. 758)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{4}\right)^{x+3}=4^{3}$ leží v intervalu:

- **a)** $\langle -7;-5)$
- **b)** $\langle -5;-3)$
- **c)** $\langle -11;-9)$
- **d)** $\langle -9;-7)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle -7;-5)$. $\left(\frac1{4}\right)^{t}=4^{-t}$, tedy $-(x--3)=3$, $x=-6$.

</details>

### `vl-vse-0770` — Vlastní úloha ve stylu přijímaček VŠE (č. 770)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{3}\right)^{x}<\left(\dfrac{3}{2}\right)^{-2}$, je:

- **a)** $(-2;\infty)$
- **b)** $(-\infty;-2)$
- **c)** $(-\infty;2)$
- **d)** $(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(2;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0774` — Vlastní úloha ve stylu přijímaček VŠE (č. 774)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{3}\right)^{x}>\left(\dfrac{3}{2}\right)^{3}$, je:

- **a)** $(3;\infty)$
- **b)** $(-3;\infty)$
- **c)** $(-\infty;-3)$
- **d)** $(-\infty;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;-3)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0813` — Vlastní úloha ve stylu přijímaček VŠE (č. 813)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{5}\right)^{x}<\left(\dfrac{5}{2}\right)^{-1}$, je:

- **a)** $(-\infty;1)$
- **b)** $(-\infty;-1)$
- **c)** $(-1;\infty)$
- **d)** $(1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(1;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0823` — Vlastní úloha ve stylu přijímaček VŠE (č. 823)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{5}{9}\right)^{x}<\left(\dfrac{9}{5}\right)^{3}$, je:

- **a)** $(-\infty;3)$
- **b)** $(-3;\infty)$
- **c)** $(-\infty;-3)$
- **d)** $(3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-3;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0838` — Vlastní úloha ve stylu přijímaček VŠE (č. 838)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $3^{x+1}+3^x=4$ leží v intervalu:

- **a)** $\langle -4;-2)$
- **b)** $\langle 2;4)$
- **c)** $\langle -2;0)$
- **d)** $\langle 4;6)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $3^x(3^1+1)=4$, tedy $3^x=1$ a $x=0$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0839` — Vlastní úloha ve stylu přijímaček VŠE (č. 839)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $5^{x+2}+5^x=130$ leží v intervalu:

- **a)** $\langle 2;4)$
- **b)** $\langle -2;0)$
- **c)** $\langle 0;2)$
- **d)** $\langle -4;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 0;2)$. $5^x(5^2+1)=130$, tedy $5^x=5$ a $x=1$.

</details>

### `vl-vse-0841` — Vlastní úloha ve stylu přijímaček VŠE (č. 841)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{4}\right)^{x-3}=4^{-2}$ leží v intervalu:

- **a)** $\langle 0;2)$
- **b)** $\langle 8;10)$
- **c)** $\langle 2;4)$
- **d)** $\langle 6;8)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $\left(\frac1{4}\right)^{t}=4^{-t}$, tedy $-(x-3)=-2$, $x=5$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0867` — Vlastní úloha ve stylu přijímaček VŠE (č. 867)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{5}\right)^{x}<\left(\dfrac{5}{3}\right)^{2}$, je:

- **a)** $(-\infty;-2)$
- **b)** $(2;\infty)$
- **c)** $(-\infty;2)$
- **d)** $(-2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-2;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0872` — Vlastní úloha ve stylu přijímaček VŠE (č. 872)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{4}\right)^{x}<\left(\dfrac{4}{3}\right)^{-1}$, je:

- **a)** $(-1;\infty)$
- **b)** $(1;\infty)$
- **c)** $(-\infty;-1)$
- **d)** $(-\infty;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(1;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0875` — Vlastní úloha ve stylu přijímaček VŠE (č. 875)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $3^{x+1}+3^x=12$ leží v intervalu:

- **a)** $\langle 2;4)$
- **b)** $\langle -4;-2)$
- **c)** $\langle -2;0)$
- **d)** $\langle 0;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 0;2)$. $3^x(3^1+1)=12$, tedy $3^x=3$ a $x=1$.

</details>

### `vl-vse-0895` — Vlastní úloha ve stylu přijímaček VŠE (č. 895)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{2}\right)^{x+3}=2^{3}$ leží v intervalu:

- **a)** $\langle -5;-3)$
- **b)** $\langle -11;-9)$
- **c)** $\langle -7;-5)$
- **d)** $\langle -9;-7)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle -7;-5)$. $\left(\frac1{2}\right)^{t}=2^{-t}$, tedy $-(x--3)=3$, $x=-6$.

</details>

### `vl-vse-0905` — Vlastní úloha ve stylu přijímaček VŠE (č. 905)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{5}\right)^{x-2}=5^{-2}$ leží v intervalu:

- **a)** $\langle 0;2)$
- **b)** $\langle 4;6)$
- **c)** $\langle 2;4)$
- **d)** $\langle 6;8)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 4;6)$. $\left(\frac1{5}\right)^{t}=5^{-t}$, tedy $-(x-2)=-2$, $x=4$.

</details>

### `vl-vse-0916` — Vlastní úloha ve stylu přijímaček VŠE (č. 916)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $2^{x+2}+2^x=10$ leží v intervalu:

- **a)** $\langle 0;2)$
- **b)** $\langle -2;0)$
- **c)** $\langle -4;-2)$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 0;2)$. $2^x(2^2+1)=10$, tedy $2^x=2$ a $x=1$.

</details>

### `vl-vse-0924` — Vlastní úloha ve stylu přijímaček VŠE (č. 924)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{4}{7}\right)^{x}<\left(\dfrac{7}{4}\right)^{-1}$, je:

- **a)** $(-1;\infty)$
- **b)** $(-\infty;1)$
- **c)** $(-\infty;-1)$
- **d)** $(1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(1;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0927` — Vlastní úloha ve stylu přijímaček VŠE (č. 927)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{4}\right)^{x}>\left(\dfrac{4}{3}\right)^{-1}$, je:

- **a)** $(-\infty;1)$
- **b)** $(-1;\infty)$
- **c)** $(-\infty;-1)$
- **d)** $(1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;1)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0945` — Vlastní úloha ve stylu přijímaček VŠE (č. 945)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $3^{x+2}+3^x=\dfrac{10}{3}$ leží v intervalu:

- **a)** $\langle 0;2)$
- **b)** $\langle 2;4)$
- **c)** $\langle 4;6)$
- **d)** $\langle -4;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $3^x(3^2+1)=\dfrac{10}{3}$, tedy $3^x=\dfrac{1}{3}$ a $x=-1$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0951` — Vlastní úloha ve stylu přijímaček VŠE (č. 951)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{5}\right)^{x}<\left(\dfrac{5}{3}\right)^{-1}$, je:

- **a)** $(-1;\infty)$
- **b)** $(-\infty;-1)$
- **c)** $(-\infty;1)$
- **d)** $(1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(1;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0964` — Vlastní úloha ve stylu přijímaček VŠE (č. 964)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{5}\right)^{x}>\left(\dfrac{5}{2}\right)^{3}$, je:

- **a)** $(3;\infty)$
- **b)** $(-\infty;3)$
- **c)** $(-\infty;-3)$
- **d)** $(-3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;-3)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0989` — Vlastní úloha ve stylu přijímaček VŠE (č. 989)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{4}{7}\right)^{x}>\left(\dfrac{7}{4}\right)^{-1}$, je:

- **a)** $(1;\infty)$
- **b)** $(-\infty;1)$
- **c)** $(-\infty;-1)$
- **d)** $(-1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;1)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0994` — Vlastní úloha ve stylu přijímaček VŠE (č. 994)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{4}\right)^{x+1}=4^{-1}$ leží v intervalu:

- **a)** $\langle -3;-1)$
- **b)** $\langle -1;1)$
- **c)** $\langle -5;-3)$
- **d)** $\langle 1;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle -1;1)$. $\left(\frac1{4}\right)^{t}=4^{-t}$, tedy $-(x--1)=-1$, $x=0$.

</details>

### `vl-vse-0997` — Vlastní úloha ve stylu přijímaček VŠE (č. 997)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{3}\right)^{x}>-\dfrac{3}{2}$, je:

- **a)** $(-1;\infty)$
- **b)** $(-\infty;-1)$
- **c)** $\mathbb R$
- **d)** $\emptyset$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\mathbb R$. Exponenciální funkce nabývá jen kladných hodnot.

</details>

### `vl-vse-1007` — Vlastní úloha ve stylu přijímaček VŠE (č. 1007)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{5}\right)^{x}<\left(\dfrac{5}{2}\right)^{3}$, je:

- **a)** $(3;\infty)$
- **b)** $(-\infty;3)$
- **c)** $(-\infty;-3)$
- **d)** $\mathbb R$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1010` — Vlastní úloha ve stylu přijímaček VŠE (č. 1010)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{4}{7}\right)^{x}<\left(\dfrac{7}{4}\right)^{3}$, je:

- **a)** $(-3;\infty)$
- **b)** $(-\infty;-3)$
- **c)** $(3;\infty)$
- **d)** $(-\infty;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-3;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-1022` — Vlastní úloha ve stylu přijímaček VŠE (č. 1022)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{5}\right)^{x}>-\dfrac{5}{2}$, je:

- **a)** $(-\infty;-1)$
- **b)** $\mathbb R$
- **c)** $(-1;\infty)$
- **d)** $\emptyset$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\mathbb R$. Exponenciální funkce nabývá jen kladných hodnot.

</details>

### `vl-vse-1033` — Vlastní úloha ve stylu přijímaček VŠE (č. 1033)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\frac13\right)^{x+2}=9$ náleží intervalu:

- **a)** $(-6;-4)$
- **b)** $\langle-4;-2)$
- **c)** $\langle-2;0)$
- **d)** $\langle0;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle-4;-2)$. $\left(\frac13\right)^{x+2}=\left(\frac13\right)^{-2}$, $x=-4$.

</details>

### `vl-vse-1070` — Vlastní úloha ve stylu přijímaček VŠE (č. 1070)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{5}{9}\right)^{x}<\left(\dfrac{9}{5}\right)^{-2}$, je:

- **a)** $(-\infty;2)$
- **b)** $(-\infty;-2)$
- **c)** $(2;\infty)$
- **d)** $(-2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(2;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-1083` — Vlastní úloha ve stylu přijímaček VŠE (č. 1083)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{5}{9}\right)^{x}>\left(\dfrac{9}{5}\right)^{3}$, je:

- **a)** $(-3;\infty)$
- **b)** $(3;\infty)$
- **c)** $\mathbb R$
- **d)** $(-\infty;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1102` — Vlastní úloha ve stylu přijímaček VŠE (č. 1102)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{2}\right)^{x+2}=2^{3}$ leží v intervalu:

- **a)** $\langle -10;-8)$
- **b)** $\langle -6;-4)$
- **c)** $\langle -4;-2)$
- **d)** $\langle -8;-6)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle -6;-4)$. $\left(\frac1{2}\right)^{t}=2^{-t}$, tedy $-(x--2)=3$, $x=-5$.

</details>

### `vl-vse-1106` — Vlastní úloha ve stylu přijímaček VŠE (č. 1106)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{5}\right)^{x}>\left(\dfrac{5}{2}\right)^{2}$, je:

- **a)** $(2;\infty)$
- **b)** $(-\infty;2)$
- **c)** $(-2;\infty)$
- **d)** $(-\infty;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;-2)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-1107` — Vlastní úloha ve stylu přijímaček VŠE (č. 1107)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{4}\right)^{x}<\left(\dfrac{4}{3}\right)^{3}$, je:

- **a)** $(-\infty;-3)$
- **b)** $(3;\infty)$
- **c)** $(-3;\infty)$
- **d)** $(-\infty;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-3;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-1130` — Vlastní úloha ve stylu přijímaček VŠE (č. 1130)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{2}{5}\right)^{x}<\left(\dfrac{5}{2}\right)^{2}$, je:

- **a)** $(-\infty;-2)$
- **b)** $(2;\infty)$
- **c)** $(-2;\infty)$
- **d)** $(-\infty;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-2;\infty)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-1153` — Vlastní úloha ve stylu přijímaček VŠE (č. 1153)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $2^{x+1}+2^x=\dfrac{3}{2}$ leží v intervalu:

- **a)** $\langle -4;-2)$
- **b)** $\langle 0;2)$
- **c)** $\langle -2;0)$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle -2;0)$. $2^x(2^1+1)=\dfrac{3}{2}$, tedy $2^x=\dfrac{1}{2}$ a $x=-1$.

</details>

### `vl-vse-1177` — Vlastní úloha ve stylu přijímaček VŠE (č. 1177)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{3}\right)^{x-2}=3^{3}$ leží v intervalu:

- **a)** $\langle -4;-2)$
- **b)** $\langle -2;0)$
- **c)** $\langle -6;-4)$
- **d)** $\langle 0;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle -2;0)$. $\left(\frac1{3}\right)^{t}=3^{-t}$, tedy $-(x-2)=3$, $x=-1$.

</details>

### `vl-vse-1205` — Vlastní úloha ve stylu přijímaček VŠE (č. 1205)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $3^{x+2}+3^x=10$ leží v intervalu:

- **a)** $\langle -4;-2)$
- **b)** $\langle 2;4)$
- **c)** $\langle 4;6)$
- **d)** $\langle -2;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $3^x(3^2+1)=10$, tedy $3^x=1$ a $x=0$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1222` — Vlastní úloha ve stylu přijímaček VŠE (č. 1222)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $\left(\dfrac1{2}\right)^{x}=2^{2}$ leží v intervalu:

- **a)** $\langle 0;2)$
- **b)** $\langle -6;-4)$
- **c)** $\langle -4;-2)$
- **d)** $\langle -2;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle -2;0)$. $\left(\frac1{2}\right)^{t}=2^{-t}$, tedy $-(x-0)=2$, $x=-2$.

</details>

### `vl-vse-1240` — Vlastní úloha ve stylu přijímaček VŠE (č. 1240)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $3^{x+1}+3^x=36$ leží v intervalu:

- **a)** $\langle -2;0)$
- **b)** $\langle 2;4)$
- **c)** $\langle -4;-2)$
- **d)** $\langle 0;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 2;4)$. $3^x(3^1+1)=36$, tedy $3^x=9$ a $x=2$.

</details>

### `vl-vse-1241` — Vlastní úloha ve stylu přijímaček VŠE (č. 1241)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{3}{4}\right)^{x}>\left(\dfrac{4}{3}\right)^{-2}$, je:

- **a)** $(-\infty;-2)$
- **b)** $(-\infty;2)$
- **c)** $(-2;\infty)$
- **d)** $(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;2)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vse-vzor-03` — [VŠE, vzorový test z matematiky – FMV (příklad 3, 60 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fmv.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу)

Číslo $\log_{\frac19}\sqrt{27}$ je rovno číslu

*Встречается также:* VŠE, vzorový test z matematiky – FFÚ a FPH (příklad 3, 6 bodů); VŠE, vzorový test z matematiky – FIS (příklad 3, 5 bodů)

- **a)** $-\dfrac32$
- **b)** $\dfrac34$
- **c)** $\dfrac43$
- **d)** $-\dfrac43$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**e** — $-\frac34$. $\sqrt{27}=3^{3/2}$ a $\frac19=3^{-2}$, tedy $\log_{\frac19}\sqrt{27}=\frac{3/2}{-2}=-\frac34$ — mezi nabídkami a)–d) není.

</details>

### `vl-vse-0008` — Vlastní úloha ve stylu přijímaček VŠE (č. 8)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{7}\sqrt[4]{7^{3}}-\log_{7}\sqrt[4]{7^{5}}+\log_{7}\sqrt[3]{7^{4}}$ je roven číslu:

- **a)** $\dfrac{5}{6}$
- **b)** $\dfrac{10}{3}$
- **c)** $\dfrac{11}{6}$
- **d)** $- \dfrac{5}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{5}{6}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-obec-029` — Vlastní úloha ve stylu přijímacích testů (č. 29)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-7x)$ je:

- **a)** $(-\infty;0)\cup(7;\infty)$
- **b)** $(7;\infty)$
- **c)** $(-\infty;0\rangle\cup\langle 7;\infty)$
- **d)** $(0;7)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;0)\cup(7;\infty)$. $x(x-k)>0$.

</details>

### `vl-vse-0042` — Vlastní úloha ve stylu přijímaček VŠE (č. 42)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\logx}$ je:

- **a)** $\langle 1;10\rangle$
- **b)** $\langle 1;10)$
- **c)** $(0;10)$
- **d)** $(0;10\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(0;10\rangle$. Logaritmus je definován pro $x>0$ a musí platit $\log(x)\le1$, tj. $x\le10$.

</details>

### `vl-obec-049` — Vlastní úloha ve stylu přijímacích testů (č. 49)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je vztah hodnot $\log_{\frac13}(x+1)$ a $\log_3(x+1)$ pro $x=2$?

- **a)** $\log_{\frac13}(x+1)>\log_3(x+1)$
- **b)** $\log_{\frac13}(x+1)=\log_3(x+1)$
- **c)** $\log_{\frac13}(x+1)<\log_3(x+1)$
- **d)** Pro $x=2$ nejsou výrazy definovány.
- **e)** Žádná z uvedených možností není správná.

<details><summary>Ответ и решение</summary>

**c** — $\log_{\frac13}(x+1)<\log_3(x+1)$. $\log_{\frac13}3=-1$, $\log_33=1$.

</details>

### `vl-vse-0061` — Vlastní úloha ve stylu přijímaček VŠE (č. 61)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{5}\sqrt[3]{5^{4}}-\log_{5}\sqrt[3]{5}+\log_{5}\sqrt[4]{5^{5}}$ je roven číslu:

- **a)** $\dfrac{35}{12}$
- **b)** $\dfrac{13}{4}$
- **c)** $\dfrac{9}{4}$
- **d)** $- \dfrac{9}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{9}{4}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0063` — Vlastní úloha ve stylu přijímaček VŠE (č. 63)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log(x-2)}$ je:

- **a)** $(2;12)$
- **b)** $\langle 3;12\rangle$
- **c)** $\langle 3;12)$
- **d)** $\langle 12;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Logaritmus je definován pro $x>2$ a musí platit $\log(x-2)\le1$, tj. $x\le12$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-obec-069` — Vlastní úloha ve stylu přijímacích testů (č. 69)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pokud pro kladné $x$ platí $\log x=4$, pak $\log\sqrt{\dfrac1x}$ je rovno:

- **a)** $-2$
- **b)** $2$
- **c)** $-4$
- **d)** $\dfrac12$
- **e)** $-\dfrac12$

<details><summary>Ответ и решение</summary>

**a** — $-2$. $\log x^{-\frac12}=-\frac12\cdot4$.

</details>

### `vl-vse-0077` — Vlastní úloha ve stylu přijímaček VŠE (č. 77)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{2}\frac{1}{4}$ je rovno číslu:

- **a)** $-2$
- **b)** $2$
- **c)** $- \dfrac{1}{2}$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-2$. $2=2^{1}$, $\frac{1}{4}=2^{-2}$, tedy logaritmus je $\frac{-2}{1}$.

</details>

### `vl-obec-078` — Vlastní úloha ve stylu přijímacích testů (č. 78)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{3}}9$ je rovno číslu:

- **a)** $- \dfrac{1}{2}$
- **b)** $-2$
- **c)** $-1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-2$. $\frac{1}{3}=3^{-1}$, $9=3^{2}$, tedy logaritmus je $\frac{2}{-1}$.

</details>

### `vl-vse-0086` — Vlastní úloha ve stylu přijímaček VŠE (č. 86)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{27}}243$ je rovno číslu:

- **a)** $- \dfrac{3}{5}$
- **b)** $\dfrac{5}{3}$
- **c)** $- \dfrac{10}{3}$
- **d)** $- \dfrac{2}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $\frac{1}{27}=3^{-3}$, $243=3^{5}$, tedy logaritmus je $\frac{5}{-3}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-nsz-090` — [Vlastní úloha ve stylu NSZ Matematika (č. 90)](https://www.scio.cz/matematika)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Které nejmenší přirozené číslo je větší než hodnota výrazu $\log_48+\log_927$?

- **a)** $3$
- **b)** $4$
- **c)** $5$
- **d)** $6$

<details><summary>Ответ и решение</summary>

**b** — $4$. $\log_48=\frac32$, $\log_927=\frac32$; součet $3$, nejbližší větší přirozené číslo je $4$.

</details>

### `vl-vse-0091` — Vlastní úloha ve stylu přijímaček VŠE (č. 91)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{2}}32$ je rovno číslu:

- **a)** $5$
- **b)** $-5$
- **c)** $- \dfrac{1}{5}$
- **d)** $-4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-5$. $\frac{1}{2}=2^{-1}$, $32=2^{5}$, tedy logaritmus je $\frac{5}{-1}$.

</details>

### `vl-vse-0096` — Vlastní úloha ve stylu přijímaček VŠE (č. 96)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{3}\sqrt[6]{3^{7}}-\log_{3}\sqrt[4]{3^{3}}+\log_{3}\sqrt[4]{3^{5}}$ je roven číslu:

- **a)** $- \dfrac{5}{3}$
- **b)** $\dfrac{8}{3}$
- **c)** $\dfrac{5}{3}$
- **d)** $\dfrac{19}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{5}{3}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0099` — Vlastní úloha ve stylu přijímaček VŠE (č. 99)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{3}\sqrt{3^{5}}-\log_{3}\sqrt[3]{3}+\log_{3}\sqrt{3^{1}}$ je roven číslu:

- **a)** $\dfrac{8}{3}$
- **b)** $\dfrac{11}{3}$
- **c)** $- \dfrac{8}{3}$
- **d)** $\dfrac{10}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{8}{3}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0109` — Vlastní úloha ve stylu přijímaček VŠE (č. 109)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{3}\sqrt{3^{5}}-\log_{3}\sqrt[3]{3^{2}}+\log_{3}\sqrt[6]{3^{7}}$ je roven číslu:

- **a)** $-3$
- **b)** $4$
- **c)** $\dfrac{13}{3}$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $3$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0115` — Vlastní úloha ve stylu přijímaček VŠE (č. 115)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{5}\sqrt[3]{5^{4}}-\log_{5}\sqrt[4]{5^{5}}+\log_{5}\sqrt{5^{5}}$ je roven číslu:

- **a)** $\dfrac{31}{12}$
- **b)** $- \dfrac{31}{12}$
- **c)** $\dfrac{43}{12}$
- **d)** $\dfrac{61}{12}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{31}{12}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0117` — Vlastní úloha ve stylu přijímaček VŠE (č. 117)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{8}\frac{1}{2}$ je rovno číslu:

- **a)** $- \dfrac{1}{3}$
- **b)** $-3$
- **c)** $\dfrac{2}{3}$
- **d)** $\dfrac{1}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $- \dfrac{1}{3}$. $8=2^{3}$, $\frac{1}{2}=2^{-1}$, tedy logaritmus je $\frac{-1}{3}$.

</details>

### `vl-vse-0126` — Vlastní úloha ve stylu přijímaček VŠE (č. 126)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{7}\sqrt{7^{5}}-\log_{7}\sqrt[3]{7^{2}}+\log_{7}\sqrt{7^{1}}$ je roven číslu:

- **a)** $\dfrac{10}{3}$
- **b)** $\dfrac{11}{3}$
- **c)** $\dfrac{7}{3}$
- **d)** $- \dfrac{7}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{7}{3}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0138` — Vlastní úloha ve stylu přijímaček VŠE (č. 138)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{5}}625$ je rovno číslu:

- **a)** $- \dfrac{1}{4}$
- **b)** $-4$
- **c)** $4$
- **d)** $-3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-4$. $\frac{1}{5}=5^{-1}$, $625=5^{4}$, tedy logaritmus je $\frac{4}{-1}$.

</details>

### `vl-vse-0140` — Vlastní úloha ve stylu přijímaček VŠE (č. 140)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-2x+7)$ je:

- **a)** $(-\infty;-1)$
- **b)** $(2;\infty)$
- **c)** $(-\infty;0)\cup(0;\infty)$
- **d)** $(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Diskriminant $\,-24<0$, výraz je vždy kladný. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-nsz-144` — [Vlastní úloha ve stylu NSZ Matematika (č. 144)](https://www.scio.cz/matematika)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $y=\log_{\frac12}x$ je:

- **a)** rostoucí na $(0,\infty)$
- **b)** klesající v celém definičním oboru
- **c)** klesající jen na $(0,1)$
- **d)** rostoucí na $(1,\infty)$

<details><summary>Ответ и решение</summary>

**b** — klesající v celém definičním oboru. Základ je mezi 0 a 1.

</details>

### `vl-vse-0156` — Vlastní úloha ve stylu přijímaček VŠE (č. 156)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{8}}4$ je rovno číslu:

- **a)** $- \dfrac{3}{2}$
- **b)** $- \dfrac{2}{3}$
- **c)** $\dfrac{2}{3}$
- **d)** $\dfrac{1}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $- \dfrac{2}{3}$. $\frac{1}{8}=2^{-3}$, $4=2^{2}$, tedy logaritmus je $\frac{2}{-3}$.

</details>

### `vl-vse-0163` — Vlastní úloha ve stylu přijímaček VŠE (č. 163)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{8}32$ je rovno číslu:

- **a)** $- \dfrac{5}{3}$
- **b)** $\dfrac{3}{5}$
- **c)** $\dfrac{5}{3}$
- **d)** $\dfrac{8}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{5}{3}$. $8=2^{3}$, $32=2^{5}$, tedy logaritmus je $\frac{5}{3}$.

</details>

### `vl-vse-0168` — Vlastní úloha ve stylu přijímaček VŠE (č. 168)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{8}2$ je rovno číslu:

- **a)** $\dfrac{1}{3}$
- **b)** $- \dfrac{1}{3}$
- **c)** $\dfrac{4}{3}$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{1}{3}$. $8=2^{3}$, $2=2^{1}$, tedy logaritmus je $\frac{1}{3}$.

</details>

### `vl-vse-0169` — Vlastní úloha ve stylu přijímaček VŠE (č. 169)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{2}\frac{1}{8}$ je rovno číslu:

- **a)** $- \dfrac{1}{3}$
- **b)** $3$
- **c)** $-2$
- **d)** $-3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-3$. $2=2^{1}$, $\frac{1}{8}=2^{-3}$, tedy logaritmus je $\frac{-3}{1}$.

</details>

### `vl-vse-0180` — Vlastní úloha ve stylu přijímaček VŠE (č. 180)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{5}\sqrt[4]{5^{5}}-\log_{5}\sqrt{5^{1}}+\log_{5}\sqrt[3]{5}$ je roven číslu:

- **a)** $- \dfrac{13}{12}$
- **b)** $\dfrac{13}{6}$
- **c)** $\dfrac{25}{12}$
- **d)** $\dfrac{13}{12}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{13}{12}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0184` — Vlastní úloha ve stylu přijímaček VŠE (č. 184)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{9}\frac{1}{27}$ je rovno číslu:

- **a)** $- \dfrac{2}{3}$
- **b)** $- \dfrac{1}{2}$
- **c)** $- \dfrac{3}{2}$
- **d)** $\dfrac{3}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $- \dfrac{3}{2}$. $9=3^{2}$, $\frac{1}{27}=3^{-3}$, tedy logaritmus je $\frac{-3}{2}$.

</details>

### `vl-vse-0209` — Vlastní úloha ve stylu přijímaček VŠE (č. 209)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{25}125$ je rovno číslu:

- **a)** $\dfrac{2}{3}$
- **b)** $\dfrac{3}{2}$
- **c)** $\dfrac{5}{2}$
- **d)** $- \dfrac{3}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{3}{2}$. $25=5^{2}$, $125=5^{3}$, tedy logaritmus je $\frac{3}{2}$.

</details>

### `vl-vse-0219` — Vlastní úloha ve stylu přijímaček VŠE (č. 219)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-5x)$ je:

- **a)** $(5;\infty)$
- **b)** $(-\infty;0\rangle\cup\langle 5;\infty)$
- **c)** $(-\infty;0)\cup(5;\infty)$
- **d)** $(0;5)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;0)\cup(5;\infty)$. $x(x-k)>0$.

</details>

### `vl-vse-0250` — Vlastní úloha ve stylu přijímaček VŠE (č. 250)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{4}}32$ je rovno číslu:

- **a)** $\dfrac{5}{2}$
- **b)** $- \dfrac{5}{2}$
- **c)** $- \dfrac{3}{2}$
- **d)** $- \dfrac{2}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $- \dfrac{5}{2}$. $\frac{1}{4}=2^{-2}$, $32=2^{5}$, tedy logaritmus je $\frac{5}{-2}$.

</details>

### `vl-vse-0257` — Vlastní úloha ve stylu přijímaček VŠE (č. 257)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{2}}\frac{1}{4}$ je rovno číslu:

- **a)** $2$
- **b)** $\dfrac{1}{2}$
- **c)** $-2$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. $\frac{1}{2}=2^{-1}$, $\frac{1}{4}=2^{-2}$, tedy logaritmus je $\frac{-2}{-1}$.

</details>

### `vl-vse-0262` — Vlastní úloha ve stylu přijímaček VŠE (č. 262)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{4}2$ je rovno číslu:

- **a)** $2$
- **b)** $\dfrac{3}{2}$
- **c)** $- \dfrac{1}{2}$
- **d)** $\dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{1}{2}$. $4=2^{2}$, $2=2^{1}$, tedy logaritmus je $\frac{1}{2}$.

</details>

### `vl-vse-0268` — Vlastní úloha ve stylu přijímaček VŠE (č. 268)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{7}\sqrt[3]{7^{2}}-\log_{7}\sqrt[4]{7^{3}}+\log_{7}\sqrt[3]{7}$ je roven číslu:

- **a)** $- \dfrac{1}{4}$
- **b)** $\dfrac{1}{4}$
- **c)** $\dfrac{5}{4}$
- **d)** $\dfrac{7}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{1}{4}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0274` — Vlastní úloha ve stylu přijímaček VŠE (č. 274)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{125}}\frac{1}{5}$ je rovno číslu:

- **a)** $\dfrac{4}{3}$
- **b)** $3$
- **c)** $- \dfrac{1}{3}$
- **d)** $\dfrac{1}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{1}{3}$. $\frac{1}{125}=5^{-3}$, $\frac{1}{5}=5^{-1}$, tedy logaritmus je $\frac{-1}{-3}$.

</details>

### `vl-vse-0276` — Vlastní úloha ve stylu přijímaček VŠE (č. 276)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log_{5}x}$ je:

- **a)** $\langle 1;5\rangle$
- **b)** $(0;5\rangle$
- **c)** $(0;5)$
- **d)** $\langle 1;5)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(0;5\rangle$. Logaritmus je definován pro $x>0$ a musí platit $\log_{5}(x)\le1$, tj. $x\le5$.

</details>

### `vl-vse-0285` — Vlastní úloha ve stylu přijímaček VŠE (č. 285)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{2}(x-4)}$ je:

- **a)** $\langle 8;\infty)$
- **b)** $\langle 5;8\rangle$
- **c)** $\langle 5;8)$
- **d)** $(4;8)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Logaritmus je definován pro $x>4$ a musí platit $\log_{2}(x-4)\le2$, tj. $x\le8$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0293` — Vlastní úloha ve stylu přijímaček VŠE (č. 293)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-8x+17)$ je:

- **a)** $(-\infty;0)\cup(0;\infty)$
- **b)** $(0;\infty)$
- **c)** $\mathbb R$
- **d)** $(-\infty;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\mathbb R$. Diskriminant $\,-4<0$, výraz je vždy kladný.

</details>

### `vl-vse-0329` — Vlastní úloha ve stylu přijímaček VŠE (č. 329)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{2}\sqrt[6]{2^{7}}-\log_{2}\sqrt[4]{2^{3}}+\log_{2}\sqrt{2^{1}}$ je roven číslu:

- **a)** $\dfrac{23}{12}$
- **b)** $\dfrac{29}{12}$
- **c)** $\dfrac{11}{12}$
- **d)** $- \dfrac{11}{12}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{11}{12}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0341` — Vlastní úloha ve stylu přijímaček VŠE (č. 341)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{25}3125$ je rovno číslu:

- **a)** $- \dfrac{5}{2}$
- **b)** $\dfrac{2}{5}$
- **c)** $\dfrac{7}{2}$
- **d)** $5$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $25=5^{2}$, $3125=5^{5}$, tedy logaritmus je $\frac{5}{2}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0343` — Vlastní úloha ve stylu přijímaček VŠE (č. 343)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{5}(x-1)}$ je:

- **a)** $(1;26)$
- **b)** $(1;26\rangle$
- **c)** $\langle 2;26\rangle$
- **d)** $\langle 2;26)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(1;26\rangle$. Logaritmus je definován pro $x>1$ a musí platit $\log_{5}(x-1)\le2$, tj. $x\le26$.

</details>

### `vl-vse-0347` — Vlastní úloha ve stylu přijímaček VŠE (č. 347)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{27}}9$ je rovno číslu:

- **a)** $\dfrac{2}{3}$
- **b)** $- \dfrac{2}{3}$
- **c)** $- \dfrac{3}{2}$
- **d)** $\dfrac{1}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $- \dfrac{2}{3}$. $\frac{1}{27}=3^{-3}$, $9=3^{2}$, tedy logaritmus je $\frac{2}{-3}$.

</details>

### `vl-vse-0353` — Vlastní úloha ve stylu přijímaček VŠE (č. 353)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-6x+13)$ je:

- **a)** $(-\infty;0)\cup(0;\infty)$
- **b)** $(0;\infty)$
- **c)** $(-\infty;-1)$
- **d)** $\mathbb R$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\mathbb R$. Diskriminant $\,-16<0$, výraz je vždy kladný.

</details>

### `vl-vse-0378` — Vlastní úloha ve stylu přijímaček VŠE (č. 378)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log_{5}(x-1)}$ je:

- **a)** $\langle 2;6)$
- **b)** $(1;6\rangle$
- **c)** $\langle 2;6\rangle$
- **d)** $(1;6)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(1;6\rangle$. Logaritmus je definován pro $x>1$ a musí platit $\log_{5}(x-1)\le1$, tj. $x\le6$.

</details>

### `vl-vse-0386` — Vlastní úloha ve stylu přijímaček VŠE (č. 386)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{2}\sqrt[4]{2^{3}}-\log_{2}\sqrt[6]{2^{7}}+\log_{2}\sqrt{2^{5}}$ je roven číslu:

- **a)** $\dfrac{53}{12}$
- **b)** $- \dfrac{25}{12}$
- **c)** $\dfrac{37}{12}$
- **d)** $\dfrac{25}{12}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{25}{12}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0392` — Vlastní úloha ve stylu přijímaček VŠE (č. 392)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{4}(x-1)}$ je:

- **a)** $\langle 2;17)$
- **b)** $(1;17)$
- **c)** $(1;17\rangle$
- **d)** $\langle 2;17\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(1;17\rangle$. Logaritmus je definován pro $x>1$ a musí platit $\log_{4}(x-1)\le2$, tj. $x\le17$.

</details>

### `vl-vse-0399` — Vlastní úloha ve stylu přijímaček VŠE (č. 399)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{3}\frac{1}{9}$ je rovno číslu:

- **a)** $-2$
- **b)** $- \dfrac{1}{2}$
- **c)** $-1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-2$. $3=3^{1}$, $\frac{1}{9}=3^{-2}$, tedy logaritmus je $\frac{-2}{1}$.

</details>

### `vl-vse-0400` — Vlastní úloha ve stylu přijímaček VŠE (č. 400)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{5}\sqrt{5^{5}}-\log_{5}\sqrt{5^{1}}+\log_{5}\sqrt[4]{5^{3}}$ je roven číslu:

- **a)** $\dfrac{11}{2}$
- **b)** $\dfrac{11}{4}$
- **c)** $\dfrac{15}{4}$
- **d)** $- \dfrac{11}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{11}{4}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0414` — Vlastní úloha ve stylu přijímaček VŠE (č. 414)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{7}\sqrt[3]{7^{4}}-\log_{7}\sqrt[6]{7^{7}}+\log_{7}\sqrt{7^{1}}$ je roven číslu:

- **a)** $- \dfrac{2}{3}$
- **b)** $\dfrac{5}{3}$
- **c)** $3$
- **d)** $\dfrac{2}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{2}{3}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0421` — Vlastní úloha ve stylu přijímaček VŠE (č. 421)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log_{2}(x-2)}$ je:

- **a)** $\langle 3;4\rangle$
- **b)** $(2;4)$
- **c)** $(2;4\rangle$
- **d)** $\langle 3;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(2;4\rangle$. Logaritmus je definován pro $x>2$ a musí platit $\log_{2}(x-2)\le1$, tj. $x\le4$.

</details>

### `vl-vse-0429` — Vlastní úloha ve stylu přijímaček VŠE (č. 429)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-4x+8)$ je:

- **a)** $(-\infty;-1)$
- **b)** $(0;\infty)$
- **c)** $\mathbb R$
- **d)** $(-\infty;0)\cup(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\mathbb R$. Diskriminant $\,-16<0$, výraz je vždy kladný.

</details>

### `vl-vse-0460` — Vlastní úloha ve stylu přijímaček VŠE (č. 460)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{8}}32$ je rovno číslu:

- **a)** $\dfrac{5}{3}$
- **b)** $- \dfrac{2}{3}$
- **c)** $- \dfrac{3}{5}$
- **d)** $- \dfrac{10}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $\frac{1}{8}=2^{-3}$, $32=2^{5}$, tedy logaritmus je $\frac{5}{-3}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0464` — Vlastní úloha ve stylu přijímaček VŠE (č. 464)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{3}\sqrt[4]{3^{5}}-\log_{3}\sqrt[4]{3^{3}}+\log_{3}\sqrt[3]{3}$ je roven číslu:

- **a)** $\dfrac{7}{3}$
- **b)** $\dfrac{5}{6}$
- **c)** $- \dfrac{5}{6}$
- **d)** $\dfrac{11}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{5}{6}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0473` — Vlastní úloha ve stylu přijímaček VŠE (č. 473)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{2}\frac{1}{2}$ je rovno číslu:

- **a)** $0$
- **b)** $1$
- **c)** $-2$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-1$. $2=2^{1}$, $\frac{1}{2}=2^{-1}$, tedy logaritmus je $\frac{-1}{1}$.

</details>

### `vl-vse-0483` — Vlastní úloha ve stylu přijímaček VŠE (č. 483)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{3}}1$ je rovno číslu:

- **a)** $0$
- **b)** $1$
- **c)** $\tilde{\infty}$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $0$. $\frac{1}{3}=3^{-1}$, $1=3^{0}$, tedy logaritmus je $\frac{0}{-1}$.

</details>

### `vl-vse-0498` — Vlastní úloha ve stylu přijímaček VŠE (č. 498)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{27}}\frac{1}{9}$ je rovno číslu:

- **a)** $\dfrac{5}{3}$
- **b)** $\dfrac{4}{3}$
- **c)** $\dfrac{3}{2}$
- **d)** $- \dfrac{2}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $\frac{1}{27}=3^{-3}$, $\frac{1}{9}=3^{-2}$, tedy logaritmus je $\frac{-2}{-3}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0508` — Vlastní úloha ve stylu přijímaček VŠE (č. 508)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{5}(x-4)}$ je:

- **a)** $(4;29)$
- **b)** $(4;29\rangle$
- **c)** $\langle 5;29)$
- **d)** $\langle 5;29\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(4;29\rangle$. Logaritmus je definován pro $x>4$ a musí platit $\log_{5}(x-4)\le2$, tj. $x\le29$.

</details>

### `vl-vse-0511` — Vlastní úloha ve stylu přijímaček VŠE (č. 511)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-3x)$ je:

- **a)** $(0;3)$
- **b)** $(-\infty;0\rangle\cup\langle 3;\infty)$
- **c)** $(-\infty;0)\cup(3;\infty)$
- **d)** $(3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;0)\cup(3;\infty)$. $x(x-k)>0$.

</details>

### `vl-vse-0512` — Vlastní úloha ve stylu přijímaček VŠE (č. 512)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{2}\sqrt[6]{2^{7}}-\log_{2}\sqrt[4]{2^{5}}+\log_{2}\sqrt[3]{2^{4}}$ je roven číslu:

- **a)** $\dfrac{9}{4}$
- **b)** $\dfrac{5}{4}$
- **c)** $\dfrac{15}{4}$
- **d)** $- \dfrac{5}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{5}{4}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0514` — Vlastní úloha ve stylu přijímaček VŠE (č. 514)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{2}\sqrt[4]{2^{5}}-\log_{2}\sqrt{2^{1}}+\log_{2}\sqrt[4]{2^{3}}$ je roven číslu:

- **a)** $- \dfrac{3}{2}$
- **b)** $\dfrac{3}{2}$
- **c)** $3$
- **d)** $\dfrac{5}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{3}{2}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0533` — Vlastní úloha ve stylu přijímaček VŠE (č. 533)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{4}(x-4)}$ je:

- **a)** $\langle 5;20\rangle$
- **b)** $(4;20\rangle$
- **c)** $\langle 5;20)$
- **d)** $(4;20)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(4;20\rangle$. Logaritmus je definován pro $x>4$ a musí platit $\log_{4}(x-4)\le2$, tj. $x\le20$.

</details>

### `vl-vse-0534` — Vlastní úloha ve stylu přijímaček VŠE (č. 534)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log_{2}(x+2)}$ je:

- **a)** $(-2;0\rangle$
- **b)** $\langle -1;0\rangle$
- **c)** $(-2;0)$
- **d)** $\langle -1;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-2;0\rangle$. Logaritmus je definován pro $x>-2$ a musí platit $\log_{2}(x+2)\le1$, tj. $x\le0$.

</details>

### `vl-vse-0538` — Vlastní úloha ve stylu přijímaček VŠE (č. 538)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{2}\sqrt[3]{2}-\log_{2}\sqrt[6]{2^{7}}+\log_{2}\sqrt[3]{2^{2}}$ je roven číslu:

- **a)** $\dfrac{13}{6}$
- **b)** $- \dfrac{1}{6}$
- **c)** $\dfrac{5}{6}$
- **d)** $\dfrac{1}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $- \dfrac{1}{6}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0542` — Vlastní úloha ve stylu přijímaček VŠE (č. 542)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{125}25$ je rovno číslu:

- **a)** $\dfrac{2}{3}$
- **b)** $\dfrac{3}{2}$
- **c)** $- \dfrac{2}{3}$
- **d)** $\dfrac{5}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{2}{3}$. $125=5^{3}$, $25=5^{2}$, tedy logaritmus je $\frac{2}{3}$.

</details>

### `vl-vse-0549` — Vlastní úloha ve stylu přijímaček VŠE (č. 549)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{2}\sqrt[3]{2}-\log_{2}\sqrt[4]{2^{3}}+\log_{2}\sqrt[6]{2^{7}}$ je roven číslu:

- **a)** $\dfrac{3}{4}$
- **b)** $\dfrac{7}{4}$
- **c)** $\dfrac{9}{4}$
- **d)** $- \dfrac{3}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{3}{4}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0553` — Vlastní úloha ve stylu přijímaček VŠE (č. 553)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{2}\sqrt[3]{2}-\log_{2}\sqrt[3]{2^{2}}+\log_{2}\sqrt[4]{2^{3}}$ je roven číslu:

- **a)** $\dfrac{5}{12}$
- **b)** $\dfrac{7}{4}$
- **c)** $- \dfrac{5}{12}$
- **d)** $\dfrac{17}{12}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{5}{12}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0554` — Vlastní úloha ve stylu přijímaček VŠE (č. 554)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{5}125$ je rovno číslu:

- **a)** $-3$
- **b)** $3$
- **c)** $\dfrac{1}{3}$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3$. $5=5^{1}$, $125=5^{3}$, tedy logaritmus je $\frac{3}{1}$.

</details>

### `vl-vse-0561` — Vlastní úloha ve stylu přijímaček VŠE (č. 561)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{27}\frac{1}{27}$ je rovno číslu:

- **a)** $1$
- **b)** $0$
- **c)** $-2$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-1$. $27=3^{3}$, $\frac{1}{27}=3^{-3}$, tedy logaritmus je $\frac{-3}{3}$.

</details>

### `vl-vse-0566` — Vlastní úloha ve stylu přijímaček VŠE (č. 566)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{9}27$ je rovno číslu:

- **a)** $\dfrac{5}{2}$
- **b)** $\dfrac{2}{3}$
- **c)** $- \dfrac{3}{2}$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $9=3^{2}$, $27=3^{3}$, tedy logaritmus je $\frac{3}{2}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0567` — Vlastní úloha ve stylu přijímaček VŠE (č. 567)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{8}16$ je rovno číslu:

- **a)** $\dfrac{7}{3}$
- **b)** $- \dfrac{4}{3}$
- **c)** $\dfrac{3}{4}$
- **d)** $\dfrac{8}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $8=2^{3}$, $16=2^{4}$, tedy logaritmus je $\frac{4}{3}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0568` — Vlastní úloha ve stylu přijímaček VŠE (č. 568)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{3}\sqrt[3]{3^{4}}-\log_{3}\sqrt[6]{3^{7}}+\log_{3}\sqrt{3^{5}}$ je roven číslu:

- **a)** $5$
- **b)** $\dfrac{11}{3}$
- **c)** $\dfrac{8}{3}$
- **d)** $- \dfrac{8}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{8}{3}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0603` — Vlastní úloha ve stylu přijímaček VŠE (č. 603)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{3}9$ je rovno číslu:

- **a)** $-2$
- **b)** $\dfrac{1}{2}$
- **c)** $2$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $2$. $3=3^{1}$, $9=3^{2}$, tedy logaritmus je $\frac{2}{1}$.

</details>

### `vl-vse-0605` — Vlastní úloha ve stylu přijímaček VŠE (č. 605)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{5}25$ je rovno číslu:

- **a)** $2$
- **b)** $-2$
- **c)** $3$
- **d)** $\dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. $5=5^{1}$, $25=5^{2}$, tedy logaritmus je $\frac{2}{1}$.

</details>

### `vl-vse-0611` — Vlastní úloha ve stylu přijímaček VŠE (č. 611)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{3}\sqrt[6]{3^{7}}-\log_{3}\sqrt[3]{3}+\log_{3}\sqrt[3]{3^{2}}$ je roven číslu:

- **a)** $\dfrac{3}{2}$
- **b)** $- \dfrac{3}{2}$
- **c)** $\dfrac{5}{2}$
- **d)** $\dfrac{13}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{3}{2}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0613` — Vlastní úloha ve stylu přijímaček VŠE (č. 613)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log_{4}(x-2)}$ je:

- **a)** $\langle 3;6\rangle$
- **b)** $(2;6)$
- **c)** $\langle 3;6)$
- **d)** $(2;6\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(2;6\rangle$. Logaritmus je definován pro $x>2$ a musí platit $\log_{4}(x-2)\le1$, tj. $x\le6$.

</details>

### `vl-vse-0627` — Vlastní úloha ve stylu přijímaček VŠE (č. 627)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{5}}1$ je rovno číslu:

- **a)** $\tilde{\infty}$
- **b)** $0$
- **c)** $-1$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. $\frac{1}{5}=5^{-1}$, $1=5^{0}$, tedy logaritmus je $\frac{0}{-1}$.

</details>

### `vl-vse-0635` — Vlastní úloha ve stylu přijímaček VŠE (č. 635)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{2}\sqrt[3]{2}-\log_{2}\sqrt[3]{2^{4}}+\log_{2}\sqrt[6]{2^{7}}$ je roven číslu:

- **a)** $- \dfrac{1}{6}$
- **b)** $\dfrac{7}{6}$
- **c)** $\dfrac{17}{6}$
- **d)** $\dfrac{1}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{1}{6}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0644` — Vlastní úloha ve stylu přijímaček VŠE (č. 644)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{4}}16$ je rovno číslu:

- **a)** $2$
- **b)** $-2$
- **c)** $-1$
- **d)** $- \dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-2$. $\frac{1}{4}=2^{-2}$, $16=2^{4}$, tedy logaritmus je $\frac{4}{-2}$.

</details>

### `vl-vse-0645` — Vlastní úloha ve stylu přijímaček VŠE (č. 645)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{25}\frac{1}{5}$ je rovno číslu:

- **a)** $\dfrac{1}{2}$
- **b)** $-2$
- **c)** $- \dfrac{1}{2}$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $- \dfrac{1}{2}$. $25=5^{2}$, $\frac{1}{5}=5^{-1}$, tedy logaritmus je $\frac{-1}{2}$.

</details>

### `vl-vse-0646` — Vlastní úloha ve stylu přijímaček VŠE (č. 646)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{2}\sqrt[4]{2^{5}}-\log_{2}\sqrt[4]{2^{3}}+\log_{2}\sqrt[3]{2^{4}}$ je roven číslu:

- **a)** $- \dfrac{11}{6}$
- **b)** $\dfrac{11}{6}$
- **c)** $\dfrac{10}{3}$
- **d)** $\dfrac{17}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{11}{6}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0648` — Vlastní úloha ve stylu přijímaček VŠE (č. 648)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{3}(x+2)}$ je:

- **a)** $\langle -1;7\rangle$
- **b)** $\langle -1;7)$
- **c)** $(-2;7)$
- **d)** $(-2;7\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-2;7\rangle$. Logaritmus je definován pro $x>-2$ a musí platit $\log_{3}(x+2)\le2$, tj. $x\le7$.

</details>

### `vl-vse-0670` — Vlastní úloha ve stylu přijímaček VŠE (č. 670)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-7x)$ je:

- **a)** $(7;\infty)$
- **b)** $(-\infty;0)\cup(7;\infty)$
- **c)** $(-\infty;0\rangle\cup\langle 7;\infty)$
- **d)** $(0;7)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;0)\cup(7;\infty)$. $x(x-k)>0$.

</details>

### `vl-vse-0724` — Vlastní úloha ve stylu přijímaček VŠE (č. 724)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{125}\frac{1}{25}$ je rovno číslu:

- **a)** $- \dfrac{2}{3}$
- **b)** $- \dfrac{3}{2}$
- **c)** $\dfrac{1}{3}$
- **d)** $\dfrac{2}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $- \dfrac{2}{3}$. $125=5^{3}$, $\frac{1}{25}=5^{-2}$, tedy logaritmus je $\frac{-2}{3}$.

</details>

### `vl-vse-0737` — Vlastní úloha ve stylu přijímaček VŠE (č. 737)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{2}32$ je rovno číslu:

- **a)** $5$
- **b)** $-5$
- **c)** $\dfrac{1}{5}$
- **d)** $6$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $5$. $2=2^{1}$, $32=2^{5}$, tedy logaritmus je $\frac{5}{1}$.

</details>

### `vl-vse-0744` — Vlastní úloha ve stylu přijímaček VŠE (č. 744)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{2}8$ je rovno číslu:

- **a)** $\dfrac{1}{3}$
- **b)** $3$
- **c)** $4$
- **d)** $-3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3$. $2=2^{1}$, $8=2^{3}$, tedy logaritmus je $\frac{3}{1}$.

</details>

### `vl-vse-0747` — Vlastní úloha ve stylu přijímaček VŠE (č. 747)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log_{4}x}$ je:

- **a)** $(0;4)$
- **b)** $\langle 1;4\rangle$
- **c)** $\langle 1;4)$
- **d)** $(0;4\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(0;4\rangle$. Logaritmus je definován pro $x>0$ a musí platit $\log_{4}(x)\le1$, tj. $x\le4$.

</details>

### `vl-vse-0749` — Vlastní úloha ve stylu přijímaček VŠE (č. 749)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{5}\sqrt{5^{1}}-\log_{5}\sqrt[3]{5}+\log_{5}\sqrt[6]{5^{7}}$ je roven číslu:

- **a)** $- \dfrac{4}{3}$
- **b)** $2$
- **c)** $\dfrac{4}{3}$
- **d)** $\dfrac{7}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{4}{3}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0753` — Vlastní úloha ve stylu přijímaček VŠE (č. 753)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{5}\sqrt[6]{5^{7}}-\log_{5}\sqrt[3]{5^{2}}+\log_{5}\sqrt[4]{5^{3}}$ je roven číslu:

- **a)** $- \dfrac{5}{4}$
- **b)** $\dfrac{9}{4}$
- **c)** $\dfrac{31}{12}$
- **d)** $\dfrac{5}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{5}{4}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0764` — Vlastní úloha ve stylu přijímaček VŠE (č. 764)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{8}4$ je rovno číslu:

- **a)** $\dfrac{3}{2}$
- **b)** $\dfrac{5}{3}$
- **c)** $- \dfrac{2}{3}$
- **d)** $\dfrac{4}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $8=2^{3}$, $4=2^{2}$, tedy logaritmus je $\frac{2}{3}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0766` — Vlastní úloha ve stylu přijímaček VŠE (č. 766)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{7}\sqrt[3]{7}-\log_{7}\sqrt[4]{7^{5}}+\log_{7}\sqrt{7^{5}}$ je roven číslu:

- **a)** $- \dfrac{19}{12}$
- **b)** $\dfrac{19}{12}$
- **c)** $\dfrac{49}{12}$
- **d)** $\dfrac{31}{12}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{19}{12}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0768` — Vlastní úloha ve stylu přijímaček VŠE (č. 768)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{5}\sqrt[3]{5^{4}}-\log_{5}\sqrt[4]{5^{3}}+\log_{5}\sqrt[3]{5^{2}}$ je roven číslu:

- **a)** $- \dfrac{5}{4}$
- **b)** $\dfrac{11}{4}$
- **c)** $\dfrac{5}{4}$
- **d)** $\dfrac{9}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{5}{4}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0771` — Vlastní úloha ve stylu přijímaček VŠE (č. 771)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{3}}3$ je rovno číslu:

- **a)** $0$
- **b)** $1$
- **c)** $-1$
- **d)** $-2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $-1$. $\frac{1}{3}=3^{-1}$, $3=3^{1}$, tedy logaritmus je $\frac{1}{-1}$.

</details>

### `vl-vse-0794` — Vlastní úloha ve stylu přijímaček VŠE (č. 794)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{4}}\frac{1}{2}$ je rovno číslu:

- **a)** $\dfrac{3}{2}$
- **b)** $- \dfrac{1}{2}$
- **c)** $\dfrac{1}{2}$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{1}{2}$. $\frac{1}{4}=2^{-2}$, $\frac{1}{2}=2^{-1}$, tedy logaritmus je $\frac{-1}{-2}$.

</details>

### `vl-vse-0800` — Vlastní úloha ve stylu přijímaček VŠE (č. 800)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{3}(x-1)}$ je:

- **a)** $\langle 2;10)$
- **b)** $(1;10\rangle$
- **c)** $\langle 2;10\rangle$
- **d)** $(1;10)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(1;10\rangle$. Logaritmus je definován pro $x>1$ a musí platit $\log_{3}(x-1)\le2$, tj. $x\le10$.

</details>

### `vl-vse-0801` — Vlastní úloha ve stylu přijímaček VŠE (č. 801)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{9}}9$ je rovno číslu:

- **a)** $-1$
- **b)** $1$
- **c)** $-2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-1$. $\frac{1}{9}=3^{-2}$, $9=3^{2}$, tedy logaritmus je $\frac{2}{-2}$.

</details>

### `vl-vse-0810` — Vlastní úloha ve stylu přijímaček VŠE (č. 810)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-2x)$ je:

- **a)** $(-\infty;0)\cup(2;\infty)$
- **b)** $(0;2)$
- **c)** $(-\infty;0\rangle\cup\langle 2;\infty)$
- **d)** $(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;0)\cup(2;\infty)$. $x(x-k)>0$.

</details>

### `vl-vse-0815` — Vlastní úloha ve stylu přijímaček VŠE (č. 815)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{3}}27$ je rovno číslu:

- **a)** $-3$
- **b)** $- \dfrac{1}{3}$
- **c)** $-2$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-3$. $\frac{1}{3}=3^{-1}$, $27=3^{3}$, tedy logaritmus je $\frac{3}{-1}$.

</details>

### `vl-vse-0827` — Vlastní úloha ve stylu přijímaček VŠE (č. 827)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{2}\sqrt{2^{1}}-\log_{2}\sqrt{2^{5}}+\log_{2}\sqrt[6]{2^{7}}$ je roven číslu:

- **a)** $\dfrac{1}{6}$
- **b)** $- \dfrac{5}{3}$
- **c)** $\dfrac{5}{6}$
- **d)** $\dfrac{25}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0835` — Vlastní úloha ve stylu přijímaček VŠE (č. 835)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{4}\frac{1}{2}$ je rovno číslu:

- **a)** $\dfrac{1}{2}$
- **b)** $-1$
- **c)** $\dfrac{1}{4}$
- **d)** $-2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $4=2^{2}$, $\frac{1}{2}=2^{-1}$, tedy logaritmus je $\frac{-1}{2}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0840` — Vlastní úloha ve stylu přijímaček VŠE (č. 840)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{8}}2$ je rovno číslu:

- **a)** $\dfrac{2}{3}$
- **b)** $-3$
- **c)** $- \dfrac{2}{3}$
- **d)** $\dfrac{1}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $\frac{1}{8}=2^{-3}$, $2=2^{1}$, tedy logaritmus je $\frac{1}{-3}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0865` — Vlastní úloha ve stylu přijímaček VŠE (č. 865)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{2}\sqrt{2^{1}}-\log_{2}\sqrt[6]{2^{7}}+\log_{2}\sqrt[3]{2}$ je roven číslu:

- **a)** $- \dfrac{1}{3}$
- **b)** $\dfrac{1}{3}$
- **c)** $\dfrac{2}{3}$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $- \dfrac{1}{3}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0879` — Vlastní úloha ve stylu přijímaček VŠE (č. 879)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-4x+5)$ je:

- **a)** $(-\infty;0)\cup(0;\infty)$
- **b)** $\mathbb R$
- **c)** $(0;\infty)$
- **d)** $(-\infty;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\mathbb R$. Diskriminant $\,-4<0$, výraz je vždy kladný.

</details>

### `vl-vse-0880` — Vlastní úloha ve stylu přijímaček VŠE (č. 880)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_3\sqrt3+\log_3\sqrt[3]{3^4}-\log_3\sqrt[6]{3^5}$ je roven číslu:

- **a)** $0$
- **b)** $1$
- **c)** $-1$
- **d)** $\dfrac12$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. $\frac12+\frac43-\frac56=1$.

</details>

### `vl-vse-0885` — Vlastní úloha ve stylu přijímaček VŠE (č. 885)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{8}16$ je rovno číslu:

- **a)** $\dfrac34$
- **b)** $2$
- **c)** $\dfrac43$
- **d)** $\dfrac32$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac43$. $8^t=16\iff2^{3t}=2^4$, $t=\frac43$.

</details>

### `vl-vse-0889` — Vlastní úloha ve stylu přijímaček VŠE (č. 889)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{3}\sqrt[4]{3^{5}}-\log_{3}\sqrt{3^{5}}+\log_{3}\sqrt[3]{3^{2}}$ je roven číslu:

- **a)** $\dfrac{53}{12}$
- **b)** $- \dfrac{7}{6}$
- **c)** $\dfrac{5}{12}$
- **d)** $\dfrac{7}{12}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0898` — Vlastní úloha ve stylu přijímaček VŠE (č. 898)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{3}}9$ je rovno číslu:

- **a)** $- \dfrac{1}{2}$
- **b)** $2$
- **c)** $-2$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $-2$. $\frac{1}{3}=3^{-1}$, $9=3^{2}$, tedy logaritmus je $\frac{2}{-1}$.

</details>

### `vl-vse-0912` — Vlastní úloha ve stylu přijímaček VŠE (č. 912)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log_{2}(x+1)}$ je:

- **a)** $\langle 1;\infty)$
- **b)** $\langle 0;1\rangle$
- **c)** $(-1;1)$
- **d)** $\langle 0;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Logaritmus je definován pro $x>-1$ a musí platit $\log_{2}(x+1)\le1$, tj. $x\le1$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0914` — Vlastní úloha ve stylu přijímaček VŠE (č. 914)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{2}\sqrt[3]{2}-\log_{2}\sqrt{2^{5}}+\log_{2}\sqrt[3]{2^{2}}$ je roven číslu:

- **a)** $- \dfrac{3}{2}$
- **b)** $\dfrac{7}{2}$
- **c)** $- \dfrac{1}{2}$
- **d)** $\dfrac{3}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $- \dfrac{3}{2}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0917` — Vlastní úloha ve stylu přijímaček VŠE (č. 917)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{4}\frac{1}{4}$ je rovno číslu:

- **a)** $0$
- **b)** $-1$
- **c)** $-2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-1$. $4=2^{2}$, $\frac{1}{4}=2^{-2}$, tedy logaritmus je $\frac{-2}{2}$.

</details>

### `vl-vse-0920` — Vlastní úloha ve stylu přijímaček VŠE (č. 920)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{4}(x+3)}$ je:

- **a)** $\langle -2;13)$
- **b)** $(-3;13\rangle$
- **c)** $(-3;13)$
- **d)** $\langle -2;13\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-3;13\rangle$. Logaritmus je definován pro $x>-3$ a musí platit $\log_{4}(x+3)\le2$, tj. $x\le13$.

</details>

### `vl-vse-0926` — Vlastní úloha ve stylu přijímaček VŠE (č. 926)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log_{4}(x-4)}$ je:

- **a)** $\langle 5;8)$
- **b)** $(4;8\rangle$
- **c)** $(4;8)$
- **d)** $\langle 5;8\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(4;8\rangle$. Logaritmus je definován pro $x>4$ a musí platit $\log_{4}(x-4)\le1$, tj. $x\le8$.

</details>

### `vl-vse-0932` — Vlastní úloha ve stylu přijímaček VŠE (č. 932)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximálním definičním oborem funkce $f(x)=\sqrt{2-\log_3x}$ je množina:

- **a)** $(0;9\rangle$
- **b)** $\langle1;9\rangle$
- **c)** $(0;9)$
- **d)** $\langle1;9)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(0;9\rangle$. $\log_3x\le2$ a $x>0$.

</details>

### `vl-vse-0963` — Vlastní úloha ve stylu přijímaček VŠE (č. 963)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{125}3125$ je rovno číslu:

- **a)** $\dfrac{8}{3}$
- **b)** $\dfrac{10}{3}$
- **c)** $- \dfrac{5}{3}$
- **d)** $\dfrac{3}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $125=5^{3}$, $3125=5^{5}$, tedy logaritmus je $\frac{5}{3}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0968` — Vlastní úloha ve stylu přijímaček VŠE (č. 968)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{3}}243$ je rovno číslu:

- **a)** $-5$
- **b)** $-4$
- **c)** $5$
- **d)** $- \dfrac{1}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-5$. $\frac{1}{3}=3^{-1}$, $243=3^{5}$, tedy logaritmus je $\frac{5}{-1}$.

</details>

### `vl-vse-0983` — Vlastní úloha ve stylu přijímaček VŠE (č. 983)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{7}\sqrt[3]{7}-\log_{7}\sqrt[4]{7^{5}}+\log_{7}\sqrt[6]{7^{7}}$ je roven číslu:

- **a)** $\dfrac{5}{4}$
- **b)** $\dfrac{11}{4}$
- **c)** $- \dfrac{1}{4}$
- **d)** $\dfrac{1}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{1}{4}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-0992` — Vlastní úloha ve stylu přijímaček VŠE (č. 992)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-2x+5)$ je:

- **a)** $(-\infty;-1)$
- **b)** $(0;\infty)$
- **c)** $\mathbb R$
- **d)** $(-\infty;0)\cup(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\mathbb R$. Diskriminant $\,-16<0$, výraz je vždy kladný.

</details>

### `vl-vse-0993` — Vlastní úloha ve stylu přijímaček VŠE (č. 993)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{7}\sqrt[6]{7^{7}}-\log_{7}\sqrt{7^{1}}+\log_{7}\sqrt[4]{7^{5}}$ je roven číslu:

- **a)** $\dfrac{23}{12}$
- **b)** $- \dfrac{23}{12}$
- **c)** $\dfrac{35}{12}$
- **d)** $\dfrac{23}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{23}{12}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-1032` — Vlastní úloha ve stylu přijímaček VŠE (č. 1032)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{8}}16$ je rovno číslu:

- **a)** $- \dfrac{3}{4}$
- **b)** $\dfrac{4}{3}$
- **c)** $- \dfrac{4}{3}$
- **d)** $- \dfrac{1}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $- \dfrac{4}{3}$. $\frac{1}{8}=2^{-3}$, $16=2^{4}$, tedy logaritmus je $\frac{4}{-3}$.

</details>

### `vl-vse-1039` — Vlastní úloha ve stylu přijímaček VŠE (č. 1039)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{9}\frac{1}{3}$ je rovno číslu:

- **a)** $\dfrac{1}{2}$
- **b)** $- \dfrac{1}{2}$
- **c)** $-1$
- **d)** $-2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $- \dfrac{1}{2}$. $9=3^{2}$, $\frac{1}{3}=3^{-1}$, tedy logaritmus je $\frac{-1}{2}$.

</details>

### `vl-vse-1047` — Vlastní úloha ve stylu přijímaček VŠE (č. 1047)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{3}\frac{1}{3}$ je rovno číslu:

- **a)** $-1$
- **b)** $-2$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-1$. $3=3^{1}$, $\frac{1}{3}=3^{-1}$, tedy logaritmus je $\frac{-1}{1}$.

</details>

### `vl-vse-1048` — Vlastní úloha ve stylu přijímaček VŠE (č. 1048)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log(x+2)}$ je:

- **a)** $(-2;8\rangle$
- **b)** $\langle -1;8)$
- **c)** $(-2;8)$
- **d)** $\langle -1;8\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-2;8\rangle$. Logaritmus je definován pro $x>-2$ a musí platit $\log(x+2)\le1$, tj. $x\le8$.

</details>

### `vl-vse-1066` — Vlastní úloha ve stylu přijímaček VŠE (č. 1066)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{9}243$ je rovno číslu:

- **a)** $\dfrac{7}{2}$
- **b)** $\dfrac{5}{2}$
- **c)** $\dfrac{2}{5}$
- **d)** $- \dfrac{5}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{5}{2}$. $9=3^{2}$, $243=3^{5}$, tedy logaritmus je $\frac{5}{2}$.

</details>

### `vl-vse-1067` — Vlastní úloha ve stylu přijímaček VŠE (č. 1067)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{5}\sqrt[6]{5^{7}}-\log_{5}\sqrt{5^{1}}+\log_{5}\sqrt[4]{5^{3}}$ je roven číslu:

- **a)** $\dfrac{17}{6}$
- **b)** $\dfrac{17}{12}$
- **c)** $\dfrac{29}{12}$
- **d)** $- \dfrac{17}{12}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{17}{12}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-1082` — Vlastní úloha ve stylu přijímaček VŠE (č. 1082)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{8}\frac{1}{4}$ je rovno číslu:

- **a)** $- \dfrac{2}{3}$
- **b)** $\dfrac{2}{3}$
- **c)** $- \dfrac{3}{2}$
- **d)** $\dfrac{1}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $- \dfrac{2}{3}$. $8=2^{3}$, $\frac{1}{4}=2^{-2}$, tedy logaritmus je $\frac{-2}{3}$.

</details>

### `vl-vse-1090` — Vlastní úloha ve stylu přijímaček VŠE (č. 1090)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{25}}\frac{1}{125}$ je rovno číslu:

- **a)** $\dfrac{2}{3}$
- **b)** $\dfrac{3}{2}$
- **c)** $\dfrac{5}{2}$
- **d)** $- \dfrac{3}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{3}{2}$. $\frac{1}{25}=5^{-2}$, $\frac{1}{125}=5^{-3}$, tedy logaritmus je $\frac{-3}{-2}$.

</details>

### `vl-vse-1092` — Vlastní úloha ve stylu přijímaček VŠE (č. 1092)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{5}\frac{1}{25}$ je rovno číslu:

- **a)** $-1$
- **b)** $- \dfrac{1}{2}$
- **c)** $-4$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $5=5^{1}$, $\frac{1}{25}=5^{-2}$, tedy logaritmus je $\frac{-2}{1}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1117` — Vlastní úloha ve stylu přijímaček VŠE (č. 1117)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{5}\sqrt[3]{5^{4}}-\log_{5}\sqrt{5^{5}}+\log_{5}\sqrt[4]{5^{3}}$ je roven číslu:

- **a)** $\dfrac{5}{12}$
- **b)** $\dfrac{7}{12}$
- **c)** $- \dfrac{5}{12}$
- **d)** $\dfrac{55}{12}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $- \dfrac{5}{12}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-1128` — Vlastní úloha ve stylu přijímaček VŠE (č. 1128)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{125}}3125$ je rovno číslu:

- **a)** $- \dfrac{2}{3}$
- **b)** $- \dfrac{5}{3}$
- **c)** $\dfrac{5}{3}$
- **d)** $- \dfrac{3}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $- \dfrac{5}{3}$. $\frac{1}{125}=5^{-3}$, $3125=5^{5}$, tedy logaritmus je $\frac{5}{-3}$.

</details>

### `vl-vse-1143` — Vlastní úloha ve stylu přijímaček VŠE (č. 1143)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{27}9$ je rovno číslu:

- **a)** $\dfrac{2}{3}$
- **b)** $\dfrac{5}{3}$
- **c)** $- \dfrac{2}{3}$
- **d)** $\dfrac{3}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{2}{3}$. $27=3^{3}$, $9=3^{2}$, tedy logaritmus je $\frac{2}{3}$.

</details>

### `vl-vse-1147` — Vlastní úloha ve stylu přijímaček VŠE (č. 1147)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{2}}2$ je rovno číslu:

- **a)** $1$
- **b)** $-2$
- **c)** $-1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $-1$. $\frac{1}{2}=2^{-1}$, $2=2^{1}$, tedy logaritmus je $\frac{1}{-1}$.

</details>

### `vl-vse-1160` — Vlastní úloha ve stylu přijímaček VŠE (č. 1160)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{5}\sqrt[4]{5^{3}}-\log_{5}\sqrt[3]{5^{4}}+\log_{5}\sqrt[3]{5}$ je roven číslu:

- **a)** $- \dfrac{1}{4}$
- **b)** $\dfrac{3}{4}$
- **c)** $\dfrac{1}{4}$
- **d)** $\dfrac{29}{12}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $- \dfrac{1}{4}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-1176` — Vlastní úloha ve stylu přijímaček VŠE (č. 1176)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{7}\sqrt[3]{7^{4}}-\log_{7}\sqrt[4]{7^{5}}+\log_{7}\sqrt[4]{7^{3}}$ je roven číslu:

- **a)** $\dfrac{11}{6}$
- **b)** $- \dfrac{5}{6}$
- **c)** $\dfrac{5}{6}$
- **d)** $\dfrac{10}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{5}{6}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-1180` — Vlastní úloha ve stylu přijímaček VŠE (č. 1180)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-2x+2)$ je:

- **a)** $(-\infty;-1)$
- **b)** $\mathbb R$
- **c)** $(0;\infty)$
- **d)** $(-\infty;0)\cup(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\mathbb R$. Diskriminant $\,-4<0$, výraz je vždy kladný.

</details>

### `vl-vse-1190` — Vlastní úloha ve stylu přijímaček VŠE (č. 1190)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{9}}\frac{1}{3}$ je rovno číslu:

- **a)** $\dfrac{3}{2}$
- **b)** $\dfrac{1}{2}$
- **c)** $2$
- **d)** $- \dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{1}{2}$. $\frac{1}{9}=3^{-2}$, $\frac{1}{3}=3^{-1}$, tedy logaritmus je $\frac{-1}{-2}$.

</details>

### `vl-vse-1198` — Vlastní úloha ve stylu přijímaček VŠE (č. 1198)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{\frac{1}{8}}8$ je rovno číslu:

- **a)** $0$
- **b)** $-1$
- **c)** $1$
- **d)** $-2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-1$. $\frac{1}{8}=2^{-3}$, $8=2^{3}$, tedy logaritmus je $\frac{3}{-3}$.

</details>

### `vl-vse-1206` — Vlastní úloha ve stylu přijímaček VŠE (č. 1206)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{7}\sqrt[4]{7^{3}}-\log_{7}\sqrt[3]{7}+\log_{7}\sqrt[6]{7^{7}}$ je roven číslu:

- **a)** $\dfrac{9}{4}$
- **b)** $- \dfrac{19}{12}$
- **c)** $\dfrac{19}{12}$
- **d)** $\dfrac{31}{12}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{19}{12}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-1218` — Vlastní úloha ve stylu přijímaček VŠE (č. 1218)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{7}\sqrt[6]{7^{7}}-\log_{7}\sqrt[3]{7^{4}}+\log_{7}\sqrt[3]{7^{2}}$ je roven číslu:

- **a)** $- \dfrac{1}{2}$
- **b)** $\dfrac{3}{2}$
- **c)** $\dfrac{1}{2}$
- **d)** $\dfrac{19}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{1}{2}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-1226` — Vlastní úloha ve stylu přijímaček VŠE (č. 1226)

*Темы:* 12. Logaritmická funkce, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\log_{3}\sqrt[3]{3}-\log_{3}\sqrt[4]{3^{5}}+\log_{3}\sqrt[3]{3^{4}}$ je roven číslu:

- **a)** $\dfrac{5}{12}$
- **b)** $- \dfrac{5}{12}$
- **c)** $\dfrac{17}{12}$
- **d)** $\dfrac{35}{12}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{5}{12}$. Odmocniny zapíšeme jako mocniny se zlomkovým exponentem a sečteme exponenty.

</details>

### `vl-vse-1230` — Vlastní úloha ve stylu přijímaček VŠE (č. 1230)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log(x+3)}$ je:

- **a)** $(-3;7)$
- **b)** $(-3;7\rangle$
- **c)** $\langle -2;7\rangle$
- **d)** $\langle -2;7)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-3;7\rangle$. Logaritmus je definován pro $x>-3$ a musí platit $\log(x+3)\le1$, tj. $x\le7$.

</details>

### `vl-vse-1248` — Vlastní úloha ve stylu přijímaček VŠE (č. 1248)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{125}\frac{1}{125}$ je rovno číslu:

- **a)** $1$
- **b)** $-1$
- **c)** $0$
- **d)** $-2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-1$. $125=5^{3}$, $\frac{1}{125}=5^{-3}$, tedy logaritmus je $\frac{-3}{3}$.

</details>

### `vl-vse-1251` — Vlastní úloha ve stylu přijímaček VŠE (č. 1251)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\log_{125}5$ je rovno číslu:

- **a)** $- \dfrac{1}{3}$
- **b)** $3$
- **c)** $\dfrac{1}{3}$
- **d)** $\dfrac{4}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{1}{3}$. $125=5^{3}$, $5=5^{1}$, tedy logaritmus je $\frac{1}{3}$.

</details>

### `vl-vse-1254` — Vlastní úloha ve stylu přijímaček VŠE (č. 1254)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-4x)$ je:

- **a)** $(-\infty;0)\cup(4;\infty)$
- **b)** $(0;4)$
- **c)** $(-\infty;0\rangle\cup\langle 4;\infty)$
- **d)** $(4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;0)\cup(4;\infty)$. $x(x-k)>0$.

</details>

### `vse-b-04` — [VŠE, vzor přijímacích zkoušek B (úloha 4)](https://vse.cz/wp-content/uploads/page/2128/test-B.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Všechna řešení rovnice $\log_3(x+2)-\log_3(x+1)=1$ leží v intervalu

- **a)** $\langle-1;1\rangle$
- **b)** $(1;\infty)$
- **c)** $(-\infty;-1)$
- **d)** rovnice nemá řešení
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**a** — $x=-\frac12$. Podmínka $x>-1$; $\frac{x+2}{x+1}=3\Rightarrow x=-\frac12$.

</details>

### `vl-vse-0004` — Vlastní úloha ve stylu přijímaček VŠE (č. 4)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{2}{3}}x<0$, je:

- **a)** $(0;1)$
- **b)** $(1;\infty)$
- **c)** $(-\infty;1)$
- **d)** $(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(1;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>0$.

</details>

### `vl-vse-0016` — Vlastní úloha ve stylu přijímaček VŠE (č. 16)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{2}{3}}(x+1)>0$, je:

- **a)** $(-1;\infty)$
- **b)** $(-1;0)$
- **c)** $(0;\infty)$
- **d)** $(-\infty;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-1;0)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>-1$.

</details>

### `vl-vse-0017` — Vlastní úloha ve stylu přijímaček VŠE (č. 17)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{3}(x+1)>0$, je:

- **a)** $(-\infty;0)$
- **b)** $(-1;0)$
- **c)** $(0;\infty)$
- **d)** $(-1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(0;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>-1$.

</details>

### `vl-obec-056` — Vlastní úloha ve stylu přijímacích testů (č. 56)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Které z rovnic má největší řešení? A) $\log_3x+\log_39=3$; B) $\log_2(x+1)=\log1$; C) $\log_x16=-2$.

- **a)** A
- **b)** B
- **c)** C
- **d)** všechny mají stejné řešení
- **e)** Žádná z uvedených možností není správná.

<details><summary>Ответ и решение</summary>

**a** — A. A: $x=3$; B: $x=0$; C: $x=\frac14$.

</details>

### `vl-vse-0101` — Vlastní úloha ve stylu přijímaček VŠE (č. 101)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{3}{5}}(x-2)>0$, je:

- **a)** $(2;\infty)$
- **b)** $(2;3)$
- **c)** $(3;\infty)$
- **d)** $(-\infty;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(2;3)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>2$.

</details>

### `vl-vse-0198` — Vlastní úloha ve stylu přijímaček VŠE (č. 198)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{2}x>0$, je:

- **a)** $(1;\infty)$
- **b)** $(0;1)$
- **c)** $(0;\infty)$
- **d)** $(-\infty;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(1;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>0$.

</details>

### `vl-vse-0218` — Vlastní úloha ve stylu přijímaček VŠE (č. 218)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{3}x<0$, je:

- **a)** $(0;\infty)$
- **b)** $(0;1)$
- **c)** $(-\infty;1)$
- **d)** $(1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(0;1)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>0$.

</details>

### `vl-vse-0228` — Vlastní úloha ve stylu přijímaček VŠE (č. 228)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{2}(x+2)>0$, je:

- **a)** $(-1;\infty)$
- **b)** $(-2;-1)$
- **c)** $(-2;\infty)$
- **d)** $(-\infty;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-1;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>-2$.

</details>

### `vl-vse-0251` — Vlastní úloha ve stylu přijímaček VŠE (č. 251)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{2}{3}}(x-2)<0$, je:

- **a)** $(-\infty;3)$
- **b)** $(2;\infty)$
- **c)** $(2;3)$
- **d)** $(3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(3;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>2$.

</details>

### `vl-vse-0263` — Vlastní úloha ve stylu přijímaček VŠE (č. 263)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{2}{3}}(x-3)<0$, je:

- **a)** $(-\infty;4)$
- **b)** $(4;\infty)$
- **c)** $(3;\infty)$
- **d)** $(3;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(4;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>3$.

</details>

### `vl-vse-0267` — Vlastní úloha ve stylu přijímaček VŠE (č. 267)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{1}{2}}(x-2)>0$, je:

- **a)** $(3;\infty)$
- **b)** $(2;3)$
- **c)** $(2;\infty)$
- **d)** $(-\infty;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(2;3)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>2$.

</details>

### `vl-vse-0270` — Vlastní úloha ve stylu přijímaček VŠE (č. 270)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{3}{5}}(x-1)<0$, je:

- **a)** $(1;2)$
- **b)** $(1;\infty)$
- **c)** $(2;\infty)$
- **d)** $(-\infty;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(2;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>1$.

</details>

### `vl-vse-0325` — Vlastní úloha ve stylu přijímaček VŠE (č. 325)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{5}(x-3)<0$, je:

- **a)** $(3;4)$
- **b)** $(-\infty;4)$
- **c)** $(3;\infty)$
- **d)** $(4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(3;4)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>3$.

</details>

### `vl-vse-0390` — Vlastní úloha ve stylu přijímaček VŠE (č. 390)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{5}(x-1)<0$, je:

- **a)** $(2;\infty)$
- **b)** $(1;\infty)$
- **c)** $(1;2)$
- **d)** $(-\infty;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(1;2)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>1$.

</details>

### `vl-vse-0428` — Vlastní úloha ve stylu přijímaček VŠE (č. 428)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{5}x<0$, je:

- **a)** $(-\infty;1)$
- **b)** $(0;\infty)$
- **c)** $(-1;1)$
- **d)** $(1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>0$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0430` — Vlastní úloha ve stylu přijímaček VŠE (č. 430)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{3}{5}}x>0$, je:

- **a)** $(1;\infty)$
- **b)** $(0;\infty)$
- **c)** $(-\infty;1)$
- **d)** $(0;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(0;1)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>0$.

</details>

### `vl-vse-0441` — Vlastní úloha ve stylu přijímaček VŠE (č. 441)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{3}(x-3)>0$, je:

- **a)** $(3;\infty)$
- **b)** $(4;\infty)$
- **c)** $(3;4)$
- **d)** $(-\infty;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(4;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>3$.

</details>

### `vl-vse-0461` — Vlastní úloha ve stylu přijímaček VŠE (č. 461)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{1}{2}}(x-1)>0$, je:

- **a)** $(1;2)$
- **b)** $(1;\infty)$
- **c)** $(-\infty;2)$
- **d)** $(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(1;2)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>1$.

</details>

### `vl-vse-0544` — Vlastní úloha ve stylu přijímaček VŠE (č. 544)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{1}{2}}x>0$, je:

- **a)** $(0;\infty)$
- **b)** $(-\infty;1)$
- **c)** $(1;\infty)$
- **d)** $(0;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(0;1)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>0$.

</details>

### `vl-vse-0556` — Vlastní úloha ve stylu přijímaček VŠE (č. 556)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{3}{5}}x<0$, je:

- **a)** $(0;\infty)$
- **b)** $(0;1)$
- **c)** $(-1;1)$
- **d)** $(-\infty;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>0$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0560` — Vlastní úloha ve stylu přijímaček VŠE (č. 560)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{2}{3}}(x+2)<0$, je:

- **a)** $(-2;-1)$
- **b)** $(-2;\infty)$
- **c)** $(-\infty;-1)$
- **d)** $(-1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-1;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>-2$.

</details>

### `vl-vse-0591` — Vlastní úloha ve stylu přijímaček VŠE (č. 591)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{5}(x+2)>0$, je:

- **a)** $(-2;-1)$
- **b)** $(-\infty;-1)$
- **c)** $(-3;-1)$
- **d)** $(-2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>-2$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0641` — Vlastní úloha ve stylu přijímaček VŠE (č. 641)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{3}(x-3)<0$, je:

- **a)** $(4;\infty)$
- **b)** $(3;\infty)$
- **c)** $(3;4)$
- **d)** $(-\infty;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(3;4)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>3$.

</details>

### `vl-vse-0657` — Vlastní úloha ve stylu přijímaček VŠE (č. 657)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{1}{2}}(x-3)<0$, je:

- **a)** $(3;4)$
- **b)** $(3;\infty)$
- **c)** $(4;\infty)$
- **d)** $(-\infty;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(4;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>3$.

</details>

### `vl-vse-0685` — Vlastní úloha ve stylu přijímaček VŠE (č. 685)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{3}x>0$, je:

- **a)** $(0;1)$
- **b)** $(0;\infty)$
- **c)** $(1;\infty)$
- **d)** $(-\infty;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(1;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>0$.

</details>

### `vl-vse-0842` — Vlastní úloha ve stylu přijímaček VŠE (č. 842)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{3}{5}}(x-3)>0$, je:

- **a)** $(3;\infty)$
- **b)** $(-\infty;4)$
- **c)** $(4;\infty)$
- **d)** $(3;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(3;4)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>3$.

</details>

### `vl-vse-0855` — Vlastní úloha ve stylu přijímaček VŠE (č. 855)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{3}{5}}(x-2)<0$, je:

- **a)** $(-\infty;3)$
- **b)** $(3;\infty)$
- **c)** $(2;3)$
- **d)** $(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(3;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>2$.

</details>

### `vl-vse-0874` — Vlastní úloha ve stylu přijímaček VŠE (č. 874)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{2}(x+2)<0$, je:

- **a)** $(-2;-1)$
- **b)** $(-2;\infty)$
- **c)** $(-\infty;-1)$
- **d)** $(-1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-2;-1)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>-2$.

</details>

### `vl-vse-0890` — Vlastní úloha ve stylu přijímaček VŠE (č. 890)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{2}(x-2)<0$, je:

- **a)** $(1;3)$
- **b)** $(3;\infty)$
- **c)** $(-\infty;3)$
- **d)** $(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>2$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0969` — Vlastní úloha ve stylu přijímaček VŠE (č. 969)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{5}(x-2)<0$, je:

- **a)** $(2;\infty)$
- **b)** $(3;\infty)$
- **c)** $(2;3)$
- **d)** $(-\infty;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(2;3)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>2$.

</details>

### `vl-vse-1001` — Vlastní úloha ve stylu přijímaček VŠE (č. 1001)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{2}{3}}(x+2)>0$, je:

- **a)** $(-2;-1)$
- **b)** $(-\infty;-1)$
- **c)** $(-2;\infty)$
- **d)** $(-1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-2;-1)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>-2$.

</details>

### `vl-vse-1012` — Vlastní úloha ve stylu přijímaček VŠE (č. 1012)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{2}(x-1)<0$, je:

- **a)** $(1;2)$
- **b)** $(-\infty;2)$
- **c)** $(2;\infty)$
- **d)** $(1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(1;2)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>1$.

</details>

### `vl-vse-1026` — Vlastní úloha ve stylu přijímaček VŠE (č. 1026)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{2}x<0$, je:

- **a)** $(0;1)$
- **b)** $(1;\infty)$
- **c)** $(-\infty;1)$
- **d)** $(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(0;1)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>0$.

</details>

### `vl-vse-1073` — Vlastní úloha ve stylu přijímaček VŠE (č. 1073)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{5}(x+1)>0$, je:

- **a)** $(-1;0)$
- **b)** $(-2;0)$
- **c)** $(-\infty;0)$
- **d)** $(-1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>-1$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1114` — Vlastní úloha ve stylu přijímaček VŠE (č. 1114)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{5}(x-1)>0$, je:

- **a)** $(1;\infty)$
- **b)** $(1;2)$
- **c)** $(-\infty;2)$
- **d)** $(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(2;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>1$.

</details>

### `vl-vse-1151` — Vlastní úloha ve stylu přijímaček VŠE (č. 1151)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{5}(x+2)<0$, je:

- **a)** $(-2;\infty)$
- **b)** $(-1;\infty)$
- **c)** $(-\infty;-1)$
- **d)** $(-2;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-2;-1)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>-2$.

</details>

### `vl-vse-1178` — Vlastní úloha ve stylu přijímaček VŠE (č. 1178)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{3}(x-1)<0$, je:

- **a)** $(2;\infty)$
- **b)** $(1;\infty)$
- **c)** $(1;2)$
- **d)** $(-\infty;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(1;2)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>1$.

</details>

### `vl-vse-1207` — Vlastní úloha ve stylu přijímaček VŠE (č. 1207)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac{1}{2}}x<0$, je:

- **a)** $(-\infty;1)$
- **b)** $(0;\infty)$
- **c)** $(1;\infty)$
- **d)** $(0;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(1;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ menší než 1); navíc $x>0$.

</details>

### `vl-vse-1244` — Vlastní úloha ve stylu přijímaček VŠE (č. 1244)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{2}(x-3)>0$, je:

- **a)** $(-\infty;4)$
- **b)** $(4;\infty)$
- **c)** $(3;4)$
- **d)** $(3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(4;\infty)$. Logaritmus je kladný/záporný podle toho, zda je argument větší/menší než 1, a podle monotonie (základ větší než 1); navíc $x>3$.

</details>

### `vl-vse-0023` — Vlastní úloha ve stylu přijímaček VŠE (č. 23)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{5}}{5}$, pak výraz $\cos2x$ je roven číslu:

- **a)** $\dfrac{4}{5}$
- **b)** $\dfrac{3}{5}$
- **c)** $- \dfrac{8}{5}$
- **d)** $- \dfrac{3}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{3}{5}$. Stačí $\sin^2x=\dfrac{1}{5}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-obec-035` — Vlastní úloha ve stylu přijímacích testů (č. 35)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{6}}{3}$, pak výraz $\sin^2x-\cos^2x$ je roven číslu:

- **a)** $- \dfrac{1}{3}$
- **b)** $\dfrac{1}{3}$
- **c)** $\dfrac{2}{3}$
- **d)** $- \dfrac{2}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{1}{3}$. Stačí $\sin^2x=\dfrac{2}{3}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-obec-055` — Vlastní úloha ve stylu přijímacích testů (č. 55)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaká je nejmenší perioda funkce $y=3\sin\left(2x-\frac\pi3\right)$?

- **a)** $\dfrac\pi2$
- **b)** $\pi$
- **c)** $2\pi$
- **d)** $\dfrac{2\pi}3$
- **e)** $6\pi$

<details><summary>Ответ и решение</summary>

**b** — $\pi$. $\frac{2\pi}2$.

</details>

### `vl-vse-0069` — Vlastní úloha ve stylu přijímaček VŠE (č. 69)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{14}}{7}$, pak výraz $1-\cos2x$ je roven číslu:

- **a)** $- \dfrac{10}{7}$
- **b)** $\dfrac{5}{7}$
- **c)** $- \dfrac{4}{7}$
- **d)** $\dfrac{4}{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{4}{7}$. Stačí $\sin^2x=\dfrac{2}{7}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0083` — Vlastní úloha ve stylu přijímaček VŠE (č. 83)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{6}}{3}$, pak výraz $\cos2x$ je roven číslu:

- **a)** $\dfrac{1}{3}$
- **b)** $- \dfrac{1}{3}$
- **c)** $- \dfrac{2}{3}$
- **d)** $\dfrac{2}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $- \dfrac{1}{3}$. Stačí $\sin^2x=\dfrac{2}{3}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0162` — Vlastní úloha ve stylu přijímaček VŠE (č. 162)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{19}{6}\pi\right)-\cos\left(- \dfrac{8}{3}\pi\right)$ je rovno:

- **a)** $1$
- **b)** $-1$
- **c)** $0$
- **d)** $\sqrt{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-0183` — Vlastní úloha ve stylu přijímaček VŠE (č. 183)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(- \dfrac{11}{6}\pi\right)-\cos\left(- \dfrac{5}{3}\pi\right)$ je rovno:

- **a)** $0$
- **b)** $1$
- **c)** $\sqrt{3}$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $0$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-nsz-209` — [Vlastní úloha ve stylu NSZ Matematika (č. 209)](https://www.scio.cz/matematika)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $y=\operatorname{tg}x\cdot\cos2x$ je:

- **a)** $\mathbb R\setminus\left\{\frac\pi2+k\pi;\ k\in\mathbb Z\right\}$
- **b)** $\mathbb R\setminus\{k\pi;\ k\in\mathbb Z\}$
- **c)** $\mathbb R\setminus\left\{\frac\pi4+\frac{k\pi}2;\ k\in\mathbb Z\right\}$
- **d)** $\mathbb R\setminus\left\{\frac{k\pi}2;\ k\in\mathbb Z\right\}$

<details><summary>Ответ и решение</summary>

**a** — $\mathbb R\setminus\left\{\frac\pi2+k\pi;\ k\in\mathbb Z\right\}$. Omezuje jen tangens: $\cos x\ne0$.

</details>

### `vl-vse-0226` — Vlastní úloha ve stylu přijímaček VŠE (č. 226)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{25}{6}\pi\right)-\cos\left(\dfrac{13}{3}\pi\right)$ je rovno:

- **a)** $1$
- **b)** $0$
- **c)** $-1$
- **d)** $\sqrt{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-0261` — Vlastní úloha ve stylu přijímaček VŠE (č. 261)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(- \dfrac{13}{6}\pi\right)-\cos\left(- \dfrac{8}{3}\pi\right)$ je rovno:

- **a)** $\sqrt{3}$
- **b)** $1$
- **c)** $0$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-0336` — Vlastní úloha ve stylu přijímaček VŠE (č. 336)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{19}{6}\pi\right)-\cos\left(\dfrac{13}{3}\pi\right)$ je rovno:

- **a)** $1$
- **b)** $-1$
- **c)** $0$
- **d)** $\sqrt{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-1$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-0368` — Vlastní úloha ve stylu přijímaček VŠE (č. 368)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{2 \sqrt{5}}{5}$, pak výraz $\sin^2x-\cos^2x$ je roven číslu:

- **a)** $- \dfrac{2}{5}$
- **b)** $- \dfrac{3}{5}$
- **c)** $\dfrac{3}{5}$
- **d)** $\dfrac{1}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{3}{5}$. Stačí $\sin^2x=\dfrac{4}{5}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0380` — Vlastní úloha ve stylu přijímaček VŠE (č. 380)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{6}}{3}$, pak výraz $\sin^2x-\cos^2x$ je roven číslu:

- **a)** $\dfrac{2}{3}$
- **b)** $- \dfrac{1}{3}$
- **c)** $\dfrac{1}{3}$
- **d)** $- \dfrac{2}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{1}{3}$. Stačí $\sin^2x=\dfrac{2}{3}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0424` — Vlastní úloha ve stylu přijímaček VŠE (č. 424)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{30}}{6}$, pak výraz $\cos2x$ je roven číslu:

- **a)** $\dfrac{2}{3}$
- **b)** $- \dfrac{2}{3}$
- **c)** $- \dfrac{1}{3}$
- **d)** $\dfrac{1}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $- \dfrac{2}{3}$. Stačí $\sin^2x=\dfrac{5}{6}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0427` — Vlastní úloha ve stylu přijímaček VŠE (č. 427)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{6}}{6}$, pak výraz $\cos2x$ je roven číslu:

- **a)** $\dfrac{5}{6}$
- **b)** $- \dfrac{2}{3}$
- **c)** $- \dfrac{5}{3}$
- **d)** $\dfrac{1}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Stačí $\sin^2x=\dfrac{1}{6}$ a $\cos2x=1-2\sin^2x$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0469` — Vlastní úloha ve stylu přijímaček VŠE (č. 469)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{25}{6}\pi\right)-\cos\left(\dfrac{10}{3}\pi\right)$ je rovno:

- **a)** $-1$
- **b)** $- \sqrt{3}$
- **c)** $\sqrt{3}$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0510` — Vlastní úloha ve stylu přijímaček VŠE (č. 510)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{25}{6}\pi\right)-\cos\left(- \dfrac{5}{3}\pi\right)$ je rovno:

- **a)** $-1$
- **b)** $\sqrt{3}$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-0529` — Vlastní úloha ve stylu přijímaček VŠE (č. 529)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{6}}{6}$, pak výraz $\sin^2x-\cos^2x$ je roven číslu:

- **a)** $- \dfrac{2}{3}$
- **b)** $\dfrac{5}{6}$
- **c)** $- \dfrac{5}{3}$
- **d)** $\dfrac{2}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $- \dfrac{2}{3}$. Stačí $\sin^2x=\dfrac{1}{6}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0541` — Vlastní úloha ve stylu přijímaček VŠE (č. 541)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{5}}{5}$, pak výraz $1-\cos2x$ je roven číslu:

- **a)** $\dfrac{4}{5}$
- **b)** $- \dfrac{8}{5}$
- **c)** $- \dfrac{2}{5}$
- **d)** $\dfrac{2}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{2}{5}$. Stačí $\sin^2x=\dfrac{1}{5}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0626` — Vlastní úloha ve stylu přijímaček VŠE (č. 626)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{3}}{3}$, pak výraz $\sin^2x-\cos^2x$ je roven číslu:

- **a)** $\dfrac{2}{3}$
- **b)** $- \dfrac{1}{3}$
- **c)** $- \dfrac{4}{3}$
- **d)** $\dfrac{1}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $- \dfrac{1}{3}$. Stačí $\sin^2x=\dfrac{1}{3}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0663` — Vlastní úloha ve stylu přijímaček VŠE (č. 663)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{23}{6}\pi\right)-\cos\left(\dfrac{10}{3}\pi\right)$ je rovno:

- **a)** $1$
- **b)** $0$
- **c)** $\sqrt{3}$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-0798` — Vlastní úloha ve stylu přijímaček VŠE (č. 798)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{3}}{3}$, pak výraz $1-\cos2x$ je roven číslu:

- **a)** $- \dfrac{2}{3}$
- **b)** $\dfrac{2}{3}$
- **c)** $\dfrac{1}{3}$
- **d)** $- \dfrac{4}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{2}{3}$. Stačí $\sin^2x=\dfrac{1}{3}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0826` — Vlastní úloha ve stylu přijímaček VŠE (č. 826)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{3}}{2}$, pak výraz $1-\cos2x$ je roven číslu:

- **a)** $\dfrac{3}{2}$
- **b)** $- \dfrac{1}{2}$
- **c)** $- \dfrac{3}{2}$
- **d)** $\dfrac{1}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{3}{2}$. Stačí $\sin^2x=\dfrac{3}{4}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0829` — Vlastní úloha ve stylu přijímaček VŠE (č. 829)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{25}{6}\pi\right)-\cos\left(\dfrac{7}{3}\pi\right)$ je rovno:

- **a)** $-1$
- **b)** $0$
- **c)** $1$
- **d)** $\sqrt{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-0836` — Vlastní úloha ve stylu přijímaček VŠE (č. 836)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{6}}{3}$, pak výraz $1-\cos2x$ je roven číslu:

- **a)** $- \dfrac{2}{3}$
- **b)** $\dfrac{4}{3}$
- **c)** $- \dfrac{4}{3}$
- **d)** $\dfrac{1}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{4}{3}$. Stačí $\sin^2x=\dfrac{2}{3}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0859` — Vlastní úloha ve stylu přijímaček VŠE (č. 859)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{1}{2}$, pak výraz $1-\cos2x$ je roven číslu:

- **a)** $\dfrac{3}{4}$
- **b)** $\dfrac{1}{2}$
- **c)** $- \dfrac{3}{2}$
- **d)** $- \dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{1}{2}$. Stačí $\sin^2x=\dfrac{1}{4}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0904` — Vlastní úloha ve stylu přijímaček VŠE (č. 904)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{1}{2}$, pak výraz $\cos2x$ je roven číslu:

- **a)** $\dfrac{3}{4}$
- **b)** $\dfrac{1}{2}$
- **c)** $- \dfrac{3}{2}$
- **d)** $- \dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{1}{2}$. Stačí $\sin^2x=\dfrac{1}{4}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0909` — Vlastní úloha ve stylu přijímaček VŠE (č. 909)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(- \dfrac{13}{6}\pi\right)-\cos\left(- \dfrac{5}{3}\pi\right)$ je rovno:

- **a)** $-1$
- **b)** $1$
- **c)** $0$
- **d)** $\sqrt{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-1$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-0941` — Vlastní úloha ve stylu přijímaček VŠE (č. 941)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{6}}{4}$, pak výraz $\cos2x$ je roven číslu:

- **a)** $- \dfrac{5}{4}$
- **b)** $- \dfrac{1}{4}$
- **c)** $\dfrac{1}{4}$
- **d)** $\dfrac{5}{8}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{1}{4}$. Stačí $\sin^2x=\dfrac{3}{8}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-0960` — Vlastní úloha ve stylu přijímaček VŠE (č. 960)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{13}{6}\pi\right)-\cos\left(- \dfrac{8}{3}\pi\right)$ je rovno:

- **a)** $\sqrt{3}$
- **b)** $-1$
- **c)** $- \sqrt{3}$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0974` — Vlastní úloha ve stylu přijímaček VŠE (č. 974)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{17}{6}\pi\right)-\cos\left(- \dfrac{8}{3}\pi\right)$ je rovno:

- **a)** $0$
- **b)** $\sqrt{3}$
- **c)** $-1$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-0976` — Vlastní úloha ve stylu přijímaček VŠE (č. 976)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(- \dfrac{13}{6}\pi\right)-\cos\left(\dfrac{10}{3}\pi\right)$ je rovno:

- **a)** $1$
- **b)** $-1$
- **c)** $0$
- **d)** $\sqrt{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-0978` — Vlastní úloha ve stylu přijímaček VŠE (č. 978)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{19}{6}\pi\right)-\cos\left(- \dfrac{5}{3}\pi\right)$ je rovno:

- **a)** $1$
- **b)** $\sqrt{3}$
- **c)** $0$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-1$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-1016` — Vlastní úloha ve stylu přijímaček VŠE (č. 1016)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(- \dfrac{11}{6}\pi\right)-\cos\left(\dfrac{7}{3}\pi\right)$ je rovno:

- **a)** $1$
- **b)** $\sqrt{3}$
- **c)** $0$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-1019` — Vlastní úloha ve stylu přijímaček VŠE (č. 1019)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{30}}{6}$, pak výraz $\sin^2x-\cos^2x$ je roven číslu:

- **a)** $- \dfrac{1}{3}$
- **b)** $- \dfrac{2}{3}$
- **c)** $\dfrac{2}{3}$
- **d)** $\dfrac{1}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{2}{3}$. Stačí $\sin^2x=\dfrac{5}{6}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-1027` — Vlastní úloha ve stylu přijímaček VŠE (č. 1027)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{17}{6}\pi\right)-\cos\left(\dfrac{11}{3}\pi\right)$ je rovno:

- **a)** $- \sqrt{3}$
- **b)** $-1$
- **c)** $\sqrt{3}$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1030` — Vlastní úloha ve stylu přijímaček VŠE (č. 1030)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{2 \sqrt{5}}{5}$, pak výraz $\cos2x$ je roven číslu:

- **a)** $- \dfrac{3}{5}$
- **b)** $\dfrac{3}{5}$
- **c)** $- \dfrac{2}{5}$
- **d)** $\dfrac{1}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $- \dfrac{3}{5}$. Stačí $\sin^2x=\dfrac{4}{5}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-1124` — Vlastní úloha ve stylu přijímaček VŠE (č. 1124)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li $\sin x=- \frac{\sqrt{10}}{5}$, pak výraz $\cos2x$ je roven číslu:

- **a)** $\dfrac{3}{5}$
- **b)** $\dfrac{1}{5}$
- **c)** $- \dfrac{6}{5}$
- **d)** $- \dfrac{1}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{1}{5}$. Stačí $\sin^2x=\dfrac{2}{5}$ a $\cos2x=1-2\sin^2x$.

</details>

### `vl-vse-1138` — Vlastní úloha ve stylu přijímaček VŠE (č. 1138)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{17}{6}\pi\right)-\cos\left(- \dfrac{5}{3}\pi\right)$ je rovno:

- **a)** $-1$
- **b)** $1$
- **c)** $\sqrt{3}$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-1181` — Vlastní úloha ve stylu přijímaček VŠE (č. 1181)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(\dfrac{23}{6}\pi\right)-\cos\left(\dfrac{13}{3}\pi\right)$ je rovno:

- **a)** $0$
- **b)** $\sqrt{3}$
- **c)** $-1$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $-1$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vl-vse-1191` — Vlastní úloha ve stylu přijímaček VŠE (č. 1191)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\cos\left(-\frac{17\pi}3\right)-\sin\left(-\frac{11\pi}6\right)$ se rovná číslu:

- **a)** $0$
- **b)** $1$
- **c)** $-1$
- **d)** $\sqrt3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $0$. $-\frac{17\pi}3=-6\pi+\frac\pi3$, $\cos=\frac12$; $-\frac{11\pi}6=-2\pi+\frac\pi6$, $\sin=\frac12$.

</details>

### `vl-vse-1247` — Vlastní úloha ve stylu přijímaček VŠE (č. 1247)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\sin\left(- \dfrac{11}{6}\pi\right)-\cos\left(\dfrac{10}{3}\pi\right)$ je rovno:

- **a)** $1$
- **b)** $0$
- **c)** $\sqrt{3}$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $1$. Odečteme celé násobky periody $2\pi$ a použijeme hodnoty v základních úhlech.

</details>

### `vse-b-06` — [VŠE, vzor přijímacích zkoušek B (úloha 6)](https://vse.cz/wp-content/uploads/page/2128/test-B.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Určete součet všech $x\in\left\langle-\frac\pi2;\frac{3\pi}2\right\rangle$, pro která platí $\cos x=0{,}5$.

- **a)** $-\frac\pi3$
- **b)** $0$
- **c)** $\frac\pi3$
- **d)** $2\pi$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $0$. V daném intervalu $x=-\frac\pi3$ a $x=\frac\pi3$ ($\frac{5\pi}3>\frac{3\pi}2$); součet $0$.

</details>

### `vl-vse-0034` — Vlastní úloha ve stylu přijímaček VŠE (č. 34)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\sin x=\dfrac{2}{9}$, je:

- **a)** $3$
- **b)** $1$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0041` — Vlastní úloha ve stylu přijímaček VŠE (č. 41)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\sin x=- \dfrac{5}{6}$, je:

- **a)** $0$
- **b)** $2$
- **c)** $3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0093` — Vlastní úloha ve stylu přijímaček VŠE (č. 93)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\cos x=\dfrac{1}{3}$, je:

- **a)** $2$
- **b)** $3$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0113` — Vlastní úloha ve stylu přijímaček VŠE (č. 113)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\cos x=- \dfrac{4}{5}$, je:

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0122` — Vlastní úloha ve stylu přijímaček VŠE (č. 122)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\sin x=\dfrac{5}{6}$, je:

- **a)** $0$
- **b)** $3$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0129` — Vlastní úloha ve stylu přijímaček VŠE (č. 129)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{\pi}{2})$, pro která platí $\cos x=\dfrac{3}{2}$, je:

- **a)** $1$
- **b)** $2$
- **c)** $0$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-0137` — Vlastní úloha ve stylu přijímaček VŠE (č. 137)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\sin x=- \dfrac{2}{7}$, je:

- **a)** $2$
- **b)** $1$
- **c)** $0$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0161` — Vlastní úloha ve stylu přijímaček VŠE (č. 161)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\cos x=\dfrac{1}{3}$, je:

- **a)** $3$
- **b)** $0$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0203` — Vlastní úloha ve stylu přijímaček VŠE (č. 203)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\sin x=- \dfrac{2}{7}$, je:

- **a)** $1$
- **b)** $3$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0213` — Vlastní úloha ve stylu přijímaček VŠE (č. 213)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\cos x=\dfrac{1}{3}$, je:

- **a)** $4$
- **b)** $3$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rozhodne graf funkce na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0241` — Vlastní úloha ve stylu přijímaček VŠE (č. 241)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\cos x=\dfrac{2}{7}$, je:

- **a)** $2$
- **b)** $0$
- **c)** $3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0247` — Vlastní úloha ve stylu přijímaček VŠE (č. 247)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\cos x=- \dfrac{5}{4}$, je:

- **a)** $3$
- **b)** $0$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-0259` — Vlastní úloha ve stylu přijímaček VŠE (č. 259)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\sin x=- \dfrac{2}{7}$, je:

- **a)** $2$
- **b)** $3$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0291` — Vlastní úloha ve stylu přijímaček VŠE (č. 291)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech kořenů rovnice $\cos\left(x-\frac\pi4\right)=\frac\pi3$ v intervalu $(0;2\pi\rangle$ je roven číslu:

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $0$. $\frac\pi3>1$, kosinus takové hodnoty nenabývá.

</details>

### `vl-vse-0297` — Vlastní úloha ve stylu přijímaček VŠE (č. 297)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\cos x=\dfrac{2}{9}$, je:

- **a)** $2$
- **b)** $1$
- **c)** $3$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $3$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0308` — Vlastní úloha ve stylu přijímaček VŠE (č. 308)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\sin x=\dfrac{1}{3}$, je:

- **a)** $3$
- **b)** $0$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0348` — Vlastní úloha ve stylu přijímaček VŠE (č. 348)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sin x=- \dfrac{4}{5}$, je:

- **a)** $1$
- **b)** $0$
- **c)** $3$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0356` — Vlastní úloha ve stylu přijímaček VŠE (č. 356)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\cos x=\dfrac{2}{9}$, je:

- **a)** $3$
- **b)** $1$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0405` — Vlastní úloha ve stylu přijímaček VŠE (č. 405)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\cos x=\dfrac{4}{5}$, je:

- **a)** $3$
- **b)** $0$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0419` — Vlastní úloha ve stylu přijímaček VŠE (č. 419)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\cos x=- \dfrac{4}{5}$, je:

- **a)** $2$
- **b)** $0$
- **c)** $1$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $3$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0445` — Vlastní úloha ve stylu přijímaček VŠE (č. 445)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\cos x=\dfrac{1}{3}$, je:

- **a)** $2$
- **b)** $1$
- **c)** $3$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0448` — Vlastní úloha ve stylu přijímaček VŠE (č. 448)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\cos x=\dfrac{9}{7}$, je:

- **a)** $2$
- **b)** $0$
- **c)** $3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-0456` — Vlastní úloha ve stylu přijímaček VŠE (č. 456)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\cos x=\dfrac{9}{7}$, je:

- **a)** $2$
- **b)** $3$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-0493` — Vlastní úloha ve stylu přijímaček VŠE (č. 493)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{\pi}{2})$, pro která platí $\cos x=- \dfrac{4}{5}$, je:

- **a)** $1$
- **b)** $2$
- **c)** $3$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0503` — Vlastní úloha ve stylu přijímaček VŠE (č. 503)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{\pi}{2})$, pro která platí $\sin x=- \dfrac{1}{3}$, je:

- **a)** $3$
- **b)** $2$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0562` — Vlastní úloha ve stylu přijímaček VŠE (č. 562)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sin x=\dfrac{4}{5}$, je:

- **a)** $3$
- **b)** $1$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0563` — Vlastní úloha ve stylu přijímaček VŠE (č. 563)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{\pi}{2})$, pro která platí $\cos x=\dfrac{2}{9}$, je:

- **a)** $1$
- **b)** $0$
- **c)** $3$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0575` — Vlastní úloha ve stylu přijímaček VŠE (č. 575)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\sin x=- \dfrac{5}{4}$, je:

- **a)** $3$
- **b)** $1$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-0579` — Vlastní úloha ve stylu přijímaček VŠE (č. 579)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{\pi}{2})$, pro která platí $\cos x=- \dfrac{2}{7}$, je:

- **a)** $0$
- **b)** $2$
- **c)** $1$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $0$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0620` — Vlastní úloha ve stylu přijímaček VŠE (č. 620)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\sin x=\dfrac{9}{7}$, je:

- **a)** $1$
- **b)** $2$
- **c)** $0$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-0631` — Vlastní úloha ve stylu přijímaček VŠE (č. 631)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{\pi}{2})$, pro která platí $\sin x=\dfrac{3}{5}$, je:

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0667` — Vlastní úloha ve stylu přijímaček VŠE (č. 667)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\cos x=\dfrac{9}{7}$, je:

- **a)** $0$
- **b)** $3$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-0669` — Vlastní úloha ve stylu přijímaček VŠE (č. 669)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\cos x=- \dfrac{1}{3}$, je:

- **a)** $0$
- **b)** $4$
- **c)** $3$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rozhodne graf funkce na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0680` — Vlastní úloha ve stylu přijímaček VŠE (č. 680)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\cos x=\dfrac{2}{9}$, je:

- **a)** $2$
- **b)** $1$
- **c)** $0$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0684` — Vlastní úloha ve stylu přijímaček VŠE (č. 684)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\sin x=\dfrac{4}{5}$, je:

- **a)** $3$
- **b)** $0$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0718` — Vlastní úloha ve stylu přijímaček VŠE (č. 718)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{\pi}{2})$, pro která platí $\cos x=- \dfrac{1}{3}$, je:

- **a)** $2$
- **b)** $1$
- **c)** $3$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0725` — Vlastní úloha ve stylu přijímaček VŠE (č. 725)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\cos x=- \dfrac{1}{3}$, je:

- **a)** $3$
- **b)** $2$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0727` — Vlastní úloha ve stylu přijímaček VŠE (č. 727)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\cos x=\dfrac{3}{5}$, je:

- **a)** $1$
- **b)** $0$
- **c)** $3$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0739` — Vlastní úloha ve stylu přijímaček VŠE (č. 739)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\sin x=- \dfrac{4}{5}$, je:

- **a)** $0$
- **b)** $2$
- **c)** $1$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0740` — Vlastní úloha ve stylu přijímaček VŠE (č. 740)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sin x=\dfrac{2}{7}$, je:

- **a)** $2$
- **b)** $3$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0742` — Vlastní úloha ve stylu přijímaček VŠE (č. 742)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};2 \pi)$, pro která platí $\sin x=\dfrac{5}{6}$, je:

- **a)** $1$
- **b)** $0$
- **c)** $2$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0748` — Vlastní úloha ve stylu přijímaček VŠE (č. 748)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\sin x=\dfrac{4}{5}$, je:

- **a)** $0$
- **b)** $1$
- **c)** $4$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $4$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0751` — Vlastní úloha ve stylu přijímaček VŠE (č. 751)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\sin x=- \dfrac{7}{8}$, je:

- **a)** $2$
- **b)** $3$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0762` — Vlastní úloha ve stylu přijímaček VŠE (č. 762)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\sin x=\dfrac{4}{5}$, je:

- **a)** $2$
- **b)** $0$
- **c)** $3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0788` — Vlastní úloha ve stylu přijímaček VŠE (č. 788)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\sin x=- \dfrac{3}{5}$, je:

- **a)** $1$
- **b)** $0$
- **c)** $3$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0846` — Vlastní úloha ve stylu přijímaček VŠE (č. 846)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\sin x=- \dfrac{7}{8}$, je:

- **a)** $3$
- **b)** $0$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0853` — Vlastní úloha ve stylu přijímaček VŠE (č. 853)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\cos x=\dfrac{2}{7}$, je:

- **a)** $0$
- **b)** $2$
- **c)** $1$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0856` — Vlastní úloha ve stylu přijímaček VŠE (č. 856)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};2 \pi)$, pro která platí $\sin x=- \dfrac{1}{3}$, je:

- **a)** $3$
- **b)** $1$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0878` — Vlastní úloha ve stylu přijímaček VŠE (č. 878)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\cos x=\dfrac{3}{2}$, je:

- **a)** $2$
- **b)** $1$
- **c)** $0$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-0897` — Vlastní úloha ve stylu přijímaček VŠE (č. 897)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};2 \pi)$, pro která platí $\sin x=- \dfrac{4}{5}$, je:

- **a)** $2$
- **b)** $1$
- **c)** $3$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0906` — Vlastní úloha ve stylu přijímaček VŠE (č. 906)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\cos x=- \dfrac{2}{7}$, je:

- **a)** $0$
- **b)** $3$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0910` — Vlastní úloha ve stylu přijímaček VŠE (č. 910)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\sin x=\dfrac{3}{2}$, je:

- **a)** $1$
- **b)** $4$
- **c)** $3$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0936` — Vlastní úloha ve stylu přijímaček VŠE (č. 936)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\cos x=\dfrac{4}{5}$, je:

- **a)** $0$
- **b)** $3$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0940` — Vlastní úloha ve stylu přijímaček VŠE (č. 940)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\cos x=\dfrac{4}{5}$, je:

- **a)** $1$
- **b)** $2$
- **c)** $0$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0948` — Vlastní úloha ve stylu přijímaček VŠE (č. 948)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{\pi}{2})$, pro která platí $\sin x=- \dfrac{5}{6}$, je:

- **a)** $2$
- **b)** $1$
- **c)** $0$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0952` — Vlastní úloha ve stylu přijímaček VŠE (č. 952)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\cos x=- \dfrac{7}{8}$, je:

- **a)** $1$
- **b)** $2$
- **c)** $0$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-0982` — Vlastní úloha ve stylu přijímaček VŠE (č. 982)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sin x=\dfrac{2}{9}$, je:

- **a)** $0$
- **b)** $1$
- **c)** $4$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rozhodne graf funkce na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0985` — Vlastní úloha ve stylu přijímaček VŠE (č. 985)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sin x=\dfrac{9}{7}$, je:

- **a)** $1$
- **b)** $0$
- **c)** $2$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-0987` — Vlastní úloha ve stylu přijímaček VŠE (č. 987)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};2 \pi)$, pro která platí $\sin x=\dfrac{4}{5}$, je:

- **a)** $3$
- **b)** $1$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-1000` — Vlastní úloha ve stylu přijímaček VŠE (č. 1000)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{\pi}{2})$, pro která platí $\sin x=- \dfrac{2}{7}$, je:

- **a)** $2$
- **b)** $3$
- **c)** $0$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rozhodne graf funkce na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1013` — Vlastní úloha ve stylu přijímaček VŠE (č. 1013)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\cos x=\dfrac{9}{7}$, je:

- **a)** $1$
- **b)** $3$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-1014` — Vlastní úloha ve stylu přijímaček VŠE (č. 1014)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\sin x=\dfrac{1}{3}$, je:

- **a)** $2$
- **b)** $0$
- **c)** $1$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-1021` — Vlastní úloha ve stylu přijímaček VŠE (č. 1021)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\cos x=\dfrac{5}{6}$, je:

- **a)** $1$
- **b)** $0$
- **c)** $2$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rozhodne graf funkce na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1025` — Vlastní úloha ve stylu přijímaček VŠE (č. 1025)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\cos x=- \dfrac{4}{5}$, je:

- **a)** $2$
- **b)** $1$
- **c)** $0$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-1034` — Vlastní úloha ve stylu přijímaček VŠE (č. 1034)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};2 \pi)$, pro která platí $\cos x=\dfrac{9}{7}$, je:

- **a)** $2$
- **b)** $0$
- **c)** $3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-1036` — Vlastní úloha ve stylu přijímaček VŠE (č. 1036)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sin x=\dfrac{3}{2}$, je:

- **a)** $3$
- **b)** $2$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-1051` — Vlastní úloha ve stylu přijímaček VŠE (č. 1051)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\cos x=\dfrac{4}{5}$, je:

- **a)** $3$
- **b)** $4$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rozhodne graf funkce na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1054` — Vlastní úloha ve stylu přijímaček VŠE (č. 1054)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\sin x=- \dfrac{5}{4}$, je:

- **a)** $3$
- **b)** $2$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-1062` — Vlastní úloha ve stylu přijímaček VŠE (č. 1062)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\sin x=\dfrac{4}{5}$, je:

- **a)** $3$
- **b)** $0$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-1103` — Vlastní úloha ve stylu přijímaček VŠE (č. 1103)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};2 \pi)$, pro která platí $\cos x=\dfrac{2}{9}$, je:

- **a)** $3$
- **b)** $0$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-1149` — Vlastní úloha ve stylu přijímaček VŠE (č. 1149)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\cos x=\dfrac{9}{7}$, je:

- **a)** $1$
- **b)** $0$
- **c)** $3$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-1152` — Vlastní úloha ve stylu přijímaček VŠE (č. 1152)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\cos x=- \dfrac{1}{3}$, je:

- **a)** $0$
- **b)** $2$
- **c)** $3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-1161` — Vlastní úloha ve stylu přijímaček VŠE (č. 1161)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\cos x=\dfrac{2}{9}$, je:

- **a)** $1$
- **b)** $3$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $2$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-vse-1200` — Vlastní úloha ve stylu přijímaček VŠE (č. 1200)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\cos x=\dfrac{3}{2}$, je:

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $0$. Rozhodne graf funkce na daném intervalu — hodnota je mimo obor hodnot.

</details>

### `vl-vse-1214` — Vlastní úloha ve stylu přijímaček VŠE (č. 1214)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\cos x=- \dfrac{5}{6}$, je:

- **a)** $0$
- **b)** $2$
- **c)** $1$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Rozhodne graf funkce na daném intervalu.

</details>

### `vl-obec-006` — Vlastní úloha ve stylu přijímacích testů (č. 6)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\overline{z}$ komplexně sdružené k $z=(1+i)^2$ je:

- **a)** $-2i$
- **b)** $2i$
- **c)** $2$
- **d)** $-2$
- **e)** $1-i$

<details><summary>Ответ и решение</summary>

**a** — $-2i$. $(1+i)^2=2i$.

</details>

### `vl-vse-0019` — Vlastní úloha ve stylu přijímaček VŠE (č. 19)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1+i^{10}-i^{5}+i^{6}$ je rovna číslu:

- **a)** $0$
- **b)** $-2$
- **c)** $1$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-1$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-0026` — Vlastní úloha ve stylu přijímaček VŠE (č. 26)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{3 + 6 i}{1 + 2 i}$ je rovna číslu:

- **a)** $1$
- **b)** $-3$
- **c)** $0$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. $z=3$.

</details>

### `vl-vse-0028` — Vlastní úloha ve stylu přijímaček VŠE (č. 28)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1+i^{9}+i^{13}-i^{3}$ je rovna číslu:

- **a)** $2$
- **b)** $1$
- **c)** $0$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-obec-048` — Vlastní úloha ve stylu přijímacích testů (č. 48)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{-2}{1 - i}$ je rovna číslu:

- **a)** $1$
- **b)** $- i$
- **c)** $0$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-1$. $z=-1 - i$.

</details>

### `vl-vse-0050` — Vlastní úloha ve stylu přijímaček VŠE (č. 50)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1-i^{11}+i^{2}-i^{8}$ je rovna číslu:

- **a)** $1$
- **b)** $-2$
- **c)** $-1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $-1$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-0111` — Vlastní úloha ve stylu přijímaček VŠE (č. 111)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1+i^{5}+i^{4}-i^{7}$ je rovna číslu:

- **a)** $-2$
- **b)** $1$
- **c)** $4$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0135` — Vlastní úloha ve stylu přijímaček VŠE (č. 135)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1+i^{2}-i^{12}-i^{11}$ je rovna číslu:

- **a)** $-1$
- **b)** $1$
- **c)** $0$
- **d)** $-2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-1$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-0170` — Vlastní úloha ve stylu přijímaček VŠE (č. 170)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1+i^{8}+i^{4}+i^{3}$ je rovna číslu:

- **a)** $2$
- **b)** $3$
- **c)** $-3$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-0186` — Vlastní úloha ve stylu přijímaček VŠE (č. 186)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{1 - i}{1 + i}$ je rovna číslu:

- **a)** $-1$
- **b)** $0$
- **c)** $- i$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-1$. $z=- i$.

</details>

### `vl-vse-0204` — Vlastní úloha ve stylu přijímaček VŠE (č. 204)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část komplexního čísla $z=\dfrac{6 i}{1 - i}$ je rovna číslu:

- **a)** $-2$
- **b)** $3$
- **c)** $-3$
- **d)** $- 3 i$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $-3$. $z=-3 + 3 i$.

</details>

### `vl-vse-0208` — Vlastní úloha ve stylu přijímaček VŠE (č. 208)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Absolutní hodnota čísla $z=(2 + 3 i)(3 - i)$ leží v intervalu:

- **a)** $\langle 12;16)$
- **b)** $\langle 8;12)$
- **c)** $\langle 4;8)$
- **d)** $\langle 0;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 8;12)$. $|z|=\sqrt{13}\cdot\sqrt{10}=\sqrt{130}$.

</details>

### `vl-vse-0234` — Vlastní úloha ve stylu přijímaček VŠE (č. 234)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Absolutní hodnota čísla $z=(2 - 2 i)(-2 + 3 i)$ leží v intervalu:

- **a)** $\langle 4;8)$
- **b)** $\langle 8;12)$
- **c)** $\langle 12;16)$
- **d)** $\langle 0;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 8;12)$. $|z|=\sqrt{8}\cdot\sqrt{13}=2 \sqrt{26}$.

</details>

### `vl-vse-0246` — Vlastní úloha ve stylu přijímaček VŠE (č. 246)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1-i^{8}+i^{5}-i^{2}$ je rovna číslu:

- **a)** $0$
- **b)** $1$
- **c)** $-1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-0316` — Vlastní úloha ve stylu přijímaček VŠE (č. 316)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{-4 - 3 i}{2 - i}$ je rovna číslu:

- **a)** $2$
- **b)** $-1$
- **c)** $- 2 i$
- **d)** $-2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-2$. $z=-1 - 2 i$.

</details>

### `vl-vse-0333` — Vlastní úloha ve stylu přijímaček VŠE (č. 333)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část komplexního čísla $z=\dfrac{5 - i}{1 + i}$ je rovna číslu:

- **a)** $3$
- **b)** $2 i$
- **c)** $-2$
- **d)** $-3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $z=2 - 3 i$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0334` — Vlastní úloha ve stylu přijímaček VŠE (č. 334)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{- 6 i}{1 + i}$ je rovna číslu:

- **a)** $-3$
- **b)** $- 3 i$
- **c)** $-2$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-3$. $z=-3 - 3 i$.

</details>

### `vl-vse-0351` — Vlastní úloha ve stylu přijímaček VŠE (č. 351)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{-7 + i}{2 - i}$ je rovna číslu:

- **a)** $- i$
- **b)** $-1$
- **c)** $-3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-1$. $z=-3 - i$.

</details>

### `vl-vse-0365` — Vlastní úloha ve stylu přijímaček VŠE (č. 365)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1+i^{11}-i^{3}-i^{13}$ je rovna číslu:

- **a)** $3$
- **b)** $-1$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0381` — Vlastní úloha ve stylu přijímaček VŠE (č. 381)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1-i^{4}+i^{2}-i^{11}$ je rovna číslu:

- **a)** $1$
- **b)** $0$
- **c)** $-2$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-1$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-0444` — Vlastní úloha ve stylu přijímaček VŠE (č. 444)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $1+i^{5}+i^{8}-i^{12}$ je rovna číslu:

- **a)** $2$
- **b)** $0$
- **c)** $-1$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-0446` — Vlastní úloha ve stylu přijímaček VŠE (č. 446)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Absolutní hodnota čísla $z=(-2 + 3 i)(3 - i)$ leží v intervalu:

- **a)** $\langle 8;12)$
- **b)** $\langle 12;16)$
- **c)** $\langle 4;8)$
- **d)** $\langle 0;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 8;12)$. $|z|=\sqrt{13}\cdot\sqrt{10}=\sqrt{130}$.

</details>

### `vl-vse-0520` — Vlastní úloha ve stylu přijímaček VŠE (č. 520)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část komplexního čísla $z=\dfrac{6 + 3 i}{2 + i}$ je rovna číslu:

- **a)** $-3$
- **b)** $3$
- **c)** $3 i$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3$. $z=3$.

</details>

### `vl-vse-0552` — Vlastní úloha ve stylu přijímaček VŠE (č. 552)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{4 + 3 i}{2 - i}$ je rovna číslu:

- **a)** $2$
- **b)** $-2$
- **c)** $2 i$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. $z=1 + 2 i$.

</details>

### `vl-vse-0571` — Vlastní úloha ve stylu přijímaček VŠE (č. 571)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Absolutní hodnota čísla $z=(3 + i)(-1 + i)$ leží v intervalu:

- **a)** $\langle 8;12)$
- **b)** $\langle 12;16)$
- **c)** $\langle 4;8)$
- **d)** $\langle 0;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 4;8)$. $|z|=\sqrt{10}\cdot\sqrt{2}=2 \sqrt{5}$.

</details>

### `vl-vse-0598` — Vlastní úloha ve stylu přijímaček VŠE (č. 598)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Absolutní hodnota čísla $z=(-2 + 3 i)(2 + 2 i)$ leží v intervalu:

- **a)** $\langle 12;16)$
- **b)** $\langle 0;4)$
- **c)** $\langle 4;8)$
- **d)** $\langle 8;12)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 8;12)$. $|z|=\sqrt{13}\cdot\sqrt{8}=2 \sqrt{26}$.

</details>

### `vl-vse-0636` — Vlastní úloha ve stylu přijímaček VŠE (č. 636)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{6 i}{1 + i}$ je rovna číslu:

- **a)** $-3$
- **b)** $3$
- **c)** $3 i$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3$. $z=3 + 3 i$.

</details>

### `vl-vse-0660` — Vlastní úloha ve stylu přijímaček VŠE (č. 660)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Absolutní hodnota čísla $z=(2 - i)(3 + 3 i)$ leží v intervalu:

- **a)** $\langle 4;8)$
- **b)** $\langle 12;16)$
- **c)** $\langle 0;4)$
- **d)** $\langle 8;12)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 8;12)$. $|z|=\sqrt{5}\cdot\sqrt{18}=3 \sqrt{10}$.

</details>

### `vl-vse-0677` — Vlastní úloha ve stylu přijímaček VŠE (č. 677)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1+i^{11}-i^{3}+i^{2}$ je rovna číslu:

- **a)** $2$
- **b)** $-1$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-0679` — Vlastní úloha ve stylu přijímaček VŠE (č. 679)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Absolutní hodnota čísla $z=(1 + 3 i)(1 - 2 i)$ leží v intervalu:

- **a)** $\langle 4;8)$
- **b)** $\langle 8;12)$
- **c)** $\langle 12;16)$
- **d)** $\langle 0;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 4;8)$. $|z|=\sqrt{10}\cdot\sqrt{5}=5 \sqrt{2}$.

</details>

### `vl-vse-0701` — Vlastní úloha ve stylu přijímaček VŠE (č. 701)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{- 4 i}{1 - i}$ je rovna číslu:

- **a)** $-2$
- **b)** $2$
- **c)** $-1$
- **d)** $- 2 i$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-2$. $z=2 - 2 i$.

</details>

### `vl-vse-0708` — Vlastní úloha ve stylu přijímaček VŠE (č. 708)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{-5 + i}{1 + i}$ je rovna číslu:

- **a)** $-2$
- **b)** $3 i$
- **c)** $3$
- **d)** $-3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $3$. $z=-2 + 3 i$.

</details>

### `vl-vse-0710` — Vlastní úloha ve stylu přijímaček VŠE (č. 710)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Absolutní hodnota čísla $z=(2 - 2 i)(1 + 3 i)$ leží v intervalu:

- **a)** $\langle 4;8)$
- **b)** $\langle 12;16)$
- **c)** $\langle 0;4)$
- **d)** $\langle 8;12)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 8;12)$. $|z|=\sqrt{8}\cdot\sqrt{10}=4 \sqrt{5}$.

</details>

### `vl-vse-0745` — Vlastní úloha ve stylu přijímaček VŠE (č. 745)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $1+i^{9}-i^{8}+i^{12}$ je rovna číslu:

- **a)** $2$
- **b)** $-1$
- **c)** $3$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0755` — Vlastní úloha ve stylu přijímaček VŠE (č. 755)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1-i^{8}+i^{7}-i^{9}$ je rovna číslu:

- **a)** $0$
- **b)** $-1$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $0$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-0793` — Vlastní úloha ve stylu přijímaček VŠE (č. 793)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část komplexního čísla $z=\dfrac{-2 - 6 i}{2 + i}$ je rovna číslu:

- **a)** $-2$
- **b)** $-1$
- **c)** $2$
- **d)** $- 2 i$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-2$. $z=-2 - 2 i$.

</details>

### `vl-vse-0822` — Vlastní úloha ve stylu přijímaček VŠE (č. 822)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $1+i^{5}+i^{11}-i^{6}$ je rovna číslu:

- **a)** $2$
- **b)** $1$
- **c)** $0$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-0847` — Vlastní úloha ve stylu přijímaček VŠE (č. 847)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Absolutní hodnota čísla $z=(-2 + 3 i)(-2 - 2 i)$ leží v intervalu:

- **a)** $\langle 0;4)$
- **b)** $\langle 8;12)$
- **c)** $\langle 12;16)$
- **d)** $\langle 4;8)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 8;12)$. $|z|=\sqrt{13}\cdot\sqrt{8}=2 \sqrt{26}$.

</details>

### `vl-vse-0915` — Vlastní úloha ve stylu přijímaček VŠE (č. 915)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{-8 + i}{2 + i}$ je rovna číslu:

- **a)** $2$
- **b)** $2 i$
- **c)** $-3$
- **d)** $-2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. $z=-3 + 2 i$.

</details>

### `vl-vse-0954` — Vlastní úloha ve stylu přijímaček VŠE (č. 954)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{1 + 2 i}{2 - i}$ je rovna číslu:

- **a)** $-1$
- **b)** $i$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. $z=i$.

</details>

### `vl-vse-0972` — Vlastní úloha ve stylu přijímaček VŠE (č. 972)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $1-i^{3}-i^{7}-i^{9}$ je rovna číslu:

- **a)** $3$
- **b)** $-1$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1040` — Vlastní úloha ve stylu přijímaček VŠE (č. 1040)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Absolutní hodnota čísla $z=(3 + 3 i)(3 - i)$ leží v intervalu:

- **a)** $\langle 0;4)$
- **b)** $\langle 8;12)$
- **c)** $\langle 12;16)$
- **d)** $\langle 4;8)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 12;16)$. $|z|=\sqrt{18}\cdot\sqrt{10}=6 \sqrt{5}$.

</details>

### `vl-vse-1057` — Vlastní úloha ve stylu přijímaček VŠE (č. 1057)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $1-i^{7}-i^{12}+i^{11}$ je rovna číslu:

- **a)** $2$
- **b)** $-1$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-1094` — Vlastní úloha ve stylu přijímaček VŠE (č. 1094)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1+i^{9}+i^{11}-i^{8}$ je rovna číslu:

- **a)** $-1$
- **b)** $2$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-1099` — Vlastní úloha ve stylu přijímaček VŠE (č. 1099)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $1-i^{11}-i^{8}-i^{12}$ je rovna číslu:

- **a)** $0$
- **b)** $-1$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-1105` — Vlastní úloha ve stylu přijímaček VŠE (č. 1105)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{3 + i}{1 - i}$ je rovna číslu:

- **a)** $-2$
- **b)** $2 i$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $2$. $z=1 + 2 i$.

</details>

### `vl-vse-1129` — Vlastní úloha ve stylu přijímaček VŠE (č. 1129)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Absolutní hodnota čísla $z=(3 - i)(3 - 2 i)$ leží v intervalu:

- **a)** $\langle 4;8)$
- **b)** $\langle 0;4)$
- **c)** $\langle 8;12)$
- **d)** $\langle 12;16)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 8;12)$. $|z|=\sqrt{10}\cdot\sqrt{13}=\sqrt{130}$.

</details>

### `vl-vse-1168` — Vlastní úloha ve stylu přijímaček VŠE (č. 1168)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1-i^{10}+i^{11}-i^{13}$ je rovna číslu:

- **a)** $-2$
- **b)** $2$
- **c)** $3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-1179` — Vlastní úloha ve stylu přijímaček VŠE (č. 1179)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1+i^{5}+i^{11}+i^{13}$ je rovna číslu:

- **a)** $2$
- **b)** $-1$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-1187` — Vlastní úloha ve stylu přijímaček VŠE (č. 1187)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{-3 + 3 i}{1 + i}$ je rovna číslu:

- **a)** $3$
- **b)** $3 i$
- **c)** $0$
- **d)** $-3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $3$. $z=3 i$.

</details>

### `vl-vse-1189` — Vlastní úloha ve stylu přijímaček VŠE (č. 1189)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1+i^{9}+i^{10}+i^{12}$ je rovna číslu:

- **a)** $1$
- **b)** $2$
- **c)** $-1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $1$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-1193` — Vlastní úloha ve stylu přijímaček VŠE (č. 1193)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část komplexního čísla $z=\dfrac{-1 + 7 i}{2 + i}$ je rovna číslu:

- **a)** $3$
- **b)** $-3$
- **c)** $3 i$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $3$. $z=1 + 3 i$.

</details>

### `vl-vse-1235` — Vlastní úloha ve stylu přijímaček VŠE (č. 1235)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část komplexního čísla $z=\dfrac{-2 + 2 i}{1 + i}$ je rovna číslu:

- **a)** $2$
- **b)** $-2$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. $z=2 i$.

</details>

### `vl-vse-1243` — Vlastní úloha ve stylu přijímaček VŠE (č. 1243)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $1-i^{11}-i^{8}-i^{10}$ je rovna číslu:

- **a)** $-1$
- **b)** $1$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-vse-1250` — Vlastní úloha ve stylu přijímaček VŠE (č. 1250)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $1+i^{5}-i^{6}-i^{9}$ je rovna číslu:

- **a)** $3$
- **b)** $-2$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $2$. $i^2=-1$, $i^3=-i$, $i^4=1$; mocniny se opakují s periodou 4.

</details>

### `vl-nsz-033` — [Vlastní úloha ve stylu NSZ Matematika (č. 33)](https://www.scio.cz/matematika)

*Темы:* 18. Posloupnosti · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Posloupnost reálných čísel $(a_n)$ je klesající, právě když pro všechna $n\in\mathbb N$ platí:

- **a)** $a_{n+1}<a_n$
- **b)** $\dfrac{a_{n+1}}{a_n}<1$
- **c)** $a_{n+1}\le a_n$
- **d)** $a_n-a_{n+1}<0$

<details><summary>Ответ и решение</summary>

**a** — $a_{n+1}<a_n$. Podíl nefunguje pro záporné členy, neostrá nerovnost připouští rovnost a poslední podmínka popisuje rostoucí posloupnost.

</details>

### `vl-nsz-154` — [Vlastní úloha ve stylu NSZ Matematika (č. 154)](https://www.scio.cz/matematika)

*Темы:* 18. Posloupnosti · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Posloupnost $\left(\dfrac{n+3}n\right)_{n=1}^\infty$:

- **a)** je omezená a klesající
- **b)** je rostoucí a omezená shora
- **c)** není omezená shora
- **d)** je klesající a není omezená zdola

<details><summary>Ответ и решение</summary>

**a** — je omezená a klesající. $a_n=1+\frac3n$: klesá a platí $1<a_n\le4$.

</details>

### `vse-vzor-01` — [VŠE, vzorový test z matematiky – FMV (příklad 1, 60 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fmv.pdf)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 3, úloha 9

Mezi kořeny kvadratické rovnice $x^2-7x-8=0$ vložte dvě čísla tak, aby spolu s těmito kořeny vznikly první čtyři členy aritmetické posloupnosti. Součet vložených čísel je

*Встречается также:* VŠE, vzorový test z matematiky – FFÚ a FPH (příklad 1, 6 bodů); VŠE, vzorový test z matematiky – FIS (příklad 1, 5 bodů)

- **a)** $1$
- **b)** $5$
- **c)** $7$
- **d)** $3$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**c** — $7$. Kořeny $-1$ a $8$; čtyři členy $-1,2,5,8$ ($d=3$), vložená čísla $2+5=7$.

</details>

### `vl-nsz-081` — [Vlastní úloha ve stylu NSZ Matematika (č. 81)](https://www.scio.cz/matematika)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti je součet třetího a devátého členu 22 a diference je 3. Dvanáctý člen je:

- **a)** $26$
- **b)** $29$
- **c)** $32$
- **d)** $35$

<details><summary>Ответ и решение</summary>

**b** — $29$. $a_3+a_9=2a_6=22$, $a_6=11$, $a_{12}=a_6+6d=29$.

</details>

### `vl-nsz-088` — [Vlastní úloha ve stylu NSZ Matematika (č. 88)](https://www.scio.cz/matematika)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jana spořila: první týden uložila 45 Kč a každý další týden o stejnou částku více než v předchozím. V 61. týdnu uložila 765 Kč. Kolik uložila ve třetím týdnu?

- **a)** $57$ Kč
- **b)** $69$ Kč
- **c)** $81$ Kč
- **d)** jinou částku

<details><summary>Ответ и решение</summary>

**b** — $69$ Kč. $765=45+60d$, $d=12$; $a_3=45+24=69$.

</details>

### `vl-obec-098` — Vlastní úloha ve stylu přijímacích testů (č. 98)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti je $a_5=17$ a $a_{12}=38$. Součet $a_1+a_{16}$ je:

- **a)** $47$
- **b)** $50$
- **c)** $55$
- **d)** $58$
- **e)** $61$

<details><summary>Ответ и решение</summary>

**c** — $55$. $a_1+a_{16}=a_5+a_{12}$.

</details>

### `vl-vse-0121` — Vlastní úloha ve stylu přijímaček VŠE (č. 121)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{3n+6}{9}$. Člen $a_{n+2}$ je roven:

- **a)** $\dfrac{5n+6}{9}$
- **b)** $\dfrac{3n+12}{9}$
- **c)** $\dfrac{3n+8}{9}$
- **d)** $\dfrac{3n+0}{9}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{3n+12}{9}$. Dosadíme $n+2$ místo $n$.

</details>

### `vl-nsz-176` — [Vlastní úloha ve stylu NSZ Matematika (č. 176)](https://www.scio.cz/matematika)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Součet $2+7+12+17+\dots+492+497$, jehož sčítance tvoří aritmetickou posloupnost s diferencí 5, je roven:

- **a)** $24\,850$
- **b)** $24\,900$
- **c)** $24\,950$
- **d)** $25\,000$

<details><summary>Ответ и решение</summary>

**c** — $24\,950$. Sčítanců je $\frac{497-2}5+1=100$, součet $\frac{100(2+497)}2$.

</details>

### `vl-vse-0185` — Vlastní úloha ve stylu přijímaček VŠE (č. 185)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{3n-2}{5}$. Člen $a_{n+2}$ je roven:

- **a)** $\dfrac{3n+0}{5}$
- **b)** $\dfrac{5n-2}{5}$
- **c)** $\dfrac{3n+4}{5}$
- **d)** $\dfrac{3n-8}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{3n+4}{5}$. Dosadíme $n+2$ místo $n$.

</details>

### `vl-vse-0191` — Vlastní úloha ve stylu přijímaček VŠE (č. 191)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{3n+5}{3}$. Člen $a_{n+2}$ je roven:

- **a)** $\dfrac{5n+5}{3}$
- **b)** $\dfrac{3n+11}{3}$
- **c)** $\dfrac{3n+7}{3}$
- **d)** $\dfrac{3n-1}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{3n+11}{3}$. Dosadíme $n+2$ místo $n$.

</details>

### `vl-vse-0240` — Vlastní úloha ve stylu přijímaček VŠE (č. 240)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Diference aritmetické posloupnosti s $n$-tým členem $a_n=\dfrac{-5n+2}{2}$ leží v intervalu:

- **a)** $\langle -2;-1)$
- **b)** $\langle -4;-2)$
- **c)** $\langle 0;1)$
- **d)** $\langle -1;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle -4;-2)$. $d=a_{n+1}-a_n=\frac{-5}{2}$.

</details>

### `vl-vse-0349` — Vlastní úloha ve stylu přijímaček VŠE (č. 349)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Diference aritmetické posloupnosti s $n$-tým členem $a_n=\dfrac{-3n+6}{6}$ leží v intervalu:

- **a)** $\langle -1;0)$
- **b)** $\langle -2;-1)$
- **c)** $\langle 0;1)$
- **d)** $\langle -4;-2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle -1;0)$. $d=a_{n+1}-a_n=\frac{-3}{6}$.

</details>

### `vl-vse-0363` — Vlastní úloha ve stylu přijímaček VŠE (č. 363)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti je $a_n=\dfrac{4n-3}5$. Člen $a_{n+2}$ je:

- **a)** $\dfrac{4n+5}5$
- **b)** $\dfrac{4n-1}5$
- **c)** $\dfrac{4n+1}5$
- **d)** $\dfrac{4n+5}7$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{4n+5}5$. $\frac{4(n+2)-3}5$.

</details>

### `vl-vse-0384` — Vlastní úloha ve stylu přijímaček VŠE (č. 384)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{6n-4}{7}$. Člen $a_{n+2}$ je roven:

- **a)** $\dfrac{6n-2}{7}$
- **b)** $\dfrac{6n-16}{7}$
- **c)** $\dfrac{6n+8}{7}$
- **d)** $\dfrac{8n-4}{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{6n+8}{7}$. Dosadíme $n+2$ místo $n$.

</details>

### `vl-vse-0402` — Vlastní úloha ve stylu přijímaček VŠE (č. 402)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{5n+4}{7}$. Člen $a_{n+2}$ je roven:

- **a)** $\dfrac{5n+6}{7}$
- **b)** $\dfrac{7n+4}{7}$
- **c)** $\dfrac{5n-6}{7}$
- **d)** $\dfrac{5n+14}{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{5n+14}{7}$. Dosadíme $n+2$ místo $n$.

</details>

### `vl-vse-0492` — Vlastní úloha ve stylu přijímaček VŠE (č. 492)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{6n+4}{9}$. Člen $a_{n+1}$ je roven:

- **a)** $\dfrac{7n+4}{9}$
- **b)** $\dfrac{6n-2}{9}$
- **c)** $\dfrac{6n+10}{9}$
- **d)** $\dfrac{6n+5}{9}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{6n+10}{9}$. Dosadíme $n+1$ místo $n$.

</details>

### `vl-vse-0502` — Vlastní úloha ve stylu přijímaček VŠE (č. 502)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{4n-1}{7}$. Člen $a_{n+1}$ je roven:

- **a)** $\dfrac{4n+3}{7}$
- **b)** $\dfrac{4n+0}{7}$
- **c)** $\dfrac{5n-1}{7}$
- **d)** $\dfrac{4n-5}{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{4n+3}{7}$. Dosadíme $n+1$ místo $n$.

</details>

### `vl-vse-0569` — Vlastní úloha ve stylu přijímaček VŠE (č. 569)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Diference aritmetické posloupnosti s $n$-tým členem $a_n=\dfrac{5n+2}{3}$ leží v intervalu:

- **a)** $\langle 1;3)$
- **b)** $\langle -4;-2)$
- **c)** $\langle -1;0)$
- **d)** $\langle -2;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 1;3)$. $d=a_{n+1}-a_n=\frac{5}{3}$.

</details>

### `vl-vse-0585` — Vlastní úloha ve stylu přijímaček VŠE (č. 585)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{4n-4}{5}$. Člen $a_{n+2}$ je roven:

- **a)** $\dfrac{6n-4}{5}$
- **b)** $\dfrac{4n-12}{5}$
- **c)** $\dfrac{4n-2}{5}$
- **d)** $\dfrac{4n+4}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{4n+4}{5}$. Dosadíme $n+2$ místo $n$.

</details>

### `vl-vse-0683` — Vlastní úloha ve stylu přijímaček VŠE (č. 683)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{3n+5}{9}$. Člen $a_{n+1}$ je roven:

- **a)** $\dfrac{3n+2}{9}$
- **b)** $\dfrac{3n+8}{9}$
- **c)** $\dfrac{3n+6}{9}$
- **d)** $\dfrac{4n+5}{9}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{3n+8}{9}$. Dosadíme $n+1$ místo $n$.

</details>

### `vl-vse-0716` — Vlastní úloha ve stylu přijímaček VŠE (č. 716)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{3n-3}{3}$. Člen $a_{n+1}$ je roven:

- **a)** $\dfrac{3n+0}{3}$
- **b)** $\dfrac{3n-2}{3}$
- **c)** $\dfrac{3n-6}{3}$
- **d)** $\dfrac{4n-3}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{3n+0}{3}$. Dosadíme $n+1$ místo $n$.

</details>

### `vl-vse-0830` — Vlastní úloha ve stylu přijímaček VŠE (č. 830)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{3n+6}{9}$. Člen $a_{n+1}$ je roven:

- **a)** $\dfrac{4n+6}{9}$
- **b)** $\dfrac{3n+3}{9}$
- **c)** $\dfrac{3n+7}{9}$
- **d)** $\dfrac{3n+9}{9}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{3n+9}{9}$. Dosadíme $n+1$ místo $n$.

</details>

### `vl-vse-0944` — Vlastní úloha ve stylu přijímaček VŠE (č. 944)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{6n+4}{7}$. Člen $a_{n+1}$ je roven:

- **a)** $\dfrac{6n+10}{7}$
- **b)** $\dfrac{7n+4}{7}$
- **c)** $\dfrac{6n-2}{7}$
- **d)** $\dfrac{6n+5}{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{6n+10}{7}$. Dosadíme $n+1$ místo $n$.

</details>

### `vl-vse-0979` — Vlastní úloha ve stylu přijímaček VŠE (č. 979)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{6n-1}{3}$. Člen $a_{n+1}$ je roven:

- **a)** $\dfrac{6n+5}{3}$
- **b)** $\dfrac{6n-7}{3}$
- **c)** $\dfrac{6n+0}{3}$
- **d)** $\dfrac{7n-1}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{6n+5}{3}$. Dosadíme $n+1$ místo $n$.

</details>

### `vl-vse-1120` — Vlastní úloha ve stylu přijímaček VŠE (č. 1120)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{4n-2}{7}$. Člen $a_{n+2}$ je roven:

- **a)** $\dfrac{4n+2}{7}$
- **b)** $\dfrac{4n-10}{7}$
- **c)** $\dfrac{4n+0}{7}$
- **d)** $\dfrac{6n-2}{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Dosadíme $n+2$ místo $n$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1134` — Vlastní úloha ve stylu přijímaček VŠE (č. 1134)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{6n-4}{7}$. Člen $a_{n+1}$ je roven:

- **a)** $\dfrac{6n+2}{7}$
- **b)** $\dfrac{6n-3}{7}$
- **c)** $\dfrac{6n-10}{7}$
- **d)** $\dfrac{7n-4}{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{6n+2}{7}$. Dosadíme $n+1$ místo $n$.

</details>

### `vl-vse-1164` — Vlastní úloha ve stylu přijímaček VŠE (č. 1164)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{6n+3}{5}$. Člen $a_{n+2}$ je roven:

- **a)** $\dfrac{8n+3}{5}$
- **b)** $\dfrac{6n+5}{5}$
- **c)** $\dfrac{6n+15}{5}$
- **d)** $\dfrac{6n-9}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{6n+15}{5}$. Dosadíme $n+2$ místo $n$.

</details>

### `vl-vse-1166` — Vlastní úloha ve stylu přijímaček VŠE (č. 1166)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost je dána vzorcem $a_n=\dfrac{3n-1}{5}$. Člen $a_{n+1}$ je roven:

- **a)** $\dfrac{4n-1}{5}$
- **b)** $\dfrac{3n+2}{5}$
- **c)** $\dfrac{3n+0}{5}$
- **d)** $\dfrac{3n-4}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{3n+2}{5}$. Dosadíme $n+1$ místo $n$.

</details>

### `vl-vse-1212` — Vlastní úloha ve stylu přijímaček VŠE (č. 1212)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Diference aritmetické posloupnosti s $n$-tým členem $a_n=\dfrac{1n+5}{2}$ leží v intervalu:

- **a)** $\langle 1;3)$
- **b)** $\langle -2;-1)$
- **c)** $\langle -4;-2)$
- **d)** $\langle -1;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $d=a_{n+1}-a_n=\frac{1}{2}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-nsz-017` — [Vlastní úloha ve stylu NSZ Matematika (č. 17)](https://www.scio.cz/matematika)

*Темы:* 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jana se učí slovíčka. V úterý se naučila 4, každý další den trojnásobek počtu z předchozího dne. Ve který den se naučila (počítáno od úterý) celkově třísté slovíčko?

- **a)** ve čtvrtek
- **b)** v pátek
- **c)** v sobotu
- **d)** v neděli

<details><summary>Ответ и решение</summary>

**c** — v sobotu. Celkové počty: út $4$, st $16$, čt $52$, pá $160$, so $484$.

</details>

### `vl-obec-018` — Vlastní úloha ve stylu přijímacích testů (č. 18)

*Темы:* 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Posloupnost je dána rekurentně $a_1=8$, $a_{n+1}=\frac32a_n$. Určete součet prvních čtyř členů.

<details><summary>Ответ и решение</summary>

$65$. $8+12+18+27$.

</details>

### `vl-nsz-034` — [Vlastní úloha ve stylu NSZ Matematika (č. 34)](https://www.scio.cz/matematika)

*Темы:* 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Nová cukrárna měla první měsíc 7 objednávek dortů a každý další měsíc dvakrát více než v předchozím. O kolik objednávek víc by musela mít v šestém měsíci, aby jich v něm měla 250?

- **a)** $2$
- **b)** $18$
- **c)** $26$
- **d)** $32$

<details><summary>Ответ и решение</summary>

**c** — $26$. Šestý měsíc: $7\cdot2^5=224$; chybí $26$.

</details>

### `vl-nsz-086` — [Vlastní úloha ve stylu NSZ Matematika (č. 86)](https://www.scio.cz/matematika)

*Темы:* 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výstavu navštívilo v prvních třech týdnech celkem 117 tisíc lidí. Ve druhém a každém dalším týdnu přišla vždy jen třetina návštěvníků předchozího týdne. Kolik lidí přišlo ve čtvrtém týdnu?

- **a)** $1\,000$
- **b)** $3\,000$
- **c)** $9\,000$
- **d)** $27\,000$

<details><summary>Ответ и решение</summary>

**b** — $3\,000$. $x\left(1+\frac13+\frac19\right)=\frac{13}9x=117\,000$, $x=81\,000$; čtvrtý týden $\frac{81\,000}{27}=3\,000$.

</details>

### `vl-nsz-200` — [Vlastní úloha ve stylu NSZ Matematika (č. 200)](https://www.scio.cz/matematika)

*Темы:* 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

První den onemocnělo 5 lidí. Každý nemocný nakazí hned následující den tři další (dosud zdravé) osoby a pak už nikoho. Kolikátý den poprvé překročí počet lidí, kteří onemocněli právě v tento den, hodnotu 2 000?

- **a)** šestý
- **b)** sedmý
- **c)** osmý
- **d)** devátý

<details><summary>Ответ и решение</summary>

**b** — sedmý. $n$-tý den onemocní $5\cdot3^{n-1}$ lidí: šestý den $1\,215$, sedmý $3\,645$.

</details>

### `vl-nsz-188` — [Vlastní úloha ve stylu NSZ Matematika (č. 188)](https://www.scio.cz/matematika)

*Темы:* 21. Kombinatorika. Faktoriál · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Které z čísel je největší?

- **a)** $\dfrac{7!}{5!}$
- **b)** $4!\cdot2!$
- **c)** $\dfrac{9!}{7!}$
- **d)** $\dfrac{5!+4!}{4!}$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{9!}{7!}$. $42$, $48$, $72$, $6$.

</details>

### `vl-obec-003` — Vlastní úloha ve stylu přijímacích testů (č. 3)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik různých čtyřpísmenných „slov“ lze sestavit z písmen slova ODRAZ (každé písmeno nejvýš jednou)?

- **a)** $24$
- **b)** $60$
- **c)** $120$
- **d)** $625$
- **e)** $1\,024$

<details><summary>Ответ и решение</summary>

**c** — $120$. $V_4(5)=5\cdot4\cdot3\cdot2$.

</details>

### `vl-vse-0018` — Vlastní úloha ve stylu přijímaček VŠE (č. 18)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolika způsoby lze z 12 různých příchutí vybrat 4 (na pořadí nezáleží)?

- **a)** $48$
- **b)** $495$
- **c)** $220$
- **d)** $11880$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $495$. Kombinace: $\binom{12}{4}=495$.

</details>

### `vl-vse-0024` — Vlastní úloha ve stylu přijímaček VŠE (č. 24)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Do finále závodu postoupilo 5 plavců. Kolika způsoby mohou být obsazena první 3 místa?

- **a)** $10$
- **b)** $125$
- **c)** $60$
- **d)** $120$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $60$. Záleží na pořadí: $V_3(5)=60$.

</details>

### `vl-vse-0033` — Vlastní úloha ve stylu přijímaček VŠE (č. 33)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na poličce je 6 různých knih. Kolika způsoby z nich můžeme vybrat 3 a seřadit je vedle sebe?

- **a)** $216$
- **b)** $720$
- **c)** $20$
- **d)** $120$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $120$. Záleží na pořadí: $V_3(6)=120$.

</details>

### `vl-nsz-038` — [Vlastní úloha ve stylu NSZ Matematika (č. 38)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zmrzlinárna má 64 příchutí. Kolik různých kornoutů se dvěma kopečky různých příchutí lze sestavit, nezáleží-li na pořadí kopečků?

- **a)** $2\,016$
- **b)** $2\,080$
- **c)** $4\,032$
- **d)** $4\,096$

<details><summary>Ответ и решение</summary>

**a** — $2\,016$. $\binom{64}2=2016$.

</details>

### `vl-obec-057` — Vlastní úloha ve stylu přijímacích testů (č. 57)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolika způsoby se může postavit do řady šest kamarádů, jestliže dva z nich nesmějí stát na prvním místě?

- **a)** $120$
- **b)** $240$
- **c)** $480$
- **d)** $600$
- **e)** $720$

<details><summary>Ответ и решение</summary>

**c** — $480$. Na první místo 4 možnosti, zbytek $5!$.

</details>

### `vl-nsz-073` — [Vlastní úloha ve stylu NSZ Matematika (č. 73)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V turnaji hrál každý tým s každým právě jednou a odehrálo se 21 zápasů. Kolik zápasů by se odehrálo, kdyby se turnaje účastnil o jeden tým méně?

- **a)** $14$
- **b)** $15$
- **c)** $18$
- **d)** $20$

<details><summary>Ответ и решение</summary>

**b** — $15$. $\binom n2=21$ dává $n=7$; pro 6 týmů $\binom62=15$.

</details>

### `vl-vse-0084` — Vlastní úloha ve stylu přijímaček VŠE (č. 84)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik trojciferných čísel s navzájem různými ciframi lze zapsat pomocí cifer 3, 5, 6, 7, 8?

- **a)** $10$
- **b)** $72$
- **c)** $125$
- **d)** $60$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $60$. $V_3(5)=60$.

</details>

### `vl-nsz-105` — [Vlastní úloha ve stylu NSZ Matematika (č. 105)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na kružnici je vyznačeno 9 různých bodů. Kolik různých trojúhelníků má všechny tři vrcholy v těchto bodech?

- **a)** $27$
- **b)** $84$
- **c)** $504$
- **d)** $729$

<details><summary>Ответ и решение</summary>

**b** — $84$. Žádné tři body kružnice neleží na přímce, takže stačí vybrat trojici: $\binom93=84$.

</details>

### `vl-vse-0107` — Vlastní úloha ve stylu přijímaček VŠE (č. 107)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik trojciferných čísel s navzájem různými ciframi lze zapsat pomocí cifer 1, 2, 4, 6, 7, 9?

- **a)** $216$
- **b)** $140$
- **c)** $20$
- **d)** $120$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $120$. $V_3(6)=120$.

</details>

### `vl-nsz-136` — [Vlastní úloha ve stylu NSZ Matematika (č. 136)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pizzerie nabízí 5 druhů přísad. Na pizzu si lze vybrat aspoň dvě a nejvýše čtyři různé přísady. Kolik různých pizz (podle složení přísad) lze takto objednat?

- **a)** $20$
- **b)** $25$
- **c)** $26$
- **d)** $31$

<details><summary>Ответ и решение</summary>

**b** — $25$. $\binom52+\binom53+\binom54=10+10+5$.

</details>

### `vl-nsz-157` — [Vlastní úloha ve stylu NSZ Matematika (č. 157)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V lize hraje každý tým s každým dvakrát (doma a venku). Celkem se odehrálo 132 zápasů. Kolik týmů hraje v lize?

- **a)** $11$
- **b)** $12$
- **c)** $13$
- **d)** $66$

<details><summary>Ответ и решение</summary>

**b** — $12$. $n(n-1)=132$, $n=12$.

</details>

### `vl-vse-0249` — Vlastní úloha ve stylu přijímaček VŠE (č. 249)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ze zásilky 15 výrobků vybereme náhodně 3 ke kontrole. Kolika způsoby to lze provést?

- **a)** $560$
- **b)** $45$
- **c)** $2730$
- **d)** $105$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Kombinace: $\binom{15}{3}=455$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0280` — Vlastní úloha ve stylu přijímaček VŠE (č. 280)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolika způsoby lze z 15 různých příchutí vybrat 3 (na pořadí nezáleží)?

- **a)** $455$
- **b)** $2730$
- **c)** $105$
- **d)** $45$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $455$. Kombinace: $\binom{15}{3}=455$.

</details>

### `vl-vse-0287` — Vlastní úloha ve stylu přijímaček VŠE (č. 287)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ze zásilky 30 výrobků vybereme náhodně 2 ke kontrole. Kolika způsoby to lze provést?

- **a)** $60$
- **b)** $870$
- **c)** $465$
- **d)** $30$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Kombinace: $\binom{30}{2}=435$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0377` — Vlastní úloha ve stylu přijímaček VŠE (č. 377)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ve třídní anketě kandiduje 5 žáků. Kolika způsoby lze z nich zvolit předsedu, místopředsedu a pokladníka (každý nejvýš jednu funkci)?

- **a)** $125$
- **b)** $120$
- **c)** $60$
- **d)** $10$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $60$. Záleží na pořadí: $V_3(5)=60$.

</details>

### `vl-vse-0394` — Vlastní úloha ve stylu přijímaček VŠE (č. 394)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ze skupiny 12 lidí vybíráme 4členný výbor (bez funkcí). Kolik je možností?

- **a)** $220$
- **b)** $11880$
- **c)** $48$
- **d)** $715$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Kombinace: $\binom{12}{4}=495$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0397` — Vlastní úloha ve stylu přijímaček VŠE (č. 397)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na poličce je 8 různých knih. Kolika způsoby z nich můžeme vybrat 3 a seřadit je vedle sebe?

- **a)** $336$
- **b)** $40320$
- **c)** $512$
- **d)** $56$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $336$. Záleží na pořadí: $V_3(8)=336$.

</details>

### `vl-vse-0431` — Vlastní úloha ve stylu přijímaček VŠE (č. 431)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ze skupiny 18 lidí vybíráme 3členný výbor (bez funkcí). Kolik je možností?

- **a)** $153$
- **b)** $4896$
- **c)** $54$
- **d)** $816$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $816$. Kombinace: $\binom{18}{3}=816$.

</details>

### `vl-vse-0450` — Vlastní úloha ve stylu přijímaček VŠE (č. 450)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik trojciferných čísel s navzájem různými ciframi lze zapsat pomocí cifer 1, 4, 5, 6, 7, 9?

- **a)** $140$
- **b)** $20$
- **c)** $216$
- **d)** $120$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $120$. $V_3(6)=120$.

</details>

### `vl-vse-0465` — Vlastní úloha ve stylu přijímaček VŠE (č. 465)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Do finále závodu postoupilo 9 plavců. Kolika způsoby mohou být obsazena první 2 místa?

- **a)** $72$
- **b)** $36$
- **c)** $362880$
- **d)** $81$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $72$. Záleží na pořadí: $V_2(9)=72$.

</details>

### `vl-vse-0476` — Vlastní úloha ve stylu přijímaček VŠE (č. 476)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik dvojciferných čísel s navzájem různými ciframi lze zapsat pomocí cifer 2, 5, 7, 8?

- **a)** $16$
- **b)** $15$
- **c)** $6$
- **d)** $12$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $12$. $V_2(4)=12$.

</details>

### `vl-vse-0500` — Vlastní úloha ve stylu přijímaček VŠE (č. 500)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik trojciferných čísel s navzájem různými ciframi lze zapsat pomocí cifer 1, 3, 6, 7, 8?

- **a)** $72$
- **b)** $125$
- **c)** $60$
- **d)** $10$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $60$. $V_3(5)=60$.

</details>

### `vl-vse-0606` — Vlastní úloha ve stylu přijímaček VŠE (č. 606)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik trojciferných čísel s navzájem různými ciframi lze zapsat pomocí cifer 1, 2, 5, 6, 7, 8?

- **a)** $120$
- **b)** $216$
- **c)** $140$
- **d)** $20$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $120$. $V_3(6)=120$.

</details>

### `vl-vse-0607` — Vlastní úloha ve stylu přijímaček VŠE (č. 607)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Do finále závodu postoupilo 6 plavců. Kolika způsoby mohou být obsazena první 3 místa?

- **a)** $120$
- **b)** $20$
- **c)** $216$
- **d)** $720$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $120$. Záleží na pořadí: $V_3(6)=120$.

</details>

### `vl-vse-0676` — Vlastní úloha ve stylu přijímaček VŠE (č. 676)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ze zásilky 12 výrobků vybereme náhodně 4 ke kontrole. Kolika způsoby to lze provést?

- **a)** $48$
- **b)** $11880$
- **c)** $495$
- **d)** $220$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $495$. Kombinace: $\binom{12}{4}=495$.

</details>

### `vl-vse-0756` — Vlastní úloha ve stylu přijímaček VŠE (č. 756)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ze skupiny 10 lidí vybíráme 4členný výbor (bez funkcí). Kolik je možností?

- **a)** $5040$
- **b)** $40$
- **c)** $210$
- **d)** $120$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $210$. Kombinace: $\binom{10}{4}=210$.

</details>

### `vl-vse-0804` — Vlastní úloha ve stylu přijímaček VŠE (č. 804)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na poličce je 7 různých knih. Kolika způsoby z nich můžeme vybrat 3 a seřadit je vedle sebe?

- **a)** $343$
- **b)** $210$
- **c)** $5040$
- **d)** $35$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $210$. Záleží na pořadí: $V_3(7)=210$.

</details>

### `vl-vse-0833` — Vlastní úloha ve stylu přijímaček VŠE (č. 833)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ve třídní anketě kandiduje 7 žáků. Kolika způsoby lze z nich zvolit předsedu, místopředsedu (každý nejvýš jednu funkci)?

- **a)** $21$
- **b)** $5040$
- **c)** $42$
- **d)** $49$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $42$. Záleží na pořadí: $V_2(7)=42$.

</details>

### `vl-vse-1008` — Vlastní úloha ve stylu přijímaček VŠE (č. 1008)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ze skupiny 24 lidí vybíráme 2členný výbor (bez funkcí). Kolik je možností?

- **a)** $48$
- **b)** $276$
- **c)** $24$
- **d)** $552$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $276$. Kombinace: $\binom{24}{2}=276$.

</details>

### `vl-vse-1060` — Vlastní úloha ve stylu přijímaček VŠE (č. 1060)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ve třídní anketě kandiduje 6 žáků. Kolika způsoby lze z nich zvolit předsedu, místopředsedu (každý nejvýš jednu funkci)?

- **a)** $30$
- **b)** $36$
- **c)** $15$
- **d)** $720$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $30$. Záleží na pořadí: $V_2(6)=30$.

</details>

### `vl-vse-1087` — Vlastní úloha ve stylu přijímaček VŠE (č. 1087)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik trojciferných čísel s navzájem různými ciframi lze zapsat pomocí cifer 2, 3, 6, 8, 9?

- **a)** $60$
- **b)** $10$
- **c)** $72$
- **d)** $125$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $60$. $V_3(5)=60$.

</details>

### `vl-vse-1096` — Vlastní úloha ve stylu přijímaček VŠE (č. 1096)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik dvojciferných čísel s navzájem různými ciframi lze zapsat pomocí cifer 1, 2, 4, 8?

- **a)** $12$
- **b)** $15$
- **c)** $6$
- **d)** $16$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $12$. $V_2(4)=12$.

</details>

### `vl-vse-1252` — Vlastní úloha ve stylu přijímaček VŠE (č. 1252)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ze skupiny 20 lidí vybíráme 2členný výbor (bez funkcí). Kolik je možností?

- **a)** $40$
- **b)** $20$
- **c)** $380$
- **d)** $190$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $190$. Kombinace: $\binom{20}{2}=190$.

</details>

### `vl-nsz-018` — [Vlastní úloha ve stylu NSZ Matematika (č. 18)](https://www.scio.cz/matematika)

*Темы:* 24. Pravděpodobnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Adéla náhodně vybere číslo z $\{1,2,\dots,6\}$, Bětka z $\{1,2,\dots,5\}$. Jaká je pravděpodobnost, že součin vybraných čísel je sudý?

- **a)** $\dfrac12$
- **b)** $\dfrac35$
- **c)** $\dfrac7{10}$
- **d)** $\dfrac45$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac7{10}$. Lichý součin jen pro dvě lichá čísla: $\frac36\cdot\frac35=\frac3{10}$.

</details>

### `vl-obec-022` — Vlastní úloha ve stylu přijímacích testů (č. 22)

*Темы:* 24. Pravděpodobnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Házíme pěti mincemi. Jaká je pravděpodobnost, že padne aspoň čtyřikrát líc?

- **a)** $\dfrac5{32}$
- **b)** $\dfrac3{16}$
- **c)** $\dfrac14$
- **d)** $\dfrac1{32}$
- **e)** $\dfrac12$

<details><summary>Ответ и решение</summary>

**b** — $\dfrac3{16}$. $\frac{\binom54+\binom55}{32}$.

</details>

### `vl-nsz-181` — [Vlastní úloha ve stylu NSZ Matematika (č. 181)](https://www.scio.cz/matematika)

*Темы:* 24. Pravděpodobnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolo štěstí má 25 stejných výsečí: 1 zlatou, 12 modrých a 12 žlutých. Hráč vsadí na modrou, nebo na žlutou. Padne-li zlatá nebo barva, na kterou nevsadil, vyhrává pořadatel. Jaká je pravděpodobnost, že vyhraje pořadatel?

- **a)** $48\,\%$
- **b)** $50\,\%$
- **c)** $52\,\%$
- **d)** $54\,\%$

<details><summary>Ответ и решение</summary>

**c** — $52\,\%$. $\frac{1+12}{25}=0{,}52$.

</details>

### `vl-obec-043` — Vlastní úloha ve stylu přijímacích testů (č. 43)

*Темы:* 25. Analytická geometrie. Vektory, 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $ABC$ je $D$ střed strany $AB$ a $E$ střed strany $BC$. Které tvrzení platí?

- **a)** $|DE|=\frac12|AC|$
- **b)** $|DE|=|AC|$
- **c)** $\overrightarrow{DE}=\overrightarrow{AC}$
- **d)** $|AD|+|BE|=|AC|$
- **e)** $DE\perp AC$

<details><summary>Ответ и решение</summary>

**a** — $|DE|=\frac12|AC|$. Střední příčka je rovnoběžná se stranou $AC$ a má poloviční délku.

</details>

### `vl-obec-054` — Vlastní úloha ve stylu přijímacích testů (č. 54)

*Темы:* 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vektory $\vec u=(2;-1;3)$ a $\vec v=(1;4;k)$ jsou kolmé pro $k$ rovno:

- **a)** $-2$
- **b)** $\dfrac23$
- **c)** $\dfrac43$
- **d)** $2$
- **e)** $\dfrac{2}{3}$ nebo $-2$

<details><summary>Ответ и решение</summary>

**b** — $\dfrac23$. $2-4+3k=0$.

</details>

### `vl-vse-0097` — Vlastní úloha ve stylu přijímaček VŠE (č. 97)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-3;-2]$ a $C=[-1;-4]$ leží bod:

- **a)** $[-9;4]$
- **b)** $[-8;4]$
- **c)** $[-9;3]$
- **d)** $[-9;-8]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $[-9;4]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=-3$ vyjde $[-9;4]$.

</details>

### `vl-vse-0104` — Vlastní úloha ve stylu přijímaček VŠE (č. 104)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-1;-2]$ a $C=[0;1]$ leží bod:

- **a)** $[3;7]$
- **b)** $[2;6]$
- **c)** $[2;7]$
- **d)** $[-10;1]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $[2;7]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=3$ vyjde $[2;7]$.

</details>

### `vl-vse-0265` — Vlastní úloha ve stylu přijímaček VŠE (č. 265)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-3;1]$ a $C=[-4;3]$ leží bod:

- **a)** $[-11;-3]$
- **b)** $[-6;9]$
- **c)** $[-7;9]$
- **d)** $[-7;8]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $[-7;9]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=4$ vyjde $[-7;9]$.

</details>

### `vl-vse-0311` — Vlastní úloha ve stylu přijímaček VŠE (č. 311)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-1;-3]$ a $C=[-2;-1]$ leží bod:

- **a)** $[3;-9]$
- **b)** $[2;-10]$
- **c)** $[2;-9]$
- **d)** $[5;0]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $[2;-9]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=-3$ vyjde $[2;-9]$.

</details>

### `vl-vse-0332` — Vlastní úloha ve stylu přijímaček VŠE (č. 332)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[2;1]$ a $C=[4;6]$ leží bod:

- **a)** $[6;11]$
- **b)** $[7;11]$
- **c)** $[6;10]$
- **d)** $[-8;5]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $[6;11]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=2$ vyjde $[6;11]$.

</details>

### `vl-vse-0352` — Vlastní úloha ve stylu přijímaček VŠE (č. 352)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[1;1]$ a $C=[0;-3]$ leží bod:

- **a)** $[3;9]$
- **b)** $[4;9]$
- **c)** $[-7;3]$
- **d)** $[3;8]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $[3;9]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=-2$ vyjde $[3;9]$.

</details>

### `vl-vse-0403` — Vlastní úloha ve stylu přijímaček VŠE (č. 403)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-1;-1]$ a $C=[0;1]$ leží bod:

- **a)** $[-4;-3]$
- **b)** $[-2;-5]$
- **c)** $[-3;-6]$
- **d)** $[3;-3]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Parametricky $X=B+t\cdot(C-B)$; pro $t=-2$ vyjde $[-3;-5]$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0481` — Vlastní úloha ve stylu přijímaček VŠE (č. 481)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-3;2]$ a $C=[-4;7]$ leží bod:

- **a)** $[-1;-8]$
- **b)** $[0;-8]$
- **c)** $[7;4]$
- **d)** $[-1;-9]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $[-1;-8]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=-2$ vyjde $[-1;-8]$.

</details>

### `vl-vse-0490` — Vlastní úloha ve stylu přijímaček VŠE (č. 490)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-3;1]$ a $C=[-2;3]$ leží bod:

- **a)** $[1;8]$
- **b)** $[2;9]$
- **c)** $[-11;5]$
- **d)** $[0;11]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Parametricky $X=B+t\cdot(C-B)$; pro $t=4$ vyjde $[1;9]$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0491` — Vlastní úloha ve stylu přijímaček VŠE (č. 491)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-3;-3]$ a $C=[-2;0]$ leží bod:

- **a)** $[1;8]$
- **b)** $[1;9]$
- **c)** $[-15;1]$
- **d)** $[2;9]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $[1;9]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=4$ vyjde $[1;9]$.

</details>

### `vl-vse-0590` — Vlastní úloha ve stylu přijímaček VŠE (č. 590)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[0;-3]$ a $C=[1;-7]$ leží bod:

- **a)** $[4;-20]$
- **b)** $[16;1]$
- **c)** $[4;-19]$
- **d)** $[5;-19]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $[4;-19]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=4$ vyjde $[4;-19]$.

</details>

### `vl-vse-0672` — Vlastní úloha ve stylu přijímaček VŠE (č. 672)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[1;-2]$ a $C=[0;-6]$ leží bod:

- **a)** $[-1;-14]$
- **b)** $[13;-5]$
- **c)** $[-2;-14]$
- **d)** $[-2;-15]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $[-2;-14]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=3$ vyjde $[-2;-14]$.

</details>

### `vl-vse-0695` — Vlastní úloha ve stylu přijímaček VŠE (č. 695)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-2;2]$ a $C=[-1;-2]$ leží bod:

- **a)** $[-5;13]$
- **b)** $[-4;14]$
- **c)** $[-14;-1]$
- **d)** $[-5;14]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $[-5;14]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=-3$ vyjde $[-5;14]$.

</details>

### `vl-vse-0803` — Vlastní úloha ve stylu přijímaček VŠE (č. 803)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-1;3]$ a $C=[0;-1]$ leží bod:

- **a)** $[-3;15]$
- **b)** $[-4;14]$
- **c)** $[-13;0]$
- **d)** $[-5;17]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Parametricky $X=B+t\cdot(C-B)$; pro $t=-3$ vyjde $[-4;15]$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0817` — Vlastní úloha ve stylu přijímaček VŠE (č. 817)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-1;-2]$ a $C=[1;0]$ leží bod:

- **a)** $[-7;4]$
- **b)** $[6;4]$
- **c)** $[5;4]$
- **d)** $[5;3]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $[5;4]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=3$ vyjde $[5;4]$.

</details>

### `vl-vse-0818` — Vlastní úloha ve stylu přijímaček VŠE (č. 818)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-2;-1]$ a $C=[-1;1]$ leží bod:

- **a)** $[-4;-6]$
- **b)** $[-3;-5]$
- **c)** $[2;-3]$
- **d)** $[-4;-5]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $[-4;-5]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=-2$ vyjde $[-4;-5]$.

</details>

### `vl-vse-0986` — Vlastní úloha ve stylu přijímaček VŠE (č. 986)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[1;2]$ a $C=[2;7]$ leží bod:

- **a)** $[4;12]$
- **b)** $[-9;4]$
- **c)** $[3;11]$
- **d)** $[3;12]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $[3;12]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=2$ vyjde $[3;12]$.

</details>

### `vl-vse-0990` — Vlastní úloha ve stylu přijímaček VŠE (č. 990)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-1;-1]$ a $C=[0;-5]$ leží bod:

- **a)** $[3;-17]$
- **b)** $[15;3]$
- **c)** $[4;-17]$
- **d)** $[3;-18]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $[3;-17]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=4$ vyjde $[3;-17]$.

</details>

### `vl-vse-1155` — Vlastní úloha ve stylu přijímaček VŠE (č. 1155)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-1;-1]$ a $C=[-2;1]$ leží bod:

- **a)** $[-5;7]$
- **b)** $[-5;6]$
- **c)** $[-9;-5]$
- **d)** $[-4;7]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $[-5;7]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=4$ vyjde $[-5;7]$.

</details>

### `vl-vse-1239` — Vlastní úloha ve stylu přijímaček VŠE (č. 1239)

*Темы:* 26. Parametrická rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na přímce procházející body $B=[-1;-1]$ a $C=[1;-3]$ leží bod:

- **a)** $[7;-9]$
- **b)** $[7;7]$
- **c)** $[8;-9]$
- **d)** $[7;-10]$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $[7;-9]$. Parametricky $X=B+t\cdot(C-B)$; pro $t=4$ vyjde $[7;-9]$.

</details>

### `vl-vse-0043` — Vlastní úloha ve stylu přijímaček VŠE (č. 43)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[1;0]$ a je kolmá k přímce $p:\ x=1+-1t,\ y=1+1t$, je:

- **a)** $x-y-2=0$
- **b)** $x+y-1=0$
- **c)** $x-y+1=0$
- **d)** $x-y-1=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $x-y-1=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-obec-051` — Vlastní úloha ve stylu přijímacích testů (č. 51)

*Темы:* 27. Obecná rovnice přímky, 29. Směrnicový a úsekový tvar rovnice přímky · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Která přímka prochází body $[0;2]$ a $[3;0]$?

- **a)** $2x+3y-6=0$
- **b)** $3x+2y-6=0$
- **c)** $2x-3y+6=0$
- **d)** $y=\frac23x+2$
- **e)** $x=3t,\ y=2+2t$

<details><summary>Ответ и решение</summary>

**a** — $2x+3y-6=0$. Úsekový tvar $\frac x3+\frac y2=1$.

</details>

### `vl-vse-0060` — Vlastní úloha ve stylu přijímaček VŠE (č. 60)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-4;4]$ a je kolmá k přímce $p:\ x+y+2=0$, je:

- **a)** $3x-3y+25=0$
- **b)** $x-y-8=0$
- **c)** $x-y+8=0$
- **d)** $x+y=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x-y+8=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0065` — Vlastní úloha ve stylu přijímaček VŠE (č. 65)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[2;0]$ a je kolmá k přímce $p:\ x=2+-1t,\ y=0+2t$, je:

- **a)** $x-2y-2=0$
- **b)** $x-2y+2=0$
- **c)** $2x+y-4=0$
- **d)** $x+2y-2=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x-2y-2=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0092` — Vlastní úloha ve stylu přijímaček VŠE (č. 92)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[2;4]$ a je kolmá k přímce $p:\ x=1+3t,\ y=-3-2t$, je:

- **a)** $3x-2y-2=0$
- **b)** $2x+3y-16=0$
- **c)** $3x+2y-14=0$
- **d)** $3x-2y+2=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $3x-2y+2=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0178` — Vlastní úloha ve stylu přijímaček VŠE (č. 178)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[2;0]$ a je kolmá k přímce $p:\ 2x+3y+5=0$, je:

- **a)** $2x+3y-4=0$
- **b)** $3x-2y-6=0$
- **c)** $3x-2y+6=0$
- **d)** $3x+2y-6=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3x-2y-6=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0215` — Vlastní úloha ve stylu přijímaček VŠE (č. 215)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[4;-4]$ a je kolmá k přímce $p:\ x=-1+1t,\ y=1+2t$, je:

- **a)** $x-2y-12=0$
- **b)** $x+2y+4=0$
- **c)** $2x-y-12=0$
- **d)** $x+2y-4=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x+2y+4=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0217` — Vlastní úloha ve stylu přijímaček VŠE (č. 217)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[4;1]$ a je kolmá k přímce $p:\ x=0+-1t,\ y=-2+4t$, je:

- **a)** $x-4y-1=0$
- **b)** $4x+y-17=0$
- **c)** $x+4y-8=0$
- **d)** $x-4y=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $x-4y=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0232` — Vlastní úloha ve stylu přijímaček VŠE (č. 232)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[3;-3]$ a je kolmá k přímce $p:\ 2x+y-6=0$, je:

- **a)** $2x+y-3=0$
- **b)** $x-2y-9=0$
- **c)** $x+2y+3=0$
- **d)** $x-2y+9=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x-2y-9=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0245` — Vlastní úloha ve stylu přijímaček VŠE (č. 245)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[1;4]$ a je kolmá k přímce $p:\ 3x+y+3=0$, je:

- **a)** $x-3y+11=0$
- **b)** $3x+y-7=0$
- **c)** $x-3y-11=0$
- **d)** $x+3y-13=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x-3y+11=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0266` — Vlastní úloha ve stylu přijímaček VŠE (č. 266)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[4;4]$ a je kolmá k přímce $p:\ x=0+2t,\ y=1+4t$, je:

- **a)** $x-2y+4=0$
- **b)** $x+2y-12=0$
- **c)** $x+2y+12=0$
- **d)** $2x-y-4=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x+2y-12=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0407` — Vlastní úloha ve stylu přijímaček VŠE (č. 407)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-2;-4]$ a je kolmá k přímce $p:\ x=-3+2t,\ y=1-2t$, je:

- **a)** $x-y-2=0$
- **b)** $x+y+6=0$
- **c)** $x-y+2=0$
- **d)** $2x-2y-3=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x-y-2=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0472` — Vlastní úloha ve stylu přijímaček VŠE (č. 472)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[2;0]$ a je kolmá k přímce $p:\ 2x+4y-3=0$, je:

- **a)** $x+2y-2=0$
- **b)** $2x+y-4=0$
- **c)** $2x-y-4=0$
- **d)** $2x-y+4=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $2x-y-4=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0487` — Vlastní úloha ve stylu přijímaček VŠE (č. 487)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-1;-3]$ a je kolmá k přímce $p:\ x=-2+-2t,\ y=1+4t$, je:

- **a)** $x-2y-5=0$
- **b)** $x+2y+7=0$
- **c)** $2x+y+5=0$
- **d)** $x-2y+5=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x-2y-5=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0504` — Vlastní úloha ve stylu přijímaček VŠE (č. 504)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-2;0]$ a je kolmá k přímce $p:\ x+3y-5=0$, je:

- **a)** $3x+y+6=0$
- **b)** $3x-y-6=0$
- **c)** $x+3y+2=0$
- **d)** $3x-y+6=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $3x-y+6=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0522` — Vlastní úloha ve stylu přijímaček VŠE (č. 522)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-2;2]$ a je kolmá k přímce $p:\ x+y+1=0$, je:

- **a)** $x-y+4=0$
- **b)** $x-y+5=0$
- **c)** $x+y=0$
- **d)** $x-y-4=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x-y+4=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0532` — Vlastní úloha ve stylu přijímaček VŠE (č. 532)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[4;-1]$ a je kolmá k přímce $p:\ x=2+-2t,\ y=-1+2t$, je:

- **a)** $x+y-3=0$
- **b)** $x-y-5=0$
- **c)** $x-y+5=0$
- **d)** $2x-2y-11=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x-y-5=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0699` — Vlastní úloha ve stylu přijímaček VŠE (č. 699)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-3;-4]$ a je kolmá k přímce $p:\ x=0+2t,\ y=1+4t$, je:

- **a)** $x+2y-11=0$
- **b)** $x-2y-5=0$
- **c)** $x+2y+11=0$
- **d)** $2x-y+2=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x+2y+11=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0791` — Vlastní úloha ve stylu přijímaček VŠE (č. 791)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[0;-1]$ a je kolmá k přímce $p:\ x=2+1t,\ y=0+2t$, je:

- **a)** $x+2y-2=0$
- **b)** $2x-y-1=0$
- **c)** $x-2y-2=0$
- **d)** $x+2y+2=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $x+2y+2=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0796` — Vlastní úloha ve stylu přijímaček VŠE (č. 796)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[3;3]$ a je kolmá k přímce $p:\ 2x+y+5=0$, je:

- **a)** $2x+y-9=0$
- **b)** $x-2y+3=0$
- **c)** $x-2y-3=0$
- **d)** $x+2y-9=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x-2y+3=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0812` — Vlastní úloha ve stylu přijímaček VŠE (č. 812)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-4;-1]$ a je kolmá k přímce $p:\ 2x-y+5=0$, je:

- **a)** $2x-y+7=0$
- **b)** $x+2y-6=0$
- **c)** $x+2y+6=0$
- **d)** $x-2y+2=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x+2y+6=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0825` — Vlastní úloha ve stylu přijímaček VŠE (č. 825)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[2;-3]$ a je kolmá k přímce $p:\ x-4y-4=0$, je:

- **a)** $4x-y-11=0$
- **b)** $4x+y+5=0$
- **c)** $4x+y-5=0$
- **d)** $x-4y-14=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $4x+y-5=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0843` — Vlastní úloha ve stylu přijímaček VŠE (č. 843)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[1;1]$ a je kolmá k přímce $p:\ 2x+y-4=0$, je:

- **a)** $2x+y-3=0$
- **b)** $x-2y+1=0$
- **c)** $x-2y-1=0$
- **d)** $x+2y-3=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x-2y+1=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0845` — Vlastní úloha ve stylu přijímaček VŠE (č. 845)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[1;3]$ a je kolmá k přímce $p:\ 2x+y+3=0$, je:

- **a)** $2x+y-5=0$
- **b)** $x-2y-5=0$
- **c)** $x-2y+5=0$
- **d)** $x+2y-7=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x-2y+5=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0858` — Vlastní úloha ve stylu přijímaček VŠE (č. 858)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[0;-3]$ a je kolmá k přímce $p:\ x+y-1=0$, je:

- **a)** $x-y+3=0$
- **b)** $x+y+3=0$
- **c)** $x-y-3=0$
- **d)** $2x-2y-5=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x-y-3=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0946` — Vlastní úloha ve stylu přijímaček VŠE (č. 946)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-2;-4]$ a je kolmá k přímce $p:\ x+3y-3=0$, je:

- **a)** $3x+y+10=0$
- **b)** $3x-y+2=0$
- **c)** $3x-y-2=0$
- **d)** $x+3y+14=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3x-y+2=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0957` — Vlastní úloha ve stylu přijímaček VŠE (č. 957)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[2;3]$ a je kolmá k přímce $p:\ 3x+y+1=0$, je:

- **a)** $x+3y-11=0$
- **b)** $x-3y-7=0$
- **c)** $x-3y+7=0$
- **d)** $3x+y-9=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x-3y+7=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-1041` — Vlastní úloha ve stylu přijímaček VŠE (č. 1041)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-4;-3]$ a je kolmá k přímce $p:\ x-4y-3=0$, je:

- **a)** $4x+y-19=0$
- **b)** $4x+y+19=0$
- **c)** $x-4y-8=0$
- **d)** $4x-y+13=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $4x+y+19=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-1071` — Vlastní úloha ve stylu přijímaček VŠE (č. 1071)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-3;4]$ a je kolmá k přímce $p:\ x=2+2t,\ y=2-2t$, je:

- **a)** $x-y+7=0$
- **b)** $x+y-1=0$
- **c)** $2x-2y+15=0$
- **d)** $x-y-7=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x-y+7=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-1084` — Vlastní úloha ve stylu přijímaček VŠE (č. 1084)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-2;-3]$ a je kolmá k přímce $p:\ x=-2+-2t,\ y=-2+2t$, je:

- **a)** $x+y+5=0$
- **b)** $x-y+1=0$
- **c)** $2x-2y-3=0$
- **d)** $x-y-1=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $x-y-1=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-1127` — Vlastní úloha ve stylu přijímaček VŠE (č. 1127)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-4;-1]$ a je kolmá k přímce $p:\ x-y=0$, je:

- **a)** $x+y+5=0$
- **b)** $2x+2y+11=0$
- **c)** $x-y+3=0$
- **d)** $x+y-5=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x+y+5=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-1157` — Vlastní úloha ve stylu přijímaček VŠE (č. 1157)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-3;-4]$ a je kolmá k přímce $p:\ x=-2+-2t,\ y=1+1t$, je:

- **a)** $2x-y+2=0$
- **b)** $x+2y+11=0$
- **c)** $2x-y-2=0$
- **d)** $2x+y+10=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2x-y+2=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-1242` — Vlastní úloha ve stylu přijímaček VŠE (č. 1242)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[-1;-1]$ a je kolmá k přímce $p:\ x-2y+3=0$, je:

- **a)** $2x+y-3=0$
- **b)** $2x-y+1=0$
- **c)** $2x+y+3=0$
- **d)** $x-2y-1=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $2x+y+3=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vse-a-06` — [VŠE, vzor přijímacích zkoušek A (úloha 6)](https://www.vse.cz/wp-content/uploads/page/2128/test-A.pdf)

*Темы:* 28. Vzájemná poloha přímek, 26. Parametrická rovnice přímky, 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу)

Přímka $2x-3y-3=0$ a přímka $x=-2+5t,y=2-t$

- **a)** se protnou v bodě ležícím uvnitř prvního kvadrantu
- **b)** se protnou v bodě ležícím uvnitř druhého kvadrantu
- **c)** se protnou v bodě ležícím uvnitř třetího kvadrantu
- **d)** se neprotnou
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**a** — se protnou v bodě ležícím uvnitř prvního kvadrantu. Dosazení: $2(-2+5t)-3(2-t)-3=13t-13=0$, $t=1$, průsečík $[3,1]$ leží v prvním kvadrantu.

</details>

### `vl-vse-0032` — Vlastní úloha ve stylu přijímaček VŠE (č. 32)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ 2x-y+2=0$ a $p_2:\ x-3y-4=0$ se protínají:

- **a)** uvnitř třetího kvadrantu
- **b)** uvnitř čtvrtého kvadrantu
- **c)** uvnitř druhého kvadrantu
- **d)** uvnitř prvního kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — uvnitř třetího kvadrantu. Řešením soustavy je průsečík $[-2;-2]$.

</details>

### `vl-vse-0079` — Vlastní úloha ve stylu přijímaček VŠE (č. 79)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ x+y=0$ a $p_2:\ 2x-3y-15=0$ se protínají:

- **a)** uvnitř třetího kvadrantu
- **b)** uvnitř čtvrtého kvadrantu
- **c)** uvnitř druhého kvadrantu
- **d)** uvnitř prvního kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — uvnitř čtvrtého kvadrantu. Řešením soustavy je průsečík $[3;-3]$.

</details>

### `vl-obec-097` — Vlastní úloha ve stylu přijímacích testů (č. 97)

*Темы:* 28. Vzájemná poloha přímek, 29. Směrnicový a úsekový tvar rovnice přímky · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro jakou hodnotu parametru $p$ je přímka $y=3x-7$ kolmá k přímce $y=p(x+5)$?

- **a)** $-3$
- **b)** $-\dfrac13$
- **c)** $\dfrac13$
- **d)** $3$
- **e)** $5$

<details><summary>Ответ и решение</summary>

**b** — $-\dfrac13$. Součin směrnic je $-1$: $3p=-1$.

</details>

### `vl-vse-0188` — Vlastní úloha ve stylu přijímaček VŠE (č. 188)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ x+2y-4=0$ a $p_2:\ x-3y+1=0$ se protínají:

- **a)** uvnitř druhého kvadrantu
- **b)** uvnitř čtvrtého kvadrantu
- **c)** uvnitř prvního kvadrantu
- **d)** uvnitř třetího kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — uvnitř prvního kvadrantu. Řešením soustavy je průsečík $[2;1]$.

</details>

### `vl-vse-0214` — Vlastní úloha ve stylu přijímaček VŠE (č. 214)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ 2x+y-3=0$ a $p_2:\ x-y-3=0$ se protínají:

- **a)** uvnitř třetího kvadrantu
- **b)** uvnitř druhého kvadrantu
- **c)** uvnitř čtvrtého kvadrantu
- **d)** uvnitř prvního kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — uvnitř čtvrtého kvadrantu. Řešením soustavy je průsečík $[2;-1]$.

</details>

### `vl-vse-0307` — Vlastní úloha ve stylu přijímaček VŠE (č. 307)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ x+2y+6=0$ a $p_2:\ x-y=0$ se protínají:

- **a)** uvnitř druhého kvadrantu
- **b)** uvnitř čtvrtého kvadrantu
- **c)** uvnitř třetího kvadrantu
- **d)** uvnitř prvního kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — uvnitř třetího kvadrantu. Řešením soustavy je průsečík $[-2;-2]$.

</details>

### `vl-vse-0485` — Vlastní úloha ve stylu přijímaček VŠE (č. 485)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ x+y+3=0$ a $p_2:\ x-3y-5=0$ se protínají:

- **a)** uvnitř čtvrtého kvadrantu
- **b)** uvnitř třetího kvadrantu
- **c)** uvnitř druhého kvadrantu
- **d)** uvnitř prvního kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — uvnitř třetího kvadrantu. Řešením soustavy je průsečík $[-1;-2]$.

</details>

### `vl-vse-0517` — Vlastní úloha ve stylu přijímaček VŠE (č. 517)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ x+y=0$ a $p_2:\ x+2y+1=0$ se protínají:

- **a)** uvnitř čtvrtého kvadrantu
- **b)** uvnitř prvního kvadrantu
- **c)** uvnitř třetího kvadrantu
- **d)** uvnitř druhého kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — uvnitř čtvrtého kvadrantu. Řešením soustavy je průsečík $[1;-1]$.

</details>

### `vl-vse-0524` — Vlastní úloha ve stylu přijímaček VŠE (č. 524)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ x+y+3=0$ a $p_2:\ x+3y+5=0$ se protínají:

- **a)** uvnitř třetího kvadrantu
- **b)** uvnitř druhého kvadrantu
- **c)** uvnitř prvního kvadrantu
- **d)** uvnitř čtvrtého kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — uvnitř třetího kvadrantu. Řešením soustavy je průsečík $[-2;-1]$.

</details>

### `vl-vse-0709` — Vlastní úloha ve stylu přijímaček VŠE (č. 709)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ x-y+2=0$ a $p_2:\ 2x+y-5=0$ se protínají:

- **a)** uvnitř třetího kvadrantu
- **b)** uvnitř čtvrtého kvadrantu
- **c)** uvnitř druhého kvadrantu
- **d)** uvnitř prvního kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — uvnitř prvního kvadrantu. Řešením soustavy je průsečík $[1;3]$.

</details>

### `vl-vse-0717` — Vlastní úloha ve stylu přijímaček VŠE (č. 717)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ x+y-2=0$ a $p_2:\ x-3y-6=0$ se protínají:

- **a)** uvnitř prvního kvadrantu
- **b)** uvnitř čtvrtého kvadrantu
- **c)** uvnitř druhého kvadrantu
- **d)** uvnitř třetího kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — uvnitř čtvrtého kvadrantu. Řešením soustavy je průsečík $[3;-1]$.

</details>

### `vl-vse-0750` — Vlastní úloha ve stylu přijímaček VŠE (č. 750)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ 2x-y+3=0$ a $p_2:\ 2x-3y+5=0$ se protínají:

- **a)** uvnitř druhého kvadrantu
- **b)** uvnitř čtvrtého kvadrantu
- **c)** uvnitř prvního kvadrantu
- **d)** uvnitř třetího kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — uvnitř druhého kvadrantu. Řešením soustavy je průsečík $[-1;1]$.

</details>

### `vl-vse-0831` — Vlastní úloha ve stylu přijímaček VŠE (č. 831)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ 3x+2y+1=0$ a $p_2:\ x-3y-7=0$ se protínají:

- **a)** uvnitř čtvrtého kvadrantu
- **b)** uvnitř prvního kvadrantu
- **c)** uvnitř druhého kvadrantu
- **d)** uvnitř třetího kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — uvnitř čtvrtého kvadrantu. Řešením soustavy je průsečík $[1;-2]$.

</details>

### `vl-vse-0834` — Vlastní úloha ve stylu přijímaček VŠE (č. 834)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ 3x+y+3=0$ a $p_2:\ x+3y-7=0$ se protínají:

- **a)** uvnitř prvního kvadrantu
- **b)** uvnitř třetího kvadrantu
- **c)** uvnitř čtvrtého kvadrantu
- **d)** uvnitř druhého kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — uvnitř druhého kvadrantu. Řešením soustavy je průsečík $[-2;3]$.

</details>

### `vl-vse-0860` — Vlastní úloha ve stylu přijímaček VŠE (č. 860)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ x-y=0$ a $p_2:\ x-2y-2=0$ se protínají:

- **a)** uvnitř prvního kvadrantu
- **b)** uvnitř třetího kvadrantu
- **c)** uvnitř druhého kvadrantu
- **d)** uvnitř čtvrtého kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — uvnitř třetího kvadrantu. Řešením soustavy je průsečík $[-2;-2]$.

</details>

### `vl-vse-0922` — Vlastní úloha ve stylu přijímaček VŠE (č. 922)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ 3x+2y+15=0$ a $p_2:\ 2x+3y+15=0$ se protínají:

- **a)** uvnitř čtvrtého kvadrantu
- **b)** uvnitř prvního kvadrantu
- **c)** uvnitř druhého kvadrantu
- **d)** uvnitř třetího kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — uvnitř třetího kvadrantu. Řešením soustavy je průsečík $[-3;-3]$.

</details>

### `vl-vse-0949` — Vlastní úloha ve stylu přijímaček VŠE (č. 949)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ 3x+y=0$ a $p_2:\ x-3y+10=0$ se protínají:

- **a)** uvnitř třetího kvadrantu
- **b)** uvnitř druhého kvadrantu
- **c)** uvnitř čtvrtého kvadrantu
- **d)** uvnitř prvního kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — uvnitř druhého kvadrantu. Řešením soustavy je průsečík $[-1;3]$.

</details>

### `vl-vse-0956` — Vlastní úloha ve stylu přijímaček VŠE (č. 956)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ 2x+y=0$ a $p_2:\ x+3y+5=0$ se protínají:

- **a)** uvnitř čtvrtého kvadrantu
- **b)** uvnitř třetího kvadrantu
- **c)** uvnitř druhého kvadrantu
- **d)** uvnitř prvního kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — uvnitř čtvrtého kvadrantu. Řešením soustavy je průsečík $[1;-2]$.

</details>

### `vl-vse-1171` — Vlastní úloha ve stylu přijímaček VŠE (č. 1171)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ 3x+y-6=0$ a $p_2:\ x-y+2=0$ se protínají:

- **a)** uvnitř prvního kvadrantu
- **b)** uvnitř čtvrtého kvadrantu
- **c)** uvnitř třetího kvadrantu
- **d)** uvnitř druhého kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — uvnitř prvního kvadrantu. Řešením soustavy je průsečík $[1;3]$.

</details>

### `vl-vse-1213` — Vlastní úloha ve stylu přijímaček VŠE (č. 1213)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p_1:\ 2x+y-4=0$ a $p_2:\ 2x-3y-12=0$ se protínají:

- **a)** uvnitř čtvrtého kvadrantu
- **b)** uvnitř druhého kvadrantu
- **c)** uvnitř třetího kvadrantu
- **d)** uvnitř prvního kvadrantu
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — uvnitř čtvrtého kvadrantu. Řešením soustavy je průsečík $[3;-2]$.

</details>

### `vl-obec-064` — Vlastní úloha ve stylu přijímacích testů (č. 64)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Poloměr kružnice $x^2+y^2-6x+8y-11=0$ je roven:

- **a)** $36$
- **b)** $\sqrt{11}$
- **c)** $6$
- **d)** $5$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**c** — $6$. $(x-3)^2+(y+4)^2=36$.

</details>

### `vl-nsz-146` — [Vlastní úloha ve stylu NSZ Matematika (č. 146)](https://www.scio.cz/matematika)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice je dána rovnicí $x^2+y^2-8x+6y=0$. Jaká je vzdálenost jejího středu od počátku soustavy souřadnic?

- **a)** $3$
- **b)** $4$
- **c)** $5$
- **d)** $25$

<details><summary>Ответ и решение</summary>

**c** — $5$. $(x-4)^2+(y+3)^2=25$, střed $[4;-3]$, $\sqrt{16+9}=5$.

</details>

### `vl-nsz-005` — [Vlastní úloha ve stylu NSZ Matematika (č. 5)](https://www.scio.cz/matematika)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ze čtvercového plechu odstřihneme ve všech čtyřech rozích čtverečky o straně rovné pětině strany plechu. Zbylý plech má o 36 cm$^2$ menší obsah než původní. Jaký byl obsah původního plechu?

- **a)** $100$ cm$^2$
- **b)** $144$ cm$^2$
- **c)** $225$ cm$^2$
- **d)** $900$ cm$^2$

<details><summary>Ответ и решение</summary>

**c** — $225$ cm$^2$. $4\cdot\left(\frac a5\right)^2=\frac{4a^2}{25}=36$, $a^2=225$.

</details>

### `vl-obec-028` — Vlastní úloha ve stylu přijímacích testů (č. 28)

*Темы:* 34. Planimetrie, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V pravoúhlém trojúhelníku $ABC$ s pravým úhlem u $C$ je odvěsna $BC$ poloviční než přepona $AB$. Jak velký je úhel při vrcholu $A$?

- **a)** $30^\circ$
- **b)** $45^\circ$
- **c)** $60^\circ$
- **d)** $90^\circ$
- **e)** Žádná z uvedených možností není správná.

<details><summary>Ответ и решение</summary>

**a** — $30^\circ$. $\sin\alpha=\frac{|BC|}{|AB|}=\frac12$.

</details>

### `vl-obec-031` — Vlastní úloha ve stylu přijímacích testů (č. 31)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vnitřní úhly trojúhelníku jsou v poměru $2:3:7$. Největší z nich má:

- **a)** $90^\circ$
- **b)** $100^\circ$
- **c)** $105^\circ$
- **d)** $110^\circ$
- **e)** $120^\circ$

<details><summary>Ответ и решение</summary>

**c** — $105^\circ$. $\frac7{12}\cdot180^\circ$.

</details>

### `vl-obec-068` — Vlastní úloha ve stylu přijímacích testů (č. 68)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik úhlopříček má konvexní desetiúhelník?

- **a)** $20$
- **b)** $35$
- **c)** $40$
- **d)** $45$
- **e)** $90$

<details><summary>Ответ и решение</summary>

**b** — $35$. $\frac{10\cdot7}2$.

</details>

### `vl-nsz-070` — [Vlastní úloha ve stylu NSZ Matematika (č. 70)](https://www.scio.cz/matematika)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Čtyřúhelník $ABCD$ je vepsán do kružnice, $\angle ABC=70^\circ$ a $\angle BAD=95^\circ$. Jak velký je úhel $ADC$?

- **a)** $70^\circ$
- **b)** $85^\circ$
- **c)** $95^\circ$
- **d)** $110^\circ$

<details><summary>Ответ и решение</summary>

**d** — $110^\circ$. V tětivovém čtyřúhelníku je součet protějších úhlů $180^\circ$: $\angle ADC=180^\circ-70^\circ$.

</details>

### `vl-obec-085` — Vlastní úloha ve stylu přijímacích testů (č. 85)

*Темы:* 34. Planimetrie, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obvod obdélníku je 34 cm a jeho úhlopříčka měří 13 cm. Obsah obdélníku je:

- **a)** $50$ cm$^2$
- **b)** $60$ cm$^2$
- **c)** $64$ cm$^2$
- **d)** $72$ cm$^2$
- **e)** $120$ cm$^2$

<details><summary>Ответ и решение</summary>

**b** — $60$ cm$^2$. $a+b=17$, $a^2+b^2=169$, $2ab=289-169$.

</details>

### `vl-nsz-115` — [Vlastní úloha ve stylu NSZ Matematika (č. 115)](https://www.scio.cz/matematika)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pravidelný šestiúhelník má obvod 72 cm. Pravidelný $n$-úhelník má obvod o polovinu větší, ale jeho strana je o 25 % kratší než strana šestiúhelníku. Čemu se rovná $n$?

- **a)** $8$
- **b)** $9$
- **c)** $10$
- **d)** $12$

<details><summary>Ответ и решение</summary>

**d** — $12$. Strana šestiúhelníku $12$, strana $n$-úhelníku $9$, obvod $108$: $n=12$.

</details>

### `vl-obec-001` — Vlastní úloha ve stylu přijímacích testů (č. 1)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvádr má čtvercovou podstavu a výšku dvakrát větší, než je podstavná hrana. Jeho povrch je 160 cm$^2$. Určete objem.

<details><summary>Ответ и решение</summary>

$128$ cm$^3$. $2a^2+4\cdot2a^2=10a^2=160$, $a=4$.

</details>

### `vl-nsz-025` — [Vlastní úloha ve stylu NSZ Matematika (č. 25)](https://www.scio.cz/matematika)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na čtvercovém půdorysu $3\times3$ políček stojí sloupce krychliček o hraně 3 cm. Počty krychliček ve sloupcích jsou po řádcích: $3, 1, 2$; $2, 0, 1$; $1, 1, 3$. Stavbu chceme nejmenším počtem krychliček doplnit na krychli $3\times3\times3$. Jaký objem mají doplněné krychličky dohromady?

- **a)** $13$ cm$^3$
- **b)** $243$ cm$^3$
- **c)** $351$ cm$^3$
- **d)** $378$ cm$^3$

<details><summary>Ответ и решение</summary>

**c** — $351$ cm$^3$. Stojí $14$ krychliček z $27$, chybí $13$; každá má objem $27$ cm$^3$: $13\cdot27=351$.

</details>

### `vl-obec-038` — Vlastní úloha ve stylu přijímacích testů (č. 38)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kovový váleček má poloměr podstavy 3 cm a výšku 8 cm. Kolik kuliček o poloměru 1 cm z něj lze odlít?

- **a)** $18$
- **b)** $24$
- **c)** $36$
- **d)** $54$
- **e)** $72$

<details><summary>Ответ и решение</summary>

**d** — $54$. $\frac{\pi\cdot9\cdot8}{\frac43\pi}=54$.

</details>

### `vl-obec-047` — Vlastní úloha ve stylu přijímacích testů (č. 47)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

O kolik procent se zvětší objem krychle, zvětší-li se její hrana o 10 %?

- **a)** o 10 %
- **b)** o 21 %
- **c)** o 30 %
- **d)** o 33,1 %
- **e)** Žádná z uvedených možností není správná.

<details><summary>Ответ и решение</summary>

**d** — o 33,1 %. $1{,}1^3=1{,}331$.

</details>

### `vl-nsz-083` — [Vlastní úloha ve stylu NSZ Matematika (č. 83)](https://www.scio.cz/matematika)

*Темы:* 35. Stereometrie, Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ze střechy o rozměrech 12 m × 5 m odtéká všechna dešťová voda do prázdné nádrže o objemu 1,5 m$^3$. Za kolik hodin se nádrž naplní při úhrnu srážek 2 mm za hodinu?

- **a)** $11$ h
- **b)** $12$ h
- **c)** $12{,}5$ h
- **d)** $15$ h

<details><summary>Ответ и решение</summary>

**c** — $12{,}5$ h. Za hodinu přiteče $60\cdot0{,}002=0{,}12$ m$^3$; $1{,}5:0{,}12=12{,}5$.

</details>

### `vl-obec-104` — Vlastní úloha ve stylu přijímacích testů (č. 104)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Krychle a koule mají stejný povrch. Které těleso má větší objem?

- **a)** krychle
- **b)** koule
- **c)** mají stejný objem
- **d)** záleží na velikosti
- **e)** Žádná z uvedených možností není správná.

<details><summary>Ответ и решение</summary>

**b** — koule. Při daném povrchu má největší objem koule.

</details>

### `vse-vzor-12` — [VŠE, vzorový test z matematiky – FMV (příklad 12, 100 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fmv.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 3, úloha 11

V rámci objednávky mělo být vyrobeno celkem $s$ kg sypké směsi. V první etapě výroby byla vyrobena třetina toho, co se mělo vyrobit celkem. Ve druhé etapě byly vyrobeny tři čtvrtiny ze zbytku celkového objednaného množství. Na třetí etapu zůstalo množství $m$ kg. Tuto situaci popisuje vztah:

*Встречается также:* VŠE, vzorový test z matematiky – FFÚ a FPH (příklad 12, 10 bodů); VŠE, vzorový test z matematiky – FIS (příklad 12, 10 bodů)

- **a)** $m=s-\frac13s-\frac34s$
- **b)** $m=\frac14\cdot\frac23s$
- **c)** $m=s-\frac13-\frac34$
- **d)** $m=\frac14s\cdot\frac23s$
- **e)** Žádná z předchozích možností.

<details><summary>Ответ и решение</summary>

**b** — $m=\frac14\cdot\frac23s$. Po první etapě zbývá $\frac23s$, druhá etapa z něj vyrobí $\frac34$, zůstane $\frac14\cdot\frac23s$.

</details>

### `vse-vzor-13` — [VŠE, vzorový test z matematiky – FMV (příklad 13, 100 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fmv.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE DÚ 3, D1

Cena za umístění informačního plakátu se odvíjí od plochy, kterou plakát zabírá. Obdélníkový plakát P1 má rozměry 75 cm a 40 cm. Plakát P2 získáme tak, že delší rozměr plakátu P1 zmenšíme o 20 %, a zároveň kratší rozměr plakátu P1 zvětšíme o 20 %. Potom platí, že:

*Встречается также:* VŠE, vzorový test z matematiky – FFÚ a FPH (příklad 13, 10 bodů); VŠE, vzorový test z matematiky – FIS (příklad 13, 10 bodů)

- **a)** Plocha plakátu P2 je stejná, jako plocha plakátu P1.
- **b)** Plocha plakátu P2 je o více než 10 % větší než plocha plakátu P1.
- **c)** Plocha plakátu P2 je o více než 8 % menší než plocha plakátu P1.
- **d)** Plocha plakátu P2 je o méně než 6 % menší než plocha plakátu P1.
- **e)** Žádná z předchozích možností.

<details><summary>Ответ и решение</summary>

**d** — Plocha plakátu P2 je o méně než 6 % menší než plocha plakátu P1.. $0{,}8\cdot1{,}2=0{,}96$: plocha klesne o $4\,\%$ ($3000\to2880$ cm$^2$).

</details>

### `vl-nsz-003` — [Vlastní úloha ve stylu NSZ Matematika (č. 3)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Čerpadlo v každých 6 hodinách běží 45 minut. Kolik času celkem běží za 30 dní?

- **a)** 2 dny 6 hodin
- **b)** 3 dny 12 hodin
- **c)** 3 dny 18 hodin
- **d)** 7 dní 12 hodin

<details><summary>Ответ и решение</summary>

**c** — 3 dny 18 hodin. 30 dní má $120$ šestihodinových úseků, $120\cdot45$ min $=90$ h $=3$ dny 18 h.

</details>

### `vl-nsz-006` — [Vlastní úloha ve stylu NSZ Matematika (č. 6)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Symbol $\circ$ představuje v rovnici $\dfrac{2\circ9}{3\circ1}=6\circ1$ jednu ze základních početních operací (všude tutéž). Kterou?

- **a)** sčítání
- **b)** odčítání
- **c)** násobení
- **d)** dělení

<details><summary>Ответ и решение</summary>

**c** — násobení. Násobení: $\frac{18}3=6$. Sčítání dává $\frac{11}4\ne7$, odčítání $-\frac72\ne5$, dělení $\frac2{27}\ne6$.

</details>

### `vl-nsz-007` — [Vlastní úloha ve stylu NSZ Matematika (č. 7)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $7654321k5$ (číslice $k$ na předposledním místě) je dělitelné devíti, jestliže:

- **a)** $k=2$
- **b)** $k=3$
- **c)** $k=6$
- **d)** $k=9$

<details><summary>Ответ и решение</summary>

**b** — $k=3$. Ciferný součet $33+k$ musí být dělitelný 9.

</details>

### `vl-obec-010` — Vlastní úloha ve stylu přijímacích testů (č. 10)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Hodnoty 4, 7, 7, 9, 13 mají aritmetický průměr $p$ a modus $m$. Platí:

- **a)** $p=m=7$
- **b)** $p=8$, $m=7$
- **c)** $p=7$, $m=9$
- **d)** $p=8$, $m=9$
- **e)** $p=m=8$

<details><summary>Ответ и решение</summary>

**b** — $p=8$, $m=7$. $\frac{40}5=8$, nejčastější hodnota 7.

</details>

### `vl-nsz-027` — [Vlastní úloha ve stylu NSZ Matematika (č. 27)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Za jakých podmínek má smysl výraz $\dfrac{a^2-9b^2}{a^2+6ab+9b^2}$?

- **a)** právě když $a\ne-3b$
- **b)** právě když $a\ne3b$ a zároveň $a\ne-3b$
- **c)** právě když $a\ne0$ nebo $b\ne0$
- **d)** právě když $a\ne3b$

<details><summary>Ответ и решение</summary>

**a** — právě když $a\ne-3b$. Jmenovatel je $(a+3b)^2$.

</details>

### `vl-nsz-030` — [Vlastní úloha ve stylu NSZ Matematika (č. 30)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Čísla $4$, $9$, $x$ jsou seřazena vzestupně. Jejich aritmetický průměr je o 2 větší než jejich medián. Jaká je hodnota $x$?

- **a)** $18$
- **b)** $20$
- **c)** $22$
- **d)** $26$

<details><summary>Ответ и решение</summary>

**b** — $20$. Medián je $9$, průměr $11$: $4+9+x=33$, $x=20$.

</details>

### `vl-obec-039` — Vlastní úloha ve stylu přijímacích testů (č. 39)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Platí: Jestliže pojede Petr, pojede i Ota. Pojede aspoň jeden z nich. Které tvrzení určitě platí?

- **a)** Petr pojede.
- **b)** Ota pojede.
- **c)** Pojedou oba.
- **d)** Pojede právě jeden z nich.
- **e)** Nepojede nikdo.

<details><summary>Ответ и решение</summary>

**b** — Ota pojede.. Kdyby Ota nejel, nejel by ani Petr — spor s tím, že jede aspoň jeden.

</details>

### `vl-nsz-046` — [Vlastní úloha ve stylu NSZ Matematika (č. 46)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik z výrazů $\frac13-\frac12$; $\log_3\frac19$; $-\sqrt2$; $(-2)^{-2}$ má hodnotu, která je záporným racionálním číslem?

- **a)** žádný
- **b)** jeden
- **c)** dva
- **d)** tři

<details><summary>Ответ и решение</summary>

**c** — dva. $-\frac16$ a $-2$ ano; $-\sqrt2$ je iracionální, $(-2)^{-2}=\frac14$ je kladné.

</details>

### `vl-obec-046` — Vlastní úloha ve stylu přijímacích testů (č. 46)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Poměr rychlostí běžce a cyklisty je $3:8$. Běžec uběhne 6 km za 40 minut. Kolik kilometrů ujede cyklista za 1,5 hodiny?

- **a)** 16 km
- **b)** 24 km
- **c)** 32 km
- **d)** 36 km
- **e)** 48 km

<details><summary>Ответ и решение</summary>

**d** — 36 km. Běžec $9$ km/h, cyklista $24$ km/h, za $1{,}5$ h $36$ km.

</details>

### `vl-nsz-052` — [Vlastní úloha ve stylu NSZ Matematika (č. 52)](https://www.scio.cz/matematika)

*Темы:* Ostatní, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Geometrický průměr čísel 2 a $b$ je 6. Jaký je jejich aritmetický průměr?

- **a)** $8$
- **b)** $9$
- **c)** $10$
- **d)** $12$

<details><summary>Ответ и решение</summary>

**c** — $10$. $\sqrt{2b}=6$, $b=18$; $\frac{2+18}2=10$.

</details>

### `vl-nsz-053` — [Vlastní úloha ve stylu NSZ Matematika (č. 53)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Tomáš nabil kartu do školní jídelny tak, aby mu peníze přesně stačily na 30 obědů. Po prvních 12 obědech jídelna zdražila oběd o 15 %. Kolik celých obědů si za nabité peníze celkem koupí?

- **a)** $30$
- **b)** $28$
- **c)** $27$
- **d)** $26$

<details><summary>Ответ и решение</summary>

**c** — $27$. Zbývá na 18 starých obědů; nový oběd stojí $1{,}15$ starého: $18:1{,}15\approx15{,}7$, tedy 15 obědů. Celkem $12+15=27$.

</details>

### `vl-obec-059` — Vlastní úloha ve stylu přijímacích testů (č. 59)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik dělitelů má číslo 72?

- **a)** $6$
- **b)** $8$
- **c)** $10$
- **d)** $12$
- **e)** $18$

<details><summary>Ответ и решение</summary>

**d** — $12$. $72=2^3\cdot3^2$: $(3+1)(2+1)=12$.

</details>

### `vl-nsz-060` — [Vlastní úloha ve stylu NSZ Matematika (č. 60)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kočka sežere denně 25 % toho, co pes. Za 30 dní sežerou dohromady 15 kg krmiva. Kolik z toho sežere kočka?

- **a)** $2{,}5$ kg
- **b)** $3$ kg
- **c)** $3{,}75$ kg
- **d)** $12$ kg

<details><summary>Ответ и решение</summary>

**b** — $3$ kg. Pes $p$, kočka $0{,}25p$: $1{,}25p=15$, $p=12$, kočka $3$ kg.

</details>

### `vl-obec-062` — Vlastní úloha ve stylu přijímacích testů (č. 62)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Doplňte výraz místo otazníku tak, aby pro všechna $x$ platilo $(2x-1)\cdot\,?\,=1-4x^2$.

<details><summary>Ответ и решение</summary>

$-(2x+1)$, tj. $-2x-1$. $1-4x^2=-(2x-1)(2x+1)$.

</details>

### `vl-nsz-072` — [Vlastní úloha ve stylu NSZ Matematika (č. 72)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Součet všech kladných dělitelů čísla 28 je:

- **a)** $28$
- **b)** $49$
- **c)** $56$
- **d)** $57$

<details><summary>Ответ и решение</summary>

**c** — $56$. $1+2+4+7+14+28=56$.

</details>

### `vl-nsz-076` — [Vlastní úloha ve stylu NSZ Matematika (č. 76)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Včelař má 18 úlů a každý dá za sezónu 15 kg medu. Třetinu medu prodá ze dvora, 25 % dodá do obchodu a zbytek rozplní do 150 sklenic. Kolik medu je v jedné sklenici?

- **a)** $0{,}5$ kg
- **b)** $0{,}6$ kg
- **c)** $0{,}75$ kg
- **d)** $0{,}9$ kg

<details><summary>Ответ и решение</summary>

**c** — $0{,}75$ kg. Medu je $270$ kg, do sklenic jde $1-\frac13-\frac14=\frac5{12}$, tj. $112{,}5$ kg; $112{,}5:150=0{,}75$.

</details>

### `vl-vse-0082` — Vlastní úloha ve stylu přijímaček VŠE (č. 82)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozložte na součin: $a^3-8b^3$.

<details><summary>Ответ и решение</summary>

$(a-2b)(a^2+2ab+4b^2)$. Vzorec pro rozdíl třetích mocnin.

</details>

### `vl-nsz-084` — [Vlastní úloha ve stylu NSZ Matematika (č. 84)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na brigádě dostává Ondra za den bez chyby bonus 150 Kč, za den s jednou chybou 50 Kč, za den se dvěma chybami nic a za den se třemi a více chybami platí 100 Kč. V dubnu pracoval 12 dní a pokaždé udělal jednu chybu. V květnu pracoval také 12 dní: 3 dny bez chyby, 4 dny se dvěma chybami, 2 dny s pěti chybami a ostatní dny s jednou chybou. Jak se změnil jeho bonus v květnu oproti dubnu?

- **a)** o 200 Kč víc
- **b)** zůstal stejný
- **c)** o 200 Kč méně
- **d)** o 400 Kč méně

<details><summary>Ответ и решение</summary>

**c** — o 200 Kč méně. Duben $12\cdot50=600$ Kč; květen $3\cdot150-2\cdot100+3\cdot50=400$ Kč.

</details>

### `vl-nsz-085` — [Vlastní úloha ve stylu NSZ Matematika (č. 85)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro kladná čísla $x$, $y$, $z$ platí $x=3y$ a $z=\frac x2$. Pak platí:

- **a)** $z>x$
- **b)** $y>z$
- **c)** $z>y$
- **d)** $x=z$

<details><summary>Ответ и решение</summary>

**c** — $z>y$. $z=\frac{3y}2>y$.

</details>

### `vl-obec-093` — Vlastní úloha ve stylu přijímacích testů (č. 93)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Které tvrzení je pravdivé?

- **a)** Součin všech celých čísel větších než $-50$ a menších než $-20$ je kladný.
- **b)** Součet všech celých čísel od $-30$ do $32$ (včetně) je $63$.
- **c)** Součin všech celých čísel od $-5$ do $5$ je $-120$.
- **d)** Součet všech lichých čísel od 1 do 99 je 2 450.
- **e)** Žádná z uvedených možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Součet všech celých čísel od $-30$ do $32$ (včetně) je $63$.. Čísla $-30$ až $30$ se vyruší, zbývá $31+32$. Součin 29 záporných čísel je záporný, součin s nulou je 0, lichá čísla do 99 dávají $50^2$.

</details>

### `vl-nsz-095` — [Vlastní úloha ve stylu NSZ Matematika (č. 95)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na záhonu o rozměrech 3 m × 1,2 m sázíme cibulky ve čtvercové síti s roztečí 15 cm; krajní řady i krajní cibulky v řadách jsou 7,5 cm od okraje záhonu. Kolik cibulek se na záhon vejde?

- **a)** $140$
- **b)** $160$
- **c)** $180$
- **d)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $160$. Na každou cibulku připadá čtverec $15\times15$ cm: $\frac{300}{15}\cdot\frac{120}{15}=20\cdot8=160$.

</details>

### `vl-obec-099` — Vlastní úloha ve stylu přijímacích testů (č. 99)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Směs obsahuje písek a cement v poměru $5:2$. Kolik kilogramů cementu je ve 42 kg směsi?

- **a)** $8$
- **b)** $12$
- **c)** $15$
- **d)** $16{,}8$
- **e)** $30$

<details><summary>Ответ и решение</summary>

**b** — $12$. $\frac27\cdot42$.

</details>

### `vl-nsz-101` — [Vlastní úloha ve stylu NSZ Matematika (č. 101)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na stojan o hmotnosti 12 kg jsou na každou stranu nasazeny dva pětikilogramové kotouče a tři kotouče po 1,25 kg. Jaká je celková hmotnost?

- **a)** $26{,}75$ kg
- **b)** $33{,}5$ kg
- **c)** $39{,}5$ kg
- **d)** $51$ kg

<details><summary>Ответ и решение</summary>

**c** — $39{,}5$ kg. Na jedné straně $10+3{,}75=13{,}75$ kg; celkem $12+2\cdot13{,}75=39{,}5$ kg.

</details>

### `vl-obec-102` — Vlastní úloha ve stylu přijímacích testů (č. 102)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je-li celé kladné číslo $k$ násobkem čísla 90, pak číslo $\dfrac k{15}$ je určitě dělitelné číslem:

- **a)** $4$
- **b)** $5$
- **c)** $6$
- **d)** $9$
- **e)** Nelze určit bez dalších informací.

<details><summary>Ответ и решение</summary>

**c** — $6$. $k=90m$, $\frac k{15}=6m$.

</details>

### `vl-nsz-104` — [Vlastní úloha ve stylu NSZ Matematika (č. 104)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kalkulačka má poruchu: při sčítání přičte dvojnásobek druhého čísla a při násobení násobí číslem opačným. Ostatní operace počítá správně. Jaký výsledek ukáže, když k číslu $-5$ přičteme $4$, výsledek vynásobíme třemi a nakonec vydělíme dvěma?

- **a)** $-13{,}5$
- **b)** $-4{,}5$
- **c)** $-1{,}5$
- **d)** $4{,}5$

<details><summary>Ответ и решение</summary>

**b** — $-4{,}5$. $-5+2\cdot4=3$, pak $3\cdot(-3)=-9$, nakonec $-9:2=-4{,}5$.

</details>

### `vl-nsz-109` — [Vlastní úloha ve stylu NSZ Matematika (č. 109)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Která možnost je negací výroku „Každý žák naší třídy umí plavat nebo jezdit na kole“?

- **a)** Žádný žák naší třídy neumí plavat ani jezdit na kole.
- **b)** Aspoň jeden žák naší třídy neumí plavat ani jezdit na kole.
- **c)** Každý žák naší třídy neumí plavat nebo neumí jezdit na kole.
- **d)** Aspoň jeden žák naší třídy neumí plavat nebo neumí jezdit na kole.

<details><summary>Ответ и решение</summary>

**b** — Aspoň jeden žák naší třídy neumí plavat ani jezdit na kole.. Negace „každý má vlastnost $V$“ je „aspoň jeden nemá $V$“; negace „$P$ nebo $Q$“ je „ani $P$, ani $Q$“.

</details>

### `vl-obec-109` — Vlastní úloha ve stylu přijímacích testů (č. 109)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Cena zboží se zvýšila o 25 % a potom snížila o 20 %. Jak se změnila oproti původní ceně?

- **a)** zvýšila se o 5 %
- **b)** nezměnila se
- **c)** snížila se o 5 %
- **d)** zvýšila se o 0,5 %
- **e)** Žádná z uvedených možností není správná.

<details><summary>Ответ и решение</summary>

**b** — nezměnila se. $1{,}25\cdot0{,}8=1$.

</details>

### `vl-nsz-111` — [Vlastní úloha ve stylu NSZ Matematika (č. 111)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zvětšíme-li číslo $x$ o 25 %, dostaneme dvě třetiny čísla, které je o 6 menší než polovina ze 102. Jaké je číslo $x$?

- **a)** $20$
- **b)** $24$
- **c)** $30$
- **d)** $36$

<details><summary>Ответ и решение</summary>

**b** — $24$. $\frac23\cdot45=30=1{,}25x$, $x=24$.

</details>

### `vl-nsz-127` — [Vlastní úloha ve stylu NSZ Matematika (č. 127)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro operaci $\star$ platí $(-3)\star4=2$. Který předpis tomu odpovídá?

- **a)** $A\star B=\dfrac{A+B}2$
- **b)** $A\star B=-A-B+3$
- **c)** $A\star B=\dfrac{AB}6$
- **d)** $A\star B=2A+B$

<details><summary>Ответ и решение</summary>

**b** — $A\star B=-A-B+3$. $3-4+3=2$; ostatní dávají $\frac12$, $-2$, $-2$.

</details>

### `vl-nsz-135` — [Vlastní úloha ve stylu NSZ Matematika (č. 135)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Autobus vyjede ze zastávky A, projede zastávky B, C, D v libovolném pořadí a vrátí se do A. Jízda mezi zastávkami trvá (v minutách): A–B 4, A–C 7, A–D 5, B–C 3, B–D 6, C–D 2. Kolik nejméně minut trvá okružní jízda?

- **a)** $14$
- **b)** $16$
- **c)** $19$
- **d)** $21$

<details><summary>Ответ и решение</summary>

**a** — $14$. Okruhy (a jejich obrácené pořadí): A–B–C–D–A $14$, A–B–D–C–A $19$, A–C–B–D–A $21$.

</details>

### `vl-nsz-139` — [Vlastní úloha ve stylu NSZ Matematika (č. 139)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Operace $\oplus$ je definována vztahem $a\oplus b=\dfrac{a^2-b}{a+b}$ (pro $a+b\ne0$). Čemu je rovna hodnota $3\oplus1$?

- **a)** hodnotě $1\oplus3$
- **b)** hodnotě $4\oplus2$
- **c)** hodnotě $2\oplus0$
- **d)** hodnotě $-(1\oplus1)$

<details><summary>Ответ и решение</summary>

**c** — hodnotě $2\oplus0$. $3\oplus1=\frac84=2$ a $2\oplus0=\frac42=2$; ostatní dávají $-\frac12$, $\frac73$, $0$.

</details>

### `vl-nsz-145` — [Vlastní úloha ve stylu NSZ Matematika (č. 145)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zdvojený operátor ($++$, $--$, $\cdot\cdot$, $::$) znamená: číslo vlevo zvětšíme o 2, číslo vpravo vydělíme dvěma a pak provedeme obyčejnou operaci. Čemu se rovná $(4--6)\cdot\cdot\,2$?

- **a)** $3$
- **b)** $5$
- **c)** $8$
- **d)** $10$

<details><summary>Ответ и решение</summary>

**b** — $5$. $4--6=(4+2)-3=3$; $3\cdot\cdot\,2=(3+2)\cdot1=5$.

</details>

### `vl-nsz-149` — [Vlastní úloha ve stylu NSZ Matematika (č. 149)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vstupenka zlevněná o tři osminy původní ceny stojí 250 Kč. Kolik by stála, kdyby byla zlevněná jen o pětinu?

- **a)** $300$ Kč
- **b)** $312{,}50$ Kč
- **c)** $320$ Kč
- **d)** $350$ Kč

<details><summary>Ответ и решение</summary>

**c** — $320$ Kč. $\frac58p=250$, $p=400$; $\frac45\cdot400=320$.

</details>

### `vl-nsz-159` — [Vlastní úloha ve stylu NSZ Matematika (č. 159)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Cena jízdy taxíkem se počítá takto: počet ujetých kilometrů se vynásobí cenou za kilometr, přičte se nástupní poplatek a celá částka se zvýší o noční příplatek v procentech. Tomu odpovídá vzorec $X=(A\cdot B+C)\left(1+\frac D{100}\right)$. Co mohou znamenat jednotlivé proměnné?

- **a)** $A$ — cena za km, $B$ — počet km, $C$ — nástupní poplatek, $D$ — noční příplatek v %
- **b)** $A$ — počet km, $B$ — nástupní poplatek, $C$ — cena za km, $D$ — noční příplatek v %
- **c)** $A$ — noční příplatek v %, $B$ — počet km, $C$ — nástupní poplatek, $D$ — cena za km
- **d)** $A$ — cena za km, $B$ — počet km, $C$ — noční příplatek v %, $D$ — nástupní poplatek

<details><summary>Ответ и решение</summary>

**a** — $A$ — cena za km, $B$ — počet km, $C$ — nástupní poplatek, $D$ — noční příplatek v %. Součin $A\cdot B$ musí být „km krát cena za km“, $C$ se přičítá (poplatek) a $D$ je v procentech.

</details>

### `vl-nsz-164` — [Vlastní úloha ve stylu NSZ Matematika (č. 164)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Prvočíselný rozklad čísla 2030 obsahuje několik různých prvočísel. Ciferný součet součtu dvou největších z nich je dělitelný:

- **a)** deseti
- **b)** sedmi
- **c)** čtyřmi
- **d)** třemi

<details><summary>Ответ и решение</summary>

**d** — třemi. $2030=2\cdot5\cdot7\cdot29$; $7+29=36$, ciferný součet $9$.

</details>

### `vl-nsz-169` — [Vlastní úloha ve stylu NSZ Matematika (č. 169)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

E-shop přičítá k uvedené ceně $C$ Kč balné ve výši $0{,}05\cdot(C+2\,000)$ Kč, jiné poplatky nejsou. O kolik zaplatíme víc v e-shopu za zboží s uvedenou cenou 8 800 Kč než v prodejně, která ho prodává za 9 000 Kč včetně všeho?

- **a)** o 140 Kč
- **b)** o 200 Kč
- **c)** o 340 Kč
- **d)** o 540 Kč

<details><summary>Ответ и решение</summary>

**c** — o 340 Kč. Balné $0{,}05\cdot10\,800=540$ Kč, celkem $9\,340$ Kč.

</details>

### `vl-nsz-194` — [Vlastní úloha ve stylu NSZ Matematika (č. 194)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Firma uložila 1. dubna na účet 40 000 Kč. Na konci každého čtvrtletí banka připíše úrok 1,5 % z původně uložené částky; jiné pohyby na účtu nejsou. Kolik korun bude na účtu po připsání úroku na konci druhého roku od vložení?

- **a)** 40 600 Kč
- **b)** 44 800 Kč
- **c)** 45 060 Kč
- **d)** 52 000 Kč

<details><summary>Ответ и решение</summary>

**b** — 44 800 Kč. Za čtvrtletí se připíše $600$ Kč, za dva roky (8 čtvrtletí) $4\,800$ Kč.

</details>

### `vl-nsz-197` — [Vlastní úloha ve stylu NSZ Matematika (č. 197)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Platí výrok: „Jestliže je venku mráz, Jirka si vezme rukavice.“ Který výrok je s ním ekvivalentní?

- **a)** Jestliže není mráz, Jirka si rukavice nevezme.
- **b)** Jestliže si Jirka vezme rukavice, je venku mráz.
- **c)** Jestliže si Jirka nevezme rukavice, není venku mráz.
- **d)** Jestliže si Jirka vezme čepici, není venku mráz.

<details><summary>Ответ и решение</summary>

**c** — Jestliže si Jirka nevezme rukavice, není venku mráz.. Obměna implikace $A\Rightarrow B$ je $\neg B\Rightarrow\neg A$.

</details>

### `vl-nsz-206` — [Vlastní úloha ve stylu NSZ Matematika (č. 206)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pekárna má objednávku na $K$ koláčů. Peče v $P$ pecích, v každé je $L$ plechů a na každém plechu 12 koláčů. Každý šestý koláč se nepovede a nedá se prodat. Kolik koláčů $X$ bude chybět do splnění objednávky (předpokládejte, že jich bude málo)?

- **a)** $X=K-10PL$
- **b)** $X=K-12PL$
- **c)** $X=K-2PL$
- **d)** $X=10PL-K$

<details><summary>Ответ и решение</summary>

**a** — $X=K-10PL$. Upeče se $12PL$ koláčů, prodat lze $\frac56$ z nich, tj. $10PL$.

</details>

## Уровень 2 — стандартный

### `vse-vzor-14` — [VŠE, vzorový test z matematiky – FMV (příklad 14, 100 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fmv.pdf)

*Темы:* 1. Množina. Podmnožina · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE DÚ 3, D2 (pool přijímaček)

O skupině 32 zaměstnanců máme následující informace ve vztahu k ovládání programu MS Teams a tvorbě kontingenčních tabulek. 24 zaměstnanců má alespoň jednu z těchto dovedností. 25 zaměstnanců má nejvýše jednu z nich. MS Teams ovládá o 7 více zaměstnanců, než je počet těch, co umí vytvářet kontingenční tabulky. Kolik minimálně členů musí mít tým, který bude náhodně vytvořený z této skupiny, aby byla jistota, že v týmu bude člen, který umí vytvářet kontingenční tabulky?

*Встречается также:* VŠE, vzorový test z matematiky – FFÚ a FPH (příklad 14, 10 bodů); VŠE, vzorový test z matematiky – FIS (příklad 14, 10 bodů)

- **a)** $13$
- **b)** $21$
- **c)** $24$
- **d)** $19$
- **e)** Žádná z předchozích možností.

<details><summary>Ответ и решение</summary>

**b** — $21$. Obě dovednosti má $32-25=7$, tedy $|T|+|K|=24+7=31$ a $|T|=|K|+7$: $|K|=12$. Bez tabulek je $20$ lidí, proto je třeba $21$.

</details>

### `vse-a-09` — [VŠE, vzor přijímacích zkoušek A (úloha 9)](https://www.vse.cz/wp-content/uploads/page/2128/test-A.pdf)

*Темы:* 1. Množina. Podmnožina · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE DÚ 5, D8 (pool přijímaček)

Mezi učiteli proběhla anketa ohledně využívání MS Teams a Zoom při online výuce. Ze získaných dat se zjistilo, že alespoň jeden z těchto programů využívá 250 vyučujících. Maximálně jeden z těchto programů využívá 240 učitelů. MS Teams využívá 130 učitelů a Zoom používá 150 učitelů. Počet vyučujících, kteří nepoužívají žádný z těchto programů, leží v intervalu

- **a)** $\langle0;9\rangle$
- **b)** $\langle10;20\rangle$
- **c)** $\langle21;30\rangle$
- **d)** $\langle31;40\rangle$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $20$. Oba programy: $130+150-250=30$; všech vyučujících $240+30=270$; žádný: $270-250=20$.

</details>

### `vl-nsz-023` — [Vlastní úloha ve stylu NSZ Matematika (č. 23)](https://www.scio.cz/matematika)

*Темы:* 1. Množina. Podmnožina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro množiny $A$, $B$, $C$ platí $A\cap B=A$, $B\cup C=C$ a $C\subseteq A$. Které tvrzení pak určitě platí?

- **a)** $A\cap C=\emptyset$
- **b)** $C\setminus B=\emptyset$
- **c)** $B\cup C=\emptyset$
- **d)** $A\setminus B=A$

<details><summary>Ответ и решение</summary>

**b** — $C\setminus B=\emptyset$. Z rovností plyne $A\subseteq B\subseteq C\subseteq A$, množiny jsou tedy stejné a $C\setminus B=\emptyset$.

</details>

### `vl-obec-060` — Vlastní úloha ve stylu přijímacích testů (č. 60)

*Темы:* 1. Množina. Podmnožina, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je dána množina $A=\{x\in\mathbb Z;\ |x-\mathrm e|\ge3\}$, kde $\mathrm e\approx2{,}718$. Je-li $B$ její doplněk v množině celých čísel, má $B$ prvků:

- **a)** $4$
- **b)** $5$
- **c)** $6$
- **d)** $7$
- **e)** $8$

<details><summary>Ответ и решение</summary>

**c** — $6$. $B=\{x\in\mathbb Z;\ |x-\mathrm e|<3\}$, tj. $-0{,}28<x<5{,}72$: čísla $0,1,\dots,5$.

</details>

### `vl-nsz-129` — [Vlastní úloha ve stylu NSZ Matematika (č. 129)](https://www.scio.cz/matematika)

*Темы:* 1. Množina. Podmnožina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Která rovnost platí pro libovolné množiny $A$ a $B$?

- **a)** $A\cup B=A\cup(B\setminus A)$
- **b)** $A\setminus B=B\setminus A$
- **c)** $A\cap B=A\cup B$
- **d)** $A\setminus(A\cap B)=B$

<details><summary>Ответ и решение</summary>

**a** — $A\cup B=A\cup(B\setminus A)$. K $A$ stačí přidat ty prvky $B$, které v $A$ ještě nejsou.

</details>

### `vl-nsz-168` — [Vlastní úloha ve stylu NSZ Matematika (č. 168)](https://www.scio.cz/matematika)

*Темы:* 1. Množina. Podmnožina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ve třídě je 40 studentů. Matematiku má rádo 33, fyziku 36 a chemii 30 z nich. Kolik nejméně studentů má rádo všechny tři předměty?

- **a)** $19$
- **b)** $23$
- **c)** $27$
- **d)** $29$

<details><summary>Ответ и решение</summary>

**a** — $19$. Matematiku nemá rádo 7, fyziku 4, chemii 10 studentů; nejvýše $21$ studentů tedy nemá rádo některý předmět, takže aspoň $40-21=19$ má rádo všechny.

</details>

### `vse-b-01` — [VŠE, vzor přijímacích zkoušek B (úloha 1)](https://vse.cz/wp-content/uploads/page/2128/test-B.pdf)

*Темы:* 2. Mocnina. Odmocnina, Ostatní · *Текст:* текст оригинала (по курсу)

Výraz $\dfrac{x^{-1}+y^{-1}}{x^{-2}-y^{-2}}$ je roven

- **a)** $\dfrac{xy}{x-y}$, pokud $x\ne0\wedge y\ne0\wedge y\ne x$
- **b)** $\dfrac{xy}{y+x}$, pokud $x\ne0\wedge y\ne0\wedge y\ne\pm x$
- **c)** $\dfrac{xy}{y-x}$, pokud $x\ne0\wedge y\ne0\wedge y\ne x$
- **d)** $\dfrac{xy}{y-x}$, pokud $x\ne0\wedge y\ne0\wedge y\ne\pm x$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{xy}{y-x}$, pokud $x\ne0\wedge y\ne0\wedge y\ne\pm x$. $\dfrac{\frac{x+y}{xy}}{\frac{y^2-x^2}{x^2y^2}}=\dfrac{xy(x+y)}{(y-x)(y+x)}=\dfrac{xy}{y-x}$; jmenovatel původního výrazu je nulový pro $y=\pm x$.

</details>

### `vl-obec-014` — Vlastní úloha ve stylu přijímacích testů (č. 14)

*Темы:* 2. Mocnina. Odmocnina, 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\dfrac{|\sqrt2-\sqrt5|}{|1-\sqrt2|+|3-\sqrt5|-2}$ je roven číslu:

- **a)** $-1$
- **b)** $1$
- **c)** $\dfrac12$
- **d)** $-\dfrac12$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**a** — $-1$. Čitatel $\sqrt5-\sqrt2$; jmenovatel $(\sqrt2-1)+(3-\sqrt5)-2=\sqrt2-\sqrt5$. Podíl je $-1$.

</details>

### `vl-nsz-024` — [Vlastní úloha ve stylu NSZ Matematika (č. 24)](https://www.scio.cz/matematika)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro všechna kladná $x$ platí $\dfrac{\sqrt[3]{x^2}\cdot x}{\sqrt{x^5}}=x^t$. Které tvrzení o čísle $t$ je pravdivé?

- **a)** $t$ je kladné celé číslo
- **b)** $t$ je záporné celé číslo
- **c)** $t$ je kladné racionální číslo, které není celé
- **d)** $t$ je záporné racionální číslo, které není celé

<details><summary>Ответ и решение</summary>

**d** — $t$ je záporné racionální číslo, které není celé. $t=\frac23+1-\frac52=-\frac56$.

</details>

### `vl-obec-101` — Vlastní úloha ve stylu přijímacích testů (č. 101)

*Темы:* 2. Mocnina. Odmocnina, 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Součet $4^5+4^4\cdot3+4^3\cdot3^2+4^2\cdot3^3+4\cdot3^4+3^5$ je roven:

- **a)** $4^6-3^6$
- **b)** $4^6+3^6$
- **c)** $4^5-3^5$
- **d)** $7^5$
- **e)** $\dfrac{4^6-3^6}7$

<details><summary>Ответ и решение</summary>

**a** — $4^6-3^6$. $(4-3)(4^5+4^4\cdot3+\dots+3^5)=4^6-3^6$.

</details>

### `vl-nsz-103` — [Vlastní úloha ve stylu NSZ Matematika (č. 103)](https://www.scio.cz/matematika)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jakou hodnotu musí mít reálné číslo $a$, aby pro všechna kladná $s$, $t$ platilo $(st^2)^a\cdot\dfrac{s^2}{t^4}=s^4$?

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** Takové $a$ neexistuje.

<details><summary>Ответ и решение</summary>

**c** — $2$. Exponent u $s$: $a+2=4$; u $t$: $2a-4=0$. Obě podmínky dávají $a=2$.

</details>

### `vl-nsz-114` — [Vlastní úloha ve stylu NSZ Matematika (č. 114)](https://www.scio.cz/matematika)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Nechť $n$ je kladné celé číslo. Kolik čísel $2^n$ je třeba sečíst, abychom dostali $2^{3n}$?

- **a)** $3$
- **b)** $2n$
- **c)** $n^2$
- **d)** $4^n$

<details><summary>Ответ и решение</summary>

**d** — $4^n$. $k\cdot2^n=2^{3n}$, tedy $k=2^{2n}=4^n$.

</details>

### `vl-nsz-140` — [Vlastní úloha ve stylu NSZ Matematika (č. 140)](https://www.scio.cz/matematika)

*Темы:* 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro čísla $2^{45}$, $3^{30}$ a $5^{20}$ platí:

- **a)** $3^{30}>5^{20}>2^{45}$
- **b)** $5^{20}>3^{30}>2^{45}$
- **c)** $2^{45}>3^{30}>5^{20}$
- **d)** $3^{30}>2^{45}>5^{20}$

<details><summary>Ответ и решение</summary>

**a** — $3^{30}>5^{20}>2^{45}$. Se společným exponentem 5: $2^{45}=512^5$, $3^{30}=729^5$, $5^{20}=625^5$.

</details>

### `vse-vzor-11` — [VŠE, vzorový test z matematiky – FMV (příklad 11, 100 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fmv.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 3, úloha 10

Ze dvou částek, ze kterých jedna je úročena čtrnácti procenty a druhá osmi procenty ročně, byl za jeden rok získán celkem úrok ve výši 6000 Kč. Pokud by se úrokové sazby navzájem vyměnily, dosahoval by celkový úrok za stejné období hodnoty o 1200 Kč vyšší. Vyšší z původních částek (v Kč) je z intervalu:

*Встречается также:* VŠE, vzorový test z matematiky – FFÚ a FPH (příklad 11, 10 bodů); VŠE, vzorový test z matematiky – FIS (příklad 11, 10 bodů)

- **a)** $(27000;32000\rangle$
- **b)** $(32000;37000\rangle$
- **c)** $(37000;42000\rangle$
- **d)** $(42000;45000\rangle$
- **e)** Žádná z předchozích možností.

<details><summary>Ответ и решение</summary>

**c** — $40\,000$ Kč. $0{,}14a+0{,}08b=6000$, $0{,}08a+0{,}14b=7200$. Součet: $a+b=60\,000$, rozdíl: $b-a=20\,000$, tedy $b=40\,000$, $a=20\,000$.

</details>

### `vse-a-08` — [VŠE, vzor přijímacích zkoušek A (úloha 8)](https://www.vse.cz/wp-content/uploads/page/2128/test-A.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 3, úloha 12

Soustava rovnic $(x,y\in R)$ $\begin{array}{c}xy+3x=0\\x^2+y^2=25\end{array}$

- **a)** má pouze jedno řešení
- **b)** má právě dvě řešení
- **c)** má právě čtyři řešení
- **d)** nemá řešení
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**c** — má právě čtyři řešení. $x(y+3)=0$: $x=0\Rightarrow y=\pm5$; $y=-3\Rightarrow x=\pm4$.

</details>

### `vse-b-09` — [VŠE, vzor přijímacích zkoušek B (úloha 9)](https://vse.cz/wp-content/uploads/page/2128/test-B.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE DÚ 3, D9 (pool přijímaček)

Na odvezení nákladu připravila dopravní společnost několik kontejnerů. Bude-li se nakládat do kontejnerů po 15,5 t, zbydou tři tuny nákladu. Bude-li se však nakládat do kontejnerů po 18 t, bude jeden kontejner zatížen jen polovičním nákladem než ostatní a jeden se zcela ušetří. Počet připravených kontejnerů patří do intervalu

- **a)** $(0;10)$
- **b)** $\langle10;12)$
- **c)** $\langle12;14)$
- **d)** $\langle14;18)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**c** — $12$. $15{,}5n+3=18(n-2)+9\Rightarrow2{,}5n=30$, $n=12$.

</details>

### `vl-obec-011` — Vlastní úloha ve stylu přijímacích testů (č. 11)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Soustava $2x-3y=4$, $-4x+6y=c$ nemá žádné řešení, právě když:

- **a)** $c=-8$
- **b)** $c\ne-8$
- **c)** $c=8$
- **d)** $c\ne8$
- **e)** $c=0$

<details><summary>Ответ и решение</summary>

**b** — $c\ne-8$. Levé strany jsou úměrné ($\cdot(-2)$); řešení by existovalo jen pro $c=-8$.

</details>

### `vl-nsz-022` — [Vlastní úloha ve stylu NSZ Matematika (č. 22)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Dva běžci uběhnou stejnou trať stálou rychlostí. Rychlejší běží o 1,2 m/s rychleji a trať uběhne za čas o čtvrtinu kratší. Jakou rychlostí běží pomalejší běžec?

- **a)** $3{,}2$ m/s
- **b)** $3{,}6$ m/s
- **c)** $4$ m/s
- **d)** $4{,}8$ m/s

<details><summary>Ответ и решение</summary>

**b** — $3{,}6$ m/s. Čas $\frac34$ znamená rychlost $\frac43v$: $\frac v3=1{,}2$, $v=3{,}6$.

</details>

### `vl-nsz-029` — [Vlastní úloha ve stylu NSZ Matematika (č. 29)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kavárna denně spotřebuje $x$ kg kávy na espresso a $2x+0{,}5$ kg na cappuccino. Na ostatní nápoje spotřebuje denně polovinu toho, co na espresso a cappuccino dohromady. Za 30 dní spotřebuje 90 kg kávy. Kolik kávy denně spotřebuje na cappuccino?

- **a)** $15$ g
- **b)** $150$ g
- **c)** $1\,500$ g
- **d)** $2\,000$ g

<details><summary>Ответ и решение</summary>

**c** — $1\,500$ g. Denně $3$ kg $=1{,}5(3x+0{,}5)$, tedy $3x+0{,}5=2$, $x=0{,}5$; cappuccino $2\cdot0{,}5+0{,}5=1{,}5$ kg.

</details>

### `vl-nsz-089` — [Vlastní úloha ve stylu NSZ Matematika (č. 89)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Klára šije 8 hodin denně. Jitka šije o čtvrtinu rychleji, ale pracuje o 2 hodiny kratší dobu. Dohromady ušijí za den 310 kusů. Kolik kusů denně ušije Jitka?

- **a)** $140$
- **b)** $150$
- **c)** $160$
- **d)** $170$

<details><summary>Ответ и решение</summary>

**b** — $150$. Klára $r$ za hodinu: $8r+1{,}25r\cdot6=15{,}5r=310$, $r=20$; Jitka $25\cdot6=150$.

</details>

### `vl-obec-095` — Vlastní úloha ve stylu přijímacích testů (č. 95)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rovnice $x^4-3x^3-x^2+3x=0$ má kořen $x=3$. Kolik jejích kořenů leží v intervalu $(-1;1\rangle$?

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $3$
- **e)** $4$

<details><summary>Ответ и решение</summary>

**c** — $2$. $x(x-3)(x^2-1)=0$: kořeny $-1,0,1,3$; v intervalu jsou $0$ a $1$.

</details>

### `vl-nsz-106` — [Vlastní úloha ve stylu NSZ Matematika (č. 106)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Když libovolné číslo $x$ vydělím dvěma a s výsledkem provedu tajnou operaci, dostanu totéž, jako když s číslem $x$ provedu tutéž tajnou operaci, od výsledku odečtu 6 a vydělím dvěma. Která z možností může být tajnou operací?

- **a)** přičtení šesti
- **b)** odečtení šesti
- **c)** odečtení tří
- **d)** násobení dvěma

<details><summary>Ответ и решение</summary>

**b** — odečtení šesti. Pro přičtení $c$: $\frac x2+c=\frac{x+c-6}2$, tedy $c=-6$. Násobení $k$ by dalo $\frac{kx}2=\frac{kx-6}2$ — nikdy.

</details>

### `vl-nsz-155` — [Vlastní úloha ve stylu NSZ Matematika (č. 155)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Hmotnosti tří bratrů jsou $P$, $Q$, $R$ (v kg). Platí $\dfrac{P+Q+R}3=\dfrac{P+Q}2+2$. Které tvrzení z toho vyplývá?

- **a)** $R$ je větší než $P$ i než $Q$.
- **b)** $R$ je o 6 kg větší než průměr $P$ a $Q$.
- **c)** Průměr všech tří je menší než průměr $P$ a $Q$.
- **d)** $R$ je menší než průměr všech tří.

<details><summary>Ответ и решение</summary>

**b** — $R$ je o 6 kg větší než průměr $P$ a $Q$.. $2(P+Q+R)=3(P+Q)+12$, tedy $R=\frac{P+Q}2+6$. Že je $R$ větší než oba, z toho neplyne (např. $P=40$, $Q=80$, $R=66$).

</details>

### `vl-nsz-192` — [Vlastní úloha ve stylu NSZ Matematika (č. 192)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik z čísel $-3$, $-2$, $1$, $2$ není kořenem mnohočlenu $x^3-2x^2-5x+6$?

- **a)** $1$
- **b)** $2$
- **c)** $3$
- **d)** $4$

<details><summary>Ответ и решение</summary>

**b** — $2$. $x^3-2x^2-5x+6=(x-1)(x+2)(x-3)$; kořeny $-2$ a $1$ v seznamu jsou, $-3$ a $2$ nejsou.

</details>

### `vl-nsz-215` — [Vlastní úloha ve stylu NSZ Matematika (č. 215)](https://www.scio.cz/matematika)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

První čerpadlo napustí bazén za 6 hodin, s druhým čerpadlem za 4 hodiny. Když se zapne i třetí, napustí všechna tři bazén za 2 hodiny 40 minut. Za jak dlouho by ho napustilo třetí čerpadlo samo?

- **a)** 6 h 40 min
- **b)** 7 h 20 min
- **c)** 8 h
- **d)** 9 h 20 min

<details><summary>Ответ и решение</summary>

**c** — 8 h. Za hodinu: všechna tři $\frac38$ bazénu, první dvě $\frac14$; třetí tedy $\frac18$.

</details>

### `vse-a-07` — [VŠE, vzor přijímacích zkoušek A (úloha 7)](https://www.vse.cz/wp-content/uploads/page/2128/test-A.pdf)

*Темы:* 4. Rovnice s parametrem · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 4, úloha 11

Rovnice $px^2+px+5=0$ má dva reálné různé kořeny právě tehdy, když

- **a)** $p\in(-\infty;0)\cup(5;20)$
- **b)** $p\in(-\infty;0)\cup(20;\infty)$
- **c)** $p\in(-\infty;0)$
- **d)** $p\in(20;\infty)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $p\in(-\infty;0)\cup(20;\infty)$. $p\ne0$ a $D=p^2-20p>0$.

</details>

### `vl-nsz-213` — [Vlastní úloha ve stylu NSZ Matematika (č. 213)](https://www.scio.cz/matematika)

*Темы:* 4. Rovnice s parametrem, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Graf funkce $y=x^2+2px+3p-2$ nemá s osou $x$ žádný společný bod, právě když:

- **a)** $p\in(1;2)$
- **b)** $p\in(-\infty;1)\cup(2;\infty)$
- **c)** $p\in(-2;-1)$
- **d)** $p\in\langle1;2\rangle$

<details><summary>Ответ и решение</summary>

**a** — $p\in(1;2)$. $\frac D4=p^2-3p+2<0$.

</details>

### `vl-vse-0299` — Vlastní úloha ve stylu přijímaček VŠE (č. 299)

*Темы:* 4. Rovnice s parametrem, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro které hodnoty parametru $a$ má soustava $ax+2y=1$, $2x+ay=3$ právě jedno řešení?

<details><summary>Ответ и решение</summary>

$a\ne\pm2$. Determinant $a^2-4\ne0$.

</details>

### `vl-obec-042` — Vlastní úloha ve stylu přijímacích testů (č. 42)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $|x-2|+3=5-x$ je:

- **a)** $x=2$
- **b)** $x\in(-\infty;2\rangle$
- **c)** $\emptyset$
- **d)** $x=4$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $x\in(-\infty;2\rangle$. Pro $x\le2$: $2-x+3=5-x$ platí vždy. Pro $x>2$: $x+1=5-x$, $x=2$ — spor s $x>2$.

</details>

### `vl-vse-0675` — Vlastní úloha ve stylu přijímaček VŠE (č. 675)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $|x+2|-|2x-3|+1=0$.

<details><summary>Ответ и решение</summary>

$x\in\{0;6\}$. Dělicí body $-2$ a $\frac32$; na každém intervalu řešíme lineární rovnici a ověříme, že kořen do intervalu patří.

</details>

### `vl-vse-0795` — Vlastní úloha ve stylu přijímaček VŠE (č. 795)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $|x-4|+2=|x|$.

<details><summary>Ответ и решение</summary>

$x=3$. Pro $x\ge4$: $x-2=x$ — spor; pro $0\le x<4$: $6-x=x$, $x=3$; pro $x<0$: $6-x=-x$ — spor.

</details>

### `vl-vse-0821` — Vlastní úloha ve stylu přijímaček VŠE (č. 821)

*Темы:* 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $|x-2|+|x+3|=7$.

<details><summary>Ответ и решение</summary>

$x\in\{-4;3\}$. Mezi $-3$ a $2$ je součet vzdáleností 5; mimo interval roste o 2 na každou jednotku.

</details>

### `vse-a-05` — [VŠE, vzor přijímacích zkoušek A (úloha 5)](https://www.vse.cz/wp-content/uploads/page/2128/test-A.pdf)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 7, úloha 9

Množinou všech řešení nerovnice $\dfrac{x+3}{2x-4}<1$ s neznámou $x\in R$ je

- **a)** $(2;7)$
- **b)** $(7;\infty)$
- **c)** $(-\infty;2)\cup(7;\infty)$
- **d)** $(-\infty;2\rangle\cup\langle7;\infty)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;2)\cup(7;\infty)$. $\frac{x+3}{2x-4}-1=\frac{7-x}{2x-4}<0\iff\frac{x-7}{x-2}>0$.

</details>

### `vl-nsz-044` — [Vlastní úloha ve stylu NSZ Matematika (č. 44)](https://www.scio.cz/matematika)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Která z následujících množin je podmnožinou množiny řešení nerovnice $\dfrac{(x-3)(x+1)}{2x-1}\le0$?

- **a)** $\langle-2,0\rangle$
- **b)** $(1,3\rangle$
- **c)** $\langle0,1\rangle$
- **d)** $(2,4)$

<details><summary>Ответ и решение</summary>

**b** — $(1,3\rangle$. Nulové body $-1$, $\frac12$, $3$. Výraz je $\le0$ na $(-\infty,-1\rangle\cup\left(\frac12,3\right\rangle$; celý interval $(1,3\rangle$ v tom leží.

</details>

### `vl-vse-0159` — Vlastní úloha ve stylu přijímaček VŠE (č. 159)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2-6x$. Množina všech $a$, pro která platí $f(a)-f(a-1)<12$, je:

- **a)** $(-\infty;- \dfrac{19}{2})$
- **b)** $(- \dfrac{19}{2};\infty)$
- **c)** $(\dfrac{19}{2};\infty)$
- **d)** $(-\infty;\dfrac{19}{2})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;\dfrac{19}{2})$. $f(a)-f(a-1)=2a-1-6<12$.

</details>

### `vl-vse-0171` — Vlastní úloha ve stylu přijímaček VŠE (č. 171)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2+4x$. Množina všech $a$, pro která platí $f(a)-f(a-3)<2$, je:

- **a)** $(-\infty;\dfrac{1}{6})$
- **b)** $(-\infty;- \dfrac{1}{6})$
- **c)** $(- \dfrac{1}{6};\infty)$
- **d)** $(\dfrac{1}{6};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;- \dfrac{1}{6})$. $f(a)-f(a-3)=6a-9+12<2$.

</details>

### `vl-vse-0236` — Vlastní úloha ve stylu přijímaček VŠE (č. 236)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2+2x$. Množina všech $a$, pro která platí $f(a)-f(a-3)<-2$, je:

- **a)** $(\dfrac{1}{6};\infty)$
- **b)** $(-\infty;\dfrac{1}{6})$
- **c)** $(-\infty;- \dfrac{1}{6})$
- **d)** $(- \dfrac{1}{6};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;\dfrac{1}{6})$. $f(a)-f(a-3)=6a-9+6<-2$.

</details>

### `vl-vse-0255` — Vlastní úloha ve stylu přijímaček VŠE (č. 255)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2+6x$. Množina všech $a$, pro která platí $f(a)-f(a-1)<1$, je:

- **a)** $(-\infty;2)$
- **b)** $(-\infty;-2)$
- **c)** $(2;\infty)$
- **d)** $(-2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;-2)$. $f(a)-f(a-1)=2a-1+6<1$.

</details>

### `vl-vse-0304` — Vlastní úloha ve stylu přijímaček VŠE (č. 304)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2+6x$. Množina všech $a$, pro která platí $f(a)-f(a-3)<3$, je:

- **a)** $(1;\infty)$
- **b)** $(-1;\infty)$
- **c)** $(-\infty;1)$
- **d)** $(-\infty;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;-1)$. $f(a)-f(a-3)=6a-9+18<3$.

</details>

### `vl-vse-0342` — Vlastní úloha ve stylu přijímaček VŠE (č. 342)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2-3x$. Množina všech $a$, pro která platí $f(a)-f(a-1)<6$, je:

- **a)** $(-\infty;-5)$
- **b)** $(5;\infty)$
- **c)** $(-5;\infty)$
- **d)** $(-\infty;5)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;5)$. $f(a)-f(a-1)=2a-1-3<6$.

</details>

### `vl-vse-0439` — Vlastní úloha ve stylu přijímaček VŠE (č. 439)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2-4x$. Množina všech $a$, pro která platí $f(a)-f(a-2)<7$, je:

- **a)** $(-\infty;- \dfrac{19}{4})$
- **b)** $(-\infty;\dfrac{19}{4})$
- **c)** $(- \dfrac{19}{4};\infty)$
- **d)** $(\dfrac{19}{4};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;\dfrac{19}{4})$. $f(a)-f(a-2)=4a-4-8<7$.

</details>

### `vl-vse-0443` — Vlastní úloha ve stylu přijímaček VŠE (č. 443)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2+5x$. Množina všech reálných $a$, pro která platí $f(a+3)-f(a)<12$, je rovna množině:

- **a)** $(-\infty;-2)$
- **b)** $(-2;\infty)$
- **c)** $(-\infty;2)$
- **d)** $(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;-2)$. $f(a+3)-f(a)=6a+9+15=6a+24<12$, $a<-2$.

</details>

### `vl-vse-0468` — Vlastní úloha ve stylu přijímaček VŠE (č. 468)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2+6x$. Množina všech $a$, pro která platí $f(a)-f(a-3)<11$, je:

- **a)** $(-\infty;\dfrac{1}{3})$
- **b)** $(- \dfrac{1}{3};\infty)$
- **c)** $(-\infty;- \dfrac{1}{3})$
- **d)** $(\dfrac{1}{3};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;\dfrac{1}{3})$. $f(a)-f(a-3)=6a-9+18<11$.

</details>

### `vl-vse-0612` — Vlastní úloha ve stylu přijímaček VŠE (č. 612)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2-3x$. Množina všech $a$, pro která platí $f(a)-f(a-3)<-2$, je:

- **a)** $(\dfrac{8}{3};\infty)$
- **b)** $(-\infty;- \dfrac{8}{3})$
- **c)** $(-\infty;\dfrac{8}{3})$
- **d)** $(- \dfrac{8}{3};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;\dfrac{8}{3})$. $f(a)-f(a-3)=6a-9-9<-2$.

</details>

### `vl-vse-0686` — Vlastní úloha ve stylu přijímaček VŠE (č. 686)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2-2x$. Množina všech $a$, pro která platí $f(a)-f(a-2)<-9$, je:

- **a)** $(- \dfrac{1}{4};\infty)$
- **b)** $(\dfrac{1}{4};\infty)$
- **c)** $(-\infty;- \dfrac{1}{4})$
- **d)** $(-\infty;\dfrac{1}{4})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;- \dfrac{1}{4})$. $f(a)-f(a-2)=4a-4-4<-9$.

</details>

### `vl-vse-0726` — Vlastní úloha ve stylu přijímaček VŠE (č. 726)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2-2x$. Množina všech $a$, pro která platí $f(a)-f(a-2)<11$, je:

- **a)** $(\dfrac{19}{4};\infty)$
- **b)** $(-\infty;\dfrac{23}{4})$
- **c)** $(-\infty;- \dfrac{19}{4})$
- **d)** $(- \dfrac{19}{4};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $f(a)-f(a-2)=4a-4-4<11$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0778` — Vlastní úloha ve stylu přijímaček VŠE (č. 778)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2-5x$. Množina všech $a$, pro která platí $f(a)-f(a-3)<-10$, je:

- **a)** $(\dfrac{7}{3};\infty)$
- **b)** $(-\infty;- \dfrac{7}{3})$
- **c)** $(- \dfrac{7}{3};\infty)$
- **d)** $(-\infty;\dfrac{7}{3})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;\dfrac{7}{3})$. $f(a)-f(a-3)=6a-9-15<-10$.

</details>

### `vl-vse-0819` — Vlastní úloha ve stylu přijímaček VŠE (č. 819)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2-5x$. Množina všech $a$, pro která platí $f(a)-f(a-1)<2$, je:

- **a)** $(-4;\infty)$
- **b)** $(-\infty;4)$
- **c)** $(4;\infty)$
- **d)** $(-\infty;-4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;4)$. $f(a)-f(a-1)=2a-1-5<2$.

</details>

### `vl-vse-0891` — Vlastní úloha ve stylu přijímaček VŠE (č. 891)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2+2x$. Množina všech $a$, pro která platí $f(a)-f(a-2)<8$, je:

- **a)** $(2;\infty)$
- **b)** $(-\infty;2)$
- **c)** $(-\infty;-2)$
- **d)** $(-2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;2)$. $f(a)-f(a-2)=4a-4+4<8$.

</details>

### `vl-vse-0928` — Vlastní úloha ve stylu přijímaček VŠE (č. 928)

*Темы:* 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte nerovnici $\dfrac{(x-1)(x+2)}{x-4}\ge0$.

<details><summary>Ответ и решение</summary>

$x\in\langle-2;1\rangle\cup(4;\infty)$. Nulové body $-2$, $1$, $4$; znaménka na intervalech.

</details>

### `vl-vse-1017` — Vlastní úloha ve stylu přijímaček VŠE (č. 1017)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2-3x$. Množina všech $a$, pro která platí $f(a)-f(a-1)<7$, je:

- **a)** $(\dfrac{11}{2};\infty)$
- **b)** $(-\infty;\dfrac{11}{2})$
- **c)** $(-\infty;- \dfrac{11}{2})$
- **d)** $(- \dfrac{11}{2};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;\dfrac{11}{2})$. $f(a)-f(a-1)=2a-1-3<7$.

</details>

### `vl-vse-1052` — Vlastní úloha ve stylu přijímaček VŠE (č. 1052)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2+2x$. Množina všech $a$, pro která platí $f(a)-f(a-3)<-8$, je:

- **a)** $(-\infty;\dfrac{5}{6})$
- **b)** $(\dfrac{5}{6};\infty)$
- **c)** $(-\infty;\dfrac{1}{6})$
- **d)** $(- \dfrac{5}{6};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $f(a)-f(a-3)=6a-9+6<-8$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1219` — Vlastní úloha ve stylu přijímaček VŠE (č. 1219)

*Темы:* 6. Nerovnice. Soustava nerovnic, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=x^2-6x$. Množina všech $a$, pro která platí $f(a)-f(a-2)<-6$, je:

- **a)** $(-\infty;- \dfrac{5}{2})$
- **b)** $(- \dfrac{5}{2};\infty)$
- **c)** $(-\infty;\dfrac{5}{2})$
- **d)** $(\dfrac{5}{2};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;\dfrac{5}{2})$. $f(a)-f(a-2)=4a-4-12<-6$.

</details>

### `vl-nsz-100` — [Vlastní úloha ve stylu NSZ Matematika (č. 100)](https://www.scio.cz/matematika)

*Темы:* 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina $(-6,-4\rangle\cup\langle0,2)$ je řešením nerovnice:

- **a)** $2\le|x+2|<4$
- **b)** $2<|x+2|\le4$
- **c)** $2\le|x-2|<4$
- **d)** $0\le|x+2|<4$

<details><summary>Ответ и решение</summary>

**a** — $2\le|x+2|<4$. Body ve vzdálenosti aspoň 2 a méně než 4 od čísla $-2$.

</details>

### `vl-nsz-143` — [Vlastní úloha ve stylu NSZ Matematika (č. 143)](https://www.scio.cz/matematika)

*Темы:* 7. Nerovnice s absolutní hodnotou, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech řešení nerovnice $x^2-x-6<3|x-3|$ v $\mathbb R$ je:

- **a)** $\emptyset$
- **b)** $(-5;3)$
- **c)** $(-\infty;-5)\cup(3;\infty)$
- **d)** $(-2;3)$

<details><summary>Ответ и решение</summary>

**b** — $(-5;3)$. Pro $x\ge3$: $x^2-4x+3<0$, tj. $1<x<3$ — žádné řešení. Pro $x<3$: $x^2+2x-15<0$, tj. $-5<x<3$.

</details>

### `vl-vse-0202` — Vlastní úloha ve stylu přijímaček VŠE (č. 202)

*Темы:* 7. Nerovnice s absolutní hodnotou, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete množinu všech $x\in\mathbb R$, pro která platí $\dfrac{|x+1|}{x-2}\le1$.

<details><summary>Ответ и решение</summary>

$x\in(-\infty;2)$. Pro $x<2$ je jmenovatel záporný a čitatel nezáporný, podíl je $\le0<1$; pro $x>2$: $x+1\le x-2$ — nikdy.

</details>

### `vse-fis-07` — [VŠE, vzorový test z matematiky – FIS (příklad 7, 5 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fis.pdf)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу)

Součet všech reálných řešení rovnice $\sqrt{2x+5}=x-5$ je

- **a)** $10$
- **b)** $12$
- **c)** $2$
- **d)** $3$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**a** — $10$. Umocněním $x^2-12x+20=0$, tj. $x=2$ nebo $x=10$. Podmínka $x-5\ge0$ vyřadí $x=2$, zbývá $x=10$.

</details>

### `vl-obec-075` — Vlastní úloha ve stylu přijímacích testů (č. 75)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech reálných řešení rovnice $\sqrt{x-3}=x-5$ je:

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $4$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $1$. Umocněním $x^2-11x+28=0$: $x=4$ nebo $x=7$; zkouška vyřadí $x=4$.

</details>

### `vl-obec-082` — Vlastní úloha ve stylu přijímacích testů (č. 82)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet řešení rovnice $\sqrt{x^2-4}=\sqrt{x^2}-2$ v oboru reálných čísel je:

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $3$
- **e)** $4$

<details><summary>Ответ и решение</summary>

**c** — $2$. Pravá strana je $|x|-2\ge0$. Umocněním $x^2-4=x^2-4|x|+4$, tedy $|x|=2$; obě hodnoty $\pm2$ vyhovují.

</details>

### `vl-vse-0139` — Vlastní úloha ve stylu přijímaček VŠE (č. 139)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $\sqrt{3x+1}=x-1$.

<details><summary>Ответ и решение</summary>

$x=5$. Umocněním $x^2-5x=0$; zkouška vyřadí $x=0$.

</details>

### `vl-obec-005` — Vlastní úloha ve stylu přijímacích testů (č. 5)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet celých čísel v definičním oboru funkce $f:\ y=\log(\cos x)+\sqrt{9-x^2}$ je:

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $3$
- **e)** Definiční obor obsahuje nekonečně mnoho celých čísel.

<details><summary>Ответ и решение</summary>

**d** — $3$. Celá čísla z $\langle-3;3\rangle$, pro která $\cos x>0$: $-1$, $0$, $1$.

</details>

### `vl-obec-025` — Vlastní úloha ve stylu přijímacích testů (č. 25)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=|x-2|-|x|$ nabývá:

- **a)** všech hodnot z $\langle-2;2\rangle$
- **b)** jen hodnot $-2$ a $2$
- **c)** všech reálných hodnot
- **d)** jen kladných hodnot
- **e)** jen hodnot z $(0;2)$

<details><summary>Ответ и решение</summary>

**a** — všech hodnot z $\langle-2;2\rangle$. Pro $x\le0$ je $f=2$, pro $x\ge2$ je $f=-2$, mezi tím lineárně klesá.

</details>

### `vl-nsz-041` — [Vlastní úloha ve stylu NSZ Matematika (č. 41)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

O funkci $y=\bigl||x|-3\bigr|$ platí:

- **a)** má právě tři nulové body
- **b)** je sudá
- **c)** je rostoucí na $\langle0,\infty)$
- **d)** její obor hodnot je $\langle-3,\infty)$

<details><summary>Ответ и решение</summary>

**b** — je sudá. $f(-x)=f(x)$. Nulové body jsou jen $\pm3$, na $\langle0,3\rangle$ klesá a obor hodnot je $\langle0,\infty)$.

</details>

### `vl-nsz-063` — [Vlastní úloha ve stylu NSZ Matematika (č. 63)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik společných bodů s osou $x$ má graf funkce $y=(x^2-4)\sqrt{1-x}$?

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $3$

<details><summary>Ответ и решение</summary>

**c** — $2$. Definiční obor $x\le1$. Nulové body: $x=-2$ a $x=1$; $x=2$ do definičního oboru nepatří.

</details>

### `vl-nsz-071` — [Vlastní úloha ve stylu NSZ Matematika (č. 71)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jsou dány funkce $f(x)=|x+2|-|x-2|$ a $g(x)=x^2+1$. Která z nich je na celém intervalu $(-1,1)$ rostoucí, nebo klesající?

- **a)** jen $f$
- **b)** jen $g$
- **c)** obě
- **d)** ani jedna

<details><summary>Ответ и решение</summary>

**a** — jen $f$. Na $(-1,1)$ je $f(x)=(x+2)-(2-x)=2x$ — rostoucí. $g$ má vrchol v $x=0$, na $(-1,0)$ klesá a na $(0,1)$ roste.

</details>

### `vl-nsz-112` — [Vlastní úloha ve stylu NSZ Matematika (č. 112)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce je dána předpisem $f(x)=2-\sqrt{x+1}$. Z jakého intervalu je $x$, platí-li $f(x)\in\langle-1,0\rangle$?

- **a)** $\langle1,4\rangle$
- **b)** $\langle3,8\rangle$
- **c)** $\langle4,9\rangle$
- **d)** $\langle-8,-3\rangle$

<details><summary>Ответ и решение</summary>

**b** — $\langle3,8\rangle$. $-1\le2-\sqrt{x+1}\le0\iff2\le\sqrt{x+1}\le3\iff4\le x+1\le9$.

</details>

### `vl-nsz-113` — [Vlastní úloha ve stylu NSZ Matematika (č. 113)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Grafy funkcí $f(x)=\dfrac3x$ a $g(x)=x^2+2x$ se protínají v bodě s $x$-ovou souřadnicí:

- **a)** $x=1$
- **b)** $x=-1$
- **c)** $x=3$
- **d)** $x=-3$

<details><summary>Ответ и решение</summary>

**a** — $x=1$. $x^3+2x^2-3=(x-1)(x^2+3x+3)=0$; kvadratický činitel kořeny nemá.

</details>

### `vl-nsz-117` — [Vlastní úloha ve stylu NSZ Matematika (č. 117)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Uvažujme tvrzení: obor hodnot $y=2^x+1$ je $(1;\infty)$; obor hodnot $y=-|x-3|+2$ je $(-\infty;2\rangle$; obor hodnot $y=x^2-4x$ je $\langle-2;\infty)$; obor hodnot $y=\frac1x$ je $\mathbb R$. Kolik z nich je pravdivých?

- **a)** právě 0
- **b)** právě 1
- **c)** právě 2
- **d)** právě 3

<details><summary>Ответ и решение</summary>

**c** — právě 2. První dvě platí. $x^2-4x=(x-2)^2-4$ má obor hodnot $\langle-4;\infty)$, $\frac1x$ nikdy nenabývá nuly.

</details>

### `vl-nsz-152` — [Vlastní úloha ve stylu NSZ Matematika (č. 152)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro funkci platí $f(a)=\bigl(g(a)\bigr)^2-5$ a zároveň $f(a)=4a^2+4a-4$. Čemu se může rovnat $g(a)$?

- **a)** $|2a+1|$
- **b)** $|2a-1|$
- **c)** $4a^2+1$
- **d)** $|a+1|$

<details><summary>Ответ и решение</summary>

**a** — $|2a+1|$. $(g(a))^2=4a^2+4a+1=(2a+1)^2$.

</details>

### `vl-nsz-153` — [Vlastní úloha ve stylu NSZ Matematika (č. 153)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro funkci platí $f(x)=3-\bigl(g(x)\bigr)^2$ a $f(x)=-x^2+4x-1$ pro každé $x\in\mathbb R$. Čemu se může rovnat $g(x)$?

- **a)** $g(x)=x+2$
- **b)** $g(x)=x-4$
- **c)** $g(x)=2-x$
- **d)** $g(x)=x-1$

<details><summary>Ответ и решение</summary>

**c** — $g(x)=2-x$. $(g(x))^2=3-f(x)=x^2-4x+4=(x-2)^2$, tedy $g(x)=\pm(x-2)$.

</details>

### `vl-nsz-161` — [Vlastní úloha ve stylu NSZ Matematika (č. 161)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f:\ y=\sqrt{\dfrac{x^2-4}{x^3-8}}$ je:

- **a)** $\langle-2;2)\cup(2;\infty)$
- **b)** $(-\infty;-2\rangle\cup(2;\infty)$
- **c)** $\langle-2;\infty)$
- **d)** $(2;\infty)$

<details><summary>Ответ и решение</summary>

**a** — $\langle-2;2)\cup(2;\infty)$. Pro $x\ne2$ je $\frac{x^2-4}{x^3-8}=\frac{x+2}{x^2+2x+4}$ a jmenovatel je vždy kladný; potřebujeme $x\ge-2$, $x\ne2$.

</details>

### `vl-nsz-191` — [Vlastní úloha ve stylu NSZ Matematika (č. 191)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Graf funkce $y=|x+3|-|x-1|+x$ na intervalu $(-\infty,-3\rangle$ leží na přímce:

- **a)** $y=x-4$
- **b)** $y=x+4$
- **c)** $y=3x+2$
- **d)** $y=-4$

<details><summary>Ответ и решение</summary>

**a** — $y=x-4$. Pro $x\le-3$: $-(x+3)+(x-1)+x=x-4$.

</details>

### `vl-nsz-195` — [Vlastní úloha ve stylu NSZ Matematika (č. 195)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratickou funkci nazveme „hezkou“, má-li dva kladné kořeny a platí-li $f(0)<0$. Která funkce je hezká?

- **a)** $f(x)=x^2-5x+6$
- **b)** $f(x)=-x^2+5x-6$
- **c)** $f(x)=-x^2-5x-6$
- **d)** $f(x)=-x^2+x+6$

<details><summary>Ответ и решение</summary>

**b** — $f(x)=-x^2+5x-6$. $-x^2+5x-6=-(x-2)(x-3)$: kořeny $2$, $3$ a $f(0)=-6$. U a) je $f(0)=6$, u c) jsou kořeny záporné, u d) je jeden kořen záporný.

</details>

### `vl-nsz-198` — [Vlastní úloha ve stylu NSZ Matematika (č. 198)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f$ má právě jeden nulový bod a platí $f(0)=2$. Jejím předpisem může být:

- **a)** $y=2-x^2$
- **b)** $y=2\cos x$
- **c)** $y=3-2^x$
- **d)** $y=x^2+2$

<details><summary>Ответ и решение</summary>

**c** — $y=3-2^x$. $3-2^x=0$ jen pro $x=\log_23$ a $3-1=2$. a) má dva nulové body, b) nekonečně mnoho, d) žádný.

</details>

### `vl-nsz-201` — [Vlastní úloha ve stylu NSZ Matematika (č. 201)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Graf kvadratické funkce $f$ protíná osu $x$ v bodech $[-1;0]$ a $[5;0]$ a nejmenší hodnota funkce je $-18$. Jaká je hodnota $f(0)$?

- **a)** $-18$
- **b)** $-10$
- **c)** $-8$
- **d)** $-5$

<details><summary>Ответ и решение</summary>

**b** — $-10$. $f(x)=a(x+1)(x-5)$, vrchol v $x=2$: $f(2)=-9a=-18$, $a=2$; $f(0)=2\cdot1\cdot(-5)$.

</details>

### `vl-nsz-211` — [Vlastní úloha ve stylu NSZ Matematika (č. 211)](https://www.scio.cz/matematika)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Inverzní funkce k funkci $f:\ y=\sqrt{x-1}$, $x\ge1$, je:

- **a)** $y=x^2+1,\ x\ge0$
- **b)** $y=x^2-1,\ x\ge0$
- **c)** $y=(x+1)^2,\ x\ge-1$
- **d)** $y=x^2+1,\ x\in\mathbb R$

<details><summary>Ответ и решение</summary>

**a** — $y=x^2+1,\ x\ge0$. $x=\sqrt{y-1}$, $y=x^2+1$; definiční obor inverzní funkce je obor hodnot $f$, tj. $x\ge0$.

</details>

### `vl-vse-0387` — Vlastní úloha ve stylu přijímaček VŠE (č. 387)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete definiční obor funkce $f(x)=\dfrac{\sqrt{x+2}}{\log(3-x)}$.

<details><summary>Ответ и решение</summary>

$\langle-2;2)\cup(2;3)$. $x\ge-2$, $3-x>0$ a $\log(3-x)\ne0$, tj. $x\ne2$.

</details>

### `vl-vse-0765` — Vlastní úloha ve stylu přijímaček VŠE (č. 765)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{7x-x^2}$ je:

- **a)** $\langle -7;0\rangle$
- **b)** $(-\infty;0\rangle\cup\langle 7;\infty)$
- **c)** $(0;7)$
- **d)** $\langle 0;7\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 0;7\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0783` — Vlastní úloha ve stylu přijímaček VŠE (č. 783)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{64-x^2}$ je:

- **a)** $\langle 0;8\rangle$
- **b)** $(-8;8)$
- **c)** $(-\infty;-8\rangle\cup\langle 8;\infty)$
- **d)** $\langle -8;8\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle -8;8\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-vse-0961` — Vlastní úloha ve stylu přijímaček VŠE (č. 961)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 5. Rovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vypočtěte průsečíky grafu funkce $f(x)=|x^2-4x+3|-x-3$ se souřadnými osami.

<details><summary>Ответ и решение</summary>

$[0;0]$ a $[5;0]$ (graf prochází počátkem). $f(0)=3-3=0$. Mimo $\langle1;3\rangle$: $x^2-5x=0$, tj. $x=0$, $x=5$; na $(1;3)$: $-x^2+3x-6=0$ nemá kořeny.

</details>

### `vl-vse-1042` — Vlastní úloha ve stylu přijímaček VŠE (č. 1042)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\sqrt{4-x^2}$ je:

- **a)** $(-\infty;-2\rangle\cup\langle 2;\infty)$
- **b)** $\langle 0;2\rangle$
- **c)** $(-2;2)$
- **d)** $\langle -2;2\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle -2;2\rangle$. Výraz pod odmocninou musí být nezáporný.

</details>

### `vl-nsz-031` — [Vlastní úloha ve stylu NSZ Matematika (č. 31)](https://www.scio.cz/matematika)

*Темы:* 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f$ je dána předpisem $f(x)=3^{x+1}$. Která rovnost platí pro každé $x$?

- **a)** $f(2x)=\dfrac{\bigl(f(x)\bigr)^2}3$
- **b)** $f(2x)=2f(x)$
- **c)** $f(2x)=\bigl(f(x)\bigr)^2$
- **d)** $f(2x)=3\bigl(f(x)\bigr)^2$

<details><summary>Ответ и решение</summary>

**a** — $f(2x)=\dfrac{\bigl(f(x)\bigr)^2}3$. $f(2x)=3^{2x+1}$ a $\bigl(f(x)\bigr)^2=3^{2x+2}$.

</details>

### `vl-nsz-189` — [Vlastní úloha ve stylu NSZ Matematika (č. 189)](https://www.scio.cz/matematika)

*Темы:* 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

O funkci $f:\ y=4-2^{|x|}$ tvrdíme: a) $H(f)=(-\infty,4)$; b) $f$ je sudá; c) $f$ je rostoucí na $(-\infty,0\rangle$; d) $f$ má minimum v bodě $[0;3]$. Pravdivá jsou:

- **a)** pouze a) a b)
- **b)** pouze b) a c)
- **c)** pouze c) a d)
- **d)** pouze a) a d)

<details><summary>Ответ и решение</summary>

**b** — pouze b) a c). $2^{|x|}\ge1$, proto $H(f)=(-\infty,3\rangle$ a v $[0;3]$ je maximum. Funkce je sudá a pro $x\le0$ roste.

</details>

### `vl-vse-0045` — Vlastní úloha ve stylu přijímaček VŠE (č. 45)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete všechna $x\in\mathbb R$, pro která platí $4<2^{|x|}\le32$.

<details><summary>Ответ и решение</summary>

$x\in\langle-5;-2)\cup(2;5\rangle$. $2<|x|\le5$.

</details>

### `vl-obec-070` — Vlastní úloha ve stylu přijímacích testů (č. 70)

*Темы:* 11. Exponenciální rovnice a nerovnice, 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rovnice $\log_2(2^x-7)=3-x$ má řešení:

- **a)** $x=0$
- **b)** $x=3$
- **c)** $x=\log_27$
- **d)** $x=2$
- **e)** nemá řešení

<details><summary>Ответ и решение</summary>

**b** — $x=3$. $2^x-7=\frac8{2^x}$, $t^2-7t-8=0$, $t=8$.

</details>

### `vl-vse-0105` — Vlastní úloha ve stylu přijímaček VŠE (č. 105)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte nerovnici $\left(\frac25\right)^{x^2-3}\ge\left(\frac52\right)^{2x}$.

<details><summary>Ответ и решение</summary>

$x\in\langle-3;1\rangle$. $\left(\frac52\right)^{2x}=\left(\frac25\right)^{-2x}$; základ menší než 1: $x^2-3\le-2x$.

</details>

### `vl-vse-0357` — Vlastní úloha ve stylu přijímaček VŠE (č. 357)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte nerovnici $\left(\frac12\right)^{x^2-4}>8$.

<details><summary>Ответ и решение</summary>

$x\in(-1;1)$. $\left(\frac12\right)^{x^2-4}>\left(\frac12\right)^{-3}$, tedy $x^2-4<-3$.

</details>

### `vl-vse-0617` — Vlastní úloha ve stylu přijímaček VŠE (č. 617)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $2^{2x+1}-5\cdot2^x+2=0$.

<details><summary>Ответ и решение</summary>

$x\in\{-1;1\}$. $t=2^x$: $2t^2-5t+2=0$, $t=2$ nebo $t=\frac12$.

</details>

### `vl-vse-0634` — Vlastní úloha ve stylu přijímaček VŠE (č. 634)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte nerovnici $9^{x+1}-28\cdot3^x+3<0$.

<details><summary>Ответ и решение</summary>

$x\in(-2;1)$. $t=3^x$: $9t^2-28t+3<0$, $\frac19<t<3$.

</details>

### `vl-vse-0658` — Vlastní úloha ve stylu přijímaček VŠE (č. 658)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte nerovnici $5^{2x}-6\cdot5^x+5\le0$.

<details><summary>Ответ и решение</summary>

$x\in\langle0;1\rangle$. $t=5^x$: $(t-1)(t-5)\le0$.

</details>

### `vl-vse-0698` — Vlastní úloha ve stylu přijímaček VŠE (č. 698)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte nerovnici $\left(\frac13\right)^{x^2-2x}>\frac1{27}$.

<details><summary>Ответ и решение</summary>

$x\in(-1;3)$. Základ menší než 1: $x^2-2x<3$.

</details>

### `vl-vse-0706` — Vlastní úloha ve stylu přijímaček VŠE (č. 706)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{4}{7}\right)^{x}>\left(\dfrac{7}{4}\right)^{3}$, je:

- **a)** $(3;\infty)$
- **b)** $(-\infty;-3)$
- **c)** $(-3;\infty)$
- **d)** $(-\infty;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;-3)$. Základ je menší než 1, proto se při porovnání exponentů obrací nerovnost; $\left(\frac qp\right)^k=\left(\frac pq\right)^{-k}$.

</details>

### `vl-vse-0907` — Vlastní úloha ve stylu přijímaček VŠE (č. 907)

*Темы:* 11. Exponenciální rovnice a nerovnice, 10. Exponenciální funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\left(\dfrac{5}{9}\right)^{x}>-\dfrac{9}{5}$, je:

- **a)** $(1;\infty)$
- **b)** $\emptyset$
- **c)** $(-\infty;-1)$
- **d)** $(-1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Exponenciální funkce nabývá jen kladných hodnot. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vse-a-04` — [VŠE, vzor přijímacích zkoušek A (úloha 4)](https://www.vse.cz/wp-content/uploads/page/2128/test-A.pdf)

*Темы:* 12. Logaritmická funkce · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 12, úloha 9

Maximální definiční obor funkce $f(x)=\dfrac{\ln(x^2-4)}{x+3}$ je

- **a)** $(-2;2)$
- **b)** $(2;\infty)$
- **c)** $(-\infty;-2)\cup(2;\infty)$
- **d)** $(-\infty;-2\rangle\cup\langle2;\infty)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**e** — $(-\infty;-3)\cup(-3;-2)\cup(2;\infty)$. $x^2>4$ a $x\ne-3$; bod $-3$ v nabízených množinách nevynechávají, proto „jiná odpověď“.

</details>

### `vl-vse-0068` — Vlastní úloha ve stylu přijímaček VŠE (č. 68)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log_{3}(x-2)}$ je:

- **a)** $(2;5)$
- **b)** $\langle 3;5)$
- **c)** $\langle 3;5\rangle$
- **d)** $(2;5\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(2;5\rangle$. Logaritmus je definován pro $x>2$ a musí platit $\log_{3}(x-2)\le1$, tj. $x\le5$.

</details>

### `vl-vse-0070` — Vlastní úloha ve stylu přijímaček VŠE (č. 70)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{2}(x+1)}$ je:

- **a)** $(-1;3\rangle$
- **b)** $\langle 0;3)$
- **c)** $(-1;3)$
- **d)** $\langle 0;3\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-1;3\rangle$. Logaritmus je definován pro $x>-1$ a musí platit $\log_{2}(x+1)\le2$, tj. $x\le3$.

</details>

### `vl-nsz-079` — [Vlastní úloha ve stylu NSZ Matematika (č. 79)](https://www.scio.cz/matematika)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Graf které funkce prochází body $[3;0]$ a $[5;1]$?

- **a)** $f(x)=\log_2(x-1)-1$
- **b)** $f(x)=\log_2(x+1)-1$
- **c)** $f(x)=\log_2(x-2)$
- **d)** $f(x)=\log_3x-1$

<details><summary>Ответ и решение</summary>

**a** — $f(x)=\log_2(x-1)-1$. $\log_22-1=0$ a $\log_24-1=1$. Funkce b) má v $x=3$ hodnotu $1$, c) a d) v $x=5$ hodnotu $\log_23$, resp. $\log_35-1$.

</details>

### `vl-nsz-097` — [Vlastní úloha ve stylu NSZ Matematika (č. 97)](https://www.scio.cz/matematika)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kterému výrazu se pro všechna kladná $x$ rovná $\log_3x+\log_9x$?

- **a)** $2\log_3x$
- **b)** $\log_9x^3$
- **c)** $\log_3(2x)$
- **d)** $\log_{12}x$

<details><summary>Ответ и решение</summary>

**b** — $\log_9x^3$. $\log_9x=\frac12\log_3x$, takže součet je $\frac32\log_3x$; stejnou hodnotu má $\log_9x^3=3\cdot\frac12\log_3x$.

</details>

### `vl-vse-0100` — Vlastní úloha ve stylu přijímaček VŠE (č. 100)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log_{2}(x-4)}$ je:

- **a)** $(4;6\rangle$
- **b)** $\langle 5;6\rangle$
- **c)** $(4;6)$
- **d)** $\langle 5;6)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(4;6\rangle$. Logaritmus je definován pro $x>4$ a musí platit $\log_{2}(x-4)\le1$, tj. $x\le6$.

</details>

### `vl-vse-0124` — Vlastní úloha ve stylu přijímaček VŠE (č. 124)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{3}(x+1)}$ je:

- **a)** $\langle 0;8\rangle$
- **b)** $\langle 0;8)$
- **c)** $(-1;8\rangle$
- **d)** $(-1;8)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-1;8\rangle$. Logaritmus je definován pro $x>-1$ a musí platit $\log_{3}(x+1)\le2$, tj. $x\le8$.

</details>

### `vl-vse-0143` — Vlastní úloha ve stylu přijímaček VŠE (č. 143)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[16;2]$ a $B=\left[\dfrac{1}{16};-7\right]$ leží na grafu funkce $f(x)=-3+2\log_{4}x$.

- **a)** $A$ ne, $B$ ano
- **b)** $A$ ne, $B$ ne
- **c)** $A$ ano, $B$ ano
- **d)** $A$ ano, $B$ ne
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $A$ ne, $B$ ano. $f(16)=1$, $f(\dfrac{1}{16})=-7$.

</details>

### `vl-vse-0146` — Vlastní úloha ve stylu přijímaček VŠE (č. 146)

*Темы:* 12. Logaritmická funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\log_{m-3}x$ s parametrem $m$ je rostoucí, právě když:

- **a)** $(3;\infty)$
- **b)** $(-\infty;4)$
- **c)** $(4;\infty)$
- **d)** $(3;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(4;\infty)$. Základ musí být kladný a různý od 1; funkce roste pro základ větší než 1 a klesá pro základ mezi 0 a 1.

</details>

### `vl-vse-0151` — Vlastní úloha ve stylu přijímaček VŠE (č. 151)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vypočtěte $x$, jestliže $\log_{\frac14}x=-\frac32$.

<details><summary>Ответ и решение</summary>

$x=8$. $x=\left(\frac14\right)^{-\frac32}=4^{\frac32}$.

</details>

### `vl-vse-0152` — Vlastní úloha ve stylu přijímaček VŠE (č. 152)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-6x+10)$ je:

- **a)** $\mathbb R$
- **b)** $(-\infty;-1)$
- **c)** $(0;\infty)$
- **d)** $(-\infty;0)\cup(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\mathbb R$. Diskriminant $\,-4<0$, výraz je vždy kladný.

</details>

### `vl-vse-0167` — Vlastní úloha ve stylu přijímaček VŠE (č. 167)

*Темы:* 12. Logaritmická funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\log_{m-3}x$ s parametrem $m$ je klesající, právě když:

- **a)** $(3;\infty)$
- **b)** $(3;4)\cup(4;\infty)$
- **c)** $(4;\infty)$
- **d)** $(-\infty;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Základ musí být kladný a různý od 1; funkce roste pro základ větší než 1 a klesá pro základ mezi 0 a 1. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0193` — Vlastní úloha ve stylu přijímaček VŠE (č. 193)

*Темы:* 12. Logaritmická funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\log_{m-4}x$ s parametrem $m$ je rostoucí, právě když:

- **a)** $(4;5)$
- **b)** $(4;\infty)$
- **c)** $(4;5)\cup(5;\infty)$
- **d)** $(-\infty;5)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Základ musí být kladný a různý od 1; funkce roste pro základ větší než 1 a klesá pro základ mezi 0 a 1. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0195` — Vlastní úloha ve stylu přijímaček VŠE (č. 195)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[16;3]$ a $B=\left[\dfrac{1}{4};-5\right]$ leží na grafu funkce $f(x)=-3+3\log_{4}x$.

- **a)** $A$ ano, $B$ ano
- **b)** $A$ ne, $B$ ne
- **c)** $A$ ne, $B$ ano
- **d)** $A$ ano, $B$ ne
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $A$ ano, $B$ ne. $f(16)=3$, $f(\dfrac{1}{4})=-6$.

</details>

### `vl-vse-0207` — Vlastní úloha ve stylu přijímaček VŠE (č. 207)

*Темы:* 12. Logaritmická funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\log_{m-5}x$ s parametrem $m$ je klesající, právě když:

- **a)** $(5;\infty)$
- **b)** $(6;\infty)$
- **c)** $(5;6)$
- **d)** $(-\infty;6)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(5;6)$. Základ musí být kladný a různý od 1; funkce roste pro základ větší než 1 a klesá pro základ mezi 0 a 1.

</details>

### `vl-vse-0239` — Vlastní úloha ve stylu přijímaček VŠE (č. 239)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{4}(x-2)}$ je:

- **a)** $(2;18)$
- **b)** $\langle 3;18)$
- **c)** $(2;18\rangle$
- **d)** $\langle 3;18\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(2;18\rangle$. Logaritmus je definován pro $x>2$ a musí platit $\log_{4}(x-2)\le2$, tj. $x\le18$.

</details>

### `vl-vse-0272` — Vlastní úloha ve stylu přijímaček VŠE (č. 272)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[8;8]$ a $B=\left[\dfrac{1}{2};-4\right]$ leží na grafu funkce $f(x)=-2+3\log_{2}x$.

- **a)** $A$ ano, $B$ ano
- **b)** $A$ ne, $B$ ano
- **c)** $A$ ne, $B$ ne
- **d)** $A$ ano, $B$ ne
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $A$ ne, $B$ ne. $f(8)=7$, $f(\dfrac{1}{2})=-5$.

</details>

### `vl-vse-0286` — Vlastní úloha ve stylu přijímaček VŠE (č. 286)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{2}(x+2)}$ je:

- **a)** $(-2;2\rangle$
- **b)** $(-2;2)$
- **c)** $\langle -1;2)$
- **d)** $\langle -1;2\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-2;2\rangle$. Logaritmus je definován pro $x>-2$ a musí platit $\log_{2}(x+2)\le2$, tj. $x\le2$.

</details>

### `vl-vse-0327` — Vlastní úloha ve stylu přijímaček VŠE (č. 327)

*Темы:* 12. Logaritmická funkce, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete definiční obor funkce $f(x)=\log(|x-3|-|x+1|)$.

<details><summary>Ответ и решение</summary>

$D(f)=(-\infty;1)$. $|x-3|>|x+1|$: bod je blíž k $-1$ než ke $3$, tj. $x<1$.

</details>

### `vl-vse-0376` — Vlastní úloha ve stylu přijímaček VŠE (č. 376)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[8;7]$ a $B=\left[\dfrac{1}{4};-2\right]$ leží na grafu funkce $f(x)=1+2\log_{2}x$.

- **a)** $A$ ano, $B$ ne
- **b)** $A$ ne, $B$ ne
- **c)** $A$ ano, $B$ ano
- **d)** $A$ ne, $B$ ano
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $A$ ano, $B$ ne. $f(8)=7$, $f(\dfrac{1}{4})=-3$.

</details>

### `vl-vse-0388` — Vlastní úloha ve stylu přijímaček VŠE (č. 388)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[4;9]$ a $B=\left[\dfrac{1}{4};6\right]$ leží na grafu funkce $f(x)=7+2\log_{4}x$.

- **a)** $A$ ano, $B$ ano
- **b)** $A$ ano, $B$ ne
- **c)** $A$ ne, $B$ ne
- **d)** $A$ ne, $B$ ano
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $A$ ano, $B$ ne. $f(4)=9$, $f(\dfrac{1}{4})=5$.

</details>

### `vl-vse-0459` — Vlastní úloha ve stylu přijímaček VŠE (č. 459)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log(x-1)}$ je:

- **a)** $(1;11\rangle$
- **b)** $(1;11)$
- **c)** $\langle 2;11\rangle$
- **d)** $\langle 2;11)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(1;11\rangle$. Logaritmus je definován pro $x>1$ a musí platit $\log(x-1)\le1$, tj. $x\le11$.

</details>

### `vl-vse-0501` — Vlastní úloha ve stylu přijímaček VŠE (č. 501)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete definiční obor funkce $f(x)=\log_{\frac12}\left(\dfrac{x+1}{3-x}\right)$ a množinu všech $x$, pro která je $f(x)\ge0$.

<details><summary>Ответ и решение</summary>

$D(f)=(-1;3)$; $f(x)\ge0$ pro $x\in(-1;1\rangle$. $\frac{x+1}{3-x}>0$; logaritmus se základem menším než 1 je nezáporný pro argument z $(0;1\rangle$: $x+1\le3-x$.

</details>

### `vl-vse-0565` — Vlastní úloha ve stylu přijímaček VŠE (č. 565)

*Темы:* 12. Logaritmická funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\log_{1-m}x$ s parametrem $m$ je klesající, právě když:

- **a)** $(-\infty;1)$
- **b)** $(-\infty;0)\cup(0;1)$
- **c)** $(-\infty;0)$
- **d)** $(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Základ musí být kladný a různý od 1; funkce roste pro základ větší než 1 a klesá pro základ mezi 0 a 1. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0599` — Vlastní úloha ve stylu přijímaček VŠE (č. 599)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[2;1]$ a $B=\left[\dfrac{1}{4};-2\right]$ leží na grafu funkce $f(x)=-1+1\log_{2}x$.

- **a)** $A$ ne, $B$ ne
- **b)** $A$ ano, $B$ ne
- **c)** $A$ ano, $B$ ano
- **d)** $A$ ne, $B$ ano
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $A$ ne, $B$ ne. $f(2)=0$, $f(\dfrac{1}{4})=-3$.

</details>

### `vl-vse-0609` — Vlastní úloha ve stylu přijímaček VŠE (č. 609)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{3}x}$ je:

- **a)** $(0;9\rangle$
- **b)** $\langle 1;9\rangle$
- **c)** $(0;9)$
- **d)** $\langle 1;9)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(0;9\rangle$. Logaritmus je definován pro $x>0$ a musí platit $\log_{3}(x)\le2$, tj. $x\le9$.

</details>

### `vl-vse-0610` — Vlastní úloha ve stylu přijímaček VŠE (č. 610)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\log(x^2-2x+10)$ je:

- **a)** $(-\infty;0)\cup(0;\infty)$
- **b)** $(0;\infty)$
- **c)** $\mathbb R$
- **d)** $(-\infty;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\mathbb R$. Diskriminant $\,-36<0$, výraz je vždy kladný.

</details>

### `vl-vse-0642` — Vlastní úloha ve stylu přijímaček VŠE (č. 642)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete základ $z$, jestliže $\log_z\frac{8}{27}=-3$.

<details><summary>Ответ и решение</summary>

$z=\frac32$. $z^{-3}=\frac8{27}$, tedy $z^3=\frac{27}8$.

</details>

### `vl-vse-0689` — Vlastní úloha ve stylu přijímaček VŠE (č. 689)

*Темы:* 12. Logaritmická funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\log_{m-4}x$ s parametrem $m$ je klesající, právě když:

- **a)** $(5;\infty)$
- **b)** $(-\infty;5)$
- **c)** $(4;5)$
- **d)** $(4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(4;5)$. Základ musí být kladný a různý od 1; funkce roste pro základ větší než 1 a klesá pro základ mezi 0 a 1.

</details>

### `vl-vse-0704` — Vlastní úloha ve stylu přijímaček VŠE (č. 704)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[8;18]$ a $B=\left[\dfrac{1}{2};6\right]$ leží na grafu funkce $f(x)=8+3\log_{2}x$.

- **a)** $A$ ano, $B$ ne
- **b)** $A$ ne, $B$ ne
- **c)** $A$ ne, $B$ ano
- **d)** $A$ ano, $B$ ano
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $A$ ne, $B$ ne. $f(8)=17$, $f(\dfrac{1}{2})=5$.

</details>

### `vl-vse-0731` — Vlastní úloha ve stylu přijímaček VŠE (č. 731)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[27;8]$ a $B=\left[\dfrac{1}{9};-8\right]$ leží na grafu funkce $f(x)=-2+3\log_{3}x$.

- **a)** $A$ ano, $B$ ne
- **b)** $A$ ne, $B$ ne
- **c)** $A$ ano, $B$ ano
- **d)** $A$ ne, $B$ ano
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $A$ ne, $B$ ano. $f(27)=7$, $f(\dfrac{1}{9})=-8$.

</details>

### `vl-vse-0735` — Vlastní úloha ve stylu přijímaček VŠE (č. 735)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log_{2}x}$ je:

- **a)** $(0;2\rangle$
- **b)** $\langle 1;2)$
- **c)** $\langle 1;2\rangle$
- **d)** $(0;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(0;2\rangle$. Logaritmus je definován pro $x>0$ a musí platit $\log_{2}(x)\le1$, tj. $x\le2$.

</details>

### `vl-vse-0736` — Vlastní úloha ve stylu přijímaček VŠE (č. 736)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[4;4]$ a $B=\left[\dfrac{1}{2};-5\right]$ leží na grafu funkce $f(x)=-2+3\log_{2}x$.

- **a)** $A$ ano, $B$ ne
- **b)** $A$ ano, $B$ ano
- **c)** $A$ ne, $B$ ano
- **d)** $A$ ne, $B$ ne
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $A$ ano, $B$ ano. $f(4)=4$, $f(\dfrac{1}{2})=-5$.

</details>

### `vl-vse-0746` — Vlastní úloha ve stylu přijímaček VŠE (č. 746)

*Темы:* 12. Logaritmická funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\log_{1-m}x$ s parametrem $m$ je rostoucí, právě když:

- **a)** $(0;\infty)$
- **b)** $(-\infty;0)$
- **c)** $(-\infty;1)$
- **d)** $(0;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;0)$. Základ musí být kladný a různý od 1; funkce roste pro základ větší než 1 a klesá pro základ mezi 0 a 1.

</details>

### `vl-vse-0776` — Vlastní úloha ve stylu přijímaček VŠE (č. 776)

*Темы:* 12. Logaritmická funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\log_{m-1}x$ s parametrem $m$ je rostoucí, právě když:

- **a)** $(1;\infty)$
- **b)** $(2;\infty)$
- **c)** $(-\infty;2)$
- **d)** $(1;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(2;\infty)$. Základ musí být kladný a různý od 1; funkce roste pro základ větší než 1 a klesá pro základ mezi 0 a 1.

</details>

### `vl-vse-0837` — Vlastní úloha ve stylu přijímaček VŠE (č. 837)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{1-\log_{2}(x+3)}$ je:

- **a)** $(-3;-1)$
- **b)** $\langle -2;-1)$
- **c)** $(-3;-1\rangle$
- **d)** $\langle -2;-1\rangle$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-3;-1\rangle$. Logaritmus je definován pro $x>-3$ a musí platit $\log_{2}(x+3)\le1$, tj. $x\le-1$.

</details>

### `vl-vse-0857` — Vlastní úloha ve stylu přijímaček VŠE (č. 857)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[27;6]$ a $B=\left[\dfrac{1}{3};-3\right]$ leží na grafu funkce $f(x)=-1+2\log_{3}x$.

- **a)** $A$ ano, $B$ ano
- **b)** $A$ ne, $B$ ano
- **c)** $A$ ano, $B$ ne
- **d)** $A$ ne, $B$ ne
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $A$ ne, $B$ ano. $f(27)=5$, $f(\dfrac{1}{3})=-3$.

</details>

### `vl-vse-0863` — Vlastní úloha ve stylu přijímaček VŠE (č. 863)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[4;8]$ a $B=\left[\dfrac{1}{4};2\right]$ leží na grafu funkce $f(x)=4+3\log_{4}x$.

- **a)** $A$ ano, $B$ ne
- **b)** $A$ ne, $B$ ano
- **c)** $A$ ne, $B$ ne
- **d)** $A$ ano, $B$ ano
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $A$ ne, $B$ ne. $f(4)=7$, $f(\dfrac{1}{4})=1$.

</details>

### `vl-vse-0886` — Vlastní úloha ve stylu přijímaček VŠE (č. 886)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[27;7]$ a $B=\left[\dfrac{1}{9};-2\right]$ leží na grafu funkce $f(x)=1+2\log_{3}x$.

- **a)** $A$ ano, $B$ ano
- **b)** $A$ ne, $B$ ano
- **c)** $A$ ano, $B$ ne
- **d)** $A$ ne, $B$ ne
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $A$ ano, $B$ ne. $f(27)=7$, $f(\dfrac{1}{9})=-3$.

</details>

### `vl-vse-0902` — Vlastní úloha ve stylu přijímaček VŠE (č. 902)

*Темы:* 12. Logaritmická funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\log_{m-1}x$ s parametrem $m$ je klesající, právě když:

- **a)** $(1;\infty)$
- **b)** $(2;\infty)$
- **c)** $(1;2)$
- **d)** $(-\infty;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(1;2)$. Základ musí být kladný a různý od 1; funkce roste pro základ větší než 1 a klesá pro základ mezi 0 a 1.

</details>

### `vl-vse-0967` — Vlastní úloha ve stylu přijímaček VŠE (č. 967)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[4;5]$ a $B=\left[\dfrac{1}{2};-5\right]$ leží na grafu funkce $f(x)=-2+3\log_{2}x$.

- **a)** $A$ ne, $B$ ne
- **b)** $A$ ano, $B$ ne
- **c)** $A$ ano, $B$ ano
- **d)** $A$ ne, $B$ ano
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $A$ ne, $B$ ano. $f(4)=4$, $f(\dfrac{1}{2})=-5$.

</details>

### `vl-vse-1035` — Vlastní úloha ve stylu přijímaček VŠE (č. 1035)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[9;13]$ a $B=\left[\dfrac{1}{9};1\right]$ leží na grafu funkce $f(x)=6+3\log_{3}x$.

- **a)** $A$ ano, $B$ ano
- **b)** $A$ ne, $B$ ne
- **c)** $A$ ne, $B$ ano
- **d)** $A$ ano, $B$ ne
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $A$ ne, $B$ ne. $f(9)=12$, $f(\dfrac{1}{9})=0$.

</details>

### `vl-vse-1043` — Vlastní úloha ve stylu přijímaček VŠE (č. 1043)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[4;9]$ a $B=\left[\dfrac{1}{4};-4\right]$ leží na grafu funkce $f(x)=2+3\log_{2}x$.

- **a)** $A$ ano, $B$ ne
- **b)** $A$ ne, $B$ ano
- **c)** $A$ ano, $B$ ano
- **d)** $A$ ne, $B$ ne
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $A$ ne, $B$ ano. $f(4)=8$, $f(\dfrac{1}{4})=-4$.

</details>

### `vl-vse-1064` — Vlastní úloha ve stylu přijímaček VŠE (č. 1064)

*Темы:* 12. Logaritmická funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\log_{2-m}x$ s parametrem $m$ je rostoucí, právě když:

- **a)** $(-\infty;1)$
- **b)** $(1;2)$
- **c)** $(-\infty;2)$
- **d)** $(1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;1)$. Základ musí být kladný a různý od 1; funkce roste pro základ větší než 1 a klesá pro základ mezi 0 a 1.

</details>

### `vl-vse-1111` — Vlastní úloha ve stylu přijímaček VŠE (č. 1111)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[8;10]$ a $B=\left[\dfrac{1}{2};-1\right]$ leží na grafu funkce $f(x)=1+3\log_{2}x$.

- **a)** $A$ ano, $B$ ne
- **b)** $A$ ne, $B$ ano
- **c)** $A$ ne, $B$ ne
- **d)** $A$ ano, $B$ ano
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $A$ ano, $B$ ne. $f(8)=10$, $f(\dfrac{1}{2})=-2$.

</details>

### `vl-vse-1118` — Vlastní úloha ve stylu přijímaček VŠE (č. 1118)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete definiční obor funkce $f(x)=\sqrt{\log_{\frac12}(x-2)}$.

<details><summary>Ответ и решение</summary>

$D(f)=(2;3\rangle$. $0<x-2\le1$.

</details>

### `vl-vse-1133` — Vlastní úloha ve stylu přijímaček VŠE (č. 1133)

*Темы:* 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rozhodněte, zda body $A=[2;0]$ a $B=\left[\dfrac{1}{4};-4\right]$ leží na grafu funkce $f(x)=-2+1\log_{2}x$.

- **a)** $A$ ne, $B$ ne
- **b)** $A$ ano, $B$ ne
- **c)** $A$ ano, $B$ ano
- **d)** $A$ ne, $B$ ano
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $A$ ne, $B$ ano. $f(2)=-1$, $f(\dfrac{1}{4})=-4$.

</details>

### `vl-vse-1217` — Vlastní úloha ve stylu přijímaček VŠE (č. 1217)

*Темы:* 12. Logaritmická funkce, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Maximální definiční obor funkce $f(x)=\sqrt{2-\log_{2}(x-1)}$ je:

- **a)** $(1;5)$
- **b)** $\langle 2;5\rangle$
- **c)** $(1;5\rangle$
- **d)** $\langle 2;5)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(1;5\rangle$. Logaritmus je definován pro $x>1$ a musí platit $\log_{2}(x-1)\le2$, tj. $x\le5$.

</details>

### `vl-vse-1245` — Vlastní úloha ve stylu přijímaček VŠE (č. 1245)

*Темы:* 12. Logaritmická funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\log_{m-6}x$ s parametrem $m$ je rostoucí, právě když:

- **a)** $(6;7)$
- **b)** $(7;\infty)$
- **c)** $(-\infty;7)$
- **d)** $(6;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(7;\infty)$. Základ musí být kladný a různý od 1; funkce roste pro základ větší než 1 a klesá pro základ mezi 0 a 1.

</details>

### `vse-vzor-07` — [VŠE, vzorový test z matematiky – FMV (příklad 7, 150 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fmv.pdf)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Množina všech reálných čísel, pro která platí $\log_3^2x+\log_3x-2\ge0$, je rovna množině

*Встречается также:* VŠE, vzorový test z matematiky – FFÚ a FPH (příklad 7, 15 bodů); VŠE, vzorový test z matematiky – FIS (příklad 10, 10 bodů)

- **a)** $\left(0,\frac19\right\rangle\cup\langle3,\infty)$
- **b)** $\left(\frac19,3\right)$
- **c)** $\left(-\infty,\frac19\right\rangle\cup\langle3,\infty)$
- **d)** $\langle3,\infty)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**a** — $\left(0,\frac19\right\rangle\cup\langle3,\infty)$. $t=\log_3x$: $t^2+t-2=(t+2)(t-1)\ge0\iff t\le-2\ \vee\ t\ge1$, tj. $0<x\le\frac19$ nebo $x\ge3$.

</details>

### `vl-vse-0010` — Vlastní úloha ve stylu přijímaček VŠE (č. 10)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $7^{\log_{\frac1{3}}x}=7$ je reálné číslo, které leží v intervalu:

- **a)** $\langle \dfrac{1}{2};1)$
- **b)** $\langle 0;\dfrac{1}{2})$
- **c)** $\langle 2;4)$
- **d)** $\langle 1;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{3}}x=1$, tedy $x=\left(\frac1{3}\right)^{1}=\dfrac{1}{3}$.

</details>

### `vl-vse-0011` — Vlastní úloha ve stylu přijímaček VŠE (č. 11)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $2^{\log_{\frac1{3}}x}=8$ je reálné číslo, které leží v intervalu:

- **a)** $\langle \dfrac{1}{2};1)$
- **b)** $\langle 1;2)$
- **c)** $\langle 2;4)$
- **d)** $\langle 0;\dfrac{1}{2})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{3}}x=3$, tedy $x=\left(\frac1{3}\right)^{3}=\dfrac{1}{27}$.

</details>

### `vl-vse-0012` — Vlastní úloha ve stylu přijímaček VŠE (č. 12)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $\log_2(x+1)+\log_2(x-1)=3$.

<details><summary>Ответ и решение</summary>

$x=3$. $x^2-1=8$, kořen $-3$ nevyhovuje podmínce $x>1$.

</details>

### `vl-vse-0013` — Vlastní úloha ve stylu přijímaček VŠE (č. 13)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $2^{\log_{\frac1{2}}x}=4$ je reálné číslo, které leží v intervalu:

- **a)** $\langle \dfrac{1}{2};1)$
- **b)** $\langle 1;2)$
- **c)** $\langle 4;8)$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $\log_{\frac1{2}}x=2$, tedy $x=\left(\frac1{2}\right)^{2}=\dfrac{1}{4}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0022` — Vlastní úloha ve stylu přijímaček VŠE (č. 22)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $7^{\log_{\frac1{3}}x}=49$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 0;\dfrac{1}{2})$
- **b)** $\langle 1;2)$
- **c)** $\langle 2;4)$
- **d)** $\langle \dfrac{1}{2};1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{3}}x=2$, tedy $x=\left(\frac1{3}\right)^{2}=\dfrac{1}{9}$.

</details>

### `vl-vse-0120` — Vlastní úloha ve stylu přijímaček VŠE (č. 120)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $7^{\log_{\frac1{2}}x}=\dfrac{1}{7}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 2;4)$
- **b)** $\langle 1;2)$
- **c)** $\langle 0;\dfrac{1}{2})$
- **d)** $\langle \dfrac{1}{2};1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 2;4)$. $\log_{\frac1{2}}x=-1$, tedy $x=\left(\frac1{2}\right)^{-1}=2$.

</details>

### `vl-vse-0150` — Vlastní úloha ve stylu přijímaček VŠE (č. 150)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $7^{\log_{\frac1{3}}x}=343$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 0;\dfrac{1}{2})$
- **b)** $\langle 1;2)$
- **c)** $\langle \dfrac{1}{2};1)$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{3}}x=3$, tedy $x=\left(\frac1{3}\right)^{3}=\dfrac{1}{27}$.

</details>

### `vl-nsz-151` — [Vlastní úloha ve stylu NSZ Matematika (č. 151)](https://www.scio.cz/matematika)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik řešení má v $\mathbb R$ rovnice $x\log x-2x-\log x+2=0$?

- **a)** $1$
- **b)** $2$
- **c)** $3$
- **d)** $4$

<details><summary>Ответ и решение</summary>

**b** — $2$. $(x-1)(\log x-2)=0$: $x=1$ nebo $x=100$.

</details>

### `vl-nsz-172` — [Vlastní úloha ve stylu NSZ Matematika (č. 172)](https://www.scio.cz/matematika)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechny kořeny rovnice $\log x-1=\log(x-9)-\log5$ leží v intervalu:

- **a)** $(5,10)$
- **b)** $\langle10,15)$
- **c)** $\langle15,20)$
- **d)** $\langle20,25)$

<details><summary>Ответ и решение</summary>

**c** — $\langle15,20)$. $\log\frac x{10}=\log\frac{x-9}5$, tedy $5x=10x-90$, $x=18$ (podmínka $x>9$ splněna).

</details>

### `vl-vse-0275` — Vlastní úloha ve stylu přijímaček VŠE (č. 275)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $7^{\log_{\frac1{3}}x}=\dfrac{1}{7}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 1;2)$
- **b)** $\langle 0;\dfrac{1}{2})$
- **c)** $\langle \dfrac{1}{2};1)$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 2;4)$. $\log_{\frac1{3}}x=-1$, tedy $x=\left(\frac1{3}\right)^{-1}=3$.

</details>

### `vl-vse-0338` — Vlastní úloha ve stylu přijímaček VŠE (č. 338)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $2^{\log_{\frac1{3}}x}=4$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 1;2)$
- **b)** $\langle \dfrac{1}{2};1)$
- **c)** $\langle 2;4)$
- **d)** $\langle 0;\dfrac{1}{2})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{3}}x=2$, tedy $x=\left(\frac1{3}\right)^{2}=\dfrac{1}{9}$.

</details>

### `vl-vse-0340` — Vlastní úloha ve stylu přijímaček VŠE (č. 340)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $3^{\log_{\frac1{2}}x}=9$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 1;2)$
- **b)** $\langle 0;\dfrac{1}{2})$
- **c)** $\langle 2;4)$
- **d)** $\langle \dfrac{1}{2};1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{2}}x=2$, tedy $x=\left(\frac1{2}\right)^{2}=\dfrac{1}{4}$.

</details>

### `vl-vse-0370` — Vlastní úloha ve stylu přijímaček VŠE (č. 370)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $7^{\log_{\frac1{2}}x}=\dfrac{1}{49}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 0;\dfrac{1}{2})$
- **b)** $\langle 1;2)$
- **c)** $\langle 4;8)$
- **d)** $\langle \dfrac{1}{2};1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 4;8)$. $\log_{\frac1{2}}x=-2$, tedy $x=\left(\frac1{2}\right)^{-2}=4$.

</details>

### `vl-vse-0409` — Vlastní úloha ve stylu přijímaček VŠE (č. 409)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $3^{\log_{\frac1{2}}x}=27$ je reálné číslo, které leží v intervalu:

- **a)** $\langle \dfrac{1}{2};1)$
- **b)** $\langle 1;2)$
- **c)** $\langle 0;\dfrac{1}{2})$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{2}}x=3$, tedy $x=\left(\frac1{2}\right)^{3}=\dfrac{1}{8}$.

</details>

### `vl-vse-0466` — Vlastní úloha ve stylu přijímaček VŠE (č. 466)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $3^{\log_{\frac1{2}}x}=\dfrac{1}{3}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 2;4)$
- **b)** $\langle \dfrac{1}{2};1)$
- **c)** $\langle 0;\dfrac{1}{2})$
- **d)** $\langle 1;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 2;4)$. $\log_{\frac1{2}}x=-1$, tedy $x=\left(\frac1{2}\right)^{-1}=2$.

</details>

### `vl-vse-0548` — Vlastní úloha ve stylu přijímaček VŠE (č. 548)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte nerovnici $\log_{\frac12}(x-3)\ge-2$.

<details><summary>Ответ и решение</summary>

$x\in(3;7\rangle$. $0<x-3\le4$.

</details>

### `vl-vse-0551` — Vlastní úloha ve stylu přijímaček VŠE (č. 551)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $2^{\log_{\frac1{2}}x}=8$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 0;\dfrac{1}{2})$
- **b)** $\langle 1;2)$
- **c)** $\langle 2;4)$
- **d)** $\langle \dfrac{1}{2};1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{2}}x=3$, tedy $x=\left(\frac1{2}\right)^{3}=\dfrac{1}{8}$.

</details>

### `vl-vse-0564` — Vlastní úloha ve stylu přijímaček VŠE (č. 564)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $5^{\log_{\frac1{2}}x}=5$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 2;4)$
- **b)** $\langle 0;\dfrac{1}{2})$
- **c)** $\langle \dfrac{1}{2};1)$
- **d)** $\langle 1;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle \dfrac{1}{2};1)$. $\log_{\frac1{2}}x=1$, tedy $x=\left(\frac1{2}\right)^{1}=\dfrac{1}{2}$.

</details>

### `vl-vse-0602` — Vlastní úloha ve stylu přijímaček VŠE (č. 602)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte nerovnici $\log_{\frac13}(2x-1)>-2$.

<details><summary>Ответ и решение</summary>

$x\in\left(\frac12;5\right)$. $0<2x-1<9$.

</details>

### `vl-vse-0604` — Vlastní úloha ve stylu přijímaček VŠE (č. 604)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $5^{\log_{\frac1{3}}x}=25$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 1;2)$
- **b)** $\langle \dfrac{1}{2};1)$
- **c)** $\langle 2;4)$
- **d)** $\langle 0;\dfrac{1}{2})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{3}}x=2$, tedy $x=\left(\frac1{3}\right)^{2}=\dfrac{1}{9}$.

</details>

### `vl-vse-0632` — Vlastní úloha ve stylu přijímaček VŠE (č. 632)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte nerovnici $\log_{\frac13}(x-1)\ge\log_{\frac13}9$.

<details><summary>Ответ и решение</summary>

$x\in(1;10\rangle$. Základ menší než 1: $0<x-1\le9$.

</details>

### `vl-vse-0633` — Vlastní úloha ve stylu přijímaček VŠE (č. 633)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $3^{\log_{\frac1{2}}x}=\dfrac{1}{9}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 2;4)$
- **b)** $\langle 1;2)$
- **c)** $\langle 0;\dfrac{1}{2})$
- **d)** $\langle \dfrac{1}{2};1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $\log_{\frac1{2}}x=-2$, tedy $x=\left(\frac1{2}\right)^{-2}=4$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0640` — Vlastní úloha ve stylu přijímaček VŠE (č. 640)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $2^{\log_{\frac1{3}}x}=\dfrac{1}{4}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle \dfrac{1}{2};1)$
- **b)** $\langle 1;2)$
- **c)** $\langle 0;\dfrac{1}{2})$
- **d)** $\langle 8;16)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 8;16)$. $\log_{\frac1{3}}x=-2$, tedy $x=\left(\frac1{3}\right)^{-2}=9$.

</details>

### `vl-vse-0652` — Vlastní úloha ve stylu přijímaček VŠE (č. 652)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $3^{\log_{\frac1{3}}x}=\dfrac{1}{9}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 1;2)$
- **b)** $\langle \dfrac{1}{2};1)$
- **c)** $\langle 8;16)$
- **d)** $\langle 0;\dfrac{1}{2})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 8;16)$. $\log_{\frac1{3}}x=-2$, tedy $x=\left(\frac1{3}\right)^{-2}=9$.

</details>

### `vl-vse-0653` — Vlastní úloha ve stylu přijímaček VŠE (č. 653)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $3^{\log_{\frac1{3}}x}=9$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 0;\dfrac{1}{2})$
- **b)** $\langle 1;2)$
- **c)** $\langle \dfrac{1}{2};1)$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{3}}x=2$, tedy $x=\left(\frac1{3}\right)^{2}=\dfrac{1}{9}$.

</details>

### `vl-vse-0662` — Vlastní úloha ve stylu přijímaček VŠE (č. 662)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $3^{\log_{\frac1{2}}x}=3$ je reálné číslo, které leží v intervalu:

- **a)** $\langle \dfrac{1}{2};1)$
- **b)** $\langle 2;4)$
- **c)** $\langle 0;\dfrac{1}{2})$
- **d)** $\langle 1;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle \dfrac{1}{2};1)$. $\log_{\frac1{2}}x=1$, tedy $x=\left(\frac1{2}\right)^{1}=\dfrac{1}{2}$.

</details>

### `vl-vse-0665` — Vlastní úloha ve stylu přijímaček VŠE (č. 665)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $3^{\log_{\frac1{3}}x}=27$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 0;\dfrac{1}{2})$
- **b)** $\langle \dfrac{1}{2};1)$
- **c)** $\langle 1;2)$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{3}}x=3$, tedy $x=\left(\frac1{3}\right)^{3}=\dfrac{1}{27}$.

</details>

### `vl-vse-0703` — Vlastní úloha ve stylu přijímaček VŠE (č. 703)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $2^{\log_{\frac1{2}}x}=\dfrac{1}{2}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 0;\dfrac{1}{2})$
- **b)** $\langle \dfrac{1}{2};1)$
- **c)** $\langle 1;2)$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 2;4)$. $\log_{\frac1{2}}x=-1$, tedy $x=\left(\frac1{2}\right)^{-1}=2$.

</details>

### `vl-vse-0715` — Vlastní úloha ve stylu přijímaček VŠE (č. 715)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $7^{\log_{\frac1{2}}x}=343$ je reálné číslo, které leží v intervalu:

- **a)** $\langle \dfrac{1}{2};1)$
- **b)** $\langle 0;\dfrac{1}{2})$
- **c)** $\langle 1;2)$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{2}}x=3$, tedy $x=\left(\frac1{2}\right)^{3}=\dfrac{1}{8}$.

</details>

### `vl-vse-0719` — Vlastní úloha ve stylu přijímaček VŠE (č. 719)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $5^{\log_{\frac1{3}}x}=125$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 1;2)$
- **b)** $\langle \dfrac{1}{2};1)$
- **c)** $\langle 0;\dfrac{1}{2})$
- **d)** $\langle 2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{3}}x=3$, tedy $x=\left(\frac1{3}\right)^{3}=\dfrac{1}{27}$.

</details>

### `vl-vse-0777` — Vlastní úloha ve stylu přijímaček VŠE (č. 777)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $\log_3(x+5)+\log_3(x-1)=3$.

<details><summary>Ответ и решение</summary>

$x=4$. $(x+5)(x-1)=27$, $x^2+4x-32=0$; $-8$ nevyhovuje.

</details>

### `vl-vse-0808` — Vlastní úloha ve stylu přijímaček VŠE (č. 808)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $5^{\log_{\frac1{2}}x}=\dfrac{1}{25}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle \dfrac{1}{2};1)$
- **b)** $\langle 1;2)$
- **c)** $\langle 4;8)$
- **d)** $\langle 0;\dfrac{1}{2})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 4;8)$. $\log_{\frac1{2}}x=-2$, tedy $x=\left(\frac1{2}\right)^{-2}=4$.

</details>

### `vl-vse-0820` — Vlastní úloha ve stylu přijímaček VŠE (č. 820)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $2^{\log_{\frac1{2}}x}=2$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 1;2)$
- **b)** $\langle 2;4)$
- **c)** $\langle \dfrac{1}{2};1)$
- **d)** $\langle 0;\dfrac{1}{2})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle \dfrac{1}{2};1)$. $\log_{\frac1{2}}x=1$, tedy $x=\left(\frac1{2}\right)^{1}=\dfrac{1}{2}$.

</details>

### `vl-vse-0848` — Vlastní úloha ve stylu přijímaček VŠE (č. 848)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna reálná řešení rovnice $3^{\log_{\frac13}x}=\frac19$ náleží intervalu:

- **a)** $(7;11)$
- **b)** $(3;7)$
- **c)** $(-1;3)$
- **d)** $(11;15)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(7;11)$. $\log_{\frac13}x=-2$, $x=\left(\frac13\right)^{-2}=9$.

</details>

### `vl-vse-0903` — Vlastní úloha ve stylu přijímaček VŠE (č. 903)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $7^{\log_{\frac1{3}}x}=\dfrac{1}{49}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 8;16)$
- **b)** $\langle \dfrac{1}{2};1)$
- **c)** $\langle 0;\dfrac{1}{2})$
- **d)** $\langle 1;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 8;16)$. $\log_{\frac1{3}}x=-2$, tedy $x=\left(\frac1{3}\right)^{-2}=9$.

</details>

### `vl-vse-0970` — Vlastní úloha ve stylu přijímaček VŠE (č. 970)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $5^{\log_{\frac1{3}}x}=\dfrac{1}{25}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 0;\dfrac{1}{2})$
- **b)** $\langle \dfrac{1}{2};1)$
- **c)** $\langle 1;2)$
- **d)** $\langle 8;16)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 8;16)$. $\log_{\frac1{3}}x=-2$, tedy $x=\left(\frac1{3}\right)^{-2}=9$.

</details>

### `vl-vse-0981` — Vlastní úloha ve stylu přijímaček VŠE (č. 981)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $7^{\log_{\frac1{2}}x}=49$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 1;2)$
- **b)** $\langle 0;\dfrac{1}{2})$
- **c)** $\langle 2;4)$
- **d)** $\langle \dfrac{1}{2};1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{2}}x=2$, tedy $x=\left(\frac1{2}\right)^{2}=\dfrac{1}{4}$.

</details>

### `vl-vse-1112` — Vlastní úloha ve stylu přijímaček VŠE (č. 1112)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $3^{\log_{\frac1{3}}x}=\dfrac{1}{3}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 2;4)$
- **b)** $\langle 1;2)$
- **c)** $\langle 0;\dfrac{1}{2})$
- **d)** $\langle \dfrac{1}{2};1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 2;4)$. $\log_{\frac1{3}}x=-1$, tedy $x=\left(\frac1{3}\right)^{-1}=3$.

</details>

### `vl-vse-1135` — Vlastní úloha ve stylu přijímaček VŠE (č. 1135)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $2^{\log_{\frac1{3}}x}=\dfrac{1}{2}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 1;2)$
- **b)** $\langle \dfrac{1}{2};1)$
- **c)** $\langle 2;4)$
- **d)** $\langle 0;\dfrac{1}{2})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 2;4)$. $\log_{\frac1{3}}x=-1$, tedy $x=\left(\frac1{3}\right)^{-1}=3$.

</details>

### `vl-vse-1163` — Vlastní úloha ve stylu přijímaček VŠE (č. 1163)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $7^{\log_{\frac1{2}}x}=7$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 1;2)$
- **b)** $\langle 2;4)$
- **c)** $\langle \dfrac{1}{2};1)$
- **d)** $\langle 0;\dfrac{1}{2})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle \dfrac{1}{2};1)$. $\log_{\frac1{2}}x=1$, tedy $x=\left(\frac1{2}\right)^{1}=\dfrac{1}{2}$.

</details>

### `vl-vse-1211` — Vlastní úloha ve stylu přijímaček VŠE (č. 1211)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $3^{\log_{\frac1{3}}x}=3$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 2;4)$
- **b)** $\langle \dfrac{1}{2};1)$
- **c)** $\langle 0;\dfrac{1}{2})$
- **d)** $\langle 1;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 0;\dfrac{1}{2})$. $\log_{\frac1{3}}x=1$, tedy $x=\left(\frac1{3}\right)^{1}=\dfrac{1}{3}$.

</details>

### `vl-vse-1228` — Vlastní úloha ve stylu přijímaček VŠE (č. 1228)

*Темы:* 13. Logaritmické rovnice a nerovnice, 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete všechna $x\in\mathbb R$, pro která platí $\log_2(x^2-5x+4)<2$.

<details><summary>Ответ и решение</summary>

$x\in(0;1)\cup(4;5)$. Podmínka $x^2-5x+4>0$ a zároveň $x^2-5x+4<4$, tj. $0<x<5$.

</details>

### `vl-vse-1233` — Vlastní úloha ve stylu přijímaček VŠE (č. 1233)

*Темы:* 13. Logaritmické rovnice a nerovnice, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením rovnice $5^{\log_{\frac1{3}}x}=\dfrac{1}{5}$ je reálné číslo, které leží v intervalu:

- **a)** $\langle 1;2)$
- **b)** $\langle \dfrac{1}{2};1)$
- **c)** $\langle 2;4)$
- **d)** $\langle 0;\dfrac{1}{2})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 2;4)$. $\log_{\frac1{3}}x=-1$, tedy $x=\left(\frac1{3}\right)^{-1}=3$.

</details>

### `vl-nsz-026` — [Vlastní úloha ve stylu NSZ Matematika (č. 26)](https://www.scio.cz/matematika)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Nejmenší perioda funkce $f:\ y=\sin\frac x2+\cos\frac x3$ je:

- **a)** $4\pi$
- **b)** $6\pi$
- **c)** $10\pi$
- **d)** $12\pi$

<details><summary>Ответ и решение</summary>

**d** — $12\pi$. Periody sčítanců jsou $4\pi$ a $6\pi$, společná nejmenší je $12\pi$.

</details>

### `vl-obec-037` — Vlastní úloha ve stylu přijímacích testů (č. 37)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro jaké $x$ z intervalu $\langle0;\pi\rangle$ se protínají grafy funkcí $f:\ y=\operatorname{tg}x$ a $g:\ y=\operatorname{cotg}\left(x-\frac\pi2\right)$?

- **a)** pouze pro $x=0$
- **b)** pouze pro $x=\frac\pi2$
- **c)** pouze pro $x=0$ a $x=\pi$
- **d)** pouze pro $x=\frac\pi4$
- **e)** grafy se neprotínají

<details><summary>Ответ и решение</summary>

**c** — pouze pro $x=0$ a $x=\pi$. $\operatorname{cotg}\left(x-\frac\pi2\right)=-\operatorname{tg}x$; rovnost $\operatorname{tg}x=-\operatorname{tg}x$ dává $\operatorname{tg}x=0$.

</details>

### `vl-nsz-042` — [Vlastní úloha ve stylu NSZ Matematika (č. 42)](https://www.scio.cz/matematika)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Uvažujme tvrzení: funkce $y=\cos x-1$ je sudá; funkce $y=\sin x\cdot\cos x$ je lichá; funkce $y=\sin^2x+\cos^2x$ je konstantní; graf funkce $y=2\cos x$ protíná osu $y$ v bodě $[0;0]$. Kolik z nich je pravdivých?

- **a)** právě 0
- **b)** právě 1
- **c)** právě 2
- **d)** právě 3

<details><summary>Ответ и решение</summary>

**d** — právě 3. První tři platí; $2\cos0=2$, takže graf protíná osu $y$ v bodě $[0;2]$.

</details>

### `vl-nsz-132` — [Vlastní úloha ve stylu NSZ Matematika (č. 132)](https://www.scio.cz/matematika)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jsou dány funkce $f_1:\ y=\cos x$, $f_2:\ y=\sin3x$, $f_3:\ y=\sin\frac x2$, $f_4:\ y=\cos2x$. Na intervalu $\left(0,\frac\pi3\right)$ nabývá své největší hodnoty (globálního maxima) pouze:

- **a)** $f_1$
- **b)** $f_2$
- **c)** $f_3$
- **d)** $f_2$ a $f_4$

<details><summary>Ответ и решение</summary>

**b** — $f_2$. Maxima $1$ nabývá $\sin3x$ v $x=\frac\pi6$. $\cos x$ a $\cos2x$ mají maximum v $0$, které do intervalu nepatří, $\sin\frac x2$ až v $\pi$.

</details>

### `vl-nsz-208` — [Vlastní úloha ve stylu NSZ Matematika (č. 208)](https://www.scio.cz/matematika)

*Темы:* 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je nejdelší interval $A\subseteq\langle0;2\pi\rangle$, na kterém jsou $\sin x$ i $\cos x$ záporné a zároveň $\operatorname{tg}x>1$?

- **a)** $\left(\pi;\frac{3\pi}2\right)$
- **b)** $\left(\frac{5\pi}4;\frac{3\pi}2\right)$
- **c)** $\left(\pi;\frac{5\pi}4\right)$
- **d)** $\left(\frac{3\pi}2;2\pi\right)$

<details><summary>Ответ и решение</summary>

**b** — $\left(\frac{5\pi}4;\frac{3\pi}2\right)$. Záporné $\sin$ i $\cos$: III. kvadrant; tam tangens roste od 0 a hodnotu 1 má v $\frac{5\pi}4$.

</details>

### `vse-vzor-06` — [VŠE, vzorový test z matematiky – FMV (příklad 6, 150 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fmv.pdf)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* текст оригинала (по курсу)

Součet všech řešení goniometrické rovnice $\sin\dfrac x2+\cos x-1=0$ v intervalu $(0,2\pi)$ je

*Встречается также:* VŠE, vzorový test z matematiky – FFÚ a FPH (příklad 6, 15 bodů); VŠE, vzorový test z matematiky – FIS (příklad 9, 10 bodů)

- **a)** $\pi$
- **b)** $2\pi$
- **c)** $3\pi$
- **d)** $\dfrac\pi2$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $2\pi$. $\cos x=1-2\sin^2\frac x2$: $\sin\frac x2\left(1-2\sin\frac x2\right)=0$. V $(0,2\pi)$ je $\sin\frac x2\ne0$, z $\sin\frac x2=\frac12$: $x=\frac\pi3$, $x=\frac{5\pi}3$; součet $2\pi$.

</details>

### `vl-vse-0003` — Vlastní úloha ve stylu přijímaček VŠE (č. 3)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sin x\cos x=\frac14$, je:

- **a)** $2$
- **b)** $3$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0021` — Vlastní úloha ve stylu přijímaček VŠE (č. 21)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\operatorname{tg}x=2\sin x$, je:

- **a)** $2$
- **b)** $1$
- **c)** $0$
- **d)** $5$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $5$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-obec-030` — Vlastní úloha ve stylu přijímacích testů (č. 30)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sqrt3\cos x=\sin2x$, je:

- **a)** $4$
- **b)** $2$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0044` — Vlastní úloha ve stylu přijímaček VŠE (č. 44)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\operatorname{tg}^2x=3$, je:

- **a)** $2$
- **b)** $1$
- **c)** $3$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0062` — Vlastní úloha ve stylu přijímaček VŠE (č. 62)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $\sin x\cos x=\sin^22x$.

<details><summary>Ответ и решение</summary>

$x=\frac{k\pi}2$ nebo $x=\frac{\pi}{12}+k\pi$ nebo $x=\frac{5\pi}{12}+k\pi$ ($k\in\mathbb Z$). $\frac12\sin2x=\sin^22x$: $\sin2x=0$ nebo $\sin2x=\frac12$.

</details>

### `vl-nsz-064` — [Vlastní úloha ve stylu NSZ Matematika (č. 64)](https://www.scio.cz/matematika)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik řešení má rovnice $\operatorname{tg}x\cdot\cos x=0$ v intervalu $(-\pi,2\pi)$?

- **a)** $1$
- **b)** $2$
- **c)** $3$
- **d)** $5$

<details><summary>Ответ и решение</summary>

**b** — $2$. Kde je tangens definován ($\cos x\ne0$), je levá strana $\sin x$. Rovnice $\sin x=0$ má v intervalu kořeny $0$ a $\pi$; body $\pm\frac\pi2$, $\frac{3\pi}2$ nepatří do definičního oboru.

</details>

### `vl-vse-0080` — Vlastní úloha ve stylu přijímaček VŠE (č. 80)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $2\cos^2x+3\cos x+1=0$, je:

- **a)** $2$
- **b)** $3$
- **c)** $0$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0081` — Vlastní úloha ve stylu přijímaček VŠE (č. 81)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\operatorname{tg}x=2\sin x$, je:

- **a)** $0$
- **b)** $2$
- **c)** $1$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0087` — Vlastní úloha ve stylu přijímaček VŠE (č. 87)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sin^2x-\cos^2x=\frac12$, je:

- **a)** $3$
- **b)** $1$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $2$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0090` — Vlastní úloha ve stylu přijímaček VŠE (č. 90)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $2\sin^2x-\sin x=1$, je:

- **a)** $2$
- **b)** $3$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0094` — Vlastní úloha ve stylu přijímaček VŠE (č. 94)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\sin x\cos x=\frac14$, je:

- **a)** $1$
- **b)** $2$
- **c)** $0$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-nsz-098` — [Vlastní úloha ve stylu NSZ Matematika (č. 98)](https://www.scio.cz/matematika)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro $x\in\left(0;\frac\pi2\right)$ platí $2\sin^2x+3\cos x=3$. Pak $x$ je rovno:

- **a)** $\dfrac\pi6$
- **b)** $\dfrac\pi4$
- **c)** $\dfrac\pi3$
- **d)** $\dfrac{5\pi}{12}$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac\pi3$. $2-2\cos^2x+3\cos x=3$, $2\cos^2x-3\cos x+1=0$, $\cos x=1$ (mimo interval) nebo $\cos x=\frac12$.

</details>

### `vl-nsz-116` — [Vlastní úloha ve stylu NSZ Matematika (č. 116)](https://www.scio.cz/matematika)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik řešení má rovnice $2\sin^2x+5\sin x=3$ v intervalu $\langle0;3\pi\rangle$?

- **a)** $1$
- **b)** $2$
- **c)** $3$
- **d)** $4$

<details><summary>Ответ и решение</summary>

**d** — $4$. $(2\sin x-1)(\sin x+3)=0$, tedy $\sin x=\frac12$: $\frac\pi6,\frac{5\pi}6,\frac{13\pi}6,\frac{17\pi}6$.

</details>

### `vl-vse-0127` — Vlastní úloha ve stylu přijímaček VŠE (č. 127)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\cos2x=\cos x$, je:

- **a)** $1$
- **b)** $2$
- **c)** $3$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0128` — Vlastní úloha ve stylu přijímaček VŠE (č. 128)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešte rovnici $2\cos^2x+\sin x-1=0$ v intervalu $\langle0;2\pi)$.

<details><summary>Ответ и решение</summary>

$x\in\left\{\frac\pi2;\frac{7\pi}6;\frac{11\pi}6\right\}$. $2\sin^2x-\sin x-1=0$: $\sin x=1$ nebo $-\frac12$.

</details>

### `vl-vse-0136` — Vlastní úloha ve stylu přijímaček VŠE (č. 136)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sqrt3\cos x=\sin2x$, je:

- **a)** $0$
- **b)** $2$
- **c)** $3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0145` — Vlastní úloha ve stylu přijímaček VŠE (č. 145)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sin x+\cos2x=0$, je:

- **a)** $3$
- **b)** $0$
- **c)** $4$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-nsz-158` — [Vlastní úloha ve stylu NSZ Matematika (č. 158)](https://www.scio.cz/matematika)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešením nerovnice $\operatorname{cotg}\left(x+\frac\pi2\right)>0$ v intervalu $\langle0,2\pi\rangle$ je množina:

- **a)** $\left(0,\frac\pi2\right)\cup\left(\pi,\frac{3\pi}2\right)$
- **b)** $\left(\frac\pi2,\pi\right)\cup\left(\frac{3\pi}2,2\pi\right)$
- **c)** $\left(\frac\pi2,\frac{3\pi}2\right)$
- **d)** $(0,\pi)$

<details><summary>Ответ и решение</summary>

**b** — $\left(\frac\pi2,\pi\right)\cup\left(\frac{3\pi}2,2\pi\right)$. $\operatorname{cotg}\left(x+\frac\pi2\right)=-\operatorname{tg}x$, takže hledáme $\operatorname{tg}x<0$: II. a IV. kvadrant.

</details>

### `vl-vse-0177` — Vlastní úloha ve stylu přijímaček VŠE (č. 177)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\sqrt3\cos x=\sin2x$, je:

- **a)** $2$
- **b)** $1$
- **c)** $4$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0194` — Vlastní úloha ve stylu přijímaček VŠE (č. 194)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\cos^2x=1+\sin x$, je:

- **a)** $1$
- **b)** $3$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0196` — Vlastní úloha ve stylu přijímaček VŠE (č. 196)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\operatorname{tg}x=2\sin x$, je:

- **a)** $3$
- **b)** $1$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0230` — Vlastní úloha ve stylu přijímaček VŠE (č. 230)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete všechna $x\in(0;2\pi)$, pro která platí $\sqrt3\operatorname{tg}x\ge1$.

<details><summary>Ответ и решение</summary>

$x\in\left\langle\frac\pi6;\frac\pi2\right)\cup\left\langle\frac{7\pi}6;\frac{3\pi}2\right)$. $\operatorname{tg}x\ge\frac{\sqrt3}3$; perioda $\pi$, v bodech $\frac\pi2$, $\frac{3\pi}2$ není tangens definován.

</details>

### `vl-vse-0253` — Vlastní úloha ve stylu přijímaček VŠE (č. 253)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\sqrt3\cos x=\sin2x$, je:

- **a)** $0$
- **b)** $3$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0269` — Vlastní úloha ve stylu přijímaček VŠE (č. 269)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\sin2x=\sin x$, je:

- **a)** $2$
- **b)** $1$
- **c)** $5$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $5$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0273` — Vlastní úloha ve stylu přijímaček VŠE (č. 273)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\sin x+\cos2x=0$, je:

- **a)** $0$
- **b)** $2$
- **c)** $4$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0277` — Vlastní úloha ve stylu přijímaček VŠE (č. 277)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $2\cos^2x=\cos x$, je:

- **a)** $1$
- **b)** $4$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0278` — Vlastní úloha ve stylu přijímaček VŠE (č. 278)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\cos^2x=1+\sin x$, je:

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0279` — Vlastní úloha ve stylu přijímaček VŠE (č. 279)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\sin x\cos x=\frac14$, je:

- **a)** $1$
- **b)** $3$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0314` — Vlastní úloha ve stylu přijímaček VŠE (č. 314)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\sqrt3\cos x=\sin2x$, je:

- **a)** $2$
- **b)** $4$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0323` — Vlastní úloha ve stylu přijímaček VŠE (č. 323)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\sqrt2\sin^2x=\sin x$, je:

- **a)** $3$
- **b)** $2$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0350` — Vlastní úloha ve stylu přijímaček VŠE (č. 350)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\operatorname{tg}^2x=3$, je:

- **a)** $2$
- **b)** $0$
- **c)** $1$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0354` — Vlastní úloha ve stylu přijímaček VŠE (č. 354)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\sin2x=\sin x$, je:

- **a)** $3$
- **b)** $0$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0367` — Vlastní úloha ve stylu přijímaček VŠE (č. 367)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\cos x+\sin2x=0$, je:

- **a)** $3$
- **b)** $2$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0373` — Vlastní úloha ve stylu přijímaček VŠE (č. 373)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\operatorname{tg}^2x=3$, je:

- **a)** $4$
- **b)** $0$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0383` — Vlastní úloha ve stylu přijímaček VŠE (č. 383)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\cos^2x=1+\sin x$, je:

- **a)** $1$
- **b)** $2$
- **c)** $3$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0395` — Vlastní úloha ve stylu přijímaček VŠE (č. 395)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\cos x+\sin2x=0$, je:

- **a)** $1$
- **b)** $4$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0417` — Vlastní úloha ve stylu přijímaček VŠE (č. 417)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $2\cos^2x=\cos x$, je:

- **a)** $4$
- **b)** $0$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0420` — Vlastní úloha ve stylu přijímaček VŠE (č. 420)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\cos x+\sin2x=0$, je:

- **a)** $2$
- **b)** $3$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0423` — Vlastní úloha ve stylu přijímaček VŠE (č. 423)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešte rovnici $\sin2x=\cos x$ v intervalu $\langle0;2\pi)$.

<details><summary>Ответ и решение</summary>

$x\in\left\{\frac\pi6;\frac\pi2;\frac{5\pi}6;\frac{3\pi}2\right\}$. $\cos x(2\sin x-1)=0$.

</details>

### `vl-vse-0434` — Vlastní úloha ve stylu přijímaček VŠE (č. 434)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\sin x+\cos2x=0$, je:

- **a)** $3$
- **b)** $0$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0442` — Vlastní úloha ve stylu přijímaček VŠE (č. 442)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\operatorname{tg}x=2\sin x$, je:

- **a)** $2$
- **b)** $3$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0462` — Vlastní úloha ve stylu přijímaček VŠE (č. 462)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sin2x=\sin x$, je:

- **a)** $2$
- **b)** $0$
- **c)** $3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0494` — Vlastní úloha ve stylu přijímaček VŠE (č. 494)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $2\cos^2x+3\cos x+1=0$, je:

- **a)** $4$
- **b)** $0$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0495` — Vlastní úloha ve stylu přijímaček VŠE (č. 495)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\cos2x+\sin x=1$, je:

- **a)** $1$
- **b)** $0$
- **c)** $2$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0496` — Vlastní úloha ve stylu přijímaček VŠE (č. 496)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $2\cos^2x+3\cos x+1=0$, je:

- **a)** $3$
- **b)** $1$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0515` — Vlastní úloha ve stylu přijímaček VŠE (č. 515)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\cos^2x=1+\sin x$, je:

- **a)** $3$
- **b)** $1$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $2$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0531` — Vlastní úloha ve stylu přijímaček VŠE (č. 531)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\cos2x=\cos x$, je:

- **a)** $4$
- **b)** $1$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0536` — Vlastní úloha ve stylu přijímaček VŠE (č. 536)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\sin^2x-\cos^2x=\frac12$, je:

- **a)** $0$
- **b)** $2$
- **c)** $1$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0545` — Vlastní úloha ve stylu přijímaček VŠE (č. 545)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na intervalu $(0;2\pi)$ řešte nerovnici $\sin x>\cos x$.

<details><summary>Ответ и решение</summary>

$x\in\left(\frac\pi4;\frac{5\pi}4\right)$. $\sin x-\cos x=\sqrt2\sin\left(x-\frac\pi4\right)>0$.

</details>

### `vl-vse-0547` — Vlastní úloha ve stylu přijímaček VŠE (č. 547)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\cos2x=\cos x$, je:

- **a)** $3$
- **b)** $1$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0577` — Vlastní úloha ve stylu přijímaček VŠE (č. 577)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech reálných řešení rovnice $2\sin^2x=\sin x$ v intervalu $\langle0;2\pi\rangle$ je roven číslu:

- **a)** $2$
- **b)** $3$
- **c)** $4$
- **d)** $5$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $5$. $\sin x=0$: $0,\pi,2\pi$; $\sin x=\frac12$: $\frac\pi6,\frac{5\pi}6$.

</details>

### `vl-vse-0581` — Vlastní úloha ve stylu přijímaček VŠE (č. 581)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\sqrt2\sin^2x=\sin x$, je:

- **a)** $2$
- **b)** $3$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0614` — Vlastní úloha ve stylu přijímaček VŠE (č. 614)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\sqrt2\sin^2x=\sin x$, je:

- **a)** $1$
- **b)** $3$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0616` — Vlastní úloha ve stylu přijímaček VŠE (č. 616)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\sin^2x-\cos^2x=\frac12$, je:

- **a)** $1$
- **b)** $4$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0661` — Vlastní úloha ve stylu přijímaček VŠE (č. 661)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\cos2x=\cos x$, je:

- **a)** $0$
- **b)** $2$
- **c)** $1$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0700` — Vlastní úloha ve stylu přijímaček VŠE (č. 700)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\sin2x=\sin x$, je:

- **a)** $2$
- **b)** $1$
- **c)** $4$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0721` — Vlastní úloha ve stylu přijímaček VŠE (č. 721)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\operatorname{tg}x=2\sin x$, je:

- **a)** $1$
- **b)** $4$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0759` — Vlastní úloha ve stylu přijímaček VŠE (č. 759)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $2\cos^2x+3\cos x+1=0$, je:

- **a)** $2$
- **b)** $3$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0775` — Vlastní úloha ve stylu přijímaček VŠE (č. 775)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $2\sin^2x=3\cos x$.

<details><summary>Ответ и решение</summary>

$x=\pm\frac\pi3+2k\pi$ ($k\in\mathbb Z$). $2-2\cos^2x=3\cos x$, $(2\cos x-1)(\cos x+2)=0$.

</details>

### `vl-vse-0787` — Vlastní úloha ve stylu přijímaček VŠE (č. 787)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\cos^2x=1+\sin x$, je:

- **a)** $0$
- **b)** $2$
- **c)** $1$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0792` — Vlastní úloha ve stylu přijímaček VŠE (č. 792)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\sin x\cos x=\frac14$, je:

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0802` — Vlastní úloha ve stylu přijímaček VŠE (č. 802)

*Темы:* 15. Goniometrické rovnice a nerovnice, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na intervalu $(0;2\pi)$ řešte nerovnici $2\cos x<\sqrt3$.

<details><summary>Ответ и решение</summary>

$x\in\left(\frac\pi6;\frac{11\pi}6\right)$. $\cos x<\frac{\sqrt3}2$ mimo okolí nuly.

</details>

### `vl-vse-0807` — Vlastní úloha ve stylu přijímaček VŠE (č. 807)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\sin x+\cos2x=0$, je:

- **a)** $0$
- **b)** $2$
- **c)** $3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0864` — Vlastní úloha ve stylu přijímaček VŠE (č. 864)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\sin2x=\sin x$, je:

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0876` — Vlastní úloha ve stylu přijímaček VŠE (č. 876)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\sqrt2\sin^2x=\sin x$, je:

- **a)** $2$
- **b)** $1$
- **c)** $6$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $6$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0882` — Vlastní úloha ve stylu přijímaček VŠE (č. 882)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\sqrt3\cos x=\sin2x$, je:

- **a)** $7$
- **b)** $0$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $7$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0883` — Vlastní úloha ve stylu přijímaček VŠE (č. 883)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\cos2x+\sin x=1$, je:

- **a)** $3$
- **b)** $0$
- **c)** $2$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0887` — Vlastní úloha ve stylu přijímaček VŠE (č. 887)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\cos x+\sin2x=0$, je:

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0918` — Vlastní úloha ve stylu přijímaček VŠE (č. 918)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $2\sin^2x-\sin x=1$, je:

- **a)** $4$
- **b)** $1$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0950` — Vlastní úloha ve stylu přijímaček VŠE (č. 950)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\cos2x+\sin x=1$, je:

- **a)** $2$
- **b)** $1$
- **c)** $3$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0955` — Vlastní úloha ve stylu přijímaček VŠE (č. 955)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\cos2x=\cos x$, je:

- **a)** $0$
- **b)** $3$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0966` — Vlastní úloha ve stylu přijímaček VŠE (č. 966)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $2\cos^2x=\cos x$, je:

- **a)** $0$
- **b)** $2$
- **c)** $1$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-0991` — Vlastní úloha ve stylu přijímaček VŠE (č. 991)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $2\sin^2x-\sin x=1$, je:

- **a)** $1$
- **b)** $3$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1004` — Vlastní úloha ve stylu přijímaček VŠE (č. 1004)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\operatorname{tg}x=2\sin x$, je:

- **a)** $2$
- **b)** $1$
- **c)** $4$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1038` — Vlastní úloha ve stylu přijímaček VŠE (č. 1038)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $2\cos^2x=\cos x$, je:

- **a)** $2$
- **b)** $0$
- **c)** $6$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $6$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1046` — Vlastní úloha ve stylu přijímaček VŠE (č. 1046)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\operatorname{tg}^2x=3$, je:

- **a)** $4$
- **b)** $2$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1055` — Vlastní úloha ve stylu přijímaček VŠE (č. 1055)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $2\sin^2x-\sin x=1$, je:

- **a)** $3$
- **b)** $0$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1079` — Vlastní úloha ve stylu přijímaček VŠE (č. 1079)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;\pi)$, pro která platí $\cos2x+\sin x=1$, je:

- **a)** $1$
- **b)** $0$
- **c)** $2$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $2$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1125` — Vlastní úloha ve stylu přijímaček VŠE (č. 1125)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\operatorname{tg}^2x=3$, je:

- **a)** $1$
- **b)** $0$
- **c)** $4$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1136` — Vlastní úloha ve stylu přijímaček VŠE (č. 1136)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $2\sin^2x-\sin x=1$, je:

- **a)** $1$
- **b)** $3$
- **c)** $2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1144` — Vlastní úloha ve stylu přijímaček VŠE (č. 1144)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\sin x\cos x=\frac14$, je:

- **a)** $3$
- **b)** $1$
- **c)** $4$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1146` — Vlastní úloha ve stylu přijímaček VŠE (č. 1146)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;2 \pi)$, pro která platí $\cos2x=\cos x$, je:

- **a)** $2$
- **b)** $0$
- **c)** $3$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1148` — Vlastní úloha ve stylu přijímaček VŠE (č. 1148)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \pi;\pi)$, pro která platí $\sqrt2\sin^2x=\sin x$, je:

- **a)** $0$
- **b)** $2$
- **c)** $1$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $3$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1165` — Vlastní úloha ve stylu přijímaček VŠE (č. 1165)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\sin2x=\sin x$, je:

- **a)** $0$
- **b)** $2$
- **c)** $1$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1175` — Vlastní úloha ve stylu přijímaček VŠE (č. 1175)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\operatorname{tg}^2x=3$, je:

- **a)** $0$
- **b)** $2$
- **c)** $6$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $6$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1215` — Vlastní úloha ve stylu přijímaček VŠE (č. 1215)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\sqrt2\sin^2x=\sin x$, je:

- **a)** $1$
- **b)** $0$
- **c)** $3$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1223` — Vlastní úloha ve stylu přijímaček VŠE (č. 1223)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\sin x+\cos2x=0$, je:

- **a)** $0$
- **b)** $1$
- **c)** $4$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1224` — Vlastní úloha ve stylu přijímaček VŠE (č. 1224)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(\pi;2 \pi)$, pro která platí $\sqrt3\cos x=\sin2x$, je:

- **a)** $3$
- **b)** $1$
- **c)** $0$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1231` — Vlastní úloha ve stylu přijímaček VŠE (č. 1231)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(- \dfrac{\pi}{2};\dfrac{3 \pi}{2})$, pro která platí $\sin x\cos x=\frac14$, je:

- **a)** $1$
- **b)** $2$
- **c)** $4$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $4$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-vse-1249` — Vlastní úloha ve stylu přijímaček VŠE (č. 1249)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Počet všech $x\in(0;3 \pi)$, pro která platí $\cos2x+\sin x=1$, je:

- **a)** $2$
- **b)** $6$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $6$. Rovnici upravíme na součin (nebo kvadratickou rovnici pro jednu funkci) a kořeny spočítáme na daném intervalu.

</details>

### `vl-obec-017` — Vlastní úloha ve stylu přijímacích testů (č. 17)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik je $|z|$, jestliže $z=\dfrac{(3+4i)^2}{1-i}$?

- **a)** $\dfrac{25}{\sqrt2}$
- **b)** $25\sqrt2$
- **c)** $\dfrac52$
- **d)** $5\sqrt2$
- **e)** $25$

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{25}{\sqrt2}$. $\frac{|3+4i|^2}{|1-i|}=\frac{25}{\sqrt2}$.

</details>

### `vl-vse-0048` — Vlastní úloha ve stylu přijímaček VŠE (č. 48)

*Темы:* 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Absolutní hodnota komplexního čísla $z=(2+3i)(3-i)$ je reálné číslo, které je prvkem intervalu:

- **a)** $\langle0;4)$
- **b)** $\langle4;8)$
- **c)** $\langle8;12)$
- **d)** $\langle12;16)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle8;12)$. $|z|=|2+3i|\cdot|3-i|=\sqrt{13}\cdot\sqrt{10}=\sqrt{130}\approx11{,}4$.

</details>

### `vl-vse-0095` — Vlastní úloha ve stylu přijímaček VŠE (č. 95)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=4 + 4 i$, je:

- **a)** $x^2-8x-32=0$
- **b)** $x^2+8x+32=0$
- **c)** $x^2+8x-32=0$
- **d)** $x^2-8x+32=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $x^2-8x+32=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0106` — Vlastní úloha ve stylu přijímaček VŠE (č. 106)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=-1 + 2 i$. Součet $p+q$ je:

- **a)** $10$
- **b)** $3$
- **c)** $7$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $7$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=2$, $q=x_1x_2=5$.

</details>

### `vl-vse-0144` — Vlastní úloha ve stylu přijímaček VŠE (č. 144)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=6 + \sqrt{3} i$, je:

- **a)** $x^2+12x-39=0$
- **b)** $x^2-12x-39=0$
- **c)** $x^2+12x+39=0$
- **d)** $x^2-12x+39=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $x^2-12x+39=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0164` — Vlastní úloha ve stylu přijímaček VŠE (č. 164)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=1 + 4 i$, je:

- **a)** $x^2+2x+17=0$
- **b)** $x^2-2x+17=0$
- **c)** $x^2+2x-17=0$
- **d)** $x^2-2x-17=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x^2-2x+17=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0174` — Vlastní úloha ve stylu přijímaček VŠE (č. 174)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=5 + 3 i$. Součet $p+q$ je:

- **a)** $24$
- **b)** $45$
- **c)** $44$
- **d)** $-340$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $24$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=-10$, $q=x_1x_2=34$.

</details>

### `vl-vse-0181` — Vlastní úloha ve stylu přijímaček VŠE (č. 181)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=-1 + i$. Součet $p+q$ je:

- **a)** $4$
- **b)** $2$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $4$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=2$, $q=x_1x_2=2$.

</details>

### `vl-vse-0206` — Vlastní úloha ve stylu přijímaček VŠE (č. 206)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=-1 + 2 i$, je:

- **a)** $x^2-2x-5=0$
- **b)** $x^2+2x-5=0$
- **c)** $x^2-2x+5=0$
- **d)** $x^2+2x+5=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $x^2+2x+5=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0221` — Vlastní úloha ve stylu přijímaček VŠE (č. 221)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=-1 + \sqrt{3} i$. Součet $p+q$ je:

- **a)** $6$
- **b)** $3$
- **c)** $2$
- **d)** $8$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $6$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=2$, $q=x_1x_2=4$.

</details>

### `vl-vse-0222` — Vlastní úloha ve stylu přijímaček VŠE (č. 222)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=1 + 2 i$. Součet $p+q$ je:

- **a)** $-10$
- **b)** $7$
- **c)** $3$
- **d)** $8$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $3$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=-2$, $q=x_1x_2=5$.

</details>

### `vl-vse-0227` — Vlastní úloha ve stylu přijímaček VŠE (č. 227)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=4 + \sqrt{2} i$. Součet $p+q$ je:

- **a)** $27$
- **b)** $10$
- **c)** $26$
- **d)** $-144$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $10$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=-8$, $q=x_1x_2=18$.

</details>

### `vl-vse-0256` — Vlastní úloha ve stylu přijímaček VŠE (č. 256)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=-2 + \sqrt{2} i$, je:

- **a)** $x^2+4x+6=0$
- **b)** $x^2+4x-6=0$
- **c)** $x^2-4x-6=0$
- **d)** $x^2-4x+6=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x^2+4x+6=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0258` — Vlastní úloha ve stylu přijímaček VŠE (č. 258)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=1 + 2 i$, je:

- **a)** $x^2+2x-5=0$
- **b)** $x^2+2x+5=0$
- **c)** $x^2-2x-5=0$
- **d)** $x^2-2x+6=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0264` — Vlastní úloha ve stylu přijímaček VŠE (č. 264)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=-4 + i$, je:

- **a)** $x^2-8x-17=0$
- **b)** $x^2+8x-17=0$
- **c)** $x^2+8x+17=0$
- **d)** $x^2-8x+17=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x^2+8x+17=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0302` — Vlastní úloha ve stylu přijímaček VŠE (č. 302)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=-5 + i$, je:

- **a)** $x^2+10x+26=0$
- **b)** $x^2+10x-26=0$
- **c)** $x^2-10x+26=0$
- **d)** $x^2-10x-26=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x^2+10x+26=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0317` — Vlastní úloha ve stylu přijímaček VŠE (č. 317)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=-5 + 3 i$. Součet $p+q$ je:

- **a)** $24$
- **b)** $44$
- **c)** $340$
- **d)** $25$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $44$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=10$, $q=x_1x_2=34$.

</details>

### `vl-vse-0410` — Vlastní úloha ve stylu přijímaček VŠE (č. 410)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=3 + \sqrt{2} i$, je:

- **a)** $x^2+6x+11=0$
- **b)** $x^2-6x+11=0$
- **c)** $x^2-6x-11=0$
- **d)** $x^2+6x-11=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x^2-6x+11=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0413` — Vlastní úloha ve stylu přijímaček VŠE (č. 413)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=-4 + \sqrt{3} i$. Součet $p+q$ je:

- **a)** $11$
- **b)** $19$
- **c)** $152$
- **d)** $12$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=8$, $q=x_1x_2=19$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0416` — Vlastní úloha ve stylu přijímaček VŠE (č. 416)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=5 + \sqrt{2} i$, je:

- **a)** $x^2+10x-27=0$
- **b)** $x^2-10x-27=0$
- **c)** $x^2-10x+27=0$
- **d)** $x^2+10x+27=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x^2-10x+27=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0535` — Vlastní úloha ve stylu přijímaček VŠE (č. 535)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=-4 + 4 i$. Součet $p+q$ je:

- **a)** $25$
- **b)** $256$
- **c)** $24$
- **d)** $32$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=8$, $q=x_1x_2=32$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0559` — Vlastní úloha ve stylu přijímaček VŠE (č. 559)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=2 + i$, je:

- **a)** $x^2-4x+5=0$
- **b)** $x^2-4x-5=0$
- **c)** $x^2+4x+5=0$
- **d)** $x^2+4x-5=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x^2-4x+5=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0573` — Vlastní úloha ve stylu přijímaček VŠE (č. 573)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=6 + 2 i$. Součet $p+q$ je:

- **a)** $53$
- **b)** $-480$
- **c)** $52$
- **d)** $28$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $28$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=-12$, $q=x_1x_2=40$.

</details>

### `vl-vse-0583` — Vlastní úloha ve stylu přijímaček VŠE (č. 583)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=-2 + 4 i$. Součet $p+q$ je:

- **a)** $16$
- **b)** $24$
- **c)** $80$
- **d)** $17$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $24$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=4$, $q=x_1x_2=20$.

</details>

### `vl-vse-0601` — Vlastní úloha ve stylu přijímaček VŠE (č. 601)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=3 + 2 i$, je:

- **a)** $x^2+6x-13=0$
- **b)** $x^2-6x+13=0$
- **c)** $x^2-6x-13=0$
- **d)** $x^2+6x+13=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x^2-6x+13=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0622` — Vlastní úloha ve stylu přijímaček VŠE (č. 622)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=-5 + 2 i$. Součet $p+q$ je:

- **a)** $39$
- **b)** $20$
- **c)** $290$
- **d)** $19$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $39$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=10$, $q=x_1x_2=29$.

</details>

### `vl-vse-0668` — Vlastní úloha ve stylu přijímaček VŠE (č. 668)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=2 + \sqrt{2} i$, je:

- **a)** $x^2+4x+6=0$
- **b)** $x^2+4x-6=0$
- **c)** $x^2-4x+6=0$
- **d)** $x^2-4x-6=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x^2-4x+6=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0678` — Vlastní úloha ve stylu přijímaček VŠE (č. 678)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=-3 + 2 i$, je:

- **a)** $x^2-6x+13=0$
- **b)** $x^2+6x-13=0$
- **c)** $x^2+6x+13=0$
- **d)** $x^2-6x-13=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x^2+6x+13=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0694` — Vlastní úloha ve stylu přijímaček VŠE (č. 694)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=1 + \sqrt{2} i$, je:

- **a)** $x^2+2x+3=0$
- **b)** $x^2+2x-3=0$
- **c)** $x^2-2x+3=0$
- **d)** $x^2-2x-3=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x^2-2x+3=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0732` — Vlastní úloha ve stylu přijímaček VŠE (č. 732)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=5 + i$. Součet $p+q$ je:

- **a)** $-260$
- **b)** $37$
- **c)** $36$
- **d)** $26$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=-10$, $q=x_1x_2=26$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0781` — Vlastní úloha ve stylu přijímaček VŠE (č. 781)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=2 + i$. Součet $p+q$ je:

- **a)** $-20$
- **b)** $1$
- **c)** $9$
- **d)** $10$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=-4$, $q=x_1x_2=5$.

</details>

### `vl-vse-0861` — Vlastní úloha ve stylu přijímaček VŠE (č. 861)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=1 + \sqrt{3} i$, je:

- **a)** $x^2-2x+4=0$
- **b)** $x^2+2x+4=0$
- **c)** $x^2+2x-4=0$
- **d)** $x^2-2x-4=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x^2-2x+4=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0881` — Vlastní úloha ve stylu přijímaček VŠE (č. 881)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=5 + 4 i$, je:

- **a)** $x^2-10x-41=0$
- **b)** $x^2-10x+41=0$
- **c)** $x^2+10x-41=0$
- **d)** $x^2+10x+41=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x^2-10x+41=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0919` — Vlastní úloha ve stylu přijímaček VŠE (č. 919)

*Темы:* 16. Komplexní čísla, 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zapište v goniometrickém tvaru číslo $z=\dfrac{2}{1-i}$ a vypočtěte $z^6$.

<details><summary>Ответ и решение</summary>

$z=\sqrt2\left(\cos\frac\pi4+i\sin\frac\pi4\right)$; $z^6=-8i$. $z=1+i$; $z^6=8\left(\cos\frac{3\pi}2+i\sin\frac{3\pi}2\right)$.

</details>

### `vl-vse-0971` — Vlastní úloha ve stylu přijímaček VŠE (č. 971)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=1 + 3 i$. Součet $p+q$ je:

- **a)** $-20$
- **b)** $12$
- **c)** $13$
- **d)** $8$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $8$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=-2$, $q=x_1x_2=10$.

</details>

### `vl-vse-0995` — Vlastní úloha ve stylu přijímaček VŠE (č. 995)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=-2 + i$, je:

- **a)** $x^2+4x-5=0$
- **b)** $x^2+4x+5=0$
- **c)** $x^2-4x+5=0$
- **d)** $x^2-4x-5=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x^2+4x+5=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-0998` — Vlastní úloha ve stylu přijímaček VŠE (č. 998)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=2 + 2 i$. Součet $p+q$ je:

- **a)** $4$
- **b)** $13$
- **c)** $12$
- **d)** $-32$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $4$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=-4$, $q=x_1x_2=8$.

</details>

### `vl-vse-1095` — Vlastní úloha ve stylu přijímaček VŠE (č. 1095)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=1 + \sqrt{2} i$. Součet $p+q$ je:

- **a)** $5$
- **b)** $-6$
- **c)** $1$
- **d)** $6$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $1$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=-2$, $q=x_1x_2=3$.

</details>

### `vl-vse-1097` — Vlastní úloha ve stylu přijímaček VŠE (č. 1097)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=1 + i$. Součet $p+q$ je:

- **a)** $5$
- **b)** $0$
- **c)** $4$
- **d)** $-4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=-2$, $q=x_1x_2=2$.

</details>

### `vl-vse-1142` — Vlastní úloha ve stylu přijímaček VŠE (č. 1142)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=-3 + 4 i$. Součet $p+q$ je:

- **a)** $150$
- **b)** $19$
- **c)** $20$
- **d)** $31$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $31$. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=6$, $q=x_1x_2=25$.

</details>

### `vl-vse-1173` — Vlastní úloha ve stylu přijímaček VŠE (č. 1173)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice s reálnými koeficienty, jejímž jedním kořenem je $z_1=2 + 2 i$, je:

- **a)** $x^2-4x+8=0$
- **b)** $x^2+4x-8=0$
- **c)** $x^2-4x-8=0$
- **d)** $x^2+4x+8=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x^2-4x+8=0$. Kořeny jsou komplexně sdružené: součet $2\operatorname{Re}z_1$, součin $|z_1|^2$.

</details>

### `vl-vse-1234` — Vlastní úloha ve stylu přijímaček VŠE (č. 1234)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kvadratická rovnice $x^2+px+q=0$ s reálnými $p$, $q$ má kořen $x_1=-2 + \sqrt{2} i$. Součet $p+q$ je:

- **a)** $2$
- **b)** $3$
- **c)** $6$
- **d)** $24$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Druhý kořen je komplexně sdružený: $p=-(x_1+x_2)=4$, $q=x_1x_2=6$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0007` — Vlastní úloha ve stylu přijímaček VŠE (č. 7)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt3}2+\dfrac12i\right)^{23}$ je rovna číslu:

- **a)** $-1$
- **b)** $1$
- **c)** $\dfrac{\sqrt{3}}{2}$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{\sqrt{3}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{6}$; podle Moivreovy věty má mocnina argument $23\varphi$.

</details>

### `vl-vse-0047` — Vlastní úloha ve stylu přijímaček VŠE (č. 47)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{14}$ je rovna číslu:

- **a)** $\dfrac{1}{2}$
- **b)** $0$
- **c)** $-1$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $14\varphi$.

</details>

### `vl-vse-0049` — Vlastní úloha ve stylu přijímaček VŠE (č. 49)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{-4 - 2 i}{3 - i}$ je:

- **a)** $2 \sqrt{2}\left(\cos\dfrac{5 \pi}{4}+i\sin\dfrac{5 \pi}{4}\right)$
- **b)** $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **c)** $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **d)** $\sqrt{2}\left(\cos\dfrac{5 \pi}{4}+i\sin\dfrac{5 \pi}{4}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt{2}\left(\cos\dfrac{5 \pi}{4}+i\sin\dfrac{5 \pi}{4}\right)$. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument.

</details>

### `vl-obec-050` — Vlastní úloha ve stylu přijímacích testů (č. 50)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{16}$ je rovna číslu:

- **a)** $1$
- **b)** $0$
- **c)** $\dfrac{1}{2}$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $0$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $16\varphi$.

</details>

### `vl-vse-0054` — Vlastní úloha ve stylu přijímaček VŠE (č. 54)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{32}$ je rovna číslu:

- **a)** $-1$
- **b)** $\dfrac{1}{2}$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $32\varphi$.

</details>

### `vl-vse-0067` — Vlastní úloha ve stylu přijímaček VŠE (č. 67)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{37}$ je rovna číslu:

- **a)** $-1$
- **b)** $1$
- **c)** $\dfrac{1}{2}$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{1}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $37\varphi$.

</details>

### `vl-vse-0075` — Vlastní úloha ve stylu přijímaček VŠE (č. 75)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{15}$ je rovna číslu:

- **a)** $0$
- **b)** $\dfrac{1}{2}$
- **c)** $-1$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $0$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $15\varphi$.

</details>

### `vl-vse-0076` — Vlastní úloha ve stylu přijímaček VŠE (č. 76)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{10}$ je rovna číslu:

- **a)** $\dfrac{1}{2}$
- **b)** $0$
- **c)** $-1$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $1$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $10\varphi$.

</details>

### `vl-vse-0108` — Vlastní úloha ve stylu přijímaček VŠE (č. 108)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{28}$ je rovna číslu:

- **a)** $1$
- **b)** $- \dfrac{\sqrt{3}}{2}$
- **c)** $0$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $- \dfrac{\sqrt{3}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $28\varphi$.

</details>

### `vl-vse-0154` — Vlastní úloha ve stylu přijímaček VŠE (č. 154)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{25}$ je rovna číslu:

- **a)** $-1$
- **b)** $\dfrac{\sqrt{3}}{2}$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{\sqrt{3}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $25\varphi$.

</details>

### `vl-vse-0179` — Vlastní úloha ve stylu přijímaček VŠE (č. 179)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{22}$ je rovna číslu:

- **a)** $0$
- **b)** $\dfrac{1}{2}$
- **c)** $-1$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $0$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $22\varphi$.

</details>

### `vl-vse-0212` — Vlastní úloha ve stylu přijímaček VŠE (č. 212)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{20}$ je rovna číslu:

- **a)** $-1$
- **b)** $0$
- **c)** $\dfrac{1}{2}$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-1$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $20\varphi$.

</details>

### `vl-vse-0220` — Vlastní úloha ve stylu přijímaček VŠE (č. 220)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{13}$ je rovna číslu:

- **a)** $-1$
- **b)** $0$
- **c)** $\dfrac{1}{2}$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{1}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $13\varphi$.

</details>

### `vl-vse-0231` — Vlastní úloha ve stylu přijímaček VŠE (č. 231)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{32}$ je rovna číslu:

- **a)** $-1$
- **b)** $0$
- **c)** $\dfrac{\sqrt{3}}{2}$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{\sqrt{3}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $32\varphi$.

</details>

### `vl-vse-0252` — Vlastní úloha ve stylu přijímaček VŠE (č. 252)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{13}$ je rovna číslu:

- **a)** $0$
- **b)** $1$
- **c)** $-1$
- **d)** $- \dfrac{\sqrt{2}}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $- \dfrac{\sqrt{2}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $13\varphi$.

</details>

### `vl-vse-0282` — Vlastní úloha ve stylu přijímaček VŠE (č. 282)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac{\sqrt3}2+\dfrac12i\right)^{12}$ je rovna číslu:

- **a)** $\dfrac{1}{2}$
- **b)** $1$
- **c)** $-1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{6}$; podle Moivreovy věty má mocnina argument $12\varphi$.

</details>

### `vl-vse-0284` — Vlastní úloha ve stylu přijímaček VŠE (č. 284)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{-2 - 4 i}{1 - 3 i}$ je:

- **a)** $2 \sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **b)** $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **c)** $\sqrt{2}\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)$
- **d)** $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument.

</details>

### `vl-vse-0288` — Vlastní úloha ve stylu přijímaček VŠE (č. 288)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac{\sqrt3}2+\dfrac12i\right)^{28}$ je rovna číslu:

- **a)** $\dfrac{\sqrt{3}}{2}$
- **b)** $-1$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{\sqrt{3}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{6}$; podle Moivreovy věty má mocnina argument $28\varphi$.

</details>

### `vl-vse-0303` — Vlastní úloha ve stylu přijímaček VŠE (č. 303)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{39}$ je rovna číslu:

- **a)** $- \dfrac{\sqrt{2}}{2}$
- **b)** $-1$
- **c)** $1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $- \dfrac{\sqrt{2}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $39\varphi$.

</details>

### `vl-vse-0309` — Vlastní úloha ve stylu přijímaček VŠE (č. 309)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{\sqrt{3} + 3 - 3 \sqrt{3} i + i}{1 - 3 i}$ je:

- **a)** $4\left(\cos\dfrac{\pi}{6}+i\sin\dfrac{\pi}{6}\right)$
- **b)** $2\left(\cos\dfrac{\pi}{6}+i\sin\dfrac{\pi}{6}\right)$
- **c)** $2\left(\cos\dfrac{2 \pi}{3}+i\sin\dfrac{2 \pi}{3}\right)$
- **d)** $2\left(\cos\dfrac{11 \pi}{6}+i\sin\dfrac{11 \pi}{6}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2\left(\cos\dfrac{\pi}{6}+i\sin\dfrac{\pi}{6}\right)$. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument.

</details>

### `vl-vse-0321` — Vlastní úloha ve stylu přijímaček VŠE (č. 321)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{\sqrt{3} + 3 - i + 3 \sqrt{3} i}{3 - i}$ je:

- **a)** $2\left(\cos\dfrac{5 \pi}{3}+i\sin\dfrac{5 \pi}{3}\right)$
- **b)** $2\left(\cos\dfrac{5 \pi}{6}+i\sin\dfrac{5 \pi}{6}\right)$
- **c)** $2\left(\cos\dfrac{4 \pi}{3}+i\sin\dfrac{4 \pi}{3}\right)$
- **d)** $4\left(\cos\dfrac{\pi}{3}+i\sin\dfrac{\pi}{3}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0324` — Vlastní úloha ve stylu přijímaček VŠE (č. 324)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{31}$ je rovna číslu:

- **a)** $1$
- **b)** $0$
- **c)** $\dfrac{\sqrt{3}}{2}$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{\sqrt{3}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $31\varphi$.

</details>

### `vl-vse-0375` — Vlastní úloha ve stylu přijímaček VŠE (č. 375)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{36}$ je rovna číslu:

- **a)** $-1$
- **b)** $0$
- **c)** $1$
- **d)** $\dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-1$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $36\varphi$.

</details>

### `vl-vse-0385` — Vlastní úloha ve stylu přijímaček VŠE (č. 385)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{39}$ je rovna číslu:

- **a)** $1$
- **b)** $0$
- **c)** $-1$
- **d)** $\dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $-1$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $39\varphi$.

</details>

### `vl-vse-0389` — Vlastní úloha ve stylu přijímaček VŠE (č. 389)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt3}2+\dfrac12i\right)^{25}$ je rovna číslu:

- **a)** $0$
- **b)** $\dfrac{\sqrt{3}}{2}$
- **c)** $1$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{\sqrt{3}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{6}$; podle Moivreovy věty má mocnina argument $25\varphi$.

</details>

### `vl-vse-0455` — Vlastní úloha ve stylu přijímaček VŠE (č. 455)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac{\sqrt3}2+\dfrac12i\right)^{40}$ je rovna číslu:

- **a)** $0$
- **b)** $-1$
- **c)** $1$
- **d)** $\dfrac{\sqrt{3}}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\dfrac{\sqrt{3}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{6}$; podle Moivreovy věty má mocnina argument $40\varphi$.

</details>

### `vl-vse-0471` — Vlastní úloha ve stylu přijímaček VŠE (č. 471)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt3}2+\dfrac12i\right)^{11}$ je rovna číslu:

- **a)** $1$
- **b)** $\dfrac{1}{2}$
- **c)** $0$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{6}$; podle Moivreovy věty má mocnina argument $11\varphi$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0477` — Vlastní úloha ve stylu přijímaček VŠE (č. 477)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{2 + 4 i}{1 - 3 i}$ je:

- **a)** $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **b)** $\sqrt{2}\left(\cos\dfrac{5 \pi}{4}+i\sin\dfrac{5 \pi}{4}\right)$
- **c)** $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **d)** $2 \sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument.

</details>

### `vl-vse-0509` — Vlastní úloha ve stylu přijímaček VŠE (č. 509)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{-1 - 3 i}{2 + i}$ je:

- **a)** $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **b)** $\sqrt{2}\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)$
- **c)** $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **d)** $2 \sqrt{2}\left(\cos\dfrac{5 \pi}{4}+i\sin\dfrac{5 \pi}{4}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0525` — Vlastní úloha ve stylu přijímaček VŠE (č. 525)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{-3 + i}{2 + i}$ je:

- **a)** $2 \sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **b)** $\sqrt{2}\left(\cos\dfrac{5 \pi}{4}+i\sin\dfrac{5 \pi}{4}\right)$
- **c)** $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **d)** $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument.

</details>

### `vl-vse-0528` — Vlastní úloha ve stylu přijímaček VŠE (č. 528)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{40}$ je rovna číslu:

- **a)** $0$
- **b)** $\dfrac{1}{2}$
- **c)** $- \dfrac{1}{2}$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $40\varphi$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0543` — Vlastní úloha ve stylu přijímaček VŠE (č. 543)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{3 + i}{1 + 2 i}$ je:

- **a)** $2 \sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **b)** $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **c)** $\sqrt{2}\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)$
- **d)** $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument.

</details>

### `vl-vse-0589` — Vlastní úloha ve stylu přijímaček VŠE (č. 589)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{18}$ je rovna číslu:

- **a)** $0$
- **b)** $1$
- **c)** $-1$
- **d)** $\dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $18\varphi$.

</details>

### `vl-vse-0608` — Vlastní úloha ve stylu přijímaček VŠE (č. 608)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{7}$ je rovna číslu:

- **a)** $\dfrac{\sqrt{2}}{2}$
- **b)** $1$
- **c)** $-1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{\sqrt{2}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $7\varphi$.

</details>

### `vl-vse-0651` — Vlastní úloha ve stylu přijímaček VŠE (č. 651)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{1 + 2 \sqrt{3} - \sqrt{3} i + 2 i}{2 - i}$ je:

- **a)** $2\left(\cos\dfrac{7 \pi}{6}+i\sin\dfrac{7 \pi}{6}\right)$
- **b)** $2\left(\cos\dfrac{2 \pi}{3}+i\sin\dfrac{2 \pi}{3}\right)$
- **c)** $4\left(\cos\dfrac{\pi}{6}+i\sin\dfrac{\pi}{6}\right)$
- **d)** $2\left(\cos\dfrac{11 \pi}{6}+i\sin\dfrac{11 \pi}{6}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0779` — Vlastní úloha ve stylu přijímaček VŠE (č. 779)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{3 - i}{2 + i}$ je:

- **a)** $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **b)** $2 \sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **c)** $\sqrt{2}\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)$
- **d)** $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument.

</details>

### `vl-vse-0789` — Vlastní úloha ve stylu přijímaček VŠE (č. 789)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{4 - 2 i}{1 - 3 i}$ je:

- **a)** $2 \sqrt{2}\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)$
- **b)** $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **c)** $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **d)** $\sqrt{2}\left(\cos\dfrac{5 \pi}{4}+i\sin\dfrac{5 \pi}{4}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0799` — Vlastní úloha ve stylu přijímaček VŠE (č. 799)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac{\sqrt3}2+\dfrac12i\right)^{36}$ je rovna číslu:

- **a)** $1$
- **b)** $\dfrac{1}{2}$
- **c)** $-1$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $0$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{6}$; podle Moivreovy věty má mocnina argument $36\varphi$.

</details>

### `vl-vse-0832` — Vlastní úloha ve stylu přijímaček VŠE (č. 832)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{34}$ je rovna číslu:

- **a)** $1$
- **b)** $-1$
- **c)** $0$
- **d)** $\dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $34\varphi$.

</details>

### `vl-vse-0884` — Vlastní úloha ve stylu přijímaček VŠE (č. 884)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{35}$ je rovna číslu:

- **a)** $- \dfrac{\sqrt{3}}{2}$
- **b)** $-1$
- **c)** $0$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $- \dfrac{\sqrt{3}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $35\varphi$.

</details>

### `vl-vse-0900` — Vlastní úloha ve stylu přijímaček VŠE (č. 900)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{19}$ je rovna číslu:

- **a)** $\dfrac{1}{2}$
- **b)** $1$
- **c)** $0$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $19\varphi$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0929` — Vlastní úloha ve stylu přijímaček VŠE (č. 929)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{-1 + 2 \sqrt{3} + \sqrt{3} i + 2 i}{2 + i}$ je:

- **a)** $2\left(\cos\dfrac{\pi}{6}+i\sin\dfrac{\pi}{6}\right)$
- **b)** $2\left(\cos\dfrac{2 \pi}{3}+i\sin\dfrac{2 \pi}{3}\right)$
- **c)** $2\left(\cos\dfrac{11 \pi}{6}+i\sin\dfrac{11 \pi}{6}\right)$
- **d)** $4\left(\cos\dfrac{\pi}{6}+i\sin\dfrac{\pi}{6}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $2\left(\cos\dfrac{\pi}{6}+i\sin\dfrac{\pi}{6}\right)$. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument.

</details>

### `vl-vse-0933` — Vlastní úloha ve stylu přijímaček VŠE (č. 933)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar komplexního čísla $z=\dfrac{7+i}{3+4i}$ je:

- **a)** $\sqrt2\left(\cos\frac\pi4+i\sin\frac\pi4\right)$
- **b)** $\sqrt2\left(\cos\frac{3\pi}4+i\sin\frac{3\pi}4\right)$
- **c)** $2\left(\cos\frac{7\pi}4+i\sin\frac{7\pi}4\right)$
- **d)** $\sqrt2\left(\cos\frac{7\pi}4+i\sin\frac{7\pi}4\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt2\left(\cos\frac{7\pi}4+i\sin\frac{7\pi}4\right)$. $z=\frac{(7+i)(3-4i)}{25}=\frac{25-25i}{25}=1-i$; $|z|=\sqrt2$, argument $\frac{7\pi}4$.

</details>

### `vl-vse-0938` — Vlastní úloha ve stylu přijímaček VŠE (č. 938)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac{\sqrt3}2+\dfrac12i\right)^{19}$ je rovna číslu:

- **a)** $0$
- **b)** $-1$
- **c)** $1$
- **d)** $- \dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $- \dfrac{1}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{6}$; podle Moivreovy věty má mocnina argument $19\varphi$.

</details>

### `vl-vse-0959` — Vlastní úloha ve stylu přijímaček VŠE (č. 959)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{24}$ je rovna číslu:

- **a)** $0$
- **b)** $\dfrac{1}{2}$
- **c)** $-1$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $0$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $24\varphi$.

</details>

### `vl-vse-0977` — Vlastní úloha ve stylu přijímaček VŠE (č. 977)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{-1 + 3 i}{2 - i}$ je:

- **a)** $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **b)** $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **c)** $\sqrt{2}\left(\cos\dfrac{5 \pi}{4}+i\sin\dfrac{5 \pi}{4}\right)$
- **d)** $2 \sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument.

</details>

### `vl-vse-0980` — Vlastní úloha ve stylu přijímaček VŠE (č. 980)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{2 - 4 i}{3 - i}$ je:

- **a)** $\sqrt{2}\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)$
- **b)** $2 \sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **c)** $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **d)** $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument.

</details>

### `vl-vse-1049` — Vlastní úloha ve stylu přijímaček VŠE (č. 1049)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt3}2+\dfrac12i\right)^{18}$ je rovna číslu:

- **a)** $-1$
- **b)** $0$
- **c)** $\dfrac{1}{2}$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-1$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{6}$; podle Moivreovy věty má mocnina argument $18\varphi$.

</details>

### `vl-vse-1086` — Vlastní úloha ve stylu přijímaček VŠE (č. 1086)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{- 2 \sqrt{3} + 1 + \sqrt{3} i + 2 i}{1 + 2 i}$ je:

- **a)** $2\left(\cos\dfrac{5 \pi}{3}+i\sin\dfrac{5 \pi}{3}\right)$
- **b)** $2\left(\cos\dfrac{5 \pi}{6}+i\sin\dfrac{5 \pi}{6}\right)$
- **c)** $2\left(\cos\dfrac{\pi}{3}+i\sin\dfrac{\pi}{3}\right)$
- **d)** $4\left(\cos\dfrac{\pi}{3}+i\sin\dfrac{\pi}{3}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $2\left(\cos\dfrac{\pi}{3}+i\sin\dfrac{\pi}{3}\right)$. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument.

</details>

### `vl-vse-1101` — Vlastní úloha ve stylu přijímaček VŠE (č. 1101)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{-3 - i}{2 - i}$ je:

- **a)** $2 \sqrt{2}\left(\cos\dfrac{5 \pi}{4}+i\sin\dfrac{5 \pi}{4}\right)$
- **b)** $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **c)** $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **d)** $\sqrt{2}\left(\cos\dfrac{5 \pi}{4}+i\sin\dfrac{5 \pi}{4}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt{2}\left(\cos\dfrac{5 \pi}{4}+i\sin\dfrac{5 \pi}{4}\right)$. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument.

</details>

### `vl-vse-1141` — Vlastní úloha ve stylu přijímaček VŠE (č. 1141)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{23}$ je rovna číslu:

- **a)** $0$
- **b)** $\dfrac{\sqrt{2}}{2}$
- **c)** $-1$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{\sqrt{2}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $23\varphi$.

</details>

### `vl-vse-1159` — Vlastní úloha ve stylu přijímaček VŠE (č. 1159)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Goniometrický tvar čísla $z=\dfrac{4 + 2 i}{3 - i}$ je:

- **a)** $\sqrt{2}\left(\cos\dfrac{5 \pi}{4}+i\sin\dfrac{5 \pi}{4}\right)$
- **b)** $\sqrt{2}\left(\cos\dfrac{3 \pi}{4}+i\sin\dfrac{3 \pi}{4}\right)$
- **c)** $\sqrt{2}\left(\cos\dfrac{7 \pi}{4}+i\sin\dfrac{7 \pi}{4}\right)$
- **d)** $2 \sqrt{2}\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Po rozšíření komplexně sdruženým jmenovatelem dostaneme algebraický tvar, z něj absolutní hodnotu a argument. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1169` — Vlastní úloha ve stylu přijímaček VŠE (č. 1169)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{37}$ je rovna číslu:

- **a)** $1$
- **b)** $\dfrac{\sqrt{3}}{2}$
- **c)** $0$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\dfrac{\sqrt{3}}{2}$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $37\varphi$.

</details>

### `vl-vse-1209` — Vlastní úloha ve stylu přijímaček VŠE (č. 1209)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac{\sqrt3}2+\dfrac12i\right)^{9}$ je rovna číslu:

- **a)** $0$
- **b)** $-1$
- **c)** $1$
- **d)** $\dfrac{1}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $0$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{6}$; podle Moivreovy věty má mocnina argument $9\varphi$.

</details>

### `vl-vse-1225` — Vlastní úloha ve stylu přijímaček VŠE (č. 1225)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Reálná část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{12}$ je rovna číslu:

- **a)** $1$
- **b)** $-1$
- **c)** $\dfrac{1}{2}$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $1$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $12\varphi$.

</details>

### `vl-vse-1232` — Vlastní úloha ve stylu přijímaček VŠE (č. 1232)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac12+\dfrac{\sqrt3}2i\right)^{24}$ je rovna číslu:

- **a)** $\dfrac{1}{2}$
- **b)** $1$
- **c)** $0$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $0$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{3}$; podle Moivreovy věty má mocnina argument $24\varphi$.

</details>

### `vl-vse-1246` — Vlastní úloha ve stylu přijímaček VŠE (č. 1246)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Imaginární část čísla $\left(\dfrac{\sqrt2}2+\dfrac{\sqrt2}2i\right)^{22}$ je rovna číslu:

- **a)** $\dfrac{1}{2}$
- **b)** $0$
- **c)** $-1$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $-1$. Číslo je $\cos\varphi+i\sin\varphi$ s $\varphi=\dfrac{\pi}{4}$; podle Moivreovy věty má mocnina argument $22\varphi$.

</details>

### `vl-nsz-069` — [Vlastní úloha ve stylu NSZ Matematika (č. 69)](https://www.scio.cz/matematika)

*Темы:* 18. Posloupnosti · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Posloupnost $\left(n^2-n+2\right)_{n=1}^\infty$ je zadána rekurentně jako:

- **a)** $a_{n+1}=a_n+2n,\ a_1=2$
- **b)** $a_{n+1}=a_n+2n+2,\ a_1=2$
- **c)** $a_{n+1}=a_n+2n,\ a_1=1$
- **d)** $a_{n+1}=a_n+n^2,\ a_1=2$

<details><summary>Ответ и решение</summary>

**a** — $a_{n+1}=a_n+2n,\ a_1=2$. $a_1=2$ a $a_{n+1}-a_n=(n+1)^2-(n+1)-n^2+n=2n$.

</details>

### `vl-obec-002` — Vlastní úloha ve stylu přijímacích testů (č. 2)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti je $a_1=3$ a $d=5$. Kolik nejméně členů musíme sečíst, aby byl součet větší než 300?

<details><summary>Ответ и решение</summary>

$11$. $s_n=\frac{n(5n+1)}2$; $s_{10}=255$, $s_{11}=308$.

</details>

### `vl-obec-019` — Vlastní úloha ve stylu přijímacích testů (č. 19)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Součet všech trojciferných přirozených čísel dělitelných deseti je roven součinu:

- **a)** $45\cdot1090$
- **b)** $90\cdot1090$
- **c)** $45\cdot1100$
- **d)** $90\cdot1045$
- **e)** $50\cdot990$

<details><summary>Ответ и решение</summary>

**a** — $45\cdot1090$. Čísla $100,110,\dots,990$: 90 členů, součet $\frac{90(100+990)}2$.

</details>

### `vl-nsz-039` — [Vlastní úloha ve stylu NSZ Matematika (č. 39)](https://www.scio.cz/matematika)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Aritmetická posloupnost $(a_n)$ má diferenci 4 a $a_3=5$, aritmetická posloupnost $(b_n)$ má diferenci 2 a $b_5=40$. Pro které nejmenší $k$ platí $a_k>b_k$?

- **a)** $18$
- **b)** $19$
- **c)** $20$
- **d)** $21$

<details><summary>Ответ и решение</summary>

**b** — $19$. $a_k=4k-7$, $b_k=2k+30$; $4k-7>2k+30\iff k>18{,}5$.

</details>

### `vl-vse-0053` — Vlastní úloha ve stylu přijímaček VŠE (č. 53)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{2}+a_{5}=24$ a $a_{1}+a_{7}=26$. Určete $a_{6}$.

- **a)** $17$
- **b)** $19$
- **c)** $20$
- **d)** $15$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $17$. Soustava $2a_1+5d=24$, $2a_1+6d=26$ dává $a_1=7$, $d=2$.

</details>

### `vl-vse-0176` — Vlastní úloha ve stylu přijímaček VŠE (č. 176)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2+2x-8=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $-8$
- **b)** $0$
- **c)** $2$
- **d)** $-2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-2$. Kořeny $-4$ a $2$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-nsz-183` — [Vlastní úloha ve stylu NSZ Matematika (č. 183)](https://www.scio.cz/matematika)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti s nenulovou diferencí $d$ platí $a_3=-a_7$. Který člen posloupnosti se rovná diferenci?

- **a)** $a_1$
- **b)** $a_4$
- **c)** $a_5$
- **d)** $a_6$

<details><summary>Ответ и решение</summary>

**d** — $a_6$. $a_3+a_7=2a_5=0$, tedy $a_5=0$ a $a_6=a_5+d=d$.

</details>

### `vl-vse-0243` — Vlastní úloha ve stylu přijímaček VŠE (č. 243)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{2}+a_{5}=-19$ a $a_{1}+a_{7}=-20$. Určete $a_{7}$.

- **a)** $-7$
- **b)** $-13$
- **c)** $-14$
- **d)** $-12$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-13$. Soustava $2a_1+5d=-19$, $2a_1+6d=-20$ dává $a_1=-7$, $d=-1$.

</details>

### `vl-vse-0244` — Vlastní úloha ve stylu přijímaček VŠE (č. 244)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{3}+a_{5}=0$ a $a_{1}+a_{8}=1$. Určete $a_{6}$.

- **a)** $4$
- **b)** $3$
- **c)** $1$
- **d)** $2$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $2$. Soustava $2a_1+6d=0$, $2a_1+7d=1$ dává $a_1=-3$, $d=1$.

</details>

### `vl-vse-0248` — Vlastní úloha ve stylu přijímaček VŠE (č. 248)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2+15x+54=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $54$
- **b)** $-14$
- **c)** $-15$
- **d)** $15$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $-15$. Kořeny $-9$ a $-6$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-0254` — Vlastní úloha ve stylu přijímaček VŠE (č. 254)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{2}+a_{6}=22$ a $a_{1}+a_{5}=20$. Určete $a_{9}$.

- **a)** $17$
- **b)** $15$
- **c)** $18$
- **d)** $16$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $16$. Soustava $2a_1+6d=22$, $2a_1+4d=20$ dává $a_1=8$, $d=1$.

</details>

### `vl-vse-0260` — Vlastní úloha ve stylu přijímaček VŠE (č. 260)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2-4x-32=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $-32$
- **b)** $8$
- **c)** $-4$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $4$. Kořeny $-4$ a $8$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-0283` — Vlastní úloha ve stylu přijímaček VŠE (č. 283)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{2}+a_{7}=20$ a $a_{3}+a_{7}=22$. Určete $a_{7}$.

- **a)** $13$
- **b)** $15$
- **c)** $17$
- **d)** $18$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $15$. Soustava $2a_1+7d=20$, $2a_1+8d=22$ dává $a_1=3$, $d=2$.

</details>

### `vl-vse-0289` — Vlastní úloha ve stylu přijímaček VŠE (č. 289)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2-18x+45=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $45$
- **b)** $18$
- **c)** $-18$
- **d)** $22$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $18$. Kořeny $3$ a $15$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-0300` — Vlastní úloha ve stylu přijímaček VŠE (č. 300)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{2}+a_{7}=36$ a $a_{3}+a_{8}=44$. Určete $a_{7}$.

- **a)** $32$
- **b)** $33$
- **c)** $28$
- **d)** $24$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $28$. Soustava $2a_1+7d=36$, $2a_1+9d=44$ dává $a_1=4$, $d=4$.

</details>

### `vl-vse-0306` — Vlastní úloha ve stylu přijímaček VŠE (č. 306)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{2}+a_{8}=22$ a $a_{2}+a_{7}=18$. Určete $a_{8}$.

- **a)** $19$
- **b)** $23$
- **c)** $27$
- **d)** $28$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $23$. Soustava $2a_1+8d=22$, $2a_1+7d=18$ dává $a_1=-5$, $d=4$.

</details>

### `vl-vse-0310` — Vlastní úloha ve stylu přijímaček VŠE (č. 310)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2-9=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $-9$
- **b)** $4$
- **c)** $2$
- **d)** $6$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Kořeny $-3$ a $3$; vložená čísla mají stejný součet jako krajní členy. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0318` — Vlastní úloha ve stylu přijímaček VŠE (č. 318)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{1}+a_{4}=-13$ a $a_{1}+a_{3}=-12$. Určete $a_{9}$.

- **a)** $-14$
- **b)** $-5$
- **c)** $-12$
- **d)** $-13$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-13$. Soustava $2a_1+3d=-13$, $2a_1+2d=-12$ dává $a_1=-5$, $d=-1$.

</details>

### `vl-vse-0361` — Vlastní úloha ve stylu přijímaček VŠE (č. 361)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2-6x-27=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $-6$
- **b)** $6$
- **c)** $-27$
- **d)** $10$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $6$. Kořeny $-3$ a $9$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-0369` — Vlastní úloha ve stylu přijímaček VŠE (č. 369)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{1}+a_{8}=23$ a $a_{2}+a_{3}=19$. Určete $a_{5}$.

- **a)** $14$
- **b)** $13$
- **c)** $12$
- **d)** $11$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $12$. Soustava $2a_1+7d=23$, $2a_1+3d=19$ dává $a_1=8$, $d=1$.

</details>

### `vl-vse-0422` — Vlastní úloha ve stylu přijímaček VŠE (č. 422)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{1}+a_{3}=-10$ a $a_{2}+a_{6}=-18$. Určete $a_{6}$.

- **a)** $-15$
- **b)** $-13$
- **c)** $-14$
- **d)** $-11$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-13$. Soustava $2a_1+2d=-10$, $2a_1+6d=-18$ dává $a_1=-3$, $d=-2$.

</details>

### `vl-vse-0488` — Vlastní úloha ve stylu přijímaček VŠE (č. 488)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{6}+a_{7}=-15$ a $a_{1}+a_{3}=-6$. Určete $a_{11}$.

- **a)** $-12$
- **b)** $-13$
- **c)** $-2$
- **d)** $-11$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-12$. Soustava $2a_1+11d=-15$, $2a_1+2d=-6$ dává $a_1=-2$, $d=-1$.

</details>

### `vl-vse-0497` — Vlastní úloha ve stylu přijímaček VŠE (č. 497)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2-11x+10=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $14$
- **b)** $10$
- **c)** $11$
- **d)** $-11$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $11$. Kořeny $1$ a $10$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-0521` — Vlastní úloha ve stylu přijímaček VŠE (č. 521)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{2}+a_{8}=24$ a $a_{2}+a_{3}=14$. Určete $a_{9}$.

- **a)** $20$
- **b)** $23$
- **c)** $22$
- **d)** $18$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $20$. Soustava $2a_1+8d=24$, $2a_1+3d=14$ dává $a_1=4$, $d=2$.

</details>

### `vl-vse-0558` — Vlastní úloha ve stylu přijímaček VŠE (č. 558)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti je $a_3=7$ a $s_6=57$. Určete $a_1$ a $d$.

<details><summary>Ответ и решение</summary>

$a_1=-3$, $d=5$. $a_1+2d=7$ a $s_6=6a_1+15d=57$; odtud $3d=15$.

</details>

### `vl-vse-0592` — Vlastní úloha ve stylu přijímaček VŠE (č. 592)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2+3x-18=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $0$
- **b)** $-18$
- **c)** $-3$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $-3$. Kořeny $-6$ a $3$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-0630` — Vlastní úloha ve stylu přijímaček VŠE (č. 630)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{1}+a_{4}=-7$ a $a_{2}+a_{6}=-4$. Určete $a_{11}$.

- **a)** $6$
- **b)** $4$
- **c)** $5$
- **d)** $7$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $5$. Soustava $2a_1+3d=-7$, $2a_1+6d=-4$ dává $a_1=-5$, $d=1$.

</details>

### `vl-vse-0659` — Vlastní úloha ve stylu přijímaček VŠE (č. 659)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2-4x-5=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $6$
- **b)** $-5$
- **c)** $-4$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $4$. Kořeny $-1$ a $5$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-0666` — Vlastní úloha ve stylu přijímaček VŠE (č. 666)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2-15x+54=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $54$
- **b)** $-15$
- **c)** $16$
- **d)** $15$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $15$. Kořeny $6$ a $9$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-0681` — Vlastní úloha ve stylu přijímaček VŠE (č. 681)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2-14x+40=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $-14$
- **b)** $14$
- **c)** $40$
- **d)** $16$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $14$. Kořeny $4$ a $10$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-0790` — Vlastní úloha ve stylu přijímaček VŠE (č. 790)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{1}+a_{3}=10$ a $a_{4}+a_{5}=25$. Určete $a_{6}$.

- **a)** $21$
- **b)** $14$
- **c)** $20$
- **d)** $17$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $17$. Soustava $2a_1+2d=10$, $2a_1+7d=25$ dává $a_1=2$, $d=3$.

</details>

### `vl-vse-0816` — Vlastní úloha ve stylu přijímaček VŠE (č. 816)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{5}+a_{8}=10$ a $a_{1}+a_{5}=-4$. Určete $a_{12}$.

- **a)** $14$
- **b)** $18$
- **c)** $19$
- **d)** $16$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $16$. Soustava $2a_1+11d=10$, $2a_1+4d=-4$ dává $a_1=-6$, $d=2$.

</details>

### `vl-vse-0953` — Vlastní úloha ve stylu přijímaček VŠE (č. 953)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2-5x-14=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $8$
- **b)** $5$
- **c)** $-14$
- **d)** $-5$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $5$. Kořeny $-2$ a $7$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-0973` — Vlastní úloha ve stylu přijímaček VŠE (č. 973)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{2}+a_{5}=28$ a $a_{3}+a_{7}=34$. Určete $a_{9}$.

- **a)** $23$
- **b)** $25$
- **c)** $28$
- **d)** $27$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $25$. Soustava $2a_1+5d=28$, $2a_1+8d=34$ dává $a_1=9$, $d=2$.

</details>

### `vl-vse-1020` — Vlastní úloha ve stylu přijímaček VŠE (č. 1020)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2-13x+40=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $-13$
- **b)** $13$
- **c)** $40$
- **d)** $14$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $13$. Kořeny $5$ a $8$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-1037` — Vlastní úloha ve stylu přijímaček VŠE (č. 1037)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2+7x-8=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $7$
- **b)** $-4$
- **c)** $-8$
- **d)** $-7$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-7$. Kořeny $-8$ a $1$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-1065` — Vlastní úloha ve stylu přijímaček VŠE (č. 1065)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{2}+a_{6}=-16$ a $a_{4}+a_{7}=-22$. Určete $a_{10}$.

- **a)** $-18$
- **b)** $-21$
- **c)** $-22$
- **d)** $-20$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-20$. Soustava $2a_1+6d=-16$, $2a_1+9d=-22$ dává $a_1=-2$, $d=-2$.

</details>

### `vl-vse-1069` — Vlastní úloha ve stylu přijímaček VŠE (č. 1069)

*Темы:* 19. Aritmetická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_2+a_7=29$ a $a_3+a_5=26$. Určete $a_1$, diferenci a součet prvních deseti členů.

<details><summary>Ответ и решение</summary>

$a_1=4$, $d=3$, $s_{10}=175$. $2a_1+7d=29$, $2a_1+6d=26$: $d=3$, $a_1=4$; $s_{10}=5(2\cdot4+9\cdot3)$.

</details>

### `vl-vse-1119` — Vlastní úloha ve stylu přijímaček VŠE (č. 1119)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{5}+a_{6}=33$ a $a_{1}+a_{2}=9$. Určete $a_{7}$.

- **a)** $24$
- **b)** $18$
- **c)** $21$
- **d)** $25$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $21$. Soustava $2a_1+9d=33$, $2a_1+1d=9$ dává $a_1=3$, $d=3$.

</details>

### `vl-vse-1121` — Vlastní úloha ve stylu přijímaček VŠE (č. 1121)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2+4x-5=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $-2$
- **b)** $6$
- **c)** $-5$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Kořeny $-5$ a $1$; vložená čísla mají stejný součet jako krajní členy. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1137` — Vlastní úloha ve stylu přijímaček VŠE (č. 1137)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2-22x+85=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $22$
- **b)** $85$
- **c)** $-22$
- **d)** $26$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $22$. Kořeny $5$ a $17$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-1186` — Vlastní úloha ve stylu přijímaček VŠE (č. 1186)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2+1x-2=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $-1$
- **b)** $1$
- **c)** $-2$
- **d)** $0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-1$. Kořeny $-2$ a $1$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-1216` — Vlastní úloha ve stylu přijímaček VŠE (č. 1216)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V aritmetické posloupnosti platí $a_{4}+a_{7}=-25$ a $a_{6}+a_{8}=-28$. Určete $a_{10}$.

- **a)** $-19$
- **b)** $-18$
- **c)** $-8$
- **d)** $-16$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Soustava $2a_1+9d=-25$, $2a_1+12d=-28$ dává $a_1=-8$, $d=-1$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1229` — Vlastní úloha ve stylu přijímaček VŠE (č. 1229)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2+5x+4=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $4$
- **b)** $5$
- **c)** $-4$
- **d)** $-5$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-5$. Kořeny $-4$ a $-1$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-vse-1253` — Vlastní úloha ve stylu přijímaček VŠE (č. 1253)

*Темы:* 19. Aritmetická posloupnost, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Mezi kořeny rovnice $x^2+5x-14=0$ vložíme dvě čísla tak, aby spolu s kořeny tvořila čtyři po sobě jdoucí členy aritmetické posloupnosti. Jaký je součet vložených čísel?

- **a)** $-2$
- **b)** $-5$
- **c)** $5$
- **d)** $-14$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-5$. Kořeny $-7$ a $2$; vložená čísla mají stejný součet jako krajní členy.

</details>

### `vl-nsz-010` — [Vlastní úloha ve stylu NSZ Matematika (č. 10)](https://www.scio.cz/matematika)

*Темы:* 20. Geometrická posloupnost, 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řasa v akváriu se rozrůstá: každý týden se plocha, kterou pokrývá, zvětší 1,5krát. Po 10 týdnech pokrývá $\frac49$ dna. Po kolika týdnech od začátku pokryje celé dno?

- **a)** $11$
- **b)** $12$
- **c)** $13$
- **d)** $20$

<details><summary>Ответ и решение</summary>

**b** — $12$. $\frac49\cdot1{,}5^2=\frac49\cdot\frac94=1$ — stačí další dva týdny.

</details>

### `vl-nsz-057` — [Vlastní úloha ve stylu NSZ Matematika (č. 57)](https://www.scio.cz/matematika)

*Темы:* 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Míček po každém dopadu vyskočí do $\frac23$ výšky, ze které padal. Pustíme ho z výšky 3 m. Jakou dráhu (v metrech) urazí do okamžiku čtvrtého dopadu?

- **a)** $\dfrac{29}3$
- **b)** $\dfrac{65}9$
- **c)** $\dfrac{103}9$
- **d)** $9$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{103}9$. $3+2\left(2+\frac43+\frac89\right)=3+\frac{76}9=\frac{103}9$.

</details>

### `vl-obec-061` — Vlastní úloha ve stylu přijímacích testů (č. 61)

*Темы:* 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Geometrická posloupnost má $a_1=48$ a $q=\frac12$. Kolik jejích členů je větších než $\frac1{10}$?

- **a)** $7$
- **b)** $8$
- **c)** $9$
- **d)** $10$
- **e)** nekonečně mnoho

<details><summary>Ответ и решение</summary>

**c** — $9$. $48\cdot2^{1-n}>\frac1{10}\iff2^{n-1}<480$, tj. $n-1\le8$.

</details>

### `vl-vse-0158` — Vlastní úloha ve stylu přijímaček VŠE (č. 158)

*Темы:* 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Tři čísla tvoří geometrickou posloupnost, jejich součet je 21 a součin 216. Určete je.

<details><summary>Ответ и решение</summary>

$3, 6, 12$ (nebo v opačném pořadí $12, 6, 3$). Prostřední člen je $\sqrt[3]{216}=6$; $\frac6q+6+6q=21$, $2q^2-5q+2=0$.

</details>

### `vl-nsz-210` — [Vlastní úloha ve stylu NSZ Matematika (č. 210)](https://www.scio.cz/matematika)

*Темы:* 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

První člen geometrické posloupnosti je 5, kvocient je $-3$. Abychom dostali součet 305, musíme sečíst:

- **a)** první 3 členy
- **b)** první 4 členy
- **c)** prvních 5 členů
- **d)** prvních 6 členů

<details><summary>Ответ и решение</summary>

**c** — prvních 5 členů. $s_n=5\cdot\frac{1-(-3)^n}{1+3}$; $s_5=5\cdot\frac{244}4=305$.

</details>

### `vl-vse-0690` — Vlastní úloha ve stylu přijímaček VŠE (č. 690)

*Темы:* 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Geometrická posloupnost s kladným kvocientem má součet prvních tří členů 26 a třetí člen je o 16 větší než první. Určete $a_1$ a $q$.

<details><summary>Ответ и решение</summary>

$a_1=2$, $q=3$. $a_1(q^2-1)=16$ a $a_1(1+q+q^2)=26$. Vydělením $13(q^2-1)=8(q^2+q+1)$, tj. $5q^2-8q-21=0$; kladný kořen $q=3$, pak $a_1=2$.

</details>

### `vl-nsz-004` — [Vlastní úloha ve stylu NSZ Matematika (č. 4)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik různých „slov“ (i nesmyslných) vznikne přeházením písmen slova KAKAO, nepočítáme-li slovo KAKAO samotné?

- **a)** $28$
- **b)** $29$
- **c)** $30$
- **d)** $59$

<details><summary>Ответ и решение</summary>

**b** — $29$. $\frac{5!}{2!\,2!}=30$, bez původního slova $29$.

</details>

### `vl-obec-016` — Vlastní úloha ve stylu přijímacích testů (č. 16)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolika způsoby lze seřadit čísla 1 až 8 tak, aby sudá čísla šla (mezi sebou) vzestupně a lichá sestupně? (Sudá a lichá se mohou libovolně střídat.)

- **a)** $24$
- **b)** $35$
- **c)** $70$
- **d)** $576$
- **e)** $40\,320$

<details><summary>Ответ и решение</summary>

**c** — $70$. Stačí vybrat 4 místa pro sudá čísla: $\binom84=70$.

</details>

### `vl-nsz-021` — [Vlastní úloha ve stylu NSZ Matematika (č. 21)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V sáčku jsou 3 červené, 2 modré a 1 bílá kulička. Vytáhneme tři kuličky. Kolik různých barevných složení (na pořadí nezáleží) může trojice mít?

- **a)** $4$
- **b)** $5$
- **c)** $6$
- **d)** $7$

<details><summary>Ответ и решение</summary>

**c** — $6$. Možnosti: ČČČ, ČČM, ČČB, ČMM, ČMB, MMB.

</details>

### `vl-nsz-050` — [Vlastní úloha ve stylu NSZ Matematika (č. 50)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Čtyřciferné číslo neobsahuje nulu a jeho číslice se neopakují. Začíná sudou číslicí a sousední číslice mají vždy různou paritu. Kolik takových čísel existuje?

- **a)** $240$
- **b)** $360$
- **c)** $400$
- **d)** $1\,680$

<details><summary>Ответ и решение</summary>

**a** — $240$. Pořadí sudá–lichá–sudá–lichá: $4\cdot5\cdot3\cdot4=240$.

</details>

### `vl-obec-067` — Vlastní úloha ve stylu přijímacích testů (č. 67)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik je čtyřciferných čísel, jejichž ciferný součet je 3?

- **a)** $6$
- **b)** $9$
- **c)** $10$
- **d)** $12$
- **e)** $15$

<details><summary>Ответ и решение</summary>

**c** — $10$. První cifra je 1, 2 nebo 3; zbylý součet rozdělíme do tří míst: $\binom{4}{2}+\binom32+\binom22=6+3+1$.

</details>

### `vl-obec-083` — Vlastní úloha ve stylu přijímacích testů (č. 83)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ubereme-li z množiny jeden prvek, zmenší se počet jejích dvouprvkových podmnožin o 5. Kolik prvků měla množina?

- **a)** $6$
- **b)** $5$
- **c)** $7$
- **d)** $8$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $6$. Zmizí dvojice s odebraným prvkem: $n-1=5$, $n=6$.

</details>

### `vl-nsz-087` — [Vlastní úloha ve stylu NSZ Matematika (č. 87)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ve skupině je 5 dívek a 7 chlapců. Kolika způsoby lze vybrat trojici, v níž je aspoň jedna dívka?

- **a)** $175$
- **b)** $185$
- **c)** $210$
- **d)** $220$

<details><summary>Ответ и решение</summary>

**b** — $185$. Všechny trojice minus trojice samých chlapců: $\binom{12}3-\binom73=220-35=185$.

</details>

### `vl-obec-092` — Vlastní úloha ve stylu přijímacích testů (č. 92)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Čtyřmístný PIN tvoří číslice 0–9 (mohou se opakovat). Kdybychom k číslicím přidali i 26 písmen, kolikrát by se počet možných PINů zvětšil?

- **a)** $\left(\dfrac{36}{10}\right)^4$krát
- **b)** $26^4$krát
- **c)** $\dfrac{36^4}{10}$krát
- **d)** $\dbinom{36}4:\dbinom{10}4$krát
- **e)** $\dfrac{36!}{10!}$krát

<details><summary>Ответ и решение</summary>

**a** — $\left(\dfrac{36}{10}\right)^4$krát. $\frac{36^4}{10^4}$.

</details>

### `vl-nsz-096` — [Vlastní úloha ve stylu NSZ Matematika (č. 96)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik je uspořádaných dvojic $(a,b)$, kde $a\in\{1;2;3;4;5\}$, $b\in\{2;4;6;8\}$ a součin $ab$ je dělitelný čtyřmi?

- **a)** $10$
- **b)** $12$
- **c)** $14$
- **d)** $16$

<details><summary>Ответ и решение</summary>

**c** — $14$. Pro $b=4,8$ vyhoví každé $a$ ($10$ dvojic), pro $b=2,6$ jen sudé $a$ ($4$ dvojice).

</details>

### `vl-vse-0134` — Vlastní úloha ve stylu přijímaček VŠE (č. 134)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ubereme-li z množiny jeden prvek, zmenší se počet jejích dvouprvkových podmnožin o 6. Kolik prvků měla množina?

- **a)** $7$
- **b)** $6$
- **c)** $8$
- **d)** $9$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $7$. Zmizí dvojice s odebraným prvkem: $n-1=6$, $n=7$.

</details>

### `vl-nsz-137` — [Vlastní úloha ve stylu NSZ Matematika (č. 137)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

První skupina má 3 dívky a 2 chlapce, druhá 3 dívky a 1 chlapce. Každá skupina vyšle do výboru dva zástupce. Kolik je možných složení výboru, v nichž je aspoň jeden chlapec?

- **a)** $36$
- **b)** $42$
- **c)** $51$
- **d)** $60$

<details><summary>Ответ и решение</summary>

**c** — $51$. Všech složení $\binom52\binom42=60$, bez chlapců $\binom32\binom32=9$.

</details>

### `vl-nsz-204` — [Vlastní úloha ve stylu NSZ Matematika (č. 204)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik celých čísel od 1 do 300 má všechny číslice liché?

- **a)** $45$
- **b)** $55$
- **c)** $75$
- **d)** $125$

<details><summary>Ответ и решение</summary>

**b** — $55$. Jednociferná $5$, dvouciferná $5\cdot5=25$, trojciferná do 300 jen s první číslicí 1: $25$. Celkem $55$.

</details>

### `vl-nsz-205` — [Vlastní úloha ve stylu NSZ Matematika (č. 205)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik pěticiferných čísel lze zapsat jen číslicemi 0, 1, 2 (mohou se opakovat), jestliže stejné číslice nesmějí stát přímo vedle sebe?

- **a)** $24$
- **b)** $32$
- **c)** $48$
- **d)** $81$

<details><summary>Ответ и решение</summary>

**b** — $32$. První číslice 1 nebo 2, každá další jiná než předchozí: $2\cdot2^4=32$.

</details>

### `vl-vse-0210` — Vlastní úloha ve stylu přijímaček VŠE (č. 210)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přidáme-li k množině jeden prvek, zvětší se počet jejích tříprvkových podmnožin o 21. Kolik prvků měla množina?

- **a)** $6$
- **b)** $9$
- **c)** $8$
- **d)** $7$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $7$. Nové tříprvkové podmnožiny obsahují přidaný prvek: $\binom n2=21$, $n=7$.

</details>

### `vl-nsz-216` — [Vlastní úloha ve stylu NSZ Matematika (č. 216)](https://www.scio.cz/matematika)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

PIN má pět číslic. První číslice je sudá a nenulová, poslední je 0 nebo 5 a tři prostřední číslice jsou navzájem různé. Kolik takových PINů existuje?

- **a)** $2\,880$
- **b)** $4\,000$
- **c)** $5\,760$
- **d)** $8\,000$

<details><summary>Ответ и решение</summary>

**c** — $5\,760$. $4\cdot(10\cdot9\cdot8)\cdot2=5\,760$.

</details>

### `vl-vse-0328` — Vlastní úloha ve stylu přijímaček VŠE (č. 328)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přidáme-li k množině jeden prvek, zvětší se počet jejích tříprvkových podmnožin o 36. Kolik prvků měla množina?

- **a)** $9$
- **b)** $11$
- **c)** $8$
- **d)** $10$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $9$. Nové tříprvkové podmnožiny obsahují přidaný prvek: $\binom n2=36$, $n=9$.

</details>

### `vl-vse-0337` — Vlastní úloha ve stylu přijímaček VŠE (č. 337)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ubereme-li z množiny jeden prvek, zmenší se počet jejích dvouprvkových podmnožin o 4. Kolik prvků měla množina?

- **a)** $4$
- **b)** $5$
- **c)** $6$
- **d)** $7$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $5$. Zmizí dvojice s odebraným prvkem: $n-1=4$, $n=5$.

</details>

### `vl-vse-0379` — Vlastní úloha ve stylu přijímaček VŠE (č. 379)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zvětší-li se počet prvků o jeden, zvětší se počet variací třetí třídy bez opakování o 270. Kolik je prvků?

- **a)** $9$
- **b)** $12$
- **c)** $11$
- **d)** $10$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $10$. $(n+1)n(n-1)-n(n-1)(n-2)=3n(n-1)=270$, tedy $n=10$.

</details>

### `vl-vse-0433` — Vlastní úloha ve stylu přijímaček VŠE (č. 433)

*Темы:* 22. Variace. Permutace. Kombinace, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete všechna přirozená čísla $n\ge2$, pro která je rozdíl počtu variací a počtu kombinací druhé třídy z $n$ prvků nejvýše 36.

<details><summary>Ответ и решение</summary>

$n\in\{2;3;\dots;9\}$. $n(n-1)-\frac{n(n-1)}2=\frac{n(n-1)}2\le36$, tedy $n\le9$.

</details>

### `vl-vse-0447` — Vlastní úloha ve stylu přijímaček VŠE (č. 447)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přidáme-li k množině jeden prvek, zvětší se počet jejích tříprvkových podmnožin o 10. Kolik prvků měla množina?

- **a)** $4$
- **b)** $6$
- **c)** $7$
- **d)** $5$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $5$. Nové tříprvkové podmnožiny obsahují přidaný prvek: $\binom n2=10$, $n=5$.

</details>

### `vl-vse-0506` — Vlastní úloha ve stylu přijímaček VŠE (č. 506)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ubereme-li z množiny jeden prvek, zmenší se počet jejích dvouprvkových podmnožin o 5. Kolik prvků měla množina?

- **a)** $5$
- **b)** $8$
- **c)** $4$
- **d)** $7$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Zmizí dvojice s odebraným prvkem: $n-1=5$, $n=6$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0518` — Vlastní úloha ve stylu přijímaček VŠE (č. 518)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ubereme-li z množiny jeden prvek, zmenší se počet jejích dvouprvkových podmnožin o 8. Kolik prvků měla množina?

- **a)** $7$
- **b)** $10$
- **c)** $11$
- **d)** $8$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Zmizí dvojice s odebraným prvkem: $n-1=8$, $n=9$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0594` — Vlastní úloha ve stylu přijímaček VŠE (č. 594)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik trojciferných čísel s navzájem různými ciframi lze zapsat pomocí cifer 2, 4, 5, 7, 0?

- **a)** $10$
- **b)** $48$
- **c)** $125$
- **d)** $60$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $48$. První cifra nesmí být 0: $4\cdot V_{2}(4)=48$.

</details>

### `vl-vse-0639` — Vlastní úloha ve stylu přijímaček VŠE (č. 639)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zvětší-li se počet prvků o jeden, zvětší se počet variací třetí třídy bez opakování o 90. Kolik je prvků?

- **a)** $5$
- **b)** $8$
- **c)** $7$
- **d)** $6$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $6$. $(n+1)n(n-1)-n(n-1)(n-2)=3n(n-1)=90$, tedy $n=6$.

</details>

### `vl-vse-0673` — Vlastní úloha ve stylu přijímaček VŠE (č. 673)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přidáme-li k množině jeden prvek, zvětší se počet jejích tříprvkových podmnožin o 45. Kolik prvků měla množina?

- **a)** $11$
- **b)** $9$
- **c)** $10$
- **d)** $12$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $10$. Nové tříprvkové podmnožiny obsahují přidaný prvek: $\binom n2=45$, $n=10$.

</details>

### `vl-vse-0741` — Vlastní úloha ve stylu přijímaček VŠE (č. 741)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zvětší-li se počet prvků o jeden, zvětší se počet variací třetí třídy bez opakování o 126. Kolik je prvků?

- **a)** $8$
- **b)** $7$
- **c)** $6$
- **d)** $9$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $7$. $(n+1)n(n-1)-n(n-1)(n-2)=3n(n-1)=126$, tedy $n=7$.

</details>

### `vl-vse-1074` — Vlastní úloha ve stylu přijímaček VŠE (č. 1074)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ubereme-li z množiny jeden prvek, zmenší se počet jejích dvouprvkových podmnožin o 10. Kolik prvků měla množina?

- **a)** $10$
- **b)** $9$
- **c)** $12$
- **d)** $13$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Zmizí dvojice s odebraným prvkem: $n-1=10$, $n=11$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1081` — Vlastní úloha ve stylu přijímaček VŠE (č. 1081)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přidáme-li k množině jeden prvek, zvětší se počet jejích tříprvkových podmnožin o 15. Kolik prvků měla množina?

- **a)** $6$
- **b)** $7$
- **c)** $5$
- **d)** $8$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $6$. Nové tříprvkové podmnožiny obsahují přidaný prvek: $\binom n2=15$, $n=6$.

</details>

### `vl-vse-1091` — Vlastní úloha ve stylu přijímaček VŠE (č. 1091)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ubereme-li z množiny jeden prvek, zmenší se počet jejích dvouprvkových podmnožin o 9. Kolik prvků měla množina?

- **a)** $10$
- **b)** $12$
- **c)** $11$
- **d)** $9$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $10$. Zmizí dvojice s odebraným prvkem: $n-1=9$, $n=10$.

</details>

### `vl-vse-1093` — Vlastní úloha ve stylu přijímaček VŠE (č. 1093)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přidáme-li k množině jeden prvek, zvětší se počet jejích tříprvkových podmnožin o 28. Kolik prvků měla množina?

- **a)** $10$
- **b)** $28$
- **c)** $7$
- **d)** $9$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Nové tříprvkové podmnožiny obsahují přidaný prvek: $\binom n2=28$, $n=8$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1126` — Vlastní úloha ve stylu přijímaček VŠE (č. 1126)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik trojciferných čísel s navzájem různými ciframi lze zapsat pomocí cifer 1, 3, 4, 7, 8, 0?

- **a)** $216$
- **b)** $100$
- **c)** $120$
- **d)** $20$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $100$. První cifra nesmí být 0: $5\cdot V_{2}(5)=100$.

</details>

### `vl-vse-1158` — Vlastní úloha ve stylu přijímaček VŠE (č. 1158)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zvětší-li se počet prvků o jeden, zvětší se počet variací třetí třídy bez opakování o 330. Kolik je prvků?

- **a)** $12$
- **b)** $13$
- **c)** $11$
- **d)** $10$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $11$. $(n+1)n(n-1)-n(n-1)(n-2)=3n(n-1)=330$, tedy $n=11$.

</details>

### `vl-vse-1188` — Vlastní úloha ve stylu přijímaček VŠE (č. 1188)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik různých pěticiferných čísel lze sestavit z cifer 0, 1, 2, 3, 4, jestliže se cifry neopakují?

<details><summary>Ответ и решение</summary>

$96$. $4\cdot4!$ — první cifra nesmí být nula.

</details>

### `vl-vse-1195` — Vlastní úloha ve stylu přijímaček VŠE (č. 1195)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zvětší-li se počet prvků o jeden, zvětší se počet variací třetí třídy bez opakování o 60. Kolik je prvků?

- **a)** $60$
- **b)** $7$
- **c)** $4$
- **d)** $6$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $(n+1)n(n-1)-n(n-1)(n-2)=3n(n-1)=60$, tedy $n=5$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1237` — Vlastní úloha ve stylu přijímaček VŠE (č. 1237)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Zvětší-li se počet prvků o jeden, zvětší se počet variací třetí třídy bez opakování o 216. Kolik je prvků?

- **a)** $11$
- **b)** $9$
- **c)** $10$
- **d)** $8$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $9$. $(n+1)n(n-1)-n(n-1)(n-2)=3n(n-1)=216$, tedy $n=9$.

</details>

### `vl-vse-1238` — Vlastní úloha ve stylu přijímaček VŠE (č. 1238)

*Темы:* 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přidáme-li k množině jeden prvek, zvětší se počet jejích tříprvkových podmnožin o 55. Kolik prvků měla množina?

- **a)** $12$
- **b)** $10$
- **c)** $11$
- **d)** $13$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $11$. Nové tříprvkové podmnožiny obsahují přidaný prvek: $\binom n2=55$, $n=11$.

</details>

### `vl-nsz-037` — [Vlastní úloha ve stylu NSZ Matematika (č. 37)](https://www.scio.cz/matematika)

*Темы:* 23. Kombinační číslo. Binomická věta, 21. Kombinatorika. Faktoriál · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Součin čísel $A=\dbinom{12}{10}$ a $B=\dfrac{2\cdot11!}{12!}$ je roven:

- **a)** $\dfrac16$
- **b)** $11$
- **c)** $12$
- **d)** $66$

<details><summary>Ответ и решение</summary>

**b** — $11$. $\binom{12}{10}=\binom{12}2=66$, $B=\frac2{12}=\frac16$; součin $11$.

</details>

### `vl-vse-0056` — Vlastní úloha ve stylu přijímaček VŠE (č. 56)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{26}{7}+\binom{26}{8}$ se rovná číslu:

- **a)** $\binom{52}{15}$
- **b)** $\binom{26}{9}$
- **c)** $\binom{27}{7}$
- **d)** $\binom{27}{8}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\binom{27}{8}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0059` — Vlastní úloha ve stylu přijímaček VŠE (č. 59)

*Темы:* 23. Kombinační číslo. Binomická věta, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna přirozená čísla $n$, pro která platí $\binom n2=n+35$, leží v intervalu:

- **a)** $\langle 3;6)$
- **b)** $\langle 0;3)$
- **c)** $\langle 9;12)$
- **d)** $\langle 6;9)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\langle 9;12)$. Řešením v $\mathbb N$ je $10$.

</details>

### `vl-vse-0066` — Vlastní úloha ve stylu přijímaček VŠE (č. 66)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{26}{3}-\binom{25}{3}$ se rovná číslu:

- **a)** $\binom{25}{3}$
- **b)** $\binom{26}{2}$
- **c)** $\binom{25}{4}$
- **d)** $\binom{25}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\binom{25}{2}$. $\binom nk=\binom{n-1}k+\binom{n-1}{k-1}$.

</details>

### `vl-obec-066` — Vlastní úloha ve stylu přijímacích testů (č. 66)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{19}{7}+\binom{19}{8}$ se rovná číslu:

- **a)** $\binom{20}{7}$
- **b)** $\binom{20}{8}$
- **c)** $\binom{19}{9}$
- **d)** $\binom{38}{15}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\binom{20}{8}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0074` — Vlastní úloha ve stylu přijímaček VŠE (č. 74)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{30}{3}+\binom{30}{4}$ se rovná číslu:

- **a)** $\binom{31}{4}$
- **b)** $\binom{60}{7}$
- **c)** $\binom{30}{5}$
- **d)** $\binom{31}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\binom{31}{4}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0088` — Vlastní úloha ve stylu přijímaček VŠE (č. 88)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{12}{7}+\binom{12}{8}$ se rovná číslu:

- **a)** $\binom{13}{8}$
- **b)** $\binom{13}{7}$
- **c)** $\binom{24}{15}$
- **d)** $\binom{12}{9}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\binom{13}{8}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0190` — Vlastní úloha ve stylu přijímaček VŠE (č. 190)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{24}{6}+\binom{24}{7}$ se rovná číslu:

- **a)** $\binom{25}{6}$
- **b)** $\binom{25}{7}$
- **c)** $\binom{48}{13}$
- **d)** $\binom{24}{8}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\binom{25}{7}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0216` — Vlastní úloha ve stylu přijímaček VŠE (č. 216)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{21}{4}+\binom{21}{5}$ se rovná číslu:

- **a)** $\binom{42}{9}$
- **b)** $\binom{22}{4}$
- **c)** $\binom{22}{5}$
- **d)** $\binom{21}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\binom{22}{5}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0237` — Vlastní úloha ve stylu přijímaček VŠE (č. 237)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{19}{4}+\binom{19}{5}$ se rovná číslu:

- **a)** $\binom{38}{9}$
- **b)** $\binom{20}{5}$
- **c)** $\binom{19}{6}$
- **d)** $\binom{20}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\binom{20}{5}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0295` — Vlastní úloha ve stylu přijímaček VŠE (č. 295)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{23}{4}-\binom{22}{4}$ se rovná číslu:

- **a)** $\binom{23}{3}$
- **b)** $\binom{22}{5}$
- **c)** $\binom{22}{3}$
- **d)** $\binom{22}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\binom{22}{3}$. $\binom nk=\binom{n-1}k+\binom{n-1}{k-1}$.

</details>

### `vl-vse-0344` — Vlastní úloha ve stylu přijímaček VŠE (č. 344)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{9}{4}+\binom{9}{5}$ se rovná číslu:

- **a)** $\binom{9}{6}$
- **b)** $\binom{18}{9}$
- **c)** $\binom{10}{5}$
- **d)** $\binom{10}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\binom{10}{5}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0404` — Vlastní úloha ve stylu přijímaček VŠE (č. 404)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{17}{7}-\binom{16}{7}$ se rovná číslu:

- **a)** $\binom{16}{6}$
- **b)** $\binom{16}{7}$
- **c)** $\binom{16}{8}$
- **d)** $\binom{17}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\binom{16}{6}$. $\binom nk=\binom{n-1}k+\binom{n-1}{k-1}$.

</details>

### `vl-vse-0440` — Vlastní úloha ve stylu přijímaček VŠE (č. 440)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{27}{3}+\binom{27}{4}$ se rovná číslu:

- **a)** $\binom{54}{7}$
- **b)** $\binom{28}{4}$
- **c)** $\binom{27}{5}$
- **d)** $\binom{28}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\binom{28}{4}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0480` — Vlastní úloha ve stylu přijímaček VŠE (č. 480)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{23}{7}-\binom{22}{7}$ se rovná číslu:

- **a)** $\binom{22}{7}$
- **b)** $\binom{22}{8}$
- **c)** $\binom{22}{6}$
- **d)** $\binom{23}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\binom{22}{6}$. $\binom nk=\binom{n-1}k+\binom{n-1}{k-1}$.

</details>

### `vl-vse-0550` — Vlastní úloha ve stylu přijímaček VŠE (č. 550)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{22}{3}+\binom{22}{4}$ se rovná číslu:

- **a)** $\binom{23}{4}$
- **b)** $\binom{44}{7}$
- **c)** $\binom{22}{5}$
- **d)** $\binom{23}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\binom{23}{4}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0557` — Vlastní úloha ve stylu přijímaček VŠE (č. 557)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{16}{7}+\binom{16}{8}$ se rovná číslu:

- **a)** $\binom{32}{15}$
- **b)** $\binom{17}{7}$
- **c)** $\binom{17}{8}$
- **d)** $\binom{16}{9}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\binom{17}{8}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0624` — Vlastní úloha ve stylu přijímaček VŠE (č. 624)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{15}{5}+\binom{15}{6}$ se rovná číslu:

- **a)** $\binom{16}{6}$
- **b)** $\binom{15}{7}$
- **c)** $\binom{16}{5}$
- **d)** $\binom{30}{11}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\binom{16}{6}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0682` — Vlastní úloha ve stylu přijímaček VŠE (č. 682)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{14}{6}-\binom{13}{6}$ se rovná číslu:

- **a)** $\binom{13}{7}$
- **b)** $\binom{13}{6}$
- **c)** $\binom{13}{5}$
- **d)** $\binom{14}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\binom{13}{5}$. $\binom nk=\binom{n-1}k+\binom{n-1}{k-1}$.

</details>

### `vl-vse-0692` — Vlastní úloha ve stylu přijímaček VŠE (č. 692)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{21}{3}-\binom{20}{3}$ se rovná číslu:

- **a)** $\binom{21}{2}$
- **b)** $\binom{20}{3}$
- **c)** $\binom{20}{4}$
- **d)** $\binom{20}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\binom{20}{2}$. $\binom nk=\binom{n-1}k+\binom{n-1}{k-1}$.

</details>

### `vl-vse-0693` — Vlastní úloha ve stylu přijímaček VŠE (č. 693)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{17}{3}+\binom{17}{4}$ se rovná číslu:

- **a)** $\binom{34}{7}$
- **b)** $\binom{18}{4}$
- **c)** $\binom{17}{5}$
- **d)** $\binom{18}{3}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\binom{18}{4}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0713` — Vlastní úloha ve stylu přijímaček VŠE (č. 713)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{10}{7}+\binom{10}{8}$ se rovná číslu:

- **a)** $\binom{11}{7}$
- **b)** $\binom{20}{15}$
- **c)** $\binom{10}{9}$
- **d)** $\binom{11}{8}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\binom{11}{8}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0734` — Vlastní úloha ve stylu přijímaček VŠE (č. 734)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{10}{5}-\binom{9}{5}$ se rovná číslu:

- **a)** $\binom{9}{6}$
- **b)** $\binom{9}{5}$
- **c)** $\binom{9}{4}$
- **d)** $\binom{10}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\binom{9}{4}$. $\binom nk=\binom{n-1}k+\binom{n-1}{k-1}$.

</details>

### `vl-vse-0851` — Vlastní úloha ve stylu přijímaček VŠE (č. 851)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{19}{6}+\binom{19}{7}$ se rovná číslu:

- **a)** $\binom{19}{8}$
- **b)** $\binom{38}{13}$
- **c)** $\binom{21}{7}$
- **d)** $\binom{20}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0854` — Vlastní úloha ve stylu přijímaček VŠE (č. 854)

*Темы:* 23. Kombinační číslo. Binomická věta, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna přirozená čísla $n$, pro která platí $\binom n3=3n+57$, leží v intervalu:

- **a)** $\langle 9;12)$
- **b)** $\langle 3;6)$
- **c)** $\langle 0;3)$
- **d)** $\langle 6;9)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\langle 9;12)$. Řešením v $\mathbb N$ je $9$.

</details>

### `vl-vse-0899` — Vlastní úloha ve stylu přijímaček VŠE (č. 899)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{11}{3}-\binom{10}{3}$ se rovná číslu:

- **a)** $\binom{10}{3}$
- **b)** $\binom{10}{2}$
- **c)** $\binom{10}{4}$
- **d)** $\binom{11}{2}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\binom{10}{2}$. $\binom nk=\binom{n-1}k+\binom{n-1}{k-1}$.

</details>

### `vl-vse-0937` — Vlastní úloha ve stylu přijímaček VŠE (č. 937)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{21}{6}+\binom{21}{7}$ se rovná číslu:

- **a)** $\binom{22}{7}$
- **b)** $\binom{21}{8}$
- **c)** $\binom{42}{13}$
- **d)** $\binom{22}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\binom{22}{7}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-0943` — Vlastní úloha ve stylu přijímaček VŠE (č. 943)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete člen rozvoje $\left(2x-\frac1x\right)^6$, který neobsahuje $x$.

<details><summary>Ответ и решение</summary>

$-160$. $\binom63(2x)^3\left(-\frac1x\right)^3=20\cdot8\cdot(-1)$.

</details>

### `vl-vse-1006` — Vlastní úloha ve stylu přijímaček VŠE (č. 1006)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{27}{6}+\binom{27}{7}$ se rovná číslu:

- **a)** $\binom{27}{8}$
- **b)** $\binom{28}{7}$
- **c)** $\binom{54}{13}$
- **d)** $\binom{28}{6}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\binom{28}{7}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-1024` — Vlastní úloha ve stylu přijímaček VŠE (č. 1024)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{23}{4}+\binom{23}{5}$ se rovná číslu:

- **a)** $\binom{23}{6}$
- **b)** $\binom{25}{5}$
- **c)** $\binom{46}{9}$
- **d)** $\binom{24}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1072` — Vlastní úloha ve stylu přijímaček VŠE (č. 1072)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{24}{3}+\binom{24}{4}$ se rovná číslu:

- **a)** $\binom{48}{7}$
- **b)** $\binom{25}{3}$
- **c)** $\binom{24}{5}$
- **d)** $\binom{25}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\binom{25}{4}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-1122` — Vlastní úloha ve stylu přijímaček VŠE (č. 1122)

*Темы:* 23. Kombinační číslo. Binomická věta, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna přirozená čísla $n$, pro která platí $\binom n2=2n+33$, leží v intervalu:

- **a)** $\langle 3;6)$
- **b)** $\langle 6;9)$
- **c)** $\langle 0;3)$
- **d)** $\langle 9;12)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\langle 9;12)$. Řešením v $\mathbb N$ je $11$.

</details>

### `vl-vse-1182` — Vlastní úloha ve stylu přijímaček VŠE (č. 1182)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{22}{7}-\binom{21}{7}$ se rovná číslu:

- **a)** $\binom{22}{6}$
- **b)** $\binom{21}{8}$
- **c)** $\binom{21}{6}$
- **d)** $\binom{21}{7}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\binom{21}{6}$. $\binom nk=\binom{n-1}k+\binom{n-1}{k-1}$.

</details>

### `vl-vse-1183` — Vlastní úloha ve stylu přijímaček VŠE (č. 1183)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{14}{5}+\binom{14}{6}$ se rovná číslu:

- **a)** $\binom{28}{11}$
- **b)** $\binom{15}{6}$
- **c)** $\binom{14}{7}$
- **d)** $\binom{15}{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\binom{15}{6}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-vse-1196` — Vlastní úloha ve stylu přijímaček VŠE (č. 1196)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo $\binom{12}{4}+\binom{12}{5}$ se rovná číslu:

- **a)** $\binom{13}{5}$
- **b)** $\binom{12}{6}$
- **c)** $\binom{24}{9}$
- **d)** $\binom{13}{4}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\binom{13}{5}$. $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

</details>

### `vl-obec-032` — Vlastní úloha ve stylu přijímacích testů (č. 32)

*Темы:* 24. Pravděpodobnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ze sedmi kartiček s čísly 1–7 vytáhneme náhodně dvě. Jaká je pravděpodobnost, že součet čísel bude sudý?

- **a)** $\dfrac37$
- **b)** $\dfrac12$
- **c)** $\dfrac47$
- **d)** $\dfrac5{21}$
- **e)** $\dfrac{2}{7}$

<details><summary>Ответ и решение</summary>

**a** — $\dfrac37$. Sudý součet: dvě lichá ($\binom42=6$) nebo dvě sudá ($\binom32=3$) z $\binom72=21$: $\frac9{21}$.

</details>

### `vl-nsz-036` — [Vlastní úloha ve stylu NSZ Matematika (č. 36)](https://www.scio.cz/matematika)

*Темы:* 24. Pravděpodobnost, 22. Variace. Permutace. Kombinace · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V krabičce jsou 4 zelené a 6 žlutých kuliček, jiné tam nejsou. Náhodně vytáhneme dvě kuličky najednou. Jaká je pravděpodobnost, že budou obě stejné barvy?

- **a)** $\dfrac25$
- **b)** $\dfrac7{15}$
- **c)** $\dfrac12$
- **d)** $\dfrac8{15}$

<details><summary>Ответ и решение</summary>

**b** — $\dfrac7{15}$. $\frac{\binom42+\binom62}{\binom{10}2}=\frac{6+15}{45}=\frac7{15}$.

</details>

### `vl-nsz-047` — [Vlastní úloha ve stylu NSZ Matematika (č. 47)](https://www.scio.cz/matematika)

*Темы:* 24. Pravděpodobnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Filip, Tomáš a Hanka házejí dvěma kostkami s čísly 1–6 a vyhrává ten, jehož číslo se rovná součinu hozených čísel. Filip si vybral 6, Tomáš 12 a Hanka 4. Kdo má největší šanci na výhru?

- **a)** Všichni mají stejnou šanci.
- **b)** Jen Filip.
- **c)** Jen Hanka.
- **d)** Filip a Tomáš, oba stejnou.

<details><summary>Ответ и решение</summary>

**d** — Filip a Tomáš, oba stejnou.. Součin 6: $1\cdot6, 6\cdot1, 2\cdot3, 3\cdot2$; součin 12: $2\cdot6, 6\cdot2, 3\cdot4, 4\cdot3$; součin 4: $1\cdot4, 4\cdot1, 2\cdot2$.

</details>

### `vl-nsz-082` — [Vlastní úloha ve stylu NSZ Matematika (č. 82)](https://www.scio.cz/matematika)

*Темы:* 24. Pravděpodobnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Hrací kostka tvaru pravidelného osmistěnu má 4 stěny modré, 3 bílé a 1 černou. Jaká je pravděpodobnost, že při dvou hodech padne dvakrát stejná barva?

- **a)** $\dfrac13$
- **b)** $\dfrac38$
- **c)** $\dfrac{13}{32}$
- **d)** $\dfrac7{16}$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac{13}{32}$. $\left(\frac48\right)^2+\left(\frac38\right)^2+\left(\frac18\right)^2=\frac{26}{64}$.

</details>

### `vl-obec-108` — Vlastní úloha ve stylu přijímacích testů (č. 108)

*Темы:* 24. Pravděpodobnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Losujeme náhodně celé číslo od 0 do 99. Jaká je pravděpodobnost, že bude liché a zároveň bude obsahovat číslici 5?

- **a)** $\dfrac1{10}$
- **b)** $\dfrac3{20}$
- **c)** $\dfrac7{50}$
- **d)** $\dfrac9{50}$
- **e)** $\dfrac15$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac7{50}$. Lichá čísla s pětkou: $05,15,\dots,95$ (10 čísel) a $51,53,57,59$; celkem 14 ze 100.

</details>

### `vl-nsz-180` — [Vlastní úloha ve stylu NSZ Matematika (č. 180)](https://www.scio.cz/matematika)

*Темы:* 24. Pravděpodobnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Hodíme dvěma klasickými kostkami. Jaká je pravděpodobnost, že se hozená čísla liší právě o 2?

- **a)** $\dfrac19$
- **b)** $\dfrac29$
- **c)** $\dfrac16$
- **d)** $\dfrac5{18}$

<details><summary>Ответ и решение</summary>

**b** — $\dfrac29$. Dvojice $\{1,3\},\{2,4\},\{3,5\},\{4,6\}$, každá ve dvou pořadích: $\frac8{36}$.

</details>

### `vl-nsz-002` — [Vlastní úloha ve stylu NSZ Matematika (č. 2)](https://www.scio.cz/matematika)

*Темы:* 25. Analytická geometrie. Vektory, 27. Obecná rovnice přímky · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaká je vzdálenost počátku soustavy souřadnic od přímky, která prochází bodem $[2;-1]$ a má směrový vektor $(2;1)$?

- **a)** $\dfrac4{\sqrt5}$
- **b)** $\dfrac45$
- **c)** $\sqrt5$
- **d)** $\dfrac2{\sqrt5}$

<details><summary>Ответ и решение</summary>

**a** — $\dfrac4{\sqrt5}$. Normálový vektor $(1;-2)$: $x-2y-4=0$; vzdálenost $\frac{|-4|}{\sqrt5}$.

</details>

### `vl-nsz-099` — [Vlastní úloha ve stylu NSZ Matematika (č. 99)](https://www.scio.cz/matematika)

*Темы:* 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jsou dány body $A=[k;2]$ a $B=[3;k-5]$. Střed úsečky $AB$ leží na přímce $x+y=4$. Které souřadnice má tento střed?

- **a)** $\left[\frac72;\frac12\right]$
- **b)** $[4;0]$
- **c)** $[3;1]$
- **d)** $\left[\frac52;\frac32\right]$

<details><summary>Ответ и решение</summary>

**a** — $\left[\frac72;\frac12\right]$. Střed $\left[\frac{k+3}2;\frac{k-3}2\right]$, součet souřadnic $k=4$.

</details>

### `vl-nsz-056` — [Vlastní úloha ve stylu NSZ Matematika (č. 56)](https://www.scio.cz/matematika)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Body $A=[1;1]$, $B=[7;3]$, $C=[2;5]$ jsou vrcholy trojúhelníku. Na které přímce leží výška na jeho nejdelší stranu?

- **a)** $x-3y+13=0$
- **b)** $3x+y-11=0$
- **c)** $3x+y-4=0$
- **d)** $x=2+t,\ y=5+3t,\ t\in\mathbb R$

<details><summary>Ответ и решение</summary>

**b** — $3x+y-11=0$. $|AB|^2=40$, $|BC|^2=29$, $|AC|^2=17$ — nejdelší je $AB$ se směrem $(3,1)$. Výška prochází $C$ a má normálový vektor $(3,1)$: $3x+y-11=0$.

</details>

### `vl-obec-100` — Vlastní úloha ve stylu přijímacích testů (č. 100)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází bodem $A=[0;0]$ a je kolmá k přímce $p:\ x=-3+-1t,\ y=0+3t$, je:

- **a)** $x-3y-1=0$
- **b)** $x-3y=0$
- **c)** $3x+y=0$
- **d)** $x+3y=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x-3y=0$. Normálový vektor hledané přímky je směrovým vektorem přímky $p$; dosadíme bod $A$.

</details>

### `vl-vse-0114` — Vlastní úloha ve stylu přijímaček VŠE (č. 114)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[1;1]$, $B=[-3;-3]$, $C=[-4;-6]$ leží těžnice $t_a$ na přímce:

- **a)** $11x-9y+4=0$
- **b)** $9x+11y-20=0$
- **c)** $11x-9y-2=0$
- **d)** $3x-y+6=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $11x-9y-2=0$. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[- \dfrac{7}{2};- \dfrac{9}{2}]$.

</details>

### `vl-vse-0147` — Vlastní úloha ve stylu přijímaček VŠE (č. 147)

*Темы:* 27. Obecná rovnice přímky, 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází středy kružnic $k_1:\ x^2+y^2+6x=0$ a $k_2:\ x^2+y^2+4y=0$, je:

- **a)** $2x+3y-6=0$
- **b)** $2x+3y+3=0$
- **c)** $3x-2y+9=0$
- **d)** $2x-3y+6=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Středy jsou $[-3;0]$ a $[0;-2]$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-nsz-171` — [Vlastní úloha ve stylu NSZ Matematika (č. 171)](https://www.scio.cz/matematika)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jsou dány body $A=[2;-3]$ a $B=[-4;1]$. Která rovnice popisuje osu úsečky $AB$?

- **a)** $3x-2y+1=0$
- **b)** $2x+3y+5=0$
- **c)** $3x-2y-1=0$
- **d)** $3x+2y+5=0$

<details><summary>Ответ и решение</summary>

**a** — $3x-2y+1=0$. Střed $[-1;-1]$, normálový vektor $\overrightarrow{AB}=(-6;4)\sim(3;-2)$: $3x-2y+c=0$, $c=1$. Přímka b) je přímka $AB$.

</details>

### `vl-vse-0229` — Vlastní úloha ve stylu přijímaček VŠE (č. 229)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[-4;2]$, $B=[-3;-3]$, $C=[2;-4]$ leží těžnice $t_a$ na přímce:

- **a)** $7x-11y+50=0$
- **b)** $x+5y+18=0$
- **c)** $11x+7y+52=0$
- **d)** $11x+7y+30=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $11x+7y+30=0$. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[- \dfrac{1}{2};- \dfrac{7}{2}]$.

</details>

### `vl-vse-0298` — Vlastní úloha ve stylu přijímaček VŠE (č. 298)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[-2;1]$, $B=[0;4]$, $C=[-1;1]$ leží těžnice $t_a$ na přímce:

- **a)** $x-y+3=0$
- **b)** $3x-y+4=0$
- **c)** $3x-3y+14=0$
- **d)** $x+y+1=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x-y+3=0$. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[- \dfrac{1}{2};\dfrac{5}{2}]$.

</details>

### `vl-vse-0319` — Vlastní úloha ve stylu přijímaček VŠE (č. 319)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[4;2]$, $B=[2;-2]$, $C=[1;3]$ leží těžnice $t_a$ na přímce:

- **a)** $3x-5y-18=0$
- **b)** $5x+3y-26=0$
- **c)** $3x-5y-2=0$
- **d)** $5x+y-8=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $3x-5y-2=0$. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[\dfrac{3}{2};\dfrac{1}{2}]$.

</details>

### `vl-vse-0330` — Vlastní úloha ve stylu přijímaček VŠE (č. 330)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[-2;0]$, $B=[4;0]$, $C=[5;3]$ leží těžnice $t_a$ na přímce:

- **a)** $3x-13y-10=0$
- **b)** $13x+3y+26=0$
- **c)** $3x-13y+6=0$
- **d)** $3x-y-12=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $3x-13y+6=0$. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[\dfrac{9}{2};\dfrac{3}{2}]$.

</details>

### `vl-vse-0451` — Vlastní úloha ve stylu přijímaček VŠE (č. 451)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[3;-4]$, $B=[2;-1]$, $C=[-1;4]$ leží těžnice $t_a$ na přímce:

- **a)** $11x-5y-53=0$
- **b)** $11x+5y-15=0$
- **c)** $5x-11y-59=0$
- **d)** $5x+3y-7=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[\dfrac{1}{2};\dfrac{3}{2}]$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0489` — Vlastní úloha ve stylu přijímaček VŠE (č. 489)

*Темы:* 27. Obecná rovnice přímky, 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází středy kružnic $k_1:\ x^2+y^2+10x+4y+28=0$ a $k_2:\ x^2+y^2+18x+14y+126=0$, je:

- **a)** $5x+4y+33=0$
- **b)** $5x-4y-17=0$
- **c)** $5x-4y+17=0$
- **d)** $4x+5y+30=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $5x-4y+17=0$. Středy jsou $[-5;-2]$ a $[-9;-7]$.

</details>

### `vl-vse-0654` — Vlastní úloha ve stylu přijímaček VŠE (č. 654)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jsou dány vrcholy trojúhelníku $A=[1;-2]$, $B=[5;0]$, $C=[2;4]$. Napište obecnou a parametrickou rovnici přímky, na níž leží výška $v_c$.

<details><summary>Ответ и решение</summary>

$2x+y-8=0$; $x=2+t$, $y=4-2t$, $t\in\mathbb R$. Výška z $C$ je kolmá k $\overrightarrow{AB}=(4;2)\sim(2;1)$.

</details>

### `vl-vse-0671` — Vlastní úloha ve stylu přijímaček VŠE (č. 671)

*Темы:* 27. Obecná rovnice přímky, 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obecná rovnice přímky, která prochází středy kružnic $k_1:\ x^2+y^2+2x+8y+8=0$ a $k_2:\ x^2+y^2-2x+12y+33=0$, je:

- **a)** $x+y+5=0$
- **b)** $x-y-3=0$
- **c)** $x+y-5=0$
- **d)** $2x+2y+7=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x+y+5=0$. Středy jsou $[-1;-4]$ a $[1;-6]$.

</details>

### `vl-vse-0714` — Vlastní úloha ve stylu přijímaček VŠE (č. 714)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[-2;2]$, $B=[-4;-4]$, $C=[-1;-3]$ leží těžnice $t_a$ na přímce:

- **a)** $x-3y-8=0$
- **b)** $11x-y+24=0$
- **c)** $11x-y+38=0$
- **d)** $x+11y-20=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $11x-y+24=0$. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[- \dfrac{5}{2};- \dfrac{7}{2}]$.

</details>

### `vl-vse-0720` — Vlastní úloha ve stylu přijímaček VŠE (č. 720)

*Темы:* 27. Obecná rovnice přímky · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Trojúhelník má vrcholy $A=[1;2]$, $B=[5;-2]$, $C=[4;4]$. Napište obecnou rovnici přímky, na níž leží těžnice $t_c$.

<details><summary>Ответ и решение</summary>

$4x-y-12=0$. Střed $AB$ je $[3;0]$; směr $C-[3;0]=(1;4)$, normálový vektor $(4;-1)$.

</details>

### `vl-vse-0761` — Vlastní úloha ve stylu přijímaček VŠE (č. 761)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[1;1]$, $B=[-4;3]$, $C=[-7;4]$ leží těžnice $t_a$ na přímce:

- **a)** $5x+13y-18=0$
- **b)** $5x+13y-17=0$
- **c)** $13x-5y-8=0$
- **d)** $x+3y-5=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $5x+13y-18=0$. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[- \dfrac{11}{2};\dfrac{7}{2}]$.

</details>

### `vl-vse-0824` — Vlastní úloha ve stylu přijímaček VŠE (č. 824)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[3;2]$, $B=[-1;-1]$, $C=[0;2]$ leží těžnice $t_a$ na přímce:

- **a)** $3x-7y+5=0$
- **b)** $3x-7y-6=0$
- **c)** $7x+3y-27=0$
- **d)** $3x-y+2=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $3x-7y+5=0$. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[- \dfrac{1}{2};\dfrac{1}{2}]$.

</details>

### `vl-vse-0975` — Vlastní úloha ve stylu přijímaček VŠE (č. 975)

*Темы:* 27. Obecná rovnice přímky, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Napište obecnou rovnici přímky, která prochází průsečíkem přímek $x+y-3=0$ a $2x-y=0$ a je rovnoběžná s přímkou $3x-4y+1=0$.

<details><summary>Ответ и решение</summary>

$3x-4y+5=0$. Průsečík $[1;2]$, normálový vektor $(3;-4)$.

</details>

### `vl-vse-1078` — Vlastní úloha ve stylu přijímaček VŠE (č. 1078)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[2;2]$, $B=[4;-4]$, $C=[7;1]$ leží těžnice $t_a$ na přímce:

- **a)** $x-y=0$
- **b)** $x+y-4=0$
- **c)** $5x-3y-32=0$
- **d)** $7x+7y-2=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x+y-4=0$. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[\dfrac{11}{2};- \dfrac{3}{2}]$.

</details>

### `vl-vse-1108` — Vlastní úloha ve stylu přijímaček VŠE (č. 1108)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[3;-4]$, $B=[-3;1]$, $C=[2;4]$ leží těžnice $t_a$ na přímce:

- **a)** $13x+7y+34=0$
- **b)** $7x-13y-73=0$
- **c)** $13x+7y-11=0$
- **d)** $3x-5y+14=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $13x+7y-11=0$. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[- \dfrac{1}{2};\dfrac{5}{2}]$.

</details>

### `vl-vse-1156` — Vlastní úloha ve stylu přijímaček VŠE (č. 1156)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[3;-4]$, $B=[-1;-3]$, $C=[4;-2]$ leží těžnice $t_a$ na přímce:

- **a)** $x+y+1=0$
- **b)** $x-5y-14=0$
- **c)** $3x+3y+14=0$
- **d)** $x-y-7=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x+y+1=0$. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[\dfrac{3}{2};- \dfrac{5}{2}]$.

</details>

### `vl-vse-1167` — Vlastní úloha ve stylu přijímaček VŠE (č. 1167)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V trojúhelníku $A=[2;-2]$, $B=[-3;3]$, $C=[-2;0]$ leží těžnice $t_a$ na přímce:

- **a)** $9x-7y-32=0$
- **b)** $3x+y+6=0$
- **c)** $7x+9y-4=0$
- **d)** $7x+9y+4=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $7x+9y+4=0$. Těžnice $t_a$ spojuje $A$ se středem strany $BC$, tj. s bodem $[- \dfrac{5}{2};\dfrac{3}{2}]$.

</details>

### `vl-obec-015` — Vlastní úloha ve stylu přijímacích testů (č. 15)

*Темы:* 28. Vzájemná poloha přímek, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kosinus odchylky přímek $p:\ y=2x-1$ a $q:\ x=1+t,\ y=2+3t,\ t\in\mathbb R$ je:

- **a)** $\dfrac{7\sqrt2}{10}$
- **b)** $\dfrac{\sqrt2}2$
- **c)** $\dfrac7{10}$
- **d)** $\dfrac{\sqrt5}5$
- **e)** $\dfrac{3\sqrt{10}}{10}$

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{7\sqrt2}{10}$. Směry $(1;2)$ a $(1;3)$: $\frac{7}{\sqrt5\sqrt{10}}$.

</details>

### `vl-obec-087` — Vlastní úloha ve stylu přijímacích testů (č. 87)

*Темы:* 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímky $p:\ x+2y-3=0$ a $q:\ x=1+2t,\ y=1-t,\ t\in\mathbb R$ jsou:

- **a)** totožné
- **b)** rovnoběžné různé
- **c)** kolmé
- **d)** různoběžné, nikoli kolmé
- **e)** Žádná z uvedených možností není správná.

<details><summary>Ответ и решение</summary>

**a** — totožné. Směr $q$ je $(2;-1)$, kolmý k normále $(1;2)$, a bod $[1;1]$ leží na $p$.

</details>

### `vl-vse-0728` — Vlastní úloha ve stylu přijímaček VŠE (č. 728)

*Темы:* 28. Vzájemná poloha přímek, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Napište rovnici přímky, která prochází středem kružnice $x^2+y^2+4x-6y-3=0$ a je kolmá k vektoru $(r;1)$, kde $r$ je poloměr kružnice.

<details><summary>Ответ и решение</summary>

$4x+y+5=0$. Střed $[-2;3]$, $r=4$; normálový vektor $(4;1)$.

</details>

### `vl-vse-0893` — Vlastní úloha ve stylu přijímaček VŠE (č. 893)

*Темы:* 28. Vzájemná poloha přímek, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete parametr $a$ tak, aby přímky $AB$ a $AC$ byly kolmé, je-li $A=[1;-2]$, $B=[a;2]$, $C=[3;-1]$.

<details><summary>Ответ и решение</summary>

$a=-1$. $(a-1;4)\cdot(2;1)=2a-2+4=0$.

</details>

### `vse-vzor-04` — [VŠE, vzorový test z matematiky – FMV (příklad 4, 60 bodů)](https://www.vse.cz/wp-content/uploads/page/153/MAT_vzor-fmv.pdf)

*Темы:* 30. Kuželosečky. Kružnice, 27. Obecná rovnice přímky · *Текст:* текст оригинала (по курсу)

Rovnice tečny kružnice $x^2+y^2-2x-2y-8=0$ v bodě $T=[2,4]$ je

*Встречается также:* VŠE, vzorový test z matematiky – FFÚ a FPH (příklad 4, 6 bodů); VŠE, vzorový test z matematiky – FIS (příklad 4, 5 bodů)

- **a)** $3x-y-2=0$
- **b)** $x-3y+10=0$
- **c)** $3x+y-10=0$
- **d)** $x+3y-14=0$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**d** — $x+3y-14=0$. Střed $S=[1,1]$, $r^2=10$, bod $T$ na kružnici leží. Normálový vektor tečny $\overrightarrow{ST}=(1,3)$: $x+3y+c=0$, z bodu $T$: $c=-14$.

</details>

### `vl-vse-0002` — Vlastní úloha ve stylu přijímaček VŠE (č. 2)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Napište rovnici kružnice, která prochází body $A=[1;1]$, $B=[5;5]$ a má střed na přímce $x+3y-10=0$.

<details><summary>Ответ и решение</summary>

$(x-4)^2+(y-2)^2=10$. Střed leží na ose úsečky $AB$ ($x+y-6=0$) i na dané přímce: $[4;2]$; $r^2=|SA|^2=9+1$.

</details>

### `vl-vse-0006` — Vlastní úloha ve stylu přijímaček VŠE (č. 6)

*Темы:* 30. Kuželosečky. Kružnice, 31. Elipsa, 32. Hyperbola, 33. Parabola · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech bodů $[x;y]$ v rovině, pro které platí $x^2-y^2+10x+12y-2=0$, je:

- **a)** elipsa, která není kružnicí
- **b)** hyperbola
- **c)** kružnice
- **d)** parabola
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — hyperbola. Rozhodují koeficienty u $x^2$ a $y^2$: stejné → kružnice, stejného znaménka → elipsa, opačného → hyperbola, jeden nulový → parabola (po doplnění na čtverec ověříme, že množina není prázdná).

</details>

### `vl-vse-0025` — Vlastní úloha ve stylu přijímaček VŠE (č. 25)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice opsaná trojúhelníku s vrcholy $[1;-4]$, $[5;-2]$, $[4;5]$ má rovnici:

- **a)** $x^2+y^2-2x-2y-23=0$
- **b)** $x^2+y^2+2x+2y-23=0$
- **c)** $x^2+y^2-2x+2y-23=0$
- **d)** $x^2+y^2-2x-2y-24=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x^2+y^2-2x-2y-23=0$. Střed $[1;1]$ je stejně vzdálen od všech tří vrcholů, $r^2=25$.

</details>

### `vl-nsz-054` — [Vlastní úloha ve stylu NSZ Matematika (č. 54)](https://www.scio.cz/matematika)

*Темы:* 30. Kuželosečky. Kružnice, 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je dána kružnice se středem $S$ a poloměrem $r$. Z bodu $M$ vně kružnice ji „vidíme pod úhlem“ $\alpha$, jestliže tečny z $M$ ke kružnici svírají úhel $\alpha$. Množina všech bodů, z nichž kružnici vidíme pod pravým úhlem, je kružnice soustředná s danou o poloměru:

- **a)** $r\sqrt2$
- **b)** $r\sqrt3$
- **c)** $\dfrac32r$
- **d)** $2r$

<details><summary>Ответ и решение</summary>

**a** — $r\sqrt2$. Tečny, poloměry k bodům dotyku a $M$ tvoří čtverec o straně $r$; $|SM|$ je jeho úhlopříčka $r\sqrt2$.

</details>

### `vl-obec-076` — Vlastní úloha ve stylu přijímacích testů (č. 76)

*Темы:* 30. Kuželosečky. Kružnice, 31. Elipsa · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik společných bodů mají kružnice $x^2+y^2=25$ a elipsa $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$?

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $4$
- **e)** nekonečně mnoho

<details><summary>Ответ и решение</summary>

**c** — $2$. Elipsa leží uvnitř kružnice a dotýká se jí v hlavních vrcholech $[\pm5;0]$.

</details>

### `vl-nsz-123` — [Vlastní úloha ve stylu NSZ Matematika (č. 123)](https://www.scio.cz/matematika)

*Темы:* 30. Kuželosečky. Kružnice, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V rovině jsou dány množiny bodů $A:\ x+y=4$ a $B:\ x^2+y^2\le8$. Množina $A\cap B$ je:

- **a)** jeden bod
- **b)** dva různé body
- **c)** úsečka
- **d)** prázdná množina

<details><summary>Ответ и решение</summary>

**a** — jeden bod. Vzdálenost středu $[0;0]$ od přímky je $\frac4{\sqrt2}=2\sqrt2=r$: přímka je tečnou kruhu, společný je jen bod $[2;2]$.

</details>

### `vl-nsz-128` — [Vlastní úloha ve stylu NSZ Matematika (č. 128)](https://www.scio.cz/matematika)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice má rovnici $x^2+y^2-6x+4y-3=0$. Jaká je nejmenší vzdálenost bodu $R=[-3;6]$ od bodů této kružnice?

- **a)** $4$
- **b)** $6$
- **c)** $10$
- **d)** $14$

<details><summary>Ответ и решение</summary>

**b** — $6$. $(x-3)^2+(y+2)^2=16$: střed $[3;-2]$, $r=4$; $|RS|=\sqrt{36+64}=10$, nejmenší vzdálenost $10-4$.

</details>

### `vl-vse-0172` — Vlastní úloha ve stylu přijímaček VŠE (č. 172)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice opsaná trojúhelníku s vrcholy $[-4;0]$, $[0;-2]$, $[5;3]$ má rovnici:

- **a)** $x^2+y^2-6x-16=0$
- **b)** $x^2+y^2+6y-16=0$
- **c)** $x^2+y^2-6y-16=0$
- **d)** $x^2+y^2-6y-17=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x^2+y^2-6y-16=0$. Střed $[0;3]$ je stejně vzdálen od všech tří vrcholů, $r^2=25$.

</details>

### `vl-nsz-177` — [Vlastní úloha ve stylu NSZ Matematika (č. 177)](https://www.scio.cz/matematika)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Čtverec o straně 2 má střed v počátku soustavy souřadnic (natočení čtverce není dáno). Kolik společných bodů má kružnice $x^2+y^2=1$ s obvodem čtverce?

- **a)** žádný
- **b)** $2$
- **c)** $4$
- **d)** Nelze jednoznačně určit.

<details><summary>Ответ и решение</summary>

**c** — $4$. Každá strana čtverce má od středu vzdálenost 1 — kružnice je čtverci vepsaná a dotýká se všech čtyř stran při jakémkoli natočení.

</details>

### `vl-vse-0201` — Vlastní úloha ve stylu přijímaček VŠE (č. 201)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice opsaná trojúhelníku s vrcholy $[-6;1]$, $[2;-3]$, $[-3;-8]$ má rovnici:

- **a)** $x^2+y^2+6x+6y-8=0$
- **b)** $x^2+y^2+6x+6y-7=0$
- **c)** $x^2+y^2+6x-6y-7=0$
- **d)** $x^2+y^2-6x-6y-7=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x^2+y^2+6x+6y-7=0$. Střed $[-3;-3]$ je stejně vzdálen od všech tří vrcholů, $r^2=25$.

</details>

### `vl-vse-0296` — Vlastní úloha ve stylu přijímaček VŠE (č. 296)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice opsaná trojúhelníku s vrcholy $[-6;5]$, $[1;-2]$, $[-7;-2]$ má rovnici:

- **a)** $x^2+y^2+6x-2y-15=0$
- **b)** $x^2+y^2+6x-2y-16=0$
- **c)** $x^2+y^2-6x+2y-15=0$
- **d)** $x^2+y^2-2x+6y-15=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x^2+y^2+6x-2y-15=0$. Střed $[-3;1]$ je stejně vzdálen od všech tří vrcholů, $r^2=25$.

</details>

### `vl-vse-0305` — Vlastní úloha ve stylu přijímaček VŠE (č. 305)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2-6x-6y+14=0$ a $k_2:\ x^2+y^2-16x-30y+288=0$ je rovna:

- **a)** $13$
- **b)** $\sqrt{173}$
- **c)** $14$
- **d)** $169$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $13$. Středy $[3;3]$ a $[8;15]$.

</details>

### `vl-vse-0371` — Vlastní úloha ve stylu přijímaček VŠE (č. 371)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2+10x-2y+17=0$ a $k_2:\ x^2+y^2+8x-6y+21=0$ je rovna:

- **a)** $\sqrt{5}$
- **b)** $5$
- **c)** $1 + \sqrt{5}$
- **d)** $3$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $\sqrt{5}$. Středy $[-5;1]$ a $[-4;3]$.

</details>

### `vl-vse-0391` — Vlastní úloha ve stylu přijímaček VŠE (č. 391)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice opsaná trojúhelníku s vrcholy $[-6;5]$, $[12;-1]$, $[2;-11]$ má rovnici:

- **a)** $x^2+y^2-4x+2y-95=0$
- **b)** $x^2+y^2+2x-4y-95=0$
- **c)** $x^2+y^2-4x+2y-96=0$
- **d)** $x^2+y^2+4x-2y-95=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $x^2+y^2-4x+2y-95=0$. Střed $[2;-1]$ je stejně vzdálen od všech tří vrcholů, $r^2=100$.

</details>

### `vl-vse-0396` — Vlastní úloha ve stylu přijímaček VŠE (č. 396)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2-8x+2y+1=0$ a $k_2:\ x^2+y^2-12x-6y+41=0$ je rovna:

- **a)** $20$
- **b)** $2 \sqrt{5}$
- **c)** $2 \sqrt{6}$
- **d)** $1 + 2 \sqrt{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2 \sqrt{5}$. Středy $[4;-1]$ a $[6;3]$.

</details>

### `vl-vse-0432` — Vlastní úloha ve stylu přijímaček VŠE (č. 432)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jsou dány kružnice $k_1:\ x^2+y^2-6x+8y=0$ a $k_2:\ x^2+y^2+2x-2y-7=0$. Vypočtěte vzdálenost jejich středů a rozhodněte o jejich vzájemné poloze.

<details><summary>Ответ и решение</summary>

$|S_1S_2|=\sqrt{41}$; kružnice se protínají ve dvou bodech. Středy $[3;-4]$, $[-1;1]$, poloměry $5$ a $3$: $5-3<\sqrt{41}<5+3$.

</details>

### `vl-vse-0438` — Vlastní úloha ve stylu přijímaček VŠE (č. 438)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice opsaná trojúhelníku s vrcholy $[7;-3]$, $[-3;-13]$, $[3;5]$ má rovnici:

- **a)** $x^2+y^2+6x+6y-83=0$
- **b)** $x^2+y^2-6x-6y-82=0$
- **c)** $x^2+y^2+6x+6y-82=0$
- **d)** $x^2+y^2+6x-6y-82=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x^2+y^2+6x+6y-82=0$. Střed $[-3;-3]$ je stejně vzdálen od všech tří vrcholů, $r^2=100$.

</details>

### `vl-vse-0458` — Vlastní úloha ve stylu přijímaček VŠE (č. 458)

*Темы:* 30. Kuželosečky. Kružnice, 31. Elipsa, 32. Hyperbola, 33. Parabola · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech bodů $[x;y]$ v rovině, pro které platí $-9x^2+4y^2+4x+4y-29=0$, je:

- **a)** parabola
- **b)** elipsa, která není kružnicí
- **c)** kružnice
- **d)** dvojice přímek
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rozhodují koeficienty u $x^2$ a $y^2$: stejné → kružnice, stejného znaménka → elipsa, opačného → hyperbola, jeden nulový → parabola (po doplnění na čtverec ověříme, že množina není prázdná). Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0470` — Vlastní úloha ve stylu přijímaček VŠE (č. 470)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2-2x-4y-11=0$ a $k_2:\ x^2+y^2-6x-12y+41=0$ je rovna:

- **a)** $20$
- **b)** $2 \sqrt{5}$
- **c)** $2 \sqrt{6}$
- **d)** $1 + 2 \sqrt{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $2 \sqrt{5}$. Středy $[1;2]$ a $[3;6]$.

</details>

### `vl-vse-0474` — Vlastní úloha ve stylu přijímaček VŠE (č. 474)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2-8x-4y+16=0$ a $k_2:\ x^2+y^2-10x-10y+49=0$ je rovna:

- **a)** $1 + \sqrt{10}$
- **b)** $\sqrt{14}$
- **c)** $\sqrt{10}$
- **d)** $10$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt{10}$. Středy $[4;2]$ a $[5;5]$.

</details>

### `vl-vse-0555` — Vlastní úloha ve stylu přijímaček VŠE (č. 555)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2+10x-6y+30=0$ a $k_2:\ x^2+y^2+4x-14y+49=0$ je rovna:

- **a)** $6$
- **b)** $\sqrt{29}$
- **c)** $5$
- **d)** $25$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $5$. Středy $[-5;3]$ a $[-2;7]$.

</details>

### `vl-vse-0628` — Vlastní úloha ve stylu přijímaček VŠE (č. 628)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2-6x+0=0$ a $k_2:\ x^2+y^2-16x-24y+183=0$ je rovna:

- **a)** $\sqrt{173}$
- **b)** $169$
- **c)** $14$
- **d)** $13$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $13$. Středy $[3;0]$ a $[8;12]$.

</details>

### `vl-vse-0705` — Vlastní úloha ve stylu přijímaček VŠE (č. 705)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice opsaná trojúhelníku s vrcholy $[3;1]$, $[-4;0]$, $[0;-8]$ má rovnici:

- **a)** $x^2+y^2+6x-16=0$
- **b)** $x^2+y^2+6y-17=0$
- **c)** $x^2+y^2+6y-16=0$
- **d)** $x^2+y^2-6y-16=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $x^2+y^2+6y-16=0$. Střed $[0;-3]$ je stejně vzdálen od všech tří vrcholů, $r^2=25$.

</details>

### `vl-vse-0730` — Vlastní úloha ve stylu přijímaček VŠE (č. 730)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice opsaná trojúhelníku s vrcholy $[4;3]$, $[-1;-2]$, $[-5;0]$ má rovnici:

- **a)** $x^2+y^2+2x-6y-16=0$
- **b)** $x^2+y^2+2x-6y-15=0$
- **c)** $x^2+y^2-2x+6y-15=0$
- **d)** $x^2+y^2-6x+2y-15=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x^2+y^2+2x-6y-15=0$. Střed $[-1;3]$ je stejně vzdálen od všech tří vrcholů, $r^2=25$.

</details>

### `vl-vse-0784` — Vlastní úloha ve stylu přijímaček VŠE (č. 784)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2-4x-4y-8=0$ a $k_2:\ x^2+y^2-10x-12y+36=0$ je rovna:

- **a)** $6$
- **b)** $\sqrt{29}$
- **c)** $5$
- **d)** $25$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $5$. Středy $[2;2]$ a $[5;6]$.

</details>

### `vl-vse-0809` — Vlastní úloha ve stylu přijímaček VŠE (č. 809)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Napište rovnici kružnice se středem $S=[-1;3]$, jejíž tečnou je přímka $3x-4y+5=0$.

<details><summary>Ответ и решение</summary>

$(x+1)^2+(y-3)^2=4$. $r=\frac{|-3-12+5|}5=2$.

</details>

### `vl-vse-0850` — Vlastní úloha ve stylu přijímaček VŠE (č. 850)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2-4x+10y+20=0$ a $k_2:\ x^2+y^2-6x+4y+12=0$ je rovna:

- **a)** $10$
- **b)** $\sqrt{14}$
- **c)** $1 + \sqrt{10}$
- **d)** $\sqrt{10}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $\sqrt{10}$. Středy $[2;-5]$ a $[3;-2]$.

</details>

### `vl-vse-0877` — Vlastní úloha ve stylu přijímaček VŠE (č. 877)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2+6x+6y+14=0$ a $k_2:\ x^2+y^2-2y+0=0$ je rovna:

- **a)** $6$
- **b)** $25$
- **c)** $5$
- **d)** $\sqrt{29}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $5$. Středy $[-3;-3]$ a $[0;1]$.

</details>

### `vl-vse-0908` — Vlastní úloha ve stylu přijímaček VŠE (č. 908)

*Темы:* 30. Kuželosečky. Kružnice, 31. Elipsa, 32. Hyperbola, 33. Parabola · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech bodů $[x;y]$ v rovině, pro které platí $2x^2+5y^2-12x+2y-3=0$, je:

- **a)** parabola
- **b)** hyperbola
- **c)** kružnice
- **d)** dvojice přímek
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Rozhodují koeficienty u $x^2$ a $y^2$: stejné → kružnice, stejného znaménka → elipsa, opačného → hyperbola, jeden nulový → parabola (po doplnění na čtverec ověříme, že množina není prázdná). Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0913` — Vlastní úloha ve stylu přijímaček VŠE (č. 913)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice opsaná trojúhelníku s vrcholy $[-2;-3]$, $[-6;5]$, $[3;2]$ má rovnici:

- **a)** $x^2+y^2-4x+4y-17=0$
- **b)** $x^2+y^2+4x-4y-17=0$
- **c)** $x^2+y^2+4x-4y-18=0$
- **d)** $x^2+y^2+4x+4y-17=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x^2+y^2+4x-4y-17=0$. Střed $[-2;2]$ je stejně vzdálen od všech tří vrcholů, $r^2=25$.

</details>

### `vl-vse-0925` — Vlastní úloha ve stylu přijímaček VŠE (č. 925)

*Темы:* 30. Kuželosečky. Kružnice, 31. Elipsa, 32. Hyperbola, 33. Parabola · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech bodů $[x;y]$ v rovině, pro které platí $x^2+y^2-2x+12y+25=0$, je:

- **a)** kružnice
- **b)** hyperbola
- **c)** parabola
- **d)** elipsa, která není kružnicí
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — kružnice. Rozhodují koeficienty u $x^2$ a $y^2$: stejné → kružnice, stejného znaménka → elipsa, opačného → hyperbola, jeden nulový → parabola (po doplnění na čtverec ověříme, že množina není prázdná).

</details>

### `vl-vse-0931` — Vlastní úloha ve stylu přijímaček VŠE (č. 931)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2-2x-10y+22=0$ a $k_2:\ x^2+y^2-4x-14y+28=0$ je rovna:

- **a)** $1 + \sqrt{5}$
- **b)** $3$
- **c)** $\sqrt{5}$
- **d)** $5$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt{5}$. Středy $[1;5]$ a $[2;7]$.

</details>

### `vl-vse-0934` — Vlastní úloha ve stylu přijímaček VŠE (č. 934)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2+4y-12=0$ a $k_2:\ x^2+y^2-2x+0=0$ je rovna:

- **a)** $5$
- **b)** $\sqrt{5}$
- **c)** $3$
- **d)** $1 + \sqrt{5}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $\sqrt{5}$. Středy $[0;-2]$ a $[1;0]$.

</details>

### `vl-vse-0958` — Vlastní úloha ve stylu přijímaček VŠE (č. 958)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2+4x-10y+13=0$ a $k_2:\ x^2+y^2-2x-18y+57=0$ je rovna:

- **a)** $25$
- **b)** $6$
- **c)** $\sqrt{29}$
- **d)** $5$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $5$. Středy $[-2;5]$ a $[1;9]$.

</details>

### `vl-vse-1023` — Vlastní úloha ve stylu přijímaček VŠE (č. 1023)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2+2x-8y+13=0$ a $k_2:\ x^2+y^2-8x-32y+268=0$ je rovna:

- **a)** $\sqrt{173}$
- **b)** $169$
- **c)** $14$
- **d)** $13$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $13$. Středy $[-1;4]$ a $[4;16]$.

</details>

### `vl-vse-1028` — Vlastní úloha ve stylu přijímaček VŠE (č. 1028)

*Темы:* 30. Kuželosečky. Kružnice, 31. Elipsa, 32. Hyperbola, 33. Parabola · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech bodů $[x;y]$ v rovině, pro které platí $x^2+y^2-6x+8y+21=0$, je:

- **a)** kružnice
- **b)** hyperbola
- **c)** parabola
- **d)** elipsa, která není kružnicí
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — kružnice. Rozhodují koeficienty u $x^2$ a $y^2$: stejné → kružnice, stejného znaménka → elipsa, opačného → hyperbola, jeden nulový → parabola (po doplnění na čtverec ověříme, že množina není prázdná).

</details>

### `vl-vse-1080` — Vlastní úloha ve stylu přijímaček VŠE (č. 1080)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2+4x-8y+16=0$ a $k_2:\ x^2+y^2-2x-16y+64=0$ je rovna:

- **a)** $25$
- **b)** $6$
- **c)** $5$
- **d)** $\sqrt{29}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $5$. Středy $[-2;4]$ a $[1;8]$.

</details>

### `vl-vse-1098` — Vlastní úloha ve stylu přijímaček VŠE (č. 1098)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2+8x+7=0$ a $k_2:\ x^2+y^2+6x-6y+17=0$ je rovna:

- **a)** $4$
- **b)** $1 + \sqrt{10}$
- **c)** $10$
- **d)** $\sqrt{14}$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Středy $[-4;0]$ a $[-3;3]$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1123` — Vlastní úloha ve stylu přijímaček VŠE (č. 1123)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice opsaná trojúhelníku s vrcholy $[13;3]$, $[3;-7]$, $[9;11]$ má rovnici:

- **a)** $x^2+y^2-6x+6y-82=0$
- **b)** $x^2+y^2-6x-6y-82=0$
- **c)** $x^2+y^2-6x-6y-83=0$
- **d)** $x^2+y^2+6x+6y-82=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x^2+y^2-6x-6y-82=0$. Střed $[3;3]$ je stejně vzdálen od všech tří vrcholů, $r^2=100$.

</details>

### `vl-vse-1140` — Vlastní úloha ve stylu přijímaček VŠE (č. 1140)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice opsaná trojúhelníku s vrcholy $[5;6]$, $[-2;-1]$, $[2;-3]$ má rovnici:

- **a)** $x^2+y^2-4x+4y-17=0$
- **b)** $x^2+y^2-4x-4y-17=0$
- **c)** $x^2+y^2-4x-4y-18=0$
- **d)** $x^2+y^2+4x+4y-17=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x^2+y^2-4x-4y-17=0$. Střed $[2;2]$ je stejně vzdálen od všech tří vrcholů, $r^2=25$.

</details>

### `vl-vse-1172` — Vlastní úloha ve stylu přijímaček VŠE (č. 1172)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kružnice opsaná trojúhelníku s vrcholy $[3;7]$, $[-4;0]$, $[5;3]$ má rovnici:

- **a)** $x^2+y^2+6y-16=0$
- **b)** $x^2+y^2-6y-16=0$
- **c)** $x^2+y^2-6x-16=0$
- **d)** $x^2+y^2-6y-17=0$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $x^2+y^2-6y-16=0$. Střed $[0;3]$ je stejně vzdálen od všech tří vrcholů, $r^2=25$.

</details>

### `vl-vse-1184` — Vlastní úloha ve stylu přijímaček VŠE (č. 1184)

*Темы:* 30. Kuželosečky. Kružnice, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vypočtěte souřadnice průsečíků kružnice $x^2+y^2-4x+2y-15=0$ s přímkou, která prochází jejím středem a počátkem soustavy souřadnic.

<details><summary>Ответ и решение</summary>

$[6;-3]$ a $[-2;1]$. Střed $[2;-1]$, $r=\sqrt{20}$; přímka $y=-\frac x2$: $\frac54x^2-5x-15=0$, $x^2-4x-12=0$.

</details>

### `vl-vse-1192` — Vlastní úloha ve stylu přijímaček VŠE (č. 1192)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středů kružnic $k_1:\ x^2+y^2+8x+8y+16=0$ a $k_2:\ x^2+y^2+6x+4y-12=0$ je rovna:

- **a)** $1 + \sqrt{5}$
- **b)** $3$
- **c)** $\sqrt{5}$
- **d)** $5$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $\sqrt{5}$. Středy $[-4;-4]$ a $[-3;-2]$.

</details>

### `vl-vse-1199` — Vlastní úloha ve stylu přijímaček VŠE (č. 1199)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Napište rovnici kružnice, která má střed na ose $x$ a prochází body $A=[1;4]$ a $B=[7;2]$.

<details><summary>Ответ и решение</summary>

$(x-3)^2+y^2=20$. Střed $[s;0]$: $(s-1)^2+16=(s-7)^2+4$, $s=3$.

</details>

### `vl-obec-027` — Vlastní úloha ve stylu přijímacích testů (č. 27)

*Темы:* 31. Elipsa, 28. Vzájemná poloha přímek · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vzdálenost středu elipsy $4x^2+9y^2+16x-18y-11=0$ od přímky $y=-3$ je:

- **a)** $1$
- **b)** $2$
- **c)** $3$
- **d)** $4$
- **e)** $5$

<details><summary>Ответ и решение</summary>

**d** — $4$. $4(x+2)^2+9(y-1)^2=36$, střed $[-2;1]$.

</details>

### `vl-vse-1202` — Vlastní úloha ve stylu přijímaček VŠE (č. 1202)

*Темы:* 33. Parabola · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Parabola má osu $x=2$, tečnu ve vrcholu $y=-3$ a prochází bodem $A=[4;1]$. Napište její rovnici.

<details><summary>Ответ и решение</summary>

$(x-2)^2=y+3$, tj. $y=x^2-4x+1$. $(x-2)^2=2p(y+3)$, z bodu $A$: $4=8p$.

</details>

### `vl-nsz-020` — [Vlastní úloha ve stylu NSZ Matematika (č. 20)](https://www.scio.cz/matematika)

*Темы:* 34. Planimetrie, 9. Funkce (lineární, kvadratická, lomená). Grafy · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Obsah $S$ rovnostranného trojúhelníku jako funkce poloměru $R$ kružnice opsané je:

- **a)** $S=\dfrac{3\sqrt3}4R^2$
- **b)** $S=\dfrac{\sqrt3}4R^2$
- **c)** $S=\dfrac34R^2$
- **d)** $S=\dfrac{\sqrt3}2R^2$

<details><summary>Ответ и решение</summary>

**a** — $S=\dfrac{3\sqrt3}4R^2$. Strana $a=R\sqrt3$, $S=\frac{\sqrt3}4a^2$.

</details>

### `vl-nsz-032` — [Vlastní úloha ve stylu NSZ Matematika (č. 32)](https://www.scio.cz/matematika)

*Темы:* 34. Planimetrie, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je dána kružnice $k(S;r=5\text{ cm})$ a bod $A$, $|AS|=13$ cm. Z bodu $A$ vedeme tečnu ke kružnici s bodem dotyku $T$. Ve kterém intervalu leží velikost úhlu $SAT$?

- **a)** $(0^\circ;30^\circ\rangle$
- **b)** $(30^\circ;45^\circ\rangle$
- **c)** $(45^\circ;60^\circ\rangle$
- **d)** $(60^\circ;90^\circ)$

<details><summary>Ответ и решение</summary>

**a** — $(0^\circ;30^\circ\rangle$. Trojúhelník $SAT$ je pravoúhlý s pravým úhlem u $T$: $\sin\angle SAT=\frac5{13}<\frac12$, úhel je menší než $30^\circ$.

</details>

### `vl-obec-041` — Vlastní úloha ve stylu přijímacích testů (č. 41)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ve čtverci $ABCD$ o straně $a$ narýsujeme čtvrtkružnici se středem $A$ a čtvrtkružnici se středem $C$, obě o poloměru $a$. Jaký obsah má společná část obou čtvrtkruhů?

- **a)** $a^2\left(\frac\pi2-1\right)$
- **b)** $a^2\left(1-\frac\pi4\right)$
- **c)** $\frac{\pi a^2}4$
- **d)** $a^2(\pi-2)$
- **e)** $\frac{a^2}2$

<details><summary>Ответ и решение</summary>

**a** — $a^2\left(\frac\pi2-1\right)$. Součet obsahů čtvrtkruhů minus čtverec: $2\cdot\frac{\pi a^2}4-a^2$.

</details>

### `vl-nsz-055` — [Vlastní úloha ve stylu NSZ Matematika (č. 55)](https://www.scio.cz/matematika)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V rovnoběžníku $ABCD$ leží bod $E$ na straně $AB$ tak, že $|AE|=\frac13|AB|$, a bod $F$ je střed strany $AD$. Jaký je poměr obsahu trojúhelníku $AEF$ a obsahu rovnoběžníku?

- **a)** $\dfrac16$
- **b)** $\dfrac18$
- **c)** $\dfrac1{12}$
- **d)** $\dfrac1{18}$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac1{12}$. $S_{AEF}=\frac12\cdot\frac{|AB|}3\cdot\frac{|AD|}2\sin\alpha=\frac1{12}|AB||AD|\sin\alpha$.

</details>

### `vl-obec-072` — Vlastní úloha ve stylu přijímacích testů (č. 72)

*Темы:* 34. Planimetrie, 14. Goniometrické funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V rovnoběžníku $ABCD$ je $|AB|=8$ cm, $|AD|=5$ cm a úhlopříčka $|BD|=7$ cm. Určete velikost vnitřního úhlu při vrcholu $A$.

<details><summary>Ответ и решение</summary>

$60^\circ$. Kosinová věta v $ABD$: $\cos\alpha=\frac{64+25-49}{80}=\frac12$.

</details>

### `vl-obec-084` — Vlastní úloha ve stylu přijímacích testů (č. 84)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kruh má obsah $16\pi$ cm$^2$. Délka oblouku, který přísluší středovému úhlu $135^\circ$, je:

- **a)** $\pi$ cm
- **b)** $2\pi$ cm
- **c)** $3\pi$ cm
- **d)** $4\pi$ cm
- **e)** $6\pi$ cm

<details><summary>Ответ и решение</summary>

**c** — $3\pi$ cm. $r=4$; $\frac{135}{360}\cdot8\pi$.

</details>

### `vl-nsz-093` — [Vlastní úloha ve stylu NSZ Matematika (č. 93)](https://www.scio.cz/matematika)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Do kruhu o poloměru $r$ je vepsán rovnostranný trojúhelník. Poměr obsahu kruhu a obsahu trojúhelníku je:

- **a)** $\dfrac{4\pi}{3\sqrt3}$
- **b)** $\dfrac{\pi}{\sqrt3}$
- **c)** $\dfrac{2\pi}3$
- **d)** $\dfrac{4\pi}3$

<details><summary>Ответ и решение</summary>

**a** — $\dfrac{4\pi}{3\sqrt3}$. Strana $r\sqrt3$, obsah $\frac{\sqrt3}4\cdot3r^2=\frac{3\sqrt3}4r^2$.

</details>

### `vl-nsz-147` — [Vlastní úloha ve stylu NSZ Matematika (č. 147)](https://www.scio.cz/matematika)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Dvě běžecké dráhy mají tvar mezikruží. První je ohraničena kružnicemi o poloměrech 20 m a 25 m, druhá 25 m a 30 m. Jaký je poměr obsahů první a druhé dráhy?

- **a)** $4:5$
- **b)** $9:11$
- **c)** $16:25$
- **d)** $4:9$

<details><summary>Ответ и решение</summary>

**b** — $9:11$. $(25^2-20^2):(30^2-25^2)=225:275=9:11$.

</details>

### `vl-nsz-148` — [Vlastní úloha ve stylu NSZ Matematika (č. 148)](https://www.scio.cz/matematika)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Nad stranou $CD$ čtverce $ABCD$ je vně sestrojen rovnostranný trojúhelník $CDE$. Jak velký je úhel $AEB$?

- **a)** $15^\circ$
- **b)** $30^\circ$
- **c)** $45^\circ$
- **d)** $60^\circ$

<details><summary>Ответ и решение</summary>

**b** — $30^\circ$. $\angle ADE=150^\circ$ a $|AD|=|DE|$, takže $\angle DEA=15^\circ$; stejně $\angle CEB=15^\circ$, zbývá $60^\circ-30^\circ$.

</details>

### `vl-nsz-166` — [Vlastní úloha ve stylu NSZ Matematika (č. 166)](https://www.scio.cz/matematika)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V rovině leží 5 různých přímek. Na kolik nejméně a nejvýše částí mohou rovinu rozdělit?

- **a)** nejméně 6, nejvýše 15
- **b)** nejméně 6, nejvýše 16
- **c)** nejméně 5, nejvýše 16
- **d)** nejméně 10, nejvýše 16

<details><summary>Ответ и решение</summary>

**b** — nejméně 6, nejvýše 16. Nejméně: rovnoběžky, $5+1=6$. Nejvíce: každá nová přímka protne všechny předchozí a přidá o jednu část víc, $1+1+2+3+4+5=16$.

</details>

### `vl-nsz-185` — [Vlastní úloha ve stylu NSZ Matematika (č. 185)](https://www.scio.cz/matematika)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pravidelný šestiúhelník a rovnostranný trojúhelník mají stejný obvod. Jaký je poměr obsahu šestiúhelníku a obsahu trojúhelníku?

- **a)** $3:2$
- **b)** $2:1$
- **c)** $4:3$
- **d)** $3:1$

<details><summary>Ответ и решение</summary>

**a** — $3:2$. Strana šestiúhelníku $s$, trojúhelníku $2s$: $\frac{3\sqrt3}2s^2:\sqrt3s^2$.

</details>

### `vl-obec-024` — Vlastní úloha ve stylu přijímacích testů (č. 24)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rotační kužel má poloměr podstavy 6 cm a stranu (površku) 10 cm. Jeho objem je:

- **a)** $96\pi$ cm$^3$
- **b)** $120\pi$ cm$^3$
- **c)** $288\pi$ cm$^3$
- **d)** $100\pi$ cm$^3$
- **e)** $60\pi$ cm$^3$

<details><summary>Ответ и решение</summary>

**a** — $96\pi$ cm$^3$. $v=8$; $\frac13\pi\cdot36\cdot8$.

</details>

### `vl-obec-036` — Vlastní úloha ve stylu přijímacích testů (č. 36)

*Темы:* 35. Stereometrie, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaká je odchylka tělesové úhlopříčky $AG$ a stěnové úhlopříčky $BD$ v krychli $ABCDEFGH$?

- **a)** $30^\circ$
- **b)** $45^\circ$
- **c)** $60^\circ$
- **d)** $90^\circ$
- **e)** $120^\circ$

<details><summary>Ответ и решение</summary>

**d** — $90^\circ$. Pro krychli o hraně 1: $\overrightarrow{AG}=(1;1;1)$, $\overrightarrow{BD}=(-1;1;0)$, skalární součin je 0.

</details>

### `vl-nsz-045` — [Vlastní úloha ve stylu NSZ Matematika (č. 45)](https://www.scio.cz/matematika)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rotační kužel s poloměrem podstavy $r$ a výškou $h$ má stejný objem jako pravidelný čtyřboký hranol s podstavnou hranou $a$ a výškou $h$. Pak $a$ je rovno:

- **a)** $r\sqrt{\dfrac\pi3}$
- **b)** $\dfrac{r\sqrt\pi}3$
- **c)** $r\sqrt{3\pi}$
- **d)** $\dfrac{\pi r}3$

<details><summary>Ответ и решение</summary>

**a** — $r\sqrt{\dfrac\pi3}$. $\frac13\pi r^2h=a^2h$.

</details>

### `vl-obec-073` — Vlastní úloha ve stylu přijímacích testů (č. 73)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik litrů vody se vejde do akvária tvaru koule o průměru 60 cm, má-li být naplněno ze 75 % objemu? Zaokrouhlete na celé litry.

<details><summary>Ответ и решение</summary>

$85$ litrů. $\frac43\pi\cdot30^3\approx113\,097$ cm$^3$, z toho 75 % je asi $84{,}8$ l.

</details>

### `vl-nsz-091` — [Vlastní úloha ve stylu NSZ Matematika (č. 91)](https://www.scio.cz/matematika)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kužel, válec a hranol mají obsahy podstav v poměru $3:2:4$. Kužel a válec mají stejnou výšku, hranol poloviční. Jaký je poměr objemů kužele, válce a hranolu?

- **a)** $1:2:2$
- **b)** $3:2:2$
- **c)** $1:2:4$
- **d)** $3:6:2$

<details><summary>Ответ и решение</summary>

**a** — $1:2:2$. $V=\frac13\cdot3v=v$, $2v$, $4\cdot\frac v2=2v$.

</details>

### `vl-nsz-120` — [Vlastní úloha ve stylu NSZ Matematika (č. 120)](https://www.scio.cz/matematika)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Válcový kolík má průměr 8 mm. Jeho konec chceme zahrotit do pravidelného kužele, jehož špička bude 15 mm od místa, kde zahrocení začíná (kužel má stejnou podstavu jako kolík). Ve kterém intervalu leží objem odstraněného materiálu v mm$^3$?

- **a)** $(400;450\rangle$
- **b)** $(450;500\rangle$
- **c)** $(500;550\rangle$
- **d)** $(550;600\rangle$

<details><summary>Ответ и решение</summary>

**c** — $(500;550\rangle$. Odebere se válec bez kužele, tj. $\frac23$ válce: $\frac23\pi\cdot4^2\cdot15=160\pi\approx503$.

</details>

### `vl-nsz-130` — [Vlastní úloha ve stylu NSZ Matematika (č. 130)](https://www.scio.cz/matematika)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Nádobka má tvar pravidelného čtyřbokého jehlanu bez podstavy a stojí vrcholem dolů, podstavou vodorovně nahoře. Po nalití 20 ml vody sahá hladina 4 cm nad vrchol. Kolik cm nad vrcholem bude hladina, když přilijeme dalších 520 ml?

- **a)** $8$
- **b)** $12$
- **c)** $16$
- **d)** $27$

<details><summary>Ответ и решение</summary>

**b** — $12$. Objem vody roste s třetí mocninou výšky: $\frac{540}{20}=27=3^3$, výška se ztrojnásobí na 12 cm.

</details>

### `vl-nsz-170` — [Vlastní úloha ve stylu NSZ Matematika (č. 170)](https://www.scio.cz/matematika)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Máme kouli o poloměru $r$, krychli o hraně $\frac32r$, válec o poloměru podstavy $r$ a výšce $r$ a pravidelný čtyřboký jehlan s podstavnou hranou $3r$ a výškou $r$. Jak jsou seřazena vzestupně podle objemu?

- **a)** jehlan, válec, krychle, koule
- **b)** válec, jehlan, krychle, koule
- **c)** jehlan, krychle, válec, koule
- **d)** krychle, jehlan, válec, koule

<details><summary>Ответ и решение</summary>

**a** — jehlan, válec, krychle, koule. Objemy v násobcích $r^3$: jehlan $3$, válec $\pi$, krychle $3{,}375$, koule $\frac43\pi\approx4{,}19$.

</details>

### `vse-a-01` — [VŠE, vzor přijímacích zkoušek A (úloha 1)](https://www.vse.cz/wp-content/uploads/page/2128/test-A.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу)

Výraz $\left(\dfrac{m+1}{m+2}-\dfrac{m-1}{m-2}\right)\cdot\dfrac{m^2-4}{2m}$ je pro $m\ne0\wedge m\ne\pm2$ roven

- **a)** $1$
- **b)** $-1$
- **c)** $m$
- **d)** $-\dfrac2m$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $-1$. $\dfrac{(m+1)(m-2)-(m-1)(m+2)}{m^2-4}=\dfrac{-2m}{m^2-4}$, po vynásobení $\dfrac{m^2-4}{2m}$ zbude $-1$.

</details>

### `vse-a-11` — [VŠE, vzor přijímacích zkoušek A (úloha 11)](https://www.vse.cz/wp-content/uploads/page/2128/test-A.pdf)

*Темы:* Ostatní · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE DÚ 3, D10 (pool přijímaček)

Ve třídě je 10 studentů. Jejich průměrný počet bodů z testu je 75. Nejlepší student získal o 40 % více bodů než je průměr a nejhorší student získal o dvě třetiny méně bodů než nejlepší student. Pak průměrný počet bodů zbylých 8 studentů leží v intervalu

- **a)** $(60;65\rangle$
- **b)** $(65;70\rangle$
- **c)** $(70;75\rangle$
- **d)** $(75;80\rangle$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**d** — $76{,}25$. Součet $750$; nejlepší $105$, nejhorší $105-70=35$; zbylých osm: $\frac{750-140}{8}=76{,}25$.

</details>

### `vl-obec-004` — Vlastní úloha ve stylu přijímacích testů (č. 4)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jsou-li kladná čísla $p$, $p+2$ a $p+4$ prvočísla, je číslo $p^2+2$:

- **a)** prvočíslo
- **b)** dělitelné dvěma
- **c)** dělitelné třemi
- **d)** dělitelné pěti
- **e)** dělitelné sedmi

<details><summary>Ответ и решение</summary>

**a** — prvočíslo. Jedno z čísel $p$, $p+2$, $p+4$ je dělitelné třemi, takže $p=3$ a $p^2+2=11$.

</details>

### `vl-obec-007` — Vlastní úloha ve stylu přijímacích testů (č. 7)

*Темы:* Ostatní, 2. Mocnina. Odmocnina · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro přirozená čísla $a$, $b$ platí $54=a^a\left(a^b-b\right)$. Číslo $b$ je rovno:

- **a)** $1$
- **b)** $2$
- **c)** $3$
- **d)** $4$
- **e)** Taková čísla neexistují.

<details><summary>Ответ и решение</summary>

**a** — $1$. $a^a$ dělí 54 jen pro $a=1$ nebo $a=3$; $a=1$ dává $1-b=54$ — nelze. Pro $a=3$: $3^b-b=2$, tedy $b=1$.

</details>

### `vl-obec-012` — Vlastní úloha ve stylu přijímacích testů (č. 12)

*Темы:* Ostatní, 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Paní Nováková uložila 50 000 Kč na 2 roky s roční úrokovou sazbou 3 %. Úrok se připisuje vždy po roce a daň z úroku je 15 %. Kolik korun bude mít po dvou letech (zaokrouhlete na koruny)?

<details><summary>Ответ и решение</summary>

$52\,583$ Kč. Čistý úrok $3\cdot0{,}85=2{,}55$ %: $50\,000\cdot1{,}0255^2\approx52\,582{,}5$.

</details>

### `vl-nsz-014` — [Vlastní úloha ve stylu NSZ Matematika (č. 14)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro reálná čísla $a$, $b$ platí $a=b+2$ a $a+b+1\ne0$. Jakou hodnotu má výraz $\dfrac{a^2-b^2+a-b}{a+b+1}$?

- **a)** $-2$
- **b)** $1$
- **c)** $2$
- **d)** Hodnotu nelze jednoznačně určit.

<details><summary>Ответ и решение</summary>

**c** — $2$. Čitatel je $(a-b)(a+b)+(a-b)=(a-b)(a+b+1)$, výraz se rovná $a-b=2$.

</details>

### `vl-nsz-015` — [Vlastní úloha ve stylu NSZ Matematika (č. 15)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Které tvrzení není pravdivé?

- **a)** Součet každých pěti po sobě jdoucích celých čísel je dělitelný 5.
- **b)** Součin každých tří po sobě jdoucích celých čísel je dělitelný 6.
- **c)** Součet každých dvou po sobě jdoucích lichých čísel je dělitelný 4.
- **d)** Součet každých šesti po sobě jdoucích celých čísel je dělitelný 6.

<details><summary>Ответ и решение</summary>

**d** — Součet každých šesti po sobě jdoucích celých čísel je dělitelný 6.. $n+(n+1)+\dots+(n+5)=6n+15$ — při dělení šesti dává zbytek 3.

</details>

### `vl-nsz-019` — [Vlastní úloha ve stylu NSZ Matematika (č. 19)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Součet dvou čísel $x>y$ je $s\ne0$ a rozdíl jejich druhých mocnin $x^2-y^2$ je roven $6s$. Jaký je aritmetický průměr čísel $x$ a $y$?

- **a)** $x-6$
- **b)** $x-3$
- **c)** $x-2$
- **d)** $x+3$

<details><summary>Ответ и решение</summary>

**b** — $x-3$. $x^2-y^2=(x-y)s=6s$, tedy $y=x-6$ a průměr je $\frac{2x-6}2=x-3$.

</details>

### `vl-nsz-028` — [Vlastní úloha ve stylu NSZ Matematika (č. 28)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ve směsi byly ořechy a rozinky v hmotnostním poměru $5:3$. Sušením ztratily obě složky 20 % hmotnosti a rozdíl hmotností ořechů a rozinek pak činil 64 g. Jaká byla hmotnost směsi před sušením?

- **a)** $256$ g
- **b)** $320$ g
- **c)** $400$ g
- **d)** $480$ g

<details><summary>Ответ и решение</summary>

**b** — $320$ g. Před sušením byl rozdíl $64:0{,}8=80$ g, tj. 2 díly; díl $40$ g, celkem 8 dílů $=320$ g.

</details>

### `vl-obec-044` — Vlastní úloha ve stylu přijímacích testů (č. 44)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výraz $\dfrac{x^2-9}{x^2+6x+9}\cdot\dfrac{x+3}{3-x}$ je pro přípustná $x$ roven:

- **a)** $-1$
- **b)** $1$
- **c)** $\dfrac{x-3}{x+3}$
- **d)** $\dfrac{x+3}{x-3}$
- **e)** $0$

<details><summary>Ответ и решение</summary>

**a** — $-1$. $\frac{(x-3)(x+3)}{(x+3)^2}\cdot\frac{x+3}{-(x-3)}=-1$.

</details>

### `vl-nsz-048` — [Vlastní úloha ve stylu NSZ Matematika (č. 48)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Do políček čtverce $3\times3$ vepíšeme sudá čísla $2,4,\dots,18$ (každé jednou) tak, aby součty ve všech řádcích, sloupcích i obou úhlopříčkách byly stejné. V prostředním políčku pak:

- **a)** musí být číslo 10
- **b)** může být kterékoli z čísel 6 až 14
- **c)** může být kterékoli číslo dělitelné čtyřmi
- **d)** může být kterékoli z daných čísel

<details><summary>Ответ и решение</summary>

**a** — musí být číslo 10. Součet všech čísel je 90, řádek tedy dává 30. Sečtením prostředního řádku, sloupce a obou úhlopříček ($4\cdot30$) se prostřední číslo započítá čtyřikrát a ostatní jednou: $90+3s=120$, $s=10$.

</details>

### `vl-nsz-051` — [Vlastní úloha ve stylu NSZ Matematika (č. 51)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech kořenů rovnice $\dfrac{x+1}{x-4}-\dfrac{x-4}{x+1}=\dfrac{(x+1)^2-(x-4)^2}{(x-4)(x+1)}$ je:

- **a)** $\{-1;4\}$
- **b)** $\mathbb R$
- **c)** $(4;\infty)$
- **d)** $\mathbb R\setminus\{-1;4\}$

<details><summary>Ответ и решение</summary>

**d** — $\mathbb R\setminus\{-1;4\}$. Po společném jmenovateli jsou obě strany stejné — rovnost platí pro všechna $x$, kde je definována.

</details>

### `vl-obec-053` — Vlastní úloha ve stylu přijímacích testů (č. 53)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Hodiny odbíjejí každou půlhodinu jedním úderem a každou celou hodinu tolikrát, kolik ukazují hodin (1 až 12). Kolik úderů odbijí za jeden den?

<details><summary>Ответ и решение</summary>

$180$. Za 12 hodin: $1+2+\dots+12=78$ úderů na celé hodiny a 12 půlhodin, celkem 90; za den dvakrát tolik.

</details>

### `vl-nsz-059` — [Vlastní úloha ve stylu NSZ Matematika (č. 59)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na trhu jsou jen 4 slepice plemene A, 4 plemene B, 4 plemene C a 4 plemene D. Farmář chce koupit 10 slepic. Slepice A snese každý den vejce za 4 Kč, slepice B každý druhý den vejce za 7 Kč, slepice C dvakrát týdně vejce za 13 Kč a slepice D třikrát týdně vejce za 9 Kč. Které slepice má koupit, aby vejce měla za rok co největší hodnotu?

- **a)** 4 A, 4 D, 2 C
- **b)** 4 A, 4 C, 2 D
- **c)** 4 D, 4 C, 2 B
- **d)** 4 A, 4 B, 2 D

<details><summary>Ответ и решение</summary>

**a** — 4 A, 4 D, 2 C. Týdenní hodnota: A $28$ Kč, D $27$ Kč, C $26$ Kč, B $24{,}5$ Kč. Vezmeme 4 A, 4 D a zbylé 2 z C.

</details>

### `vl-obec-063` — Vlastní úloha ve stylu přijímacích testů (č. 63)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Výnosy deseti polí (v q/ha) jsou: 52,1; 48,4; 50,6; 47,9; 53,0; 49,5; 51,2; 46,8; 50,1; 50,4. O kolik se liší jejich aritmetický průměr a medián?

- **a)** o 0,05
- **b)** o 0,15
- **c)** o 0,25
- **d)** o 0,35
- **e)** o 0,5

<details><summary>Ответ и решение</summary>

**c** — o 0,25. Průměr $50{,}0$; medián je průměr 5. a 6. hodnoty po seřazení, $\frac{50{,}1+50{,}4}2=50{,}25$.

</details>

### `vl-nsz-065` — [Vlastní úloha ve stylu NSZ Matematika (č. 65)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Který výraz je třeba dosadit za otazník, aby rovnost $\dfrac x{x-2}-\dfrac{?}{x^2-4}=\dfrac{x+1}{x+2}$ platila pro všechna $x\ne\pm2$?

- **a)** $3x+2$
- **b)** $3x-2$
- **c)** $x+2$
- **d)** $x-2$

<details><summary>Ответ и решение</summary>

**a** — $3x+2$. Po vynásobení $x^2-4$: $x(x+2)-?=(x+1)(x-2)$, tedy $?=x^2+2x-(x^2-x-2)=3x+2$.

</details>

### `vl-nsz-068` — [Vlastní úloha ve stylu NSZ Matematika (č. 68)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kladné celé číslo $n$ je dělitelné pěti a číslo $n-1$ je dělitelem čísla 48. Pak číslo $\dfrac n5$ je:

- **a)** liché celé číslo
- **b)** sudé celé číslo
- **c)** racionální číslo, které není celé
- **d)** žádné takové $n$ neexistuje

<details><summary>Ответ и решение</summary>

**a** — liché celé číslo. $n-1\in\{1,2,3,4,6,8,12,16,24,48\}$, tedy $n\in\{2,3,4,5,7,9,13,17,25,49\}$; pětkou dělitelná jsou $5$ a $25$, podíl $1$ nebo $5$.

</details>

### `vl-nsz-078` — [Vlastní úloha ve stylu NSZ Matematika (č. 78)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Měsíc začíná ve středu. O kolik nejméně dní by musel mít víc než 30, aby jeho posledním dnem bylo úterý?

- **a)** o 2
- **b)** o 3
- **c)** o 4
- **d)** o 5

<details><summary>Ответ и решение</summary>

**d** — o 5. Den číslo $n$ je úterý, právě když $n-1$ dává při dělení sedmi zbytek 6, tedy $n$ je násobek 7. Nejbližší vyšší než 30 je 35.

</details>

### `vl-obec-081` — Vlastní úloha ve stylu přijímacích testů (č. 81)

*Темы:* Ostatní, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro všechna $a,b,c$, kde $a\ne b$ a $c\ne3b$, má platit $\dfrac{a-b}X=\dfrac{0{,}25(b-a)}{c-3b}$. Výraz $X$ je:

- **a)** $12b-4c$
- **b)** $4c-12b$
- **c)** $\dfrac{c-3b}4$
- **d)** $3b-c$
- **e)** $c-12b$

<details><summary>Ответ и решение</summary>

**a** — $12b-4c$. $X=\frac{(a-b)(c-3b)}{0{,}25(b-a)}=-4(c-3b)$.

</details>

### `vl-obec-091` — Vlastní úloha ve stylu přijímacích testů (č. 91)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Negací výroku „Některá prvočísla jsou sudá“ je výrok:

- **a)** Všechna prvočísla jsou sudá.
- **b)** Žádné prvočíslo není sudé.
- **c)** Některá prvočísla nejsou sudá.
- **d)** Všechna prvočísla jsou lichá a některá sudá.
- **e)** Žádná z uvedených možností není správná.

<details><summary>Ответ и решение</summary>

**b** — Žádné prvočíslo není sudé.. Negace „existuje prvočíslo, které je sudé“ zní „neexistuje sudé prvočíslo“.

</details>

### `vl-obec-096` — Vlastní úloha ve stylu přijímacích testů (č. 96)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V krabici je 50 červených a 50 modrých ponožek. Kolik nejméně ponožek musíme vytáhnout naslepo, abychom měli jistě aspoň 5 červených a aspoň 2 modré?

- **a)** $7$
- **b)** $52$
- **c)** $54$
- **d)** $55$
- **e)** $57$

<details><summary>Ответ и решение</summary>

**d** — $55$. V nejhorším případě vytáhneme všech 50 modrých a 4 červené (54 kusů); pak už stačí jedna další.

</details>

### `vl-nsz-118` — [Vlastní úloha ve stylu NSZ Matematika (č. 118)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V roce $R$ připadl 1. březen na čtvrtek. Rok $R+1$ je přestupný. Na jaký den připadne 1. březen roku $R+1$?

- **a)** na pátek
- **b)** na sobotu
- **c)** na neděli
- **d)** na pondělí

<details><summary>Ответ и решение</summary>

**b** — na sobotu. Mezi 1. 3. roku $R$ a 1. 3. roku $R+1$ leží 29. únor, je to tedy 366 dní $=52$ týdnů a 2 dny.

</details>

### `vl-nsz-156` — [Vlastní úloha ve stylu NSZ Matematika (č. 156)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik nejvýše prvočísel může ležet mezi dvěma po sobě jdoucími kladnými násobky čísla 6?

- **a)** jedno
- **b)** dvě
- **c)** tři
- **d)** čtyři

<details><summary>Ответ и решение</summary>

**b** — dvě. Mezi $6k$ a $6k+6$ mohou být prvočísly jen $6k+1$ a $6k+5$ (ostatní jsou dělitelná 2 nebo 3); např. mezi 6 a 12 leží prvočísla 7 a 11.

</details>

### `vl-nsz-160` — [Vlastní úloha ve stylu NSZ Matematika (č. 160)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaká číslice je na místě desítek čísla $7^{2025}$?

- **a)** $0$
- **b)** $4$
- **c)** $7$
- **d)** $9$

<details><summary>Ответ и решение</summary>

**a** — $0$. $7^4=2401$ končí na $01$, takže $7^{2024}$ končí na $01$ a $7^{2025}$ na $07$.

</details>

### `vl-nsz-173` — [Vlastní úloha ve stylu NSZ Matematika (č. 173)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kontrolor měl u 8 výrobků určit, zda jsou vadné. Dostane 400 Kč, za každé správné určení navíc 50 Kč a za každé chybné mu 50 Kč strhnou. Označil 3 výrobky jako vadné a 5 jako dobré. Ve skutečnosti byl vadný jen 1 výrobek. Kolik nejméně a kolik nejvíce mohl dostat?

- **a)** nejméně 400 Kč, nejvíce 600 Kč
- **b)** nejméně 300 Kč, nejvíce 700 Kč
- **c)** nejméně 400 Kč, nejvíce 800 Kč
- **d)** nejméně 500 Kč, nejvíce 600 Kč

<details><summary>Ответ и решение</summary>

**a** — nejméně 400 Kč, nejvíce 600 Kč. Je-li vadný výrobek mezi třemi označenými, určil správně 6 a chybně 2 ($600$ Kč); jinak 4 a 4 ($400$ Kč).

</details>

### `vl-nsz-174` — [Vlastní úloha ve stylu NSZ Matematika (č. 174)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Eva a Filip hrají deskovou hru s kostkou a mincí a střídají se v hodech. Padne-li házejícímu liché číslo a orel, posune se o hozené číslo dopředu; liché číslo a panna — o hozené číslo dozadu. Padne-li sudé číslo, posune se o polovinu hozeného čísla dopředu soupeř (mince nerozhoduje). Postupně padlo: Eva 5 a orel, Filip 4 a panna, Eva 3 a panna, Filip 6 a orel. O kolik polí se během těchto kol posunula Eva?

- **a)** o 2 pole dopředu
- **b)** o 5 polí dopředu
- **c)** o 7 polí dopředu
- **d)** o 8 polí dopředu

<details><summary>Ответ и решение</summary>

**c** — o 7 polí dopředu. $+5$, $+2$ (Filipova čtyřka), $-3$, $+3$ (Filipova šestka): celkem $+7$.

</details>

### `vl-nsz-182` — [Vlastní úloha ve stylu NSZ Matematika (č. 182)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jakému výrazu je rovno $\dfrac{a^3-b^3}{(a+b)^2-ab}$ pro všechna $a,b$, která nejsou obě nulová?

- **a)** $a-b$
- **b)** $a+b$
- **c)** $\dfrac{a-b}{a+b}$
- **d)** $1$

<details><summary>Ответ и решение</summary>

**a** — $a-b$. $(a+b)^2-ab=a^2+ab+b^2$ a $a^3-b^3=(a-b)(a^2+ab+b^2)$.

</details>

### `vl-nsz-184` — [Vlastní úloha ve stylu NSZ Matematika (č. 184)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Ota, Pája a Radka hrají s kartami očíslovanými 1 až 9. Ota má karty 1 a 6, Pája 3 a 4, Radka 2 a 8. Každý si ze zbylých karet vezme ještě jednu a sečte čísla na svých třech kartách. Jaký je největší možný rozdíl mezi nejvyšším a nejnižším součtem?

- **a)** $5$
- **b)** $6$
- **c)** $7$
- **d)** $8$

<details><summary>Ответ и решение</summary>

**c** — $7$. Zbývají karty 5, 7, 9. Nejvíc pomůže dát Radce 9 (součet 19) a jednomu z ostatních 5 (součet 12): rozdíl 7.

</details>

### `vl-nsz-196` — [Vlastní úloha ve stylu NSZ Matematika (č. 196)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Házíme dvěma kostkami s čísly 1 až 6. Body za hod spočítáme tak, že k součtu hozených čísel přičteme trojnásobek jejich rozdílu (většího a menšího); padnou-li na obou kostkách sudá čísla, výsledek zdvojnásobíme. Kolik nejvíce bodů lze za jeden hod získat?

- **a)** $22$
- **b)** $32$
- **c)** $40$
- **d)** $48$

<details><summary>Ответ и решение</summary>

**c** — $40$. Bez zdvojnásobení nejvýše $1+6+3\cdot5=22$. Se sudými: $2$ a $6$ dává $(8+12)\cdot2=40$, $4$ a $6$ jen $32$, $6$ a $6$ jen $24$.

</details>

### `vl-nsz-202` — [Vlastní úloha ve stylu NSZ Matematika (č. 202)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Čtvercovou podlahu chceme celou pokrýt obdélníkovými dlaždicemi $18\times45$ cm, všemi stejně otočenými, bez překrývání a bez řezání. Podlaha má nejmenší možný rozměr. Kolik dlaždic je potřeba?

- **a)** $6$
- **b)** $10$
- **c)** $15$
- **d)** $20$

<details><summary>Ответ и решение</summary>

**b** — $10$. Strana čtverce je nejmenší společný násobek $90$ cm: $5\cdot2=10$ dlaždic.

</details>

### `vl-nsz-203` — [Vlastní úloha ve stylu NSZ Matematika (č. 203)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Číslo 2 vynásobím třemi, odečtu 1 a s výsledkem provedu tajnou operaci — dostanu $x$. Když tytéž kroky provedu s polovinou čísla 2, dostanu $\frac4{25}x$. Co může být tajnou operací?

- **a)** druhá mocnina
- **b)** přičtení libovolného čísla
- **c)** odečtení libovolného čísla
- **d)** vynásobení libovolným nenulovým číslem

<details><summary>Ответ и решение</summary>

**a** — druhá mocnina. Před tajnou operací máme $5$, resp. $2$. Druhá mocnina dá $25$ a $4$, tj. poměr $\frac4{25}$. Násobení dá poměr $\frac25$ a přičtení libovolného čísla poměr obecně jiný.

</details>

### `vl-vse-0539` — Vlastní úloha ve stylu přijímaček VŠE (č. 539)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Usměrněte zlomek $\dfrac{4}{\sqrt5-1}$.

<details><summary>Ответ и решение</summary>

$\sqrt5+1$. Rozšíříme $\sqrt5+1$: $\frac{4(\sqrt5+1)}{4}$.

</details>

## Уровень 3 — сложный

### `vse-b-10` — [VŠE, vzor přijímacích zkoušek B (úloha 10)](https://vse.cz/wp-content/uploads/page/2128/test-B.pdf)

*Темы:* 1. Množina. Podmnožina, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE DÚ 4, D8 (pool přijímaček)

Atletický klub Pacov má 120 členů a organizoval 3 závody. Nikdo ze členů neabsolvoval 2 závody za sebou. Alespoň jednoho závodu se zúčastnilo 90 % členů klubu. Dvou závodů se zúčastnila jedna třetina členů. Na druhém závodu bylo o 20 členů méně než na prvním a o osm méně než na třetím. Počet členů, kteří absolvovali třetí závod patří do intervalu

- **a)** $(20;30\rangle$
- **b)** $(30;40\rangle$
- **c)** $(40;50\rangle$
- **d)** $(50;60\rangle$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**c** — $48$. Dva závody jen 1. a 3.: $40$ lidí; jen jeden závod: $108-40=68$. Je-li $b$ účastníků 2. závodu: jen 1. $b-20$, jen 3. $b-32$, tedy $3b-52=68$, $b=40$; třetí závod $8+40=48$.

</details>

### `vl-nsz-061` — [Vlastní úloha ve stylu NSZ Matematika (č. 61)](https://www.scio.cz/matematika)

*Темы:* 2. Mocnina. Odmocnina, 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Seřaďte čísla $\pi$, $\sqrt{10}$, $\log_210$, $\dfrac{22}7$ sestupně podle velikosti.

- **a)** $\sqrt{10}>\log_210>\frac{22}7>\pi$
- **b)** $\log_210>\sqrt{10}>\frac{22}7>\pi$
- **c)** $\log_210>\frac{22}7>\sqrt{10}>\pi$
- **d)** $\sqrt{10}>\frac{22}7>\pi>\log_210$

<details><summary>Ответ и решение</summary>

**b** — $\log_210>\sqrt{10}>\frac{22}7>\pi$. $2^{3{,}25}=8\sqrt[4]2<8\cdot1{,}2<10$, proto $\log_210>3{,}25$, zatímco $\sqrt{10}<3{,}17$. Dále $\left(\frac{22}7\right)^2=\frac{484}{49}<10$, takže $\sqrt{10}>\frac{22}7$, a $\frac{22}7=3{,}142\ldots>\pi$.

</details>

### `vse-a-12` — [VŠE, vzor přijímacích zkoušek A (úloha 12)](https://www.vse.cz/wp-content/uploads/page/2128/test-A.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 4, slovní úloha týdne

Na zakázce by pět dělníků začátečníků pracovalo 8 dní, 5 zkušených dělníků 6 dní. Jestliže ale na zakázce bude nejprve tři dni pracovat 6 dělníků začátečníků s dvěma zkušenými dělníky a pak do konce 4 začátečníci se třemi zkušenými dělníky, pak počet dní v nichž by byla celá zakázka zpracována, leží v intervalu

- **a)** $(0;4\rangle$
- **b)** $(4;5\rangle$
- **c)** $(5;6\rangle$
- **d)** $(6;7\rangle$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $4{,}75$ dne. Začátečník $\frac1{40}$, zkušený $\frac1{30}$ zakázky za den. Za 3 dny: $3\left(\frac6{40}+\frac2{30}\right)=\frac{39}{60}$; zbytek $\frac{21}{60}$ při výkonu $\frac15$ za den trvá $1{,}75$ dne.

</details>

### `vse-b-12` — [VŠE, vzor přijímacích zkoušek B (úloha 12)](https://vse.cz/wp-content/uploads/page/2128/test-B.pdf)

*Темы:* 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 3, slovní úloha týdne

Zákazník zaplatil 150 Kč padesáti mincemi, mezi nimiž byly pouze koruny, dvoukoruny, pětikoruny a desetikoruny. Částka zaplacená desetikorunami byla dvojnásobná než částka zaplacená pětikorunami, a zároveň stejná jako částka zaplacená dohromady korunami a dvoukorunami. Z toho vyplývá, že číslo vyjadřující počet dvoukorun leží v intervalu

- **a)** $\langle15;18)$
- **b)** $\langle18;21)$
- **c)** $\langle21;24)$
- **d)** $\langle24;27)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**c** — $22$. Desetikorun $d$ = pětikorun; hodnota $10d+5d+10d=150\Rightarrow d=6$. Jedno- a dvoukorun je $38$ v hodnotě $60$ Kč: $b=22$, $a=16$.

</details>

### `vse-b-08` — [VŠE, vzor přijímacích zkoušek B (úloha 8)](https://vse.cz/wp-content/uploads/page/2128/test-B.pdf)

*Темы:* 4. Rovnice s parametrem, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 4, úloha 12

Množina všech hodnot parametru $a$, pro které má soustava rovnic $\begin{array}{c}3x-6y=1\\5x-ay=2\end{array}$ oba kořeny záporné je

- **a)** $(-\infty;12)$
- **b)** $(10;12)$
- **c)** $(10;\infty)$
- **d)** $(12;\infty)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $(10;12)$. $x=\frac{12-a}{30-3a}$, $y=\frac{1}{30-3a}$. $y<0\Rightarrow a>10$; pak $x<0\Rightarrow 12-a>0$.

</details>

### `vl-obec-045` — Vlastní úloha ve stylu přijímacích testů (č. 45)

*Темы:* 4. Rovnice s parametrem, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro které hodnoty parametru $a$ má rovnice $(a-3)x^2-4x+a=0$ dva různé reálné kořeny?

- **a)** $a\in(-1;4)$
- **b)** $a\in(-1;3)\cup(3;4)$
- **c)** $a\in(-\infty;-1)\cup(4;\infty)$
- **d)** $a\in\langle-1;4\rangle\setminus\{3\}$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $a\in(-1;3)\cup(3;4)$. Musí jít o kvadratickou rovnici ($a\ne3$) s $\frac D4=4-a(a-3)=-(a^2-3a-4)>0$, tj. $(a-4)(a+1)<0$.

</details>

### `vl-nsz-049` — [Vlastní úloha ve stylu NSZ Matematika (č. 49)](https://www.scio.cz/matematika)

*Темы:* 4. Rovnice s parametrem, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je dána funkce $f(x)=kx^2+2x+k-3$, $k\in\mathbb R$. Rovnice $f(x)=-3$ má reálné kořeny, právě když:

- **a)** $k\in\langle-1,1\rangle$
- **b)** $k\in(-1,1)$
- **c)** $k\in\langle-1,0)\cup(0,1\rangle$
- **d)** $k\in(-\infty,-1\rangle\cup\langle1,\infty)$

<details><summary>Ответ и решение</summary>

**a** — $k\in\langle-1,1\rangle$. Rovnice $kx^2+2x+k=0$. Pro $k=0$ má kořen $x=0$; jinak potřebujeme $4-4k^2\ge0$.

</details>

### `vl-obec-065` — Vlastní úloha ve stylu přijímacích testů (č. 65)

*Темы:* 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro které hodnoty parametru $a$ má rovnice $2ax-3=5x+a$ (s neznámou $x$) kladné řešení?

- **a)** $a\in(-3;\frac52)$
- **b)** $a\in(-\infty;-3)\cup\left(\frac52;\infty\right)$
- **c)** $a\in\left(\frac52;\infty\right)$
- **d)** $a\in(-\infty;-3)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $a\in(-\infty;-3)\cup\left(\frac52;\infty\right)$. $x(2a-5)=a+3$; pro $a\ne\frac52$ je $x=\frac{a+3}{2a-5}>0$, tj. čitatel a jmenovatel stejného znaménka. Pro $a=\frac52$ řešení není.

</details>

### `vl-vse-0175` — Vlastní úloha ve stylu přijímaček VŠE (č. 175)

*Темы:* 4. Rovnice s parametrem, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Řešte soustavu $ax+y=2$, $x+ay=2$ v závislosti na parametru $a$.

<details><summary>Ответ и решение</summary>

$a\ne\pm1$: $x=y=\frac2{a+1}$; $a=1$: nekonečně mnoho řešení $[t;2-t]$; $a=-1$: žádné řešení. Odečtením $(a-1)(x-y)=0$. Pro $a\ne1$ je $x=y$ a $(a+1)x=2$.

</details>

### `vl-vse-0425` — Vlastní úloha ve stylu přijímaček VŠE (č. 425)

*Темы:* 4. Rovnice s parametrem, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro které hodnoty reálného parametru $a$ má rovnice $\dfrac{x+a}{2}-\dfrac{x-1}{3}=a$ (s neznámou $x$) záporný kořen?

<details><summary>Ответ и решение</summary>

$a<\frac23$. Vynásobením 6: $3x+3a-2x+2=6a$, tedy $x=3a-2$; kořen je záporný pro $a<\frac23$.

</details>

### `vl-vse-0486` — Vlastní úloha ve stylu přijímaček VŠE (č. 486)

*Темы:* 4. Rovnice s parametrem, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro které hodnoty parametru $m$ má rovnice $x^2+(m-2)x+m+1=0$ dva různé záporné kořeny?

<details><summary>Ответ и решение</summary>

$m>8$. $D=(m-2)^2-4(m+1)=m^2-8m>0$, součet $2-m<0$, součin $m+1>0$.

</details>

### `vl-vse-0757` — Vlastní úloha ve stylu přijímaček VŠE (č. 757)

*Темы:* 4. Rovnice s parametrem, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete, pro které hodnoty parametru $a$ má rovnice $(a-3)x^2-6x+a+5=0$ nejvýše jeden reálný kořen.

<details><summary>Ответ и решение</summary>

$a\in(-\infty;-6\rangle\cup\{3\}\cup\langle4;\infty)$. Pro $a=3$ je rovnice lineární (jeden kořen). Jinak $\frac D4=9-(a-3)(a+5)\le0\iff a^2+2a-24\ge0$.

</details>

### `vl-vse-0625` — Vlastní úloha ve stylu přijímaček VŠE (č. 625)

*Темы:* 6. Nerovnice. Soustava nerovnic, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro které hodnoty parametru $m$ je exponenciální funkce $f(x)=\left(\dfrac{2m+1}{m-3}\right)^x$ rostoucí?

<details><summary>Ответ и решение</summary>

$m\in(-\infty;-4)\cup(3;\infty)$. Potřebujeme $\frac{2m+1}{m-3}>1\iff\frac{m+4}{m-3}>0$.

</details>

### `vl-vse-0871` — Vlastní úloha ve stylu přijímaček VŠE (č. 871)

*Темы:* 6. Nerovnice. Soustava nerovnic, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro které hodnoty parametru $m$ je exponenciální funkce $f(x)=\left(\dfrac{m+2}{2m-1}\right)^x$ klesající?

<details><summary>Ответ и решение</summary>

$m\in(-\infty;-2)\cup(3;\infty)$. Potřebujeme $0<\frac{m+2}{2m-1}<1$.

</details>

### `vse-b-07` — [VŠE, vzor přijímacích zkoušek B (úloha 7)](https://vse.cz/wp-content/uploads/page/2128/test-B.pdf)

*Темы:* 7. Nerovnice s absolutní hodnotou, 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* текст оригинала (по курсу) · *В курсе:* VŠE lekce 7, úloha 10

Maximální definiční obor funkce $f(x)=\dfrac{x+1}{\sqrt{|2x-1|-|x+1|-3}}$ je

- **a)** $(-\infty;0{,}5)\cup(5;\infty)$
- **b)** $(-\infty;-1)\cup(5;\infty)$
- **c)** $(-1;0{,}5)$
- **d)** $(0{,}5;5)$
- **e)** jiná odpověď

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;-1)\cup(5;\infty)$. Potřebujeme $|2x-1|-|x+1|>3$. Pro $x<-1$: $-x>1$ ✓; na $\left\langle-1;\frac12\right)$: $-3x>3$ ✗; pro $x\ge\frac12$: $x-2>3\Rightarrow x>5$.

</details>

### `vl-vse-1011` — Vlastní úloha ve stylu přijímaček VŠE (č. 1011)

*Темы:* 8. Iracionální rovnice. Iracionální nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $\sqrt{x+4}+\sqrt{x-1}=5$.

<details><summary>Ответ и решение</summary>

$x=5$. Po izolaci a dvojím umocnění $\sqrt{x-1}=2$.

</details>

### `vl-vse-0027` — Vlastní úloha ve stylu přijímaček VŠE (č. 27)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|3x+1|-|x|-4}}$ je:

- **a)** $(- \dfrac{5}{2};\dfrac{3}{2})$
- **b)** $(-\infty;- \dfrac{5}{2})\cup(\dfrac{3}{2};\infty)$
- **c)** $(-\infty;- \dfrac{5}{4})\cup(\dfrac{3}{4};\infty)$
- **d)** $(-\infty;- \dfrac{5}{2}\rangle\cup\langle \dfrac{3}{2};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;- \dfrac{5}{2})\cup(\dfrac{3}{2};\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0037` — Vlastní úloha ve stylu přijímaček VŠE (č. 37)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|2x+1|-|x+1|-4}}$ je:

- **a)** $(-\infty;-2)\cup(\dfrac{2}{3};\infty)$
- **b)** $(-\infty;-4\rangle\cup\langle 4;\infty)$
- **c)** $(-4;4)$
- **d)** $(-\infty;-4)\cup(4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;-4)\cup(4;\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0052` — Vlastní úloha ve stylu přijímaček VŠE (č. 52)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|3x+1|-|x+2|-2}}$ je:

- **a)** $(- \dfrac{5}{4};\dfrac{3}{2})$
- **b)** $(-\infty;- \dfrac{5}{4})\cup(\dfrac{3}{2};\infty)$
- **c)** $(-\infty;- \dfrac{1}{2})\cup(- \dfrac{1}{4};\infty)$
- **d)** $(-\infty;- \dfrac{5}{4}\rangle\cup\langle \dfrac{3}{2};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;- \dfrac{5}{4})\cup(\dfrac{3}{2};\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0072` — Vlastní úloha ve stylu přijímaček VŠE (č. 72)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|2x-2|-|x-2|-4}}$ je:

- **a)** $(-\infty;-4\rangle\cup\langle 4;\infty)$
- **b)** $(-4;4)$
- **c)** $(-\infty;0)\cup(\dfrac{8}{3};\infty)$
- **d)** $(-\infty;-4)\cup(4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;-4)\cup(4;\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0102` — Vlastní úloha ve stylu přijímaček VŠE (č. 102)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|3x-2|-|x-3|-1}}$ je:

- **a)** $(-1;\dfrac{3}{2})$
- **b)** $(-\infty;-1\rangle\cup\langle \dfrac{3}{2};\infty)$
- **c)** $(-\infty;-1)\cup(\dfrac{3}{2};\infty)$
- **d)** $\mathbb R$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;-1)\cup(\dfrac{3}{2};\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0130` — Vlastní úloha ve stylu přijímaček VŠE (č. 130)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|2x+1|-|x+2|-2}}$ je:

- **a)** $(- \dfrac{5}{3};3)$
- **b)** $(-\infty;-1)\cup(- \dfrac{1}{3};\infty)$
- **c)** $(-\infty;-3)\cup(\dfrac{5}{3};\infty)$
- **d)** $(-\infty;- \dfrac{5}{3}\rangle\cup\langle 3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0200` — Vlastní úloha ve stylu přijímaček VŠE (č. 200)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|3x-3|-|x|-4}}$ je:

- **a)** $(-\infty;- \dfrac{1}{2}\rangle\cup\langle \dfrac{7}{2};\infty)$
- **b)** $(- \dfrac{1}{2};\dfrac{7}{2})$
- **c)** $(-\infty;- \dfrac{1}{4})\cup(\dfrac{7}{4};\infty)$
- **d)** $(-\infty;- \dfrac{1}{2})\cup(\dfrac{7}{2};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;- \dfrac{1}{2})\cup(\dfrac{7}{2};\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0211` — Vlastní úloha ve stylu přijímaček VŠE (č. 211)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|3x+2|-|x+1|-3}}$ je:

- **a)** $(-\infty;- \dfrac{3}{2})\cup(0;\infty)$
- **b)** $(-\infty;-2\rangle\cup\langle 1;\infty)$
- **c)** $(-\infty;-2)\cup(1;\infty)$
- **d)** $(-2;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;-2)\cup(1;\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0281` — Vlastní úloha ve stylu přijímaček VŠE (č. 281)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 33. Parabola · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Najděte kvadratickou funkci $f(x)=ax^2+bx+c$, jejíž graf prochází body $A=[-1;8]$ a $B=[5;8]$ a dotýká se přímky $y=-1$.

<details><summary>Ответ и решение</summary>

$f(x)=x^2-4x+3$. Vrchol leží na ose souměrnosti $x=2$ a na přímce $y=-1$: $f(x)=a(x-2)^2-1$, z bodu $A$: $9a-1=8$.

</details>

### `vl-vse-0364` — Vlastní úloha ve stylu přijímaček VŠE (č. 364)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|2x-1|-|x+1|-3}}$ je:

- **a)** $(-\infty;-1\rangle\cup\langle 5;\infty)$
- **b)** $(-\infty;-1)\cup(1;\infty)$
- **c)** $(-1;5)$
- **d)** $(-\infty;-1)\cup(5;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;-1)\cup(5;\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0408` — Vlastní úloha ve stylu přijímaček VŠE (č. 408)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|2x|-|x-1|-1}}$ je:

- **a)** $(-\infty;-2)\cup(\dfrac{2}{3};\infty)$
- **b)** $(-\infty;-2\rangle\cup\langle \dfrac{2}{3};\infty)$
- **c)** $(-2;\dfrac{2}{3})$
- **d)** $(-\infty;0)\cup(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;-2)\cup(\dfrac{2}{3};\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0479` — Vlastní úloha ve stylu přijímaček VŠE (č. 479)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|3x|-|x+1|-3}}$ je:

- **a)** $(-\infty;-1)\cup(\dfrac{1}{2};\infty)$
- **b)** $(-\infty;-1\rangle\cup\langle 2;\infty)$
- **c)** $(-\infty;-1)\cup(2;\infty)$
- **d)** $(-1;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;-1)\cup(2;\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0570` — Vlastní úloha ve stylu přijímaček VŠE (č. 570)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|3x+2|-|x|-1}}$ je:

- **a)** $(-\infty;- \dfrac{3}{4})\cup(- \dfrac{1}{2};\infty)$
- **b)** $(-\infty;- \dfrac{3}{2}\rangle\cup\langle - \dfrac{1}{4};\infty)$
- **c)** $(- \dfrac{3}{2};- \dfrac{1}{4})$
- **d)** $(-\infty;- \dfrac{3}{2})\cup(- \dfrac{1}{4};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-\infty;- \dfrac{3}{2})\cup(- \dfrac{1}{4};\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0574` — Vlastní úloha ve stylu přijímaček VŠE (č. 574)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|3x+1|-|x+3|-4}}$ je:

- **a)** $(-\infty;-2\rangle\cup\langle 3;\infty)$
- **b)** $(-\infty;-2)\cup(3;\infty)$
- **c)** $(-\infty;-1)\cup(0;\infty)$
- **d)** $(-2;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;-2)\cup(3;\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0600` — Vlastní úloha ve stylu přijímaček VŠE (č. 600)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|3x-1|-|x-1|-3}}$ je:

- **a)** $(-\infty;- \dfrac{3}{2})\cup(\dfrac{3}{2};\infty)$
- **b)** $(-\infty;- \dfrac{3}{2}\rangle\cup\langle \dfrac{3}{2};\infty)$
- **c)** $(-\infty;- \dfrac{1}{4})\cup(\dfrac{5}{4};\infty)$
- **d)** $(- \dfrac{3}{2};\dfrac{3}{2})$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;- \dfrac{3}{2})\cup(\dfrac{3}{2};\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0754` — Vlastní úloha ve stylu přijímaček VŠE (č. 754)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|2x+3|-|x+3|-4}}$ je:

- **a)** $(-\infty;-4\rangle\cup\langle 4;\infty)$
- **b)** $(-\infty;- \dfrac{10}{3})\cup(- \dfrac{2}{3};\infty)$
- **c)** $(-4;4)$
- **d)** $\mathbb R$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0763` — Vlastní úloha ve stylu přijímaček VŠE (č. 763)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|3x-2|-|x+1|-2}}$ je:

- **a)** $(-\infty;- \dfrac{1}{4}\rangle\cup\langle \dfrac{5}{2};\infty)$
- **b)** $(- \dfrac{1}{4};\dfrac{5}{2})$
- **c)** $(-\infty;- \dfrac{1}{4})\cup(\dfrac{5}{2};\infty)$
- **d)** $(-\infty;\dfrac{1}{2})\cup(\dfrac{3}{4};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;- \dfrac{1}{4})\cup(\dfrac{5}{2};\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0786` — Vlastní úloha ve stylu přijímaček VŠE (č. 786)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|2x-1|-|x|-4}}$ je:

- **a)** $(-\infty;-1)\cup(\dfrac{5}{3};\infty)$
- **b)** $(-\infty;-3\rangle\cup\langle 5;\infty)$
- **c)** $(-\infty;-3)\cup(5;\infty)$
- **d)** $(-3;5)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;-3)\cup(5;\infty)$. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici.

</details>

### `vl-vse-0999` — Vlastní úloha ve stylu přijímaček VŠE (č. 999)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|3x+3|-|x+3|-3}}$ je:

- **a)** $(-\infty;- \dfrac{3}{2})\cup(\dfrac{9}{4};\infty)$
- **b)** $(- \dfrac{9}{4};\dfrac{3}{2})$
- **c)** $(-\infty;- \dfrac{9}{4}\rangle\cup\langle \dfrac{3}{2};\infty)$
- **d)** $(-\infty;- \dfrac{3}{2})\cup(- \dfrac{3}{4};\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1203` — Vlastní úloha ve stylu přijímaček VŠE (č. 1203)

*Темы:* 9. Funkce (lineární, kvadratická, lomená). Grafy, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Definiční obor funkce $f(x)=\dfrac1{\sqrt{|2x-2|-|x+1|-1}}$ je:

- **a)** $\mathbb R$
- **b)** $(-\infty;-4)\cup(0;\infty)$
- **c)** $(0;4)$
- **d)** $(-\infty;0\rangle\cup\langle 4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Pod odmocninou ve jmenovateli musí být kladné číslo. Body, kde jsou výrazy v absolutních hodnotách nulové, rozdělí osu na intervaly; na každém řešíme lineární nerovnici. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0029` — Vlastní úloha ve stylu přijímaček VŠE (č. 29)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\left(\dfrac{m+2}{m}\right)^x$ s parametrem $m\ne0$ je klesající exponenciální funkcí právě pro:

- **a)** $(0;\infty)$
- **b)** $(2;\infty)$
- **c)** $(-\infty;-2)$
- **d)** $(-\infty;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;-2)$. Základ musí být kladný a různý od 1; rostoucí pro základ $>1$, klesající pro základ v $(0;1)$.

</details>

### `vl-vse-0064` — Vlastní úloha ve stylu přijímaček VŠE (č. 64)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\left(\dfrac{m+5}{m}\right)^x$ s parametrem $m\ne0$ je rostoucí exponenciální funkcí právě pro:

- **a)** $(-\infty;0)$
- **b)** $(5;\infty)$
- **c)** $(-\infty;-5)$
- **d)** $(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(0;\infty)$. Základ musí být kladný a různý od 1; rostoucí pro základ $>1$, klesající pro základ v $(0;1)$.

</details>

### `vl-vse-0141` — Vlastní úloha ve stylu přijímaček VŠE (č. 141)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\left(\dfrac{m-2}{m}\right)^x$ s parametrem $m\ne0$ je rostoucí exponenciální funkcí právě pro:

- **a)** $(-\infty;-2)$
- **b)** $(2;\infty)$
- **c)** $(-\infty;0)$
- **d)** $(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-\infty;0)$. Základ musí být kladný a různý od 1; rostoucí pro základ $>1$, klesající pro základ v $(0;1)$.

</details>

### `vl-vse-0415` — Vlastní úloha ve stylu přijímaček VŠE (č. 415)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Uvažujme funkci $f(x)=\left(\dfrac{m+2}{m}\right)^x$ s reálným parametrem $m\ne0$. Množina všech $m$, pro která je $f$ klesající exponenciální funkcí, je:

- **a)** $(-\infty;-2)$
- **b)** $(-2;0)$
- **c)** $(0;\infty)$
- **d)** $(-\infty;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-\infty;-2)$. Základ musí ležet v $(0;1)$. $\frac{m+2}m=1+\frac2m<1\iff m<0$; pak $\frac{m+2}m>0\iff m+2<0$, tedy $m<-2$.

</details>

### `vl-vse-0454` — Vlastní úloha ve stylu přijímaček VŠE (č. 454)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\left(\dfrac{m+1}{m}\right)^x$ s parametrem $m\ne0$ je klesající exponenciální funkcí právě pro:

- **a)** $(-\infty;0)$
- **b)** $(-\infty;-1)$
- **c)** $(0;\infty)$
- **d)** $(1;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;-1)$. Základ musí být kladný a různý od 1; rostoucí pro základ $>1$, klesající pro základ v $(0;1)$.

</details>

### `vl-vse-0513` — Vlastní úloha ve stylu přijímaček VŠE (č. 513)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\left(\dfrac{m-4}{m}\right)^x$ s parametrem $m\ne0$ je klesající exponenciální funkcí právě pro:

- **a)** $(-\infty;0)$
- **b)** $(-\infty;-4)$
- **c)** $(0;\infty)$
- **d)** $(4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(4;\infty)$. Základ musí být kladný a různý od 1; rostoucí pro základ $>1$, klesající pro základ v $(0;1)$.

</details>

### `vl-vse-0621` — Vlastní úloha ve stylu přijímaček VŠE (č. 621)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\left(\dfrac{m-1}{m}\right)^x$ s parametrem $m\ne0$ je klesající exponenciální funkcí právě pro:

- **a)** $(0;\infty)$
- **b)** $(1;\infty)$
- **c)** $(-\infty;0)$
- **d)** $(-\infty;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(1;\infty)$. Základ musí být kladný a různý od 1; rostoucí pro základ $>1$, klesající pro základ v $(0;1)$.

</details>

### `vl-vse-0687` — Vlastní úloha ve stylu přijímaček VŠE (č. 687)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\left(\dfrac{m+4}{m}\right)^x$ s parametrem $m\ne0$ je klesající exponenciální funkcí právě pro:

- **a)** $(4;\infty)$
- **b)** $(-\infty;-4)$
- **c)** $(-\infty;0)$
- **d)** $(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;-4)$. Základ musí být kladný a různý od 1; rostoucí pro základ $>1$, klesající pro základ v $(0;1)$.

</details>

### `vl-vse-0767` — Vlastní úloha ve stylu přijímaček VŠE (č. 767)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\left(\dfrac{m-5}{m}\right)^x$ s parametrem $m\ne0$ je rostoucí exponenciální funkcí právě pro:

- **a)** $(-\infty;-5)$
- **b)** $(0;\infty)$
- **c)** $(-5;0)$
- **d)** $(5;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Základ musí být kladný a různý od 1; rostoucí pro základ $>1$, klesající pro základ v $(0;1)$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1009` — Vlastní úloha ve stylu přijímaček VŠE (č. 1009)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\left(\dfrac{m-1}{m}\right)^x$ s parametrem $m\ne0$ je rostoucí exponenciální funkcí právě pro:

- **a)** $(-1;0)$
- **b)** $(-\infty;-1)$
- **c)** $(1;\infty)$
- **d)** $(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Základ musí být kladný a různý od 1; rostoucí pro základ $>1$, klesající pro základ v $(0;1)$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1132` — Vlastní úloha ve stylu přijímaček VŠE (č. 1132)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\left(\dfrac{m+3}{m}\right)^x$ s parametrem $m\ne0$ je klesající exponenciální funkcí právě pro:

- **a)** $(0;\infty)$
- **b)** $(-\infty;-3)$
- **c)** $(3;\infty)$
- **d)** $(-\infty;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-\infty;-3)$. Základ musí být kladný a různý od 1; rostoucí pro základ $>1$, klesající pro základ v $(0;1)$.

</details>

### `vl-vse-1194` — Vlastní úloha ve stylu přijímaček VŠE (č. 1194)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\left(\dfrac{m+4}{m}\right)^x$ s parametrem $m\ne0$ je rostoucí exponenciální funkcí právě pro:

- **a)** $(4;\infty)$
- **b)** $(0;\infty)$
- **c)** $(-\infty;0)$
- **d)** $(-\infty;-4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(0;\infty)$. Základ musí být kladný a různý od 1; rostoucí pro základ $>1$, klesající pro základ v $(0;1)$.

</details>

### `vl-vse-1210` — Vlastní úloha ve stylu přijímaček VŠE (č. 1210)

*Темы:* 10. Exponenciální funkce, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Funkce $f(x)=\left(\dfrac{m+2}{m}\right)^x$ s parametrem $m\ne0$ je rostoucí exponenciální funkcí právě pro:

- **a)** $(-\infty;-2)$
- **b)** $(0;\infty)$
- **c)** $(2;\infty)$
- **d)** $(-\infty;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(0;\infty)$. Základ musí být kladný a různý od 1; rostoucí pro základ $>1$, klesající pro základ v $(0;1)$.

</details>

### `vl-nsz-011` — [Vlastní úloha ve stylu NSZ Matematika (č. 11)](https://www.scio.cz/matematika)

*Темы:* 11. Exponenciální rovnice a nerovnice, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Kolik kořenů má rovnice $x^{x^2-5x+6}=1$ v oboru kladných reálných čísel?

- **a)** $0$
- **b)** $1$
- **c)** $2$
- **d)** $3$

<details><summary>Ответ и решение</summary>

**d** — $3$. Buď je exponent nulový ($x=2$, $x=3$), nebo je základ $1$ ($x=1$). Celkem tři kořeny.

</details>

### `vl-vse-0015` — Vlastní úloha ve stylu přijímaček VŠE (č. 15)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $7^{x^2-3|x|}<1$, je:

- **a)** $(-3;0)\cup(0;3)$
- **b)** $(-\infty;-3)\cup(3;\infty)$
- **c)** $(-\infty;0)\cup(3;\infty)$
- **d)** $(-3;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-3;0)\cup(0;3)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0020` — Vlastní úloha ve stylu přijímaček VŠE (č. 20)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $4^{x^2-2|x|}<1$, je:

- **a)** $(-\infty;0)\cup(2;\infty)$
- **b)** $(-2;2)$
- **c)** $(-2;0)\cup(0;2)$
- **d)** $(-\infty;-2)\cup(2;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-2;0)\cup(0;2)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0057` — Vlastní úloha ve stylu přijímaček VŠE (č. 57)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $2^{x^2-4|x|}<1$, je:

- **a)** $(-4;4)$
- **b)** $(-\infty;0)\cup(4;\infty)$
- **c)** $(-4;0)\cup(0;4)$
- **d)** $(-\infty;-4)\cup(4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-4;0)\cup(0;4)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0071` — Vlastní úloha ve stylu přijímaček VŠE (č. 71)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $5^{x^2-5|x|}<1$, je:

- **a)** $(-5;5)$
- **b)** $(-\infty;0)\cup(5;\infty)$
- **c)** $(-5;0)\cup(0;5)$
- **d)** $(-\infty;-5)\cup(5;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-5;0)\cup(0;5)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0098` — Vlastní úloha ve stylu přijímaček VŠE (č. 98)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $3^{x^2-4|x|}<1$, je:

- **a)** $(-4;0)\cup(0;4)$
- **b)** $(-\infty;0)\cup(4;\infty)$
- **c)** $(-4;4)$
- **d)** $(-\infty;-4)\cup(4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-4;0)\cup(0;4)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0116` — Vlastní úloha ve stylu přijímaček VŠE (č. 116)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $3^{x^2-3|x|}<1$, je:

- **a)** $(-3;3)$
- **b)** $(-3;0)\cup(0;3)$
- **c)** $(-\infty;0)\cup(3;\infty)$
- **d)** $(-\infty;-3)\cup(3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-3;0)\cup(0;3)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0142` — Vlastní úloha ve stylu přijímaček VŠE (č. 142)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $7^{x^2-5|x|}<1$, je:

- **a)** $(-\infty;0)\cup(5;\infty)$
- **b)** $(-5;5)$
- **c)** $(-\infty;-5)\cup(5;\infty)$
- **d)** $(-5;0)\cup(0;5)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-5;0)\cup(0;5)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0153` — Vlastní úloha ve stylu přijímaček VŠE (č. 153)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $2^{x^2-6|x|}<1$, je:

- **a)** $(-\infty;-6)\cup(6;\infty)$
- **b)** $(-6;6)$
- **c)** $(-6;0)\cup(0;6)$
- **d)** $(-\infty;0)\cup(6;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-6;0)\cup(0;6)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-nsz-178` — [Vlastní úloha ve stylu NSZ Matematika (č. 178)](https://www.scio.cz/matematika)

*Темы:* 11. Exponenciální rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rovnici $9^{\frac{x+1}x}-4\cdot3^{\frac{x+1}x}+3=0$:

- **a)** vyhovuje právě jedno přirozené číslo
- **b)** vyhovuje právě jedno záporné celé číslo
- **c)** vyhovují právě dvě celá čísla
- **d)** nevyhovuje žádné reálné číslo

<details><summary>Ответ и решение</summary>

**b** — vyhovuje právě jedno záporné celé číslo. Pro $t=3^{\frac{x+1}x}$: $t^2-4t+3=0$, $t=1$ nebo $t=3$. Z $t=1$ je $\frac{x+1}x=0$, $x=-1$; $t=3$ by vyžadovalo $\frac{x+1}x=1$ — nemá řešení.

</details>

### `vl-vse-0197` — Vlastní úloha ve stylu přijímaček VŠE (č. 197)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $4^{x^2-5|x|}<1$, je:

- **a)** $(-5;0)\cup(0;5)$
- **b)** $(-5;5)$
- **c)** $(-\infty;-5)\cup(5;\infty)$
- **d)** $(-\infty;0)\cup(5;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-5;0)\cup(0;5)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0463` — Vlastní úloha ve stylu přijímaček VŠE (č. 463)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $2^{x^2-5|x|}<1$, je:

- **a)** $(-5;5)$
- **b)** $(-\infty;-5)\cup(5;\infty)$
- **c)** $(-5;0)\cup(0;5)$
- **d)** $(-\infty;0)\cup(5;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-5;0)\cup(0;5)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0595` — Vlastní úloha ve stylu přijímaček VŠE (č. 595)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $7^{x^2-4|x|}<1$, je:

- **a)** $(-\infty;-4)\cup(4;\infty)$
- **b)** $(-\infty;0)\cup(4;\infty)$
- **c)** $(-4;4)$
- **d)** $(-4;0)\cup(0;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-4;0)\cup(0;4)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0623` — Vlastní úloha ve stylu přijímaček VŠE (č. 623)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $5^{x^2-3|x|}<1$, je:

- **a)** $(-\infty;0)\cup(3;\infty)$
- **b)** $(0;3)$
- **c)** $(-3;3)$
- **d)** $(-\infty;-3)\cup(3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0773` — Vlastní úloha ve stylu přijímaček VŠE (č. 773)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $7^{x^2-7|x|}<1$, je:

- **a)** $(-\infty;0)\cup(7;\infty)$
- **b)** $(-7;0)\cup(0;7)$
- **c)** $(-\infty;-7)\cup(7;\infty)$
- **d)** $(-7;7)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-7;0)\cup(0;7)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0782` — Vlastní úloha ve stylu přijímaček VŠE (č. 782)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $9^{x^2-3|x|}<1$, je:

- **a)** $(-\infty;0)\cup(3;\infty)$
- **b)** $(-3;3)$
- **c)** $(-\infty;-3)\cup(3;\infty)$
- **d)** $(-3;0)\cup(0;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-3;0)\cup(0;3)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0862` — Vlastní úloha ve stylu přijímaček VŠE (č. 862)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $2^{x^2-2|x|}<1$, je:

- **a)** $(-\infty;-2)\cup(2;\infty)$
- **b)** $(-2;0)\cup(0;2)$
- **c)** $(-\infty;0)\cup(2;\infty)$
- **d)** $(-2;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-2;0)\cup(0;2)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0866` — Vlastní úloha ve stylu přijímaček VŠE (č. 866)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $5^{x^2-2|x|}<1$, je:

- **a)** $(-\infty;-2)\cup(2;\infty)$
- **b)** $(-\infty;0)\cup(2;\infty)$
- **c)** $(-2;0)\cup(0;2)$
- **d)** $(-2;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-2;0)\cup(0;2)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0870` — Vlastní úloha ve stylu přijímaček VŠE (č. 870)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $4^{x^2-4|x|}<1$, je:

- **a)** $(-\infty;0)\cup(4;\infty)$
- **b)** $(-4;4)$
- **c)** $(-4;0)\cup(0;4)$
- **d)** $(-\infty;-4)\cup(4;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-4;0)\cup(0;4)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-0988` — Vlastní úloha ve stylu přijímaček VŠE (č. 988)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $7^{x^2-6|x|}<1$, je:

- **a)** $(-\infty;0)\cup(6;\infty)$
- **b)** $(-\infty;-6)\cup(6;\infty)$
- **c)** $(-6;0)\cup(0;6)$
- **d)** $(-6;6)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-6;0)\cup(0;6)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-1029` — Vlastní úloha ve stylu přijímaček VŠE (č. 1029)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $4^{x^2-7|x|}<1$, je:

- **a)** $(-\infty;0)\cup(7;\infty)$
- **b)** $(-\infty;-7)\cup(7;\infty)$
- **c)** $(-7;0)\cup(0;7)$
- **d)** $(-7;7)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-7;0)\cup(0;7)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-1068` — Vlastní úloha ve stylu přijímaček VŠE (č. 1068)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $3^{x^2-6|x|}<1$, je:

- **a)** $(-6;6)$
- **b)** $(-6;0)\cup(0;6)$
- **c)** $(-\infty;0)\cup(6;\infty)$
- **d)** $(-\infty;-6)\cup(6;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-6;0)\cup(0;6)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-1110` — Vlastní úloha ve stylu přijímaček VŠE (č. 1110)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $9^{x^2-6|x|}<1$, je:

- **a)** $(-6;6)$
- **b)** $(-\infty;-6)\cup(6;\infty)$
- **c)** $(-6;0)\cup(0;6)$
- **d)** $(-\infty;0)\cup(6;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-6;0)\cup(0;6)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-1154` — Vlastní úloha ve stylu přijímaček VŠE (č. 1154)

*Темы:* 11. Exponenciální rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $2^{x^2-3|x|}<1$, je:

- **a)** $(-\infty;-3)\cup(3;\infty)$
- **b)** $(-3;3)$
- **c)** $(-3;0)\cup(0;3)$
- **d)** $(-\infty;0)\cup(3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-3;0)\cup(0;3)$. Mocnina se základem větším než 1 je menší než 1, právě když je exponent záporný: $|x|(|x|-k)<0$, tj. $0<|x|<k$.

</details>

### `vl-vse-1170` — Vlastní úloha ve stylu přijímaček VŠE (č. 1170)

*Темы:* 11. Exponenciální rovnice a nerovnice, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete reálné parametry $p$ a $q$ tak, aby graf funkce $f(x)=3\cdot2^{x+p}+q$ protínal osu $y$ v bodě $[0;-21]$ a osu $x$ v bodě $[3;0]$.

<details><summary>Ответ и решение</summary>

$p=0$, $q=-24$. $3\cdot2^p+q=-21$ a $3\cdot2^{p+3}+q=0$. Odečtením $21\cdot2^p=21$, tedy $p=0$ a $q=-24$.

</details>

### `vl-vse-0030` — Vlastní úloha ve stylu přijímaček VŠE (č. 30)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x+3|>-1$, je:

- **a)** $(-\infty;-5)\cup(-1;\infty)$
- **b)** $(-3;-1)$
- **c)** $(-5;-3)\cup(-3;-1)$
- **d)** $(-5;-1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-5;-3)\cup(-3;-1)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0036` — Vlastní úloha ve stylu přijímaček VŠE (č. 36)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{3}}|x-3|>-2$, je:

- **a)** $(-\infty;-6)\cup(12;\infty)$
- **b)** $(-6;12)$
- **c)** $(-6;3)\cup(3;12)$
- **d)** $(3;12)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-6;3)\cup(3;12)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0078` — Vlastní úloha ve stylu přijímaček VŠE (č. 78)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{3}}|x+2|>-1$, je:

- **a)** $(-2;1)$
- **b)** $(-\infty;-5)\cup(1;\infty)$
- **c)** $(-5;-2)\cup(-2;1)$
- **d)** $(-5;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-5;-2)\cup(-2;1)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-obec-079` — Vlastní úloha ve stylu přijímacích testů (č. 79)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x-2|>-1$, je:

- **a)** $(2;4)$
- **b)** $(0;4)$
- **c)** $(-\infty;0)\cup(4;\infty)$
- **d)** $(0;2)\cup(2;4)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(0;2)\cup(2;4)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0110` — Vlastní úloha ve stylu přijímaček VŠE (č. 110)

*Темы:* 13. Logaritmické rovnice a nerovnice, 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je dána funkce $f(x)=\log(4-x)+\log(x+2)-\log5$. Určete $D(f)$ a množinu všech $x$, pro která je $f(x)<0$.

<details><summary>Ответ и решение</summary>

$D(f)=(-2;4)$; $f(x)<0$ pro $x\in(-2;-1)\cup(3;4)$. $(4-x)(x+2)<5\iff x^2-2x-3>0$, s podmínkou $-2<x<4$.

</details>

### `vl-vse-0173` — Vlastní úloha ve stylu přijímaček VŠE (č. 173)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x+1|>-2$, je:

- **a)** $(-5;3)$
- **b)** $(-5;-1)\cup(-1;3)$
- **c)** $(-\infty;-5)\cup(3;\infty)$
- **d)** $(-1;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-5;-1)\cup(-1;3)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0326` — Vlastní úloha ve stylu přijímaček VŠE (č. 326)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $\dfrac{2\log x}{\log(3x-2)}=1$.

<details><summary>Ответ и решение</summary>

$x=2$. $x^2=3x-2$: $x=1$ (jmenovatel nulový) nebo $x=2$.

</details>

### `vl-vse-0398` — Vlastní úloha ve stylu přijímaček VŠE (č. 398)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{3}}|x+3|>-1$, je:

- **a)** $(-3;0)$
- **b)** $(-6;-3)\cup(-3;0)$
- **c)** $(-\infty;-6)\cup(0;\infty)$
- **d)** $(-6;0)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-6;-3)\cup(-3;0)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0457` — Vlastní úloha ve stylu přijímaček VŠE (č. 457)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{3}}|x-4|>-1$, je:

- **a)** $(4;7)$
- **b)** $(-\infty;1)\cup(7;\infty)$
- **c)** $(1;4)\cup(4;7)$
- **d)** $(1;7)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(1;4)\cup(4;7)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0484` — Vlastní úloha ve stylu přijímaček VŠE (č. 484)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x-2|>-1$, je:

- **a)** $(-\infty;0)\cup(4;\infty)$
- **b)** $(2;4)$
- **c)** $(0;4)$
- **d)** $(1;2)\cup(2;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen). Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0578` — Vlastní úloha ve stylu přijímaček VŠE (č. 578)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x+1|>-1$, je:

- **a)** $(-3;-1)\cup(-1;1)$
- **b)** $(-\infty;-3)\cup(1;\infty)$
- **c)** $(-3;1)$
- **d)** $(-1;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-3;-1)\cup(-1;1)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0584` — Vlastní úloha ve stylu přijímaček VŠE (č. 584)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x+3|>-2$, je:

- **a)** $(-7;-3)\cup(-3;1)$
- **b)** $(-3;1)$
- **c)** $(-\infty;-7)\cup(1;\infty)$
- **d)** $(-7;1)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-7;-3)\cup(-3;1)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0650` — Vlastní úloha ve stylu přijímaček VŠE (č. 650)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x-3|>-2$, je:

- **a)** $(-\infty;-1)\cup(7;\infty)$
- **b)** $(-1;7)$
- **c)** $(-1;3)\cup(3;7)$
- **d)** $(3;7)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-1;3)\cup(3;7)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0674` — Vlastní úloha ve stylu přijímaček VŠE (č. 674)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je dána funkce $f(x)=\log_2^2x-\log_2x-6$. Určete $D(f)$ a množinu všech $x$, pro která je $f(x)<0$.

<details><summary>Ответ и решение</summary>

$D(f)=(0;\infty)$; $f(x)<0$ pro $x\in\left(\frac14;8\right)$. Pro $t=\log_2x$: $(t-3)(t+2)<0$.

</details>

### `vl-vse-0733` — Vlastní úloha ve stylu přijímaček VŠE (č. 733)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x-4|>-2$, je:

- **a)** $(0;8)$
- **b)** $(0;4)\cup(4;8)$
- **c)** $(4;8)$
- **d)** $(-\infty;0)\cup(8;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(0;4)\cup(4;8)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0780` — Vlastní úloha ve stylu přijímaček VŠE (č. 780)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{3}}|x-0|>-1$, je:

- **a)** $(0;3)$
- **b)** $(-3;3)$
- **c)** $(-3;0)\cup(0;3)$
- **d)** $(-\infty;-3)\cup(3;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-3;0)\cup(0;3)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0811` — Vlastní úloha ve stylu přijímaček VŠE (č. 811)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x-0|>-1$, je:

- **a)** $(0;2)$
- **b)** $(-2;2)$
- **c)** $(-\infty;-2)\cup(2;\infty)$
- **d)** $(-2;0)\cup(0;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $(-2;0)\cup(0;2)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0849` — Vlastní úloha ve stylu přijímaček VŠE (č. 849)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x-1|>-1$, je:

- **a)** $(-\infty;-1)\cup(3;\infty)$
- **b)** $(-1;1)\cup(1;3)$
- **c)** $(1;3)$
- **d)** $(-1;3)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $(-1;1)\cup(1;3)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-0935` — Vlastní úloha ve stylu přijímaček VŠE (č. 935)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x+2|>-1$, je:

- **a)** $(-3;-2)\cup(-2;-1)$
- **b)** $(-4;0)$
- **c)** $(-2;0)$
- **d)** $(-\infty;-4)\cup(0;\infty)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen). Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0962` — Vlastní úloha ve stylu přijímaček VŠE (č. 962)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x-4|>-1$, je:

- **a)** $(2;4)\cup(4;6)$
- **b)** $(2;6)$
- **c)** $(-\infty;2)\cup(6;\infty)$
- **d)** $(4;6)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(2;4)\cup(4;6)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-1059` — Vlastní úloha ve stylu přijímaček VŠE (č. 1059)

*Темы:* 13. Logaritmické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte nerovnici $\log_2(x-1)+\log_2(x+3)\le\log_25$.

<details><summary>Ответ и решение</summary>

$x\in(1;2\rangle$. Podmínka $x>1$; $(x-1)(x+3)\le5\iff x^2+2x-8\le0$, tj. $-4\le x\le2$.

</details>

### `vl-vse-1061` — Vlastní úloha ve stylu přijímaček VŠE (č. 1061)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{3}}|x+2|>-2$, je:

- **a)** $(-11;7)$
- **b)** $(-\infty;-11)\cup(7;\infty)$
- **c)** $(-11;-2)\cup(-2;7)$
- **d)** $(-2;7)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**c** — $(-11;-2)\cup(-2;7)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-1088` — Vlastní úloha ve stylu přijímaček VŠE (č. 1088)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{2}}|x-3|>-1$, je:

- **a)** $(2;3)\cup(3;4)$
- **b)** $(3;5)$
- **c)** $(-\infty;1)\cup(5;\infty)$
- **d)** $(1;5)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen). Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1115` — Vlastní úloha ve stylu přijímaček VŠE (č. 1115)

*Темы:* 13. Logaritmické rovnice a nerovnice, 7. Nerovnice s absolutní hodnotou · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Množina všech reálných $x$, pro která platí $\log_{\frac1{3}}|x+1|>-1$, je:

- **a)** $(-4;-1)\cup(-1;2)$
- **b)** $(-4;2)$
- **c)** $(-\infty;-4)\cup(2;\infty)$
- **d)** $(-1;2)$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $(-4;-1)\cup(-1;2)$. Základ je menší než 1, proto $0<|x-c|<b^k$ (bod, kde je absolutní hodnota nulová, je vyloučen).

</details>

### `vl-vse-1150` — Vlastní úloha ve stylu přijímaček VŠE (č. 1150)

*Темы:* 13. Logaritmické rovnice a nerovnice, 12. Logaritmická funkce · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je dána funkce $f(x)=\log_3(x-1)+\log_3(x+1)-1$. Určete $D(f)$ a množinu všech $x\in D(f)$, pro která je $f(x)<0$.

<details><summary>Ответ и решение</summary>

$D(f)=(1;\infty)$; $f(x)<0$ pro $x\in(1;2)$. $\log_3(x^2-1)<1\iff x^2-1<3$; s podmínkou $x>1$.

</details>

### `vl-nsz-214` — [Vlastní úloha ve stylu NSZ Matematika (č. 214)](https://www.scio.cz/matematika)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Všechna řešení rovnice $\cos2x=\cos x$ jsou čísla:

- **a)** $x=\dfrac{2k\pi}3,\ k\in\mathbb Z$
- **b)** $x=k\pi,\ k\in\mathbb Z$
- **c)** $x=2k\pi,\ k\in\mathbb Z$
- **d)** $x=\pm\dfrac{2\pi}3+2k\pi,\ k\in\mathbb Z$

<details><summary>Ответ и решение</summary>

**a** — $x=\dfrac{2k\pi}3,\ k\in\mathbb Z$. $2\cos^2x-\cos x-1=0$, $\cos x=1$ ($x=2k\pi$) nebo $\cos x=-\frac12$ ($x=\pm\frac{2\pi}3+2k\pi$). Dohromady jsou to právě násobky $\frac{2\pi}3$.

</details>

### `vl-vse-0688` — Vlastní úloha ve stylu přijímaček VŠE (č. 688)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V $\mathbb R$ řešte rovnici $\cos2x+3\cos x+2=0$.

<details><summary>Ответ и решение</summary>

$x=\pi+2k\pi$ nebo $x=\pm\frac{2\pi}3+2k\pi$ ($k\in\mathbb Z$). $2\cos^2x+3\cos x+1=0$: $\cos x=-1$ nebo $\cos x=-\frac12$.

</details>

### `vl-vse-0752` — Vlastní úloha ve stylu přijímaček VŠE (č. 752)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na intervalu $(0;2\pi)$ řešte nerovnici $2\sin^2x+\sin x-1<0$.

<details><summary>Ответ и решение</summary>

$x\in\left(0;\frac\pi6\right)\cup\left(\frac{5\pi}6;\frac{3\pi}2\right)\cup\left(\frac{3\pi}2;2\pi\right)$. $(2\sin x-1)(\sin x+1)<0$, tj. $-1<\sin x<\frac12$.

</details>

### `vl-vse-1100` — Vlastní úloha ve stylu přijímaček VŠE (č. 1100)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pomocí vzorce pro $\sin(\alpha+\beta)$ řešte na intervalu $(0;2\pi)$ nerovnici $\sin\left(x+\frac\pi3\right)>\sin\left(x-\frac\pi3\right)$.

<details><summary>Ответ и решение</summary>

$x\in\left(0;\frac\pi2\right)\cup\left(\frac{3\pi}2;2\pi\right)$. Rozdíl je $2\cos x\sin\frac\pi3=\sqrt3\cos x>0$.

</details>

### `vl-vse-1236` — Vlastní úloha ve stylu přijímaček VŠE (č. 1236)

*Темы:* 15. Goniometrické rovnice a nerovnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Na intervalu $(0;2\pi)$ řešte nerovnici $\cos2x-\cos x>0$.

<details><summary>Ответ и решение</summary>

$x\in\left(\frac{2\pi}3;\frac{4\pi}3\right)$. $2\cos^2x-\cos x-1=(2\cos x+1)(\cos x-1)>0$; protože $\cos x<1$ na celém intervalu, musí být $\cos x<-\frac12$.

</details>

### `vl-vse-0131` — Vlastní úloha ve stylu přijímaček VŠE (č. 131)

*Темы:* 16. Komplexní čísla, 3. Rovnice (lineární, kvadratické, soustava rovnic) · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Napište kvadratickou rovnici s reálnými koeficienty, jejímž jedním kořenem je $z_1=2\left(\cos\frac{2\pi}3+i\sin\frac{2\pi}3\right)$, a oba kořeny zapište v algebraickém tvaru.

<details><summary>Ответ и решение</summary>

$z^2+2z+4=0$; $z_{1,2}=-1\pm i\sqrt3$. $z_1=-1+i\sqrt3$, druhý kořen je komplexně sdružený; součet $-2$, součin $4$.

</details>

### `vl-vse-0722` — Vlastní úloha ve stylu přijímaček VŠE (č. 722)

*Темы:* 16. Komplexní čísla, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete reálné číslo $q$ tak, aby číslo $z_1=\log_28+i\log_3\sqrt3$ bylo kořenem rovnice $z^2-6z+q=0$.

<details><summary>Ответ и решение</summary>

$q=\frac{37}4$. $z_1=3+\frac12i$, druhý kořen $3-\frac12i$; součet $6$ sedí, součin $9+\frac14$.

</details>

### `vl-vse-0923` — Vlastní úloha ve stylu přijímaček VŠE (č. 923)

*Темы:* 17. Goniometrický tvar komplexního čísla. Moivreova věta, 16. Komplexní čísla · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Je dáno číslo $z=1-i\sqrt3$. a) Zapište ho v goniometrickém tvaru. b) Pomocí Moivreovy věty určete reálnou a imaginární část čísla $z^{9}$.

<details><summary>Ответ и решение</summary>

a) $z=2\left(\cos\frac{5\pi}3+i\sin\frac{5\pi}3\right)$; b) $\operatorname{Re}z^9=-512$, $\operatorname{Im}z^9=0$. $9\cdot\frac{5\pi}3=15\pi$, $\cos15\pi=-1$, $2^9=512$.

</details>

### `vl-obec-023` — Vlastní úloha ve stylu přijímacích testů (č. 23)

*Темы:* 18. Posloupnosti, 19. Aritmetická posloupnost, 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V posloupnosti s prvními členy $a_1=1$, $a_2=2$ platí pro každé $k\in\mathbb N$: $a_{2k-1}$, $a_{2k}$, $a_{2k+1}$ jsou po sobě jdoucí členy geometrické posloupnosti a $a_{2k}$, $a_{2k+1}$, $a_{2k+2}$ po sobě jdoucí členy aritmetické posloupnosti. Čemu je rovno $a_7$?

- **a)** $12$
- **b)** $14$
- **c)** $16$
- **d)** $18$
- **e)** $25$

<details><summary>Ответ и решение</summary>

**c** — $16$. Postupně $1,2,4,6,9,12,16$.

</details>

### `vl-nsz-162` — [Vlastní úloha ve stylu NSZ Matematika (č. 162)](https://www.scio.cz/matematika)

*Темы:* 20. Geometrická posloupnost · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Posloupnost $(a_n)$ je zadána rekurentně $a_{n+1}=\dfrac9{a_n}$ a je geometrická. Pak $a_1$ může být:

- **a)** $9$
- **b)** $1$
- **c)** $-3$
- **d)** $\dfrac13$

<details><summary>Ответ и решение</summary>

**c** — $-3$. Je $a_3=a_1$, takže kvocient splňuje $q^2=1$; $q=1$ dává $a_1^2=9$, $q=-1$ dává $-a_1^2=9$ — nelze. Tedy $a_1=\pm3$.

</details>

### `vl-vse-0374` — Vlastní úloha ve stylu přijímaček VŠE (č. 374)

*Темы:* 21. Kombinatorika. Faktoriál · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete všechna přirozená čísla $n\ge2$, pro která platí $\dfrac{(n+1)!}{(n-1)!}<42$.

<details><summary>Ответ и решение</summary>

$n\in\{2;3;4;5\}$. $(n+1)n<42$, tedy $n<6$.

</details>

### `vl-vse-0996` — Vlastní úloha ve stylu přijímaček VŠE (č. 996)

*Темы:* 21. Kombinatorika. Faktoriál, 6. Nerovnice. Soustava nerovnic · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete všechna přirozená čísla $n$, pro která platí $\dbinom{n}{2}+\dbinom{n+1}{2}\le25$ (uveďte i podmínku existence).

<details><summary>Ответ и решение</summary>

$n\in\{1;2;3;4;5\}$ (podmínka $n\ge1$). Levá strana je $\frac{n(n-1)}2+\frac{(n+1)n}2=n^2$; $n^2\le25$. Pro $n=1$ je $\binom12=0$.

</details>

### `vl-nsz-012` — [Vlastní úloha ve stylu NSZ Matematika (č. 12)](https://www.scio.cz/matematika)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je součet koeficientů u lichých mocnin $x$ v mnohočlenu, který vznikne roznásobením $(x-1)^8$?

- **a)** $-256$
- **b)** $-128$
- **c)** $0$
- **d)** $128$

<details><summary>Ответ и решение</summary>

**b** — $-128$. Dosazením $x=1$: součet všech koeficientů $0$; $x=-1$: sudé minus liché $=2^8=256$. Liché tedy dávají $-128$.

</details>

### `vl-vse-0148` — Vlastní úloha ve stylu přijímaček VŠE (č. 148)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{-3}$ v rozvoji výrazu $\left(x^2+\dfrac{2}x\right)^{6}$ (pro $x\ne0$)?

- **a)** $240$
- **b)** $192$
- **c)** $160$
- **d)** $64$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $192$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-vse-0182` — Vlastní úloha ve stylu přijímaček VŠE (č. 182)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{-4}$ v rozvoji výrazu $\left(x-\dfrac{2}x\right)^{6}$ (pro $x\ne0$)?

- **a)** $64$
- **b)** $-160$
- **c)** $240$
- **d)** $-192$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $-192$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-vse-0629` — Vlastní úloha ve stylu přijímaček VŠE (č. 629)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{-3}$ v rozvoji výrazu $\left(x^2+\dfrac{3}x\right)^{6}$ (pro $x\ne0$)?

- **a)** $1458$
- **b)** $729$
- **c)** $1215$
- **d)** $540$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $1458$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-vse-0691` — Vlastní úloha ve stylu přijímaček VŠE (č. 691)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{5}$ v rozvoji výrazu $\left(x^2+\dfrac{3}x\right)^{4}$ (pro $x\ne0$)?

- **a)** $81$
- **b)** $108$
- **c)** $1$
- **d)** $54$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-0697` — Vlastní úloha ve stylu přijímaček VŠE (č. 697)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{6}$ v rozvoji výrazu $\left(x^2+\dfrac{2}x\right)^{6}$ (pro $x\ne0$)?

- **a)** $60$
- **b)** $192$
- **c)** $240$
- **d)** $64$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $60$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-vse-0901` — Vlastní úloha ve stylu přijímaček VŠE (č. 901)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{-1}$ v rozvoji výrazu $\left(x-\dfrac{1}x\right)^{5}$ (pro $x\ne0$)?

- **a)** $5$
- **b)** $-10$
- **c)** $10$
- **d)** $-1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $-10$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-vse-0911` — Vlastní úloha ve stylu přijímaček VŠE (č. 911)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{5}$ v rozvoji výrazu $\left(x^2-\dfrac{1}x\right)^{4}$ (pro $x\ne0$)?

- **a)** $-4$
- **b)** $1$
- **c)** $6$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $-4$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-vse-0921` — Vlastní úloha ve stylu přijímaček VŠE (č. 921)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{-2}$ v rozvoji výrazu $\left(x^2-\dfrac{2}x\right)^{5}$ (pro $x\ne0$)?

- **a)** $-80$
- **b)** $-32$
- **c)** $40$
- **d)** $80$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $80$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-vse-0939` — Vlastní úloha ve stylu přijímaček VŠE (č. 939)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{5}$ v rozvoji výrazu $\left(x+\dfrac{3}x\right)^{5}$ (pro $x\ne0$)?

- **a)** $270$
- **b)** $90$
- **c)** $405$
- **d)** $243$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**e** — Žádná z ostatních odpovědí není správná.. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$. Mezi možnostmi a)–d) tento výsledek není, správně je tedy e).

</details>

### `vl-vse-1058` — Vlastní úloha ve stylu přijímaček VŠE (č. 1058)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{2}$ v rozvoji výrazu $\left(x+\dfrac{1}x\right)^{4}$ (pro $x\ne0$)?

- **a)** $4$
- **b)** $-4$
- **c)** $6$
- **d)** $1$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**a** — $4$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-vse-1131` — Vlastní úloha ve stylu přijímaček VŠE (č. 1131)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{1}$ v rozvoji výrazu $\left(x-\dfrac{1}x\right)^{5}$ (pro $x\ne0$)?

- **a)** $5$
- **b)** $-1$
- **c)** $-10$
- **d)** $10$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $10$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-vse-1139` — Vlastní úloha ve stylu přijímaček VŠE (č. 1139)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{6}$ v rozvoji výrazu $\left(x^2+\dfrac{3}x\right)^{6}$ (pro $x\ne0$)?

- **a)** $1215$
- **b)** $729$
- **c)** $1458$
- **d)** $135$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $135$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-vse-1145` — Vlastní úloha ve stylu přijímaček VŠE (č. 1145)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{-2}$ v rozvoji výrazu $\left(x+\dfrac{1}x\right)^{4}$ (pro $x\ne0$)?

- **a)** $1$
- **b)** $-4$
- **c)** $6$
- **d)** $4$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**d** — $4$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-vse-1197` — Vlastní úloha ve stylu přijímaček VŠE (č. 1197)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{-4}$ v rozvoji výrazu $\left(x^2+\dfrac{1}x\right)^{4}$ (pro $x\ne0$)?

- **a)** $4$
- **b)** $1$
- **c)** $-1$
- **d)** $6$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $1$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-vse-1208` — Vlastní úloha ve stylu přijímaček VŠE (č. 1208)

*Темы:* 23. Kombinační číslo. Binomická věta · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Jaký je koeficient u $x^{6}$ v rozvoji výrazu $\left(x^2-\dfrac{2}x\right)^{6}$ (pro $x\ne0$)?

- **a)** $64$
- **b)** $60$
- **c)** $240$
- **d)** $-192$
- **e)** Žádná z ostatních odpovědí není správná.

<details><summary>Ответ и решение</summary>

**b** — $60$. Obecný člen binomické věty, vybereme ten s požadovanou mocninou $x$.

</details>

### `vl-nsz-142` — [Vlastní úloha ve stylu NSZ Matematika (č. 142)](https://www.scio.cz/matematika)

*Темы:* 24. Pravděpodobnost, 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Vrcholy pravidelného osmiúhelníku jsou body na kružnici. Náhodně vybereme tři z nich. Jaká je pravděpodobnost, že tvoří pravoúhlý trojúhelník?

- **a)** $\dfrac3{14}$
- **b)** $\dfrac27$
- **c)** $\dfrac37$
- **d)** $\dfrac12$

<details><summary>Ответ и решение</summary>

**c** — $\dfrac37$. Trojúhelník vepsaný do kružnice je pravoúhlý, právě když jedna strana je průměr: 4 průměry, ke každému 6 vrcholů, tj. $24$ z $\binom83=56$.

</details>

### `vl-nsz-001` — [Vlastní úloha ve stylu NSZ Matematika (č. 1)](https://www.scio.cz/matematika)

*Темы:* 27. Obecná rovnice přímky, 25. Analytická geometrie. Vektory · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Přímka prochází bodem $M=[6;8]$ a její vzdálenost od počátku soustavy souřadnic je 10. Její rovnice je:

- **a)** $4x-3y=0$
- **b)** $4x+3y-48=0$
- **c)** $x+y-14=0$
- **d)** $3x+4y-50=0$

<details><summary>Ответ и решение</summary>

**d** — $3x+4y-50=0$. $|OM|=10$, takže $M$ je pata kolmice z počátku: přímka je kolmá k $OM$, normálový vektor $(3,4)$, $3x+4y-50=0$.

</details>

### `vl-vse-0301` — Vlastní úloha ve stylu přijímaček VŠE (č. 301)

*Темы:* 30. Kuželosečky. Kružnice · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Napište rovnice obou kružnic se stejným poloměrem, které procházejí body $A=[0;4]$ a $B=[4;0]$, je-li vzdálenost jejich středů $4\sqrt2$.

<details><summary>Ответ и решение</summary>

$x^2+y^2=16$ a $(x-4)^2+(y-4)^2=16$. Středy leží na ose $AB$ ($y=x$) souměrně podle středu $[2;2]$ ve vzdálenosti $2\sqrt2$: $[0;0]$ a $[4;4]$; $r=4$.

</details>

### `vl-vse-0133` — Vlastní úloha ve stylu přijímaček VŠE (č. 133)

*Темы:* 31. Elipsa, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Určete parametr $q$ tak, aby přímka $y=x+q$ měla s elipsou $\dfrac{x^2}{8}+\dfrac{y^2}{2}=1$ právě jeden společný bod, a určete tento bod.

<details><summary>Ответ и решение</summary>

$q=\pm\sqrt{10}$; body $\left[\mp\frac{8}{\sqrt{10}};\pm\frac{2}{\sqrt{10}}\right]$. Dosazení: $5x^2+8qx+4q^2-8=0$; diskriminant $64q^2-20(4q^2-8)=0$, $q^2=10$; $x=-\frac{4q}5$.

</details>

### `vl-vse-0452` — Vlastní úloha ve stylu přijímaček VŠE (č. 452)

*Темы:* 31. Elipsa, 4. Rovnice s parametrem · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pro které hodnoty parametru $q$ je přímka $y=x+q$ tečnou elipsy $x^2+4y^2=20$? Určete body dotyku.

<details><summary>Ответ и решение</summary>

$q=\pm5$; body $[-4;1]$ a $[4;-1]$. Dosazení: $5x^2+8qx+4q^2-20=0$, diskriminant $64q^2-20(4q^2-20)=0$, tj. $q^2=25$.

</details>

### `vl-nsz-062` — [Vlastní úloha ve stylu NSZ Matematika (č. 62)](https://www.scio.cz/matematika)

*Темы:* 34. Planimetrie, Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Délky všech stran pravoúhlého trojúhelníku jsou v centimetrech celá čísla a nejkratší strana měří 11 cm. Jaký je obvod trojúhelníku?

- **a)** $121$ cm
- **b)** $132$ cm
- **c)** $144$ cm
- **d)** $156$ cm

<details><summary>Ответ и решение</summary>

**b** — $132$ cm. $11^2=c^2-b^2=(c-b)(c+b)$; 121 se rozloží jen jako $1\cdot121$, tedy $c=61$, $b=60$.

</details>

### `vl-obec-089` — Vlastní úloha ve stylu přijímacích testů (č. 89)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Rovnoramenný trojúhelník $ABC$ má při základně $AB$ úhly $40^\circ$. Průsečík výšek $V$, střed kružnice opsané $O$ a střed kružnice vepsané $I$ leží spolu s vrcholem $C$ na jedné přímce v pořadí (počínaje bodem nejdále od základny):

- **a)** $V, C, I, O$
- **b)** $C, V, I, O$
- **c)** $C, I, O, V$
- **d)** $V, C, O, I$
- **e)** $C, I, V, O$

<details><summary>Ответ и решение</summary>

**a** — $V, C, I, O$. Úhel při $C$ je $100^\circ$ (tupý): průsečík výšek leží za vrcholem $C$, střed kružnice opsané za základnou $AB$, střed vepsané kružnice uvnitř.

</details>

### `vl-obec-090` — Vlastní úloha ve stylu přijímacích testů (č. 90)

*Темы:* 34. Planimetrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Čtverec o obsahu 32 cm$^2$ otočíme o $45^\circ$ kolem jeho středu. Průnik původního a otočeného čtverce má obsah:

- **a)** $64(\sqrt2-1)$ cm$^2$
- **b)** $16$ cm$^2$
- **c)** $24$ cm$^2$
- **d)** $32(\sqrt2-1)$ cm$^2$
- **e)** $28$ cm$^2$

<details><summary>Ответ и решение</summary>

**a** — $64(\sqrt2-1)$ cm$^2$. Průnik je pravidelný osmiúhelník; od čtverce o straně $a=4\sqrt2$ se odříznou 4 rohové trojúhelníky s odvěsnou $\frac{a(2-\sqrt2)}2$, takže obsah je $2a^2(\sqrt2-1)$.

</details>

### `vl-nsz-009` — [Vlastní úloha ve stylu NSZ Matematika (č. 9)](https://www.scio.cz/matematika)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V krychli $ABCDEFGH$ je $M$ střed hrany $AE$ a $S$ střed stěny $EFGH$. Jaký je vztah velikostí úhlů $\angle BMD$ a $\angle BSD$?

- **a)** úhly jsou shodné
- **b)** $\angle BMD$ je větší
- **c)** $\angle BMD$ je menší
- **d)** nelze jednoznačně rozhodnout

<details><summary>Ответ и решение</summary>

**b** — $\angle BMD$ je větší. Pro krychli o hraně 2: $\cos\angle BMD=\frac{(2,0,-1)\cdot(0,2,-1)}{5}=\frac15$, $\cos\angle BSD=\frac{(1,-1,-2)\cdot(-1,1,-2)}6=\frac13$. Menší kosinus znamená větší úhel.

</details>

### `vl-nsz-126` — [Vlastní úloha ve stylu NSZ Matematika (č. 126)](https://www.scio.cz/matematika)

*Темы:* 35. Stereometrie · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

V krychli $ABCDEFGH$ (podstava $ABCD$, nad ní $EFGH$) je $M$ střed hrany $AB$ a $N$ střed hrany $BC$. Jaký mnohoúhelník je řezem krychle rovinou $MNH$?

- **a)** trojúhelník
- **b)** čtyřúhelník
- **c)** pětiúhelník
- **d)** šestiúhelník

<details><summary>Ответ и решение</summary>

**c** — pětiúhelník. Přímka $MN$ protne přímky $AD$ a $CD$ mimo krychli; spojnice těchto bodů s $H$ protnou hrany $AE$ a $CG$. Řez má vrcholy $M$, $N$, bod na $CG$, $H$ a bod na $AE$.

</details>

### `vl-nsz-066` — [Vlastní úloha ve stylu NSZ Matematika (č. 66)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pět kamarádů (Adam, Bára, Cyril, Dana, Emil) stojí v řadě na fotce a Lukáš hádá jejich pořadí zleva. Na tip Adam–Bára–Cyril–Dana–Emil dostal odpověď: „Správně je jen jeden, ten uprostřed.“ Na tip Adam–Dana–Cyril–Emil–Bára: „Správně jsou dva, ale ani jeden z nich není mezi prvními dvěma zleva.“ Kdo stojí vedle Emila?

- **a)** Cyril a Dana
- **b)** Adam a Bára
- **c)** Bára a Cyril
- **d)** Adam a Dana

<details><summary>Ответ и решение</summary>

**a** — Cyril a Dana. Z prvního tipu stojí Cyril uprostřed a nikdo jiný na svém místě. Ve druhém tipu je tedy Cyril jeden ze dvou správných a druhý je Emil na 4. místě, nebo Bára na 5. místě. Vyhovují pořadí Bára–Adam–Cyril–Emil–Dana a Dana–Emil–Cyril–Adam–Bára; v obou má Emil sousedy Cyrila a Danu.

</details>

### `vl-nsz-165` — [Vlastní úloha ve stylu NSZ Matematika (č. 165)](https://www.scio.cz/matematika)

*Темы:* Ostatní · *Текст:* собственная задача банка (тип задачи как в NSZ Matematika, свои числа и формулировка)

Pod stromečkem je pět balíčků různé hmotnosti pro Annu, Borise, Cilku, Davida a Evu. Nejtěžší a nejlehčí balíček jsou zelené, zbylé tři hnědé. Annin balíček je těžší než Borisův a má jinou barvu. Cilčin má stejnou barvu jako Annin a je lehčí než Davidův i Evin. Davidův balíček je zelený. Kdo má balíček stejné barvy jako Eva?

- **a)** jen Anna
- **b)** Anna a Cilka
- **c)** jen David
- **d)** Boris a David

<details><summary>Ответ и решение</summary>

**b** — Anna a Cilka. David má zelený, a protože je těžší než Cilčin, má nejtěžší. Anna je těžší než Boris a má jinou barvu, takže Boris má nejlehčí (zelený) a Anna hnědý. Cilka má hnědý jako Anna; zbývající hnědý patří Evě.

</details>

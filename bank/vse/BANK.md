# Банк задач přijímaček (VŠE) — обзор

Файл собирается скриптом `bank/build.py` из `tasks.json` и `sources.json`; вручную не редактировать.

Всего задач: **36** · базовый: 16 · стандартный: 15 · сложный: 5 · VŠE KMAT: 22 · VŠE FMV: 11 · VŠE FIS: 3

⚠ **0** задач пока записаны так, как они пересказаны в курсе, — их текст нужно заменить дословным оригиналом из PDF (пометка ⚠ в карточке). Ответы у всех задач проверены.

## Покрытие тем курса

| № | Тема | Ур. 1 | Ур. 2 | Ур. 3 | Всего |
|---|---|---|---|---|---|
| 1 | Množina. Podmnožina |  | 2 | 1 | 3 |
| 2 | Mocnina. Odmocnina |  | 1 |  | 1 |
| 3 | Rovnice (lineární, kvadratické, soustava rovnic) | 2 | 3 | 2 | 7 |
| 4 | Rovnice s parametrem |  | 1 | 1 | 2 |
| 5 | Rovnice s absolutní hodnotou |  |  |  | — |
| 6 | Nerovnice. Soustava nerovnic | 2 | 1 |  | 3 |
| 7 | Nerovnice s absolutní hodnotou | 1 |  | 1 | 2 |
| 8 | Iracionální rovnice. Iracionální nerovnice |  | 1 |  | 1 |
| 9 | Funkce (lineární, kvadratická, lomená). Grafy | 1 |  |  | 1 |
| 10 | Exponenciální funkce | 1 |  |  | 1 |
| 11 | Exponenciální rovnice a nerovnice | 2 |  |  | 2 |
| 12 | Logaritmická funkce | 1 | 1 |  | 2 |
| 13 | Logaritmické rovnice a nerovnice | 1 | 1 |  | 2 |
| 14 | Goniometrické funkce |  |  |  | — |
| 15 | Goniometrické rovnice a nerovnice | 1 | 1 |  | 2 |
| 16 | Komplexní čísla |  |  |  | — |
| 17 | Goniometrický tvar komplexního čísla. Moivreova věta |  |  |  | — |
| 18 | Posloupnosti |  |  |  | — |
| 19 | Aritmetická posloupnost | 1 |  |  | 1 |
| 20 | Geometrická posloupnost |  |  |  | — |
| 21 | Kombinatorika. Faktoriál |  |  |  | — |
| 22 | Variace. Permutace. Kombinace |  |  |  | — |
| 23 | Kombinační číslo. Binomická věta |  |  |  | — |
| 24 | Pravděpodobnost |  |  |  | — |
| 25 | Analytická geometrie. Vektory |  |  |  | — |
| 26 | Parametrická rovnice přímky |  |  |  | — |
| 27 | Obecná rovnice přímky |  |  |  | — |
| 28 | Vzájemná poloha přímek | 1 |  |  | 1 |
| 29 | Směrnicový a úsekový tvar rovnice přímky |  |  |  | — |
| 30 | Kuželosečky. Kružnice |  | 1 |  | 1 |
| 31 | Elipsa |  |  |  | — |
| 32 | Hyperbola |  |  |  | — |
| 33 | Parabola |  |  |  | — |
| 34 | Planimetrie |  |  |  | — |
| 35 | Stereometrie |  |  |  | — |
| — | Ostatní | 2 | 2 |  | 4 |

Задача считается по основной (первой) теме; дополнительные темы указаны в карточке. «Ostatní» — задачи вне 35 тем плана.

## Уровень 1 — базовый

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

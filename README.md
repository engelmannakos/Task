# Continental Task

Tisztelt Continental!

Az alábbi repoba töltöttem föl a kapott feladat megoldását.
Néhány megjegyzés a megoldásomhoz:

A feltöltött verzió majdnem az összes elvárt funkcióval rendelkezik, úgy mint új rendelés, illetve gyümölcsszedő kör hozzáadása a rendszerhez egy felugró ablakban, ahol rendelésből gyömülcsönként maximum 100 a megengedett, szedésnél pedig összesen 50 lehet a maximum, de bármelyiknek lehet az értéke 0. A rendelések kiíratása egy táblázatba, a sorok bal oldalán lenyíló fül, amely megmutatja az adott rendelés gyümölcseiből a kért és a már meglévő mennyiséget. A sorok "Order Number" mezőjére kattintva jobb oldalt láthatjuk, hogy a rendeléshez hanyadik gyümöcsszedő körből, milyen gyümölcsből, hány darab került. Ezek sorban mindig a legrégebben bejött rendelést próbálják feltölteni gyümölcsfajtánként.

Ez utóbbi funkció, azonban nem működik mindig rendesen. Amennyiben jól sejtem, a backenddel való kommunikáció túl lassú néhány alkalommal, így hiába küldöm el az adatokat, ha akkor, amikor ki kéne olvasni, még a régi verziót találja a program, mert nem ért még vissza a frissített. Emiatt történhet meg olyan, hogy mikor egy gyümölcsszedő körrel szeretnék feltölteni egy rendelést, hiába küldöm el a nullázott adatokat a gyümölcsszedő_kör_frissítő függvénybe, ha a következő lépésben megnézem, van-e még nálam gyümölcs a következő rendelésre, és azt látom, hogy tele vagyok. Emellett az oldal elemeinek frissítése sincs teljesen megoldva, van, hogy újra kell tölteni néhány új elem megtekintése miatt.

A megoldáshoz React frameworköt használtam frontendre és Django frameworköt backendre, Material UI felülettel. Ezeket az eszközöket nem használtam korábban, ahogy a motivációs levelemben is említettem, nincs még sok tapasztalatom ezen a területen. Éppen ezért a feladat elkezdéséhez, a frameworkök megértéséhez az interneten kerestem anyagot.
A négy nap alatt sajnos nem sikerült befejeznem a feladatot, az említett frontend-backend kommunikációs probléma megkeresése majd próbálkozás a javítására túl sok időt vett igénybe, és még nem találtam rá megoldást. Nem szerettem volna azonban tovább húzni a beadást, hiszen így is megkéstem. Biztos vagyok azonban abban, hogy nemsokára egyik fennálló probléma sem jelent majd akadályt.

Köszönöm a lehetőséget!

Üdvözlettel,
Engelmann Ákos

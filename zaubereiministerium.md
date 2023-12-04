---
layout: tutorial_de
title: Das Zaubereiministerium
dbFile: data/harrypotter_de.db
---

# Das Zaubereiministerium

Willkommen in der magischen Welt von Harry Potter! Du wurdest als Detektivin und Informatikspezialistin im großen Zaubereiministerium eingestellt. Um dir bei deinen Aufgaben zu helfen, hast du Zugriff auf das Magieregister, eine Datenbank, die alle bekannten Informationen über die Welt der Zauberer und Hexen auflistet.

<a name="base"></a>

## Der magische Befehl

Deine Chefin, Professor McGonagall, zeigt dir, wie das System funktioniert. Du hast Zugriff auf die Datenbank über eine <span class="keyword">Befehlszeile</span> in einem <span class="keyword">Codeblock</span> wie unten. Gib einfach einen gültigen Befehl ein und klicke auf RUN⬇️, um das Ergebnis zu sehen. Da dies das erste Mal ist, dass du dieses System verwendest, zeigt Professor McGonagall dir ein Beispiel um die Namen von 3 Personen in der Datenbank zu zeigen.

<sql-exercise
  data-question="1. Versuche, die Anzahl der angezeigten Namen auf 15 zu ändern."
  data-comment=""
  data-default-text="SELECT Name
FROM Charaktere
LIMIT 3"></sql-exercise>

<div class="sideNote">
<h3>Dein erster SQL-Befehl</h3>
<p>Du kannst sehen, dass ein SQL-Befehl oder eine <span class="keyword">Abfrage</span> ein wenig wie ein Satz aussieht. Die in Großbuchstaben geschriebenen Wörter sind englische Schlüsselwörter, und die in Kleinbuchstaben geschriebenen Wörter geben an, wonach du suchen möchtest. <code class="keyword">SELECT</code> bedeutet "Wähle", <code class=keyword>FROM</code> bedeutet "von" oder "aus", und <code class="keyword">LIMIT</code> bedeutet "Begrenzung". Wenn wir die Codezeile übersetzen, erhalten wir: "<code>WÄHLE</code> Name <code>VON</code> Charaktere <code>BEGRENZUNG</code> 3".</p>
</div> 

Du hast gerade gelernt, wie man den Namen von Zauberern und Hexen anzeigt. Der Name ist ein <span class="keyword">Attribut</span> (Eigenschaft). Bei jeder Abfrage wählt man eine bestimmte Anzahl von Atributen wie Name, Geschlecht, Geburtsjahr usw. aus. Aber es wäre nützlich zu wissen, welche anderen Attribute zu jedem Charakter existieren.

<div class ="sideNote">
<p>Um <strong>alle</strong> Attribute eines Charakters auszuwählen, muss <code class="keyword">*</code> verwendet werden. </p>
</div>

<sql-exercise
  data-question="2. Ändere die folgende Abfrage, um alle Attribute von 15 Zauberern in der Datenbank zu suchen."
  data-comment="Wenn du es nicht schaffst, kannst du auf 'LÖSUNG' klicken, und die Lösung wird magisch erscheinen!"
  data-default-text = "/* Dies ist ein Kommentar. */
SELECT Name 
FROM Charaktere
LIMIT 15"
  data-solution="
SELECT *
FROM Charaktere
LIMIT 15"></sql-exercise>

<div class="sideNote">
<p>Alles zwischen <code>/*</code> und <code>*/</code> ist ein Kommentar und wird nicht ausgeführt, wenn du auf Run druckst.</p>
</div>

<input-feedback 
data-title="Kannst du jetzt sagen, welches Patronus Der Blutige Baron hat?"
data-solution="löwe"
success-message="🦁 Das ist es, super! Jetzt lernen wir, wie man die Suche nach Informationen in der Datenbank vereinfacht, anstatt jede Zeile einzeln lesen zu müssen."
failure-message="Das ist es noch nicht ganz. Versuche es erneut oder frage eine Assistent*in."></input-feedback>

<div class="warning">
Wenn du dich nicht mehr an einen Befehl erinnerst, den du verwendet hast, kannst du die <a href="sql_befehle.html">Zusammenfassung der wichtigsten SQL-Befehle</a> überprüfen.
</div>


<a name="zaehlen"></a>

## Zählen

Es scheint viele Zauberer und Hexen in dieser Datenbank zu geben. Aber wie viele genau? Dank SQL ist es auch möglich, die Anzahl der angezeigten Zeilen zu zählen. Um die Anzahl der Charaktere in der Datenbank zu finden, würden wir sagen:

_Wähle die Anzahl aller Elemente in der Tabelle Charaktere aus._

Das wird also zu:

_WÄHLE ZÄHLE(*) VON Charaktere_

<div class="sideNote">
<p>ZÄHLE() entspricht den SQL Befehl <code class="keyword">COUNT()</code>. Wir geben in Klammern an, was wir zählen möchten.</p>
</div>

<sql-exercise
  data-question="3. Versuche, dies in einem SQL-Befehl zu übersetzen."
  data-comment=""
  data-default-text="SELECT ..."
  data-solution="
SELECT COUNT(*) 
FROM Charaktere"
  success-message="Genau, jetzt weißt du, wie man die Anzahl der von einer Abfrage zurückgegebenen Zeilen zählt. Zunächst werden wir versuchen, etwas interessantere Suchen durchzuführen."
failure-message="Noch nicht ganz, versuche es erneut."></sql-exercise>

<a name="filtern"></a>

## Informationen filtern

Gestern hat Bathilda Bagshot dem Ministerium gemeldet, dass eine junge Frau sie gegen Rowdys verteidigt hat, die versucht haben, ihr den Besen zu stehlen. Frau Bagshot möchte ihren Namen herausfinden, um ihr zu danken, denn das Mädchen musste nach der Rettung schnell verschwinden. Hier ist ihr Phantombild[^1], rekonstruiert nach den sehr genauen Beschreibungen der alten Dame:

<img src="imgs/luna_lovegood_portrait.jpg">

[^1]: Quelle [wallpaperaccess.com](https://wallpaperaccess.com/luna-lovegood)

Du müsstest also nach weiblichen Charakteren suchen, die silbergraue Augen haben und deren Patronus (Schutzgeist) ein Hase ist. Versuchen wir zunächst, alle weiblichen Charaktere zu finden. Dafür benötigen wir einen Befehl, der sagt:

_Wähle alle Informationen der Charaktere aus, die Frauen sind._

Indem wir das ein wenig vereinfachen, erhalten wir:

_WÄHLE * VON Charaktere WO Geschlecht='Weiblich'_

Wir benötigen also einen Befehl wie _WO_, der eine _Bedingung_ filtern kann. Für jeden Charakter ist die Bedingung entweder wahr (zum Beispiel: _Geschlecht='Weiblich'_), und die Zeile des Charakters wird angezeigt, oder die Bedingung ist falsch, und die Zeile wird ignoriert. Wenn wir dies ins Englische übersetzen:

<div class="sideNote">
<p>Man verwendet <code class="keyword">WHERE</code> (WO auf Deutsch) um die Ergebnisse deiner Suchanfragen zu filtern.</p>
</div>

* <code class="codeblock">FROM Charaktere  </code>

* <code class="codeblock">WHERE Geschlecht='Weiblich'</code>

* <code class="codeblock">SELECT * </code>

<sql-exercise
  data-question="4. Schreibe die drei Code schnipsel in der richtigen Reihenfolge um alle weiblichen Charaktere mit <code>WHERE</code> anzuzeigen."
  data-comment=""
  data-default-text="SELECT ..."
  data-solution="
SELECT * 
FROM Charaktere 
WHERE Geschlecht='Weiblich' "
  ></sql-exercise>

Gut, aber das sind immer noch zu viele Zeilen zum Durchgehen, und du müsstest deine Suche verfeinern. Dazu können wir die Bedingung hinzufügen, dass das Mädchen silbergraue Augen hat. Auf Deutsch würde man sagen:

_Wähle alle Informationen der Charaktere aus, die Frauen sind und silbergraue Augen haben._

Wie vorhin übersetzt:

_WÄHLE * VON Charaktere WO Geschlecht='Weiblich' UND Augen='Silbergrau'_

<div class ="sideNote">
<p>Im Englischen sagt man "und" mit "and". Wir können also <code class="keyword">AND</code> verwenden, um Bedingungen zu kombinieren und sicherzustellen, dass der Charakter alle Bedingungen erfüllt.</p>
</div>

<sql-exercise
  data-question="5. Übersetze die Anfrage ins Englische, indem du das bisher Gelernte verwendest."
  data-default-text="SELECT ...
FROM ...
WHERE ...
AND ..."
  data-solution="
SELECT * 
FROM Charaktere 
WHERE Geschlecht='Weiblich' 
AND Augen='Silbergrau'"
  ></sql-exercise>

Immer noch zu viele Personen... Versuche, die Bedingung des Patronus Hase hinzuzufügen.

<sql-exercise
  data-question="6. Ändere die vorherige Anfrage um die Bedingung des Patronus Hase hinzuzufügen."
  data-comment="Versuche, die Lösung nicht zu verwenden, und frage einen Assistenten um Hilfe, wenn du Hilfe brauchst."
  data-default-text="SELECT ..."
  data-solution="
SELECT * 
FROM Charaktere 
WHERE Geschlecht='Weiblich' 
AND Augen='Silbergrau'
AND Patronus='Hase'"
  ></sql-exercise>

Hast du sie jetzt gefunden? 

<input-feedback 
data-title="Schreibe den Namen der Person auf, wenn du denkst, dass du den Namen der freundlichen Hexe gefunden hast, die der alten Dame geholfen hat."
data-solution="luna lovegood"
success-message="Bravo, Detektivin! Du hast Luna Lovegood gefunden, dank dir wird sie eine schöne Belohnung für ihre heldenhafte Tat erhalten. Du kannst jetzt Informationen in einer Datenbank filtern."
failure-message="Das ist nicht die richtige Person, versuche es erneut."></input-feedback>

<a name="zaehlenFiltern"></a>

## Zählen UND Filtern

Erinnerst du dich, wie man zählt? Nun, jetzt, da du filtern kannst mir <code>WHERE</code>, kannst du auch etwas spezifischere Dinge zählen.

<sql-exercise
  data-question="7. Versuche die Anzahl der männlichen Zauberer mit schwarzen, roten oder braunen Haaren zu zählen, indem du die Lücken ausfüllst."
  data-comment="Fülle die fehlenden Lücken aus."
  data-default-text="SELECT COUNT(*) 
FROM Charaktere 
WHERE ... = 'Männlich' 
AND (... = 'Schwarz' OR Haare = ... OR Haare = ...)"
  data-solution=" 
SELECT COUNT(*)
FROM Charaktere
WHERE Geschlecht = 'Männlich'
AND (Haare='Schwarz' OR Haare='Rot' OR Haare='Braun')"
  success-message="Richtig!"
  ></sql-exercise>

<div class="sideNote">
<p>Du hast sicherlich bemerkt, dass wir <code class="keyword">OR</code> verwenden, um <em>oder</em> auszudrücken. Was ist der Unterschied zwischen <code>OR</code> und <code>AND</code>?</p>
</div>

Aber wir können es noch besser machen! Anstatt jedes Mal <code>Haare=...</code> zu wiederholen, ist es einfacher, etwas zu schreiben, wie "die Haare müssen in der Liste: {'Schwarz', 'Rot', 'Braun'} sein".

<div class="sideNote">
<p>Wir können <code class='keyword'>IN</code> verwenden, um die Möglichkeiten aufzulisten.</p>
</div>

<sql-exercise
  data-question="8. Vervollständige die folgende Abfrage."
  data-comment="Vergleiche diese Abfrage mit die Abfrage davor. Geben sie das gleiche Ergebnis? Du kannst auch versuchen, andere Dinge in der Tabelle zu zählen, wenn du möchtest."
  data-default-text="SELECT COUNT(*)
FROM ...
WHERE Geschlecht = 'Männlich'
AND Haare IN ('Schwarz','Rot',...)"
  data-solution="
SELECT COUNT(*)
FROM Charaktere
WHERE Geschlecht = 'Männlich'
AND Haare IN ('Schwarz','Rot','Braun')"
  ></sql-exercise>

Versuche jetzt ein ganze Abfrage selber zu schreiben.
<sql-exercise
  data-question="9. Wie viele Zauberer und Hexen sind in den Jahren 1979, 1980, 1981 oder 1982 geboren?"
  data-comment="Verwende COUNT(*). Es gibt mehrere Möglichkeiten, diese Aufgabe zu lösen."
  data-default-text=""
  success-message="Genau!"
  data-hint="
SELECT COUNT(*) 
FROM Charaktere 
WHERE Geburt IN"
  data-solution="
SELECT COUNT(*) 
FROM Charaktere 
WHERE Geburt IN (1979,1980,1981,1982)
/*
SELECT COUNT(*)
FROM Charaktere
WHERE Geburt > 1978 AND Geburt < 1983
*/"
  ></sql-exercise>

<div class="sideNote">
<p> Die Zeichen <code class="keyword"><</code> und <code class="keyword">></code> zwischen zwei Zahlen stehen für "ist kleiner als" respektiv "ist grösser als". Zum beispiel: 1 < 2 und 2  > 1.</p>
</div>

<a name="struktur"></a>

## Die verschiedenen Tabellen


Bisher haben wir immer auf die Tabelle _Charaktere_ zugegriffen, in dem wir <code>FROM Charaktere</code> geschrieben haben. Bevor du dich dem finalen Rätsel stellst, sagt Professor McGonagall, dass es zusätzlich zu der Tabelle _Charaktere_ zwei weitere Tabellen in der Datenbank gibt, die nützlich sein werden:
* _Verwandte_, die alle Verwandtschaftsbeziehungen zwischen den Charakteren auflistet.
* _Kreaturen_, die alle magischen Kreaturen auflistet.

Es ist immer praktisch, einen Überblick über die Datenbank des Zaubereiministeriums in Form eines Schemas zu haben:
<figure>
<img src="imgs/HarryPotterDB_de.png"><figcaption>Struktur der Datenbank. Eine Tabelle wird durch eine Kasten dargestellt. Jede Zeile in den Kasten entspricht einem Attribut der Tabelle.</figcaption>
</figure>

Wir werden uns die Tabelle _kreaturen_ später ansehen. Im Moment ist in der Tabelle _Verwandte_ der _erste\_Name_ der/die _verwandtschaft_ des _zweite\_Name_. Zum Beispiel ist in der folgenden Tabelle Lily die Mutter von Harry und Harry ist der Sohn von James.

<table class="datatable">
<thead>
  <tr>
    <th class="tg-0pky">erster_Name</th>
    <th class="tg-0pky">zweiter_Name</th>
    <th class="tg-0pky">verwandtschaft</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Lily Potter</td>
    <td class="tg-0pky">Harry Potter</td>
    <td class="tg-0pky">Mutter</td>
  </tr>
  <tr>
    <td class="tg-0pky">Harry Potter</td>
    <td class="tg-0pky">James Potter</td>
    <td class="tg-0pky">Sohn</td>
  </tr>
  <tr>
    <td class="tg-0pky">...</td>
    <td class="tg-0pky">...</td>
    <td class="tg-0pky">...</td>
  </tr>
</tbody>
</table>

<sql-exercise
  data-question="Erkunde die Tabelle Verwandte."
  data-comment="Beginne damit, alle Attribute beider Tabellen anzuzeigen."
  data-default-text=""
  data-hint="Probiere etwas wie
SELECT *
FROM Verwandte
LIMIT 5"></sql-exercise>

<div class='supplementary'>
Um deine Erkundungen zu leiten, kannst du die beiden folgenden Herausforderungen ausprobieren:

<sql-exercise
  data-question="10. Liste alle Attribute der Personen, die einen Bruder haben."
  data-default-text=""
  success-message="Genau! Das sind große Familien!"
  failure-message=""
  data-hint="Probiere etwas wie
SELECT *
FROM Verwandte
WHERE Verwandtschaft = ..."
  data-solution="
SELECT *
FROM Verwandte
WHERE Verwandtschaft = 'Bruder'"
  ></sql-exercise>

<sql-exercise
  data-question="11. Wie heißt die Großmutter von Neville Longbottom?"
  data-default-text=""
  success-message="Das ist sie! Gut gemacht."
  failure-message="Das ist noch nicht die richtige Person..."
  data-hint="Probiere etwas wie
SELECT erster_Name
FROM ...
WHERE zweiter_Name = ...
AND ... = 'Grossmutter'"
  data-solution="
SELECT erster_Name
FROM Verwandte
WHERE zweiter_Name = 'Neville Longbottom'
AND verwandtschaft = 'Grossmutter'"
  ></sql-exercise>
</div>

Schließlich kannst du dank dieser neuen Tabellen auch Informationen miteinander verknüpfen. Zum Beispiel, wenn du wissen möchtest, welche Zauberer eine Tochter haben und blaue Augen haben, benötigst du Informationen aus zwei verschiedenen Tabellen. Du müsstest also versuchen, sie miteinander zu verbinden. Schauen wir uns erst einmal an, wie man die beiden Informationen getrennt findet.

* Zuerst, um die Namen der Zauberer und Hexen zu finden, die eine Tochter haben, wählen wir die Tabelle _Verwandte_ aus und filtern die Ergebnisse, wenn die Verwandtschaft gleich "Tochter" ist.

<sql-exercise
  data-question="12. Die Namen der Zauberer, die eine Tochter haben"
  data-comment="Du kannst es alleine versuchen, aber zögere nicht, auf Hinweis zu drucken."
  data-default-text=""
  data-hint="Fülle die Lücken aus
SELECT ...
FROM ...
WHERE ...='Tochter'"
  data-solution="
SELECT erster_Name 
FROM Verwandte 
WHERE verwandtschaft='Tochter'"
  ></sql-exercise>

* Dann möchten wir den Namen der Zauberer finden, die blaue Augen haben.

<sql-exercise
  data-question="13. Die Namen der Zauberer, die blaue Augen haben"
  data-comment=""
  data-default-text=""
  data-hint="Fülle die Lücken aus
SELECT Name 
FROM Charaktere
WHERE ...=..."
  data-solution="
SELECT Name 
FROM Charaktere
WHERE Augen='Blau'"
  ></sql-exercise>

* Wir setzen die beiden Bedingungen zusammen und kombinieren die vorherigen Antworten in einem einzigen Befehl.

<sql-exercise
  data-question="14. Die Namen der Zauberer und Hexen, die blaue Augen und eine Tochter haben"
  data-comment="Zögere nicht, es so zu machen wie zuvor: zuerst einen Satz, dann einen vereinfachten Satz und übersetze ihn in Code. Füge die Lösungen der beiden vorherigen Punkte ein."
  success-message="Juhu!!! Du hast Informationen aus zwei verschiedenen Tabellen miteinander verknüpft, du bist eine wahre Expertin!"
  data-default-text="SELECT Name
FROM Charaktere
WHERE Name IN (/*Die Namen der Zauberer und Hexen, die eine Tochter haben*/)
AND /*die Augen sind blau*/"
  data-hint="Hinweis: Du musst verwenden, was wir zuvor gelernt haben.
1. Die Namen der Zauberer und Hexen, die eine Tochter haben:
SELECT erster_Name 
FROM Verwandte 
WHERE verwandtschaft='Tochter'
1. Die Zauberer, die blaue Augen haben:
WHERE Augen = 'Blau'"
  data-solution="
SELECT Name
FROM Charaktere
WHERE Name IN (SELECT erster_Name 
              FROM Verwandte 
              WHERE verwandtschaft='Tochter')
AND Augen='Blau'"
  ></sql-exercise>

Du kannst also mehrere SQL-Befehle ineinander verschachteln.

### Der Diebstahl des Feuerkelchs

Du hast jetzt alle Werkzeuge, um dich der großen Untersuchung des Diebstahls des Feuerkelchs zu stellen! Wenn du dich bereit fühlst, die Herausforderung anzunehmen, gehe zur nächsten Seite.
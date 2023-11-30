---
layout: tutorial_de
title: Zusätzliche Herausforderungen
dbFile: data/harrypotter_de.db
---
# Zusätzliche Herausforderungen

<a name="not"></a>

## NOT eine normale Umfrage

Für eine Umfrage müsstest du alle Kreaturen auflisten, die Federn haben. 
<sql-exercise
  data-question="Zum aufwärmen, zeige die Tabelle _kreaturen_ und lies die verschiedenen Spalten."
  data-default-text="SELECT *
FROM kreaturen"></sql-exercise>

Alle Kreaturen bei denen die Spalte _federn\_kreatur_ _?_ ist, haven keine Federn. Das wollen wir eben nicht!

<div class="sideNote"><p>Um etwas zu filtern, das wir nicht wollen, können wir die Verneinung verwenden: <code class="keyword">NOT</code> ("nicht" auf Deutsch) vor der Bedingung.</p></div>

<sql-exercise
  data-question="Welche Kreaturen haben Haare?"
  data-comment="Auf Deutsch würde die Abfrage wie folgt aussehen: 'Wähle den Namen der Kreaturen und ihre Federn aus der Tabelle Kreaturen aus, bei denen ihre Federn nicht unbekannt sind.'"
  success-message="🐉 Gut gemacht!"
  data-default-text="SELECT ...
FROM ...
WHERE ..."
  data-hint="
SELECT Name_kreatur, federn_kreatur
FROM Kreaturen
WHERE NOT ...=..."
  data-solution="
SELECT Name_kreatur, federn_kreatur
FROM Kreaturen
WHERE NOT federn_kreatur='?'"
  ></sql-exercise>

<div class="sideNote">
<h3>Profi-Tipp</h3>
Anstatt auf "Run" zu klicken, kannst du [Shift⇧]+[Enter↵] auf deiner Tastatur drücken, um deinen Befehl auszuführen.
</div>

<a name="like"></a>

## I LIKE SQL

Du hast sicherlich bemerkt, dass du sehr präzise sein musst, wenn du spezifische Daten suchst, mit dem Zeichen <code>=</code>. Zum Beispiel, <code> ... WHERE Name = "Minerva McGonagall" AND ...</code>. Aber wenn du nur einen Teil einer Information kennst, kannst du <code class="keyword">LIKE</code> verwenden. Das ermöglicht es, nach Text zu suchen, der in der Tabelle enthalten ist.

<sql-exercise
  data-question="Zum Beispiel gibt es im Namen 'Minerva McGonagall' 'Mine' oder 'onaga' oder auch 'McGo'."
  data-comment=""
  data-default-text="SELECT Name
FROM Charaktere
WHERE Name LIKE '%MINE%'"
  ></sql-exercise>

<div class="sideNote">
Wir können eine Bedingung erstellen, indem wir <code>=</code> durch <code class="keyword">LIKE</code> ersetzen und den Text, den wir suchen möchten, zwischen <code>"%...%"</code> platzieren.
</div>

<sql-exercise
  data-question="Zeige alle Kreaturen an, die 'drache' im Namen enthalten."
  data-hint="SELECT *
FROM Kreaturen
WHERE ... LIKE ..."
success-message="Was ist deine Liebligsdrache?"
  data-solution="SELECT *
FROM Kreaturen
WHERE Name_Kreatur LIKE '%drache%'"
  ></sql-exercise>

<a name="join"></a>

## Relationale Datenbanken

Der wirkliche Vorteil bei der Verwendung einer Datenbank ist, dass du diese Tabellen miteinander verknüpfen kannst! Erinnere dich an das Schema, das wir zuvor gesehen haben:

<img src="imgs/HarryPotterDB_de.png">

Man könnte zum Beispiel alle Zauberer sehen wollen, die ein ein Patronus mit spezielle eigenschaften haben. Die Eigenschaften von Kreaturen ist jedoch nicht in derselben Tabelle wie die Namen der Zauberer. Die folgende Abfrage kann daher nicht funktionieren.

<code class="codeBloc">SELECT Name FROM Charakter WHERE NOT Eigenschaften_kreature = '?'</code>

Die Eigenschaften von Kreaturen befindet sich in der Tabelle Kreaturen. Du musst also diese beiden Tabellen mit dem Befehl <span class="keyword">JOIN</span> verbinden. Zum Beispiel, wenn Harry Potter ein Patronus "Hochwild" hat, möchten wir, dass alle Informationen zum Hochwild zur Tabelle Charakter hinzugefügt werden. Dafür könnten wir etwas schreiben wie:

_Wähle alle Attribute von charaktere aus, indem du die Tabelle Kreaturen verbindest, so dass der Patronus des Charakters dem Namen der Kreatur entspricht._

In vereinfachter Form erhalten wir:

_WÄHLE * AUS VON Charaktere VERBINDE Kreaturen DAMIT Charaktere.Patronus=Kreaturen.Name_Kreatur

Im Englischen übersetzen wir:

<code class="codeBloc"> SELECT *
FROM Charaktere 
JOIN Kreaturen ON Charaktere.Patronus=Kreaturen.Name_Kreatur</code>

Du kannst es jetzt selbst ausprobieren.

<sql-exercise
  data-question="Verbinde die Tabellen Charaktere und Kreaturen über das Attribut Patronus = Name_Kreaturen und finde alle Zauberer und Hexen, die einen Patronus haben, der spezielle eigenschaften hat."
  data-comment="Du kannst den Befehl verwenden, den wir gerade gesehen haben, und die Ergebnisse mit <code>WHERE</code> wie zuvor filtern."
  data-default-text=""
  success-message="Super! Du bist jetzt eine echte Datenwissenschaftlerin."
  data-hint="SELECT Name, Patronus, eigenschaften_kreatur
FROM Charaktere 
JOIN Kreaturen ON ... =Kreaturen.Name_Kreatur
WHERE NOT ... ='?'"
  data-solution="SELECT Name, Patronus, eigenschaften_kreatur
FROM Charaktere 
JOIN Kreaturen ON Charaktere.Patronus=Kreaturen.Name_Kreatur
WHERE NOT eigenschaften_kreatur='?'"
  ></sql-exercise>
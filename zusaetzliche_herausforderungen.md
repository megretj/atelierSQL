---
layout: tutorial_de
title: Zusätzliche Herausforderungen
dbFile: data/harrypotter_de.db
---
# Zusätzliche Herausforderungen

<div class="warning">
<p>Die zusätzliche Herausforderung ist noch nicht abgeschlossen, aber die Idee wäre entweder <code>JOIN</code> oder <code>LIKE</code> zu lehren.</p>
</div>

<a name="not"></a>

## NOT eine normale Umfrage

Für eine Umfrage müsstest du alle Kreaturen auflisten, die Haare haben. Anders ausgedrückt, du musst die Kreaturen finden, bei denen die Spalte _poils\_créature_ nicht _?_ ist.

<div class="sideNote"><p>Um etwas zu filtern, das wir nicht wollen, können wir die Verneinung verwenden: <code class="keyword">NOT</code> ("not" auf Englisch) vor der Bedingung.</p></div>

<sql-exercise
  data-question="Welche Kreaturen haben Haare?"
  data-comment="Auf Französisch würde die Abfrage wie folgt aussehen: 'Wähle den Namen der Kreaturen und ihre Haare/Federn aus der Tabelle Kreaturen aus, bei denen ihre Haare/Federn nicht unbekannt sind.'"
  success-message="🐉 Gut gemacht!"
  data-default-text="SELECT ...
FROM ...
WHERE ..."
  data-hint="
SELECT nom_créature, plumes_poils
FROM créatures
WHERE NOT ...=..."
  data-solution="
SELECT nom_créature, plumes_poils
FROM créatures 
WHERE NOT plumes_poils='?'"
  ></sql-exercise>

<div class="sideNode">
<h3>Profi-Tipp</h3>
Anstatt auf "Run" zu klicken, kannst du [Shift⇧]+[Enter↵] auf deiner Tastatur drücken, um deinen Befehl auszuführen.
</div>

<a name="like"></a>

## I LIKE SQL

Du hast sicherlich bemerkt, dass du sehr präzise sein musst, wenn du spezifische Daten suchst, mit dem Zeichen <code>=</code> (zum Beispiel <code> ... WHERE nom = "Minerva McGonagall" AND ...</code>). Aber wenn du nur einen Teil einer Information kennst, kannst du <code class="keyword">LIKE</code> verwenden. Das ermöglicht es, nach Text zu suchen, der in der Tabelle enthalten ist.

<sql-exercise
  data-question="Zum Beispiel gibt es im Namen 'Minerva McGonagall' 'Mine' oder 'onaga' oder auch 'McGo'."
  data-comment=""
  data-default-text="SELECT nom
FROM personnages
WHERE nom LIKE '%MIN%'"
  ></sql-exercise>

<div class="sideNote">
Wir können eine Bedingung erstellen, indem wir <code>=</code> durch <code class="keyword">LIKE</code> ersetzen und den Text, den wir suchen möchten, zwischen <code>"%...%"</code> platzieren.
</div>

<sql-exercise
  data-question="Zeige alle Kreaturen an, die 'chat' im Namen enthalten."
  data-hint="SELECT *
FROM créatures
WHERE ... LIKE ..."
  data-solution="SELECT *
FROM créatures
WHERE nom_créature LIKE '%chat%'"
  ></sql-exercise>

<a name="join"></a>

## Relationale Datenbanken

Der wirkliche Vorteil bei der Verwendung einer Datenbank wie der, die wir bisher verwendet haben, ist, dass du diese Tabellen miteinander verknüpfen kannst! Erinnere dich an das Schema, das wir zuvor gesehen haben:

<img src="imgs/HarryPotterDB_de.png">

Man könnte zum Beispiel alle Zauberer sehen wollen, die ein Geschöpfstatus "Imaginäres Wesen" haben. Der Geschöpfstatus ist jedoch nicht in derselben Tabelle wie die Namen der Zauberer. Die folgende Abfrage kann daher nicht funktionieren.

<code class="codeBloc">SELECT nom FROM personnages WHERE statut_créature='Imaginäres Wesen'</code>

Der Geschöpfstatus befindet sich in der Tabelle créatures. Du musst also diese beiden Tabellen mit dem Befehl <span class="keyword">JOIN</span> verbinden. Zum Beispiel, wenn Harry Potter ein Patronus "Hirsch" hat, möchten wir, dass alle Informationen zum Hirsch zur Tabelle personnages hinzugefügt werden. Dafür könnten wir etwas schreiben wie:

_Wähle alle Attribute von personnages aus, indem du die Tabelle créatures verbindest, so dass der Patronus des Charakters dem Namen der Kreatur entspricht._

In vereinfachter Form erhalten wir:

_SELECTIONNE * DE personnages JOINDRE créatures TEL QUE personnages.patronus=créatures.nom

_créature_

Im Englischen übersetzen wir:

<code class="codeBloc"> SELECT *
FROM personnages 
JOIN créatures ON personnages.patronus=créatures.nom_créature</code>

Du kannst es jetzt selbst ausprobieren.

<sql-exercise
  data-question="Verbinde die Tabellen personnages und créatures über das Attribut patronus = nom_créatures und finde alle Magier, die einen Patronus haben, der ein imaginäres Wesen ist."
  data-comment="Du kannst den Befehl verwenden, den wir gerade gesehen haben, und die Ergebnisse mit <code>WHERE</code> wie zuvor filtern."
  data-default-text=""
  success-message="Super! Du bist jetzt eine echte Datenwissenschaftlerin."
  data-hint="SELECT *
FROM personnages 
JOIN créatures ON ... =créatures.nom_créature
WHERE ... ='Imaginäres Wesen'"
  data-solution="SELECT *
FROM personnages 
JOIN créatures ON personnages.patronus=créatures.nom_créature
WHERE statut_créature='Imaginäres Wesen'"
  ></sql-exercise>
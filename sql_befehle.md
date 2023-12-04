---
layout: tutorial_de
title: SQL-Befehle
dbFile: data/harrypotter_de.db
---

# Tabelle mit allen Übersetzungen einfügen
Auf dieser Seite findest du eine Zusammenfassung der grundlegenden SQL-Befehle, ihrer Wirkung und Übersetzung.

Das grundlegende Format einer SQL-Abfrage lautet wie folgt:

<code class="codeblock">
SELECT ... FROM ... 
<code class="codeblock">

Darauf können Schlüsselwörter hinzugefügt werden, um die Abfrage zu spezifizieren (suchen).

<sql-exercise
  data-question="Hier kannst du SQL-Abfragen testen."
  data-default-text=""
  ></sql-exercise>

<table class='datatable'>
<thead>
  <tr>
    <th>Befehl</th>
    <th>Übersetzung</th>
    <th>Verwendung</th>
    <th>Beispiel</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>SELECT</td>
    <td>AUSWÄHLEN</td>
    <td>Am Anfang einer SQL-Abfrage</td>
    <td>SELECT name FROM charaktere </td>
  </tr>
  <tr>
    <td>*</td>
    <td>alle</td>
    <td>Wählt alle Spalten einer Zeile aus</td>
    <td>SELECT * FROM charaktere LIMIT 5</td>
  </tr>
  <tr>
    <td>FROM</td>
    <td>VON</td>
    <td>Um die Tabelle auszuwählen, aus der Informationen abgerufen werden sollen</td>
    <td>SELECT Verbreitung_Kreatur FROM kreaturen</td>
  </tr>
  <tr>
    <td>LIMIT</td>
    <td>BESCHRÄNKUNG</td>
    <td>Beschränkt die angezeigten Ergebnisse</td>
    <td>SELECT Name FROM charaktere LIMIT 3</td>
  </tr>
  <tr>
    <td>WHERE</td>
    <td>WO</td>
    <td>Filtert die Abfrage anhand der nach WHERE angegebenen Bedingungen</td>
    <td>SELECT * FROM charaktere WHERE Geburt < 1960</td>
  </tr>
  <tr>
    <td>AND</td>
    <td>UND</td>
    <td>Wenn zwei Bedingungen überprüft werden sollen</td>
    <td>SELECT * FROM charaktere WHERE Geschlecht = 'Weiblich' AND patronus='Fisch'</td>
  </tr>
  <tr>
    <td>OR</td>
    <td>ODER</td>
    <td>Wenn es die Wahl zwischen zwei Bedingungen gibt<br></td>
    <td>SELECT * FROM charaktere WHERE Blutstatus = "Muggel" OR patronus="?"</td>
  </tr>
    <tr>
    <td>NOT</td>
    <td>NICHT</td>
    <td>Wenn wann das Gegenteil von eine Bedingung will.<br></td>
    <td>SELECT * FROM charaktere WHERE NOT Blutstatus = "Muggel"</td>
  </tr>
  <tr>
    <td>IN</td>
    <td>IN</td>
    <td>Wenn es die Wahl zwischen mehreren Werten für dasselbe Attribut gibt</td>
    <td>SELECT * FROM kreaturen WHERE Augen_Kreatur IN ('Grau','Schwarz','Rot')</td>
  </tr>
  <tr>
    <td>DISTINCT</td>
    <td>UNTERTSCHEIDBAR</td>
    <td>Wählt unterschiedliche Ergebnisse aus</td>
    <td>SELECT DISTINCT Verwandtschaft FROM verwandte </td>
  </tr>
</tbody>
</table>
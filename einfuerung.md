---
title: Einfuerung workshop SQL
layout: tutorial_de
dbFile: data/harrypotter_de.db
---

<h1>Accio Query!</h1>

<div class="warning">
Dies ist eine Wiederholung der Informationen, die du bereits während der Präsentation gehört hast. Du musst also nicht alles nochmals genau lesen.
</div>

Heute lernen wir Datenbanken mit einem sehr nützlichen Tool zu verwalten: SQL (Structured Query Language auf Englisch bedeutet Strukturierte Abfragesprache). Dank der Entwicklung der digitalen Welt ist es einfach, viele Daten zu speichern. Aber es ist manchmal nicht so einfach, sie gut zu organisieren, um sie später leicht wiederzufinden.

<div class="sideNote">
Zum Beispiel hat Instagram große Datenbanken, um alle Bilder der Benutzer*innen, Kommentare, Likes usw. zu speichern. Wenn du die Instagram-App öffnest, sendet dein Telefon eine Nachricht an Instagram, um sie nach den Daten zu fragen, die dich interessieren. Stell dir jetzt vor, es gibt nicht nur deine Bilder, sondern die von jedem Instagram-Benutzer und jeder Instagram-Benutzerin (über eine Milliarde!). Dafür braucht es eine Art großes Archiv oder große digitale Bibliothek, um all das zu speichern. Dieses Archiv nennt man eine Datenbank. Um Daten aus dieser Datenbank abzurufen oder neue Daten einzufügen, muss man Befehle an den Computer senden.
</div>

Wie du sehen wirst, wird das Ergebnis deiner Abfragen in Form einer Tabelle angezeigt, denn schließlich sind Datenbanken nur große Tabellen! Trotzdem sind sie manchmal zu groß, um die Informationen manuell zu durchsuchen. Aber zum Glück sind Computer sehr gut in dieser Art von Aufgabe. Aber man muss immer noch die Sprache der Computer sprechen können, um sie höflich zu bitten, die langwierige Arbeit der Informationsrecherche zu erledigen.

Normalerweise muss man Programme installieren, um SQL verwenden zu können, aber diese Website wurde erstellt, um SQL direkt in deinem Browser zu verwenden. Um eine SQL-Anfrage zu stellen, musst du also deinen Befehl in einen Codeblock wie diesen eingeben und auf "RUN" klicken (auf Englisch starten oder ausführen).

<sql-exercise
  data-question="Dies ist ein interaktiver Codeblock. Du kannst den Code unten bearbeiten."
  data-comment="(Für Profis: Shift+Enter ist eine Tastenkombination, um den Befehl auszuführen, anstelle auf RUN zu klicken)"
  data-default-text="SELECT *
FROM charaktere
LIMIT 3"></sql-exercise>

<div class="sideNote">
Wir werden feststellen, dass die Datenbank nicht überall vollständig ist. Oft werden Daten von Menschen eingetragen, und es können Fehler auftreten. In unserem Fall haben wir die Website <a href="https://harrypotter.fandom.com/de/wiki/Harry-Potter-Lexikon:Hauptseite">Harry Potter Lexikon</a> verwendet. Es ist auch die Aufgabe eines Data Scientists, Daten zu "reinigen", um sie lesbar und konsistent zu machen! Es kann immer noch Fehler geben; du kannst sie uns gerne mitteilen, und wir werden die Datenbank entsprechend aktualisieren.
</div>

<div class="supplementary">
Die Besonderheit von SQL ist, dass die Syntax (die Schreibregeln) ziemlich frei ist. Insbesondere neigen wir dazu, Schlüsselwörter wie <code>SELECT</code> in Großbuchstaben zu schreiben, aber SQL unterscheidet nicht zwischen Groß- und Kleinschreibung. Du kannst auch Zeilenumbrüche und Tabulatoren nach Belieben hinzufügen. Für bessere Lesbarkeit halten wir uns oft an die in diesem Workshop vorgeschlagene Syntax. Es ist jedoch wichtig, die Reihenfolge einzuhalten, in der die Befehle geschrieben werden (SELECT (MIN/MAX/COUNT/SUM) dann FROM (dann JOIN) dann WHERE/LIMIT/LIKE usw.). Es ist auch wichtig, auf die Syntax innerhalb der Datenbank zu achten.
</div>

<div class="supplementary">
Informationen zur Datenbank:
<ul>
<li>Die Daten sind standardisiert, sodass sie alle mit einem Großbuchstaben beginnen.</li>
<li>Die Ziffern 0 im Geburts- und Sterbejahr bedeuten, dass wir die Information nicht haben oder dass die betreffende Person nicht gestorben ist.</li>
<li>Daten wie Haarfarbe, Augenfarbe und Patronus wurden teilweise zufällig generiert.</li>
</ul>
</div>

<div class="warning">
Um die Bücher/Filme nicht zu sehr zu spoilern, wurden einige Informationen über die Charaktere geändert. In jedem Fall empfehlen wir dringend, die Bücher zu lesen, wenn du sie noch nicht gelesen hast!
</div>

Wenn du dich nicht mehr an einen Befehl erinnerst, den du verwendet hast, kannst du das <a href="sql_befehle.html">Zusammenfassung der wichtigsten SQL-Befehle</a> überprüfen.

Wenn du bereit bist, kannst du mit dem Workshop beginnen, indem du auf den Link neben "Next" klickst.

---
title: Einfuerung workshop SQL
layout: tutorial_de
dbFile: data/harrypotter_de.db
---
<h1>Accio Query!</h1>
<div class="warning">
Dies ist eine Wiederholung der Informationen, die du bereits während der Präsentation gehört hast. Du musst also nicht alles nochmals genau lesen und kannst mit den <a href="zaubereiministerium.html">workshop</a> anfangen.
<a href="zaubereiministerium.html" class="button-link center"> Workshop anfangen </a>
</div>

Heute lernen wir, Datenbanken mit einem sehr nützlichen Tool zu verwalten: SQL (Structured Query Language bedeutet auf Englisch Strukturierte Abfragesprache). Wieso braucht man Datenbanken überhaupt?

<div class="sideNote">
Wenn du auf Spotify nach Musik suchst, sendet dein Telefon eine Nachricht an ein Spotify-Datenzentrum mit deiner Suche. Ein Programm im Datenzentrum wird dann ausgeführt, um die Musik zu finden, die dich interessiert, und sie dir dann zu schicken. Aber es gibt Millionen von Songs auf Spotify! Und sie haben alle einen Titel, einen Stil, eine Anzahl von Wiedergaben, einen oder mehrere Künstler... Wie findest du also schnell die Musik, die du in diesem großen Chaos suchst? Es braucht so etwas wie ein großes Archiv oder eine große digitale Bibliothek, um all das zu speichern. Diese Aufzeichnung nennt man eine <span class="keyword">Datenbank</span>. Um Daten in dieser Datenbank abzurufen oder neue Daten hinzuzufügen, müssen Befehle an den Computer gesendet werden. Spotify hat große Datenbanken, um nicht nur alle Songs der Künstler, sondern auch die Anzahl der Wiedergaben, die Playlists der Benutzer, die Wiedergabehistorie usw. zu speichern.
</div>

Dank der Entwicklung der digitalen Welt ist es einfach, viele Daten zu speichern. Aber es ist manchmal nicht so einfach, sie gut zu organisieren, um sie später leicht wiederzufinden, dabei hilft uns SQL. Wie du sehen wirst, wird das Ergebnis deiner Abfragen in Form einer Tabelle angezeigt, denn schließlich sind Datenbanken nur große Tabellen! Trotzdem sind sie manchmal zu groß, um die Informationen *Zeile per Zeile* zu durchsuchen. Zum Glück sind Computer sehr gut in dieser Art von Aufgabe. Aber man muss immer noch die Sprache der Computer sprechen können, um sie höflich zu bitten, die langwierige Arbeit der Informationsrecherche zu erledigen. Für Datenbanken heisst diese sprache SQL.

Normalerweise muss man Programme installieren und ein Datenbank laden, um SQL verwenden zu können, aber diese Website wurde erstellt, um SQL direkt in deinem Browser zu verwenden auf eine Datenbank über das [Harry Potter Universum](#datenbankInfor). Um eine SQL-Anfrage [^1] zu stellen, musst du also deinen Befehl in einen Codeblock wie unten eingeben und auf "RUN" klicken (auf Deutsch heisst run starten oder ausführen).

[^1]: Genauer gesagt, wendet man [SQLite](https://sqlite.org/index.html), da SQL kein Programmiersprache im eigentlichen Sinne ist.

<sql-exercise
  data-question="Dies ist ein interaktiver Codeblock. Du kannst den Code unten bearbeiten."
  data-comment=""
  data-default-text="SELECT *
FROM charaktere
LIMIT 3"></sql-exercise>

<div class="supplementary">
Die Besonderheit von SQL ist, dass die Syntax (die Schreibregeln) ziemlich frei ist. Insbesondere neigen wir dazu, Schlüsselwörter wie <code>SELECT</code> in Großbuchstaben zu schreiben, aber SQL unterscheidet nicht zwischen Groß- und Kleinschreibung. Du kannst auch Zeilenumbrüche und Tabulatoren nach Belieben hinzufügen. Für bessere Lesbarkeit halten wir uns oft an die in diesem Workshop vorgeschlagene Syntax. Es ist jedoch wichtig, die Reihenfolge einzuhalten, in der die Befehle geschrieben werden (SELECT (MIN/MAX/COUNT/SUM) dann FROM (dann JOIN) dann WHERE/LIMIT/LIKE usw.). Es ist auch wichtig, auf die Syntax innerhalb der Datenbank zu achten.
</div>


<a name="datenbankInfo"></a>

<h4>Informationen zu diese Datenbank:</h4> 
<ul>
<li>Die Daten würden von </li>
<li>Die Daten sind standardisiert, sodass sie alle mit einem Großbuchstaben beginnen.</li>
<li>Die Ziffern 0 im Geburts- und Sterbejahr bedeuten, dass wir die Information nicht haben oder dass die betreffende Person nicht gestorben ist.</li>
<li>Daten wie Haarfarbe, Augenfarbe und Patronus wurden teilweise zufällig generiert.</li>
</ul>

<div class="sideNote">
Wir werden feststellen, dass die Datenbank nicht überall vollständig ist. Oft werden Daten von Menschen eingetragen, und es können Fehler auftreten. In unserem Fall haben wir die Seite <a href="https://harrypotter.fandom.com/de/wiki/Harry-Potter-Lexikon:Hauptseite">Harry Potter Lexikon</a> verwendet. Es ist auch die Aufgabe eine Programiererin, Daten zu "reinigen", um sie lesbar und konsistent zu machen! Es kann immer noch Fehler geben; du kannst sie uns gerne mitteilen, und wir werden die Datenbank entsprechend aktualisieren.
</div>

<div class="warning">
Um die Bücher/Filme nicht zu sehr zu verraten, wurden einige Informationen über die Charaktere geändert. In jedem Fall empfehlen wir dringend, die Bücher zu lesen, wenn du sie noch nicht gelesen hast!
</div>

<h4> Hilfe </h4>

Wenn du dich nicht mehr an einen Befehl erinnerst, den du verwendet hast, kannst du die <a href="sql_befehle.html">Zusammenfassung der wichtigsten SQL-Befehle</a> ansehen.

Wenn du bereit bist, kannst du mit dem Workshop beginnen, indem du auf den Link neben "Next" klickst.
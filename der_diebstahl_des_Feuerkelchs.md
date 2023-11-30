---
layout: tutorial_de
title: Der Diebstahl des Feuerkelchs
dbFile: data/harrypotter_de.db
---
<figure>
<img src="imgs/HarryPotterDB_de.png"><figcaption>Erinnerung an die Struktur der Datenbank</figcaption>
</figure>

# Der Diebstahl des Feuerkelchs 

<figure>
<img src="imgs/newspaper_de.gif" style="width:80%;text-align:center;" alt="Schrecken in der Gringotts-Bank: Der Feuerkelch wurde gestohlen! Der Diebstahl ereignete sich in der Nacht vom 24. auf den 25. April 1995. Jemand drang in den Tresorraum ein und zerstörte mehrere Wände, um zu entkommen. Wir haben nur wenige Informationen über die Verdächtigen. Wir wissen nur, dass es einen Zeugen am Tatort gab."><figcaption>Eine Kopie der Titelseite des "Tagespropheten"</figcaption>
</figure>

<a name="zeuge"></a>

## Der Zeuge

Der Zeugenaufruf war erfolgreich. Die Ehefrau des Zeugen hat sich gemeldet, ihr Name ist Narzissa Malfoy.

<sql-exercise
  data-question="Versuche eine Abfrage zu schreiben, um den Zeugen des Vorfalls zu finden."
  data-comment="Versuche, die Lösung nicht zu verwenden, und frage eine/n Assistent/in, wenn du Hilfe benötigst."
  data-default-text="SELECT ..."
  data-hint="SELECT zweite_Name
  FROM verwandte
  ... erste_Name = ... ... verwandtschaft = ..."
  data-solution="
SELECT zweite_Name
FROM verwandte
WHERE erste_Name = 'Narzissa Malfoy' 
AND verwandtschaft = 'Ehefrau'
/* Oder das würde auch gehen
SELECT erste_Name 
FROM verwandte 
WHERE zweite_Name = 'Narzissa Malfoy' 
AND verwandtschaft = 'Ehemann'
*/" 
  ></sql-exercise>


<input-feedback 
data-title="Schreibe den Namen des Zeugen, wenn du denkst, dass du seinen Namen gefunden hast."
data-solution="lucius malfoy"
success-message="Ja, das ist richtig! Du schickst ihm also eine Nachricht per Eulenpost, um ihn nach Informationen zum Diebstahl zu fragen, und er antwortet dir folgendes:
Liebe Inspektorin, ich spazierte mit meiner Frau Narzissa nach Mitternacht durch die Winkelgasse, als ich einen lauten Knall hörte. Ich sagte meiner Frau, sie solle fliehen, aber ich wollte noch einen Moment bleiben, um herauszufinden, was vor sich ging. Da es Nacht war, konnte ich nicht sehr gut sehen, aber es schien mir, als ob zwei Personen vor der Gringotts-Bank kämpften. Es gab eine Frau mit dunklen (schwarze oder braune) Haaren und einen Mann mit schwarzen Haaren. Nach einigen Sekunden flog die Frau auf ihrem Besen davon, und Dementoren kämpften weiter mit dem Mann. Ohne Ressourcen rief der Mann seinen Patronus an, um sich gegen die Dementoren zu verteidigen. Es war eine Hochwild. Dann bin ich geflohen."
failure-message="Das ist nicht die richtige Person. Versuche es erneut."></input-feedback>

<a name="kaempfer"></a>

## Der Kämpfer

<sql-exercise
  data-question="Dank der Aussage des Zeugen kannst du herausfinden, wer der Mann ist, der kämpfte."
  data-comment="Wenn du ein wenig Hilfe brauchst, kannst du auf HINWEIS klicken, um einen Hinweis zu erhalten."
  data-default-text="SELECT ..."
  data-hint="Du musst einen männlichen Charakter finden, 
  mit schwarzen Haaren und einem Patronus in Form eines Hochwilds. 
  Achte darauf, dass du bei der Eingabe der Attribute auf Groß- und Kleinschreibung achtest."
  data-solution="
SELECT Name 
FROM Charaktere
WHERE Geschlecht='Männlich' 
AND Haare='Schwarz' 
AND Patronus='Hochwild' "
  ></sql-exercise>

<input-feedback 
data-title="Glaubst du, den Namen der Person gefunden zu haben, die am Tatort war?"
data-solution="severus snape"
success-message="Ja, das ist richtig! Du kontaktierst ihn für weitere Informationen, und er antwortet dir, dass er sich nicht mehr gut an die Szene erinnert, da er einen Zauber bekommen hat, der ihn die meisten Dinge vergessen ließ. Aber er erinnert sich daran, dass er gegen jemanden kämpfte, der Ähnlichkeit mit Sirius Black hatte. Außerdem schien er oder sie sicherlich älter als 40 Jahre zu sein."
failure-message="Das ist nicht die richtige Person. Versuche es erneut."></input-feedback>

<a name="schuldige"></a>

## Der/die Schuldige

<sql-exercise
  data-question="Du hast jetzt alle Informationen, die du brauchst, um den/die Schuldige/n des Diebstahls des Feuerkelchs zu finden!"
  data-comment="Versuche, alle Informationen auf ein Blatt Papier zu schreiben. Klicke dann auf den Hinweis, um zu überprüfen, ob du alle Informationen hast. Versuche dann, eine Abfrage zu schreiben, die alle Bedingungen einzeln und dann alle zusammen filtert."
  data-default-text="SELECT ..."
  data-hint="Die Informationen, die du bisher gesammelt hast, sind: 
  eine Frau, 
  mit schwarzen Haaren, 
  sie ist mit Sirius Black verwandt, 
  sie wurde vor 1955 geboren (sie ist älter als 40 Jahre und es steht am Anfang der Untersuchung, dass wir uns im Jahr 1995 befinden).
  sie ist noch nicht Tod! (d.h. Tod > 1995 oder Tod = 0)
  Versuche, alle Informationen separat zu finden und sie auf ein Blatt zu schreiben, oder verwende den folgende Muster:
SELECT Name
FROM Charaktere 
WHERE Name IN (SELECT erste_Name
              FROM verwandte
              WHERE zweite_Name=...)
AND Geschlecht=... 
AND (Haare=... OR Haare=...)
AND Geburt < ...
AND (Tod > ... OR Tod = ...)"
  data-solution="
Es ist einfacher, den Befehl in mehrere Teile zu zerlegen,
aber hier ist eine Möglichkeit, den Schuldigen in einem einzigen Befehl zu finden.
SELECT Name
FROM Charaktere 
WHERE Name IN (SELECT erste_Name
              FROM verwandte
              WHERE zweite_Name='Sirius Black')
AND Geschlecht='Weiblich' 
AND (Haare='Schwarz' OR Haare='Braun')
AND Geburt < 1955 
AND (Tod > 1995 OR Tod = '0')"
  ></sql-exercise>

<input-feedback 
data-title="Hast du es geschafft, herauszufinden, wer der/die Schuldige des Diebstahls war?"
data-solution="bellatrix lestrange"
lastQuest=true
success-message="Ausgezeichnet! Du hast die Schuldige gefunden: Bellatrix Lestrange. Dank dir konnte der Feuerkelch wiederbeschafft werden, und das Trimagische Turnier kann wie geplant in Hogwarts stattfinden."
failure-message="Das ist nicht die richtige Person. Versuche es erneut oder frage um Hilfe."></input-feedback>

Wenn du noch mehr über SQL lernen möchtest, kannst du die zusätzliche Herausforderung auf der nächsten Seite versuchen.
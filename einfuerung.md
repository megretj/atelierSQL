---
title: Workshop SQL
layout: tutorial_de
dbFile: data/harrypotter_de.db
---
<h1>Introduction</h1>

<div class="warning">
Les informations présentes dans l'introduction seront soit données lors de la présentation ou des informations supplémentaires. Tu n'as donc pas besoin de tout lire si tu as écouté la présentation.
</div>

Aujourd'hui nous allons apprendre à gérer des bases de données grace à un outil bien pratique: SQL (Structured Query Language en anglais veut dire Languague de Requête Structurée). Grâce au dévelopement du monde numérique il est facile d'enregistrer beaucoup de données. Mais c'est parfois pas si facile de bien les ranger pour facilement les retrouver plus tard. les  monde est confronté à une grande quantité de données ou d'informations.

<div class="sideNote">
Par exemple, Instagram a de grandes bases de données pour enregistrer toutes les images des utilisateurs, les commentaires, les likes, etc... Quand tu ouvre l'application instagram ton téléphone envoies un message chez Instagram pour leur demander de t'envoyer les données qui t'intéressent. Imagine maintenant qu'il n'y a pas seulement tes images, mais celles de chaque utilisateurs Instagram (plus d'un milliard!). Il faut une sorte de grosse archive ou grande bibliothèque digitale pour enregistrer tout ça. On appelle cette archive une base de données. Pour aller chercher des données sur cette base, ou y déposer de nouvelles données, il faut envoyer des commandes à l'ordinateur. 
</div>

Comme tu peux le voir, le résultat de tes requêtes est donné sous forme de tableau, car après tout, les bases de données ne sont que de grands tableaux! Malgré tout, ils sont un peu trop grands pour pouvoir chercher les informations à la main. Mais heuresement, les ordinateurs sont très bons pour ce genre de tâche. Mais encore faut-il savoir parler la langue des ordinateurs pour leur demander poliment de fair le long et fastudieux travail de recherche d'informations.

Généralement il faut installer des programmes pour pouvoir utiliser SQL mais ce site internet à été crée pour utiliser le SQL directement dans ton navigateur. Pour faire une requête SQL (plus précisément SQLite) il te suffit donc d'écrire ta commande dans un bloc de code comme celui ci et de cliquer sur "RUN" (lancer ou exécuter en anglais). 

<sql-exercise
  data-question="Ceci est un bloc de code interactif, tu peux éditer le code ci-dessous."
  data-comment="(Pour les pros: Shift+Enter est un raccourci de clavier pour exécuter la commande au lieu de clique sur RUN)"
  data-default-text="SELECT *
FROM personnages
LIMIT 3"></sql-exercise>

Dès que tu es prête, tu peux commencer l'atelier:

<a href="atelier.html" class="button-link"> Commencer l'atelier </a>

Si tu ne te souviens plus d'une commande que tu as utilisé, tu peux te référer au <a href="commandes_sql.html">résumé des principales commandes sql</a>.


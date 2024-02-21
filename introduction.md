---
title: Introduction atelier SQL
layout: tutorial_fr
dbFile: data/harrypotter_fr.db
---
<h1>Accio Query!</h1>

<div class="warning">
Les informations présentes dans l'introduction seront données lors de la présentation. Si tu as écouté la présentation, tu n'as pas besoin de tout lire et tu peux directement commencer avec <a href="atelier.html">l'atelier</a>.<a href="atelier.html" class="button-link center"> Commencer l'atelier </a>
</div>

Aujourd'hui nous allons apprendre à gérer des bases de données grace à un outil bien pratique: SQL (Structured Query Language en anglais veut dire Languague de Requête Structurée). Mais à quoi servent les bases de données?

<div class="sideNote">
<p>Quand tu cherches une musique sur Spotify, ton téléphone envoies un message à un centre de données de Spotify (un datacenter) avec ta recherche. Un programme dans le datacenter s'exécutera alors pour chercher les musiques qui t'intéressent et ensuite te les envoyer. Mais il y a des millions de musiques sur Spotify! Et elles ont chacune un titre, un style, un nombre d'écoutes, un ou plusieurs artistes ... Comment rapidement trouver rapidement la musique que tu cherches dans ce grand bazar? Il faut une sorte de grosse archive ou grande bibliothèque digitale pour enregistrer tout ça. On appelle cette archive une <span class="keyword">base de données</span>. Pour aller chercher des données sur cette base, ou y déposer de nouvelles données, il faut envoyer des commandes à l'ordinateur. Spotify a de grandes bases de données pour enregistrer non seulement toutes les musiques des artistes mais aussi le nombre d'écoutes, les playlists des utilisateurs, l'historique des écoutes, etc...</p>
</div>

Grâce au dévelopement du monde numérique il est facile d'enregistrer beaucoup de données. Mais c'est parfois pas si facile de bien les ranger pour facilement les retrouver plus tard.Comme tu pourras le voir, le résultat de tes requêtes est donné sous forme de tableau, car après tout, les bases de données ne sont que de grands tableaux! Malgré tout, ces derniers sont un peu trop grands pour pouvoir chercher les informations à la main. Mais heuresement, les ordinateurs sont très bons pour ce genre de tâche. Encore faut-il savoir parler la langue des ordinateurs pour leur demander poliment de faire le long et fastudieux travail de recherche d'informations. 

Comme pour tous les languages de programmation, il faut normalement installer des programmes pour pouvoir utiliser SQL mais ce site internet à été crée pour utiliser le SQL directement dans ton navigateur. Pour faire une requête SQL [^1] il te suffit donc d'écrire ta commande dans un bloc de code comme celui ci et de cliquer sur "RUN" (lancer ou exécuter en anglais). 

[^1]: Plus précisément, on utilise [SQLite](https://sqlite.org/index.html), car SQL est un concept de programmation plus qu'un vrai langage.

<sql-exercise
  data-question="Ceci est un bloc de code interactif, tu peux éditer le code ci-dessous."
  data-comment="(Pour les pros: Shift+Enter est un raccourci de clavier pour exécuter la commande au lieu de clique sur RUN)"
  data-default-text="SELECT *
FROM personnages
LIMIT 3"></sql-exercise>

<div class="supplementary">
La particularité de SQL est que la syntaxe (les règles d'écriture) est assez libre. En particulier, on prend l'habitude d'écrire des mots clés comme <code>SELECT</code> en majuscule mais SQLite ne fait pas la différence entre majuscules et minuscule. On peut aussi ajouter des retours à la ligne et des tabulations à souhait. Pour une meilleure lisibilité, on garde souvent la syntaxe proposée dans cet atelier. Il est par contre important de suivre l'ordre dans laquelle on écrit les commandes (SELECT (MIN/MAX/COUNT/SUM) puis FROM (puis JOIN) puis WHERE/LIMIT/LIKE etc...). Il faut aussi faire attention à la syntaxe à l'intérieur de la base de données.
</div>

<h4> Informations sur la base de données</h4>

* Les données proviennent du projet open-source <a href = "https://harrypotter.fandom.com/fr/wiki/Wiki_Harry_Potter">Wiki Harry Potter</a>.
* Les données sont standardisés de telle manière qu'elles commencent toutes par une lettre majuscule.
* Les chiffres 0 dans l'année de naissance et de mort veulent signifier que l'on a pas l'information ou que le personnage en question n'est pas mort.
* Des données telles que les cheveux, les yeux et le patronus on partiellement été générées aléatoirement.

<div class="sideNote">
On verra que la base de donnée n'est pas remplie partout. En effet, parfois les données ne sont pas disponible mais aussi souvent les données sont remplies par des humains et il peut y avoir des erreurs. Dans notre cas, on a utilisé le site <a href = "https://harrypotter.fandom.com/fr/wiki/Wiki_Harry_Potter">Wiki Harry Potter</a>. C'est aussi le travail d'un data scientist de "nettoyer" des données pour les rendre lisibles et cohérentes! Il se peut qu'il y ait encore des erreurs, tu peux volontiers nous les dire et on modifiera la base en conséquence.
</div>

<div class="warning">
Pour ne pas trop spoiler les livres/les films, certaines des informations sur les personnages ont été modifiées. Dans tous les cas si tu n'as pas encore lu les livres on te conseilles vivement de le faire!
</div>

Si tu ne te souviens plus d'une commande que tu as utilisée, tu peux te référer au <a href="commandes_sql.html">résumé des principales commandes sql</a>.

Dès que tu es prête, tu peux commencer l'atelier en cliquant sur le lien à coté de Next.

---
layout: tutorial_fr
title: Le ministère de la magie
dbFile: data/harrypotter_fr.db
---

# Le ministère de la magie 

Bienvenue dans le monde magique de Harry Potter! Tu as été employée en tant que détective et spécialiste informatique dans le grand ministère de la magie. Pour t'aider dans tes tâches, tu as accès au registre des magiciens, une base de données qui répertorie toutes les informations connues à propos du monde des sorciers.

<a name="base"></a>

## La requête magique

Ta cheffe, Professeure McGonagall, te montre comment fonctionne le système. Tu as accès à la base de donnée via une <span class="keyword">ligne de commande</span> dans un <span class="keyword">bloc de code</span> comme ci-dessous. Il suffit de rentrer une commande valide et de cliquer sur RUN pour voir le résultat. Comme c'est la première fois que tu utilise ce système, Professeure McGonagall te montre un exemple.

<sql-exercise
  data-question="Voici un exemple pour chercher le nom de 3 magiciens dans la base de données."
  data-comment="Essaies de modifier le nombre de noms qui sont affichés à 15"
  data-default-text="SELECT nom
FROM personnages
LIMIT 3"></sql-exercise>


<div class="sideNote">
<h3>Ta première requête SQL</h3>
<p>Tu peux voir qu'une commande ou <span class="keyword">requête</span> SQL se lit un peu comme une phrase. Les mots en majuscules sont des mots clés en anglais et les mots en minuscules spécifient ce que tu veux chercher. <code class="keyword">SELECT</code> veut dire Sélectionne, <code class=keyword>FROM</code> veut dire de ou depuis et <code class="keyword">LIMIT</code> veur dire limite. Donc si on traduit la ligne de code on trouve: "<code>SELECTIONNE</code> nom <code>DE</code> personnages <code>LIMITE</code> 3".</p>
</div> 

Avec chaque requête, on sélectionne un certain nombre <span class="keyword">d'attributs</span> (charctéristiques) comme le nom, le genre, l'année de naissance, etc. . Tu viens d'apprendre comment afficher le nom des magiciens, mais ça serait utile de savoir quels autres attributs peut on connaitre sur chaque personnage.

<div class ="sideNote">
<p>Pour sélectionner <strong>tous</strong> les attributs d'un personnage, il faut sélectionner <code class="keyword">*</code>. </p>
</div>

<sql-exercise
  data-question="Modifie la requête de tout à l'heure pour chercher tous les attributs de 15 magiciens dans la base de données."
  data-comment="Si tu n'arrives pas, tu peux cliquer sur 'SOLUTION' et la solution apparaitra... magiquement!"
  data-default-text = "/* Ceci est un commentaire. */
SELECT nom 
FROM personnages
LIMIT 15"
  data-solution="
SELECT *
FROM personnages
LIMIT 15"></sql-exercise>

<div class="sideNote">
<p> Tout ce qui se trouve entre <code>/*</code> et <code>*/</code> est un commentaire et ne sera pas exécuté lorsqu'on clique sur RUN.</p>
</div>

<input-feedback 
data-title="Arrives-tu maintenant à dire quel est le patronus de Hermine Granger?"
data-solution="loutre"
success-message="🦦 C'est ça, bravo!  On va maintenant apprendre comment simplifier la recherche d'informations dans la base de données, au lieu de devoir lire les lignes une par une."
failure-message="Ça n'est pas tout à fait ça. Essaies à nouveau ou demande à un.e assistant.e."></input-feedback>

<div class="warning">
Si tu ne te souviens plus d'une commande que tu as utilisé, tu peux te référer au <a href="commandes_sql.html">résumé des principales commandes sql</a>.
</div>


<a name="compter"></a>

## Compter

Il a l'air d'y avoir beaucoup de sorciers et sorcières dans cette base de données. Mais d'ailleurs, combien exactement? Grâce à SQL il est aussi possible de compter le nombre de lignes qui sont affichées. Pour trouver le nombre de personnages dans la base de données, on aimerait dire:

_Sélectionne le nombre d'éléments dans le tableau des personnages._

Cela devient donc:

_SELECTIONNE COMPTE(*) DE personnages_

<div class="sideNote">
<p>On peut compter le nombre de rangées sélectionnées grâce à la fonction <code class="keyword">COUNT()</code>. On met entre les parenthèses ce qu'on veut compter.</p>
</div>

<sql-exercise
  data-question="À toi de traduire ça dans une commande SQL. "
  data-comment=""
  data-default-text="SELECT ..."
  data-solution="SELECT COUNT(*) 
FROM personnages"
  success-message="Exactement, tu sais maintenant compter le nombre de lignes retournées par une requête. Maintenant on va essayer de faire des recherches un peu plus intéressantes."
failure-message="Pas tout à fait, essaies à nouveau."></sql-exercise>

<a name="filtrer"></a>

## Filtrer les informations

Hier, Mme Miranda Fauconnette a reporté au ministère qu'une jeune femme l'a défendue contre des voyous qui essayaient de lui voler son balais. Mme Fauconnette aimerait retrouver son nom pour la remercier car la fille a du partir de toute vitesse après l'avoir sauvée. Voici son portrait robot[^1] reconstitué d'après les descriptions très précises de la vieille femme:

<img src="imgs/luna_lovegood_portrait.jpg">

[^1]:Source [wallpaperaccess.com](https://wallpaperaccess.com/luna-lovegood)

Il faudrait donc que tu ailles chercher les personnages féminins qui ont les yeux bleus et ont un patronus (l'esprit protecteur) sous forme de lièvre. Essayons déjà de chercher tous les personnages féminins. Il nous faut donc une commande qui dit:

_Sélectionne toutes les informations des personnages qui sont des femmes_

En simplifiant donc un petit peu, on obtient:

_SELECTIONNE * DE personnages OÙ genre='Femme'_

Il faut donc une commande comme _OÙ_ qui puisse filtrer une _condition_. Pour chaque personnage, soit la condition (par exemple:_genre='Femme'_) est vraie, dans quel cas la ligne du personnage sera affichée soit la condition est fausse et on ignore la ligne. Si on traduit en anglais:

<div class="sideNote">
<p>Tu peux utiliser <code class="keyword">WHERE</code> pour filtrer les résultats de tes recherches.</p>
</div>

Et on peut écrire:

<code class="codeblock">SELECT * FROM personnages WHERE genre='Femme'</code>
<sql-exercise
  data-question="Essaies, toi même et affiche tous le personnages féminins en utilisant <code>WHERE</code>"
  data-comment=""
  data-default-text="SELECT ..."
  data-solution="
SELECT * 
FROM personnages 
WHERE genre='Femme' "
  ></sql-exercise>

Bien, mais ça fait toujours trop de lignes à décortiquer et il faudrait affiner tes recherches. Pour cela, on peut ajouter la condition que la fille a les yeux bleus. En français, on dirait:

_Selectionne toutes les informations des personnages qui sont des femmes et qui ont les yeux bleus _

Comme tout à l'heure, on traduit avec: 

_SELECTIONNE * DE personnages OÙ genre='Femme' ET yeux='Bleus'_

<div class ="sideNote">
<p>En anglais "et" se dit "and". On peut donc utiliser <code class="keyword">AND</code> pour combiner des conditions et obliger que le personnage remplisse toutes les conditions.</p>
</div>

<sql-exercise
  data-question="Traduis en anglais la requête en utilisant ce que tu as apris jusqu'à présent"
  data-default-text="SELECT ...
FROM ...
WHERE ..."
  data-solution="
SELECT * 
FROM personnages 
WHERE genre='Femme' 
AND yeux='Bleus'"
  ></sql-exercise>

Toujours trop de personnes... Essaies d'ajouter la condition du patronus lièvre.

<sql-exercise
  data-question="Modifie la requête précédente pour "
  data-comment="Essaies de ne pas utiliser la solution et demandes à un/e assistant/e pour de l'aide si tu en as besoin."
  data-default-text="SELECT ..."
  data-solution="
SELECT * 
FROM personnages 
WHERE genre='Femme' 
AND yeux='Bleus'
AND patronus='Lièvre'"
  ></sql-exercise>

As tu maintenant trouvé? 

<input-feedback 
data-title="Écris le nom de la personne si tu penses que tu as trouvé quel est le nom de l'aimable sorcière qui a aidé la vieille dame."
data-solution="luna lovegood"
success-message="Bravo, détective! Tu as retrouvé Luna Lovegood, grâce à toi elle reçevra une belle récompense pour son acte héroique. Tu sais maintenant filtrer les informations de la base de données."
failure-message="Ce n'est pas la bonne personne, essaies à nouveau."></input-feedback>

<a name="compterEtFiltrer"></a>

## Compter AND Filtrer

Tu te souviens comment on compte? Et bien maintenant que tu sais filtrer, peux compter des choses un peu plus spécifiques.

<sql-exercise
  data-question="Essaies de compter le nombre de magiciens hommes avec les cheveux noirs ou les cheveux roux ou les cheveux bruns en remplissant les trous."
  data-comment="Complète les trous manquants"
  data-default-text="SELECT COUNT(*) 
FROM personnages 
WHERE ... = 'Homme' 
AND (... = 'Noirs' OR ... = ... OR ... = ...)"
  data-solution=" 
SELECT COUNT(*) 
FROM personnages 
WHERE genre = 'Homme' 
AND (cheveux = 'Noirs' OR cheveux = 'Roux' OR cheveux='Bruns')"
  ></sql-exercise>

<div class="sideNote">
<p>Tu as certainement remarqué qu'on utilise <code class="keyword">OR</code> pour dire <em>ou</em>. Quelle est la différence entre <code>OR</code> et <code>AND</code>?</p>
</div>

Mais on peut faire mieux! Au lieu de répéter à chaque fois <code>cheveux=...</code> c'est plus simple d'écrire quelque chose comme "il faut que les cheveux soient dans la liste: {'Noirs','Roux','Bruns'}". 

<div class="sideNote">
<p>On peut utiliser <code class='keyword'>IN</code> (ce qui veut dire <em>dans</em>) pour lister les possiblités. </p>
</div>

<sql-exercise
  data-question="La commande au complet donne:"
  data-comment="Essaies les deux commandes et vérifie si elles sont bien équivalentes. Tu peux aussi essayer de compter d'autres choses dans le tableau si tu veux."
  data-default-text="SELECT COUNT(*) 
FROM personnages 
WHERE genre='Hemme'
AND (cheveux IN('Noirs','Roux','Bruns'))"
  data-solution="SELECT COUNT(*) 
FROM personnages 
WHERE genre='Hemme'
AND (cheveux IN('Noirs','Roux','Bruns'))"
  ></sql-exercise>

<sql-exercise
  data-question="Combien de sorciers et sorcières sont nés en 1990,1991,1992 ou 1993?"
  data-comment="Utilise COUNT(*). Il y a plusieurs manières de résoudre cet exercice. "
  data-default-text=""
  success-message="Exactement!"
  data-hint="SELECT COUNT(*) 
FROM personnages 
WHERE naissance IN ..."
  data-solution="SELECT COUNT(*) 
FROM personnages 
WHERE naissance IN (1990,1991,1992,1993)
*/
/*
SELECT COUNT(*)
FROM personnages
WHERE naissance < 1994 AND naissance > 1989
*/"
  ></sql-exercise>

<a name="structure"></a>

## Les différents tableaux

Avant de te lancer dans l'énigme finale, Professeure McGonagall te dit qu'il y a deux autres tableaux dans la base de données qui te seront utiles: 
* _famille_, qui répertorie tous les liens de parenté entre les personnage.
* _créatures_, qui répertorie toutes les créatures magiques. 

Il toujours pratique d'avoir un apperçu de la base de donnée du ministère de la magie sous forme de schéma:
<figure>
<img src="imgs/HarryPotterDB_fr.png"><figcaption>Structure de la base de données. Un tableau est représenté par une case. Chaque ligne dans les cases correspond à un attribut du tableau.</figcaption>
</figure>

Nous regarderons le tableau créature plus tard. Pour l'instant, dans le tableau _famille_, _premier\_nom_ est le/la _relation_ de _second\_nom_. Par exemple dans le tableau suivant, Lily est la mère de Harry et Harry est le fils de James.

<table class="datatable">
<thead>
  <tr>
    <th class="tg-0pky">premier_nom</th>
    <th class="tg-0pky">second_nom</th>
    <th class="tg-0pky">relation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Lily Potter</td>
    <td class="tg-0pky">Harry Potter</td>
    <td class="tg-0pky">mère</td>
  </tr>
  <tr>
    <td class="tg-0pky">Harry Potter</td>
    <td class="tg-0pky">James Potter</td>
    <td class="tg-0pky">fils</td>
  </tr>
  <tr>
    <td class="tg-0pky">...</td>
    <td class="tg-0pky">...</td>
    <td class="tg-0pky">...</td>
  </tr>
</tbody>
</table>

<sql-exercise
  data-question="Explore le tableau famille."
  data-comment="Commence par afficher tous les attribus des deux tableau."
  data-default-text=""
  data-hint="Essaies quelque chose comme
  SELECT *
  FROM famille
  LIMIT 5"></sql-exercise>

<div class='supplementary'>
Pour guider ton exploration, tu peux essayer les deux challenges suivants:

<sql-exercise
  data-question="Liste tous les attributs de tous les personnages qui ont un frère"
  data-default-text=""
  success-message="Exactement! C'est des grandes familles!"
  failure-message=""
  data-hint="Essaies quelque chose comme
SELECT *
FROM famille
WHERE relation = ..."
  data-solution="
SELECT *
FROM famille
WHERE relation = 'frère'"
  ></sql-exercise>

<sql-exercise
  data-question="Comment s'appelle la grand-mère de Neville Londubat?"
  data-default-text=""
  success-message="C'est elle! Bien joué."
  failure-message="Ce n'est pas encore la bonne personne..."
  data-hint="Essaies quelque chose comme
SELECT premier_nom
FROM ...
WHERE second_nom = ..."
  data-solution="
SELECT premier_nom
FROM famille
WHERE second_nom = 'Neville Londubat'"
  ></sql-exercise>
</div>

Finalement, grâce à ces nouveaux tableaux, tu peux aussi croiser les informations. Par exemple, si tu veux savoir quel.le.s sorcier.ères ont une fille et ont les yeux bleus, tu as besoin d'informations qui proviennent de deux tableaux différents. Il faudrait donc réussir à les lier ensemble. Voyons déjà comment trouver les deux informations séparément. 

* D'abord pour trouver le noms des sorcier.ères qui ont une fille, on sélectionne le tableau _famille_ et on filtre les résultats lorsque la relation est égal à "fille".

<sql-exercise
  data-question="Le nom des sorcier.ères qui ont une fille"
  data-comment="Tu peux essayer toute seule mais n'hésite pas à clique sur solution pour révéler la solution"
  data-default-text=""
  data-hint="Remplis les trous
SELECT ...
FROM ...
WHERE ...='fille'"
  data-solution="SELECT premier_nom 
FROM famille 
WHERE relation='fille'"
  ></sql-exercise>

* Ensuite, on veut trouver le nom des socier.ères qui ont les yeux bleus.

<sql-exercise
  data-question="Le nom des sorcier.ères qui ont les yeux bleus"
  data-comment="Tu peux essayer toute seule mais n'hésite pas à clique sur solution pour révéler la solution"
  data-default-text=""
  data-hint="Remplis les trous
SELECT nom
FROM personnages
WHERE ... = ..."
  data-solution="
SELECT nom 
FROM personnages
WHERE yeux='Bleus'"
  ></sql-exercise>

* On met les deux conditions ensemble en combinant les réponses précédentes dans une seule commande.

<sql-exercise
  data-question="Le noms des sorcier.ères qui ont les yeux bleus et une fille"
  data-comment="N'hésites pas à faire comme tout à l'heure: d'abord une phrase, puis une phrase simplifiée puis traduire pour que ça fasse du code. Insère les solutions des deux points précédents"
  success-message="Youhou!!! Tu as croisé les informations de deux tableaux différents, tu es une véritable experte!"
  data-default-text="SELECT nom
FROM personnages
WHERE nom IN (/*Le nom des socier.ères qui ont une fille*/)
AND /*les yeux sont bleus*/"
  data-hint="Indice: Il faut utiliser ce qu'on a vu auparavant
1. Le nom des socières qui ont une fille:
  SELECT premier_nom 
  FROM famille 
  WHERE relation='fille'
1. Les sorcières qui ont les yeux bleus:
  WHERE yeux = 'Bleus'"
  data-solution="
SELECT nom
FROM personnages
WHERE nom IN (SELECT premier_nom 
              FROM famille 
              WHERE relation='fille')
AND yeux='Bleus'"
  ></sql-exercise>

Tu peux donc utiliser plusieurs commandes SQL les unes à l'intérieur des autres.

### Le vol de la coupe de feu

Tu as maintenant tous les outils pour t'attaquer à la grande enquête du vol de la coupe de feu! Si tu te sens prête à relever le défi, va à la page suivante.



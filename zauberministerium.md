---
layout: tutorial_de
title: Le ministère de la magie
dbFile: data/harrypotter_de.db
---

# Le ministère de la magie 

Bienvenue dans le monde magique de Harry Potter! Tu as été employée en tant que détective et spécialiste informatique dans le grand ministère de la magie. Pour t'aider dans tes tâches, tu as accès au registre des magiciens, une base de données qui répertorie toutes les informations connues à propos du monde des sorciers. Pour l'instant, concentrons nous sur le tableau des personnages.

<a name="base"></a>

## La requête magique

Ta cheffe, Professeure McGonagall, te montre comment fonctionne le système. Tu as accès à la base de donnée via une ligne de commande dans un bloc de code comme ci-dessous. Il suffit de rentrer une commande valide et de cliquer sur RUN pour voir le résultat. Comme c'est la première fois que tu utilise ce système, Professeure McGonagall te montre un exemple.

<sql-exercise
  data-question="Voici un exemple pour chercher le nom de 3 magiciens dans la base de données."
  data-comment="Essaies de modifier le nombre de noms qui sont affichés à 7"
  data-default-text="SELECT nom
FROM personnages
LIMIT 3"></sql-exercise>


<div class="sideNote">
<h3>Ta première requête SQL</h3>
<p>Tu peux voir qu'une commande ou <span class="keyword">requête</span> SQL se lit un peu comme une phrase. Les mots en majuscules sont des mots clés en anglais et les mots en minuscules spécifient ce que tu veux chercher. <code class="keyword">SELECT</code> veut dire Sélectionne, <code class=keyword>FROM</code> veut dire de ou depuis et <code class="keyword">LIMIT</code> veur dire limite. Donc si on traduit la ligne de code on trouve: "<code>SELECTIONNE</code> nom <code>DE</code> personnages <code>LIMITE</code> 3".</p>
</div> 

Avec chaque requête on sélectionne un certain nombre <span class="keyword">d'attributs</span> (charctéristiques) comme le nom, le genre, l'année de naissance, etc. . Tu as déjà appris comment connaitre le nom des magiciens mais ça serait utile de savoir quels autres attributs peut on connaitre sur chaque personnage dans cette base de donnée.

<div class ="sideNote">
<p>Pour sélectionner <strong>tous</strong> les attributs d'un personnage, il faut sélectionner <code class="keyword">*</code>. </p>
</div>

<sql-exercise
  data-question="Modifie la requête de tout à l'heure pour chercher tous les attributs de 3 magiciens dans la base de données."
  data-comment="Si tu n'arrives pas, tu peux cliquer sur 'SOLUTION' et la solution apparaitra... magiquement!"
  data-default-text = "SELECT nom 
FROM personnages
LIMIT 3"
  data-solution="SELECT *
FROM personnages
LIMIT 3"></sql-exercise>

<div class="warning">
Si tu ne te souviens plus d'une commande que tu as utilisé, tu peux te référer au <a href="commandes_sql.html">résumé des principales commandes sql</a>.
</div>
<div class="sideNote">
<p> Tout ce qui se trouve entre <code>/*</code> et <code>*/</code> est un commentaire et ne sera pas exécuté lorsqu'on clique sur RUN.</p>
</div>

<a name="filtrer"></a>

## Filtrer les informations

Hier, Mme Miranda Fauconnette a reporté au ministère qu'une jeune femme l'a défendue contre des voyous qui essayaient de lui voler son balais. Mme Fauconnette aimerait retrouver son nom pour la remercier car la fille a du partir de toute vitesse après l'avoir sauvée. Voici son portrait[^1] robot reconstitué d'après les descriptions très précises de la vieille femme:

<img src="imgs/luna_lovegood_portrait.jpg">

[^1]:Source [wallpaperaccess.com](https://wallpaperaccess.com/luna-lovegood)

Il faudrait donc que tu ailles chercher les personnages féminins qui ont les yeux bleus et ont un patronus (l'esprit protecteur) sous forme de lièvre. Essayons déjà de chercher tous les personnages féminins. Il nous faut donc une commande qui dit:

_Selectionne toutes les informations des personnages qui sont des femmes_

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

Bien, mais ça fait toujours trop de lignes à décortiquer et il faudrait affiner tes recherches. Pour cela, on peut ajouter plus de conditions. En français, on dirait:

_Selectionne toutes les informations des personnages qui sont des femmes et qui ont les yeux bleus et qui ont un patronus sous forme de lièvre_

Comme tout à l'heure, on traduit avec: 

_SELECTIONNE * DE personnages OÙ genre='Femme' ET yeux='Bleus' ET patronus='Lièvre'_

<div class ="sideNote">
<p>En anglais "et" se dit "and". On peut donc utiliser <code class="keyword">AND</code> pour combiner des conditions et obliger que le personnage remplisse toutes les conditions. Il ne faut pas confondre <code>AND</code> avec <code class="keyword">OR</code> qui veut dire ou bien.</p>
</div>

<sql-exercise
  data-question="Traduis en anglais la commande en utilisant ce que tu as apris jusqu'à présent"
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
success-message="Bravo, détective! Tu as retrouvé Luna Lovegood, grâce à toi elle reçevra une belle récompense pour son acte héroique."
failure-message="Ce n'est pas la bonne personne, essaies à nouveau."></input-feedback>

<a name="compter"></a>

## Compter

On a vu qu'il y avait beaucoup de sorciers et sorcières sur cette base de données. Mais d'ailleurs, combien exactement? Grâce à SQL il est aussi possible de compter le nombre de lignes qui sont affichées. Pour trouver le nombre de personnages dans la base de données, on aimerait dire:

_Sélectionne le nombre d'éléments dans le tableau des personnages._

Cela devient donc:

_SELECTIONNE COMPTE(*) DE personnages_

<div class="sideNote">
<p>On peut compter le nombre de rangées sélectionnées grâce à la fonction <code class="keyword">COUNT()</code>.</p>
</div>

<sql-exercise
  data-question="À toi de traduire ça dans une commande SQL. "
  data-comment=""
  data-default-text=""
  data-solution="SELECT COUNT(*) 
FROM personnages"
  ></sql-exercise>

Super! Tu peux aussi compter des choses un peu plus spécifiques en filtrant les informations.

<sql-exercise
  data-question="Par exemple, essaies de compter le nombre de magiciens hommes avec les cheveux noirs ou les cheveux roux ou les cheveux bruns en remplissant les trous."
  data-comment=""
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
<p>Tu as certainement remarqué qu'on utilise <code>OR</code> pour dire <em>ou</em>. </p>
</div>

Mais on peut faire mieux! Au lieu de répéter à chaque fois <code>cheveux=...</code> c'est plus simple d'écrire quelque chose comme "il faut que les cheveux soient dans la liste: {'Noirs','Roux','Bruns'}". 

<div class="sideNote">
<p>On peut utiliser <code class='keyword'>IN</code> (ce qui veut dire <em>dans</em>) pour lister les possiblités. </p>
</div>

La commande au complet donne:

<code class="codeblock"> SELECT COUNT(*) 

FROM personnages 

WHERE genre = 'Homme' 

AND (cheveux IN ('Noirs','Roux','Bruns'))</code>

<sql-exercise
  data-question="Essaies les deux commandes et vérifie si elles sont bien équivalentes. Tu peux aussi essayer de compter d'autres choses si tu veux."
  data-comment=""
  data-default-text=""
  data-solution="SELECT COUNT(*) 
FROM personnages 
WHERE genre='Hemme'
AND (cheveux IN('Noirs','Roux','Bruns'))"
  ></sql-exercise>

<a name="structure"></a>

### Les différents tableaux

Avant de te lancer dans l'énigme finale, Professeure McGonagall te dit qu'il y a deux autres tableaux dans la base de données qui te seront utiles: 
* _famille_, qui répertorie tous les liens de parenté entre les personnage.
* _créatures_, qui répertorie toutes les créatures magiques. 

Il toujours pratique d'avoir un apperçu de la base de donnée du ministère de la magie sous forme de schéma:
<figure>
<img src="imgs/HarryPotterDB_fr.png"><figcaption>Structure de la base de données.</figcaption>
</figure>

Pour le tableau _famille_, _premier\_nom_ est le/la _relation_ de _second\_nom_. Par exemple dans le tableau suivant, Lily est la mère de Harry et Harry et l'époux de Ginevra.

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
    <td class="tg-0pky">Ginevra Weasley</td>
    <td class="tg-0pky">époux</td>
  </tr>
  <tr>
    <td class="tg-0pky">...</td>
    <td class="tg-0pky">...</td>
    <td class="tg-0pky">...</td>
  </tr>
</tbody>
</table>

<sql-exercise
  data-question="Explore les deux tableaux."
  data-comment="Par exemple en affichant tous les attribus des deux tableau, puis en cherchant des informations particulières: essaie te trouver le nombre de créatures répertoriées. Aussi tu peux aussi lister les personnages qui ont un frère"
  data-default-text=""
  data-hint="Essaies quelque chose comme
  SELECT *
  FROM famille
  LIMIT 5
  Ou bien 
  SELECT *
  FROM créatures
  LIMIT 5"
  data-solution="Pour trouver le nombre de créatures répertoriées:
SELECT COUNT(*)
FROM créatures
  Pour trouver les personnages avec un frère:
SELECT premier_nom
FROM famille
WHERE relation = 'frère'"
  ></sql-exercise>

Pour un sondage il faudrait que tu ressences toutes les créatures qui ont des poils. En d'autres termes, il faut trouver les créatures où la colone _poils\_créature_ n'est pas _?_. 

<div class="sideNote"><p>Pour filtrer quelque chose qu'on ne veut pas, on peut utiliser la négation: <code class="keyword">NOT</code> ("pas" en français) avant la condition.</p></div>

<sql-exercise
  data-question="Quels sont les créatures qui ont des poils?"
  data-comment="En français la requête ressemblerait à 'Sélectionne le nom des créatures depuis le tableau créatures où '"
  data-default-text="SELECT ...
FROM ...
WHERE ..."
  data-hint="SELECT nom_créature, poils_créature
FROM créatures
WHERE NOT ...=..."
  data-solution="SELECT nom_créature, poils_créature
FROM créatures 
WHERE NOT poils_créature='?'"
  ></sql-exercise>

Bien joué!

Finalement, grâce à ces nouveaux tableaux, tu peux aussi croiser les informations. Par exemple, si tu veux savoir quels sorcier.ères qui ont une fille et ont les yeux bleus, tu as besoin d'informations dans deux tableaux différents. Il faudrait donc réussir à lier les deux tableaux. Voyons déjà comment trouver les deux informations séparément. 

* D'abord pour trouver le noms des sorcier.ères qui ont une fille, on sélectionne le tableau _famille_ et on filtre les résultats lorsque la relation est égal à "fille".

<sql-exercise
  data-question="le nom des sorcier.ères qui ont une fille"
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
  data-question="le noms des sorcier.ères qui ont les yeux bleus"
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

* On met les deux conditions ensemble. Pour cela, il faut combiner les réponses précédentes dans une seule commande.

<sql-exercise
  data-question="Le noms des sorcier.ères qui ont les yeux bleus et une fille"
  data-comment="N'hésites pas à faire comme tout à l'heure: d'abord une phrase, puis une phrase simplifiée puis traduire pour que ça fasse du code. Insère les solutions des deux points précédents"
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

Tu peux donc utiliser plusieurs commandes SQL les unes à l'intérieur des autres!

### Le vol de la coupe de feu

Tu as maintenant tous les outils pour t'attaquer à la grande enquête du vol de la coupe de feu! Si tu te sens prête à relever le défi, va à la prochaine page.



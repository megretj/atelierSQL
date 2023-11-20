---
layout: tutorial_fr
title: Le ministère de la magie
dbFile: data/harrypotter_fr.db
---

# Le ministère de la magie 

Bienvenue dans le monde magique de Harry Potter! Tu as été employée en tant que détective et spécialiste informatique dans le grand ministère de la magie, car la coupe de feu a été volée et tu dois essayer de trouver le ou la voleuse. Pour t'aider dans cette tâche, tu as accès au registre des magiciens, une base de données qui répertorie toutes les informations connues à propos du monde des sorciers. Pour l'instant, concentrons nous sur les personnages.

<a name="base"></a>

## La base de données

Ta cheffe, Professeure McGonagall, te montre comment fonctionne le système. Tu as accès à la base de donnée via une ligne de commande dans un bloc de code comme ci-dessous. Il suffit de rentrer une commande valide et de cliquer sur RUN pour voir le résultat. Comme c'est la première fois que tu utilise ce système Professeure McGonagall te montre un exemple.

<sql-exercise
  data-question="Voici un exemple pour chercher le nom de 3 magiciens dans la base de données."
  data-comment="Essaies de modifier le nombre de personnages qui sont cherchés à 5"
  data-default-text="SELECT nom
FROM personnages
LIMIT 3"></sql-exercise>


<div class="sideNote">
<h3>Ta première requête SQL</h3>
<p>Tu peux voir qu'une commande ou <span class="keyword">requête</span> SQL se lit un peu comme une phrase. Les mots en majuscules sont des mots clés en anglais et les mots en minuscules spécifient ce que tu veux chercher. <code class="keyword">SELECT</code> veut dire Sélectionne, <code class=keyword>FROM</code> veut dire de ou depuis et <code class="keyword">LIMIT</code> veur dire limite. Donc si on traduit la ligne de code on trouve: "<code>SELECTIONNE</code> prénom, nom <code>DE</code> personnages <code>LIMITE</code> 3".</p>
</div> 

<div class="warning">
Si tu ne te souviens plus d'une commande que tu as utilisé, tu peux te référer au <a href="commandes_sql.html">résumé des principales commandes sql</a>.
</div>

Chaque commande sélectionne un certain nombre <span class="keyword">d'attributs</span> (c'est à dire d'informations ou de charctéristiques) comme le nom, le genre, l'année de naissance, etc. . Tu as déjà appris comment connaitre le nom des magiciens mais ça serait utile de savoir autre chose à leur sujet. Quelles autres attributs peut on connaitre sur chaque personnage dans cette base de donnée? 

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

<a name="filtrer"></a>

## Filtrer les informations

Maintenant, Professeure McGonagall aimerait une recherche un peu plus spécifique. Hier, une grand mère a reporté qu'une jeune femme l'a défendue contre des voyous qui essayaient de lui voler son nouveau balais et elle aimerait retrouver son nom pour la remercier car la jeune femme a du partir de toute vitesse après l'avoir sauvée. Voici son portrait[^1] robot reconstitué d'après les descriptions très précises de la vieille femme:

<img src="imgs/luna_lovegood_portrait.jpg">

[^1]:Source [wallpaperaccess.com](https://wallpaperaccess.com/luna-lovegood)

Il faudrait donc que tu ailles chercher toutes les informations sur les personnages féminins qui ont les yeux bleus et ont un patronus (l'esprit protecteur) sous forme de lièvre. Tu pourrais regarder chaque ligne du tableau et vérifier si les informations correspondent, mais ça prendrait beaucoup trop de temps! Au lieu de cela, tu peux utiliser <code class="keyword">WHERE</code> pour filtrer les résultats de tes recherches. Si on commence par chercher les personnages féminins, il nous faut donc une commande qui dit: 

_Selectionne toutes les informations des personnages qui sont des femmes_

En simplifiant donc un petit peu, on obtient:

_SELECTIONNE * DE personnages OÙ (genre='Femme')_

On appelle se qui se trouve entre les parenthèses une _condition_. Pour chaque personnage, soit la condition est vraie, dans quel cas la ligne du personnage sera montrée ou la condition est fausse et on ignore la ligne. Si on traduit en anglais ça nous donne:

<code class="codeblock">SELECT * FROM personnages WHERE (genre='Femme')</code>
<sql-exercise
  data-question="Essaies, toi même et affiche tous le personnages féminins en utilisant <code>WHERE</code>"
  data-comment=""
  data-default-text="SELECT ..."
  data-solution="
SELECT * 
FROM personnages 
WHERE (genre='Femme') "
  ></sql-exercise>

Bien, mais ça fait toujours trop de lignes à décortiquer, il faudrait affiner tes recherches. Pour cela, on peut ajouter plus de conditions. En français, on dirait:

_Selectionne toutes les informations des personnages qui sont des femmes et qui ont les yeux bleus et qui ont un patronus sous forme de lièvre_

Comme tout à l'heure, on traduit avec: 

_SELECTIONNE * DE personnages OÙ (genre='Femme' ET yeux='Bleus' ET patronus='Lièvre')_

<div class ="sideNote">
<p>En anglais "et" se dit "and". On peut donc utiliser <code class="keyword">AND</code> pour combiner des conditions et obliger que le personnage coche toutes les conditions. Il ne faut pas confondre <code>AND</code> avec <code class="keyword">OR</code> qui veut dire ou.</p>
</div>

<sql-exercise
  data-question="Traduis en anglais la commande en utilisant ce que tu as apris jusqu'à présent"
  data-comment="Essaies de ne pas utiliser la solution et demandes à un/e assistant/e pour de l'aide si tu en as besoin."
  data-default-text="SELECT ..."
  data-solution="
SELECT * 
FROM personnages 
WHERE (genre='Femme' 
AND yeux='Bleus'
AND patronus='Lièvre')"
  ></sql-exercise>

As tu maintenant trouvé? 

<input-feedback 
data-title="Écris le nom de la personne si tu penses que tu as trouvé quel est le nom de l'aimable sorcière qui a aidé la vieille dame."
data-solution="luna lovegood"
success-message="Bravo, détective! Tu as retrouvé Luna Lovegood, grâce à toi elle reçevra une belle récompense pour son acte héroique."
failure-message="Ce n'est pas la bonne personne, essaies à nouveau."></input-feedback>

<a name="compter"></a>

## Compter

On a vu qu'il y avait beaucoup de monde sur cette base de données. Mais d'ailleurs, combien y'a-t-il de sorciers et sorcières dans toute la base de données? Grâce à SQL et la fonction <code class="keyword">COUNT()</code> il est aussi possible de compter le nombre de rangée qui sont retournées. Pour trouver le nombre de personnages dans la base de données, on aimerait dire:

_Sélectionne le nombre d'éléments dans le tableau des personnages._

Cela devient donc:

_SELECTIONNE COMPTE(*) DE personnages_

<sql-exercise
  data-question="À toi de traduire ça dans une commande SQL. "
  data-comment=""
  data-default-text=""
  data-solution="SELECT COUNT(*) 
FROM personnages 
WHERE genre='Femme'"
  ></sql-exercise>

Mais tu peux aussi compter des choses un peu plus spécifiques. Par exemple, si tu veux compter le nombre de magiciens homme avec les cheveux noirs ou les cheveux roux ou les cheveux bruns tu peux utiliser la commande suivante:

<code class="codeblock"> SELECT COUNT(*) FROM personnages WHERE (genre = 'homme' AND (cheveux = 'Noirs' OR cheveux = 'Roux' OR cheveux='Bruns'))</code>

Tu remarqueras certainement qu'on utilise <code>OR</code> (ce qui veut dire _ou_). Mais ça serait plus simple d'écrire quelque chose comme sélectionne les hommes avec les cheveux noirs ou roux ou bruns au lieu de répéter à chaque fois cheveux. On peut utiliser <code class='keyword'>IN</code> (ce qui veut dire _dans_) et lister les possiblités:

<code class="codeblock"> SELECT COUNT(*) FROM personnages WHERE (genre = 'homme' AND (cheveux IN ('Noirs','Roux','Bruns')))</code>

<sql-exercise
  data-question="Essaies les deux commandes et vérifie si elles sont bien équivalentes. Tu peux aussi essayer de compter d'autres choses."
  data-comment=""
  data-default-text=""
  data-solution="SELECT COUNT(*) 
FROM personnages 
WHERE genre='Femme'"
  ></sql-exercise>

<a name="structure"></a>

### Les différents tableaux

Bravo! Avant de te lancer dans la recherche de qui a volé la coupe de feu, Professeure McGonagall te dit qu'il y a deux autres tableaux dans la base de données qui te seront utiles: 
* _famille_ qui répertorie tous les liens de parenté entre les personnage.
* _créatures_ qui répertorie toutes les créatures magiques. 

Il toujours pratique d'avoir un apperçu de la base de donnée du ministère de la magie sous forme de schéma:
<figure>
<img src="imgs/HarryPotterDB_fr.png"><figcaption>Structure de la base de données</figcaption>
</figure>

Pour le tableau _famille_, _premier\_nom_ est le/la _relation_ de _second\_nom_. Par exemple dans le tableau suivant:

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
    <td class="tg-0pky">père</td>
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

Lily est la mère de Harry et Harry et l'époux de Ginevra (Gini). 


<sql-exercise
  data-question="Explore les deux tableaux."
  data-comment="Par exemple en affichant tous les attribus des deux tableau, puis en cherchant des informations particulières: essaie te trouver le nombre de créatures répertoriées. Aussi tu peux chercher le nombre de personnages qui ont un frère"
  data-default-text=""
  data-solution="Pour trouver le nombre de créatures répertoriées:
SELECT COUNT(*)
FROM créatures
  Pour trouver le nombre de personnages avec un frère:
SELECT COUNT(*)
FROM famille
WHERE relation = 'frère'"
  ></sql-exercise>

Ces tableaux supplémentaires te permettent d'accéder à de nouvelles informations. Pour un sondage il faudrait que tu ressences toutes les créatures qui ont des poils. En d'autres termes, il faut trouver les créatures où la colone _poils\_créature_ n'est pas _?_. 

<div class="sideNote">Pour filtrer quelque chose qu'on ne veut pas, on peut utiliser la négation: <code class="keyword">NOT</code> ("pas" en français)avant la condition.</div>

<sql-exercise
  data-question="Quels sont les créatures qui ont des poils?"
  data-comment="En français la requête ressemblerait à 'Sélectionne le nom des créatures depuis le tableau créatures où '"
  data-default-text="SELECT ...
FROM ...
WHERE ..."
  data-hint="SELECT nom_créature
FROM créatures
WHERE NOT ...=..."
  data-solution="SELECT nom_créature 
FROM créatures 
WHERE NOT poils_créature='?'"
  ></sql-exercise>

Finalement, grâce à ces nouveaux tableaux, tu peux aussi croiser les informations. Par exemple, si tu veux savoir quels sorcier.ères qui ont une fille et ont les yeux bleus, tu as besoin d'informations dans deux tableaux différents. Il faudrait donc réussir à lier les deux tableaux. Voyons déjà comment trouver les deux informations séparément. 

* D'abord trouver le noms des sorcier.ères qui ont une fille, on sélectionne le tableau _famille_ et on filtre les résultats lorsque la relation est égal à "fille".

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
  WHERE yeux = ..."
  data-solution="SELECT nom 
FROM personnages
WHERE yeux='Bleus'"
  ></sql-exercise>

* On met les deux conditions ensemble. Pour cela, il faut combiner les réponses précédentes dans une seule commande.

<sql-exercise
  data-question="Le noms des sorcier.ères qui ont les yeux bleus et une fille"
  data-comment=""
  data-default-text="SELECT nom
FROM personnages
WHERE nom IN (/*Le nom des socier.ères qui ont une fille*/)
AND /*les yeux sont bleus*/"
  data-hint="Indice: Il faut utiliser ce qu'on a vu auparavant
1. Le nom des socières qui ont une fille:
  SELECT premier_nom 
  FROM famille 
  WHERE relation='fille'
2. Les sorcières qui ont les yeux bleus:
  WHERE yeux = 'Bleus'"
  data-solution="SELECT nom
FROM personnages
WHERE nom IN (SELECT premier_nom 
              FROM famille 
              WHERE relation='fille')
AND yeux = 'Bleus'"
  ></sql-exercise>

Tu peux donc utiliser plusieurs commandes SQL les unes à l'intérieur des autres!

### Le vol de la coupe de feu

Tu as maintenant tous les outils pour t'attaquer à la grande enquête du vol de la coupe de feu! Si tu te sens prête à relever le défi, clique sur le bouton ci-dessous pour commencer l'enquête.

<a href="vol_de_la_coupe_de_feu.html" class="button-link"> Commencer l'enquête </a>



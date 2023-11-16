---
layout: tutorial
title: Le ministère de la magie
dbFile: data/harrypotter_fr.db
---

# Le ministère de la magie 

Bienvenue dans le monde magique de Harry Potter! Tu as été employée en tant que détective et spécialiste informatique dans le grand ministère de la magie, car la coupe de feu a été volée et tu dois essayer de trouver le ou la voleuse. Pour t'aider dans cette tâche, tu as accès au registre des magiciens, une base de données qui répertorie toutes les informations connues à propos du monde des sorciers. En particulier:

* Les personnages 
* Les relations familiales entre les personnages
* Les créatures magiques

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
* _famille_ qui répertorie tous les liens de parenté entre les personnages
* _créatures_ qui répertorie toutes les créatures magiques

<sql-exercise
  data-question="Commence par explorer les deux tableaux. D'abord en affichant tous les attribus des deux tableau, puis en cherchant des informations particulières."
  data-comment="Par exemple, essaie te trouver le nombre de créatures répertoriées. Aussi tu peux chercher le nombre de personnages qui ont un frère"
  data-default-text=""
  data-solution="Pour trouver le nombre de créatures répertoriées:
SELECT COUNT(*)
FROM créatures
  Pour trouver le nombre de personnages avec un frère:
SELECT COUNT(*)
FROM famille
WHERE relation = 'frère'"
  ></sql-exercise>

 La base de donnée du ministère de la magie ressemble à ceci:
<img src="imgs/harrypotter_fr.png">


### Le vol de la coupe de feu

Tu as maintenant tous les outils pour t'attaquer à la grande enquête du vol de la coupe de feu! Si tu te sens prête à relever le défi, clique sur le bouton ci-dessous pour commencer l'enquête.

<a href="vol_de_la_coupe_de_feu.html" class="button-link"> Commencer l'enquête </a>



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

### La base de données

Ta cheffe, Professeure McGonagall, te montre comment fonctionne le système. Tu as accès à la base de donnée via une ligne de commande dans un bloc de code comme ci-dessous. Il suffit de rentrer une commande valide et de cliquer sur RUN pour voir le résultat. Comme c'est la première fois que tu utilise ce système Professeure McGonagall te montre un exemple.

<sql-exercise
  data-question="Voici un exemple pour chercher le nom de 3 magiciens dans la base de données."
  data-comment="Essaies de modifier le nombre de personnages qui sont cherchés à 5"
  data-default-text="SELECT nom
FROM personnages
LIMIT 3"></sql-exercise>


<div class="sideNote">
<h3>Ta première requête SQL</h3>
<p>Tu peux voir qu'une commande SQL se lit un peu comme une phrase. Les mots en majuscules sont des mots clés en anglais et les mots en minuscules spécifient ce que tu veux chercher. <code class="keyword">SELECT</code> veut dire Sélectionne, <code class=keyword>FROM</code> veut dire de ou depuis et <code class="keyword">LIMIT</code> veur dire limite. Donc si on traduit la ligne de code on trouve: "<code>SELECTIONNE</code> prénom, nom <code>DE</code> personnages <code>LIMITE</code> 3".</p>
</div> 

<div class="warning">
Si tu ne te souviens plus d'une commande que tu as utilisé, tu peux te référer au <a href="commandes_sql.html">résumé des principales commandes sql</a>.
</div>

C'est bien gentil de connaitre le nom des magiciens mais ça serait utile de savoir autre chose à leur sujet. Quelles autres charactéristiques (on apelle une charactéristique <span class="keyword">"attribut"</span>) peut on connaitre sur chaque personnage dans cette base de donnée?
<div class ="sideNote">
<p>Pour sélectionner tous les attributs (les informations) d'un personnage il faut utiliser <code>*</code>. </p>
</div>

<sql-exercise
  data-question="Essaies de chercher tous les attributs de 3 magiciens dans la base de données."
  data-comment="Si tu n'arrives pas, tu peux cliquer sur 'SOLUTION' et la solution apparaitra... magiquement!"
  data-default-text = "SELECT ..."
  data-solution="SELECT *
FROM personnages
LIMIT 3"></sql-exercise>

<a name="filtrer"></a>

### Filtrer les informations

Maintenant, Professeure McGonagall aimerait une recherche un peu plus spécifique. Hier, une grand mère a reporté qu'une jeune femme l'a aidé à traverser la route et elle aimerait retrouver son nom pour la remercier. Voici son portrait robot reconstitué d'après les descriptions de la vieille femme [^1]:

<img src="imgs/luna_lovegood_portrait.jpg">

[^1]:[wallpaperaccess.com](https://wallpaperaccess.com/luna-lovegood)

Il faudrait donc que tu ailles chercher toutes les informations sur les personnages féminins qui ont les yeux bleus et ont un patronus (l'esprit protecteur) sous forme de lièvre. Tu pourrais regarder chaque ligne du tableau et vérifier si les informations correspondent, mais ça prendrait beaucoup trop de temps! Au lieu de cela, tu peux utiliser _WHERE_ pour filtrer les résultats de tes recherches. Si on commence par chercher les personnages féminins, il nous faut donc une commande qui dit: 

_Selectionne toutes les informations des personnages qui sont des femmes_

En simplifiant donc un petit peu, on obtient:

_SELECTIONNE * DE personnages OÙ (genre='Femme')_

On appelle se qui se trouve entre les parenthèses une _condition_. Pour chaque personnage, soit la condition est vraie, dans quel cas la ligne du personnage sera montrée ou la condition est fausse et on ignore la ligne. Si on traduit en anglais ça nous donne:

```SELECT * FROM personnages WHERE (genre='Femme') ```

<sql-exercise
  data-question="Essaies, toi même et affiche tous le personnages féminins en utilisant _WHERE_"
  data-comment=""
  data-default-text="SELECT ..."
  data-solution="
  SELECT * 
  FROM personnages 
  WHERE genre='Femme' "
  ></sql-exercise>

Bien, mais ça fait toujours trop de lignes à décortiquer, il faudrait affiner tes recherches. Pour cela, on peut ajouter plus de conditions. En français, on dirait:

_Selectionne toutes les informations des personnages qui sont des femmes et qui ont les yeux bleus et qui ont un patronus sous forme de lièvre_

Comme tout à l'heure, on traduit avec: 
``` SELECTIONNE * DE personnages OÙ (genre='Femme' ET yeux='Bleus' ET patronus='Lièvre') ```

<div class ="sideNote">
<p>En anglais "et" se dit "and". On peut donc utiliser <code>AND</code> pour combiner des conditions et obliger que le personnage coche toutes les conditions. </p>
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

As tu maintenant trouvé quel est le nom de l'aimable sorcière qui a aidé la vieille dame? 

<sql-quiz
data-title="écris le nom de la personne et vérifie ta réponse">

</sql-quiz>

<a name="compter"></a>

### Compter

On a vu qu'il y avait beaucoup de monde sur cette base de données. Mais d'ailleurs, combien y'a-t-il de sorcier et sorcières dans toute la base de données? Grâce à SQL et la commande _COUNT_ il est aussi possible de compter. On aimerait dire:

_Sélectionne le nombre d'éléments dans le tableau des personnages._

Devient

_SELECTIONNE COMPTE(*) DE personnages OÙ genre='Femme'_

<sql-exercise
  data-question="À toi de traduire ça dans une commande SQL. "
  data-comment=""
  data-default-text=""
  data-solution="
  SELECT COUNT(*) 
  FROM personnages 
  WHERE genre='Femme'"
  ></sql-exercise>

<a name="structure"></a>

### Les différents tableaux

Bravo! Avant de te lancer pour commencer à chercher qui a volé la coupe de feu, Professeure McGonagall te dit qu'il y a deux autres tableaux dans la base de données qui te seront utiles: 
* _famille_ qui répertorie tous les liens de parenté entre les personnages
* _créatures_ qui répertorie toutes les créatures magiques

<sql-exercise
  data-question="Commence par explorer les deux tableaux. D'abord en affichant tous les attribus des deux tableau, puis en cherchant des informations particulières."
  data-comment="Par exemple, essaie te trouver le nombre de créatures répertoriées. Aussi tu peux chercher le nombre de personnages qui ont un frère"
  data-default-text=""
  data-solution="
  Pour trouver le nombre de créatures répertoriées:
  SELECT COUNT(*)
  FROM créatures
  Pour trouver le nombre de personnages avec un frère:
  SELECT COUNT(*)
  FROM famille
  WHERE relation = 'frère'"
  ></sql-exercise>

Le vrai avantage d'utiliser une base de donnée est que tu peux lier ces tableaux entre eux! Pour que la base de donnée du ministère de la magie ressemble à ceci:
<img src="imgs/harrypotter_fr.png">

Comme tu peux voir, on peut lier les tableaux entre eux. Par exemple, comme un magicien a comme patronus une créature, on peut lier ou joindre les deux données grâce à la commande _JOIN_


### Le vol de la coupe de feu

Tu as maintenant tous les outils pour t'attaquer à la grande enquête du vol de la coupe de feu!

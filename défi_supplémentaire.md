---
layout: tutorial_fr
title: Défis supplémentaires
dbFile: data/harrypotter_fr.db
---
# Défis supplémentaires

<a name="not"></a>

## NOT un sondage normal

Pour un sondage il faudrait que tu ressences toutes les créatures qui ont des poils. En d'autres termes, il faut trouver les créatures où la colone _poils\_créature_ n'est pas _?_. 

<div class="sideNote"><p>Pour filtrer quelque chose qu'on ne veut pas, on peut utiliser la négation: <code class="keyword">NOT</code> ("pas" en français) avant la condition.</p></div>

<sql-exercise
  data-question="Quels sont les créatures qui ont des poils?"
  data-comment="En français la requête ressemblerait à 'Sélectionne le nom des créatures et leur poils/plumes depuis le tableau créatures où leurs poils/plumes ne sont pas inconnus"
  success-message="🐉 Bien joué!"
  data-default-text="SELECT ...
FROM ...
WHERE ..."
  data-hint="
SELECT nom_créature, plumes_poils
FROM créatures
WHERE NOT ...=..."
  data-solution="
SELECT nom_créature, plumes_poils
FROM créatures 
WHERE NOT plumes_poils='?'"
  ></sql-exercise>

<div class="sideNote">
<h3>Conseil de pros</h3>
<p>Au lieu de cliquer sur Run, tu peux taper sur [Shift⇧]+[Enter↵] sur ton clavier pour exécuter ta commande.</p>
</div>

<a name="like"></a>

## I LIKE SQL

Tu as surement remarqué qu'il faut être très précis lorsque l'on cherche des données specifiques avec le signe <code>=</code> (par exemple, <code> ... WHERE nom = "Minerva McGonagall" AND ...</code>). Mais si on ne connait qu'une partie d'une information on peut utiliser <code class="keyword">LIKE</code>. Cela permet de chercher les textes qui sont a peu près corrects. 

<sql-exercise
  data-question="Par exemple, dans le nom 'Minerva McGonagall' il y a 'Mine' ou 'onaga' ou encore 'McGo'."
  data-comment=""
  data-default-text="SELECT nom
FROM personnages
WHERE nom LIKE '%MIN%'"
  ></sql-exercise>

<div class="sideNote">
<p>On peut créer une condition en remplacant <code>=</code> par <code class="keyword">LIKE</code> et en placant le texte que l'on veut chercher entre <code>"%...%"</code></p>
</div>

<sql-exercise
  data-question="Affiches toutes les créatures qui contiennent 'chat' dans leur nom"
  data-hint="SELECT *
FROM créatures
WHERE ... LIKE ..."
success-message="C'est bien chat!"
  data-solution="SELECT *
FROM créatures
WHERE nom_créature LIKE '%chat%'"
  ></sql-exercise>

<a name="join"></a>

## Les bases de données relationelles

Le vrai avantage d'utiliser une base de donnée telle que celle que nous avons utilisé jusqu'à présent est que tu peux lier ces tableaux entre eux! Rappelle-toi du schéma que nous avons vus précédement:

<img src="imgs/HarryPotterDB_fr.png">

On pourrait par exemple, vouloir voir le nom de tous les magiciens qui ont un patronus qui est une créature imaginaire. Toutefois, l'attribut statut_créature ne se trouve pas dans le même tableau que celui des noms des magiciens. La requête suivante ne peut donc pas fonctionner.

<code class="codeBloc">SELECT nom FROM personnages WHERE statut_créature='Créature imaginaire'</code>

L'attribut type_créature se trouve dans le tableau créatures. Il faut donc lier ou joindre les deux tableaux grâce à la commande <span class="keyword">_JOIN_</span>. Par exemple: Harry Potter a un Patronus "Cerf" et on aimerait que toutes les informations du Cerf soient ajoutées au tableau personnages. Pour cela on pourrait écrire quelque chose comme: 

_Sélectionne tout les attributs de personnages en joignant le tableau créatures tel que le patronus du personnage correpondre au nom de la créature_

En simplifiant on obtient:

_SELECTIONNE * DE personnages JOINDRE créatures TEL QUE personnages.patronus=créatures.nom_créature_

En anglais on traduit:

<code class="codebolc"> SELECT *
FROM personnages 
JOIN créatures ON personnages.patronus=créatures.nom_créature</code>

Tu peux maintenant essayer par toi même.

<sql-exercise
  data-question="Joins les tableaux personnages et créatures sur l'attribut patronus = nom_créatures et trouve tous les magicien.nes qui ont un patronus qui est une créature imaginaire."
  data-comment="Tu peux utiliser la commande qu'on vient de voir et filtrer les résultats avec <code>WHERE</code> comme tu l'as fait précédemment."
  data-default-text=""
  success-message="Super! Tu es maintenant une véritable data-scientiste. "
  data-hint="
SELECT *
FROM personnages 
JOIN créatures ON ... =créatures.nom_créature
WHERE ... ='Créature imaginaire'"
  data-solution="
SELECT *
FROM personnages 
JOIN créatures ON personnages.patronus=créatures.nom_créature
WHERE statut_créature='Créature imaginaire'"
  ></sql-exercise>
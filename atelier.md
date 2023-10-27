---
layout: tutorial
title: Le ministère de la magie
dbFile: data/harrypotter.db
---

Bienvenue dans le monde magique de Harry Potter! Tu t'apprêtes à faire ton premier jour en tant que détective dans le grand ministère de la magie. Pour t'aider dans tes tâches quotidiennes, tu as accès au registre des magiciens, une base de données qui répertorie toutes les informations connues à propos du monde des sorciers. En particulier:

* Les personnages 
* Les créatures
* Les organisations ()

Ta cheffe, Professeure McGonagall te montre comment fonctionne le système. Tu as accès à la base de donnée via une ligne de commande dans un bloc de code interactif comme celui ci. Il faut rentrer une commande valide et cliquer sur RUN pour voir le résultat. Comme c'est la première fois que tu utilise ce système Professeure McGonagall te montre un exemple.

<sql-exercise
  data-question="Voici un exemple pour chercher le nom et le prénom de 3 magiciens dans la base de données."
  data-comment="Essaies de modifier le nombre de personnages qui sont cherchés à 5"
  data-default-text="SELECT nom
FROM personnages
LIMIT 3"></sql-exercise>


<div class="sideNote">
<h3>Ta première requête SQL</h3>
<p>Tu peux voir qu'une commande SQL se lit un peu comme une phrase. Les mots en majuscules sont des mots clés en anglais et les mots en minuscules spécifient ce que tu veux chercher. <code>SELECT</code> veut dire Sélectionne, <code>FROM</code> veut dire de ou depuis et <code>LIMIT</code> veur dire limite. Donc si on traduit la ligne de code on trouve: "<code>SELECTIONNE</code> prénom, nom <code>DE</code> personnages <code>LIMITE</code> 3".</p>
</div>

Intéressant! Mais si tu veux chercher une personne en particulier... par exemple les personnages féminins avec des cheveux noirs. Ca serait embêtant de devoir lire toutes les lignes une à une. Il nous faut donc une commande qui dit: 

_Selectionne le nom des personnages qui sont des femmes et qui ont les cheveux noirs_
 
Si on simplifie un petit peu on obtient:

_SELECTIONNE nom DE personnages OÙ genre='Femme' ET cheveux='noirs'_

Et si on traduit en anglais ça nous donne:

```SELECT nom FROM personnages WHERE genre='Femme' AND cheveux='noirs' ```

Maintenant, tu aimerais savoir toutes les informations disponible concernant chaque personnage.
<div class ="sideNote">
<p>Pour sélectionner toutes les colones d'une rangée il suffit d''utiliser <code>*</code> </p>
</div>

<sql-exercise
  data-question="Voici un exemple pour chercher le nom et le prénom de 3 magiciens dans la base de données."
  data-comment="Essaies de modifier le nombre de personnages qui sont cherchés à 5"
  data-default-text="SELECT ..."
  data-solution="
  SELECT *
  FROM personnages
  WHERE genre='Femme' AND cheveux='noirs'"
  ></sql-exercise>


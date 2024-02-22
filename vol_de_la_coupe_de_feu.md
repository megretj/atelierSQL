---
layout: tutorial_fr
title: Le vol de la coupe de feu
dbFile: data/harrypotter_fr.db
---
<figure>
<img src="imgs/HarryPotterDB_fr.png"><figcaption>Rappel de la structure de la base de données</figcaption>
</figure>

# Le vol de la coupe de feu 
Lis la une du journal:
<figure>
<img src="imgs/newspaper.gif" style="width:80%;text-align:center;" alt="Épouvante à la banque de Gringotts: La coupe de feu a été volée! Le vol s'est passé la nuit du 24 au 25 avril 1995. Quelqu'un s'est introduit dans la salle du coffre et a détruit plusieurs murs pour s'échaper. On a que peu d'informations à propos des suspects. On sait seulement qu'il y avait un témoin sur les lieux du vol."><figcaption>Une copie de la une de "The Daily Prophet"</figcaption>
</figure>

<a name="témoins"></a>

## Le témoin

L'appel à témoins a bien fonctionné. C'est l'épouse du témoin qui s'est annoncée elle s'appelle Narcissa Malefoy.

<sql-exercise
  data-question="1. Écris une commande pour trouver le témoin de l'affaire."
  data-comment="Essaie de ne pas utiliser la solution et demande à un/e assistant/e si tu as besoin d'aide."
  data-default-text="SELECT ..."
  data-hint="SELECT ...
  FROM famille
  ... second_nom = ... ... relation = ..."
  data-solution="
  SELECT premier_nom 
  FROM famille 
  WHERE second_nom = 'Narcissa Malefoy' AND relation = 'Époux'" 
  ></sql-exercise>


<input-feedback 
data-title="Écris le nom du témoin si tu penses avoir trouvé son nom."
data-solution="lucius malefoy"
success-message="En effet c'est bien Lucius Malefoy! Tu lui envoies donc un message par chouette expresse pour lui demander des informations sur le vol et il vous répond ceci:
Chère inspectrice, je me prommenais dans le chemin de traverse avec ma femme Narcissa après minuit lorsque j'ai entendu un bruit fracassant. J'ai dit à ma femme de s'enfuire, mais je voulais rester quelques instants pour comprendre ce qu'il se passait. Comme il faisait nuit, je n'ai pas très bien vu, mais il me semble que j'ai vu deux individus qui se battaient devant la banque Gringotts. Il y avait une femme aux cheveux bruns ou noirs et un homme aux cheveux noirs. Au bout de quelques secondes, la femme s'est envolée avec son balais et des démentors ont continué à se battre avec l'homme. À court de ressources, l'homme a appelé son patronus pour le défendre contre les démentors. C'était une biche. Je me suis ensuite enfuis."
failure-message="Ce n'est pas la bonne personne, essaies à nouveau."></input-feedback>

<a name="combattant"></a>

## Le combattant

<sql-exercise
  data-question="Grâce au récit du témoin, arriveras-tu à retrouver l'homme qui se battait."
  data-comment="Si tu as besoin d'un peu d'aide tu peux cliquer sur INDICE, un indice apparaitra."
  data-default-text="SELECT ..."
  data-hint="Il faut que tu trouves un personnage homme, 
  avec les cheveux noirs et un patronus de biche. 
  Fait attention aux majuscules lorsque tu écris les attributs."
  data-solution="
  SELECT nom 
  FROM personnages
  WHERE genre='Homme' AND cheveux='Noirs' AND patronus='Biche' "
  ></sql-exercise>

<input-feedback 
data-title="Penses-tu avoir trouvé le nom de la personne présente sur le lieu du crime?"
data-solution="severus rogue"
success-message="Oui, c'est bien Severus Rogue! Vous le contactez pour plus d'informations et il vous répond qu'il ne se souvient plus bien de la scène car il a reçu un sort qui lui a fait oublié la plupart des choses. Mais il se souvient que qu'il se battait contre quelqu'un qui avait un aire de famille avec Sirius Black. De plus il ou elle avait certainement l'air d'avoir plus de 40 ans. "
failure-message="Ce n'est pas la bonne personne, essaies à nouveau."></input-feedback>

<a name="coupable"></a>

## Le/la coupable

<sql-exercise
  data-question="Tu as maintenant toutes les informations nécessaires pour trouver le ou la coupable du vol de la coupe de feu!"
  data-comment="Essaies d'écrire toutes les informations que tu as sur un bout de papier. Puis clique sur indice pour vérifier que tu ais toutes les infos. Puis essaies d'écrire une requête qui filtre toutes les conditions une par une, puis toutes ensembles."
  data-default-text="SELECT ..."
  data-hint="Les informations que tu as pu récolter jusqu'à présent sont: 
  une femme, 
  avec des cheveux noirs, 
  elle est de famille avec Sirius Black, 
  elle est née avant 1955 (elle a plus de 40 ans et il est noté au début de l'enquête que nous sommes en 1995). 
  Essaies de trouver toutes les informations séparément et écris les sur une feuille."
  data-solution="
Il vaut mieux détacher la commande en plusieurs parties
mais voici une manière de trouver la coupable en une seule commande.
SELECT nom 
FROM personnages 
WHERE nom IN (SELECT premier_nom
                              FROM famille
                              WHERE second_nom='Sirius Black')
AND genre='Femme' 
AND (cheveux='Noirs' OR cheveux='Bruns')
AND naissance < 1955 
AND mort > 1995"
  ></sql-exercise>

<input-feedback 
data-title="As tu réussi à découvrir qui était le ou la coupable du vol?"
data-solution="bellatrix lestrange"
success-message="Excellent! Tu as trouvé la coupable: Bellatrix Lestrange. Grâce à toi la coupe de feu a pu être récupérée et le tournoi de la coupe de feu pourra avoir lieu, comme prévu à Poudlard."
failure-message="Ce n'est pas la bonne personne, essaies à nouveau ou demande de l'aide."></input-feedback>

Si tu as encore envie d'en apprendre un peu plus sur le SQL, tu peux essayer le défi supplémentaire sur la prochaine page.

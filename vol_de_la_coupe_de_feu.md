---
layout: tutorial
title: Le vol de la coupe de feu
dbFile: data/harrypotter_fr.db
---

# Le vol de la coupe de feu 

La coupe de feu a été volée d'un coffre de la banque Gringotts. Le vol s'est passé la nuit du 24 au 25 avril 1995. On a que peu d'informations à propos des suspects. On sait seulement qu'il y avait un témoin sur les lieux du vol. 

<a name="témoins"></a>

## Le témoin

La personne témoin est l'époux d'une personne nommée Narcissa Malefoy... qui est-ce?

<sql-exercise
  data-question="Essaies d'écrire une commande pour trouver le témoin de l'affaire."
  data-comment="Essaies de ne pas utiliser la solution et demandes à un/e assistant/e pour de l'aide si tu en as besoin."
  data-default-text="SELECT ..."
  data-solution="
  SELECT second 
  FROM famille 
  WHERE relation = 'époux' AND premier = 'Narcissa Malefoy' "
  ></sql-exercise>


<input-feedback 
data-title="Écris le nom du témoin si tu penses que tu as trouvé son nom."
data-solution="lucius malefoy"
success-message="En effet c'est bien Lucius Malefoy! Tu lui envoies donc un message par chouette expresse pour lui demander des informations sur le vol et il vous répond ceci:
_Chère inspectrice, je me prommenait dans le chemin de traverse avec ma femme Narcissa après minuit lorsque j'ai entendu un brut fracassant. J'ai dit à ma femme de s'enfuire, mais je voulais rester quelques instants pour comprendre ce qu'il se passait. Comme il faisait nuit noire, je n'ai pas très bien vu, mais il me semble que j'ai vu deux individus qui se battaient devant la banque Gringotts. Il y avait une femme et un homme, tous deux aux cheveux noirs. Au bout de quelques secondes, la femme s'est envolée avec son balais et des démentors ont continué à se battre avec l'homme. A court de ressources, l'homme a appelé son patronus pour le défendre contre les démentors. C'était une biche. Je me suis ensuite enfuis_"
failure-message="Ce n'est pas la bonne personne, essaies à nouveau."></input-feedback>

<a name="combattant"></a>

## Le combattant

<sql-exercise
  data-question="Grâce au récit du témoin, arriveras-tu à retrouver l'homme qui se battait."
  data-comment="Si tu as besoin d'un peu d'aide tu peux cliquer sur INDICE, un indice apparaitra."
  data-default-text="SELECT ..."
  data-hint="Il faut que tu trouves un personnage homme, avec les cheveux noirs et un patronus de biche. Fait attention aux majuscules lorsque tu écris les attributs."
  data-solution="
  SELECT nom 
  FROM personnages
  WHERE genre='Homme' AND cheveux='Noirs' AND patronus='Biche' "
  ></sql-exercise>

<input-feedback 
data-title="Penses-tu avoir trouvé le nom de la personne présente sur le lieu du crime?"
data-solution="severus rogue"
success-message="Oui, c'est bien Severus Rogue! Vous le contactez pour plus d'informations et il vous répond qu'il ne se souvient plus bien de la scène car il a reçu un sort qui lui a fait oublié la plupart des choses. Mais il se souvient que qu'il se battait contre quelqu'un qui avait un aire de famille avec Sirius Black et Drago Malefoy. De plus il ou elle avait certainement plus de 40 ans"
failure-message="Ce n'est pas la bonne personne, essaies à nouveau."></input-feedback>

<a name="coupable"></a>

## Le/la coupable

<sql-exercise
  data-question="Tu as maintenant toutes les informations pour trouver le ou la coupable du vol de la coupe de feu!"
  data-comment="Si tu as besoin d'un peu d'aide, tu peux cliquer sur INDICE, un indice apparaitra."
  data-default-text="SELECT ..."
  data-hint="Les informations que tu as pu récolter jusqu'à présent sont: une femme, avec des cheveux noirs, elle est de famille avec Sirius Black et Drago Malefoy et elle est née avant 1955 (elle a plus de 40 ans et il est noté au début de l'enquête que nous sommes en 1995)"
  data-solution="
  /* Il vaut mieux détacher la commande en plusieurs parties
  mais voici une manière de trouver la coupable en une seule commande.*/
  SELECT nom 
  FROM personnages 
  WHERE nom IN (SELECT premier 
                FROM famille
                WHERE second='Drago Malefoy' 
                AND premier IN (SELECT premier
                                FROM famille
                                WHERE second='Sirius Black'))
  AND genre='Femme' AND cheveux='Noirs' AND naissance < 1955 "
  ></sql-exercise>

<input-feedback 
data-title="As tu réussi à découvrir qui était le ou la coupable du vol?"
data-solution="bellatrix lestrange"
success-message="Excellent! Tu as trouvé la coupable: Bellatrix Lestrange. Grâce à toi la coupe de feu a pu être récupérée et le tournoi de la coupe de feu pourra avoir lieu, comme prévu à Poudlard."
failure-message="Ce n'est pas la bonne personne, essaies à nouveau."></input-feedback>

Si tu as encore envie d'en apprendre un peu plus sur le SQL, tu peux essayer le défi supplémentaire.
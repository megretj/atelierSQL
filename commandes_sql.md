---
layout: tutorial_fr
title: Commandes SQL
dbFile: data/harrypotter_fr.db
---

# Insert table with all of the translations
Sur cette page, tu trouveras un résumé des commandes SQL de base, leur effet et leur traduction.

Le format de base d'une requête SQL est la suivante:

{% highlight ruby %}
SELECT ... FROM ... 
{% endhighlight %}

On peut ensuite ajouter des mots clés pour spécifier la requête (recherche). 

<sql-exercise
  data-question="Tu peux tester des requêtes ici. "
  data-default-text=""
  ></sql-exercise>

<table class='datatable'>
<thead>
  <tr>
    <th>Commande</th>
    <th>Traduction</th>
    <th>Usage</th>
    <th>Exemple</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>SELECT</td>
    <td>SELECTIONNE</td>
    <td>Au début d'une requête SQL</td>
    <td>SELECT nom FROM personnages </td>
  </tr>
  <tr>
    <td>*</td>
    <td>tout</td>
    <td>Sélectionne toutes les colones d'une ligne</td>
    <td>SELECT * FROM personnages LIMIT 5</td>
  </tr>
  <tr>
    <td>FROM</td>
    <td>DEPUIS</td>
    <td>Pour choisir le tableau où on veut aller chercher l'information</td>
    <td>SELECT localisation FROM créatures</td>
  </tr>
  <tr>
    <td>LIMIT</td>
    <td>LIMITE</td>
    <td>Limite le nombre de résultats affichés</td>
    <td>SELECT nom FROM personnages LIMIT 3</td>
  </tr>
  <tr>
    <td>WHERE</td>
    <td>OÙ</td>
    <td>Filtre la requête à partir de conditions donnée après WHERE</td>
    <td>SELECT * FROM personnages WHERE naissance &gt; 1960</td>
  </tr>
  <tr>
    <td>AND</td>
    <td>ET</td>
    <td>Lorsque l'on veut vérifier 2 conditions</td>
    <td>SELECT * FROM personnages WHERE genre = 'Femme' AND patronus='Loutre'</td>
  </tr>
  <tr>
    <td>OR</td>
    <td>OU</td>
    <td>Lorsque l'on a le choix entre 2 conditions<br></td>
    <td>SELECT * FROM personnages WHERE sang = "Née-moldue" OR patronus="?"</td>
  </tr>
  <tr>
    <td>IN</td>
    <td>DANS</td>
    <td>Lorsque l'on a le choix entre plusieurs valeurs pour le même attribut</td>
    <td>SELECT * FROM créatures WHERE yeux_créature IN ('Gris','Noirs','Rouge')</td>
  </tr>
  <tr>
    <td>DISTINCT</td>
    <td>DISTINCT</td>
    <td>Choisir les résultats qui sont différents</td>
    <td>SELECT DISTINCT relation FROM famille </td>
  </tr>
</tbody>
</table>
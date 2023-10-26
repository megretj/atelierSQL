---
layout: tutorial
title: Commandes SQL
dbFile: data/potter.db
---

# Insert table with all of the translations
Sur cette page, tu trouveras un résumé des commandes SQL de base, leur effet et leur traduction.

Le format de base d'une requête SQL est la suivante:

{% highlight ruby %}
SELECT ... FROM ... 
{% endhighlight %}

On peut ensuite ajouter des mots clés pour spécifier la requête (recherche). 

<table class = "datatable">
<thead>
  <tr>
    <th>Commande</th>
    <th>Traduction</th>
    <th>Usage</th>
    <th>Exemple</th>
    <th>Résultat</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>SELECT</td>
    <td>SELECTIONNE</td>
    <td>Au début d'une requête SQL</td>
    <td>SELECT nom,prénom FROM personnages </td>
    <td></td>
  </tr>
  <tr>
    <td>FROM</td>
    <td>DEPUIS</td>
    <td>Pour choisir le tableau où on veut aller chercher l'information</td>
    <td>SELECT titre FROM oeuvre</td>
    <td></td>
  </tr>
  <tr>
    <td>DISTINCT</td>
    <td>DISTINCT</td>
    <td>Choisir les résultats qui sont différents</td>
    <td>SELECT DISTINCT nom FROM personnages</td>
    <td></td>
  </tr>
  <tr>
    <td>LIMIT</td>
    <td>LIMITE</td>
    <td>Limite le nombre de résultats affichés</td>
    <td>SELECT nom FROM personnages LIMIT 3</td>
    <td></td>
  </tr>
</tbody>
</table>
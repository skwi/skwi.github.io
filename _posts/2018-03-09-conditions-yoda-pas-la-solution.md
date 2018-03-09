---
layout: post
title:  "La solution les conditions Yoda ne sont pas"
subtitle:   "La peur de l'assignation mêne au coté obscur"
date:   2018-03-09 09:00:00
category: quality
tags: charge cognitive, détails, code, bonnes pratiques
author: "Cédric Spalvieri"
header-img: /img/posts/2018-03/yoda.jpg
credit: <a href="https://www.flickr.com/photos/redbuckley/4636017258/">Robert Deere - There is no title, there is only the force</a>
---

En me lançant dans les recherches pour cet article, je ne m'attendais pas à ce que le sujet des conditions Yoda soit aussi sujet à controverse. Elles ont des détracteurs comme des partisans, puisqu'elles sont même utilisées par [certains leaders du marché](https://symfony.com). Si ça peut me donner du grain à moudre, tant mieux.

Pour expliquer un peu ce que sont les conditions Yoda, il s'agit d'une convention de codage nommée d'après le maitre Jedi célèbre pour sa grande sagesse mais surtout sa syntaxe si particulière. Le principe d'une condition Yoda est justement d'inverser la syntaxe "naturelle" d'une condition en la faisant commencer par la part constante, par exemple :

```php
if (JEDI_MASTER === $jediLevel) {
// ...
```

## De bonnes raisons cette syntaxe est née

S'il a été un jour décidé de mettre en place cette syntaxe alors qu'elle va à l'encontre du langage naturel, il doit y avoir une bonne raison. Et il y en a une : prévenir les erreurs d'inattention.

Il n'est en effet pas rare d'utiliser un simple `=` et d'écrire malencontreusement (pour reprendre notre exemple précédent) : 
```php
if ($jediLevel = JEDI_MASTER) {
// ...
```

S'en suit plusieurs minutes de debuging où l'on ne comprend pas pourquoi `$jediLevel` est toujours au niveau `JEDI_MASTER`, rentrant ainsi dans la condition à chaque fois.

En plaçant la constante à gauche de l'égalité, les conditions Yoda protègent d'une attribution fortuite puisque l'on aura forcément une erreur à la compilation/l'exécution si l'on écrit :
```php
if (JEDI_MASTER = $jediLevel) {
// ...
```

## Confus mon langage te semble

Si cette syntaxe a le mérite de protéger des erreurs, elle rend le code plus complexe à déchiffrer, et tout développeur avec un peu de bouteille connait le vieil adage :

> Code will be read many more times than it's written. Write for readability.

Il y a donc une mesure à trouver entre le temps gagné en évitant cette erreur d'inattention parfois complexe à débuger, et l'écriture d'un code qui peut rapidement devenir lourd en terme de charge cognitive.

## Like it's 2018 you should code

Avec un peut de recul, écrire des conditions Yoda c'est finalement utiliser un outil (le compilateur/exécuteur) pour éviter l'introduction d'un bug ... mais il existe toute une palette d'outils qui sont aujourd'hui standards et qui permettent également d'éviter cette erreur, avec plus ou moins d'efficacité :
- l'inspection du code par l'IDE, qui mettra en évidence la faute ;
- les outils d'analyse statique (_linters_) qui peuvent être configurés pour na pas laisser passer ces attributions ;
- les tests unitaires et fonctionnels, qui peuvent souvent identifier cette anomalie de comportement ;
- la revue de code, qui fournit littéralement un autre regard sur le code écrit.
 
Il est fréquent, quel que soit son niveau, d'introduire dans le code une erreur d'inattention comme une attribution dans une condition, un point virgule manquant, ... mais si ce genre d'erreur arrive à passer toutes ces étapes, le problème est peut être plus situé dans les processus qualité que dans les conventions de codage.

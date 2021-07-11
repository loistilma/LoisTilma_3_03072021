# Ohmyfood

## Identité graphique
* Polices
  * Logo et titres: [Shrikhand](https://fonts.google.com/specimen/Shrikhand)
  * Texte: [Roboto](https://fonts.google.com/specimen/Roboto)


* Couleurs
  * Primaire : #9356DC
  * Secondaire :  #FF79DA
  * Tertiaire : #99E2D0

## Technologies
* Uniquement CSS, sans JavaScript.
* Aucun framework, l’utilisation de SASS serait un plus.
* Pas de "inline styles" dans le HTML

## Compatibilité
* Mobile-first, tablette et desktop
* Validation W3C en HTML et CSS sans erreur.
* Compatible avec les dernières versions Chrome et Firefox.

## Contenu des pages
* Page d’accueil (x1)
  * Affichage de la localisation des restaurants
  * Une courte présentation de l’entreprise.
  * Une section contenant les 4 menus sous forme cartes, redirection vers la page du menu.

* Pages de menu (x4)
  * 4 pages contenant le menu d’un restaurant.
 
* Footer
  * Identique sur toutes les pages
  * “Contact”, renvoi vers une adresse mail

* Header
  * Présent sur toutes les pages.
  * Contient le logo du site sur la page d'accueil.
  * Contient un bouton de retour vers la page d’accueil sur les pages de menu

## Effets graphiques et animations
* Animations ou transitions CSS, pas de JavaScript ni de librairie.

#### Boutons
* Hover
  * La couleur de fond des boutons principaux devra légèrement s’éclaircir.
  * L’ombre portée devra également être plus visible.
* Click
  * Un bouton "J’aime" doit se remplir progressivement. L’effet peut être apparaître au survol sur desktop au lieu du clic.

#### Page d’accueil
* “loading spinner” 
  * Apparaît pendant 1 à 3 secondes quand on arrive sur la page d'accueil, couvre l'intégralité de l'écran, et utilise les animations CSS.

#### Pages de menu
* Apparaît progressivement avec un léger décalage. 
* Pourront soit apparaître un par un, soit par groupe “Entrée”, “Plat” et “Dessert”
* "User" peut ajouter les plats qu'il souhaite à sa commande en cliquant dessus. Cela fait apparaître une petite coche à droite du plat. Cette coche devra coulisser de
la droite vers la gauche. L’effet peut apparaître au survol
sur desktop au lieu du clic. 
* Si l’intitulé du plat est trop long, il devra être rogné avec
des points de suspension.
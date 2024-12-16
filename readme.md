# 🎮 Jeu de Mémoire (Memory)

## Description

Le **Jeu de Mémoire** est un jeu où le joueur doit trouver des **paires de cartes identiques**. Les cartes sont mélangées aléatoirement et affichées face cachée. À chaque tour, le joueur peut retourner deux cartes. Le but est de trouver toutes les paires avec le moins de coups possible.

---

## Fonctionnalités

- 🎴 **Grille de cartes** : Une grille dynamique avec des paires d'icônes (émojis 🍎, 🍌, etc.).
- 🔄 **Mélange aléatoire** : Les cartes sont mélangées à chaque nouvelle partie.
- ✅ **Vérification des paires** : Si deux cartes retournées sont identiques, elles restent visibles.
- 📊 **Suivi des coups** : Le jeu affiche le nombre de coups joués.
- 🏆 **Détection de victoire** : Le jeu se termine lorsqu'il ne reste plus de cartes cachées.
- 🔁 **Réinitialisation** : Un bouton permet de recommencer une nouvelle partie.

---

## Technologies utilisées

- **HTML** : Structure de la page.
- **CSS** : Design des cartes et de la grille.
- **JavaScript** : Logique du jeu, gestion des événements et aléatoire.

---

## Instructions d'utilisation

1. **Ouvrez le fichier** `index.html` dans un navigateur web.
2. Cliquez sur une carte pour la retourner.
3. Retournez une deuxième carte :
   - Si les deux cartes sont identiques ✅, elles restent visibles.
   - Sinon 🚫, elles se retournent après 1 seconde.
4. Continuez jusqu'à ce que toutes les paires soient trouvées.
5. Le jeu affiche le nombre total de **coups** nécessaires pour terminer la partie.
6. Cliquez sur le bouton **"Recommencer"** pour rejouer.

---

## Fonctionnement du code

1. **Mélange des cartes** :  
   Utilisation de l'algorithme de **Fisher-Yates** pour mélanger les cartes.

2. **Retourner une carte** :  
   Lorsqu'une carte est cliquée :
   - Elle s'affiche avec son contenu (émoji).
   - Le jeu attend que deux cartes soient retournées pour comparer.

3. **Vérification des paires** :  
   - Si les cartes sont identiques, elles restent visibles.  
   - Sinon, elles se retournent après un délai d'une seconde.

4. **Fin de partie** :  
   Si toutes les cartes sont trouvées, un message de **victoire** s'affiche.

5. **Réinitialisation** :  
   Le bouton **"Recommencer"** mélange à nouveau les cartes et réinitialise le jeu.

---

## Exemple d'affichage

- Cartes en jeu (face visible et cachée) :

🍎 | 🍌 | 🍎 | 🍒
🍒


Statut : **"Bravo ! Vous avez gagné en 12 coups !"**

---

## Améliorations possibles

- Ajouter un **mode multijoueur**.
- Intégrer un **chronomètre** pour suivre le temps.
- Ajouter des **niveaux de difficulté** avec plus de cartes.
- Animer les cartes avec des transitions CSS.

---

## Auteur

Développé par [Kei Prince Frejuste] - 2024.

"use strict";
const favorites = [
    {
        id: 1,
        name: "Produit 1"
    },
    {
        id: 2,
        name: "Produit 2"
    },
];
const test = {
    id: 3,
    name: 'test'
};
const test2 = {
    id: 2,
    name: 'test'
};
function addToFavorite(arrObject, objToAdd) {
    // comparer si objToAdd est présent dans arrObject
    const isAlreadyInObject = arrObject.some(obj => obj.id === objToAdd.id);
    // Si oui "deja présent dans les favoris"
    if (isAlreadyInObject) {
        return `Déja présent dans les favoris`;
        // Si non, l'ajouter au tableau et "Ajouté aux favoris"
    }
    else {
        arrObject.push(objToAdd);
        return `Ajouté aux favoris`;
    }
}
// console.log(addToFavorite(favorites,test));
// console.log(favorites);
// console.log(addToFavorite(favorites,test2));
// console.log(favorites);
// Fonction de toggle pour ajouter/supprimer un favori
function toggleFavorite(arrObject, objToToggle) {
    // Vérifier si l'objet est déjà dans le tableau
    const index = arrObject.findIndex(obj => obj.id === objToToggle.id);
    if (index === -1) {
        // Si l'objet n'est pas présent, l'ajouter
        arrObject.push(objToToggle);
        return "Ajouté aux favoris";
    }
    else {
        // Si l'objet est présent, le retirer
        arrObject.splice(index, 1);
        return "Supprimé des favoris";
    }
}
// Exemple d'utilisation
console.log(toggleFavorite(favorites, test)); // Ajouté aux favoris
console.log(favorites); // Affiche le tableau avec le nouvel objet ajouté
console.log(toggleFavorite(favorites, test2)); // Supprimé des favoris
console.log(favorites);

"use strict";
const categories = [
    { id: 1, name: 'Electronique' },
    { id: 2, name: 'Accessoires' }
];
const products = [
    { name: 'ABC', idCategory: 2, price: 30 },
    { name: 'AAA', idCategory: 2, price: 30 },
    { name: 'aaa', idCategory: 2, price: 30 },
    { name: 'Télévision', idCategory: 1, price: 400 },
    { name: 'Laptop', idCategory: 1, price: 900 },
    { name: 'Souris', idCategory: 2, price: 20 },
    { name: 'Clavier', idCategory: 2, price: 30 },
    { name: 'Smartphone', idCategory: 1, price: 800 },
    { name: 'Câble HDMI', idCategory: 2, price: 10 }
];
function filterAndSortProducts(categoryId, productsArray) {
    return productsArray
        .filter((product) => product.idCategory === categoryId)
        .sort((a, b) => {
        return a.price === b.price
            ? a.name.localeCompare(b.name)
            : a.price - b.price;
    });
}
console.log(filterAndSortProducts(1, products));
console.log(filterAndSortProducts(2, products));

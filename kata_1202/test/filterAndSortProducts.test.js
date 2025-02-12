"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterAndSortproducts_1 = require("../filterAndSortproducts");
const products = [
    { name: 'ABC', idCategory: 2, price: 30 },
    { name: 'aaa', idCategory: 2, price: 30 },
    { name: 'AAA', idCategory: 2, price: 30 },
    { name: 'Télévision', idCategory: 1, price: 400 },
    { name: 'Laptop', idCategory: 1, price: 900 },
    { name: 'Souris', idCategory: 2, price: 20 },
    { name: 'Clavier', idCategory: 2, price: 30 },
    { name: 'Smartphone', idCategory: 1, price: 800 },
    { name: 'Câble HDMI', idCategory: 2, price: 10 }
];
describe('filterAndSortProducts', () => {
    test('should return products sorted by price and name for category 1', () => {
        const result = (0, filterAndSortproducts_1.filterAndSortProducts)(1, products);
        expect(result).toEqual([
            { name: 'Télévision', idCategory: 1, price: 400 },
            { name: 'Smartphone', idCategory: 1, price: 800 },
            { name: 'Laptop', idCategory: 1, price: 900 }
        ]);
    });
    test('should return products sorted by price and name for category 2', () => {
        const result = (0, filterAndSortproducts_1.filterAndSortProducts)(2, products);
        expect(result).toEqual([
            { name: 'Câble HDMI', idCategory: 2, price: 10 },
            { name: 'Souris', idCategory: 2, price: 20 },
            { name: 'aaa', idCategory: 2, price: 30 },
            { name: 'AAA', idCategory: 2, price: 30 },
            { name: 'ABC', idCategory: 2, price: 30 },
            { name: 'Clavier', idCategory: 2, price: 30 }
        ]);
    });
    test('should return an empty array if no products match the category', () => {
        const result = (0, filterAndSortproducts_1.filterAndSortProducts)(999, products); // Category not in products
        expect(result).toEqual([]);
    });
    test('should handle products with the same price sorted by name', () => {
        const result = (0, filterAndSortproducts_1.filterAndSortProducts)(2, products);
        console.log(result);
        expect(result).toEqual([
            { name: 'Câble HDMI', idCategory: 2, price: 10 },
            { name: 'Souris', idCategory: 2, price: 20 },
            { name: 'aaa', idCategory: 2, price: 30 },
            { name: 'AAA', idCategory: 2, price: 30 },
            { name: 'ABC', idCategory: 2, price: 30 },
            { name: 'Clavier', idCategory: 2, price: 30 },
        ]);
    });
});

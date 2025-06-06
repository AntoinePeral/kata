export interface Product{
    name: string,
    idCategory: number,
    price: number
}

interface Category{
    id: number,
    name: string
}

const categories : Category[] = [ 
    { id: 1, name: 'Electronique' },
     { id: 2, name: 'Accessoires' } 
];
    
const products: Product[] = [ 
    { name: 'ABC', idCategory:2, price: 30},
    { name: 'aaa', idCategory:2, price: 30},
    { name: 'AAA', idCategory:2, price: 30},
    { name: 'Télévision', idCategory: 1, price: 400 },
    { name: 'Laptop', idCategory: 1, price: 900 },
    { name: 'Souris', idCategory: 2, price: 20 },
    { name: 'Clavier', idCategory: 2, price: 30 },
    { name: 'Smartphone', idCategory: 1, price: 800 },
    { name: 'Câble HDMI', idCategory: 2, price: 10 }
];

export function filterAndSortProducts(categoryId: number, productsArray: Product[]) : Product[]{
    return productsArray
        .filter((product) => product.idCategory === categoryId)
        .sort((a, b) => {
            // D'abord on compare les prix
            if (a.price === b.price) {
                // Si les prix sont égaux, on compare par nom, de manière insensible à la casse
                return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
            }
            // Sinon, on compare par prix
            return a.price - b.price;
        });
}

console.log(filterAndSortProducts(1, products));
console.log(filterAndSortProducts(2, products));

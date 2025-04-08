// Tu travailles sur le développement d'une boutique en ligne. 
// Ta mission est de créer une série de fonctions qui permettront de gérer les stocks de produits.
// Chaque produit est représenté par un objet avec les propriétés name, price, et quantity.
// Implémente les fonctions suivantes en JavaScript :
// Tu peux utiliser ce tableau products comme exemple de données à gérer :
// :index_vers_la_droite: Les noms de produits sont uniques (pas de doublons).
// :index_vers_la_droite:  Les 3 premières fonctions doivent retourner le tableau de produits à jour.

import { Product } from "./product"

export const products: Product[]= [
        { name: "Laptop", price: 1200, quantity: 5 },
        { name: "Mouse", price: 20, quantity: 50 },
        { name: "Keyboard", price: 50, quantity: 30 },
    ];

// addProduct(products, newProduct) , qui ajoute un nouveau produit au tableau products.  
// :danger: Si un produit avec le même nom existe déjà, augmente simplement la quantité de ce produit.
export function addProduct(products: Product[], newProduct: Product): Product[]{
    const alreadyExist = products.find(product => product.name.toLowerCase() === newProduct.name.toLowerCase());
    console.log('product find : ',alreadyExist)
    if(alreadyExist){
        alreadyExist.quantity += newProduct.quantity
    } else {
        products.push(newProduct)
    }
    return  products
}

// removeProduct(products, productName) , qui supprime un produit du tableau products en fonction de son nom. 
// :danger: Si le produit n'existe pas, retourne un message dans la console indiquant que le produit n'a pas été trouvé.
export function removeProduct(products: Product[], productName: string): Product[] {
    const index = products.findIndex(product => product.name.toLowerCase() === productName.toLowerCase());
    console.log('Index trouvé : ', index)
    if (index !== -1) {
      products.splice(index, 1);
    } else {
      console.log(`Produit "${productName}" non trouvé.`);
    }
    return products;
  }
  

  // updateQuantity(products, productName, quantity) , qui met à jour la quantité d'un produit spécifique. 
// :danger: Si le produit n'existe pas, retourne un message indiquant que le produit n'a pas été trouvé.
export function updateQuantity(products: Product[], productName: string, quantity: number): Product[]{
    const findProduct = products.find(product => product.name.toLowerCase() === productName.toLowerCase());
    if(findProduct){
        findProduct.quantity = quantity;
    } else{
        console.log(`Produit : ${productName} non trouvé`)
    }
      return products;
}


// getTotalValue(products) , qui retourne la valeur totale des stocks de la boutique.
export function getTotalValue(products: Product[]){
    return products.reduce((totalValue, actualProduct) => totalValue + actualProduct.price * actualProduct.quantity,0)
}


console.log('---------- Add Laptop --> already exist ------------')
console.log(addProduct(products, { name: "Laptop", price: 20, quantity: 5 })); 
console.log('---------- Add Car ------------')
console.log(addProduct(products, { name: "Car", price: 20, quantity: 5 })); 

console.log('---------- Remove Mouse ------------')
console.log(removeProduct(products, "Mouse"));
console.log('---------- Remove Mouse not found ------------')
console.log(removeProduct(products, "Mouse"));

console.log('---------- update Mouse not found ------------')
console.log(updateQuantity(products, "Mouse", 10));
console.log('---------- update Car ------------')
console.log(updateQuantity(products, "Car", 10));

console.log('total value : ', getTotalValue(products))
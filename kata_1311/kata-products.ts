interface Products {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
}

const products : Products[] = [
  { id: 1, name: "Smartphone XY", category: "Électronique", price: 799.99, rating: 4.6 },
  { id: 2, name: "Basketball Pro Ball", category: "Sport", price: 29.99, rating: 4.2 },
  { id: 3, name: "Casque Audio Sans Fil", category: "Électronique", price: 199.99, rating: 4.8 },
  { id: 4, name: "Série de Romans Fantasy", category: "Livres", price: 59.99, rating: 4.5 },
  { id: 5, name: "Montre Connectée", category: "Électronique", price: 249.99, rating: 4.4 },
];

function sortByRating(products:Products[]): Products[] {
  return products.sort(function compare(a, b) {
    if (a.rating > b.rating)
       return -1;
    if (a.rating < b.rating )
       return 1;
    return 0;
  });
}

/**
 * 
 * @returns It should return a number where:
            A negative value indicates that b should come before a.
            A positive value indicates that b should come after a.
            Zero or NaN indicates that a and b are considered equal.
            To memorize this, remember that (a, b) => b - a sorts numbers in descending order.
 */
function sortByRating2(products:Products[]): Products[] {
  return products.sort((a, b) => b.rating - a.rating);
}

/**
 * @returns It should return a number where: 
 *          A negative value indicates that a should come before b.
            A positive value indicates that a should come after b.
            To memorize this, remember that (a, b) => a - b sorts numbers in ascending order.
            Use reverse() to reverse order in the array
 */
function sortByRating3(products:Products[]): Products[] {
  return products.sort((a, b) => a.rating - b.rating).reverse();
}


function filterByCategory(categoryName): Products[]{
  return products.filter(product => product.category.toUpperCase() === categoryName.toUpperCase());
}
console.log("------------------------------------------------------------");
console.log("Trier par note");
console.log("------------------------------------------------------------");
console.log(sortByRating(products));
console.log("------------------------------------------------------------");
console.log("Trier par note 2");
console.log("------------------------------------------------------------");
console.log(sortByRating2(products));
console.log("------------------------------------------------------------");
console.log("Trier par note 3");
console.log("------------------------------------------------------------");
console.log(sortByRating3(products));
console.log("------------------------------------------------------------");
console.log("Filtre par catégorie : Electronique");
console.log("------------------------------------------------------------");
console.log(filterByCategory("Électronique"));


// for(let index=0; index<products.length; index++){
//   console.log(index,"index");
//   let maxIndex = index;

//   for(let j= index +1; j<products.length;j++){
//     console.log(j, "index j dans la seconde boucle");
//     console.log(products[j].rating, products[j].name, "products j dans la seconde boucle");
//     console.log(products[maxIndex].rating,products[maxIndex].name,"product maxindex dans la seconde boucle");
//     if(products[j].rating> products[maxIndex].rating){
//       console.log(maxIndex, "dans le if");
//       maxIndex = j;
//     }
//   }

//   console.log('jai fini une boucle');
//   console.log(maxIndex);
//   console.log(index);
//   if( maxIndex !==index){
//     console.log('echange des positions');
//     let temp = products[index];
//     console.log(temp);
//     products[index] = products[maxIndex];
//     console.log(products[index]);
//     products[maxIndex] = temp;
//     console.log(products[maxIndex]);
//   }
// }

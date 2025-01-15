/* 
1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et
 retourne la somme de tous les nombres pairs présents dans le tableau.
 */
const numbers = [1, 2, 3, 4, 5, 6];
function sumOfNumbers (numbers: number[]): number{
  // Filtrer dans le tableau les nombres pairs 
  const evenArray = numbers.filter(num => num%2 === 0);
  // Return somme de tous ces nombres
  return evenArray.reduce((sum, numToAdd) => sum+ numToAdd, 0);

  // Seconde manière en initialisant la somme à partir de 0 sans filter
  // return numbers.reduce((sum, num)=> {
  //   if(num % 2 === 0){  
  //     console.log('even number :' + num);
         
  //     return sum + num;
  //   }
  //   console.log('odd number :' + num );
  //   return sum
  // }, 0)

  // Troisième facon avec une boucle for
  // let sum = 0;
  // for (let index = 0; index < numbers.length; index++) {
  //   if(numbers[index] % 2 === 0){
  //     sum += numbers[index]
  //   }
  // }
  // return sum;

  // Reduce en ternaire 
  // return numbers.reduce((prev, n) => n % 2 === 0 ? prev + n : prev , 0)

  // Avec un .map()
  // return numbers
  // .map(num => (num % 2 === 0 ? num : 0))  // On garde le nombre s'il est pair, sinon on retourne 0
  // .reduce((acc, current) => acc + current, 0); // On fait la somme des éléments
}

console.log(sumOfNumbers(numbers));

/*
2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers
et retourne le plus grand nombre présent dans le tableau.
*/
const numbers2 = [12, 21, 67, 36, 49, 51];
function maxNumber(numbers: number[]) : number {
  // Filter dans un tableau pour trouver le plus grand number avec Math.max
    //  return Math.max(...numbers);

  //  Avec une boucle
  let maxNumber = numbers2[0];
  for (let index = 0; index < numbers2.length; index++) {
    // if(numbers2[index]>maxNumber){
    //    maxNumber = numbers2[index];
    // }
    const current = numbers2[index];
    if(current>maxNumber) maxNumber = current;
  }
  return maxNumber

  // En utilisant sort()
  // const sortedNumbers = numbers2.sort((a, b)=> b - a);
  // return sortedNumbers[0];
  

}

console.log(maxNumber(numbers2));
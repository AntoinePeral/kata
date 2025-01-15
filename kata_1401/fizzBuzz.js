// Un Wake Up Kata un peu particulier ce matin car nous allons l'accompagner de tests avec Jest !
// Voici la consigne :
// Écris une fonction appelée fizzBuzz qui prend un entier positif en entrée et retourne un tableau contenant les nombres de 1 à cet entier. Cependant :
// Pour chaque multiple de 3, ajoute "Fizz" au lieu du nombre.
// Pour chaque multiple de 5, ajoute "Buzz" au lieu du nombre.
// Pour les multiples de 3 et 5, ajoute "FizzBuzz" au lieu du nombre.
// Mets tout d'abord en place tes tests avec Jest, puis gère la logique de ta méthode... As-tu du vert lors dans son exécution ?

function fizzBuzz(number){
    let fizzBuzzArray =[]

    for (let index = 1; index <= number; index++) {


            if(index%5 == 0 & index%3 == 0){
                fizzBuzzArray.push('FizzBuzz');
            } else if (index%3 == 0) {
                fizzBuzzArray.push('Fizz');
            } else if(index%5 == 0){
                fizzBuzzArray.push('Buzz');
            } else {
                fizzBuzzArray.push(index);
            }
        }
    console.log(fizzBuzzArray)
    return fizzBuzzArray
}
 


fizzBuzz(0)
fizzBuzz(1)
fizzBuzz(5)
fizzBuzz(10)
fizzBuzz(15)


module.exports = fizzBuzz;
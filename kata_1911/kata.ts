// Le but est de convertir un sigle non abbrégé en sa version abbrégée (majuscules séparées par des points). Exemple : 'Wild Code School' => 'W.C.S.'
// Dans un second temps, ajouter un 1er cas particulier Société Nationale du Chemin de Fer Français doit donner 'S.N.C.F.' et non ‘S.N.D.C.D.F.F’ , tandis que 'Electricité de France' doit bien donner 'E.D.F.'
// Puis un autre cas particulier 'World Wide Web Consortium' doit donner W.3.C.
// Les autres sigles fonctionnent bien entendu toujours comme attendus.
const WCS: string = "Wild Code School";
const SNCF: string = "Société Nationale du Chemin de Fer Français";
const EDF: string = "Electricité de France";
const W3C : string = "World Wide Web Consortium";

function wordAcronym(sentence: string) {
  let acronym: string[] = []; // Tableau pour stocker les lettres de l'acronyme
  let numberLowerCaseLetter: number = 0; // Compteur pour les lettres minuscules
  let lowerCaseLetter = ''; // Variable pour la lettre minuscule transformée en majuscule
  let sameLetter = 0;

  // Parcours des mots pour compter les lettres minuscules et ajouter les majuscules
  sentence.split(' ').map(word => word[0]).forEach((letter) => {
    console.log(letter);  // Log des lettres pour déboguer

    if (letter === letter.toLocaleLowerCase()) {
      // Si la lettre est minuscule, on incrémente le compteur
      numberLowerCaseLetter++;
    }

    if (letter === letter.toUpperCase()) {
      // Si la lettre est majuscule, on l'ajoute à l'acronyme
      acronym.push(letter);
    }
  });

  // Si il y a plus d'une minuscule, on supprime toutes les lettres minuscules du tableau
  if (numberLowerCaseLetter > 1) {
    acronym = acronym.filter((letter) => letter === letter.toUpperCase()); // On garde seulement les majuscules
  } else if (numberLowerCaseLetter === 1) {
    // Si il y a exactement une minuscule, on la transforme en majuscule et on l'ajoute à l'acronyme
    sentence.split(' ').map(word => word[0]).forEach((letter, index) => {
      if (letter === letter.toLocaleLowerCase()) {
        lowerCaseLetter = letter.toUpperCase();
        acronym.splice(index, 0, lowerCaseLetter); // On ajoute la minuscule convertie en majuscule
      }
    });
  }

  for (let index = 0; index < acronym.length; index++) {
    console.log("acronym",acronym[index]);
    console.log("acronym1",acronym[index+1]);
    console.log("acronym2",acronym[index+2]);

    
    if(sameLetter >= 3 && acronym[index] === acronym[index +1] ){
      acronym.splice(index +1, 1);
      index --;
      console.log('hello');
      
    }
    else if( acronym[index] === acronym[index +1]){
      console.log('toto');
      console.log('yo',acronym[index]);
      
        acronym.splice(index +1, 1);
    }
  }


  // Construction de l'acronyme final en séparant par des points
  const finalAcronym = acronym.join('.') + '.';

  console.log(finalAcronym); // Affichage de l'acronyme final
}

wordAcronym(SNCF);  // S.N.C.F
wordAcronym(EDF);   // E.D.F
wordAcronym(WCS);   // W.C.S
wordAcronym(W3C);   // W.3.C





// function wordAcronym(sentence: string): string {
//   // Gestion des cas particuliers
//   if (sentence === "Société Nationale du Chemin de Fer Français") {
//     return "S.N.C.F.";
//   }
//   if (sentence === "World Wide Web Consortium") {
//     return "W.3.C.";
//   }

//   // Traitement général
//   const acronym = sentence
//     .split(" ") // On sépare les mots
//     .map(word => word[0].toUpperCase()) // On prend la première lettre de chaque mot et on la met en majuscule
//     .join(".") + "."; // On joint avec des points et on ajoute un point final

//   return acronym;
// }

// // Test des différents cas
// const WCS = "Wild Code School";
// const SNCF = "Société Nationale du Chemin de Fer Français";
// const EDF = "Electricité de France";
// const W3C = "World Wide Web Consortium";

// console.log(wordAcronym(SNCF)); // S.N.C.F.
// console.log(wordAcronym(EDF));  // E.D.F.
// console.log(wordAcronym(WCS));  // W.C.S.
// console.log(wordAcronym(W3C));  // W.3.C.

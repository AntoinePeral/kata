/*Ensuite on va parler température.
Objectif : crée une fonction de conversion de température universelle convertTemperature(). 
La fonction doit pouvoir convertir n'importe quelle température entre les unités Celsius, Fahrenheit, et Kelvin.
Cette fonction prendra 3 paramètres :
value : la température à convertir de type number
fromUnity : l'unité de température d'origine de type string
toUnity : l'unité de température cible de type string
La fonction doit retourner un résultat avec un maximum de deux décimales.
Pour info, voici Les formules de conversion entre les échelles de température sont les suivantes :
De Celsius à Fahrenheit : F=C×9/5+32
De Celsius à Kelvin : K=C+273.15
De Fahrenheit à Celsius : C=(F−32)×5/9
De Fahrenheit à Kelvin : K=(F+459.67)×5/9
De Kelvin à Celsius : C=K−273.15
De Kelvin à Fahrenheit : F=K×9/5−459.67
*/


function convertTemperature(value: number, fromUnity: string, toUnity: string): number | string{
  let result: number;
  let fromUnityLowerCase: string = fromUnity.toLowerCase();
  let toUnityLowerCase: string = toUnity.toLowerCase();

  switch (fromUnityLowerCase) {
    case 'celsius':
      switch (toUnityLowerCase) {
        case 'fahrenheit':
          result = value*9/5+32;
          break;
        case 'kelvin':
          result = value+273.15;
          break;
        case 'celsius':
          result = value
          break;
        default:
          return 'erreur unité non trouvée';
          break;
      }
      break;
    case 'fahrenheit':
      switch (toUnityLowerCase) {
        case 'celsius':
          result = (value-32)*5/9;
          break;
        case 'kelvin':
          result = (value+459.67)*5/9;
          break;
        case 'fahrenheit':
          result = value;
          break;
        default:
          return 'erreur unité non trouvée';
          break;
      }
      break;
    case 'kelvin':
      switch (toUnityLowerCase) {
        case 'fahrenheit':
          result = value*9/5-459.67;
          break;
        case 'celsius':
          result = value-273.15;
          break;
        case 'kelvin':
          result = value;
          break;
        default:
          return 'erreur unité non trouvée';
          break;
      }
      break;
    default:
      return 'erreur unité non trouvée';
    }

  return result.toFixed(2);
}


console.log(convertTemperature(100, "Celsius", "Fahrenheit"));  // 212
console.log(convertTemperature(0, "Celsius", "Kelvin"));        // 273.15
console.log(convertTemperature(40, "Fahrenheit", "Celsius"));   // 4.44
console.log(convertTemperature(300, "Kelvin", "Celsius"));      // 26.85
console.log(convertTemperature(212, "Fahrenheit", "Kelvin"));   // 373.15
console.log(convertTemperature(273.15, "KElvin", "Fahrenheit")); // 32
console.log(convertTemperature(273.15, "kelvin", "toto")); // Erreur
"use strict";
const temperatureData = [
    { "city": "Paris", "year": 2020, "avgTemperature": 17.7 },
    { "city": "Paris", "year": 2021, "avgTemperature": 18.1 },
    { "city": "Paris", "year": 2022, "avgTemperature": 16.6 },
    { "city": "Lyon", "year": 2020, "avgTemperature": 15.1 },
    { "city": "Lyon", "year": 2021, "avgTemperature": 18.6 },
    { "city": "Lyon", "year": 2022, "avgTemperature": 14.7 },
    { "city": "Marseille", "year": 2020, "avgTemperature": 13.5 },
    { "city": "Marseille", "year": 2021, "avgTemperature": 17.0 },
    { "city": "Marseille", "year": 2022, "avgTemperature": 11.4 },
    { "city": "Toulouse", "year": 2020, "avgTemperature": 13.6 },
    { "city": "Toulouse", "year": 2021, "avgTemperature": 15.7 },
    { "city": "Toulouse", "year": 2022, "avgTemperature": 17.5 },
    { "city": "Nice", "year": 2020, "avgTemperature": 11.5 },
    { "city": "Nice", "year": 2021, "avgTemperature": 19.4 },
    { "city": "Nice", "year": 2022, "avgTemperature": 11.8 }
];
console.log("Ma solution");
// Fonction pour regrouper les données par ville
function groupByCity(data) {
    const groupedData = {};
    // On parcourt chaque donnée de température
    data.forEach(({ city, avgTemperature }) => {
        if (!groupedData[city]) {
            // Si la ville n'existe pas encore, on initialise un tableau pour cette ville
            groupedData[city] = [];
        }
        // Ajout de la température dans le tableau de la ville
        groupedData[city].push(avgTemperature);
    });
    console.log(groupedData);
    return groupedData;
}
function getCityWithHighestAverage(data) {
    const groupedData = groupByCity(data);
    let maxAverageTemp = -Infinity;
    let cityWithMaxAverage = '';
    // Calcul de la moyenne des températures pour chaque ville
    for (const city in groupedData) {
        const temperatures = groupedData[city];
        const averageTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
        // Comparaison avec la température moyenne maximale trouvée jusqu'ici
        if (averageTemp > maxAverageTemp) {
            maxAverageTemp = averageTemp;
            cityWithMaxAverage = city;
        }
    }
    // Retourner la ville avec la moyenne la plus élevée
    return cityWithMaxAverage;
}
const cityWithHighestAverage = getCityWithHighestAverage(temperatureData);
console.log(`La ville avec la température moyenne la plus élevée est : ${cityWithHighestAverage}`);
// Regroupement des données
// const groupedData = groupByCity(temperatureData);
// // Fonction pour calculer la température moyenne pour chaque ville
// function calculateAverageTemperatures(groupedData: Record<string, number[]>): Record<string, number> {
//   const averageTemperatures: Record<string, number> = {};
//   // Pour chaque ville dans les données regroupées
//   for (const city in groupedData) {
//     const temperatures = groupedData[city];
//     // Calcul de la somme des températures
//     const totalTemperature = temperatures.reduce((total, temp) => total + temp, 0);
//     // Calcul de la moyenne
//     const averageTemperature = totalTemperature / temperatures.length;
//     // Enregistrement de la température moyenne dans l'objet
//     averageTemperatures[city] = averageTemperature;
//   }
//   return averageTemperatures;
// }
// // Fonction pour trouver la ville avec la température moyenne la plus élevée
// function getCityWithHighestAverageTemperature(averageTemperatures: Record<string, number>): string {
//   let highestCity = '';
//   let highestTemperature = -Infinity;
//   // Parcours de chaque ville et de sa température moyenne
//   for (const city in averageTemperatures) {
//     const avgTemp = averageTemperatures[city];
//     // Si la température moyenne de la ville est plus élevée que la température la plus élevée trouvée
//     if (avgTemp > highestTemperature) {
//       highestTemperature = avgTemp;
//       highestCity = city;
//     }
//   }
//   return highestCity;
// }
// // Calcul des températures moyennes
// const averageTemperatures = calculateAverageTemperatures(groupedData);
// // Trouver la ville avec la température moyenne la plus élevée
// const cityWithHighestTemperature = getCityWithHighestAverageTemperature(averageTemperatures);
// console.log(`La ville avec la température moyenne la plus élevée est : ${cityWithHighestTemperature}`);
// console.log("Test de fonction");
// // Fonction pour regrouper les données par ville avec reduce
// function groupByCityUsingReduce(data: TemperatureData[]): Record<string, number[]> {
//   return data.reduce((groupedData, input) => {
//     if (!groupedData[input.city]) {
//       // Si la ville n'existe pas encore, on initialise un tableau pour cette ville
//       groupedData[input.city] = [];
//     }
//     // Ajout de la température dans le tableau de la ville
//     groupedData[input.city].push(input.avgTemperature);
//     return groupedData; // On retourne l'objet mis à jour
//   }, {} as Record<string, number[]>); // Initialisation de l'objet comme Record<string, number[]>
// }
// console.log(groupByCityUsingReduce(temperatureData))
// // Fonction pour regrouper les données par ville avec une Map
// function groupByCityUsingMap(data: TemperatureData[]): Map<string, number[]> {
//   const groupedData = new Map<string, number[]>();
//   data.forEach(({ city, avgTemperature }) => {
//     if (!groupedData.has(city)) {
//       // Si la ville n'existe pas encore, on initialise un tableau pour cette ville
//       groupedData.set(city, []);
//     }
//     // Ajout de la température dans le tableau de la ville
//     groupedData.get(city)?.push(avgTemperature);
//   });
//   return groupedData;
// }
// console.log(groupByCityUsingMap(temperatureData))
// // Fonction pour regrouper les données par ville avec for...of
// function groupByCityUsingForOf(data: TemperatureData[]): Record<string, number[]> {
//   const groupedData: Record<string, number[]> = {};
//   // Utilisation de for...of pour parcourir chaque élément du tableau
//   for (const { city, avgTemperature } of data) {
//     if (!groupedData[city]) {
//       // Si la ville n'existe pas encore, on initialise un tableau pour cette ville
//       groupedData[city] = [];
//     }
//     // Ajout de la température dans le tableau de la ville
//     groupedData[city].push(avgTemperature);
//   }
//   return groupedData;
// }
// console.log(groupByCityUsingForOf(temperatureData))
// Matthieu
console.log("solution de Matthieu");
function getMaxAverageTemp(inputs) {
    const cityTemps = inputs.reduce((acc, input) => {
        if (!acc[input.city]) {
            acc[input.city] = [];
        }
        if (input.year > 2019 && input.year < 2023) {
            acc[input.city].push(input.avgTemperature);
        }
        console.log("Step 1 - Rassembler les températures pour une même ville", acc);
        return acc;
    }, {});
    const cityAvgTemps = Object.entries(cityTemps).map(([city, temps]) => ({
        city,
        avgTemp: temps.reduce((sum, temp) => sum + temp, 0) / temps.length,
    }));
    const maxCity = cityAvgTemps.reduce((max, cityData) => cityData.avgTemp > max.avgTemp ? cityData : max);
    return maxCity.city;
}
console.log(getMaxAverageTemp(temperatureData));
// Robin
// console.log("solution de Robin");
// let city = '';
// function findCity(array: TemperatureData[]) {
//     let averageTemperature = 0;
//     let cityAverageTemperature = 0;
//     for (let i = 0; i < array.length; i += 3) {
//         cityAverageTemperature =
//             (array[i].avgTemperature +
//                 array[i + 1].avgTemperature +
//                 array[i + 2].avgTemperature) /
//             3;
//         console.log(
//             array[i].city +
//                 ' a une temperature moyenne de ' +
//                 cityAverageTemperature
//         );
//         if (cityAverageTemperature > averageTemperature) {
//             city = array[i].city;
//             averageTemperature = cityAverageTemperature;
//         }
//     }
// }
// findCity(temperatureData);
// console.log(city);
// var personnes = [
//   { nom: "Alice", age: 21 },
//   { nom: "Bob", age: 20 },
//   { nom: "Charlie", age: 20 },
// ];
// function groupBy(tableauObjets: any, propriete: any) {
//   return tableauObjets.reduce(function (acc, obj) {
//     var cle = obj[propriete];
//     if (!acc[cle]) {
//       acc[cle] = [];
//     }
//     acc[cle].push(obj);
//     return acc;
//   }, {});
// }
// var personnesParAge = groupBy(personnes, "age");
// console.log(personnesParAge)

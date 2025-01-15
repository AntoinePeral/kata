function isPalindrome(str){
    // Convertir la chaîne en minuscules et enlever les caractères non alphanumériques
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Comparer la chaîne nettoyée avec sa version inversée
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

module.exports = isPalindrome
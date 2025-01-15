const isPrime = require('./isPrime');

describe('Le nombre est un nombre premier', ()=>{
    test('Doit retourner "false" pour les nombres 0 et négatif -1 ',()=>{
        expect(isPrime(-1)).toBe(false);
        expect(isPrime(0)).toBe(false);
    })

    test('Doit retourner "false" pour 1 ',()=>{
        expect(isPrime(1)).toBe(false);
    })

    test('Doit retourner "false" les nombres non premiers',()=>{
        expect(isPrime(4)).toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(8)).toBe(false);
        expect(isPrime(9)).toBe(false);
    })

    test('Doit retourner "true" les nombres premiers',()=>{
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBe(true);
        expect(isPrime(11)).toBe(true);
    })

})
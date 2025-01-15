import isPrime from '../isPrime';

describe('Tests pour isPrime', () => {
    test('Les nombres premiers sont identifiés correctement', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBe(true);
        expect(isPrime(11)).toBe(true);
    });

    test('Les nombres non premiers sont identifiés correctement', () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(8)).toBe(false);
        expect(isPrime(9)).toBe(false);
        expect(isPrime(10)).toBe(false);
    });

    test('Les nombres négatifs et zéro ne sont pas premiers', () => {
        expect(isPrime(-1)).toBe(false);
        expect(isPrime(0)).toBe(false);
        expect(isPrime(-17)).toBe(false);
    });
});

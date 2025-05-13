import findIntruder from '../findIntruder';

describe('tests pour findIntruders', ()=>{

    test("le tableau a moins de 3 éléments", () => {
        expect(findIntruder([1, 2])).toBeFalsy();
    })
    
    test('Should return the only odd number', ()=>{
        expect(findIntruder([1,2,4,6,8])).toBe(1);
    });

    test('should return the only Even number', ()=>{
        expect(findIntruder([1,3,5,7,8])).toBe(8);
    })

    test('should work with intruder at the beginning', () => {
        expect(findIntruder([2, 1, 3, 5, 7])).toBe(2);
    });

    test('should return an error because there is only odd number', ()=>{
        expect(()=> findIntruder([1,3,5,7,9])).toThrow('Aucun intrus trouvé dans le tableau, ne contient que des chiffres de type odd');
    })

    test('should return an error because there is only even number', ()=>{
        expect(()=> findIntruder([2,4,6,8,10])).toThrow('Aucun intrus trouvé dans le tableau, ne contient que des chiffres de type even');
    })
})
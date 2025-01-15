const fizzBuzz = require('./fizzBuzz');

describe('is a fizzBuzz array', ()=>{

    test('should return an empty array for input 0', ()=>{
        expect(fizzBuzz(0)).toEqual([]);
    });

    test('should return [1] for input 1', ()=>{
        expect(fizzBuzz(1)).toEqual([1]);
    });

    test('should replaces multiples of 3 with Fizz', ()=>{
        expect(fizzBuzz(3)).toEqual([1,2,'Fizz']);
    });

    test('should replace multiples of 5 with buzz', ()=>{
        expect(fizzBuzz(5)).toEqual([1,2,'Fizz',4,'Buzz']);
    });
    
    test('should replace multiples of both 3 and 5 with FizzBuzz', ()=>{
        expect(fizzBuzz(15)).toContain('FizzBuzz');
    });

    test('should return the correct sequence', () => {
        expect(fizzBuzz(10)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']);
    });

    test('should handle large inputs', ()=>{
        expect(fizzBuzz(100).length).toBe(100);
    });
    
})
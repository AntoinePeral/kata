const isPalindrome = require("./palindrome");

describe('isPalindrome', ()=>{
    it('should return true for a simple palindrome', () => {
        expect(isPalindrome('kayak')).toBe(true);
    });

    it('should return true for a palindrome with mixed case', () => {
        expect(isPalindrome('RaceCar')).toBe(true);
    });

    it('should return true for a palindrome with spaces and punctuation', () => {
        expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
    });

    it('should return true for a single character string', () => {
        expect(isPalindrome('a')).toBe(true);
    });

    it('should return true for an empty string', () => {
        expect(isPalindrome('')).toBe(true);
    });

    it('should return false for a non-palindromic word', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    it('should return false for a string with spaces and punctuation that is not a palindrome', () => {
        expect(isPalindrome('Hello, world!')).toBe(false);
    });

    it('should return true for a numeric palindrome', () => {
        expect(isPalindrome('12321')).toBe(true);
    });

    it('should return false for a numeric non-palindrome', () => {
        expect(isPalindrome('12345')).toBe(false);
    });

    it('should return true for a palindrome with special characters', () => {
        expect(isPalindrome('!@#$$#@!')).toBe(true);
    });
})
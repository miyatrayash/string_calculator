import { add } from './calculator';

describe('add', () => {
    it('should return the sum of two numbers', () => {
        expect(add('2,3')).toBe(5);
    });

    it('should return 0 when no numbers are provided', () => {
        expect(add('')).toBe(0);
    });
});

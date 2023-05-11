const calculator = require('./calculator.js');

describe('my calculator', () => {
    const calc = new calculator(6,3);
    
    test('6 + 3 equal to 8', () => {
        expect(calc.add()).toBe(9);
    });

    test('6 - 3 equal to 2', () => {
        expect(calc.subtract()).toBe(3);
    });

    test('6 x 3 equal to 2', () => {
        expect(calc.multiply()).toBe(18);
    });

    test('6 / 3 equal to 2', () => {
        expect(calc.divide()).toBe(2);
    });
});
const Calc = require('../js/calc.js');

test('Addition', () => {
    expect(Calc.add(1, 2)).toBe(3);
});

test('Subtraction', () => {
    expect(Calc.sub(2, 1)).toBe(1);
});

test('Multiplication', () => {
    expect(Calc.mult(2, 2)).toBe(4);
});

test('divide', () => {
    expect(Calc.divide(4, 2)).toBe(2);
});
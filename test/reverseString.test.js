const reverseString = require('../js/reverseString.js');

test('Reverse String Test 1', () => {
    expect(reverseString('test')).toBe('tset');
});
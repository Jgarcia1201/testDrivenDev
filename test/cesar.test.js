const cesar = require('../js/cesar.js');

test('Example 1', () => {
    expect(cesar('james', 1)).toBe('kbnft');
});

test('Punctuation', () => {
    expect(cesar('yup', 1)).toBe('zvq');
}); 
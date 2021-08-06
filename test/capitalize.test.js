const capitalize = require('../js/capitalize.js');
const { TestWatcher } = require('jest');

test('Ex. 1', () => {
    expect(capitalize('hello')).toBe('Hello');
});
const analyze = require('../js/array.js');

test('Example 1:', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    }); 
}); 
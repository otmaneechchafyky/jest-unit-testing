const capitalize = require('./capitalize.js');

test('is capitalized', () => {
    expect(capitalize('otmane')).toBe('Otmane');
});
const reverse = require('./reverseString.js');

test("return reversed", () => {
    expect(reverse('otmane')).toBe('enamto');
})
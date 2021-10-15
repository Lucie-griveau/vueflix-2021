const doSomeMath = require('../src/doSomeMath');

test('adds 2 + 2 to equal 4', () => {
    expect(doSomeMath(1, 1)).toBe(2);
    expect(doSomeMath(2, 2)).toBe(4);
});

test('adds 2 + 2 to equal 4', () => {
    for (let a = 1; a < 10; a++) {
        expect(doSomeMath(a, 5)).toBe(a + 5)
    }
});
const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 5", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});


test('prime function returns true for prime numbers', () => {
    expect(lib.prime(5)).toBe(true);
    expect(lib.prime(4)).toBe(false);
});

test('factorial function calculates factorial correctly', () => {
    expect(lib.factorial(5)).toBe(120);
});

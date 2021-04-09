const fb = require('./fizzbuzz');

test('Sanity check', () => {
	expect(2 + 2).toBe(4);
});

test('isFizzy', () => {
	expect(fb.isFizzy(12)).toBe(true);
	expect(fb.isFizzy(0)).toBe(true);
	expect(fb.isFizzy(13)).toBe(false);
});

test('isBuzzy', () => {
	expect(fb.isBuzzy(15)).toBe(true);
	expect(fb.isBuzzy(0)).toBe(true);
	expect(fb.isBuzzy(13)).toBe(false);
});

test('fizzyBuzzy', () => {
	expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz');
	expect(fb.fizzyBuzzy(123123)).toBe('fizz');
	expect(fb.fizzyBuzzy(10)).toBe('buzz');
});

test('fizzbuzz', () => {
	expect(fb.fizzBuzz(12)).toEqual(
		{ buzz: 2, count: 12, fizz: 4, fizzBuzz: 0 }
		// buzz: 1642016,
		// count: 12315123,
		// fizz: 3284033,
		// fizzBuzz: 821008,
	);
});

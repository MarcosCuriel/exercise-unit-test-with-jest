const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
	let total = sum(14, 9);
	expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {
	const dollars = fromEuroToDollar(1);
	const expected = 1 * 1.07;
	expect(dollars).toBe(expected);
});

test("One dollar should be 146.26 Yen", function () {
	const yen = fromDollarToYen(1);
	const expected = 1 * 146.26168224299064;
	expect(yen).toBe(expected);
});

test("One yen should be 0.005 pound ", function () {
	const pound = fromYenToPound(1);
	const expected = 1 * 0.005559105431309904;
	expect(pound).toBe(expected);
});



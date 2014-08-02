test('Hello', function() {
	ok(true, 'OKOK');
	//ok(false, 'FalseFalse');
	equal(1, 1, '１dayo');

	var car1 = new app.Car();
	var expected = {carKind: '', maxCapacity:0, rentalFee: 0};
	console.log(car1.toJSON());
	deepEqual(car1.toJSON(), expected, 'Car initialize');
})
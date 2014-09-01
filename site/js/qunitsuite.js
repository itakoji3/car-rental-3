test('CarInitTest', function() {
	var car1 = new app.Car();
	var expected = {carKind: '', maxCapacity:0, rentalFee: 0, carId: ''};
	console.log(car1.toJSON());
	deepEqual(car1.toJSON(), expected, 'Car initialize');
})


test('CustomerInitTest', function() {
	var customer1 = new app.Customer();
	var expected = {firstName: '', secondName: '', customerId: '' };
	console.log(customer1.toJSON());
	deepEqual(customer1.toJSON(), expected, 'Customer initialize');
})
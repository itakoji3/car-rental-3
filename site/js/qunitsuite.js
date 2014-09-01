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

test('ReserveInitTest_default', function() {
	var reservation1 = new app.Reservation();
	var expected = {car: null, customer: null, reservationId: '' };
	console.log(reservation1.toJSON());
	deepEqual(reservation1.toJSON(), expected, 'Reservation default');
})

test('ReserveInitTest_newReservation', function() {
	var customer1 = new app.Customer({
		firstName: 'koji',
		secondName: 'itani',
		customerId: '1'
	});
	var car1 = new app.Car({
		carKind: 'Honda1',
		maxCapacity: 5,
		rentalFee: 7000,
		carId: '100'
	});
	var reservation1 = new app.Reservation({
		customer: customer1,
		car: car1
		});
	console.log(reservation1.toJSON());
	notEqual(reservation1.get('car'), null, 'car reserved');
	notEqual(reservation1.get('customer'), null, 'customer reserved');
})
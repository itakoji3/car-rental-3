var app = app || {};

$(function () {
	var cars = [
		{carKind: "A", maxCapacity: 4, rentalFee: 6000}
	];

	new app.CarsView(cars);
});

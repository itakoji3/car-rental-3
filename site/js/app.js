var app = app || {};

$(function () {
	var cars = [
		{carKind: "A", maxCapacity: 4, rentalFee: 6000},
		{carKind: "B", maxCapacity: 5, rentalFee: 7000}
	];

	new app.CarsView(cars);
});

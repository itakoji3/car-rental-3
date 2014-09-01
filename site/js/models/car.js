/*global Backbone */
var app = app || {};

	app.Car = Backbone.Model.extend({
		defaults: {
			carId: '',
			carKind: '',
			maxCapacity: 0,
			rentalFee: 0
		},
	});

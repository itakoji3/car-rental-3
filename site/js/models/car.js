/*global Backbone */
var app = app || {};

(function () {
	app.Car = Backbone.Model.extend({
		defaults: {
			carKind: '',
			maxCapacity: 0,
			rentalFee: 0
		},
	});
})();

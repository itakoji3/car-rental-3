/*global Backbone */
var app = app || {};

(function () {
	app.Car = Backbone.Model.extend({
		defaults: {
			carKind: '',
			rentalFee: 0
		},
	});
})();

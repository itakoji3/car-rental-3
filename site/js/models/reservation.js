/*global Backbone */
var app = app || {};

	app.Reservation = Backbone.Model.extend({
		defaults: {
			reservationId: '',
			car: null,
			customer: null
		},

		initialize: function(customer, car){
			this.customer = customer;
			this.car = car;
		}
	});

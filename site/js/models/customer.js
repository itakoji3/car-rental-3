/*global Backbone */
var app = app || {};

app.Customer = Backbone.Model.extend({
		defaults: {
			customerId: '',
			firstName: '',
			secondName: ''
		},
	});

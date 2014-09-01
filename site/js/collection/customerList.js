var app = app || {};

app.CustomerList = Backbone.Collection.extend({
	model: app.Customer,
	localStorage: new Backbone.LocalStorage('customer_list_storage')
});

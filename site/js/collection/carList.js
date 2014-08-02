var app = app || {};

app.CarList = Backbone.Collection.extend({
	model: app.Car,
	localStorage: new Backbone.LocalStorage('car_list_strage')
});

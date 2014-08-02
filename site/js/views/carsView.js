var app = app || {};

app.CarsView = Backbone.View.extend({
    el: '#cars',

    initialize: function(initialCars) {
    	this.collection = new app.CarList(initialCars);
    	this.render();
    	this.listenTo(this.collection, 'add', this.renderCar)
    },

    events: {
    	'click #add': 'addCar'
    },

    addCar: function(e) {
    	e.preventDefault();

    	var formData = {};

    	$('#addCar div p').children('input').each(function(i, el) {
    		console.log($(el).val());
    		if ($(el).val() != '') {
    			formData[el.id] = $(el).val();
    		}
    	})

    	this.collection.add(new app.Car(formData));
    },

	render: function() {
		this.collection.each(function(item) {
			this.renderCar(item);
		}, this);
	},

	renderCar: function(item) {
		var carView = new app.CarView({model: item});
		this.$el.append(carView.render().el);
	}

});

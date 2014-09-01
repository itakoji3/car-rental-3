var app = app || {};

app.CarsView = Backbone.View.extend({
    el: '#cars',

    initialize: function() {
    	this.collection = new app.CarList();
    	this.collection.fetch();
    	this.render();
    	this.listenTo(this.collection, 'add', this.renderCar)
    },

    events: {
    	'click #addCar': 'addCar'
    },

    addCar: function(e) {
    	e.preventDefault();

    	var formData = {};

    	$('#addCarMaster div p').children('input').each(function(i, el) {
    		console.log($(el).val());
    		if ($(el).val() != '') {
    			formData[el.id] = $(el).val();
    		}
    	})

    	this.collection.create(new app.Car(formData));
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

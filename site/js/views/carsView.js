	app.CarsView = Backbone.View.extend({
        el: '#cars',

        initialize: function(initialCars) {
        	//this.collection = new app.CarList(initialCars);
        	this.collection = new app.CarList([
        		{carKind: A, maxCapacity: 4, rentalFee: 6000}
        		]);
        	this.render();
        },

		render: function() {
			this.collection.each(function(item) {
				var carView = new CarView({model: item});
				this.$el.append(carVew.render().el);
			})
		}
	});

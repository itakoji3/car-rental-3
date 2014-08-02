var app = app || {};

	app.CarView = Backbone.View.extend({
		tagName: 'div',

		template: _.template($('#carTemplate').html()),

        events: {
        	'click .delete': 'deleteCar'
        },

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		deleteCar: function() {
			this.model.destroy();
			this.remove();
		}

	});

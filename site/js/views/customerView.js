var app = app || {};

	app.CustomerView = Backbone.View.extend({
		tagName: 'div',

		template: _.template($('#customerTemplate').html()),

        events: {
        	'click .deleteCustomer': 'deleteCustomer'
        },

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		deleteCustomer: function() {
			this.model.destroy();
			this.remove();
		}

	});

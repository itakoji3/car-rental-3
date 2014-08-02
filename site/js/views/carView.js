var app = app || {};

	app.CarView = Backbone.View.extend({
		tagName: 'div',

		template: _.template($('#carTemplate').html()),

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

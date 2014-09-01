var app = app || {};

app.CustomersView = Backbone.View.extend({
    el: '#customers',

    initialize: function() {
    	this.collection = new app.CustomerList();
    	this.collection.fetch();
    	this.render();
    	this.listenTo(this.collection, 'add', this.renderCustomer)
    },

    events: {
    	'click #addCustomer': 'addCustomer'
    },

    addCustomer: function(e) {
    	e.preventDefault();

    	var formData = {};

    	$('#addCustomerMaster div p').children('input').each(function(i, el) {
    		console.log($(el).val());
    		if ($(el).val() != '') {
    			formData[el.id] = $(el).val();
    		}
    	})

    	this.collection.create(new app.Customer(formData));
    },

	render: function() {
		this.collection.each(function(item) {
			this.renderCustomer(item);
		}, this);
	},

	renderCustomer: function(item) {
		var customerView = new app.CustomerView({model: item});
		this.$el.append(customerView.render().el);
	}

});

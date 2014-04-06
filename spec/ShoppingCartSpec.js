describe('ShoppingCart', function() {
	var cart;

	beforeEach(function() {
		cart = new ShoppingCart
	});

	it('should allow us to add a book', function() {
		cart.addBook(1);
		expect(cart.getNumberOfItems()).toEqual(1);
	});

	it('should allow us to add N books', function() {
		var n = 10;
		for(var i = 0; i<n; i++)
			cart.addBook(1);

		expect(cart.getNumberOfItems()).toEqual(n);
	});
});

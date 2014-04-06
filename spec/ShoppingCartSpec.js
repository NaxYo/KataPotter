describe('ShoppingCart', function() {
	it('should allow us to add a book', function() {
		var cart = new ShoppingCart;
		cart.addBook(1);
		expect(cart.getNumberOfItems()).toEqual(1);
	});

	it('should allow us to add N books', function() {
		var cart = new ShoppingCart;
		var n    = 10;

		for(var i = 0; i<n; i++)
			cart.addBook(1);

		expect(cart.getNumberOfItems()).toEqual(n);
	});
});

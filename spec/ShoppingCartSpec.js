describe('ShoppingCart', function() {
	var cart;

	beforeEach(function() {
		cart = new ShoppingCart
	});

	it('should allow us to add N books', function() {
		var n = 10;
		for(var i = 0; i<n; i++)
			cart.addBook(1);

		expect(cart.getNumberOfItems()).toEqual(n);
	});

	describe('Checkout', function() {
		it('should be able to calculate the price of a single book', function() {
			cart.addBook(1);
			var price = cart.checkout();
			expect(price).toEqual(8);
		});

		it('should be able to calculate the price of 5 different books', function() {
			cart.addBook(1);
			cart.addBook(2);
			cart.addBook(3);
			cart.addBook(4);
			cart.addBook(5);

			var price = cart.checkout();
			expect(price).toEqual(40);
		});
	});
});

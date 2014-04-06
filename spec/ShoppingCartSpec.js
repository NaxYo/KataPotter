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

		it('should be able to calculate the price of N same books', function() {
			var n = 5;
			for(var i = 1; i<=n; i++)
				cart.addBook(1);

			var price = cart.checkout();
			expect(price).toEqual(n*8);
		});

		it('should be able to apply discount to two different books in serie', function() {
			var numberOfBooks = 2;
			var discount      = .85;
			var expectedPrice = (numberOfBooks*8)*discount;

			cart.addBook(1);
			cart.addBook(2);

			var price = cart.checkout();

			expect(price).toEqual(expectedPrice);
		});
	});
});

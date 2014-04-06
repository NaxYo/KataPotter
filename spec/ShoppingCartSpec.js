describe('ShoppingCart', function() {
	var cart;
	var singleBookPrice = 8;

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
			expect(price).toEqual(singleBookPrice);
		});

		it('should be able to calculate the price of N same books', function() {
			var n = 5;
			for(var i = 1; i<=n; i++)
				cart.addBook(1);

			var price = cart.checkout();
			expect(price).toEqual(n*singleBookPrice);
		});

		it('should be able to apply discount to two different books regardless of their order', function() {
			var numberOfBooks = 2;
			var discount      = .05;
			var expectedPrice = numberOfBooks*singleBookPrice;
			expectedPrice -= expectedPrice*discount;

			cart.addBook(2);
			cart.addBook(1);

			var price = cart.checkout();
			expect(price).toEqual(expectedPrice);

			cart = new ShoppingCart;
			cart.addBook(2);
			cart.addBook(1);

			price = cart.checkout();
			expect(price).toEqual(expectedPrice);
		});

		it('should be able to apply different discounts based on the number of books in the serie', function() {
			var n = 5;
			var price;
			var expectedPrices = [8, 15.2, 21.6, 25.6, 30];

			for(var i = 1; i<=n; i++) {
				cart = new ShoppingCart;

				for(var j = i; j>0; j--)
					cart.addBook(j);

				price = cart.checkout();
				expect(price).toEqual(expectedPrices[i-1]);
			}
		});

		it('should be able to apply more than one discount to two different series', function() {
			var expectedPrice = 15.2 + 21.6;
			cart.addBook(2);
			cart.addBook(1);

			cart.addBook(2);
			cart.addBook(1);
			cart.addBook(3);

			var price = cart.checkout();
			expect(price).toEqual(expectedPrice);
		});

		it('should be able to apply the best discount as possible', function() {
			var expectedPrice = 51.2;
			cart.addBook(2);
			cart.addBook(1);
			cart.addBook(3);

			cart.addBook(2);
			cart.addBook(1);
			cart.addBook(3);
			cart.addBook(4);
			cart.addBook(5);

			var price = cart.checkout();
			expect(price).toEqual(expectedPrice);
		});
	});
});

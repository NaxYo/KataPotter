describe('ShoppingCart', function() {
	it('should allow us to add a book', function() {
		var cart = new ShoppingCart;
		cart.addBook(1);
		expect(cart.getNumberOfItems()).toEqual(1);
	});
});

function ShoppingCart() {
	this.numberOfBooks = 0;

}

ShoppingCart.prototype.addBook = function(bookID) {
	this.numberOfBooks++;
}

ShoppingCart.prototype.getNumberOfItems = function() {
	return this.numberOfBooks;
}
function ShoppingCart() {
	this.books = [];
	this.numberOfBooks = 0;
}

ShoppingCart.prototype.addBook = function(bookID) {
	this.books.push(bookID);
	this.numberOfBooks++;
}

ShoppingCart.prototype.getNumberOfItems = function() {
	return this.numberOfBooks;
}

ShoppingCart.prototype.checkout = function() {
	var price = this.numberOfBooks*8;
	var isSerie = false;
	for(var i=this.books.length-1; i>0; i--)
		if(this.books[i]-1 == this.books[i-1])
			isSerie = true;

	if(isSerie)
		price *= .85;

	return price;
}
function ShoppingCart() {
	this.books = [];
}

ShoppingCart.prototype.addBook = function(bookID) {
	this.books.push(bookID);
}

ShoppingCart.prototype.getNumberOfItems = function() {
	return this.books.length;
}

ShoppingCart.prototype.checkout = function() {
	var price   = this.books.length*8;
	var isSerie = false;
	
	for(var i=this.books.length-1; i>0; i--)
		if(this.books[i]-1 == this.books[i-1])
			isSerie = true;

	if(isSerie)
		price *= .85;

	return price;
}
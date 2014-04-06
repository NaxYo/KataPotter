ShoppingCart = (function() {
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
		if(isSerie(this.books.sort()))
			price *= .95;

		return price;
	}

	function isSerie(booksList) {
		for(var i=booksList.length-1; i>0; i--)
			if(booksList[i]-1 == booksList[i-1])
				return true;

		return false;
	}

	return ShoppingCart;
})();
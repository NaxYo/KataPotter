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
		var discounts = [1, .95, .9, .8, .75];
		var price = 0;
		var books = this.books.slice();

		while(books.length) {
			var serie = [];

			for(var i=0; i<books.length; i++)
				if(serie.indexOf(books[i])<0) {
					serie.push(books[i]);
					books.splice(i, 1);
					i--;
				}

			price += 8*serie.length*discounts[serie.length-1];
		}

		return price;
	}

	return ShoppingCart;
})();
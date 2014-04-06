ShoppingCart = (function() {
	function ShoppingCart() {
		this.books = [];
		this.discounts = [0, .05, .10, .20, .25];
	}

	ShoppingCart.prototype.addBook = function(bookID) {
		this.books.push(bookID);
	}

	ShoppingCart.prototype.getNumberOfItems = function() {
		return this.books.length;
	}

	ShoppingCart.prototype.checkout = function() {
		var price = 0;
		var books = this.books.slice();

		while(books.length) {
			var serie = popSerie.call(this, books);
			price += getSeriePrice.call(this, serie);
		}

		return price;
	}

	function popSerie(books) {
		var serie = [];

		for(var i=0; i<books.length; i++)
			if(serie.indexOf(books[i])<0) {
				serie.push(getAndRemove.call(books, i));
				i--;
			}

		return serie;
	}

	function getAndRemove(i) {
		var value = this[i];
		this.splice(i, 1);
		return value;
	}

	function getSeriePrice(serie, discounts) {
		var seriePrice = 8*serie.length;
		seriePrice -= seriePrice*this.discounts[serie.length-1];
		return seriePrice;
	}

	return ShoppingCart;
})();
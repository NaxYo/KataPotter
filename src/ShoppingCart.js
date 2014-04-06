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
		var books = this.books.slice();
		var series = [];

		while(books.length)
			series.push(popSerie.call(this, books));

		return getSeriesPrice.call(this, series);
	}

	function getSeriesPrice(series) {
		var price = 0;
		for(var i in series)
			price += getSeriePrice.call(this, series[i]);

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
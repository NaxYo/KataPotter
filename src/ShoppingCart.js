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
		return getBestPrice.call(this, [], this.books);
	}

	function getBestPrice(currentSeries, restOfBooks) {
		if(restOfBooks.length == 0)
			return getSeriesPrice.call(this, currentSeries);

		var books = restOfBooks.slice();
		var data  = [{ serie: popSerie(books), restOfBooks: books}];

		while(data[data.length-1].serie.length>1) {
			var obj   = data[data.length-1];
			var serie = obj.serie.slice();
			var books = obj.restOfBooks.slice();
			books.push(serie.pop());
			data.push({ serie: serie, restOfBooks: books });
		}
		
		for(var i in data) {
			var series = currentSeries.slice();
			series.push(data[i].serie);

			data[i].price = getBestPrice.call(this, series, data[i].restOfBooks);
		}

		var bestPrice = Infinity;
		for(var i in data) {
			bestPrice = data[i].price<bestPrice?data[i].price:bestPrice;
		}
		
		return bestPrice;
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
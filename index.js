const stocks = {};

stocks.createPortfolio = function () {
   this.portfolio = new Map();
   return this.portfolio;
}

// add a negative number checker
stocks.add = function (ticker, quantity) {
   if (quantity < 1){
      throw 'Error: Can only buy 1+ of a stock, no less'
   }
   if (this.portfolio.get(ticker) === undefined){
      this.portfolio.set(ticker, quantity);
      return this.portfolio.get(ticker);
   }
   const currShares = this.portfolio.get(ticker);
   this.portfolio.set(ticker, quantity + currShares);
   return this.portfolio.get(ticker);
}

stocks.sell = function (ticker, quantity) {
   if (this.portfolio.get(ticker) === undefined){
      throw 'Error: ${ticker} is not owned';
   }
   if (this.portfolio.get(ticker) < quantity){
      throw ShareSaleException;
   }
   const currShares = this.portfolio.get(ticker);
   this.portfolio.set(ticker, currShares - quantity);
   return this.portfolio.get(ticker);
}

stocks.find = function (ticker) {
   return this.portfolio.get(ticker);
}

stocks.isEmpty = function () {
   if (this.portfolio.size === 0) {
      return true;
   }
   return false;
}

stocks.numTickers = function () {
   return this.portfolio.size;
}

module.exports = stocks;


// const items = {
//    type: "Bread",
//    dry: true,
//    itemPrice(cost) {
//      return cost + 1;
//    }
//  };
//  items.itemPrice(9);
//  //Returns ---> 10
const myStocks = require('./index.js');


test('Testing portfolio init -- success', () => {
   const target = new Map();
   const result = myStocks.createPortfolio();
   expect(target).toEqual(result);
});

test('Testing portfolio init -- failure', () => {
   const target = new Map();
   target.set('$AAPL', 3);
   const result = myStocks.createPortfolio();
   expect(target).not.toBe(result);
});

test('Testing isEmpty -- success', () => {
   myStocks.createPortfolio();
   const result = myStocks.isEmpty();
   expect(result).toBeTruthy();
});

test('Testing isEmpty -- success', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 2);
   const result = myStocks.isEmpty();
   expect(result).toBeFalsy();
});

test('Testing isEmpty -- success', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 2);
   const result = myStocks.isEmpty();
   expect(result).toBeFalsy();
});

test('Testing numTickers -- success', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 2);
   const result = myStocks.numTickers();
   const target = 1;
   expect(result).toBe(target);
});

test('Testing numTickers -- success', () => {
   myStocks.createPortfolio();
   const result = myStocks.numTickers();
   const target = 0;
   expect(result).toBe(target);
});

test('Testing numTickers -- success', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 2);
   myStocks.add("AAL", 3);
   const result = myStocks.numTickers();
   const target = 0;
   expect(result).not.toBe(target);
});

test('Testing numTickers -- success', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 2);
   const result = myStocks.numTickers();
   const target = 1;
   expect(result).toBe(target);
});

test('Testing buying stocks -- success', () => {
   myStocks.createPortfolio();
   const result = myStocks.find("AAPL");
   const target = undefined;
   expect(result).toBe(target);
});

test('Testing buying stocks -- success', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 1);
   myStocks.add("AAPL", 2);
   const result = myStocks.find("AAPL");
   const target = 3;
   expect(result).toBe(target);
});

test('Testing buying stocks -- failure', () => {
   myStocks.createPortfolio();
   expect(() => myStocks.add("AAPL", -1).toThrow(e));;
});

test('Testing buying stocks -- failure', () => {
   myStocks.createPortfolio();
   const result = myStocks.find("AAPL");
   const target = 1;
   expect(result).not.toBe(target);
});

test('Testing buying stocks -- failure', () => {
   myStocks.createPortfolio();
   expect(() => myStocks.add("AAPL", -1).toThrow(e));
});

test('Testing selling stocks -- success', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 2);
   myStocks.sell("AAPL", 2);
   const result = myStocks.find("AAPL");
   const target = 0;
   expect(result).toBe(target);
});

test('Testing selling stocks -- failure', () => {
   myStocks.createPortfolio();
   expect(() => myStocks.sell("AAPL", 3).toThrow(e));;
});

test('Testing selling stocks -- failure', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 2);
   expect(() => myStocks.sell("AAPL", 3).toThrow(e));
});

test('Testing selling stocks -- failure', () => {
   myStocks.createPortfolio();
   expect(() => myStocks.sell("AAPL", 1).toThrow(e));
});

test('Testing finding numShares -- success', () => {
   myStocks.createPortfolio();
   const result = myStocks.find("AAPL");
   const target = undefined;
   expect(result).toBe(target);
});

test('Testing finding numShares -- success', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 2)
   const result = myStocks.find("AAPL");
   const target = 2;
   expect(result).toBe(target);
});

test('Testing finding numShares -- failure', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 2)
   const result = myStocks.find("AAPL");
   const target = 3;
   expect(result).not.toBe(target);
});

test('Testing finding numShares -- failure', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 2)
   const result = myStocks.find("AAPL");
   const target = 3;
   expect(result).not.toBe(target);
});

test('Testing deleting tickers with 0 stocks owned -- failure', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 2);
   myStocks.sell("AAPL", 2);
   const result = myStocks.isEmpty()
   expect(result).toBeTruthy;
});

test('Testing selling too many stocks -- failure', () => {
   myStocks.createPortfolio();
   myStocks.add("AAPL", 2);
   expect(() => myStocks.sell("AAPL", 5).toThrow(e));
});


function get_max_profit(stock_prices){
    max_profit = stock_prices[1] - stock_prices[0];
    min_price = stock_prices[0];
	for(var i = 1; i < stock_prices.length; i++) {
    var profit = stock_prices[i] - min_price;
   	if( profit > max_profit) {
      max_profit = profit;
    }
    if(stock_prices[i] < min_price) {
      min_price = stock_prices[i];
    }
  }
  return max_profit;
}

  var stock_prices_yesterday = [10, 7, 5, 8, 11, 9];

  console.log(get_max_profit(stock_prices_yesterday));
  // O(n) time and O(1) space. We only loop through the array once.
  // Suppose we could access yesterday's stock prices as an array, where:
  //
  // The indices are the time in minutes past trade opening time, which was 9:30am local time.
  // The values are the price in dollars of Apple stock at that time.
  // So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.
  //
  // Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
  //
  // For example:
  //
  //   stock_prices_yesterday = [10, 7, 5, 8, 11, 9]
  //
  // get_max_profit(stock_prices_yesterday)
  // # returns 6 (buying for $5 and selling for $11)
  //
  // No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).

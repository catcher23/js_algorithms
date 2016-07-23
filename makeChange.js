function makeChange(amount, coins){
  var change, bestChange, i, count, coin;
  if (amount === 0) {
    return [];
  }
  for (i = 0; i < coins.length; i++) {
    coin = coins[i];
    if (coin <= amount) {
      change = [].concat(coin, makeChange(amount - coin, coins));
    }
    if (!bestChange || change.length < bestChange.length) {
      bestChange = change;
    }
  }
  return bestChange;
}
console.log(makeChange(32, [25,10,5,1]));
console.log(makeChange(5, [1,3]));
//
//   Write a function that, given:
//
// an amount of money
// an array of coin denominations
// computes an array of denominations that sum to the amount;
//
// makeChange(32, [25,10,5,1]) === [25 5, 1, 1];

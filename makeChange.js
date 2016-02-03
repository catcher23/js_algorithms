  function makeChange(amount, coins){
    var change, bestChange, i, count;
    if (amount === 0) {
      return [];
    }
    for (i = 0; i < coins.length; i++) {
      if (coins[i] <= amount) {
        change = [].concat([coins[i]]).concat(makeChange(amount - coins[i], coins));

      }
      if (!bestChange || change.count < bestChange.count) {
        bestChange = change;
      }
    }
return bestChange;
  }
  console.log(makeChange(32, [25,10,5,1]));
//
//   Write a function that, given:
//
// an amount of money
// an array of coin denominations
// computes an array of denominations that sum to the amount;
//
// makeChange(32, [25,10,5,1]) === [25 5, 1, 1];

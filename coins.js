  function coins(amount, denominations){
    if (amount === 0) {return 0;}
    var result = [];
    var subResult = [];
    var resultsHash = {};
    denominations.forEach(function(denomination){
      var times = Math.floor(amount/denomination);
      for(var i = 0; i < times; i++){
        subResult.push(denomination);
        resultsHash[subResult] = subResult.reduce(add,0);
        Object.keys(resultsHash).forEach(function(key){
          if (resultsHash[key] + denomination  === amount) {
            var arr = [denomination];
            key.split(',').forEach(function(k){
              arr.push((parseInt(k)));
              subResult = arr;
            });
            if (resultsHash[subResult] === undefined){
              result.push(subResult);
              resultsHash[subResult] = amount;
            }
            subResult = [];
          }
        });
        if (subResult.reduce(add,0) === amount) {
          if (resultsHash[subResult] === undefined){
            result.push(subResult);
            resultsHash[subResult] = amount;
          }
          subResult = [];
        }
      }
    });
    return result.length;
  }

  function add(a,b) {
    return a+b;
  }
  console.log(coins(4,[1,2,3]));
//
//   Write a function that, given:
//
// an amount of money
// an array of coin denominations
// computes the number of ways to make amount of money with coins of the available denominations.
//
// Example: for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would output 44—the number of ways to make 44¢ with those denominations:
//
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢
//

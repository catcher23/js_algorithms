// Write a function fib() that a takes an integer nn and returns the nnth fibonacci ↴ number.
// Let's say our fibonacci series is 0-indexed and starts with 0. So:
//
//   fib(0) # => 0
// fib(1) # => 1
// fib(2) # => 1
// fib(3) # => 2
// fib(4) # => 3
// ...
//use memoization

function Fibber () {
  this.memo = {};
}

Fibber.prototype.fib = function (n) {
  var result;
  if (n === 0 || n === 1) {
    return n;
  }

  if (this.memo[n] !== undefined) {
    return this.memo[n];
  }
  result = this.fib(n-1) + this.fib(n-2);
  this.memo[n] = result;
  return result;
};


//o(n) time and space

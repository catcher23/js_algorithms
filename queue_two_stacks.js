function Stack() {
  var items = [];
  var max;
  var max2;
  this.push = function(el) {
    items.push(el);
    if (el === null || el > max) {
      max2 = max;
      max = el;
    }
  };
  this.pop = function(){
      return items.pop();
  };

  this.peek = function(){
      return items[items.length-1];
  };

  this.isEmpty = function(){
      return items.length === 0;
  };

  this.size = function(){
      return items.length;
  };

  this.clear = function(){
      items = [];
    };
}

function Queue(inStack, outStack) {
  this.enqueue = function(el) {
    return inStack.push(el);
  };
  this.dequeue = function() {
    if (outStack.isEmpty) {
      while (inStack.size > 0) {
        outStack.push(inStack.pop);
      }
    }
    return outStack.pop;
  };
}

var inStack = new Stack();
var outStack = new Stack();

// Implement a queue ↴ with 2 stacks ↴ . Your queue should have an enqueue and a dequeue function and it should be "first in first out" (FIFO).
// Optimize for the time cost of mm function calls on your queue. These can be any mix of enqueue and dequeue calls.
//
// Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.

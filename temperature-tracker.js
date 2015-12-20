 function TempTracker() {
  this.max = null;
  this.min = null;
  this.totalNumbers = 0;
  this.totalSum = 0;
  this.mean = null;
  this.mode = null;
  this.occurrences = new Hash(0);
  this.maxOccurences = 0;

  this.insert = function(temperature) {
    this.totalSum += temperature;
    this.totalNumbers += 1;
    this.mean = this.totalSum / this.totalNumbers;
    this.occurences[temperature] += 1;
    if (this.occurences[temperature] > this.maxOccurences){
      this.maxOccurences = this.occurences[temperature];
      this.mode = temperature;
    }
    if(temperature > this.max) {this.max = temperature;}
    if(temperature < this.min) {this.min = temperature;}

  };

  this.getMax = function(){
    return this.max;
  };

  this.getMin = function(){
    return this.min;
  };

  this.getMean = function(){
    return this.mean;
  };

  this.getMode = function(){
    return this.mode;
  };
}

// You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
// Write a class TempTracker with these methods:
//
// insert()—records a new temperature
// get_max()—returns the highest temp we've seen so far
// get_min()—returns the lowest temp we've seen so far
// get_mean()—returns the mean ↴ of all temps we've seen so far
// get_mode()—returns the mode ↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter functions (get_max(), get_min(), get_mean(), and get_mode()) over speeding up the insert() function.
//
// get_mean() should return a float, but the rest of the getter functions can return integers. Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.
//
// If there is more than one mode, return any of the modes.

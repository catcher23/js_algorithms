function merging_ranges(arr){
  var mergedArr = [];
  arr = arr.sort(sortNumber);
  for(var i = 0; i + 1 < arr.length; i++) {
    if (arr[i][1] >= arr[i+1][0]){
      mergedArr.push([arr[i][0], arr[i+1][1]]);
      i += 1;
    } else {
      mergedArr.push(arr[i]);
    }
  }
  return mergedArr;
}

console.log(merging_ranges( [ [0, 1], [3, 5], [4, 8], [10, 12], [9, 10] ]));


function sortNumber(a,b) {
    return a[0] - b[0];
}

// var numArray = [ [0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
// console.log(numArray.sort(sortNumber));



// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as arrays ↴ of integers [start_time, end_time]. These integers represent the number of 30-minute blocks past 9:00am.
//
// For example:
//
//   [2, 3] # meeting from 10:00 – 10:30 am
// [6, 9] # meeting from 12:00 – 1:30 pm
//
// Write a function condense_meeting_times() that takes an array of meeting time ranges and returns an array of condensed ranges.
//
// For example, given:
//
//   [ [0, 1], [3, 5], [4, 8], [10, 12], [9, 10] ]
//
// your function would return:
//
//   [ [0, 1], [3, 8], [9, 12] ]
//
// Do not assume the meetings are in order. The meeting times are coming from multiple teams.
//
//
// Complexity
// O(n\lg{n})O(nlgn) time and O(n)O(n) space.
//
// Even though we only walk through our array of meetings once to merge them, we sort all the meetings first, giving us a runtime of O(n\lg{n})O(nlgn). It's worth noting that if our input were sorted, we could skip the sort and do this in O(n)O(n) time!
//
// We create a new array of merged meeting times. In the worst case, none of the meetings overlap, giving us an array identical to the input array. Thus we have a worst-case space cost of O(n)O(n).

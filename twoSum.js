// // Given an array of integers, return indices of the two numbers such that they
// // add up to a specific target.
// //
// // You may assume that each input would have exactly one solution.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
    var sum = {};
    for (var x = 0; x < nums.length; x++) {
        var complement = target - nums[x];
        console.log(complement);
        if (sum[complement] !== undefined) return [sum[complement], x];
        sum[nums[x]] = x;
    }
    return -1;
};

console.log(twoSum([-3,4,3,90],0));

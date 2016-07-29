// // // You are a professional robber planning to rob houses along a street. Each
// // house has a certain amount of money stashed, the only constraint stopping you
// // from robbing each of them is that adjacent houses have security system connected
// // and it will automatically contact the police if two adjacent houses were broken
// // into on the same night.
// // //
// // // Given a list of non-negative integers representing the amount of money of
// // each house, determine the maximum amount of money you can rob tonight without
// // alerting the police.
//
var rob = function(nums) {
    var prevMax = 0, max = 0, i, temp;
    for (i = 0; i < nums.length; i++) {
        temp = max;
        max = prevMax + nums[i] > max ? prevMax + nums[i] : max;
        prevMax = temp;
    }
    return max;
};

console.log(rob([1]));

// Time complexity : O(n)O(n). Assume that nn is the number of houses, the time
// complexity is O(n)O(n).
// Space complexity : O(1)O(1).

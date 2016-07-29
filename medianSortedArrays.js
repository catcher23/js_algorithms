  // There are two sorted arrays nums1 and nums2 of size m and n respectively.
  //
  // Find the median of the two sorted arrays. The overall run time complexity should
  //  be O(log (m+n)).
  //
  // Example 1:
  // nums1 = [1, 3]
  // nums2 = [2]
  //
  // The median is 2.0
  // Example 2:
  // nums1 = [1, 2]
  // nums2 = [3, 4]
  //
  // The median is (2 + 3)/2 = 2.5

  var findMedianSortedArrays = function(nums1, nums2) {
    var nums = merge(nums1, nums2), middle = nums.length / 2;
    if (!Number.isInteger(middle)) {
        return nums[Math.floor(middle)];
    } else {
        middle1 = Math.floor(middle - 1);
        middle2 = middle1 + 1;
        return (nums[middle1] + nums[middle2]) / 2;
    }
  };

  var merge = function(nums1, nums2) {
    var nums = [];
    while (nums1.length > 0 && nums2.length > 0) {
        var next = nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();
        nums.push(next);
    }
    return nums.concat(nums1, nums2);
  };

  console.log(findMedianSortedArrays([1,3],[2]));
  console.log(findMedianSortedArrays([1,2],[3,4]));

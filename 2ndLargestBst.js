// Write a function to find the 2nd largest element in a binary search tree
function largestBST(root) {
  if (!root.right) {
    return root.value;
  }
  return largestBST(root.right);
}

function secondLargest(root) {
  if (!root_node) {
    return 'empty tree';
  }
  if (root.right.right) {
    return secondLargest(root.right);
  }
  if(!root.right.left) {
    return root.value;
  } else {
    return largestBST(root.right.left);
  }
}

 //       ( 5 )
 //      /     \
 //    (3)     (8)
 //   /  \     /  \
 // (1)  (4) (7)  (12)
 //               /
 //             (10)
 //             /  \
 //           (9)  (11)

// o(n) space and o(n) time where n is height of tree.
// can do 0(1) space if you do it iteratively to get
//rid of call stack

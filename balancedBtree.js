// Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).
// A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.
//
// Heres a sample binary tree node class:

function BinaryTreeNode(value){
  this.value = value;
  this.left = null;
  this.right = null;

  this.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  };

  this.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  };
}

function isBalanced(root) {
  var depths = [];
  var nodes = [];
  nodes.push([root, 0]);

  while (nodes.length > 0){
    nodeObj = nodes.pop;
    node = nodeObj[0];
    depth = nodeObj[1];

    if (node.left === null && node.right === null) {
      if (depths.indexof(depth) === -1) {
        depths.push(depth);
      }
      if (depths.length > 2 ||
        (depths.length == 2 && Math.abs(depths[0] - depths[1]) > 1)) {
          return false;
        }
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  return true;
}

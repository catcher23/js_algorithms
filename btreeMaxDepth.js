// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root
// node down to the farthest leaf node.
//

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var maxDepth = function(root) {
  var depth = 0,
  nodes = [];
  if (!root) {
  return 0;
}
nodes.push([root, 0]);

  while(nodes.length > 0) {
    nodeObj = nodes.pop;
    node = nodeObj[0];
    depth = nodeObj[1];
    if (node.left) {
      nodes.push([node.left, depth + 1]);
    }
    if (node.right) {
      nodes.push([node.right, depth + 1]);
    }
  }
  return depth;
};

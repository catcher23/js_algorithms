var invertTree = function(root) {
    if (root === null) {return null;}
    var newTree = new TreeNode(root.val);
    newTree.left = invertTree(root.right);
    newTree.right = invertTree(root.left);
    return newTree;
};

// invert a binary tree;
// * Definition for a binary tree node.
// * function TreeNode(val) {
// *     this.val = val;
// *     this.left = this.right = null;
// }

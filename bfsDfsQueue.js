// implement bfs and dfs

function Node (el) {
  this.left = this.right = null;
  this.value = el;
  this.children = [this.left, this.right];
}

function Queue () {
  var queue = [];

  this.length = queue.length;

  this.enqueue = function (el) {
    return queue.push(el);
  };

  this.dequeue = function () {
    return queue.unshift();
  };
}

function dfs (root, val) {
  if (root === null) { return false; }
  var node = root;
  if (node.value === val) {
    return true;
  } else {
    if (node.left === null && node.right === null) { return false; }
    for (var child in node.children) {
      if (child !== null) {
        return dfs(child);
      }
    }
  }
}

function bfs(root, val) {
  if (root === null) { return false; }
  var queue = new Queue();
  queue.enqueue(root);

  while (queue.length !== 0) {
    var node = queue.dequeue;
    if (node.value === val) { return true; }

    for (var child in node.children) {
      queue.enqueue(child);
    }
  }
  return false;
}

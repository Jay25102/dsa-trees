/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) return 0;

    let queue = [this.root];
    let currNode = null;
    let total = 0;

    while (queue.length) {
      currNode = queue.shift();
      total += currNode.val;
      if (currNode.children) {
          for (let child of currNode.children) {
            queue.push(child);
        }
      }
    }

    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root === null) return 0;

    let queue = [this.root];
    let currNode = null;
    let numEvens = 0;

    while (queue.length) {
      currNode = queue.shift();
      if (currNode.val % 2 === 0) numEvens += 1;
      if (currNode.children) {
          for (let child of currNode.children) {
            queue.push(child);
        }
      }
    }

    return numEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) return 0;

    let queue = [this.root];
    let currNode = null;
    let numNodesGreaterThan = 0;

    while (queue.length) {
      currNode = queue.shift();
      if (currNode.val > lowerBound) numNodesGreaterThan += 1;
      if (currNode.children) {
          for (let child of currNode.children) {
            queue.push(child);
        }
      }
    }

    return numNodesGreaterThan;
  }
}

module.exports = { Tree, TreeNode };

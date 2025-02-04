const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addNode(this.treeRoot, data);
    function addNode(treeNode, data) {
      if (!treeNode) {
        return new Node(data);
      }

      if (treeNode.data === data) {
        return treeNode;
      }

      if (treeNode.data > data) {
        treeNode.left = addNode(treeNode.left, data);
      } else {
        treeNode.right = addNode(treeNode.right, data);
      }

      return treeNode;
    }
  }

  has(data) {
    return hasNode(this.treeRoot, data);

    function hasNode(treeNode, data) {
      if (!treeNode) {
        return false;
      }

      if (treeNode.data === data) {
        return true;
      }

      if (treeNode.data > data) {
        return hasNode(treeNode.left, data);
      } else {
        return hasNode(treeNode.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.treeRoot, data);

    function findNode(treeNode, data) {
      if (treeNode.data === data) {
        return treeNode;
      }
      console.log(treeNode.left);

      if (data > treeNode.data && !treeNode.right) {
        return null;
      }

      if (data < treeNode.data && !treeNode.left) {
        return null;
      }

      if (treeNode.data > data) {
        return findNode(treeNode.left, data);
      } else {
        return findNode(treeNode.right, data);
      }
    }
  }

  remove(data) {
    this.root = removeNode(this.treeRoot, data);

    function removeNode(treeNode, data) {
      if (!treeNode) {
        return null;
      }

      if (treeNode.data > data) {
        treeNode.left = removeNode(treeNode.left, data);
        return treeNode;
      } else if (treeNode.data < data) {
        treeNode.right = removeNode(treeNode.right, data);
        return treeNode;
      } else {
        if (!treeNode.left && !treeNode.right) {
          return null;
        }
        if (!treeNode.right) {
          treeNode = treeNode.left;
          return treeNode;
        }
        if (!treeNode.left) {
          treeNode = treeNode.right;
          return treeNode;
        }

        let maxLeft = treeNode.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        treeNode.data = maxLeft.data;

        treeNode.left = removeNode(treeNode.left, maxLeft.data);
        return treeNode;
      }
    }
  }

  min() {
    return searchMin(this.treeRoot);
    function searchMin(treeNode) {
      if (!treeNode) {
        return null;
      }

      if (!treeNode.left) {
        return treeNode.data;
      } else {
        return searchMin(treeNode.left);
      }
    }
  }

  max() {
    return searchMax(this.treeRoot);

    function searchMax(treeNode) {
      if (!treeNode) {
        return null;
      }

      if (!treeNode.right) {
        return treeNode.data;
      } else {
        return searchMax(treeNode.right);
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};

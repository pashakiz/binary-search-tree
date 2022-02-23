import Node from './Node';

export default class BinarySearchTree {
  constructor() {
      this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return false;
    }

    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
        return true;
      }
      this.insertNode(node.left, newNode);
    }

    if (newNode.data >= node.data) {
      if (node.right === null) {
        node.right = newNode;
        return true;
      }
      this.insertNode(node.right, newNode);
    }
  }

  inOrderTraverse(node, callback) {
    if (node != null) {
      this.inOrderTraverse(node.left, callback);
      callback(node.data);
      this.inOrderTraverse(node.right, callback);
    }
  }

  preOrderTraverse(node, callback) {
    if (node != null) {
      callback(node.data);
      this.preOrderTraverse(node.left, callback);
      this.preOrderTraverse(node.right, callback);
    }
  }

  postOrderTraverse(node, callback) {
    if (node != null) {
      this.postOrderTraverse(node.left, callback);
      this.postOrderTraverse(node.right, callback);
      callback(node.data);
    }
  }

  search(node, data) {
    if (node === null)
      return null;

    if (data < node.data)
      return this.search(node.left, data);

    if (data > node.data)
      return this.search(node.right, data);

    console.log(node);
    return node;
  }

  findMinNode(node) {
    // TODO: Need to balancing tree?
    if (node.left === null) return node;
    return this.findMinNode(node.left);
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {

    // TODO: Need to balancing tree?

  }

}

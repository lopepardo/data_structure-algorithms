const Node = require("../Node.js");

class BinarySearchTree{
	constructor(){
		this.root = null;
	}

	search(value, node = this.root){
		if (!node) return null;

		if (value < node.value) {
			return this.search(value, node.left);
		} else if (value > node.value) {
			return this.search(value, node.right);
		} else {
			return node;
		}
	}

	_insertNode(node, newNode){
		if (newNode.value < node.value) {
			if (!node.left) {
				node.left = newNode;
			} else {
				this._insertNode(node.left, newNode);
			}
		} else if (newNode.value > node.value) {
			if (!node.right) {
				node.right = newNode;
			} else {
				this._insertNode(node.right, newNode)
			}
		}
	}

	insert(value){
		const existValue = !!this.search(value);
		if (existValue) throw new Error(`Value ${value} exist!`);

		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
		} else {
			this._insertNode(this.root, newNode)
		}
	}

	_findMinValue(node) {
		while (node.left) {
			node = node.left;
		}
		return node.value;
	}

	_removeNode(node, value) {
		if (value < node.value) {
			node.left = this._removeNode(node.left, value);
		} else if (value > node.value) {
			node.right = this._removeNode(node.right, value);
		} else {
			if (!node.left && !node.right) {
				node = null;
			} else if (!node.right) {
				node = node.left;
			} else if (!node.left) {
				node = node.right;
			} else {
				const minValue = this._findMinValue(node.right);
				node.value = minValue;
				node.right = this._removeNode(node.right, minValue);
			}
		}
		return node;
	}

	remove(value){
		let existValue = this.search(value);
		if (!existValue) throw new Error(`Value ${value} not exist!`);

		this.root = this._removeNode(this.root, value);
	}
}

module.exports = BinarySearchTree;

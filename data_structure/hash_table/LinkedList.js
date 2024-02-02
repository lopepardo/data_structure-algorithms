const Node = require("./Node")

const _isRequired = (parameterName) => {
	throw new Error(`${parameterName} is required`);
}

class LinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	append(value = _isRequired("Value")) {
		const newNode = new Node(value);

		if(!this.head){
			this.head = newNode;
		} else {
		    newNode.prev = this.tail;
			this.tail.next = newNode;
		}

		this.tail = newNode;
		this.size++;
		return this;
	}

	_resetList(){
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	pop(){
		if(!this.head && !this.tail) return this;

		if(this.head === this.tail){
			this._resetList();
		} else {
			const prevNode = this.tail.prev;
			prevNode.next = null;
			this.tail = prevNode;
			this.size--;
		}
		return this;
	}

	shift(){
		if(!this.head && !this.tail) return this;

		if(this.head === this.tail){
			this._resetList();
		} else {
			const nextNode = this.head.next;
			nextNode.prev = null;
			this.head = nextNode;
			this.size--;
		}
		return this;
	}

	remove(value){
		let selectorNode = this.head;
		while(!!selectorNode.next || selectorNode.value !== value){
			selectorNode = selectorNode.next;
		}

		if(selectorNode === this.head) return this.shift();
		if(selectorNode === this.tail) return this.pop();

		selectorNode.prev.next = selectorNode.next;
		selectorNode.next.prev = selectorNode.prev;
		selectorNode.prev = null;
		selectorNode.next = null;

		this.size--;
		return this;
	}

	find(value){
		let selectorNode = this.head;
		let count = 0;
		while(!!selectorNode){
			if(selectorNode.value === value) return count;
			selectorNode = selectorNode.next;
			count++;
		}
		return null;
	}
}

module.exports = LinkedList;

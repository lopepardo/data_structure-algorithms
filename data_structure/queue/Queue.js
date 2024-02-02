const Node = require("./Node.js")

class Queue {
	constructor(){
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	enqueue(value){
		const newNode = new Node(value)
		if(!this.head && !this.tail){
			this.head = newNode;
			this.head.next = this.tail;
		}else{
			this.tail.next = newNode;
		}

		this.tail = newNode;
		this.size++;
		return this;
	}

	process(){
		if(this.head){
			console.log(`Node ${this.head.value} processed!`);
			this.head = this.head.next;
			if(this.size === 1) this.tail = null;
			this.size--;
		} else {
			console.log("Empty queue!");
		}

		return this;
	}
}

module.exports = Queue;

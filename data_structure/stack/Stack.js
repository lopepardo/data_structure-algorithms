class Stack {
	constructor(length) {
		this.size = 0;
		this.stack = Array(length);
	}

	push(value){
		if(this.size >= this.stack.length) throw new Error("Stack Overflow");

		this.stack[this.size] = value;
		this.size++;
		return this;
	}

	pop(){
		if(this.isEmpty()) return this;

		this.stack[this.size - 1] = undefined;
		this.size--;
		return this;
	}

	top(){
		return this.stack[this.size - 1];
	}

	isEmpty(){
		return !this.size;
	}
}

module.exports = Stack;

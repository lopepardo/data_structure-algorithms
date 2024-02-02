class Node {
	constructor(value){
		this._value = value;
		this._left = null;
		this._right = null;
	}

	get value() {
		return this._value;
	}

	set value(value) {
		this._value = value;
	}

    get left() {
        return this._left;
    }

    set left(node) {
        this._left = node;
    }

    get right() {
        return this._right;
    }

    set right(node) {
        this._right = node;
    }
}

module.exports = Node;

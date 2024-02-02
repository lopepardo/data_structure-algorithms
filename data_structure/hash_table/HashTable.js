const LinkedList = require("./LinkedList")

class HashTable {
	constructor(length){
		this.hashTable = Array(length).fill(null).map(() => new LinkedList())
		this.mapKeys = {}
	}

	_hashFunction(value){
		let hash = 0;
		for(let i = 0; i < value.length; i++){
			hash += value.charCodeAt(i);
		}
		return hash % this.hashTable.length;
	}

	insert(value){
		const keyHash = this._hashFunction(value);
		this.hashTable[keyHash].append(value);
		return this;
	}

	remove(value){
		const findValue = this.search(value);
		if(!findValue) return null;

		this.hashTable[findValue[0]].remove(value);
		return this;
	}

	search(value){
		const keyHash = this._hashFunction(value);
		const posKey = this.hashTable[keyHash].find(value);
		if(posKey ===  null) return null;
		return [keyHash, posKey]
	}
}

module.exports = HashTable;

class Vertex {
    constructor(value){
        this._value = value;
        this._neighbors = [];
    }

    get value(){
        return this._value;
    }

    get neighbors(){
        return this._neighbors;
    }

	// neighbor is of the form: {value, weight}
    add(value, weight = 1){
        this._neighbors = this._neighbors.concat({value, weight});
    }

    delete(value){
        this._neighbors = this._neighbors.filter((_neighbor) => _neighbor.value !== value);
    }

	getNeighborsValue(){
		return this.neighbors.map((neighbor) => neighbor.value)
	}

	getWeightNeighbor(target){
		const select = this.neighbors.find((neighbor) => neighbor.value === target);
		return select.weight;
	}
}

module.exports = Vertex;

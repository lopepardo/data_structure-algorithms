class Node {

        constructor(value, prev = null, next = null) {
                this.value = value;
                this.next = next;
        }

        toString(callback) {
                return callback ? callback(this.value) : `${this.value}`;
        }
}

module.exports = Node;

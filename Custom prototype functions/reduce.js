let arr = [1, 2, 3, 4];

function sum(acc, curr, index, arr) {
	return acc + curr;
}
Array.prototype.customReduce = function (cb, initalValue) {
	if (!this.length) return initalValue || [];
	if (this.length === 1) return cb(initalValue, this[0]);
	else {
		let result = initalValue || this[0];
		for (let index = initalValue ? 0 : 1; index < this.length; index++) {
			if (this[index]) {
				result = cb(result, this[index], index, this);
			}
		}
		return result;
	}
};

console.log("sum is :>> ", arr.reduce(sum, 1));
console.log("sum is :>> ", arr.customReduce(sum, 1));
console.log("sum is :>> ", [1, 2, , 4].reduce(sum, 1));
console.log("sum is :>> ", [1, 2, , 4].customReduce(sum, 1));

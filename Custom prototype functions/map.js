let arr = [1, 2, , 4]; // 10

// callback function
function add10(item, index, arr) {
	return item + 10;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.customMap = function (cb) {
	if (typeof cb !== "function") throw new Error("callback is not a function");

	let result = new Array(this.length); // 'this' will take reference to the 'array' on which customMap will be used
	for (let index = 0; index < this.length; index++) {
		if (this[index]) {
			// here we have to pass all 3 paramas which actual map have
			result[index] = cb(this[index], index, this);
			// actual map for reference :-> arr.map((value, index, array) => {});
		}
	}
	return result;
};

// result of both below logs must be same
console.log(arr.customMap(add10));
console.log(arr.customMap((item) => item + 10));
console.log(arr.map(add10));

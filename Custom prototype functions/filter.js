let arr = [1, 2, , 4, 10, 23, 21, 12, 5];

// callback function
function getLessThan15(item, index, arr) {
	return item < 15;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.customFilter = function (cb) {
	if (typeof cb !== "function") throw new Error("callback is not a function");

	let result = [];
	for (let index = 0; index < this.length; index++) {
		// 'this' will take reference to the 'array' on which customFilter will be used
		if (cb(this[index], index, this)) {
			// here we have to pass all 3 params which actual filter have

			result.push(this[index]);
			// actual filter for reference :-> arr.filter((value, index, array) => {});
		}
	}
	return result;
};

// result of both below logs must be same
console.log(arr.customFilter(getLessThan15));
console.log(arr.customFilter((item) => item < 15));
console.log(arr.filter((value, index, array) => value < 15));

// Sum all the terms of a given matrix
module.exports = function (array) {
	let s = 0;
	for (const element of array) {
		for (const element_ of element) {
			s += element_;
		}
	}

	return s;
};

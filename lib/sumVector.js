// Sum all the terms of a given matrix
module.exports = function (vector) {
	let s = 0;
	for (const element of vector) {
		s += element;
	}

	return s;
};

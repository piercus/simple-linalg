const sumVector = require("./sumVector");

// Sum all the terms of a given matrix
module.exports = function (array) {
	let s = 0;
	for (const element of array) {	
		s += sumVector(element);
	}

	return s;
};

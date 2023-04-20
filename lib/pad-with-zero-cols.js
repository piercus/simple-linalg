/**
*This function returns the padded matrix with zeros with respect to a given
* target columns number
*@param {Array.<Array.<Number>>} matrix the matrix we need to pad
*@param {Number} columns in our case, the dynamic dimension
*@returns {Array.<Array.<Number>>} padded matrix
*/
module.exports = function (matrix, {columns}) {
	const l1 = matrix.length;
	const l = matrix[0].length;
	const result = matrix.map(a => a.concat());

	if (columns < l) {
		throw (new TypeError(`Output columns ${columns} is greater than input columns ${l}`));
	}

	for (let i = 0; i < l1; i++) {
		for (let j = 0; j < columns - l; j++) {
			result[i].push(0);
		}
	}

	return result;
};

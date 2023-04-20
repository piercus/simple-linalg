module.exports = function (array1, array2) {
	if (array1.length !== array2.length) {
		throw new Error('Invalid array lengths');
	}

	const diff = array1.map((element, index) => element - array2[index]).map(element => element * element);
	return Math.sqrt(diff.reduce((a, b) => a + b));
};

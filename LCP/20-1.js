/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
	let x = 1
	let y = 0
	for (const item of s) {
		if (item === 'A') {
			x = 2 * x + y
		} else {
			y = 2 * y + x
		}
	}
	return x + y
}
console.log(calculate('AB'))

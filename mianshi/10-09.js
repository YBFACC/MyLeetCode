/**
 * 自己--重做--斜着走--二分
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	if (matrix.length === 0) return false
	const rowLimt = matrix.length
	const colLimit = matrix[0].length

	let col = 0
	for (let i = rowLimt - 1; i >= 0; i--) {
		if (matrix[i][col] > target) {
			continue
		}
		while (col < colLimit) {
			if (matrix[i][col] === target) {
				return true
			}
			if (matrix[i][col + 1] > target) {
				break
			}
			col++
		}
	}

	return false
}

console.log(
	searchMatrix(
		[
			[1, 4, 7, 11, 15],
			[2, 5, 8, 12, 19],
			[3, 6, 9, 16, 22],
			[10, 13, 14, 17, 24],
			[18, 21, 23, 26, 30]
		],
		5
	)
)

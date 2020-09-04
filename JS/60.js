/**
 * 重做--回溯做-大概率超时
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
	var res = []
	const visited = new Set()
	var func = function (temp) {
		if (temp.length == n) {
			res.push(temp.join(''))
			return
		}
		for (let i = 1; i <= n; i++) {
			if (!visited.has(i)) {
				temp.push(i)
				visited.add(i)
				func(temp)
				temp.pop()
				visited.delete(i)
			}
		}
	}
	func([])
	return res[k - 1]
}

console.log(getPermutation(8, 15198))

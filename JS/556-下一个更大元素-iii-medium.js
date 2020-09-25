/*
 * @lc app=leetcode.cn id=556 lang=typescript
 *
 * [556] 下一个更大元素 III
 */

// @lc code=start
//参考--下一个大的排序
function nextGreaterElement(n) {
	const list = (n + '').split('')
	let i = list.length - 2
	while (i >= 0 && list[i + 1] <= list[i]) {
		i--
	}
	if (i < 0) return -1
	let j = list.length - 1
	while (j >= 0 && list[j] <= list[i]) {
		j--
	}

	;[list[i], list[j]] = [list[j], list[i]]

	let num = parseInt(
		[...list.slice(0, i + 1), ...list.slice(i + 1).reverse()].join(''),
		10
	)
	const max = Math.pow(2, 31) - 1
	if (num > max) return -1
	return num === n ? -1 : num
}

// @lc code=end

//21
console.log(nextGreaterElement(12))

//158513467
console.log(nextGreaterElement(158476531))

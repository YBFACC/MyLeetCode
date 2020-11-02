//参考--m+n从后往前进行归并
function merge(A, m, B, n) {
	if (m === 0 && n === 0) return
	if (m === 0) {
		A.push(...B)
		return
	}
	if (n === 0) return
	let index = m + n-1
	let a_index = m - 1
	let b_index = n - 1
	while (a_index >= 0 && b_index >= 0) {
		if (A[a_index] >= B[b_index]) {
			A[index] = A[a_index]
			a_index--
		} else {
			A[index] = B[b_index]
			b_index--
		}
		index--
	}
	while (a_index >= 0) {
		A[index] = A[a_index]
		a_index--
		index--
	}
	while (b_index >= 0) {
		A[index] = B[b_index]
		b_index--
		index--
	}
	return
}
module.exports = {
	merge: merge
}
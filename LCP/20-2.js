var breakfastNumber = function (staple, drinks, x) {
	let res = 0
	staple.sort((a, b) => a - b)
	drinks.sort((a, b) => a - b)

	const min = drinks[0]
	const max = drinks[drinks.length - 1]

	for (let i = 0; i < staple.length; i++) {
		const item = staple[i]
		if (item >= x) break
		const target = x - item
		let d_l = 0
		let d_r = drinks.length - 1
		if (target < min) continue
		if (target >= max) {
			res += drinks.length
			continue
		}
		while (d_l <= d_r) {
			const mid = d_l + ((d_r - d_l) >> 1)
			if (drinks[mid] > target) {
				d_r = mid - 1
			} else {
				d_l = mid + 1
			}
		}
		res += d_r + 1
		res %= 1000000007
	}

	return res % 1000000007
}
console.log(breakfastNumber([2, 1, 1], [8, 9, 5, 1], 9))

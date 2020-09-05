//自己--根据k算出每个位置的字母
var getPermutation = function (n, k) {
	let list = []
	for (let i = 1; i <= n; i++) {
		list.push(i)
	}
  let res = ''
  
	k--    //索引从0开始
	while (list.length > 1) {
		if (k === 0) {
			res += list.join('')
			return res
		}
		let item = Math.floor(getAll(list.length) / list.length)//这个位置上字母出现的个数

		let index = Math.floor(k / item)//确定他是list的哪个位置
		k -= index * item//更新k
		res += list.splice(index, 1)[0]//从list取出字母
	}
	res += list[0]
	return res
}

function getAll(n) {
	let all = 1
	for (let i = n; i > 1; i--) {
		all *= i
	}
	return all
}

console.log(getPermutation(8, 15198))
//21
console.log(getPermutation(2, 2))
//"213"
console.log(getPermutation(3, 3))

//"312"
console.log(getPermutation(3, 5))
//"2314"
console.log(getPermutation(4, 9))

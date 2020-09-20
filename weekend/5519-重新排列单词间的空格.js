//周赛--easy
function reorderSpaces(text) {
	let list = text.match(/\w+/g)
	let count = 0
	for (let i = 0; i < text.length; i++) {
		if (text[i] === ' ') {
			count++
		}
	}
	if (list.length === 1) {
		while (count-- > 0) {
			list[0] += ' '
		}
		return list[0]
	}
	let dic = Math.floor(count / (list.length - 1))
	let temp = ''
	for (let i = 1; i <= dic; i++) {
		temp += ' '
	}
	let res = list.join(temp)
	let all = count - dic * (list.length - 1)
	while (all-- > 0) {
		res += ' '
	}
	return res
}
console.log(reorderSpaces('  hello'))
console.log(reorderSpaces('hello   world'))
console.log(reorderSpaces('a'))
console.log(reorderSpaces(' practice   makes   perfect'))

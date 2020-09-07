/**
 * 自己--重做--kmp
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	var len = needle.length
	if (len === 0) return 0

	return kmp(haystack, needle)
}

function kmp(text, pattern) {
	const next = [-1]
	const pLen = pattern.length
	const tLen = text.length
	for (let i = 0, n = -1; i < pLen; ) {
		if (n < 0 || pattern[i] === pattern[n]) {
			next[++i] = ++n
		} else {
			n = next[n]
		}
	}
	for (let ti = 0, pi = 0; pLen - pi <= tLen - ti; ) {
		if (pi < 0 || text[ti] === pattern[pi]) {
			ti++
			pi++
		} else {
			pi = next[pi]
		}
		if (pi === pLen) {
			return ti - pLen
		}
	}
	return -1
}

console.log(strStr('mississippi', 'issip'))

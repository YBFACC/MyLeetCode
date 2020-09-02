/*
 * @lc app=leetcode.cn id=341 lang=javascript
 *
 * [341] 扁平化嵌套列表迭代器
 */

// @lc code=start
//参考--lc提交时，特殊api
//isInteger判断数字
//getInteger得到数子
//getList得到数组
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
	const generator = function* (list) {
		for (const item of list) {
			if (item.isInteger()) {
				yield item.getInteger()
			} else {
				yield* generator(item.getList())
			}
		}
	}
	this.iterator = generator(nestedList)
	this.nextValue = this.iterator.next()
}

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
	return !this.nextValue.done
}

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
	const value = this.nextValue.value
	this.nextValue = this.iterator.next()
	return value
}

// @lc code=end

var i = new NestedIterator([1, [4, [6]]]),
	a = []
while (i.hasNext()) {
	a.push(i.next())
}

console.log()

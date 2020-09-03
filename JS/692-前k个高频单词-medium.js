/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * 自己--最大堆改-次级条件--字典序
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
	const map = new Map()
	for (const item of words) {
		map.set(item, map.has(item) ? map.get(item) + 1 : 1)
	}
	const heap = new MaxHeap()
	map.forEach((v, k) => {
		heap.insert([v, k])
	})
	const res = []
	while (k-- > 0) {
		res.push(heap.extract()[1])
	}
	return res
}

class MaxHeap {
	constructor() {
		this.container = []
	}

	insert(data) {
		const { container } = this

		container.push(data)
		let index = container.length - 1

		while (index) {
			let parent = Math.floor((index - 1) / 2)
			if (container[index][0] < container[parent][0]) {
				break
			} else if (
				container[index][0] === container[parent][0] &&
				container[index][1] > container[parent][1]
			) {
				break
			}
			swap(container, index, parent)
			index = parent
		}
	}

	extract() {
		const { container } = this
		if (!container.length) {
			return null
		}

		swap(container, 0, container.length - 1)
		const res = container.pop()
		const length = container.length
		let index = 0,
			exchange = index * 2 + 1

		while (exchange < length) {
			let right = index * 2 + 2

			if (right < length) {
				if (container[right][0] > container[exchange][0]) {
					exchange = right
				} else if (
					container[right][0] === container[exchange][0] &&
					container[right][1] < container[exchange][1]
				) {
					exchange = right
				}
			}

			if (container[exchange][0] < container[index][0]) {
				break
			} else if (
				container[exchange][0] === container[index][0] &&
				container[exchange][1] > container[index][1]
			) {
				break
			}
			swap(container, exchange, index)
			index = exchange
			exchange = index * 2 + 1
		}

		return res
	}
}
function swap(arr, i, j) {
	;[arr[i], arr[j]] = [arr[j], arr[i]]
}
// @lc code=end

topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3)

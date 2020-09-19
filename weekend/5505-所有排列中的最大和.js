//自己--贪心+堆--题解
function maxSumRangeQuery(nums, requests) {
	const Len = nums.length
	const count = Array.from({ length: Len }, () => 0)
	for (const [from, to] of requests) {
		for (let i = from; i <= to; i++) {
			count[i]++
		}
	}

	const heap = new MaxHeap(nums)
	const count_heap = new MaxHeap(count)

	let res = 0
	for (let i = 0; i < Len; i++) {
		const max = heap.extract()
		const temp = count_heap.extract()
		res += max * temp
	}

	return res % (1000000000 + 7)
}
class MaxHeap {
	constructor(arr = []) {
		this.container = []
		if (Array.isArray(arr)) {
			arr.forEach(this.insert.bind(this))
		}
	}

	insert(data) {
		const { container } = this
		container.push(data)
		let index = container.length - 1
		while (index) {
			let parent = Math.floor((index - 1) / 2)
			if (container[index] <= container[parent]) {
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
			if (right < length && container[right] > container[exchange]) {
				exchange = right
			}
			if (container[exchange] <= container[index]) {
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

console.log(
	maxSumRangeQuery(
		[1, 2, 3, 4, 5],
		[
			[1, 3],
			[0, 1]
		]
	)
)

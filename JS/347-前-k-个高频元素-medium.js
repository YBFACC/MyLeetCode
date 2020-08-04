/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * 参考--map统计出现个数--关键是对map对key的排序
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map()
  for (const num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  }
  const heap = new Heap()
  map.forEach((v, k) => {
    heap.insert(k, map)
  })
  const res = []
  for (let i = 0; i < k; i++) {
    res.push(heap.extract(map))
  }
  return res
}
class Heap {
  constructor(arr = []) {
    this.container = []
    if (Array.isArray(arr)) {
      arr.forEach(this.insert.bind(this))
    }
  }

  insert(data, map) {
    const { container } = this

    container.push(data)
    let index = container.length - 1
    while (index) {
      let parent = Math.floor((index - 1) / 2)
      if (Compare(map.get(container[index]), map.get(container[parent]))) {
        break
      }
      swap(container, index, parent)
      index = parent
    }
  }

  extract(map) {
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
      if (
        right < length &&
        Compare(map.get(container[exchange]), map.get(container[right]))
      ) {
        exchange = right
      }
      if (Compare(map.get(container[exchange]), map.get(container[index]))) {
        break
      }
      swap(container, exchange, index)
      index = exchange
      exchange = index * 2 + 1
    }

    return res
  }
}

function Compare(val1, val2) {
  return val1 <= val2
}
function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
// @lc code=end
topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)

/**
 * 自己--简单法
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  arr.sort((a, b) => a - b)
  return arr.slice(0, k)
}

/**
 * 快排
 *
 * 每次从[start, end]范围内的数组中随机选择一个标杆元素(代码里取得是第一个元素),
 * 然后把数组中所有小于标杆的放在数组左边，所有大于标杆的元素放在数组右边，
 * 然后判断标杆元素的位置是否等于目标位置。如果目标位置小于当前位置，则继续在左边查找，
 * 如果目标位置大于当前位置，则继续在右边查找。这样每次迭代都会缩小查找的范围。
 * 最理想的情况下时间复杂度是 O(logN)
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  let len = arr.length
  if (!len || !k) return []
  let start = 0
  let end = len - 1
  // 寻找一次标杆元素的位置
  let index = quikSort(arr, start, end)
  // 如果标杆元素的位置不等于 K
  while (index !== k - 1) {
    if (index > k - 1) {
      // 如果上一次查找，标杆元素位置大于目标位置
      end = index - 1
      index = quikSort(arr, start, end)
    } else {
      // 如果上一次查找，标杆元素位置小于目标位置
      start = index + 1
      index = quikSort(arr, start, end)
    }
  }
  return arr.slice(0, index + 1)
}

function quikSort(arr, left, right) {
  let pivot = arr[left]
  while (left < right) {
    while (left < right && arr[right] >= pivot) right--
    arr[left] = arr[right]
    while (left < right && arr[left] < pivot) left++
    arr[right] = arr[left]
  }
  arr[left] = pivot
  return left
}

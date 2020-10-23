//1,2,3,4,11,12,13
//12,13,1,2,3,4,11
//3,4,11,12,13,1,2
//自己--二分+递归--折线图分析--优先向左逼近
function search(arr: number[], target: number): number {
  const Len = arr.length
  let left = 0, right = Len - 1
  const half = arr[0]
  if (half === target) return 0

  while (left <= right) {
    const mid = ((right - left) >> 1) + left
    if (arr[mid] === target) {
      return mid
    }
    if (left === right) break
    if (left + 1 == right) {
      if (arr[left] === target) return left
      if (arr[right] === target) return right
      return -1
    }
    if (arr[mid] === half) {
      let A = search(arr.slice(left, mid), target)
      let B = search(arr.slice(mid + 1, right + 1), target)
      if (A !== -1) return A
      if (B !== -1) return B + mid + 1
      return -1
    }
    if (target > half) {
      if (arr[mid] > target) {
        right = mid - 1
      }
      if (arr[mid] < target && arr[mid] < half) {
        right = mid - 1
      }
      if (arr[mid] < target && arr[mid] > half) {
        left = mid
      }
    } else {
      if (arr[mid] < target) {
        left = mid
      }
      if (arr[mid] > target && arr[mid] > half) {
        left = mid
      }
      if (arr[mid] > target && arr[mid] < half) {
        right = mid - 1
      }
    }
  }
  return -1
};
//-1
console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 11))

//13
console.log(search([21, 21, -21, -20, -17, -8, -6, -2, -2, -1, 0, 2, 3, 4, 4, 6, 11, 13, 14, 16, 17, 18, 20], 4))
//0
console.log(search([5, 5, 5, 1, 2, 3, 4, 5], 5))
//5
console.log(search([1, 1, 1, 1, 1, 2, 1, 1, 1], 2))
//-1
console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 8))

//8
console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5))
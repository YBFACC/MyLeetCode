/*
 * @Author: yubingfeng
 * @Date: 2021-10-14 09:43:10
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-14 10:22:48
 * @Description: 描述
 */
function peakIndexInMountainArray(arr: number[]): number {
  const Len = arr.length
  let left = 0, right = Len - 1
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid
    } else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
      right = mid - 1
    } else if (arr[mid + 1] > arr[mid] && arr[mid] > arr[mid - 1]) {
      left = mid + 1
    }
    if (right - left < 2) {
      return arr[right] > arr[left] ? right : left
    }
  }
  return -1
};

console.log(peakIndexInMountainArray([3, 5, 3, 2, 0]))
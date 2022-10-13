
/**
 * 参考－－贪心
 * @param arr 
 * @returns 
 */
function maxChunksToSorted(arr: number[]): number {
  let res = 0
  const Len = arr.length
  let max = -1, min = Len
  for (let i = 0, j = 0; i < Len; i++) {
    max = Math.max(max, arr[i])
    min = Math.min(min, arr[i])
    if (j === min && i === max) {
      res++
      j = i + 1
      max = -1, min = Len
    }
  }
  return res
};

maxChunksToSorted([0, 1])
maxChunksToSorted([4, 3, 2, 1, 0])
maxChunksToSorted([1, 0, 2, 3, 4])
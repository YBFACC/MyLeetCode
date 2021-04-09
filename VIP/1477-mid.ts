
//参考--dp
//记录上一个最小值

function minSumOfLengths(arr: number[], target: number): number {
  const Len = arr.length, INF = 1e8 + 5
  let res = INF, cnt = 0
  const list = Array.from({ length: Len + 1 }, () => INF)
  for (let l = 0, r = 1; r <= Len; ++r) {
    cnt += arr[r - 1]
    while (cnt > target) {
      cnt -= arr[l++]
    }
    if (cnt === target) {
      list[r] = Math.min(list[r - 1], r - l)
      res = Math.min(res, list[l] + r - l)
    } else {
      list[r] = list[r - 1]
    }
  }
  return res === INF ? -1 : res
};

console.log(minSumOfLengths([3, 1, 1, 1, 5, 1, 2, 1], 3))
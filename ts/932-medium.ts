//参考--分治

//奇偶性：A[k] * 2 = A[i] + A[j]，i < k < j，可知等式左边必为偶数，只要右边和为奇数即可保证不成立

function beautifulArray(n: number): number[] {
  const map = new Map()
  const dfs = function (N: number) {
    const res = Array.from({ length: N }, () => 0)
    let t = 0
    if (map.has(N)) return map.get(N)
    if (N !== 1) {
      let list1 = dfs((N + 1) >> 1)
      for (const item of list1) {
        res[t++] = 2 * item - 1
      }
      let list2 = dfs(N >> 1)
      for (const item of list2) {
        res[t++] = 2 * item
      }
    } else {
      res[0] = 1
    }
    map.set(N, res)
    return res
  }
  return dfs(n)
};

console.log(beautifulArray(4))
//参考--DFS-数据小,不超时
function maximumRequests(n: number, requests: number[][]): number {
  const Len = requests.length
  let res = 0
  function check(list: number[][]): boolean {
    const hash =new Int16Array(n)
    for (const [from, to] of list) {
      hash[from]--;
      hash[to]++
    }
    for (let i = 0; i < n; i++) {
      if (hash[i] !== 0) return false
    }
    return true
  }

  const dfs = function (temp: number[][], index: number): void {
    if (index < Len) {
      temp.push(requests[index])
      if (check(temp)) res = Math.max(res, temp.length)
      dfs(temp, index + 1)
      temp.pop()
      dfs(temp, index + 1)
    }
  }
  dfs([], 0)
  return res
};

maximumRequests(5, [[0, 1], [1, 0], [0, 1], [1, 2], [2, 0], [3, 4]])
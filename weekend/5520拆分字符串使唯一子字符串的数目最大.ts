//周赛--回溯记录最大长度
var maxUniqueSplit = function (s: string): number {
  const set = new Set()
  let res = 1
  const dfs = function (temp: string[], index: number) {
    if (index === s.length) {
      res = Math.max(res, temp.length)
      return
    }
    for (let i = index + 1; i <= s.length; i++) {
      const str = s.slice(index, i)
      if (set.has(str)) continue
      temp.push(str)
      set.add(str)
      dfs(temp, i)
      temp.pop()
      set.delete(str)
    }
  }
  dfs([], 0)
  return res
};
maxUniqueSplit("ababccc")
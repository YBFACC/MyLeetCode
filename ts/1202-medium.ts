/*
 * @lc app=leetcode.cn id=1202 lang=typescript
 *
 * [1202] 交换字符串中的元素
 */

//自己--查并集--可交换归为一组，排序，按index还原字符串

// @lc code=start
class UnionFind {
  parent: number[]
  constructor(n: number) {
    this.parent = []
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(index: number) {
    if (this.parent[index] != index) {
      this.parent[index] = this.find(this.parent[index]);
    }
    return this.parent[index];
  }

  merge(x: number, y: number) {
    this.parent[this.find(x)] = this.find(y);
  }
}

interface obj {
  [index: string]: string[]
}

function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  const UF = new UnionFind(s.length)
  for (const [a, b] of pairs) {
    UF.merge(a, b)
  }
  const map = new Map()
  for (let i = 0; i < UF.parent.length; i++) {
    const root = UF.find(i)
    if (!map.has(root)) {
      map.set(root, [])
    }
    map.get(root).push(i)
  }
  const group: obj = {}
  for (const [k, v] of map.entries()) {
    const temp = []
    for (const item of v) {
      temp.push(s[item])
    }
    temp.sort()
    group[k] = temp
  }
  const res = []
  for (const [k, v] of map.entries()) {
    const chars = group[k]
    for (let i = 0; i < v.length; i++) {
      res[v[i]] = chars[i]
    }
  }
  return res.join('')
};
// @lc code=end

smallestStringWithSwaps("cba", [[0, 1], [1, 2]])
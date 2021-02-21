/*
 * @lc app=leetcode.cn id=839 lang=typescript
 *
 * [839] 相似字符串组
 */

//参考官方题解--不用真实模拟，只需要统计不同的位置个数

// @lc code=start

interface obj {
  [index: number]: number
}

class UnionFind {
  parents: obj
  //减少搜索深度
  ranks: obj
  //统计联通分量
  count: number
  constructor(n: number) {
    this.parents = Array.from({ length: n }, (v, k) => k);
    this.ranks = Array.from({ length: n }, () => 1)
    this.count = n
  }
  find(x: number) {
    if (this.parents[x] !== x) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }
  merge(x: number, y: number): boolean {
    let rootX = this.find(x), rootY = this.find(y);
    if (rootX === rootY) return false;
    if (this.ranks[rootX] < this.ranks[rootY]) {
      [rootX, rootY] = [rootY, rootX]
    }
    this.ranks[rootX] += this.ranks[rootY]
    this.parents[rootY] = rootX
    this.count--
    return true
  }
}

function numSimilarGroups(strs: string[]): number {
  const Len = strs.length
  const UF = new UnionFind(Len)

  for (let i = 0; i < Len; i++) {
    for (let j = i + 1; j < Len; j++) {
      if (UF.find(i) === UF.find(j)) { continue }
      if (check(strs[i], strs[j])) {
        UF.merge(i, j)
      }
    }
  }

  return UF.count
};

function check(a: string, b: string): boolean {
  let num = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      num++;
      if (num > 2) {
        return false;
      }
    }
  }
  return true;
}

// @lc code=end

console.log(numSimilarGroups(["abc", "abc"]))

console.log(numSimilarGroups(["omv", "ovm"]))
console.log(numSimilarGroups(["tars", "rats", "arts", "star"]))
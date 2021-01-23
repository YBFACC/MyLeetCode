/*
 * @lc app=leetcode.cn id=721 lang=typescript
 *
 * [721] 账户合并
 */

//参考--查并集
//难点在于：对每个邮箱进行记录原始从属

// @lc code=start

interface Parents {
  [index: string]: string
}

class UnionFind {
  parents: Parents

  constructor() {
    this.parents = {};

  }
  init(x: string) {
    if (this.parents[x] === undefined) {
      this.parents[x] = x;
    }
  }
  find(x: string) {
    if (this.parents[x] !== x) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }
  merge(x: string, y: string) {
    this.init(x); this.init(y);
    let rootX = this.find(x), rootY = this.find(y);
    if (rootX === rootY) return;
    this.parents[rootY] = rootX;
  }
}

function accountsMerge(accounts: string[][]): string[][] {
  const Len = accounts.length
  const UF = new UnionFind()
  const map: any = {}
  for (const account of accounts) {
    map[account[1]] = account[0];
    UF.merge(account[1], account[1]);
    for (let i = 2; i < account.length; ++i) {
      map[account[i]] = account[0];
      UF.merge(account[i - 1], account[i]);
    }
  }

  //以根结点作为key，很巧妙
  const sets: any = {}
  for (const key of Object.keys(map)) {
    const root = UF.find(key)
    if (!sets[root]) {
      sets[root] = []
    }
    sets[root].push(key)
  }

  const res = []
  for (const root of Object.keys(sets)) {
    sets[root].sort()
    res.push([map[root], ...sets[root]])
  }

  return res
};
// @lc code=end

console.log(accountsMerge(
  [
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["John", "johnnybravo@mail.com"],
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["Mary", "mary@mail.com"]
  ]
))


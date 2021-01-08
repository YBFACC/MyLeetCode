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

//自己--查并集--统计有几个根结点
function findCircleNum(M: number[][]): number {
  const Len = M.length
  const UF = new UnionFind(Len)

  for (let i = 0; i < Len; i++) {
    const list = M[i]
    const root = UF.find(i)
    for (let j = 0; j < list.length; j++) {
      if (i === j || list[j] === 0) continue
      UF.merge(UF.find(j), root)
    }
  }
  let res = 0
  for (let i = 0; i < UF.parent.length; i++) {
    if (i === UF.parent[i]) res++
  }
  return res
};
//1
console.log(findCircleNum([
  [1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 0, 1, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]]))

//2
console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]))

//1
console.log(findCircleNum([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]))

console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))
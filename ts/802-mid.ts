//0没访问
//1在栈内，或者成环
//2安全

//参考--DFS+剪枝
//DFS访问过节点确定的颜色

function eventualSafeNodes(graph: number[][]): number[] {
  const list = Array.from({ length: graph.length }, () => 0)

  graph.forEach((v, i) => {
    if (v.length === 0) list[i] = 2
  })

  const dfs = function (from: number) {
    if (list[from] > 0) {
      return list[from] === 2
    }
    list[from] = 1
    for (const to of graph[from]) {
      if (!dfs(to)) {
        return false
      }
    }
    list[from] = 2
    return true
  }


  for (let i = 0; i < graph.length; i++) {
    dfs(i)
  }
  let res = []
  for (let i = 0; i < graph.length; i++) {
    if (list[i] === 2) {
      res.push(i)
    }
  }
  return res
};


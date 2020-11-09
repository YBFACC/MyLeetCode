
//提示--满二叉树性质--DFS-root到叶子节点的路径之和

interface obj {
  [index: number]: number
}

function pathSum(nums: number[]): number {
  const list: number[] = Array.from({ length: 15 }, () => NaN)
  const wights: obj = { 1: -1, 2: 0, 3: 2, 4: 6 }
  for (const num of nums) {
    const str = num + ""
    const depth: number = +str[0]
    const sign: number = +str[1]
    const value = +str[2]
    list[wights[depth] + sign] = value
  }

  let res = 0
  const dfs = function (index: number, sum: number) {
    if (index > 15 || isNaN(list[index])) return
    let left = index * 2 + 1
    let right = index * 2 + 2

    if (isNaN(list[left]) && isNaN(list[right])) {
      res += sum + list[index]
    }
    sum += list[index]
    dfs(left, sum)
    dfs(right, sum)
  }
  dfs(0, 0)
  return res
};
pathSum([113, 221])
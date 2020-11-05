//参考--left<node<right
//数组第一个节点是根
//左子树都小于根
//右子树都大于根

function verifyPreorder(preorder: number[]): boolean {
  return dfs(preorder, 0, preorder.length - 1)
};

function dfs(list: number[], L: number, R: number): boolean {
  if (L >= R || L === R - 1) return true
  let mid = -1
  const root = list[L]
  for (let i = 1 + L; i <= R; i++) {
    if (root < list[i]) {
      mid = i
      break
    }
  }
  if (mid > 0) {
    for (let i = mid; i <= R; i++) {
      if (root > list[i]) {
        return false
      }
    }
    return dfs(list, L + 1, mid - 1) && dfs(list, mid, R)
  } else {
    return dfs(list, L + 1, R)
  }
}
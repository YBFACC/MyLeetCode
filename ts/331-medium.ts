/*
 * @lc app=leetcode.cn id=331 lang=typescript
 *
 * [331] 验证二叉树的前序序列化
 */

//参考--树的图特征
//以前是深搜模拟树

//根：2出0入
//叶子：1入0出
//普通节点：2出1入

// @lc code=start
function isValidSerialization(preorder: string): boolean {
  if (preorder === '#') {
    return true
  }
  let inorder = 0, outorder = 0
  const nodes = preorder.split(',')
  for (let i = 0; i < nodes.length; i++) {
    if (i === 0) {
      if (nodes[i] === '#') return false
      outorder += 2
      continue
    }
    if (nodes[i] === '#') {
      inorder++
    } else {
      outorder += 2
      inorder++
    }
    if (i !== nodes.length - 1 && inorder >= outorder) return false
  }
  return inorder === outorder
};
// @lc code=end


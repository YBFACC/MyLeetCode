/*
 * @lc app=leetcode.cn id=1200 lang=typescript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
//copy--easy--凑3题
function minimumAbsDifference(arr: number[]): number[][] {
  let sortArr = arr.sort((a, b) => { return a - b })  //升序排列
  let res = []
  let cz = sortArr[1] - sortArr[0] //第一对相邻元素的差值
  // 遍历相邻两个元素，计算差值
  for (let i = 0; i < sortArr.length - 1; i++) {
    if (cz > sortArr[i + 1] - sortArr[i]) {
      cz = sortArr[i + 1] - sortArr[i]
      res = []
      res.push([sortArr[i], sortArr[i + 1]])
    }
    else if (cz === sortArr[i + 1] - sortArr[i]) {
      res.push([sortArr[i], sortArr[i + 1]])
    }
  }
  return res
};
// @lc code=end


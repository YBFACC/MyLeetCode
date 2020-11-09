/*
 * @lc app=leetcode.cn id=1130 lang=typescript
 *
 * [1130] 叶值的最小代价生成树
 */

//参考--单调栈
//越大的值，深度应该越浅--达到目标值最小

// @lc code=start
function mctFromLeafValues(arr: number[]): number {
  let sum = 0
  let stack = []
  for (const num of arr) {
    while (stack.length > 1 && stack[stack.length - 1] < num) {
      sum += getMinSum(stack.pop() as number,
        Math.min(num, stack[stack.length - 1]))
    }
    if (stack.length === 1 && stack[stack.length - 1] < num) {
      sum += getMinSum(stack.pop() as number,
        num)
    }
    stack.push(num)
  }
  while (stack.length > 1) {
    sum += getMinSum(stack.pop() as number,
      stack[stack.length - 1])
  }
  return sum
};

function getMinSum(a: number, b: number): number {
  return a * b
}
// @lc code=end


//copy--区间dp法

interface obj {
  sum: number
  maxVal: number
}

function mctFromLeafValues2(arr: number[]): number {
  const n = arr.length
  const dp: obj[][] = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => { return { sum: Number.MAX_SAFE_INTEGER, maxVal: 0 } }))
  for (let i = 0; i < n; i++) //初始化
  {
    dp[i][i].sum = 0;//sum
    dp[i][i].maxVal = arr[i];//maxval
  }
  for (let len = 1; len < n; ++len)//区间长度
  {
    for (let i = 0, j; i + len < n; ++i)//左端点
    {
      j = i + len;//右端点
      for (let k = i; k < j; ++k)//枚举中间端点
      {
        if (dp[i][j].sum > dp[i][k].sum + dp[k + 1][j].sum + dp[i][k].maxVal * dp[k + 1][j].maxVal) {  
            //左区间的和 + 右区间的和 + 当前节点的val = maxL*maxR
          dp[i][j].sum = dp[i][k].sum + dp[k + 1][j].sum + dp[i][k].maxVal * dp[k + 1][j].maxVal;
          //用更小的sum更新
          dp[i][j].maxVal = Math.max(dp[i][k].maxVal, dp[k + 1][j].maxVal);
          // 更新区间的最大叶节点值
        }
      }
    }
  }
  return dp[0][n - 1].sum;
}


//56
console.log(mctFromLeafValues2([3, 2, 5, 7]))

mctFromLeafValues2([6, 2, 4])

//500
mctFromLeafValues2([15, 13, 5, 3, 15])

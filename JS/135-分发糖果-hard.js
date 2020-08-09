/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * 自己--单调增/减序列
 * 注意相同数字对处理
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function (ratings) {
  if (ratings.length === 0) return 0
  let isup = false

  const dp = Array.from({ length: ratings.length }, () => 0)
  const stack = [0]
  isup = change(ratings, 0, 1)

  for (let i = 1; i < ratings.length; i++) {
    if (isup) {
      if (ratings[i] > ratings[i - 1]) {
        stack.push(i)
      } else {
        help(dp, stack, isup, ratings)
        stack.push(i)
        isup = change(ratings, i, i + 1)
      }
    } else {
      if (ratings[i] < ratings[i - 1]) {
        stack.push(i)
      } else {
        help(dp, stack, isup, ratings)
        stack.push(i)
        isup = change(ratings, i, i + 1)
      }
    }
  }

  if (stack.length > 1) {
    help(dp, stack, isup, ratings)
  } else {
    let index = stack.pop()
    if (ratings[index] > ratings[index - 1]) {
      dp[index] = dp[index - 1] + 1
    } else {
      dp[index] = 1
    }
  }

  let res = 0
  for (const num of dp) {
    res += num
  }

  return res
}

function change(ratings, i, j) {
  return ratings[i] < ratings[j]
}
function help(dp, stack, change, ratings) {
  if (stack.length === 1) {
    let index = stack.pop()
    if (ratings[index] > ratings[index - 1]) {
      dp[index] = Math.max(dp[index - 1], dp[index]) + 1
    } else {
      dp[index] = 1
    }
    return
  }
  if (change) {
    let count =
      ratings[stack[0]] > ratings[stack[0] - 1]
        ? stack.length + dp[stack[0] - 1]
        : stack.length
    while (stack.length > 0) {
      let index = stack.pop()
      dp[index] = count
      count--
    }
  } else {
    let count = 1
    while (stack.length > 0) {
      let index = stack.pop()
      dp[index] = count
      count++
      if (stack.length === 0 && ratings[index] < ratings[index - 1]) {
        dp[index - 1] = Math.max(dp[index - 2], dp[index]) + 1
      }
    }
  }
}
// @lc code=end

candy([1, 3, 2, 2, 1])
return

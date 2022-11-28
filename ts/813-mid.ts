
/**
 * 参加－－dp ３重条件
 * @param nums 
 * @param k 
 * @returns 
 */

function largestSumOfAverages(nums: number[], k: number): number {
  const Len = nums.length
  const prefix = Array.from({ length: Len + 1 }, () => 0)
  for (let i = 0; i < Len; i++) {
    prefix[i + 1] = prefix[i] + nums[i]
  }
  const dp = Array.from({ length: Len + 1 }, () => Array.from({ length: k + 1 }, () => 0))
  for (let i = 1; i <= Len; i++) {
    dp[i][1] = prefix[i] / i
  }

  for (let j = 2; j <= k; j++) { // 组的递增
    for (let i = j; i <= Len; i++) {  //尾index
      for (let x = j - 1; x < i; x++) { //最后一个分组
        dp[i][j] = Math.max(dp[i][j], dp[x][j - 1] + (prefix[i] - prefix[x]) / (i - x));
      }
    }
  }

  return dp[Len][k]
};

largestSumOfAverages([1, 2, 3, 4, 5, 6, 7], 4)
largestSumOfAverages([9, 1, 2, 3, 9], 3)
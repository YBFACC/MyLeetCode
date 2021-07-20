/*
 * @lc app=leetcode.cn id=1723 lang=typescript
 *
 * [1723] 完成所有工作的最短时间
 */

//参考--回溯+剪枝

// @lc code=start
function minimumTimeRequired(jobs: number[], k: number): number {
  const sum = Array.from({ length: k }, () => 0)
  const Len = jobs.length
  let ans = Infinity
  const dfs = function (u: number, used: number, max: number) {
    if (max >= ans) return
    if (u == Len) {
      ans = max
      return
    }
    //优先分配任务给空闲工人
    if (used < k) {
      sum[used] = jobs[u];
      dfs(u + 1, used + 1, Math.max(sum[used], max));
      sum[used] = 0;

    }
    for (let i = 0; i < used; i++) {
      sum[i] += jobs[u]
      dfs(u + 1, used, Math.max(max, sum[i]))
      sum[i] -= jobs[u]
    }
  }
  dfs(0, 0, 0)

  return ans
};


//参考--dp+状态压缩
//用2进制代表工作是否完成

var minimumTimeRequired = function (jobs, k) {
	const n = jobs.length
	const sum = new Array(1 << n).fill(0)
	for (let i = 1; i < 1 << n; i++) {
		const x = NumberOfTrailingZeros(i),
			y = i - (1 << x)
		sum[i] = sum[y] + jobs[x]
	}

	const dp = new Array(k).fill(0).map(() => new Array(1 << n).fill(0))
	for (let i = 0; i < 1 << n; i++) {
		dp[0][i] = sum[i]
	}

	for (let i = 1; i < k; i++) {
		for (let j = 0; j < 1 << n; j++) {
			let minn = Number.MAX_VALUE
			for (let x = j; x != 0; x = (x - 1) & j) {
				minn = Math.min(minn, Math.max(dp[i - 1][j - x], sum[x]))
			}
			dp[i][j] = minn
		}
	}
	return dp[k - 1][(1 << n) - 1]
}

//JS实现这个函数（统计一个数的补码 最右侧1到末位的所有0的个数）
//https://graphics.stanford.edu/~seander/bithacks.html#ZerosOnRightMultLookup
const NumberOfTrailingZeros = number => {
	const num = parseInt(number).toString(2)
	const multiply_De_Bruijn_position = [
		0, 1, 28, 2, 29, 14, 24, 3, 30, 22, 20, 15, 25, 17, 4, 8, 31, 27, 13, 23,
		21, 19, 16, 7, 26, 12, 18, 6, 11, 5, 10, 9
	]
	return multiply_De_Bruijn_position[(((num & -num) * 0x077cb531) >> 27) & 31]
}


// @lc code=end

console.log(minimumTimeRequired([1, 2, 4, 7, 8], 2))
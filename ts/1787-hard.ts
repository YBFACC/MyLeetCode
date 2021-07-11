/*
 * @lc app=leetcode.cn id=1787 lang=typescript
 *
 * [1787] 使所有区间的异或结果为零
 */

//参考--dp
//nums[i]⊕nums[i+1]⊕...⊕nums[j]=0
//nums[i+1]⊕...⊕nums[j]⊕nums[j+1]=0
//=>nums[i]⊕nums[j+1]=0
//转化为二维数组，以k为长度。
//使得每一列改变最小值，就能一致

// @lc code=start
function minChanges(nums: number[], k: number): number {
  const Len = nums.length
  //有k列，最大值为1024
  const f = Array.from({ length: k }, () =>
    Array.from({ length: 1024 }, () => Infinity))
  const g = Array.from({ length: k }, () => Infinity)

  for (let i = 0, cnt = 0; i < k; i++, cnt = 0) {
    const map = new Map()
    for (let j = i; j < Len; j += k) {
      map.set(nums[j], map.has(nums[j]) ? map.get(nums[j]) + 1 : 1)
      cnt++
    }
    if (i === 0) {
      for (let xor = 0; xor < 1024; xor++) {
        f[0][xor] = Math.min(f[0][xor], cnt - (map.has(xor) ? map.get(xor) : 0))
        g[0] = Math.min(g[0], f[0][xor])
      }
    } else {
      for (let xor = 0; xor < 1024; xor++) {
        f[i][xor] = g[i - 1] + cnt
        for (const cur of map.keys()) {
          f[i][xor] = Math.min(f[i][xor], f[i - 1][xor ^ cur] + cnt - map.get(cur))
        }
        g[i] = Math.min(g[i], f[i][xor])
      }
    }

  }
  //最后一列，异或为0的最小次数
  return f[k - 1][0]
};
// @lc code=end

minChanges([3, 4, 7, 2, 1, 7, 3, 4, 7], 3)
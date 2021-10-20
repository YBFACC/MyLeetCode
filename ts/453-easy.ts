/*
 * @Author: yubingfeng
 * @Date: 2021-10-20 11:08:55
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-20 15:10:02
 * @Description: 提示--n-1个元素加1==1个元素减1
 */
function minMoves(nums: number[]): number {
  let res = 0
  let min = Infinity
  for (const num of nums) {
    min = Math.min(min, num)
  }
  for (const num of nums) {
    res += num - min
  }

  return res
};

minMoves([5, 6, 8, 8, 5])
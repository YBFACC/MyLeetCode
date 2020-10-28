//参考--二进制
//每一个值有选和不选两种状态
function subsets(nums: number[]): number[][] {
  const Len = nums.length
  let res: number[][] = []
  //一共有0-all种状态
  const all = 1 << Len
  for (let i = 0; i < all; i++) {
    const temp = []
    for (let j = 0; j < Len; j++) {
      if ((i >> j) & 1) {
        temp.push(nums[j])
      }
    }
    res.push(temp)
  }
  return res
};
subsets([1, 2, 3])
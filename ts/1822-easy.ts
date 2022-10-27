
/**
 * 自己－－负数统计
 * @param nums 
 * @returns 
 */
function arraySign(nums: number[]): number {
  let minus = 0, zore = false

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zore = true
    if (nums[i] < 0) minus++
  }

  if (zore) return 0
  return minus % 2 === 0 ? 1 : -1
};

arraySign([-1, -2, -3, -4, 3, 2, 1])
arraySign([-1,1,-1,1,-1])
/**
 * 自己
 * 有原地完成的方法－－32bit的高位做储存
 * @param nums 
 * @param n 
 * @returns 
 */
function shuffle(nums: number[], n: number): number[] {
  const res: number[] = [], Len = nums.length
  let x = 0, y = n
  while (y < Len) {
    res.push(nums[x])
    res.push(nums[y])
    x++
    y++
  }

  return res
};

shuffle([2, 5, 1, 3, 4, 7], 3)
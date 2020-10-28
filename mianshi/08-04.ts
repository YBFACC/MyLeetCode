//参考--在上次的结果中追加下一次的值
function subsets(nums: number[]): number[][] {
  const Len = nums.length
  let res: number[][] = [[]]
  if (Len === 0) return [[]]

  for (let i = 0; i < Len; i++) {
    let temp: number[][] = []
    res.forEach(v => {
      temp.push(v.slice())
      v.push(nums[i])
    })
    res = [...res, ...temp]
  }

  return res
};
subsets([1, 2, 3])

/**
 * 提示－－硬做
 * @param arr 
 * @returns 
 */
function trimMean(arr: number[]): number {
  const Len = arr.length
  const deleteNum = Len * 0.05
  arr.sort((a, b) => a - b)
  const sum = arr.reduce((pre, curr) => pre + curr, 0)
  const start = arr.slice(0, deleteNum).reduce((pre, curr) => pre + curr, 0),
    end = arr.slice(Len - deleteNum, Len).reduce((pre, curr) => pre + curr, 0)

  const res = (sum - start - end) / (Len * 0.9)
  return res
};
trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3])
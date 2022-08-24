
/**
 * 自己
 * 参考--类似冒泡排序--可以最小2长度的数组交换
 * @param target 
 * @param arr 
 * @returns 
 */
function canBeEqual(target: number[], arr: number[]): boolean {
  arr.sort()
  target.sort()
  return arr.join(',') === target.join(',')
};
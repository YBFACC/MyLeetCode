
/**
 * 提示－－模拟题
 * 也可以从数学解法－－是收敛的
 * @param memory1 
 * @param memory2 
 * @returns 
 */
function memLeak(memory1: number, memory2: number): number[] {
  let res = 0
  while (memory1 >= 0 && memory2 >= 0) {
    if (memory2 > memory1) {
      memory2 -= res++
    } else {
      memory1 -= res++
    }
  }
  if (memory1 < 0) {
    memory1 += --res
  }
  if (memory2 < 0) {
    memory2 += --res
  }

  return [res, memory1, memory2]
};

memLeak(8, 11)
memLeak(10534, 0)
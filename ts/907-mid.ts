
/**
 * 参考
 * 类似828　加了单调栈
 * @param arr 
 * @returns 
 */
function sumSubarrayMins(arr: number[]): number {
  const Len = arr.length, stack: number[] = []
  const left = new Array<number>(Len).fill(-1)
  const right = new Array<number>(Len).fill(Len)
  for (let i = 0; i < Len; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      const index = stack.pop() as number;
      right[index] = i
    }
    stack.push(i)
  }
  stack.length = 0
  for (let i = Len - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      const index = stack.pop() as number;
      left[index] = i
    }
    stack.push(i)
  }
  let res = 0
  const MOD = 10000007
  for (let i = 0; i < Len; i++) {
    const a = left[i], b = right[i]
    res += (i - a) * (b - i) * arr[i] % MOD
    res %= MOD
  }

  return res
}

sumSubarrayMins([3, 1, 2, 4])
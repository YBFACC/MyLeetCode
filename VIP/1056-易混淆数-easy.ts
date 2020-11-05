//参考--栈
function confusingNumber(N: number): boolean {
  let obj = { 0: '0', 1: '1', 6: '9', 8: '8', 9: '6' }
  const str = N + ''
  const stack = []
  for (const num of str) {
    if (!obj.hasOwnProperty(num)) {
      return false
    }
    stack.push(obj[num])
  }
  let res = ''
  while (stack.length > 0) {
    res += stack.pop() as number
  }

  return res !== str
}

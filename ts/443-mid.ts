//自己--原地修改-双指针

function compress(chars: string[]): number {
  let res = 0
  let index = 0
  const Len = chars.length
  while (index < Len) {
    let right = index + 1
    while (right < Len) {
      if (chars[index] === chars[right]) {
        right++
      } else {
        break
      }
    }
    const step = (right - index) + ''
    chars[res] = chars[index]
    if (+step !== 1) {
      for (const char of step) {
        chars[++res] = char
      }
    }
    res++
    index = right
  }
  return res
};
compress(["a", "a", "a", "a", "a", "b"])

compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
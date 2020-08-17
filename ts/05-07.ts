
//自己--傻瓜做法
function exchangeBits(num: number): number {
  let index = 0
  const list = new Array(32).fill(0)
  while (num > 0) {
    if (num % 2 === 1) list[index] = 1
    num >>= 1
    index++
  }
  for (let i = 0; i < 32; i += 2) {
    ;[list[i], list[i + 1]] = [list[i + 1], list[i]]
  }
  return parseInt(list.reverse().join(''), 2)
}

console.log(exchangeBits(1))

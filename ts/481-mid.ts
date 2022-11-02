
/**
 * 参考－－模拟
 * @param n 
 * @returns 
 */

function magicalString(n: number): number {
  let str = '01' // 首位多加一个 0 作为哨兵
  const list = Array.from({ length: n + 10 }, () => 0)

  for (let i = 1, j = 1, count = 0; i <= n; j++) {
    const last = str[str.length - 1], t = str[j]
    if (last === '1') {
      if (t === '1') {
        str += '2'
        list[i] = ++count, i++
      } else {
        str += '12'
        list[i] = ++count, list[i + 1] = ++count, i += 2
      }
    } else {
      if (t === '1') {
        str += '1'
        list[i] = count, i++
      } else {
        str += '21'
        list[i] = list[i + 1] = count, i += 2
      }
    }
  }

  return list[n]
}
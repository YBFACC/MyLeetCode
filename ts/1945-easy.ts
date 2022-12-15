
/**
 * 自己--模拟
 * @param s 
 * @param k 
 * @returns 
 */
function getLucky(s: string, k: number): number {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    res += s[i].charCodeAt(0) - 'a'.charCodeAt(0) + 1
  }

  while (k-- > 0) {
    const list = res.split('')
    let temp = 0
    list.forEach(item => {
      temp += + item
    })
    res = temp + ''
  }

  return +res
};

getLucky("iiii", 1)
getLucky('aaaa', 1)
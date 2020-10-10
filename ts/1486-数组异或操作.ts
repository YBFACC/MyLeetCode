function xorOperation(n: number, start: number): number {
  let res = 0
  for (let i = 0; i < n; i++) {
    const floor = start + 2 * i
    res ^= floor
  }
  return res
};

var xorOperation = function(n, start) {
  const h = (c, s) => (c >>> 1 & 1) ^ (c % 2 ? c + s - 1 : 0) 
  const xor = (c, s) => {
      if(s % 2) return (s - 1) ^ h(c + 1, s - 1)
      else return h(c, s)
  }
  const res = xor(n, start >>> 1) << 1
  return res + (n & start & 1)
};

// 作者：menteceso
// 链接：https://leetcode-cn.com/problems/xor-operation-in-an-array/solution/javascript-o1-by-menteceso/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
xorOperation(5, 0)
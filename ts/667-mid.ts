/**
 * 参考－－找规律
 * @param n 
 * @param k 
 * @returns 
 */
function constructArray(n: number, k: number): number[] {
  const res: number[] = []
  let i = 0, p = 1, q = n
  for (let j = 0; j < k; j++) {
    if (j % 2 === 0) {
      res[i++] = p++
    } else {
      res[i++] = q--
    }
  }
  if (k % 2 === 0) {
    while (i < n) {
      res[i++] = q--
    }
  } else {
    while (i < n) {
      res[i++] = p++
    }
  }
  return res
};

/**
 * 参考--模拟树的反推
 * @param n 
 * @param k 
 * @returns 
 */
function kthGrammar(n: number, k: number): number {
  if (n === 1) return 0
  const father = kthGrammar(n - 1, k + 1 >> 1)
  return (k & 1) === 1 ? father : 1 ^ father
};



/**
 * 自己－－简单ｄｐ
 * @param k 
 * @returns 
 */
function getKthMagicNumber(k: number): number {
  const resList = [1]
  let index3 = 0, index5 = 0, index7 = 0

  while (resList.length < k) {
    const num3 = resList[index3] * 3, num5 = resList[index5] * 5, num7 = resList[index7] * 7
    if (num3 <= num5 && num3 <= num7) {
      resList.push(num3)
    } else if (num5 <= num3 && num5 <= num7) {
      resList.push(num5)
    } else if (num7 <= num5 && num7 <= num3) {
      resList.push(num7)
    }
    while (resList[resList.length - 1] >= resList[index3] * 3) {
      index3++
    }
    while (resList[resList.length - 1] >= resList[index5] * 5) {
      index5++
    }
    while (resList[resList.length - 1] >= resList[index7] * 7) {
      index7++
    }
  }

  return resList[k - 1]
};

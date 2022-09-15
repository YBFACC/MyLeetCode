/**
 * copy--找规律
 * @param n 
 * @param presses 
 * @returns 
 */
function flipLights(n: number, presses: number): number {
  if (presses == 0) {
    return 1;
  }
  //特殊情况处理
  if (n == 1) {
    return 2;
  } else if (n == 2) {
    //特殊情况
    return presses == 1 ? 3 : 4;
  } else {
    //n >= 3
    return presses == 1 ? 4 : presses == 2 ? 7 : 8;
  }
};



/**
 * @description 参考--博弈论
 * @param stones 
 * @returns 
 */
function stoneGameIX(stones: number[]): boolean {
  if (stones.length === 0) return false
  const temp = stones.map((item) => item % 3)
  //Alice先手不能选0
  //Alice选1 bob 0
  //Alice选2 bob 0
  //1121212121   2212121212 只有这2种类型
  const list = [0, 0, 0]
  for (let i = 0; i < temp.length; i++) {
    const item = temp[i]
    list[item]++
  }

  if (list[0] % 2 === 0) {
    return list[1] >= 1 && list[2] >= 1;
  }
  return list[1] - list[2] > 2 || list[2] - list[1] > 2;
};

stoneGameIX([5, 1, 2, 4, 3])
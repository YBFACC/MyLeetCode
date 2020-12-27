
//自己--dp/排列组合

function probabilityOfHeads(prob: number[], target: number): number {
  let list = [
    1 - prob[0],
    prob[0]
  ]
  for (let i = 1; i < prob.length; i++) {
    const temp = []
    const Facade = prob[i]
    const Obverse = 1 - prob[i]
    for (let i = 0; i < list.length; i++) {
      if (temp[i] == undefined) temp[i] = 0
      if (temp[i + 1] == undefined) temp[i + 1] = 0
      temp[i] += list[i] * Obverse
      temp[i + 1] += list[i] * Facade
    }
    list=temp
  }
  return list[target]
};

probabilityOfHeads([0.5, 0.5, 0.5, 0.5, 0.5], 0)


//自己--单串dp

function minCost(costs: number[][]): number {
  const Len = costs.length
  const red = Array.from({ length: Len + 1 }, () => 0)
  const blue = Array.from({ length: Len + 1 }, () => 0)
  const green = Array.from({ length: Len + 1 }, () => 0)
  for (let i = 1; i <= Len; i++) {
    red[i] = Math.min(green[i - 1], blue[i - 1]) + costs[i - 1][0]
    green[i] = Math.min(red[i - 1], blue[i - 1]) + costs[i - 1][1]
    blue[i] = Math.min(green[i - 1], red[i - 1]) + costs[i - 1][2]
  }
  return Math.min(red[Len], green[Len], blue[Len])
};

console.log(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]]))
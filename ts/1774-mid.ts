

/**
 * 参考－－回溯
 * @param baseCosts 
 * @param toppingCosts 
 * @param target 
 * @returns 
 */
function closestCost(baseCosts: number[], toppingCosts: number[], target: number): number {
  let res = Math.min(...baseCosts)
  const dfs = function (index: number, currCost: number) {
    if (Math.abs(res - target) < currCost - target) return

    if (Math.abs(res - target) > Math.abs(currCost - target)) {
      res = currCost
    }
    if (Math.abs(res - target) === Math.abs(currCost - target)) {
      res = Math.min(res, currCost);
    }

    if (index === toppingCosts.length) return
    dfs(index + 1, currCost)
    dfs(index + 1, currCost + toppingCosts[index])
    dfs(index + 1, currCost + toppingCosts[index] * 2)
  }

  for (const b of baseCosts) {
    dfs(0, b)
  }

  return res
};

closestCost([10], [1], 1)
closestCost([2, 3], [4, 5, 100], 18)
closestCost([1, 7], [3, 4], 10)


//参考--数学
//香农的信息论

function poorPigs(buckets: number, minutesToDie: number, minutesToTest: number): number {
  let pigs = 0
  let cost = Math.floor(minutesToTest / minutesToDie) + 1
  while (cost ** pigs < buckets) {
    pigs++
  }

  return pigs
};
poorPigs(4, 15, 15)
poorPigs(1000, 15, 60)
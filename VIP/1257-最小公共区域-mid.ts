
//参考--最近公共祖先

//https://leetcode-cn.com/problems/smallest-common-region/solution/javascript-shao-zheng-li-xia-lcawen-ti-de-si-lu-by/
function findSmallestRegion(regions: string[][], region1: string, region2: string): string {
  const map = new Map()
  for (const [p, ...chlidren] of regions) {
    for (const child of chlidren) {
      map.set(child, p)
    }
  }
  const set = new Set()
  set.add(region1)
  while (map.has(region1)) {
    set.add(map.get(region1))
    region1 = map.get(region1)
  }
  if (set.has(region2)) return region2
  while (map.has(region2)) {
    region2 = map.get(region2)
    if (set.has(region2)) return region2
  }
  return ""
};
console.log(findSmallestRegion([["Earth", "North America", "South America"],
["North America", "United States", "Canada"],
["United States", "New York", "Boston"],
["Canada", "Ontario", "Quebec"],
["South America", "Brazil"]],
  "Quebec",
  "New York"
))
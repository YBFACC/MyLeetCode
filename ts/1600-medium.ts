/*
 * @lc app=leetcode.cn id=1600 lang=typescript
 *
 * [1600] 皇位继承顺序
 */

//自己--深搜--map有向图

// @lc code=start
class ThroneInheritance {
  kingName: string
  map: Map<string, string[]>
  deathSet: Set<string>
  constructor(kingName: string) {
    this.kingName = kingName
    this.map = new Map()
    this.deathSet = new Set()
  }

  birth(parentName: string, childName: string): void {
    const map = this.map
    if (!map.has(parentName)) {
      map.set(parentName, [])
    }
    map.get(parentName).push(childName)
  }

  death(name: string): void {
    const deathSet = this.deathSet
    deathSet.add(name)
  }

  getInheritanceOrder(): string[] {
    const res = []
    const deathSet = this.deathSet, map = this.map
    const dfs = function (father: string) {
      let floor = map.has(father) ? map.get(father) : []
      if (!deathSet.has(father)) {
        res.push(father)
      }
      for (const item of floor) {
        dfs(item)
      }
    }
    dfs(this.kingName)
    return res
  }
}

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
// @lc code=end


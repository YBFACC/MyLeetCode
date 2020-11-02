/*
 * @lc app=leetcode.cn id=677 lang=typescript
 *
 * [677] 键值映射
 */

import { TreeNode, ListNode, runScript } from 'leetcode-class';

// @lc code=start
//自己--前缀树
class MapSum {
  root: mapNode
  constructor() {
    this.root = new mapNode(0, 0)
  }

  insert(key: string, val: number): void {
    let node = this.root
    const Len = key.length
    let find = this.find(key)

    for (let i = 0; i < Len; i++) {
      if (!node.next[key[i]]) {
        node.next[key[i]] = new mapNode(val, 0)
      } else {
        node.next[key[i]].val += val - find
      }
      node = node.next[key[i]]
    }

    node.isEnd = val
  }

  sum(prefix: string): number {
    let node = this.root
    const Len = prefix.length
    for (let i = 0; i < Len; i++) {
      if (!node.next[prefix[i]]) {
        return 0
      }
      node = node.next[prefix[i]]
    }
    return node.val
  }

  find(key: string): number {
    let node = this.root
    const Len = key.length
    for (let i = 0; i < Len; i++) {
      if (!node.next[key[i]]) {
        return 0
      }
      node = node.next[key[i]]
    }
    return node.isEnd
  }
}
class mapNode {
  next: any
  val: number
  isEnd: number
  constructor(val: number, isEnd: number) {
    this.next = {}
    this.val = val
    this.isEnd = isEnd
  }
}


console.log(
  runScript(["MapSum", "insert", "sum", "insert", "sum", "sum", "insert", "sum", "sum", "sum", "insert", "sum", "sum", "sum", "sum", "sum", "insert", "insert", "insert", "sum", "sum", "sum"]
    , [[], ["aa", 3], ["a"], ["aa", 2], ["a"], ["aa"], ["aaa", 3], ["aaa"], ["bbb"], ["ccc"], ["aewfwaefjeoawefjwoeajfowajfoewajfoawefjeowajfowaj", 111], ["aa"], ["a"], ["b"], ["c"], ["aewfwaefjeoawefjwoeajfowajfoewajfoawefjeowajfowaj"], ["bb", 143], ["cc", 144], ["aew", 145], ["bb"], ["cc"], ["aew"]],
    [MapSum])
)
console.log(runScript(
  ["MapSum", "insert", "sum", "insert", "insert", "sum"],
  [[], ["appled", 2], ["ap"], ["apple", 3], ["apple", 2], ["a"]], [MapSum]))

// var obj = new MapSum()
// obj.insert("apple", 3)
// console.log(obj.sum('ap'))
// obj.insert("app", 2)

// obj.insert("apple", 2)
// console.log(obj.sum('ap'))


// @lc code=end


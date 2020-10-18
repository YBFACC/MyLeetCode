/*
 * @lc app=leetcode.cn id=745 lang=typescript
 *
 * [745] 前缀和后缀搜索
 */

// @lc code=start
//提示--前缀树+后缀树--树节点存储权重列表
//顺序插入words=>权重列表升序
//逆序查找权重列表--找到最大值
//map加速重复查找
class WordFilter {
  prefix: Trie
  suffix: Trie
  prefix_cache: Map<string, number[]>
  suffix_cache: Map<string, number[]>
  constructor(words: string[]) {
    this.prefix = new Trie()
    this.suffix = new Trie1()
    this.prefix_cache = new Map()
    this.suffix_cache = new Map()
    for (let i = 0; i < words.length; i++) {
      this.prefix.insert(words[i], i)
      this.suffix.insert(words[i], i)
    }
  }

  f(prefix: string, suffix: string): number {
    let prefix_list: number[]
    if (this.prefix_cache.has(prefix)) {
      prefix_list = this.prefix_cache.get(prefix) as number[]
    } else {
      prefix_list = this.prefix.search(prefix)
      this.prefix_cache.set(prefix, prefix_list)
    }

    let suffix_list: number[]
    if (this.suffix_cache.has(suffix)) {
      suffix_list = this.suffix_cache.get(suffix) as number[]
    } else {
      suffix_list = this.suffix.search(suffix)
      this.suffix_cache.set(suffix, suffix_list)
    }
    let p_index = prefix_list.length - 1
    let s_index = suffix_list.length - 1
    while (p_index >= 0 && s_index >= 0) {
      const p_item = prefix_list[p_index]
      const s_item = suffix_list[s_index]
      if (p_item === s_item) {
        return p_item
      }
      if (p_item > s_item) {
        p_index--
      } else {
        s_index--
      }
    }

    return -1
  }
}

class TrieNode {
  next: any
  Weights_list: number[]
  constructor() {
    this.next = {}
    this.Weights_list = []
  }
}

class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }
  insert(word: string, Weights: number): void {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) {
        node.next[word[i]] = new TrieNode()
      }
      node.Weights_list.push(Weights)
      node = node.next[word[i]]
    }
    node.Weights_list.push(Weights)
    return
  }
  search(word: string): number[] {
    let node = this.root
    if (word.length === 0) return node.Weights_list
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) return []
      node = node.next[word[i]]
    }
    return node.Weights_list
  }
}
class Trie1 {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }
  insert(word: string, Weights: number): void {
    let node = this.root
    for (let i = word.length - 1; i >= 0; i--) {
      if (!node.next[word[i]]) {
        node.next[word[i]] = new TrieNode()
      }
      node.Weights_list.push(Weights)
      node = node.next[word[i]]
    }
    node.Weights_list.push(Weights)
    return
  }
  search(word: string): number[] {
    let node = this.root
    if (word.length === 0) return node.Weights_list
    for (let i = word.length - 1; i >= 0; i--) {
      if (!node.next[word[i]]) return []
      node = node.next[word[i]]
    }
    return node.Weights_list
  }
}


var obj = new WordFilter(["apple", "aple", "weapl", 'heap', 'heapp'])
var param_1 = obj.f('a', 'e')
var param_2 = obj.f('hea', 'p')
console.log()
// @lc code=end


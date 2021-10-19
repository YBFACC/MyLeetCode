/*
 * @Author: yubingfeng
 * @Date: 2021-10-19 08:44:34
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-19 17:14:23
 * @Description: 参考自己--字典树
 */

class obj {
  next?: obj
  isEnd?: boolean
  constructor() {
    this.next = {}
    this.isEnd = false
  }
}

class WordDictionary {
  root: obj
  constructor() {
    this.root = new obj()
  }

  addWord(word: string): void {
    if (word.length === 0) return
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) {
        node.next[word[i]] = new obj()
      }
      node = node.next[word[i]]
    }
    node.isEnd = true
    return
  }

  search(word: string): boolean {
    if (word.length === 0) return false

    return this.dfs(this.root, word)
  }
  dfs(node: obj, word: string): boolean {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === '.') {
        const keys = Reflect.ownKeys(node.next)
        for (const key of keys) {
          const temp = this.dfs(node.next[key], word.slice(i + 1))
          if (temp) return true
        }
      }
      if (node.next[word[i]]) {
        node = node.next[word[i]]
      } else {
        return false
      }
    }
    return node.isEnd
  }
}


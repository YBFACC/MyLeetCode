/*
 * @lc app=leetcode.cn id=792 lang=typescript
 *
 * [792] 匹配子序列的单词数
 */

//自己--前缀树指针集合
//根据匹配来匹配子树中是否有下个字符

// @lc code=start
function _numMatchingSubseq(S: string, words: string[]): number {
  const trie = new Trie()
  for (const word of words) {
    trie.insert(word)
  }
  let count = 0
  let set = [trie.root]
  for (const s of S) {
    const temp = []
    for (const item of set) {
      if (item.next[s]) {
        const child = item.next[s] as TrieNode
        count += child.count
        child.count = 0
        if (Reflect.ownKeys(child.next).length === 0) {
          count += child.count
        } else {
          temp.push(item.next[s])
        }
        delete item.next[s]
        if (Reflect.ownKeys(item.next).length !== 0) {
          temp.push(item)
        }
      } else {
        temp.push(item)
      }
    }
    set = temp
  }
  return count
};

class TrieNode {
  next: any

  count = 0
  constructor() {
    this.next = {}

  }
}

class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }
  insert(word: string): void {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) {
        node.next[word[i]] = new TrieNode()
      }
      node = node.next[word[i]]
    }
    node.count++
    return
  }
}

// @lc code=end

//copy--桶存贮每个单词的首字母

var numMatchingSubseq = function (S, words) {
  let bucket = Array.from({ length: 26 }, () => [])
  for (let word of words) {
    bucket[word.charCodeAt(0) - 97].push(word)
  }
  let count = 0
  for (let c of S) {
    let list = bucket[c.charCodeAt(0) - 97]
    bucket[c.charCodeAt(0) - 97] = []
    let len = list.length
    for (let i = 0; i < len; i++) {
      let item = list[i]
      if (item.length === 1) {
        count++
      }
      else {
        const next = item.slice(1)
        bucket[next.charCodeAt(0) - 97].push(next)
      }
    }

  }
  return count
};


numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"])

numMatchingSubseq(
  "rwpddkvbnnuglnagtvamxkqtwhqgwbqgfbvgkwyuqkdwhzudsxvjubjgloeofnpjqlkdsqvruvabjrikfwronbrdyyjnakstqjac"
  , ["wpddkvbnn", "lnagtva", "kvbnnuglnagtvamxkqtwhqgwbqgfbvgkwyuqkdwhzudsxvju", "rwpddkvbnnugln", "gloeofnpjqlkdsqvruvabjrikfwronbrdyyj", "vbgeinupkvgmgxeaaiuiyojmoqkahwvbpwugdainxciedbdkos", "mspuhbykmmumtveoighlcgpcapzczomshiblnvhjzqjlfkpina", "rgmliajkiknongrofpugfgajedxicdhxinzjakwnifvxwlokip", "fhepktaipapyrbylskxddypwmuuxyoivcewzrdwwlrlhqwzikq", "qatithxifaaiwyszlkgoljzkkweqkjjzvymedvclfxwcezqebx"]
)
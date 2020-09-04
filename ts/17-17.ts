//参考--N^2logM降低到NlogM
class TrieNode_1717 {
  next: any
  index: number
  value: string
  constructor() {
    this.next = {}
    this.index = -1
    this.value = ''
  }
}

class Trie_1717 {
  root: TrieNode_1717
  constructor(list: string[]) {
    this.root = new TrieNode_1717()
    list.forEach((word, index) => this.insert.call(this, word, index))
  }
  insert(word: string, i: number): void {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) {
        node.next[word[i]] = new TrieNode_1717()
      }
      node = node.next[word[i]]
    }
    node.index = i
    node.value = word
    return
  }
  search(word: string, list: number[][], index: number): void {
    let node = this.root
    for (let i = 0; i <= word.length; i++) {
      if (node.index !== -1) {
        list[node.index].push(i + index - node.value.length)
      }
      if (!node.next[word[i]]) return
      node = node.next[word[i]]
    }
    return
  }
}

function multiSearch(big: string, smalls: string[]): number[][] {
  if (smalls.join('').length === 0) return [[]]
  const Len = smalls.length
  const trie = new Trie_1717(smalls)
  const list = Array.from({ length: Len }, () => [])
  for (let i = 0; i < big.length; i++) {
    let str = big.slice(i)
    trie.search(str, list, i)
  }
  return list
};

multiSearch("mississippi"
  , ["is", "ppi", "hi", "sis", "i", "ssippi"])
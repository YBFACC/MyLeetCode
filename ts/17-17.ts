//参考--trie勉强通过
class TrieNode_1717 {
  next: any
  index: number
  constructor() {
    this.next = {}
    this.index = -1
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
    return
  }
  search(word: string): number {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) return -1
      node = node.next[word[i]]
    }
    return node.index
  }
}

function multiSearch(big: string, smalls: string[]): number[][] {
  const Len = smalls.length
  const trie = new Trie_1717(smalls)
  const list: number[][] = Array.from({ length: Len }, () => [])
  for (let i = 0; i < big.length; i++) {
    for (let j = i + 1; j <= big.length; j++) {
      const str = big.slice(i, j)
      const res = trie.search(str)
      if (res !== -1) {
        list[res].push(i)
      }
    }
  }
  return list
};

multiSearch("mississippi"
  , ["is", "ppi", "hi", "sis", "i", "ssippi"])
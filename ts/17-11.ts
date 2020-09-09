//自己--Trie+双指针
interface TrieNext {
  [propName: string]: TrieNode
}

class TrieNode {
  next: TrieNext
  index: number[]
  isEnd: boolean
  constructor() {
    this.next = {}
    this.index = []
    this.isEnd = false
  }
}

class Trie_17_11 {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }
  insert(word: string, i: number): void {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) {
        node.next[word[i]] = new TrieNode()
      }
      node = node.next[word[i]]
    }
    node.isEnd = true
    node.index.push(i)
    return
  }
  search(word: string): number[] {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) {
        return []
      }
      node = node.next[word[i]]
    }
    return node.index
  }
}

function findClosest(words: string[], word1: string, word2: string): number {
  const trie = new Trie_17_11()
  for (let i = 0; i < words.length; i++) {
    trie.insert(words[i], i)
  }
  const listA = trie.search(word1)
  const listB = trie.search(word2)
  let distance = words.length
  let i1 = 0
  let i2 = 0
  while (i1 < listA.length && i2 < listB.length) {
    const num1 = listA[i1]
    const num2 = listB[i2]
    const temp = Math.abs(num1 - num2)

    distance = temp < distance ? temp : distance
    if (num1 < num2) {
      i1++
    } else {
      i2++
    }
  }
  return distance
};

findClosest(["I", "am", "a", "student", "from", "a", "university", "in", "a", "city"], "a", "student")
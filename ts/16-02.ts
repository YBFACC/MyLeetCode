//自己--前缀树
class WordsFrequency {
  tire: Trie
  constructor(book: string[]) {
    this.tire = new Trie()
    for (const item of book) {
      this.tire.insert(item)
    }
  }

  get(word: string): number {
    return this.tire.search(word)
  }
}

class TrieNode {
  next: any
  isEnd: number
  constructor() {
    this.next = {}
    this.isEnd = 0
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
    node.isEnd++
    return
  }
  search(word: string): number {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (node.next[word[i]]) {
        node = node.next[word[i]]
      } else {
        return 0
      }
    }
    return node.isEnd
  }
}

var obj = new WordsFrequency([
  'i',
  'have',
  'an',
  'apple',
  'he',
  'have',
  'a',
  'pen'
])
var param_1 = obj.get('an')
console.log()

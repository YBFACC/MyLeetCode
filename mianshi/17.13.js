/**
 * 参考--dp+逆序trie
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  let trie = new Trie()
  let dp = Array.from({ length: sentence.length + 1 }, () => Infinity)

  for (let i = 0; i < dictionary.length; i++) {
    trie.inset(dictionary[i])
  }
  dp[0] = 0
  for (let i = 1; i <= sentence.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      let str = sentence.slice(j, i)
      if (trie.find(str)) {
        dp[i] = Math.min(dp[j], dp[i])
      }
    }
    dp[i] = Math.min(dp[i - 1] + 1, dp[i])
  }
  return dp[sentence.length]
}

function Trie() {
  this.node = new TrieNode()
}

function TrieNode() {
  this.next = {}
  this.isEnd = false
}

Trie.prototype.inset = function (world) {
  let node = this.node

  for (let i = world.length - 1; i >= 0; i--) {
    if (!node.next[world[i]]) {
      node.next[world[i]] = new TrieNode()
    }
    node = node.next[world[i]]
  }
  node.isEnd = true
}

Trie.prototype.find = function (world) {
  let node = this.node

  for (let i = world.length - 1; i >= 0; i--) {
    if (node.next[world[i]]) {
      node = node.next[world[i]]
    } else {
      return false
    }
  }
  return node.isEnd
}

respace(
  [
    'sssjjs',
    'hschjf',
    'hhh',
    'fhjchfcfshhfjhs',
    'sfh',
    'jsf',
    'cjschjfscscscsfjcjfcfcfh',
    'hccccjjfchcffjjshccsjscsc',
    'chcfjcsshjj',
    'jh',
    'h',
    'f',
    's',
    'jcshs',
    'jfjssjhsscfc'
  ],
  'sssjjssfshscfjjshsjjsjchffffs'
)

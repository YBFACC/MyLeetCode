//参考--先排序--递归
function longestWord(words: string[]): string {
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length > b.length ? -1 : 1
    } else {
      return a > b ? 1 : -1
    }
  })
  const set: Set<string> = new Set(words)

  for (const word of words) {
    set.delete(word)
    if (find(word, set)) return word
  }

  return ''
}

function find(word: string, set: Set<string>): boolean {
  if (word.length === 0) return true
  for (let i = 1; i <= word.length; i++) {
    if (set.has(word.slice(0, i)) && find(word.slice(i), set)) {
      return true
    }
  }
  return false
}

console.log(
  longestWord(['cat', 'banana', 'dog', 'nana', 'walk', 'walker', 'dogwalker'])
)


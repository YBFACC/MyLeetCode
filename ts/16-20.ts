//参考--回溯超时--字母变数字
function getValidT9Words(num: string, words: string[]): string[] {
  if (num.length === 0 || words.length === 0) return []

  const res: string[] = []
  const obj: any = {
    'a': 2,
    'b': 2,
    'c': 2,
    'd': 3,
    'e': 3,
    'f': 3,
    'g': 4,
    'h': 4,
    'i': 4,
    'j': 5,
    'k': 5,
    'l': 5,
    'm': 6,
    'n': 6,
    'o': 6,
    'p': 7,
    'q': 7,
    'r': 7,
    's': 7,
    't': 8,
    'u': 8,
    'v': 8,
    'w': 9,
    'x': 9,
    'y': 9,
    'z': 9,
  }
  for (const word of words) {
    let temp = ''
    for (let i = 0; i < word.length; i++) {
      temp += obj[word[i]]
    }
    if (temp === num) res.push(word)
  }

  return res
};

getValidT9Words("8733",
  ["tree", "used"])
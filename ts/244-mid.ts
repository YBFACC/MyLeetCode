//提示--双指针
//有多个字符，用map统计

class WordDistance {
  word: Map<string, number[]>
  constructor(wordsDict: string[]) {
    this.word = new Map()
    const map = this.word
    for (let i = 0; i < wordsDict.length; i++) {
      const word = wordsDict[i]
      if (!map.has(word)) {
        map.set(word, [])
      }
      map.get(word).push(i)
    }
  }

  shortest(word1: string, word2: string): number {
    const map = this.word
    let res = Infinity
    let list1 = map.get(word1), list2 = map.get(word2), i1 = 0, i2 = 0
    while (i1 < list1.length && i2 < list2.length) {
      res = Math.min(res, Math.abs(list1[i1] - list2[i2]))
      if (list1[i1] < list2[i2]) {
        i1++
      } else {
        i2++
      }
    }
    return res
  }
}
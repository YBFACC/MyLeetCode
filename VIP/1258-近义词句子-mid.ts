//提示--查并集+深搜

function generateSentences(synonyms: string[][], text: string): string[] {
  const list = text.split(' ')
  const map = new Map()
  const mfs = new MFS([])
  for (const item of synonyms) {
    mfs.merge(item[0], item[1])
  }
  for (const item of synonyms) {
    const root = mfs.find(item[0])
    if (!map.has(root)) map.set(root, new Set())
    map.get(root).add(item[0])
    map.get(root).add(item[1])
  }

  const res: string[] = []

  const dfs = function (index: number, temp: string[]) {
    if (index === list.length) {
      res.push(temp.join(' '))
      return
    }
    const floor = mfs.find(list[index])
    if (!floor || !map.has(floor)) {
      temp.push(list[index])
      dfs(index + 1, temp)
      temp.pop()
    } else {
      const str = [...map.get(floor)].sort()
      for (const item of str) {
        temp.push(item)
        dfs(index + 1, temp)
        temp.pop()
      }
    }
  }
  dfs(0, [])

  return res
};

class MFS {
  root: any
  constructor(arr: any[]) {
    this.root = {}
    arr.forEach(name => {
      this.root[name] = name
    })
  }
  merge(a: any, b: any) {
    if (!this.root[a]) this.root[a] = a
    if (!this.root[b]) this.root[b] = b
    let ar = this.find(a)
    let br = this.find(b)
    if (ar === br) return // 相同表示已经有根了
    if (ar > br) {
      // 以字典序小的 为根
      this.root[ar] = br
    } else {
      this.root[br] = ar
    }
  }
  find(m: any) {
    let mr = m
    while (this.root[mr] !== mr) {
      // 等于自身时, 表示自身就是根了
      mr = this.root[mr]
    }
    return mr
  }
}

generateSentences(
  [["happy", "joy"], ["sad", "sorrow"], ["joy", "cheerful"]],
  "I am happy today but was sad yesterday")
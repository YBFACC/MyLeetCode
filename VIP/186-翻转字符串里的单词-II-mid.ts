//提示--不是空间O1
//空间O1--先全部翻转--然后单词翻转
function reverseWords(s: string[]): void {
  const list: string[][] = []
  let temp = []
  const Len = s.length
  for (let i = 0; i < Len; i++) {
    if (s[i] !== ' ') {
      temp.push(s[i])
    } else {
      list.push(temp.slice())
      temp = []
    }
  }
  list.push(temp)

  let index = 0

  while (list.length > 0) {
    const curr = list.pop() as string[]
    for (const item of curr) {
      s[index++] = item
    }
    if (index < Len)
      s[index++] = ' '
  }

  return
};
reverseWords(["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"])
//["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]

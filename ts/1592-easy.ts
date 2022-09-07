
/**
 * 自己－－模拟题
 * @param text 
 * @returns 
 */
function reorderSpaces(text: string): string {
  const wordList = text.match(/\w+/g) as string[];
  const chartNum = wordList.join('').length
  const blankSpace = text.length - chartNum
  if (wordList.length === 1) {
    return wordList[0] + ' '.repeat(blankSpace)
  }
  const eachSpace = Math.trunc(blankSpace / (wordList.length - 1))
  const remain = blankSpace - eachSpace * (wordList.length - 1)

  let res = ''
  wordList.forEach((word, index) => {
    res += word
    if (index !== wordList.length - 1) res += ' '.repeat(eachSpace)

  })

  res += ' '.repeat(remain)
  return res
};

reorderSpaces("  hello")
reorderSpaces("  walks  udp package   into  bar a")
reorderSpaces(" practice   makes   perfect")
reorderSpaces("  this   is  a sentence ")
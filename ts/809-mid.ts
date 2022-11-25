
/**
 * 参考－－正则
 * @param s 
 * @param words 
 * @returns 
 */
function expressiveWords(s: string, words: string[]): number {
  let rexStr = '^'
    + s.match(/([a-z])\1*/g)?.map(e => {
      return e.length >= 3 ? e[0] + `{1,${e.length}}` : e
    }).join('')
    + '$'
  let rex = new RegExp(rexStr)

  return words.filter(word => rex.test(word)).length
};

expressiveWords("heeellooo", ["hello", "hi", "helo"])
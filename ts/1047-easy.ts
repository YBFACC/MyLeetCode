
//自己--递归
//官方是栈

function removeDuplicates(S: string): string {
  if (S.length === 0) return ""
  let temp = ""
  let index = 0
  while (index + 1 < S.length) {
    if (S[index] === S[index + 1]) {
      index += 2
    } else {
      temp += S[index]
      index++
    }
  }
  if (index + 1 === S.length) {
    temp += S[index]
  }
  if (temp.length === S.length) {
    return S
  } else {
    return removeDuplicates(temp)
  }
};

console.log(removeDuplicates("abbaca"))
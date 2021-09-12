//参考--栈
//相对位置会影响结果

function checkValidString(s: string): boolean {
  const list = [], star = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === '(') {
      list.push(i)
    } else if (char === '*') {
      star.push(i)
    } else {
      if (list.length > 0) {
        list.pop()
      } else if (star.length > 0) {
        star.pop()
      } else {
        return false
      }
    }
  }

  while (list.length > 0 && star.length > 0) {
    const left = list.pop() as number
    const _star = star.pop() as number
    if (_star < left) return false
  }
  return list.length === 0
};

console.log(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"))
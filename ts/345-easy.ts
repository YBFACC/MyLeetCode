//自己--栈
//可以使用双指针

function reverseVowels(s: string): string {
  const list = []
  let str = ''
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
      char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
      list.push(char)
    }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
      char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
      str += list.pop()
    } else {
      str += char
    }
  }
  return str
};

reverseVowels("hello")
//自己--偷懒
function isValid(s: string): boolean {
  while (/\(\)|\{\}|\[\]/.test(s)) {
    s = s.replace('()', '')
    s = s.replace('[]', '')
    s = s.replace('{}', '')
  }
  return s.length === 0
}

isValid('({[])')

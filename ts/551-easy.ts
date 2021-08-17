//自己--模拟

function checkRecord(s: string): boolean {
  let a_count = 0, l_count = 0
  for (const item of s) {
    if (item === 'A') {
      a_count++
      l_count = 0
    }
    else if (item === 'L') { l_count++ }
    else {
      l_count = 0
    }
    if (a_count > 1 || l_count >= 3) {
      return false
    }
  }
  return true
};

checkRecord("PPALLL")
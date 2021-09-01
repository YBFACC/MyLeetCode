//自己--字符串

function compareVersion(version1: string, version2: string): number {
  const v1 = version1.split('.')
  const v2 = version2.split('.')
  const MAX = Math.max(v1.length, v2.length)
  push(v1, MAX)
  push(v2, MAX)
  while (v1.length !== 0) {
    const temp1 = +(v1.shift() as string)
    const temp2 = +(v2.shift() as string)
    if (temp1 > temp2) {
      return 1
    }
    if (temp1 < temp2) {
      return -1
    }
  }
  return 0
};

function push(v: string[], max: number) {
  while (v.length < max) {
    v.push('0')
  }
}

compareVersion("1.1"
  , "1.10")
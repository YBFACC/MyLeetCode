//copy--hash表
//一个长度26的数组，记录每一个字母次数，作为hash值

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map()
  for (const item of strs) {
    const temp = item.split('').sort().join('')
    if (map.has(temp)) {
      map.get(temp).push(item)
    } else {
      map.set(temp, [item])
    }
  }
  return [...map.values()]
};

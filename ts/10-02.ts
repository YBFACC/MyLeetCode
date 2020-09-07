//自己--朴素的解法
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
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

//自己--滑窗模版题--hash字符串

function lengthOfLongestSubstringTwoDistinct(s: string): number {
  const hash = Array.from({ length: 123 }, () => 0)
  let left = 0
  let right = 0
  let res = 0
  const Len = s.length
  let sum = 0
  while (right < Len) {
    const code = get_code(s[right])
    if (hash[code]++ === 0) sum++
    while (sum > 2) {
      const del = get_code(s[left])
      if (--hash[del] === 0) sum--
      left++
    }
    res = Math.max(res, right - left + 1)
    right++
  }
  res = Math.max(res, right - left)
  return res
};

function get_code(char: string): number {
  return char.charCodeAt(0)
}

lengthOfLongestSubstringTwoDistinct("ababffzzeee")

lengthOfLongestSubstringTwoDistinct("abZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYX"
)
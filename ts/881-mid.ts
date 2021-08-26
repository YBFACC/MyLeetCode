//自己--贪心-排序-双指针

function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b)
  const Len = people.length
  let left = 0, right = Len - 1, res = 0
  while (left < right) {
    const w = people[left] + people[right]
    if (w <= limit) {
      left++
    }
    right--
    res++
  }
  if (left <= right) res++
  return res
};

numRescueBoats([3, 5, 3, 4], 5)
numRescueBoats([3, 2, 2, 1], 3)
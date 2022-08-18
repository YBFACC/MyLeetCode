/**
 * 自己－－写复杂了－－统计词频
 * 有更简单的方法
 * @param nums 
 * @returns 
 */
function maxEqualFreq(nums: number[]): number {
  const num_count = new Map()
  nums.forEach((num: number) => {
    if (!num_count.has(num)) {
      num_count.set(num, 1);
    } else {
      num_count.set(num, num_count.get(num) + 1);
    }
  })
  const count_num: Map<number, number[]> = new Map()
  num_count.forEach((value: number, key: number) => {
    if (!count_num.has(value)) {
      count_num.set(value, [])
    }
    count_num.get(value)?.push(key)
  })
  for (let i = nums.length - 1; i >= 0; i--) {
    if (count_num.size === 2) {
      const count_1 = count_num.get(1) ?? []
      const max_count = Math.max(...count_num.keys())
      const min_count = Math.min(...count_num.keys())
      if (count_1.length === 1 || (max_count - 1 === min_count && count_num.get(max_count)?.length === 1)) {
        return i + 1
      }
    }
    if (count_num.size === 1) {
      const count_1 = count_num.get(1) ?? []
      const key = [...count_num.keys()][0]
      const count_key = count_num.get(key) ?? []
      if (count_1.length >= 1 || count_key.length === 1) {
        return i + 1
      }
    }

    const current = nums[i]
    const count = num_count.get(current);
    num_count.set(current, count - 1);

    let numList = count_num.get(count) ?? []
    numList = numList.filter((value: number) => value !== current)
    if (numList.length > 0) {
      count_num.set(count, numList)
    } else {
      count_num.delete(count)
    }

    if (count > 1) {
      const lessList = count_num.get(count - 1) ?? []
      lessList.push(current)
      count_num.set(count - 1, lessList)
    }
  }

  return 0
};

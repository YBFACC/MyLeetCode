import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--贪心-小根堆

function magicTower(nums: number[]): number {
  let all = 1
  nums.forEach((v, k) => all += v)
  if (all < 1) return -1
  let sum = 1
  let count = 0
  const heap = new Heap<number>()
  for (const num of nums) {
    sum += num
    if (num < 0) {
      heap.insert(num)
    }
    if (sum < 1) {
      const min = heap.extract() as number
      sum -= min
      count++
    }
  }
  return count
};

console.log(magicTower([-200, -300, 400, 0]))
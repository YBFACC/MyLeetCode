import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

/**
 * 自己--nlgn
 * 大顶堆存　《＝ｘ　，小顶堆存》ｘ
 * @param arr 
 * @param k 
 * @param x 
 * @returns 
 */
function findClosestElements(arr: number[], k: number, x: number): number[] {
  const moreX = new Heap<number>(), lessX = new Heap<number>([], (a: number, b: number) => {
    return a < b
  });
  const res: number[] = []

  arr.forEach(num => {
    if (num <= x) {
      lessX.offer(num)
    } else {
      moreX.offer(num)
    }
  })

  while (k-- > 0) {
    const more = moreX.peek() ?? -Infinity
    const less = lessX.peek() ?? -Infinity
    if (Math.abs(x - more) < Math.abs(x - less)) {
      res.push(more)
      moreX.poll()
    } else {
      res.push(less)
      lessX.poll()
    }

  }
  res.sort((a, b) => a - b)
  return res
};

findClosestElements([1, 2, 3, 4, 5], 4, 3)
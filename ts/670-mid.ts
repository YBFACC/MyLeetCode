import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

type heapContainer = string[]

/**
 * 自己－－贪心
 * 将大的数字往前提
 * @param num 
 * @returns 
 */
function maximumSwap(num: number): number {
  const maxHeap = new Heap<heapContainer>([], (a: heapContainer, b: heapContainer) => {
    if (a[0] === b[0]) {
      return a[1] <= b[1]
    }
    return a[0] <= b[0]
  })

  const str = num + ''
  for (let i = 0; i < str.length; i++) {
    const temp: heapContainer = [str[i], i + '']
    maxHeap.offer(temp)
  }

  let res = num

  while (maxHeap.size > 0) {
    const maxContainer = maxHeap.poll() as heapContainer

    for (let i = 0; i < str.length; i++) {
      if (+maxContainer[1] <= i) break

      const numList: string[] = str.split('')
      const temp = numList[i]
      numList[i] = maxContainer[0]
      numList[+maxContainer[1]] = temp

      const tempNum = +numList.join("")
      res = Math.max(res, tempNum)
    }
    if (res > num) break
  }

  return res
};



maximumSwap(98368)
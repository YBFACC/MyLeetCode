import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

/**
 * 自己－－链表
 * @param head 
 * @param nums 
 * @returns 
 */
function numComponents(head: ListNode | null, nums: number[]): number {
  if (head === null) return 0;
  let res = 0;
  const set = new Set(nums);

  while (head) {
    const value = head.val
    if (set.has(value)) {
      while (head) {
        const valueTemp = head.val
        if (!set.has(valueTemp)) break
        head = head.next
      }
      res++
    }
    head = head?.next ?? null
  }
  return res
};

numComponents(ListNode.create([0, 1, 2]), [0, 2])
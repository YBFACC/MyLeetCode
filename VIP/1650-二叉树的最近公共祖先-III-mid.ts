import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node } from 'lc-tool';

//自己--easy

function lowestCommonAncestor(p: Node | null, q: Node | null): Node | null {
  if (!p || !q) return null
  const set = new Set()
  while (p) {
    set.add(p)
    p = p.parent
  }

  while (q) {
    if (set.has(q)) {
      return q
    }
    q = q.parent
  }
  return null
};
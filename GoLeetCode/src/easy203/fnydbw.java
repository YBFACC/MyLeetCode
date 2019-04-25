package easy203;

import easy148.ListNode;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class fnydbw {
    public ListNode removeElements(ListNode head, int val) {
    if(head==null) return null;
    head.next=removeElements(head.next,val);
    return head.val==val? head.next:head;
    }

}

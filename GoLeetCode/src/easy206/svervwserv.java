package easy206;


import easy21.ListNode;

public class svervwserv {



    public ListNode reverseList(ListNode head) {
        ListNode Head=head;
        ListNode curr=head;
        ListNode pre=null;
        while (curr!=null){
            ListNode temp=curr.next;
            if(temp==null){Head=curr;}
            curr.next=pre;
            pre=curr;
            curr=temp;
        }
    return Head;
    }

}

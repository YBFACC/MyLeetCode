
//不知道O1的解法

var printLinkedListInReverse = function(head) {
  if (!head) {
      return
  }
  printLinkedListInReverse(head.getNext())
  head.printValue()
};

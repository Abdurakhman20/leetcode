class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head = new ListNode();
  let node = head;

  let reminder = 0;
  while(l1 || l2 || reminder) {
      if(l1) {
          reminder += l1.val;
          l1 = l1.next;
      }
      if(l2) {
          reminder += l2.val;
          l2 = l2.next;
      }
      node.next = new ListNode(reminder % 10);
      reminder = Math.floor(reminder / 10);
      node = node.next;
  }

  return head.next;
};
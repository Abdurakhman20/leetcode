export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  let reversed = null;
  let temp = null;

  if(!head) {
      return null;
  }
  while(head) {
      temp = head.next;
      head.next = reversed;
      reversed = head;
      head = temp;
  }

  return reversed;
};
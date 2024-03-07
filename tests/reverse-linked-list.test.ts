import { describe, test, expect } from "@jest/globals";
import { reverseList, ListNode } from "../easy/linkedList/reverse-linked-list";

describe("reverse linked list", () => {
  test("input: head = [1, 2, 3], output: [3, 2, 1]", () => {
    let head = new ListNode(1, new ListNode(2, new ListNode(3)));
    
    const res = reverseList(head);

    expect(res?.val).toBe(3);
    expect(res?.next?.val).toBe(2);
    expect(res?.next?.next?.val).toBe(1);
  });
})
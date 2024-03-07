import { describe, test, expect } from "@jest/globals";
import { addTwoNumbers, ListNode } from "../medium/linkedList/add-two-numbers";

describe("add two numbers", () => {
  test("input: l1=[2, 4, 3], l2=[5, 6, 4] output: [7, 0, 8]", () => {
    let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

    const res = addTwoNumbers(l1, l2);

    expect(res?.val).toBe(7);
    expect(res?.next?.val).toBe(0);
    expect(res?.next?.next?.val).toBe(8);
  });

  test("input: l1=[0], l2=[0] output: [0]", () => {
    let l1 = new ListNode(0);
    let l2 = new ListNode(0);

    const res = addTwoNumbers(l1, l2);

    expect(res?.val).toBe(0);
  });

  test("input: l1=[9,9,9,9,9,9,9], l2=[9,9,9,9] output: [8,9,9,9,0,0,0,1]", () => {
    let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
    let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

    const res = addTwoNumbers(l1, l2);

    expect(res?.val).toBe(8);
    expect(res?.next?.val).toBe(9);
    expect(res?.next?.next?.val).toBe(9);
    expect(res?.next?.next?.next?.val).toBe(9);
    expect(res?.next?.next?.next?.next?.val).toBe(0);
    expect(res?.next?.next?.next?.next?.next?.val).toBe(0);
    expect(res?.next?.next?.next?.next?.next?.next?.val).toBe(0);
    expect(res?.next?.next?.next?.next?.next?.next?.next?.val).toBe(1);
  });
})
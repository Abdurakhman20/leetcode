import {describe, expect, test} from '@jest/globals';
import { hasCycle, ListNode } from "../easy/linkedList/linked-list-cycle";

describe("linked-list-cycle", () => {
  test("input: head = [3, 2, 0, -4], output: true", () => {
    const node1 = new ListNode(3);
    const node2 = new ListNode(2);
    const node3 = new ListNode(0);
    const node4 = new ListNode(-4);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;

    expect(hasCycle(node1)).toEqual(true);
  });

  test("input: head = [1, 2], output: true", () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);

    node1.next = node2;
    node2.next = node1;
    
    expect(hasCycle(node1)).toEqual(true);
  });

  test("input: head = [1], output: false", () => {
    const node1 = new ListNode(1);

    expect(hasCycle(node1)).toEqual(false);
  });
})
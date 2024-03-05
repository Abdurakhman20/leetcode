import {describe, expect, test} from '@jest/globals';
import { mergeTwoLists, ListNode } from "../easy/linkedList/merge-two-sorted-lists";

describe('mergeTwoLists', () => {
  test(`input: list1 = [1, 2, 4], list2 = [1, 3, 4], 
        output: [1, 1, 2, 3, 4, 4]`, () => {

    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

    const mergedList = mergeTwoLists(list1, list2);

    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next?.val).toBe(1);
    expect(mergedList?.next?.next?.val).toBe(2);
    expect(mergedList?.next?.next?.next?.val).toBe(3);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(4);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(4);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });

  test(`input: list1 = [2, 3, 4], list2 = [1, 5, 6], 
        output: [1, 2, 3, 4, 5, 6]`, () => {
          
    const list1 = new ListNode(2, new ListNode(3, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(5, new ListNode(6)));

    const mergedList = mergeTwoLists(list1, list2);

    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next?.val).toBe(2);
    expect(mergedList?.next?.next?.val).toBe(3);
    expect(mergedList?.next?.next?.next?.val).toBe(4);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(5);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(6);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });

  test('should handle empty lists', () => {
    const mergedList = mergeTwoLists(null, null);
    expect(mergedList).toBeNull();
  });
});
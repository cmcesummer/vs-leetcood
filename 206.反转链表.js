/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (58.89%)
 * Total Accepted:    50.8K
 * Total Submissions: 84.3K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return null;
    const valueArray = [head.val];

    while (head.next) {
        head = head.next;
        valueArray.push(head.val);
    }

    let newTree = new ListNode(0);
    const cache = newTree;
    for (let i = valueArray.length; i > 0; i--) {
        newTree.next = new ListNode(valueArray[i - 1]);
        newTree = newTree.next;
    }

    return cache.next;
};

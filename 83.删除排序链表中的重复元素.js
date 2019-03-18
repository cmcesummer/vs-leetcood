/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (44.35%)
 * Total Accepted:    19.2K
 * Total Submissions: 43.3K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 *
 * 示例 1:
 *
 * 输入: 1->1->2
 * 输出: 1->2
 *
 *
 * 示例 2:
 *
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
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
// var deleteDuplicates = function (head) {
//     const cache = [];
//     function min(source) {
//         const node = source.next;
//         if (!node) return
//         if (!cache.includes(node.val)) {
//             cache.push(node.val);
//             min(node.next);
//         } else {
//             source.next = node.next
//             min(source)
//         }
//     }
//     const next = new ListNode(0);
//     next.next = head;
//     min(next);
//     return next.next
// };
var deleteDuplicates = function (head) {
    if (head === null) return null;
    var current = head;
    while (current !== null) {
        while (current.next !== null && current.val === current.next.val) {
            current.next = current.next.next;
        }
        current = current.next;
    }
    return head;
};

/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (35.51%)
 * Total Accepted:    21K
 * Total Submissions: 58.4K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 *
 * 示例 1:
 *
 * 输入: 1->2
 * 输出: false
 *
 * 示例 2:
 *
 * 输入: 1->2->2->1
 * 输出: true
 *
 *
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) return true;
    const cache = [head.val];
    while (head.next) {
        head = head.next;
        cache.push(head.val);
    }
    if (cache.length < 2) return true;
    let end, start;
    if (cache.length % 2 === 0) {
        end = start = cache.length / 2;
    } else {
        end = (cache.length - 1) / 2;
        start = end + 1;
    }
    const arr1 = cache.slice(0, end);
    const arr2 = cache.slice(start);
    return arr1.join("") === arr2.reverse().join("");
};

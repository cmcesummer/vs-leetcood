/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (43.15%)
 * Total Accepted:    32.9K
 * Total Submissions: 76.2K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = 0;
    while (nums2.length > 0) {
        if (i === m + n - nums2.length) {
            nums1.splice(i, nums1.length - i, ...nums2);
            return;
        }
        const i1 = nums1[i];
        const i2 = nums2[0];
        if (i1 >= i2) {
            nums1.splice(i, 0, i2);
            nums2.shift();
        }
        i++;
    }
    if (nums1.length > m + n) {
        nums1.splice(m + n, nums1.length - m - n);
    }
    // return nums1
};

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
// console.log(merge([0], 0, [6], 1))
// console.log(merge([2, 0], 1, [1], 1))
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3))
// console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3))
// console.log(merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6))


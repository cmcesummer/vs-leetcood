/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = [];
    for (let item of nums1) {
        if (nums2.includes(item) && !res.includes(item)) {
            res.push(item);
        }
    }
    return res;
};

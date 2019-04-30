/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//     const cache = [];
//     for (let i = 0; i < nums1.length; ) {
//         const item = nums1[i];
//         const i2 = nums2.indexOf(item);
//         if (~i2) {
//             cache.push(item);
//             nums1.splice(i, 1);
//             nums2.splice(i2, 1);
//             continue;
//         }
//         i++;
//     }
//     return cache;
// };

var intersect = function(nums1, nums2) {
    const cache = new Map();
    for (const item of nums1) {
        if (cache.has(item)) {
            cache.set(item, cache.get(item) + 1);
        } else {
            cache.set(item, 1);
        }
    }
    const res = [];
    for (const item of nums2) {
        if (cache.has(item) && cache.get(item) > 0) {
            res.push(item);
            cache.set(item, cache.get(item) - 1);
        }
    }
    return res;
};

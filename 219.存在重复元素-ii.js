/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode-cn.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (33.67%)
 * Total Accepted:    11.8K
 * Total Submissions: 35K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j
 * 的差的绝对值最大为 k。
 *
 * 示例 1:
 *
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 *
 * 示例 2:
 *
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 *
 * 示例 3:
 *
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 *
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    const map2 = new Map();
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        if (map.has(nums[i])) {
            let arr = [];
            if (map2.has(nums[i])) {
                arr = map2.get(nums[i]);
            } else {
                arr = map.get(nums[i]);
            }
            arr.push(i);
            map2.set(nums[i], arr);
        } else {
            map.set(nums[i], [i]);
        }
    }
    for (let item of [...map2.values()]) {
        if (item[1] - item[0] <= k) {
            return true;
        }
        // 下边是值为K
        const len = item.length;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                if (item[j] - item[i] <= k) {
                    return true;
                }
            }
        }
    }
    return false;
};
// console.log(containsNearbyDuplicate([99, 99]), 1);

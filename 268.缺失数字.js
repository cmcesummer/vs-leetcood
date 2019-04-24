/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// O(2n)
var missingNumber = function(nums) {
    const max = nums.length;
    const map = {};
    for (let i = 0; i < max; i++) {
        map[nums[i]] = 1;
    }
    for (let i = 0; i <= max; i++) {
        if (!map[i]) {
            return i;
        }
    }
    return 0;
};

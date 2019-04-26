/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; ) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            count++;
        } else {
            i++;
        }
    }
    nums.push(...new Array(count).fill(0));
    return nums;
};

/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let arr = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (arr.includes(n)) {
            continue;
        } else if (n > arr[0]) {
            arr = [n, arr[0], arr[1]];
        } else if (n > arr[1]) {
            arr = [arr[0], n, arr[1]];
        } else if (n > arr[2]) {
            arr[2] = n;
        }
    }
    arr = arr.filter(n => n > Number.NEGATIVE_INFINITY);
    return arr.length === 3 ? arr.pop() : arr[0];
};
// @lc code=end

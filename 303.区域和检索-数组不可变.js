/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = [nums[0]];
    for (let i = 1, length = nums.length; i < length; i++) {
        this.arr.push(this.arr[i - 1] + nums[i]);
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.arr[j] - (i === 0 ? 0 : this.arr[i - 1]);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

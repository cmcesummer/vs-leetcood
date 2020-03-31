/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1,
        j = num2.length - 1,
        cache = 0,
        sum = "";
    while (i >= 0 || j >= 0 || cache > 0) {
        const n1 = i < 0 ? 0 : num1.slice(i, i + 1) * 1;
        const n2 = j < 0 ? 0 : num2.slice(j, j + 1) * 1;
        const add = n1 + n2 + cache;
        sum = (add % 10) + sum;
        cache = Math.floor(add / 10);
        i--, j--;
    }
    return sum;
};
console.log(addStrings("5946", "32566"), 5946 + 32566);
// @lc code=end

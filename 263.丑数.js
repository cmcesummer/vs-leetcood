/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num === 1) return true;
    if (num < 1) return false;
    while (num % 2 === 0) {
        num = num / 2;
    }
    while (num % 5 === 0) {
        num = num / 5;
    }
    while (num % 3 === 0) {
        num = num / 3;
    }
    return num === 1;
};

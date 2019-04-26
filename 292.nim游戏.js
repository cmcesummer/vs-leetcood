/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim游戏
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return !(n % 4 === 0);
};

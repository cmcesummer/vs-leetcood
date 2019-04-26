/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return creatFn(3)(n);
};
function creatFn(number) {
    return function(n) {
        if (n == 0) return false;
        if (n == number || n == 1) return true;
        const log = Math.ceil(Math.log(n) / Math.log(number));
        if (Math.pow(number, log) == n || Math.pow(number, log - 1) == n) {
            return true;
        }
        return false;
    };
}

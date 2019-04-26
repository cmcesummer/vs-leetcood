/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */
/**
 * @param {number} num
 * @return {boolean}
 */
// var isPowerOfFour = function(num) {
//     return creatFn(4)(num);
// };
// function creatFn(number) {
//     return function(n) {
//         if (n == 0) return false;
//         if (n == number || n == 1) return true;
//         const log = Math.ceil(Math.log(n) / Math.log(number));
//         if (Math.pow(number, log) == n || Math.pow(number, log - 1) == n) {
//             return true;
//         }
//         return false;
//     };
// }
var isPowerOfFour = function(num) {
    return /^1(00)*$/.test(num.toString(2));
};

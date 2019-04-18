/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (26.72%)
 * Total Accepted:    15.3K
 * Total Submissions: 56.6K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 *
 * 示例:
 *
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function(n) {
//     if (n < 2) return 0;
//     let count = 0;
//     out: for (let i = 2; i < n; i++) {
//         for (let j = 2; j <= i / 2; j++) {
//             if (i % j == 0) {
//                 continue out;
//             }
//         }
//         count++;
//     }
//     return count;
// };

function countPrimes(num) {
    if (num < 2) return 0;
    const basenum = Math.pow(num, 0.5);
    const arr = new Array(num - 1).fill(1);
    arr[0] = 0;
    for (let i = 2; i <= basenum; i++) {
        for (let j = i * 2; j < num; j += i) {
            arr[j - 1] = 0;
        }
    }
    return arr.reduce((prev, total) => prev + total);
}

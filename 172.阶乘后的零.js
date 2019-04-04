/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 *
 * https://leetcode-cn.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (37.36%)
 * Total Accepted:    9.7K
 * Total Submissions: 25.8K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。
 *
 * 示例 1:
 *
 * 输入: 3
 * 输出: 0
 * 解释: 3! = 6, 尾数中没有零。
 *
 * 示例 2:
 *
 * 输入: 5
 * 输出: 1
 * 解释: 5! = 120, 尾数中有 1 个零.
 *
 * 说明: 你算法的时间复杂度应为 O(log n) 。
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
// 内存溢出 存在问题
// var trailingZeroes = function(n) {
//     if (n == 0) return 1;
//     function getNum(n) {
//         if (n == 1) return 1;
//         return n * getNum(n - 1);
//     }
//     const nu = getNum(n) + "";
//     for (let i = nu.length - 1; i >= 0; i--) {
//         if (nu[i] !== "0") {
//             return nu.length - 1 - i;
//         }
//     }
// };

/**
 * 阶乘的每个数能被几个5整除，5的个数加起来就是0的个数
 * @param {*} num
 */
var trailingZeroes = function(num) {
    let count = 0,
        i = 5;
    while (i <= num) {
        count++;
        let mid = i / 5;
        while (mid % 5 == 0 && mid > 1) {
            count++;
            mid = mid / 5;
        }
        i += 5;
    }
    return count;
};

var trailingZeroes = function(n) {
    var ans = 0;
    //count the numbers of 5 in n!
    //ex. 25, ans = (25/5) + (5/5) = 6
    for (var i = n; i > 0; i = Math.floor(i / 5)) {
        ans += Math.floor(i / 5);
    }
    return ans;
};

/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (44.50%)
 * Total Accepted:    34.8K
 * Total Submissions: 77.9K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 注意：给定 n 是一个正整数。
 *
 * 示例 1：
 *
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 *
 * 示例 2：
 *
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
// const cache = {};
// var climbStairs = function(n) {
//     if (n <= 2) return n;
//     if (cache[n]) return cache[n];
//     cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
//     return cache[n];
// };

var climbStairs = function(n) {
    if (n <= 2) return n;
    let a = 1,
        b = 2,
        mid = 0;
    for (let i = 2; i < n; i++) {
        mid = a + b;
        a = b;
        b = mid;
    }
    return mid;
};

// console.log(climbStairs(15));

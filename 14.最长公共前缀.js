/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.23%)
 * Total Accepted:    57.1K
 * Total Submissions: 177K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    const base = strs.splice(0, 1)[0];
    let i = 0,
        length = base.length,
        maxS = "";
    loop: for (; i < length; i++) {
        const str = base.slice(0, i + 1);
        for (let item of strs) {
            if (item.indexOf(str) != 0) {
                break loop;
            }
        }
        maxS = str;
    }
    return maxS;
};
console.log(longestCommonPrefix(["cc", "ccca", "cccd"]));

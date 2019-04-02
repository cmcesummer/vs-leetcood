/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (30.36%)
 * Total Accepted:    6.4K
 * Total Submissions: 20.7K
 * Testcase Example:  '1'
 *
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 *
 * 例如，
 *
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB
 * ⁠   ...
 *
 *
 * 示例 1:
 *
 * 输入: 1
 * 输出: "A"
 *
 *
 * 示例 2:
 *
 * 输入: 28
 * 输出: "AB"
 *
 *
 * 示例 3:
 *
 * 输入: 701
 * 输出: "ZY"
 *
 *
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    const cache = [];
    const BASE_NUM = 64;
    function getNum(n) {
        let first = Math.floor(n / 26);
        let second = n % 26;
        if (second == 0) {
            second = 26;
            first -= 1;
        }
        cache.unshift(second);
        if (first > 26) {
            getNum(first);
        } else {
            cache.unshift(first);
        }
    }
    if (n > 26) {
        getNum(n);
    } else {
        cache.unshift(n);
    }
    return cache.reduce((pre, now) => {
        pre += String.fromCharCode(now + BASE_NUM);
        return pre;
    }, "");
};

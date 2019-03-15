/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (46.74%)
 * Total Accepted:    18.2K
 * Total Submissions: 38.9K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 *
 * 输入为非空字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
    const maxL = Math.max(a.length, b.length);
    a = a.split("").reverse();
    b = b.split("").reverse();
    let i = 0,
        flag = 0,
        cache = [];
    while (i < maxL) {
        if (!flag && (!a[i] || !b[i])) {
            if (!a[i]) {
                cache.push(...b.slice(i));
                break;
            } else if (!b[i]) {
                cache.push(...a.slice(i));
                break;
            }
        }
        const mid = [a[i] || 0, b[i] || 0, flag].filter(item => item == 1);
        if (mid.length > 1) {
            flag = 1;
        } else {
            flag = 0;
        }
        cache.push(mid.length % 2);
        i++;
    }
    if (flag) cache.push(1);
    return cache.reverse().join("");
};
// console.log(
//     addBinary(
//         "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
//         "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
//     )
// );
// console.log(addBinary("1010", "1011"));
// 110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000
// 110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000
// 110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000
// 1000110111001101001010001101110110100110010101101001100000000000000000000

/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 *
 * https://leetcode-cn.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (42.91%)
 * Total Accepted:    9.3K
 * Total Submissions: 21.5K
 * Testcase Example:  '"egg"\n"add"'
 *
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 *
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 *
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 *
 * 示例 1:
 *
 * 输入: s = "egg", t = "add"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: s = "foo", t = "bar"
 * 输出: false
 *
 * 示例 3:
 *
 * 输入: s = "paper", t = "title"
 * 输出: true
 *
 * 说明:
 * 你可以假设 s 和 t 具有相同的长度。
 *
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const len2 = t.length;
    const len1 = s.length;
    if (len2 !== len1) return false;
    const map2 = {},
        map1 = {};

    for (let i = 0; i < len2; i++) {
        const item = t[i];
        if (map2[item] && map2[item] !== s[i]) {
            return false;
        }
        if (map1[s[i]] && map1[s[i]] !== item) {
            return false;
        }
        map2[item] = s[i];
        map1[s[i]] = item;
    }

    return true;
};

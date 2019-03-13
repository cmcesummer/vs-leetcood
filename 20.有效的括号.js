/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.71%)
 * Total Accepted:    51.7K
 * Total Submissions: 140.7K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// const a = /({)/g,
//     A = /(})/g,
//     b = /(\[)/g,
//     B = /(\])/g,
//     c = /(\()/g,
//     C = /(\))/g;
const reg = /}|\)|\]/;
const map = {
    "{": 1,
    "}": 1,
    "[": 2,
    "]": 2,
    "(": 3,
    ")": 3
};
var isValid = function(s) {
    if (!s) return true;
    if (s.length % 2 != 0) return false;
    let cache = [],
        i = 0,
        length = s.length;
    for (; i < length; i++) {
        if (!reg.test(s[i])) {
            cache.unshift(map[s[i]]);
            continue;
        }
        if (cache.shift() != map[s[i]]) {
            return false;
        }
    }
    return !cache.length;
};
console.log(isValid("()[]{}"));
console.log(isValid("{[]}"));
console.log(isValid("([)]"));
console.log(isValid("[]"));
console.log(isValid("(([]){})"));

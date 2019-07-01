/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// var findTheDifference = function(s, t) {
//     for (const code of t) {
//         const index = s.indexOf(code);
//         if (index < 0) {
//             return code;
//         }
//         s = s.substring(0, index) + s.substring(index + 1);
//     }
//     return s;
// };
var findTheDifference = function(s, t) {
    let sum1 = 0;
    for (let i = 0; i < s.length; i++) {
        sum1 += s[i].charCodeAt();
    }

    let sum2 = 0;
    for (let i = 0; i < t.length; i++) {
        sum2 += t[i].charCodeAt();
    }

    return String.fromCharCode(sum2 - sum1);
};

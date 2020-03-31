/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
// "abccccdd"
// 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
/**
 * @param {string} s
 * @return {number}
 */
// var longestPalindrome = function(s) {
//     const cache = {};
//     for (let i = 0, length = s.length; i < length; i++) {
//         const item = s[i];
//         if (cache[item]) cache[item] += 1;
//         else cache[item] = 1;
//     }
//     const totalArray = Object.keys(cache);
//     let enevL = 0,
//         os = 0;
//     for (const key of totalArray) {
//         if (cache[key] % 2 === 0) {
//             enevL += cache[key];
//         } else {
//             if (os < cache[key]) {
//                 os = cache[key];
//             }
//         }
//     }
//     console.log(cache);
//     if (os) return enevL + os;
//     return enevL;
//     // const evenArray = totalArray.map(key => {
//     //     if (cache[key] % 2 === 0) {
//     //         return key;
//     //     }
//     // });

//     // const oddLength = totalArray.length - evenArray.length;
//     // if (oddLength > 0) return evenArray.length + 1;
//     // return evenArray.length;
// };
// 理解错误 不是每个字母必须都用上

var longestPalindrome = function(s) {
    let ans = 0;
    let keys = {};

    for (let char of s) {
        keys[char] = (keys[char] || 0) + 1;
        if (keys[char] % 2 == 0) ans += 2;
    }
    return s.length > ans ? ans + 1 : ans;
};

// @lc code=end

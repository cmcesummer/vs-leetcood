/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const cache = new Map();
    for (let i = 0, length = s.length; i < length; i++) {
        if (cache.has(s[i])) {
            cache.set(s[i], "has");
        } else {
            cache.set(s[i], i);
        }
    }
    for (const [key, val] of cache) {
        if (val !== "has") {
            return val;
        }
    }
    return -1;
};

/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let length = s.length;;
    if (length <= 1) return s;
    let index = 0;
    while (length > 1) {
        length--;
        const item = s.pop();
        s.splice(index, 0, item)
        index++;
    }
    return s
};


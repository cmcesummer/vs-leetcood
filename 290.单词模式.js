/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词模式
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const array = str.split(" ");
    const patternMap = {};
    if (pattern.length !== array.length) return false;
    for (let i = 0, length = pattern.length; i < length; i++) {
        const item = pattern[i];
        const strItem = array[i];
        if (patternMap[item]) {
            if (patternMap[item] !== strItem) {
                return false;
            }
        } else {
            patternMap[item] = strItem;
        }
    }
    const newArray = Object.keys(patternMap).map(item => patternMap[item]);
    return Object.keys(patternMap).length === new Set(newArray).size;
};

/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        function mid(start, end) {
            const length = end - start + 1;
            const midIndex = Math.ceil(length / 2) - 1 + start;

            if (isBadVersion(midIndex)) {
                if (midIndex === start) {
                    return midIndex;
                }
                return mid(start, midIndex);
            } else {
                if (midIndex === end) {
                    return midIndex;
                }
                return mid(midIndex + 1, end);
            }
        }
        return mid(1, n);
    };
};

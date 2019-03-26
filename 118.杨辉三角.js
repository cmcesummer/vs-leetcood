/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (60.48%)
 * Total Accepted:    18.7K
 * Total Submissions: 30.9K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 *
 *
 *
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const cache = {};
    function getSingleArray(num) {
        if (cache[num]) return cache[num];
        if (num == 1) {
            cache[num] = [1];
        } else if (num == 2) {
            cache[num] = [1, 1];
        } else {
            const laseArray = getSingleArray(num - 1);
            const arr = [1];
            for (let i = 1, length = laseArray.length; i < length; i++) {
                arr.push(laseArray[i - 1] + laseArray[i]);
            }
            arr.push(1);
            cache[num] = arr;
        }
        return cache[num];
    }
    const final = [];
    for (let i = 0; i < numRows; i++) {
        final.push(getSingleArray(i + 1));
    }
    return final;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = [];
    for (let i = 1; i <= numRows; i++) {
        let row = [];
        for (let j = 0; j < i; j++) {
            if (j == 0 || j == i - 1) {
                row.push(1);
            } else {
                row.push(arr[i - 2][j - 1] + arr[i - 2][j]);
            }
        }
        arr.push(row);
    }
    return arr;
};

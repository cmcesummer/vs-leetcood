/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (54.09%)
 * Total Accepted:    11.5K
 * Total Submissions: 21.3K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 *
 *
 *
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *
 * 输入: 3
 * 输出: [1,3,3,1]
 *
 *
 * 进阶：
 *
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 *
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];
    const row = [1, 1];
    for (let i = 2; i <= rowIndex; i++) {
        for (let j = i; j >= 0; j--) {
            const right = row[j] ? row[j] : 0;
            const left = row[j - 1] ? row[j - 1] : 0;
            row[j] = right + left;
        }
    }
    return row;
};

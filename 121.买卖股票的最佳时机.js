/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (48.73%)
 * Total Accepted:    35.2K
 * Total Submissions: 72.1K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 *
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 *
 * 注意你不能在买入股票前卖出股票。
 *
 * 示例 1:
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 *
 *
 * 示例 2:
 *
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const res = [0];
    for (let i = 0, length = prices.length; i < length - 1; i++) {
        const buy = prices[i];
        for (let j = i + 1; j < length; j++) {
            const sell = prices[j];
            if (buy < sell) {
                res.push(sell - buy);
            }
        }
    }
    return Math.max.apply(Math, res);
};

// 动态规划
var maxProfit = function(prices) {
    var d_val = 0,
        min_price = prices[0],
        length = prices.length;
    if (length <= 1) return 0;
    for (let i = 1; i < length; i++) {
        d_val = d_val > prices[i] - min_price ? d_val : prices[i] - min_price;
        min_price = min_price < prices[i] ? min_price : prices[i];
    }
    return d_val > 0 ? d_val : 0;
};

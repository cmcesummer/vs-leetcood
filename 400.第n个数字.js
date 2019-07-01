/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第N个数字
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let k = 1,
        l = 0,
        after = n;
    //找到这个数的量级,begin会取到1,10,100… //每个量级会消耗n的数量,用after记录n剩下多少
    while (l < n) {
        after = n - l;
        l += 9 * Math.pow(10, k - 1) * k;
        k++;
    }
    let begin = Math.pow(10, k - 2);
    //比如begin10,观察10,11,12…after/2可以得到10+了多少. num即是n落到哪个数上;
    let num = begin + Math.ceil(after / (k - 1)) - 1;
    //取得落在这个数的哪一位上
    let nth = after % (k - 1);
    if (nth === 0) nth = k - 1;
    //获取这个数字
    let re = [...(num + "")][nth - 1];
    return re - 0;
};
console.log(findNthDigit(21));

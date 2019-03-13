/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (48.29%)
 * Total Accepted:    22.8K
 * Total Submissions: 47.1K
 * Testcase Example:  '1'
 *
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 *
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 *
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 *
 * 注意：整数顺序将表示为一个字符串。
 *
 *
 *
 * 示例 1:
 *
 * 输入: 1
 * 输出: "1"
 *
 *
 * 示例 2:
 *
 * 输入: 4
 * 输出: "1211"
 *
 *
 */

// function mid(str) {
//     let i = 1,
//         leng = str.length,
//         cache = [[1, str[0]]];
//     for (; i < leng; i++) {
//         const box = cache[cache.length - 1];
//         if (box[1] == str[i]) {
//             box[0] += 1;
//         } else {
//             cache.push([1, str[i]]);
//         }
//     }
//     return cache.reduce((pre, next) => {
//         return pre + next.join("");
//     }, "");
// }

// /**
//  * @param {number} n
//  * @return {string}
//  */
// var countAndSay = function(n) {
//     if (n == 1) return "1";
//     let res = "1";
//     while (n > 1) {
//         res = mid(res);
//         n--;
//     }
//     return res;
// };

// console.log(countAndSay(6));
// console.log(mid("1"));
// console.log(mid("11"));
// console.log(mid("21"));
// console.log(mid("1211"));
// console.log(mid("111221"));

var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    } else if (n > 1) {
        let str = countAndSay(n - 1);
        let f;
        let count = 0;
        let result = "";
        str.split("").forEach((s, i, sa) => {
            if (i === 0) {
                f = s;
            }
            if (s === f) {
                count++;
            } else {
                result += count + f;
                count = 1;
                f = s;
            }
        });
        result += count + f;
        return result;
    }
};

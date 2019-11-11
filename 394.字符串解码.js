/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */
// s = "3[a]2[bc]", 返回 "aaabcbc".
// s = "3[a2[c]]", 返回 "accaccacc".
// s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(str) {
    const list = compute(str);
    let finalString = "";
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (!Array.isArray(item)) {
            finalString += item;
            continue;
        }
        const count = item[0] * 1;
        let strings = item[1];
        if (strings.indexOf("[") >= 0) {
            strings = decodeString(strings);
        }
        finalString += strings.repeat(count);
    }
    return finalString;
};
function compute(str) {
    const list = [];
    const numreg = /[0-9]/;
    let flag = 0;
    let countCache = "";
    let stringCache = "";
    for (let i = 0, length = str.length; i < length; i++) {
        const item = str[i];
        if (flag === 0 && !numreg.test(item) && item !== "[") {
            list.push(item);
            continue;
        }
        if (flag === 0 && numreg.test(item)) {
            countCache += item;
            continue;
        }
        if (flag === 0 && item === "[") {
            flag++;
            list.push([countCache]);
            countCache = "";
            continue;
        }
        if (flag !== 0) {
            if (item !== "[" && item !== "]") {
                stringCache += item;
                continue;
            }
            if (item === "[") {
                stringCache += item;
                flag++;
                continue;
            }
            if (item === "]") {
                flag--;
                if (flag === 0) {
                    const waitStringItem = list[list.length - 1];
                    waitStringItem.push(stringCache);
                    stringCache = "";
                } else {
                    stringCache += item;
                }
                continue;
            }
        }
    }
    return list;
}

// console.log(decodeString("2[abc]3[cd]ef") === "abcabccdcdcdef");
// console.log(decodeString("3[a2[c]]") === "accaccacc");
// @lc code=end

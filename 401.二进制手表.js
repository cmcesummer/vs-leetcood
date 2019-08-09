/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {};

// 这个 下边几个不能都亮 最大不能超过59
// 我先分成几个部分来做
const visiper = () => {
    const NUMBER = 3;
    const cache = [];
    const MAX_LENGTH = 6;
    const core = (num, start = 0, itemcache = []) => {
        if (num <= 0) return;
        for (let i = start; i < MAX_LENGTH; i++) {
            const itemcaches = [...itemcache, i];
            if (num === 1) cache.push(itemcaches);
            core(num - 1, i + 1, itemcaches);
        }
    };

    core(NUMBER);

    const strCache = [];
    const numberCache = [];
    for (const item of cache) {
        let str = "";
        for (let i = MAX_LENGTH - 1; i >= 0; i--) {
            if (item.includes(i)) {
                str += "1";
            } else {
                str += "0";
            }
        }
        numberCache.push(parseInt(str, 2));
        strCache.push(str);
    }

    console.log(cache, strCache, numberCache);
};

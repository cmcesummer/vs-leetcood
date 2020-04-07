/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */

var root = {
    val: 1,
    children: [
        {
            val: 3,
            children: [
                { val: 5, children: [] },
                { val: 6, children: [] }
            ]
        },
        { val: 2, children: [] },
        { val: 4, children: [] }
    ]
};

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    const res = [[root.val]];
    if (root.children.length === 0) return res;
    let cache = [root.children];
    while (cache.length > 0) {
        const cacheMid = [];
        const mid = [];
        for (const item of cache) {
            for (const c of item) {
                mid.push(c.val);
                if (c.children.length > 0) cacheMid.push(c.children);
            }
        }
        cache = cacheMid;
        res.push(mid);
    }
    // console.log(res);
    return res;
};

// levelOrder(root);
// @lc code=end

/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (59.31%)
 * Total Accepted:    11.3K
 * Total Submissions: 19K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其自底向上的层次遍历为：
 *
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 *
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom(root) {
    if (!root) return [];
    const cache = [[root.val]];
    ~(function deep(root, cache, index) {
        let mid = [];
        if (root.left) mid.push(root.left.val);
        if (root.right) mid.push(root.right.val);
        if (!mid.length) {
            mid = null;
            return;
        }
        index++;
        if (cache[index]) {
            cache[index].splice(cache[index].length, 0, ...mid);
            mid = null;
        } else {
            cache.push(mid);
            mid = null;
        }
        if (root.left) deep(root.left, cache, index);
        if (root.right) deep(root.right, cache, index);
    })(root, cache, 0);
    return cache.reverse();
}

var levelOrderBottom = function(root) {
    let res = [];
    ~(function dfs(root, level = 0) {
        if (root) {
            if (res[level]) {
                res[level].push(root.val);
            } else {
                res[level] = [root.val];
            }
            dfs(root.left, level + 1);
            dfs(root.right, level + 1);
        }
    })(root);
    return res.reverse();
};

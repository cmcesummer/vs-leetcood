/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let val = 0;
    if (!root) return val;
    if (root.left) {
        if (!root.left.left && !root.left.right) {
            val += root.left.val;
        }
        val += sumOfLeftLeaves(root.left);
    }
    if (root.right) {
        val += sumOfLeftLeaves(root.right);
    }
    return val;
};

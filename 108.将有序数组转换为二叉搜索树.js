/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (61.54%)
 * Total Accepted:    14.4K
 * Total Submissions: 23.3K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 *
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 *
 * 示例:
 *
 * 给定有序数组: [-10,-3,0,5,9],
 *
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 *
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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
 * @param {number[]} array
 * @return {TreeNode}
 */
var sortedArrayToBST = function(array) {
    if (!array || !array.length) return null;
    if (array.length == 1) return new TreeNode(array[0]);
    if (array.length == 2) {
        const newTree = new TreeNode(array[1]);
        newTree.left = new TreeNode(array[0]);
        return newTree;
    }
    const rootIndex = Math.ceil(array.length / 2) - 1;
    const newTree = new TreeNode(array[rootIndex]);
    newTree.left = sortedArrayToBST(array.slice(0, rootIndex));
    newTree.right = sortedArrayToBST(array.slice(rootIndex + 1));
    return newTree;
};

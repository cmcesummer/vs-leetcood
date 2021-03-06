/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (37.42%)
 * Total Accepted:    13.3K
 * Total Submissions: 35.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 *
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例:
 *
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最小深度  2.
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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;
    const left = minDepth(root.left);
    const right = minDepth(root.right);
    if (!left || !right) {
        return left + right + 1;
    } else {
        return Math.min(left, right) + 1;
    }
};

// function minDepth(root) {
//     const queue = [];
//     let deep = 0;
//     if (!root) return 0;
//     queue.push({ node: root, level: 1 });
//     while (queue.length) {
//         const { node, level } = queue.shift();
//         deep = level;
//         if (node.left) queue.push({ node: node.left, level: level + 1 });
//         if (node.right) queue.push({ node: node.right, level: level + 1 });
//         if (!node.left && !node.right) return deep;
//     }
//     return deep;
// }

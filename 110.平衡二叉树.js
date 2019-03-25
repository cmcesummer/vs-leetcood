/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (46.54%)
 * Total Accepted:    12.5K
 * Total Submissions: 26.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 *
 * 本题中，一棵高度平衡二叉树定义为：
 *
 *
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 *
 *
 * 示例 1:
 *
 * 给定二叉树 [3,9,20,null,null,15,7]
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回 true 。
 *
 * 示例 2:
 *
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 *
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 *
 *
 * 返回 false 。
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
 * @return {boolean}
 */
function checkIsDeep(tree) {
    if (!tree) return 0;
    let cache = [{ node: tree, level: 1 }],
        index = 1;
    while (cache.length) {
        const { node, level } = cache.shift();
        index = level;
        if (node.left) cache.push({ node: node.left, level: index + 1 });
        if (node.right) cache.push({ node: node.right, level: index + 1 });
    }
    return index;
}
var isBalanced = function(root) {
    if (!root) return true;
    if (Math.abs(checkIsDeep(root.left) - checkIsDeep(root.right)) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
};

var isBalanced = function(root) {
    let balance = true;

    const getH = node => {
        if (node === null) return 0;
        let L = getH(node.left) + 1;
        let R = getH(node.right) + 1;
        if (Math.abs(R - L) > 1) {
            balance = false;
        }
        return Math.max(L, R);
    };

    getH(root);

    return balance;
};

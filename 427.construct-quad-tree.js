/*
 * @lc app=leetcode.cn id=427 lang=javascript
 *
 * [427] Construct Quad Tree
 */

// @lc code=start
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 * n == grid.length == grid[i].length
 * n == 2^x 其中 0 <= x <= 6
 */
const de = [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1]
];

const des = [
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0]
];
/**
 * @param {number[][]} grid
 * @return {Node}
 */
// class Node {
//     public boolean val;
//     public boolean isLeaf;
//     public Node topLeft;
//     public Node topRight;
//     public Node bottomLeft;
//     public Node bottomRight;
// }

var construct = function(grid) {
    function checkeque(arr) {
        const num = arr[0][0];
        for (const item of arr) {
            for (const i of item) {
                if (i !== num) {
                    return false;
                }
            }
        }
        return true;
    }
    function split(arr, number) {
        const top = arr.slice(0, number);
        const bottom = arr.slice(number);
        const topLeft = [],
            topRight = [],
            bottomLeft = [],
            bottomRight = [];
        for (const item of top) {
            topLeft.push(item.slice(0, number));
            topRight.push(item.slice(number));
        }
        for (const item of bottom) {
            bottomLeft.push(item.slice(0, number));
            bottomRight.push(item.slice(number));
        }
        return {
            topLeft,
            topRight,
            bottomLeft,
            bottomRight
        };
    }

    function checkLoop(arr) {
        if (arr.length === 0) return false;
        const xLength = arr.length;
        // 有前提不用验证不相等的情况
        // const yLength = arr[0].length;
        if (xLength % 2 !== 0) return false;
        return true;
    }

    function loop(grids) {
        const isLeaf = checkeque(grids);
        const col = grids.length;
        const res = new Node();
        res.isLeaf = isLeaf;
        res.val = isLeaf ? grids[0][0] : 1;
        if (!checkLoop(grids) || isLeaf) {
            return res;
        }
        const { topLeft, topRight, bottomLeft, bottomRight } = split(grids, col / 2);
        if (topLeft) {
            res.topLeft = loop(topLeft);
            res.topRight = loop(topRight);
            res.bottomLeft = loop(bottomLeft);
            res.bottomRight = loop(bottomRight);
        }
        return res;
    }

    const tree = loop(grid);
    // console.log(tree);
    return tree;

    // function flatten(tree) {
    //     const res = [];
    //     const cache = [tree];
    //     while (cache.length) {
    //         const item = cache.shift();
    //         if (item === null) {
    //             res.push(null);
    //             continue;
    //         }
    //         res.push([item.isLeaf, item.val]);
    //         const { topLeft, topRight, bottomLeft, bottomRight } = item;
    //         if (topLeft) {
    //             cache.push(topLeft, topRight, bottomLeft, bottomRight);
    //         } else {
    //             cache.push(null, null, null, null);
    //         }
    //     }
    //     return res;
    // }

    // const res = flatten(tree);
    // while (res.length) {
    //     const item = res.pop();
    //     if (item) {
    //         res.push(item);
    //         break;
    //     }
    // }

    // // console.log(res);
    // return res;
};
// construct([
//     [0, 1],
//     [1, 0]
// ]);

// [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
// @lc code=end

var construct2 = function(grid) {
    root = new Node();
    if (grid.length == 0) {
        return root;
    }
    if (grid.length == 1) {
        if (grid[0][0] == 1) {
            root.val = 1;
        } else {
            root.val = 0;
        }
        root.isLeaf = 1;
        return root;
    }

    let dp = [];

    for (let i = 0; i <= grid.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= grid.length; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + grid[i - 1][j - 1];
            }
        }
    }

    function helper(sx, sy, ex, ey) {
        sx = Math.floor(sx);
        sy = Math.floor(sy);
        ex = Math.floor(ex);
        ey = Math.floor(ey);

        let S = sum(sx, sy, ex, ey);
        if (S === 0 || S === (ex - sx + 1) * (ey - sy + 1)) {
            return new Node(S > 0, 1, null, null, null, null);
        }

        return new Node(
            1,
            0,
            helper(sx, sy, (sx + ex) / 2, (sy + ey) / 2),
            helper(sx, (sy + ey) / 2 + 1, (sx + ex) / 2, ey),
            helper((sx + ex) / 2 + 1, sy, ex, (sy + ey) / 2),
            helper((sx + ex) / 2 + 1, (sy + ey) / 2 + 1, ex, ey)
        );
    }

    function sum(sx, sy, ex, ey) {
        return dp[ex + 1][ey + 1] - dp[sx][ey + 1] - dp[ex + 1][sy] + dp[sx][sy];
    }

    return helper(0, 0, grid.length - 1, grid.length - 1);
};

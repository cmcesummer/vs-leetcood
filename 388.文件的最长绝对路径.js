// var lengthLongestPath = function(input) {
//     const arr = input.split(/\n(?!\t)/g);
//     // const reg = //g;
//     for (const str of arr) {
//         let i = 1;
//         const tree = {};
//         const cache = tree;
//         while (true) {
//             const reg = new RegExp(`(\n)(\t){${i}}(?!\t)([^\n]*)(?=[\n|$])`, 'g');
//             const s = str.match(reg);
//             if(!s) break;
//             cache.str = s.substring(i);
//             i++;
//         }
//     }
// };
var lengthLongestPath = function(input, level = 0) {
    let re = new RegExp(`\n\t{${level}}(?!\t)`, "g");
    let nodes = input.split(re);
    let max = 0;
    for (let node of nodes) {
        let len = node.indexOf("\n");
        if (len === -1) {
            // leaf node
            if (~node.indexOf(".")) {
                // has file
                max = Math.max(max, node.length);
            }
        } else {
            let childLen = lengthLongestPath(node.substr(len + level + 2), level + 1);
            if (childLen > 0) {
                max = Math.max(max, len + childLen);
            }
        }
    }
    return max ? !!level + max : 0; // !!level to account for the slash character
};

/**
 * 分别用广度优先遍历和深度优先遍历展开下面节点
 * 广度优先遍历：
 * [ 'root','child1','child2','child3','child1_1','child1_2','child2_1','child2_1' ]
 * 深度优先遍历：
 * [ 'root','child1','child1_1','child1_2','child2','child2_1','child3','child2_1' ]
 */
const tree = {
    name: "root",
    children: [
        {
            name: "child1",
            children: [
                {
                    name: "child1_1",
                    children: []
                },
                { name: "child1_2", children: [] }
            ]
        },
        {
            name: "child2",
            children: [
                {
                    name: "child2_1",
                    children: []
                }
            ]
        },
        {
            name: "child3",
            children: [
                {
                    name: "child2_1",
                    children: []
                }
            ]
        }
    ]
};

// HF
function HF(obj, cache = []) {
    cache.push(obj.name);
    if (obj.children.length) {
        obj.children.forEach(item => {
            HF(item, cache);
        });
    }
    return cache;
}
// WF
function WF(obj) {
    const cache = [];
    function mid(arr) {
        const childArr = [];
        arr.forEach(item => {
            cache.push(item.name);
            if (item.children.length) {
                childArr.push(...item.children);
            }
        });
        if (childArr.length) mid(childArr);
    }
    mid([obj]);
    return cache;
}
// console.log(WF(tree));

/**
 * 关系型数组转换成树形结构对象
 *
 */

const data = [
    { parentId: 0, id: 1, value: "1" },
    { parentId: 3, id: 2, value: "2" },
    { parentId: 0, id: 3, value: "3" },
    { parentId: 1, id: 4, value: "4" },
    { parentId: 1, id: 5, value: "5" }
];
const res = [
    { id: 1, value: "1", children: [{ id: 4, value: "4", children: [] }, { id: 5, value: "5", children: [] }] },
    { id: 3, value: "3", children: [{ id: 2, value: "2", children: [] }] }
];
function change(arr) {
    for (let i = 0; i < arr.length; ) {
        const { parentId } = arr[i];
        if (!arr[i].children) {
            arr[i].children = [];
        }
        const ix = arr.filter(item => item.id == parentId)[0];
        if (ix) {
            delete arr[i]["parentId"];
            if (ix.children) {
                ix.children.push(arr[i]);
            } else {
                ix.children = [arr[i]];
            }
            arr.splice(i, 1);
            continue;
        }
        i++;
    }
    return arr.map(item => {
        delete item["parentId"];
        return item;
    });
}
var getJsonTree = function(data, parentId) {
    var itemArr = [];
    for (var i = 0; i < data.length; i++) {
        var node = data[i];
        //data.splice(i, 1)
        if (node.parentId == parentId) {
            var newNode = { id: node.id, value: node.value, children: getJsonTree(data, node.id) };
            itemArr.push(newNode);
        }
    }
    return itemArr;
};
console.log(JSON.stringify(change(data)));

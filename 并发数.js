let queue = [];
let number = 0;

function limitNumber(opt) {
    number++;
    if (number > 10) {
        queue.push(opt);
        return;
    }
    sendMsg(opt);
}

function sendMsg(opt) {
    const basenum = 2000;
    console.log(`当前参数${JSON.stringify(opt)}`);
    setTimeout(() => {
        console.log(`完成请求：${opt.index}`);
        number--;
        const args = queue.shift();
        args && sendMsg(args);
    }, parseInt(basenum * Math.random()));
}

for (let i = 0; i < 20; i++) {
    limitNumber({ index: i });
}

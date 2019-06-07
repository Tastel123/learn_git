// js 的后端node 用核心模块打理起服务器端开发
// 要读文件，先引入js
const fs = require('fs');
// 读一个文件有几步  js运行在服务器命令行上
// 找到文件 代码由CPU执行 内存  a.txt在磁盘文件里，
// IO 花时间 打开文件，读取文件，输出到命令行之中
// 耗时 callback
// fs.readFile('./a.txt','utf8',(err,data) => {
//     console.log(data);
//     fs.readFile('./b.txt','utf8',(err,data) => {
//     console.log(data);
// })
// })

// 当出现耗时问题时，找promise 这是一类问题
    const fileAPromise = new Promise(
        (resolve,reject) => {
            fs.readFile('./a.txt','utf8',(err,data) => {
                if(err) {
                    reject(err);
                }
                resolve(data);
            })
        });
        const fileBPromise = new Promise(
            (resolve,reject) => {
                fs.readFile('./b.txt','utf8',(err,data) => {
                    if(err) {
                        reject(err);
                        return;
                    }
                    resolve(data);
                })
            });
        fileAPromise
            .then(data => {
                console.log(data);
                return fileBPromise;
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })

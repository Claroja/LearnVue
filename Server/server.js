//这个放在dist文件夹里,用来浏览生成页面的效果
//node server 来启动
var express = require('express');
var app = express();
const hostname = 'localhost';
const port = 3000;
app.use(express.static('./'));
app.listen(port, hostname, () => {
    console.log('ok');
});
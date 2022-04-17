const { request } = require('express');
const express=require('express');
const app=express();
app.get('/server',(request,response)=>{
    response.setHeader('6666','*');
    response.send('hello ajax');
});
app.listen(8000,()=>{
    console.log('服务器已经启动，8000 端口监听中...');
})
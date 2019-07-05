const express = require('express');
const app = express();
const fs = require('fs')
// 引入json解析中间件
var bodyParser = require('body-parser');
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const getData = require('./database')
const { _tabList,_accounts } = getData()

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/getTabList',(req,res) => {
    res.send(_tabList);
})

app.post('/getImage',(req,res) => {
    res.sendFile(__dirname + req.body.url)
})

app.post('/login',(req,res) => {
    const { user,pass } = req.body
    let data = 'fail'
    _accounts.forEach(account=>{
        if(account.username === user && account.password === pass){
            data = 'success'
        }
    })
    
    res.send(data)
})

app.listen(8888,function(){
    console.log('listening on :8888');
});

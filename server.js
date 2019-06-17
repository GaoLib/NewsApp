var express = require('express');
var app = express();

var _tabList = [
    {
        id: 1,
        name: '推荐'
    },
    {
        id: 2,
        name: '热点'
    },
    {
        id: 3,
        name: '娱乐圈'
    },
    {
        id: 4,
        name: '笑点低'
    },
    {
        id: 5,
        name: '二次元'
    },
    {
        id: 6,
        name: '潮人范'
    }
]

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/getTabList',function(req,res){
    res.send(_tabList);
})

app.listen(8888,function(){
    console.log('listening on :8888');
});

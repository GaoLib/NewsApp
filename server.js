const express = require('express');
const app = express();
const fs = require('fs')
// 引入json解析中间件
var bodyParser = require('body-parser');
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var _tabList = [
    {
        id: 1,
        name: '推荐',
        bannerList: [
            {
                id: 1,
                link: '',
                img: '/src/images/banner.jpg'
            },
            {
                id: 2,
                link: '',
                img: '/src/images/banner2.png'
            },
            {
                id: 3,
                link: '',
                img: '/src/images/banner3.png'
            },
            {
                id: 4,
                link: '',
                img: '/src/images/banner4.png'
            }
        ]
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

app.listen(8888,function(){
    console.log('listening on :8888');
});

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
                imgUrl: '/src/images/banner.jpg'
            },
            {
                id: 2,
                link: '',
                imgUrl: '/src/images/banner2.png'
            },
            {
                id: 3,
                link: '',
                imgUrl: '/src/images/banner3.png'
            },
            {
                id: 4,
                link: '',
                imgUrl: '/src/images/banner4.png'
            }
        ],
        newsList: [
            {
                id: 1,
                title: 'DJI 大疆 口袋灵眸 Osmo pocket 口袋云台相机 迷你手持云台相机',
                imgUrl: '/src/images/1.jpg'
            },
            {
                id: 2,
                title: '米作',
                imgUrl: '/src/images/2.jpg'
            },
            {
                id: 3,
                title: '好吃的',
                imgUrl: '/src/images/3.jpg'
            },
            {
                id: 4,
                title: 'DJI 大疆 口袋灵眸 Osmo pocket 口袋云台相机 迷你手持云台相机',
                imgUrl: '/src/images/4.jpg'
            },
            {
                id: 5,
                title: '米作',
                imgUrl: '/src/images/5.jpg'
            },
            {
                id: 6,
                title: '好吃的',
                imgUrl: '/src/images/6.jpg'
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

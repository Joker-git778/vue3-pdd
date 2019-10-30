const express = require('express');
const router = express.Router();
// const conn = require('./../db');

/*
let goods = require('./../public/goods_list');
router.get('/data', function(req, res) {
    let tempArr_all = [];
    for(let i=0; i<goods.goods_list.length; i++){
        let tempArr = [];
        let oldGoods = goods.goods_list[i];
        // 1. 新建新的json对象
        tempArr.push(oldGoods.goods_id);
        tempArr.push(oldGoods.goods_name);
        tempArr.push(oldGoods.short_name);
        tempArr.push(oldGoods.image_url);
        tempArr.push(oldGoods.thumb_url);
        tempArr.push(oldGoods.hd_thumb_url);
        tempArr.push(oldGoods.cnt);
        tempArr.push(oldGoods.market_price);
        tempArr.push(oldGoods.normal_price);
        tempArr.push(oldGoods.group.price);
        tempArr_all.push(tempArr);
    }

    //2. 遍历数据, 插入数据库
    let sql = "INSERT INTO homegoods(`goods_id`,`goods_name`,`short_name`, `image_url`, `thumb_url`, `hd_thumb_url`, `cnt`, `market_price`, `normal_price`, `group_price`) VALUES ?";
    conn.query(sql, [tempArr_all], function (err, rows, fields) {
        if(err){
            console.log('INSERT ERROR - ', err.message);
            return;
        }
        console.log("INSERT SUCCESS");
    });

});
*/

/**
 * 获取首页轮播图
 */
router.get('/api/homecasual', (req, res)=>{
   /* let sqlStr = 'select * from homecasual';
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
        res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
    })*/
    const data = require('../data/homecasual');
    res.json({success_code: 200, message: data})
});

/**
 * 获取首页导航
 */
router.get('/api/homenav', (req, res)=>{
   /*
   let sqlStr = 'select * from homenav';
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
        res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
    })
    */
    const data = require('../data/homenav');
    res.json({success_code: 200, message: data});
});

/**
 * 获取首页商品列表
 */
router.get('/api/homeshoplist', (req, res)=>{
    /*
   let sqlStr = 'select * from homeshoplist';
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
        res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
    })
    */
    setTimeout(function () {
         const data = require('../data/shopList');
         res.json({success_code: 200, message: data})
    }, 300);
});

/**
 * 获取推荐商品列表
 */
router.get('/api/recommendshoplist', (req, res)=>{
    setTimeout(function () {
        const data = require('../data/recommend');
        res.json({success_code: 200, message: data})
    }, 10);
});

/**
 * 获取推荐商品列表拼单用户
 */
router.get('/api/recommenduser', (req, res)=>{
    setTimeout(function () {
        const data = require('../data/recommend_users');
        res.json({success_code: 200, message: data})
    }, 10);
});

/**
 * 获取搜索分类列表
 */
router.get('/api/searchgoods', (req, res)=>{
    setTimeout(function () {
        const data = require('../data/search');
        res.json({success_code: 200, message: data})
    }, 10);
});

/**
 * 获取商品数据
 */
    router.get('/api/getqalist', (req, res) => {
    const course = req.query.course;
    const limit = req.query.limit || 20;
    const keyword = req.query.keyword || '';

    let sqlStr = 'select * from qa where course= "' + course + '" LIMIT ' + limit;
    if (keyword !== '') {
        sqlStr = 'select * from qa where course= "' + course + '" AND qname LIKE "%' + keyword + '%" LIMIT ' + limit;
    }

    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0});
        res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
    })
});

/**
 * 获取学生列表
 */
router.get('/api/getStuList', (req, res) => {
    let sqlStr = 'select * from student';
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: '获取数据失败', affextedRows: 0});
        res.json({success_code: 200, message: results, affextedRows: results.affextedRows});
    });
});

/**
 * 往数据库中插入学生记录
 */
router.post("/api/insertStuList",function(req,res){
    conn.query('INSERT INTO student SET  ?',req.body, (err, results) => {
        if (err) return res.json({err_code: 1, message: '插入数据失败', affextedRows: 0});
        res.json({success_code: 200, message:'插入成功'});
    });
});

/**
 * 删除数据库中的一条学生记录
 */
router.post("/api/delStuList", (req,res)=>{
    console.log(req.body);
    let  sqlStr = 'DELETE FROM student WHERE id = ?';
    conn.query(sqlStr, [req.body.id], (err, results) => {
        if (err) return res.json({err_code: 1, message: '删除数据失败', affextedRows: 0});
        res.json({success_code: 200, message: '删除数据失败', affextedRows: 0});
    });
});

router.get('/public/images/home/*', function (req, res) {
    res.sendFile( req.url );
    console.log(req.url);
    console.log(__dirname);
});

module.exports = router;

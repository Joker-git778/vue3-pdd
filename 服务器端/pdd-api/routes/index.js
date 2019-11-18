const express = require('express');
const router = express.Router();

const connection = require("./../db/db");

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });

});

const recommendArr = require('./../data/recommend').data;
router.get('/recommend/api', function(req, res, next) {
    // 1. 定义临时数组
    let temp_arr_all = [];
    // 2. 遍历
    for (let i = 0; i < recommendArr.length; i++) {
        // 2.1 取出单个数据对象
        let oldItem = recommendArr[i];
        // 2.2 取出数据表中对应的字段
        let temp_arr = [];
        temp_arr.push(oldItem.goods_id);
        temp_arr.push(oldItem.goods_name);
        temp_arr.push(oldItem.short_name);
        temp_arr.push(oldItem.thumb_url);
        temp_arr.push(oldItem.hd_thumb_url);
        temp_arr.push(oldItem.image_url);
        temp_arr.push(oldItem.price);
        temp_arr.push(oldItem.normal_price);
        temp_arr.push(oldItem.market_price);
        temp_arr.push(oldItem.sales_tip);
        temp_arr.push(oldItem.hd_url);
        // 2.3 合并到大的数组
        temp_arr_all.push(temp_arr);
    }
    // console.log(temp_arr_all);

    // 3. 批量插入数据库表
    // 3.1 数据库查询的语句
    let sqlStr = "INSERT INTO pdd_recommend(`goods_id`,`goods_name`,`short_name`, `thumb_url`, `hd_thumb_url`, `image_url`, `price`, `normal_price`, `market_price`, `sales_tip`, `hd_url`) VALUES ?";
    // 3.2 执行语句
    connection.query(sqlStr, [temp_arr_all], (error, results, fields) => {
        if (error) {
            console.log(error);
            console.log('插入失败');
        } else {
            console.log('插入成功');
        }
    });
});

/**
 * 获取首页轮播图
 */
router.get('/api/homecasual', (req, res) => {
    // 1.1 数据库查询语句
    let sqlStr = "SELECT * FROM pdd_home_casual"; // 注意表名不可以是-中划线
    // 1.2 执行语句
    connection.query(sqlStr, (error, results, fields) => {
        if (error) {
            res.json({ err_code: 0, message: "请求数据失败" });
        } else {
            res.json({ success_code: 200, message: results });
        }
    })
});

/**
 * 获取首页导航
 */
router.get('/api/homenav', (req, res) => {
    /*
    let sqlStr = 'select * from homenav';
     conn.query(sqlStr, (err, results) => {
         if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
         res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
     })
     */
    const data = require('../data/homenav');
    res.json({ success_code: 200, message: data });
});

/**
 * 获取首页商品列表
 */
router.get('/api/homeshoplist', (req, res) => {
    /*
  let sqlStr = 'select * from homeshoplist';
   conn.query(sqlStr, (err, results) => {
       if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
       res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
   })
   */
    setTimeout(function() {
        const data = require('../data/shopList');
        res.json({ success_code: 200, message: data })
    }, 300);
});

/**
 * 获取推荐商品列表
 * 参数 页码 条数
 */
router.get('/api/recommendshoplist', (req, res) => {
    // 1.0 获取参数
    let pageNo = req.query.page || 1; // 页码
    let pageSize = req.query.count || 20; // 每页显示的条数
    console.log(pageNo);
    console.log(pageSize);
    // 1.1 数据库查询的语句
    let sqlStr = 'SELECT * FROM pdd_recommend LIMIT ' + (pageNo - 1) * pageSize + ',' + pageSize; // 公式
    // console.log(sqlStr);

    // 1.2 执行语句
    connection.query(sqlStr, (error, results, fields) => {
        if (error) {
            res.json({ err_code: 0, message: '请求数据失败' });
        } else {
            setTimeout(() => {
                res.json({ success_code: 200, message: results });
            }, 2000);
        }
    });
});

/**
 * 获取推荐商品列表拼单用户
 */
router.get('/api/recommenduser', (req, res) => {
    setTimeout(function() {
        const data = require('../data/recommend_users');
        res.json({ success_code: 200, message: data })
    }, 10);
});

/**
 * 获取搜索分类列表
 */
router.get('/api/searchgoods', (req, res) => {
    setTimeout(function() {
        const data = require('../data/search');
        res.json({ success_code: 200, message: data })
    }, 10);
});

module.exports = router;
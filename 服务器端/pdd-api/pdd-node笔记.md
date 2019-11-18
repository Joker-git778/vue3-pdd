# mySql创建  sql语句
1. 点击连接 记住地址 账号 密码
2. 新建数据库
   ```
    CREATE DATABASE `name`
    eg: CREATE DATABASE `vue3-pdd`
   ```

# node - mySql使用
1. github 搜索 mysql
2. npm i mysql --save
3. 新建db文件夹 -> db.js
   ```
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: '127.0.0.1', // 数据库地址
        user: 'root', // 账号
        password: '123456', // 密码
        database: 'mysql-pdd', // 数据库名称  
    });

    connection.connect(err => {
        if (err) throw err;
        console.log("连接成功");
    });

    module.exports = connection;
   ```
4. 路由文件引入
   ```
    eg: router -> index.js
        const connection = require("./../db/db");

        /**
          * 获取首页轮播图
        */
         router.get('/api/homecasual', (req, res) => {
             // 1.1 数据库查询语句
             let sqlStr = "SELECT * FROM pdd_home_casual"; // 注意表名不可以是-中划线
             // 1.2 执行语句
             connection.query(sqlStr, (error, results, fields) => {
                 if (error) throw error;
                 console.log(results[0]);
             })
         });
   ```
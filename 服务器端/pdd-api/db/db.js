const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1', // 数据库地址
    user: 'root', // 账号
    password: 'zxc137317', // 密码
    database: 'mysql-pdd', // 数据库名称
});

connection.connect(err => {
    if (err) throw err;
    console.log("连接成功");
});

module.exports = connection;
var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'testdb.cxqdjjpxcmwy.ap-northeast-2.rds.amazonaws.com',
    user: 'master',
    password: 'bb-password',
    database: 'mydb'
});
db.connect();

module.exports = db;
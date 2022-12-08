const { query } = require('express');
var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'bbdb.cuv4hgkmdrfn.ap-northeast-2.rds.amazonaws.com',
    user: 'master',
    password: 'bb-password',
    database: 'subway',
    multipleStatements: true

});
db.connect();

module.exports = db;

// db.connect(function (err) {
//     if (err) throw err;
//     console.log("You are connected");
// });

// var sql1 = 'SELECT `now`,`conges` FROM `subway_nonstop`;';
// var sql2 = 'SELECT `now`,`conges` FROM `subway_conges`;';

// db.query(sql1 + sql2, function (err, results, field) {
//     var sql1_result = results[0];	//sql1 의 결과값
//     var sql2_result = results[1];
 
//     var merge = sql1_result.concat(sql2_result); //array 병합

//     var unique = merge.filter((subway, idx, arr)=>{
//         return arr.findIndex((item) => item.now === subway.now  && item.conges === subway.conges ) === idx
//     }); //중복제거
     
//     var unique2 = unique.filter(el=>el.conges == '매우혼잡'); //매우혼잡
    
//     var insert = 'INSERT INTO con_result (now, conges) VALUES ?;'
//     db.query(insert, 
//         [unique2.map(item => [item.now, item.conges])], 
//         (err, rows) => {
//         if (err) throw err;
//         console.log("All Rows Inserted")
//     })
// })





    
//     if (sql1_result == '매우혼잡' || sql2_result.length > 0) {
//         db.query(
//             'INSERT INTO con_result (conges) VALUES("매우혼잡")'),function (err, results, field){
//                 console.log(results);
//             }
//     }
// }
// );

// var congeslist1 = {
//     list : function(req, res){
//         var sql1 = 'SELECT `nonstop_conges` FROM `subway_nonstop` WHERE `nonstop_conges` = "매우혼잡"';

//         db.query(sql1, function(err, results, field){
			
// 			res.render('conges/congeslist1', {data : 'testData list ejs', congeslist1 : results});
//     })

//     }
// }

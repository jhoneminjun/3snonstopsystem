var express = require('express');
var router = express.Router();
var db = require('./db.js');

var ns = {
    
}

// router.get("/", function (req, res) {
//     var sql = "SELECT `station_name` from `subway_nonstop`"
//     db.query(sql, function (error, results, field) {
//       if (error) throw error;
//       if (results.some(el=>el.station_name == '이태원')) {
//         res.render("nonstopsys", {
//           line21: "https://nonstopbebe.s3.ap-northeast-2.amazonaws.com/nodes/21.gif",
//         })
//       }
//     })
//   })

db.on('error', function() {});

module.exports = router;
const http = require('http');
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const server = http.createServer(app);

const port = 3003;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.render('nonstopsys');
// })

// var nonstopRouter = require('./public/pool/nonstop.js')

// app.use('/', nonstopRouter);


const { mainModule } = require('process');
var db = require('./public/pool/db.js');

app.get("/nonstopsys", function(req,res){
    var sql = "SELECT `station_name` from `subway_nonstop`;";
    db.query(
      sql, function(err,results,field){
        res.render("nonstopsys", {data : results})
      }
    )
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var sql = 'SELECT `conges` FROM `subway_nonstop` where `conges` = "매우혼잡";'



// app.gerr('/', function (request, response) {
// db.query(sql, function (error, results, fields) { 
//     if (error) throw error;
//     if (results.length > 0) {    
//             response.send(`<script type="text/javascript">alert("현재 역은 무정차합니다.");
//                     document.location.href="/";</script>`);
//     } 
// })
// });

// app.get("/", function (req, res) {
//   var sql = "SELECT `station_name` from `subway_nonstop`"
//   db.query(sql, function (error, results, field) {
//     if (error) throw error;
//     if (results.some(el=>el.station_name == '이태원')) {
//       res.render("nonstopsys", {
//         line21: "https://nonstopbebe.s3.ap-northeast-2.amazonaws.com/nodes/21.gif"
//       })
//     }
//   })
// })

// app.get("/", function(req,res){
//   res.render("nonstopsys", {
//   })
// })



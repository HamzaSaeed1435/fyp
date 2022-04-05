const mysql=require('mysql')

// var db ={
//     host:'us-cdbr-east-05.cleardb.net',
//     user :'bc39792813b337',
//     password:'5f185273',
//     database:'heroku_e862a1fb6c8706e'
// }

// mysql://bc39792813b337:5f185273@us-cdbr-east-05.cleardb.net/heroku_e862a1fb6c8706e?reconnect=true
// const  db = mysql.createConnection({
//     host:'localhost',
//     user :'root',
//     password:'',
//     database:'uiit'
// })
var db = mysql.createPool({
    connectionLimit : 10,
    host:'us-cdbr-east-05.cleardb.net',
    user :'bc39792813b337',
    password:'5f185273',
    database:'heroku_e862a1fb6c8706e'
  });
   
  db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

module.exports=db
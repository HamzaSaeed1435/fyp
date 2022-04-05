const mysql=require('mysql')

// const  db = mysql.createConnection({
//     host:'us-cdbr-east-05.cleardb.net',
//     user :'bc39792813b337',
//     password:'5f185273',
//     database:'heroku_e862a1fb6c8706e'
// })

// mysql://bc39792813b337:5f185273@us-cdbr-east-05.cleardb.net/heroku_e862a1fb6c8706e?reconnect=true
const  db = mysql.createConnection({
    host:'localhost',
    user :'root',
    password:'',
    database:'uiit'
})
db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Mysql Connected.....')
    }
})


module.exports=db
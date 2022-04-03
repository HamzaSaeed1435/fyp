const mysql=require('mysql')

const  db = mysql.createConnection({
    host:'us-cdbr-east-05.cleardb.net',
    user :'b07938f621d85f',
    password:'8c0e4db43ef58a6',
    database:'heroku_b7086dbc5ee85c1'
})
// const  db = mysql.createConnection({
//     host:'localhost',
//     user :'root',
//     password:'',
//     database:'uiit'
// })
db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Mysql Connected.....')
    }
})


module.exports=db
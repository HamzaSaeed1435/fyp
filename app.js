const express= require('express')
const path= require('path')
const mysql=require('mysql')
const dotenv =require('dotenv')
const { urlencoded } = require('express')
const hbs = require('hbs');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const flash = require('connect-flash');
const bcrypt = require('bcryptjs');

const connection=require('./config/db')
const auth=require('./middleware/auth')

dotenv.config({path:'./.env'})
const app = express()
app.use(express.static('public'));
app.use(urlencoded({extended:false}));
app.use(express.json())
app.set('view engine', 'hbs')

app.set('views',path.join(__dirname,'./views'))
// hbs.registerPartials(path.join(__dirname,'./views/partials'))
hbs.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});
hbs.registerHelper('iftype', function (conditional, options) {
    if (conditional===options.hash.value) {
        return options.fn(this)
    } else {
      return options.inverse(this);
    }
  });
  
app.use(session({
    secret:'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));
  
app.use(flash());
 
app.use(cookieParser());





app.use('/',require('./api/login'))
app.use('/',require('./api/student'))

app.use('/',require('./api/admin'))
app.use('/',require('./api/approvel_authority.js'))
app.use('/',require('./api/Staff'))
app.use('/',require('./api/supervisor.js'))
app.use('/',require('./api/coordinator.js'))
app.use('/',require('./api/evaluvator.js'))


app.get('/',(req,res)=>{
    res.render("login.hbs")
   
})

app.get('/changepassword',(req,res)=>{
  return res.render("changepassword.hbs", {
    success:req.flash('success'),
    error:req.flash('error')
  });
})
 app.post('/changepassword',auth.auth,  (req,res)=> {

  if(req.body.oldPass===req.body.newPass){
  
    req.flash('error', 'new password should not be same as old password');
           return     res.redirect('/changepassword')
  }
  else{
    if(req.body.newPass!==req.body.confirmPass){
      req.flash('error', 'password should  be same with Confirm  password');
          return      res.redirect('/changepassword')
    }
    connection.query("select * from login  where email='"+req.user[0].email+"'",(err,result)=>{
      if(err) throw err;
      if(result.length>0){
        
        if(result){
          
         bcrypt.compare(req.body.oldPass,result[0].password,(err,compare)=>{
           if(err) throw err
           if(!compare){
                  req.flash('error', 'Your Old Passowrd is Wrong');
                return  res.redirect('/changepassword')
                 }
                 bcrypt.hash(req.body.newPass,10,(err,hash)=>{
                  if(err) throw err  
                  const sqll="update login set password='"+hash+"' where userId='"+result[0].userId+"'"  
                  console.log(sqll)
        connection.query(sqll,(err,result)=>{
         if(err)  throw err
      
          req.flash('success', 'Password Successfully Changed');
          res.redirect('/changepassword')
         
        })
         })
          
            })
          }
        } 
        })
      }
 })

app.get('/logout',function(req, res){
    try{
      res.clearCookie("access_token");
      res.redirect('/');
    }catch(error){
      res.status(500).send(error)
    }
    
});
const port=process.env.PORT || 3000

app.listen(port,()=>{
   console.log('Server is running onn port '+port)
})



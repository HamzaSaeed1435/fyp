const express= require('express')
const path= require('path')
const mysql=require('mysql')
const dotenv =require('dotenv')
const { urlencoded } = require('express')
const hbs = require('hbs');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const flash = require('connect-flash');
const bcrypt=require('bcryptjs')
dotenv.config({path:'./.env'})
const app = express()
app.use(express.static(__dirname + '/public'))
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




// app.use('/',require('./api/admin'))
// app.use('/',require('./api/login'))
// app.use('/',require('./api/Staff'))
// app.use('/',require('./api/student'))
// app.use('/',require('./api/approvel_authority.js'))



app.get('/',(req,res)=>{
    // res.render("login.hbs")
    res.send("hello")
}) 

// app.get('/logout',function(req, res){
//     try{
//       res.clearCookie("access_token");
//       res.redirect('/');
//     }catch(error){
//       res.status(500).send(error)
//     }
    
// });
const port=process.env.port || 3000

app.listen(port,()=>{
   console.log('Server is running onn port '+port)
})



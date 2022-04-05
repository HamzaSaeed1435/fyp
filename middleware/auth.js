const jwt = require("jsonwebtoken");
const connection=require('../config/db')

const auth = async (req,res,next) => {
  
  try{
    const token=req.cookies.access_token
     const varifyuser=jwt.verify(token,process.env.SECRET_KEY)
    
     const sql=`SELECT * FROM ${varifyuser.role} WHERE email=?`
    
     connection.query(`SELECT * FROM ${varifyuser.role} where email=?`,[varifyuser.email],(err,user)=>{
       if(err) throw err

    if(user.length>0){
        req.user=user
        req.token=token
      
        next()
    }
})

  }catch(error)
  {
// res.status(401).send(error)
res.redirect('/')
  }
}

let checkAdmin=async(req,res,next)=>{
  
  if(req.user[0].role!=='admin')
  {
    res.redirect('./')
  }else{
    next()
  }
 
}

let checkApprovel_Authority=async(req,res,next)=>{

  if(req.user[0].role!=='approvel_authority')
  {
    
      res.redirect('./')
   
  }else{
      next()
  }
 
}

let checkStudent=async(req,res,next)=>{
  if(req.user[0].role!=='student')
  {
    res.redirect('./')
  }else{
    next()
  }
 
}
let checkStaff=async(req,res,next)=>{
  if(req.user[0].role!=='staff')
  {
    res.redirect('./')
  }else{
    next()
  }
 
}
module.exports=
{auth,
  checkAdmin,
  checkApprovel_Authority,
  checkStudent:checkStudent,
  checkStaff:checkStaff
}
const jwt = require("jsonwebtoken");
const connection=require('../config/db')

const auth = async (req,res,next) => {
  
  try{
    const token=req.cookies.access_token

     const varifyuser=jwt.verify(token,process.env.SECRET_KEY)
   
     const sql=`SELECT * FROM student WHERE reg_no=?`
    
   
     connection.query(sql,[varifyuser.email],(err,user)=>{
        if(err) throw err

    

if(user.length>0)
{
   
    req.user=user
    req.token=token
  
    next()
}else{
    res.json({
      message:"You are not authorized to access this page"
        })
}
       })
     
  }catch(error)
  {
    
// res.status(401).send(error)
res.json({     message:"You are not authorized to access this page"
  })
  }
}



let checkStudent=async(req,res,next)=>{
  if(req.user[0].role==='student')
  {
    next()
  }else{
    res.json({
      message:"You are not authorized to access this page",
      })
    
  }
 
}

module.exports=
{auth,
  checkStudent:checkStudent
}
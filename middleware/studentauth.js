const jwt = require("jsonwebtoken");
const connection=require('../config/db')

const auth = async (req,res,next) => {
  
 
    // const token=req.cookies.access_token
    res.header(
      "Access-Control-Allow-Headers",
      "*"
    );

    let token = req.headers["authorization"];
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY0OTg2MzU2NCwiZXhwIjoxNjQ5OTQ5OTY0fQ.kl-SoaaXpmw9Sxmo32T9-sQDDcjxPuL0Y3XQqqoWLMs';
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
    //  const varifyuser=jwt.verify(token,process.env.SECRET_KEY,err)
   

     jwt.verify(token,'hamzasaeed', (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      
      req.userId = decoded.id;
      req.role = decoded.role;
      req.token = token;
      next();
      
    });
  

  
}



let checkStudent=async(req,res,next)=>{
  if(req.role==='student')
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
const jwt = require("jsonwebtoken");
const connection=require('../config/db')

const auth = async (req,res,next) => {
  
 
    // const token=req.cookies.access_token
    res.header(
      "Access-Control-Allow-Headers",
      "*"
    );

    let token = req.headers["authorization"];
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6InN0dWRlbnQiLCJkZWdyZWUiOiJCcy1Tb2Z0d2FyZSBFbmdpbmVlcm5nIiwiaWF0IjoxNjU1MTk1OTYwLCJleHAiOjE2NTUyODIzNjB9.dOIQ95f3-dpM1eNSita2WbGw_n500IMh45Iypo_dV-w';
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
      req.degree=decoded.degree
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
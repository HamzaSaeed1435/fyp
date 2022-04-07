const loginService = require('../service/login');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')

let getPageLogin = (req, res) => {
    return res.render("login.hbs", {
      error:req.flash('error')
    });
};
let handleLogin = async (req, res,next) => {
  
    try {
        let user=await loginService.handleLogin(req.body.email, req.body.password);

        if (user && (await bcrypt.compare(req.body.password, user.password))) { 
            // Create token
            const token = jwt.sign(
              { user_id: user.userId,
                role:user.role,
                email:user.email
               },
              process.env.SECRET_KEY,
              {
                expiresIn: "1d",
              }
            );
            // save user token
         
            // user
             res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    // next()

    if(user.role==='admin')
    {
      res.redirect('./Admin')
    }
     if(user.role==='approvel_authority'){
     
      res.redirect('./Approvel_Authority')
    }
    if(user.role==='student'){
  
      res.redirect('./student')
    } if(user.role==='staff'){
  
      res.redirect('./staff')
    }
          }else{
          req.flash('error', 'Invalid Crediantials...!!!!!!!');
        return res.redirect("/login");
          }
    } catch (err) {
        console.log(err);
    }
};




let handlestudentLogin = async (req, res,next) => {
  
  try {
      let user=await loginService.handleLogin(req.body.email, req.body.password);

      if (user && (await bcrypt.compare(req.body.password, user.password))) { 
              const token = jwt.sign(
              { user_id: user.userId,
                role:user.role,
                email:user.email
               },
              process.env.SECRET_KEY,
              {
                expiresIn: "1d",
              }
            );
            // save user token
         
            // user
             res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
          // Create token
               res.json({
            user: user,
            message: "Login Successfully",
          });
        }else{
          res.json({
         
          })
        }
      
  } catch (err) {
           res.json({
            message: err.message,
          });
        }
};


module.exports = {
    getPageLogin: getPageLogin,
    handleLogin: handleLogin,
    handlestudentLogin:handlestudentLogin
};


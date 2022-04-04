const  express = require('express');
const loginController = require('../controller/login');
const auth=require('../middleware/auth')
const router=express.Router();

// router.get("/login",loginController.getPageLogin)
// router.post("/login",loginController.handleLogin);



router.post("/student/login",loginController.handlestudentLogin);

module.exports=router;
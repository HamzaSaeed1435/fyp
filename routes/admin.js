const express= require('express')
const AdminQueries =require('../controller/Admin');
const auth=require('../middleware/auth')
const router=express.Router()







// Admin
router.get('/AdminQueries',auth.auth,auth.checkAdmin,AdminQueries.getRecord,(req,res)=>{
    res.render('AdminQueries.hbs')
})

router.get('/Admin',auth.auth,auth.checkAdmin,(req,res)=>{
    res.render('AdminDashboard.hbs')
}),





module.exports=router;
// Approvel Authority
const express= require('express')
const auth=require('../middleware/auth')
const Approvel_AuthorityQueries =require('../controller/Approvel_authority');
const router=express.Router()



router.get('/Approvel_Authority',auth.auth,auth.checkApprovel_Authority,Approvel_AuthorityQueries.getRecord,(req,res)=>{
    res.render('Approvel_Authority_dashboard.hbs')
})
router.get('/ApprovedQueries',auth.auth,auth.checkApprovel_Authority,Approvel_AuthorityQueries.getApprovedRecord,(req,res)=>{
    res.render('Approvel_Authority_dashboard.hbs')
})

router.get('/Approvel_Authority/Approve/:id',auth.auth,auth.checkApprovel_Authority,Approvel_AuthorityQueries.approve)
router.get('/Approvel_Authority/Reject/:id',auth.auth,auth.checkApprovel_Authority,Approvel_AuthorityQueries.reject)

router.get('/RejectedQueries',auth.auth,auth.checkApprovel_Authority,Approvel_AuthorityQueries.getRejectedRecord,(req,res)=>{
    res.render('Approvel_Authority_dashboard.hbs')
})


module.exports=router;
const express= require('express')
const fs=require('fs');
const path= require('path')
const coordinator=require("../controller/coordinator")
const auth=require('../middleware/auth')
const router=express.Router()

router.get('/coordinator',auth.auth,auth.checkCoordinator,coordinator.getsup)
router.get('/fyp',auth.auth,auth.checkCoordinator,coordinator.fyp)
router.get('/coordinator/:id',auth.auth,auth.checkCoordinator,coordinator.getDetails)

router.get('/coordinator/Evaluvator/:id',auth.auth,auth.checkCoordinator,coordinator.Evaluvator)

router.post('/inserEvaluvator',auth.auth,auth.checkCoordinator,coordinator.inserEvaluvator)


router.get('/coordinator/Result/:id',auth.auth,auth.checkCoordinator,coordinator.result)
 



module.exports=router
const express= require('express')
const fs=require('fs');
const path= require('path')
const evaluvator=require("../controller/evaluvator")
const auth=require('../middleware/auth')
const router=express.Router()



router.get('/Evaluvation_groups/:typeId/:groupId',auth.auth,auth.checkEvaluvator,evaluvator.getGroups)

router.get('/evaluvator/:id',auth.auth,auth.checkEvaluvator,evaluvator.getDetails)

router.get('/evaluvator',auth.auth,auth.checkEvaluvator,evaluvator.EvaluvateGroup)

router.get('/Evaluvate/:typeId/:id',auth.auth,auth.checkEvaluvator,evaluvator.EvaluvateMarks)

router.post('/InsertEvaluvatormarks',auth.auth,auth.checkEvaluvator,evaluvator.InsertEvaluvatormarks)


module.exports=router
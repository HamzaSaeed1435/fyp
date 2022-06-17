const express= require('express')
const fs=require('fs');
const path= require('path')
const supervisor=require("../controller/supervisor")
const auth=require('../middleware/auth')
const router=express.Router()

router.get('/supervisor',auth.auth,auth.checkSupervisor,supervisor.getRecord)


router.get('/supervisor/Approve/:id',auth.auth,auth.checkSupervisor,supervisor.approve)
router.get('/supervisor/Reject/:id',auth.auth,auth.checkSupervisor,supervisor.reject)

router.get('/proposal',auth.auth,auth.checkSupervisor,supervisor.proposal)

router.get('/marks/:id',auth.auth,auth.checkSupervisor,supervisor.get)

router.get('/supervisor/:id',auth.auth,auth.checkSupervisor,supervisor.getDetails)

router.post('/Insertmarks',auth.auth,auth.checkSupervisor,supervisor.insertmarks)




router.get('/viewproposal/:id',(req,res)=>{
    fs.readFile(path.join(__dirname,'../docoument/Application/'+req.params.id+'.pdf'), (err, data) => {
        res.set({
          "Content-Type": "application/pdf" //here you set the content type to p//if you change from inline to attachment if forces the file to download but inline displays the file on the browser
        });
        res.send(data); // here we send the pdf file to the browser
        });
})
module.exports=router
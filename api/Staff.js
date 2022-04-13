// staff
const express= require('express')
const fs=require('fs');
const path= require('path')
const staff=require("../controller/staff")
// const epc =require('../controller/printPdf')
const auth=require('../middleware/auth')
const router=express.Router()

router.get('/staff',auth.auth,auth.checkStaff,staff.Record,(req,res)=>{
    res.render('Approvel_Authority_dashboard.hbs')
})

// router.get('/staff/print/:id',epc.download)

router.get('/staff/print/:id',(req,res)=>{
    fs.readFile(path.join(__dirname,'../docoument/Application/'+req.params.id+'.pdf'), (err, data) => {
        res.set({
          "Content-Type": "application/pdf" //here you set the content type to p//if you change from inline to attachment if forces the file to download but inline displays the file on the browser
        });
        res.send(data); // here we send the pdf file to the browser
        });
})

module.exports=router;
// Stduent
const express= require('express')
const studentController=require('../controller/student')
const auth=require('../middleware/auth')
const multer=require('multer')
const router=express.Router()

const upload = multer({ dest: './docoument/Application' })



router.get('/student',auth.auth,auth.checkStudent,(req,res)=>{
    res.render('student/studentDashboard.hbs')
    })
    
    router.get('/studentQueries',auth.auth,auth.checkStudent,studentController.getRecord)
    
     router.get('/AddQueries',auth.auth,auth.checkStudent,studentController.getTypes)
      router.post('/AddQueries',auth.auth,auth.checkStudent,upload.single('application'),studentController.addQueries)

      module.exports=router;
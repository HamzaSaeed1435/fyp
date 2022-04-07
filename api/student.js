// Stduent
const express= require('express')
const studentController=require('../controller/student')
const auth=require('../middleware/studentauth')
const multer=require('multer')
const router=express.Router()

const upload = multer({ dest: './docoument/Application' })




    
    router.get('/student/dashboard',auth.auth,auth.checkStudent,studentController.dashboard)
    router.get('/student/Letters',auth.auth,auth.checkStudent,studentController.getLetters)
    router.get('/student/Application',auth.auth,auth.checkStudent,studentController.getApplication)
    router.get('/student/Certificate',auth.auth,auth.checkStudent,studentController.getCertificate)
    //  router.get('/AddQueries',auth.auth,auth.checkStudent,studentController.getTypes)
    //   router.post('/AddQueries',auth.auth,auth.checkStudent,upload.single('application'),studentController.addQueries)

      module.exports=router;
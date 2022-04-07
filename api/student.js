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
 
      router.post('/student/AddLetter',auth.auth,auth.checkStudent,studentController.addLetter)
      router.post('/student/AddApplication',auth.auth,auth.checkStudent,studentController.addApplication)
      router.post('/student/AddCertificate',auth.auth,auth.checkStudent,studentController.addCertificate)

      router.get('/student/getProcessingApp',auth.auth,auth.checkStudent,studentController.getProccessingApp)
      router.get('/student/getRejectedApp',auth.auth,auth.checkStudent,studentController.getRejectedApp)
      router.get('/student/getSavedApp',auth.auth,auth.checkStudent,studentController.getSavedApp)


      module.exports=router;
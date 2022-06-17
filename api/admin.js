const express= require('express')
const AdminQueries =require('../controller/Admin');
const auth=require('../middleware/auth')
const router=express.Router()







// Admin
router.get('/approvel_authorities',auth.auth,auth.checkAdmin,AdminQueries.getauthorities)
router.get('/Evaluators',auth.auth,auth.checkAdmin,AdminQueries.getEvaluators)
router.get('/Staffs',auth.auth,auth.checkAdmin,AdminQueries.getStaffs)
router.get('/students',auth.auth,auth.checkAdmin,AdminQueries.getStudents)
router.get('/Supervisors',auth.auth,auth.checkAdmin,AdminQueries.getSupervisors)

router.get('/Co-ordinator',auth.auth,auth.checkAdmin,AdminQueries.getCoordinator)


router.get('/AdminQueries',auth.auth,auth.checkAdmin,AdminQueries.getRecord,(req,res)=>{
    res.render('AdminQueries.hbs')
})

router.get('/Admin',auth.auth,auth.checkAdmin,AdminQueries.dashobard)



// router.get('/approvel_authority',auth.auth,auth.checkAdmin,AdminQueries.addApprovel_authority)




module.exports=router;
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

router.get('/addSupervisor',auth.auth,auth.checkAdmin,(req,res)=>{
    res.render('addSupervisor.hbs')

})
router.get('/addCoordinator',auth.auth,auth.checkAdmin,(req,res)=>{
    res.render('addCoordinator.hbs')

})
router.get('/addEvaluavator',auth.auth,auth.checkAdmin,(req,res)=>{
    res.render('addEva.hbs')

})

router.get('/addStaff',auth.auth,auth.checkAdmin,(req,res)=>{
    res.render('addStaff.hbs')

})

router.get('/addStudent',auth.auth,auth.checkAdmin,(req,res)=>{
    res.render('addStudent.hbs')

})


router.post('/addSupervisor',auth.auth,auth.checkAdmin,AdminQueries.addSupervisor)
router.post('/addCoordinator',auth.auth,auth.checkAdmin,AdminQueries.addCoordinator)
router.post('/addEvaluavator',auth.auth,auth.checkAdmin,AdminQueries.addEvaluavator)
router.post('/addStaff',auth.auth,auth.checkAdmin,AdminQueries.addStaff)
router.post('/addStudent',auth.auth,auth.checkAdmin,AdminQueries.addStudent)
// router.get('/approvel_authority',auth.auth,auth.checkAdmin,AdminQueries.addApprovel_authority)




module.exports=router;
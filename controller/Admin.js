const AdminQueries =require('../service/Admin');
const connection=require('../config/db')


let dashobard=async(req,res)=>{
    const sup = await AdminQueries.CountSupervisor()
    const cor = await AdminQueries.CountCoordinator()
    const stu = await AdminQueries.CountStudents()
    const Eva = await AdminQueries.CountEvaluvator()
    const staff = await AdminQueries.CountStaff()

res.render('AdminDashboard.hbs',{sup:sup[0].count,cor:cor[0].count,stu:stu[0].count,Eva:Eva[0].count,staff:staff[0].count})
}

let getRecord = async (req, res) => {
 const record = await AdminQueries.getRecord()

    return res.render("AdminQueries.hbs",{record:record});
};


let getStudents = async (req, res) => {
    const record = await AdminQueries.getStudents()
       return res.render("students.hbs",{record:record});
   };
   let getauthorities   = async (req, res) => {
    const record = await AdminQueries.getauthorities()
       return res.render("authorities.hbs",{record:record});
   };

   let getStaffs= async (req, res) => {
    const record = await AdminQueries.getStaffs()
       return res.render("Staffs.hbs",{record:record});
   };

   let getEvaluators = async (req, res) => {
    const record = await AdminQueries.getEvaluators()
       return res.render("Evaluators.hbs",{record:record});
   };


   let getSupervisors = async (req, res) => {
     
    const record = await AdminQueries.getSupervisors()
       return res.render("supervisor.hbs",{record:record});
   };


   let getCoordinator = async (req, res) => {
     
    const record = await AdminQueries.getCoordinator()
    // console.log(record)
       return res.render("coordinators.hbs",{record:record});
   };
   
   let  addSupervisor = async (req, res) => {
     
    const record = await AdminQueries. addSupervisor(req.body)
    // console.log(record)
       return res.render("addSupervisor.hbs");
   };
   let  addCoordinator = async (req, res) => {
     
    const record = await AdminQueries. addCoordinator(req.body)
    // console.log(record)
       return res.render("addCoordinator.hbs");
   };
   
     let  addEvaluavator = async (req, res) => {
     
    const record = await AdminQueries. addEvaluavator(req.body)
       return res.render("addEva.hbs");
   };


   let  addStaff = async (req, res) => {
    const record = await AdminQueries.addStaff(req.body)
       return res.render("addStaff.hbs");
   };

   let  addStudent = async (req, res) => {
    const record = await AdminQueries.addStudent(req.body)
       return res.render("addStudent.hbs");
   };






// let addApprovel_authority=(req,res)=>{
//     const {Name,Email,designation}=req.body
//     const sql=`INSERT INTO approvel_authority (Email,Name,designation,role) VALUES ('${Name}','${Email}','${designation}','approvel_authority')`
//     connection.query(sql,(error,result)=>{
//         if(error){
//             res.send(error)
//         }else{
//             res.send(result)
//         }
//     })
// }

module.exports = {
    getRecord: getRecord,
    getStudents:getStudents,
    getauthorities:getauthorities,
    getStaffs:getStaffs,
    getEvaluators:getEvaluators,
    getSupervisors,
    getCoordinator,
    dashobard,
    addSupervisor,
    addCoordinator,
    addEvaluavator,
    addStaff,
    addStudent

// addApprovel_authority
};


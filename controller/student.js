const db = require('../config/db');
const student=require('../service/student')

let getUser= async (req, res) => {
    const user = await student.user(req.user[0].id)
       return res.render("studentDashboard.hbs",{user});
   };

   let dashboard= async (req, res) => {
const CountApplication= await student.CountApplication(req.user[0].id)
const CountProcesApp =await student.CountProcesApp(req.user[0].id)
const CountRejctApp =await student.CountRejctApp(req.user[0].id)
const CountsavedApp =await student.CountsavedApp(req.user[0].id)


res.json({
    TotalApplication: CountApplication[0].count,
    ProcessingApp:CountProcesApp[0].count,
    RejectApp:CountRejctApp[0].count,
    SavedApp:CountsavedApp[0].count
})
   };

   let getTypes= async (req,res)=>{
const types=await student.getType()

return res.render('student/studentNewQueries.hbs',{types})
   }

   let addQueries=async (req,res)=>{
        if(req.body.type==='letter'){
        await student.addLetter(req.user[0].studentId,req.body.letter)
        return res.redirect('studentQueries')
        }
        else if(req.body.type==='certificate'){
            await student.addCertificate(req.user[0].studentId,req.body.certificate)
            return res.redirect('studentQueries')

        }else if(req.body.type==='application'){
            console.log(req.file)
 
            // console.log(buffer)
            if (!req.file.originalname.match(/\.(pdf|doc|docx|DOCX|txt)$/)) {
                console.log('Please upload file')
            }
            await student.addApplication(req.user[0].studentId,req.file.originalname)
            return res.redirect('studentQueries')
        }
   }
  
   module.exports={
       getUser,
       dashboard,
       addQueries,
       getTypes:getTypes
   }
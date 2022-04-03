const db = require('../config/db');
const student=require('../service/student')

let getUser= async (req, res) => {
    const user = await student.user(req.user[0].id)
       return res.render("studentDashboard.hbs",{user});
   };

   let getRecord= async (req, res) => {
      
    const record = await student.getRecord(req.user[0].studentId)

       return res.render("student/studentQueries.hbs",{record});
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
       getRecord,
       addQueries,
       getTypes:getTypes
   }
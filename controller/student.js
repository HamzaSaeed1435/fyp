const db = require('../config/db');
const student=require('../service/student')


   let dashboard= async (req, res) => {
const CountApplication= await student.CountApplication(req.user[0].id)
const CountProcesApp =await student.CountProcesApp(req.user[0].id)
const CountRejctApp =await student.CountRejctApp(req.user[0].id)
const CountsavedApp =await student.CountsavedApp(req.user[0].id)


res.json({
    TotalApplication: CountApplication[0].count,
    ProcessingApp:CountProcesApp[0].count,
    RejectApp:CountRejctApp[0].count,
    SavedApp:CountsavedApp[0].count,
    user:req.user[0]
})
   };

   let getLetters= async (req,res)=>{
    const types=await student.getLetters()
                res.json(types)
   }


   let getApplication= async (req,res)=>{
    const types=await student.getApplication()
    
    res.json(types)
       }

       let getCertificate= async (req,res)=>{
        const types=await student.getCertificate()
        
        res.json(types)
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
       dashboard,
       addQueries,
       getLetters,
       getApplication,
       getCertificate
   }
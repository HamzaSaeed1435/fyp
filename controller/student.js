const db = require('../config/db');
const student=require('../service/student')


   let dashboard= async (req, res) => {
const CountApplication= await student.CountApplication(req.userId)
const CountProcesApp =await student.CountProcesApp(req.userId)
const CountRejctApp =await student.CountRejctApp(req.userId)
const CountsavedApp =await student.CountsavedApp(req.userId)

const userDetail =await student.userDetail(req.userId)

res.json({
    TotalApplication: CountApplication[0].count,
    ProcessingApp:CountProcesApp[0].count,
    RejectApp:CountRejctApp[0].count,
    SavedApp:CountsavedApp[0].count,
    user:userDetail[0]
   
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
       

   let addLetter=async (req,res)=>{
      const result=  await student.addLetter(req.userId,req.body.subTypeId,req.body.authorityDeligatedId,req.body.comment)
       
        res.json({
            result:result
        })
  
   }
  
   

   let addCertificate=async (req,res)=>{

        const result=  await student.addCertificate(req.userId,req.body.subTypeId,req.body.authorityDeligatedId,req.body.comment)

        res.json({
            result:result

        })
  
   }  
   
   let addApplication=async (req,res)=>{

    const result=  await student.addApplication(req.userId,req.body.subTypeId,req.body.authorityDeligatedId,req.body.body)

    res.json({
        result:result

    })

}  
 
let getProccessingApp=async (req,res)=>{
    const result=  await student.getProccessingApp(req.userId)
    
    res.json({
        result:result
    })
}

let getRejectedApp=async (req,res)=>{
    const result=  await student.getRejectedApp(req.userId)
    res.json({
        result:result
    })
}

let getSavedApp=async (req,res)=>{
    const result=  await student.getSavedApp(req.userId)
    res.json({
        result:result
    })
}

   module.exports={
       dashboard,
       getLetters,
       getApplication,
       getCertificate,
       addCertificate,
       addApplication,
       addLetter,
       getProccessingApp,
       getRejectedApp,
       getSavedApp
   }
const db = require('../config/db');
const student=require('../service/student')
const multer  = require('multer');




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


let groupSelection=async (req,res)=>{
    const result=  await student.groupSelection(req.userId,req.body.members)
    res.json(result)

}


let getStudents=async(req,res)=>{
    const result=  await student.getStudents(req.degree)
res.json(result)
}


let selectsupervisor=async(req,res)=>{
    const result=  await student.selectsupervisor()
res.json(result)
}


let grouprecord=async(req,res)=>{
    // console.log(req.body)
    const result=  await student.grouprecord(req.body)
res.json(result)
}

let acceptpropasal=async(req,res)=>{
    const result=  await student.acceptpropasal(req.body)
    if(result=="")
    {
        res.json("No Record Found!")
    }
   
    else{
res.json(result)
    }

}


let propsalupload=async(req,res)=>{
    
 const result=  await student.propsalupload(req.file.filename,req.body)
res.json(result)

}



let documentupload=async(req,res)=>{
    
    const result=  await student.documentupload(req.file.filename,req.body)
   res.json(result)
    
   }

   let forgetpassword=async(req,res)=>{
    const result=  await student.forgetpassword(req.body.email)

    res.json({
        otp:result,
        status:'Email send succesfuly'
    })
   }

   let passReset=async(req,res)=>{
    const result=  await student.passReset(req.body.email,req.body.pass)

    res.json(result)
   }
   


   let showevaluator=async (req,res)=>{
    const result=  await student.showevaluator(req.body)
    res.json({
        result:result
    })
}




let showcoordinator=async (req,res)=>{
    const result=  await student.showcoordinator(req.body)
    res.json({
        result:result
    })
}



let showmarks=async (req,res)=>{
    
  
    const result=  await student.showmarks(req.userId)
    const result1=  await student.showeval(req.userId)

    res.json({
        supervisor:result,
        evaluvator:result1
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
       getSavedApp,
       groupSelection,
       getStudents,
       selectsupervisor,
       grouprecord,
       acceptpropasal,
       propsalupload,
       documentupload,
       forgetpassword,
       passReset,
       showevaluator,
       showcoordinator,
       showmarks
   }
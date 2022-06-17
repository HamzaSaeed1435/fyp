const promise=require('promise')
const mysql=require('mysql');
const connection=require('../config/db')

let getGroups=(id,typeId)=>{
    return new promise((resolve,reject)=>{
    
        const  sql= 'SELECT * FROM evaluvation e LEFT  JOIN groups_record g ON e.groupId=g.group_id  WHERE  e.evaluvationType_id=?  AND (e.evaluteId_1=? OR e.evaluteId_2=?)'
    
        connection.query(sql,[typeId,id,id],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}
let groupDetails=(id)=>{
    return new promise((resolve,reject)=>{
    
        
        // 
        const  sql= 'SELECT * FROM groups_record   where group_id=?'
    
        connection.query(sql,[id],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}


let groupMember=(id)=>{
    return new promise((resolve,reject)=>{
        const  sql= 'SELECT * FROM group_member m LEFT JOIN student s ON m.studentId = s.studentId WHERE groupId=?'
        connection.query(sql,[id],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}


let getEvaluvation=(userId)=>{

    return new promise((resolve,reject)=>{
    
        const  sql= 'SELECT * FROM evaluvation e LEFT JOIN evaluvation_type t ON e.evaluvationType_id=t.id WHERE  evaluteId_1=? OR evaluteId_2=?'
  
        connection.query(sql,[userId,userId],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}

let EvaluvateMarks=(id,userId)=>{
    return new promise((resolve,reject)=>{
    
        const  sql= 'SELECT * FROM group_member m LEFT JOIN student s ON m.studentId = s.studentId LEFT JOIN marks mark ON m.studentId=mark.studentId LEFT JOIN evaluvation_type ev ON mark.evaluvationType_id=ev.id WHERE groupId=? AND mark.evaluteId=? '
  
        connection.query(sql,[id,userId],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}



let InsertEvaluvatormarks=(id,data)=>{
    return new promise((resolve,reject)=>{
   
        const  sql= 'INSERT INTO marks ( `evaluvationType_id`, `studentId`, `marks`, `evaluteId`,`group_Id`) VALUES(?,?,?,?,?)'
  
        connection.query(sql,[data.typeId,data.studentId,data.marks,id,data.groupId],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}


let Member=(id)=>{
    return new promise((resolve,reject)=>{
        // const  sql= 'SELECT * FROM group_member m LEFT JOIN student s ON m.studentId = s.studentId LEFT JOIN marks mark ON m.studentId=mark.studentId LEFT JOIN evaluvation_type ev ON mark.evaluvationType_id=ev.id WHERE groupId=? AND mark.evaluteId=? '

        const  sql= 'SELECT * FROM group_member m LEFT JOIN student s ON m.studentId = s.studentId WHERE groupId=? '
     
        connection.query(sql,[id],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}

module.exports={
    getGroups,
    groupMember,
    groupDetails,
    getEvaluvation,
    EvaluvateMarks,
    InsertEvaluvatormarks,
    Member
}
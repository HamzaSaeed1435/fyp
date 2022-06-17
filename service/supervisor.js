const promise=require('promise')
const mysql=require('mysql');
const connection=require('../config/db')





let getRecord=(id)=>{

return new promise((resolve,reject)=>{
    
    // g LEFT JOIN student s ON g.memberOne = s.studentId OR  g.memberTwo= s.studentId 
    const  sql= 'SELECT * FROM groups_record g    where status=?  AND sup_Id=?'

    connection.query(sql,['0',id],(error,result)=>{
        if(error){
            reject(error)
        }else{
// console.log(result)
            resolve(result)  
}
    })
})
}


let approve=(id)=>{
    const date=new Date()
    const sql ='UPDATE groups_record SET ? WHERE group_id=?'
  return new Promise((resolve, reject) => {
    connection.query(sql,[{status :'1',approvel_date:date },id],(err,res)=>{
        if(err){
            reject(err)
        }else{
            resolve(res)  
}
       })
});
}


let reject=(id)=>{
    const date=new Date()
    const sql ='UPDATE groups_record SET ? WHERE group_id=?'
  return new Promise((resolve, reject) => {
    connection.query(sql,[{status :'-1'},id],(err,res)=>{
        if(err){
            reject(err)
        }else{
            resolve(res)  
}
       })
});
}

let groupDetails=(id,sup_id)=>{
    return new promise((resolve,reject)=>{
    
        
        // 
        const  sql= 'SELECT * FROM groups_record   where status=? AND sup_id=? AND group_id=?'
    
        connection.query(sql,['0',sup_id,id],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}


let groupMember=(id,sup_id)=>{
    return new promise((resolve,reject)=>{
        // const  sql= 'SELECT * FROM group_member m LEFT JOIN student s ON m.studentId = s.studentId LEFT JOIN marks mark ON m.studentId=mark.studentId LEFT JOIN evaluvation_type ev ON mark.evaluvationType_id=ev.id WHERE groupId=? AND mark.evaluteId=? '

        const  sql= 'SELECT * FROM group_member m LEFT JOIN student s ON m.studentId = s.studentId LEFT JOIN marks mark ON m.studentId=mark.studentId LEFT JOIN evaluvation_type ev ON mark.evaluvationType_id=ev.id WHERE m.groupId=? AND mark.evaluteId=? '
     
        connection.query(sql,[id,sup_id],(error,result)=>{
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

let proposal=(id)=>{
    return new promise((resolve,reject)=>{
        const  sql= 'SELECT * FROM groups_record    where sup_id=?'
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


let proposalDetail=(id,sup_id)=>{
    return new promise((resolve,reject)=>{
    
        const  sql= 'SELECT * FROM groups_record  where  sup_id=? AND group_id=?'
    
        connection.query(sql,[sup_id,id],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}


let insertmarks=(data,id)=>{
    return new promise((resolve,reject)=>{
    console.log(data)
        const  sql= 'insert into marks (`evaluvationType_id`, `studentId`, `marks`, `evaluteId`,`group_Id`) Values(?,?,?,?,?) '
        connection.query(sql,[data.type,data.member,data.marks,id,data.groupId],(error,result)=>{
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
    approve:approve,
    getRecord:getRecord,
    reject:reject,
    groupDetails:groupDetails,
    groupMember:groupMember,
    proposal:proposal,
    proposalDetail:proposalDetail,
    insertmarks:insertmarks,
    Member:Member
}
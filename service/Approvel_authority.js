const promise=require('promise')
const mysql=require('mysql');
const connection=require('../config/db')





let getRecord=(id)=>{
return new promise((resolve,reject)=>{
    

    const  sql= 'SELECT * FROM record_tbl r LEFT JOIN student s ON r.studentId = s.studentId    LEFT JOIN app_subtype sub ON r.subTypeId = sub.subTypeId   LEFT JOIN app_type t ON sub.typeId = t.typeId    LEFT JOIN approvel_authority A ON sub.authorityDeligatedId = A.authorityDeligatedId WHERE approvelAuthorityId=? AND approvel_status=?'

    connection.query(sql,[id,'0'],(error,result)=>{
        if(error){
            reject(error)
        }else{
           
            resolve(result)  
}
    })
})
}

let ApprovedRecord=(id)=>{

return new promise((resolve,reject)=>{
    const  sql= 'SELECT * FROM record_tbl r LEFT JOIN student s ON r.studentId = s.studentId    LEFT JOIN app_subtype sub ON r.subTypeId = sub.subTypeId   LEFT JOIN app_type t ON sub.typeId = t.typeId    LEFT JOIN approvel_authority A ON sub.authorityDeligatedId = A.authorityDeligatedId WHERE approvelAuthorityId=? AND approvel_status=?'
 
    connection.query(sql,[id,'1'],(error,result)=>{
        if(error){
            reject(error)
        }else{
           
            resolve(result)  
}
    })
})
}


let RejectRecord=(id)=>{

    return new promise((resolve,reject)=>{
        const  sql= 'SELECT * FROM record_tbl r LEFT JOIN student s ON r.studentId = s.studentId    LEFT JOIN app_subtype sub ON r.subTypeId = sub.subTypeId   LEFT JOIN app_type t ON sub.typeId = t.typeId    LEFT JOIN approvel_authority A ON sub.authorityDeligatedId = A.authorityDeligatedId WHERE approvelAuthorityId=? AND approvel_status=?'
     
        connection.query(sql,[id,'-1'],(error,result)=>{
            if(error){
                reject(error)
            }else{
               
                resolve(result)  
    }
        })
    })
    }

let approve=(id)=>{
    const date=new Date()
    const sql ='UPDATE record_tbl SET ? WHERE id=?'
  return new Promise((resolve, reject) => {
    connection.query(sql,[{approvel_status :'1',approvel_date:date },id],(err,res)=>{
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
    const sql ='UPDATE record_tbl SET ? WHERE id=?'
  return new Promise((resolve, reject) => {
    connection.query(sql,[{approvel_status :'-1',approvel_date:date },id],(err,res)=>{
        if(err){
            reject(err)
        }else{
            resolve(res)  
}
       })
});
}


module.exports={
    getRecord:getRecord,
    ApprovedRecord:ApprovedRecord,
    approve:approve,
    reject:reject,
    RejectRecord
}

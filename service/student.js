const mysql=require('mysql');
const connection=require('../config/db')





let user=(id)=>{
    const sql='SELECT * FROM student WHERE id=?'
    connection.query(sql,[id],(err,user)=>{
        if(err)  reject(err)
        resolve(user)

    })
}

let getRecord=(id)=>{

    return new promise((resolve,reject)=>{
        const  sql= 'SELECT * FROM record_tbl r LEFT JOIN student s ON r.studentId = s.studentId    LEFT JOIN app_subtype sub ON r.subTypeId = sub.subTypeId   LEFT JOIN app_type t ON sub.typeId = t.typeId    LEFT JOIN approvel_authority A ON sub.authorityDeligatedId = A.authorityDeligatedId   WHERE s.studentId=? ORDER BY r.id DESC '

        connection.query(sql,[id],(error,result)=>{
            if(error){
                reject(error)
            }else{
                
                resolve(result)  
               
    }
        })
    })
    }


let getType=()=>{
return new promise((resolve,reject)=>{

    connection.query('SELECT * FROM app_subtype',(error,types)=>{
if(error)
 reject(error)

resolve(types)

    })
})
}

    let addLetter  =  async (studentId,subTypeId) => {
        const subTypeDetail=await subTypeDetails(subTypeId)
     const date=new Date()
        return new promise((resolve,reject)=>{
            const sql="INSERT INTO `record_tbl` (`studentId`, `subTypeId`, `approvelAuthorityId`, `approvel_status`,`apply_date`) VALUES(?,?,?,?,?)"
            connection.query(sql,[studentId,subTypeDetail[0].subTypeId,subTypeDetail[0].authorityDeligatedId,'0',date],(error,result)=>{
                if(error){
                    reject(error)
                }else{
                   
                    resolve(result)  
        }
            })
        })
    }

    let addCertificate  =  async (studentId,subTypeId) => {
        const subTypeDetail=await subTypeDetails(subTypeId)
        const date=new Date()
           return new promise((resolve,reject)=>{
               const sql="INSERT INTO `record_tbl` (`studentId`, `subTypeId`, `approvelAuthorityId`, `approvel_status`,`apply_date`) VALUES(?,?,?,?,?)"
               connection.query(sql,[studentId,subTypeDetail[0].subTypeId,subTypeDetail[0].authorityDeligatedId,'0',date],(error,result)=>{
                   if(error){
                       reject(error)
                   }else{
                      
                       resolve(result)  
           }
               })
           })
    }
    let addApplication  =  async (studentId,filename) => {
        const subTypeDetail=await subTypeDetails(subTypeId)
        const date=new Date()
           return new promise((resolve,reject)=>{
               const sql="INSERT INTO `record_tbl` (`studentId`, `subTypeId`, `approvelAuthorityId`, `approvel_status`,`apply_date`) VALUES(?,?,?,?,?)"
               connection.query(sql,[studentId,filename,subTypeDetail[0].authorityDeligatedId,'0',date],(error,result)=>{
                   if(error){
                       reject(error)
                   }else{                 
                       resolve(result)  
           }
               })
           })
    }
    let subTypeDetails =(id)=>{
  return new promise((resolve,reject)=>{
            const sql="SELECT * FROM app_subtype WHERE subTypeId=?"
            connection.query(sql,[id],(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)  
        }
            })
        })
    }
module.exports={user,getRecord,getType,addLetter,addCertificate,addApplication}
const mysql=require('mysql');
const { resolve } = require('path');
const { reject } = require('promise');
const promise=require('promise');
const db = require('../config/db');
const connection=require('../config/db')

let userDetail=(id)=>{

    return new promise((resolve,reject)=>{
        const sql='SELECT * FROM  student WHERE studentId=?'
        connection.query(sql,[id],(err,user)=>{
            if(err)  reject(err)
            resolve(user)
    
        })
    })

}

let CountApplication=(id)=>{
    return new promise((resolve,reject)=>{
    const sql='SELECT COUNT(*) AS count FROM  record_tbl WHERE studentId=?'
    connection.query(sql,[id],(err,count)=>{
        if(err)  reject(err)
        resolve(count)

    })
})
}


let CountProcesApp=(id)=>{
    return new promise((resolve,reject)=>{
    const sql='SELECT COUNT(*) AS count FROM  record_tbl WHERE studentId=? AND approvel_status=? '
    connection.query(sql,[id,'0'],(err,count)=>{
        if(err)  reject(err)
        resolve(count)

    })
})
}


let CountRejctApp=(id)=>{
    return new promise((resolve,reject)=>{
    const sql='SELECT COUNT(*) AS count FROM  record_tbl WHERE studentId=? AND approvel_status=?'
    connection.query(sql,[id,'-1'],(err,count)=>{
        if(err)  reject(err)
        resolve(count)

    })
})
}



let CountsavedApp=(id)=>{
    return new promise((resolve,reject)=>{
    const sql='SELECT COUNT(*) AS count FROM  record_tbl WHERE studentId=? AND approvel_status=?'
    connection.query(sql,[id,'1'],(err,count)=>{
        if(err)  reject(err)
        resolve(count)

    })
})
}

let getLetters=()=>{
    return new promise((resolve,reject)=>{
    
        connection.query('SELECT * FROM app_subtype where typeId=?',['2'],(error,types)=>{
    if(error)
     reject(error)
    
    resolve(types)
    
        })
    })
    }


    let getApplication=()=>{
        return new promise((resolve,reject)=>{
        
            connection.query('SELECT * FROM app_subtype where typeId=?',['1'],(error,types)=>{
        if(error)
         reject(error)
        
        resolve(types)
        
            })
        })
        }


        let getCertificate=()=>{
            return new promise((resolve,reject)=>{
            
                connection.query('SELECT * FROM app_subtype where typeId=?',['3'],(error,types)=>{
            if(error)
             reject(error)
            
            resolve(types)
            
                })
            })
            }
        
    
            let addLetter  =   (studentId,subTypeId,authorityDeligatedId,comment) => {
            
             const date=new Date()
                return new promise((resolve,reject)=>{
                    const sql="INSERT INTO `record_tbl` (`studentId`, `subTypeId`, `approvelAuthorityId`, `approvel_status`,`body`,`apply_date`) VALUES(?,?,?,?,?,?)"
                    connection.query(sql,[studentId,subTypeId,authorityDeligatedId,'0',comment,date],(error,result)=>{
                        if(error){
                            reject(error)
                        }else{
                           
                            resolve(result)  
                }
                    })
                })
            }

            let addCertificate  =   (studentId,subTypeId,authorityDeligatedId,comment) => {
            
                const date=new Date()
                   return new promise((resolve,reject)=>{
                       const sql="INSERT INTO `record_tbl` (`studentId`, `subTypeId`, `approvelAuthorityId`, `approvel_status`,`body`,`apply_date`) VALUES(?,?,?,?,?,?)"
                       connection.query(sql,[studentId,subTypeId,authorityDeligatedId,'0',comment,date],(error,result)=>{
                           if(error){
                               reject(error)
                           }else{
                              
                               resolve(result)  
                   }
                       })
                   })
               }
               let  addApplication  =   (studentId,subTypeId,authorityDeligatedId,body) => {
            
                const date=new Date()
                   return new promise((resolve,reject)=>{
                       const sql="INSERT INTO `record_tbl` (`studentId`, `subTypeId`, `approvelAuthorityId`, `approvel_status`, `body`,`apply_date`) VALUES(?,?,?,?,?,?)"
                       connection.query(sql,[studentId,subTypeId,authorityDeligatedId,'0',body,date],(error,result)=>{
                           if(error){
                               reject(error)
                           }else{
                              
                               resolve(result)  
                   }
                       })
                   })
               }

let getProccessingApp=(id)=>{

    return new promise((resolve,reject)=>{
        const  sql= 'SELECT * FROM record_tbl r   LEFT JOIN app_subtype sub ON r.subTypeId = sub.subTypeId   LEFT JOIN app_type t ON sub.typeId = t.typeId    LEFT JOIN approvel_authority A ON sub.authorityDeligatedId = A.authorityDeligatedId   WHERE r.studentId=? AND approvel_status=? ORDER BY r.id DESC '

        connection.query(sql,[id,'0'],(error,result)=>{
            if(error){
                reject(error)
            }else{
                
                resolve(result)  
               
    }
        })
    })
    }

    let getRejectedApp=(id)=>{

        return new promise((resolve,reject)=>{
            const  sql= 'SELECT * FROM record_tbl r   LEFT JOIN app_subtype sub ON r.subTypeId = sub.subTypeId   LEFT JOIN app_type t ON sub.typeId = t.typeId    LEFT JOIN approvel_authority A ON sub.authorityDeligatedId = A.authorityDeligatedId   WHERE r.studentId=? AND approvel_status=? ORDER BY r.id DESC '
    
            connection.query(sql,[id,'-1'],(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    
                    resolve(result)  
                   
        }
            })
        })
        }


        let getSavedApp=(id)=>{

            return new promise((resolve,reject)=>{
                const  sql= 'SELECT * FROM record_tbl r   LEFT JOIN app_subtype sub ON r.subTypeId = sub.subTypeId   LEFT JOIN app_type t ON sub.typeId = t.typeId    LEFT JOIN approvel_authority A ON sub.authorityDeligatedId = A.authorityDeligatedId   WHERE r.studentId=? AND approvel_status=? ORDER BY r.id DESC '
        
                connection.query(sql,[id,'1'],(error,result)=>{
                    if(error){
                        reject(error)
                    }else{
                        
                        resolve(result)  
                       
            }
                })
            })
            }

  



module.exports={
    userDetail,
    addLetter,
    addCertificate,
    addApplication,
    CountApplication,
    CountProcesApp,
    CountRejctApp,
    CountsavedApp,
    getLetters,
    getApplication,
    getCertificate,
    getProccessingApp,
    getRejectedApp,
    getSavedApp


}
const mysql=require('mysql');
const connection=require('../config/db')
const promise=require('promise')


let getRecord=()=>{

return new promise((resolve,reject)=>{
  
    const  sql= 'SELECT * FROM record_tbl r LEFT JOIN student s ON r.studentId = s.studentId    LEFT JOIN app_subtype sub ON r.subTypeId = sub.subTypeId   LEFT JOIN app_type t ON t.typeId = sub.typeId    LEFT JOIN approvel_authority A ON sub.authorityDeligatedId = A.authorityDeligatedId'
    connection.query(sql,(error,result)=>{
        if(error){
            reject(error)
        }else{
            resolve(result)  
}
    })
})
}


let getStudents=()=>{

    return new promise((resolve,reject)=>{
      
        const  sql= 'SELECT * FROM student' 
        connection.query(sql,(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)  
    }
        })
    })
    }

    let getauthorities=()=>{

        return new promise((resolve,reject)=>{
          
            const  sql= 'SELECT * FROM approvel_authority' 
            connection.query(sql,(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)  
        }
            })
        })
        }

        let getStaffs=()=>{

            return new promise((resolve,reject)=>{
              
                const  sql= 'SELECT * FROM staff' 
                connection.query(sql,(error,result)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve(result)  
            }
                })
            })
            }
        

            let getEvaluators=()=>{

                return new promise((resolve,reject)=>{
                  
                    const  sql= 'SELECT * FROM evaluvator' 
                    connection.query(sql,(error,result)=>{
                        if(error){
                            reject(error)
                        }else{
                            resolve(result)  
                }
                    })
                })
                }
            
    

                let getSupervisors=()=>{

                    return new promise((resolve,reject)=>{
                      
                        const  sql= 'SELECT * FROM supervisor' 
                        connection.query(sql,(error,result)=>{
                            if(error){
                                reject(error)
                            }else{
                                resolve(result)  
                    }
                        })
                    })
                    }

                    let getCoordinator=()=>{

                        return new promise((resolve,reject)=>{
                          
                            const  sql= 'SELECT * FROM coordinator' 
                            connection.query(sql,(error,result)=>{
                                if(error){
                                    reject(error)
                                }else{
                                    resolve(result)  
                        }
                            })
                        })
                        }



                        let CountSupervisor=(id)=>{
                            return new promise((resolve,reject)=>{
                            const sql='SELECT COUNT(*) AS count FROM  supervisor'
                            connection.query(sql,[id],(err,count)=>{
                                if(err)  reject(err)
                                resolve(count)
                        
                            })
                        })
                        }
                        let CountCoordinator=(id)=>{
                            return new promise((resolve,reject)=>{
                            const sql='SELECT COUNT(*) AS count FROM  `coordinator`'
                            connection.query(sql,[id],(err,count)=>{
                                if(err)  reject(err)
                                resolve(count)
                        
                            })
                        })
                        }
                        let CountStudents=(id)=>{
                            return new promise((resolve,reject)=>{
                            const sql='SELECT COUNT(*) AS count FROM  `student`'
                            connection.query(sql,[id],(err,count)=>{
                                if(err)  reject(err)
                                resolve(count)
                        
                            })
                        })
                        }

                        let CountEvaluvator=(id)=>{
                            return new promise((resolve,reject)=>{
                            const sql='SELECT COUNT(*) AS count FROM  `evaluvator`'
                            connection.query(sql,[id],(err,count)=>{
                                if(err)  reject(err)
                                resolve(count)
                        
                            })
                        })
                        }
                        
                        
                        
                    
module.exports={
    getRecord:getRecord,
    getStudents:getStudents,
    getauthorities:getauthorities,
    getStaffs:getStaffs,
    getEvaluators:getEvaluators,
    getSupervisors:getSupervisors,
    getCoordinator:getCoordinator,
    CountSupervisor,
    CountCoordinator,
    CountStudents,
    CountEvaluvator,
    CountEvaluvator
}

const mysql=require('mysql');
const connection=require('../config/db')
const promise=require('promise')
const bcrypt = require('bcryptjs');

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

                        let CountStaff=(id)=>{
                            return new promise((resolve,reject)=>{
                            const sql='SELECT COUNT(*) AS count FROM  `staff`'
                            connection.query(sql,[id],(err,count)=>{
                                if(err)  reject(err)
                                resolve(count)
                        
                            })
                        })
                        }

                        
                        let addSupervisor =(data)=>{
                           
                            return new promise((resolve,reject)=>{
                            const sql="INSERT INTO supervisor (`sup_name`,`email`,`slot`,`role`) VALUES('"+data.name+"','"+data.email+"','"+data.slot+"','supervisor')"
                            connection.query(sql,(err,result)=>{
                                if(err)  reject(err)

                                bcrypt.hash('12345',10,(err,hash)=>{
                                const sql="INSERT INTO login (`email`,`password`,`role`,`userId`) VALUES('"+data.email+"','"+hash+"','supervisor','"+result.insertId+"')"
                                connection.query(sql,(err,res)=>{
                                    if(err)  reject(err)
    
                                    
                                    resolve(res)
                            
                                })
                            })
                            })
                        })
                        }
                        
                        let  addCoordinator   =(data)=>{
                           
                            return new promise((resolve,reject)=>{
                            const sql="INSERT INTO coordinator (`name`,`email`,`role`) VALUES('"+data.name+"','"+data.email+"','coordinator')"
                            connection.query(sql,(err,result)=>{
                                if(err)  reject(err)

                                bcrypt.hash('12345',10,(err,hash)=>{
                                const sql="INSERT INTO login (`email`,`password`,`role`,`userId`) VALUES('"+data.email+"','"+hash+"','coordinator','"+result.insertId+"')"
                                connection.query(sql,(err,res)=>{
                                    if(err)  reject(err)
    
                                    
                                    resolve(res)
                            
                                })
                            })
                            })
                        })
                        }
                                     
                        let  addEvaluavator   =(data)=>{
                           
                            return new promise((resolve,reject)=>{
                            const sql="INSERT INTO evaluvator (`name`,`email`,`role`) VALUES('"+data.name+"','"+data.email+"','evaluvator')"
                            connection.query(sql,(err,result)=>{
                                if(err)  reject(err)

                                bcrypt.hash('12345',10,(err,hash)=>{
                                const sql="INSERT INTO login (`email`,`password`,`role`,`userId`) VALUES('"+data.email+"','"+hash+"','evaluvator','"+result.insertId+"')"
                                connection.query(sql,(err,res)=>{
                                    if(err)  reject(err)
    
                                    
                                    resolve(res)
                            
                                })
                            })
                            })
                        })
                        }
                        let  addStaff   =(data)=>{
                           
                            return new promise((resolve,reject)=>{
                            const sql="INSERT INTO staff (`name`,`email`,`role`) VALUES('"+data.name+"','"+data.email+"','staff')"
                            connection.query(sql,(err,result)=>{
                                if(err)  reject(err)

                                bcrypt.hash('12345',10,(err,hash)=>{
                                const sql="INSERT INTO login (`email`,`password`,`role`,`userId`) VALUES('"+data.email+"','"+hash+"','staff','"+result.insertId+"')"
                                connection.query(sql,(err,res)=>{
                                    if(err)  reject(err)
    
                                    
                                    resolve(res)
                            
                                })
                            })
                            })
                        })
                        }

                        let  addStudent   =(data)=>{
                           
                            return new promise((resolve,reject)=>{
                            const sql="INSERT INTO student (`name`,`reg_no`,`email`,`degree`,`semester`,`gender`,`shift`,`role`) VALUES('"+data.name+"','"+data.regno+"','"+data.email+"','"+data.degree+"','"+data.semester+"','"+data.gender+"','"+data.shift+"','student')"
                            connection.query(sql,(err,result)=>{
                                if(err)  reject(err)

                                bcrypt.hash('12345',10,(err,hash)=>{
                                const sql="INSERT INTO login (`email`,`password`,`role`,`userId`) VALUES('"+data.regno+"','"+hash+"','student','"+result.insertId+"')"
                                connection.query(sql,(err,res)=>{
                                    if(err)  reject(err)
    
                                    
                                    resolve(res)
                            
                                })
                            })
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
    CountEvaluvator,
    CountStaff,
    addSupervisor,
    addCoordinator,
    addEvaluavator,
    addStaff,
    addStudent
}

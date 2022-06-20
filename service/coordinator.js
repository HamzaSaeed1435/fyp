const promise=require('promise')
const mysql=require('mysql');
const connection=require('../config/db')

let getSup=(id)=>{
    return new promise((resolve,reject)=>{
    
        const  sql= 'SELECT * FROM coordinator_sup c LEFT  JOIN supervisor s ON c.sup_id=s.sup_id  WHERE co_id=?'
    
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



let fyp=(id)=>{
    return new promise((resolve,reject)=>{
    
        const  sql= 'SELECT * FROM coordinator_sup c LEFT  JOIN groups_record g ON c.sup_id=g.sup_id   WHERE co_id=? AND status=?'
    
        connection.query(sql,[id,'1'],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}

let groupDetails=(id,sup_id)=>{
    return new promise((resolve,reject)=>{
    
        
        // 
        const  sql= 'SELECT * FROM coordinator_sup c LEFT  JOIN groups_record g ON c.sup_id=g.sup_id     where   co_id=? AND g.group_id=?'
    
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


let Evaluvation_type=()=>{
    return new promise((resolve,reject)=>{
        const  sql= 'SELECT * FROM `evaluvation_type`'
        connection.query(sql,(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}

let getEvaluvation=(id)=>{
    return new promise((resolve,reject)=>{
        const  sql= 'SELECT * FROM `evaluvation` e LEFT JOIN evaluvation_type t  ON e.evaluvationType_id = t.id  LEFT JOIN evaluvator l  ON e.evaluteId_1 = l.id OR e.evaluteId_2 = l.id where e.groupId=?'
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

let getEvaluvator=()=>{
    return new promise((resolve,reject)=>{
        const  sql= 'SELECT * FROM `evaluvator`'
        connection.query(sql,(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}


let inserEvaluvator=(data)=>{
    return new promise((resolve,reject)=>{
      
        const  sql= 'INSERT INTO evaluvation (evaluvationType_id,evaluteId_1,evaluteId_2,groupId) VALUES(?,?,?,?)'
        connection.query(sql,[data.type,data.evaluvator1,data.evaluvator2,data.groupId],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}

let checkEvaluvator=(data)=>{
    return new promise((resolve,reject)=>{
      
        const  sql= 'SELECT * FROM  evaluvation WHERE evaluvationType_id=? AND groupId=?'
        connection.query(sql,[data.type,data.groupId],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}


let updateEvaluvator=(data)=>{
    return new promise((resolve,reject)=>{
      
        const  sql= "UPDATE   evaluvation set evaluteId_1='"+data.evaluvator1+"', evaluteId_2='"+data.evaluvator2+"' WHERE evaluvationType_id=? AND groupId=?"
        connection.query(sql,[data.type,data.groupId],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}

let resultEvaluvator=(id)=>{
    return new promise((resolve,reject)=>{
    
        // const  sql= 'SELECT * FROM marks m LEFT JOIN login l  ON m.evaluteId = l.userId  LEFT JOIN student s  ON m.studentId = s.studentId  LEFT JOIN evaluvation_type e  ON  m.evaluvationType_id= e.id where group_Id=?'
  const sql='SELECT m.evaluvationType_id,m.studentId,m.marks,m.role,m.evaluteId,m.group_Id,e.email,e.id,s.studentId,s.name,s.degree,eve.id,eve.type FROM marks m LEFT JOIN evaluvator e  ON m.evaluteId = e.id LEFT JOIN student s  ON m.studentId = s.studentId LEFT JOIN evaluvation_type eve  ON  m.evaluvationType_id= eve.id  where m.group_Id=? AND m.role=?'
        connection.query(sql,[id,'evaluvator'],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}

let resultSupervisor=(id)=>{
    return new promise((resolve,reject)=>{
    
        // const  sql= 'SELECT * FROM marks m LEFT JOIN login l  ON m.evaluteId = l.userId  LEFT JOIN student s  ON m.studentId = s.studentId  LEFT JOIN evaluvation_type e  ON  m.evaluvationType_id= e.id where group_Id=?'
  const sql='SELECT * FROM marks m LEFT JOIN supervisor sup  ON m.evaluteId = sup.sup_id LEFT JOIN student s  ON m.studentId = s.studentId LEFT JOIN evaluvation_type e  ON  m.evaluvationType_id= e.id where m.group_Id=? AND m.role=?'
        connection.query(sql,[id,'supervisor'],(error,result)=>{
            if(error){
                reject(error)
            }else{
// console.log(result)
                resolve(result)  
    }
        })
    })
}


let groupEvaluvator=(id)=>{
    return new promise((resolve,reject)=>{
    
        const  sql= 'SELECT * FROM evaluvation e LEFT JOIN evaluvator eva   ON e.evaluteId_1= eva.id OR e.evaluteId_2= E.id  where groupId=?'
  
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
    getSup,
    fyp,
    groupMember,
    groupDetails,
    Evaluvation_type,
    getEvaluvator,
    inserEvaluvator,
    checkEvaluvator,
    updateEvaluvator,
 getEvaluvation,
 resultEvaluvator,
 groupEvaluvator,
 resultSupervisor

}
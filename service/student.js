const mysql=require('mysql');
const { resolve } = require('path');
const { reject } = require('promise');
const promise=require('promise');
const db = require('../config/db');
const connection=require('../config/db')
const { v4: uuidv4 } = require('uuid');
const { response } = require('express');
const nodemailer = require("nodemailer");
var http = require("https");
const otpGenerator = require('otp-generator')
const bcrypt = require('bcryptjs');

const multer  = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public/uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//       // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     },  
//   });


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


            let groupSelection=(id,members)=>{
                groupID=uuidv4();
                return new promise((resolve,reject)=>{
                    for(var i=0;i<members.length+1;i++){
                       if(i==2){
                        const  sql= 'insert into group_member (studentId,groupId) VALUES(?,?)'
                        connection.query(sql,[id,groupID],(error,result)=>{
                            if(error){
                                reject(error)
                            }
                        })
                       }
                       else{
                        const  sql= 'insert into group_member (studentId,groupId) VALUES(?,?)'
                    connection.query(sql,[members[i],groupID],(error,result)=>{
                        if(error){
                            reject(error)
                        }
                    })
                       }
                    
                    }
                    resolve("success")
                })
                }
    

                let getStudents=(degree)=>{

                    return new promise((resolve,reject)=>{
                        const  sql= 'SELECT * FROM student where degree =?'
                        // console.log(degree)
                
                        connection.query(sql,[degree],(error,result)=>{
                            if(error){
                                reject(error)
                            }else{
                                
                                resolve(result)  
                               
                    }
                        })
                    })
                    }
                

                    let selectsupervisor=()=>{

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

                    let grouprecord=(data)=>{
                            console.log(data)

                            return new promise((resolve,reject)=>{
                                const  sql= 'insert into groups_record (title,sup_Id,Discription,member_id) values(?,?,?,?)'
                        
                                connection.query(sql,[data.title,data.sup_Id,data.Discription,data.member_id],(error,result)=>{
                                    if(error){
                                        reject(error)
                                    }else{
                                        
                                        resolve(result)  
                            }
                                })
                            })
                            }


                        let acceptpropasal=(data)=>{

                                return new promise((resolve,reject)=>{
                                    const  sql= 'SELECT * FROM groups_record where status = 1 AND group_id=? '
                            
                                    connection.query(sql,[data.group_id],(error,result)=>{
                                        if(error){
                                            reject(error)
                                        }else{
                                            
                                            resolve(result)  
                                            // response.render("sucess")

                                           
                                }
                                    })
                                })
                                }




                                let propsalupload=(data,id)=>{

                                    return new promise((resolve,reject)=>{
                                        const  sql= "UPDATE groups_record SET propsal= ? WHERE group_id = ?";

                                
                                        connection.query(sql,[data,id.group_id],(error,result)=>{
                                            if(error){
                                                reject(error)
                                            }else{
                                                
                                                resolve(result)  
    
                                               
                                    }
                                        })
                                    })
                                    }





                                    let documentupload=(data,id)=>{

                                        return new promise((resolve,reject)=>{
                                            const  sql= "UPDATE groups_record SET documentation= ? WHERE group_id = ?";
    
                                    
                                            connection.query(sql,[data,id.group_id],(error,result)=>{
                                                if(error){
                                                    reject(error)
                                                }else{
                                                    
                                                    resolve(result)  
        
                                                   
  }
       })
    })
      }
      
    
      let forgetpassword=(email)=>{

var otp=otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false })

        return new promise((resolve,reject)=>{
                var options = {
                    "method": "POST",
                    "hostname": "emailapi.netcorecloud.net",
                    "port": null,
                    "path": "/v5/mail/send",
                    "headers": {
                      "api_key": "e8284c17407e4384ade0c88e8f43481a",
                      "content-type": "application/json"
                    }
                  };
                  
                  var req = http.request(options, function (res) {
                    var chunks = [];
                  
                    res.on("data", function (chunk) {
                      chunks.push(chunk);
                    });
                  
                    res.on("end", function () {
                      var body = Buffer.concat(chunks);
                         resolve(otp)
                    //  console.log(body.toString());
                    });
                  });
                  
                  req.write(JSON.stringify({
                    from: {email: 'hamzasaeed4689@pepisandbox.com', name: 'UIIT Department'},
                    subject: 'Password Reset...!!!',
                    content: [{type: 'html', value: 'your OTP  for password Reset is '+'<br>'+ otp}],
                    personalizations: [{to: [{email: email, name: email}]}]
                  }));
                  req.end();
               
        })
        }
                        

        let passReset=(email,pass)=>{

            return new promise((resolve,reject)=>{
                connection.query("select * from student  where email='"+email+"'",(err,result)=>{
console.log(result)
                bcrypt.hash(pass,10,(err,hash)=>{
                    if(err) throw err  
                    const sqll="update login set password='"+hash+"' where userId="+result[0].studentId  
                  
          connection.query(sqll,(err,result)=>{
           if(err) reject(err)
        
           resolve(result)
  
           
          })
           })
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
    getSavedApp,
    groupSelection,
    getStudents,
    selectsupervisor,
    grouprecord,
    acceptpropasal,
    propsalupload,
    documentupload,
    forgetpassword,
    passReset
}
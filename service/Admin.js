const mysql=require('mysql');
const connection=require('../config/db')



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


module.exports={
    getRecord:getRecord,

}

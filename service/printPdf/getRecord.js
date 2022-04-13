const mysql=require('mysql');
const promise=require('promise');

const connection=require('../../config/db')



const Record=(id)=>{
   
return new promise((resolve,reject)=>{
    connection.query('SELECT * FROM `record_tbl` r  LEFT JOIN student s ON r.studentId = s.studentId   LEFT JOIN app_subtype sub ON r.subTypeId = sub.subTypeId   LEFT JOIN app_type t ON t.typeId = sub.typeId   LEFT JOIN approvel_authority A ON sub.authorityDeligatedId = A.authorityDeligatedId LEFT JOIN data_tbl  data ON  sub.subTypeId=data.subtTypeId where id=? AND  r.subTypeId=data.subtTypeId',[id,],(error,result)=>{
        if(error){
            reject(error)

        }else{
        
            resolve(result) 
        
}
    })
})
}

let SetGender=(record)=>{

    return new promise((resolve,reject)=>{ 
        let gender={}
            if(record=='Male'){
                 gender={
                    sex:'He',
                    mr:'Mr.' ,
                    h:'his'
                }  
             }else{
                 gender={
                    sex:'Ms.',
                    mr:'She' ,
                    h:'her'
                }
             }
            
          resolve(gender)
    
     
    })  
}
module.exports={
    Record,
    SetGender:SetGender
}
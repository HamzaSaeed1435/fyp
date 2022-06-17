const mysql=require('mysql')
const connection=require('../config/db')



let handleLogin = async (email, password) => {
     return new Promise(async (resolve, reject) => {
        //check email is exist or not
        
        try{
            let user = await findUserByEmail(email);
            resolve(user); 
        }catch(e){
            reject(`This user email "${email}" doesn't exist`);
        }

    });
};


let findUserByEmail =  (email) => {
    return new Promise((resolve,reject) => {
            var  sql="SELECT * FROM `login` WHERE email =?";
            try{
                connection.query(sql,[email],(err,rows)=>{
                    if(!err)
                    {
                        user=rows[0];
                        resolve(user)
                    }
                    reject(err)
                    });
            }catch (err) {
                reject(`This user email "${email}" doesn't exist`)
            }
    });
};


module.exports = {
    handleLogin: handleLogin,
    findUserByEmail: findUserByEmail,

};
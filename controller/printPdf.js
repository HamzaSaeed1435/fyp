const recordservice=require('../service/printPdf/getRecord')
const printpdfservice=require('../service/printPdf/printpdf');
const sendemail=require('../service/sendemail')

let download =async (id)=>{ 

const record=await recordservice.Record(id)

if(!record.length){
    console.log('no record found on this Typeid')
}else{

     const gender=await recordservice.SetGender(record[0].gender)
    //  console.log(record)
    //     console.log(gender)

//       if(record[0].app_Name==='epc'){
//   const filename= await printpdfservice.EPC(record,gender)
//         //  await  sendemail.SendEmail(record[0].email)
//       }

  const filename= await printpdfservice.D(record,gender)


}

    }   



module.exports={download}
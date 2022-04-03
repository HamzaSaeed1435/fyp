const recordservice=require('../service/printPdf/getRecord')
const printpdfservice=require('../service/printPdf/printpdf');
const sendemail=require('../service/sendemail')

let Print =async (req,res,next)=>{ 

const record=await recordservice.Record(req.params.id)

 const gender=await recordservice.SetGender(record[0].gender)
          const filename= await printpdfservice.downlodpdf(record,gender)
          sendemail.SendEmail()
                res.redirect('../../staff/print')

    }   



module.exports={Print}
const Queries =require('../service/Approvel_authority')
const printPdf =require('../controller/printPdf')

let getRecord = async (req, res) => {

 const record = await Queries.getRecord(req.user[0].authorityDeligatedId)
    return res.render("Approvel_Authority_dashboard.hbs",{record:record});
};

let getApprovedRecord=async(req,res)=>{
    const record= await  Queries.ApprovedRecord(req.user[0].authorityDeligatedId)
    return res.render("ApprovedQueries.hbs",{record:record});
}
let getRejectedRecord=async(req,res)=>{
    const record= await  Queries.RejectRecord(req.user[0].authorityDeligatedId)
    return res.render("RejectedQueries.hbs",{record:record});
}


let approve= async (req,res)=>{
 try{
const approvelstatus=await Queries.approve(req.params.id)
const record =printPdf.download(req.params.id)
return res.redirect("/Approvel_Authority");
} catch (err) {
return res.redirect("/Approvel_Authority");
}
}

let reject= async (req,res)=>{
    try{
   const approvelstatus=await Queries.reject(req.params.id)
   return res.redirect("/Approvel_Authority");
   } catch (err) {
   return res.redirect("/Approvel_Authority");
   }
   }




module.exports = {
    getRecord: getRecord,
    getApprovedRecord:getApprovedRecord,
    approve:approve,
    reject:reject,
    getRejectedRecord
};
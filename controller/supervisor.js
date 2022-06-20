const supervisor=require('../service/supervisor')


let getRecord = async (req, res) => {

    const record = await supervisor.getRecord(req.user[0].sup_id)
       return res.render("supervisor_dashboard.hbs",{record:record});
   };

let approve= async (req,res)=>{
    try{
   const approvelstatus=await supervisor.approve(req.params.id)
 
   return res.redirect("/supervisor");
   } catch (err) {
   return res.redirect("/supervisor");
   }
   }

   let reject= async (req,res)=>{
    try{
   const approvelstatus=await supervisor.reject(req.params.id)
 
   return res.redirect("/supervisor");
   } catch (err) {
   return res.redirect("/supervisor");
   }
   }

   let getDetails=async (req,res)=>{
    let record=await supervisor.groupDetails(req.params.id,req.user[0].sup_id)
    let groupMember=await supervisor.group(record[0].member_id)

    res.render("groups_record.hbs",{record:record,groupMember:groupMember});
   }

   let proposal= async(req,res)=>{
    let record=await supervisor.proposal(req.user[0].sup_id)
    res.render("supervisorPropsal",{record:record});
   }

   let get= async(req,res)=>{
    let record=await supervisor.proposalDetail(req.params.id,req.user[0].sup_id)
    
    let Member=await supervisor.Member(record[0].member_id)
    let groupMember=await supervisor.groupMember(record[0].member_id,req.user[0].sup_id)

    res.render("supervisormarks.hbs",{record:record,groupMember:groupMember,Member,groupId:Member[0].groupId });
   }

   let insertmarks=async (req,res)=>{
       
 let result= await supervisor.insertmarks(req.body,req.user[0].sup_id)
 res.redirect("/proposal");


   }
   module.exports={
       approve:approve,
       getRecord :getRecord,
       reject:reject,
       getDetails:getDetails,
       proposal:proposal,
       get:get,
       insertmarks:insertmarks
   }
const evaluvator=require('../service/evaluvator')



let getGroups=async(req,res)=>{
let record=await evaluvator.getGroups(req.user[0].id,req.params.typeId)
res.render("evaluvationGroups.hbs",{record})
}


let getDetails=async (req,res)=>{
       
    let record=await evaluvator.groupDetails(req.params.id)
    
    let groupMember=await evaluvator.groupMember(record[0].member_id)

    res.render("evaluvatorGroups_details.hbs",{record:record,groupMember:groupMember});
   }


   let EvaluvateGroup=async (req,res)=>{
       
    let record=await evaluvator.getEvaluvation(req.user[0].id)

    res.render("evaluvatorDashboard.hbs",{record});
   }

   let EvaluvateMarks=async (req,res)=>{
    let typeId=req.params.typeId
    let record=await evaluvator.EvaluvateMarks(req.params.id,req.user[0].id)
    let  Member=await evaluvator.Member(req.params.id)

    res.render("evaluvatorMarks.hbs",{record,typeId,Member,groupId:Member[0].groupId});
   }
   
   let InsertEvaluvatormarks=async (req,res)=>{
  console.log(req.body)
    let record=await evaluvator.InsertEvaluvatormarks(req.user[0].id,req.body)
res.redirect("/evaluvator")
   }
   
module.exports={
getGroups,
getDetails,
EvaluvateGroup,
EvaluvateMarks,
InsertEvaluvatormarks
}
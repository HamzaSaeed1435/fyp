const coordinator=require('../service/coordinator')

let getsup=async(req,res)=>{
supList=await coordinator.getSup(req.user[0].id)
res.render("coordinator_dashboard.hbs",{record:supList});

}



let fyp=async(req,res)=>{
    record=await coordinator.fyp(req.user[0].id)
    res.render("coordinator_fyp.hbs",{record:record});
    
    }
    
    let getDetails=async (req,res)=>{
        
        let record=await coordinator.groupDetails(req.params.id,req.user[0].id)
        
        let groupMember=await coordinator.groupMember(record[0].member_id)
    
        res.render("coordinatorFyp_details.hbs",{record:record,groupMember:groupMember});
       }

       let Evaluvator=async (req,res)=>{

        let Evaluvation_type=await coordinator.Evaluvation_type()
        let getEvaluvator=await coordinator.getEvaluvator()
        let getEvaluvation=await coordinator.getEvaluvation(req.params.id)
        res.render("coordinator_evaluvator.hbs",{getEvaluvator,Evaluvation_type,id:req.params.id,getEvaluvation});

       }

       let inserEvaluvator=async (req,res)=>{
        let checkEvaluvator=await coordinator.checkEvaluvator(req.body)
        if(checkEvaluvator==''){
           let inserEvaluvator=await coordinator.inserEvaluvator(req.body)
        res.redirect("/coordinator/Evaluvator/"+req.body.groupId);

        }else{
            let updateEvaluvator=await coordinator.updateEvaluvator(req.body)
            res.redirect("/coordinator/Evaluvator/"+req.body.groupId);
        }
       }

       
       let result =async (req,res)=>{
       
        let recordEva=await coordinator.resultEvaluvator(req.params.id)
        let recordSup=await coordinator.resultSupervisor(req.params.id)
        let groupEvaluvator=await coordinator.groupEvaluvator(req.params.groupId)
        res.render("coordinatorResult.hbs",{recordEva,recordSup,groupEvaluvator});
       }
        
      
module.exports={
getsup,
fyp,
getDetails,
Evaluvator,
inserEvaluvator,
result
}
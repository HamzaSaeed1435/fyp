const serviceQueries=require('../service/staff')


let Record=async(req,res)=>{
    const record= await  serviceQueries.ApprovedRecord()

    return res.render("staffDashboard.hbs",{record:record});

}




module.exports={
    Record
}
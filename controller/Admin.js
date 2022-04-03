const AdminQueries =require('../service/Admin');


let getRecord = async (req, res) => {
 const record = await AdminQueries.getRecord()
    return res.render("AdminQueries.hbs",{record:record});
};


module.exports = {
    getRecord: getRecord

};


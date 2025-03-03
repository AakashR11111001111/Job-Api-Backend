const jobModel = require('../model/job.model')

const jobCreate = async (req, res)=>{
    try{
        //insert Data
        const dbResponse = await jobModel.create(req.body) // works same as db.jobs.insertOne()
        res.json({
            success: true,
            message: `job created at id ${dbResponse._id}`
        })
    }
    catch(err) {
        console.log(err)
    }
}

const jobListing = async (req,res)=>{
    try{
        const minExperienceRequired = req.query.minExperienceRequired || 0
        
        const jobList = await jobModel.find({
            "minExperienceRequired": {
                $gte: minExperienceRequired
            }
        });
        res.json({
            success: true,
            message: "Listed all Jobs",
            data: jobList
        })
    }
    catch(err){
        console.log(err);
        
    }
    

    
}

const jobEdit = async (req,res, next)=>{
    try{
        const idToEdit = req.query.id;
        const dataToEdit = req.body;
        await jobModel.findByIdAndUpdate(idToEdit, dataToEdit)

    }catch(err){
        next(err)
    }
    
    res.json({
        success: true,
        message: "Job Edited Successfully"
    })
}

const jobDelete = async (req,res,next)=>{
    try{
        const IdToDelete = req.query.id;
        await jobModel.findByIdAndDelete(IdToDelete);
    }
    catch(err){
        next(err)
    }
    res.json({
        success: true,
        message: "delete job API"
    })
}

const jobController = {
    jobCreate, jobEdit, jobListing, jobDelete
}

module.exports = jobController;
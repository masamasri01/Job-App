const JobModel = require("../models/job_model");
const SavedJobModel= require("../models/saved_job_model")

class UserServices{
 
    static async addJob( jobTitle, description, requirements,location,salary){
        try{
               //console.log("-----job name-----",jobName);
                
                const createJob = new JobModel({ jobTitle, description, requirements,location,salary});
                return await createJob.save();
        }catch(err){
            throw err;
        }
    }
    static async addSavedJob( jobId){
        try{
               //console.log("-----job name-----",jobName);
                
                const createJob = new SavedJobModel({ jobId});
                return await createJob.save();
        }catch(err){
            throw err;
        }
    }
    static async getJobs(){
        const dataList = await JobModel.findAll()
        return dataList;
    }
    static async getSavedJobs(){
        const dataList = await SavedJobModel.find().populate('jobId');
        return dataList;
    }

   
}

module.exports = UserServices;
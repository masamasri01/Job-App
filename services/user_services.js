const ApplicationModel = require("../models/application_model");
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
    static async getJobById(id){
     const job=  await JobModel.findById(id);
       return job;
    }
    static async updateJobOfId(req) {
        const job= JobModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
       // console.log()
        return job
    }
    static async deleteJob(req) {
        const job= JobModel.findByIdAndRemove(req.params.id);
             return job
    }
    /*******************applications crud */
    static async getApplicationById(id){
        const job=  await ApplicationModel.findById(id);
          return job;
       }
       static async updateApplicationOfId(req) {
           const job= ApplicationModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
          // console.log()
           return job
       }
       static async deleteApplication(req) {
           const job= ApplicationModel.findByIdAndRemove(req.params.id);
                return job
       }
   
}

module.exports = UserServices;
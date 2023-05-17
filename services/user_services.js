const JobModel = require("../models/job_model");


class UserServices{
 
    static async addJob( jobTitle, description, requirements, salaryRange){
        try{
               //console.log("-----job name-----",jobName);
                
                const createJob = new JobModel({ jobTitle, description, requirements, salaryRange});
                return await createJob.save();
        }catch(err){
            throw err;
        }
    }
    static async getJobs(){
        const todoList = await JobModel.findAll()
        return todoList;
    }


}

module.exports = UserServices;
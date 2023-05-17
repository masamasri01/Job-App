const UserServices = require('../services/user_services');
const JobModel= require('../models/job_model')
exports.addJob = async (req, res, next) => {
    try {
        console.log("---req body---", req.body);
        const {  jobTitle, description, requirements, salaryRange } = req.body;
      
        const response = await UserServices.addJob( jobTitle, description, requirements, salaryRange);

        res.json({ status: true, success: 'job added successfully' });


    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
}
     exports.getJobs= async (req, res) => {
    try {
      const jobs = await JobModel.find(); 
      res.json(jobs);
    } catch (error) {
      console.error('Error retrieving jobs:', error);
      res.status(500).json({ error: 'Failed to retrieve jobs' });
    }
  }
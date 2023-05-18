const UserServices = require('../services/user_services');
const JobModel= require('../models/job_model');
const router = require('../routers/user_routers');
exports.addJob = async (req, res, next) => {
    try {
        console.log("---req body---", req.body);
        const {  jobTitle, description, requirements,location,salary } = req.body;
      
        const response = await UserServices.addJob( jobTitle, description, requirements,location, salary);

        res.json({ status: true, success: 'job added successfully' });


    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
}
exports.addSavedJob = async (req, res, next) => {
  try {
      console.log("---req body---", req.body);
      const {  jobId } = req.body;
    
      const response = await UserServices.addSavedJob( jobId);

      res.json({ status: true, success: 'job added successfully' });

   
  } catch (err) {
      console.log("---> err -->", err);
      next(err);
  }
}
  //    exports.getJobs= async (req, res) => {
  //   try {
  //     const jobs = await JobModel.find(); 
  //     res.json(jobs);
  //   } catch (error) {
  //     console.error('Error retrieving jobs:', error);
  //     res.status(500).json({ error: 'Failed to retrieve jobs' });
  //   }
    
  // }
  exports.getJobs=async (req, res) => {
    try {
        // Get the filter parameters from the query string
        const { jobTitle, location, salaryRange } = req.query;
    
        // Apply the filters to the job data
      
          let filteredJobs = await JobModel.find(); 
          //res.json(filteredJobs);
        
        // Filter by job title
        if (jobTitle) {
            console.log(jobTitle)
          filteredJobs = filteredJobs.filter(job =>job.jobTitle && job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase()));
        }
    
        // Filter by location
        if (location) {
          filteredJobs = filteredJobs.filter(job =>job.location&& job.location.toLowerCase().includes(location.toLowerCase()));
        }
    
        // Filter by salary range
        if (salaryRange) {
          const [minSalary, maxSalary] = salaryRange.split('-');
          filteredJobs = filteredJobs.filter(job => job.salary >= minSalary && job.salary <= maxSalary);
        }
         filteredJobs.forEach(async element => {
          await UserServices.addSavedJob( element._id)
         }); 
        // Return the filtered jobs
        res.json(filteredJobs);
      } catch (error) {
        console.error('no jobs found:', error);
        res.status(500).json({ error: 'no jobs found' });
      }
    }
     exports.getSavedJobs = async (req, res) => {
      try {
        // Retrieve the saved jobs from the database
        const savedJobs = await UserServices.getSavedJobs();
    
        // Return the saved jobs
        res.json(savedJobs);
      } catch (error) {
        console.error('Error retrieving saved jobs:', error);
        res.status(500).json({ error: 'Error retrieving saved jobs' });
      }
    };
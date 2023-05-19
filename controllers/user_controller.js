const UserServices = require('../services/user_services');
const JobModel= require('../models/job_model');
const ApplicationModel= require("../models/application_model")
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
exports.getJobById=async (req, res) => {
  try {
    const job = await UserServices.getJobById(req.params.id)
    if (!job) {
      return res.status(404).json({ error: 'this job does not exists' });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: 'sommething went wrong!!' });
  }
}
exports.updateJobOfId=async (req, res) => {
  try {
    console.log("dwdwed")
    const job = await UserServices.updateJobOfId(req);
    if (!job) {
      return res.status(404).json({ error: 'this job does not exists ' });
    }
    res.json(job);
    console.log("resss")
  } catch (error) {
    res.status(500).json({ error: 'sommething went wrong!!' });
  }
}
exports.deleteJob= async (req, res) => {
  try {
    const job = await UserServices.deleteJob(req)
    if (!job) {
      return res.status(404).json({ error: 'this job does not exists' });
    }
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'something went  wrong' });
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
  

  exports.getJobs=async (req, res) => {
    try {
        const { jobTitle, location, salaryRange } = req.query;
    
          let filteredJobs = await JobModel.find(); 
          //res.json(filteredJobs);
        if (jobTitle) {
            console.log(jobTitle)
          filteredJobs = filteredJobs.filter(job =>job.jobTitle && job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase()));
        }
        if (location) {
          filteredJobs = filteredJobs.filter(job =>job.location&& job.location.toLowerCase().includes(location.toLowerCase()));
        }
        if (salaryRange) {
          const [minSalary, maxSalary] = salaryRange.split('-');
          filteredJobs = filteredJobs.filter(job => job.salary >= minSalary && job.salary <= maxSalary);
        }
         filteredJobs.forEach(async element => {
          await UserServices.addSavedJob( element._id)
         }); 
        res.json(filteredJobs);
      } catch (error) {
        console.error('no jobs found:', error);
        res.status(500).json({ error: 'no jobs found' });
      }
    }
     exports.getSavedJobs = async (req, res) => {
      try {
        const savedJobs = await UserServices.getSavedJobs();
            res.json(savedJobs);
      } catch (error) {
        console.error('Error retrieving saved jobs:', error);
        res.status(500).json({ error: 'Error retrieving saved jobs' });
      }
    };

    exports.addApplication=async (req, res) => {
      try {
        const { jobId, name, email, phone, coverLetter } = req.body;
        const resume = req.file.buffer; // Access the file buffer
    
        const newApplication = new ApplicationModel({ jobId, name,  email, phone,  coverLetter, resume,});
    
        await newApplication.save();
        res.status(201).json({ message: 'Application added successfully' });
      } catch (error) {
        res.status(500).json({ error: 'sth went wrong' });
      }
    }
    exports.getAllApplications = async (req, res) => {
      try {
        const applications = await ApplicationModel.find();
        res.json(applications);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve applications' });
      }
    }

    exports.getResumeOfSpecificApplication=async (req, res) => {
      try {
        const application = await ApplicationModel.findById(req.params.id);
        if (!application) {
          return res.status(404).json({ error: 'Application doesnt exsit' });
        }
    
        res.set({
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename=${application.name}-resume.pdf`,
        });
        res.send(application.resume);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the PDF file' });
      }
    }
    /********************************** */
    exports.getApplicationById=async (req, res) => {
      try {
        const job = await UserServices.getApplicationById(req.params.id)
        if (!job) {
          return res.status(404).json({ error: 'this job does not exists' });
        }
        res.json(job);
      } catch (error) {
        res.status(500).json({ error: 'sommething went wrong!!' });
      }
    }
    exports.updateApplicationOfId=async (req, res) => {
      try {
        console.log("dwdwed")
        const job = await UserServices.updateApplicationOfId(req);
        if (!job) {
          return res.status(404).json({ error: 'this job does not exists ' });
        }
        res.json(job);
        console.log("resss")
      } catch (error) {
        res.status(500).json({ error: 'sommething went wrong!!' });
      }
    }
    exports.deleteApplication= async (req, res) => {
      try {
        const job = await UserServices.deleteApplication(req)
        if (!job) {
          return res.status(404).json({ error: 'this job does not exists' });
        }
        res.json({ message: 'Job deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'something went  wrong' });
      }
    }
    exports.getMyApplicationsByEmail=async (req, res) => {
      try {
        const email = req.params.email;
        const applications = await ApplicationModel.find({ email: email });
        res.json(applications);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve applications' });
      }
    }
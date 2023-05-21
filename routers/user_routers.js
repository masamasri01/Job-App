const router = require("express").Router();
const UserController = require('../controllers/user_controller');
const multer = require('multer');

const storage = multer.memoryStorage(); //for pdf resume
const upload = multer({ storage });


//CRUD OPS on jobs
router.post("/addJob",UserController.addJob);  //~~~~~~~create masri
router.get('/jobs/:id', UserController.getJobById); //~~~~~~~~retrieve odeh
router.put('/jobs/:id',UserController.updateJobOfId );//~~~~~update odeh
router.delete('/jobs/:id',UserController.deleteJob); // ~~~~delete  odeh


//odeh
router.get('/jobs',UserController.getJobs);   //get jobs./ search and  ex: jobs?jobTitle=engineer&location=new+york&minSalary=50000&maxSalary=100000' 
router.get('/getSavedJobs',UserController.getSavedJobs);  //odeh



/************job application  */

//CRUD OPS on applications
router.post('/apply', upload.single('resume'), UserController.addApplication); ///masri  
router.get('/applicaions/:id', UserController.getApplicationById); //~~~~~~~~retrieve // roaa
router.put('/applicaions/:id',UserController.updateApplicationOfId );//~~~~~update  //roaa
router.delete('/applicaions/:id',UserController.deleteApplication); // ~~~~delete  //roaa

//masri
router.get('/applications',UserController.getAllApplications);                 ///get applications 
router.get('/applications/:id/resume',UserController.getResumeOfSpecificApplication );  // get the resume and download for a specific application

//retrieve my applications by my email(its unique)
router.get('/applications/:email',UserController.getMyApplicationsByEmail); //roaa
  

module.exports = router;

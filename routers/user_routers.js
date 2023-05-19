const router = require("express").Router();
const UserController = require('../controllers/user_controller');
const multer = require('multer');

const storage = multer.memoryStorage(); //for pdf resume
const upload = multer({ storage });


//CRUD OPS on jobs
router.post("/addJob",UserController.addJob);  //~~~~~~~create
router.get('/jobs/:id', UserController.getJobById); //~~~~~~~~retrieve
router.put('/jobs/:id',UserController.updateJobOfId );//~~~~~update
router.delete('/jobs/:id',UserController.deleteJob); // ~~~~delete

router.get('/jobs',UserController.getJobs);   //get jobs./ search and  ex: jobs?jobTitle=engineer&location=new+york&minSalary=50000&maxSalary=100000' 
router.get('/getSavedJobs',UserController.getSavedJobs);  



/************job application  */

//CRUD OPS on applications
router.post('/apply', upload.single('resume'), UserController.addApplication); ///aply for a job (post) --create
router.get('/applicaions/:id', UserController.getApplicationById); //~~~~~~~~retrieve
router.put('/applicaions/:id',UserController.updateApplicationOfId );//~~~~~update
router.delete('/applicaions/:id',UserController.deleteApplication); // ~~~~delete


router.get('/applications',UserController.getAllApplications);                 ///get applications 
router.get('/applications/:id/resume',UserController.getResumeOfSpecificApplication );  // get the resume and download for a specific application

//retrieve my applications by my email(its unique)
router.get('/applications/:email',UserController.getMyApplicationsByEmail);
  

module.exports = router;
const router = require("express").Router();
const UserController = require('../controllers/user_controller');
const JobModel= require("../models/job_model")


router.post("/addJob",UserController.addJob);
//router.get('/jobs', UserController.getJobs);
//GET 'https://--/jobs?jobTitle=engineer&location=new+york&minSalary=50000&maxSalary=100000' \
//--header 'X-RapidAPI-Key: your-rapidapi-key'

router.get('/jobs',UserController.getJobs);
router.get('/getSavedJobs',UserController.getSavedJobs);
module.exports = router;
const router = require("express").Router();
const UserController = require('../controllers/user_controller');
router.post("/addJob",UserController.addJob);
router.get('/jobs', UserController.getJobs);
  
module.exports = router;
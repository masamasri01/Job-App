#Job-App
#Nodejs
Roaa Barq , Masa Abu Odeh and Masa Masri.

1- CRUD Operations: The API must implement basic CRUD operations on the database to enable the creation, retrieval, update, and deletion of job listings, and job applications.

* CRUD on jobs:
router.post("/addJob",UserController.addJob);  ///create.
![image](https://github.com/masamasri01/Job-App/assets/93089580/33bfad57-e3d1-4282-8470-fd6dab77b5b3)
![image](https://github.com/masamasri01/Job-App/assets/93089580/103834e1-6372-427a-996d-118236ae8f5b)



router.get('/jobs/:id', UserController.getJobById); //retrieve.
![image](https://github.com/masamasri01/Job-App/assets/93089580/1069e66a-c8c8-4821-bc62-d7858f99ed69)



router.put('/jobs/:id',UserController.updateJobOfId );//update.
![image](https://github.com/masamasri01/Job-App/assets/93089580/bb38ccf0-a26d-40f0-b633-c193ded53127)
![image](https://github.com/masamasri01/Job-App/assets/93089580/8ac75d24-f133-4faa-860a-fb274fc04693)

router.delete('/jobs/:id',UserController.deleteJob); //delete.
![image](https://github.com/masamasri01/Job-App/assets/93089580/ddc74217-f138-4884-a17e-9f6a68128fb7)
______________________________________________________________________________________________________
______________________________________________________________________________________________________
* Job Search Functionality: Job seekers will be able to search for jobs using filters such as 
job title, location, and salary range. They will also be able to save job searches for future 
reference.
http://localhost:3001/jobs?jobTitle=engineer&minSalary=50000&maxSalary=100000
ex1:.
![image](https://github.com/masamasri01/Job-App/assets/93089580/0ee21852-6604-4b42-8c44-7570fa46a599)
![image](https://github.com/masamasri01/Job-App/assets/93089580/bd171a48-1fd7-4f6a-84fb-7c8cebaa5f77)
ex2:.

![image](https://github.com/masamasri01/Job-App/assets/93089580/94483766-0c63-4cf6-be54-3dd5bcb87953)

______________________________________________________________________________________________________
______________________________________________________________________________________________________
to be able to save job searches for future reference: 
jobs seaches are stored in savedJobs Collection.

 router.get('/getSavedJobs',UserController.getSavedJobs);  .
 http://localhost:3001/getSavedJobs.
![image](https://github.com/masamasri01/Job-App/assets/93089580/5d2201fa-7bbc-4f80-ba54-a76778447568)

______________________________________________________________________________________________________
______________________________________________________________________________________________________
*Applying for Jobs

1- CRUD ops on applications:.
1-create =apply for a job using POST.
http://localhost:3001/apply.
applying and adding pdf resumes using multer, and its stored as binary data =buffer.
 ![image](https://github.com/masamasri01/Job-App/assets/93089580/0ab4c892-a2b4-49a9-a08d-7916ece198cc)
 ![image](https://github.com/masamasri01/Job-App/assets/93089580/4877962c-69d5-4943-a63a-847a010b69fb)

2- retrieve ,GET.
http://localhost:3001/applicaions/64675c45748f32db9b42bd5b.
![image](https://github.com/masamasri01/Job-App/assets/93089580/e4da14c8-09a4-4bd2-b9ef-fc07a07c7d74)

3-update ,PUT.
![image](https://github.com/masamasri01/Job-App/assets/93089580/af0425b6-f242-41cc-b629-67d23848a8c9)

![image](https://github.com/masamasri01/Job-App/assets/93089580/d8fcab5f-30f1-41d2-a52a-88d0170e5d2c)





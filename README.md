#Job-App.
Nodejs & MongoDB.

Roaa Barq , Masa Abu Odeh and Masa Masri.

* npm packages used:.<br />
  1-"body-parser".<br />
  2-"express".<br />
  3-"mongoose".<br />
  3-"multer".<br />
  ____________________<br />
* Models:.<br />
  Application Model.<br />
  Job Model.<br />
  Saved Jobs Model<br />
  ____________________<br />
 *  How our code execute? <br />

*index.js -> app.js -> router -> controller -> services.<br />
In controllers, We have function that handle request & response.<br />
In services, all the database operation happens like fetching, Insertion, Deletion.<br />
  

1- CRUD Operations: The API must implement basic CRUD operations on the database to enable the creation, retrieval, update, and deletion of job listings, and job applications.<br />

*CRUD on jobs:<br />
router.post("/addJob",UserController.addJob);  ///create.<br />
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
*Job Listings:.<br />
Get http://localhost:3001/jobs.
![image](https://github.com/masamasri01/Job-App/assets/93089580/cea28bb8-6fe9-4f5c-bda4-2e3ca29559e5)

______________________________________________________________________________________________________
______________________________________________________________________________________________________
*Job Search Functionality: Job seekers will be able to search for jobs using filters such as 
job title, location, and salary range. They will also be able to save job searches for future 
reference.<br />
http://localhost:3001/jobs?jobTitle=engineer&minSalary=50000&maxSalary=100000
ex1:.<br />
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

1- CRUD ops on applications:.<br />
1-create =apply for a job using POST.<br />
http://localhost:3001/apply.<br />
applying and adding pdf resumes using multer, and its stored as binary data =buffer.<br />
 ![image](https://github.com/masamasri01/Job-App/assets/93089580/0ab4c892-a2b4-49a9-a08d-7916ece198cc)
 ![image](https://github.com/masamasri01/Job-App/assets/93089580/4877962c-69d5-4943-a63a-847a010b69fb)

2- retrieve ,GET.<br />
http://localhost:3001/applicaions/64675c45748f32db9b42bd5b.
![image](https://github.com/masamasri01/Job-App/assets/93089580/e4da14c8-09a4-4bd2-b9ef-fc07a07c7d74)

3-update ,PUT.<br />
![image](https://github.com/masamasri01/Job-App/assets/93089580/af0425b6-f242-41cc-b629-67d23848a8c9)

![image](https://github.com/masamasri01/Job-App/assets/93089580/d8fcab5f-30f1-41d2-a52a-88d0170e5d2c)

4- delete.<br />
![image](https://github.com/masamasri01/Job-App/assets/93089580/937bf6e8-d9a8-44e7-b1fc-135f6aa97bc5)
______________________________________________________________________________________________________
______________________________________________________________________________________________________
*get all Applications:.
router.get('/applications',UserController.getAllApplications);.
![image](https://github.com/masamasri01/Job-App/assets/93089580/d8147b68-7f9c-40bf-be1b-1934099ef700)


*in order to download a resume of specific application as pdf file, by its id:.
router.get('/applications/:id/resume',UserController.getResumeOfSpecificApplication ).
![image](https://github.com/masamasri01/Job-App/assets/93089580/c1cd2b5d-f3bc-43ae-a111-4243b19604fc)


______________________________________________________________________________________________________
______________________________________________________________________________________________________
if a user wants to retrieve all its applications, by its email since email is defined unique.
router.get('/applications/:email',UserController.getMyApplicationsByEmail);

![image](https://github.com/masamasri01/Job-App/assets/93089580/65439dd5-70f2-448d-8bf1-3d7f670c2e7b)

![image](https://github.com/masamasri01/Job-App/assets/93089580/55dae1d8-47d3-41f7-8ba1-12dfb6588f56)



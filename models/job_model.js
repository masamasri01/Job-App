const db = require('../db');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
    
     
    jobTitle: {
        type: String,
     },
    description: {
        type: String,
    },
    requirements: {
        type: Array,
    }, 
     salaryRange: {
         type: Number,
 }}
    
);


const JobModel = db.model('job',jobSchema);
module.exports = JobModel;
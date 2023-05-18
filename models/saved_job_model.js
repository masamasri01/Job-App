const db = require('../db');
const mongoose = require('mongoose');
const JobModel = require('./job_model');
const { Schema } = mongoose;

const savedJobSchema = new Schema({
    jobId: {
            type:Schema.Types.ObjectId,
                ref: JobModel.modelName
        },
 });


const SavedJobModel = db.model('savedJob',savedJobSchema);
module.exports = SavedJobModel;
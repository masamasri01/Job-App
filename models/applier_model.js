const db = require('../db');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const applierSchema = new Schema({
    
     
    email: {
        type: String,
     },
     phone:{
        type:String
     },
     name:{
        type:String
     },

}
    
);


const ApplierModel = db.model('applier',applierSchema);
module.exports = ApplierModel;
///Voy a modelar los datos usando Moongose

const mongoose = require('mongoose');
const {Schema} = mongoose;

const activitiesSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    start_date:{type:Date, required:true},
    finish_date:{type:Date, required:false},
    project_id:{type:String, required:true},
    project_name:{type:String, required:true}
    
})



module.exports = mongoose.model('ActivitiesSchema', activitiesSchema);
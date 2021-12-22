///Voy a modelar los datos usando Moongose

const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    start_date:{type:Date, required:true},
    finish_date:{type:Date, required:false}
    
})



module.exports = mongoose.model('Task', TaskSchema);
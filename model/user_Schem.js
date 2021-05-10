const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    first_name:{type:String,require:true},
    last_name:{type:String,required:true},
    email : {type:String,required : true, unique: true},
    user_id : {type: String, required : true},
    date : {
        type:Date,
        default: Date.now
    }
})

// Compile model from schema
var Users = mongoose.model('user',userschema);
module.exports = Users;
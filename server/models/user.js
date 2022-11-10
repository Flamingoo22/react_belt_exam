const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, '{PATH} must be present'],
        minlength: [3, '{PATH} must be at least 3 characters long.']
    },
    lastName:{
        type:String,
        required:[true, '{PATH} must be present'],
        minlength: [3, '{PATH} must be at least 3 characters long.']
    },
    email:{
        type:String,
        unique: true,
        match: [/.+\@.+\..+/, '{PATH} is invalid'],
        required:[true, '{PATH} must be present'],
        minlength: [3, '{PATH} must be at least 3 characters long.']
    },
    password:{
        type:String,
        required:[true, '{PATH} must be present'],
        minlength: [8, '{PATH} must be at least 3 characters long.']
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
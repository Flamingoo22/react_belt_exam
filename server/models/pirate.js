const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, '{PATH} must be present'],
        minlength: [3, '{PATH} must be at least 3 characters long.']
    },
    imageUrl:{
        type: String,
        required:[true, '{PATH} must be present']
    },
    numChest:{
        type: Number,
        required:[true, '{PATH} must be present'],
        min: [0, '{PATH} cannot be negative value.']
    },
    catchPhrase:{
        type:String,
        required:[true, '{PATH} must be present'],
        minlength: [3, '{PATH} must be at least 3 characters long.']
    },
    position:{
        type:String,
        required:[true, '{PATH} must be present']
    },
    isPegLeg:{
        type:Boolean,
        default:false,
    },
    isEyePatch:{
        type:Boolean,
        default:false,
    },
    isHookHand:{
        type:Boolean,
        default:false,
    }
}, {timestamps: true})

const Pirate = mongoose.model('Pirate', PirateSchema);
module.exports = Pirate;
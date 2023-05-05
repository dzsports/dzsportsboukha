const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    typeOfuser :{ 
        type:String,
        required: true
    },
    name :{ 
        type:String,
        required: true
    },
    email : { 
        type:String,
        required: true
    },
    password : { 
        type:String,
        required: true
    },
    phone:{ 
        type:String,
        required: true
    },
    birthday:{ 
        type:String,
        required: true
    },
    wilaya:{ 
        type:String,
        required: true
    },
    daira:{ 
        type:String,
        required: true
    },
    baladia:{ 
        type:String,
        required: true
    },
    sport:{ 
        type:String,
        required: true
    },
    gender: {
        type:String,
        required: true
    }
});

const User = mongoose.model('user', userSchema);

module.exports = {User};
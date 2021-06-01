const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: {
        type: String,
    },
    password: {
        type: String,
    },
    // locations: {
    //     type: Object,
    //     required: false,
    // }

}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema, 'User_Profiles');

module.exports = User;
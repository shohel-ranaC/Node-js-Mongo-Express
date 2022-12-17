const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    // password: {
    //     type: String,
    //     require: true,
    // },
     googleId: {
        type: String,
        require: true,
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
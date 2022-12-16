const mongoose = require('mongoose');
// const encrypt = require('mongoose-encryption');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
});

// encrypt
// const encKey = process.env.ENC_KEY;
// // encrypt age regardless of any other options. name and _id will be left unencrypted
// userSchema.plugin(encrypt, {
//      secret: encKey,
//      encryptedFields: ['password'],
//     });


module.exports = mongoose.model('user', userSchema);
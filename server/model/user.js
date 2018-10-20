const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: function(text) {
                return text.indexOf('@') !== 0 || (text.indexOf('.ru') !== 0 && text.indexOf('.com') !== 0);
            },
            message: 'Email must have correct url'
        },
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
